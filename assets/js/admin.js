/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/components/collapse-mini/CxVuiCollapseMini.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/components/collapse-mini/CxVuiCollapseMini.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'cx-vui-collapse-mini',
  props: {
    withPanel: {
      type: Boolean,
      default: false
    },
    initialActive: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: 'Collapse Mini'
    },
    desc: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {
      isActive: false
    };
  },
  created: function created() {
    this.isActive = this.initialActive;
  },
  methods: {
    collapse: function collapse() {
      this.isActive = !this.isActive;
    }
  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/addons/AddonsPage.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/addons/AddonsPage.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_AddonItem_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/AddonItem.vue */ "./admin/pages/addons/components/AddonItem.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _wp$hooks = wp.hooks,
    applyFilters = _wp$hooks.applyFilters,
    doAction = _wp$hooks.doAction;
window.jfbEventBus = new Vue();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'jfb-addons',
  components: {
    AddonItem: _components_AddonItem_vue__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data() {
    return {
      allAddons: window.JetFBPageConfig.allAddons || {},
      licenseList: window.JetFBPageConfig.licenseList || [],
      licenseKey: window.JetFBPageConfig.licenseKey || '3505c79bf1765c293ae96e5dde177d77',
      licenseActivated: false,
      licensePopupVisible: false,
      licenseProccesingState: false,
      licenseAjaxAction: null,
      checkUpdatesAction: null,
      checkUpdatesProcessed: false,
      proccesingState: false
    };
  },
  mounted: function mounted() {
    window.jfbEventBus.$on('updateAddonData', this.updateAddonData);
  },
  computed: {
    isLicenseActivated: function isLicenseActivated() {
      return 0 !== this.licenseList.length;
    },
    licenseActionType: function licenseActionType() {
      return !this.isLicenseActivated ? 'activate_license' : 'deactivate_license';
    }
  },
  methods: {
    updateAddonData: function updateAddonData(data) {
      var slug = data.slug,
          addonData = data.addonData;
      this.allAddons[slug] = Object.assign({}, this.allAddons[slug], addonData);
      this.proccesingState = true;
      setTimeout(function () {
        window.location.reload();
      }, 1000);
    },
    licenseAction: function licenseAction() {
      var self = this;
      this.licenseProccesingState = true;
      self.licenseAjaxAction = jQuery.ajax({
        type: 'POST',
        url: window.JetFBPageConfig.ajaxUrl,
        dataType: 'json',
        data: {
          action: 'jfb_license_action',
          data: {
            license: self.licenseKey,
            action: self.licenseActionType
          }
        },
        beforeSend: function beforeSend(jqXHR, ajaxSettings) {
          if (null !== self.licenseAjaxAction) {
            self.licenseAjaxAction.abort();
          }
        },
        success: function success(responce, textStatus, jqXHR) {
          self.licenseProccesingState = false;

          if (responce.success) {
            self.$CXNotice.add({
              message: responce.message,
              type: 'success',
              duration: 4000
            });
            var licenseData = responce.data;
            licenseData['license_key'] = self.licenseKey;

            switch (self.licenseActionType) {
              case 'activate_license':
                self.licenseList.push(licenseData);
                break;

              case 'deactivate_license':
                self.licenseList = self.licenseList.filter(function (licenseData) {
                  return self.licenseKey !== licenseData['license_key'];
                });
                self.licenseKey = '';
                break;
            }
          } else {
            self.$CXNotice.add({
              message: responce.message,
              type: 'error',
              duration: 4000
            });
          }
        }
      });
    },
    checkPluginsUpdate: function checkPluginsUpdate() {
      var self = this;
      self.checkUpdatesAction = jQuery.ajax({
        type: 'POST',
        url: window.JetFBPageConfig.ajaxUrl,
        dataType: 'json',
        data: {
          action: 'jfb_license_service_action',
          data: {
            action: 'check-plugin-update'
          }
        },
        beforeSend: function beforeSend(jqXHR, ajaxSettings) {
          if (null !== self.checkUpdatesAction) {
            self.checkUpdatesAction.abort();
          }

          self.checkUpdatesProcessed = true;
        },
        success: function success(responce, textStatus, jqXHR) {
          self.checkUpdatesProcessed = false;

          if (responce.success) {
            self.$CXNotice.add({
              message: responce.message,
              type: 'success',
              duration: 4000
            });
            self.proccesingState = true;
            setTimeout(function () {
              window.location.reload();
            }, 1000);
          } else {
            self.$CXNotice.add({
              message: responce.message,
              type: 'error',
              duration: 4000
            });
          }
        }
      });
    },
    addLicense: function addLicense(licenseData) {
      this.licenseList.push(licenseData);
      self.proccesingState = true;
      setTimeout(function () {
        window.location.reload();
      }, 3000);
    },
    removeLicense: function removeLicense(licenceKey) {
      var removingIndex = false;

      for (var licenceIndex in this.licenseList) {
        var licenseData = this.licenseList[licenceIndex];

        if (licenseData['licenseKey'] === licenceKey) {
          removingIndex = licenceIndex;
          break;
        }
      }

      if (removingIndex) {
        this.licenseList.splice(removingIndex, 1);
      }

      this.licensePopupVisible = false;
      setTimeout(function () {
        window.location.reload();
      }, 500);
    }
  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/addons/components/AddonItem.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/addons/components/AddonItem.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'addon-item',
  props: {
    addonData: Object
  },
  data: function data() {
    return {
      actionPlugin: false,
      actionPluginRequest: null,
      actionPluginProcessed: false,
      updatePluginProcessed: false
    };
  },
  computed: {
    classList: function classList() {
      return ['jfb-addons__item', this.updateAvaliable ? 'update-avaliable' : false, this.activateAvaliable ? 'activate-avaliable' : false];
    },
    learnMoreAvaliable: function learnMoreAvaliable() {
      return !this.$parent.isLicenseActivated ? true : false;
    },
    installActionAvaliable: function installActionAvaliable() {
      return !this.addonData['isInstalled'] && this.$parent.isLicenseActivated ? true : false;
    },
    activateActionAvaliable: function activateActionAvaliable() {
      return this.addonData['isInstalled'] && !this.addonData['isActivated'] ? true : false;
    },
    deactivateActionAvaliable: function deactivateActionAvaliable() {
      return this.addonData['isInstalled'] && this.addonData['isActivated'] ? true : false;
    },
    updateActionAvaliable: function updateActionAvaliable() {
      return this.addonData['updateAvaliable'] ? true : false;
    },
    proccesingState: function proccesingState() {
      return this.actionPluginProcessed || this.updatePluginProcessed;
    }
  },
  methods: {
    installPlugin: function installPlugin() {
      this.actionPlugin = 'install';
      this.pluginAction();
    },
    deactivatePlugin: function deactivatePlugin() {
      this.actionPlugin = 'deactivate';
      this.pluginAction();
    },
    activatePlugin: function activatePlugin() {
      this.actionPlugin = 'activate';
      this.pluginAction();
    },
    updatePlugin: function updatePlugin() {
      if (this.updateActionAvaliable) {
        this.actionPlugin = 'update';
        this.pluginAction();
      }
    },
    pluginAction: function pluginAction() {
      var self = this;
      self.actionPluginRequest = jQuery.ajax({
        type: 'POST',
        url: window.JetFBPageConfig.ajaxUrl,
        dataType: 'json',
        data: {
          action: 'jfb_addon_action',
          data: {
            action: self.actionPlugin,
            plugin: self.addonData['slug']
          }
        },
        beforeSend: function beforeSend(jqXHR, ajaxSettings) {
          if (null !== self.actionPluginRequest) {
            self.actionPluginRequest.abort();
          }

          self.actionPluginProcessed = true;
        },
        success: function success(responce, textStatus, jqXHR) {
          self.actionPluginProcessed = false;

          if (responce.success) {
            self.$CXNotice.add({
              message: responce.message,
              type: 'success',
              duration: 4000
            });
            window.jfbEventBus.$emit('updateAddonData', {
              'slug': self.addonData['slug'],
              'addonData': responce.data
            });
          } else {
            self.$CXNotice.add({
              message: responce.message,
              type: 'error',
              duration: 4000
            });
          }
        }
      });
    }
  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/settings/SettingsPage.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/settings/SettingsPage.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tabs_captcha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs/captcha */ "./admin/pages/settings/tabs/captcha/index.js");
/* harmony import */ var _tabs_mailchimp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs/mailchimp */ "./admin/pages/settings/tabs/mailchimp/index.js");
/* harmony import */ var _tabs_getresponse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs/getresponse */ "./admin/pages/settings/tabs/getresponse/index.js");
/* harmony import */ var _tabs_activecampaign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs/activecampaign */ "./admin/pages/settings/tabs/activecampaign/index.js");
/* harmony import */ var _tabs_payments_gateways__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs/payments-gateways */ "./admin/pages/settings/tabs/payments-gateways/index.js");
/* harmony import */ var _admin_mixins_SaveTabByAjax__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @admin/mixins/SaveTabByAjax */ "./admin/mixins/SaveTabByAjax.js");
/* harmony import */ var _admin_mixins_GetIncoming__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @admin/mixins/GetIncoming */ "./admin/mixins/GetIncoming.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







var _wp$hooks = wp.hooks,
    applyFilters = _wp$hooks.applyFilters,
    doAction = _wp$hooks.doAction;
window.jfbEventBus = new Vue();
var settingTabs = applyFilters('jet.fb.register.settings-page.tabs', [_tabs_payments_gateways__WEBPACK_IMPORTED_MODULE_4__, _tabs_captcha__WEBPACK_IMPORTED_MODULE_0__, _tabs_mailchimp__WEBPACK_IMPORTED_MODULE_1__, _tabs_getresponse__WEBPACK_IMPORTED_MODULE_2__, _tabs_activecampaign__WEBPACK_IMPORTED_MODULE_3__]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'jfb-settings',
  data: function data() {
    return {
      activeTabSlug: settingTabs[0].component.name,
      tabs: settingTabs,
      loadingTab: {}
    };
  },
  mixins: [_admin_mixins_SaveTabByAjax__WEBPACK_IMPORTED_MODULE_5__.default, _admin_mixins_GetIncoming__WEBPACK_IMPORTED_MODULE_6__.default],
  created: function created() {
    var _this = this;

    jfbEventBus.$on('request-state', function (props) {
      var state = props.state,
          slug = props.slug;

      _this.$set(_this.loadingTab, slug, state === 'begin');
    });
  },
  methods: {
    onSaveTab: function onSaveTab(indexTab, tabSlug) {
      var currentTab = this.$refs.tabComponents[indexTab];
      this.saveByAjax(currentTab, tabSlug);
    }
  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/settings/gateways/paypal/PaypalTab.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/settings/gateways/paypal/PaypalTab.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./source */ "./admin/pages/settings/gateways/paypal/source.js");
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'paypal',
  props: {
    incoming: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      label: _source__WEBPACK_IMPORTED_MODULE_0__.label,
      help: _source__WEBPACK_IMPORTED_MODULE_0__.help,
      storage: {}
    };
  },
  created: function created() {
    this.storage = JSON.parse(JSON.stringify(this.incoming));
  },
  methods: {
    getRequestOnSave: function getRequestOnSave() {
      return {
        data: _objectSpread({}, this.storage)
      };
    }
  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/settings/tabs/activecampaign/ActiveCampaignTab.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/settings/tabs/activecampaign/ActiveCampaignTab.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./source */ "./admin/pages/settings/tabs/activecampaign/source.js");
//
//
//
//
//
//
//
//
//
//
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
  name: 'active-campaign-tab',
  props: {
    incoming: {
      type: Object,
      default: {}
    }
  },
  data: function data() {
    return {
      label: _source__WEBPACK_IMPORTED_MODULE_0__.label,
      help: _source__WEBPACK_IMPORTED_MODULE_0__.help,
      api_key: '',
      api_url: ''
    };
  },
  created: function created() {
    this.api_key = this.incoming.api_key || '';
    this.api_url = this.incoming.api_url || '';
  },
  methods: {
    getRequestOnSave: function getRequestOnSave() {
      return {
        data: {
          api_key: this.api_key,
          api_url: this.api_url
        }
      };
    }
  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/settings/tabs/captcha/CaptchaTab.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/settings/tabs/captcha/CaptchaTab.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./source */ "./admin/pages/settings/tabs/captcha/source.js");
//
//
//
//
//
//
//
//
//
//
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
  name: 'captcha-tab',
  props: {
    incoming: {
      type: Object,
      default: {}
    }
  },
  data: function data() {
    return {
      label: _source__WEBPACK_IMPORTED_MODULE_0__.label,
      help: _source__WEBPACK_IMPORTED_MODULE_0__.help,
      key: '',
      secret: ''
    };
  },
  created: function created() {
    this.key = this.incoming.key || '';
    this.secret = this.incoming.secret || '';
  },
  methods: {
    getRequestOnSave: function getRequestOnSave() {
      return {
        data: {
          secret: this.secret,
          key: this.key
        }
      };
    }
  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/settings/tabs/getresponse/GetResponseTab.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/settings/tabs/getresponse/GetResponseTab.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./source */ "./admin/pages/settings/tabs/getresponse/source.js");
//
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
  data: function data() {
    return {
      label: _source__WEBPACK_IMPORTED_MODULE_0__.label,
      help: _source__WEBPACK_IMPORTED_MODULE_0__.help,
      api_key: ''
    };
  },
  created: function created() {
    this.api_key = this.incoming.api_key || '';
  },
  methods: {
    getRequestOnSave: function getRequestOnSave() {
      return {
        data: {
          api_key: this.api_key
        }
      };
    }
  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/settings/tabs/mailchimp/MailChimpTab.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/settings/tabs/mailchimp/MailChimpTab.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./source */ "./admin/pages/settings/tabs/mailchimp/source.js");
//
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
  data: function data() {
    return {
      label: _source__WEBPACK_IMPORTED_MODULE_0__.label,
      help: _source__WEBPACK_IMPORTED_MODULE_0__.help,
      api_key: ''
    };
  },
  created: function created() {
    this.api_key = this.incoming.api_key || '';
  },
  methods: {
    getRequestOnSave: function getRequestOnSave() {
      return {
        data: {
          api_key: this.api_key
        }
      };
    }
  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/settings/tabs/payments-gateways/PaymentsGateways.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/settings/tabs/payments-gateways/PaymentsGateways.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _admin_components_collapse_mini_CxVuiCollapseMini__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @admin/components/collapse-mini/CxVuiCollapseMini */ "./admin/components/collapse-mini/CxVuiCollapseMini.vue");
/* harmony import */ var _source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./source */ "./admin/pages/settings/tabs/payments-gateways/source.js");
/* harmony import */ var _admin_mixins_SaveTabByAjax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @admin/mixins/SaveTabByAjax */ "./admin/mixins/SaveTabByAjax.js");
/* harmony import */ var _admin_mixins_GetIncoming__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @admin/mixins/GetIncoming */ "./admin/mixins/GetIncoming.js");
/* harmony import */ var _gateways_paypal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../gateways/paypal */ "./admin/pages/settings/gateways/paypal/index.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//





var applyFilters = wp.hooks.applyFilters;
var gatewaysTabs = applyFilters('jet.fb.register.gateways', [_gateways_paypal__WEBPACK_IMPORTED_MODULE_4__]);

var requestFunc = function requestFunc() {};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'payments-gateways',
  props: {
    incoming: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  components: {
    CxVuiCollapseMini: _admin_components_collapse_mini_CxVuiCollapseMini__WEBPACK_IMPORTED_MODULE_0__.default
  },
  mixins: [_admin_mixins_SaveTabByAjax__WEBPACK_IMPORTED_MODULE_2__.default, _admin_mixins_GetIncoming__WEBPACK_IMPORTED_MODULE_3__.default],
  data: function data() {
    return {
      label: _source__WEBPACK_IMPORTED_MODULE_1__.label,
      help: _source__WEBPACK_IMPORTED_MODULE_1__.help,
      storage: JSON.parse(JSON.stringify(this.incoming)),
      gateways: gatewaysTabs,
      loadingGateways: {}
    };
  },
  created: function created() {
    var _this = this;

    jfbEventBus.$on('request-state', function (props) {
      var state = props.state,
          slug = props.slug;

      _this.$set(_this.loadingGateways, slug, state === 'begin');
    });
    requestFunc = _.debounce(function () {
      _this.saveByAjax(_this, _this.$options.name);
    }, 1000);
  },
  methods: {
    changeVal: function changeVal(name, value) {
      this.$set(this.storage, name, value);
      requestFunc();
    },
    onSaveGateway: function onSaveGateway(indexTab, tabSlug) {
      var current = this.$refs.gateways[indexTab];
      this.saveByAjax(current, tabSlug);
    },
    getRequestOnSave: function getRequestOnSave() {
      return {
        data: _objectSpread({}, this.storage)
      };
    }
  }
});

/***/ }),

/***/ "./admin/mixins/GetIncoming.js":
/*!*************************************!*\
  !*** ./admin/mixins/GetIncoming.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  methods: {
    getIncoming: function getIncoming(tabName) {
      return window.JetFBPageConfig[tabName];
    }
  }
});

/***/ }),

/***/ "./admin/mixins/SaveTabByAjax.js":
/*!***************************************!*\
  !*** ./admin/mixins/SaveTabByAjax.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  methods: {
    saveByAjax: function saveByAjax(currentTab, tabSlug) {
      var self = this;

      var ajaxRequest = _objectSpread(_objectSpread({}, {
        url: window.ajaxurl,
        type: 'POST',
        dataType: 'json'
      }), currentTab.getRequestOnSave());

      ajaxRequest.data = _objectSpread({
        action: "jet_fb_save_tab__".concat(tabSlug)
      }, ajaxRequest.data);
      jfbEventBus.$emit('request-state', {
        state: 'begin',
        slug: tabSlug
      });
      jQuery.ajax(ajaxRequest).done(function (response) {
        if ('function' === typeof currentTab.onSaveDone) {
          currentTab.onSaveDone(response);
        } else {
          if (response.success) {
            self.$CXNotice.add({
              message: response.data.message,
              type: 'success',
              duration: 5000
            });

            if ('function' === typeof currentTab.onSaveDoneSuccess) {
              currentTab.onSaveDoneSuccess(response);
            }
          } else {
            self.$CXNotice.add({
              message: response.data.message,
              type: 'error',
              duration: 5000
            });

            if ('function' === typeof currentTab.onSaveDoneError) {
              currentTab.onSaveDoneError(response);
            }
          }
        }

        jfbEventBus.$emit('request-state', {
          state: 'end',
          slug: tabSlug
        });
      }).fail(function (jqXHR, textStatus, errorThrown) {
        if ('function' === typeof currentTab.onSaveFail) {
          currentTab.onSaveFail(jqXHR, textStatus, errorThrown);
        } else {
          self.$CXNotice.add({
            message: errorThrown,
            type: 'error',
            duration: 5000
          });
        }

        jfbEventBus.$emit('request-state', {
          state: 'end',
          slug: tabSlug
        });
      });
    }
  }
});

/***/ }),

/***/ "./admin/pages/settings/gateways/paypal/index.js":
/*!*******************************************************!*\
  !*** ./admin/pages/settings/gateways/paypal/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "title": () => (/* binding */ title),
/* harmony export */   "component": () => (/* binding */ component)
/* harmony export */ });
/* harmony import */ var _PaypalTab_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaypalTab.vue */ "./admin/pages/settings/gateways/paypal/PaypalTab.vue");

var __ = wp.i18n.__;

var title = __('PayPal Gateway API', 'jet-form-builder');

var component = _PaypalTab_vue__WEBPACK_IMPORTED_MODULE_0__.default;


/***/ }),

/***/ "./admin/pages/settings/gateways/paypal/source.js":
/*!********************************************************!*\
  !*** ./admin/pages/settings/gateways/paypal/source.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "label": () => (/* binding */ label),
/* harmony export */   "help": () => (/* binding */ help)
/* harmony export */ });
var __ = wp.i18n.__;
var label = {
  client_id: __('Client ID', 'jet-form-builder'),
  secret: __('Secret Key', 'jet-form-builder')
};
var help = {};


/***/ }),

/***/ "./admin/pages/settings/tabs/activecampaign/index.js":
/*!***********************************************************!*\
  !*** ./admin/pages/settings/tabs/activecampaign/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "title": () => (/* binding */ title),
/* harmony export */   "component": () => (/* binding */ component)
/* harmony export */ });
/* harmony import */ var _ActiveCampaignTab_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActiveCampaignTab.vue */ "./admin/pages/settings/tabs/activecampaign/ActiveCampaignTab.vue");

var __ = wp.i18n.__;

var title = __('ActiveCampaign API', 'jet-form-builder');

var component = _ActiveCampaignTab_vue__WEBPACK_IMPORTED_MODULE_0__.default;


/***/ }),

/***/ "./admin/pages/settings/tabs/activecampaign/source.js":
/*!************************************************************!*\
  !*** ./admin/pages/settings/tabs/activecampaign/source.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "label": () => (/* binding */ label),
/* harmony export */   "help": () => (/* binding */ help)
/* harmony export */ });
var __ = wp.i18n.__;
var label = {
  api_key: __('API Key', 'jet-form-builder'),
  api_url: __('API URL', 'jet-form-builder')
};
var help = {
  apiPref: __('How to obtain your ActiveCampaign API URL and Key? More info'),
  apiLinkLabel: __('here'),
  apiLink: 'https://help.activecampaign.com/hc/en-us/articles/207317590-Getting-started-with-the-API'
};


/***/ }),

/***/ "./admin/pages/settings/tabs/captcha/index.js":
/*!****************************************************!*\
  !*** ./admin/pages/settings/tabs/captcha/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "title": () => (/* binding */ title),
/* harmony export */   "component": () => (/* binding */ component)
/* harmony export */ });
/* harmony import */ var _CaptchaTab_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CaptchaTab.vue */ "./admin/pages/settings/tabs/captcha/CaptchaTab.vue");

var __ = wp.i18n.__;

var title = __('Captcha Settings', 'jet-form-builder');

var component = _CaptchaTab_vue__WEBPACK_IMPORTED_MODULE_0__.default;


/***/ }),

/***/ "./admin/pages/settings/tabs/captcha/source.js":
/*!*****************************************************!*\
  !*** ./admin/pages/settings/tabs/captcha/source.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "label": () => (/* binding */ label),
/* harmony export */   "help": () => (/* binding */ help)
/* harmony export */ });
var __ = wp.i18n.__;
var label = {
  key: __('Site Key', 'jet-form-builder'),
  secret: __('Secret Key', 'jet-form-builder')
};
var help = {
  apiPref: __('Register reCAPTCHA v3 keys'),
  apiLinkLabel: __('here'),
  apiLink: 'https://www.google.com/recaptcha/admin/create'
};


/***/ }),

/***/ "./admin/pages/settings/tabs/getresponse/index.js":
/*!********************************************************!*\
  !*** ./admin/pages/settings/tabs/getresponse/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "title": () => (/* binding */ title),
/* harmony export */   "component": () => (/* binding */ component)
/* harmony export */ });
/* harmony import */ var _GetResponseTab_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GetResponseTab.vue */ "./admin/pages/settings/tabs/getresponse/GetResponseTab.vue");

var __ = wp.i18n.__;

var title = __('GetResponse API', 'jet-form-builder');

var component = _GetResponseTab_vue__WEBPACK_IMPORTED_MODULE_0__.default;


/***/ }),

/***/ "./admin/pages/settings/tabs/getresponse/source.js":
/*!*********************************************************!*\
  !*** ./admin/pages/settings/tabs/getresponse/source.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "label": () => (/* binding */ label),
/* harmony export */   "help": () => (/* binding */ help)
/* harmony export */ });
var __ = wp.i18n.__;
var label = {
  api_key: __('API Key', 'jet-form-builder')
};
var help = {
  apiPref: __('How to obtain your GetResponse API Key? More info'),
  apiLinkLabel: __('here'),
  apiLink: 'https://app.getresponse.com/api'
};


/***/ }),

/***/ "./admin/pages/settings/tabs/mailchimp/index.js":
/*!******************************************************!*\
  !*** ./admin/pages/settings/tabs/mailchimp/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "title": () => (/* binding */ title),
/* harmony export */   "component": () => (/* binding */ component)
/* harmony export */ });
/* harmony import */ var _MailChimpTab_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MailChimpTab.vue */ "./admin/pages/settings/tabs/mailchimp/MailChimpTab.vue");

var __ = wp.i18n.__;

var title = __('MailChimp API', 'jet-form-builder');

var component = _MailChimpTab_vue__WEBPACK_IMPORTED_MODULE_0__.default;


/***/ }),

/***/ "./admin/pages/settings/tabs/mailchimp/source.js":
/*!*******************************************************!*\
  !*** ./admin/pages/settings/tabs/mailchimp/source.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "label": () => (/* binding */ label),
/* harmony export */   "help": () => (/* binding */ help)
/* harmony export */ });
var __ = wp.i18n.__;
var label = {
  api_key: __('API Key', 'jet-form-builder')
};
var help = {
  apiPref: __('How to obtain your MailChimp API Key? More info'),
  apiLinkLabel: __('here'),
  apiLink: 'https://mailchimp.com/help/about-api-keys/'
};


/***/ }),

/***/ "./admin/pages/settings/tabs/payments-gateways/index.js":
/*!**************************************************************!*\
  !*** ./admin/pages/settings/tabs/payments-gateways/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "title": () => (/* binding */ title),
/* harmony export */   "component": () => (/* binding */ component),
/* harmony export */   "displayButton": () => (/* binding */ displayButton)
/* harmony export */ });
/* harmony import */ var _PaymentsGateways_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaymentsGateways.vue */ "./admin/pages/settings/tabs/payments-gateways/PaymentsGateways.vue");

var __ = wp.i18n.__;

var title = __('Payments Gateways', 'jet-form-builder');

var component = _PaymentsGateways_vue__WEBPACK_IMPORTED_MODULE_0__.default;
var displayButton = false;


/***/ }),

/***/ "./admin/pages/settings/tabs/payments-gateways/source.js":
/*!***************************************************************!*\
  !*** ./admin/pages/settings/tabs/payments-gateways/source.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "label": () => (/* binding */ label),
/* harmony export */   "help": () => (/* binding */ help)
/* harmony export */ });
var __ = wp.i18n.__;
var label = {
  use_gateways: __('Enable Gateways', 'jet-form-builder'),
  enable_test_mode: __('Enable Test Mode', 'jet-form-builder')
};
var help = {
  enable_test_mode: __("This option takes precedence over the <code>jet-form-builder/gateways/paypal/sandbox-mode</code> filter. \n\t\tAs of right now, works only for PayPal payment system", 'jet-form-builder'),
  use_gateways: __("Activate payment gateways for the forms. This option takes precedence over the \n\t\t<code>jet-form-builder/allow-gateways</code> filter", 'jet-form-builder')
};


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/addons/AddonsPage.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/addons/AddonsPage.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".proccesing-state {\n  opacity: 0.5;\n  pointer-events: none;\n}\n.jfb-addons-page__inner {\n  padding: 30px;\n  height: 100%;\n}\n.jfb-addons-page__header {\n  padding-bottom: 20px;\n  border-bottom: 1px solid #DCDCDD;\n  margin-bottom: 20px;\n}\n.jfb-addons-page__header-controls {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n.jfb-addons-page__header-controls > .cx-vui-button {\n  margin-left: 10px;\n}\n.jfb-addons-page .cx-vui-button {\n  font-size: 13px;\n  font-weight: 400;\n  background-color: transparent;\n}\n.jfb-addons-page .cx-vui-button .button-icon {\n  margin-right: 5px;\n}\n.jfb-addons-page .cx-vui-button--style-accent {\n  color: #007cba;\n  box-shadow: inset 0 0 0 1px #007cba;\n}\n.jfb-addons-page .cx-vui-button--style-accent .button-icon path {\n  fill: #007cba;\n}\n.jfb-addons-page .cx-vui-button__content > span {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.jfb-addons-page .cx-vui-popup__header {\n  padding-bottom: 15px;\n  border-bottom: 1px solid #DCDCDD;\n  margin-bottom: 30px;\n}\n.jfb-addons-page .cx-vui-popup__header-title {\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 36px;\n  color: #23282D;\n}\n.jfb-addons-page__license-form {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: stretch;\n}\n.jfb-addons-page__license-form > span {\n  margin-bottom: 10px;\n}\n.jfb-addons-page__license-input {\n  margin-bottom: 10px;\n}", "",{"version":3,"sources":["webpack://./admin/pages/addons/AddonsPage.vue","webpack://./../AddonsPage.vue"],"names":[],"mappings":"AAiSA;EACC,YAAA;EACA,oBAAA;AChSD;ADoSC;EACC,aAAA;EACA,YAAA;ACjSF;ADoSC;EACC,oBAAA;EACA,gCAAA;EACA,mBAAA;AClSF;ADqSC;EACC,aAAA;EACA,yBAAA;EACA,mBAAA;ACnSF;ADqSE;EACC,iBAAA;ACnSH;ADuSC;EACC,eAAA;EACA,gBAAA;EACA,6BAAA;ACrSF;ADuSE;EACC,iBAAA;ACrSH;ADwSE;EACC,cAAA;EACA,mCAAA;ACtSH;ADySI;EACC,aAAA;ACvSL;AD6SG;EACC,aAAA;EACA,uBAAA;EACA,mBAAA;AC3SJ;ADiTE;EACC,oBAAA;EACA,gCAAA;EACA,mBAAA;AC/SH;ADkTE;EACC,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cAAA;AChTH;ADwTC;EACC,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,oBAAA;ACtTF;ADwTE;EACC,mBAAA;ACtTH;AD0TC;EACC,mBAAA;ACxTF","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.proccesing-state {\n\topacity: 0.5;\n\tpointer-events: none;\n}\n\n.jfb-addons-page {\n\t&__inner {\n\t\tpadding: 30px;\n\t\theight: 100%;\n\t}\n\n\t&__header {\n\t\tpadding-bottom: 20px;\n\t\tborder-bottom: 1px solid #DCDCDD;\n\t\tmargin-bottom: 20px;\n\t}\n\n\t&__header-controls {\n\t\tdisplay: flex;\n\t\tjustify-content: flex-end;\n\t\talign-items: center;\n\n\t\t> .cx-vui-button {\n\t\t\tmargin-left: 10px;\n\t\t}\n\t}\n\n\t.cx-vui-button {\n\t\tfont-size: 13px;\n\t\tfont-weight: 400;\n\t\tbackground-color: transparent;\n\n\t\t.button-icon {\n\t\t\tmargin-right: 5px;\n\t\t}\n\n\t\t&--style-accent {\n\t\t\tcolor: #007cba;\n\t\t\tbox-shadow: inset 0 0 0 1px #007cba;\n\n\t\t\t.button-icon {\n\t\t\t\tpath {\n\t\t\t\t\tfill: #007cba;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t&__content {\n\t\t\t> span {\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: center;\n\t\t\t\talign-items: center;\n\t\t\t}\n\t\t}\n\t}\n\n\t.cx-vui-popup {\n\t\t&__header {\n\t\t\tpadding-bottom: 15px;\n\t\t\tborder-bottom: 1px solid #DCDCDD;\n\t\t\tmargin-bottom: 30px;\n\t\t}\n\n\t\t&__header-title {\n\t\t\tfont-weight: 500;\n\t\t\tfont-size: 24px;\n\t\t\tline-height: 36px;\n\t\t\tcolor: #23282D;\n\t\t}\n\t}\n\n\t&__license-popup {\n\n\t}\n\n\t&__license-form {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tjustify-content: flex-start;\n\t\talign-items: stretch;\n\n\t\t> span {\n\t\t\tmargin-bottom: 10px;\n\t\t}\n\t}\n\n\t&__license-input {\n\t\tmargin-bottom: 10px;\n\t}\n}\n\n",".proccesing-state {\n  opacity: 0.5;\n  pointer-events: none;\n}\n\n.jfb-addons-page__inner {\n  padding: 30px;\n  height: 100%;\n}\n.jfb-addons-page__header {\n  padding-bottom: 20px;\n  border-bottom: 1px solid #DCDCDD;\n  margin-bottom: 20px;\n}\n.jfb-addons-page__header-controls {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n.jfb-addons-page__header-controls > .cx-vui-button {\n  margin-left: 10px;\n}\n.jfb-addons-page .cx-vui-button {\n  font-size: 13px;\n  font-weight: 400;\n  background-color: transparent;\n}\n.jfb-addons-page .cx-vui-button .button-icon {\n  margin-right: 5px;\n}\n.jfb-addons-page .cx-vui-button--style-accent {\n  color: #007cba;\n  box-shadow: inset 0 0 0 1px #007cba;\n}\n.jfb-addons-page .cx-vui-button--style-accent .button-icon path {\n  fill: #007cba;\n}\n.jfb-addons-page .cx-vui-button__content > span {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.jfb-addons-page .cx-vui-popup__header {\n  padding-bottom: 15px;\n  border-bottom: 1px solid #DCDCDD;\n  margin-bottom: 30px;\n}\n.jfb-addons-page .cx-vui-popup__header-title {\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 36px;\n  color: #23282D;\n}\n.jfb-addons-page__license-form {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: stretch;\n}\n.jfb-addons-page__license-form > span {\n  margin-bottom: 10px;\n}\n.jfb-addons-page__license-input {\n  margin-bottom: 10px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/addons/components/AddonItem.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/addons/components/AddonItem.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".jfb-addons {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(4, auto);\n  gap: 20px;\n}\n@media (max-width: 1140px) {\n.jfb-addons {\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(2, auto);\n}\n}\n.jfb-addons__item.activated .jfb-addons__item-info {\n  background-color: white;\n}\n.jfb-addons__item.update-avaliable .jfb-addons__item-name .version {\n  background-color: #D6336C;\n}\n.jfb-addons__item.update-avaliable .jfb-addons__item-update .latest-version {\n  color: white;\n  background-color: #46B450;\n  padding: 1px 5px;\n  border-radius: 4px;\n}\n.jfb-addons__item-inner {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  height: 100%;\n}\n.jfb-addons__item-thumb {\n  border-radius: 10px 10px 0 0;\n  line-height: 0;\n  overflow: hidden;\n}\n.jfb-addons__item-thumb img {\n  width: 100%;\n  height: auto;\n}\n.jfb-addons__item-info {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  flex: 1 1 auto;\n  padding: 20px;\n  border-radius: 0 0 10px 10px;\n  border-width: 0 1px 1px 1px;\n  border-color: #DCDCDD;\n  border-style: solid;\n  background-color: #efefef;\n}\n.jfb-addons__item-name {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 10px;\n}\n.jfb-addons__item-name .label {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.25;\n}\n.jfb-addons__item-name .version {\n  padding: 3px 8px;\n  border-radius: 4px;\n  color: white;\n  background-color: #46B450;\n  margin-left: 10px;\n}\n.jfb-addons__item-update {\n  color: #7b7e81;\n  margin-bottom: 10px;\n}\n.jfb-addons__item-desc {\n  flex: 1 1 auto;\n  margin-bottom: 20px;\n}\n.jfb-addons__item-actions {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.jfb-addons__item-actions .cx-vui-button {\n  margin-right: 10px;\n}", "",{"version":3,"sources":["webpack://./admin/pages/addons/components/AddonItem.vue","webpack://./../AddonItem.vue"],"names":[],"mappings":"AA8NA;EACC,aAAA;EACA,qCAAA;EACA,mCAAA;EACA,SAAA;AC7ND;AD+NC;AAND;IAOE,qCAAA;IACA,mCAAA;AC5NA;AACF;ADgOG;EACC,uBAAA;AC9NJ;ADoOI;EACC,yBAAA;AClOL;ADsOI;EACC,YAAA;EACA,yBAAA;EACA,gBAAA;EACA,kBAAA;ACpOL;AD2OC;EACC,aAAA;EACA,sBAAA;EACA,oBAAA;EACA,YAAA;ACzOF;AD4OC;EACC,4BAAA;EACA,cAAA;EACA,gBAAA;AC1OF;AD4OE;EACC,WAAA;EACA,YAAA;AC1OH;AD8OC;EACC,aAAA;EACA,sBAAA;EACA,oBAAA;EACA,cAAA;EACA,aAAA;EACA,4BAAA;EACA,2BAAA;EACA,qBAAA;EACA,mBAAA;EACA,yBAAA;AC5OF;AD+OC;EACC,aAAA;EACA,8BAAA;EACA,uBAAA;EACA,mBAAA;AC7OF;AD+OE;EACC,eAAA;EACA,gBAAA;EACA,iBAAA;AC7OH;ADgPE;EACC,gBAAA;EACA,kBAAA;EACA,YAAA;EACA,yBAAA;EACA,iBAAA;AC9OH;ADkPC;EACC,cAAA;EACA,mBAAA;AChPF;ADmPC;EACC,cAAA;EACA,mBAAA;ACjPF;ADoPC;EACC,aAAA;EACA,2BAAA;EACA,mBAAA;AClPF;ADoPE;EACC,kBAAA;AClPH","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.jfb-addons {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(4, 1fr);\n\tgrid-template-rows: repeat(4, auto);\n\tgap: 20px;\n\n\t@media (max-width: 1140px) {\n\t\tgrid-template-columns: repeat(2, 1fr);\n\t\tgrid-template-rows: repeat(2, auto);\n\t}\n\n\t&__item {\n\t\t&.activated {\n\t\t\t.jfb-addons__item-info {\n\t\t\t\tbackground-color: white;\n\t\t\t}\n\t\t}\n\n\t\t&.update-avaliable {\n\t\t\t.jfb-addons__item-name {\n\t\t\t\t.version {\n\t\t\t\t\tbackground-color: #D6336C;\n\t\t\t\t}\n\t\t\t}\n\t\t\t.jfb-addons__item-update {\n\t\t\t\t.latest-version {\n\t\t\t\t\tcolor: white;\n\t\t\t\t\tbackground-color: #46B450;\n\t\t\t\t\tpadding: 1px 5px;\n\t\t\t\t\tborder-radius: 4px;\n\t\t\t\t}\n\t\t\t}\n\n\t\t}\n\t}\n\n\t&__item-inner {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: stretch;\n\t\theight: 100%;\n\t}\n\n\t&__item-thumb {\n\t\tborder-radius: 10px 10px 0 0;\n\t\tline-height: 0;\n\t\toverflow: hidden;\n\n\t\timg {\n\t\t\twidth: 100%;\n\t\t\theight: auto;\n\t\t}\n\t}\n\n\t&__item-info {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: stretch;\n\t\tflex: 1 1 auto;\n\t\tpadding: 20px;\n\t\tborder-radius: 0 0 10px 10px;\n\t\tborder-width: 0 1px 1px 1px;\n\t\tborder-color: #DCDCDD;\n\t\tborder-style: solid;\n\t\tbackground-color: #efefef;\n\t}\n\n\t&__item-name {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\talign-items: flex-start;\n\t\tmargin-bottom: 10px;\n\n\t\t.label {\n\t\t\tfont-size: 20px;\n\t\t\tfont-weight: 700;\n\t\t\tline-height: 1.25;\n\t\t}\n\n\t\t.version {\n\t\t\tpadding: 3px 8px;\n\t\t\tborder-radius: 4px;\n\t\t\tcolor: white;\n\t\t\tbackground-color: #46B450;\n\t\t\tmargin-left: 10px;\n\t\t}\n\t}\n\n\t&__item-update {\n\t\tcolor: #7b7e81;\n\t\tmargin-bottom: 10px;\n\t}\n\n\t&__item-desc {\n\t\tflex: 1 1 auto;\n\t\tmargin-bottom: 20px;\n\t}\n\n\t&__item-actions {\n\t\tdisplay: flex;\n\t\tjustify-content: flex-start;\n\t\talign-items: center;\n\n\t\t.cx-vui-button {\n\t\t\tmargin-right: 10px;\n\t\t}\n\t}\n}\n\n",".jfb-addons {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(4, auto);\n  gap: 20px;\n}\n@media (max-width: 1140px) {\n  .jfb-addons {\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(2, auto);\n  }\n}\n.jfb-addons__item.activated .jfb-addons__item-info {\n  background-color: white;\n}\n.jfb-addons__item.update-avaliable .jfb-addons__item-name .version {\n  background-color: #D6336C;\n}\n.jfb-addons__item.update-avaliable .jfb-addons__item-update .latest-version {\n  color: white;\n  background-color: #46B450;\n  padding: 1px 5px;\n  border-radius: 4px;\n}\n.jfb-addons__item-inner {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  height: 100%;\n}\n.jfb-addons__item-thumb {\n  border-radius: 10px 10px 0 0;\n  line-height: 0;\n  overflow: hidden;\n}\n.jfb-addons__item-thumb img {\n  width: 100%;\n  height: auto;\n}\n.jfb-addons__item-info {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  flex: 1 1 auto;\n  padding: 20px;\n  border-radius: 0 0 10px 10px;\n  border-width: 0 1px 1px 1px;\n  border-color: #DCDCDD;\n  border-style: solid;\n  background-color: #efefef;\n}\n.jfb-addons__item-name {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 10px;\n}\n.jfb-addons__item-name .label {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.25;\n}\n.jfb-addons__item-name .version {\n  padding: 3px 8px;\n  border-radius: 4px;\n  color: white;\n  background-color: #46B450;\n  margin-left: 10px;\n}\n.jfb-addons__item-update {\n  color: #7b7e81;\n  margin-bottom: 10px;\n}\n.jfb-addons__item-desc {\n  flex: 1 1 auto;\n  margin-bottom: 20px;\n}\n.jfb-addons__item-actions {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.jfb-addons__item-actions .cx-vui-button {\n  margin-right: 10px;\n}"],"sourceRoot":""}]);
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

/***/ "./admin/components/collapse-mini/CxVuiCollapseMini.vue":
/*!**************************************************************!*\
  !*** ./admin/components/collapse-mini/CxVuiCollapseMini.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CxVuiCollapseMini_vue_vue_type_template_id_5c8bc0b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CxVuiCollapseMini.vue?vue&type=template&id=5c8bc0b6& */ "./admin/components/collapse-mini/CxVuiCollapseMini.vue?vue&type=template&id=5c8bc0b6&");
/* harmony import */ var _CxVuiCollapseMini_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CxVuiCollapseMini.vue?vue&type=script&lang=js& */ "./admin/components/collapse-mini/CxVuiCollapseMini.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _CxVuiCollapseMini_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _CxVuiCollapseMini_vue_vue_type_template_id_5c8bc0b6___WEBPACK_IMPORTED_MODULE_0__.render,
  _CxVuiCollapseMini_vue_vue_type_template_id_5c8bc0b6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "admin/components/collapse-mini/CxVuiCollapseMini.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./admin/pages/addons/AddonsPage.vue":
/*!*******************************************!*\
  !*** ./admin/pages/addons/AddonsPage.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddonsPage_vue_vue_type_template_id_6b2f6c75___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddonsPage.vue?vue&type=template&id=6b2f6c75& */ "./admin/pages/addons/AddonsPage.vue?vue&type=template&id=6b2f6c75&");
/* harmony import */ var _AddonsPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddonsPage.vue?vue&type=script&lang=js& */ "./admin/pages/addons/AddonsPage.vue?vue&type=script&lang=js&");
/* harmony import */ var _AddonsPage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddonsPage.vue?vue&type=style&index=0&lang=scss& */ "./admin/pages/addons/AddonsPage.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _AddonsPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AddonsPage_vue_vue_type_template_id_6b2f6c75___WEBPACK_IMPORTED_MODULE_0__.render,
  _AddonsPage_vue_vue_type_template_id_6b2f6c75___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "admin/pages/addons/AddonsPage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./admin/pages/addons/components/AddonItem.vue":
/*!*****************************************************!*\
  !*** ./admin/pages/addons/components/AddonItem.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddonItem_vue_vue_type_template_id_429458cd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddonItem.vue?vue&type=template&id=429458cd& */ "./admin/pages/addons/components/AddonItem.vue?vue&type=template&id=429458cd&");
/* harmony import */ var _AddonItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddonItem.vue?vue&type=script&lang=js& */ "./admin/pages/addons/components/AddonItem.vue?vue&type=script&lang=js&");
/* harmony import */ var _AddonItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddonItem.vue?vue&type=style&index=0&lang=scss& */ "./admin/pages/addons/components/AddonItem.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _AddonItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AddonItem_vue_vue_type_template_id_429458cd___WEBPACK_IMPORTED_MODULE_0__.render,
  _AddonItem_vue_vue_type_template_id_429458cd___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "admin/pages/addons/components/AddonItem.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./admin/pages/settings/SettingsPage.vue":
/*!***********************************************!*\
  !*** ./admin/pages/settings/SettingsPage.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SettingsPage_vue_vue_type_template_id_2dfa13f5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SettingsPage.vue?vue&type=template&id=2dfa13f5& */ "./admin/pages/settings/SettingsPage.vue?vue&type=template&id=2dfa13f5&");
/* harmony import */ var _SettingsPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SettingsPage.vue?vue&type=script&lang=js& */ "./admin/pages/settings/SettingsPage.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _SettingsPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SettingsPage_vue_vue_type_template_id_2dfa13f5___WEBPACK_IMPORTED_MODULE_0__.render,
  _SettingsPage_vue_vue_type_template_id_2dfa13f5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "admin/pages/settings/SettingsPage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./admin/pages/settings/gateways/paypal/PaypalTab.vue":
/*!************************************************************!*\
  !*** ./admin/pages/settings/gateways/paypal/PaypalTab.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PaypalTab_vue_vue_type_template_id_2d3f4b53___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaypalTab.vue?vue&type=template&id=2d3f4b53& */ "./admin/pages/settings/gateways/paypal/PaypalTab.vue?vue&type=template&id=2d3f4b53&");
/* harmony import */ var _PaypalTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaypalTab.vue?vue&type=script&lang=js& */ "./admin/pages/settings/gateways/paypal/PaypalTab.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _PaypalTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _PaypalTab_vue_vue_type_template_id_2d3f4b53___WEBPACK_IMPORTED_MODULE_0__.render,
  _PaypalTab_vue_vue_type_template_id_2d3f4b53___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "admin/pages/settings/gateways/paypal/PaypalTab.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./admin/pages/settings/tabs/activecampaign/ActiveCampaignTab.vue":
/*!************************************************************************!*\
  !*** ./admin/pages/settings/tabs/activecampaign/ActiveCampaignTab.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ActiveCampaignTab_vue_vue_type_template_id_47443ab8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActiveCampaignTab.vue?vue&type=template&id=47443ab8& */ "./admin/pages/settings/tabs/activecampaign/ActiveCampaignTab.vue?vue&type=template&id=47443ab8&");
/* harmony import */ var _ActiveCampaignTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ActiveCampaignTab.vue?vue&type=script&lang=js& */ "./admin/pages/settings/tabs/activecampaign/ActiveCampaignTab.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ActiveCampaignTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ActiveCampaignTab_vue_vue_type_template_id_47443ab8___WEBPACK_IMPORTED_MODULE_0__.render,
  _ActiveCampaignTab_vue_vue_type_template_id_47443ab8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "admin/pages/settings/tabs/activecampaign/ActiveCampaignTab.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./admin/pages/settings/tabs/captcha/CaptchaTab.vue":
/*!**********************************************************!*\
  !*** ./admin/pages/settings/tabs/captcha/CaptchaTab.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CaptchaTab_vue_vue_type_template_id_1481040e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CaptchaTab.vue?vue&type=template&id=1481040e& */ "./admin/pages/settings/tabs/captcha/CaptchaTab.vue?vue&type=template&id=1481040e&");
/* harmony import */ var _CaptchaTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CaptchaTab.vue?vue&type=script&lang=js& */ "./admin/pages/settings/tabs/captcha/CaptchaTab.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _CaptchaTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _CaptchaTab_vue_vue_type_template_id_1481040e___WEBPACK_IMPORTED_MODULE_0__.render,
  _CaptchaTab_vue_vue_type_template_id_1481040e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "admin/pages/settings/tabs/captcha/CaptchaTab.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./admin/pages/settings/tabs/getresponse/GetResponseTab.vue":
/*!******************************************************************!*\
  !*** ./admin/pages/settings/tabs/getresponse/GetResponseTab.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GetResponseTab_vue_vue_type_template_id_d7aae918___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GetResponseTab.vue?vue&type=template&id=d7aae918& */ "./admin/pages/settings/tabs/getresponse/GetResponseTab.vue?vue&type=template&id=d7aae918&");
/* harmony import */ var _GetResponseTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GetResponseTab.vue?vue&type=script&lang=js& */ "./admin/pages/settings/tabs/getresponse/GetResponseTab.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _GetResponseTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _GetResponseTab_vue_vue_type_template_id_d7aae918___WEBPACK_IMPORTED_MODULE_0__.render,
  _GetResponseTab_vue_vue_type_template_id_d7aae918___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "admin/pages/settings/tabs/getresponse/GetResponseTab.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./admin/pages/settings/tabs/mailchimp/MailChimpTab.vue":
/*!**************************************************************!*\
  !*** ./admin/pages/settings/tabs/mailchimp/MailChimpTab.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MailChimpTab_vue_vue_type_template_id_8d3361fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MailChimpTab.vue?vue&type=template&id=8d3361fc& */ "./admin/pages/settings/tabs/mailchimp/MailChimpTab.vue?vue&type=template&id=8d3361fc&");
/* harmony import */ var _MailChimpTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MailChimpTab.vue?vue&type=script&lang=js& */ "./admin/pages/settings/tabs/mailchimp/MailChimpTab.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _MailChimpTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _MailChimpTab_vue_vue_type_template_id_8d3361fc___WEBPACK_IMPORTED_MODULE_0__.render,
  _MailChimpTab_vue_vue_type_template_id_8d3361fc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "admin/pages/settings/tabs/mailchimp/MailChimpTab.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./admin/pages/settings/tabs/payments-gateways/PaymentsGateways.vue":
/*!**************************************************************************!*\
  !*** ./admin/pages/settings/tabs/payments-gateways/PaymentsGateways.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PaymentsGateways_vue_vue_type_template_id_082e6a5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaymentsGateways.vue?vue&type=template&id=082e6a5a& */ "./admin/pages/settings/tabs/payments-gateways/PaymentsGateways.vue?vue&type=template&id=082e6a5a&");
/* harmony import */ var _PaymentsGateways_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaymentsGateways.vue?vue&type=script&lang=js& */ "./admin/pages/settings/tabs/payments-gateways/PaymentsGateways.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _PaymentsGateways_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _PaymentsGateways_vue_vue_type_template_id_082e6a5a___WEBPACK_IMPORTED_MODULE_0__.render,
  _PaymentsGateways_vue_vue_type_template_id_082e6a5a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "admin/pages/settings/tabs/payments-gateways/PaymentsGateways.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./admin/components/collapse-mini/CxVuiCollapseMini.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./admin/components/collapse-mini/CxVuiCollapseMini.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CxVuiCollapseMini_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CxVuiCollapseMini.vue?vue&type=script&lang=js& */ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/components/collapse-mini/CxVuiCollapseMini.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CxVuiCollapseMini_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./admin/pages/addons/AddonsPage.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./admin/pages/addons/AddonsPage.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonsPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddonsPage.vue?vue&type=script&lang=js& */ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/addons/AddonsPage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonsPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./admin/pages/addons/components/AddonItem.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./admin/pages/addons/components/AddonItem.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddonItem.vue?vue&type=script&lang=js& */ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/addons/components/AddonItem.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./admin/pages/settings/SettingsPage.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./admin/pages/settings/SettingsPage.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SettingsPage.vue?vue&type=script&lang=js& */ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/settings/SettingsPage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./admin/pages/settings/gateways/paypal/PaypalTab.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./admin/pages/settings/gateways/paypal/PaypalTab.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PaypalTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PaypalTab.vue?vue&type=script&lang=js& */ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/settings/gateways/paypal/PaypalTab.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PaypalTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./admin/pages/settings/tabs/activecampaign/ActiveCampaignTab.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./admin/pages/settings/tabs/activecampaign/ActiveCampaignTab.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ActiveCampaignTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ActiveCampaignTab.vue?vue&type=script&lang=js& */ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/settings/tabs/activecampaign/ActiveCampaignTab.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ActiveCampaignTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./admin/pages/settings/tabs/captcha/CaptchaTab.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./admin/pages/settings/tabs/captcha/CaptchaTab.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CaptchaTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CaptchaTab.vue?vue&type=script&lang=js& */ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/settings/tabs/captcha/CaptchaTab.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CaptchaTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./admin/pages/settings/tabs/getresponse/GetResponseTab.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./admin/pages/settings/tabs/getresponse/GetResponseTab.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GetResponseTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GetResponseTab.vue?vue&type=script&lang=js& */ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/settings/tabs/getresponse/GetResponseTab.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GetResponseTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./admin/pages/settings/tabs/mailchimp/MailChimpTab.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./admin/pages/settings/tabs/mailchimp/MailChimpTab.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MailChimpTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MailChimpTab.vue?vue&type=script&lang=js& */ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/settings/tabs/mailchimp/MailChimpTab.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MailChimpTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./admin/pages/settings/tabs/payments-gateways/PaymentsGateways.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./admin/pages/settings/tabs/payments-gateways/PaymentsGateways.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentsGateways_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PaymentsGateways.vue?vue&type=script&lang=js& */ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/settings/tabs/payments-gateways/PaymentsGateways.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentsGateways_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./admin/components/collapse-mini/CxVuiCollapseMini.vue?vue&type=template&id=5c8bc0b6&":
/*!*********************************************************************************************!*\
  !*** ./admin/components/collapse-mini/CxVuiCollapseMini.vue?vue&type=template&id=5c8bc0b6& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CxVuiCollapseMini_vue_vue_type_template_id_5c8bc0b6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CxVuiCollapseMini_vue_vue_type_template_id_5c8bc0b6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CxVuiCollapseMini_vue_vue_type_template_id_5c8bc0b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CxVuiCollapseMini.vue?vue&type=template&id=5c8bc0b6& */ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/components/collapse-mini/CxVuiCollapseMini.vue?vue&type=template&id=5c8bc0b6&");


/***/ }),

/***/ "./admin/pages/addons/AddonsPage.vue?vue&type=template&id=6b2f6c75&":
/*!**************************************************************************!*\
  !*** ./admin/pages/addons/AddonsPage.vue?vue&type=template&id=6b2f6c75& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonsPage_vue_vue_type_template_id_6b2f6c75___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonsPage_vue_vue_type_template_id_6b2f6c75___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonsPage_vue_vue_type_template_id_6b2f6c75___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddonsPage.vue?vue&type=template&id=6b2f6c75& */ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/addons/AddonsPage.vue?vue&type=template&id=6b2f6c75&");


/***/ }),

/***/ "./admin/pages/addons/components/AddonItem.vue?vue&type=template&id=429458cd&":
/*!************************************************************************************!*\
  !*** ./admin/pages/addons/components/AddonItem.vue?vue&type=template&id=429458cd& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonItem_vue_vue_type_template_id_429458cd___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonItem_vue_vue_type_template_id_429458cd___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonItem_vue_vue_type_template_id_429458cd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddonItem.vue?vue&type=template&id=429458cd& */ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/addons/components/AddonItem.vue?vue&type=template&id=429458cd&");


/***/ }),

/***/ "./admin/pages/settings/SettingsPage.vue?vue&type=template&id=2dfa13f5&":
/*!******************************************************************************!*\
  !*** ./admin/pages/settings/SettingsPage.vue?vue&type=template&id=2dfa13f5& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsPage_vue_vue_type_template_id_2dfa13f5___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsPage_vue_vue_type_template_id_2dfa13f5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsPage_vue_vue_type_template_id_2dfa13f5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SettingsPage.vue?vue&type=template&id=2dfa13f5& */ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/settings/SettingsPage.vue?vue&type=template&id=2dfa13f5&");


/***/ }),

/***/ "./admin/pages/settings/gateways/paypal/PaypalTab.vue?vue&type=template&id=2d3f4b53&":
/*!*******************************************************************************************!*\
  !*** ./admin/pages/settings/gateways/paypal/PaypalTab.vue?vue&type=template&id=2d3f4b53& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaypalTab_vue_vue_type_template_id_2d3f4b53___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaypalTab_vue_vue_type_template_id_2d3f4b53___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaypalTab_vue_vue_type_template_id_2d3f4b53___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PaypalTab.vue?vue&type=template&id=2d3f4b53& */ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/settings/gateways/paypal/PaypalTab.vue?vue&type=template&id=2d3f4b53&");


/***/ }),

/***/ "./admin/pages/settings/tabs/activecampaign/ActiveCampaignTab.vue?vue&type=template&id=47443ab8&":
/*!*******************************************************************************************************!*\
  !*** ./admin/pages/settings/tabs/activecampaign/ActiveCampaignTab.vue?vue&type=template&id=47443ab8& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ActiveCampaignTab_vue_vue_type_template_id_47443ab8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ActiveCampaignTab_vue_vue_type_template_id_47443ab8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ActiveCampaignTab_vue_vue_type_template_id_47443ab8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ActiveCampaignTab.vue?vue&type=template&id=47443ab8& */ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/settings/tabs/activecampaign/ActiveCampaignTab.vue?vue&type=template&id=47443ab8&");


/***/ }),

/***/ "./admin/pages/settings/tabs/captcha/CaptchaTab.vue?vue&type=template&id=1481040e&":
/*!*****************************************************************************************!*\
  !*** ./admin/pages/settings/tabs/captcha/CaptchaTab.vue?vue&type=template&id=1481040e& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CaptchaTab_vue_vue_type_template_id_1481040e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CaptchaTab_vue_vue_type_template_id_1481040e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CaptchaTab_vue_vue_type_template_id_1481040e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CaptchaTab.vue?vue&type=template&id=1481040e& */ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/settings/tabs/captcha/CaptchaTab.vue?vue&type=template&id=1481040e&");


/***/ }),

/***/ "./admin/pages/settings/tabs/getresponse/GetResponseTab.vue?vue&type=template&id=d7aae918&":
/*!*************************************************************************************************!*\
  !*** ./admin/pages/settings/tabs/getresponse/GetResponseTab.vue?vue&type=template&id=d7aae918& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GetResponseTab_vue_vue_type_template_id_d7aae918___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GetResponseTab_vue_vue_type_template_id_d7aae918___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GetResponseTab_vue_vue_type_template_id_d7aae918___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GetResponseTab.vue?vue&type=template&id=d7aae918& */ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/settings/tabs/getresponse/GetResponseTab.vue?vue&type=template&id=d7aae918&");


/***/ }),

/***/ "./admin/pages/settings/tabs/mailchimp/MailChimpTab.vue?vue&type=template&id=8d3361fc&":
/*!*********************************************************************************************!*\
  !*** ./admin/pages/settings/tabs/mailchimp/MailChimpTab.vue?vue&type=template&id=8d3361fc& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MailChimpTab_vue_vue_type_template_id_8d3361fc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MailChimpTab_vue_vue_type_template_id_8d3361fc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MailChimpTab_vue_vue_type_template_id_8d3361fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MailChimpTab.vue?vue&type=template&id=8d3361fc& */ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/settings/tabs/mailchimp/MailChimpTab.vue?vue&type=template&id=8d3361fc&");


/***/ }),

/***/ "./admin/pages/settings/tabs/payments-gateways/PaymentsGateways.vue?vue&type=template&id=082e6a5a&":
/*!*********************************************************************************************************!*\
  !*** ./admin/pages/settings/tabs/payments-gateways/PaymentsGateways.vue?vue&type=template&id=082e6a5a& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentsGateways_vue_vue_type_template_id_082e6a5a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentsGateways_vue_vue_type_template_id_082e6a5a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentsGateways_vue_vue_type_template_id_082e6a5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PaymentsGateways.vue?vue&type=template&id=082e6a5a& */ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/settings/tabs/payments-gateways/PaymentsGateways.vue?vue&type=template&id=082e6a5a&");


/***/ }),

/***/ "./admin/pages/addons/AddonsPage.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************!*\
  !*** ./admin/pages/addons/AddonsPage.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonsPage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader/index.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddonsPage.vue?vue&type=style&index=0&lang=scss& */ "../node_modules/vue-style-loader/index.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/addons/AddonsPage.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonsPage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonsPage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonsPage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonsPage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./admin/pages/addons/components/AddonItem.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************!*\
  !*** ./admin/pages/addons/components/AddonItem.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader/index.js!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddonItem.vue?vue&type=style&index=0&lang=scss& */ "../node_modules/vue-style-loader/index.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/addons/components/AddonItem.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/components/collapse-mini/CxVuiCollapseMini.vue?vue&type=template&id=5c8bc0b6&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/components/collapse-mini/CxVuiCollapseMini.vue?vue&type=template&id=5c8bc0b6& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    {
      class: {
        "cx-vui-panel": _vm.withPanel,
        "cx-vui-collapse-mini__item": true,
        "cx-vui-collapse-mini__item--active": _vm.isActive
      }
    },
    [
      _c(
        "div",
        {
          staticClass: "cx-vui-collapse-mini__header",
          on: { click: _vm.collapse }
        },
        [
          _c("div", { staticClass: "cx-vui-collapse-mini__header-label" }, [
            _c(
              "svg",
              {
                attrs: {
                  width: "14",
                  height: "14",
                  viewBox: "0 0 14 14",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }
              },
              [
                _c("path", {
                  attrs: {
                    d:
                      "M14 13.9999L14 -0.00012207L0 -0.000121458L6.11959e-07 13.9999L14 13.9999Z",
                    fill: "white"
                  }
                }),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    d:
                      "M5.32911 1L11 7L5.32911 13L4 11.5938L8.34177 7L4 2.40625L5.32911 1Z",
                    fill: "#007CBA"
                  }
                })
              ]
            ),
            _vm._v("\n\t\t\t" + _vm._s(_vm.label) + "\n\t\t")
          ]),
          _vm._v(" "),
          _vm.desc
            ? _c("div", { staticClass: "cx-vui-collapse-mini__header-desc" }, [
                _vm._v("\n\t\t\t" + _vm._s(_vm.desc) + "\n\t\t")
              ])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.isActive,
              expression: "isActive"
            }
          ],
          staticClass: "cx-vui-collapse-mini__content"
        },
        [_vm._t("default", [_vm._v("Collapse content...")])],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/addons/AddonsPage.vue?vue&type=template&id=6b2f6c75&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/addons/AddonsPage.vue?vue&type=template&id=6b2f6c75& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    {
      staticClass: "jfb-addons-page wrap",
      class: { "proccesing-state": _vm.proccesingState }
    },
    [
      _c("h1", { staticClass: "cs-vui-title" }, [
        _vm._v(_vm._s("JetForms Addons"))
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "jfb-addons-page__inner cx-vui-panel" }, [
        _c("div", { staticClass: "jfb-addons-page__header" }, [
          _c(
            "div",
            { staticClass: "jfb-addons-page__header-controls" },
            [
              _c(
                "cx-vui-button",
                {
                  attrs: {
                    "button-style": "accent",
                    size: "mini",
                    loading: _vm.checkUpdatesProcessed
                  },
                  on: { click: _vm.checkPluginsUpdate }
                },
                [
                  _c("span", { attrs: { slot: "label" }, slot: "label" }, [
                    _c(
                      "svg",
                      {
                        staticClass: "button-icon",
                        attrs: {
                          width: "14",
                          height: "14",
                          viewBox: "0 0 14 14",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg"
                        }
                      },
                      [
                        _c("path", {
                          attrs: {
                            d:
                              "M11.7085 2.29171C10.5001 1.08337 8.8418 0.333374 7.00013 0.333374C3.3168 0.333374 0.341797 3.31671 0.341797 7.00004C0.341797 10.6834 3.3168 13.6667 7.00013 13.6667C10.1085 13.6667 12.7001 11.5417 13.4418 8.66671H11.7085C11.0251 10.6084 9.17513 12 7.00013 12C4.2418 12 2.00013 9.75837 2.00013 7.00004C2.00013 4.24171 4.2418 2.00004 7.00013 2.00004C8.38346 2.00004 9.6168 2.57504 10.5168 3.48337L7.83346 6.16671H13.6668V0.333374L11.7085 2.29171Z",
                            fill: "#007CBA"
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c("span", [_vm._v("Check For Updates")])
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "cx-vui-button",
                {
                  attrs: { "button-style": "accent", size: "mini" },
                  on: {
                    click: function($event) {
                      _vm.licensePopupVisible = true
                    }
                  }
                },
                [
                  _c("span", { attrs: { slot: "label" }, slot: "label" }, [
                    _c(
                      "svg",
                      {
                        staticClass: "button-icon",
                        attrs: {
                          width: "16",
                          height: "16",
                          viewBox: "0 0 16 16",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg"
                        }
                      },
                      [
                        _c("path", {
                          attrs: {
                            d:
                              "M15.4985 0H12.4897C12.4166 0 12.3487 0.0156709 12.286 0.0470127C12.2338 0.0679073 12.1867 0.104473 12.145 0.156709L5.7669 6.47209C5.62063 6.44074 5.46392 6.41463 5.29677 6.39373C5.12961 6.37284 4.96768 6.36239 4.81097 6.36239C4.16324 6.36239 3.54685 6.48776 2.9618 6.73849C2.37675 6.97878 1.85961 7.32354 1.41038 7.77277C0.961149 8.222 0.611166 8.73914 0.360431 9.32419C0.120144 9.90924 0 10.5309 0 11.189C0 11.8368 0.120144 12.4532 0.360431 13.0382C0.611166 13.6232 0.961149 14.1404 1.41038 14.5896C1.85961 15.0389 2.37675 15.3836 2.9618 15.6239C3.54685 15.8746 4.16324 16 4.81097 16C5.46915 16 6.09076 15.8746 6.67581 15.6239C7.26086 15.3836 7.778 15.0389 8.22723 14.5896C8.80183 14.015 9.19882 13.3464 9.41822 12.5837C9.64806 11.8211 9.68462 11.0375 9.52791 10.2331L10.8913 8.86974C10.9331 8.82795 10.9644 8.78093 10.9853 8.7287C11.0167 8.66601 11.0323 8.59811 11.0323 8.52498V7.02057H12.5367C12.6934 7.02057 12.8136 6.97356 12.8972 6.87953C12.9912 6.7855 13.0382 6.66536 13.0382 6.5191V5.01469H14.5426C14.6157 5.01469 14.6784 5.00424 14.7307 4.98335C14.7933 4.95201 14.8508 4.91022 14.903 4.85798L15.906 3.85504C15.9269 3.81326 15.9478 3.76624 15.9687 3.71401C15.9896 3.65132 16 3.58342 16 3.51028V0.501469C16 0.355207 15.953 0.235064 15.859 0.141038C15.7649 0.0470127 15.6448 0 15.4985 0ZM4.96768 12.7875C4.79008 12.9651 4.5968 13.0957 4.38786 13.1792C4.18936 13.2524 3.96474 13.2889 3.71401 13.2889C3.46327 13.2889 3.23343 13.2419 3.02449 13.1479C2.82599 13.0539 2.63794 12.9337 2.46033 12.7875C2.28273 12.6099 2.15214 12.4218 2.06856 12.2233C1.99543 12.0144 1.95886 11.7845 1.95886 11.5338C1.95886 11.2831 2.00588 11.0584 2.0999 10.8599C2.19393 10.651 2.31407 10.4577 2.46033 10.2801C2.7842 9.95625 3.19164 9.79432 3.68266 9.79432C4.18413 9.79432 4.5968 9.95625 4.92067 10.2801C5.09827 10.4577 5.22364 10.651 5.29677 10.8599C5.38035 11.0584 5.42214 11.2831 5.42214 11.5338C5.42214 11.7845 5.38035 12.0144 5.29677 12.2233C5.22364 12.4218 5.11394 12.6099 4.96768 12.7875Z",
                            fill: "#D3D3D3"
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    !_vm.isLicenseActivated
                      ? _c("span", [_vm._v("Activate License")])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.isLicenseActivated
                      ? _c("span", [_vm._v("Deactivate License")])
                      : _vm._e()
                  ])
                ]
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "jfb-addons" },
          _vm._l(_vm.allAddons, function(addonData, index) {
            return _c("AddonItem", {
              key: index,
              attrs: { "addon-data": addonData }
            })
          }),
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "cx-vui-popup",
        {
          staticClass: "jfb-addons-page__license-popup",
          attrs: { footer: false, "body-width": "540px" },
          model: {
            value: _vm.licensePopupVisible,
            callback: function($$v) {
              _vm.licensePopupVisible = $$v
            },
            expression: "licensePopupVisible"
          }
        },
        [
          _c(
            "div",
            {
              staticClass: "cx-vui-popup__header-title",
              attrs: { slot: "title" },
              slot: "title"
            },
            [
              !_vm.isLicenseActivated
                ? _c("span", [_vm._v("Activate License")])
                : _vm._e(),
              _vm._v(" "),
              _vm.isLicenseActivated
                ? _c("span", [_vm._v("Deactivate License")])
                : _vm._e()
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "jfb-addons-page__license-form",
              attrs: { slot: "content" },
              slot: "content"
            },
            [
              !_vm.isLicenseActivated
                ? _c("span", [
                    _vm._v(
                      "Activate license for automatic updates and awesome support"
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.isLicenseActivated
                ? _c("span", [
                    _vm._v(
                      "By deactivating the license you will not be able to update the addons"
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("cx-vui-input", {
                staticClass: "jfb-addons-page__license-input",
                attrs: {
                  size: "fullwidth",
                  type: "password",
                  autofocus: true,
                  "prevent-wrap": true,
                  placeholder: "Just paste it here"
                },
                model: {
                  value: _vm.licenseKey,
                  callback: function($$v) {
                    _vm.licenseKey = $$v
                  },
                  expression: "licenseKey"
                }
              }),
              _vm._v(" "),
              _c(
                "cx-vui-button",
                {
                  staticClass: "jfb-addons-page__license-action",
                  attrs: {
                    "button-style": "accent",
                    size: "mini",
                    loading: _vm.licenseProccesingState
                  },
                  on: { click: _vm.licenseAction }
                },
                [
                  _c("span", { attrs: { slot: "label" }, slot: "label" }, [
                    !_vm.isLicenseActivated
                      ? _c("span", [_vm._v("Activate")])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.isLicenseActivated
                      ? _c("span", [_vm._v("Deactivate")])
                      : _vm._e()
                  ])
                ]
              )
            ],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/addons/components/AddonItem.vue?vue&type=template&id=429458cd&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/addons/components/AddonItem.vue?vue&type=template&id=429458cd& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    {
      staticClass: "jfb-addons__item",
      class: {
        activated: _vm.addonData.isActivated,
        "update-avaliable": _vm.updateActionAvaliable
      }
    },
    [
      _c(
        "div",
        {
          staticClass: "jfb-addons__item-inner",
          class: { "proccesing-state": _vm.proccesingState }
        },
        [
          _c("div", { staticClass: "jfb-addons__item-thumb" }, [
            _c("img", { attrs: { src: _vm.addonData.thumb } })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "jfb-addons__item-info" }, [
            _c("div", { staticClass: "jfb-addons__item-name" }, [
              _c("span", { staticClass: "label" }, [
                _vm._v(_vm._s(_vm.addonData.name))
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "version" }, [
                _vm._v(_vm._s(_vm.addonData.currentVersion))
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "jfb-addons__item-update" }, [
              !_vm.updateActionAvaliable
                ? _c("div", [_vm._v("Your plugin is up to date")])
                : _vm._e(),
              _vm._v(" "),
              _vm.updateActionAvaliable
                ? _c(
                    "div",
                    [
                      _vm._v("\n\t\t\t\t\tVersion "),
                      _c("span", { staticClass: "latest-version" }, [
                        _vm._v(_vm._s(_vm.addonData.version))
                      ]),
                      _vm._v(" available\n\t\t\t\t\t"),
                      _c(
                        "cx-vui-button",
                        {
                          attrs: {
                            "button-style": "link-accent",
                            size: "link",
                            loading: _vm.updatePluginProcessed
                          },
                          on: { click: _vm.updatePlugin }
                        },
                        [
                          _c(
                            "span",
                            { attrs: { slot: "label" }, slot: "label" },
                            [_c("span", [_vm._v("Update Now")])]
                          )
                        ]
                      )
                    ],
                    1
                  )
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", {
              staticClass: "jfb-addons__item-desc",
              domProps: { innerHTML: _vm._s(_vm.addonData.desc) }
            }),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "jfb-addons__item-actions" },
              [
                _vm.learnMoreAvaliable
                  ? _c(
                      "cx-vui-button",
                      {
                        attrs: {
                          "button-style": "link-accent",
                          size: "link",
                          url: _vm.addonData.demo,
                          "tag-name": "a",
                          target: "_blank"
                        }
                      },
                      [
                        _c(
                          "span",
                          { attrs: { slot: "label" }, slot: "label" },
                          [_c("span", [_vm._v("Learn More")])]
                        )
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.installActionAvaliable
                  ? _c(
                      "cx-vui-button",
                      {
                        attrs: { "button-style": "link-accent", size: "link" },
                        on: { click: _vm.installPlugin }
                      },
                      [
                        _c(
                          "span",
                          { attrs: { slot: "label" }, slot: "label" },
                          [_c("span", [_vm._v("Install Plugin")])]
                        )
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.activateActionAvaliable
                  ? _c(
                      "cx-vui-button",
                      {
                        attrs: { "button-style": "link-accent", size: "link" },
                        on: { click: _vm.activatePlugin }
                      },
                      [
                        _c(
                          "span",
                          { attrs: { slot: "label" }, slot: "label" },
                          [_c("span", [_vm._v("Activate Plugin")])]
                        )
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.deactivateActionAvaliable
                  ? _c(
                      "cx-vui-button",
                      {
                        attrs: { "button-style": "link-accent", size: "link" },
                        on: { click: _vm.deactivatePlugin }
                      },
                      [
                        _c(
                          "span",
                          { attrs: { slot: "label" }, slot: "label" },
                          [_c("span", [_vm._v("Deactivate Plugin")])]
                        )
                      ]
                    )
                  : _vm._e()
              ],
              1
            )
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/settings/SettingsPage.vue?vue&type=template&id=2dfa13f5&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/settings/SettingsPage.vue?vue&type=template&id=2dfa13f5& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
function objectWithoutProperties(obj, exclude) {
  var target = {}
  for (var k in obj)
    if (
      Object.prototype.hasOwnProperty.call(obj, k) &&
      exclude.indexOf(k) === -1
    )
      target[k] = obj[k]
  return target
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "jet-fb-settings-page wrap" }, [
    _c("h1", { staticClass: "cs-vui-title" }, [
      _vm._v(_vm._s("JetForms Settings"))
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "cx-vui-panel" },
      [
        _c(
          "cx-vui-tabs",
          {
            attrs: {
              "in-panel": false,
              value: _vm.activeTabSlug,
              layout: "vertical"
            }
          },
          _vm._l(_vm.tabs, function(ref, index) {
            var displayButton = ref.displayButton
            if (displayButton === void 0) displayButton = true
            var rest = objectWithoutProperties(ref, ["displayButton"])
            var tab = rest
            return _c(
              "cx-vui-tabs-panel",
              {
                key: tab.component.name,
                attrs: { name: tab.component.name, label: tab.title }
              },
              [
                _c(
                  "keep-alive",
                  [
                    _c(tab.component, {
                      ref: "tabComponents",
                      refInFor: true,
                      tag: "component",
                      attrs: { incoming: _vm.getIncoming(tab.component.name) }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                displayButton
                  ? _c("cx-vui-button", {
                      attrs: {
                        "button-style": "accent",
                        loading: _vm.loadingTab[tab.component.name]
                      },
                      on: {
                        click: function($event) {
                          return _vm.onSaveTab(index, tab.component.name)
                        }
                      },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "label",
                            fn: function() {
                              return [_c("span", [_vm._v("Save")])]
                            },
                            proxy: true
                          }
                        ],
                        null,
                        true
                      )
                    })
                  : _vm._e()
              ],
              1
            )
          }),
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/settings/gateways/paypal/PaypalTab.vue?vue&type=template&id=2d3f4b53&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/settings/gateways/paypal/PaypalTab.vue?vue&type=template&id=2d3f4b53& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "section",
    [
      _c("cx-vui-input", {
        attrs: {
          label: _vm.label.client_id,
          "wrapper-css": ["equalwidth"],
          size: "fullwidth"
        },
        model: {
          value: _vm.storage.client_id,
          callback: function($$v) {
            _vm.$set(_vm.storage, "client_id", $$v)
          },
          expression: "storage.client_id"
        }
      }),
      _vm._v(" "),
      _c("cx-vui-input", {
        attrs: {
          label: _vm.label.secret,
          "wrapper-css": ["equalwidth"],
          size: "fullwidth"
        },
        model: {
          value: _vm.storage.secret,
          callback: function($$v) {
            _vm.$set(_vm.storage, "secret", $$v)
          },
          expression: "storage.secret"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/settings/tabs/activecampaign/ActiveCampaignTab.vue?vue&type=template&id=47443ab8&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/settings/tabs/activecampaign/ActiveCampaignTab.vue?vue&type=template&id=47443ab8& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c("cx-vui-input", {
        attrs: {
          label: _vm.label.api_key,
          "wrapper-css": ["equalwidth"],
          size: "fullwidth"
        },
        model: {
          value: _vm.api_key,
          callback: function($$v) {
            _vm.api_key = $$v
          },
          expression: "api_key"
        }
      }),
      _vm._v(" "),
      _c("cx-vui-input", {
        attrs: {
          label: _vm.label.api_url,
          "wrapper-css": ["equalwidth"],
          size: "fullwidth"
        },
        model: {
          value: _vm.api_url,
          callback: function($$v) {
            _vm.api_url = $$v
          },
          expression: "api_url"
        }
      }),
      _vm._v(" "),
      _c("p", { staticClass: "fb-description" }, [
        _vm._v(_vm._s(_vm.help.apiPref) + " "),
        _c("a", { attrs: { href: _vm.help.apiLink, target: "_blank" } }, [
          _vm._v(_vm._s(_vm.help.apiLinkLabel))
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/settings/tabs/captcha/CaptchaTab.vue?vue&type=template&id=1481040e&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/settings/tabs/captcha/CaptchaTab.vue?vue&type=template&id=1481040e& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c("cx-vui-input", {
        attrs: {
          label: _vm.label.key,
          "wrapper-css": ["equalwidth"],
          size: "fullwidth"
        },
        model: {
          value: _vm.key,
          callback: function($$v) {
            _vm.key = $$v
          },
          expression: "key"
        }
      }),
      _vm._v(" "),
      _c("cx-vui-input", {
        attrs: {
          label: _vm.label.secret,
          "wrapper-css": ["equalwidth"],
          size: "fullwidth"
        },
        model: {
          value: _vm.secret,
          callback: function($$v) {
            _vm.secret = $$v
          },
          expression: "secret"
        }
      }),
      _vm._v(" "),
      _c("p", { staticClass: "fb-description" }, [
        _vm._v(_vm._s(_vm.help.apiPref) + " "),
        _c("a", { attrs: { href: _vm.help.apiLink, target: "_blank" } }, [
          _vm._v(_vm._s(_vm.help.apiLinkLabel))
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/settings/tabs/getresponse/GetResponseTab.vue?vue&type=template&id=d7aae918&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/settings/tabs/getresponse/GetResponseTab.vue?vue&type=template&id=d7aae918& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
  return _c("cx-vui-input", {
    attrs: {
      label: _vm.label.api_key,
      "wrapper-css": ["equalwidth"],
      description:
        _vm.help.apiPref +
        ' <a href="' +
        _vm.help.apiLink +
        '" target="_blank">' +
        _vm.help.apiLinkLabel +
        "</a>",
      size: "fullwidth"
    },
    model: {
      value: _vm.api_key,
      callback: function($$v) {
        _vm.api_key = $$v
      },
      expression: "api_key"
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/settings/tabs/mailchimp/MailChimpTab.vue?vue&type=template&id=8d3361fc&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/settings/tabs/mailchimp/MailChimpTab.vue?vue&type=template&id=8d3361fc& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
  return _c("cx-vui-input", {
    attrs: {
      label: _vm.label.api_key,
      "wrapper-css": ["equalwidth"],
      description:
        _vm.help.apiPref +
        ' <a href="' +
        _vm.help.apiLink +
        '" target="_blank">' +
        _vm.help.apiLinkLabel +
        "</a>",
      size: "fullwidth"
    },
    model: {
      value: _vm.api_key,
      callback: function($$v) {
        _vm.api_key = $$v
      },
      expression: "api_key"
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/settings/tabs/payments-gateways/PaymentsGateways.vue?vue&type=template&id=082e6a5a&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/settings/tabs/payments-gateways/PaymentsGateways.vue?vue&type=template&id=082e6a5a& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "section",
    [
      _c("cx-vui-switcher", {
        attrs: {
          name: "use_gateways",
          "wrapper-css": ["equalwidth"],
          label: _vm.label.use_gateways,
          description: _vm.help.use_gateways,
          value: _vm.storage.use_gateways
        },
        on: {
          input: function($event) {
            return _vm.changeVal("use_gateways", $event)
          }
        }
      }),
      _vm._v(" "),
      _vm.storage.use_gateways
        ? _c("cx-vui-switcher", {
            attrs: {
              name: "enable_test_mode",
              "wrapper-css": ["equalwidth"],
              description: _vm.help.enable_test_mode,
              label: _vm.label.enable_test_mode,
              value: _vm.storage.enable_test_mode
            },
            on: {
              input: function($event) {
                return _vm.changeVal("enable_test_mode", $event)
              }
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.storage.use_gateways
        ? [
            _c(
              "div",
              { staticClass: "cx-vui-inner-panel" },
              _vm._l(_vm.gateways, function(tab, index) {
                return _c(
                  "CxVuiCollapseMini",
                  {
                    key: tab.component.name,
                    attrs: {
                      "with-panel": "",
                      desc: tab.desc || "",
                      label: tab.title
                    }
                  },
                  [
                    _c(
                      "keep-alive",
                      [
                        _c(tab.component, {
                          ref: "gateways",
                          refInFor: true,
                          tag: "component",
                          attrs: {
                            incoming: _vm.getIncoming(tab.component.name)
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "cx-vui-button",
                      {
                        attrs: {
                          "button-style": "accent",
                          loading: _vm.loadingGateways[tab.component.name]
                        },
                        on: {
                          click: function($event) {
                            return _vm.onSaveGateway(index, tab.component.name)
                          }
                        }
                      },
                      [
                        _c(
                          "span",
                          { attrs: { slot: "label" }, slot: "label" },
                          [_vm._v("Save")]
                        )
                      ]
                    )
                  ],
                  1
                )
              }),
              1
            )
          ]
        : _vm._e()
    ],
    2
  )
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

/***/ "../node_modules/vue-style-loader/index.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/addons/AddonsPage.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-style-loader/index.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/addons/AddonsPage.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddonsPage.vue?vue&type=style&index=0&lang=scss& */ "../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/addons/AddonsPage.vue?vue&type=style&index=0&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "../node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("1bc73de1", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "../node_modules/vue-style-loader/index.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/addons/components/AddonItem.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-style-loader/index.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/addons/components/AddonItem.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddonItem.vue?vue&type=style&index=0&lang=scss& */ "../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/addons/components/AddonItem.vue?vue&type=style&index=0&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "../node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("5f278286", content, false, {});
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
/*!***********************!*\
  !*** ./admin/main.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_settings_SettingsPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/settings/SettingsPage */ "./admin/pages/settings/SettingsPage.vue");
/* harmony import */ var _pages_addons_AddonsPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/addons/AddonsPage */ "./admin/pages/addons/AddonsPage.vue");



(function () {
  var pref = 'jet-form-builder_page_';
  var applyFilters = wp.hooks.applyFilters;
  var pages = applyFilters('jet.fb.register.admin-pages', [_pages_settings_SettingsPage__WEBPACK_IMPORTED_MODULE_0__.default, _pages_addons_AddonsPage__WEBPACK_IMPORTED_MODULE_1__.default]);
  pages.forEach(function (PageComponent) {
    var pageName = pref + PageComponent.name;

    if (window.pagenow === pageName) {
      new Vue({
        el: '#' + pref + PageComponent.name,
        render: function render(h) {
          return h(PageComponent);
        }
      });
    }
  });
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4uanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYWRtaW4vY29tcG9uZW50cy9jb2xsYXBzZS1taW5pL0N4VnVpQ29sbGFwc2VNaW5pLnZ1ZSIsIndlYnBhY2s6Ly8vYWRtaW4vcGFnZXMvYWRkb25zL0FkZG9uc1BhZ2UudnVlIiwid2VicGFjazovLy9hZG1pbi9wYWdlcy9hZGRvbnMvY29tcG9uZW50cy9BZGRvbkl0ZW0udnVlIiwid2VicGFjazovLy9hZG1pbi9wYWdlcy9zZXR0aW5ncy9TZXR0aW5nc1BhZ2UudnVlIiwid2VicGFjazovLy9hZG1pbi9wYWdlcy9zZXR0aW5ncy9nYXRld2F5cy9wYXlwYWwvUGF5cGFsVGFiLnZ1ZSIsIndlYnBhY2s6Ly8vYWRtaW4vcGFnZXMvc2V0dGluZ3MvdGFicy9hY3RpdmVjYW1wYWlnbi9BY3RpdmVDYW1wYWlnblRhYi52dWUiLCJ3ZWJwYWNrOi8vL2FkbWluL3BhZ2VzL3NldHRpbmdzL3RhYnMvY2FwdGNoYS9DYXB0Y2hhVGFiLnZ1ZSIsIndlYnBhY2s6Ly8vYWRtaW4vcGFnZXMvc2V0dGluZ3MvdGFicy9nZXRyZXNwb25zZS9HZXRSZXNwb25zZVRhYi52dWUiLCJ3ZWJwYWNrOi8vL2FkbWluL3BhZ2VzL3NldHRpbmdzL3RhYnMvbWFpbGNoaW1wL01haWxDaGltcFRhYi52dWUiLCJ3ZWJwYWNrOi8vL2FkbWluL3BhZ2VzL3NldHRpbmdzL3RhYnMvcGF5bWVudHMtZ2F0ZXdheXMvUGF5bWVudHNHYXRld2F5cy52dWUiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vbWl4aW5zL0dldEluY29taW5nLmpzIiwid2VicGFjazovLy8uL2FkbWluL21peGlucy9TYXZlVGFiQnlBamF4LmpzIiwid2VicGFjazovLy8uL2FkbWluL3BhZ2VzL3NldHRpbmdzL2dhdGV3YXlzL3BheXBhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9zZXR0aW5ncy9nYXRld2F5cy9wYXlwYWwvc291cmNlLmpzIiwid2VicGFjazovLy8uL2FkbWluL3BhZ2VzL3NldHRpbmdzL3RhYnMvYWN0aXZlY2FtcGFpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvc2V0dGluZ3MvdGFicy9hY3RpdmVjYW1wYWlnbi9zb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvc2V0dGluZ3MvdGFicy9jYXB0Y2hhL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FkbWluL3BhZ2VzL3NldHRpbmdzL3RhYnMvY2FwdGNoYS9zb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvc2V0dGluZ3MvdGFicy9nZXRyZXNwb25zZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9zZXR0aW5ncy90YWJzL2dldHJlc3BvbnNlL3NvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9zZXR0aW5ncy90YWJzL21haWxjaGltcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9zZXR0aW5ncy90YWJzL21haWxjaGltcC9zb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvc2V0dGluZ3MvdGFicy9wYXltZW50cy1nYXRld2F5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9zZXR0aW5ncy90YWJzL3BheW1lbnRzLWdhdGV3YXlzL3NvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9hZGRvbnMvQWRkb25zUGFnZS52dWU/NmNiMCIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9hZGRvbnMvY29tcG9uZW50cy9BZGRvbkl0ZW0udnVlPzA4MzAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL2FkbWluL2NvbXBvbmVudHMvY29sbGFwc2UtbWluaS9DeFZ1aUNvbGxhcHNlTWluaS52dWUiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvYWRkb25zL0FkZG9uc1BhZ2UudnVlIiwid2VicGFjazovLy8uL2FkbWluL3BhZ2VzL2FkZG9ucy9jb21wb25lbnRzL0FkZG9uSXRlbS52dWUiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvc2V0dGluZ3MvU2V0dGluZ3NQYWdlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9zZXR0aW5ncy9nYXRld2F5cy9wYXlwYWwvUGF5cGFsVGFiLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9zZXR0aW5ncy90YWJzL2FjdGl2ZWNhbXBhaWduL0FjdGl2ZUNhbXBhaWduVGFiLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9zZXR0aW5ncy90YWJzL2NhcHRjaGEvQ2FwdGNoYVRhYi52dWUiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvc2V0dGluZ3MvdGFicy9nZXRyZXNwb25zZS9HZXRSZXNwb25zZVRhYi52dWUiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvc2V0dGluZ3MvdGFicy9tYWlsY2hpbXAvTWFpbENoaW1wVGFiLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9zZXR0aW5ncy90YWJzL3BheW1lbnRzLWdhdGV3YXlzL1BheW1lbnRzR2F0ZXdheXMudnVlIiwid2VicGFjazovLy8uL2FkbWluL2NvbXBvbmVudHMvY29sbGFwc2UtbWluaS9DeFZ1aUNvbGxhcHNlTWluaS52dWU/OWU2YSIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9hZGRvbnMvQWRkb25zUGFnZS52dWU/ZWFlMyIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9hZGRvbnMvY29tcG9uZW50cy9BZGRvbkl0ZW0udnVlP2EwZmYiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvc2V0dGluZ3MvU2V0dGluZ3NQYWdlLnZ1ZT8yYmQ4Iiwid2VicGFjazovLy8uL2FkbWluL3BhZ2VzL3NldHRpbmdzL2dhdGV3YXlzL3BheXBhbC9QYXlwYWxUYWIudnVlPzFkYzQiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvc2V0dGluZ3MvdGFicy9hY3RpdmVjYW1wYWlnbi9BY3RpdmVDYW1wYWlnblRhYi52dWU/OTY4YSIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9zZXR0aW5ncy90YWJzL2NhcHRjaGEvQ2FwdGNoYVRhYi52dWU/ODI5ZCIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9zZXR0aW5ncy90YWJzL2dldHJlc3BvbnNlL0dldFJlc3BvbnNlVGFiLnZ1ZT9jZTBkIiwid2VicGFjazovLy8uL2FkbWluL3BhZ2VzL3NldHRpbmdzL3RhYnMvbWFpbGNoaW1wL01haWxDaGltcFRhYi52dWU/OWM3ZCIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9zZXR0aW5ncy90YWJzL3BheW1lbnRzLWdhdGV3YXlzL1BheW1lbnRzR2F0ZXdheXMudnVlPzIzMjgiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vY29tcG9uZW50cy9jb2xsYXBzZS1taW5pL0N4VnVpQ29sbGFwc2VNaW5pLnZ1ZT9iNmY4Iiwid2VicGFjazovLy8uL2FkbWluL3BhZ2VzL2FkZG9ucy9BZGRvbnNQYWdlLnZ1ZT8wYTkyIiwid2VicGFjazovLy8uL2FkbWluL3BhZ2VzL2FkZG9ucy9jb21wb25lbnRzL0FkZG9uSXRlbS52dWU/OTA1NyIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9zZXR0aW5ncy9TZXR0aW5nc1BhZ2UudnVlP2RlMzIiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvc2V0dGluZ3MvZ2F0ZXdheXMvcGF5cGFsL1BheXBhbFRhYi52dWU/MmVhYiIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9zZXR0aW5ncy90YWJzL2FjdGl2ZWNhbXBhaWduL0FjdGl2ZUNhbXBhaWduVGFiLnZ1ZT8zOTE5Iiwid2VicGFjazovLy8uL2FkbWluL3BhZ2VzL3NldHRpbmdzL3RhYnMvY2FwdGNoYS9DYXB0Y2hhVGFiLnZ1ZT82YzRkIiwid2VicGFjazovLy8uL2FkbWluL3BhZ2VzL3NldHRpbmdzL3RhYnMvZ2V0cmVzcG9uc2UvR2V0UmVzcG9uc2VUYWIudnVlPzQ4YzkiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvc2V0dGluZ3MvdGFicy9tYWlsY2hpbXAvTWFpbENoaW1wVGFiLnZ1ZT9lNzZkIiwid2VicGFjazovLy8uL2FkbWluL3BhZ2VzL3NldHRpbmdzL3RhYnMvcGF5bWVudHMtZ2F0ZXdheXMvUGF5bWVudHNHYXRld2F5cy52dWU/YmE5MCIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcyIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9hZGRvbnMvQWRkb25zUGFnZS52dWU/MzdhMSIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9hZGRvbnMvY29tcG9uZW50cy9BZGRvbkl0ZW0udnVlP2E0ZjgiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9saXN0VG9TdHlsZXMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL2FkbWluL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXHQ8ZGl2IDpjbGFzcz1cIntcblx0XHQnY3gtdnVpLXBhbmVsJzogd2l0aFBhbmVsLFxuXHRcdCdjeC12dWktY29sbGFwc2UtbWluaV9faXRlbSc6IHRydWUsXG5cdFx0J2N4LXZ1aS1jb2xsYXBzZS1taW5pX19pdGVtLS1hY3RpdmUnOiBpc0FjdGl2ZSxcblx0fVwiPlxuXHRcdDxkaXZcblx0XHRcdGNsYXNzPVwiY3gtdnVpLWNvbGxhcHNlLW1pbmlfX2hlYWRlclwiXG5cdFx0XHRAY2xpY2s9XCJjb2xsYXBzZVwiXG5cdFx0PlxuXHRcdFx0PGRpdiBjbGFzcz1cImN4LXZ1aS1jb2xsYXBzZS1taW5pX19oZWFkZXItbGFiZWxcIj5cblx0XHRcdFx0PHN2ZyB3aWR0aD1cIjE0XCIgaGVpZ2h0PVwiMTRcIiB2aWV3Qm94PVwiMCAwIDE0IDE0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG5cdFx0XHRcdFx0PHBhdGggZD1cIk0xNCAxMy45OTk5TDE0IC0wLjAwMDEyMjA3TDAgLTAuMDAwMTIxNDU4TDYuMTE5NTllLTA3IDEzLjk5OTlMMTQgMTMuOTk5OVpcIlxuXHRcdFx0XHRcdFx0ICBmaWxsPVwid2hpdGVcIj48L3BhdGg+XG5cdFx0XHRcdFx0PHBhdGggZD1cIk01LjMyOTExIDFMMTEgN0w1LjMyOTExIDEzTDQgMTEuNTkzOEw4LjM0MTc3IDdMNCAyLjQwNjI1TDUuMzI5MTEgMVpcIiBmaWxsPVwiIzAwN0NCQVwiPjwvcGF0aD5cblx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdHt7IGxhYmVsIH19XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXZcblx0XHRcdFx0di1pZj1cImRlc2NcIlxuXHRcdFx0XHRjbGFzcz1cImN4LXZ1aS1jb2xsYXBzZS1taW5pX19oZWFkZXItZGVzY1wiXG5cdFx0XHQ+XG5cdFx0XHRcdHt7IGRlc2MgfX1cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcdDxkaXZcblx0XHRcdHYtc2hvdz1cImlzQWN0aXZlXCJcblx0XHRcdGNsYXNzPVwiY3gtdnVpLWNvbGxhcHNlLW1pbmlfX2NvbnRlbnRcIlxuXHRcdD5cblx0XHRcdDxzbG90PkNvbGxhcHNlIGNvbnRlbnQuLi48L3Nsb3Q+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRuYW1lOiAnY3gtdnVpLWNvbGxhcHNlLW1pbmknLFxuXHRwcm9wczoge1xuXHRcdHdpdGhQYW5lbDoge1xuXHRcdFx0dHlwZTogQm9vbGVhbixcblx0XHRcdGRlZmF1bHQ6IGZhbHNlLFxuXHRcdH0sXG5cdFx0aW5pdGlhbEFjdGl2ZToge1xuXHRcdFx0dHlwZTogQm9vbGVhbixcblx0XHRcdGRlZmF1bHQ6IGZhbHNlLFxuXHRcdH0sXG5cdFx0bGFiZWw6IHtcblx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHRcdGRlZmF1bHQ6ICdDb2xsYXBzZSBNaW5pJyxcblx0XHR9LFxuXHRcdGRlc2M6IHtcblx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHRcdGRlZmF1bHQ6ICcnLFxuXHRcdH0sXG5cdH0sXG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGlzQWN0aXZlOiBmYWxzZSxcblx0XHR9O1xuXHR9LFxuXHRjcmVhdGVkKCkge1xuXHRcdHRoaXMuaXNBY3RpdmUgPSB0aGlzLmluaXRpYWxBY3RpdmU7XG5cdH0sXG5cdG1ldGhvZHM6IHtcblx0XHRjb2xsYXBzZSgpIHtcblx0XHRcdHRoaXMuaXNBY3RpdmUgPSAhIHRoaXMuaXNBY3RpdmU7XG5cdFx0fSxcblx0fSxcbn1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cblx0PGRpdlxuXHRcdGNsYXNzPVwiamZiLWFkZG9ucy1wYWdlIHdyYXBcIlxuXHRcdDpjbGFzcz1cInsgJ3Byb2NjZXNpbmctc3RhdGUnOiBwcm9jY2VzaW5nU3RhdGUgfVwiXG5cdD5cblx0XHQ8aDEgY2xhc3M9XCJjcy12dWktdGl0bGVcIj57eyAnSmV0Rm9ybXMgQWRkb25zJyB9fTwvaDE+XG5cdFx0PGRpdiBjbGFzcz1cImpmYi1hZGRvbnMtcGFnZV9faW5uZXIgY3gtdnVpLXBhbmVsXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiamZiLWFkZG9ucy1wYWdlX19oZWFkZXJcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImpmYi1hZGRvbnMtcGFnZV9faGVhZGVyLWNvbnRyb2xzXCI+XG5cdFx0XHRcdFx0PGN4LXZ1aS1idXR0b25cblx0XHRcdFx0XHRcdGJ1dHRvbi1zdHlsZT1cImFjY2VudFwiXG5cdFx0XHRcdFx0XHRzaXplPVwibWluaVwiXG5cdFx0XHRcdFx0XHQ6bG9hZGluZz1cImNoZWNrVXBkYXRlc1Byb2Nlc3NlZFwiXG5cdFx0XHRcdFx0XHRAY2xpY2s9XCJjaGVja1BsdWdpbnNVcGRhdGVcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxzcGFuIHNsb3Q9XCJsYWJlbFwiPlxuXHRcdFx0XHRcdFx0XHQ8c3ZnIGNsYXNzPVwiYnV0dG9uLWljb25cIiB3aWR0aD1cIjE0XCIgaGVpZ2h0PVwiMTRcIiB2aWV3Qm94PVwiMCAwIDE0IDE0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD1cIk0xMS43MDg1IDIuMjkxNzFDMTAuNTAwMSAxLjA4MzM3IDguODQxOCAwLjMzMzM3NCA3LjAwMDEzIDAuMzMzMzc0QzMuMzE2OCAwLjMzMzM3NCAwLjM0MTc5NyAzLjMxNjcxIDAuMzQxNzk3IDcuMDAwMDRDMC4zNDE3OTcgMTAuNjgzNCAzLjMxNjggMTMuNjY2NyA3LjAwMDEzIDEzLjY2NjdDMTAuMTA4NSAxMy42NjY3IDEyLjcwMDEgMTEuNTQxNyAxMy40NDE4IDguNjY2NzFIMTEuNzA4NUMxMS4wMjUxIDEwLjYwODQgOS4xNzUxMyAxMiA3LjAwMDEzIDEyQzQuMjQxOCAxMiAyLjAwMDEzIDkuNzU4MzcgMi4wMDAxMyA3LjAwMDA0QzIuMDAwMTMgNC4yNDE3MSA0LjI0MTggMi4wMDAwNCA3LjAwMDEzIDIuMDAwMDRDOC4zODM0NiAyLjAwMDA0IDkuNjE2OCAyLjU3NTA0IDEwLjUxNjggMy40ODMzN0w3LjgzMzQ2IDYuMTY2NzFIMTMuNjY2OFYwLjMzMzM3NEwxMS43MDg1IDIuMjkxNzFaXCIgZmlsbD1cIiMwMDdDQkFcIi8+XG5cdFx0XHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj5DaGVjayBGb3IgVXBkYXRlczwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHQ8L2N4LXZ1aS1idXR0b24+XG5cblx0XHRcdFx0XHQ8Y3gtdnVpLWJ1dHRvblxuXHRcdFx0XHRcdFx0YnV0dG9uLXN0eWxlPVwiYWNjZW50XCJcblx0XHRcdFx0XHRcdHNpemU9XCJtaW5pXCJcblx0XHRcdFx0XHRcdEBjbGljaz1cImxpY2Vuc2VQb3B1cFZpc2libGUgPSB0cnVlXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0PHNwYW4gc2xvdD1cImxhYmVsXCI+XG5cdFx0XHRcdFx0XHQ8c3ZnIGNsYXNzPVwiYnV0dG9uLWljb25cIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGQ9XCJNMTUuNDk4NSAwSDEyLjQ4OTdDMTIuNDE2NiAwIDEyLjM0ODcgMC4wMTU2NzA5IDEyLjI4NiAwLjA0NzAxMjdDMTIuMjMzOCAwLjA2NzkwNzMgMTIuMTg2NyAwLjEwNDQ3MyAxMi4xNDUgMC4xNTY3MDlMNS43NjY5IDYuNDcyMDlDNS42MjA2MyA2LjQ0MDc0IDUuNDYzOTIgNi40MTQ2MyA1LjI5Njc3IDYuMzkzNzNDNS4xMjk2MSA2LjM3Mjg0IDQuOTY3NjggNi4zNjIzOSA0LjgxMDk3IDYuMzYyMzlDNC4xNjMyNCA2LjM2MjM5IDMuNTQ2ODUgNi40ODc3NiAyLjk2MTggNi43Mzg0OUMyLjM3Njc1IDYuOTc4NzggMS44NTk2MSA3LjMyMzU0IDEuNDEwMzggNy43NzI3N0MwLjk2MTE0OSA4LjIyMiAwLjYxMTE2NiA4LjczOTE0IDAuMzYwNDMxIDkuMzI0MTlDMC4xMjAxNDQgOS45MDkyNCAwIDEwLjUzMDkgMCAxMS4xODlDMCAxMS44MzY4IDAuMTIwMTQ0IDEyLjQ1MzIgMC4zNjA0MzEgMTMuMDM4MkMwLjYxMTE2NiAxMy42MjMyIDAuOTYxMTQ5IDE0LjE0MDQgMS40MTAzOCAxNC41ODk2QzEuODU5NjEgMTUuMDM4OSAyLjM3Njc1IDE1LjM4MzYgMi45NjE4IDE1LjYyMzlDMy41NDY4NSAxNS44NzQ2IDQuMTYzMjQgMTYgNC44MTA5NyAxNkM1LjQ2OTE1IDE2IDYuMDkwNzYgMTUuODc0NiA2LjY3NTgxIDE1LjYyMzlDNy4yNjA4NiAxNS4zODM2IDcuNzc4IDE1LjAzODkgOC4yMjcyMyAxNC41ODk2QzguODAxODMgMTQuMDE1IDkuMTk4ODIgMTMuMzQ2NCA5LjQxODIyIDEyLjU4MzdDOS42NDgwNiAxMS44MjExIDkuNjg0NjIgMTEuMDM3NSA5LjUyNzkxIDEwLjIzMzFMMTAuODkxMyA4Ljg2OTc0QzEwLjkzMzEgOC44Mjc5NSAxMC45NjQ0IDguNzgwOTMgMTAuOTg1MyA4LjcyODdDMTEuMDE2NyA4LjY2NjAxIDExLjAzMjMgOC41OTgxMSAxMS4wMzIzIDguNTI0OThWNy4wMjA1N0gxMi41MzY3QzEyLjY5MzQgNy4wMjA1NyAxMi44MTM2IDYuOTczNTYgMTIuODk3MiA2Ljg3OTUzQzEyLjk5MTIgNi43ODU1IDEzLjAzODIgNi42NjUzNiAxMy4wMzgyIDYuNTE5MVY1LjAxNDY5SDE0LjU0MjZDMTQuNjE1NyA1LjAxNDY5IDE0LjY3ODQgNS4wMDQyNCAxNC43MzA3IDQuOTgzMzVDMTQuNzkzMyA0Ljk1MjAxIDE0Ljg1MDggNC45MTAyMiAxNC45MDMgNC44NTc5OEwxNS45MDYgMy44NTUwNEMxNS45MjY5IDMuODEzMjYgMTUuOTQ3OCAzLjc2NjI0IDE1Ljk2ODcgMy43MTQwMUMxNS45ODk2IDMuNjUxMzIgMTYgMy41ODM0MiAxNiAzLjUxMDI4VjAuNTAxNDY5QzE2IDAuMzU1MjA3IDE1Ljk1MyAwLjIzNTA2NCAxNS44NTkgMC4xNDEwMzhDMTUuNzY0OSAwLjA0NzAxMjcgMTUuNjQ0OCAwIDE1LjQ5ODUgMFpNNC45Njc2OCAxMi43ODc1QzQuNzkwMDggMTIuOTY1MSA0LjU5NjggMTMuMDk1NyA0LjM4Nzg2IDEzLjE3OTJDNC4xODkzNiAxMy4yNTI0IDMuOTY0NzQgMTMuMjg4OSAzLjcxNDAxIDEzLjI4ODlDMy40NjMyNyAxMy4yODg5IDMuMjMzNDMgMTMuMjQxOSAzLjAyNDQ5IDEzLjE0NzlDMi44MjU5OSAxMy4wNTM5IDIuNjM3OTQgMTIuOTMzNyAyLjQ2MDMzIDEyLjc4NzVDMi4yODI3MyAxMi42MDk5IDIuMTUyMTQgMTIuNDIxOCAyLjA2ODU2IDEyLjIyMzNDMS45OTU0MyAxMi4wMTQ0IDEuOTU4ODYgMTEuNzg0NSAxLjk1ODg2IDExLjUzMzhDMS45NTg4NiAxMS4yODMxIDIuMDA1ODggMTEuMDU4NCAyLjA5OTkgMTAuODU5OUMyLjE5MzkzIDEwLjY1MSAyLjMxNDA3IDEwLjQ1NzcgMi40NjAzMyAxMC4yODAxQzIuNzg0MiA5Ljk1NjI1IDMuMTkxNjQgOS43OTQzMiAzLjY4MjY2IDkuNzk0MzJDNC4xODQxMyA5Ljc5NDMyIDQuNTk2OCA5Ljk1NjI1IDQuOTIwNjcgMTAuMjgwMUM1LjA5ODI3IDEwLjQ1NzcgNS4yMjM2NCAxMC42NTEgNS4yOTY3NyAxMC44NTk5QzUuMzgwMzUgMTEuMDU4NCA1LjQyMjE0IDExLjI4MzEgNS40MjIxNCAxMS41MzM4QzUuNDIyMTQgMTEuNzg0NSA1LjM4MDM1IDEyLjAxNDQgNS4yOTY3NyAxMi4yMjMzQzUuMjIzNjQgMTIuNDIxOCA1LjExMzk0IDEyLjYwOTkgNC45Njc2OCAxMi43ODc1WlwiIGZpbGw9XCIjRDNEM0QzXCIvPlxuXHRcdFx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdFx0XHQ8c3BhbiB2LWlmPVwiIWlzTGljZW5zZUFjdGl2YXRlZFwiPkFjdGl2YXRlIExpY2Vuc2U8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8c3BhbiB2LWlmPVwiaXNMaWNlbnNlQWN0aXZhdGVkXCI+RGVhY3RpdmF0ZSBMaWNlbnNlPC9zcGFuPlxuXHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHQ8L2N4LXZ1aS1idXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiamZiLWFkZG9uc1wiPlxuXHRcdFx0XHQ8QWRkb25JdGVtXG5cdFx0XHRcdFx0di1mb3I9XCIoIGFkZG9uRGF0YSwgaW5kZXggKSBpbiBhbGxBZGRvbnNcIlxuXHRcdFx0XHRcdDprZXk9XCJpbmRleFwiXG5cdFx0XHRcdFx0OmFkZG9uLWRhdGE9XCJhZGRvbkRhdGFcIlxuXHRcdFx0XHQ+PC9BZGRvbkl0ZW0+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblxuXHRcdDxjeC12dWktcG9wdXBcblx0XHRcdGNsYXNzPVwiamZiLWFkZG9ucy1wYWdlX19saWNlbnNlLXBvcHVwXCJcblx0XHRcdHYtbW9kZWw9XCJsaWNlbnNlUG9wdXBWaXNpYmxlXCJcblx0XHRcdDpmb290ZXI9XCJmYWxzZVwiXG5cdFx0XHRib2R5LXdpZHRoPVwiNTQwcHhcIlxuXHRcdD5cblx0XHRcdDxkaXYgY2xhc3M9XCJjeC12dWktcG9wdXBfX2hlYWRlci10aXRsZVwiIHNsb3Q9XCJ0aXRsZVwiPlxuXHRcdFx0XHQ8c3BhbiB2LWlmPVwiIWlzTGljZW5zZUFjdGl2YXRlZFwiPkFjdGl2YXRlIExpY2Vuc2U8L3NwYW4+XG5cdFx0XHRcdDxzcGFuIHYtaWY9XCJpc0xpY2Vuc2VBY3RpdmF0ZWRcIj5EZWFjdGl2YXRlIExpY2Vuc2U8L3NwYW4+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJqZmItYWRkb25zLXBhZ2VfX2xpY2Vuc2UtZm9ybVwiIHNsb3Q9XCJjb250ZW50XCI+XG5cdFx0XHRcdDxzcGFuIHYtaWY9XCIhaXNMaWNlbnNlQWN0aXZhdGVkXCI+QWN0aXZhdGUgbGljZW5zZSBmb3IgYXV0b21hdGljIHVwZGF0ZXMgYW5kIGF3ZXNvbWUgc3VwcG9ydDwvc3Bhbj5cblx0XHRcdFx0PHNwYW4gdi1pZj1cImlzTGljZW5zZUFjdGl2YXRlZFwiPkJ5IGRlYWN0aXZhdGluZyB0aGUgbGljZW5zZSB5b3Ugd2lsbCBub3QgYmUgYWJsZSB0byB1cGRhdGUgdGhlIGFkZG9uczwvc3Bhbj5cblx0XHRcdFx0PGN4LXZ1aS1pbnB1dFxuXHRcdFx0XHRcdGNsYXNzPVwiamZiLWFkZG9ucy1wYWdlX19saWNlbnNlLWlucHV0XCJcblx0XHRcdFx0XHRzaXplPVwiZnVsbHdpZHRoXCJcblx0XHRcdFx0XHR0eXBlPVwicGFzc3dvcmRcIlxuXHRcdFx0XHRcdDphdXRvZm9jdXM9XCJ0cnVlXCJcblx0XHRcdFx0XHQ6cHJldmVudC13cmFwPVwidHJ1ZVwiXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJKdXN0IHBhc3RlIGl0IGhlcmVcIlxuXHRcdFx0XHRcdHYtbW9kZWw9XCJsaWNlbnNlS2V5XCJcblx0XHRcdFx0PjwvY3gtdnVpLWlucHV0PlxuXHRcdFx0XHQ8Y3gtdnVpLWJ1dHRvblxuXHRcdFx0XHRcdGNsYXNzPVwiamZiLWFkZG9ucy1wYWdlX19saWNlbnNlLWFjdGlvblwiXG5cdFx0XHRcdFx0YnV0dG9uLXN0eWxlPVwiYWNjZW50XCJcblx0XHRcdFx0XHRzaXplPVwibWluaVwiXG5cdFx0XHRcdFx0OmxvYWRpbmc9XCJsaWNlbnNlUHJvY2Nlc2luZ1N0YXRlXCJcblx0XHRcdFx0XHRAY2xpY2s9XCJsaWNlbnNlQWN0aW9uXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxzcGFuIHNsb3Q9XCJsYWJlbFwiPlxuXHRcdFx0XHRcdFx0PHNwYW4gdi1pZj1cIiFpc0xpY2Vuc2VBY3RpdmF0ZWRcIj5BY3RpdmF0ZTwvc3Bhbj5cblx0XHRcdFx0XHRcdDxzcGFuIHYtaWY9XCJpc0xpY2Vuc2VBY3RpdmF0ZWRcIj5EZWFjdGl2YXRlPC9zcGFuPlxuXHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0PC9jeC12dWktYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9jeC12dWktcG9wdXA+XG5cdDwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgQWRkb25JdGVtIGZyb20gJy4vY29tcG9uZW50cy9BZGRvbkl0ZW0udnVlJztcblxuY29uc3QgeyBhcHBseUZpbHRlcnMsIGRvQWN0aW9uIH0gPSB3cC5ob29rcztcblxud2luZG93LmpmYkV2ZW50QnVzID0gbmV3IFZ1ZSgpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdG5hbWU6ICdqZmItYWRkb25zJyxcblx0Y29tcG9uZW50czoge1xuXHRcdEFkZG9uSXRlbSxcblx0fSxcblx0ZGF0YSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0YWxsQWRkb25zOiB3aW5kb3cuSmV0RkJQYWdlQ29uZmlnLmFsbEFkZG9ucyB8fCB7fSxcblx0XHRcdGxpY2Vuc2VMaXN0OiB3aW5kb3cuSmV0RkJQYWdlQ29uZmlnLmxpY2Vuc2VMaXN0IHx8IFtdLFxuXHRcdFx0bGljZW5zZUtleTogd2luZG93LkpldEZCUGFnZUNvbmZpZy5saWNlbnNlS2V5IHx8ICczNTA1Yzc5YmYxNzY1YzI5M2FlOTZlNWRkZTE3N2Q3NycsXG5cblx0XHRcdGxpY2Vuc2VBY3RpdmF0ZWQ6IGZhbHNlLFxuXHRcdFx0bGljZW5zZVBvcHVwVmlzaWJsZTogZmFsc2UsXG5cdFx0XHRsaWNlbnNlUHJvY2Nlc2luZ1N0YXRlOiBmYWxzZSxcblx0XHRcdGxpY2Vuc2VBamF4QWN0aW9uOiBudWxsLFxuXG5cdFx0XHRjaGVja1VwZGF0ZXNBY3Rpb246IG51bGwsXG5cdFx0XHRjaGVja1VwZGF0ZXNQcm9jZXNzZWQ6IGZhbHNlLFxuXG5cdFx0XHRwcm9jY2VzaW5nU3RhdGU6IGZhbHNlLFxuXHRcdH07XG5cdH0sXG5cdG1vdW50ZWQ6IGZ1bmN0aW9uKCkge1xuXHRcdHdpbmRvdy5qZmJFdmVudEJ1cy4kb24oICd1cGRhdGVBZGRvbkRhdGEnLCB0aGlzLnVwZGF0ZUFkZG9uRGF0YSApO1xuXHR9LFxuXHRjb21wdXRlZDoge1xuXHRcdGlzTGljZW5zZUFjdGl2YXRlZCgpIHtcblx0XHRcdHJldHVybiAwICE9PSB0aGlzLmxpY2Vuc2VMaXN0Lmxlbmd0aDtcblx0XHR9LFxuXHRcdGxpY2Vuc2VBY3Rpb25UeXBlKCkge1xuXHRcdFx0cmV0dXJuICEgdGhpcy5pc0xpY2Vuc2VBY3RpdmF0ZWQgPyAnYWN0aXZhdGVfbGljZW5zZScgOiAnZGVhY3RpdmF0ZV9saWNlbnNlJztcblx0XHR9XG5cdH0sXG5cdG1ldGhvZHM6IHtcblx0XHR1cGRhdGVBZGRvbkRhdGEoIGRhdGEgKSB7XG5cdFx0XHRsZXQgc2x1ZyAgICAgID0gZGF0YS5zbHVnLFxuXHRcdFx0XHRhZGRvbkRhdGEgPSBkYXRhLmFkZG9uRGF0YTtcblxuXHRcdFx0dGhpcy5hbGxBZGRvbnNbIHNsdWcgXSA9IE9iamVjdC5hc3NpZ24oIHt9LCB0aGlzLmFsbEFkZG9uc1sgc2x1ZyBdLCBhZGRvbkRhdGEgKTtcblx0XHRcdHRoaXMucHJvY2Nlc2luZ1N0YXRlID0gdHJ1ZTtcblxuXHRcdFx0c2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcblx0XHRcdH0sIDEwMDAgKTtcblx0XHR9LFxuXG5cdFx0bGljZW5zZUFjdGlvbigpIHtcblx0XHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdFx0dGhpcy5saWNlbnNlUHJvY2Nlc2luZ1N0YXRlID0gdHJ1ZTtcblxuXHRcdFx0c2VsZi5saWNlbnNlQWpheEFjdGlvbiA9IGpRdWVyeS5hamF4KCB7XG5cdFx0XHRcdHR5cGU6ICdQT1NUJyxcblx0XHRcdFx0dXJsOiB3aW5kb3cuSmV0RkJQYWdlQ29uZmlnLmFqYXhVcmwsXG5cdFx0XHRcdGRhdGFUeXBlOiAnanNvbicsXG5cdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRhY3Rpb246ICdqZmJfbGljZW5zZV9hY3Rpb24nLFxuXHRcdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRcdGxpY2Vuc2U6IHNlbGYubGljZW5zZUtleSxcblx0XHRcdFx0XHRcdGFjdGlvbjogc2VsZi5saWNlbnNlQWN0aW9uVHlwZVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0YmVmb3JlU2VuZDogKCBqcVhIUiwgYWpheFNldHRpbmdzICkgPT4ge1xuXG5cdFx0XHRcdFx0aWYgKCBudWxsICE9PSBzZWxmLmxpY2Vuc2VBamF4QWN0aW9uICkge1xuXHRcdFx0XHRcdFx0c2VsZi5saWNlbnNlQWpheEFjdGlvbi5hYm9ydCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0c3VjY2VzczogKCByZXNwb25jZSwgdGV4dFN0YXR1cywganFYSFIgKSA9PiB7XG5cdFx0XHRcdFx0c2VsZi5saWNlbnNlUHJvY2Nlc2luZ1N0YXRlID0gZmFsc2U7XG5cblx0XHRcdFx0XHRpZiAoIHJlc3BvbmNlLnN1Y2Nlc3MgKSB7XG5cdFx0XHRcdFx0XHRzZWxmLiRDWE5vdGljZS5hZGQoIHtcblx0XHRcdFx0XHRcdFx0bWVzc2FnZTogcmVzcG9uY2UubWVzc2FnZSxcblx0XHRcdFx0XHRcdFx0dHlwZTogJ3N1Y2Nlc3MnLFxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogNDAwMCxcblx0XHRcdFx0XHRcdH0gKTtcblxuXHRcdFx0XHRcdFx0bGV0IGxpY2Vuc2VEYXRhID0gcmVzcG9uY2UuZGF0YTtcblxuXHRcdFx0XHRcdFx0bGljZW5zZURhdGFbJ2xpY2Vuc2Vfa2V5J10gPSBzZWxmLmxpY2Vuc2VLZXk7XG5cblx0XHRcdFx0XHRcdHN3aXRjaCAoIHNlbGYubGljZW5zZUFjdGlvblR5cGUgKSB7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ2FjdGl2YXRlX2xpY2Vuc2UnOlxuXG5cdFx0XHRcdFx0XHRcdFx0c2VsZi5saWNlbnNlTGlzdC5wdXNoKCBsaWNlbnNlRGF0YSApO1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRjYXNlICdkZWFjdGl2YXRlX2xpY2Vuc2UnOlxuXG5cdFx0XHRcdFx0XHRcdFx0c2VsZi5saWNlbnNlTGlzdCA9IHNlbGYubGljZW5zZUxpc3QuZmlsdGVyKCAoIGxpY2Vuc2VEYXRhICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHNlbGYubGljZW5zZUtleSAhPT0gbGljZW5zZURhdGFbJ2xpY2Vuc2Vfa2V5J107XG5cdFx0XHRcdFx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdFx0XHRcdFx0c2VsZi5saWNlbnNlS2V5ID0gJyc7XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHNlbGYuJENYTm90aWNlLmFkZCgge1xuXHRcdFx0XHRcdFx0XHRtZXNzYWdlOiByZXNwb25jZS5tZXNzYWdlLFxuXHRcdFx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogNDAwMCxcblx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHR9LFxuXG5cdFx0Y2hlY2tQbHVnaW5zVXBkYXRlOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdFx0c2VsZi5jaGVja1VwZGF0ZXNBY3Rpb24gPSBqUXVlcnkuYWpheCgge1xuXHRcdFx0XHR0eXBlOiAnUE9TVCcsXG5cdFx0XHRcdHVybDogd2luZG93LkpldEZCUGFnZUNvbmZpZy5hamF4VXJsLFxuXHRcdFx0XHRkYXRhVHlwZTogJ2pzb24nLFxuXHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0YWN0aW9uOiAnamZiX2xpY2Vuc2Vfc2VydmljZV9hY3Rpb24nLFxuXHRcdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRcdGFjdGlvbjogJ2NoZWNrLXBsdWdpbi11cGRhdGUnXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRiZWZvcmVTZW5kOiAoIGpxWEhSLCBhamF4U2V0dGluZ3MgKSA9PiB7XG5cblx0XHRcdFx0XHRpZiAoIG51bGwgIT09IHNlbGYuY2hlY2tVcGRhdGVzQWN0aW9uICkge1xuXHRcdFx0XHRcdFx0c2VsZi5jaGVja1VwZGF0ZXNBY3Rpb24uYWJvcnQoKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRzZWxmLmNoZWNrVXBkYXRlc1Byb2Nlc3NlZCA9IHRydWU7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKCByZXNwb25jZSwgdGV4dFN0YXR1cywganFYSFIgKSB7XG5cdFx0XHRcdFx0c2VsZi5jaGVja1VwZGF0ZXNQcm9jZXNzZWQgPSBmYWxzZTtcblxuXHRcdFx0XHRcdGlmICggcmVzcG9uY2Uuc3VjY2VzcyApIHtcblx0XHRcdFx0XHRcdHNlbGYuJENYTm90aWNlLmFkZCgge1xuXHRcdFx0XHRcdFx0XHRtZXNzYWdlOiByZXNwb25jZS5tZXNzYWdlLFxuXHRcdFx0XHRcdFx0XHR0eXBlOiAnc3VjY2VzcycsXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiA0MDAwLFxuXHRcdFx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdFx0XHRzZWxmLnByb2NjZXNpbmdTdGF0ZSA9IHRydWU7XG5cblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG5cdFx0XHRcdFx0XHR9LCAxMDAwICk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHNlbGYuJENYTm90aWNlLmFkZCgge1xuXHRcdFx0XHRcdFx0XHRtZXNzYWdlOiByZXNwb25jZS5tZXNzYWdlLFxuXHRcdFx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogNDAwMCxcblx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHR9LFxuXG5cdFx0YWRkTGljZW5zZSggbGljZW5zZURhdGEgKSB7XG5cdFx0XHR0aGlzLmxpY2Vuc2VMaXN0LnB1c2goIGxpY2Vuc2VEYXRhICk7XG5cblx0XHRcdHNlbGYucHJvY2Nlc2luZ1N0YXRlID0gdHJ1ZTtcblxuXHRcdFx0c2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcblx0XHRcdH0sIDMwMDAgKTtcblx0XHR9LFxuXG5cdFx0cmVtb3ZlTGljZW5zZSggbGljZW5jZUtleSApIHtcblxuXHRcdFx0bGV0IHJlbW92aW5nSW5kZXggPSBmYWxzZTtcblxuXHRcdFx0Zm9yICggbGV0IGxpY2VuY2VJbmRleCBpbiB0aGlzLmxpY2Vuc2VMaXN0ICkge1xuXHRcdFx0XHRsZXQgbGljZW5zZURhdGEgPSAgdGhpcy5saWNlbnNlTGlzdFsgbGljZW5jZUluZGV4IF07XG5cblx0XHRcdFx0aWYgKCBsaWNlbnNlRGF0YVsnbGljZW5zZUtleSddID09PSBsaWNlbmNlS2V5ICkge1xuXHRcdFx0XHRcdHJlbW92aW5nSW5kZXggPSBsaWNlbmNlSW5kZXg7XG5cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIHJlbW92aW5nSW5kZXggKSB7XG5cdFx0XHRcdHRoaXMubGljZW5zZUxpc3Quc3BsaWNlKCByZW1vdmluZ0luZGV4LCAxICk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMubGljZW5zZVBvcHVwVmlzaWJsZSA9IGZhbHNlO1xuXG5cdFx0XHRzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcblx0XHRcdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuXHRcdFx0fSwgNTAwICk7XG5cdFx0fSxcblx0fSxcbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cblxuLnByb2NjZXNpbmctc3RhdGUge1xuXHRvcGFjaXR5OiAwLjU7XG5cdHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uamZiLWFkZG9ucy1wYWdlIHtcblx0Jl9faW5uZXIge1xuXHRcdHBhZGRpbmc6IDMwcHg7XG5cdFx0aGVpZ2h0OiAxMDAlO1xuXHR9XG5cblx0Jl9faGVhZGVyIHtcblx0XHRwYWRkaW5nLWJvdHRvbTogMjBweDtcblx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RDRENERDtcblx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1xuXHR9XG5cblx0Jl9faGVhZGVyLWNvbnRyb2xzIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblxuXHRcdD4gLmN4LXZ1aS1idXR0b24ge1xuXHRcdFx0bWFyZ2luLWxlZnQ6IDEwcHg7XG5cdFx0fVxuXHR9XG5cblx0LmN4LXZ1aS1idXR0b24ge1xuXHRcdGZvbnQtc2l6ZTogMTNweDtcblx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG5cdFx0LmJ1dHRvbi1pY29uIHtcblx0XHRcdG1hcmdpbi1yaWdodDogNXB4O1xuXHRcdH1cblxuXHRcdCYtLXN0eWxlLWFjY2VudCB7XG5cdFx0XHRjb2xvcjogIzAwN2NiYTtcblx0XHRcdGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjMDA3Y2JhO1xuXG5cdFx0XHQuYnV0dG9uLWljb24ge1xuXHRcdFx0XHRwYXRoIHtcblx0XHRcdFx0XHRmaWxsOiAjMDA3Y2JhO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Jl9fY29udGVudCB7XG5cdFx0XHQ+IHNwYW4ge1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQuY3gtdnVpLXBvcHVwIHtcblx0XHQmX19oZWFkZXIge1xuXHRcdFx0cGFkZGluZy1ib3R0b206IDE1cHg7XG5cdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RDRENERDtcblx0XHRcdG1hcmdpbi1ib3R0b206IDMwcHg7XG5cdFx0fVxuXG5cdFx0Jl9faGVhZGVyLXRpdGxlIHtcblx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRmb250LXNpemU6IDI0cHg7XG5cdFx0XHRsaW5lLWhlaWdodDogMzZweDtcblx0XHRcdGNvbG9yOiAjMjMyODJEO1xuXHRcdH1cblx0fVxuXG5cdCZfX2xpY2Vuc2UtcG9wdXAge1xuXG5cdH1cblxuXHQmX19saWNlbnNlLWZvcm0ge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cdFx0YWxpZ24taXRlbXM6IHN0cmV0Y2g7XG5cblx0XHQ+IHNwYW4ge1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0XHR9XG5cdH1cblxuXHQmX19saWNlbnNlLWlucHV0IHtcblx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xuXHR9XG59XG5cbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxuXHQ8ZGl2XG5cdFx0Y2xhc3M9XCJqZmItYWRkb25zX19pdGVtXCJcblx0XHQ6Y2xhc3M9XCJ7XG5cdFx0XHQnYWN0aXZhdGVkJzogYWRkb25EYXRhLmlzQWN0aXZhdGVkLFxuXHRcdFx0J3VwZGF0ZS1hdmFsaWFibGUnOiB1cGRhdGVBY3Rpb25BdmFsaWFibGUsXG5cdFx0fVwiXG5cdD5cblx0XHQ8ZGl2XG5cdFx0XHRjbGFzcz1cImpmYi1hZGRvbnNfX2l0ZW0taW5uZXJcIlxuXHRcdFx0OmNsYXNzPVwieyAncHJvY2Nlc2luZy1zdGF0ZSc6IHByb2NjZXNpbmdTdGF0ZSB9XCJcblx0XHQ+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiamZiLWFkZG9uc19faXRlbS10aHVtYlwiPlxuXHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0OnNyYz1cImFkZG9uRGF0YS50aHVtYlwiXG5cdFx0XHRcdD5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cImpmYi1hZGRvbnNfX2l0ZW0taW5mb1wiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiamZiLWFkZG9uc19faXRlbS1uYW1lXCI+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJsYWJlbFwiPnt7IGFkZG9uRGF0YS5uYW1lIH19PC9zcGFuPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwidmVyc2lvblwiPnt7IGFkZG9uRGF0YS5jdXJyZW50VmVyc2lvbiB9fTwvc3Bhbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRjbGFzcz1cImpmYi1hZGRvbnNfX2l0ZW0tdXBkYXRlXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxkaXYgdi1pZj1cIiF1cGRhdGVBY3Rpb25BdmFsaWFibGVcIj5Zb3VyIHBsdWdpbiBpcyB1cCB0byBkYXRlPC9kaXY+XG5cdFx0XHRcdFx0PGRpdiB2LWlmPVwidXBkYXRlQWN0aW9uQXZhbGlhYmxlXCI+XG5cdFx0XHRcdFx0XHRWZXJzaW9uIDxzcGFuIGNsYXNzPVwibGF0ZXN0LXZlcnNpb25cIj57eyBhZGRvbkRhdGEudmVyc2lvbiB9fTwvc3Bhbj4gYXZhaWxhYmxlXG5cdFx0XHRcdFx0XHQ8Y3gtdnVpLWJ1dHRvblxuXHRcdFx0XHRcdFx0XHRidXR0b24tc3R5bGU9XCJsaW5rLWFjY2VudFwiXG5cdFx0XHRcdFx0XHRcdHNpemU9XCJsaW5rXCJcblx0XHRcdFx0XHRcdFx0OmxvYWRpbmc9XCJ1cGRhdGVQbHVnaW5Qcm9jZXNzZWRcIlxuXHRcdFx0XHRcdFx0XHRAY2xpY2s9XCJ1cGRhdGVQbHVnaW5cIlxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBzbG90PVwibGFiZWxcIj5cblx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5VcGRhdGUgTm93PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2N4LXZ1aS1idXR0b24+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0Y2xhc3M9XCJqZmItYWRkb25zX19pdGVtLWRlc2NcIlxuXHRcdFx0XHRcdHYtaHRtbD1cImFkZG9uRGF0YS5kZXNjXCJcblx0XHRcdFx0PjwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiamZiLWFkZG9uc19faXRlbS1hY3Rpb25zXCI+XG5cblx0XHRcdFx0XHQ8Y3gtdnVpLWJ1dHRvblxuXHRcdFx0XHRcdFx0YnV0dG9uLXN0eWxlPVwibGluay1hY2NlbnRcIlxuXHRcdFx0XHRcdFx0c2l6ZT1cImxpbmtcIlxuXHRcdFx0XHRcdFx0di1pZj1cImxlYXJuTW9yZUF2YWxpYWJsZVwiXG5cdFx0XHRcdFx0XHQ6dXJsPVwiYWRkb25EYXRhLmRlbW9cIlxuXHRcdFx0XHRcdFx0dGFnLW5hbWU9XCJhXCJcblx0XHRcdFx0XHRcdHRhcmdldD1cIl9ibGFua1wiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PHNwYW4gc2xvdD1cImxhYmVsXCI+XG5cdFx0XHRcdFx0XHRcdDxzcGFuPkxlYXJuIE1vcmU8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0PC9jeC12dWktYnV0dG9uPlxuXHRcdFx0XHRcdDxjeC12dWktYnV0dG9uXG5cdFx0XHRcdFx0XHRidXR0b24tc3R5bGU9XCJsaW5rLWFjY2VudFwiXG5cdFx0XHRcdFx0XHRzaXplPVwibGlua1wiXG5cdFx0XHRcdFx0XHR2LWlmPVwiaW5zdGFsbEFjdGlvbkF2YWxpYWJsZVwiXG5cdFx0XHRcdFx0XHRAY2xpY2s9XCJpbnN0YWxsUGx1Z2luXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8c3BhbiBzbG90PVwibGFiZWxcIj5cblx0XHRcdFx0XHRcdFx0PHNwYW4+SW5zdGFsbCBQbHVnaW48L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0PC9jeC12dWktYnV0dG9uPlxuXHRcdFx0XHRcdDxjeC12dWktYnV0dG9uXG5cdFx0XHRcdFx0XHRidXR0b24tc3R5bGU9XCJsaW5rLWFjY2VudFwiXG5cdFx0XHRcdFx0XHRzaXplPVwibGlua1wiXG5cdFx0XHRcdFx0XHR2LWlmPVwiYWN0aXZhdGVBY3Rpb25BdmFsaWFibGVcIlxuXHRcdFx0XHRcdFx0QGNsaWNrPVwiYWN0aXZhdGVQbHVnaW5cIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxzcGFuIHNsb3Q9XCJsYWJlbFwiPlxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj5BY3RpdmF0ZSBQbHVnaW48L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0PC9jeC12dWktYnV0dG9uPlxuXHRcdFx0XHRcdDxjeC12dWktYnV0dG9uXG5cdFx0XHRcdFx0XHRidXR0b24tc3R5bGU9XCJsaW5rLWFjY2VudFwiXG5cdFx0XHRcdFx0XHRzaXplPVwibGlua1wiXG5cdFx0XHRcdFx0XHR2LWlmPVwiZGVhY3RpdmF0ZUFjdGlvbkF2YWxpYWJsZVwiXG5cdFx0XHRcdFx0XHRAY2xpY2s9XCJkZWFjdGl2YXRlUGx1Z2luXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8c3BhbiBzbG90PVwibGFiZWxcIj5cblx0XHRcdFx0XHRcdFx0PHNwYW4+RGVhY3RpdmF0ZSBQbHVnaW48L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0PC9jeC12dWktYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRuYW1lOiAnYWRkb24taXRlbScsXG5cdHByb3BzOiB7XG5cdFx0YWRkb25EYXRhOiBPYmplY3Rcblx0fSxcblx0ZGF0YSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0YWN0aW9uUGx1Z2luOiBmYWxzZSxcblx0XHRcdGFjdGlvblBsdWdpblJlcXVlc3Q6IG51bGwsXG5cdFx0XHRhY3Rpb25QbHVnaW5Qcm9jZXNzZWQ6IGZhbHNlLFxuXHRcdFx0dXBkYXRlUGx1Z2luUHJvY2Vzc2VkOiBmYWxzZSxcblx0XHR9O1xuXHR9LFxuXHRjb21wdXRlZDoge1xuXHRcdGNsYXNzTGlzdDogZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gW1xuXHRcdFx0XHQnamZiLWFkZG9uc19faXRlbScsXG5cdFx0XHRcdHRoaXMudXBkYXRlQXZhbGlhYmxlID8gJ3VwZGF0ZS1hdmFsaWFibGUnIDogZmFsc2UsXG5cdFx0XHRcdHRoaXMuYWN0aXZhdGVBdmFsaWFibGUgPyAnYWN0aXZhdGUtYXZhbGlhYmxlJyA6IGZhbHNlLFxuXHRcdFx0XTtcblx0XHR9LFxuXG5cdFx0bGVhcm5Nb3JlQXZhbGlhYmxlKCkge1xuXHRcdFx0cmV0dXJuICggISB0aGlzLiRwYXJlbnQuaXNMaWNlbnNlQWN0aXZhdGVkICkgPyB0cnVlIDogZmFsc2U7XG5cdFx0fSxcblxuXHRcdGluc3RhbGxBY3Rpb25BdmFsaWFibGUoKSB7XG5cdFx0XHRyZXR1cm4gKCAhIHRoaXMuYWRkb25EYXRhWydpc0luc3RhbGxlZCddICYmIHRoaXMuJHBhcmVudC5pc0xpY2Vuc2VBY3RpdmF0ZWQgKSA/IHRydWUgOiBmYWxzZTtcblx0XHR9LFxuXG5cdFx0YWN0aXZhdGVBY3Rpb25BdmFsaWFibGUoKSB7XG5cdFx0XHRyZXR1cm4gKCB0aGlzLmFkZG9uRGF0YVsnaXNJbnN0YWxsZWQnXSAmJiAhIHRoaXMuYWRkb25EYXRhWydpc0FjdGl2YXRlZCddICkgPyB0cnVlIDogZmFsc2U7XG5cdFx0fSxcblxuXHRcdGRlYWN0aXZhdGVBY3Rpb25BdmFsaWFibGUoKSB7XG5cdFx0XHRyZXR1cm4gKCB0aGlzLmFkZG9uRGF0YVsnaXNJbnN0YWxsZWQnXSAmJiB0aGlzLmFkZG9uRGF0YVsnaXNBY3RpdmF0ZWQnXSApID8gdHJ1ZSA6IGZhbHNlO1xuXHRcdH0sXG5cblx0XHR1cGRhdGVBY3Rpb25BdmFsaWFibGUoKSB7XG5cdFx0XHRyZXR1cm4gKCB0aGlzLmFkZG9uRGF0YVsndXBkYXRlQXZhbGlhYmxlJ10gKSA/IHRydWUgOiBmYWxzZTtcblx0XHR9LFxuXG5cdFx0cHJvY2Nlc2luZ1N0YXRlKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuYWN0aW9uUGx1Z2luUHJvY2Vzc2VkIHx8IHRoaXMudXBkYXRlUGx1Z2luUHJvY2Vzc2VkO1xuXHRcdH1cblxuXHR9LFxuXHRtZXRob2RzOiB7XG5cblx0XHRpbnN0YWxsUGx1Z2luOiBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMuYWN0aW9uUGx1Z2luID0gJ2luc3RhbGwnO1xuXHRcdFx0dGhpcy5wbHVnaW5BY3Rpb24oKTtcblx0XHR9LFxuXG5cdFx0ZGVhY3RpdmF0ZVBsdWdpbjogZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLmFjdGlvblBsdWdpbiA9ICdkZWFjdGl2YXRlJztcblx0XHRcdHRoaXMucGx1Z2luQWN0aW9uKCk7XG5cdFx0fSxcblxuXHRcdGFjdGl2YXRlUGx1Z2luOiBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMuYWN0aW9uUGx1Z2luID0gJ2FjdGl2YXRlJztcblx0XHRcdHRoaXMucGx1Z2luQWN0aW9uKCk7XG5cdFx0fSxcblxuXHRcdHVwZGF0ZVBsdWdpbjogZnVuY3Rpb24oKSB7XG5cblx0XHRcdGlmICggdGhpcy51cGRhdGVBY3Rpb25BdmFsaWFibGUgKSB7XG5cdFx0XHRcdHRoaXMuYWN0aW9uUGx1Z2luID0gJ3VwZGF0ZSc7XG5cdFx0XHRcdHRoaXMucGx1Z2luQWN0aW9uKCk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdHBsdWdpbkFjdGlvbjogZnVuY3Rpb24oKSB7XG5cdFx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cblx0XHRcdHNlbGYuYWN0aW9uUGx1Z2luUmVxdWVzdCA9IGpRdWVyeS5hamF4KCB7XG5cdFx0XHRcdHR5cGU6ICdQT1NUJyxcblx0XHRcdFx0dXJsOiB3aW5kb3cuSmV0RkJQYWdlQ29uZmlnLmFqYXhVcmwsXG5cdFx0XHRcdGRhdGFUeXBlOiAnanNvbicsXG5cdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRhY3Rpb246ICdqZmJfYWRkb25fYWN0aW9uJyxcblx0XHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0XHRhY3Rpb246IHNlbGYuYWN0aW9uUGx1Z2luLFxuXHRcdFx0XHRcdFx0cGx1Z2luOiBzZWxmLmFkZG9uRGF0YVsnc2x1ZyddXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRiZWZvcmVTZW5kOiBmdW5jdGlvbigganFYSFIsIGFqYXhTZXR0aW5ncyApIHtcblxuXHRcdFx0XHRcdGlmICggbnVsbCAhPT0gc2VsZi5hY3Rpb25QbHVnaW5SZXF1ZXN0ICkge1xuXHRcdFx0XHRcdFx0c2VsZi5hY3Rpb25QbHVnaW5SZXF1ZXN0LmFib3J0KCk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0c2VsZi5hY3Rpb25QbHVnaW5Qcm9jZXNzZWQgPSB0cnVlO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbiggcmVzcG9uY2UsIHRleHRTdGF0dXMsIGpxWEhSICkge1xuXG5cdFx0XHRcdFx0c2VsZi5hY3Rpb25QbHVnaW5Qcm9jZXNzZWQgPSBmYWxzZTtcblxuXHRcdFx0XHRcdGlmICggcmVzcG9uY2Uuc3VjY2VzcyApIHtcblx0XHRcdFx0XHRcdHNlbGYuJENYTm90aWNlLmFkZCgge1xuXHRcdFx0XHRcdFx0XHRtZXNzYWdlOiByZXNwb25jZS5tZXNzYWdlLFxuXHRcdFx0XHRcdFx0XHR0eXBlOiAnc3VjY2VzcycsXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiA0MDAwLFxuXHRcdFx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdFx0XHR3aW5kb3cuamZiRXZlbnRCdXMuJGVtaXQoICd1cGRhdGVBZGRvbkRhdGEnLCB7XG5cdFx0XHRcdFx0XHRcdCdzbHVnJzogc2VsZi5hZGRvbkRhdGFbJ3NsdWcnXSxcblx0XHRcdFx0XHRcdFx0J2FkZG9uRGF0YSc6IHJlc3BvbmNlLmRhdGEsXG5cdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHNlbGYuJENYTm90aWNlLmFkZCgge1xuXHRcdFx0XHRcdFx0XHRtZXNzYWdlOiByZXNwb25jZS5tZXNzYWdlLFxuXHRcdFx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogNDAwMCxcblx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHR9XG5cdH0sXG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG5cbi5qZmItYWRkb25zIHtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcblx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgYXV0byk7XG5cdGdhcDogMjBweDtcblxuXHRAbWVkaWEgKG1heC13aWR0aDogMTE0MHB4KSB7XG5cdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcblx0XHRncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCBhdXRvKTtcblx0fVxuXG5cdCZfX2l0ZW0ge1xuXHRcdCYuYWN0aXZhdGVkIHtcblx0XHRcdC5qZmItYWRkb25zX19pdGVtLWluZm8ge1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQmLnVwZGF0ZS1hdmFsaWFibGUge1xuXHRcdFx0LmpmYi1hZGRvbnNfX2l0ZW0tbmFtZSB7XG5cdFx0XHRcdC52ZXJzaW9uIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRDYzMzZDO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQuamZiLWFkZG9uc19faXRlbS11cGRhdGUge1xuXHRcdFx0XHQubGF0ZXN0LXZlcnNpb24ge1xuXHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjNDZCNDUwO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDFweCA1cHg7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHR9XG5cdH1cblxuXHQmX19pdGVtLWlubmVyIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0YWxpZ24taXRlbXM6IHN0cmV0Y2g7XG5cdFx0aGVpZ2h0OiAxMDAlO1xuXHR9XG5cblx0Jl9faXRlbS10aHVtYiB7XG5cdFx0Ym9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcblx0XHRsaW5lLWhlaWdodDogMDtcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXG5cdFx0aW1nIHtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdH1cblx0fVxuXG5cdCZfX2l0ZW0taW5mbyB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuXHRcdGZsZXg6IDEgMSBhdXRvO1xuXHRcdHBhZGRpbmc6IDIwcHg7XG5cdFx0Ym9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcblx0XHRib3JkZXItd2lkdGg6IDAgMXB4IDFweCAxcHg7XG5cdFx0Ym9yZGVyLWNvbG9yOiAjRENEQ0REO1xuXHRcdGJvcmRlci1zdHlsZTogc29saWQ7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcblx0fVxuXG5cdCZfX2l0ZW0tbmFtZSB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcblxuXHRcdC5sYWJlbCB7XG5cdFx0XHRmb250LXNpemU6IDIwcHg7XG5cdFx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdFx0bGluZS1oZWlnaHQ6IDEuMjU7XG5cdFx0fVxuXG5cdFx0LnZlcnNpb24ge1xuXHRcdFx0cGFkZGluZzogM3B4IDhweDtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDRweDtcblx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICM0NkI0NTA7XG5cdFx0XHRtYXJnaW4tbGVmdDogMTBweDtcblx0XHR9XG5cdH1cblxuXHQmX19pdGVtLXVwZGF0ZSB7XG5cdFx0Y29sb3I6ICM3YjdlODE7XG5cdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0fVxuXG5cdCZfX2l0ZW0tZGVzYyB7XG5cdFx0ZmxleDogMSAxIGF1dG87XG5cdFx0bWFyZ2luLWJvdHRvbTogMjBweDtcblx0fVxuXG5cdCZfX2l0ZW0tYWN0aW9ucyB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblxuXHRcdC5jeC12dWktYnV0dG9uIHtcblx0XHRcdG1hcmdpbi1yaWdodDogMTBweDtcblx0XHR9XG5cdH1cbn1cblxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XG5cdDxkaXYgY2xhc3M9XCJqZXQtZmItc2V0dGluZ3MtcGFnZSB3cmFwXCI+XG5cdFx0PGgxIGNsYXNzPVwiY3MtdnVpLXRpdGxlXCI+e3sgJ0pldEZvcm1zIFNldHRpbmdzJyB9fTwvaDE+XG5cdFx0PGRpdiBjbGFzcz1cImN4LXZ1aS1wYW5lbFwiPlxuXHRcdFx0PGN4LXZ1aS10YWJzXG5cdFx0XHRcdDppbi1wYW5lbD1cImZhbHNlXCJcblx0XHRcdFx0OnZhbHVlPVwiYWN0aXZlVGFiU2x1Z1wiXG5cdFx0XHRcdGxheW91dD1cInZlcnRpY2FsXCJcblx0XHRcdD5cblx0XHRcdFx0PGN4LXZ1aS10YWJzLXBhbmVsXG5cdFx0XHRcdFx0di1mb3I9XCIoIHsgZGlzcGxheUJ1dHRvbiA9IHRydWUsIC4uLnRhYiB9LCBpbmRleCApIGluIHRhYnNcIlxuXHRcdFx0XHRcdDpuYW1lPVwidGFiLmNvbXBvbmVudC5uYW1lXCJcblx0XHRcdFx0XHQ6bGFiZWw9XCJ0YWIudGl0bGVcIlxuXHRcdFx0XHRcdDprZXk9XCJ0YWIuY29tcG9uZW50Lm5hbWVcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PGtlZXAtYWxpdmU+XG5cdFx0XHRcdFx0XHQ8Y29tcG9uZW50XG5cdFx0XHRcdFx0XHRcdHYtYmluZDppcz1cInRhYi5jb21wb25lbnRcIlxuXHRcdFx0XHRcdFx0XHQ6aW5jb21pbmc9XCJnZXRJbmNvbWluZyggdGFiLmNvbXBvbmVudC5uYW1lIClcIlxuXHRcdFx0XHRcdFx0XHRyZWY9XCJ0YWJDb21wb25lbnRzXCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9rZWVwLWFsaXZlPlxuXHRcdFx0XHRcdDxjeC12dWktYnV0dG9uXG5cdFx0XHRcdFx0XHR2LWlmPVwiZGlzcGxheUJ1dHRvblwiXG5cdFx0XHRcdFx0XHRidXR0b24tc3R5bGU9XCJhY2NlbnRcIlxuXHRcdFx0XHRcdFx0OmxvYWRpbmc9XCJsb2FkaW5nVGFiWyB0YWIuY29tcG9uZW50Lm5hbWUgXVwiXG5cdFx0XHRcdFx0XHRAY2xpY2s9XCJvblNhdmVUYWIoIGluZGV4LCB0YWIuY29tcG9uZW50Lm5hbWUgKVwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PHRlbXBsYXRlICNsYWJlbD5cblx0XHRcdFx0XHRcdFx0PHNwYW4+U2F2ZTwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvdGVtcGxhdGU+XG5cdFx0XHRcdFx0PC9jeC12dWktYnV0dG9uPlxuXHRcdFx0XHQ8L2N4LXZ1aS10YWJzLXBhbmVsPlxuXHRcdFx0PC9jeC12dWktdGFicz5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0ICogYXMgY2FwdGNoYSBmcm9tICcuL3RhYnMvY2FwdGNoYSdcbmltcG9ydCAqIGFzIG1haWxjaGltcCBmcm9tICcuL3RhYnMvbWFpbGNoaW1wJ1xuaW1wb3J0ICogYXMgZ2V0UmVzcG9uc2UgZnJvbSAnLi90YWJzL2dldHJlc3BvbnNlJ1xuaW1wb3J0ICogYXMgYWN0aXZlY2FtcGFpZ24gZnJvbSAnLi90YWJzL2FjdGl2ZWNhbXBhaWduJ1xuaW1wb3J0ICogYXMgcGF5bWVudEdhdGV3YXlzIGZyb20gJy4vdGFicy9wYXltZW50cy1nYXRld2F5cydcbmltcG9ydCBTYXZlVGFiQnlBamF4IGZyb20gJ0BhZG1pbi9taXhpbnMvU2F2ZVRhYkJ5QWpheCc7XG5pbXBvcnQgR2V0SW5jb21pbmcgZnJvbSAnQGFkbWluL21peGlucy9HZXRJbmNvbWluZyc7XG5cbmNvbnN0IHsgYXBwbHlGaWx0ZXJzLCBkb0FjdGlvbiB9ID0gd3AuaG9va3M7XG5cbndpbmRvdy5qZmJFdmVudEJ1cyA9IG5ldyBWdWUoKTtcblxuY29uc3Qgc2V0dGluZ1RhYnMgPSBhcHBseUZpbHRlcnMoICdqZXQuZmIucmVnaXN0ZXIuc2V0dGluZ3MtcGFnZS50YWJzJywgW1xuXHRwYXltZW50R2F0ZXdheXMsXG5cdGNhcHRjaGEsXG5cdG1haWxjaGltcCxcblx0Z2V0UmVzcG9uc2UsXG5cdGFjdGl2ZWNhbXBhaWduLFxuXSApO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdG5hbWU6ICdqZmItc2V0dGluZ3MnLFxuXHRkYXRhKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRhY3RpdmVUYWJTbHVnOiBzZXR0aW5nVGFic1sgMCBdLmNvbXBvbmVudC5uYW1lLFxuXHRcdFx0dGFiczogc2V0dGluZ1RhYnMsXG5cdFx0XHRsb2FkaW5nVGFiOiB7fSxcblx0XHR9O1xuXHR9LFxuXHRtaXhpbnM6IFsgU2F2ZVRhYkJ5QWpheCwgR2V0SW5jb21pbmcgXSxcblx0Y3JlYXRlZCgpIHtcblx0XHRqZmJFdmVudEJ1cy4kb24oICdyZXF1ZXN0LXN0YXRlJywgcHJvcHMgPT4ge1xuXHRcdFx0Y29uc3QgeyBzdGF0ZSwgc2x1ZyB9ID0gcHJvcHM7XG5cdFx0XHR0aGlzLiRzZXQoIHRoaXMubG9hZGluZ1RhYiwgc2x1Zywgc3RhdGUgPT09ICdiZWdpbicgKTtcblx0XHR9ICk7XG5cdH0sXG5cdG1ldGhvZHM6IHtcblx0XHRvblNhdmVUYWIoIGluZGV4VGFiLCB0YWJTbHVnICkge1xuXHRcdFx0Y29uc3QgY3VycmVudFRhYiA9IHRoaXMuJHJlZnMudGFiQ29tcG9uZW50c1sgaW5kZXhUYWIgXTtcblxuXHRcdFx0dGhpcy5zYXZlQnlBamF4KCBjdXJyZW50VGFiLCB0YWJTbHVnICk7XG5cdFx0fSxcblx0fSxcbn1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cblx0PHNlY3Rpb24+XG5cdFx0PGN4LXZ1aS1pbnB1dFxuXHRcdFx0OmxhYmVsPVwibGFiZWwuY2xpZW50X2lkXCJcblx0XHRcdDp3cmFwcGVyLWNzcz1cIlsgJ2VxdWFsd2lkdGgnIF1cIlxuXHRcdFx0OnNpemU9XCInZnVsbHdpZHRoJ1wiXG5cdFx0XHR2LW1vZGVsPVwic3RvcmFnZS5jbGllbnRfaWRcIlxuXHRcdD48L2N4LXZ1aS1pbnB1dD5cblx0XHQ8Y3gtdnVpLWlucHV0XG5cdFx0XHQ6bGFiZWw9XCJsYWJlbC5zZWNyZXRcIlxuXHRcdFx0OndyYXBwZXItY3NzPVwiWyAnZXF1YWx3aWR0aCcgXVwiXG5cdFx0XHQ6c2l6ZT1cIidmdWxsd2lkdGgnXCJcblx0XHRcdHYtbW9kZWw9XCJzdG9yYWdlLnNlY3JldFwiXG5cdFx0PjwvY3gtdnVpLWlucHV0PlxuXHQ8L3NlY3Rpb24+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQge1xuXHRoZWxwLFxuXHRsYWJlbCxcbn0gZnJvbSBcIi4vc291cmNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0bmFtZTogJ3BheXBhbCcsXG5cdHByb3BzOiB7XG5cdFx0aW5jb21pbmc6IHtcblx0XHRcdHR5cGU6IE9iamVjdCxcblx0XHRcdGRlZmF1bHQoKSB7XG5cdFx0XHRcdHJldHVybiB7fTtcblx0XHRcdH0sXG5cdFx0fSxcblx0fSxcblx0ZGF0YSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bGFiZWwsIGhlbHAsXG5cdFx0XHRzdG9yYWdlOiB7fSxcblx0XHR9O1xuXHR9LFxuXHRjcmVhdGVkKCkge1xuXHRcdHRoaXMuc3RvcmFnZSA9IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCB0aGlzLmluY29taW5nICkgKTtcblx0fSxcblx0bWV0aG9kczoge1xuXHRcdGdldFJlcXVlc3RPblNhdmUoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRkYXRhOiB7IC4uLnRoaXMuc3RvcmFnZSB9LFxuXHRcdFx0fTtcblx0XHR9LFxuXHR9LFxufVxuXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG5cdDxkaXY+XG5cdFx0PGN4LXZ1aS1pbnB1dFxuXHRcdFx0OmxhYmVsPVwibGFiZWwuYXBpX2tleVwiXG5cdFx0XHQ6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJyBdXCJcblx0XHRcdDpzaXplPVwiJ2Z1bGx3aWR0aCdcIlxuXHRcdFx0di1tb2RlbD1cImFwaV9rZXlcIlxuXHRcdC8+XG5cdFx0PGN4LXZ1aS1pbnB1dFxuXHRcdFx0OmxhYmVsPVwibGFiZWwuYXBpX3VybFwiXG5cdFx0XHQ6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJyBdXCJcblx0XHRcdDpzaXplPVwiJ2Z1bGx3aWR0aCdcIlxuXHRcdFx0di1tb2RlbD1cImFwaV91cmxcIlxuXHRcdC8+XG5cdFx0PHAgY2xhc3M9XCJmYi1kZXNjcmlwdGlvblwiPnt7IGhlbHAuYXBpUHJlZiB9fSA8YSA6aHJlZj1cImhlbHAuYXBpTGlua1wiIHRhcmdldD1cIl9ibGFua1wiPnt7IGhlbHAuYXBpTGlua0xhYmVsIH19PC9hPlxuXHRcdDwvcD5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQge1xuXHRoZWxwLFxuXHRsYWJlbFxufSBmcm9tIFwiLi9zb3VyY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRuYW1lOiAnYWN0aXZlLWNhbXBhaWduLXRhYicsXG5cdHByb3BzOiB7XG5cdFx0aW5jb21pbmc6IHtcblx0XHRcdHR5cGU6IE9iamVjdCxcblx0XHRcdGRlZmF1bHQ6IHt9LFxuXHRcdH0sXG5cdH0sXG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGxhYmVsLCBoZWxwLFxuXHRcdFx0YXBpX2tleTogJycsXG5cdFx0XHRhcGlfdXJsOiAnJ1xuXHRcdH07XG5cdH0sXG5cdGNyZWF0ZWQoKSB7XG5cdFx0dGhpcy5hcGlfa2V5ID0gdGhpcy5pbmNvbWluZy5hcGlfa2V5IHx8ICcnXG5cdFx0dGhpcy5hcGlfdXJsID0gdGhpcy5pbmNvbWluZy5hcGlfdXJsIHx8ICcnXG5cdH0sXG5cdG1ldGhvZHM6IHtcblx0XHRnZXRSZXF1ZXN0T25TYXZlKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdGFwaV9rZXk6IHRoaXMuYXBpX2tleSxcblx0XHRcdFx0XHRhcGlfdXJsOiB0aGlzLmFwaV91cmxcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9XG5cdH1cbn1cblxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuXHQ8ZGl2PlxuXHRcdDxjeC12dWktaW5wdXRcblx0XHRcdDpsYWJlbD1cImxhYmVsLmtleVwiXG5cdFx0XHQ6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJyBdXCJcblx0XHRcdDpzaXplPVwiJ2Z1bGx3aWR0aCdcIlxuXHRcdFx0di1tb2RlbD1cImtleVwiXG5cdFx0PjwvY3gtdnVpLWlucHV0PlxuXHRcdDxjeC12dWktaW5wdXRcblx0XHRcdDpsYWJlbD1cImxhYmVsLnNlY3JldFwiXG5cdFx0XHQ6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJyBdXCJcblx0XHRcdDpzaXplPVwiJ2Z1bGx3aWR0aCdcIlxuXHRcdFx0di1tb2RlbD1cInNlY3JldFwiXG5cdFx0PjwvY3gtdnVpLWlucHV0PlxuXHRcdDxwIGNsYXNzPVwiZmItZGVzY3JpcHRpb25cIj57eyBoZWxwLmFwaVByZWYgfX0gPGEgOmhyZWY9XCJoZWxwLmFwaUxpbmtcIiB0YXJnZXQ9XCJfYmxhbmtcIj57eyBoZWxwLmFwaUxpbmtMYWJlbCB9fTwvYT5cblx0XHQ8L3A+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7XG5cdGxhYmVsLFxuXHRoZWxwLFxufSBmcm9tIFwiLi9zb3VyY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRuYW1lOiAnY2FwdGNoYS10YWInLFxuXHRwcm9wczoge1xuXHRcdGluY29taW5nOiB7XG5cdFx0XHR0eXBlOiBPYmplY3QsXG5cdFx0XHRkZWZhdWx0OiB7fSxcblx0XHR9LFxuXHR9LFxuXHRkYXRhKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRsYWJlbCwgaGVscCxcblx0XHRcdGtleTogJycsXG5cdFx0XHRzZWNyZXQ6ICcnLFxuXHRcdH07XG5cdH0sXG5cdGNyZWF0ZWQoKSB7XG5cdFx0dGhpcy5rZXkgPSB0aGlzLmluY29taW5nLmtleSB8fCAnJztcblx0XHR0aGlzLnNlY3JldCA9IHRoaXMuaW5jb21pbmcuc2VjcmV0IHx8ICcnO1xuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0Z2V0UmVxdWVzdE9uU2F2ZSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRzZWNyZXQ6IHRoaXMuc2VjcmV0LFxuXHRcdFx0XHRcdGtleTogdGhpcy5rZXksXG5cdFx0XHRcdH0sXG5cdFx0XHR9O1xuXHRcdH0sXG5cdH0sXG59XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG5cdDxjeC12dWktaW5wdXRcblx0XHQ6bGFiZWw9XCJsYWJlbC5hcGlfa2V5XCJcblx0XHQ6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJyBdXCJcblx0XHQ6ZGVzY3JpcHRpb249J2AkeyBoZWxwLmFwaVByZWYgfSA8YSBocmVmPVwiJHsgaGVscC5hcGlMaW5rIH1cIiB0YXJnZXQ9XCJfYmxhbmtcIj4keyBoZWxwLmFwaUxpbmtMYWJlbCB9PC9hPmAnXG5cdFx0OnNpemU9XCInZnVsbHdpZHRoJ1wiXG5cdFx0di1tb2RlbD1cImFwaV9rZXlcIlxuXHQvPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IHtcblx0aGVscCxcblx0bGFiZWxcbn0gZnJvbSBcIi4vc291cmNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0bmFtZTogJ2dldC1yZXNwb25zZS10YWInLFxuXHRwcm9wczoge1xuXHRcdGluY29taW5nOiB7XG5cdFx0XHR0eXBlOiBPYmplY3QsXG5cdFx0XHRkZWZhdWx0OiB7fSxcblx0XHR9LFxuXHR9LFxuXHRkYXRhKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRsYWJlbCwgaGVscCxcblx0XHRcdGFwaV9rZXk6ICcnLFxuXHRcdH07XG5cdH0sXG5cdGNyZWF0ZWQoKSB7XG5cdFx0dGhpcy5hcGlfa2V5ID0gdGhpcy5pbmNvbWluZy5hcGlfa2V5IHx8ICcnXG5cdH0sXG5cdG1ldGhvZHM6IHtcblx0XHRnZXRSZXF1ZXN0T25TYXZlKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdGFwaV9rZXk6IHRoaXMuYXBpX2tleSxcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9XG5cdH1cbn1cblxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuXHQ8Y3gtdnVpLWlucHV0XG5cdFx0OmxhYmVsPVwibGFiZWwuYXBpX2tleVwiXG5cdFx0OndyYXBwZXItY3NzPVwiWyAnZXF1YWx3aWR0aCcgXVwiXG5cdFx0OmRlc2NyaXB0aW9uPSdgJHsgaGVscC5hcGlQcmVmIH0gPGEgaHJlZj1cIiR7IGhlbHAuYXBpTGluayB9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+JHsgaGVscC5hcGlMaW5rTGFiZWwgfTwvYT5gJ1xuXHRcdDpzaXplPVwiJ2Z1bGx3aWR0aCdcIlxuXHRcdHYtbW9kZWw9XCJhcGlfa2V5XCJcblx0Lz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCB7XG5cdGhlbHAsXG5cdGxhYmVsXG59IGZyb20gXCIuL3NvdXJjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdG5hbWU6ICdtYWlsY2hpbXAtdGFiJyxcblx0cHJvcHM6IHtcblx0XHRpbmNvbWluZzoge1xuXHRcdFx0dHlwZTogT2JqZWN0LFxuXHRcdFx0ZGVmYXVsdDoge30sXG5cdFx0fSxcblx0fSxcblx0ZGF0YSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bGFiZWwsIGhlbHAsXG5cdFx0XHRhcGlfa2V5OiAnJyxcblx0XHR9O1xuXHR9LFxuXHRjcmVhdGVkKCkge1xuXHRcdHRoaXMuYXBpX2tleSA9IHRoaXMuaW5jb21pbmcuYXBpX2tleSB8fCAnJ1xuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0Z2V0UmVxdWVzdE9uU2F2ZSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRhcGlfa2V5OiB0aGlzLmFwaV9rZXksXG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fVxuXHR9XG59XG5cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cblx0PHNlY3Rpb24+XG5cdFx0PGN4LXZ1aS1zd2l0Y2hlclxuXHRcdFx0bmFtZT1cInVzZV9nYXRld2F5c1wiXG5cdFx0XHQ6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJyBdXCJcblx0XHRcdDpsYWJlbD1cImxhYmVsLnVzZV9nYXRld2F5c1wiXG5cdFx0XHQ6ZGVzY3JpcHRpb249XCJoZWxwLnVzZV9nYXRld2F5c1wiXG5cdFx0XHQ6dmFsdWU9XCJzdG9yYWdlLnVzZV9nYXRld2F5c1wiXG5cdFx0XHRAaW5wdXQ9XCJjaGFuZ2VWYWwoICd1c2VfZ2F0ZXdheXMnLCAkZXZlbnQgKVwiXG5cdFx0PjwvY3gtdnVpLXN3aXRjaGVyPlxuXHRcdDxjeC12dWktc3dpdGNoZXJcblx0XHRcdHYtaWY9XCJzdG9yYWdlLnVzZV9nYXRld2F5c1wiXG5cdFx0XHRuYW1lPVwiZW5hYmxlX3Rlc3RfbW9kZVwiXG5cdFx0XHQ6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJyBdXCJcblx0XHRcdDpkZXNjcmlwdGlvbj1cImhlbHAuZW5hYmxlX3Rlc3RfbW9kZVwiXG5cdFx0XHQ6bGFiZWw9XCJsYWJlbC5lbmFibGVfdGVzdF9tb2RlXCJcblx0XHRcdDp2YWx1ZT1cInN0b3JhZ2UuZW5hYmxlX3Rlc3RfbW9kZVwiXG5cdFx0XHRAaW5wdXQ9XCJjaGFuZ2VWYWwoICdlbmFibGVfdGVzdF9tb2RlJywgJGV2ZW50IClcIlxuXHRcdD48L2N4LXZ1aS1zd2l0Y2hlcj5cblx0XHQ8dGVtcGxhdGUgdi1pZj1cInN0b3JhZ2UudXNlX2dhdGV3YXlzXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY3gtdnVpLWlubmVyLXBhbmVsXCI+XG5cdFx0XHRcdDxDeFZ1aUNvbGxhcHNlTWluaVxuXHRcdFx0XHRcdHdpdGgtcGFuZWxcblx0XHRcdFx0XHR2LWZvcj1cIiggdGFiLCBpbmRleCApIGluIGdhdGV3YXlzXCJcblx0XHRcdFx0XHQ6ZGVzYz1cInRhYi5kZXNjIHx8ICcnXCJcblx0XHRcdFx0XHQ6bGFiZWw9XCJ0YWIudGl0bGVcIlxuXHRcdFx0XHRcdDprZXk9XCJ0YWIuY29tcG9uZW50Lm5hbWVcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PGtlZXAtYWxpdmU+XG5cdFx0XHRcdFx0XHQ8Y29tcG9uZW50XG5cdFx0XHRcdFx0XHRcdHYtYmluZDppcz1cInRhYi5jb21wb25lbnRcIlxuXHRcdFx0XHRcdFx0XHRyZWY9XCJnYXRld2F5c1wiXG5cdFx0XHRcdFx0XHRcdDppbmNvbWluZz1cImdldEluY29taW5nKCB0YWIuY29tcG9uZW50Lm5hbWUgKVwiXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwva2VlcC1hbGl2ZT5cblx0XHRcdFx0XHQ8Y3gtdnVpLWJ1dHRvblxuXHRcdFx0XHRcdFx0YnV0dG9uLXN0eWxlPVwiYWNjZW50XCJcblx0XHRcdFx0XHRcdDpsb2FkaW5nPVwibG9hZGluZ0dhdGV3YXlzWyB0YWIuY29tcG9uZW50Lm5hbWUgXVwiXG5cdFx0XHRcdFx0XHRAY2xpY2s9XCJvblNhdmVHYXRld2F5KCBpbmRleCwgdGFiLmNvbXBvbmVudC5uYW1lIClcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxzcGFuIHNsb3Q9XCJsYWJlbFwiPlNhdmU8L3NwYW4+XG5cdFx0XHRcdFx0PC9jeC12dWktYnV0dG9uPlxuXHRcdFx0XHQ8L0N4VnVpQ29sbGFwc2VNaW5pPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC90ZW1wbGF0ZT5cblx0PC9zZWN0aW9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBDeFZ1aUNvbGxhcHNlTWluaSBmcm9tICdAYWRtaW4vY29tcG9uZW50cy9jb2xsYXBzZS1taW5pL0N4VnVpQ29sbGFwc2VNaW5pJztcbmltcG9ydCB7XG5cdGhlbHAsXG5cdGxhYmVsLFxufSBmcm9tIFwiLi9zb3VyY2VcIjtcbmltcG9ydCBTYXZlVGFiQnlBamF4IGZyb20gJ0BhZG1pbi9taXhpbnMvU2F2ZVRhYkJ5QWpheCc7XG5pbXBvcnQgR2V0SW5jb21pbmcgZnJvbSAnQGFkbWluL21peGlucy9HZXRJbmNvbWluZyc7XG5pbXBvcnQgKiBhcyBwYXlwYWwgZnJvbSAnLi4vLi4vZ2F0ZXdheXMvcGF5cGFsJztcblxuY29uc3QgeyBhcHBseUZpbHRlcnMgfSA9IHdwLmhvb2tzO1xuXG5jb25zdCBnYXRld2F5c1RhYnMgPSBhcHBseUZpbHRlcnMoICdqZXQuZmIucmVnaXN0ZXIuZ2F0ZXdheXMnLCBbXG5cdHBheXBhbCxcbl0gKTtcblxubGV0IHJlcXVlc3RGdW5jID0gKCkgPT4ge1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRuYW1lOiAncGF5bWVudHMtZ2F0ZXdheXMnLFxuXHRwcm9wczoge1xuXHRcdGluY29taW5nOiB7XG5cdFx0XHR0eXBlOiBPYmplY3QsXG5cdFx0XHRkZWZhdWx0KCkge1xuXHRcdFx0XHRyZXR1cm4ge307XG5cdFx0XHR9LFxuXHRcdH0sXG5cdH0sXG5cdGNvbXBvbmVudHM6IHsgQ3hWdWlDb2xsYXBzZU1pbmkgfSxcblx0bWl4aW5zOiBbIFNhdmVUYWJCeUFqYXgsIEdldEluY29taW5nIF0sXG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGxhYmVsLCBoZWxwLFxuXHRcdFx0c3RvcmFnZTogSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIHRoaXMuaW5jb21pbmcgKSApLFxuXHRcdFx0Z2F0ZXdheXM6IGdhdGV3YXlzVGFicyxcblx0XHRcdGxvYWRpbmdHYXRld2F5czoge30sXG5cdFx0fTtcblx0fSxcblx0Y3JlYXRlZCgpIHtcblx0XHRqZmJFdmVudEJ1cy4kb24oICdyZXF1ZXN0LXN0YXRlJywgcHJvcHMgPT4ge1xuXHRcdFx0Y29uc3QgeyBzdGF0ZSwgc2x1ZyB9ID0gcHJvcHM7XG5cdFx0XHR0aGlzLiRzZXQoIHRoaXMubG9hZGluZ0dhdGV3YXlzLCBzbHVnLCBzdGF0ZSA9PT0gJ2JlZ2luJyApO1xuXHRcdH0gKTtcblxuXHRcdHJlcXVlc3RGdW5jID0gXy5kZWJvdW5jZSggKCkgPT4ge1xuXHRcdFx0dGhpcy5zYXZlQnlBamF4KCB0aGlzLCB0aGlzLiRvcHRpb25zLm5hbWUgKVxuXHRcdH0sIDEwMDAgKTtcblx0fSxcblx0bWV0aG9kczoge1xuXHRcdGNoYW5nZVZhbCggbmFtZSwgdmFsdWUgKSB7XG5cdFx0XHR0aGlzLiRzZXQoIHRoaXMuc3RvcmFnZSwgbmFtZSwgdmFsdWUgKTtcblxuXHRcdFx0cmVxdWVzdEZ1bmMoKTtcblx0XHR9LFxuXHRcdG9uU2F2ZUdhdGV3YXkoIGluZGV4VGFiLCB0YWJTbHVnICkge1xuXHRcdFx0Y29uc3QgY3VycmVudCA9IHRoaXMuJHJlZnMuZ2F0ZXdheXNbIGluZGV4VGFiIF07XG5cblx0XHRcdHRoaXMuc2F2ZUJ5QWpheCggY3VycmVudCwgdGFiU2x1ZyApO1xuXHRcdH0sXG5cdFx0Z2V0UmVxdWVzdE9uU2F2ZSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGRhdGE6IHsgLi4udGhpcy5zdG9yYWdlIH0sXG5cdFx0XHR9O1xuXHRcdH0sXG5cdH0sXG59XG5cbjwvc2NyaXB0PiIsImV4cG9ydCBkZWZhdWx0IHtcblx0bWV0aG9kczoge1xuXHRcdGdldEluY29taW5nKCB0YWJOYW1lICkge1xuXHRcdFx0cmV0dXJuIHdpbmRvdy5KZXRGQlBhZ2VDb25maWdbIHRhYk5hbWUgXTtcblx0XHR9LFxuXHR9XG59IiwiZXhwb3J0IGRlZmF1bHQge1xuXHRtZXRob2RzOiB7XG5cdFx0c2F2ZUJ5QWpheCggY3VycmVudFRhYiwgdGFiU2x1ZyApIHtcblx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXG5cdFx0XHRjb25zdCBhamF4UmVxdWVzdCA9IHtcblx0XHRcdFx0Li4ue1xuXHRcdFx0XHRcdHVybDogd2luZG93LmFqYXh1cmwsXG5cdFx0XHRcdFx0dHlwZTogJ1BPU1QnLFxuXHRcdFx0XHRcdGRhdGFUeXBlOiAnanNvbicsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdC4uLmN1cnJlbnRUYWIuZ2V0UmVxdWVzdE9uU2F2ZSgpLFxuXHRcdFx0fTtcblx0XHRcdGFqYXhSZXF1ZXN0LmRhdGEgPSB7XG5cdFx0XHRcdGFjdGlvbjogYGpldF9mYl9zYXZlX3RhYl9fJHsgdGFiU2x1ZyB9YCxcblx0XHRcdFx0Li4uYWpheFJlcXVlc3QuZGF0YSxcblx0XHRcdH07XG5cblx0XHRcdGpmYkV2ZW50QnVzLiRlbWl0KCAncmVxdWVzdC1zdGF0ZScsIHsgc3RhdGU6ICdiZWdpbicsIHNsdWc6IHRhYlNsdWcgfSApO1xuXG5cdFx0XHRqUXVlcnkuYWpheCggYWpheFJlcXVlc3QgKVxuXHRcdFx0XHQuZG9uZSggZnVuY3Rpb24oIHJlc3BvbnNlICkge1xuXG5cdFx0XHRcdFx0aWYgKCAnZnVuY3Rpb24nID09PSB0eXBlb2YgY3VycmVudFRhYi5vblNhdmVEb25lICkge1xuXHRcdFx0XHRcdFx0Y3VycmVudFRhYi5vblNhdmVEb25lKCByZXNwb25zZSApO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpZiAoIHJlc3BvbnNlLnN1Y2Nlc3MgKSB7XG5cdFx0XHRcdFx0XHRcdHNlbGYuJENYTm90aWNlLmFkZCgge1xuXHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2U6IHJlc3BvbnNlLmRhdGEubWVzc2FnZSxcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnc3VjY2VzcycsXG5cdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDUwMDAsXG5cdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0aWYgKCAnZnVuY3Rpb24nID09PSB0eXBlb2YgY3VycmVudFRhYi5vblNhdmVEb25lU3VjY2VzcyApIHtcblx0XHRcdFx0XHRcdFx0XHRjdXJyZW50VGFiLm9uU2F2ZURvbmVTdWNjZXNzKCByZXNwb25zZSApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRzZWxmLiRDWE5vdGljZS5hZGQoIHtcblx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlOiByZXNwb25zZS5kYXRhLm1lc3NhZ2UsXG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogNTAwMCxcblx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0XHRpZiAoICdmdW5jdGlvbicgPT09IHR5cGVvZiBjdXJyZW50VGFiLm9uU2F2ZURvbmVFcnJvciApIHtcblx0XHRcdFx0XHRcdFx0XHRjdXJyZW50VGFiLm9uU2F2ZURvbmVFcnJvciggcmVzcG9uc2UgKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRqZmJFdmVudEJ1cy4kZW1pdCggJ3JlcXVlc3Qtc3RhdGUnLCB7IHN0YXRlOiAnZW5kJywgc2x1ZzogdGFiU2x1ZyB9ICk7XG5cdFx0XHRcdH0gKVxuXHRcdFx0XHQuZmFpbCggZnVuY3Rpb24oIGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93biApIHtcblx0XHRcdFx0XHRpZiAoICdmdW5jdGlvbicgPT09IHR5cGVvZiBjdXJyZW50VGFiLm9uU2F2ZUZhaWwgKSB7XG5cdFx0XHRcdFx0XHRjdXJyZW50VGFiLm9uU2F2ZUZhaWwoIGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93biApO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRzZWxmLiRDWE5vdGljZS5hZGQoIHtcblx0XHRcdFx0XHRcdFx0bWVzc2FnZTogZXJyb3JUaHJvd24sXG5cdFx0XHRcdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiA1MDAwLFxuXHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRqZmJFdmVudEJ1cy4kZW1pdCggJ3JlcXVlc3Qtc3RhdGUnLCB7IHN0YXRlOiAnZW5kJywgc2x1ZzogdGFiU2x1ZyB9ICk7XG5cdFx0XHRcdH0gKTtcblx0XHR9XG5cdH1cbn0iLCJpbXBvcnQgVGFiIGZyb20gJy4vUGF5cGFsVGFiLnZ1ZSc7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHRpdGxlID0gX18oICdQYXlQYWwgR2F0ZXdheSBBUEknLCAnamV0LWZvcm0tYnVpbGRlcicgKTtcbmNvbnN0IGNvbXBvbmVudCA9IFRhYjtcblxuZXhwb3J0IHtcblx0dGl0bGUsXG5cdGNvbXBvbmVudCxcbn0iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCBsYWJlbCA9IHtcblx0Y2xpZW50X2lkOiBfXyggJ0NsaWVudCBJRCcsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRzZWNyZXQ6IF9fKCAnU2VjcmV0IEtleScsICdqZXQtZm9ybS1idWlsZGVyJyApXG59O1xuXG5jb25zdCBoZWxwID0ge307XG5cbmV4cG9ydCB7IGxhYmVsLCBoZWxwIH07IiwiaW1wb3J0IEFjdGl2ZUNhbXBhaWduIGZyb20gJy4vQWN0aXZlQ2FtcGFpZ25UYWIudnVlJztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3QgdGl0bGUgPSBfXyggJ0FjdGl2ZUNhbXBhaWduIEFQSScsICdqZXQtZm9ybS1idWlsZGVyJyApO1xuY29uc3QgY29tcG9uZW50ID0gQWN0aXZlQ2FtcGFpZ247XG5cbmV4cG9ydCB7XG5cdHRpdGxlLFxuXHRjb21wb25lbnRcbn0iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCBsYWJlbCA9IHtcblx0YXBpX2tleTogX18oICdBUEkgS2V5JywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdGFwaV91cmw6IF9fKCAnQVBJIFVSTCcsICdqZXQtZm9ybS1idWlsZGVyJyApXG59O1xuXG5jb25zdCBoZWxwID0ge1xuXHRhcGlQcmVmOiBfXyggJ0hvdyB0byBvYnRhaW4geW91ciBBY3RpdmVDYW1wYWlnbiBBUEkgVVJMIGFuZCBLZXk/IE1vcmUgaW5mbycgKSxcblx0YXBpTGlua0xhYmVsOiBfXyggJ2hlcmUnICksXG5cdGFwaUxpbms6ICdodHRwczovL2hlbHAuYWN0aXZlY2FtcGFpZ24uY29tL2hjL2VuLXVzL2FydGljbGVzLzIwNzMxNzU5MC1HZXR0aW5nLXN0YXJ0ZWQtd2l0aC10aGUtQVBJJ1xufTtcblxuZXhwb3J0IHsgbGFiZWwsIGhlbHAgfTsiLCJpbXBvcnQgQ2FwdGNoYVRhYiBmcm9tICcuL0NhcHRjaGFUYWIudnVlJztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3QgdGl0bGUgPSBfXyggJ0NhcHRjaGEgU2V0dGluZ3MnLCAnamV0LWZvcm0tYnVpbGRlcicgKTtcbmNvbnN0IGNvbXBvbmVudCA9IENhcHRjaGFUYWI7XG5cbmV4cG9ydCB7XG5cdHRpdGxlLFxuXHRjb21wb25lbnRcbn0iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCBsYWJlbCA9IHtcblx0a2V5OiBfXyggJ1NpdGUgS2V5JywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdHNlY3JldDogX18oICdTZWNyZXQgS2V5JywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG59O1xuXG5jb25zdCBoZWxwID0ge1xuXHRhcGlQcmVmOiBfXyggJ1JlZ2lzdGVyIHJlQ0FQVENIQSB2MyBrZXlzJyApLFxuXHRhcGlMaW5rTGFiZWw6IF9fKCAnaGVyZScgKSxcblx0YXBpTGluazogJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20vcmVjYXB0Y2hhL2FkbWluL2NyZWF0ZSdcbn07XG5cbmV4cG9ydCB7IGxhYmVsLCBoZWxwIH07IiwiaW1wb3J0IEdldFJlc3BvbnNlVGFiIGZyb20gJy4vR2V0UmVzcG9uc2VUYWIudnVlJztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3QgdGl0bGUgPSBfXyggJ0dldFJlc3BvbnNlIEFQSScsICdqZXQtZm9ybS1idWlsZGVyJyApO1xuY29uc3QgY29tcG9uZW50ID0gR2V0UmVzcG9uc2VUYWI7XG5cbmV4cG9ydCB7XG5cdHRpdGxlLFxuXHRjb21wb25lbnRcbn0iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCBsYWJlbCA9IHtcblx0YXBpX2tleTogX18oICdBUEkgS2V5JywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG59O1xuXG5jb25zdCBoZWxwID0ge1xuXHRhcGlQcmVmOiBfXyggJ0hvdyB0byBvYnRhaW4geW91ciBHZXRSZXNwb25zZSBBUEkgS2V5PyBNb3JlIGluZm8nICksXG5cdGFwaUxpbmtMYWJlbDogX18oICdoZXJlJyApLFxuXHRhcGlMaW5rOiAnaHR0cHM6Ly9hcHAuZ2V0cmVzcG9uc2UuY29tL2FwaSdcbn07XG5cbmV4cG9ydCB7IGxhYmVsLCBoZWxwIH07IiwiaW1wb3J0IE1haWxDaGltcFRhYiBmcm9tICcuL01haWxDaGltcFRhYi52dWUnO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB0aXRsZSA9IF9fKCAnTWFpbENoaW1wIEFQSScsICdqZXQtZm9ybS1idWlsZGVyJyApO1xuY29uc3QgY29tcG9uZW50ID0gTWFpbENoaW1wVGFiO1xuXG5leHBvcnQge1xuXHR0aXRsZSxcblx0Y29tcG9uZW50XG59IiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3QgbGFiZWwgPSB7XG5cdGFwaV9rZXk6IF9fKCAnQVBJIEtleScsICdqZXQtZm9ybS1idWlsZGVyJyApLFxufTtcblxuY29uc3QgaGVscCA9IHtcblx0YXBpUHJlZjogX18oICdIb3cgdG8gb2J0YWluIHlvdXIgTWFpbENoaW1wIEFQSSBLZXk/IE1vcmUgaW5mbycgKSxcblx0YXBpTGlua0xhYmVsOiBfXyggJ2hlcmUnICksXG5cdGFwaUxpbms6ICdodHRwczovL21haWxjaGltcC5jb20vaGVscC9hYm91dC1hcGkta2V5cy8nXG59O1xuXG5leHBvcnQgeyBsYWJlbCwgaGVscCB9OyIsImltcG9ydCBUYWIgZnJvbSAnLi9QYXltZW50c0dhdGV3YXlzLnZ1ZSc7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHRpdGxlID0gX18oICdQYXltZW50cyBHYXRld2F5cycsICdqZXQtZm9ybS1idWlsZGVyJyApO1xuY29uc3QgY29tcG9uZW50ID0gVGFiO1xuY29uc3QgZGlzcGxheUJ1dHRvbiA9IGZhbHNlO1xuXG5leHBvcnQge1xuXHR0aXRsZSxcblx0Y29tcG9uZW50LFxuXHRkaXNwbGF5QnV0dG9uXG59IiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3QgbGFiZWwgPSB7XG5cdHVzZV9nYXRld2F5czogX18oICdFbmFibGUgR2F0ZXdheXMnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0ZW5hYmxlX3Rlc3RfbW9kZTogX18oICdFbmFibGUgVGVzdCBNb2RlJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG59O1xuXG5jb25zdCBoZWxwID0ge1xuXHRlbmFibGVfdGVzdF9tb2RlOiBfXyhcblx0XHRgVGhpcyBvcHRpb24gdGFrZXMgcHJlY2VkZW5jZSBvdmVyIHRoZSA8Y29kZT5qZXQtZm9ybS1idWlsZGVyL2dhdGV3YXlzL3BheXBhbC9zYW5kYm94LW1vZGU8L2NvZGU+IGZpbHRlci4gXG5cdFx0QXMgb2YgcmlnaHQgbm93LCB3b3JrcyBvbmx5IGZvciBQYXlQYWwgcGF5bWVudCBzeXN0ZW1gLFxuXHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0KSxcblx0dXNlX2dhdGV3YXlzOiBfXyhcblx0XHRgQWN0aXZhdGUgcGF5bWVudCBnYXRld2F5cyBmb3IgdGhlIGZvcm1zLiBUaGlzIG9wdGlvbiB0YWtlcyBwcmVjZWRlbmNlIG92ZXIgdGhlIFxuXHRcdDxjb2RlPmpldC1mb3JtLWJ1aWxkZXIvYWxsb3ctZ2F0ZXdheXM8L2NvZGU+IGZpbHRlcmAsXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHQpLFxufTtcblxuZXhwb3J0IHtcblx0bGFiZWwsXG5cdGhlbHAsXG59OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnByb2NjZXNpbmctc3RhdGUge1xcbiAgb3BhY2l0eTogMC41O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5qZmItYWRkb25zLXBhZ2VfX2lubmVyIHtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5qZmItYWRkb25zLXBhZ2VfX2hlYWRlciB7XFxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRENEQ0REO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZV9faGVhZGVyLWNvbnRyb2xzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZV9faGVhZGVyLWNvbnRyb2xzID4gLmN4LXZ1aS1idXR0b24ge1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmN4LXZ1aS1idXR0b24ge1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlIC5jeC12dWktYnV0dG9uIC5idXR0b24taWNvbiB7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuY3gtdnVpLWJ1dHRvbi0tc3R5bGUtYWNjZW50IHtcXG4gIGNvbG9yOiAjMDA3Y2JhO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICMwMDdjYmE7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmN4LXZ1aS1idXR0b24tLXN0eWxlLWFjY2VudCAuYnV0dG9uLWljb24gcGF0aCB7XFxuICBmaWxsOiAjMDA3Y2JhO1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlIC5jeC12dWktYnV0dG9uX19jb250ZW50ID4gc3BhbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlIC5jeC12dWktcG9wdXBfX2hlYWRlciB7XFxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRENEQ0REO1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuY3gtdnVpLXBvcHVwX19oZWFkZXItdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xcbiAgY29sb3I6ICMyMzI4MkQ7XFxufVxcbi5qZmItYWRkb25zLXBhZ2VfX2xpY2Vuc2UtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlX19saWNlbnNlLWZvcm0gPiBzcGFuIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi5qZmItYWRkb25zLXBhZ2VfX2xpY2Vuc2UtaW5wdXQge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vYWRtaW4vcGFnZXMvYWRkb25zL0FkZG9uc1BhZ2UudnVlXCIsXCJ3ZWJwYWNrOi8vLi8uLi9BZGRvbnNQYWdlLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFpU0E7RUFDQyxZQUFBO0VBQ0Esb0JBQUE7QUNoU0Q7QURvU0M7RUFDQyxhQUFBO0VBQ0EsWUFBQTtBQ2pTRjtBRG9TQztFQUNDLG9CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtBQ2xTRjtBRHFTQztFQUNDLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDblNGO0FEcVNFO0VBQ0MsaUJBQUE7QUNuU0g7QUR1U0M7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBQ3JTRjtBRHVTRTtFQUNDLGlCQUFBO0FDclNIO0FEd1NFO0VBQ0MsY0FBQTtFQUNBLG1DQUFBO0FDdFNIO0FEeVNJO0VBQ0MsYUFBQTtBQ3ZTTDtBRDZTRztFQUNDLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDM1NKO0FEaVRFO0VBQ0Msb0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0FDL1NIO0FEa1RFO0VBQ0MsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDaFRIO0FEd1RDO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtBQ3RURjtBRHdURTtFQUNDLG1CQUFBO0FDdFRIO0FEMFRDO0VBQ0MsbUJBQUE7QUN4VEZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuLnByb2NjZXNpbmctc3RhdGUge1xcblxcdG9wYWNpdHk6IDAuNTtcXG5cXHRwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmpmYi1hZGRvbnMtcGFnZSB7XFxuXFx0Jl9faW5uZXIge1xcblxcdFxcdHBhZGRpbmc6IDMwcHg7XFxuXFx0XFx0aGVpZ2h0OiAxMDAlO1xcblxcdH1cXG5cXG5cXHQmX19oZWFkZXIge1xcblxcdFxcdHBhZGRpbmctYm90dG9tOiAyMHB4O1xcblxcdFxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRENEQ0REO1xcblxcdFxcdG1hcmdpbi1ib3R0b206IDIwcHg7XFxuXFx0fVxcblxcblxcdCZfX2hlYWRlci1jb250cm9scyB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFx0XFx0PiAuY3gtdnVpLWJ1dHRvbiB7XFxuXFx0XFx0XFx0bWFyZ2luLWxlZnQ6IDEwcHg7XFxuXFx0XFx0fVxcblxcdH1cXG5cXG5cXHQuY3gtdnVpLWJ1dHRvbiB7XFxuXFx0XFx0Zm9udC1zaXplOiAxM3B4O1xcblxcdFxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFxuXFx0XFx0LmJ1dHRvbi1pY29uIHtcXG5cXHRcXHRcXHRtYXJnaW4tcmlnaHQ6IDVweDtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0Ji0tc3R5bGUtYWNjZW50IHtcXG5cXHRcXHRcXHRjb2xvcjogIzAwN2NiYTtcXG5cXHRcXHRcXHRib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggIzAwN2NiYTtcXG5cXG5cXHRcXHRcXHQuYnV0dG9uLWljb24ge1xcblxcdFxcdFxcdFxcdHBhdGgge1xcblxcdFxcdFxcdFxcdFxcdGZpbGw6ICMwMDdjYmE7XFxuXFx0XFx0XFx0XFx0fVxcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFxuXFx0XFx0Jl9fY29udGVudCB7XFxuXFx0XFx0XFx0PiBzcGFuIHtcXG5cXHRcXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdFxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdFxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0LmN4LXZ1aS1wb3B1cCB7XFxuXFx0XFx0Jl9faGVhZGVyIHtcXG5cXHRcXHRcXHRwYWRkaW5nLWJvdHRvbTogMTVweDtcXG5cXHRcXHRcXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RDRENERDtcXG5cXHRcXHRcXHRtYXJnaW4tYm90dG9tOiAzMHB4O1xcblxcdFxcdH1cXG5cXG5cXHRcXHQmX19oZWFkZXItdGl0bGUge1xcblxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxuXFx0XFx0XFx0Zm9udC1zaXplOiAyNHB4O1xcblxcdFxcdFxcdGxpbmUtaGVpZ2h0OiAzNnB4O1xcblxcdFxcdFxcdGNvbG9yOiAjMjMyODJEO1xcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0Jl9fbGljZW5zZS1wb3B1cCB7XFxuXFxuXFx0fVxcblxcblxcdCZfX2xpY2Vuc2UtZm9ybSB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG5cXHRcXHRhbGlnbi1pdGVtczogc3RyZXRjaDtcXG5cXG5cXHRcXHQ+IHNwYW4ge1xcblxcdFxcdFxcdG1hcmdpbi1ib3R0b206IDEwcHg7XFxuXFx0XFx0fVxcblxcdH1cXG5cXG5cXHQmX19saWNlbnNlLWlucHV0IHtcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xcblxcdH1cXG59XFxuXFxuXCIsXCIucHJvY2Nlc2luZy1zdGF0ZSB7XFxuICBvcGFjaXR5OiAwLjU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmpmYi1hZGRvbnMtcGFnZV9faW5uZXIge1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZV9faGVhZGVyIHtcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEQ0RDREQ7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlX19oZWFkZXItY29udHJvbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlX19oZWFkZXItY29udHJvbHMgPiAuY3gtdnVpLWJ1dHRvbiB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuY3gtdnVpLWJ1dHRvbiB7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmN4LXZ1aS1idXR0b24gLmJ1dHRvbi1pY29uIHtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlIC5jeC12dWktYnV0dG9uLS1zdHlsZS1hY2NlbnQge1xcbiAgY29sb3I6ICMwMDdjYmE7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggIzAwN2NiYTtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuY3gtdnVpLWJ1dHRvbi0tc3R5bGUtYWNjZW50IC5idXR0b24taWNvbiBwYXRoIHtcXG4gIGZpbGw6ICMwMDdjYmE7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmN4LXZ1aS1idXR0b25fX2NvbnRlbnQgPiBzcGFuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmN4LXZ1aS1wb3B1cF9faGVhZGVyIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEQ0RDREQ7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlIC5jeC12dWktcG9wdXBfX2hlYWRlci10aXRsZSB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XFxuICBjb2xvcjogIzIzMjgyRDtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZV9fbGljZW5zZS1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxufVxcbi5qZmItYWRkb25zLXBhZ2VfX2xpY2Vuc2UtZm9ybSA+IHNwYW4ge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZV9fbGljZW5zZS1pbnB1dCB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuamZiLWFkZG9ucyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIGF1dG8pO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTE0MHB4KSB7XFxuLmpmYi1hZGRvbnMge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCBhdXRvKTtcXG59XFxufVxcbi5qZmItYWRkb25zX19pdGVtLmFjdGl2YXRlZCAuamZiLWFkZG9uc19faXRlbS1pbmZvIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS51cGRhdGUtYXZhbGlhYmxlIC5qZmItYWRkb25zX19pdGVtLW5hbWUgLnZlcnNpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q2MzM2QztcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0udXBkYXRlLWF2YWxpYWJsZSAuamZiLWFkZG9uc19faXRlbS11cGRhdGUgLmxhdGVzdC12ZXJzaW9uIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NkI0NTA7XFxuICBwYWRkaW5nOiAxcHggNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS1pbm5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS10aHVtYiBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcbi5qZmItYWRkb25zX19pdGVtLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XFxuICBib3JkZXItd2lkdGg6IDAgMXB4IDFweCAxcHg7XFxuICBib3JkZXItY29sb3I6ICNEQ0RDREQ7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tbmFtZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS1uYW1lIC5sYWJlbCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLW5hbWUgLnZlcnNpb24ge1xcbiAgcGFkZGluZzogM3B4IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NkI0NTA7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tdXBkYXRlIHtcXG4gIGNvbG9yOiAjN2I3ZTgxO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tZGVzYyB7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLWFjdGlvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLWFjdGlvbnMgLmN4LXZ1aS1idXR0b24ge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9hZG1pbi9wYWdlcy9hZGRvbnMvY29tcG9uZW50cy9BZGRvbkl0ZW0udnVlXCIsXCJ3ZWJwYWNrOi8vLi8uLi9BZGRvbkl0ZW0udnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQThOQTtFQUNDLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsU0FBQTtBQzdORDtBRCtOQztBQU5EO0lBT0UscUNBQUE7SUFDQSxtQ0FBQTtBQzVOQTtBQUNGO0FEZ09HO0VBQ0MsdUJBQUE7QUM5Tko7QURvT0k7RUFDQyx5QkFBQTtBQ2xPTDtBRHNPSTtFQUNDLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNwT0w7QUQyT0M7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUN6T0Y7QUQ0T0M7RUFDQyw0QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQzFPRjtBRDRPRTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FDMU9IO0FEOE9DO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUM1T0Y7QUQrT0M7RUFDQyxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDN09GO0FEK09FO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUM3T0g7QURnUEU7RUFDQyxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUM5T0g7QURrUEM7RUFDQyxjQUFBO0VBQ0EsbUJBQUE7QUNoUEY7QURtUEM7RUFDQyxjQUFBO0VBQ0EsbUJBQUE7QUNqUEY7QURvUEM7RUFDQyxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQ2xQRjtBRG9QRTtFQUNDLGtCQUFBO0FDbFBIXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcbi5qZmItYWRkb25zIHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgYXV0byk7XFxuXFx0Z2FwOiAyMHB4O1xcblxcblxcdEBtZWRpYSAobWF4LXdpZHRoOiAxMTQwcHgpIHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIGF1dG8pO1xcblxcdH1cXG5cXG5cXHQmX19pdGVtIHtcXG5cXHRcXHQmLmFjdGl2YXRlZCB7XFxuXFx0XFx0XFx0LmpmYi1hZGRvbnNfX2l0ZW0taW5mbyB7XFxuXFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXG5cXHRcXHQmLnVwZGF0ZS1hdmFsaWFibGUge1xcblxcdFxcdFxcdC5qZmItYWRkb25zX19pdGVtLW5hbWUge1xcblxcdFxcdFxcdFxcdC52ZXJzaW9uIHtcXG5cXHRcXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRDYzMzZDO1xcblxcdFxcdFxcdFxcdH1cXG5cXHRcXHRcXHR9XFxuXFx0XFx0XFx0LmpmYi1hZGRvbnNfX2l0ZW0tdXBkYXRlIHtcXG5cXHRcXHRcXHRcXHQubGF0ZXN0LXZlcnNpb24ge1xcblxcdFxcdFxcdFxcdFxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRcXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNDZCNDUwO1xcblxcdFxcdFxcdFxcdFxcdHBhZGRpbmc6IDFweCA1cHg7XFxuXFx0XFx0XFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcblxcdFxcdFxcdFxcdH1cXG5cXHRcXHRcXHR9XFxuXFxuXFx0XFx0fVxcblxcdH1cXG5cXG5cXHQmX19pdGVtLWlubmVyIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0YWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuXFx0XFx0aGVpZ2h0OiAxMDAlO1xcblxcdH1cXG5cXG5cXHQmX19pdGVtLXRodW1iIHtcXG5cXHRcXHRib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xcblxcdFxcdGxpbmUtaGVpZ2h0OiAwO1xcblxcdFxcdG92ZXJmbG93OiBoaWRkZW47XFxuXFxuXFx0XFx0aW1nIHtcXG5cXHRcXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRcXHRoZWlnaHQ6IGF1dG87XFxuXFx0XFx0fVxcblxcdH1cXG5cXG5cXHQmX19pdGVtLWluZm8ge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRhbGlnbi1pdGVtczogc3RyZXRjaDtcXG5cXHRcXHRmbGV4OiAxIDEgYXV0bztcXG5cXHRcXHRwYWRkaW5nOiAyMHB4O1xcblxcdFxcdGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XFxuXFx0XFx0Ym9yZGVyLXdpZHRoOiAwIDFweCAxcHggMXB4O1xcblxcdFxcdGJvcmRlci1jb2xvcjogI0RDRENERDtcXG5cXHRcXHRib3JkZXItc3R5bGU6IHNvbGlkO1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XFxuXFx0fVxcblxcblxcdCZfX2l0ZW0tbmFtZSB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0XFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMTBweDtcXG5cXG5cXHRcXHQubGFiZWwge1xcblxcdFxcdFxcdGZvbnQtc2l6ZTogMjBweDtcXG5cXHRcXHRcXHRmb250LXdlaWdodDogNzAwO1xcblxcdFxcdFxcdGxpbmUtaGVpZ2h0OiAxLjI1O1xcblxcdFxcdH1cXG5cXG5cXHRcXHQudmVyc2lvbiB7XFxuXFx0XFx0XFx0cGFkZGluZzogM3B4IDhweDtcXG5cXHRcXHRcXHRib3JkZXItcmFkaXVzOiA0cHg7XFxuXFx0XFx0XFx0Y29sb3I6IHdoaXRlO1xcblxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICM0NkI0NTA7XFxuXFx0XFx0XFx0bWFyZ2luLWxlZnQ6IDEwcHg7XFxuXFx0XFx0fVxcblxcdH1cXG5cXG5cXHQmX19pdGVtLXVwZGF0ZSB7XFxuXFx0XFx0Y29sb3I6ICM3YjdlODE7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMTBweDtcXG5cXHR9XFxuXFxuXFx0Jl9faXRlbS1kZXNjIHtcXG5cXHRcXHRmbGV4OiAxIDEgYXV0bztcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xcblxcdH1cXG5cXG5cXHQmX19pdGVtLWFjdGlvbnMge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFx0XFx0LmN4LXZ1aS1idXR0b24ge1xcblxcdFxcdFxcdG1hcmdpbi1yaWdodDogMTBweDtcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cXG5cIixcIi5qZmItYWRkb25zIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgYXV0byk7XFxuICBnYXA6IDIwcHg7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTQwcHgpIHtcXG4gIC5qZmItYWRkb25zIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgYXV0byk7XFxuICB9XFxufVxcbi5qZmItYWRkb25zX19pdGVtLmFjdGl2YXRlZCAuamZiLWFkZG9uc19faXRlbS1pbmZvIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS51cGRhdGUtYXZhbGlhYmxlIC5qZmItYWRkb25zX19pdGVtLW5hbWUgLnZlcnNpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q2MzM2QztcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0udXBkYXRlLWF2YWxpYWJsZSAuamZiLWFkZG9uc19faXRlbS11cGRhdGUgLmxhdGVzdC12ZXJzaW9uIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NkI0NTA7XFxuICBwYWRkaW5nOiAxcHggNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS1pbm5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS10aHVtYiBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcbi5qZmItYWRkb25zX19pdGVtLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XFxuICBib3JkZXItd2lkdGg6IDAgMXB4IDFweCAxcHg7XFxuICBib3JkZXItY29sb3I6ICNEQ0RDREQ7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tbmFtZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS1uYW1lIC5sYWJlbCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLW5hbWUgLnZlcnNpb24ge1xcbiAgcGFkZGluZzogM3B4IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NkI0NTA7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tdXBkYXRlIHtcXG4gIGNvbG9yOiAjN2I3ZTgxO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tZGVzYyB7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLWFjdGlvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLWFjdGlvbnMgLmN4LXZ1aS1idXR0b24ge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0N4VnVpQ29sbGFwc2VNaW5pLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01YzhiYzBiNiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9DeFZ1aUNvbGxhcHNlTWluaS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0N4VnVpQ29sbGFwc2VNaW5pLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3NoaW4vZG9tYWlucy9wcm9qZWN0cy90aGVtZS1jaGVjay9jcm9jby1kZXYvd3AtY29udGVudC9wbHVnaW5zL2pldC1mb3JtLWJ1aWxkZXIvYXNzZXRzL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzVjOGJjMGI2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzVjOGJjMGI2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzVjOGJjMGI2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9DeFZ1aUNvbGxhcHNlTWluaS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWM4YmMwYjYmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNWM4YmMwYjYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFkbWluL2NvbXBvbmVudHMvY29sbGFwc2UtbWluaS9DeFZ1aUNvbGxhcHNlTWluaS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0FkZG9uc1BhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZiMmY2Yzc1JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0FkZG9uc1BhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BZGRvbnNQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9BZGRvbnNQYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3NoaW4vZG9tYWlucy9wcm9qZWN0cy90aGVtZS1jaGVjay9jcm9jby1kZXYvd3AtY29udGVudC9wbHVnaW5zL2pldC1mb3JtLWJ1aWxkZXIvYXNzZXRzL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzZiMmY2Yzc1JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzZiMmY2Yzc1JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzZiMmY2Yzc1JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BZGRvbnNQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02YjJmNmM3NSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2YjJmNmM3NScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYWRtaW4vcGFnZXMvYWRkb25zL0FkZG9uc1BhZ2UudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9BZGRvbkl0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQyOTQ1OGNkJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0FkZG9uSXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0FkZG9uSXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vQWRkb25JdGVtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3NoaW4vZG9tYWlucy9wcm9qZWN0cy90aGVtZS1jaGVjay9jcm9jby1kZXYvd3AtY29udGVudC9wbHVnaW5zL2pldC1mb3JtLWJ1aWxkZXIvYXNzZXRzL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzQyOTQ1OGNkJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzQyOTQ1OGNkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzQyOTQ1OGNkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BZGRvbkl0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQyOTQ1OGNkJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzQyOTQ1OGNkJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhZG1pbi9wYWdlcy9hZGRvbnMvY29tcG9uZW50cy9BZGRvbkl0ZW0udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9TZXR0aW5nc1BhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJkZmExM2Y1JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1NldHRpbmdzUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1NldHRpbmdzUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9zaGluL2RvbWFpbnMvcHJvamVjdHMvdGhlbWUtY2hlY2svY3JvY28tZGV2L3dwLWNvbnRlbnQvcGx1Z2lucy9qZXQtZm9ybS1idWlsZGVyL2Fzc2V0cy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyZGZhMTNmNScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyZGZhMTNmNScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyZGZhMTNmNScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU2V0dGluZ3NQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yZGZhMTNmNSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyZGZhMTNmNScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYWRtaW4vcGFnZXMvc2V0dGluZ3MvU2V0dGluZ3NQYWdlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUGF5cGFsVGFiLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yZDNmNGI1MyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9QYXlwYWxUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9QYXlwYWxUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvc2hpbi9kb21haW5zL3Byb2plY3RzL3RoZW1lLWNoZWNrL2Nyb2NvLWRldi93cC1jb250ZW50L3BsdWdpbnMvamV0LWZvcm0tYnVpbGRlci9hc3NldHMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMmQzZjRiNTMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMmQzZjRiNTMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMmQzZjRiNTMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1BheXBhbFRhYi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmQzZjRiNTMmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMmQzZjRiNTMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFkbWluL3BhZ2VzL3NldHRpbmdzL2dhdGV3YXlzL3BheXBhbC9QYXlwYWxUYWIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9BY3RpdmVDYW1wYWlnblRhYi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDc0NDNhYjgmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQWN0aXZlQ2FtcGFpZ25UYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BY3RpdmVDYW1wYWlnblRhYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9zaGluL2RvbWFpbnMvcHJvamVjdHMvdGhlbWUtY2hlY2svY3JvY28tZGV2L3dwLWNvbnRlbnQvcGx1Z2lucy9qZXQtZm9ybS1idWlsZGVyL2Fzc2V0cy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0NzQ0M2FiOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0NzQ0M2FiOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0NzQ0M2FiOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQWN0aXZlQ2FtcGFpZ25UYWIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ3NDQzYWI4JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzQ3NDQzYWI4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhZG1pbi9wYWdlcy9zZXR0aW5ncy90YWJzL2FjdGl2ZWNhbXBhaWduL0FjdGl2ZUNhbXBhaWduVGFiLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQ2FwdGNoYVRhYi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTQ4MTA0MGUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ2FwdGNoYVRhYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0NhcHRjaGFUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvc2hpbi9kb21haW5zL3Byb2plY3RzL3RoZW1lLWNoZWNrL2Nyb2NvLWRldi93cC1jb250ZW50L3BsdWdpbnMvamV0LWZvcm0tYnVpbGRlci9hc3NldHMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMTQ4MTA0MGUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMTQ4MTA0MGUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMTQ4MTA0MGUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0NhcHRjaGFUYWIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE0ODEwNDBlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzE0ODEwNDBlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhZG1pbi9wYWdlcy9zZXR0aW5ncy90YWJzL2NhcHRjaGEvQ2FwdGNoYVRhYi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0dldFJlc3BvbnNlVGFiLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kN2FhZTkxOCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9HZXRSZXNwb25zZVRhYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0dldFJlc3BvbnNlVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3NoaW4vZG9tYWlucy9wcm9qZWN0cy90aGVtZS1jaGVjay9jcm9jby1kZXYvd3AtY29udGVudC9wbHVnaW5zL2pldC1mb3JtLWJ1aWxkZXIvYXNzZXRzL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2Q3YWFlOTE4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2Q3YWFlOTE4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2Q3YWFlOTE4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9HZXRSZXNwb25zZVRhYi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDdhYWU5MTgmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZDdhYWU5MTgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFkbWluL3BhZ2VzL3NldHRpbmdzL3RhYnMvZ2V0cmVzcG9uc2UvR2V0UmVzcG9uc2VUYWIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9NYWlsQ2hpbXBUYWIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPThkMzM2MWZjJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL01haWxDaGltcFRhYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL01haWxDaGltcFRhYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9zaGluL2RvbWFpbnMvcHJvamVjdHMvdGhlbWUtY2hlY2svY3JvY28tZGV2L3dwLWNvbnRlbnQvcGx1Z2lucy9qZXQtZm9ybS1idWlsZGVyL2Fzc2V0cy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc4ZDMzNjFmYycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc4ZDMzNjFmYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc4ZDMzNjFmYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTWFpbENoaW1wVGFiLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04ZDMzNjFmYyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc4ZDMzNjFmYycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYWRtaW4vcGFnZXMvc2V0dGluZ3MvdGFicy9tYWlsY2hpbXAvTWFpbENoaW1wVGFiLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUGF5bWVudHNHYXRld2F5cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDgyZTZhNWEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUGF5bWVudHNHYXRld2F5cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1BheW1lbnRzR2F0ZXdheXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvc2hpbi9kb21haW5zL3Byb2plY3RzL3RoZW1lLWNoZWNrL2Nyb2NvLWRldi93cC1jb250ZW50L3BsdWdpbnMvamV0LWZvcm0tYnVpbGRlci9hc3NldHMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMDgyZTZhNWEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMDgyZTZhNWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMDgyZTZhNWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1BheW1lbnRzR2F0ZXdheXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA4MmU2YTVhJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzA4MmU2YTVhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhZG1pbi9wYWdlcy9zZXR0aW5ncy90YWJzL3BheW1lbnRzLWdhdGV3YXlzL1BheW1lbnRzR2F0ZXdheXMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0N4VnVpQ29sbGFwc2VNaW5pLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0N4VnVpQ29sbGFwc2VNaW5pLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BZGRvbnNQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FkZG9uc1BhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FkZG9uSXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BZGRvbkl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NldHRpbmdzUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZXR0aW5nc1BhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BheXBhbFRhYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYXlwYWxUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FjdGl2ZUNhbXBhaWduVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FjdGl2ZUNhbXBhaWduVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DYXB0Y2hhVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NhcHRjaGFUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dldFJlc3BvbnNlVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dldFJlc3BvbnNlVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NYWlsQ2hpbXBUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWFpbENoaW1wVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYXltZW50c0dhdGV3YXlzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BheW1lbnRzR2F0ZXdheXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgIFwiY3gtdnVpLXBhbmVsXCI6IF92bS53aXRoUGFuZWwsXG4gICAgICAgIFwiY3gtdnVpLWNvbGxhcHNlLW1pbmlfX2l0ZW1cIjogdHJ1ZSxcbiAgICAgICAgXCJjeC12dWktY29sbGFwc2UtbWluaV9faXRlbS0tYWN0aXZlXCI6IF92bS5pc0FjdGl2ZVxuICAgICAgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJjeC12dWktY29sbGFwc2UtbWluaV9faGVhZGVyXCIsXG4gICAgICAgICAgb246IHsgY2xpY2s6IF92bS5jb2xsYXBzZSB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImN4LXZ1aS1jb2xsYXBzZS1taW5pX19oZWFkZXItbGFiZWxcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJzdmdcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIxNFwiLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE0XCIsXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94OiBcIjAgMCAxNCAxNFwiLFxuICAgICAgICAgICAgICAgICAgZmlsbDogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJwYXRoXCIsIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGQ6XG4gICAgICAgICAgICAgICAgICAgICAgXCJNMTQgMTMuOTk5OUwxNCAtMC4wMDAxMjIwN0wwIC0wLjAwMDEyMTQ1OEw2LjExOTU5ZS0wNyAxMy45OTk5TDE0IDEzLjk5OTlaXCIsXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IFwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJwYXRoXCIsIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGQ6XG4gICAgICAgICAgICAgICAgICAgICAgXCJNNS4zMjkxMSAxTDExIDdMNS4zMjkxMSAxM0w0IDExLjU5MzhMOC4zNDE3NyA3TDQgMi40MDYyNUw1LjMyOTExIDFaXCIsXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IFwiIzAwN0NCQVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIlxcblxcdFxcdFxcdFwiICsgX3ZtLl9zKF92bS5sYWJlbCkgKyBcIlxcblxcdFxcdFwiKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLmRlc2NcbiAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjeC12dWktY29sbGFwc2UtbWluaV9faGVhZGVyLWRlc2NcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuXFx0XFx0XFx0XCIgKyBfdm0uX3MoX3ZtLmRlc2MpICsgXCJcXG5cXHRcXHRcIilcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uaXNBY3RpdmUsXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXNBY3RpdmVcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY3gtdnVpLWNvbGxhcHNlLW1pbmlfX2NvbnRlbnRcIlxuICAgICAgICB9LFxuICAgICAgICBbX3ZtLl90KFwiZGVmYXVsdFwiLCBbX3ZtLl92KFwiQ29sbGFwc2UgY29udGVudC4uLlwiKV0pXSxcbiAgICAgICAgMlxuICAgICAgKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJqZmItYWRkb25zLXBhZ2Ugd3JhcFwiLFxuICAgICAgY2xhc3M6IHsgXCJwcm9jY2VzaW5nLXN0YXRlXCI6IF92bS5wcm9jY2VzaW5nU3RhdGUgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJoMVwiLCB7IHN0YXRpY0NsYXNzOiBcImNzLXZ1aS10aXRsZVwiIH0sIFtcbiAgICAgICAgX3ZtLl92KF92bS5fcyhcIkpldEZvcm1zIEFkZG9uc1wiKSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiamZiLWFkZG9ucy1wYWdlX19pbm5lciBjeC12dWktcGFuZWxcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiamZiLWFkZG9ucy1wYWdlX19oZWFkZXJcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJqZmItYWRkb25zLXBhZ2VfX2hlYWRlci1jb250cm9sc1wiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiY3gtdnVpLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uLXN0eWxlXCI6IFwiYWNjZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IFwibWluaVwiLFxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBfdm0uY2hlY2tVcGRhdGVzUHJvY2Vzc2VkXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5jaGVja1BsdWdpbnNVcGRhdGUgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgYXR0cnM6IHsgc2xvdDogXCJsYWJlbFwiIH0sIHNsb3Q6IFwibGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwic3ZnXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uLWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjE0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94OiBcIjAgMCAxNCAxNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwYXRoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJNMTEuNzA4NSAyLjI5MTcxQzEwLjUwMDEgMS4wODMzNyA4Ljg0MTggMC4zMzMzNzQgNy4wMDAxMyAwLjMzMzM3NEMzLjMxNjggMC4zMzMzNzQgMC4zNDE3OTcgMy4zMTY3MSAwLjM0MTc5NyA3LjAwMDA0QzAuMzQxNzk3IDEwLjY4MzQgMy4zMTY4IDEzLjY2NjcgNy4wMDAxMyAxMy42NjY3QzEwLjEwODUgMTMuNjY2NyAxMi43MDAxIDExLjU0MTcgMTMuNDQxOCA4LjY2NjcxSDExLjcwODVDMTEuMDI1MSAxMC42MDg0IDkuMTc1MTMgMTIgNy4wMDAxMyAxMkM0LjI0MTggMTIgMi4wMDAxMyA5Ljc1ODM3IDIuMDAwMTMgNy4wMDAwNEMyLjAwMDEzIDQuMjQxNzEgNC4yNDE4IDIuMDAwMDQgNy4wMDAxMyAyLjAwMDA0QzguMzgzNDYgMi4wMDAwNCA5LjYxNjggMi41NzUwNCAxMC41MTY4IDMuNDgzMzdMNy44MzM0NiA2LjE2NjcxSDEzLjY2NjhWMC4zMzMzNzRMMTEuNzA4NSAyLjI5MTcxWlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IFwiIzAwN0NCQVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIkNoZWNrIEZvciBVcGRhdGVzXCIpXSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImN4LXZ1aS1idXR0b25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBcImJ1dHRvbi1zdHlsZVwiOiBcImFjY2VudFwiLCBzaXplOiBcIm1pbmlcIiB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5saWNlbnNlUG9wdXBWaXNpYmxlID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBhdHRyczogeyBzbG90OiBcImxhYmVsXCIgfSwgc2xvdDogXCJsYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJzdmdcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b24taWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g6IFwiMCAwIDE2IDE2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBhdGhcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk0xNS40OTg1IDBIMTIuNDg5N0MxMi40MTY2IDAgMTIuMzQ4NyAwLjAxNTY3MDkgMTIuMjg2IDAuMDQ3MDEyN0MxMi4yMzM4IDAuMDY3OTA3MyAxMi4xODY3IDAuMTA0NDczIDEyLjE0NSAwLjE1NjcwOUw1Ljc2NjkgNi40NzIwOUM1LjYyMDYzIDYuNDQwNzQgNS40NjM5MiA2LjQxNDYzIDUuMjk2NzcgNi4zOTM3M0M1LjEyOTYxIDYuMzcyODQgNC45Njc2OCA2LjM2MjM5IDQuODEwOTcgNi4zNjIzOUM0LjE2MzI0IDYuMzYyMzkgMy41NDY4NSA2LjQ4Nzc2IDIuOTYxOCA2LjczODQ5QzIuMzc2NzUgNi45Nzg3OCAxLjg1OTYxIDcuMzIzNTQgMS40MTAzOCA3Ljc3Mjc3QzAuOTYxMTQ5IDguMjIyIDAuNjExMTY2IDguNzM5MTQgMC4zNjA0MzEgOS4zMjQxOUMwLjEyMDE0NCA5LjkwOTI0IDAgMTAuNTMwOSAwIDExLjE4OUMwIDExLjgzNjggMC4xMjAxNDQgMTIuNDUzMiAwLjM2MDQzMSAxMy4wMzgyQzAuNjExMTY2IDEzLjYyMzIgMC45NjExNDkgMTQuMTQwNCAxLjQxMDM4IDE0LjU4OTZDMS44NTk2MSAxNS4wMzg5IDIuMzc2NzUgMTUuMzgzNiAyLjk2MTggMTUuNjIzOUMzLjU0Njg1IDE1Ljg3NDYgNC4xNjMyNCAxNiA0LjgxMDk3IDE2QzUuNDY5MTUgMTYgNi4wOTA3NiAxNS44NzQ2IDYuNjc1ODEgMTUuNjIzOUM3LjI2MDg2IDE1LjM4MzYgNy43NzggMTUuMDM4OSA4LjIyNzIzIDE0LjU4OTZDOC44MDE4MyAxNC4wMTUgOS4xOTg4MiAxMy4zNDY0IDkuNDE4MjIgMTIuNTgzN0M5LjY0ODA2IDExLjgyMTEgOS42ODQ2MiAxMS4wMzc1IDkuNTI3OTEgMTAuMjMzMUwxMC44OTEzIDguODY5NzRDMTAuOTMzMSA4LjgyNzk1IDEwLjk2NDQgOC43ODA5MyAxMC45ODUzIDguNzI4N0MxMS4wMTY3IDguNjY2MDEgMTEuMDMyMyA4LjU5ODExIDExLjAzMjMgOC41MjQ5OFY3LjAyMDU3SDEyLjUzNjdDMTIuNjkzNCA3LjAyMDU3IDEyLjgxMzYgNi45NzM1NiAxMi44OTcyIDYuODc5NTNDMTIuOTkxMiA2Ljc4NTUgMTMuMDM4MiA2LjY2NTM2IDEzLjAzODIgNi41MTkxVjUuMDE0NjlIMTQuNTQyNkMxNC42MTU3IDUuMDE0NjkgMTQuNjc4NCA1LjAwNDI0IDE0LjczMDcgNC45ODMzNUMxNC43OTMzIDQuOTUyMDEgMTQuODUwOCA0LjkxMDIyIDE0LjkwMyA0Ljg1Nzk4TDE1LjkwNiAzLjg1NTA0QzE1LjkyNjkgMy44MTMyNiAxNS45NDc4IDMuNzY2MjQgMTUuOTY4NyAzLjcxNDAxQzE1Ljk4OTYgMy42NTEzMiAxNiAzLjU4MzQyIDE2IDMuNTEwMjhWMC41MDE0NjlDMTYgMC4zNTUyMDcgMTUuOTUzIDAuMjM1MDY0IDE1Ljg1OSAwLjE0MTAzOEMxNS43NjQ5IDAuMDQ3MDEyNyAxNS42NDQ4IDAgMTUuNDk4NSAwWk00Ljk2NzY4IDEyLjc4NzVDNC43OTAwOCAxMi45NjUxIDQuNTk2OCAxMy4wOTU3IDQuMzg3ODYgMTMuMTc5MkM0LjE4OTM2IDEzLjI1MjQgMy45NjQ3NCAxMy4yODg5IDMuNzE0MDEgMTMuMjg4OUMzLjQ2MzI3IDEzLjI4ODkgMy4yMzM0MyAxMy4yNDE5IDMuMDI0NDkgMTMuMTQ3OUMyLjgyNTk5IDEzLjA1MzkgMi42Mzc5NCAxMi45MzM3IDIuNDYwMzMgMTIuNzg3NUMyLjI4MjczIDEyLjYwOTkgMi4xNTIxNCAxMi40MjE4IDIuMDY4NTYgMTIuMjIzM0MxLjk5NTQzIDEyLjAxNDQgMS45NTg4NiAxMS43ODQ1IDEuOTU4ODYgMTEuNTMzOEMxLjk1ODg2IDExLjI4MzEgMi4wMDU4OCAxMS4wNTg0IDIuMDk5OSAxMC44NTk5QzIuMTkzOTMgMTAuNjUxIDIuMzE0MDcgMTAuNDU3NyAyLjQ2MDMzIDEwLjI4MDFDMi43ODQyIDkuOTU2MjUgMy4xOTE2NCA5Ljc5NDMyIDMuNjgyNjYgOS43OTQzMkM0LjE4NDEzIDkuNzk0MzIgNC41OTY4IDkuOTU2MjUgNC45MjA2NyAxMC4yODAxQzUuMDk4MjcgMTAuNDU3NyA1LjIyMzY0IDEwLjY1MSA1LjI5Njc3IDEwLjg1OTlDNS4zODAzNSAxMS4wNTg0IDUuNDIyMTQgMTEuMjgzMSA1LjQyMjE0IDExLjUzMzhDNS40MjIxNCAxMS43ODQ1IDUuMzgwMzUgMTIuMDE0NCA1LjI5Njc3IDEyLjIyMzNDNS4yMjM2NCAxMi40MjE4IDUuMTEzOTQgMTIuNjA5OSA0Ljk2NzY4IDEyLjc4NzVaXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogXCIjRDNEM0QzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICFfdm0uaXNMaWNlbnNlQWN0aXZhdGVkXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW192bS5fdihcIkFjdGl2YXRlIExpY2Vuc2VcIildKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5pc0xpY2Vuc2VBY3RpdmF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbX3ZtLl92KFwiRGVhY3RpdmF0ZSBMaWNlbnNlXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiamZiLWFkZG9uc1wiIH0sXG4gICAgICAgICAgX3ZtLl9sKF92bS5hbGxBZGRvbnMsIGZ1bmN0aW9uKGFkZG9uRGF0YSwgaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcIkFkZG9uSXRlbVwiLCB7XG4gICAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IFwiYWRkb24tZGF0YVwiOiBhZGRvbkRhdGEgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImN4LXZ1aS1wb3B1cFwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiamZiLWFkZG9ucy1wYWdlX19saWNlbnNlLXBvcHVwXCIsXG4gICAgICAgICAgYXR0cnM6IHsgZm9vdGVyOiBmYWxzZSwgXCJib2R5LXdpZHRoXCI6IFwiNTQwcHhcIiB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLmxpY2Vuc2VQb3B1cFZpc2libGUsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5saWNlbnNlUG9wdXBWaXNpYmxlID0gJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJsaWNlbnNlUG9wdXBWaXNpYmxlXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImN4LXZ1aS1wb3B1cF9faGVhZGVyLXRpdGxlXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNsb3Q6IFwidGl0bGVcIiB9LFxuICAgICAgICAgICAgICBzbG90OiBcInRpdGxlXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICFfdm0uaXNMaWNlbnNlQWN0aXZhdGVkXG4gICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW192bS5fdihcIkFjdGl2YXRlIExpY2Vuc2VcIildKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5pc0xpY2Vuc2VBY3RpdmF0ZWRcbiAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbX3ZtLl92KFwiRGVhY3RpdmF0ZSBMaWNlbnNlXCIpXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiamZiLWFkZG9ucy1wYWdlX19saWNlbnNlLWZvcm1cIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJjb250ZW50XCIgfSxcbiAgICAgICAgICAgICAgc2xvdDogXCJjb250ZW50XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICFfdm0uaXNMaWNlbnNlQWN0aXZhdGVkXG4gICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJBY3RpdmF0ZSBsaWNlbnNlIGZvciBhdXRvbWF0aWMgdXBkYXRlcyBhbmQgYXdlc29tZSBzdXBwb3J0XCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uaXNMaWNlbnNlQWN0aXZhdGVkXG4gICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJCeSBkZWFjdGl2YXRpbmcgdGhlIGxpY2Vuc2UgeW91IHdpbGwgbm90IGJlIGFibGUgdG8gdXBkYXRlIHRoZSBhZGRvbnNcIlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiY3gtdnVpLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJqZmItYWRkb25zLXBhZ2VfX2xpY2Vuc2UtaW5wdXRcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgc2l6ZTogXCJmdWxsd2lkdGhcIixcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgIGF1dG9mb2N1czogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIFwicHJldmVudC13cmFwXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJKdXN0IHBhc3RlIGl0IGhlcmVcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubGljZW5zZUtleSxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmxpY2Vuc2VLZXkgPSAkJHZcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImxpY2Vuc2VLZXlcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiY3gtdnVpLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImpmYi1hZGRvbnMtcGFnZV9fbGljZW5zZS1hY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uLXN0eWxlXCI6IFwiYWNjZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IFwibWluaVwiLFxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBfdm0ubGljZW5zZVByb2NjZXNpbmdTdGF0ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ubGljZW5zZUFjdGlvbiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBhdHRyczogeyBzbG90OiBcImxhYmVsXCIgfSwgc2xvdDogXCJsYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgIV92bS5pc0xpY2Vuc2VBY3RpdmF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbX3ZtLl92KFwiQWN0aXZhdGVcIildKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5pc0xpY2Vuc2VBY3RpdmF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbX3ZtLl92KFwiRGVhY3RpdmF0ZVwiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiamZiLWFkZG9uc19faXRlbVwiLFxuICAgICAgY2xhc3M6IHtcbiAgICAgICAgYWN0aXZhdGVkOiBfdm0uYWRkb25EYXRhLmlzQWN0aXZhdGVkLFxuICAgICAgICBcInVwZGF0ZS1hdmFsaWFibGVcIjogX3ZtLnVwZGF0ZUFjdGlvbkF2YWxpYWJsZVxuICAgICAgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJqZmItYWRkb25zX19pdGVtLWlubmVyXCIsXG4gICAgICAgICAgY2xhc3M6IHsgXCJwcm9jY2VzaW5nLXN0YXRlXCI6IF92bS5wcm9jY2VzaW5nU3RhdGUgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJqZmItYWRkb25zX19pdGVtLXRodW1iXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJpbWdcIiwgeyBhdHRyczogeyBzcmM6IF92bS5hZGRvbkRhdGEudGh1bWIgfSB9KVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJqZmItYWRkb25zX19pdGVtLWluZm9cIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImpmYi1hZGRvbnNfX2l0ZW0tbmFtZVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uYWRkb25EYXRhLm5hbWUpKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidmVyc2lvblwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5hZGRvbkRhdGEuY3VycmVudFZlcnNpb24pKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJqZmItYWRkb25zX19pdGVtLXVwZGF0ZVwiIH0sIFtcbiAgICAgICAgICAgICAgIV92bS51cGRhdGVBY3Rpb25BdmFsaWFibGVcbiAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtfdm0uX3YoXCJZb3VyIHBsdWdpbiBpcyB1cCB0byBkYXRlXCIpXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0udXBkYXRlQWN0aW9uQXZhbGlhYmxlXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcblxcdFxcdFxcdFxcdFxcdFZlcnNpb24gXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImxhdGVzdC12ZXJzaW9uXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uYWRkb25EYXRhLnZlcnNpb24pKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBhdmFpbGFibGVcXG5cXHRcXHRcXHRcXHRcXHRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImN4LXZ1aS1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvbi1zdHlsZVwiOiBcImxpbmstYWNjZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCJsaW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogX3ZtLnVwZGF0ZVBsdWdpblByb2Nlc3NlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnVwZGF0ZVBsdWdpbiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNsb3Q6IFwibGFiZWxcIiB9LCBzbG90OiBcImxhYmVsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJVcGRhdGUgTm93XCIpXSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImpmYi1hZGRvbnNfX2l0ZW0tZGVzY1wiLFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0uYWRkb25EYXRhLmRlc2MpIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImpmYi1hZGRvbnNfX2l0ZW0tYWN0aW9uc1wiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0ubGVhcm5Nb3JlQXZhbGlhYmxlXG4gICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiY3gtdnVpLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uLXN0eWxlXCI6IFwibGluay1hY2NlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCJsaW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogX3ZtLmFkZG9uRGF0YS5kZW1vLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInRhZy1uYW1lXCI6IFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBzbG90OiBcImxhYmVsXCIgfSwgc2xvdDogXCJsYWJlbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcInNwYW5cIiwgW192bS5fdihcIkxlYXJuIE1vcmVcIildKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uaW5zdGFsbEFjdGlvbkF2YWxpYWJsZVxuICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImN4LXZ1aS1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImJ1dHRvbi1zdHlsZVwiOiBcImxpbmstYWNjZW50XCIsIHNpemU6IFwibGlua1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmluc3RhbGxQbHVnaW4gfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNsb3Q6IFwibGFiZWxcIiB9LCBzbG90OiBcImxhYmVsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwic3BhblwiLCBbX3ZtLl92KFwiSW5zdGFsbCBQbHVnaW5cIildKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uYWN0aXZhdGVBY3Rpb25BdmFsaWFibGVcbiAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJjeC12dWktYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJidXR0b24tc3R5bGVcIjogXCJsaW5rLWFjY2VudFwiLCBzaXplOiBcImxpbmtcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5hY3RpdmF0ZVBsdWdpbiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgc2xvdDogXCJsYWJlbFwiIH0sIHNsb3Q6IFwibGFiZWxcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJBY3RpdmF0ZSBQbHVnaW5cIildKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uZGVhY3RpdmF0ZUFjdGlvbkF2YWxpYWJsZVxuICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImN4LXZ1aS1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImJ1dHRvbi1zdHlsZVwiOiBcImxpbmstYWNjZW50XCIsIHNpemU6IFwibGlua1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmRlYWN0aXZhdGVQbHVnaW4gfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNsb3Q6IFwibGFiZWxcIiB9LCBzbG90OiBcImxhYmVsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwic3BhblwiLCBbX3ZtLl92KFwiRGVhY3RpdmF0ZSBQbHVnaW5cIildKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF1cbiAgICAgIClcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJmdW5jdGlvbiBvYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGV4Y2x1ZGUpIHtcbiAgdmFyIHRhcmdldCA9IHt9XG4gIGZvciAodmFyIGsgaW4gb2JqKVxuICAgIGlmIChcbiAgICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGspICYmXG4gICAgICBleGNsdWRlLmluZGV4T2YoaykgPT09IC0xXG4gICAgKVxuICAgICAgdGFyZ2V0W2tdID0gb2JqW2tdXG4gIHJldHVybiB0YXJnZXRcbn1cbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJqZXQtZmItc2V0dGluZ3MtcGFnZSB3cmFwXCIgfSwgW1xuICAgIF9jKFwiaDFcIiwgeyBzdGF0aWNDbGFzczogXCJjcy12dWktdGl0bGVcIiB9LCBbXG4gICAgICBfdm0uX3YoX3ZtLl9zKFwiSmV0Rm9ybXMgU2V0dGluZ3NcIikpXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImN4LXZ1aS1wYW5lbFwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiY3gtdnVpLXRhYnNcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBcImluLXBhbmVsXCI6IGZhbHNlLFxuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmFjdGl2ZVRhYlNsdWcsXG4gICAgICAgICAgICAgIGxheW91dDogXCJ2ZXJ0aWNhbFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBfdm0uX2woX3ZtLnRhYnMsIGZ1bmN0aW9uKHJlZiwgaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBkaXNwbGF5QnV0dG9uID0gcmVmLmRpc3BsYXlCdXR0b25cbiAgICAgICAgICAgIGlmIChkaXNwbGF5QnV0dG9uID09PSB2b2lkIDApIGRpc3BsYXlCdXR0b24gPSB0cnVlXG4gICAgICAgICAgICB2YXIgcmVzdCA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHJlZiwgW1wiZGlzcGxheUJ1dHRvblwiXSlcbiAgICAgICAgICAgIHZhciB0YWIgPSByZXN0XG4gICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgIFwiY3gtdnVpLXRhYnMtcGFuZWxcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogdGFiLmNvbXBvbmVudC5uYW1lLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IG5hbWU6IHRhYi5jb21wb25lbnQubmFtZSwgbGFiZWw6IHRhYi50aXRsZSB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwia2VlcC1hbGl2ZVwiLFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyh0YWIuY29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVmOiBcInRhYkNvbXBvbmVudHNcIixcbiAgICAgICAgICAgICAgICAgICAgICByZWZJbkZvcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICB0YWc6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaW5jb21pbmc6IF92bS5nZXRJbmNvbWluZyh0YWIuY29tcG9uZW50Lm5hbWUpIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlCdXR0b25cbiAgICAgICAgICAgICAgICAgID8gX2MoXCJjeC12dWktYnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b24tc3R5bGVcIjogXCJhY2NlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IF92bS5sb2FkaW5nVGFiW3RhYi5jb21wb25lbnQubmFtZV1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25TYXZlVGFiKGluZGV4LCB0YWIuY29tcG9uZW50Lm5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtfYyhcInNwYW5cIiwgW192bS5fdihcIlNhdmVcIildKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInNlY3Rpb25cIixcbiAgICBbXG4gICAgICBfYyhcImN4LXZ1aS1pbnB1dFwiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgbGFiZWw6IF92bS5sYWJlbC5jbGllbnRfaWQsXG4gICAgICAgICAgXCJ3cmFwcGVyLWNzc1wiOiBbXCJlcXVhbHdpZHRoXCJdLFxuICAgICAgICAgIHNpemU6IFwiZnVsbHdpZHRoXCJcbiAgICAgICAgfSxcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICB2YWx1ZTogX3ZtLnN0b3JhZ2UuY2xpZW50X2lkLFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgIF92bS4kc2V0KF92bS5zdG9yYWdlLCBcImNsaWVudF9pZFwiLCAkJHYpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcInN0b3JhZ2UuY2xpZW50X2lkXCJcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJjeC12dWktaW5wdXRcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGxhYmVsOiBfdm0ubGFiZWwuc2VjcmV0LFxuICAgICAgICAgIFwid3JhcHBlci1jc3NcIjogW1wiZXF1YWx3aWR0aFwiXSxcbiAgICAgICAgICBzaXplOiBcImZ1bGx3aWR0aFwiXG4gICAgICAgIH0sXG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgdmFsdWU6IF92bS5zdG9yYWdlLnNlY3JldCxcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICBfdm0uJHNldChfdm0uc3RvcmFnZSwgXCJzZWNyZXRcIiwgJCR2KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJzdG9yYWdlLnNlY3JldFwiXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXCJjeC12dWktaW5wdXRcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGxhYmVsOiBfdm0ubGFiZWwuYXBpX2tleSxcbiAgICAgICAgICBcIndyYXBwZXItY3NzXCI6IFtcImVxdWFsd2lkdGhcIl0sXG4gICAgICAgICAgc2l6ZTogXCJmdWxsd2lkdGhcIlxuICAgICAgICB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0uYXBpX2tleSxcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICBfdm0uYXBpX2tleSA9ICQkdlxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJhcGlfa2V5XCJcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJjeC12dWktaW5wdXRcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGxhYmVsOiBfdm0ubGFiZWwuYXBpX3VybCxcbiAgICAgICAgICBcIndyYXBwZXItY3NzXCI6IFtcImVxdWFsd2lkdGhcIl0sXG4gICAgICAgICAgc2l6ZTogXCJmdWxsd2lkdGhcIlxuICAgICAgICB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0uYXBpX3VybCxcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICBfdm0uYXBpX3VybCA9ICQkdlxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJhcGlfdXJsXCJcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmItZGVzY3JpcHRpb25cIiB9LCBbXG4gICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmhlbHAuYXBpUHJlZikgKyBcIiBcIiksXG4gICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IF92bS5oZWxwLmFwaUxpbmssIHRhcmdldDogXCJfYmxhbmtcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5oZWxwLmFwaUxpbmtMYWJlbCkpXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFwiY3gtdnVpLWlucHV0XCIsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBsYWJlbDogX3ZtLmxhYmVsLmtleSxcbiAgICAgICAgICBcIndyYXBwZXItY3NzXCI6IFtcImVxdWFsd2lkdGhcIl0sXG4gICAgICAgICAgc2l6ZTogXCJmdWxsd2lkdGhcIlxuICAgICAgICB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0ua2V5LFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgIF92bS5rZXkgPSAkJHZcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwia2V5XCJcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJjeC12dWktaW5wdXRcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGxhYmVsOiBfdm0ubGFiZWwuc2VjcmV0LFxuICAgICAgICAgIFwid3JhcHBlci1jc3NcIjogW1wiZXF1YWx3aWR0aFwiXSxcbiAgICAgICAgICBzaXplOiBcImZ1bGx3aWR0aFwiXG4gICAgICAgIH0sXG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgdmFsdWU6IF92bS5zZWNyZXQsXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLnNlY3JldCA9ICQkdlxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWNyZXRcIlxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJmYi1kZXNjcmlwdGlvblwiIH0sIFtcbiAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uaGVscC5hcGlQcmVmKSArIFwiIFwiKSxcbiAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogX3ZtLmhlbHAuYXBpTGluaywgdGFyZ2V0OiBcIl9ibGFua1wiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmhlbHAuYXBpTGlua0xhYmVsKSlcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiY3gtdnVpLWlucHV0XCIsIHtcbiAgICBhdHRyczoge1xuICAgICAgbGFiZWw6IF92bS5sYWJlbC5hcGlfa2V5LFxuICAgICAgXCJ3cmFwcGVyLWNzc1wiOiBbXCJlcXVhbHdpZHRoXCJdLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIF92bS5oZWxwLmFwaVByZWYgK1xuICAgICAgICAnIDxhIGhyZWY9XCInICtcbiAgICAgICAgX3ZtLmhlbHAuYXBpTGluayArXG4gICAgICAgICdcIiB0YXJnZXQ9XCJfYmxhbmtcIj4nICtcbiAgICAgICAgX3ZtLmhlbHAuYXBpTGlua0xhYmVsICtcbiAgICAgICAgXCI8L2E+XCIsXG4gICAgICBzaXplOiBcImZ1bGx3aWR0aFwiXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IF92bS5hcGlfa2V5LFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uYXBpX2tleSA9ICQkdlxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwiYXBpX2tleVwiXG4gICAgfVxuICB9KVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJjeC12dWktaW5wdXRcIiwge1xuICAgIGF0dHJzOiB7XG4gICAgICBsYWJlbDogX3ZtLmxhYmVsLmFwaV9rZXksXG4gICAgICBcIndyYXBwZXItY3NzXCI6IFtcImVxdWFsd2lkdGhcIl0sXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgX3ZtLmhlbHAuYXBpUHJlZiArXG4gICAgICAgICcgPGEgaHJlZj1cIicgK1xuICAgICAgICBfdm0uaGVscC5hcGlMaW5rICtcbiAgICAgICAgJ1wiIHRhcmdldD1cIl9ibGFua1wiPicgK1xuICAgICAgICBfdm0uaGVscC5hcGlMaW5rTGFiZWwgK1xuICAgICAgICBcIjwvYT5cIixcbiAgICAgIHNpemU6IFwiZnVsbHdpZHRoXCJcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogX3ZtLmFwaV9rZXksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS5hcGlfa2V5ID0gJCR2XG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJhcGlfa2V5XCJcbiAgICB9XG4gIH0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInNlY3Rpb25cIixcbiAgICBbXG4gICAgICBfYyhcImN4LXZ1aS1zd2l0Y2hlclwiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgbmFtZTogXCJ1c2VfZ2F0ZXdheXNcIixcbiAgICAgICAgICBcIndyYXBwZXItY3NzXCI6IFtcImVxdWFsd2lkdGhcIl0sXG4gICAgICAgICAgbGFiZWw6IF92bS5sYWJlbC51c2VfZ2F0ZXdheXMsXG4gICAgICAgICAgZGVzY3JpcHRpb246IF92bS5oZWxwLnVzZV9nYXRld2F5cyxcbiAgICAgICAgICB2YWx1ZTogX3ZtLnN0b3JhZ2UudXNlX2dhdGV3YXlzXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS5jaGFuZ2VWYWwoXCJ1c2VfZ2F0ZXdheXNcIiwgJGV2ZW50KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLnN0b3JhZ2UudXNlX2dhdGV3YXlzXG4gICAgICAgID8gX2MoXCJjeC12dWktc3dpdGNoZXJcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgbmFtZTogXCJlbmFibGVfdGVzdF9tb2RlXCIsXG4gICAgICAgICAgICAgIFwid3JhcHBlci1jc3NcIjogW1wiZXF1YWx3aWR0aFwiXSxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IF92bS5oZWxwLmVuYWJsZV90ZXN0X21vZGUsXG4gICAgICAgICAgICAgIGxhYmVsOiBfdm0ubGFiZWwuZW5hYmxlX3Rlc3RfbW9kZSxcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5zdG9yYWdlLmVuYWJsZV90ZXN0X21vZGVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jaGFuZ2VWYWwoXCJlbmFibGVfdGVzdF9tb2RlXCIsICRldmVudClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLnN0b3JhZ2UudXNlX2dhdGV3YXlzXG4gICAgICAgID8gW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY3gtdnVpLWlubmVyLXBhbmVsXCIgfSxcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS5nYXRld2F5cywgZnVuY3Rpb24odGFiLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgIFwiQ3hWdWlDb2xsYXBzZU1pbmlcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiB0YWIuY29tcG9uZW50Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ3aXRoLXBhbmVsXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgZGVzYzogdGFiLmRlc2MgfHwgXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogdGFiLnRpdGxlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwia2VlcC1hbGl2ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKHRhYi5jb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiBcImdhdGV3YXlzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlZkluRm9yOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jb21pbmc6IF92bS5nZXRJbmNvbWluZyh0YWIuY29tcG9uZW50Lm5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiY3gtdnVpLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uLXN0eWxlXCI6IFwiYWNjZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IF92bS5sb2FkaW5nR2F0ZXdheXNbdGFiLmNvbXBvbmVudC5uYW1lXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uU2F2ZUdhdGV3YXkoaW5kZXgsIHRhYi5jb21wb25lbnQubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNsb3Q6IFwibGFiZWxcIiB9LCBzbG90OiBcImxhYmVsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlNhdmVcIildXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyLCAvKiBzZXJ2ZXIgb25seSAqL1xuICBzaGFkb3dNb2RlIC8qIHZ1ZS1jbGkgb25seSAqL1xuKSB7XG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gJ2RhdGEtdi0nICsgc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICAob3B0aW9ucy5mdW5jdGlvbmFsID8gdGhpcy5wYXJlbnQgOiB0aGlzKS4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290XG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIDogaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb25hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FkZG9uc1BhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIxYmM3M2RlMVwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FkZG9uc1BhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRkb25zUGFnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRkb25JdGVtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNWYyNzgyODZcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BZGRvbkl0ZW0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRkb25JdGVtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuICBNb2RpZmllZCBieSBFdmFuIFlvdSBAeXl4OTkwODAzXG4qL1xuXG5pbXBvcnQgbGlzdFRvU3R5bGVzIGZyb20gJy4vbGlzdFRvU3R5bGVzJ1xuXG52YXIgaGFzRG9jdW1lbnQgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG5cbmlmICh0eXBlb2YgREVCVUcgIT09ICd1bmRlZmluZWQnICYmIERFQlVHKSB7XG4gIGlmICghaGFzRG9jdW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ3Z1ZS1zdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudC4gJyArXG4gICAgXCJVc2UgeyB0YXJnZXQ6ICdub2RlJyB9IGluIHlvdXIgV2VicGFjayBjb25maWcgdG8gaW5kaWNhdGUgYSBzZXJ2ZXItcmVuZGVyaW5nIGVudmlyb25tZW50LlwiXG4gICkgfVxufVxuXG4vKlxudHlwZSBTdHlsZU9iamVjdCA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgcGFydHM6IEFycmF5PFN0eWxlT2JqZWN0UGFydD5cbn1cblxudHlwZSBTdHlsZU9iamVjdFBhcnQgPSB7XG4gIGNzczogc3RyaW5nO1xuICBtZWRpYTogc3RyaW5nO1xuICBzb3VyY2VNYXA6ID9zdHJpbmdcbn1cbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHsvKlxuICBbaWQ6IG51bWJlcl06IHtcbiAgICBpZDogbnVtYmVyLFxuICAgIHJlZnM6IG51bWJlcixcbiAgICBwYXJ0czogQXJyYXk8KG9iaj86IFN0eWxlT2JqZWN0UGFydCkgPT4gdm9pZD5cbiAgfVxuKi99XG5cbnZhciBoZWFkID0gaGFzRG9jdW1lbnQgJiYgKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSlcbnZhciBzaW5nbGV0b25FbGVtZW50ID0gbnVsbFxudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwXG52YXIgaXNQcm9kdWN0aW9uID0gZmFsc2VcbnZhciBub29wID0gZnVuY3Rpb24gKCkge31cbnZhciBvcHRpb25zID0gbnVsbFxudmFyIHNzcklkS2V5ID0gJ2RhdGEtdnVlLXNzci1pZCdcblxuLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4vLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG52YXIgaXNPbGRJRSA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIC9tc2llIFs2LTldXFxiLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkU3R5bGVzQ2xpZW50IChwYXJlbnRJZCwgbGlzdCwgX2lzUHJvZHVjdGlvbiwgX29wdGlvbnMpIHtcbiAgaXNQcm9kdWN0aW9uID0gX2lzUHJvZHVjdGlvblxuXG4gIG9wdGlvbnMgPSBfb3B0aW9ucyB8fCB7fVxuXG4gIHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIGxpc3QpXG4gIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG4gICAgdmFyIG1heVJlbW92ZSA9IFtdXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgICAgZG9tU3R5bGUucmVmcy0tXG4gICAgICBtYXlSZW1vdmUucHVzaChkb21TdHlsZSlcbiAgICB9XG4gICAgaWYgKG5ld0xpc3QpIHtcbiAgICAgIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbmV3TGlzdClcbiAgICAgIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzID0gW11cbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXVxuICAgICAgaWYgKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKClcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMgLyogQXJyYXk8U3R5bGVPYmplY3Q+ICovKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgZG9tU3R5bGUucmVmcysrXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pXG4gICAgICB9XG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIGlmIChkb21TdHlsZS5wYXJ0cy5sZW5ndGggPiBpdGVtLnBhcnRzLmxlbmd0aCkge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5sZW5ndGggPSBpdGVtLnBhcnRzLmxlbmd0aFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGFydHMgPSBbXVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHsgaWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0cyB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAoKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gIHN0eWxlRWxlbWVudC50eXBlID0gJ3RleHQvY3NzJ1xuICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudClcbiAgcmV0dXJuIHN0eWxlRWxlbWVudFxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICB2YXIgdXBkYXRlLCByZW1vdmVcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlWycgKyBzc3JJZEtleSArICd+PVwiJyArIG9iai5pZCArICdcIl0nKVxuXG4gIGlmIChzdHlsZUVsZW1lbnQpIHtcbiAgICBpZiAoaXNQcm9kdWN0aW9uKSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBhbmQgaW4gcHJvZHVjdGlvbiBtb2RlLlxuICAgICAgLy8gc2ltcGx5IGRvIG5vdGhpbmcuXG4gICAgICByZXR1cm4gbm9vcFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBidXQgaW4gZGV2IG1vZGUuXG4gICAgICAvLyBmb3Igc29tZSByZWFzb24gQ2hyb21lIGNhbid0IGhhbmRsZSBzb3VyY2UgbWFwIGluIHNlcnZlci1yZW5kZXJlZFxuICAgICAgLy8gc3R5bGUgdGFncyAtIHNvdXJjZSBtYXBzIGluIDxzdHlsZT4gb25seSB3b3JrcyBpZiB0aGUgc3R5bGUgdGFnIGlzXG4gICAgICAvLyBjcmVhdGVkIGFuZCBpbnNlcnRlZCBkeW5hbWljYWxseS4gU28gd2UgcmVtb3ZlIHRoZSBzZXJ2ZXIgcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlcyBhbmQgaW5qZWN0IG5ldyBvbmVzLlxuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIGlmIChpc09sZElFKSB7XG4gICAgLy8gdXNlIHNpbmdsZXRvbiBtb2RlIGZvciBJRTkuXG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKytcbiAgICBzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KCkpXG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpXG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSlcbiAgfSBlbHNlIHtcbiAgICAvLyB1c2UgbXVsdGktc3R5bGUtdGFnIG1vZGUgaW4gYWxsIG90aGVyIGNhc2VzXG4gICAgc3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KClcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KVxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICB1cGRhdGUob2JqKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG4gICAgICAgICAgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcbiAgICAgICAgICBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iailcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKClcbiAgICB9XG4gIH1cbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnRcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKVxuICB9XG59KSgpXG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3NcblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcylcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcylcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSlcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGVFbGVtZW50LCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3NcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwXG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSlcbiAgfVxuICBpZiAob3B0aW9ucy5zc3JJZCkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoc3NySWRLZXksIG9iai5pZClcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXApIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RldnRvb2xzL2RvY3MvamF2YXNjcmlwdC1kZWJ1Z2dpbmdcbiAgICAvLyB0aGlzIG1ha2VzIHNvdXJjZSBtYXBzIGluc2lkZSBzdHlsZSB0YWdzIHdvcmsgcHJvcGVybHkgaW4gQ2hyb21lXG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlVVJMPScgKyBzb3VyY2VNYXAuc291cmNlc1swXSArICcgKi8nXG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJyArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyAnICovJ1xuICB9XG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzc1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKVxuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSlcbiAgfVxufVxuIiwiLyoqXG4gKiBUcmFuc2xhdGVzIHRoZSBsaXN0IGZvcm1hdCBwcm9kdWNlZCBieSBjc3MtbG9hZGVyIGludG8gc29tZXRoaW5nXG4gKiBlYXNpZXIgdG8gbWFuaXB1bGF0ZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChwYXJlbnRJZCwgbGlzdCkge1xuICB2YXIgc3R5bGVzID0gW11cbiAgdmFyIG5ld1N0eWxlcyA9IHt9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXVxuICAgIHZhciBpZCA9IGl0ZW1bMF1cbiAgICB2YXIgY3NzID0gaXRlbVsxXVxuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl1cbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXVxuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgaWQ6IHBhcmVudElkICsgJzonICsgaSxcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9XG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0geyBpZDogaWQsIHBhcnRzOiBbcGFydF0gfSlcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpXG4gICAgfVxuICB9XG4gIHJldHVybiBzdHlsZXNcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgU2V0dGluZ3NQYWdlIGZyb20gXCIuL3BhZ2VzL3NldHRpbmdzL1NldHRpbmdzUGFnZVwiO1xuaW1wb3J0IEFkZG9uc1BhZ2UgZnJvbSBcIi4vcGFnZXMvYWRkb25zL0FkZG9uc1BhZ2VcIjtcblxuKCAoKSA9PiB7XG5cdGNvbnN0IHByZWYgPSAnamV0LWZvcm0tYnVpbGRlcl9wYWdlXyc7XG5cblx0Y29uc3QgeyBhcHBseUZpbHRlcnMgfSA9IHdwLmhvb2tzO1xuXG5cdGNvbnN0IHBhZ2VzID0gYXBwbHlGaWx0ZXJzKCAnamV0LmZiLnJlZ2lzdGVyLmFkbWluLXBhZ2VzJywgW1xuXHRcdFNldHRpbmdzUGFnZSxcblx0XHRBZGRvbnNQYWdlXG5cdF0gKVxuXG5cdHBhZ2VzLmZvckVhY2goIFBhZ2VDb21wb25lbnQgPT4ge1xuXHRcdGNvbnN0IHBhZ2VOYW1lID0gKCBwcmVmICsgUGFnZUNvbXBvbmVudC5uYW1lICk7XG5cblx0XHRpZiAoIHdpbmRvdy5wYWdlbm93ID09PSBwYWdlTmFtZSApIHtcblx0XHRcdG5ldyBWdWUoIHtcblx0XHRcdFx0ZWw6ICcjJyArIHByZWYgKyBQYWdlQ29tcG9uZW50Lm5hbWUsXG5cdFx0XHRcdHJlbmRlcjogaCA9PiBoKCBQYWdlQ29tcG9uZW50IClcblx0XHRcdH0gKTtcblx0XHR9XG5cdH0gKVxuXG59KSgpXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQWJBO0FBa0JBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBNUJBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNvREE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFiQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBWkE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBcERBO0FBc0RBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUF4Q0E7QUEwQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQTFKQTtBQWpDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0NBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUEvQkE7QUFrQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBekNBO0FBMkNBO0FBdkVBO0FBL0NBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUxBO0FBaEJBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQURBO0FBUUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFMQTtBQW5CQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQVJBO0FBbkJBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBUkE7QUFuQkE7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFQQTtBQWpCQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTtBQVBBO0FBakJBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDK0JBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBREE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQWZBO0FBOUJBO0FBQ0E7QTs7Ozs7Ozs7Ozs7OztBQ3BFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBTUE7QUFDQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUEzREE7QUFEQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7OztBQ1BBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFFQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFFQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFLQTtBQU5BO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7O0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFrQkE7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWtCQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBa0JBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFrQkE7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWtCQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBa0JBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFrQkE7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWtCQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBa0JBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFrQkE7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBOzs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBOzs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBOzs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7QTs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7O0FDckZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7O0FDMU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7O0FDeEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7OztBQ2xHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7OztBQzVHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7OztBQ25HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7O0FDL05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7OztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUNBO0FBRUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==