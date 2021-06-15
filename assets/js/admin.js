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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      licenseKey: window.JetFBPageConfig.licenseKey || '',
      themeInfo: window.JetFBPageConfig.themeInfo || false,
      miscInfo: window.JetFBPageConfig.miscInfo || false,
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
    window.jfbEventBus.$on('showLicensePopup', this.showLicensePopup);
  },
  computed: {
    isLicenseActivated: function isLicenseActivated() {
      return 0 !== this.licenseList.length;
    },
    licenseActionType: function licenseActionType() {
      return !this.isLicenseActivated ? 'activate_license' : 'deactivate_license';
    },
    installedAddonList: function installedAddonList() {
      var installedAddonsList = {};

      for (var addonSlug in this.allAddons) {
        if (this.allAddons[addonSlug]['isInstalled']) {
          installedAddonsList[addonSlug] = this.allAddons[addonSlug];
        }
      }

      return installedAddonsList;
    },
    availableAddonList: function availableAddonList() {
      var availableAddonList = {};

      for (var addonSlug in this.allAddons) {
        if (!this.allAddons[addonSlug]['isInstalled']) {
          availableAddonList[addonSlug] = this.allAddons[addonSlug];
        }
      }

      return availableAddonList;
    },
    goProLink: function goProLink() {
      var pricingPageUrl = this.miscInfo.pricingPageUrl,
          utmParams = this.getUtmParamsString({
        utm_source: "dashboard/jet-form-builder-addons-page",
        utm_medium: "crocoblock-license/".concat(this.themeInfo.theme),
        utm_campaign: 'go-pro-button'
      });
      return "".concat(pricingPageUrl, "?").concat(utmParams);
    }
  },
  methods: {
    showLicensePopup: function showLicensePopup() {
      this.licensePopupVisible = true;
    },
    updateAddonData: function updateAddonData(data) {
      var slug = data.slug,
          addonData = data.addonData,
          pluginAction = data.action,
          reloadActionMap = ['activate', 'deactivate', 'update'];
      this.allAddons[slug] = Object.assign({}, this.allAddons[slug], addonData);

      if (reloadActionMap.includes(pluginAction)) {
        this.proccesingState = true;
        setTimeout(function () {
          window.location.reload();
        }, 1000);
      }
    },
    licenseAction: function licenseAction() {
      var self = this;

      if ('' === this.licenseKey) {
        self.$CXNotice.add({
          message: 'License key is missing',
          type: 'error',
          duration: 4000
        });
        return false;
      }

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

            self.licensePopupVisible = false;
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
    },
    getUtmParamsString: function getUtmParamsString() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var utmString = false;

      if (0 === Object.keys(data).length) {
        return utmString;
      }

      utmString = Object.keys(data).map(function (key) {
        return [key, data[key]].map(encodeURIComponent).join('=');
      }).join('&');
      return utmString;
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
//
//
//
//
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
    activateLicenceActionAvaliable: function activateLicenceActionAvaliable() {
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
    },
    learnMoreUrl: function learnMoreUrl() {
      var demoUrl = this.addonData.demo,
          utmParams = this.$parent.getUtmParamsString({
        utm_source: "dashboard/jet-form-builder-addons-page",
        utm_medium: "crocoblock-license/".concat(this.$parent.themeInfo.theme),
        utm_campaign: 'addon-learn-more'
      });
      return "".concat(demoUrl, "?").concat(utmParams);
    }
  },
  methods: {
    activateLicense: function activateLicense() {
      window.jfbEventBus.$emit('showLicensePopup');
    },
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

          switch (self.actionPlugin) {
            case 'install':
            case 'activate':
            case 'deactivate':
              self.actionPluginProcessed = true;
              break;

            case 'update':
              self.updatePluginProcessed = true;
              break;
          }
        },
        success: function success(responce, textStatus, jqXHR) {
          switch (self.actionPlugin) {
            case 'install':
            case 'activate':
            case 'deactivate':
              self.actionPluginProcessed = false;
              break;

            case 'update':
              self.updatePluginProcessed = false;
              break;
          }

          if (responce.success) {
            self.$CXNotice.add({
              message: responce.message,
              type: 'success',
              duration: 4000
            });
            window.jfbEventBus.$emit('updateAddonData', {
              slug: self.addonData['slug'],
              addonData: responce.data,
              action: self.actionPlugin
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
___CSS_LOADER_EXPORT___.push([module.id, ".proccesing-state {\n  opacity: 0.5;\n  pointer-events: none;\n}\n.jfb-addons-page__inner {\n  padding: 30px;\n  height: 100%;\n}\n.jfb-addons-page__header {\n  margin-bottom: 30px;\n}\n.jfb-addons-page__header-controls {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  padding-bottom: 15px;\n  border-bottom: 1px solid #DCDCDD;\n}\n.jfb-addons-page__header-controls > .cx-vui-button {\n  margin-left: 10px;\n}\n.jfb-addons-page .cx-vui-button {\n  font-size: 13px;\n  font-weight: 400;\n  background-color: transparent;\n}\n.jfb-addons-page .cx-vui-button .button-icon {\n  margin-right: 5px;\n}\n.jfb-addons-page .cx-vui-button--style-accent {\n  color: #007cba;\n  box-shadow: inset 0 0 0 1px #007cba;\n}\n.jfb-addons-page .cx-vui-button--style-accent:hover {\n  background-color: #007cba12;\n}\n.jfb-addons-page .cx-vui-button--style-accent .button-icon path {\n  fill: #007cba;\n}\n.jfb-addons-page .cx-vui-button--style-danger {\n  color: #d6336c;\n  box-shadow: inset 0 0 0 1px #d6336c;\n}\n.jfb-addons-page .cx-vui-button--style-danger:hover {\n  background-color: #d6336c12;\n}\n.jfb-addons-page .cx-vui-button--style-danger .button-icon path {\n  fill: #d6336c;\n}\n.jfb-addons-page .cx-vui-button__content > span {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.jfb-addons-page .cx-vui-popup__header {\n  padding-bottom: 15px;\n  border-bottom: 1px solid #DCDCDD;\n  margin-bottom: 30px;\n}\n.jfb-addons-page .cx-vui-popup__header-title {\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 36px;\n  color: #23282D;\n}\n.jfb-addons-page__license-form {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: stretch;\n}\n.jfb-addons-page__license-form > span {\n  margin-bottom: 10px;\n}\n.jfb-addons-page__license-input {\n  margin-bottom: 10px;\n}\n.jfb-addons-page .go-pro-banner {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 24px 0;\n  border-bottom: 1px solid #DCDCDD;\n}\n.jfb-addons-page .go-pro-banner__subtitle {\n  font-size: 18px;\n  line-height: 1.25;\n  font-weight: 500;\n  color: #007CBA;\n  margin-bottom: 5px;\n}\n.jfb-addons-page .go-pro-banner__title {\n  font-size: 24px;\n  line-height: 1.25;\n  font-weight: 500;\n  color: #23282D;\n  margin-bottom: 20px;\n}\n.jfb-addons-page .go-pro-banner__button {\n  color: white;\n  background-color: #007CBA;\n}", "",{"version":3,"sources":["webpack://./admin/pages/addons/AddonsPage.vue","webpack://./../AddonsPage.vue"],"names":[],"mappings":"AA0ZA;EACC,YAAA;EACA,oBAAA;ACzZD;AD8ZC;EACC,aAAA;EACA,YAAA;AC3ZF;AD8ZC;EACC,mBAAA;AC5ZF;AD+ZC;EACC,aAAA;EACA,yBAAA;EACA,mBAAA;EACA,oBAAA;EACA,gCAAA;AC7ZF;AD+ZE;EACC,iBAAA;AC7ZH;ADiaC;EACC,eAAA;EACA,gBAAA;EACA,6BAAA;AC/ZF;ADiaE;EACC,iBAAA;AC/ZH;ADkaE;EACC,cAAA;EACA,mCAAA;AChaH;ADkaG;EACC,2BAAA;AChaJ;ADoaI;EACC,aAAA;AClaL;ADuaE;EACC,cAAA;EACA,mCAAA;ACraH;ADuaG;EACC,2BAAA;ACraJ;ADyaI;EACC,aAAA;ACvaL;AD6aG;EACC,aAAA;EACA,uBAAA;EACA,mBAAA;AC3aJ;ADibE;EACC,oBAAA;EACA,gCAAA;EACA,mBAAA;AC/aH;ADkbE;EACC,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cAAA;AChbH;ADwbC;EACC,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,oBAAA;ACtbF;ADwbE;EACC,mBAAA;ACtbH;AD0bC;EACC,mBAAA;ACxbF;AD2bC;EACC,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;EACA,gCAAA;ACzbF;AD2bE;EACC,eAAA;EACA,iBAAA;EACA,gBAAA;EACA,cAAA;EACA,kBAAA;ACzbH;AD4bE;EACC,eAAA;EACA,iBAAA;EACA,gBAAA;EACA,cAAA;EACA,mBAAA;AC1bH;AD6bE;EACC,YAAA;EACA,yBAAA;AC3bH","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n\r\n.proccesing-state {\r\n\topacity: 0.5;\r\n\tpointer-events: none;\r\n}\r\n\r\n.jfb-addons-page {\r\n\r\n\t&__inner {\r\n\t\tpadding: 30px;\r\n\t\theight: 100%;\r\n\t}\r\n\r\n\t&__header {\r\n\t\tmargin-bottom: 30px;\r\n\t}\r\n\r\n\t&__header-controls {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: flex-end;\r\n\t\talign-items: center;\r\n\t\tpadding-bottom: 15px;\r\n\t\tborder-bottom: 1px solid #DCDCDD;\r\n\r\n\t\t> .cx-vui-button {\r\n\t\t\tmargin-left: 10px;\r\n\t\t}\r\n\t}\r\n\r\n\t.cx-vui-button {\r\n\t\tfont-size: 13px;\r\n\t\tfont-weight: 400;\r\n\t\tbackground-color: transparent;\r\n\r\n\t\t.button-icon {\r\n\t\t\tmargin-right: 5px;\r\n\t\t}\r\n\r\n\t\t&--style-accent {\r\n\t\t\tcolor: #007cba;\r\n\t\t\tbox-shadow: inset 0 0 0 1px #007cba;\r\n\r\n\t\t\t&:hover {\r\n\t\t\t\tbackground-color: #007cba12;\r\n\t\t\t}\r\n\r\n\t\t\t.button-icon {\r\n\t\t\t\tpath {\r\n\t\t\t\t\tfill: #007cba;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t&--style-danger {\r\n\t\t\tcolor: #d6336c;\r\n\t\t\tbox-shadow: inset 0 0 0 1px #d6336c;\r\n\r\n\t\t\t&:hover {\r\n\t\t\t\tbackground-color: #d6336c12;\r\n\t\t\t}\r\n\r\n\t\t\t.button-icon {\r\n\t\t\t\tpath {\r\n\t\t\t\t\tfill: #d6336c;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t&__content {\r\n\t\t\t> span {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\tjustify-content: center;\r\n\t\t\t\talign-items: center;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t.cx-vui-popup {\r\n\t\t&__header {\r\n\t\t\tpadding-bottom: 15px;\r\n\t\t\tborder-bottom: 1px solid #DCDCDD;\r\n\t\t\tmargin-bottom: 30px;\r\n\t\t}\r\n\r\n\t\t&__header-title {\r\n\t\t\tfont-weight: 500;\r\n\t\t\tfont-size: 24px;\r\n\t\t\tline-height: 36px;\r\n\t\t\tcolor: #23282D;\r\n\t\t}\r\n\t}\r\n\r\n\t&__license-popup {\r\n\r\n\t}\r\n\r\n\t&__license-form {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tjustify-content: flex-start;\r\n\t\talign-items: stretch;\r\n\r\n\t\t> span {\r\n\t\t\tmargin-bottom: 10px;\r\n\t\t}\r\n\t}\r\n\r\n\t&__license-input {\r\n\t\tmargin-bottom: 10px;\r\n\t}\r\n\r\n\t.go-pro-banner {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tjustify-content: center;\r\n\t\talign-items: center;\r\n\t\tpadding: 24px 0;\r\n\t\tborder-bottom: 1px solid #DCDCDD;\r\n\r\n\t\t&__subtitle {\r\n\t\t\tfont-size: 18px;\r\n\t\t\tline-height: 1.25;\r\n\t\t\tfont-weight: 500;\r\n\t\t\tcolor: #007CBA;\r\n\t\t\tmargin-bottom: 5px;\r\n\t\t}\r\n\r\n\t\t&__title {\r\n\t\t\tfont-size: 24px;\r\n\t\t\tline-height: 1.25;\r\n\t\t\tfont-weight: 500;\r\n\t\t\tcolor: #23282D;\r\n\t\t\tmargin-bottom: 20px;\r\n\t\t}\r\n\r\n\t\t&__button {\r\n\t\t\tcolor: white;\r\n\t\t\tbackground-color: #007CBA;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n",".proccesing-state {\n  opacity: 0.5;\n  pointer-events: none;\n}\n\n.jfb-addons-page__inner {\n  padding: 30px;\n  height: 100%;\n}\n.jfb-addons-page__header {\n  margin-bottom: 30px;\n}\n.jfb-addons-page__header-controls {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  padding-bottom: 15px;\n  border-bottom: 1px solid #DCDCDD;\n}\n.jfb-addons-page__header-controls > .cx-vui-button {\n  margin-left: 10px;\n}\n.jfb-addons-page .cx-vui-button {\n  font-size: 13px;\n  font-weight: 400;\n  background-color: transparent;\n}\n.jfb-addons-page .cx-vui-button .button-icon {\n  margin-right: 5px;\n}\n.jfb-addons-page .cx-vui-button--style-accent {\n  color: #007cba;\n  box-shadow: inset 0 0 0 1px #007cba;\n}\n.jfb-addons-page .cx-vui-button--style-accent:hover {\n  background-color: #007cba12;\n}\n.jfb-addons-page .cx-vui-button--style-accent .button-icon path {\n  fill: #007cba;\n}\n.jfb-addons-page .cx-vui-button--style-danger {\n  color: #d6336c;\n  box-shadow: inset 0 0 0 1px #d6336c;\n}\n.jfb-addons-page .cx-vui-button--style-danger:hover {\n  background-color: #d6336c12;\n}\n.jfb-addons-page .cx-vui-button--style-danger .button-icon path {\n  fill: #d6336c;\n}\n.jfb-addons-page .cx-vui-button__content > span {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.jfb-addons-page .cx-vui-popup__header {\n  padding-bottom: 15px;\n  border-bottom: 1px solid #DCDCDD;\n  margin-bottom: 30px;\n}\n.jfb-addons-page .cx-vui-popup__header-title {\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 36px;\n  color: #23282D;\n}\n.jfb-addons-page__license-form {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: stretch;\n}\n.jfb-addons-page__license-form > span {\n  margin-bottom: 10px;\n}\n.jfb-addons-page__license-input {\n  margin-bottom: 10px;\n}\n.jfb-addons-page .go-pro-banner {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 24px 0;\n  border-bottom: 1px solid #DCDCDD;\n}\n.jfb-addons-page .go-pro-banner__subtitle {\n  font-size: 18px;\n  line-height: 1.25;\n  font-weight: 500;\n  color: #007CBA;\n  margin-bottom: 5px;\n}\n.jfb-addons-page .go-pro-banner__title {\n  font-size: 24px;\n  line-height: 1.25;\n  font-weight: 500;\n  color: #23282D;\n  margin-bottom: 20px;\n}\n.jfb-addons-page .go-pro-banner__button {\n  color: white;\n  background-color: #007CBA;\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".jfb-addons {\n  margin-bottom: 50px;\n}\n.jfb-addons:last-child {\n  margin-bottom: 0;\n}\n.jfb-addons a {\n  color: #007cba;\n}\n.jfb-addons__header {\n  margin-bottom: 20px;\n}\n.jfb-addons__list {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 40px;\n}\n@media (max-width: 1140px) {\n.jfb-addons__list {\n    grid-template-columns: repeat(2, 1fr);\n}\n}\n.jfb-addons__item {\n  transition: box-shadow 0.3s ease-out;\n  border-radius: 10px;\n}\n.jfb-addons__item:hover {\n  box-shadow: 0px 4px 28px rgba(15, 23, 42, 0.1);\n}\n.jfb-addons__item.activated .jfb-addons__item-info {\n  background-color: white;\n}\n.jfb-addons__item.update-avaliable .jfb-addons__item-name .version {\n  background-color: #D6336C;\n}\n.jfb-addons__item.update-avaliable .jfb-addons__item-update .latest-version {\n  color: white;\n  background-color: #46B450;\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n.jfb-addons__item-inner {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  height: 100%;\n}\n.jfb-addons__item-thumb {\n  border-radius: 10px 10px 0 0;\n  line-height: 0;\n  overflow: hidden;\n  position: relative;\n}\n.jfb-addons__item-thumb .pro-badge {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n}\n.jfb-addons__item-thumb img {\n  width: 100%;\n  height: auto;\n}\n.jfb-addons__item-info {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  flex: 1 1 auto;\n  padding: 20px;\n  border-radius: 0 0 10px 10px;\n  border-width: 0 1px 1px 1px;\n  border-color: #DCDCDD;\n  border-style: solid;\n  background-color: white;\n}\n.jfb-addons__item-name {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 10px;\n}\n.jfb-addons__item-name .label {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.25;\n}\n.jfb-addons__item-name .version {\n  padding: 1px 8px;\n  border-radius: 4px;\n  color: white;\n  background-color: #46B450;\n  margin-left: 10px;\n}\n.jfb-addons__item-update {\n  color: #7b7e81;\n  margin-bottom: 10px;\n}\n.jfb-addons__item-license {\n  margin-bottom: 10px;\n  color: #7b7e81;\n}\n.jfb-addons__item-license .cx-vui-button {\n  margin-left: 3px;\n}\n.jfb-addons__item-desc {\n  flex: 1 1 auto;\n}\n.jfb-addons__item-desc a {\n  text-decoration: none;\n}\n.jfb-addons__item-actions {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-top: 20px;\n}\n.jfb-addons__item-actions:empty {\n  display: none;\n}\n.jfb-addons__item-actions .cx-vui-button {\n  margin-right: 20px;\n}", "",{"version":3,"sources":["webpack://./admin/pages/addons/components/AddonItem.vue","webpack://./../AddonItem.vue"],"names":[],"mappings":"AAkRA;EACC,mBAAA;ACjRD;ADmRC;EACC,gBAAA;ACjRF;ADoRC;EACC,cAAA;AClRF;ADqRC;EACC,mBAAA;ACnRF;ADsRC;EACC,aAAA;EACA,qCAAA;EACA,SAAA;ACpRF;ADsRE;AALD;IAME,qCAAA;ACnRD;AACF;ADsRC;EACC,oCAAA;EACA,mBAAA;ACpRF;ADsRE;EACC,8CAAA;ACpRH;ADwRG;EACC,uBAAA;ACtRJ;AD4RI;EACC,yBAAA;AC1RL;AD8RI;EACC,YAAA;EACA,yBAAA;EACA,gBAAA;EACA,kBAAA;AC5RL;ADkSC;EACC,aAAA;EACA,sBAAA;EACA,oBAAA;EACA,YAAA;AChSF;ADmSC;EACC,4BAAA;EACA,cAAA;EACA,gBAAA;EACA,kBAAA;ACjSF;ADmSE;EACC,kBAAA;EACA,SAAA;EACA,UAAA;ACjSH;ADoSE;EACC,WAAA;EACA,YAAA;AClSH;ADsSC;EACC,aAAA;EACA,sBAAA;EACA,oBAAA;EACA,cAAA;EACA,aAAA;EACA,4BAAA;EACA,2BAAA;EACA,qBAAA;EACA,mBAAA;EACA,uBAAA;ACpSF;ADuSC;EACC,aAAA;EACA,8BAAA;EACA,uBAAA;EACA,mBAAA;ACrSF;ADuSE;EACC,eAAA;EACA,gBAAA;EACA,iBAAA;ACrSH;ADwSE;EACC,gBAAA;EACA,kBAAA;EACA,YAAA;EACA,yBAAA;EACA,iBAAA;ACtSH;AD0SC;EACC,cAAA;EACA,mBAAA;ACxSF;AD2SC;EACC,mBAAA;EACA,cAAA;ACzSF;AD2SE;EACC,gBAAA;ACzSH;AD6SC;EACC,cAAA;AC3SF;AD6SE;EACC,qBAAA;AC3SH;AD+SC;EACC,aAAA;EACA,2BAAA;EACA,mBAAA;EACA,eAAA;EACA,gBAAA;AC7SF;AD+SE;EACC,aAAA;AC7SH;ADgTE;EACC,kBAAA;AC9SH","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n\r\n.jfb-addons {\r\n\tmargin-bottom: 50px;\r\n\r\n\t&:last-child {\r\n\t\tmargin-bottom: 0;\r\n\t}\r\n\r\n\ta {\r\n\t\tcolor: #007cba;\r\n\t}\r\n\r\n\t&__header {\r\n\t\tmargin-bottom: 20px;\r\n\t}\r\n\r\n\t&__list {\r\n\t\tdisplay: grid;\r\n\t\tgrid-template-columns: repeat(4, 1fr);\r\n\t\tgap: 40px;\r\n\r\n\t\t@media (max-width: 1140px) {\r\n\t\t\tgrid-template-columns: repeat(2, 1fr);\r\n\t\t}\r\n\t}\r\n\r\n\t&__item {\r\n\t\ttransition: box-shadow .3s ease-out;\r\n\t\tborder-radius: 10px;\r\n\r\n\t\t&:hover {\r\n\t\t\tbox-shadow: 0px 4px 28px rgba(15, 23, 42, 0.1);\r\n\t\t}\r\n\r\n\t\t&.activated {\r\n\t\t\t.jfb-addons__item-info {\r\n\t\t\t\tbackground-color: white;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t&.update-avaliable {\r\n\t\t\t.jfb-addons__item-name {\r\n\t\t\t\t.version {\r\n\t\t\t\t\tbackground-color: #D6336C;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t.jfb-addons__item-update {\r\n\t\t\t\t.latest-version {\r\n\t\t\t\t\tcolor: white;\r\n\t\t\t\t\tbackground-color: #46B450;\r\n\t\t\t\t\tpadding: 2px 8px;\r\n\t\t\t\t\tborder-radius: 4px;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t&__item-inner {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\talign-items: stretch;\r\n\t\theight: 100%;\r\n\t}\r\n\r\n\t&__item-thumb {\r\n\t\tborder-radius: 10px 10px 0 0;\r\n\t\tline-height: 0;\r\n\t\toverflow: hidden;\r\n\t\tposition: relative;\r\n\r\n\t\t.pro-badge {\r\n\t\t\tposition: absolute;\r\n\t\t\ttop: 12px;\r\n\t\t\tleft: 12px;\r\n\t\t}\r\n\r\n\t\timg {\r\n\t\t\twidth: 100%;\r\n\t\t\theight: auto;\r\n\t\t}\r\n\t}\r\n\r\n\t&__item-info {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\talign-items: stretch;\r\n\t\tflex: 1 1 auto;\r\n\t\tpadding: 20px;\r\n\t\tborder-radius: 0 0 10px 10px;\r\n\t\tborder-width: 0 1px 1px 1px;\r\n\t\tborder-color: #DCDCDD;\r\n\t\tborder-style: solid;\r\n\t\tbackground-color: white;\r\n\t}\r\n\r\n\t&__item-name {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t\talign-items: flex-start;\r\n\t\tmargin-bottom: 10px;\r\n\r\n\t\t.label {\r\n\t\t\tfont-size: 20px;\r\n\t\t\tfont-weight: 700;\r\n\t\t\tline-height: 1.25;\r\n\t\t}\r\n\r\n\t\t.version {\r\n\t\t\tpadding: 1px 8px;\r\n\t\t\tborder-radius: 4px;\r\n\t\t\tcolor: white;\r\n\t\t\tbackground-color: #46B450;\r\n\t\t\tmargin-left: 10px;\r\n\t\t}\r\n\t}\r\n\r\n\t&__item-update {\r\n\t\tcolor: #7b7e81;\r\n\t\tmargin-bottom: 10px;\r\n\t}\r\n\r\n\t&__item-license {\r\n\t\tmargin-bottom: 10px;\r\n\t\tcolor: #7b7e81;\r\n\r\n\t\t.cx-vui-button {\r\n\t\t\tmargin-left: 3px;\r\n\t\t}\r\n\t}\r\n\r\n\t&__item-desc {\r\n\t\tflex: 1 1 auto;\r\n\r\n\t\ta {\r\n\t\t\ttext-decoration: none;\r\n\t\t}\r\n\t}\r\n\r\n\t&__item-actions {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: flex-start;\r\n\t\talign-items: center;\r\n\t\tflex-wrap: wrap;\r\n\t\tmargin-top: 20px;\r\n\r\n\t\t&:empty {\r\n\t\t\tdisplay: none;\r\n\t\t}\r\n\r\n\t\t.cx-vui-button {\r\n\t\t\tmargin-right: 20px;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n",".jfb-addons {\n  margin-bottom: 50px;\n}\n.jfb-addons:last-child {\n  margin-bottom: 0;\n}\n.jfb-addons a {\n  color: #007cba;\n}\n.jfb-addons__header {\n  margin-bottom: 20px;\n}\n.jfb-addons__list {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 40px;\n}\n@media (max-width: 1140px) {\n  .jfb-addons__list {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.jfb-addons__item {\n  transition: box-shadow 0.3s ease-out;\n  border-radius: 10px;\n}\n.jfb-addons__item:hover {\n  box-shadow: 0px 4px 28px rgba(15, 23, 42, 0.1);\n}\n.jfb-addons__item.activated .jfb-addons__item-info {\n  background-color: white;\n}\n.jfb-addons__item.update-avaliable .jfb-addons__item-name .version {\n  background-color: #D6336C;\n}\n.jfb-addons__item.update-avaliable .jfb-addons__item-update .latest-version {\n  color: white;\n  background-color: #46B450;\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n.jfb-addons__item-inner {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  height: 100%;\n}\n.jfb-addons__item-thumb {\n  border-radius: 10px 10px 0 0;\n  line-height: 0;\n  overflow: hidden;\n  position: relative;\n}\n.jfb-addons__item-thumb .pro-badge {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n}\n.jfb-addons__item-thumb img {\n  width: 100%;\n  height: auto;\n}\n.jfb-addons__item-info {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  flex: 1 1 auto;\n  padding: 20px;\n  border-radius: 0 0 10px 10px;\n  border-width: 0 1px 1px 1px;\n  border-color: #DCDCDD;\n  border-style: solid;\n  background-color: white;\n}\n.jfb-addons__item-name {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 10px;\n}\n.jfb-addons__item-name .label {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.25;\n}\n.jfb-addons__item-name .version {\n  padding: 1px 8px;\n  border-radius: 4px;\n  color: white;\n  background-color: #46B450;\n  margin-left: 10px;\n}\n.jfb-addons__item-update {\n  color: #7b7e81;\n  margin-bottom: 10px;\n}\n.jfb-addons__item-license {\n  margin-bottom: 10px;\n  color: #7b7e81;\n}\n.jfb-addons__item-license .cx-vui-button {\n  margin-left: 3px;\n}\n.jfb-addons__item-desc {\n  flex: 1 1 auto;\n}\n.jfb-addons__item-desc a {\n  text-decoration: none;\n}\n.jfb-addons__item-actions {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-top: 20px;\n}\n.jfb-addons__item-actions:empty {\n  display: none;\n}\n.jfb-addons__item-actions .cx-vui-button {\n  margin-right: 20px;\n}"],"sourceRoot":""}]);
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
        _vm._v(_vm._s("JetFormBuilder Addons"))
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
                  class: [
                    !_vm.isLicenseActivated
                      ? "cx-vui-button--style-accent"
                      : "cx-vui-button--style-danger"
                  ],
                  attrs: { size: "mini" },
                  on: { click: _vm.showLicensePopup }
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
          ),
          _vm._v(" "),
          !_vm.isLicenseActivated
            ? _c(
                "div",
                { staticClass: "go-pro-banner" },
                [
                  _c("div", { staticClass: "go-pro-banner__subtitle" }, [
                    _vm._v("Features & Integrations ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "go-pro-banner__title" }, [
                    _vm._v("Extend functionality with PRO Addons")
                  ]),
                  _vm._v(" "),
                  _c(
                    "cx-vui-button",
                    {
                      staticClass: "go-pro-banner__button",
                      attrs: {
                        "button-style": "default",
                        size: "mini",
                        url: _vm.goProLink,
                        "tag-name": "a",
                        target: "_blank"
                      }
                    },
                    [
                      _c("span", { attrs: { slot: "label" }, slot: "label" }, [
                        _c("span", [_vm._v("Go Pro")])
                      ])
                    ]
                  )
                ],
                1
              )
            : _vm._e()
        ]),
        _vm._v(" "),
        0 !== Object.keys(_vm.installedAddonList).length
          ? _c("div", { staticClass: "jfb-addons" }, [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "jfb-addons__list" },
                _vm._l(_vm.installedAddonList, function(addonData, index) {
                  return _c("AddonItem", {
                    key: index,
                    attrs: { "addon-data": addonData }
                  })
                }),
                1
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        0 !== Object.keys(_vm.availableAddonList).length
          ? _c("div", { staticClass: "jfb-addons" }, [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "jfb-addons__list" },
                _vm._l(_vm.availableAddonList, function(addonData, index) {
                  return _c("AddonItem", {
                    key: index,
                    attrs: { "addon-data": addonData }
                  })
                }),
                1
              )
            ])
          : _vm._e()
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
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "jfb-addons__header" }, [
      _c("span", { staticClass: "cx-vui-subtitle" }, [
        _vm._v("Your Installed Addons")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "jfb-addons__header" }, [
      _c("span", { staticClass: "cx-vui-subtitle" }, [
        _vm._v("All Available Addons")
      ])
    ])
  }
]
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
            !_vm.addonData.isInstalled
              ? _c("div", { staticClass: "pro-badge" }, [
                  _c(
                    "svg",
                    {
                      attrs: {
                        width: "40",
                        height: "20",
                        viewBox: "0 0 40 20",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }
                    },
                    [
                      _c("rect", {
                        attrs: {
                          width: "40",
                          height: "20",
                          rx: "4",
                          fill: "#EE7B16"
                        }
                      }),
                      _vm._v(" "),
                      _c("path", {
                        attrs: {
                          d:
                            "M10.625 10.8301V14H9.14258V5.46875H12.4062C13.3594 5.46875 14.1152 5.7168 14.6738 6.21289C15.2363 6.70898 15.5176 7.36523 15.5176 8.18164C15.5176 9.01758 15.2422 9.66797 14.6914 10.1328C14.1445 10.5977 13.377 10.8301 12.3887 10.8301H10.625ZM10.625 9.64062H12.4062C12.9336 9.64062 13.3359 9.51758 13.6133 9.27148C13.8906 9.02148 14.0293 8.66211 14.0293 8.19336C14.0293 7.73242 13.8887 7.36523 13.6074 7.0918C13.3262 6.81445 12.9395 6.67188 12.4473 6.66406H10.625V9.64062ZM19.9531 10.7129H18.3008V14H16.8184V5.46875H19.8184C20.8027 5.46875 21.5625 5.68945 22.0977 6.13086C22.6328 6.57227 22.9004 7.21094 22.9004 8.04688C22.9004 8.61719 22.7617 9.0957 22.4844 9.48242C22.2109 9.86523 21.8281 10.1602 21.3359 10.3672L23.252 13.9238V14H21.6641L19.9531 10.7129ZM18.3008 9.52344H19.8242C20.3242 9.52344 20.7148 9.39844 20.9961 9.14844C21.2773 8.89453 21.418 8.54883 21.418 8.11133C21.418 7.6543 21.2871 7.30078 21.0254 7.05078C20.7676 6.80078 20.3809 6.67188 19.8652 6.66406H18.3008V9.52344ZM31.1152 9.95703C31.1152 10.793 30.9707 11.5273 30.6816 12.1602C30.3926 12.7891 29.9785 13.2734 29.4395 13.6133C28.9043 13.9492 28.2871 14.1172 27.5879 14.1172C26.8965 14.1172 26.2793 13.9492 25.7363 13.6133C25.1973 13.2734 24.7793 12.791 24.4824 12.166C24.1895 11.541 24.041 10.8203 24.0371 10.0039V9.52344C24.0371 8.69141 24.1836 7.95703 24.4766 7.32031C24.7734 6.68359 25.1895 6.19727 25.7246 5.86133C26.2637 5.52148 26.8809 5.35156 27.5762 5.35156C28.2715 5.35156 28.8867 5.51953 29.4219 5.85547C29.9609 6.1875 30.377 6.66797 30.6699 7.29688C30.9629 7.92188 31.1113 8.65039 31.1152 9.48242V9.95703ZM29.6328 9.51172C29.6328 8.56641 29.4531 7.8418 29.0938 7.33789C28.7383 6.83398 28.2324 6.58203 27.5762 6.58203C26.9355 6.58203 26.4336 6.83398 26.0703 7.33789C25.7109 7.83789 25.5273 8.54688 25.5195 9.46484V9.95703C25.5195 10.8945 25.7012 11.6191 26.0645 12.1309C26.4316 12.6426 26.9395 12.8984 27.5879 12.8984C28.2441 12.8984 28.748 12.6484 29.0996 12.1484C29.4551 11.6484 29.6328 10.918 29.6328 9.95703V9.51172Z",
                          fill: "white"
                        }
                      })
                    ]
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("img", { attrs: { src: _vm.addonData.thumb, alt: "" } })
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
                      !_vm.activateLicenceActionAvaliable
                        ? _c(
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
                        : _vm._e()
                    ],
                    1
                  )
                : _vm._e()
            ]),
            _vm._v(" "),
            _vm.activateLicenceActionAvaliable
              ? _c(
                  "div",
                  { staticClass: "jfb-addons__item-license" },
                  [
                    _c("span", [_vm._v("License not activated")]),
                    _vm._v(" "),
                    _c(
                      "cx-vui-button",
                      {
                        attrs: { "button-style": "link-accent", size: "link" },
                        on: { click: _vm.activateLicense }
                      },
                      [
                        _c(
                          "span",
                          { attrs: { slot: "label" }, slot: "label" },
                          [_c("span", [_vm._v("Activate Now")])]
                        )
                      ]
                    )
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "jfb-addons__item-desc" }, [
              _c("span", {
                domProps: { innerHTML: _vm._s(_vm.addonData.desc) }
              }),
              _vm._v(" "),
              _c("a", { attrs: { href: _vm.learnMoreUrl, target: "_blank" } }, [
                _vm._v("Learn More")
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "jfb-addons__item-actions" },
              [
                _vm.installActionAvaliable
                  ? _c(
                      "cx-vui-button",
                      {
                        attrs: {
                          "button-style": "link-accent",
                          size: "link",
                          loading: _vm.actionPluginProcessed
                        },
                        on: { click: _vm.installPlugin }
                      },
                      [
                        _c(
                          "span",
                          { attrs: { slot: "label" }, slot: "label" },
                          [_c("span", [_vm._v("Install Addon")])]
                        )
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.activateActionAvaliable
                  ? _c(
                      "cx-vui-button",
                      {
                        attrs: {
                          "button-style": "link-accent",
                          size: "link",
                          loading: _vm.actionPluginProcessed
                        },
                        on: { click: _vm.activatePlugin }
                      },
                      [
                        _c(
                          "span",
                          { attrs: { slot: "label" }, slot: "label" },
                          [_c("span", [_vm._v("Activate Addon")])]
                        )
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.deactivateActionAvaliable
                  ? _c(
                      "cx-vui-button",
                      {
                        attrs: {
                          "button-style": "link-error",
                          size: "link",
                          loading: _vm.actionPluginProcessed
                        },
                        on: { click: _vm.deactivatePlugin }
                      },
                      [
                        _c(
                          "span",
                          { attrs: { slot: "label" }, slot: "label" },
                          [_c("span", [_vm._v("Deactivate Addon")])]
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
      _vm._v(_vm._s("JetFormBuilder Settings"))
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4uanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYWRtaW4vY29tcG9uZW50cy9jb2xsYXBzZS1taW5pL0N4VnVpQ29sbGFwc2VNaW5pLnZ1ZSIsIndlYnBhY2s6Ly8vYWRtaW4vcGFnZXMvYWRkb25zL0FkZG9uc1BhZ2UudnVlIiwid2VicGFjazovLy9hZG1pbi9wYWdlcy9hZGRvbnMvY29tcG9uZW50cy9BZGRvbkl0ZW0udnVlIiwid2VicGFjazovLy9hZG1pbi9wYWdlcy9zZXR0aW5ncy9TZXR0aW5nc1BhZ2UudnVlIiwid2VicGFjazovLy9hZG1pbi9wYWdlcy9zZXR0aW5ncy9nYXRld2F5cy9wYXlwYWwvUGF5cGFsVGFiLnZ1ZSIsIndlYnBhY2s6Ly8vYWRtaW4vcGFnZXMvc2V0dGluZ3MvdGFicy9hY3RpdmVjYW1wYWlnbi9BY3RpdmVDYW1wYWlnblRhYi52dWUiLCJ3ZWJwYWNrOi8vL2FkbWluL3BhZ2VzL3NldHRpbmdzL3RhYnMvY2FwdGNoYS9DYXB0Y2hhVGFiLnZ1ZSIsIndlYnBhY2s6Ly8vYWRtaW4vcGFnZXMvc2V0dGluZ3MvdGFicy9nZXRyZXNwb25zZS9HZXRSZXNwb25zZVRhYi52dWUiLCJ3ZWJwYWNrOi8vL2FkbWluL3BhZ2VzL3NldHRpbmdzL3RhYnMvbWFpbGNoaW1wL01haWxDaGltcFRhYi52dWUiLCJ3ZWJwYWNrOi8vL2FkbWluL3BhZ2VzL3NldHRpbmdzL3RhYnMvcGF5bWVudHMtZ2F0ZXdheXMvUGF5bWVudHNHYXRld2F5cy52dWUiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vbWl4aW5zL0dldEluY29taW5nLmpzIiwid2VicGFjazovLy8uL2FkbWluL21peGlucy9TYXZlVGFiQnlBamF4LmpzIiwid2VicGFjazovLy8uL2FkbWluL3BhZ2VzL3NldHRpbmdzL2dhdGV3YXlzL3BheXBhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9zZXR0aW5ncy9nYXRld2F5cy9wYXlwYWwvc291cmNlLmpzIiwid2VicGFjazovLy8uL2FkbWluL3BhZ2VzL3NldHRpbmdzL3RhYnMvYWN0aXZlY2FtcGFpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvc2V0dGluZ3MvdGFicy9hY3RpdmVjYW1wYWlnbi9zb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvc2V0dGluZ3MvdGFicy9jYXB0Y2hhL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FkbWluL3BhZ2VzL3NldHRpbmdzL3RhYnMvY2FwdGNoYS9zb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvc2V0dGluZ3MvdGFicy9nZXRyZXNwb25zZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9zZXR0aW5ncy90YWJzL2dldHJlc3BvbnNlL3NvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9zZXR0aW5ncy90YWJzL21haWxjaGltcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9zZXR0aW5ncy90YWJzL21haWxjaGltcC9zb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvc2V0dGluZ3MvdGFicy9wYXltZW50cy1nYXRld2F5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9zZXR0aW5ncy90YWJzL3BheW1lbnRzLWdhdGV3YXlzL3NvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9hZGRvbnMvQWRkb25zUGFnZS52dWU/NmNiMCIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9hZGRvbnMvY29tcG9uZW50cy9BZGRvbkl0ZW0udnVlPzA4MzAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL2FkbWluL2NvbXBvbmVudHMvY29sbGFwc2UtbWluaS9DeFZ1aUNvbGxhcHNlTWluaS52dWUiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvYWRkb25zL0FkZG9uc1BhZ2UudnVlIiwid2VicGFjazovLy8uL2FkbWluL3BhZ2VzL2FkZG9ucy9jb21wb25lbnRzL0FkZG9uSXRlbS52dWUiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvc2V0dGluZ3MvU2V0dGluZ3NQYWdlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9zZXR0aW5ncy9nYXRld2F5cy9wYXlwYWwvUGF5cGFsVGFiLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9zZXR0aW5ncy90YWJzL2FjdGl2ZWNhbXBhaWduL0FjdGl2ZUNhbXBhaWduVGFiLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9zZXR0aW5ncy90YWJzL2NhcHRjaGEvQ2FwdGNoYVRhYi52dWUiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvc2V0dGluZ3MvdGFicy9nZXRyZXNwb25zZS9HZXRSZXNwb25zZVRhYi52dWUiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvc2V0dGluZ3MvdGFicy9tYWlsY2hpbXAvTWFpbENoaW1wVGFiLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9zZXR0aW5ncy90YWJzL3BheW1lbnRzLWdhdGV3YXlzL1BheW1lbnRzR2F0ZXdheXMudnVlIiwid2VicGFjazovLy8uL2FkbWluL2NvbXBvbmVudHMvY29sbGFwc2UtbWluaS9DeFZ1aUNvbGxhcHNlTWluaS52dWU/OWU2YSIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9hZGRvbnMvQWRkb25zUGFnZS52dWU/ZWFlMyIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9hZGRvbnMvY29tcG9uZW50cy9BZGRvbkl0ZW0udnVlP2EwZmYiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvc2V0dGluZ3MvU2V0dGluZ3NQYWdlLnZ1ZT8yYmQ4Iiwid2VicGFjazovLy8uL2FkbWluL3BhZ2VzL3NldHRpbmdzL2dhdGV3YXlzL3BheXBhbC9QYXlwYWxUYWIudnVlPzFkYzQiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvc2V0dGluZ3MvdGFicy9hY3RpdmVjYW1wYWlnbi9BY3RpdmVDYW1wYWlnblRhYi52dWU/OTY4YSIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9zZXR0aW5ncy90YWJzL2NhcHRjaGEvQ2FwdGNoYVRhYi52dWU/ODI5ZCIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9zZXR0aW5ncy90YWJzL2dldHJlc3BvbnNlL0dldFJlc3BvbnNlVGFiLnZ1ZT9jZTBkIiwid2VicGFjazovLy8uL2FkbWluL3BhZ2VzL3NldHRpbmdzL3RhYnMvbWFpbGNoaW1wL01haWxDaGltcFRhYi52dWU/OWM3ZCIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9zZXR0aW5ncy90YWJzL3BheW1lbnRzLWdhdGV3YXlzL1BheW1lbnRzR2F0ZXdheXMudnVlPzIzMjgiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vY29tcG9uZW50cy9jb2xsYXBzZS1taW5pL0N4VnVpQ29sbGFwc2VNaW5pLnZ1ZT9iNmY4Iiwid2VicGFjazovLy8uL2FkbWluL3BhZ2VzL2FkZG9ucy9BZGRvbnNQYWdlLnZ1ZT8wYTkyIiwid2VicGFjazovLy8uL2FkbWluL3BhZ2VzL2FkZG9ucy9jb21wb25lbnRzL0FkZG9uSXRlbS52dWU/OTA1NyIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9zZXR0aW5ncy9TZXR0aW5nc1BhZ2UudnVlP2RlMzIiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvc2V0dGluZ3MvZ2F0ZXdheXMvcGF5cGFsL1BheXBhbFRhYi52dWU/MmVhYiIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9zZXR0aW5ncy90YWJzL2FjdGl2ZWNhbXBhaWduL0FjdGl2ZUNhbXBhaWduVGFiLnZ1ZT8zOTE5Iiwid2VicGFjazovLy8uL2FkbWluL3BhZ2VzL3NldHRpbmdzL3RhYnMvY2FwdGNoYS9DYXB0Y2hhVGFiLnZ1ZT82YzRkIiwid2VicGFjazovLy8uL2FkbWluL3BhZ2VzL3NldHRpbmdzL3RhYnMvZ2V0cmVzcG9uc2UvR2V0UmVzcG9uc2VUYWIudnVlPzQ4YzkiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvc2V0dGluZ3MvdGFicy9tYWlsY2hpbXAvTWFpbENoaW1wVGFiLnZ1ZT9lNzZkIiwid2VicGFjazovLy8uL2FkbWluL3BhZ2VzL3NldHRpbmdzL3RhYnMvcGF5bWVudHMtZ2F0ZXdheXMvUGF5bWVudHNHYXRld2F5cy52dWU/YmE5MCIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcyIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9hZGRvbnMvQWRkb25zUGFnZS52dWU/MzdhMSIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9hZGRvbnMvY29tcG9uZW50cy9BZGRvbkl0ZW0udnVlP2E0ZjgiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9saXN0VG9TdHlsZXMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL2FkbWluL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDxkaXYgOmNsYXNzPVwie1xyXG5cdFx0J2N4LXZ1aS1wYW5lbCc6IHdpdGhQYW5lbCxcclxuXHRcdCdjeC12dWktY29sbGFwc2UtbWluaV9faXRlbSc6IHRydWUsXHJcblx0XHQnY3gtdnVpLWNvbGxhcHNlLW1pbmlfX2l0ZW0tLWFjdGl2ZSc6IGlzQWN0aXZlLFxyXG5cdH1cIj5cclxuXHRcdDxkaXZcclxuXHRcdFx0Y2xhc3M9XCJjeC12dWktY29sbGFwc2UtbWluaV9faGVhZGVyXCJcclxuXHRcdFx0QGNsaWNrPVwiY29sbGFwc2VcIlxyXG5cdFx0PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY3gtdnVpLWNvbGxhcHNlLW1pbmlfX2hlYWRlci1sYWJlbFwiPlxyXG5cdFx0XHRcdDxzdmcgd2lkdGg9XCIxNFwiIGhlaWdodD1cIjE0XCIgdmlld0JveD1cIjAgMCAxNCAxNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG5cdFx0XHRcdFx0PHBhdGggZD1cIk0xNCAxMy45OTk5TDE0IC0wLjAwMDEyMjA3TDAgLTAuMDAwMTIxNDU4TDYuMTE5NTllLTA3IDEzLjk5OTlMMTQgMTMuOTk5OVpcIlxyXG5cdFx0XHRcdFx0XHQgIGZpbGw9XCJ3aGl0ZVwiPjwvcGF0aD5cclxuXHRcdFx0XHRcdDxwYXRoIGQ9XCJNNS4zMjkxMSAxTDExIDdMNS4zMjkxMSAxM0w0IDExLjU5MzhMOC4zNDE3NyA3TDQgMi40MDYyNUw1LjMyOTExIDFaXCIgZmlsbD1cIiMwMDdDQkFcIj48L3BhdGg+XHJcblx0XHRcdFx0PC9zdmc+XHJcblx0XHRcdFx0e3sgbGFiZWwgfX1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXZcclxuXHRcdFx0XHR2LWlmPVwiZGVzY1wiXHJcblx0XHRcdFx0Y2xhc3M9XCJjeC12dWktY29sbGFwc2UtbWluaV9faGVhZGVyLWRlc2NcIlxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0e3sgZGVzYyB9fVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PGRpdlxyXG5cdFx0XHR2LXNob3c9XCJpc0FjdGl2ZVwiXHJcblx0XHRcdGNsYXNzPVwiY3gtdnVpLWNvbGxhcHNlLW1pbmlfX2NvbnRlbnRcIlxyXG5cdFx0PlxyXG5cdFx0XHQ8c2xvdD5Db2xsYXBzZSBjb250ZW50Li4uPC9zbG90PlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdG5hbWU6ICdjeC12dWktY29sbGFwc2UtbWluaScsXHJcblx0cHJvcHM6IHtcclxuXHRcdHdpdGhQYW5lbDoge1xyXG5cdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHRkZWZhdWx0OiBmYWxzZSxcclxuXHRcdH0sXHJcblx0XHRpbml0aWFsQWN0aXZlOiB7XHJcblx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdGRlZmF1bHQ6IGZhbHNlLFxyXG5cdFx0fSxcclxuXHRcdGxhYmVsOiB7XHJcblx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0ZGVmYXVsdDogJ0NvbGxhcHNlIE1pbmknLFxyXG5cdFx0fSxcclxuXHRcdGRlc2M6IHtcclxuXHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRkZWZhdWx0OiAnJyxcclxuXHRcdH0sXHJcblx0fSxcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0aXNBY3RpdmU6IGZhbHNlLFxyXG5cdFx0fTtcclxuXHR9LFxyXG5cdGNyZWF0ZWQoKSB7XHJcblx0XHR0aGlzLmlzQWN0aXZlID0gdGhpcy5pbml0aWFsQWN0aXZlO1xyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0Y29sbGFwc2UoKSB7XHJcblx0XHRcdHRoaXMuaXNBY3RpdmUgPSAhIHRoaXMuaXNBY3RpdmU7XHJcblx0XHR9LFxyXG5cdH0sXHJcbn1cclxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxyXG5cdDxkaXZcclxuXHRcdGNsYXNzPVwiamZiLWFkZG9ucy1wYWdlIHdyYXBcIlxyXG5cdFx0OmNsYXNzPVwieyAncHJvY2Nlc2luZy1zdGF0ZSc6IHByb2NjZXNpbmdTdGF0ZSB9XCJcclxuXHQ+XHJcblx0XHQ8aDEgY2xhc3M9XCJjcy12dWktdGl0bGVcIj57eyAnSmV0Rm9ybUJ1aWxkZXIgQWRkb25zJyB9fTwvaDE+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiamZiLWFkZG9ucy1wYWdlX19pbm5lciBjeC12dWktcGFuZWxcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImpmYi1hZGRvbnMtcGFnZV9faGVhZGVyXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImpmYi1hZGRvbnMtcGFnZV9faGVhZGVyLWNvbnRyb2xzXCI+XHJcblx0XHRcdFx0XHQ8Y3gtdnVpLWJ1dHRvblxyXG5cdFx0XHRcdFx0XHRidXR0b24tc3R5bGU9XCJhY2NlbnRcIlxyXG5cdFx0XHRcdFx0XHRzaXplPVwibWluaVwiXHJcblx0XHRcdFx0XHRcdDpsb2FkaW5nPVwiY2hlY2tVcGRhdGVzUHJvY2Vzc2VkXCJcclxuXHRcdFx0XHRcdFx0QGNsaWNrPVwiY2hlY2tQbHVnaW5zVXBkYXRlXCJcclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PHNwYW4gc2xvdD1cImxhYmVsXCI+XHJcblx0XHRcdFx0XHRcdFx0PHN2ZyBjbGFzcz1cImJ1dHRvbi1pY29uXCIgd2lkdGg9XCIxNFwiIGhlaWdodD1cIjE0XCIgdmlld0JveD1cIjAgMCAxNCAxNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD1cIk0xMS43MDg1IDIuMjkxNzFDMTAuNTAwMSAxLjA4MzM3IDguODQxOCAwLjMzMzM3NCA3LjAwMDEzIDAuMzMzMzc0QzMuMzE2OCAwLjMzMzM3NCAwLjM0MTc5NyAzLjMxNjcxIDAuMzQxNzk3IDcuMDAwMDRDMC4zNDE3OTcgMTAuNjgzNCAzLjMxNjggMTMuNjY2NyA3LjAwMDEzIDEzLjY2NjdDMTAuMTA4NSAxMy42NjY3IDEyLjcwMDEgMTEuNTQxNyAxMy40NDE4IDguNjY2NzFIMTEuNzA4NUMxMS4wMjUxIDEwLjYwODQgOS4xNzUxMyAxMiA3LjAwMDEzIDEyQzQuMjQxOCAxMiAyLjAwMDEzIDkuNzU4MzcgMi4wMDAxMyA3LjAwMDA0QzIuMDAwMTMgNC4yNDE3MSA0LjI0MTggMi4wMDAwNCA3LjAwMDEzIDIuMDAwMDRDOC4zODM0NiAyLjAwMDA0IDkuNjE2OCAyLjU3NTA0IDEwLjUxNjggMy40ODMzN0w3LjgzMzQ2IDYuMTY2NzFIMTMuNjY2OFYwLjMzMzM3NEwxMS43MDg1IDIuMjkxNzFaXCIgZmlsbD1cIiMwMDdDQkFcIi8+XHJcblx0XHRcdFx0XHRcdFx0PC9zdmc+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4+Q2hlY2sgRm9yIFVwZGF0ZXM8L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvY3gtdnVpLWJ1dHRvbj5cclxuXHJcblx0XHRcdFx0XHQ8Y3gtdnVpLWJ1dHRvblxyXG5cclxuXHRcdFx0XHRcdFx0OmNsYXNzPVwiWyAhaXNMaWNlbnNlQWN0aXZhdGVkID8gJ2N4LXZ1aS1idXR0b24tLXN0eWxlLWFjY2VudCcgOiAnY3gtdnVpLWJ1dHRvbi0tc3R5bGUtZGFuZ2VyJyBdXCJcclxuXHRcdFx0XHRcdFx0c2l6ZT1cIm1pbmlcIlxyXG5cdFx0XHRcdFx0XHRAY2xpY2s9XCJzaG93TGljZW5zZVBvcHVwXCJcclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PHNwYW4gc2xvdD1cImxhYmVsXCI+XHJcblx0XHRcdFx0XHRcdFx0PHN2ZyBjbGFzcz1cImJ1dHRvbi1pY29uXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD1cIk0xNS40OTg1IDBIMTIuNDg5N0MxMi40MTY2IDAgMTIuMzQ4NyAwLjAxNTY3MDkgMTIuMjg2IDAuMDQ3MDEyN0MxMi4yMzM4IDAuMDY3OTA3MyAxMi4xODY3IDAuMTA0NDczIDEyLjE0NSAwLjE1NjcwOUw1Ljc2NjkgNi40NzIwOUM1LjYyMDYzIDYuNDQwNzQgNS40NjM5MiA2LjQxNDYzIDUuMjk2NzcgNi4zOTM3M0M1LjEyOTYxIDYuMzcyODQgNC45Njc2OCA2LjM2MjM5IDQuODEwOTcgNi4zNjIzOUM0LjE2MzI0IDYuMzYyMzkgMy41NDY4NSA2LjQ4Nzc2IDIuOTYxOCA2LjczODQ5QzIuMzc2NzUgNi45Nzg3OCAxLjg1OTYxIDcuMzIzNTQgMS40MTAzOCA3Ljc3Mjc3QzAuOTYxMTQ5IDguMjIyIDAuNjExMTY2IDguNzM5MTQgMC4zNjA0MzEgOS4zMjQxOUMwLjEyMDE0NCA5LjkwOTI0IDAgMTAuNTMwOSAwIDExLjE4OUMwIDExLjgzNjggMC4xMjAxNDQgMTIuNDUzMiAwLjM2MDQzMSAxMy4wMzgyQzAuNjExMTY2IDEzLjYyMzIgMC45NjExNDkgMTQuMTQwNCAxLjQxMDM4IDE0LjU4OTZDMS44NTk2MSAxNS4wMzg5IDIuMzc2NzUgMTUuMzgzNiAyLjk2MTggMTUuNjIzOUMzLjU0Njg1IDE1Ljg3NDYgNC4xNjMyNCAxNiA0LjgxMDk3IDE2QzUuNDY5MTUgMTYgNi4wOTA3NiAxNS44NzQ2IDYuNjc1ODEgMTUuNjIzOUM3LjI2MDg2IDE1LjM4MzYgNy43NzggMTUuMDM4OSA4LjIyNzIzIDE0LjU4OTZDOC44MDE4MyAxNC4wMTUgOS4xOTg4MiAxMy4zNDY0IDkuNDE4MjIgMTIuNTgzN0M5LjY0ODA2IDExLjgyMTEgOS42ODQ2MiAxMS4wMzc1IDkuNTI3OTEgMTAuMjMzMUwxMC44OTEzIDguODY5NzRDMTAuOTMzMSA4LjgyNzk1IDEwLjk2NDQgOC43ODA5MyAxMC45ODUzIDguNzI4N0MxMS4wMTY3IDguNjY2MDEgMTEuMDMyMyA4LjU5ODExIDExLjAzMjMgOC41MjQ5OFY3LjAyMDU3SDEyLjUzNjdDMTIuNjkzNCA3LjAyMDU3IDEyLjgxMzYgNi45NzM1NiAxMi44OTcyIDYuODc5NTNDMTIuOTkxMiA2Ljc4NTUgMTMuMDM4MiA2LjY2NTM2IDEzLjAzODIgNi41MTkxVjUuMDE0NjlIMTQuNTQyNkMxNC42MTU3IDUuMDE0NjkgMTQuNjc4NCA1LjAwNDI0IDE0LjczMDcgNC45ODMzNUMxNC43OTMzIDQuOTUyMDEgMTQuODUwOCA0LjkxMDIyIDE0LjkwMyA0Ljg1Nzk4TDE1LjkwNiAzLjg1NTA0QzE1LjkyNjkgMy44MTMyNiAxNS45NDc4IDMuNzY2MjQgMTUuOTY4NyAzLjcxNDAxQzE1Ljk4OTYgMy42NTEzMiAxNiAzLjU4MzQyIDE2IDMuNTEwMjhWMC41MDE0NjlDMTYgMC4zNTUyMDcgMTUuOTUzIDAuMjM1MDY0IDE1Ljg1OSAwLjE0MTAzOEMxNS43NjQ5IDAuMDQ3MDEyNyAxNS42NDQ4IDAgMTUuNDk4NSAwWk00Ljk2NzY4IDEyLjc4NzVDNC43OTAwOCAxMi45NjUxIDQuNTk2OCAxMy4wOTU3IDQuMzg3ODYgMTMuMTc5MkM0LjE4OTM2IDEzLjI1MjQgMy45NjQ3NCAxMy4yODg5IDMuNzE0MDEgMTMuMjg4OUMzLjQ2MzI3IDEzLjI4ODkgMy4yMzM0MyAxMy4yNDE5IDMuMDI0NDkgMTMuMTQ3OUMyLjgyNTk5IDEzLjA1MzkgMi42Mzc5NCAxMi45MzM3IDIuNDYwMzMgMTIuNzg3NUMyLjI4MjczIDEyLjYwOTkgMi4xNTIxNCAxMi40MjE4IDIuMDY4NTYgMTIuMjIzM0MxLjk5NTQzIDEyLjAxNDQgMS45NTg4NiAxMS43ODQ1IDEuOTU4ODYgMTEuNTMzOEMxLjk1ODg2IDExLjI4MzEgMi4wMDU4OCAxMS4wNTg0IDIuMDk5OSAxMC44NTk5QzIuMTkzOTMgMTAuNjUxIDIuMzE0MDcgMTAuNDU3NyAyLjQ2MDMzIDEwLjI4MDFDMi43ODQyIDkuOTU2MjUgMy4xOTE2NCA5Ljc5NDMyIDMuNjgyNjYgOS43OTQzMkM0LjE4NDEzIDkuNzk0MzIgNC41OTY4IDkuOTU2MjUgNC45MjA2NyAxMC4yODAxQzUuMDk4MjcgMTAuNDU3NyA1LjIyMzY0IDEwLjY1MSA1LjI5Njc3IDEwLjg1OTlDNS4zODAzNSAxMS4wNTg0IDUuNDIyMTQgMTEuMjgzMSA1LjQyMjE0IDExLjUzMzhDNS40MjIxNCAxMS43ODQ1IDUuMzgwMzUgMTIuMDE0NCA1LjI5Njc3IDEyLjIyMzNDNS4yMjM2NCAxMi40MjE4IDUuMTEzOTQgMTIuNjA5OSA0Ljk2NzY4IDEyLjc4NzVaXCIgZmlsbD1cIiNEM0QzRDNcIi8+XHJcblx0XHRcdFx0XHRcdFx0PC9zdmc+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gdi1pZj1cIiFpc0xpY2Vuc2VBY3RpdmF0ZWRcIj5BY3RpdmF0ZSBMaWNlbnNlPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuIHYtaWY9XCJpc0xpY2Vuc2VBY3RpdmF0ZWRcIj5EZWFjdGl2YXRlIExpY2Vuc2U8L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvY3gtdnVpLWJ1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRjbGFzcz1cImdvLXByby1iYW5uZXJcIlxyXG5cdFx0XHRcdFx0di1pZj1cIiFpc0xpY2Vuc2VBY3RpdmF0ZWRcIlxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJnby1wcm8tYmFubmVyX19zdWJ0aXRsZVwiPkZlYXR1cmVzICYgSW50ZWdyYXRpb25zIDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImdvLXByby1iYW5uZXJfX3RpdGxlXCI+RXh0ZW5kIGZ1bmN0aW9uYWxpdHkgd2l0aCBQUk8gQWRkb25zPC9kaXY+XHJcblx0XHRcdFx0XHQ8Y3gtdnVpLWJ1dHRvblxyXG5cdFx0XHRcdFx0XHRjbGFzcz1cImdvLXByby1iYW5uZXJfX2J1dHRvblwiXHJcblx0XHRcdFx0XHRcdGJ1dHRvbi1zdHlsZT1cImRlZmF1bHRcIlxyXG5cdFx0XHRcdFx0XHRzaXplPVwibWluaVwiXHJcblx0XHRcdFx0XHRcdDp1cmw9XCJnb1Byb0xpbmtcIlxyXG5cdFx0XHRcdFx0XHR0YWctbmFtZT1cImFcIlxyXG5cdFx0XHRcdFx0XHR0YXJnZXQ9XCJfYmxhbmtcIlxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBzbG90PVwibGFiZWxcIj5cclxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj5HbyBQcm88L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvY3gtdnVpLWJ1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8ZGl2XHJcblx0XHRcdFx0Y2xhc3M9XCJqZmItYWRkb25zXCJcclxuXHRcdFx0XHR2LWlmPVwiMCE9PU9iamVjdC5rZXlzKGluc3RhbGxlZEFkZG9uTGlzdCkubGVuZ3RoXCJcclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJqZmItYWRkb25zX19oZWFkZXJcIj5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiY3gtdnVpLXN1YnRpdGxlXCI+WW91ciBJbnN0YWxsZWQgQWRkb25zPC9zcGFuPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJqZmItYWRkb25zX19saXN0XCI+XHJcblx0XHRcdFx0XHQ8QWRkb25JdGVtXHJcblx0XHRcdFx0XHRcdHYtZm9yPVwiKCBhZGRvbkRhdGEsIGluZGV4ICkgaW4gaW5zdGFsbGVkQWRkb25MaXN0XCJcclxuXHRcdFx0XHRcdFx0OmtleT1cImluZGV4XCJcclxuXHRcdFx0XHRcdFx0OmFkZG9uLWRhdGE9XCJhZGRvbkRhdGFcIlxyXG5cdFx0XHRcdFx0PjwvQWRkb25JdGVtPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxkaXZcclxuXHRcdFx0XHRjbGFzcz1cImpmYi1hZGRvbnNcIlxyXG5cdFx0XHRcdHYtaWY9XCIwIT09T2JqZWN0LmtleXMoYXZhaWxhYmxlQWRkb25MaXN0KS5sZW5ndGhcIlxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImpmYi1hZGRvbnNfX2hlYWRlclwiPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJjeC12dWktc3VidGl0bGVcIj5BbGwgQXZhaWxhYmxlIEFkZG9uczwvc3Bhbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiamZiLWFkZG9uc19fbGlzdFwiPlxyXG5cdFx0XHRcdFx0PEFkZG9uSXRlbVxyXG5cdFx0XHRcdFx0XHR2LWZvcj1cIiggYWRkb25EYXRhLCBpbmRleCApIGluIGF2YWlsYWJsZUFkZG9uTGlzdFwiXHJcblx0XHRcdFx0XHRcdDprZXk9XCJpbmRleFwiXHJcblx0XHRcdFx0XHRcdDphZGRvbi1kYXRhPVwiYWRkb25EYXRhXCJcclxuXHRcdFx0XHRcdD48L0FkZG9uSXRlbT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHJcblx0XHQ8Y3gtdnVpLXBvcHVwXHJcblx0XHRcdGNsYXNzPVwiamZiLWFkZG9ucy1wYWdlX19saWNlbnNlLXBvcHVwXCJcclxuXHRcdFx0di1tb2RlbD1cImxpY2Vuc2VQb3B1cFZpc2libGVcIlxyXG5cdFx0XHQ6Zm9vdGVyPVwiZmFsc2VcIlxyXG5cdFx0XHRib2R5LXdpZHRoPVwiNTQwcHhcIlxyXG5cdFx0PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY3gtdnVpLXBvcHVwX19oZWFkZXItdGl0bGVcIiBzbG90PVwidGl0bGVcIj5cclxuXHRcdFx0XHQ8c3BhbiB2LWlmPVwiIWlzTGljZW5zZUFjdGl2YXRlZFwiPkFjdGl2YXRlIExpY2Vuc2U8L3NwYW4+XHJcblx0XHRcdFx0PHNwYW4gdi1pZj1cImlzTGljZW5zZUFjdGl2YXRlZFwiPkRlYWN0aXZhdGUgTGljZW5zZTwvc3Bhbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJqZmItYWRkb25zLXBhZ2VfX2xpY2Vuc2UtZm9ybVwiIHNsb3Q9XCJjb250ZW50XCI+XHJcblx0XHRcdFx0PHNwYW4gdi1pZj1cIiFpc0xpY2Vuc2VBY3RpdmF0ZWRcIj5BY3RpdmF0ZSBsaWNlbnNlIGZvciBhdXRvbWF0aWMgdXBkYXRlcyBhbmQgYXdlc29tZSBzdXBwb3J0PC9zcGFuPlxyXG5cdFx0XHRcdDxzcGFuIHYtaWY9XCJpc0xpY2Vuc2VBY3RpdmF0ZWRcIj5CeSBkZWFjdGl2YXRpbmcgdGhlIGxpY2Vuc2UgeW91IHdpbGwgbm90IGJlIGFibGUgdG8gdXBkYXRlIHRoZSBhZGRvbnM8L3NwYW4+XHJcblx0XHRcdFx0PGN4LXZ1aS1pbnB1dFxyXG5cdFx0XHRcdFx0Y2xhc3M9XCJqZmItYWRkb25zLXBhZ2VfX2xpY2Vuc2UtaW5wdXRcIlxyXG5cdFx0XHRcdFx0c2l6ZT1cImZ1bGx3aWR0aFwiXHJcblx0XHRcdFx0XHR0eXBlPVwicGFzc3dvcmRcIlxyXG5cdFx0XHRcdFx0OmF1dG9mb2N1cz1cInRydWVcIlxyXG5cdFx0XHRcdFx0OnByZXZlbnQtd3JhcD1cInRydWVcIlxyXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJKdXN0IHBhc3RlIGl0IGhlcmVcIlxyXG5cdFx0XHRcdFx0di1tb2RlbD1cImxpY2Vuc2VLZXlcIlxyXG5cdFx0XHRcdD48L2N4LXZ1aS1pbnB1dD5cclxuXHRcdFx0XHQ8Y3gtdnVpLWJ1dHRvblxyXG5cdFx0XHRcdFx0Y2xhc3M9XCJqZmItYWRkb25zLXBhZ2VfX2xpY2Vuc2UtYWN0aW9uXCJcclxuXHRcdFx0XHRcdGJ1dHRvbi1zdHlsZT1cImFjY2VudFwiXHJcblx0XHRcdFx0XHRzaXplPVwibWluaVwiXHJcblx0XHRcdFx0XHQ6bG9hZGluZz1cImxpY2Vuc2VQcm9jY2VzaW5nU3RhdGVcIlxyXG5cdFx0XHRcdFx0QGNsaWNrPVwibGljZW5zZUFjdGlvblwiXHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PHNwYW4gc2xvdD1cImxhYmVsXCI+XHJcblx0XHRcdFx0XHRcdDxzcGFuIHYtaWY9XCIhaXNMaWNlbnNlQWN0aXZhdGVkXCI+QWN0aXZhdGU8L3NwYW4+XHJcblx0XHRcdFx0XHRcdDxzcGFuIHYtaWY9XCJpc0xpY2Vuc2VBY3RpdmF0ZWRcIj5EZWFjdGl2YXRlPC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdDwvY3gtdnVpLWJ1dHRvbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2N4LXZ1aS1wb3B1cD5cclxuXHQ8L2Rpdj5cclxuXHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cclxuaW1wb3J0IEFkZG9uSXRlbSBmcm9tICcuL2NvbXBvbmVudHMvQWRkb25JdGVtLnZ1ZSc7XHJcblxyXG5jb25zdCB7IGFwcGx5RmlsdGVycywgZG9BY3Rpb24gfSA9IHdwLmhvb2tzO1xyXG5cclxud2luZG93LmpmYkV2ZW50QnVzID0gbmV3IFZ1ZSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdG5hbWU6ICdqZmItYWRkb25zJyxcclxuXHRjb21wb25lbnRzOiB7XHJcblx0XHRBZGRvbkl0ZW0sXHJcblx0fSxcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0YWxsQWRkb25zOiB3aW5kb3cuSmV0RkJQYWdlQ29uZmlnLmFsbEFkZG9ucyB8fCB7fSxcclxuXHRcdFx0bGljZW5zZUxpc3Q6IHdpbmRvdy5KZXRGQlBhZ2VDb25maWcubGljZW5zZUxpc3QgfHwgW10sXHJcblx0XHRcdGxpY2Vuc2VLZXk6IHdpbmRvdy5KZXRGQlBhZ2VDb25maWcubGljZW5zZUtleSB8fCAnJyxcclxuXHRcdFx0dGhlbWVJbmZvOiB3aW5kb3cuSmV0RkJQYWdlQ29uZmlnLnRoZW1lSW5mbyB8fCBmYWxzZSxcclxuXHRcdFx0bWlzY0luZm86IHdpbmRvdy5KZXRGQlBhZ2VDb25maWcubWlzY0luZm8gfHwgZmFsc2UsXHJcblxyXG5cdFx0XHRsaWNlbnNlQWN0aXZhdGVkOiBmYWxzZSxcclxuXHRcdFx0bGljZW5zZVBvcHVwVmlzaWJsZTogZmFsc2UsXHJcblx0XHRcdGxpY2Vuc2VQcm9jY2VzaW5nU3RhdGU6IGZhbHNlLFxyXG5cdFx0XHRsaWNlbnNlQWpheEFjdGlvbjogbnVsbCxcclxuXHJcblx0XHRcdGNoZWNrVXBkYXRlc0FjdGlvbjogbnVsbCxcclxuXHRcdFx0Y2hlY2tVcGRhdGVzUHJvY2Vzc2VkOiBmYWxzZSxcclxuXHJcblx0XHRcdHByb2NjZXNpbmdTdGF0ZTogZmFsc2UsXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0bW91bnRlZDogZnVuY3Rpb24oKSB7XHJcblx0XHR3aW5kb3cuamZiRXZlbnRCdXMuJG9uKCAndXBkYXRlQWRkb25EYXRhJywgdGhpcy51cGRhdGVBZGRvbkRhdGEgKTtcclxuXHRcdHdpbmRvdy5qZmJFdmVudEJ1cy4kb24oICdzaG93TGljZW5zZVBvcHVwJywgdGhpcy5zaG93TGljZW5zZVBvcHVwICk7XHJcblx0fSxcclxuXHRjb21wdXRlZDoge1xyXG5cdFx0aXNMaWNlbnNlQWN0aXZhdGVkKCkge1xyXG5cdFx0XHRyZXR1cm4gMCAhPT0gdGhpcy5saWNlbnNlTGlzdC5sZW5ndGg7XHJcblx0XHR9LFxyXG5cclxuXHRcdGxpY2Vuc2VBY3Rpb25UeXBlKCkge1xyXG5cdFx0XHRyZXR1cm4gISB0aGlzLmlzTGljZW5zZUFjdGl2YXRlZCA/ICdhY3RpdmF0ZV9saWNlbnNlJyA6ICdkZWFjdGl2YXRlX2xpY2Vuc2UnO1xyXG5cdFx0fSxcclxuXHJcblx0XHRpbnN0YWxsZWRBZGRvbkxpc3QoKSB7XHJcblx0XHRcdGxldCBpbnN0YWxsZWRBZGRvbnNMaXN0ID0ge307XHJcblxyXG5cdFx0XHRmb3IgKCBsZXQgYWRkb25TbHVnIGluIHRoaXMuYWxsQWRkb25zICkge1xyXG5cclxuXHRcdFx0XHRpZiAoIHRoaXMuYWxsQWRkb25zWyBhZGRvblNsdWcgXVsgJ2lzSW5zdGFsbGVkJyBdICkge1xyXG5cdFx0XHRcdFx0aW5zdGFsbGVkQWRkb25zTGlzdFsgYWRkb25TbHVnIF0gPSB0aGlzLmFsbEFkZG9uc1sgYWRkb25TbHVnIF07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gaW5zdGFsbGVkQWRkb25zTGlzdDtcclxuXHRcdH0sXHJcblxyXG5cdFx0YXZhaWxhYmxlQWRkb25MaXN0KCkge1xyXG5cdFx0XHRsZXQgYXZhaWxhYmxlQWRkb25MaXN0ID0ge307XHJcblxyXG5cdFx0XHRmb3IgKCBsZXQgYWRkb25TbHVnIGluIHRoaXMuYWxsQWRkb25zICkge1xyXG5cclxuXHRcdFx0XHRpZiAoICEgdGhpcy5hbGxBZGRvbnNbIGFkZG9uU2x1ZyBdWyAnaXNJbnN0YWxsZWQnIF0gKSB7XHJcblx0XHRcdFx0XHRhdmFpbGFibGVBZGRvbkxpc3RbIGFkZG9uU2x1ZyBdID0gdGhpcy5hbGxBZGRvbnNbIGFkZG9uU2x1ZyBdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIGF2YWlsYWJsZUFkZG9uTGlzdDtcclxuXHRcdH0sXHJcblxyXG5cdFx0Z29Qcm9MaW5rKCkge1xyXG5cdFx0XHRsZXQgcHJpY2luZ1BhZ2VVcmwgPSB0aGlzLm1pc2NJbmZvLnByaWNpbmdQYWdlVXJsLFxyXG5cdFx0XHRcdHV0bVBhcmFtcyA9IHRoaXMuZ2V0VXRtUGFyYW1zU3RyaW5nKCB7XHJcblx0XHRcdFx0XHR1dG1fc291cmNlOiBgZGFzaGJvYXJkL2pldC1mb3JtLWJ1aWxkZXItYWRkb25zLXBhZ2VgLFxyXG5cdFx0XHRcdFx0dXRtX21lZGl1bTogYGNyb2NvYmxvY2stbGljZW5zZS8keyB0aGlzLnRoZW1lSW5mby50aGVtZSB9YCxcclxuXHRcdFx0XHRcdHV0bV9jYW1wYWlnbjogJ2dvLXByby1idXR0b24nLFxyXG5cdFx0XHRcdH0gKTtcclxuXHJcblx0XHRcdHJldHVybiBgJHsgcHJpY2luZ1BhZ2VVcmwgfT8keyB1dG1QYXJhbXMgfWA7XHJcblx0XHR9XHJcblx0fSxcclxuXHRtZXRob2RzOiB7XHJcblx0XHRzaG93TGljZW5zZVBvcHVwKCkge1xyXG5cdFx0XHR0aGlzLmxpY2Vuc2VQb3B1cFZpc2libGUgPSB0cnVlO1xyXG5cdFx0fSxcclxuXHJcblx0XHR1cGRhdGVBZGRvbkRhdGEoIGRhdGEgKSB7XHJcblx0XHRcdGxldCBzbHVnID0gZGF0YS5zbHVnLFxyXG5cdFx0XHRcdGFkZG9uRGF0YSA9IGRhdGEuYWRkb25EYXRhLFxyXG5cdFx0XHRcdHBsdWdpbkFjdGlvbiA9IGRhdGEuYWN0aW9uLFxyXG5cdFx0XHRcdHJlbG9hZEFjdGlvbk1hcCA9IFsgJ2FjdGl2YXRlJywgJ2RlYWN0aXZhdGUnLCAndXBkYXRlJyBdO1xyXG5cclxuXHRcdFx0dGhpcy5hbGxBZGRvbnNbIHNsdWcgXSA9IE9iamVjdC5hc3NpZ24oIHt9LCB0aGlzLmFsbEFkZG9uc1sgc2x1ZyBdLCBhZGRvbkRhdGEgKTtcclxuXHJcblx0XHRcdGlmICggcmVsb2FkQWN0aW9uTWFwLmluY2x1ZGVzKCBwbHVnaW5BY3Rpb24gKSApIHtcclxuXHRcdFx0XHR0aGlzLnByb2NjZXNpbmdTdGF0ZSA9IHRydWU7XHJcblxyXG5cdFx0XHRcdHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG5cdFx0XHRcdH0sIDEwMDAgKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHRsaWNlbnNlQWN0aW9uKCkge1xyXG5cdFx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG5cdFx0XHRpZiAoICcnID09PSB0aGlzLmxpY2Vuc2VLZXkgKSB7XHJcblx0XHRcdFx0c2VsZi4kQ1hOb3RpY2UuYWRkKCB7XHJcblx0XHRcdFx0XHRtZXNzYWdlOiAnTGljZW5zZSBrZXkgaXMgbWlzc2luZycsXHJcblx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxyXG5cdFx0XHRcdFx0ZHVyYXRpb246IDQwMDAsXHJcblx0XHRcdFx0fSApO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMubGljZW5zZVByb2NjZXNpbmdTdGF0ZSA9IHRydWU7XHJcblxyXG5cdFx0XHRzZWxmLmxpY2Vuc2VBamF4QWN0aW9uID0galF1ZXJ5LmFqYXgoIHtcclxuXHRcdFx0XHR0eXBlOiAnUE9TVCcsXHJcblx0XHRcdFx0dXJsOiB3aW5kb3cuSmV0RkJQYWdlQ29uZmlnLmFqYXhVcmwsXHJcblx0XHRcdFx0ZGF0YVR5cGU6ICdqc29uJyxcclxuXHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRhY3Rpb246ICdqZmJfbGljZW5zZV9hY3Rpb24nLFxyXG5cdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRsaWNlbnNlOiBzZWxmLmxpY2Vuc2VLZXksXHJcblx0XHRcdFx0XHRcdGFjdGlvbjogc2VsZi5saWNlbnNlQWN0aW9uVHlwZVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0YmVmb3JlU2VuZDogKCBqcVhIUiwgYWpheFNldHRpbmdzICkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdGlmICggbnVsbCAhPT0gc2VsZi5saWNlbnNlQWpheEFjdGlvbiApIHtcclxuXHRcdFx0XHRcdFx0c2VsZi5saWNlbnNlQWpheEFjdGlvbi5hYm9ydCgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c3VjY2VzczogKCByZXNwb25jZSwgdGV4dFN0YXR1cywganFYSFIgKSA9PiB7XHJcblx0XHRcdFx0XHRzZWxmLmxpY2Vuc2VQcm9jY2VzaW5nU3RhdGUgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0XHRpZiAoIHJlc3BvbmNlLnN1Y2Nlc3MgKSB7XHJcblx0XHRcdFx0XHRcdHNlbGYuJENYTm90aWNlLmFkZCgge1xyXG5cdFx0XHRcdFx0XHRcdG1lc3NhZ2U6IHJlc3BvbmNlLm1lc3NhZ2UsXHJcblx0XHRcdFx0XHRcdFx0dHlwZTogJ3N1Y2Nlc3MnLFxyXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiA0MDAwLFxyXG5cdFx0XHRcdFx0XHR9ICk7XHJcblxyXG5cdFx0XHRcdFx0XHRsZXQgbGljZW5zZURhdGEgPSByZXNwb25jZS5kYXRhO1xyXG5cclxuXHRcdFx0XHRcdFx0bGljZW5zZURhdGFbJ2xpY2Vuc2Vfa2V5J10gPSBzZWxmLmxpY2Vuc2VLZXk7XHJcblxyXG5cdFx0XHRcdFx0XHRzd2l0Y2ggKCBzZWxmLmxpY2Vuc2VBY3Rpb25UeXBlICkge1xyXG5cdFx0XHRcdFx0XHRcdGNhc2UgJ2FjdGl2YXRlX2xpY2Vuc2UnOlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdHNlbGYubGljZW5zZUxpc3QucHVzaCggbGljZW5zZURhdGEgKTtcclxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdGNhc2UgJ2RlYWN0aXZhdGVfbGljZW5zZSc6XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0c2VsZi5saWNlbnNlTGlzdCA9IHNlbGYubGljZW5zZUxpc3QuZmlsdGVyKCAoIGxpY2Vuc2VEYXRhICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gc2VsZi5saWNlbnNlS2V5ICE9PSBsaWNlbnNlRGF0YVsnbGljZW5zZV9rZXknXTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRzZWxmLmxpY2Vuc2VLZXkgPSAnJztcclxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRzZWxmLmxpY2Vuc2VQb3B1cFZpc2libGUgPSBmYWxzZTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHNlbGYuJENYTm90aWNlLmFkZCgge1xyXG5cdFx0XHRcdFx0XHRcdG1lc3NhZ2U6IHJlc3BvbmNlLm1lc3NhZ2UsXHJcblx0XHRcdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcclxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogNDAwMCxcclxuXHRcdFx0XHRcdFx0fSApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSApO1xyXG5cdFx0fSxcclxuXHJcblx0XHRjaGVja1BsdWdpbnNVcGRhdGU6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG5cdFx0XHRzZWxmLmNoZWNrVXBkYXRlc0FjdGlvbiA9IGpRdWVyeS5hamF4KCB7XHJcblx0XHRcdFx0dHlwZTogJ1BPU1QnLFxyXG5cdFx0XHRcdHVybDogd2luZG93LkpldEZCUGFnZUNvbmZpZy5hamF4VXJsLFxyXG5cdFx0XHRcdGRhdGFUeXBlOiAnanNvbicsXHJcblx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0YWN0aW9uOiAnamZiX2xpY2Vuc2Vfc2VydmljZV9hY3Rpb24nLFxyXG5cdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRhY3Rpb246ICdjaGVjay1wbHVnaW4tdXBkYXRlJ1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0YmVmb3JlU2VuZDogKCBqcVhIUiwgYWpheFNldHRpbmdzICkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdGlmICggbnVsbCAhPT0gc2VsZi5jaGVja1VwZGF0ZXNBY3Rpb24gKSB7XHJcblx0XHRcdFx0XHRcdHNlbGYuY2hlY2tVcGRhdGVzQWN0aW9uLmFib3J0KCk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0c2VsZi5jaGVja1VwZGF0ZXNQcm9jZXNzZWQgPSB0cnVlO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24oIHJlc3BvbmNlLCB0ZXh0U3RhdHVzLCBqcVhIUiApIHtcclxuXHRcdFx0XHRcdHNlbGYuY2hlY2tVcGRhdGVzUHJvY2Vzc2VkID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCByZXNwb25jZS5zdWNjZXNzICkge1xyXG5cdFx0XHRcdFx0XHRzZWxmLiRDWE5vdGljZS5hZGQoIHtcclxuXHRcdFx0XHRcdFx0XHRtZXNzYWdlOiByZXNwb25jZS5tZXNzYWdlLFxyXG5cdFx0XHRcdFx0XHRcdHR5cGU6ICdzdWNjZXNzJyxcclxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogNDAwMCxcclxuXHRcdFx0XHRcdFx0fSApO1xyXG5cclxuXHRcdFx0XHRcdFx0c2VsZi5wcm9jY2VzaW5nU3RhdGUgPSB0cnVlO1xyXG5cclxuXHRcdFx0XHRcdFx0c2V0VGltZW91dCggZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG5cdFx0XHRcdFx0XHR9LCAxMDAwICk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRzZWxmLiRDWE5vdGljZS5hZGQoIHtcclxuXHRcdFx0XHRcdFx0XHRtZXNzYWdlOiByZXNwb25jZS5tZXNzYWdlLFxyXG5cdFx0XHRcdFx0XHRcdHR5cGU6ICdlcnJvcicsXHJcblx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDQwMDAsXHJcblx0XHRcdFx0XHRcdH0gKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0YWRkTGljZW5zZSggbGljZW5zZURhdGEgKSB7XHJcblx0XHRcdHRoaXMubGljZW5zZUxpc3QucHVzaCggbGljZW5zZURhdGEgKTtcclxuXHJcblx0XHRcdHNlbGYucHJvY2Nlc2luZ1N0YXRlID0gdHJ1ZTtcclxuXHJcblx0XHRcdHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuXHRcdFx0fSwgMzAwMCApO1xyXG5cdFx0fSxcclxuXHJcblx0XHRyZW1vdmVMaWNlbnNlKCBsaWNlbmNlS2V5ICkge1xyXG5cclxuXHRcdFx0bGV0IHJlbW92aW5nSW5kZXggPSBmYWxzZTtcclxuXHJcblx0XHRcdGZvciAoIGxldCBsaWNlbmNlSW5kZXggaW4gdGhpcy5saWNlbnNlTGlzdCApIHtcclxuXHRcdFx0XHRsZXQgbGljZW5zZURhdGEgPSAgdGhpcy5saWNlbnNlTGlzdFsgbGljZW5jZUluZGV4IF07XHJcblxyXG5cdFx0XHRcdGlmICggbGljZW5zZURhdGFbJ2xpY2Vuc2VLZXknXSA9PT0gbGljZW5jZUtleSApIHtcclxuXHRcdFx0XHRcdHJlbW92aW5nSW5kZXggPSBsaWNlbmNlSW5kZXg7XHJcblxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIHJlbW92aW5nSW5kZXggKSB7XHJcblx0XHRcdFx0dGhpcy5saWNlbnNlTGlzdC5zcGxpY2UoIHJlbW92aW5nSW5kZXgsIDEgKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5saWNlbnNlUG9wdXBWaXNpYmxlID0gZmFsc2U7XHJcblxyXG5cdFx0XHRzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcblx0XHRcdH0sIDUwMCApO1xyXG5cdFx0fSxcclxuXHJcblx0XHRnZXRVdG1QYXJhbXNTdHJpbmcoIGRhdGEgPSB7fSApIHtcclxuXHRcdFx0bGV0IHV0bVN0cmluZyA9IGZhbHNlO1xyXG5cclxuXHRcdFx0aWYgKCAwID09PSBPYmplY3Qua2V5cyggZGF0YSApLmxlbmd0aCApIHtcclxuXHRcdFx0XHRyZXR1cm4gdXRtU3RyaW5nO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR1dG1TdHJpbmcgPSBPYmplY3Qua2V5cyggZGF0YSApLm1hcCggKCBrZXkgKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIFsga2V5LCBkYXRhWyBrZXkgXSBdLm1hcCggZW5jb2RlVVJJQ29tcG9uZW50ICkuam9pbiggJz0nICk7XHJcblx0XHRcdH0gKS5qb2luKCAnJicgKTtcclxuXHJcblx0XHRcdHJldHVybiB1dG1TdHJpbmc7XHJcblx0XHR9XHJcblx0fSxcclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG5cclxuLnByb2NjZXNpbmctc3RhdGUge1xyXG5cdG9wYWNpdHk6IDAuNTtcclxuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLmpmYi1hZGRvbnMtcGFnZSB7XHJcblxyXG5cdCZfX2lubmVyIHtcclxuXHRcdHBhZGRpbmc6IDMwcHg7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0fVxyXG5cclxuXHQmX19oZWFkZXIge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHR9XHJcblxyXG5cdCZfX2hlYWRlci1jb250cm9scyB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuXHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRENEQ0REO1xyXG5cclxuXHRcdD4gLmN4LXZ1aS1idXR0b24ge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMTBweDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5jeC12dWktYnV0dG9uIHtcclxuXHRcdGZvbnQtc2l6ZTogMTNweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHJcblx0XHQuYnV0dG9uLWljb24ge1xyXG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDVweDtcclxuXHRcdH1cclxuXHJcblx0XHQmLS1zdHlsZS1hY2NlbnQge1xyXG5cdFx0XHRjb2xvcjogIzAwN2NiYTtcclxuXHRcdFx0Ym94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICMwMDdjYmE7XHJcblxyXG5cdFx0XHQmOmhvdmVyIHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3Y2JhMTI7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5idXR0b24taWNvbiB7XHJcblx0XHRcdFx0cGF0aCB7XHJcblx0XHRcdFx0XHRmaWxsOiAjMDA3Y2JhO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdCYtLXN0eWxlLWRhbmdlciB7XHJcblx0XHRcdGNvbG9yOiAjZDYzMzZjO1xyXG5cdFx0XHRib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggI2Q2MzM2YztcclxuXHJcblx0XHRcdCY6aG92ZXIge1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNkNjMzNmMxMjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LmJ1dHRvbi1pY29uIHtcclxuXHRcdFx0XHRwYXRoIHtcclxuXHRcdFx0XHRcdGZpbGw6ICNkNjMzNmM7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Jl9fY29udGVudCB7XHJcblx0XHRcdD4gc3BhbiB7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQuY3gtdnVpLXBvcHVwIHtcclxuXHRcdCZfX2hlYWRlciB7XHJcblx0XHRcdHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG5cdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RDRENERDtcclxuXHRcdFx0bWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHRcdH1cclxuXHJcblx0XHQmX19oZWFkZXItdGl0bGUge1xyXG5cdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRmb250LXNpemU6IDI0cHg7XHJcblx0XHRcdGxpbmUtaGVpZ2h0OiAzNnB4O1xyXG5cdFx0XHRjb2xvcjogIzIzMjgyRDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdCZfX2xpY2Vuc2UtcG9wdXAge1xyXG5cclxuXHR9XHJcblxyXG5cdCZfX2xpY2Vuc2UtZm9ybSB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHRcdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG5cclxuXHRcdD4gc3BhbiB7XHJcblx0XHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQmX19saWNlbnNlLWlucHV0IHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0fVxyXG5cclxuXHQuZ28tcHJvLWJhbm5lciB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHBhZGRpbmc6IDI0cHggMDtcclxuXHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRENEQ0REO1xyXG5cclxuXHRcdCZfX3N1YnRpdGxlIHtcclxuXHRcdFx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdFx0XHRsaW5lLWhlaWdodDogMS4yNTtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0Y29sb3I6ICMwMDdDQkE7XHJcblx0XHRcdG1hcmdpbi1ib3R0b206IDVweDtcclxuXHRcdH1cclxuXHJcblx0XHQmX190aXRsZSB7XHJcblx0XHRcdGZvbnQtc2l6ZTogMjRweDtcclxuXHRcdFx0bGluZS1oZWlnaHQ6IDEuMjU7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRcdGNvbG9yOiAjMjMyODJEO1xyXG5cdFx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdCZfX2J1dHRvbiB7XHJcblx0XHRcdGNvbG9yOiB3aGl0ZTtcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzAwN0NCQTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG5cdDxkaXZcclxuXHRcdGNsYXNzPVwiamZiLWFkZG9uc19faXRlbVwiXHJcblx0XHQ6Y2xhc3M9XCJ7XHJcblx0XHRcdCdhY3RpdmF0ZWQnOiBhZGRvbkRhdGEuaXNBY3RpdmF0ZWQsXHJcblx0XHRcdCd1cGRhdGUtYXZhbGlhYmxlJzogdXBkYXRlQWN0aW9uQXZhbGlhYmxlLFxyXG5cdFx0fVwiXHJcblx0PlxyXG5cdFx0PGRpdlxyXG5cdFx0XHRjbGFzcz1cImpmYi1hZGRvbnNfX2l0ZW0taW5uZXJcIlxyXG5cdFx0XHQ6Y2xhc3M9XCJ7ICdwcm9jY2VzaW5nLXN0YXRlJzogcHJvY2Nlc2luZ1N0YXRlIH1cIlxyXG5cdFx0PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiamZiLWFkZG9uc19faXRlbS10aHVtYlwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJwcm8tYmFkZ2VcIiB2LWlmPVwiIWFkZG9uRGF0YS5pc0luc3RhbGxlZFwiPlxyXG5cdFx0XHRcdFx0PHN2ZyB3aWR0aD1cIjQwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDQwIDIwXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcblx0XHRcdFx0XHRcdDxyZWN0IHdpZHRoPVwiNDBcIiBoZWlnaHQ9XCIyMFwiIHJ4PVwiNFwiIGZpbGw9XCIjRUU3QjE2XCIvPlxyXG5cdFx0XHRcdFx0XHQ8cGF0aCBkPVwiTTEwLjYyNSAxMC44MzAxVjE0SDkuMTQyNThWNS40Njg3NUgxMi40MDYyQzEzLjM1OTQgNS40Njg3NSAxNC4xMTUyIDUuNzE2OCAxNC42NzM4IDYuMjEyODlDMTUuMjM2MyA2LjcwODk4IDE1LjUxNzYgNy4zNjUyMyAxNS41MTc2IDguMTgxNjRDMTUuNTE3NiA5LjAxNzU4IDE1LjI0MjIgOS42Njc5NyAxNC42OTE0IDEwLjEzMjhDMTQuMTQ0NSAxMC41OTc3IDEzLjM3NyAxMC44MzAxIDEyLjM4ODcgMTAuODMwMUgxMC42MjVaTTEwLjYyNSA5LjY0MDYySDEyLjQwNjJDMTIuOTMzNiA5LjY0MDYyIDEzLjMzNTkgOS41MTc1OCAxMy42MTMzIDkuMjcxNDhDMTMuODkwNiA5LjAyMTQ4IDE0LjAyOTMgOC42NjIxMSAxNC4wMjkzIDguMTkzMzZDMTQuMDI5MyA3LjczMjQyIDEzLjg4ODcgNy4zNjUyMyAxMy42MDc0IDcuMDkxOEMxMy4zMjYyIDYuODE0NDUgMTIuOTM5NSA2LjY3MTg4IDEyLjQ0NzMgNi42NjQwNkgxMC42MjVWOS42NDA2MlpNMTkuOTUzMSAxMC43MTI5SDE4LjMwMDhWMTRIMTYuODE4NFY1LjQ2ODc1SDE5LjgxODRDMjAuODAyNyA1LjQ2ODc1IDIxLjU2MjUgNS42ODk0NSAyMi4wOTc3IDYuMTMwODZDMjIuNjMyOCA2LjU3MjI3IDIyLjkwMDQgNy4yMTA5NCAyMi45MDA0IDguMDQ2ODhDMjIuOTAwNCA4LjYxNzE5IDIyLjc2MTcgOS4wOTU3IDIyLjQ4NDQgOS40ODI0MkMyMi4yMTA5IDkuODY1MjMgMjEuODI4MSAxMC4xNjAyIDIxLjMzNTkgMTAuMzY3MkwyMy4yNTIgMTMuOTIzOFYxNEgyMS42NjQxTDE5Ljk1MzEgMTAuNzEyOVpNMTguMzAwOCA5LjUyMzQ0SDE5LjgyNDJDMjAuMzI0MiA5LjUyMzQ0IDIwLjcxNDggOS4zOTg0NCAyMC45OTYxIDkuMTQ4NDRDMjEuMjc3MyA4Ljg5NDUzIDIxLjQxOCA4LjU0ODgzIDIxLjQxOCA4LjExMTMzQzIxLjQxOCA3LjY1NDMgMjEuMjg3MSA3LjMwMDc4IDIxLjAyNTQgNy4wNTA3OEMyMC43Njc2IDYuODAwNzggMjAuMzgwOSA2LjY3MTg4IDE5Ljg2NTIgNi42NjQwNkgxOC4zMDA4VjkuNTIzNDRaTTMxLjExNTIgOS45NTcwM0MzMS4xMTUyIDEwLjc5MyAzMC45NzA3IDExLjUyNzMgMzAuNjgxNiAxMi4xNjAyQzMwLjM5MjYgMTIuNzg5MSAyOS45Nzg1IDEzLjI3MzQgMjkuNDM5NSAxMy42MTMzQzI4LjkwNDMgMTMuOTQ5MiAyOC4yODcxIDE0LjExNzIgMjcuNTg3OSAxNC4xMTcyQzI2Ljg5NjUgMTQuMTE3MiAyNi4yNzkzIDEzLjk0OTIgMjUuNzM2MyAxMy42MTMzQzI1LjE5NzMgMTMuMjczNCAyNC43NzkzIDEyLjc5MSAyNC40ODI0IDEyLjE2NkMyNC4xODk1IDExLjU0MSAyNC4wNDEgMTAuODIwMyAyNC4wMzcxIDEwLjAwMzlWOS41MjM0NEMyNC4wMzcxIDguNjkxNDEgMjQuMTgzNiA3Ljk1NzAzIDI0LjQ3NjYgNy4zMjAzMUMyNC43NzM0IDYuNjgzNTkgMjUuMTg5NSA2LjE5NzI3IDI1LjcyNDYgNS44NjEzM0MyNi4yNjM3IDUuNTIxNDggMjYuODgwOSA1LjM1MTU2IDI3LjU3NjIgNS4zNTE1NkMyOC4yNzE1IDUuMzUxNTYgMjguODg2NyA1LjUxOTUzIDI5LjQyMTkgNS44NTU0N0MyOS45NjA5IDYuMTg3NSAzMC4zNzcgNi42Njc5NyAzMC42Njk5IDcuMjk2ODhDMzAuOTYyOSA3LjkyMTg4IDMxLjExMTMgOC42NTAzOSAzMS4xMTUyIDkuNDgyNDJWOS45NTcwM1pNMjkuNjMyOCA5LjUxMTcyQzI5LjYzMjggOC41NjY0MSAyOS40NTMxIDcuODQxOCAyOS4wOTM4IDcuMzM3ODlDMjguNzM4MyA2LjgzMzk4IDI4LjIzMjQgNi41ODIwMyAyNy41NzYyIDYuNTgyMDNDMjYuOTM1NSA2LjU4MjAzIDI2LjQzMzYgNi44MzM5OCAyNi4wNzAzIDcuMzM3ODlDMjUuNzEwOSA3LjgzNzg5IDI1LjUyNzMgOC41NDY4OCAyNS41MTk1IDkuNDY0ODRWOS45NTcwM0MyNS41MTk1IDEwLjg5NDUgMjUuNzAxMiAxMS42MTkxIDI2LjA2NDUgMTIuMTMwOUMyNi40MzE2IDEyLjY0MjYgMjYuOTM5NSAxMi44OTg0IDI3LjU4NzkgMTIuODk4NEMyOC4yNDQxIDEyLjg5ODQgMjguNzQ4IDEyLjY0ODQgMjkuMDk5NiAxMi4xNDg0QzI5LjQ1NTEgMTEuNjQ4NCAyOS42MzI4IDEwLjkxOCAyOS42MzI4IDkuOTU3MDNWOS41MTE3MlpcIiBmaWxsPVwid2hpdGVcIi8+XHJcblx0XHRcdFx0XHQ8L3N2Zz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8aW1nIDpzcmM9XCJhZGRvbkRhdGEudGh1bWJcIiBhbHQ9XCJcIj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJqZmItYWRkb25zX19pdGVtLWluZm9cIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiamZiLWFkZG9uc19faXRlbS1uYW1lXCI+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImxhYmVsXCI+e3sgYWRkb25EYXRhLm5hbWUgfX08L3NwYW4+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInZlcnNpb25cIj57eyBhZGRvbkRhdGEuY3VycmVudFZlcnNpb24gfX08L3NwYW4+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0Y2xhc3M9XCJqZmItYWRkb25zX19pdGVtLXVwZGF0ZVwiXHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PGRpdiB2LWlmPVwiIXVwZGF0ZUFjdGlvbkF2YWxpYWJsZVwiPllvdXIgcGx1Z2luIGlzIHVwIHRvIGRhdGU8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgdi1pZj1cInVwZGF0ZUFjdGlvbkF2YWxpYWJsZVwiPlxyXG5cdFx0XHRcdFx0XHRWZXJzaW9uIDxzcGFuIGNsYXNzPVwibGF0ZXN0LXZlcnNpb25cIj57eyBhZGRvbkRhdGEudmVyc2lvbiB9fTwvc3Bhbj4gYXZhaWxhYmxlXHJcblx0XHRcdFx0XHRcdDxjeC12dWktYnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0YnV0dG9uLXN0eWxlPVwibGluay1hY2NlbnRcIlxyXG5cdFx0XHRcdFx0XHRcdHNpemU9XCJsaW5rXCJcclxuXHRcdFx0XHRcdFx0XHQ6bG9hZGluZz1cInVwZGF0ZVBsdWdpblByb2Nlc3NlZFwiXHJcblx0XHRcdFx0XHRcdFx0QGNsaWNrPVwidXBkYXRlUGx1Z2luXCJcclxuXHRcdFx0XHRcdFx0XHR2LWlmPVwiIWFjdGl2YXRlTGljZW5jZUFjdGlvbkF2YWxpYWJsZVwiXHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBzbG90PVwibGFiZWxcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuPlVwZGF0ZSBOb3c8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8L2N4LXZ1aS1idXR0b24+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRjbGFzcz1cImpmYi1hZGRvbnNfX2l0ZW0tbGljZW5zZVwiXHJcblx0XHRcdFx0XHR2LWlmPVwiYWN0aXZhdGVMaWNlbmNlQWN0aW9uQXZhbGlhYmxlXCJcclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8c3Bhbj5MaWNlbnNlIG5vdCBhY3RpdmF0ZWQ8L3NwYW4+XHJcblx0XHRcdFx0XHQ8Y3gtdnVpLWJ1dHRvblxyXG5cdFx0XHRcdFx0XHRidXR0b24tc3R5bGU9XCJsaW5rLWFjY2VudFwiXHJcblx0XHRcdFx0XHRcdHNpemU9XCJsaW5rXCJcclxuXHRcdFx0XHRcdFx0QGNsaWNrPVwiYWN0aXZhdGVMaWNlbnNlXCJcclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PHNwYW4gc2xvdD1cImxhYmVsXCI+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4+QWN0aXZhdGUgTm93PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHQ8L2N4LXZ1aS1idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0Y2xhc3M9XCJqZmItYWRkb25zX19pdGVtLWRlc2NcIlxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxzcGFuIHYtaHRtbD1cImFkZG9uRGF0YS5kZXNjXCI+PC9zcGFuPlxyXG5cdFx0XHRcdFx0PGEgOmhyZWY9XCJsZWFybk1vcmVVcmxcIiB0YXJnZXQ9XCJfYmxhbmtcIj5MZWFybiBNb3JlPC9hPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJqZmItYWRkb25zX19pdGVtLWFjdGlvbnNcIj5cclxuXHJcblx0XHRcdFx0XHQ8Y3gtdnVpLWJ1dHRvblxyXG5cdFx0XHRcdFx0XHRidXR0b24tc3R5bGU9XCJsaW5rLWFjY2VudFwiXHJcblx0XHRcdFx0XHRcdHNpemU9XCJsaW5rXCJcclxuXHRcdFx0XHRcdFx0OmxvYWRpbmc9XCJhY3Rpb25QbHVnaW5Qcm9jZXNzZWRcIlxyXG5cdFx0XHRcdFx0XHR2LWlmPVwiaW5zdGFsbEFjdGlvbkF2YWxpYWJsZVwiXHJcblx0XHRcdFx0XHRcdEBjbGljaz1cImluc3RhbGxQbHVnaW5cIlxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBzbG90PVwibGFiZWxcIj5cclxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj5JbnN0YWxsIEFkZG9uPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHQ8L2N4LXZ1aS1idXR0b24+XHJcblx0XHRcdFx0XHQ8Y3gtdnVpLWJ1dHRvblxyXG5cdFx0XHRcdFx0XHRidXR0b24tc3R5bGU9XCJsaW5rLWFjY2VudFwiXHJcblx0XHRcdFx0XHRcdHNpemU9XCJsaW5rXCJcclxuXHRcdFx0XHRcdFx0OmxvYWRpbmc9XCJhY3Rpb25QbHVnaW5Qcm9jZXNzZWRcIlxyXG5cdFx0XHRcdFx0XHR2LWlmPVwiYWN0aXZhdGVBY3Rpb25BdmFsaWFibGVcIlxyXG5cdFx0XHRcdFx0XHRAY2xpY2s9XCJhY3RpdmF0ZVBsdWdpblwiXHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxzcGFuIHNsb3Q9XCJsYWJlbFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuPkFjdGl2YXRlIEFkZG9uPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHQ8L2N4LXZ1aS1idXR0b24+XHJcblx0XHRcdFx0XHQ8Y3gtdnVpLWJ1dHRvblxyXG5cdFx0XHRcdFx0XHRidXR0b24tc3R5bGU9XCJsaW5rLWVycm9yXCJcclxuXHRcdFx0XHRcdFx0c2l6ZT1cImxpbmtcIlxyXG5cdFx0XHRcdFx0XHQ6bG9hZGluZz1cImFjdGlvblBsdWdpblByb2Nlc3NlZFwiXHJcblx0XHRcdFx0XHRcdHYtaWY9XCJkZWFjdGl2YXRlQWN0aW9uQXZhbGlhYmxlXCJcclxuXHRcdFx0XHRcdFx0QGNsaWNrPVwiZGVhY3RpdmF0ZVBsdWdpblwiXHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxzcGFuIHNsb3Q9XCJsYWJlbFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuPkRlYWN0aXZhdGUgQWRkb248L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvY3gtdnVpLWJ1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHJcblx0PC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdG5hbWU6ICdhZGRvbi1pdGVtJyxcclxuXHRwcm9wczoge1xyXG5cdFx0YWRkb25EYXRhOiBPYmplY3RcclxuXHR9LFxyXG5cdGRhdGEoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRhY3Rpb25QbHVnaW46IGZhbHNlLFxyXG5cdFx0XHRhY3Rpb25QbHVnaW5SZXF1ZXN0OiBudWxsLFxyXG5cdFx0XHRhY3Rpb25QbHVnaW5Qcm9jZXNzZWQ6IGZhbHNlLFxyXG5cdFx0XHR1cGRhdGVQbHVnaW5Qcm9jZXNzZWQ6IGZhbHNlLFxyXG5cdFx0fTtcclxuXHR9LFxyXG5cdGNvbXB1dGVkOiB7XHJcblx0XHRjbGFzc0xpc3Q6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gW1xyXG5cdFx0XHRcdCdqZmItYWRkb25zX19pdGVtJyxcclxuXHRcdFx0XHR0aGlzLnVwZGF0ZUF2YWxpYWJsZSA/ICd1cGRhdGUtYXZhbGlhYmxlJyA6IGZhbHNlLFxyXG5cdFx0XHRcdHRoaXMuYWN0aXZhdGVBdmFsaWFibGUgPyAnYWN0aXZhdGUtYXZhbGlhYmxlJyA6IGZhbHNlLFxyXG5cdFx0XHRdO1xyXG5cdFx0fSxcclxuXHJcblx0XHRsZWFybk1vcmVBdmFsaWFibGUoKSB7XHJcblx0XHRcdHJldHVybiAoICEgdGhpcy4kcGFyZW50LmlzTGljZW5zZUFjdGl2YXRlZCApID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdFx0fSxcclxuXHJcblx0XHRhY3RpdmF0ZUxpY2VuY2VBY3Rpb25BdmFsaWFibGUoKSB7XHJcblx0XHRcdHJldHVybiAoICEgdGhpcy4kcGFyZW50LmlzTGljZW5zZUFjdGl2YXRlZCApID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdFx0fSxcclxuXHJcblx0XHRpbnN0YWxsQWN0aW9uQXZhbGlhYmxlKCkge1xyXG5cdFx0XHRyZXR1cm4gKCAhIHRoaXMuYWRkb25EYXRhWydpc0luc3RhbGxlZCddICYmIHRoaXMuJHBhcmVudC5pc0xpY2Vuc2VBY3RpdmF0ZWQgKSA/IHRydWUgOiBmYWxzZTtcclxuXHRcdH0sXHJcblxyXG5cdFx0YWN0aXZhdGVBY3Rpb25BdmFsaWFibGUoKSB7XHJcblx0XHRcdHJldHVybiAoIHRoaXMuYWRkb25EYXRhWydpc0luc3RhbGxlZCddICYmICEgdGhpcy5hZGRvbkRhdGFbJ2lzQWN0aXZhdGVkJ10gKSA/IHRydWUgOiBmYWxzZTtcclxuXHRcdH0sXHJcblxyXG5cdFx0ZGVhY3RpdmF0ZUFjdGlvbkF2YWxpYWJsZSgpIHtcclxuXHRcdFx0cmV0dXJuICggdGhpcy5hZGRvbkRhdGFbJ2lzSW5zdGFsbGVkJ10gJiYgdGhpcy5hZGRvbkRhdGFbJ2lzQWN0aXZhdGVkJ10gKSA/IHRydWUgOiBmYWxzZTtcclxuXHRcdH0sXHJcblxyXG5cdFx0dXBkYXRlQWN0aW9uQXZhbGlhYmxlKCkge1xyXG5cdFx0XHRyZXR1cm4gKCB0aGlzLmFkZG9uRGF0YVsndXBkYXRlQXZhbGlhYmxlJ10gKSA/IHRydWUgOiBmYWxzZTtcclxuXHRcdH0sXHJcblxyXG5cdFx0cHJvY2Nlc2luZ1N0YXRlKCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5hY3Rpb25QbHVnaW5Qcm9jZXNzZWQgfHwgdGhpcy51cGRhdGVQbHVnaW5Qcm9jZXNzZWQ7XHJcblx0XHR9LFxyXG5cclxuXHRcdGxlYXJuTW9yZVVybCgpIHtcclxuXHRcdFx0bGV0IGRlbW9VcmwgPSB0aGlzLmFkZG9uRGF0YS5kZW1vLFxyXG5cdFx0XHRcdHV0bVBhcmFtcyA9IHRoaXMuJHBhcmVudC5nZXRVdG1QYXJhbXNTdHJpbmcoIHtcclxuXHRcdFx0XHRcdHV0bV9zb3VyY2U6IGBkYXNoYm9hcmQvamV0LWZvcm0tYnVpbGRlci1hZGRvbnMtcGFnZWAsXHJcblx0XHRcdFx0XHR1dG1fbWVkaXVtOiBgY3JvY29ibG9jay1saWNlbnNlLyR7IHRoaXMuJHBhcmVudC50aGVtZUluZm8udGhlbWUgfWAsXHJcblx0XHRcdFx0XHR1dG1fY2FtcGFpZ246ICdhZGRvbi1sZWFybi1tb3JlJyxcclxuXHRcdFx0XHR9ICk7XHJcblxyXG5cdFx0XHRyZXR1cm4gYCR7IGRlbW9VcmwgfT8keyB1dG1QYXJhbXMgfWA7XHJcblx0XHR9XHJcblxyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cclxuXHRcdGFjdGl2YXRlTGljZW5zZSgpIHtcclxuXHRcdFx0d2luZG93LmpmYkV2ZW50QnVzLiRlbWl0KCAnc2hvd0xpY2Vuc2VQb3B1cCcgKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0aW5zdGFsbFBsdWdpbigpIHtcclxuXHRcdFx0dGhpcy5hY3Rpb25QbHVnaW4gPSAnaW5zdGFsbCc7XHJcblx0XHRcdHRoaXMucGx1Z2luQWN0aW9uKCk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGRlYWN0aXZhdGVQbHVnaW4oKSB7XHJcblx0XHRcdHRoaXMuYWN0aW9uUGx1Z2luID0gJ2RlYWN0aXZhdGUnO1xyXG5cdFx0XHR0aGlzLnBsdWdpbkFjdGlvbigpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRhY3RpdmF0ZVBsdWdpbigpIHtcclxuXHRcdFx0dGhpcy5hY3Rpb25QbHVnaW4gPSAnYWN0aXZhdGUnO1xyXG5cdFx0XHR0aGlzLnBsdWdpbkFjdGlvbigpO1xyXG5cdFx0fSxcclxuXHJcblx0XHR1cGRhdGVQbHVnaW4oKSB7XHJcblxyXG5cdFx0XHRpZiAoIHRoaXMudXBkYXRlQWN0aW9uQXZhbGlhYmxlICkge1xyXG5cdFx0XHRcdHRoaXMuYWN0aW9uUGx1Z2luID0gJ3VwZGF0ZSc7XHJcblx0XHRcdFx0dGhpcy5wbHVnaW5BY3Rpb24oKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHRwbHVnaW5BY3Rpb246IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG5cdFx0XHRzZWxmLmFjdGlvblBsdWdpblJlcXVlc3QgPSBqUXVlcnkuYWpheCgge1xyXG5cdFx0XHRcdHR5cGU6ICdQT1NUJyxcclxuXHRcdFx0XHR1cmw6IHdpbmRvdy5KZXRGQlBhZ2VDb25maWcuYWpheFVybCxcclxuXHRcdFx0XHRkYXRhVHlwZTogJ2pzb24nLFxyXG5cdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdGFjdGlvbjogJ2pmYl9hZGRvbl9hY3Rpb24nLFxyXG5cdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRhY3Rpb246IHNlbGYuYWN0aW9uUGx1Z2luLFxyXG5cdFx0XHRcdFx0XHRwbHVnaW46IHNlbGYuYWRkb25EYXRhWydzbHVnJ11cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGJlZm9yZVNlbmQ6IGZ1bmN0aW9uKCBqcVhIUiwgYWpheFNldHRpbmdzICkge1xyXG5cclxuXHRcdFx0XHRcdGlmICggbnVsbCAhPT0gc2VsZi5hY3Rpb25QbHVnaW5SZXF1ZXN0ICkge1xyXG5cdFx0XHRcdFx0XHRzZWxmLmFjdGlvblBsdWdpblJlcXVlc3QuYWJvcnQoKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRzd2l0Y2ggKCBzZWxmLmFjdGlvblBsdWdpbiApIHtcclxuXHRcdFx0XHRcdFx0Y2FzZSAnaW5zdGFsbCc6XHJcblx0XHRcdFx0XHRcdGNhc2UgJ2FjdGl2YXRlJzpcclxuXHRcdFx0XHRcdFx0Y2FzZSAnZGVhY3RpdmF0ZSc6XHJcblx0XHRcdFx0XHRcdFx0c2VsZi5hY3Rpb25QbHVnaW5Qcm9jZXNzZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRjYXNlICd1cGRhdGUnOlxyXG5cdFx0XHRcdFx0XHRcdHNlbGYudXBkYXRlUGx1Z2luUHJvY2Vzc2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKCByZXNwb25jZSwgdGV4dFN0YXR1cywganFYSFIgKSB7XHJcblxyXG5cdFx0XHRcdFx0c3dpdGNoICggc2VsZi5hY3Rpb25QbHVnaW4gKSB7XHJcblx0XHRcdFx0XHRcdGNhc2UgJ2luc3RhbGwnOlxyXG5cdFx0XHRcdFx0XHRjYXNlICdhY3RpdmF0ZSc6XHJcblx0XHRcdFx0XHRcdGNhc2UgJ2RlYWN0aXZhdGUnOlxyXG5cdFx0XHRcdFx0XHRcdHNlbGYuYWN0aW9uUGx1Z2luUHJvY2Vzc2VkID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGNhc2UgJ3VwZGF0ZSc6XHJcblx0XHRcdFx0XHRcdFx0c2VsZi51cGRhdGVQbHVnaW5Qcm9jZXNzZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRpZiAoIHJlc3BvbmNlLnN1Y2Nlc3MgKSB7XHJcblx0XHRcdFx0XHRcdHNlbGYuJENYTm90aWNlLmFkZCgge1xyXG5cdFx0XHRcdFx0XHRcdG1lc3NhZ2U6IHJlc3BvbmNlLm1lc3NhZ2UsXHJcblx0XHRcdFx0XHRcdFx0dHlwZTogJ3N1Y2Nlc3MnLFxyXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiA0MDAwLFxyXG5cdFx0XHRcdFx0XHR9ICk7XHJcblxyXG5cdFx0XHRcdFx0XHR3aW5kb3cuamZiRXZlbnRCdXMuJGVtaXQoICd1cGRhdGVBZGRvbkRhdGEnLCB7XHJcblx0XHRcdFx0XHRcdFx0c2x1Zzogc2VsZi5hZGRvbkRhdGFbJ3NsdWcnXSxcclxuXHRcdFx0XHRcdFx0XHRhZGRvbkRhdGE6IHJlc3BvbmNlLmRhdGEsXHJcblx0XHRcdFx0XHRcdFx0YWN0aW9uOiBzZWxmLmFjdGlvblBsdWdpbixcclxuXHRcdFx0XHRcdFx0fSApO1xyXG5cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHNlbGYuJENYTm90aWNlLmFkZCgge1xyXG5cdFx0XHRcdFx0XHRcdG1lc3NhZ2U6IHJlc3BvbmNlLm1lc3NhZ2UsXHJcblx0XHRcdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcclxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogNDAwMCxcclxuXHRcdFx0XHRcdFx0fSApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSApO1xyXG5cdFx0fVxyXG5cdH0sXHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuXHJcbi5qZmItYWRkb25zIHtcclxuXHRtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG5cclxuXHQmOmxhc3QtY2hpbGQge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMDtcclxuXHR9XHJcblxyXG5cdGEge1xyXG5cdFx0Y29sb3I6ICMwMDdjYmE7XHJcblx0fVxyXG5cclxuXHQmX19oZWFkZXIge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHR9XHJcblxyXG5cdCZfX2xpc3Qge1xyXG5cdFx0ZGlzcGxheTogZ3JpZDtcclxuXHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XHJcblx0XHRnYXA6IDQwcHg7XHJcblxyXG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6IDExNDBweCkge1xyXG5cdFx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Jl9faXRlbSB7XHJcblx0XHR0cmFuc2l0aW9uOiBib3gtc2hhZG93IC4zcyBlYXNlLW91dDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG5cdFx0Jjpob3ZlciB7XHJcblx0XHRcdGJveC1zaGFkb3c6IDBweCA0cHggMjhweCByZ2JhKDE1LCAyMywgNDIsIDAuMSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ji5hY3RpdmF0ZWQge1xyXG5cdFx0XHQuamZiLWFkZG9uc19faXRlbS1pbmZvIHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdCYudXBkYXRlLWF2YWxpYWJsZSB7XHJcblx0XHRcdC5qZmItYWRkb25zX19pdGVtLW5hbWUge1xyXG5cdFx0XHRcdC52ZXJzaW9uIHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNENjMzNkM7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdC5qZmItYWRkb25zX19pdGVtLXVwZGF0ZSB7XHJcblx0XHRcdFx0LmxhdGVzdC12ZXJzaW9uIHtcclxuXHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICM0NkI0NTA7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAycHggOHB4O1xyXG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Jl9faXRlbS1pbm5lciB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdH1cclxuXHJcblx0Jl9faXRlbS10aHVtYiB7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDA7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuXHRcdC5wcm8tYmFkZ2Uge1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdHRvcDogMTJweDtcclxuXHRcdFx0bGVmdDogMTJweDtcclxuXHRcdH1cclxuXHJcblx0XHRpbWcge1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0aGVpZ2h0OiBhdXRvO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Jl9faXRlbS1pbmZvIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0YWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcblx0XHRmbGV4OiAxIDEgYXV0bztcclxuXHRcdHBhZGRpbmc6IDIwcHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xyXG5cdFx0Ym9yZGVyLXdpZHRoOiAwIDFweCAxcHggMXB4O1xyXG5cdFx0Ym9yZGVyLWNvbG9yOiAjRENEQ0REO1xyXG5cdFx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cdH1cclxuXHJcblx0Jl9faXRlbS1uYW1lIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblxyXG5cdFx0LmxhYmVsIHtcclxuXHRcdFx0Zm9udC1zaXplOiAyMHB4O1xyXG5cdFx0XHRmb250LXdlaWdodDogNzAwO1xyXG5cdFx0XHRsaW5lLWhlaWdodDogMS4yNTtcclxuXHRcdH1cclxuXHJcblx0XHQudmVyc2lvbiB7XHJcblx0XHRcdHBhZGRpbmc6IDFweCA4cHg7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRcdFx0Y29sb3I6IHdoaXRlO1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjNDZCNDUwO1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMTBweDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdCZfX2l0ZW0tdXBkYXRlIHtcclxuXHRcdGNvbG9yOiAjN2I3ZTgxO1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHR9XHJcblxyXG5cdCZfX2l0ZW0tbGljZW5zZSB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cdFx0Y29sb3I6ICM3YjdlODE7XHJcblxyXG5cdFx0LmN4LXZ1aS1idXR0b24ge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogM3B4O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Jl9faXRlbS1kZXNjIHtcclxuXHRcdGZsZXg6IDEgMSBhdXRvO1xyXG5cclxuXHRcdGEge1xyXG5cdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQmX19pdGVtLWFjdGlvbnMge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0XHRtYXJnaW4tdG9wOiAyMHB4O1xyXG5cclxuXHRcdCY6ZW1wdHkge1xyXG5cdFx0XHRkaXNwbGF5OiBub25lO1xyXG5cdFx0fVxyXG5cclxuXHRcdC5jeC12dWktYnV0dG9uIHtcclxuXHRcdFx0bWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcblx0PGRpdiBjbGFzcz1cImpldC1mYi1zZXR0aW5ncy1wYWdlIHdyYXBcIj5cclxuXHRcdDxoMSBjbGFzcz1cImNzLXZ1aS10aXRsZVwiPnt7ICdKZXRGb3JtQnVpbGRlciBTZXR0aW5ncycgfX08L2gxPlxyXG5cdFx0PGRpdiBjbGFzcz1cImN4LXZ1aS1wYW5lbFwiPlxyXG5cdFx0XHQ8Y3gtdnVpLXRhYnNcclxuXHRcdFx0XHQ6aW4tcGFuZWw9XCJmYWxzZVwiXHJcblx0XHRcdFx0OnZhbHVlPVwiYWN0aXZlVGFiU2x1Z1wiXHJcblx0XHRcdFx0bGF5b3V0PVwidmVydGljYWxcIlxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PGN4LXZ1aS10YWJzLXBhbmVsXHJcblx0XHRcdFx0XHR2LWZvcj1cIiggeyBkaXNwbGF5QnV0dG9uID0gdHJ1ZSwgLi4udGFiIH0sIGluZGV4ICkgaW4gdGFic1wiXHJcblx0XHRcdFx0XHQ6bmFtZT1cInRhYi5jb21wb25lbnQubmFtZVwiXHJcblx0XHRcdFx0XHQ6bGFiZWw9XCJ0YWIudGl0bGVcIlxyXG5cdFx0XHRcdFx0OmtleT1cInRhYi5jb21wb25lbnQubmFtZVwiXHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PGtlZXAtYWxpdmU+XHJcblx0XHRcdFx0XHRcdDxjb21wb25lbnRcclxuXHRcdFx0XHRcdFx0XHR2LWJpbmQ6aXM9XCJ0YWIuY29tcG9uZW50XCJcclxuXHRcdFx0XHRcdFx0XHQ6aW5jb21pbmc9XCJnZXRJbmNvbWluZyggdGFiLmNvbXBvbmVudC5uYW1lIClcIlxyXG5cdFx0XHRcdFx0XHRcdHJlZj1cInRhYkNvbXBvbmVudHNcIlxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9rZWVwLWFsaXZlPlxyXG5cdFx0XHRcdFx0PGN4LXZ1aS1idXR0b25cclxuXHRcdFx0XHRcdFx0di1pZj1cImRpc3BsYXlCdXR0b25cIlxyXG5cdFx0XHRcdFx0XHRidXR0b24tc3R5bGU9XCJhY2NlbnRcIlxyXG5cdFx0XHRcdFx0XHQ6bG9hZGluZz1cImxvYWRpbmdUYWJbIHRhYi5jb21wb25lbnQubmFtZSBdXCJcclxuXHRcdFx0XHRcdFx0QGNsaWNrPVwib25TYXZlVGFiKCBpbmRleCwgdGFiLmNvbXBvbmVudC5uYW1lIClcIlxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8dGVtcGxhdGUgI2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuPlNhdmU8L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvdGVtcGxhdGU+XHJcblx0XHRcdFx0XHQ8L2N4LXZ1aS1idXR0b24+XHJcblx0XHRcdFx0PC9jeC12dWktdGFicy1wYW5lbD5cclxuXHRcdFx0PC9jeC12dWktdGFicz5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0ICogYXMgY2FwdGNoYSBmcm9tICcuL3RhYnMvY2FwdGNoYSdcclxuaW1wb3J0ICogYXMgbWFpbGNoaW1wIGZyb20gJy4vdGFicy9tYWlsY2hpbXAnXHJcbmltcG9ydCAqIGFzIGdldFJlc3BvbnNlIGZyb20gJy4vdGFicy9nZXRyZXNwb25zZSdcclxuaW1wb3J0ICogYXMgYWN0aXZlY2FtcGFpZ24gZnJvbSAnLi90YWJzL2FjdGl2ZWNhbXBhaWduJ1xyXG5pbXBvcnQgKiBhcyBwYXltZW50R2F0ZXdheXMgZnJvbSAnLi90YWJzL3BheW1lbnRzLWdhdGV3YXlzJ1xyXG5pbXBvcnQgU2F2ZVRhYkJ5QWpheCBmcm9tICdAYWRtaW4vbWl4aW5zL1NhdmVUYWJCeUFqYXgnO1xyXG5pbXBvcnQgR2V0SW5jb21pbmcgZnJvbSAnQGFkbWluL21peGlucy9HZXRJbmNvbWluZyc7XHJcblxyXG5jb25zdCB7IGFwcGx5RmlsdGVycywgZG9BY3Rpb24gfSA9IHdwLmhvb2tzO1xyXG5cclxud2luZG93LmpmYkV2ZW50QnVzID0gbmV3IFZ1ZSgpO1xyXG5cclxuY29uc3Qgc2V0dGluZ1RhYnMgPSBhcHBseUZpbHRlcnMoICdqZXQuZmIucmVnaXN0ZXIuc2V0dGluZ3MtcGFnZS50YWJzJywgW1xyXG5cdHBheW1lbnRHYXRld2F5cyxcclxuXHRjYXB0Y2hhLFxyXG5cdG1haWxjaGltcCxcclxuXHRnZXRSZXNwb25zZSxcclxuXHRhY3RpdmVjYW1wYWlnbixcclxuXSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdG5hbWU6ICdqZmItc2V0dGluZ3MnLFxyXG5cdGRhdGEoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRhY3RpdmVUYWJTbHVnOiBzZXR0aW5nVGFic1sgMCBdLmNvbXBvbmVudC5uYW1lLFxyXG5cdFx0XHR0YWJzOiBzZXR0aW5nVGFicyxcclxuXHRcdFx0bG9hZGluZ1RhYjoge30sXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0bWl4aW5zOiBbIFNhdmVUYWJCeUFqYXgsIEdldEluY29taW5nIF0sXHJcblx0Y3JlYXRlZCgpIHtcclxuXHRcdGpmYkV2ZW50QnVzLiRvbiggJ3JlcXVlc3Qtc3RhdGUnLCBwcm9wcyA9PiB7XHJcblx0XHRcdGNvbnN0IHsgc3RhdGUsIHNsdWcgfSA9IHByb3BzO1xyXG5cdFx0XHR0aGlzLiRzZXQoIHRoaXMubG9hZGluZ1RhYiwgc2x1Zywgc3RhdGUgPT09ICdiZWdpbicgKTtcclxuXHRcdH0gKTtcclxuXHR9LFxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdG9uU2F2ZVRhYiggaW5kZXhUYWIsIHRhYlNsdWcgKSB7XHJcblx0XHRcdGNvbnN0IGN1cnJlbnRUYWIgPSB0aGlzLiRyZWZzLnRhYkNvbXBvbmVudHNbIGluZGV4VGFiIF07XHJcblxyXG5cdFx0XHR0aGlzLnNhdmVCeUFqYXgoIGN1cnJlbnRUYWIsIHRhYlNsdWcgKTtcclxuXHRcdH0sXHJcblx0fSxcclxufVxyXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XHJcblx0PHNlY3Rpb24+XHJcblx0XHQ8Y3gtdnVpLWlucHV0XHJcblx0XHRcdDpsYWJlbD1cImxhYmVsLmNsaWVudF9pZFwiXHJcblx0XHRcdDp3cmFwcGVyLWNzcz1cIlsgJ2VxdWFsd2lkdGgnIF1cIlxyXG5cdFx0XHQ6c2l6ZT1cIidmdWxsd2lkdGgnXCJcclxuXHRcdFx0di1tb2RlbD1cInN0b3JhZ2UuY2xpZW50X2lkXCJcclxuXHRcdD48L2N4LXZ1aS1pbnB1dD5cclxuXHRcdDxjeC12dWktaW5wdXRcclxuXHRcdFx0OmxhYmVsPVwibGFiZWwuc2VjcmV0XCJcclxuXHRcdFx0OndyYXBwZXItY3NzPVwiWyAnZXF1YWx3aWR0aCcgXVwiXHJcblx0XHRcdDpzaXplPVwiJ2Z1bGx3aWR0aCdcIlxyXG5cdFx0XHR2LW1vZGVsPVwic3RvcmFnZS5zZWNyZXRcIlxyXG5cdFx0PjwvY3gtdnVpLWlucHV0PlxyXG5cdDwvc2VjdGlvbj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblxyXG5pbXBvcnQge1xyXG5cdGhlbHAsXHJcblx0bGFiZWwsXHJcbn0gZnJvbSBcIi4vc291cmNlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0bmFtZTogJ3BheXBhbCcsXHJcblx0cHJvcHM6IHtcclxuXHRcdGluY29taW5nOiB7XHJcblx0XHRcdHR5cGU6IE9iamVjdCxcclxuXHRcdFx0ZGVmYXVsdCgpIHtcclxuXHRcdFx0XHRyZXR1cm4ge307XHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGxhYmVsLCBoZWxwLFxyXG5cdFx0XHRzdG9yYWdlOiB7fSxcclxuXHRcdH07XHJcblx0fSxcclxuXHRjcmVhdGVkKCkge1xyXG5cdFx0dGhpcy5zdG9yYWdlID0gSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIHRoaXMuaW5jb21pbmcgKSApO1xyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0Z2V0UmVxdWVzdE9uU2F2ZSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRkYXRhOiB7IC4uLnRoaXMuc3RvcmFnZSB9LFxyXG5cdFx0XHR9O1xyXG5cdFx0fSxcclxuXHR9LFxyXG59XHJcblxyXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XHJcblx0PGRpdj5cclxuXHRcdDxjeC12dWktaW5wdXRcclxuXHRcdFx0OmxhYmVsPVwibGFiZWwuYXBpX2tleVwiXHJcblx0XHRcdDp3cmFwcGVyLWNzcz1cIlsgJ2VxdWFsd2lkdGgnIF1cIlxyXG5cdFx0XHQ6c2l6ZT1cIidmdWxsd2lkdGgnXCJcclxuXHRcdFx0di1tb2RlbD1cImFwaV9rZXlcIlxyXG5cdFx0Lz5cclxuXHRcdDxjeC12dWktaW5wdXRcclxuXHRcdFx0OmxhYmVsPVwibGFiZWwuYXBpX3VybFwiXHJcblx0XHRcdDp3cmFwcGVyLWNzcz1cIlsgJ2VxdWFsd2lkdGgnIF1cIlxyXG5cdFx0XHQ6c2l6ZT1cIidmdWxsd2lkdGgnXCJcclxuXHRcdFx0di1tb2RlbD1cImFwaV91cmxcIlxyXG5cdFx0Lz5cclxuXHRcdDxwIGNsYXNzPVwiZmItZGVzY3JpcHRpb25cIj57eyBoZWxwLmFwaVByZWYgfX0gPGEgOmhyZWY9XCJoZWxwLmFwaUxpbmtcIiB0YXJnZXQ9XCJfYmxhbmtcIj57eyBoZWxwLmFwaUxpbmtMYWJlbCB9fTwvYT5cclxuXHRcdDwvcD5cclxuXHQ8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblxyXG5pbXBvcnQge1xyXG5cdGhlbHAsXHJcblx0bGFiZWxcclxufSBmcm9tIFwiLi9zb3VyY2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRuYW1lOiAnYWN0aXZlLWNhbXBhaWduLXRhYicsXHJcblx0cHJvcHM6IHtcclxuXHRcdGluY29taW5nOiB7XHJcblx0XHRcdHR5cGU6IE9iamVjdCxcclxuXHRcdFx0ZGVmYXVsdDoge30sXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGxhYmVsLCBoZWxwLFxyXG5cdFx0XHRhcGlfa2V5OiAnJyxcclxuXHRcdFx0YXBpX3VybDogJydcclxuXHRcdH07XHJcblx0fSxcclxuXHRjcmVhdGVkKCkge1xyXG5cdFx0dGhpcy5hcGlfa2V5ID0gdGhpcy5pbmNvbWluZy5hcGlfa2V5IHx8ICcnXHJcblx0XHR0aGlzLmFwaV91cmwgPSB0aGlzLmluY29taW5nLmFwaV91cmwgfHwgJydcclxuXHR9LFxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdGdldFJlcXVlc3RPblNhdmUoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0YXBpX2tleTogdGhpcy5hcGlfa2V5LFxyXG5cdFx0XHRcdFx0YXBpX3VybDogdGhpcy5hcGlfdXJsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxyXG5cdDxkaXY+XHJcblx0XHQ8Y3gtdnVpLWlucHV0XHJcblx0XHRcdDpsYWJlbD1cImxhYmVsLmtleVwiXHJcblx0XHRcdDp3cmFwcGVyLWNzcz1cIlsgJ2VxdWFsd2lkdGgnIF1cIlxyXG5cdFx0XHQ6c2l6ZT1cIidmdWxsd2lkdGgnXCJcclxuXHRcdFx0di1tb2RlbD1cImtleVwiXHJcblx0XHQ+PC9jeC12dWktaW5wdXQ+XHJcblx0XHQ8Y3gtdnVpLWlucHV0XHJcblx0XHRcdDpsYWJlbD1cImxhYmVsLnNlY3JldFwiXHJcblx0XHRcdDp3cmFwcGVyLWNzcz1cIlsgJ2VxdWFsd2lkdGgnIF1cIlxyXG5cdFx0XHQ6c2l6ZT1cIidmdWxsd2lkdGgnXCJcclxuXHRcdFx0di1tb2RlbD1cInNlY3JldFwiXHJcblx0XHQ+PC9jeC12dWktaW5wdXQ+XHJcblx0XHQ8cCBjbGFzcz1cImZiLWRlc2NyaXB0aW9uXCI+e3sgaGVscC5hcGlQcmVmIH19IDxhIDpocmVmPVwiaGVscC5hcGlMaW5rXCIgdGFyZ2V0PVwiX2JsYW5rXCI+e3sgaGVscC5hcGlMaW5rTGFiZWwgfX08L2E+XHJcblx0XHQ8L3A+XHJcblx0PC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQge1xyXG5cdGxhYmVsLFxyXG5cdGhlbHAsXHJcbn0gZnJvbSBcIi4vc291cmNlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0bmFtZTogJ2NhcHRjaGEtdGFiJyxcclxuXHRwcm9wczoge1xyXG5cdFx0aW5jb21pbmc6IHtcclxuXHRcdFx0dHlwZTogT2JqZWN0LFxyXG5cdFx0XHRkZWZhdWx0OiB7fSxcclxuXHRcdH0sXHJcblx0fSxcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bGFiZWwsIGhlbHAsXHJcblx0XHRcdGtleTogJycsXHJcblx0XHRcdHNlY3JldDogJycsXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0Y3JlYXRlZCgpIHtcclxuXHRcdHRoaXMua2V5ID0gdGhpcy5pbmNvbWluZy5rZXkgfHwgJyc7XHJcblx0XHR0aGlzLnNlY3JldCA9IHRoaXMuaW5jb21pbmcuc2VjcmV0IHx8ICcnO1xyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0Z2V0UmVxdWVzdE9uU2F2ZSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRzZWNyZXQ6IHRoaXMuc2VjcmV0LFxyXG5cdFx0XHRcdFx0a2V5OiB0aGlzLmtleSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9O1xyXG5cdFx0fSxcclxuXHR9LFxyXG59XHJcbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cclxuXHQ8Y3gtdnVpLWlucHV0XHJcblx0XHQ6bGFiZWw9XCJsYWJlbC5hcGlfa2V5XCJcclxuXHRcdDp3cmFwcGVyLWNzcz1cIlsgJ2VxdWFsd2lkdGgnIF1cIlxyXG5cdFx0OmRlc2NyaXB0aW9uPSdgJHsgaGVscC5hcGlQcmVmIH0gPGEgaHJlZj1cIiR7IGhlbHAuYXBpTGluayB9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+JHsgaGVscC5hcGlMaW5rTGFiZWwgfTwvYT5gJ1xyXG5cdFx0OnNpemU9XCInZnVsbHdpZHRoJ1wiXHJcblx0XHR2LW1vZGVsPVwiYXBpX2tleVwiXHJcblx0Lz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblxyXG5pbXBvcnQge1xyXG5cdGhlbHAsXHJcblx0bGFiZWxcclxufSBmcm9tIFwiLi9zb3VyY2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRuYW1lOiAnZ2V0LXJlc3BvbnNlLXRhYicsXHJcblx0cHJvcHM6IHtcclxuXHRcdGluY29taW5nOiB7XHJcblx0XHRcdHR5cGU6IE9iamVjdCxcclxuXHRcdFx0ZGVmYXVsdDoge30sXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGxhYmVsLCBoZWxwLFxyXG5cdFx0XHRhcGlfa2V5OiAnJyxcclxuXHRcdH07XHJcblx0fSxcclxuXHRjcmVhdGVkKCkge1xyXG5cdFx0dGhpcy5hcGlfa2V5ID0gdGhpcy5pbmNvbWluZy5hcGlfa2V5IHx8ICcnXHJcblx0fSxcclxuXHRtZXRob2RzOiB7XHJcblx0XHRnZXRSZXF1ZXN0T25TYXZlKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdGFwaV9rZXk6IHRoaXMuYXBpX2tleSxcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XHJcblx0PGN4LXZ1aS1pbnB1dFxyXG5cdFx0OmxhYmVsPVwibGFiZWwuYXBpX2tleVwiXHJcblx0XHQ6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJyBdXCJcclxuXHRcdDpkZXNjcmlwdGlvbj0nYCR7IGhlbHAuYXBpUHJlZiB9IDxhIGhyZWY9XCIkeyBoZWxwLmFwaUxpbmsgfVwiIHRhcmdldD1cIl9ibGFua1wiPiR7IGhlbHAuYXBpTGlua0xhYmVsIH08L2E+YCdcclxuXHRcdDpzaXplPVwiJ2Z1bGx3aWR0aCdcIlxyXG5cdFx0di1tb2RlbD1cImFwaV9rZXlcIlxyXG5cdC8+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cclxuaW1wb3J0IHtcclxuXHRoZWxwLFxyXG5cdGxhYmVsXHJcbn0gZnJvbSBcIi4vc291cmNlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0bmFtZTogJ21haWxjaGltcC10YWInLFxyXG5cdHByb3BzOiB7XHJcblx0XHRpbmNvbWluZzoge1xyXG5cdFx0XHR0eXBlOiBPYmplY3QsXHJcblx0XHRcdGRlZmF1bHQ6IHt9LFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdGRhdGEoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRsYWJlbCwgaGVscCxcclxuXHRcdFx0YXBpX2tleTogJycsXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0Y3JlYXRlZCgpIHtcclxuXHRcdHRoaXMuYXBpX2tleSA9IHRoaXMuaW5jb21pbmcuYXBpX2tleSB8fCAnJ1xyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0Z2V0UmVxdWVzdE9uU2F2ZSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRhcGlfa2V5OiB0aGlzLmFwaV9rZXksXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxyXG5cdDxzZWN0aW9uPlxyXG5cdFx0PGN4LXZ1aS1zd2l0Y2hlclxyXG5cdFx0XHRuYW1lPVwidXNlX2dhdGV3YXlzXCJcclxuXHRcdFx0OndyYXBwZXItY3NzPVwiWyAnZXF1YWx3aWR0aCcgXVwiXHJcblx0XHRcdDpsYWJlbD1cImxhYmVsLnVzZV9nYXRld2F5c1wiXHJcblx0XHRcdDpkZXNjcmlwdGlvbj1cImhlbHAudXNlX2dhdGV3YXlzXCJcclxuXHRcdFx0OnZhbHVlPVwic3RvcmFnZS51c2VfZ2F0ZXdheXNcIlxyXG5cdFx0XHRAaW5wdXQ9XCJjaGFuZ2VWYWwoICd1c2VfZ2F0ZXdheXMnLCAkZXZlbnQgKVwiXHJcblx0XHQ+PC9jeC12dWktc3dpdGNoZXI+XHJcblx0XHQ8Y3gtdnVpLXN3aXRjaGVyXHJcblx0XHRcdHYtaWY9XCJzdG9yYWdlLnVzZV9nYXRld2F5c1wiXHJcblx0XHRcdG5hbWU9XCJlbmFibGVfdGVzdF9tb2RlXCJcclxuXHRcdFx0OndyYXBwZXItY3NzPVwiWyAnZXF1YWx3aWR0aCcgXVwiXHJcblx0XHRcdDpkZXNjcmlwdGlvbj1cImhlbHAuZW5hYmxlX3Rlc3RfbW9kZVwiXHJcblx0XHRcdDpsYWJlbD1cImxhYmVsLmVuYWJsZV90ZXN0X21vZGVcIlxyXG5cdFx0XHQ6dmFsdWU9XCJzdG9yYWdlLmVuYWJsZV90ZXN0X21vZGVcIlxyXG5cdFx0XHRAaW5wdXQ9XCJjaGFuZ2VWYWwoICdlbmFibGVfdGVzdF9tb2RlJywgJGV2ZW50IClcIlxyXG5cdFx0PjwvY3gtdnVpLXN3aXRjaGVyPlxyXG5cdFx0PHRlbXBsYXRlIHYtaWY9XCJzdG9yYWdlLnVzZV9nYXRld2F5c1wiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY3gtdnVpLWlubmVyLXBhbmVsXCI+XHJcblx0XHRcdFx0PEN4VnVpQ29sbGFwc2VNaW5pXHJcblx0XHRcdFx0XHR3aXRoLXBhbmVsXHJcblx0XHRcdFx0XHR2LWZvcj1cIiggdGFiLCBpbmRleCApIGluIGdhdGV3YXlzXCJcclxuXHRcdFx0XHRcdDpkZXNjPVwidGFiLmRlc2MgfHwgJydcIlxyXG5cdFx0XHRcdFx0OmxhYmVsPVwidGFiLnRpdGxlXCJcclxuXHRcdFx0XHRcdDprZXk9XCJ0YWIuY29tcG9uZW50Lm5hbWVcIlxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxrZWVwLWFsaXZlPlxyXG5cdFx0XHRcdFx0XHQ8Y29tcG9uZW50XHJcblx0XHRcdFx0XHRcdFx0di1iaW5kOmlzPVwidGFiLmNvbXBvbmVudFwiXHJcblx0XHRcdFx0XHRcdFx0cmVmPVwiZ2F0ZXdheXNcIlxyXG5cdFx0XHRcdFx0XHRcdDppbmNvbWluZz1cImdldEluY29taW5nKCB0YWIuY29tcG9uZW50Lm5hbWUgKVwiXHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L2tlZXAtYWxpdmU+XHJcblx0XHRcdFx0XHQ8Y3gtdnVpLWJ1dHRvblxyXG5cdFx0XHRcdFx0XHRidXR0b24tc3R5bGU9XCJhY2NlbnRcIlxyXG5cdFx0XHRcdFx0XHQ6bG9hZGluZz1cImxvYWRpbmdHYXRld2F5c1sgdGFiLmNvbXBvbmVudC5uYW1lIF1cIlxyXG5cdFx0XHRcdFx0XHRAY2xpY2s9XCJvblNhdmVHYXRld2F5KCBpbmRleCwgdGFiLmNvbXBvbmVudC5uYW1lIClcIlxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBzbG90PVwibGFiZWxcIj5TYXZlPC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9jeC12dWktYnV0dG9uPlxyXG5cdFx0XHRcdDwvQ3hWdWlDb2xsYXBzZU1pbmk+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC90ZW1wbGF0ZT5cclxuXHQ8L3NlY3Rpb24+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgQ3hWdWlDb2xsYXBzZU1pbmkgZnJvbSAnQGFkbWluL2NvbXBvbmVudHMvY29sbGFwc2UtbWluaS9DeFZ1aUNvbGxhcHNlTWluaSc7XHJcbmltcG9ydCB7XHJcblx0aGVscCxcclxuXHRsYWJlbCxcclxufSBmcm9tIFwiLi9zb3VyY2VcIjtcclxuaW1wb3J0IFNhdmVUYWJCeUFqYXggZnJvbSAnQGFkbWluL21peGlucy9TYXZlVGFiQnlBamF4JztcclxuaW1wb3J0IEdldEluY29taW5nIGZyb20gJ0BhZG1pbi9taXhpbnMvR2V0SW5jb21pbmcnO1xyXG5pbXBvcnQgKiBhcyBwYXlwYWwgZnJvbSAnLi4vLi4vZ2F0ZXdheXMvcGF5cGFsJztcclxuXHJcbmNvbnN0IHsgYXBwbHlGaWx0ZXJzIH0gPSB3cC5ob29rcztcclxuXHJcbmNvbnN0IGdhdGV3YXlzVGFicyA9IGFwcGx5RmlsdGVycyggJ2pldC5mYi5yZWdpc3Rlci5nYXRld2F5cycsIFtcclxuXHRwYXlwYWwsXHJcbl0gKTtcclxuXHJcbmxldCByZXF1ZXN0RnVuYyA9ICgpID0+IHtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRuYW1lOiAncGF5bWVudHMtZ2F0ZXdheXMnLFxyXG5cdHByb3BzOiB7XHJcblx0XHRpbmNvbWluZzoge1xyXG5cdFx0XHR0eXBlOiBPYmplY3QsXHJcblx0XHRcdGRlZmF1bHQoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHt9O1xyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdGNvbXBvbmVudHM6IHsgQ3hWdWlDb2xsYXBzZU1pbmkgfSxcclxuXHRtaXhpbnM6IFsgU2F2ZVRhYkJ5QWpheCwgR2V0SW5jb21pbmcgXSxcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bGFiZWwsIGhlbHAsXHJcblx0XHRcdHN0b3JhZ2U6IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCB0aGlzLmluY29taW5nICkgKSxcclxuXHRcdFx0Z2F0ZXdheXM6IGdhdGV3YXlzVGFicyxcclxuXHRcdFx0bG9hZGluZ0dhdGV3YXlzOiB7fSxcclxuXHRcdH07XHJcblx0fSxcclxuXHRjcmVhdGVkKCkge1xyXG5cdFx0amZiRXZlbnRCdXMuJG9uKCAncmVxdWVzdC1zdGF0ZScsIHByb3BzID0+IHtcclxuXHRcdFx0Y29uc3QgeyBzdGF0ZSwgc2x1ZyB9ID0gcHJvcHM7XHJcblx0XHRcdHRoaXMuJHNldCggdGhpcy5sb2FkaW5nR2F0ZXdheXMsIHNsdWcsIHN0YXRlID09PSAnYmVnaW4nICk7XHJcblx0XHR9ICk7XHJcblxyXG5cdFx0cmVxdWVzdEZ1bmMgPSBfLmRlYm91bmNlKCAoKSA9PiB7XHJcblx0XHRcdHRoaXMuc2F2ZUJ5QWpheCggdGhpcywgdGhpcy4kb3B0aW9ucy5uYW1lIClcclxuXHRcdH0sIDEwMDAgKTtcclxuXHR9LFxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdGNoYW5nZVZhbCggbmFtZSwgdmFsdWUgKSB7XHJcblx0XHRcdHRoaXMuJHNldCggdGhpcy5zdG9yYWdlLCBuYW1lLCB2YWx1ZSApO1xyXG5cclxuXHRcdFx0cmVxdWVzdEZ1bmMoKTtcclxuXHRcdH0sXHJcblx0XHRvblNhdmVHYXRld2F5KCBpbmRleFRhYiwgdGFiU2x1ZyApIHtcclxuXHRcdFx0Y29uc3QgY3VycmVudCA9IHRoaXMuJHJlZnMuZ2F0ZXdheXNbIGluZGV4VGFiIF07XHJcblxyXG5cdFx0XHR0aGlzLnNhdmVCeUFqYXgoIGN1cnJlbnQsIHRhYlNsdWcgKTtcclxuXHRcdH0sXHJcblx0XHRnZXRSZXF1ZXN0T25TYXZlKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGRhdGE6IHsgLi4udGhpcy5zdG9yYWdlIH0sXHJcblx0XHRcdH07XHJcblx0XHR9LFxyXG5cdH0sXHJcbn1cclxuXHJcbjwvc2NyaXB0PiIsImV4cG9ydCBkZWZhdWx0IHtcclxuXHRtZXRob2RzOiB7XHJcblx0XHRnZXRJbmNvbWluZyggdGFiTmFtZSApIHtcclxuXHRcdFx0cmV0dXJuIHdpbmRvdy5KZXRGQlBhZ2VDb25maWdbIHRhYk5hbWUgXTtcclxuXHRcdH0sXHJcblx0fVxyXG59IiwiZXhwb3J0IGRlZmF1bHQge1xyXG5cdG1ldGhvZHM6IHtcclxuXHRcdHNhdmVCeUFqYXgoIGN1cnJlbnRUYWIsIHRhYlNsdWcgKSB7XHJcblx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xyXG5cclxuXHRcdFx0Y29uc3QgYWpheFJlcXVlc3QgPSB7XHJcblx0XHRcdFx0Li4ue1xyXG5cdFx0XHRcdFx0dXJsOiB3aW5kb3cuYWpheHVybCxcclxuXHRcdFx0XHRcdHR5cGU6ICdQT1NUJyxcclxuXHRcdFx0XHRcdGRhdGFUeXBlOiAnanNvbicsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQuLi5jdXJyZW50VGFiLmdldFJlcXVlc3RPblNhdmUoKSxcclxuXHRcdFx0fTtcclxuXHRcdFx0YWpheFJlcXVlc3QuZGF0YSA9IHtcclxuXHRcdFx0XHRhY3Rpb246IGBqZXRfZmJfc2F2ZV90YWJfXyR7IHRhYlNsdWcgfWAsXHJcblx0XHRcdFx0Li4uYWpheFJlcXVlc3QuZGF0YSxcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdGpmYkV2ZW50QnVzLiRlbWl0KCAncmVxdWVzdC1zdGF0ZScsIHsgc3RhdGU6ICdiZWdpbicsIHNsdWc6IHRhYlNsdWcgfSApO1xyXG5cclxuXHRcdFx0alF1ZXJ5LmFqYXgoIGFqYXhSZXF1ZXN0IClcclxuXHRcdFx0XHQuZG9uZSggZnVuY3Rpb24oIHJlc3BvbnNlICkge1xyXG5cclxuXHRcdFx0XHRcdGlmICggJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGN1cnJlbnRUYWIub25TYXZlRG9uZSApIHtcclxuXHRcdFx0XHRcdFx0Y3VycmVudFRhYi5vblNhdmVEb25lKCByZXNwb25zZSApO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0aWYgKCByZXNwb25zZS5zdWNjZXNzICkge1xyXG5cdFx0XHRcdFx0XHRcdHNlbGYuJENYTm90aWNlLmFkZCgge1xyXG5cdFx0XHRcdFx0XHRcdFx0bWVzc2FnZTogcmVzcG9uc2UuZGF0YS5tZXNzYWdlLFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJ3N1Y2Nlc3MnLFxyXG5cdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDUwMDAsXHJcblx0XHRcdFx0XHRcdFx0fSApO1xyXG5cdFx0XHRcdFx0XHRcdGlmICggJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGN1cnJlbnRUYWIub25TYXZlRG9uZVN1Y2Nlc3MgKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjdXJyZW50VGFiLm9uU2F2ZURvbmVTdWNjZXNzKCByZXNwb25zZSApO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRzZWxmLiRDWE5vdGljZS5hZGQoIHtcclxuXHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2U6IHJlc3BvbnNlLmRhdGEubWVzc2FnZSxcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdlcnJvcicsXHJcblx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogNTAwMCxcclxuXHRcdFx0XHRcdFx0XHR9ICk7XHJcblx0XHRcdFx0XHRcdFx0aWYgKCAnZnVuY3Rpb24nID09PSB0eXBlb2YgY3VycmVudFRhYi5vblNhdmVEb25lRXJyb3IgKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjdXJyZW50VGFiLm9uU2F2ZURvbmVFcnJvciggcmVzcG9uc2UgKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGpmYkV2ZW50QnVzLiRlbWl0KCAncmVxdWVzdC1zdGF0ZScsIHsgc3RhdGU6ICdlbmQnLCBzbHVnOiB0YWJTbHVnIH0gKTtcclxuXHRcdFx0XHR9IClcclxuXHRcdFx0XHQuZmFpbCggZnVuY3Rpb24oIGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93biApIHtcclxuXHRcdFx0XHRcdGlmICggJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGN1cnJlbnRUYWIub25TYXZlRmFpbCApIHtcclxuXHRcdFx0XHRcdFx0Y3VycmVudFRhYi5vblNhdmVGYWlsKCBqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24gKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHNlbGYuJENYTm90aWNlLmFkZCgge1xyXG5cdFx0XHRcdFx0XHRcdG1lc3NhZ2U6IGVycm9yVGhyb3duLFxyXG5cdFx0XHRcdFx0XHRcdHR5cGU6ICdlcnJvcicsXHJcblx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDUwMDAsXHJcblx0XHRcdFx0XHRcdH0gKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGpmYkV2ZW50QnVzLiRlbWl0KCAncmVxdWVzdC1zdGF0ZScsIHsgc3RhdGU6ICdlbmQnLCBzbHVnOiB0YWJTbHVnIH0gKTtcclxuXHRcdFx0XHR9ICk7XHJcblx0XHR9XHJcblx0fVxyXG59IiwiaW1wb3J0IFRhYiBmcm9tICcuL1BheXBhbFRhYi52dWUnO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHRpdGxlID0gX18oICdQYXlQYWwgR2F0ZXdheSBBUEknLCAnamV0LWZvcm0tYnVpbGRlcicgKTtcclxuY29uc3QgY29tcG9uZW50ID0gVGFiO1xyXG5cclxuZXhwb3J0IHtcclxuXHR0aXRsZSxcclxuXHRjb21wb25lbnQsXHJcbn0iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgbGFiZWwgPSB7XHJcblx0Y2xpZW50X2lkOiBfXyggJ0NsaWVudCBJRCcsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdHNlY3JldDogX18oICdTZWNyZXQgS2V5JywgJ2pldC1mb3JtLWJ1aWxkZXInIClcclxufTtcclxuXHJcbmNvbnN0IGhlbHAgPSB7fTtcclxuXHJcbmV4cG9ydCB7IGxhYmVsLCBoZWxwIH07IiwiaW1wb3J0IEFjdGl2ZUNhbXBhaWduIGZyb20gJy4vQWN0aXZlQ2FtcGFpZ25UYWIudnVlJztcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB0aXRsZSA9IF9fKCAnQWN0aXZlQ2FtcGFpZ24gQVBJJywgJ2pldC1mb3JtLWJ1aWxkZXInICk7XHJcbmNvbnN0IGNvbXBvbmVudCA9IEFjdGl2ZUNhbXBhaWduO1xyXG5cclxuZXhwb3J0IHtcclxuXHR0aXRsZSxcclxuXHRjb21wb25lbnRcclxufSIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCBsYWJlbCA9IHtcclxuXHRhcGlfa2V5OiBfXyggJ0FQSSBLZXknLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxuXHRhcGlfdXJsOiBfXyggJ0FQSSBVUkwnLCAnamV0LWZvcm0tYnVpbGRlcicgKVxyXG59O1xyXG5cclxuY29uc3QgaGVscCA9IHtcclxuXHRhcGlQcmVmOiBfXyggJ0hvdyB0byBvYnRhaW4geW91ciBBY3RpdmVDYW1wYWlnbiBBUEkgVVJMIGFuZCBLZXk/IE1vcmUgaW5mbycgKSxcclxuXHRhcGlMaW5rTGFiZWw6IF9fKCAnaGVyZScgKSxcclxuXHRhcGlMaW5rOiAnaHR0cHM6Ly9oZWxwLmFjdGl2ZWNhbXBhaWduLmNvbS9oYy9lbi11cy9hcnRpY2xlcy8yMDczMTc1OTAtR2V0dGluZy1zdGFydGVkLXdpdGgtdGhlLUFQSSdcclxufTtcclxuXHJcbmV4cG9ydCB7IGxhYmVsLCBoZWxwIH07IiwiaW1wb3J0IENhcHRjaGFUYWIgZnJvbSAnLi9DYXB0Y2hhVGFiLnZ1ZSc7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgdGl0bGUgPSBfXyggJ0NhcHRjaGEgU2V0dGluZ3MnLCAnamV0LWZvcm0tYnVpbGRlcicgKTtcclxuY29uc3QgY29tcG9uZW50ID0gQ2FwdGNoYVRhYjtcclxuXHJcbmV4cG9ydCB7XHJcblx0dGl0bGUsXHJcblx0Y29tcG9uZW50XHJcbn0iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgbGFiZWwgPSB7XHJcblx0a2V5OiBfXyggJ1NpdGUgS2V5JywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcblx0c2VjcmV0OiBfXyggJ1NlY3JldCBLZXknLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxufTtcclxuXHJcbmNvbnN0IGhlbHAgPSB7XHJcblx0YXBpUHJlZjogX18oICdSZWdpc3RlciByZUNBUFRDSEEgdjMga2V5cycgKSxcclxuXHRhcGlMaW5rTGFiZWw6IF9fKCAnaGVyZScgKSxcclxuXHRhcGlMaW5rOiAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9yZWNhcHRjaGEvYWRtaW4vY3JlYXRlJ1xyXG59O1xyXG5cclxuZXhwb3J0IHsgbGFiZWwsIGhlbHAgfTsiLCJpbXBvcnQgR2V0UmVzcG9uc2VUYWIgZnJvbSAnLi9HZXRSZXNwb25zZVRhYi52dWUnO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHRpdGxlID0gX18oICdHZXRSZXNwb25zZSBBUEknLCAnamV0LWZvcm0tYnVpbGRlcicgKTtcclxuY29uc3QgY29tcG9uZW50ID0gR2V0UmVzcG9uc2VUYWI7XHJcblxyXG5leHBvcnQge1xyXG5cdHRpdGxlLFxyXG5cdGNvbXBvbmVudFxyXG59IiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IGxhYmVsID0ge1xyXG5cdGFwaV9rZXk6IF9fKCAnQVBJIEtleScsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG59O1xyXG5cclxuY29uc3QgaGVscCA9IHtcclxuXHRhcGlQcmVmOiBfXyggJ0hvdyB0byBvYnRhaW4geW91ciBHZXRSZXNwb25zZSBBUEkgS2V5PyBNb3JlIGluZm8nICksXHJcblx0YXBpTGlua0xhYmVsOiBfXyggJ2hlcmUnICksXHJcblx0YXBpTGluazogJ2h0dHBzOi8vYXBwLmdldHJlc3BvbnNlLmNvbS9hcGknXHJcbn07XHJcblxyXG5leHBvcnQgeyBsYWJlbCwgaGVscCB9OyIsImltcG9ydCBNYWlsQ2hpbXBUYWIgZnJvbSAnLi9NYWlsQ2hpbXBUYWIudnVlJztcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB0aXRsZSA9IF9fKCAnTWFpbENoaW1wIEFQSScsICdqZXQtZm9ybS1idWlsZGVyJyApO1xyXG5jb25zdCBjb21wb25lbnQgPSBNYWlsQ2hpbXBUYWI7XHJcblxyXG5leHBvcnQge1xyXG5cdHRpdGxlLFxyXG5cdGNvbXBvbmVudFxyXG59IiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IGxhYmVsID0ge1xyXG5cdGFwaV9rZXk6IF9fKCAnQVBJIEtleScsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG59O1xyXG5cclxuY29uc3QgaGVscCA9IHtcclxuXHRhcGlQcmVmOiBfXyggJ0hvdyB0byBvYnRhaW4geW91ciBNYWlsQ2hpbXAgQVBJIEtleT8gTW9yZSBpbmZvJyApLFxyXG5cdGFwaUxpbmtMYWJlbDogX18oICdoZXJlJyApLFxyXG5cdGFwaUxpbms6ICdodHRwczovL21haWxjaGltcC5jb20vaGVscC9hYm91dC1hcGkta2V5cy8nXHJcbn07XHJcblxyXG5leHBvcnQgeyBsYWJlbCwgaGVscCB9OyIsImltcG9ydCBUYWIgZnJvbSAnLi9QYXltZW50c0dhdGV3YXlzLnZ1ZSc7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgdGl0bGUgPSBfXyggJ1BheW1lbnRzIEdhdGV3YXlzJywgJ2pldC1mb3JtLWJ1aWxkZXInICk7XHJcbmNvbnN0IGNvbXBvbmVudCA9IFRhYjtcclxuY29uc3QgZGlzcGxheUJ1dHRvbiA9IGZhbHNlO1xyXG5cclxuZXhwb3J0IHtcclxuXHR0aXRsZSxcclxuXHRjb21wb25lbnQsXHJcblx0ZGlzcGxheUJ1dHRvblxyXG59IiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IGxhYmVsID0ge1xyXG5cdHVzZV9nYXRld2F5czogX18oICdFbmFibGUgR2F0ZXdheXMnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxuXHRlbmFibGVfdGVzdF9tb2RlOiBfXyggJ0VuYWJsZSBUZXN0IE1vZGUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxufTtcclxuXHJcbmNvbnN0IGhlbHAgPSB7XHJcblx0ZW5hYmxlX3Rlc3RfbW9kZTogX18oXHJcblx0XHRgVGhpcyBvcHRpb24gdGFrZXMgcHJlY2VkZW5jZSBvdmVyIHRoZSA8Y29kZT5qZXQtZm9ybS1idWlsZGVyL2dhdGV3YXlzL3BheXBhbC9zYW5kYm94LW1vZGU8L2NvZGU+IGZpbHRlci4gXHJcblx0XHRBcyBvZiByaWdodCBub3csIHdvcmtzIG9ubHkgZm9yIFBheVBhbCBwYXltZW50IHN5c3RlbWAsXHJcblx0XHQnamV0LWZvcm0tYnVpbGRlcicsXHJcblx0KSxcclxuXHR1c2VfZ2F0ZXdheXM6IF9fKFxyXG5cdFx0YEFjdGl2YXRlIHBheW1lbnQgZ2F0ZXdheXMgZm9yIHRoZSBmb3Jtcy4gVGhpcyBvcHRpb24gdGFrZXMgcHJlY2VkZW5jZSBvdmVyIHRoZSBcclxuXHRcdDxjb2RlPmpldC1mb3JtLWJ1aWxkZXIvYWxsb3ctZ2F0ZXdheXM8L2NvZGU+IGZpbHRlcmAsXHJcblx0XHQnamV0LWZvcm0tYnVpbGRlcicsXHJcblx0KSxcclxufTtcclxuXHJcbmV4cG9ydCB7XHJcblx0bGFiZWwsXHJcblx0aGVscCxcclxufTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5wcm9jY2VzaW5nLXN0YXRlIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlX19pbm5lciB7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlX19oZWFkZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZV9faGVhZGVyLWNvbnRyb2xzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEQ0RDREQ7XFxufVxcbi5qZmItYWRkb25zLXBhZ2VfX2hlYWRlci1jb250cm9scyA+IC5jeC12dWktYnV0dG9uIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlIC5jeC12dWktYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuY3gtdnVpLWJ1dHRvbiAuYnV0dG9uLWljb24ge1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmN4LXZ1aS1idXR0b24tLXN0eWxlLWFjY2VudCB7XFxuICBjb2xvcjogIzAwN2NiYTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjMDA3Y2JhO1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlIC5jeC12dWktYnV0dG9uLS1zdHlsZS1hY2NlbnQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2NiYTEyO1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlIC5jeC12dWktYnV0dG9uLS1zdHlsZS1hY2NlbnQgLmJ1dHRvbi1pY29uIHBhdGgge1xcbiAgZmlsbDogIzAwN2NiYTtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuY3gtdnVpLWJ1dHRvbi0tc3R5bGUtZGFuZ2VyIHtcXG4gIGNvbG9yOiAjZDYzMzZjO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICNkNjMzNmM7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmN4LXZ1aS1idXR0b24tLXN0eWxlLWRhbmdlcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDYzMzZjMTI7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmN4LXZ1aS1idXR0b24tLXN0eWxlLWRhbmdlciAuYnV0dG9uLWljb24gcGF0aCB7XFxuICBmaWxsOiAjZDYzMzZjO1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlIC5jeC12dWktYnV0dG9uX19jb250ZW50ID4gc3BhbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlIC5jeC12dWktcG9wdXBfX2hlYWRlciB7XFxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRENEQ0REO1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuY3gtdnVpLXBvcHVwX19oZWFkZXItdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xcbiAgY29sb3I6ICMyMzI4MkQ7XFxufVxcbi5qZmItYWRkb25zLXBhZ2VfX2xpY2Vuc2UtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlX19saWNlbnNlLWZvcm0gPiBzcGFuIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi5qZmItYWRkb25zLXBhZ2VfX2xpY2Vuc2UtaW5wdXQge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuZ28tcHJvLWJhbm5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDI0cHggMDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRENEQ0REO1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlIC5nby1wcm8tYmFubmVyX19zdWJ0aXRsZSB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBsaW5lLWhlaWdodDogMS4yNTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogIzAwN0NCQTtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuZ28tcHJvLWJhbm5lcl9fdGl0bGUge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY29sb3I6ICMyMzI4MkQ7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlIC5nby1wcm8tYmFubmVyX19idXR0b24ge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN0NCQTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vYWRtaW4vcGFnZXMvYWRkb25zL0FkZG9uc1BhZ2UudnVlXCIsXCJ3ZWJwYWNrOi8vLi8uLi9BZGRvbnNQYWdlLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUEwWkE7RUFDQyxZQUFBO0VBQ0Esb0JBQUE7QUN6WkQ7QUQ4WkM7RUFDQyxhQUFBO0VBQ0EsWUFBQTtBQzNaRjtBRDhaQztFQUNDLG1CQUFBO0FDNVpGO0FEK1pDO0VBQ0MsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdDQUFBO0FDN1pGO0FEK1pFO0VBQ0MsaUJBQUE7QUM3Wkg7QURpYUM7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBQy9aRjtBRGlhRTtFQUNDLGlCQUFBO0FDL1pIO0FEa2FFO0VBQ0MsY0FBQTtFQUNBLG1DQUFBO0FDaGFIO0FEa2FHO0VBQ0MsMkJBQUE7QUNoYUo7QURvYUk7RUFDQyxhQUFBO0FDbGFMO0FEdWFFO0VBQ0MsY0FBQTtFQUNBLG1DQUFBO0FDcmFIO0FEdWFHO0VBQ0MsMkJBQUE7QUNyYUo7QUR5YUk7RUFDQyxhQUFBO0FDdmFMO0FENmFHO0VBQ0MsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUMzYUo7QURpYkU7RUFDQyxvQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7QUMvYUg7QURrYkU7RUFDQyxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNoYkg7QUR3YkM7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0FDdGJGO0FEd2JFO0VBQ0MsbUJBQUE7QUN0Ykg7QUQwYkM7RUFDQyxtQkFBQTtBQ3hiRjtBRDJiQztFQUNDLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUN6YkY7QUQyYkU7RUFDQyxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ3piSDtBRDRiRTtFQUNDLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDMWJIO0FENmJFO0VBQ0MsWUFBQTtFQUNBLHlCQUFBO0FDM2JIXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcclxcblxcclxcbi5wcm9jY2VzaW5nLXN0YXRlIHtcXHJcXG5cXHRvcGFjaXR5OiAwLjU7XFxyXFxuXFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5qZmItYWRkb25zLXBhZ2Uge1xcclxcblxcclxcblxcdCZfX2lubmVyIHtcXHJcXG5cXHRcXHRwYWRkaW5nOiAzMHB4O1xcclxcblxcdFxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Jl9faGVhZGVyIHtcXHJcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQmX19oZWFkZXItY29udHJvbHMge1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdHBhZGRpbmctYm90dG9tOiAxNXB4O1xcclxcblxcdFxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRENEQ0REO1xcclxcblxcclxcblxcdFxcdD4gLmN4LXZ1aS1idXR0b24ge1xcclxcblxcdFxcdFxcdG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LmN4LXZ1aS1idXR0b24ge1xcclxcblxcdFxcdGZvbnQtc2l6ZTogMTNweDtcXHJcXG5cXHRcXHRmb250LXdlaWdodDogNDAwO1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcblxcclxcblxcdFxcdC5idXR0b24taWNvbiB7XFxyXFxuXFx0XFx0XFx0bWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdCYtLXN0eWxlLWFjY2VudCB7XFxyXFxuXFx0XFx0XFx0Y29sb3I6ICMwMDdjYmE7XFxyXFxuXFx0XFx0XFx0Ym94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICMwMDdjYmE7XFxyXFxuXFxyXFxuXFx0XFx0XFx0Jjpob3ZlciB7XFxyXFxuXFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogIzAwN2NiYTEyO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHQuYnV0dG9uLWljb24ge1xcclxcblxcdFxcdFxcdFxcdHBhdGgge1xcclxcblxcdFxcdFxcdFxcdFxcdGZpbGw6ICMwMDdjYmE7XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Ji0tc3R5bGUtZGFuZ2VyIHtcXHJcXG5cXHRcXHRcXHRjb2xvcjogI2Q2MzM2YztcXHJcXG5cXHRcXHRcXHRib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggI2Q2MzM2YztcXHJcXG5cXHJcXG5cXHRcXHRcXHQmOmhvdmVyIHtcXHJcXG5cXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZDYzMzZjMTI7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdC5idXR0b24taWNvbiB7XFxyXFxuXFx0XFx0XFx0XFx0cGF0aCB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0ZmlsbDogI2Q2MzM2YztcXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQmX19jb250ZW50IHtcXHJcXG5cXHRcXHRcXHQ+IHNwYW4ge1xcclxcblxcdFxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQuY3gtdnVpLXBvcHVwIHtcXHJcXG5cXHRcXHQmX19oZWFkZXIge1xcclxcblxcdFxcdFxcdHBhZGRpbmctYm90dG9tOiAxNXB4O1xcclxcblxcdFxcdFxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRENEQ0REO1xcclxcblxcdFxcdFxcdG1hcmdpbi1ib3R0b206IDMwcHg7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdCZfX2hlYWRlci10aXRsZSB7XFxyXFxuXFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDUwMDtcXHJcXG5cXHRcXHRcXHRmb250LXNpemU6IDI0cHg7XFxyXFxuXFx0XFx0XFx0bGluZS1oZWlnaHQ6IDM2cHg7XFxyXFxuXFx0XFx0XFx0Y29sb3I6ICMyMzI4MkQ7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQmX19saWNlbnNlLXBvcHVwIHtcXHJcXG5cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Jl9fbGljZW5zZS1mb3JtIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcblxcdFxcdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcblxcclxcblxcdFxcdD4gc3BhbiB7XFxyXFxuXFx0XFx0XFx0bWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCZfX2xpY2Vuc2UtaW5wdXQge1xcclxcblxcdFxcdG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5nby1wcm8tYmFubmVyIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHRwYWRkaW5nOiAyNHB4IDA7XFxyXFxuXFx0XFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEQ0RDREQ7XFxyXFxuXFxyXFxuXFx0XFx0Jl9fc3VidGl0bGUge1xcclxcblxcdFxcdFxcdGZvbnQtc2l6ZTogMThweDtcXHJcXG5cXHRcXHRcXHRsaW5lLWhlaWdodDogMS4yNTtcXHJcXG5cXHRcXHRcXHRmb250LXdlaWdodDogNTAwO1xcclxcblxcdFxcdFxcdGNvbG9yOiAjMDA3Q0JBO1xcclxcblxcdFxcdFxcdG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Jl9fdGl0bGUge1xcclxcblxcdFxcdFxcdGZvbnQtc2l6ZTogMjRweDtcXHJcXG5cXHRcXHRcXHRsaW5lLWhlaWdodDogMS4yNTtcXHJcXG5cXHRcXHRcXHRmb250LXdlaWdodDogNTAwO1xcclxcblxcdFxcdFxcdGNvbG9yOiAjMjMyODJEO1xcclxcblxcdFxcdFxcdG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdCZfX2J1dHRvbiB7XFxyXFxuXFx0XFx0XFx0Y29sb3I6IHdoaXRlO1xcclxcblxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICMwMDdDQkE7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuXCIsXCIucHJvY2Nlc2luZy1zdGF0ZSB7XFxuICBvcGFjaXR5OiAwLjU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmpmYi1hZGRvbnMtcGFnZV9faW5uZXIge1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZV9faGVhZGVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcbi5qZmItYWRkb25zLXBhZ2VfX2hlYWRlci1jb250cm9scyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRENEQ0REO1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlX19oZWFkZXItY29udHJvbHMgPiAuY3gtdnVpLWJ1dHRvbiB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuY3gtdnVpLWJ1dHRvbiB7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmN4LXZ1aS1idXR0b24gLmJ1dHRvbi1pY29uIHtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlIC5jeC12dWktYnV0dG9uLS1zdHlsZS1hY2NlbnQge1xcbiAgY29sb3I6ICMwMDdjYmE7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggIzAwN2NiYTtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuY3gtdnVpLWJ1dHRvbi0tc3R5bGUtYWNjZW50OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdjYmExMjtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuY3gtdnVpLWJ1dHRvbi0tc3R5bGUtYWNjZW50IC5idXR0b24taWNvbiBwYXRoIHtcXG4gIGZpbGw6ICMwMDdjYmE7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmN4LXZ1aS1idXR0b24tLXN0eWxlLWRhbmdlciB7XFxuICBjb2xvcjogI2Q2MzM2YztcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjZDYzMzZjO1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlIC5jeC12dWktYnV0dG9uLS1zdHlsZS1kYW5nZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q2MzM2YzEyO1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlIC5jeC12dWktYnV0dG9uLS1zdHlsZS1kYW5nZXIgLmJ1dHRvbi1pY29uIHBhdGgge1xcbiAgZmlsbDogI2Q2MzM2YztcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuY3gtdnVpLWJ1dHRvbl9fY29udGVudCA+IHNwYW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuY3gtdnVpLXBvcHVwX19oZWFkZXIge1xcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RDRENERDtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmN4LXZ1aS1wb3B1cF9faGVhZGVyLXRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBsaW5lLWhlaWdodDogMzZweDtcXG4gIGNvbG9yOiAjMjMyODJEO1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlX19saWNlbnNlLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZV9fbGljZW5zZS1mb3JtID4gc3BhbiB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlX19saWNlbnNlLWlucHV0IHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmdvLXByby1iYW5uZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyNHB4IDA7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RDRENERDtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuZ28tcHJvLWJhbm5lcl9fc3VidGl0bGUge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY29sb3I6ICMwMDdDQkE7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmdvLXByby1iYW5uZXJfX3RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiAjMjMyODJEO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuZ28tcHJvLWJhbm5lcl9fYnV0dG9uIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdDQkE7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5qZmItYWRkb25zIHtcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcbi5qZmItYWRkb25zOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuLmpmYi1hZGRvbnMgYSB7XFxuICBjb2xvcjogIzAwN2NiYTtcXG59XFxuLmpmYi1hZGRvbnNfX2hlYWRlciB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4uamZiLWFkZG9uc19fbGlzdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gIGdhcDogNDBweDtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDExNDBweCkge1xcbi5qZmItYWRkb25zX19saXN0IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG59XFxufVxcbi5qZmItYWRkb25zX19pdGVtIHtcXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcyBlYXNlLW91dDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5qZmItYWRkb25zX19pdGVtOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDBweCA0cHggMjhweCByZ2JhKDE1LCAyMywgNDIsIDAuMSk7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLmFjdGl2YXRlZCAuamZiLWFkZG9uc19faXRlbS1pbmZvIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS51cGRhdGUtYXZhbGlhYmxlIC5qZmItYWRkb25zX19pdGVtLW5hbWUgLnZlcnNpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q2MzM2QztcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0udXBkYXRlLWF2YWxpYWJsZSAuamZiLWFkZG9uc19faXRlbS11cGRhdGUgLmxhdGVzdC12ZXJzaW9uIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NkI0NTA7XFxuICBwYWRkaW5nOiAycHggOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS1pbm5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS10aHVtYiAucHJvLWJhZGdlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTJweDtcXG4gIGxlZnQ6IDEycHg7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLXRodW1iIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0taW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcXG4gIGJvcmRlci13aWR0aDogMCAxcHggMXB4IDFweDtcXG4gIGJvcmRlci1jb2xvcjogI0RDRENERDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tbmFtZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS1uYW1lIC5sYWJlbCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLW5hbWUgLnZlcnNpb24ge1xcbiAgcGFkZGluZzogMXB4IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NkI0NTA7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tdXBkYXRlIHtcXG4gIGNvbG9yOiAjN2I3ZTgxO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tbGljZW5zZSB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgY29sb3I6ICM3YjdlODE7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLWxpY2Vuc2UgLmN4LXZ1aS1idXR0b24ge1xcbiAgbWFyZ2luLWxlZnQ6IDNweDtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tZGVzYyB7XFxuICBmbGV4OiAxIDEgYXV0bztcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tZGVzYyBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tYWN0aW9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLWFjdGlvbnM6ZW1wdHkge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tYWN0aW9ucyAuY3gtdnVpLWJ1dHRvbiB7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2FkbWluL3BhZ2VzL2FkZG9ucy9jb21wb25lbnRzL0FkZG9uSXRlbS52dWVcIixcIndlYnBhY2s6Ly8uLy4uL0FkZG9uSXRlbS52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBa1JBO0VBQ0MsbUJBQUE7QUNqUkQ7QURtUkM7RUFDQyxnQkFBQTtBQ2pSRjtBRG9SQztFQUNDLGNBQUE7QUNsUkY7QURxUkM7RUFDQyxtQkFBQTtBQ25SRjtBRHNSQztFQUNDLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLFNBQUE7QUNwUkY7QURzUkU7QUFMRDtJQU1FLHFDQUFBO0FDblJEO0FBQ0Y7QURzUkM7RUFDQyxvQ0FBQTtFQUNBLG1CQUFBO0FDcFJGO0FEc1JFO0VBQ0MsOENBQUE7QUNwUkg7QUR3Ukc7RUFDQyx1QkFBQTtBQ3RSSjtBRDRSSTtFQUNDLHlCQUFBO0FDMVJMO0FEOFJJO0VBQ0MsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQzVSTDtBRGtTQztFQUNDLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQ2hTRjtBRG1TQztFQUNDLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNqU0Y7QURtU0U7RUFDQyxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDalNIO0FEb1NFO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUNsU0g7QURzU0M7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ3BTRjtBRHVTQztFQUNDLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNyU0Y7QUR1U0U7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ3JTSDtBRHdTRTtFQUNDLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQ3RTSDtBRDBTQztFQUNDLGNBQUE7RUFDQSxtQkFBQTtBQ3hTRjtBRDJTQztFQUNDLG1CQUFBO0VBQ0EsY0FBQTtBQ3pTRjtBRDJTRTtFQUNDLGdCQUFBO0FDelNIO0FENlNDO0VBQ0MsY0FBQTtBQzNTRjtBRDZTRTtFQUNDLHFCQUFBO0FDM1NIO0FEK1NDO0VBQ0MsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUM3U0Y7QUQrU0U7RUFDQyxhQUFBO0FDN1NIO0FEZ1RFO0VBQ0Msa0JBQUE7QUM5U0hcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxyXFxuXFxyXFxuLmpmYi1hZGRvbnMge1xcclxcblxcdG1hcmdpbi1ib3R0b206IDUwcHg7XFxyXFxuXFxyXFxuXFx0JjpsYXN0LWNoaWxkIHtcXHJcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAwO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHRhIHtcXHJcXG5cXHRcXHRjb2xvcjogIzAwN2NiYTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Jl9faGVhZGVyIHtcXHJcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQmX19saXN0IHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBncmlkO1xcclxcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxyXFxuXFx0XFx0Z2FwOiA0MHB4O1xcclxcblxcclxcblxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiAxMTQwcHgpIHtcXHJcXG5cXHRcXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Jl9faXRlbSB7XFxyXFxuXFx0XFx0dHJhbnNpdGlvbjogYm94LXNoYWRvdyAuM3MgZWFzZS1vdXQ7XFxyXFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXHJcXG5cXHJcXG5cXHRcXHQmOmhvdmVyIHtcXHJcXG5cXHRcXHRcXHRib3gtc2hhZG93OiAwcHggNHB4IDI4cHggcmdiYSgxNSwgMjMsIDQyLCAwLjEpO1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQmLmFjdGl2YXRlZCB7XFxyXFxuXFx0XFx0XFx0LmpmYi1hZGRvbnNfX2l0ZW0taW5mbyB7XFxyXFxuXFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQmLnVwZGF0ZS1hdmFsaWFibGUge1xcclxcblxcdFxcdFxcdC5qZmItYWRkb25zX19pdGVtLW5hbWUge1xcclxcblxcdFxcdFxcdFxcdC52ZXJzaW9uIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRDYzMzZDO1xcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0LmpmYi1hZGRvbnNfX2l0ZW0tdXBkYXRlIHtcXHJcXG5cXHRcXHRcXHRcXHQubGF0ZXN0LXZlcnNpb24ge1xcclxcblxcdFxcdFxcdFxcdFxcdGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNDZCNDUwO1xcclxcblxcdFxcdFxcdFxcdFxcdHBhZGRpbmc6IDJweCA4cHg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQmX19pdGVtLWlubmVyIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0XFx0YWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxyXFxuXFx0XFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQmX19pdGVtLXRodW1iIHtcXHJcXG5cXHRcXHRib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xcclxcblxcdFxcdGxpbmUtaGVpZ2h0OiAwO1xcclxcblxcdFxcdG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcblxcdFxcdC5wcm8tYmFkZ2Uge1xcclxcblxcdFxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRcXHRcXHR0b3A6IDEycHg7XFxyXFxuXFx0XFx0XFx0bGVmdDogMTJweDtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0aW1nIHtcXHJcXG5cXHRcXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRcXHRoZWlnaHQ6IGF1dG87XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQmX19pdGVtLWluZm8ge1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRcXHRhbGlnbi1pdGVtczogc3RyZXRjaDtcXHJcXG5cXHRcXHRmbGV4OiAxIDEgYXV0bztcXHJcXG5cXHRcXHRwYWRkaW5nOiAyMHB4O1xcclxcblxcdFxcdGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XFxyXFxuXFx0XFx0Ym9yZGVyLXdpZHRoOiAwIDFweCAxcHggMXB4O1xcclxcblxcdFxcdGJvcmRlci1jb2xvcjogI0RDRENERDtcXHJcXG5cXHRcXHRib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQmX19pdGVtLW5hbWUge1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdFxcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcblxcdFxcdG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuXFxyXFxuXFx0XFx0LmxhYmVsIHtcXHJcXG5cXHRcXHRcXHRmb250LXNpemU6IDIwcHg7XFxyXFxuXFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG5cXHRcXHRcXHRsaW5lLWhlaWdodDogMS4yNTtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0LnZlcnNpb24ge1xcclxcblxcdFxcdFxcdHBhZGRpbmc6IDFweCA4cHg7XFxyXFxuXFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcclxcblxcdFxcdFxcdGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNDZCNDUwO1xcclxcblxcdFxcdFxcdG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Jl9faXRlbS11cGRhdGUge1xcclxcblxcdFxcdGNvbG9yOiAjN2I3ZTgxO1xcclxcblxcdFxcdG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCZfX2l0ZW0tbGljZW5zZSB7XFxyXFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG5cXHRcXHRjb2xvcjogIzdiN2U4MTtcXHJcXG5cXHJcXG5cXHRcXHQuY3gtdnVpLWJ1dHRvbiB7XFxyXFxuXFx0XFx0XFx0bWFyZ2luLWxlZnQ6IDNweDtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCZfX2l0ZW0tZGVzYyB7XFxyXFxuXFx0XFx0ZmxleDogMSAxIGF1dG87XFxyXFxuXFxyXFxuXFx0XFx0YSB7XFxyXFxuXFx0XFx0XFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Jl9faXRlbS1hY3Rpb25zIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdGZsZXgtd3JhcDogd3JhcDtcXHJcXG5cXHRcXHRtYXJnaW4tdG9wOiAyMHB4O1xcclxcblxcclxcblxcdFxcdCY6ZW1wdHkge1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IG5vbmU7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC5jeC12dWktYnV0dG9uIHtcXHJcXG5cXHRcXHRcXHRtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuXCIsXCIuamZiLWFkZG9ucyB7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG4uamZiLWFkZG9uczpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcbi5qZmItYWRkb25zIGEge1xcbiAgY29sb3I6ICMwMDdjYmE7XFxufVxcbi5qZmItYWRkb25zX19oZWFkZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLmpmYi1hZGRvbnNfX2xpc3Qge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICBnYXA6IDQwcHg7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTQwcHgpIHtcXG4gIC5qZmItYWRkb25zX19saXN0IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIH1cXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0ge1xcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzIGVhc2Utb3V0O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW06aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMHB4IDRweCAyOHB4IHJnYmEoMTUsIDIzLCA0MiwgMC4xKTtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0uYWN0aXZhdGVkIC5qZmItYWRkb25zX19pdGVtLWluZm8ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLnVwZGF0ZS1hdmFsaWFibGUgLmpmYi1hZGRvbnNfX2l0ZW0tbmFtZSAudmVyc2lvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDYzMzZDO1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS51cGRhdGUtYXZhbGlhYmxlIC5qZmItYWRkb25zX19pdGVtLXVwZGF0ZSAubGF0ZXN0LXZlcnNpb24ge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ2QjQ1MDtcXG4gIHBhZGRpbmc6IDJweCA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLWlubmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLXRodW1iIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLXRodW1iIC5wcm8tYmFkZ2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMnB4O1xcbiAgbGVmdDogMTJweDtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tdGh1bWIgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xcbiAgYm9yZGVyLXdpZHRoOiAwIDFweCAxcHggMXB4O1xcbiAgYm9yZGVyLWNvbG9yOiAjRENEQ0REO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS1uYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLW5hbWUgLmxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsaW5lLWhlaWdodDogMS4yNTtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tbmFtZSAudmVyc2lvbiB7XFxuICBwYWRkaW5nOiAxcHggOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ2QjQ1MDtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS11cGRhdGUge1xcbiAgY29sb3I6ICM3YjdlODE7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS1saWNlbnNlIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBjb2xvcjogIzdiN2U4MTtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tbGljZW5zZSAuY3gtdnVpLWJ1dHRvbiB7XFxuICBtYXJnaW4tbGVmdDogM3B4O1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS1kZXNjIHtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS1kZXNjIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS1hY3Rpb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tYWN0aW9uczplbXB0eSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS1hY3Rpb25zIC5jeC12dWktYnV0dG9uIHtcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9DeFZ1aUNvbGxhcHNlTWluaS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWM4YmMwYjYmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ3hWdWlDb2xsYXBzZU1pbmkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9DeFZ1aUNvbGxhcHNlTWluaS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXE9wZW5TZXJ2ZXJcXFxcZG9tYWluc1xcXFxkZXZlbG9wLmpldFxcXFx3cC1jb250ZW50XFxcXHBsdWdpbnNcXFxcamV0Zm9ybWJ1aWxkZXJcXFxcYXNzZXRzXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzVjOGJjMGI2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzVjOGJjMGI2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzVjOGJjMGI2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9DeFZ1aUNvbGxhcHNlTWluaS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWM4YmMwYjYmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNWM4YmMwYjYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFkbWluL2NvbXBvbmVudHMvY29sbGFwc2UtbWluaS9DeFZ1aUNvbGxhcHNlTWluaS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0FkZG9uc1BhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZiMmY2Yzc1JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0FkZG9uc1BhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BZGRvbnNQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9BZGRvbnNQYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcT3BlblNlcnZlclxcXFxkb21haW5zXFxcXGRldmVsb3AuamV0XFxcXHdwLWNvbnRlbnRcXFxccGx1Z2luc1xcXFxqZXRmb3JtYnVpbGRlclxcXFxhc3NldHNcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNmIyZjZjNzUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNmIyZjZjNzUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNmIyZjZjNzUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0FkZG9uc1BhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZiMmY2Yzc1JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzZiMmY2Yzc1Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhZG1pbi9wYWdlcy9hZGRvbnMvQWRkb25zUGFnZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0FkZG9uSXRlbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDI5NDU4Y2QmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQWRkb25JdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQWRkb25JdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9BZGRvbkl0ZW0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxPcGVuU2VydmVyXFxcXGRvbWFpbnNcXFxcZGV2ZWxvcC5qZXRcXFxcd3AtY29udGVudFxcXFxwbHVnaW5zXFxcXGpldGZvcm1idWlsZGVyXFxcXGFzc2V0c1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0Mjk0NThjZCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0Mjk0NThjZCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0Mjk0NThjZCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQWRkb25JdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00Mjk0NThjZCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0Mjk0NThjZCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYWRtaW4vcGFnZXMvYWRkb25zL2NvbXBvbmVudHMvQWRkb25JdGVtLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU2V0dGluZ3NQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yZGZhMTNmNSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TZXR0aW5nc1BhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TZXR0aW5nc1BhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxPcGVuU2VydmVyXFxcXGRvbWFpbnNcXFxcZGV2ZWxvcC5qZXRcXFxcd3AtY29udGVudFxcXFxwbHVnaW5zXFxcXGpldGZvcm1idWlsZGVyXFxcXGFzc2V0c1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyZGZhMTNmNScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyZGZhMTNmNScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyZGZhMTNmNScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU2V0dGluZ3NQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yZGZhMTNmNSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyZGZhMTNmNScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYWRtaW4vcGFnZXMvc2V0dGluZ3MvU2V0dGluZ3NQYWdlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUGF5cGFsVGFiLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yZDNmNGI1MyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9QYXlwYWxUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9QYXlwYWxUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxPcGVuU2VydmVyXFxcXGRvbWFpbnNcXFxcZGV2ZWxvcC5qZXRcXFxcd3AtY29udGVudFxcXFxwbHVnaW5zXFxcXGpldGZvcm1idWlsZGVyXFxcXGFzc2V0c1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyZDNmNGI1MycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyZDNmNGI1MycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyZDNmNGI1MycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUGF5cGFsVGFiLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yZDNmNGI1MyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyZDNmNGI1MycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYWRtaW4vcGFnZXMvc2V0dGluZ3MvZ2F0ZXdheXMvcGF5cGFsL1BheXBhbFRhYi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0FjdGl2ZUNhbXBhaWduVGFiLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NzQ0M2FiOCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BY3RpdmVDYW1wYWlnblRhYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0FjdGl2ZUNhbXBhaWduVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcT3BlblNlcnZlclxcXFxkb21haW5zXFxcXGRldmVsb3AuamV0XFxcXHdwLWNvbnRlbnRcXFxccGx1Z2luc1xcXFxqZXRmb3JtYnVpbGRlclxcXFxhc3NldHNcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNDc0NDNhYjgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDc0NDNhYjgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDc0NDNhYjgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0FjdGl2ZUNhbXBhaWduVGFiLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NzQ0M2FiOCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0NzQ0M2FiOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYWRtaW4vcGFnZXMvc2V0dGluZ3MvdGFicy9hY3RpdmVjYW1wYWlnbi9BY3RpdmVDYW1wYWlnblRhYi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0NhcHRjaGFUYWIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE0ODEwNDBlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0NhcHRjaGFUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9DYXB0Y2hhVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcT3BlblNlcnZlclxcXFxkb21haW5zXFxcXGRldmVsb3AuamV0XFxcXHdwLWNvbnRlbnRcXFxccGx1Z2luc1xcXFxqZXRmb3JtYnVpbGRlclxcXFxhc3NldHNcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMTQ4MTA0MGUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMTQ4MTA0MGUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMTQ4MTA0MGUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0NhcHRjaGFUYWIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE0ODEwNDBlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzE0ODEwNDBlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhZG1pbi9wYWdlcy9zZXR0aW5ncy90YWJzL2NhcHRjaGEvQ2FwdGNoYVRhYi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0dldFJlc3BvbnNlVGFiLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kN2FhZTkxOCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9HZXRSZXNwb25zZVRhYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0dldFJlc3BvbnNlVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcT3BlblNlcnZlclxcXFxkb21haW5zXFxcXGRldmVsb3AuamV0XFxcXHdwLWNvbnRlbnRcXFxccGx1Z2luc1xcXFxqZXRmb3JtYnVpbGRlclxcXFxhc3NldHNcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnZDdhYWU5MTgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZDdhYWU5MTgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZDdhYWU5MTgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0dldFJlc3BvbnNlVGFiLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kN2FhZTkxOCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdkN2FhZTkxOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYWRtaW4vcGFnZXMvc2V0dGluZ3MvdGFicy9nZXRyZXNwb25zZS9HZXRSZXNwb25zZVRhYi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL01haWxDaGltcFRhYi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OGQzMzYxZmMmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTWFpbENoaW1wVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTWFpbENoaW1wVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcT3BlblNlcnZlclxcXFxkb21haW5zXFxcXGRldmVsb3AuamV0XFxcXHdwLWNvbnRlbnRcXFxccGx1Z2luc1xcXFxqZXRmb3JtYnVpbGRlclxcXFxhc3NldHNcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnOGQzMzYxZmMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnOGQzMzYxZmMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnOGQzMzYxZmMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL01haWxDaGltcFRhYi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OGQzMzYxZmMmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignOGQzMzYxZmMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFkbWluL3BhZ2VzL3NldHRpbmdzL3RhYnMvbWFpbGNoaW1wL01haWxDaGltcFRhYi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1BheW1lbnRzR2F0ZXdheXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA4MmU2YTVhJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1BheW1lbnRzR2F0ZXdheXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9QYXltZW50c0dhdGV3YXlzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcT3BlblNlcnZlclxcXFxkb21haW5zXFxcXGRldmVsb3AuamV0XFxcXHdwLWNvbnRlbnRcXFxccGx1Z2luc1xcXFxqZXRmb3JtYnVpbGRlclxcXFxhc3NldHNcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMDgyZTZhNWEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMDgyZTZhNWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMDgyZTZhNWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1BheW1lbnRzR2F0ZXdheXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA4MmU2YTVhJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzA4MmU2YTVhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhZG1pbi9wYWdlcy9zZXR0aW5ncy90YWJzL3BheW1lbnRzLWdhdGV3YXlzL1BheW1lbnRzR2F0ZXdheXMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0N4VnVpQ29sbGFwc2VNaW5pLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0N4VnVpQ29sbGFwc2VNaW5pLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BZGRvbnNQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FkZG9uc1BhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FkZG9uSXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BZGRvbkl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NldHRpbmdzUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZXR0aW5nc1BhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BheXBhbFRhYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYXlwYWxUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FjdGl2ZUNhbXBhaWduVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FjdGl2ZUNhbXBhaWduVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DYXB0Y2hhVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NhcHRjaGFUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dldFJlc3BvbnNlVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dldFJlc3BvbnNlVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NYWlsQ2hpbXBUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWFpbENoaW1wVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYXltZW50c0dhdGV3YXlzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BheW1lbnRzR2F0ZXdheXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgIFwiY3gtdnVpLXBhbmVsXCI6IF92bS53aXRoUGFuZWwsXG4gICAgICAgIFwiY3gtdnVpLWNvbGxhcHNlLW1pbmlfX2l0ZW1cIjogdHJ1ZSxcbiAgICAgICAgXCJjeC12dWktY29sbGFwc2UtbWluaV9faXRlbS0tYWN0aXZlXCI6IF92bS5pc0FjdGl2ZVxuICAgICAgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJjeC12dWktY29sbGFwc2UtbWluaV9faGVhZGVyXCIsXG4gICAgICAgICAgb246IHsgY2xpY2s6IF92bS5jb2xsYXBzZSB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImN4LXZ1aS1jb2xsYXBzZS1taW5pX19oZWFkZXItbGFiZWxcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJzdmdcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIxNFwiLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE0XCIsXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94OiBcIjAgMCAxNCAxNFwiLFxuICAgICAgICAgICAgICAgICAgZmlsbDogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJwYXRoXCIsIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGQ6XG4gICAgICAgICAgICAgICAgICAgICAgXCJNMTQgMTMuOTk5OUwxNCAtMC4wMDAxMjIwN0wwIC0wLjAwMDEyMTQ1OEw2LjExOTU5ZS0wNyAxMy45OTk5TDE0IDEzLjk5OTlaXCIsXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IFwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJwYXRoXCIsIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGQ6XG4gICAgICAgICAgICAgICAgICAgICAgXCJNNS4zMjkxMSAxTDExIDdMNS4zMjkxMSAxM0w0IDExLjU5MzhMOC4zNDE3NyA3TDQgMi40MDYyNUw1LjMyOTExIDFaXCIsXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IFwiIzAwN0NCQVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIlxcblxcdFxcdFxcdFwiICsgX3ZtLl9zKF92bS5sYWJlbCkgKyBcIlxcblxcdFxcdFwiKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLmRlc2NcbiAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjeC12dWktY29sbGFwc2UtbWluaV9faGVhZGVyLWRlc2NcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuXFx0XFx0XFx0XCIgKyBfdm0uX3MoX3ZtLmRlc2MpICsgXCJcXG5cXHRcXHRcIilcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uaXNBY3RpdmUsXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXNBY3RpdmVcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY3gtdnVpLWNvbGxhcHNlLW1pbmlfX2NvbnRlbnRcIlxuICAgICAgICB9LFxuICAgICAgICBbX3ZtLl90KFwiZGVmYXVsdFwiLCBbX3ZtLl92KFwiQ29sbGFwc2UgY29udGVudC4uLlwiKV0pXSxcbiAgICAgICAgMlxuICAgICAgKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJqZmItYWRkb25zLXBhZ2Ugd3JhcFwiLFxuICAgICAgY2xhc3M6IHsgXCJwcm9jY2VzaW5nLXN0YXRlXCI6IF92bS5wcm9jY2VzaW5nU3RhdGUgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJoMVwiLCB7IHN0YXRpY0NsYXNzOiBcImNzLXZ1aS10aXRsZVwiIH0sIFtcbiAgICAgICAgX3ZtLl92KF92bS5fcyhcIkpldEZvcm1CdWlsZGVyIEFkZG9uc1wiKSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiamZiLWFkZG9ucy1wYWdlX19pbm5lciBjeC12dWktcGFuZWxcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiamZiLWFkZG9ucy1wYWdlX19oZWFkZXJcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJqZmItYWRkb25zLXBhZ2VfX2hlYWRlci1jb250cm9sc1wiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiY3gtdnVpLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uLXN0eWxlXCI6IFwiYWNjZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IFwibWluaVwiLFxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBfdm0uY2hlY2tVcGRhdGVzUHJvY2Vzc2VkXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5jaGVja1BsdWdpbnNVcGRhdGUgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgYXR0cnM6IHsgc2xvdDogXCJsYWJlbFwiIH0sIHNsb3Q6IFwibGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwic3ZnXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uLWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjE0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94OiBcIjAgMCAxNCAxNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwYXRoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJNMTEuNzA4NSAyLjI5MTcxQzEwLjUwMDEgMS4wODMzNyA4Ljg0MTggMC4zMzMzNzQgNy4wMDAxMyAwLjMzMzM3NEMzLjMxNjggMC4zMzMzNzQgMC4zNDE3OTcgMy4zMTY3MSAwLjM0MTc5NyA3LjAwMDA0QzAuMzQxNzk3IDEwLjY4MzQgMy4zMTY4IDEzLjY2NjcgNy4wMDAxMyAxMy42NjY3QzEwLjEwODUgMTMuNjY2NyAxMi43MDAxIDExLjU0MTcgMTMuNDQxOCA4LjY2NjcxSDExLjcwODVDMTEuMDI1MSAxMC42MDg0IDkuMTc1MTMgMTIgNy4wMDAxMyAxMkM0LjI0MTggMTIgMi4wMDAxMyA5Ljc1ODM3IDIuMDAwMTMgNy4wMDAwNEMyLjAwMDEzIDQuMjQxNzEgNC4yNDE4IDIuMDAwMDQgNy4wMDAxMyAyLjAwMDA0QzguMzgzNDYgMi4wMDAwNCA5LjYxNjggMi41NzUwNCAxMC41MTY4IDMuNDgzMzdMNy44MzM0NiA2LjE2NjcxSDEzLjY2NjhWMC4zMzMzNzRMMTEuNzA4NSAyLjI5MTcxWlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IFwiIzAwN0NCQVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIkNoZWNrIEZvciBVcGRhdGVzXCIpXSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImN4LXZ1aS1idXR0b25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAhX3ZtLmlzTGljZW5zZUFjdGl2YXRlZFxuICAgICAgICAgICAgICAgICAgICAgID8gXCJjeC12dWktYnV0dG9uLS1zdHlsZS1hY2NlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgIDogXCJjeC12dWktYnV0dG9uLS1zdHlsZS1kYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNpemU6IFwibWluaVwiIH0sXG4gICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnNob3dMaWNlbnNlUG9wdXAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgYXR0cnM6IHsgc2xvdDogXCJsYWJlbFwiIH0sIHNsb3Q6IFwibGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwic3ZnXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uLWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjE2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxNlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94OiBcIjAgMCAxNiAxNlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwYXRoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJNMTUuNDk4NSAwSDEyLjQ4OTdDMTIuNDE2NiAwIDEyLjM0ODcgMC4wMTU2NzA5IDEyLjI4NiAwLjA0NzAxMjdDMTIuMjMzOCAwLjA2NzkwNzMgMTIuMTg2NyAwLjEwNDQ3MyAxMi4xNDUgMC4xNTY3MDlMNS43NjY5IDYuNDcyMDlDNS42MjA2MyA2LjQ0MDc0IDUuNDYzOTIgNi40MTQ2MyA1LjI5Njc3IDYuMzkzNzNDNS4xMjk2MSA2LjM3Mjg0IDQuOTY3NjggNi4zNjIzOSA0LjgxMDk3IDYuMzYyMzlDNC4xNjMyNCA2LjM2MjM5IDMuNTQ2ODUgNi40ODc3NiAyLjk2MTggNi43Mzg0OUMyLjM3Njc1IDYuOTc4NzggMS44NTk2MSA3LjMyMzU0IDEuNDEwMzggNy43NzI3N0MwLjk2MTE0OSA4LjIyMiAwLjYxMTE2NiA4LjczOTE0IDAuMzYwNDMxIDkuMzI0MTlDMC4xMjAxNDQgOS45MDkyNCAwIDEwLjUzMDkgMCAxMS4xODlDMCAxMS44MzY4IDAuMTIwMTQ0IDEyLjQ1MzIgMC4zNjA0MzEgMTMuMDM4MkMwLjYxMTE2NiAxMy42MjMyIDAuOTYxMTQ5IDE0LjE0MDQgMS40MTAzOCAxNC41ODk2QzEuODU5NjEgMTUuMDM4OSAyLjM3Njc1IDE1LjM4MzYgMi45NjE4IDE1LjYyMzlDMy41NDY4NSAxNS44NzQ2IDQuMTYzMjQgMTYgNC44MTA5NyAxNkM1LjQ2OTE1IDE2IDYuMDkwNzYgMTUuODc0NiA2LjY3NTgxIDE1LjYyMzlDNy4yNjA4NiAxNS4zODM2IDcuNzc4IDE1LjAzODkgOC4yMjcyMyAxNC41ODk2QzguODAxODMgMTQuMDE1IDkuMTk4ODIgMTMuMzQ2NCA5LjQxODIyIDEyLjU4MzdDOS42NDgwNiAxMS44MjExIDkuNjg0NjIgMTEuMDM3NSA5LjUyNzkxIDEwLjIzMzFMMTAuODkxMyA4Ljg2OTc0QzEwLjkzMzEgOC44Mjc5NSAxMC45NjQ0IDguNzgwOTMgMTAuOTg1MyA4LjcyODdDMTEuMDE2NyA4LjY2NjAxIDExLjAzMjMgOC41OTgxMSAxMS4wMzIzIDguNTI0OThWNy4wMjA1N0gxMi41MzY3QzEyLjY5MzQgNy4wMjA1NyAxMi44MTM2IDYuOTczNTYgMTIuODk3MiA2Ljg3OTUzQzEyLjk5MTIgNi43ODU1IDEzLjAzODIgNi42NjUzNiAxMy4wMzgyIDYuNTE5MVY1LjAxNDY5SDE0LjU0MjZDMTQuNjE1NyA1LjAxNDY5IDE0LjY3ODQgNS4wMDQyNCAxNC43MzA3IDQuOTgzMzVDMTQuNzkzMyA0Ljk1MjAxIDE0Ljg1MDggNC45MTAyMiAxNC45MDMgNC44NTc5OEwxNS45MDYgMy44NTUwNEMxNS45MjY5IDMuODEzMjYgMTUuOTQ3OCAzLjc2NjI0IDE1Ljk2ODcgMy43MTQwMUMxNS45ODk2IDMuNjUxMzIgMTYgMy41ODM0MiAxNiAzLjUxMDI4VjAuNTAxNDY5QzE2IDAuMzU1MjA3IDE1Ljk1MyAwLjIzNTA2NCAxNS44NTkgMC4xNDEwMzhDMTUuNzY0OSAwLjA0NzAxMjcgMTUuNjQ0OCAwIDE1LjQ5ODUgMFpNNC45Njc2OCAxMi43ODc1QzQuNzkwMDggMTIuOTY1MSA0LjU5NjggMTMuMDk1NyA0LjM4Nzg2IDEzLjE3OTJDNC4xODkzNiAxMy4yNTI0IDMuOTY0NzQgMTMuMjg4OSAzLjcxNDAxIDEzLjI4ODlDMy40NjMyNyAxMy4yODg5IDMuMjMzNDMgMTMuMjQxOSAzLjAyNDQ5IDEzLjE0NzlDMi44MjU5OSAxMy4wNTM5IDIuNjM3OTQgMTIuOTMzNyAyLjQ2MDMzIDEyLjc4NzVDMi4yODI3MyAxMi42MDk5IDIuMTUyMTQgMTIuNDIxOCAyLjA2ODU2IDEyLjIyMzNDMS45OTU0MyAxMi4wMTQ0IDEuOTU4ODYgMTEuNzg0NSAxLjk1ODg2IDExLjUzMzhDMS45NTg4NiAxMS4yODMxIDIuMDA1ODggMTEuMDU4NCAyLjA5OTkgMTAuODU5OUMyLjE5MzkzIDEwLjY1MSAyLjMxNDA3IDEwLjQ1NzcgMi40NjAzMyAxMC4yODAxQzIuNzg0MiA5Ljk1NjI1IDMuMTkxNjQgOS43OTQzMiAzLjY4MjY2IDkuNzk0MzJDNC4xODQxMyA5Ljc5NDMyIDQuNTk2OCA5Ljk1NjI1IDQuOTIwNjcgMTAuMjgwMUM1LjA5ODI3IDEwLjQ1NzcgNS4yMjM2NCAxMC42NTEgNS4yOTY3NyAxMC44NTk5QzUuMzgwMzUgMTEuMDU4NCA1LjQyMjE0IDExLjI4MzEgNS40MjIxNCAxMS41MzM4QzUuNDIyMTQgMTEuNzg0NSA1LjM4MDM1IDEyLjAxNDQgNS4yOTY3NyAxMi4yMjMzQzUuMjIzNjQgMTIuNDIxOCA1LjExMzk0IDEyLjYwOTkgNC45Njc2OCAxMi43ODc1WlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IFwiI0QzRDNEM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAhX3ZtLmlzTGljZW5zZUFjdGl2YXRlZFxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJBY3RpdmF0ZSBMaWNlbnNlXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uaXNMaWNlbnNlQWN0aXZhdGVkXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW192bS5fdihcIkRlYWN0aXZhdGUgTGljZW5zZVwiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICFfdm0uaXNMaWNlbnNlQWN0aXZhdGVkXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJnby1wcm8tYmFubmVyXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImdvLXByby1iYW5uZXJfX3N1YnRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJGZWF0dXJlcyAmIEludGVncmF0aW9ucyBcIilcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZ28tcHJvLWJhbm5lcl9fdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkV4dGVuZCBmdW5jdGlvbmFsaXR5IHdpdGggUFJPIEFkZG9uc1wiKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiY3gtdnVpLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ28tcHJvLWJhbm5lcl9fYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uLXN0eWxlXCI6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCJtaW5pXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IF92bS5nb1Byb0xpbmssXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRhZy1uYW1lXCI6IFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBcIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgYXR0cnM6IHsgc2xvdDogXCJsYWJlbFwiIH0sIHNsb3Q6IFwibGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIkdvIFByb1wiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAwICE9PSBPYmplY3Qua2V5cyhfdm0uaW5zdGFsbGVkQWRkb25MaXN0KS5sZW5ndGhcbiAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiamZiLWFkZG9uc1wiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiamZiLWFkZG9uc19fbGlzdFwiIH0sXG4gICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5pbnN0YWxsZWRBZGRvbkxpc3QsIGZ1bmN0aW9uKGFkZG9uRGF0YSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcIkFkZG9uSXRlbVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYWRkb24tZGF0YVwiOiBhZGRvbkRhdGEgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgMCAhPT0gT2JqZWN0LmtleXMoX3ZtLmF2YWlsYWJsZUFkZG9uTGlzdCkubGVuZ3RoXG4gICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImpmYi1hZGRvbnNcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImpmYi1hZGRvbnNfX2xpc3RcIiB9LFxuICAgICAgICAgICAgICAgIF92bS5fbChfdm0uYXZhaWxhYmxlQWRkb25MaXN0LCBmdW5jdGlvbihhZGRvbkRhdGEsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJBZGRvbkl0ZW1cIiwge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImFkZG9uLWRhdGFcIjogYWRkb25EYXRhIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImN4LXZ1aS1wb3B1cFwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiamZiLWFkZG9ucy1wYWdlX19saWNlbnNlLXBvcHVwXCIsXG4gICAgICAgICAgYXR0cnM6IHsgZm9vdGVyOiBmYWxzZSwgXCJib2R5LXdpZHRoXCI6IFwiNTQwcHhcIiB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLmxpY2Vuc2VQb3B1cFZpc2libGUsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5saWNlbnNlUG9wdXBWaXNpYmxlID0gJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJsaWNlbnNlUG9wdXBWaXNpYmxlXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImN4LXZ1aS1wb3B1cF9faGVhZGVyLXRpdGxlXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNsb3Q6IFwidGl0bGVcIiB9LFxuICAgICAgICAgICAgICBzbG90OiBcInRpdGxlXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICFfdm0uaXNMaWNlbnNlQWN0aXZhdGVkXG4gICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW192bS5fdihcIkFjdGl2YXRlIExpY2Vuc2VcIildKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5pc0xpY2Vuc2VBY3RpdmF0ZWRcbiAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbX3ZtLl92KFwiRGVhY3RpdmF0ZSBMaWNlbnNlXCIpXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiamZiLWFkZG9ucy1wYWdlX19saWNlbnNlLWZvcm1cIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJjb250ZW50XCIgfSxcbiAgICAgICAgICAgICAgc2xvdDogXCJjb250ZW50XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICFfdm0uaXNMaWNlbnNlQWN0aXZhdGVkXG4gICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJBY3RpdmF0ZSBsaWNlbnNlIGZvciBhdXRvbWF0aWMgdXBkYXRlcyBhbmQgYXdlc29tZSBzdXBwb3J0XCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uaXNMaWNlbnNlQWN0aXZhdGVkXG4gICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJCeSBkZWFjdGl2YXRpbmcgdGhlIGxpY2Vuc2UgeW91IHdpbGwgbm90IGJlIGFibGUgdG8gdXBkYXRlIHRoZSBhZGRvbnNcIlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiY3gtdnVpLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJqZmItYWRkb25zLXBhZ2VfX2xpY2Vuc2UtaW5wdXRcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgc2l6ZTogXCJmdWxsd2lkdGhcIixcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgIGF1dG9mb2N1czogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIFwicHJldmVudC13cmFwXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJKdXN0IHBhc3RlIGl0IGhlcmVcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubGljZW5zZUtleSxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmxpY2Vuc2VLZXkgPSAkJHZcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImxpY2Vuc2VLZXlcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiY3gtdnVpLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImpmYi1hZGRvbnMtcGFnZV9fbGljZW5zZS1hY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uLXN0eWxlXCI6IFwiYWNjZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IFwibWluaVwiLFxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBfdm0ubGljZW5zZVByb2NjZXNpbmdTdGF0ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ubGljZW5zZUFjdGlvbiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBhdHRyczogeyBzbG90OiBcImxhYmVsXCIgfSwgc2xvdDogXCJsYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgIV92bS5pc0xpY2Vuc2VBY3RpdmF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbX3ZtLl92KFwiQWN0aXZhdGVcIildKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5pc0xpY2Vuc2VBY3RpdmF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbX3ZtLl92KFwiRGVhY3RpdmF0ZVwiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiamZiLWFkZG9uc19faGVhZGVyXCIgfSwgW1xuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiY3gtdnVpLXN1YnRpdGxlXCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCJZb3VyIEluc3RhbGxlZCBBZGRvbnNcIilcbiAgICAgIF0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJqZmItYWRkb25zX19oZWFkZXJcIiB9LCBbXG4gICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJjeC12dWktc3VidGl0bGVcIiB9LCBbXG4gICAgICAgIF92bS5fdihcIkFsbCBBdmFpbGFibGUgQWRkb25zXCIpXG4gICAgICBdKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImpmYi1hZGRvbnNfX2l0ZW1cIixcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgIGFjdGl2YXRlZDogX3ZtLmFkZG9uRGF0YS5pc0FjdGl2YXRlZCxcbiAgICAgICAgXCJ1cGRhdGUtYXZhbGlhYmxlXCI6IF92bS51cGRhdGVBY3Rpb25BdmFsaWFibGVcbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiamZiLWFkZG9uc19faXRlbS1pbm5lclwiLFxuICAgICAgICAgIGNsYXNzOiB7IFwicHJvY2Nlc2luZy1zdGF0ZVwiOiBfdm0ucHJvY2Nlc2luZ1N0YXRlIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiamZiLWFkZG9uc19faXRlbS10aHVtYlwiIH0sIFtcbiAgICAgICAgICAgICFfdm0uYWRkb25EYXRhLmlzSW5zdGFsbGVkXG4gICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwcm8tYmFkZ2VcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJzdmdcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI0MFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94OiBcIjAgMCA0MCAyMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJyZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjQwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIyMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByeDogXCI0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IFwiI0VFN0IxNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInBhdGhcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk0xMC42MjUgMTAuODMwMVYxNEg5LjE0MjU4VjUuNDY4NzVIMTIuNDA2MkMxMy4zNTk0IDUuNDY4NzUgMTQuMTE1MiA1LjcxNjggMTQuNjczOCA2LjIxMjg5QzE1LjIzNjMgNi43MDg5OCAxNS41MTc2IDcuMzY1MjMgMTUuNTE3NiA4LjE4MTY0QzE1LjUxNzYgOS4wMTc1OCAxNS4yNDIyIDkuNjY3OTcgMTQuNjkxNCAxMC4xMzI4QzE0LjE0NDUgMTAuNTk3NyAxMy4zNzcgMTAuODMwMSAxMi4zODg3IDEwLjgzMDFIMTAuNjI1Wk0xMC42MjUgOS42NDA2MkgxMi40MDYyQzEyLjkzMzYgOS42NDA2MiAxMy4zMzU5IDkuNTE3NTggMTMuNjEzMyA5LjI3MTQ4QzEzLjg5MDYgOS4wMjE0OCAxNC4wMjkzIDguNjYyMTEgMTQuMDI5MyA4LjE5MzM2QzE0LjAyOTMgNy43MzI0MiAxMy44ODg3IDcuMzY1MjMgMTMuNjA3NCA3LjA5MThDMTMuMzI2MiA2LjgxNDQ1IDEyLjkzOTUgNi42NzE4OCAxMi40NDczIDYuNjY0MDZIMTAuNjI1VjkuNjQwNjJaTTE5Ljk1MzEgMTAuNzEyOUgxOC4zMDA4VjE0SDE2LjgxODRWNS40Njg3NUgxOS44MTg0QzIwLjgwMjcgNS40Njg3NSAyMS41NjI1IDUuNjg5NDUgMjIuMDk3NyA2LjEzMDg2QzIyLjYzMjggNi41NzIyNyAyMi45MDA0IDcuMjEwOTQgMjIuOTAwNCA4LjA0Njg4QzIyLjkwMDQgOC42MTcxOSAyMi43NjE3IDkuMDk1NyAyMi40ODQ0IDkuNDgyNDJDMjIuMjEwOSA5Ljg2NTIzIDIxLjgyODEgMTAuMTYwMiAyMS4zMzU5IDEwLjM2NzJMMjMuMjUyIDEzLjkyMzhWMTRIMjEuNjY0MUwxOS45NTMxIDEwLjcxMjlaTTE4LjMwMDggOS41MjM0NEgxOS44MjQyQzIwLjMyNDIgOS41MjM0NCAyMC43MTQ4IDkuMzk4NDQgMjAuOTk2MSA5LjE0ODQ0QzIxLjI3NzMgOC44OTQ1MyAyMS40MTggOC41NDg4MyAyMS40MTggOC4xMTEzM0MyMS40MTggNy42NTQzIDIxLjI4NzEgNy4zMDA3OCAyMS4wMjU0IDcuMDUwNzhDMjAuNzY3NiA2LjgwMDc4IDIwLjM4MDkgNi42NzE4OCAxOS44NjUyIDYuNjY0MDZIMTguMzAwOFY5LjUyMzQ0Wk0zMS4xMTUyIDkuOTU3MDNDMzEuMTE1MiAxMC43OTMgMzAuOTcwNyAxMS41MjczIDMwLjY4MTYgMTIuMTYwMkMzMC4zOTI2IDEyLjc4OTEgMjkuOTc4NSAxMy4yNzM0IDI5LjQzOTUgMTMuNjEzM0MyOC45MDQzIDEzLjk0OTIgMjguMjg3MSAxNC4xMTcyIDI3LjU4NzkgMTQuMTE3MkMyNi44OTY1IDE0LjExNzIgMjYuMjc5MyAxMy45NDkyIDI1LjczNjMgMTMuNjEzM0MyNS4xOTczIDEzLjI3MzQgMjQuNzc5MyAxMi43OTEgMjQuNDgyNCAxMi4xNjZDMjQuMTg5NSAxMS41NDEgMjQuMDQxIDEwLjgyMDMgMjQuMDM3MSAxMC4wMDM5VjkuNTIzNDRDMjQuMDM3MSA4LjY5MTQxIDI0LjE4MzYgNy45NTcwMyAyNC40NzY2IDcuMzIwMzFDMjQuNzczNCA2LjY4MzU5IDI1LjE4OTUgNi4xOTcyNyAyNS43MjQ2IDUuODYxMzNDMjYuMjYzNyA1LjUyMTQ4IDI2Ljg4MDkgNS4zNTE1NiAyNy41NzYyIDUuMzUxNTZDMjguMjcxNSA1LjM1MTU2IDI4Ljg4NjcgNS41MTk1MyAyOS40MjE5IDUuODU1NDdDMjkuOTYwOSA2LjE4NzUgMzAuMzc3IDYuNjY3OTcgMzAuNjY5OSA3LjI5Njg4QzMwLjk2MjkgNy45MjE4OCAzMS4xMTEzIDguNjUwMzkgMzEuMTE1MiA5LjQ4MjQyVjkuOTU3MDNaTTI5LjYzMjggOS41MTE3MkMyOS42MzI4IDguNTY2NDEgMjkuNDUzMSA3Ljg0MTggMjkuMDkzOCA3LjMzNzg5QzI4LjczODMgNi44MzM5OCAyOC4yMzI0IDYuNTgyMDMgMjcuNTc2MiA2LjU4MjAzQzI2LjkzNTUgNi41ODIwMyAyNi40MzM2IDYuODMzOTggMjYuMDcwMyA3LjMzNzg5QzI1LjcxMDkgNy44Mzc4OSAyNS41MjczIDguNTQ2ODggMjUuNTE5NSA5LjQ2NDg0VjkuOTU3MDNDMjUuNTE5NSAxMC44OTQ1IDI1LjcwMTIgMTEuNjE5MSAyNi4wNjQ1IDEyLjEzMDlDMjYuNDMxNiAxMi42NDI2IDI2LjkzOTUgMTIuODk4NCAyNy41ODc5IDEyLjg5ODRDMjguMjQ0MSAxMi44OTg0IDI4Ljc0OCAxMi42NDg0IDI5LjA5OTYgMTIuMTQ4NEMyOS40NTUxIDExLjY0ODQgMjkuNjMyOCAxMC45MTggMjkuNjMyOCA5Ljk1NzAzVjkuNTExNzJaXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IFwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBfdm0uYWRkb25EYXRhLnRodW1iLCBhbHQ6IFwiXCIgfSB9KVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJqZmItYWRkb25zX19pdGVtLWluZm9cIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImpmYi1hZGRvbnNfX2l0ZW0tbmFtZVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uYWRkb25EYXRhLm5hbWUpKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidmVyc2lvblwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5hZGRvbkRhdGEuY3VycmVudFZlcnNpb24pKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJqZmItYWRkb25zX19pdGVtLXVwZGF0ZVwiIH0sIFtcbiAgICAgICAgICAgICAgIV92bS51cGRhdGVBY3Rpb25BdmFsaWFibGVcbiAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtfdm0uX3YoXCJZb3VyIHBsdWdpbiBpcyB1cCB0byBkYXRlXCIpXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0udXBkYXRlQWN0aW9uQXZhbGlhYmxlXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcblxcdFxcdFxcdFxcdFxcdFZlcnNpb24gXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImxhdGVzdC12ZXJzaW9uXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uYWRkb25EYXRhLnZlcnNpb24pKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBhdmFpbGFibGVcXG5cXHRcXHRcXHRcXHRcXHRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgIV92bS5hY3RpdmF0ZUxpY2VuY2VBY3Rpb25BdmFsaWFibGVcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjeC12dWktYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b24tc3R5bGVcIjogXCJsaW5rLWFjY2VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBcImxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogX3ZtLnVwZGF0ZVBsdWdpblByb2Nlc3NlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0udXBkYXRlUGx1Z2luIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBzbG90OiBcImxhYmVsXCIgfSwgc2xvdDogXCJsYWJlbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcInNwYW5cIiwgW192bS5fdihcIlVwZGF0ZSBOb3dcIildKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5hY3RpdmF0ZUxpY2VuY2VBY3Rpb25BdmFsaWFibGVcbiAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImpmYi1hZGRvbnNfX2l0ZW0tbGljZW5zZVwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiTGljZW5zZSBub3QgYWN0aXZhdGVkXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiY3gtdnVpLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYnV0dG9uLXN0eWxlXCI6IFwibGluay1hY2NlbnRcIiwgc2l6ZTogXCJsaW5rXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uYWN0aXZhdGVMaWNlbnNlIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBzbG90OiBcImxhYmVsXCIgfSwgc2xvdDogXCJsYWJlbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcInNwYW5cIiwgW192bS5fdihcIkFjdGl2YXRlIE5vd1wiKV0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJqZmItYWRkb25zX19pdGVtLWRlc2NcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLmFkZG9uRGF0YS5kZXNjKSB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBfdm0ubGVhcm5Nb3JlVXJsLCB0YXJnZXQ6IFwiX2JsYW5rXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiTGVhcm4gTW9yZVwiKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiamZiLWFkZG9uc19faXRlbS1hY3Rpb25zXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS5pbnN0YWxsQWN0aW9uQXZhbGlhYmxlXG4gICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiY3gtdnVpLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uLXN0eWxlXCI6IFwibGluay1hY2NlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCJsaW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IF92bS5hY3Rpb25QbHVnaW5Qcm9jZXNzZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmluc3RhbGxQbHVnaW4gfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNsb3Q6IFwibGFiZWxcIiB9LCBzbG90OiBcImxhYmVsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwic3BhblwiLCBbX3ZtLl92KFwiSW5zdGFsbCBBZGRvblwiKV0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS5hY3RpdmF0ZUFjdGlvbkF2YWxpYWJsZVxuICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImN4LXZ1aS1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvbi1zdHlsZVwiOiBcImxpbmstYWNjZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IFwibGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBfdm0uYWN0aW9uUGx1Z2luUHJvY2Vzc2VkXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5hY3RpdmF0ZVBsdWdpbiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgc2xvdDogXCJsYWJlbFwiIH0sIHNsb3Q6IFwibGFiZWxcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJBY3RpdmF0ZSBBZGRvblwiKV0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS5kZWFjdGl2YXRlQWN0aW9uQXZhbGlhYmxlXG4gICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiY3gtdnVpLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uLXN0eWxlXCI6IFwibGluay1lcnJvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBcImxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogX3ZtLmFjdGlvblBsdWdpblByb2Nlc3NlZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uZGVhY3RpdmF0ZVBsdWdpbiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgc2xvdDogXCJsYWJlbFwiIH0sIHNsb3Q6IFwibGFiZWxcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJEZWFjdGl2YXRlIEFkZG9uXCIpXSldXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdXG4gICAgICApXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiZnVuY3Rpb24gb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBleGNsdWRlKSB7XG4gIHZhciB0YXJnZXQgPSB7fVxuICBmb3IgKHZhciBrIGluIG9iailcbiAgICBpZiAoXG4gICAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrKSAmJlxuICAgICAgZXhjbHVkZS5pbmRleE9mKGspID09PSAtMVxuICAgIClcbiAgICAgIHRhcmdldFtrXSA9IG9ialtrXVxuICByZXR1cm4gdGFyZ2V0XG59XG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiamV0LWZiLXNldHRpbmdzLXBhZ2Ugd3JhcFwiIH0sIFtcbiAgICBfYyhcImgxXCIsIHsgc3RhdGljQ2xhc3M6IFwiY3MtdnVpLXRpdGxlXCIgfSwgW1xuICAgICAgX3ZtLl92KF92bS5fcyhcIkpldEZvcm1CdWlsZGVyIFNldHRpbmdzXCIpKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJjeC12dWktcGFuZWxcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImN4LXZ1aS10YWJzXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgXCJpbi1wYW5lbFwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5hY3RpdmVUYWJTbHVnLFxuICAgICAgICAgICAgICBsYXlvdXQ6IFwidmVydGljYWxcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgX3ZtLl9sKF92bS50YWJzLCBmdW5jdGlvbihyZWYsIGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgZGlzcGxheUJ1dHRvbiA9IHJlZi5kaXNwbGF5QnV0dG9uXG4gICAgICAgICAgICBpZiAoZGlzcGxheUJ1dHRvbiA9PT0gdm9pZCAwKSBkaXNwbGF5QnV0dG9uID0gdHJ1ZVxuICAgICAgICAgICAgdmFyIHJlc3QgPSBvYmplY3RXaXRob3V0UHJvcGVydGllcyhyZWYsIFtcImRpc3BsYXlCdXR0b25cIl0pXG4gICAgICAgICAgICB2YXIgdGFiID0gcmVzdFxuICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICBcImN4LXZ1aS10YWJzLXBhbmVsXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IHRhYi5jb21wb25lbnQubmFtZSxcbiAgICAgICAgICAgICAgICBhdHRyczogeyBuYW1lOiB0YWIuY29tcG9uZW50Lm5hbWUsIGxhYmVsOiB0YWIudGl0bGUgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImtlZXAtYWxpdmVcIixcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2ModGFiLmNvbXBvbmVudCwge1xuICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJ0YWJDb21wb25lbnRzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmVmSW5Gb3I6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgdGFnOiBcImNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGluY29taW5nOiBfdm0uZ2V0SW5jb21pbmcodGFiLmNvbXBvbmVudC5uYW1lKSB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBkaXNwbGF5QnV0dG9uXG4gICAgICAgICAgICAgICAgICA/IF9jKFwiY3gtdnVpLWJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uLXN0eWxlXCI6IFwiYWNjZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBfdm0ubG9hZGluZ1RhYlt0YWIuY29tcG9uZW50Lm5hbWVdXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uU2F2ZVRhYihpbmRleCwgdGFiLmNvbXBvbmVudC5uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJTYXZlXCIpXSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm94eTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJzZWN0aW9uXCIsXG4gICAgW1xuICAgICAgX2MoXCJjeC12dWktaW5wdXRcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGxhYmVsOiBfdm0ubGFiZWwuY2xpZW50X2lkLFxuICAgICAgICAgIFwid3JhcHBlci1jc3NcIjogW1wiZXF1YWx3aWR0aFwiXSxcbiAgICAgICAgICBzaXplOiBcImZ1bGx3aWR0aFwiXG4gICAgICAgIH0sXG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgdmFsdWU6IF92bS5zdG9yYWdlLmNsaWVudF9pZCxcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICBfdm0uJHNldChfdm0uc3RvcmFnZSwgXCJjbGllbnRfaWRcIiwgJCR2KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJzdG9yYWdlLmNsaWVudF9pZFwiXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiY3gtdnVpLWlucHV0XCIsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBsYWJlbDogX3ZtLmxhYmVsLnNlY3JldCxcbiAgICAgICAgICBcIndyYXBwZXItY3NzXCI6IFtcImVxdWFsd2lkdGhcIl0sXG4gICAgICAgICAgc2l6ZTogXCJmdWxsd2lkdGhcIlxuICAgICAgICB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0uc3RvcmFnZS5zZWNyZXQsXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnN0b3JhZ2UsIFwic2VjcmV0XCIsICQkdilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwic3RvcmFnZS5zZWNyZXRcIlxuICAgICAgICB9XG4gICAgICB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFwiY3gtdnVpLWlucHV0XCIsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBsYWJlbDogX3ZtLmxhYmVsLmFwaV9rZXksXG4gICAgICAgICAgXCJ3cmFwcGVyLWNzc1wiOiBbXCJlcXVhbHdpZHRoXCJdLFxuICAgICAgICAgIHNpemU6IFwiZnVsbHdpZHRoXCJcbiAgICAgICAgfSxcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICB2YWx1ZTogX3ZtLmFwaV9rZXksXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLmFwaV9rZXkgPSAkJHZcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwiYXBpX2tleVwiXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiY3gtdnVpLWlucHV0XCIsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBsYWJlbDogX3ZtLmxhYmVsLmFwaV91cmwsXG4gICAgICAgICAgXCJ3cmFwcGVyLWNzc1wiOiBbXCJlcXVhbHdpZHRoXCJdLFxuICAgICAgICAgIHNpemU6IFwiZnVsbHdpZHRoXCJcbiAgICAgICAgfSxcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICB2YWx1ZTogX3ZtLmFwaV91cmwsXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLmFwaV91cmwgPSAkJHZcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwiYXBpX3VybFwiXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImZiLWRlc2NyaXB0aW9uXCIgfSwgW1xuICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5oZWxwLmFwaVByZWYpICsgXCIgXCIpLFxuICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBfdm0uaGVscC5hcGlMaW5rLCB0YXJnZXQ6IFwiX2JsYW5rXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uaGVscC5hcGlMaW5rTGFiZWwpKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcImN4LXZ1aS1pbnB1dFwiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgbGFiZWw6IF92bS5sYWJlbC5rZXksXG4gICAgICAgICAgXCJ3cmFwcGVyLWNzc1wiOiBbXCJlcXVhbHdpZHRoXCJdLFxuICAgICAgICAgIHNpemU6IFwiZnVsbHdpZHRoXCJcbiAgICAgICAgfSxcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICB2YWx1ZTogX3ZtLmtleSxcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICBfdm0ua2V5ID0gJCR2XG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcImtleVwiXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiY3gtdnVpLWlucHV0XCIsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBsYWJlbDogX3ZtLmxhYmVsLnNlY3JldCxcbiAgICAgICAgICBcIndyYXBwZXItY3NzXCI6IFtcImVxdWFsd2lkdGhcIl0sXG4gICAgICAgICAgc2l6ZTogXCJmdWxsd2lkdGhcIlxuICAgICAgICB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0uc2VjcmV0LFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgIF92bS5zZWNyZXQgPSAkJHZcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwic2VjcmV0XCJcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmItZGVzY3JpcHRpb25cIiB9LCBbXG4gICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmhlbHAuYXBpUHJlZikgKyBcIiBcIiksXG4gICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IF92bS5oZWxwLmFwaUxpbmssIHRhcmdldDogXCJfYmxhbmtcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5oZWxwLmFwaUxpbmtMYWJlbCkpXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImN4LXZ1aS1pbnB1dFwiLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIGxhYmVsOiBfdm0ubGFiZWwuYXBpX2tleSxcbiAgICAgIFwid3JhcHBlci1jc3NcIjogW1wiZXF1YWx3aWR0aFwiXSxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBfdm0uaGVscC5hcGlQcmVmICtcbiAgICAgICAgJyA8YSBocmVmPVwiJyArXG4gICAgICAgIF92bS5oZWxwLmFwaUxpbmsgK1xuICAgICAgICAnXCIgdGFyZ2V0PVwiX2JsYW5rXCI+JyArXG4gICAgICAgIF92bS5oZWxwLmFwaUxpbmtMYWJlbCArXG4gICAgICAgIFwiPC9hPlwiLFxuICAgICAgc2l6ZTogXCJmdWxsd2lkdGhcIlxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiBfdm0uYXBpX2tleSxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgX3ZtLmFwaV9rZXkgPSAkJHZcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcImFwaV9rZXlcIlxuICAgIH1cbiAgfSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiY3gtdnVpLWlucHV0XCIsIHtcbiAgICBhdHRyczoge1xuICAgICAgbGFiZWw6IF92bS5sYWJlbC5hcGlfa2V5LFxuICAgICAgXCJ3cmFwcGVyLWNzc1wiOiBbXCJlcXVhbHdpZHRoXCJdLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIF92bS5oZWxwLmFwaVByZWYgK1xuICAgICAgICAnIDxhIGhyZWY9XCInICtcbiAgICAgICAgX3ZtLmhlbHAuYXBpTGluayArXG4gICAgICAgICdcIiB0YXJnZXQ9XCJfYmxhbmtcIj4nICtcbiAgICAgICAgX3ZtLmhlbHAuYXBpTGlua0xhYmVsICtcbiAgICAgICAgXCI8L2E+XCIsXG4gICAgICBzaXplOiBcImZ1bGx3aWR0aFwiXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IF92bS5hcGlfa2V5LFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uYXBpX2tleSA9ICQkdlxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwiYXBpX2tleVwiXG4gICAgfVxuICB9KVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJzZWN0aW9uXCIsXG4gICAgW1xuICAgICAgX2MoXCJjeC12dWktc3dpdGNoZXJcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIG5hbWU6IFwidXNlX2dhdGV3YXlzXCIsXG4gICAgICAgICAgXCJ3cmFwcGVyLWNzc1wiOiBbXCJlcXVhbHdpZHRoXCJdLFxuICAgICAgICAgIGxhYmVsOiBfdm0ubGFiZWwudXNlX2dhdGV3YXlzLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBfdm0uaGVscC51c2VfZ2F0ZXdheXMsXG4gICAgICAgICAgdmFsdWU6IF92bS5zdG9yYWdlLnVzZV9nYXRld2F5c1xuICAgICAgICB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdm0uY2hhbmdlVmFsKFwidXNlX2dhdGV3YXlzXCIsICRldmVudClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5zdG9yYWdlLnVzZV9nYXRld2F5c1xuICAgICAgICA/IF9jKFwiY3gtdnVpLXN3aXRjaGVyXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIG5hbWU6IFwiZW5hYmxlX3Rlc3RfbW9kZVwiLFxuICAgICAgICAgICAgICBcIndyYXBwZXItY3NzXCI6IFtcImVxdWFsd2lkdGhcIl0sXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBfdm0uaGVscC5lbmFibGVfdGVzdF9tb2RlLFxuICAgICAgICAgICAgICBsYWJlbDogX3ZtLmxhYmVsLmVuYWJsZV90ZXN0X21vZGUsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uc3RvcmFnZS5lbmFibGVfdGVzdF9tb2RlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2hhbmdlVmFsKFwiZW5hYmxlX3Rlc3RfbW9kZVwiLCAkZXZlbnQpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5zdG9yYWdlLnVzZV9nYXRld2F5c1xuICAgICAgICA/IFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImN4LXZ1aS1pbm5lci1wYW5lbFwiIH0sXG4gICAgICAgICAgICAgIF92bS5fbChfdm0uZ2F0ZXdheXMsIGZ1bmN0aW9uKHRhYiwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICBcIkN4VnVpQ29sbGFwc2VNaW5pXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogdGFiLmNvbXBvbmVudC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIFwid2l0aC1wYW5lbFwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGRlc2M6IHRhYi5kZXNjIHx8IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHRhYi50aXRsZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImtlZXAtYWxpdmVcIixcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyh0YWIuY29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJnYXRld2F5c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZWZJbkZvcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiBcImNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluY29taW5nOiBfdm0uZ2V0SW5jb21pbmcodGFiLmNvbXBvbmVudC5uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImN4LXZ1aS1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvbi1zdHlsZVwiOiBcImFjY2VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBfdm0ubG9hZGluZ0dhdGV3YXlzW3RhYi5jb21wb25lbnQubmFtZV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vblNhdmVHYXRld2F5KGluZGV4LCB0YWIuY29tcG9uZW50Lm5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBzbG90OiBcImxhYmVsXCIgfSwgc2xvdDogXCJsYWJlbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJTYXZlXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgXVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciwgLyogc2VydmVyIG9ubHkgKi9cbiAgc2hhZG93TW9kZSAvKiB2dWUtY2xpIG9ubHkgKi9cbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgKG9wdGlvbnMuZnVuY3Rpb25hbCA/IHRoaXMucGFyZW50IDogdGhpcykuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdFxuICAgICAgICApXG4gICAgICB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9uYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BZGRvbnNQYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMWJjNzNkZTFcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BZGRvbnNQYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FkZG9uc1BhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FkZG9uSXRlbS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjVmMjc4Mjg2XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRkb25JdGVtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FkZG9uSXRlbS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiAgTW9kaWZpZWQgYnkgRXZhbiBZb3UgQHl5eDk5MDgwM1xuKi9cblxuaW1wb3J0IGxpc3RUb1N0eWxlcyBmcm9tICcuL2xpc3RUb1N0eWxlcydcblxudmFyIGhhc0RvY3VtZW50ID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuXG5pZiAodHlwZW9mIERFQlVHICE9PSAndW5kZWZpbmVkJyAmJiBERUJVRykge1xuICBpZiAoIWhhc0RvY3VtZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICd2dWUtc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQuICcgK1xuICAgIFwiVXNlIHsgdGFyZ2V0OiAnbm9kZScgfSBpbiB5b3VyIFdlYnBhY2sgY29uZmlnIHRvIGluZGljYXRlIGEgc2VydmVyLXJlbmRlcmluZyBlbnZpcm9ubWVudC5cIlxuICApIH1cbn1cblxuLypcbnR5cGUgU3R5bGVPYmplY3QgPSB7XG4gIGlkOiBudW1iZXI7XG4gIHBhcnRzOiBBcnJheTxTdHlsZU9iamVjdFBhcnQ+XG59XG5cbnR5cGUgU3R5bGVPYmplY3RQYXJ0ID0ge1xuICBjc3M6IHN0cmluZztcbiAgbWVkaWE6IHN0cmluZztcbiAgc291cmNlTWFwOiA/c3RyaW5nXG59XG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7LypcbiAgW2lkOiBudW1iZXJdOiB7XG4gICAgaWQ6IG51bWJlcixcbiAgICByZWZzOiBudW1iZXIsXG4gICAgcGFydHM6IEFycmF5PChvYmo/OiBTdHlsZU9iamVjdFBhcnQpID0+IHZvaWQ+XG4gIH1cbiovfVxuXG52YXIgaGVhZCA9IGhhc0RvY3VtZW50ICYmIChkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0pXG52YXIgc2luZ2xldG9uRWxlbWVudCA9IG51bGxcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMFxudmFyIGlzUHJvZHVjdGlvbiA9IGZhbHNlXG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHt9XG52YXIgb3B0aW9ucyA9IG51bGxcbnZhciBzc3JJZEtleSA9ICdkYXRhLXZ1ZS1zc3ItaWQnXG5cbi8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxudmFyIGlzT2xkSUUgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAvbXNpZSBbNi05XVxcYi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFN0eWxlc0NsaWVudCAocGFyZW50SWQsIGxpc3QsIF9pc1Byb2R1Y3Rpb24sIF9vcHRpb25zKSB7XG4gIGlzUHJvZHVjdGlvbiA9IF9pc1Byb2R1Y3Rpb25cblxuICBvcHRpb25zID0gX29wdGlvbnMgfHwge31cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBsaXN0KVxuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuICAgIHZhciBtYXlSZW1vdmUgPSBbXVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICAgIGRvbVN0eWxlLnJlZnMtLVxuICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpXG4gICAgfVxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIG5ld0xpc3QpXG4gICAgICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlcyA9IFtdXG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV1cbiAgICAgIGlmIChkb21TdHlsZS5yZWZzID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXSgpXG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzIC8qIEFycmF5PFN0eWxlT2JqZWN0PiAqLykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgIGRvbVN0eWxlLnJlZnMrK1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKVxuICAgICAgfVxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBpZiAoZG9tU3R5bGUucGFydHMubGVuZ3RoID4gaXRlbS5wYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMubGVuZ3RoID0gaXRlbS5wYXJ0cy5sZW5ndGhcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW11cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7IGlkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHMgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKCkge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICBzdHlsZUVsZW1lbnQudHlwZSA9ICd0ZXh0L2NzcydcbiAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpXG4gIHJldHVybiBzdHlsZUVsZW1lbnRcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgdmFyIHVwZGF0ZSwgcmVtb3ZlXG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdHlsZVsnICsgc3NySWRLZXkgKyAnfj1cIicgKyBvYmouaWQgKyAnXCJdJylcblxuICBpZiAoc3R5bGVFbGVtZW50KSB7XG4gICAgaWYgKGlzUHJvZHVjdGlvbikge1xuICAgICAgLy8gaGFzIFNTUiBzdHlsZXMgYW5kIGluIHByb2R1Y3Rpb24gbW9kZS5cbiAgICAgIC8vIHNpbXBseSBkbyBub3RoaW5nLlxuICAgICAgcmV0dXJuIG5vb3BcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaGFzIFNTUiBzdHlsZXMgYnV0IGluIGRldiBtb2RlLlxuICAgICAgLy8gZm9yIHNvbWUgcmVhc29uIENocm9tZSBjYW4ndCBoYW5kbGUgc291cmNlIG1hcCBpbiBzZXJ2ZXItcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlIHRhZ3MgLSBzb3VyY2UgbWFwcyBpbiA8c3R5bGU+IG9ubHkgd29ya3MgaWYgdGhlIHN0eWxlIHRhZyBpc1xuICAgICAgLy8gY3JlYXRlZCBhbmQgaW5zZXJ0ZWQgZHluYW1pY2FsbHkuIFNvIHdlIHJlbW92ZSB0aGUgc2VydmVyIHJlbmRlcmVkXG4gICAgICAvLyBzdHlsZXMgYW5kIGluamVjdCBuZXcgb25lcy5cbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICBpZiAoaXNPbGRJRSkge1xuICAgIC8vIHVzZSBzaW5nbGV0b24gbW9kZSBmb3IgSUU5LlxuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrXG4gICAgc3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpKVxuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKVxuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpXG4gIH0gZWxzZSB7XG4gICAgLy8gdXNlIG11bHRpLXN0eWxlLXRhZyBtb2RlIGluIGFsbCBvdGhlciBjYXNlc1xuICAgIHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpXG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudClcbiAgICByZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKG9iailcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuICAgICAgICAgIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG4gICAgICAgICAgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpXG4gICAgfVxuICB9XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXVxuXG4gIHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJylcbiAgfVxufSkoKVxuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzXG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpXG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpXG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2Rlc1xuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSlcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlRWxlbWVudCwgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzXG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcFxuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpXG4gIH1cbiAgaWYgKG9wdGlvbnMuc3NySWQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKHNzcklkS2V5LCBvYmouaWQpXG4gIH1cblxuICBpZiAoc291cmNlTWFwKSB7XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kZXZ0b29scy9kb2NzL2phdmFzY3JpcHQtZGVidWdnaW5nXG4gICAgLy8gdGhpcyBtYWtlcyBzb3VyY2UgbWFwcyBpbnNpZGUgc3R5bGUgdGFncyB3b3JrIHByb3Blcmx5IGluIENocm9tZVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZVVSTD0nICsgc291cmNlTWFwLnNvdXJjZXNbMF0gKyAnICovJ1xuICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LCcgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgJyAqLydcbiAgfVxuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3NcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZClcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpXG4gIH1cbn1cbiIsIi8qKlxuICogVHJhbnNsYXRlcyB0aGUgbGlzdCBmb3JtYXQgcHJvZHVjZWQgYnkgY3NzLWxvYWRlciBpbnRvIHNvbWV0aGluZ1xuICogZWFzaWVyIHRvIG1hbmlwdWxhdGUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAocGFyZW50SWQsIGxpc3QpIHtcbiAgdmFyIHN0eWxlcyA9IFtdXG4gIHZhciBuZXdTdHlsZXMgPSB7fVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV1cbiAgICB2YXIgaWQgPSBpdGVtWzBdXG4gICAgdmFyIGNzcyA9IGl0ZW1bMV1cbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdXG4gICAgdmFyIHNvdXJjZU1hcCA9IGl0ZW1bM11cbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGlkOiBwYXJlbnRJZCArICc6JyArIGksXG4gICAgICBjc3M6IGNzcyxcbiAgICAgIG1lZGlhOiBtZWRpYSxcbiAgICAgIHNvdXJjZU1hcDogc291cmNlTWFwXG4gICAgfVxuICAgIGlmICghbmV3U3R5bGVzW2lkXSkge1xuICAgICAgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHsgaWQ6IGlkLCBwYXJ0czogW3BhcnRdIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KVxuICAgIH1cbiAgfVxuICByZXR1cm4gc3R5bGVzXG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFNldHRpbmdzUGFnZSBmcm9tIFwiLi9wYWdlcy9zZXR0aW5ncy9TZXR0aW5nc1BhZ2VcIjtcclxuaW1wb3J0IEFkZG9uc1BhZ2UgZnJvbSBcIi4vcGFnZXMvYWRkb25zL0FkZG9uc1BhZ2VcIjtcclxuXHJcbiggKCkgPT4ge1xyXG5cdGNvbnN0IHByZWYgPSAnamV0LWZvcm0tYnVpbGRlcl9wYWdlXyc7XHJcblxyXG5cdGNvbnN0IHsgYXBwbHlGaWx0ZXJzIH0gPSB3cC5ob29rcztcclxuXHJcblx0Y29uc3QgcGFnZXMgPSBhcHBseUZpbHRlcnMoICdqZXQuZmIucmVnaXN0ZXIuYWRtaW4tcGFnZXMnLCBbXHJcblx0XHRTZXR0aW5nc1BhZ2UsXHJcblx0XHRBZGRvbnNQYWdlXHJcblx0XSApXHJcblxyXG5cdHBhZ2VzLmZvckVhY2goIFBhZ2VDb21wb25lbnQgPT4ge1xyXG5cdFx0Y29uc3QgcGFnZU5hbWUgPSAoIHByZWYgKyBQYWdlQ29tcG9uZW50Lm5hbWUgKTtcclxuXHJcblx0XHRpZiAoIHdpbmRvdy5wYWdlbm93ID09PSBwYWdlTmFtZSApIHtcclxuXHRcdFx0bmV3IFZ1ZSgge1xyXG5cdFx0XHRcdGVsOiAnIycgKyBwcmVmICsgUGFnZUNvbXBvbmVudC5uYW1lLFxyXG5cdFx0XHRcdHJlbmRlcjogaCA9PiBoKCBQYWdlQ29tcG9uZW50IClcclxuXHRcdFx0fSApO1xyXG5cdFx0fVxyXG5cdH0gKVxyXG5cclxufSkoKVxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQWJBO0FBa0JBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBNUJBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNpR0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBZkE7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUE1Q0E7QUE4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFaQTtBQUNBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBdERBO0FBd0RBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUF4Q0E7QUEwQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBN0xBO0FBMUVBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBOUNBO0FBaURBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQVJBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQTdEQTtBQStEQTtBQS9GQTtBQTlEQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFMQTtBQWhCQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFEQTtBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTEE7QUFuQkE7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFSQTtBQW5CQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQVJBO0FBbkJBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBUEE7QUFqQkE7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFQQTtBQWpCQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQytCQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQURBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFmQTtBQTlCQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7QUNwRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQU1BO0FBQ0E7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBM0RBO0FBREE7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7OztBQ1BBO0FBRUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7OztBQ1BBO0FBRUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7OztBQ1JBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBS0E7QUFOQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7OztBQ2xFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBa0JBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFrQkE7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWtCQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBa0JBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFrQkE7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWtCQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBa0JBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFrQkE7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWtCQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBa0JBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBOzs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBOzs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBOzs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0E7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7OztBQ3JGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7O0FDNVRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7QUNsT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7O0FDbEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7OztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7OztBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7OztBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7OztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7OztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7O0FDNUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7O0FDbkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7QUMvTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQ0E7QUFFQTs7OztBIiwic291cmNlUm9vdCI6IiJ9