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
    isLicenseMode: function isLicenseMode() {
      return '' !== window.JetFBPageConfig.licenseMode ? true : false;
    },
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
      return !this.$parent.isLicenseActivated && this.$parent.isLicenseMode ? true : false;
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
    updateAvaliable: function updateAvaliable() {
      return this.addonData['updateAvaliable'] ? true : false;
    },
    isLicenseMode: function isLicenseMode() {
      return this.$parent.isLicenseMode;
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
      if (this.updateAvaliable) {
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
          action: "jfb_addon_".concat(self.actionPlugin, "_action"),
          data: {
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

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  methods: {
    saveByAjax: function saveByAjax(currentTab, tabSlug) {
      var self = this;
      var ajaxRequest = {};

      try {
        ajaxRequest = this.getAjaxObject(currentTab, tabSlug);
      } catch (error) {
        if (!error) {
          return;
        }

        if ('object' === _typeof(error.noticeOptions)) {
          self.$CXNotice.add(_objectSpread({
            message: 'Invalid request data.',
            type: 'error',
            duration: 2000
          }, error.noticeOptions));
          return;
        }

        self.$CXNotice.add({
          message: error,
          type: 'error',
          duration: 2000
        });
        return;
      }

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
    },
    getAjaxObject: function getAjaxObject(currentTab, tabSlug) {
      var ajaxRequest = _objectSpread({
        url: window.ajaxurl,
        type: 'POST',
        dataType: 'json'
      }, currentTab.getRequestOnSave());

      ajaxRequest.data = _objectSpread({
        action: "jet_fb_save_tab__".concat(tabSlug)
      }, ajaxRequest.data);
      return ajaxRequest;
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
___CSS_LOADER_EXPORT___.push([module.id, ".proccesing-state {\n  opacity: 0.5;\n  pointer-events: none;\n}\n.jfb-addons-page__inner {\n  padding: 30px;\n  height: 100%;\n}\n.jfb-addons-page__header {\n  margin-bottom: 30px;\n}\n.jfb-addons-page__header-controls {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  padding-bottom: 15px;\n  border-bottom: 1px solid #DCDCDD;\n}\n.jfb-addons-page__header-controls > .cx-vui-button {\n  margin-left: 10px;\n}\n.jfb-addons-page .cx-vui-button {\n  font-size: 13px;\n  font-weight: 400;\n  background-color: transparent;\n}\n.jfb-addons-page .cx-vui-button .button-icon {\n  margin-right: 5px;\n}\n.jfb-addons-page .cx-vui-button--style-accent {\n  color: #007cba;\n  box-shadow: inset 0 0 0 1px #007cba;\n}\n.jfb-addons-page .cx-vui-button--style-accent:hover {\n  background-color: #007cba12;\n}\n.jfb-addons-page .cx-vui-button--style-accent .button-icon path {\n  fill: #007cba;\n}\n.jfb-addons-page .cx-vui-button--style-danger {\n  color: #d6336c;\n  box-shadow: inset 0 0 0 1px #d6336c;\n}\n.jfb-addons-page .cx-vui-button--style-danger:hover {\n  background-color: #d6336c12;\n}\n.jfb-addons-page .cx-vui-button--style-danger .button-icon path {\n  fill: #d6336c;\n}\n.jfb-addons-page .cx-vui-button__content > span {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.jfb-addons-page .cx-vui-popup__header {\n  padding-bottom: 15px;\n  border-bottom: 1px solid #DCDCDD;\n  margin-bottom: 30px;\n}\n.jfb-addons-page .cx-vui-popup__header-title {\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 36px;\n  color: #23282D;\n}\n.jfb-addons-page__license-form {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: stretch;\n}\n.jfb-addons-page__license-form > span {\n  margin-bottom: 10px;\n}\n.jfb-addons-page__license-input {\n  margin-bottom: 10px;\n}\n.jfb-addons-page .go-pro-banner {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 24px 0;\n  border-bottom: 1px solid #DCDCDD;\n}\n.jfb-addons-page .go-pro-banner__subtitle {\n  font-size: 18px;\n  line-height: 1.25;\n  font-weight: 500;\n  color: #007CBA;\n  margin-bottom: 5px;\n}\n.jfb-addons-page .go-pro-banner__title {\n  font-size: 24px;\n  line-height: 1.25;\n  font-weight: 500;\n  color: #23282D;\n  margin-bottom: 20px;\n}\n.jfb-addons-page .go-pro-banner__button {\n  color: white;\n  background-color: #007CBA;\n}", "",{"version":3,"sources":["webpack://./admin/pages/addons/AddonsPage.vue","webpack://./../AddonsPage.vue"],"names":[],"mappings":"AA6ZA;EACC,YAAA;EACA,oBAAA;AC5ZD;ADiaC;EACC,aAAA;EACA,YAAA;AC9ZF;ADiaC;EACC,mBAAA;AC/ZF;ADkaC;EACC,aAAA;EACA,yBAAA;EACA,mBAAA;EACA,oBAAA;EACA,gCAAA;AChaF;ADkaE;EACC,iBAAA;AChaH;ADoaC;EACC,eAAA;EACA,gBAAA;EACA,6BAAA;AClaF;ADoaE;EACC,iBAAA;AClaH;ADqaE;EACC,cAAA;EACA,mCAAA;ACnaH;ADqaG;EACC,2BAAA;ACnaJ;ADuaI;EACC,aAAA;ACraL;AD0aE;EACC,cAAA;EACA,mCAAA;ACxaH;AD0aG;EACC,2BAAA;ACxaJ;AD4aI;EACC,aAAA;AC1aL;ADgbG;EACC,aAAA;EACA,uBAAA;EACA,mBAAA;AC9aJ;ADobE;EACC,oBAAA;EACA,gCAAA;EACA,mBAAA;AClbH;ADqbE;EACC,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cAAA;ACnbH;AD2bC;EACC,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,oBAAA;ACzbF;AD2bE;EACC,mBAAA;ACzbH;AD6bC;EACC,mBAAA;AC3bF;AD8bC;EACC,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;EACA,gCAAA;AC5bF;AD8bE;EACC,eAAA;EACA,iBAAA;EACA,gBAAA;EACA,cAAA;EACA,kBAAA;AC5bH;AD+bE;EACC,eAAA;EACA,iBAAA;EACA,gBAAA;EACA,cAAA;EACA,mBAAA;AC7bH;ADgcE;EACC,YAAA;EACA,yBAAA;AC9bH","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.proccesing-state {\n\topacity: 0.5;\n\tpointer-events: none;\n}\n\n.jfb-addons-page {\n\n\t&__inner {\n\t\tpadding: 30px;\n\t\theight: 100%;\n\t}\n\n\t&__header {\n\t\tmargin-bottom: 30px;\n\t}\n\n\t&__header-controls {\n\t\tdisplay: flex;\n\t\tjustify-content: flex-end;\n\t\talign-items: center;\n\t\tpadding-bottom: 15px;\n\t\tborder-bottom: 1px solid #DCDCDD;\n\n\t\t> .cx-vui-button {\n\t\t\tmargin-left: 10px;\n\t\t}\n\t}\n\n\t.cx-vui-button {\n\t\tfont-size: 13px;\n\t\tfont-weight: 400;\n\t\tbackground-color: transparent;\n\n\t\t.button-icon {\n\t\t\tmargin-right: 5px;\n\t\t}\n\n\t\t&--style-accent {\n\t\t\tcolor: #007cba;\n\t\t\tbox-shadow: inset 0 0 0 1px #007cba;\n\n\t\t\t&:hover {\n\t\t\t\tbackground-color: #007cba12;\n\t\t\t}\n\n\t\t\t.button-icon {\n\t\t\t\tpath {\n\t\t\t\t\tfill: #007cba;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t&--style-danger {\n\t\t\tcolor: #d6336c;\n\t\t\tbox-shadow: inset 0 0 0 1px #d6336c;\n\n\t\t\t&:hover {\n\t\t\t\tbackground-color: #d6336c12;\n\t\t\t}\n\n\t\t\t.button-icon {\n\t\t\t\tpath {\n\t\t\t\t\tfill: #d6336c;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t&__content {\n\t\t\t> span {\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: center;\n\t\t\t\talign-items: center;\n\t\t\t}\n\t\t}\n\t}\n\n\t.cx-vui-popup {\n\t\t&__header {\n\t\t\tpadding-bottom: 15px;\n\t\t\tborder-bottom: 1px solid #DCDCDD;\n\t\t\tmargin-bottom: 30px;\n\t\t}\n\n\t\t&__header-title {\n\t\t\tfont-weight: 500;\n\t\t\tfont-size: 24px;\n\t\t\tline-height: 36px;\n\t\t\tcolor: #23282D;\n\t\t}\n\t}\n\n\t&__license-popup {\n\n\t}\n\n\t&__license-form {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tjustify-content: flex-start;\n\t\talign-items: stretch;\n\n\t\t> span {\n\t\t\tmargin-bottom: 10px;\n\t\t}\n\t}\n\n\t&__license-input {\n\t\tmargin-bottom: 10px;\n\t}\n\n\t.go-pro-banner {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tpadding: 24px 0;\n\t\tborder-bottom: 1px solid #DCDCDD;\n\n\t\t&__subtitle {\n\t\t\tfont-size: 18px;\n\t\t\tline-height: 1.25;\n\t\t\tfont-weight: 500;\n\t\t\tcolor: #007CBA;\n\t\t\tmargin-bottom: 5px;\n\t\t}\n\n\t\t&__title {\n\t\t\tfont-size: 24px;\n\t\t\tline-height: 1.25;\n\t\t\tfont-weight: 500;\n\t\t\tcolor: #23282D;\n\t\t\tmargin-bottom: 20px;\n\t\t}\n\n\t\t&__button {\n\t\t\tcolor: white;\n\t\t\tbackground-color: #007CBA;\n\t\t}\n\t}\n}\n\n",".proccesing-state {\n  opacity: 0.5;\n  pointer-events: none;\n}\n\n.jfb-addons-page__inner {\n  padding: 30px;\n  height: 100%;\n}\n.jfb-addons-page__header {\n  margin-bottom: 30px;\n}\n.jfb-addons-page__header-controls {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  padding-bottom: 15px;\n  border-bottom: 1px solid #DCDCDD;\n}\n.jfb-addons-page__header-controls > .cx-vui-button {\n  margin-left: 10px;\n}\n.jfb-addons-page .cx-vui-button {\n  font-size: 13px;\n  font-weight: 400;\n  background-color: transparent;\n}\n.jfb-addons-page .cx-vui-button .button-icon {\n  margin-right: 5px;\n}\n.jfb-addons-page .cx-vui-button--style-accent {\n  color: #007cba;\n  box-shadow: inset 0 0 0 1px #007cba;\n}\n.jfb-addons-page .cx-vui-button--style-accent:hover {\n  background-color: #007cba12;\n}\n.jfb-addons-page .cx-vui-button--style-accent .button-icon path {\n  fill: #007cba;\n}\n.jfb-addons-page .cx-vui-button--style-danger {\n  color: #d6336c;\n  box-shadow: inset 0 0 0 1px #d6336c;\n}\n.jfb-addons-page .cx-vui-button--style-danger:hover {\n  background-color: #d6336c12;\n}\n.jfb-addons-page .cx-vui-button--style-danger .button-icon path {\n  fill: #d6336c;\n}\n.jfb-addons-page .cx-vui-button__content > span {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.jfb-addons-page .cx-vui-popup__header {\n  padding-bottom: 15px;\n  border-bottom: 1px solid #DCDCDD;\n  margin-bottom: 30px;\n}\n.jfb-addons-page .cx-vui-popup__header-title {\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 36px;\n  color: #23282D;\n}\n.jfb-addons-page__license-form {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: stretch;\n}\n.jfb-addons-page__license-form > span {\n  margin-bottom: 10px;\n}\n.jfb-addons-page__license-input {\n  margin-bottom: 10px;\n}\n.jfb-addons-page .go-pro-banner {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 24px 0;\n  border-bottom: 1px solid #DCDCDD;\n}\n.jfb-addons-page .go-pro-banner__subtitle {\n  font-size: 18px;\n  line-height: 1.25;\n  font-weight: 500;\n  color: #007CBA;\n  margin-bottom: 5px;\n}\n.jfb-addons-page .go-pro-banner__title {\n  font-size: 24px;\n  line-height: 1.25;\n  font-weight: 500;\n  color: #23282D;\n  margin-bottom: 20px;\n}\n.jfb-addons-page .go-pro-banner__button {\n  color: white;\n  background-color: #007CBA;\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".jfb-addons {\n  margin-bottom: 50px;\n}\n.jfb-addons:last-child {\n  margin-bottom: 0;\n}\n.jfb-addons a {\n  color: #007cba;\n}\n.jfb-addons__header {\n  margin-bottom: 20px;\n}\n.jfb-addons__list {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 40px;\n}\n@media (max-width: 1140px) {\n.jfb-addons__list {\n    grid-template-columns: repeat(2, 1fr);\n}\n}\n.jfb-addons__item {\n  transition: box-shadow 0.3s ease-out;\n  border-radius: 10px;\n}\n.jfb-addons__item:hover {\n  box-shadow: 0px 4px 28px rgba(15, 23, 42, 0.1);\n}\n.jfb-addons__item.activated .jfb-addons__item-info {\n  background-color: white;\n}\n.jfb-addons__item.update-avaliable .jfb-addons__item-name .version {\n  background-color: #D6336C;\n}\n.jfb-addons__item.update-avaliable .jfb-addons__item-update .latest-version {\n  color: white;\n  background-color: #46B450;\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n.jfb-addons__item-inner {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  height: 100%;\n}\n.jfb-addons__item-thumb {\n  border-radius: 10px 10px 0 0;\n  line-height: 0;\n  overflow: hidden;\n  position: relative;\n}\n.jfb-addons__item-thumb .pro-badge {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n}\n.jfb-addons__item-thumb img {\n  width: 100%;\n  height: auto;\n}\n.jfb-addons__item-info {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  flex: 1 1 auto;\n  padding: 20px;\n  border-radius: 0 0 10px 10px;\n  border-width: 0 1px 1px 1px;\n  border-color: #DCDCDD;\n  border-style: solid;\n  background-color: white;\n}\n.jfb-addons__item-name {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 10px;\n}\n.jfb-addons__item-name .label {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.25;\n}\n.jfb-addons__item-name .version {\n  padding: 1px 8px;\n  border-radius: 4px;\n  color: white;\n  background-color: #46B450;\n  margin-left: 10px;\n}\n.jfb-addons__item-update {\n  color: #7b7e81;\n  margin-bottom: 10px;\n}\n.jfb-addons__item-license {\n  margin-bottom: 10px;\n  color: #7b7e81;\n}\n.jfb-addons__item-license .cx-vui-button {\n  margin-left: 3px;\n}\n.jfb-addons__item-desc {\n  flex: 1 1 auto;\n}\n.jfb-addons__item-desc a {\n  text-decoration: none;\n}\n.jfb-addons__item-actions {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-top: 20px;\n}\n.jfb-addons__item-actions:empty {\n  display: none;\n}\n.jfb-addons__item-actions .cx-vui-button {\n  margin-right: 20px;\n}", "",{"version":3,"sources":["webpack://./admin/pages/addons/components/AddonItem.vue","webpack://./../AddonItem.vue"],"names":[],"mappings":"AAqRA;EACC,mBAAA;ACpRD;ADsRC;EACC,gBAAA;ACpRF;ADuRC;EACC,cAAA;ACrRF;ADwRC;EACC,mBAAA;ACtRF;ADyRC;EACC,aAAA;EACA,qCAAA;EACA,SAAA;ACvRF;ADyRE;AALD;IAME,qCAAA;ACtRD;AACF;ADyRC;EACC,oCAAA;EACA,mBAAA;ACvRF;ADyRE;EACC,8CAAA;ACvRH;AD2RG;EACC,uBAAA;ACzRJ;AD+RI;EACC,yBAAA;AC7RL;ADiSI;EACC,YAAA;EACA,yBAAA;EACA,gBAAA;EACA,kBAAA;AC/RL;ADqSC;EACC,aAAA;EACA,sBAAA;EACA,oBAAA;EACA,YAAA;ACnSF;ADsSC;EACC,4BAAA;EACA,cAAA;EACA,gBAAA;EACA,kBAAA;ACpSF;ADsSE;EACC,kBAAA;EACA,SAAA;EACA,UAAA;ACpSH;ADuSE;EACC,WAAA;EACA,YAAA;ACrSH;ADySC;EACC,aAAA;EACA,sBAAA;EACA,oBAAA;EACA,cAAA;EACA,aAAA;EACA,4BAAA;EACA,2BAAA;EACA,qBAAA;EACA,mBAAA;EACA,uBAAA;ACvSF;AD0SC;EACC,aAAA;EACA,8BAAA;EACA,uBAAA;EACA,mBAAA;ACxSF;AD0SE;EACC,eAAA;EACA,gBAAA;EACA,iBAAA;ACxSH;AD2SE;EACC,gBAAA;EACA,kBAAA;EACA,YAAA;EACA,yBAAA;EACA,iBAAA;ACzSH;AD6SC;EACC,cAAA;EACA,mBAAA;AC3SF;AD8SC;EACC,mBAAA;EACA,cAAA;AC5SF;AD8SE;EACC,gBAAA;AC5SH;ADgTC;EACC,cAAA;AC9SF;ADgTE;EACC,qBAAA;AC9SH;ADkTC;EACC,aAAA;EACA,2BAAA;EACA,mBAAA;EACA,eAAA;EACA,gBAAA;AChTF;ADkTE;EACC,aAAA;AChTH;ADmTE;EACC,kBAAA;ACjTH","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.jfb-addons {\n\tmargin-bottom: 50px;\n\n\t&:last-child {\n\t\tmargin-bottom: 0;\n\t}\n\n\ta {\n\t\tcolor: #007cba;\n\t}\n\n\t&__header {\n\t\tmargin-bottom: 20px;\n\t}\n\n\t&__list {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: repeat(4, 1fr);\n\t\tgap: 40px;\n\n\t\t@media (max-width: 1140px) {\n\t\t\tgrid-template-columns: repeat(2, 1fr);\n\t\t}\n\t}\n\n\t&__item {\n\t\ttransition: box-shadow .3s ease-out;\n\t\tborder-radius: 10px;\n\n\t\t&:hover {\n\t\t\tbox-shadow: 0px 4px 28px rgba(15, 23, 42, 0.1);\n\t\t}\n\n\t\t&.activated {\n\t\t\t.jfb-addons__item-info {\n\t\t\t\tbackground-color: white;\n\t\t\t}\n\t\t}\n\n\t\t&.update-avaliable {\n\t\t\t.jfb-addons__item-name {\n\t\t\t\t.version {\n\t\t\t\t\tbackground-color: #D6336C;\n\t\t\t\t}\n\t\t\t}\n\t\t\t.jfb-addons__item-update {\n\t\t\t\t.latest-version {\n\t\t\t\t\tcolor: white;\n\t\t\t\t\tbackground-color: #46B450;\n\t\t\t\t\tpadding: 2px 8px;\n\t\t\t\t\tborder-radius: 4px;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t&__item-inner {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: stretch;\n\t\theight: 100%;\n\t}\n\n\t&__item-thumb {\n\t\tborder-radius: 10px 10px 0 0;\n\t\tline-height: 0;\n\t\toverflow: hidden;\n\t\tposition: relative;\n\n\t\t.pro-badge {\n\t\t\tposition: absolute;\n\t\t\ttop: 12px;\n\t\t\tleft: 12px;\n\t\t}\n\n\t\timg {\n\t\t\twidth: 100%;\n\t\t\theight: auto;\n\t\t}\n\t}\n\n\t&__item-info {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: stretch;\n\t\tflex: 1 1 auto;\n\t\tpadding: 20px;\n\t\tborder-radius: 0 0 10px 10px;\n\t\tborder-width: 0 1px 1px 1px;\n\t\tborder-color: #DCDCDD;\n\t\tborder-style: solid;\n\t\tbackground-color: white;\n\t}\n\n\t&__item-name {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\talign-items: flex-start;\n\t\tmargin-bottom: 10px;\n\n\t\t.label {\n\t\t\tfont-size: 20px;\n\t\t\tfont-weight: 700;\n\t\t\tline-height: 1.25;\n\t\t}\n\n\t\t.version {\n\t\t\tpadding: 1px 8px;\n\t\t\tborder-radius: 4px;\n\t\t\tcolor: white;\n\t\t\tbackground-color: #46B450;\n\t\t\tmargin-left: 10px;\n\t\t}\n\t}\n\n\t&__item-update {\n\t\tcolor: #7b7e81;\n\t\tmargin-bottom: 10px;\n\t}\n\n\t&__item-license {\n\t\tmargin-bottom: 10px;\n\t\tcolor: #7b7e81;\n\n\t\t.cx-vui-button {\n\t\t\tmargin-left: 3px;\n\t\t}\n\t}\n\n\t&__item-desc {\n\t\tflex: 1 1 auto;\n\n\t\ta {\n\t\t\ttext-decoration: none;\n\t\t}\n\t}\n\n\t&__item-actions {\n\t\tdisplay: flex;\n\t\tjustify-content: flex-start;\n\t\talign-items: center;\n\t\tflex-wrap: wrap;\n\t\tmargin-top: 20px;\n\n\t\t&:empty {\n\t\t\tdisplay: none;\n\t\t}\n\n\t\t.cx-vui-button {\n\t\t\tmargin-right: 20px;\n\t\t}\n\t}\n}\n\n",".jfb-addons {\n  margin-bottom: 50px;\n}\n.jfb-addons:last-child {\n  margin-bottom: 0;\n}\n.jfb-addons a {\n  color: #007cba;\n}\n.jfb-addons__header {\n  margin-bottom: 20px;\n}\n.jfb-addons__list {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 40px;\n}\n@media (max-width: 1140px) {\n  .jfb-addons__list {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.jfb-addons__item {\n  transition: box-shadow 0.3s ease-out;\n  border-radius: 10px;\n}\n.jfb-addons__item:hover {\n  box-shadow: 0px 4px 28px rgba(15, 23, 42, 0.1);\n}\n.jfb-addons__item.activated .jfb-addons__item-info {\n  background-color: white;\n}\n.jfb-addons__item.update-avaliable .jfb-addons__item-name .version {\n  background-color: #D6336C;\n}\n.jfb-addons__item.update-avaliable .jfb-addons__item-update .latest-version {\n  color: white;\n  background-color: #46B450;\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n.jfb-addons__item-inner {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  height: 100%;\n}\n.jfb-addons__item-thumb {\n  border-radius: 10px 10px 0 0;\n  line-height: 0;\n  overflow: hidden;\n  position: relative;\n}\n.jfb-addons__item-thumb .pro-badge {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n}\n.jfb-addons__item-thumb img {\n  width: 100%;\n  height: auto;\n}\n.jfb-addons__item-info {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  flex: 1 1 auto;\n  padding: 20px;\n  border-radius: 0 0 10px 10px;\n  border-width: 0 1px 1px 1px;\n  border-color: #DCDCDD;\n  border-style: solid;\n  background-color: white;\n}\n.jfb-addons__item-name {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 10px;\n}\n.jfb-addons__item-name .label {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.25;\n}\n.jfb-addons__item-name .version {\n  padding: 1px 8px;\n  border-radius: 4px;\n  color: white;\n  background-color: #46B450;\n  margin-left: 10px;\n}\n.jfb-addons__item-update {\n  color: #7b7e81;\n  margin-bottom: 10px;\n}\n.jfb-addons__item-license {\n  margin-bottom: 10px;\n  color: #7b7e81;\n}\n.jfb-addons__item-license .cx-vui-button {\n  margin-left: 3px;\n}\n.jfb-addons__item-desc {\n  flex: 1 1 auto;\n}\n.jfb-addons__item-desc a {\n  text-decoration: none;\n}\n.jfb-addons__item-actions {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-top: 20px;\n}\n.jfb-addons__item-actions:empty {\n  display: none;\n}\n.jfb-addons__item-actions .cx-vui-button {\n  margin-right: 20px;\n}"],"sourceRoot":""}]);
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
          _vm.isLicenseMode
            ? _c(
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
              )
            : _vm._e(),
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
        "update-avaliable": _vm.updateAvaliable
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
              !_vm.updateAvaliable
                ? _c("div", [_vm._v("Your plugin is up to date")])
                : _vm._e(),
              _vm._v(" "),
              _vm.updateAvaliable
                ? _c(
                    "div",
                    [
                      _vm._v("\n\t\t\t\t\tVersion "),
                      _c("span", { staticClass: "latest-version" }, [
                        _vm._v(_vm._s(_vm.addonData.version))
                      ]),
                      _vm._v(" available\n\t\t\t\t\t"),
                      !_vm.activateLicenceActionAvaliable && _vm.isLicenseMode
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4uanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYWRtaW4vY29tcG9uZW50cy9jb2xsYXBzZS1taW5pL0N4VnVpQ29sbGFwc2VNaW5pLnZ1ZSIsIndlYnBhY2s6Ly8vYWRtaW4vcGFnZXMvYWRkb25zL0FkZG9uc1BhZ2UudnVlIiwid2VicGFjazovLy9hZG1pbi9wYWdlcy9hZGRvbnMvY29tcG9uZW50cy9BZGRvbkl0ZW0udnVlIiwid2VicGFjazovLy9hZG1pbi9wYWdlcy9zZXR0aW5ncy9TZXR0aW5nc1BhZ2UudnVlIiwid2VicGFjazovLy9hZG1pbi9wYWdlcy9zZXR0aW5ncy9nYXRld2F5cy9wYXlwYWwvUGF5cGFsVGFiLnZ1ZSIsIndlYnBhY2s6Ly8vYWRtaW4vcGFnZXMvc2V0dGluZ3MvdGFicy9hY3RpdmVjYW1wYWlnbi9BY3RpdmVDYW1wYWlnblRhYi52dWUiLCJ3ZWJwYWNrOi8vL2FkbWluL3BhZ2VzL3NldHRpbmdzL3RhYnMvY2FwdGNoYS9DYXB0Y2hhVGFiLnZ1ZSIsIndlYnBhY2s6Ly8vYWRtaW4vcGFnZXMvc2V0dGluZ3MvdGFicy9nZXRyZXNwb25zZS9HZXRSZXNwb25zZVRhYi52dWUiLCJ3ZWJwYWNrOi8vL2FkbWluL3BhZ2VzL3NldHRpbmdzL3RhYnMvbWFpbGNoaW1wL01haWxDaGltcFRhYi52dWUiLCJ3ZWJwYWNrOi8vL2FkbWluL3BhZ2VzL3NldHRpbmdzL3RhYnMvcGF5bWVudHMtZ2F0ZXdheXMvUGF5bWVudHNHYXRld2F5cy52dWUiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vbWl4aW5zL0dldEluY29taW5nLmpzIiwid2VicGFjazovLy8uL2FkbWluL21peGlucy9TYXZlVGFiQnlBamF4LmpzIiwid2VicGFjazovLy8uL2FkbWluL3BhZ2VzL3NldHRpbmdzL2dhdGV3YXlzL3BheXBhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9zZXR0aW5ncy9nYXRld2F5cy9wYXlwYWwvc291cmNlLmpzIiwid2VicGFjazovLy8uL2FkbWluL3BhZ2VzL3NldHRpbmdzL3RhYnMvYWN0aXZlY2FtcGFpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvc2V0dGluZ3MvdGFicy9hY3RpdmVjYW1wYWlnbi9zb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvc2V0dGluZ3MvdGFicy9jYXB0Y2hhL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FkbWluL3BhZ2VzL3NldHRpbmdzL3RhYnMvY2FwdGNoYS9zb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvc2V0dGluZ3MvdGFicy9nZXRyZXNwb25zZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9zZXR0aW5ncy90YWJzL2dldHJlc3BvbnNlL3NvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9zZXR0aW5ncy90YWJzL21haWxjaGltcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9zZXR0aW5ncy90YWJzL21haWxjaGltcC9zb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvc2V0dGluZ3MvdGFicy9wYXltZW50cy1nYXRld2F5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9zZXR0aW5ncy90YWJzL3BheW1lbnRzLWdhdGV3YXlzL3NvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9hZGRvbnMvQWRkb25zUGFnZS52dWU/NmNiMCIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9hZGRvbnMvY29tcG9uZW50cy9BZGRvbkl0ZW0udnVlPzA4MzAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL2FkbWluL2NvbXBvbmVudHMvY29sbGFwc2UtbWluaS9DeFZ1aUNvbGxhcHNlTWluaS52dWUiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvYWRkb25zL0FkZG9uc1BhZ2UudnVlIiwid2VicGFjazovLy8uL2FkbWluL3BhZ2VzL2FkZG9ucy9jb21wb25lbnRzL0FkZG9uSXRlbS52dWUiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvc2V0dGluZ3MvU2V0dGluZ3NQYWdlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9zZXR0aW5ncy9nYXRld2F5cy9wYXlwYWwvUGF5cGFsVGFiLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9zZXR0aW5ncy90YWJzL2FjdGl2ZWNhbXBhaWduL0FjdGl2ZUNhbXBhaWduVGFiLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9zZXR0aW5ncy90YWJzL2NhcHRjaGEvQ2FwdGNoYVRhYi52dWUiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvc2V0dGluZ3MvdGFicy9nZXRyZXNwb25zZS9HZXRSZXNwb25zZVRhYi52dWUiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvc2V0dGluZ3MvdGFicy9tYWlsY2hpbXAvTWFpbENoaW1wVGFiLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9zZXR0aW5ncy90YWJzL3BheW1lbnRzLWdhdGV3YXlzL1BheW1lbnRzR2F0ZXdheXMudnVlIiwid2VicGFjazovLy8uL2FkbWluL2NvbXBvbmVudHMvY29sbGFwc2UtbWluaS9DeFZ1aUNvbGxhcHNlTWluaS52dWU/OWU2YSIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9hZGRvbnMvQWRkb25zUGFnZS52dWU/ZWFlMyIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9hZGRvbnMvY29tcG9uZW50cy9BZGRvbkl0ZW0udnVlP2EwZmYiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvc2V0dGluZ3MvU2V0dGluZ3NQYWdlLnZ1ZT8yYmQ4Iiwid2VicGFjazovLy8uL2FkbWluL3BhZ2VzL3NldHRpbmdzL2dhdGV3YXlzL3BheXBhbC9QYXlwYWxUYWIudnVlPzFkYzQiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvc2V0dGluZ3MvdGFicy9hY3RpdmVjYW1wYWlnbi9BY3RpdmVDYW1wYWlnblRhYi52dWU/OTY4YSIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9zZXR0aW5ncy90YWJzL2NhcHRjaGEvQ2FwdGNoYVRhYi52dWU/ODI5ZCIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9zZXR0aW5ncy90YWJzL2dldHJlc3BvbnNlL0dldFJlc3BvbnNlVGFiLnZ1ZT9jZTBkIiwid2VicGFjazovLy8uL2FkbWluL3BhZ2VzL3NldHRpbmdzL3RhYnMvbWFpbGNoaW1wL01haWxDaGltcFRhYi52dWU/OWM3ZCIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9zZXR0aW5ncy90YWJzL3BheW1lbnRzLWdhdGV3YXlzL1BheW1lbnRzR2F0ZXdheXMudnVlPzIzMjgiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vY29tcG9uZW50cy9jb2xsYXBzZS1taW5pL0N4VnVpQ29sbGFwc2VNaW5pLnZ1ZT9iNmY4Iiwid2VicGFjazovLy8uL2FkbWluL3BhZ2VzL2FkZG9ucy9BZGRvbnNQYWdlLnZ1ZT8wYTkyIiwid2VicGFjazovLy8uL2FkbWluL3BhZ2VzL2FkZG9ucy9jb21wb25lbnRzL0FkZG9uSXRlbS52dWU/OTA1NyIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9zZXR0aW5ncy9TZXR0aW5nc1BhZ2UudnVlP2RlMzIiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvc2V0dGluZ3MvZ2F0ZXdheXMvcGF5cGFsL1BheXBhbFRhYi52dWU/MmVhYiIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9zZXR0aW5ncy90YWJzL2FjdGl2ZWNhbXBhaWduL0FjdGl2ZUNhbXBhaWduVGFiLnZ1ZT8zOTE5Iiwid2VicGFjazovLy8uL2FkbWluL3BhZ2VzL3NldHRpbmdzL3RhYnMvY2FwdGNoYS9DYXB0Y2hhVGFiLnZ1ZT82YzRkIiwid2VicGFjazovLy8uL2FkbWluL3BhZ2VzL3NldHRpbmdzL3RhYnMvZ2V0cmVzcG9uc2UvR2V0UmVzcG9uc2VUYWIudnVlPzQ4YzkiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvc2V0dGluZ3MvdGFicy9tYWlsY2hpbXAvTWFpbENoaW1wVGFiLnZ1ZT9lNzZkIiwid2VicGFjazovLy8uL2FkbWluL3BhZ2VzL3NldHRpbmdzL3RhYnMvcGF5bWVudHMtZ2F0ZXdheXMvUGF5bWVudHNHYXRld2F5cy52dWU/YmE5MCIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcyIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9hZGRvbnMvQWRkb25zUGFnZS52dWU/MzdhMSIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9hZGRvbnMvY29tcG9uZW50cy9BZGRvbkl0ZW0udnVlP2E0ZjgiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9saXN0VG9TdHlsZXMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL2FkbWluL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXHQ8ZGl2IDpjbGFzcz1cIntcblx0XHQnY3gtdnVpLXBhbmVsJzogd2l0aFBhbmVsLFxuXHRcdCdjeC12dWktY29sbGFwc2UtbWluaV9faXRlbSc6IHRydWUsXG5cdFx0J2N4LXZ1aS1jb2xsYXBzZS1taW5pX19pdGVtLS1hY3RpdmUnOiBpc0FjdGl2ZSxcblx0fVwiPlxuXHRcdDxkaXZcblx0XHRcdGNsYXNzPVwiY3gtdnVpLWNvbGxhcHNlLW1pbmlfX2hlYWRlclwiXG5cdFx0XHRAY2xpY2s9XCJjb2xsYXBzZVwiXG5cdFx0PlxuXHRcdFx0PGRpdiBjbGFzcz1cImN4LXZ1aS1jb2xsYXBzZS1taW5pX19oZWFkZXItbGFiZWxcIj5cblx0XHRcdFx0PHN2ZyB3aWR0aD1cIjE0XCIgaGVpZ2h0PVwiMTRcIiB2aWV3Qm94PVwiMCAwIDE0IDE0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG5cdFx0XHRcdFx0PHBhdGggZD1cIk0xNCAxMy45OTk5TDE0IC0wLjAwMDEyMjA3TDAgLTAuMDAwMTIxNDU4TDYuMTE5NTllLTA3IDEzLjk5OTlMMTQgMTMuOTk5OVpcIlxuXHRcdFx0XHRcdFx0ICBmaWxsPVwid2hpdGVcIj48L3BhdGg+XG5cdFx0XHRcdFx0PHBhdGggZD1cIk01LjMyOTExIDFMMTEgN0w1LjMyOTExIDEzTDQgMTEuNTkzOEw4LjM0MTc3IDdMNCAyLjQwNjI1TDUuMzI5MTEgMVpcIiBmaWxsPVwiIzAwN0NCQVwiPjwvcGF0aD5cblx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdHt7IGxhYmVsIH19XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXZcblx0XHRcdFx0di1pZj1cImRlc2NcIlxuXHRcdFx0XHRjbGFzcz1cImN4LXZ1aS1jb2xsYXBzZS1taW5pX19oZWFkZXItZGVzY1wiXG5cdFx0XHQ+XG5cdFx0XHRcdHt7IGRlc2MgfX1cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcdDxkaXZcblx0XHRcdHYtc2hvdz1cImlzQWN0aXZlXCJcblx0XHRcdGNsYXNzPVwiY3gtdnVpLWNvbGxhcHNlLW1pbmlfX2NvbnRlbnRcIlxuXHRcdD5cblx0XHRcdDxzbG90PkNvbGxhcHNlIGNvbnRlbnQuLi48L3Nsb3Q+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRuYW1lOiAnY3gtdnVpLWNvbGxhcHNlLW1pbmknLFxuXHRwcm9wczoge1xuXHRcdHdpdGhQYW5lbDoge1xuXHRcdFx0dHlwZTogQm9vbGVhbixcblx0XHRcdGRlZmF1bHQ6IGZhbHNlLFxuXHRcdH0sXG5cdFx0aW5pdGlhbEFjdGl2ZToge1xuXHRcdFx0dHlwZTogQm9vbGVhbixcblx0XHRcdGRlZmF1bHQ6IGZhbHNlLFxuXHRcdH0sXG5cdFx0bGFiZWw6IHtcblx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHRcdGRlZmF1bHQ6ICdDb2xsYXBzZSBNaW5pJyxcblx0XHR9LFxuXHRcdGRlc2M6IHtcblx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHRcdGRlZmF1bHQ6ICcnLFxuXHRcdH0sXG5cdH0sXG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGlzQWN0aXZlOiBmYWxzZSxcblx0XHR9O1xuXHR9LFxuXHRjcmVhdGVkKCkge1xuXHRcdHRoaXMuaXNBY3RpdmUgPSB0aGlzLmluaXRpYWxBY3RpdmU7XG5cdH0sXG5cdG1ldGhvZHM6IHtcblx0XHRjb2xsYXBzZSgpIHtcblx0XHRcdHRoaXMuaXNBY3RpdmUgPSAhIHRoaXMuaXNBY3RpdmU7XG5cdFx0fSxcblx0fSxcbn1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cblx0PGRpdlxuXHRcdGNsYXNzPVwiamZiLWFkZG9ucy1wYWdlIHdyYXBcIlxuXHRcdDpjbGFzcz1cInsgJ3Byb2NjZXNpbmctc3RhdGUnOiBwcm9jY2VzaW5nU3RhdGUgfVwiXG5cdD5cblx0XHQ8aDEgY2xhc3M9XCJjcy12dWktdGl0bGVcIj57eyAnSmV0Rm9ybUJ1aWxkZXIgQWRkb25zJyB9fTwvaDE+XG5cdFx0PGRpdiBjbGFzcz1cImpmYi1hZGRvbnMtcGFnZV9faW5uZXIgY3gtdnVpLXBhbmVsXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiamZiLWFkZG9ucy1wYWdlX19oZWFkZXJcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImpmYi1hZGRvbnMtcGFnZV9faGVhZGVyLWNvbnRyb2xzXCIgdi1pZj1cImlzTGljZW5zZU1vZGVcIj5cblx0XHRcdFx0XHQ8Y3gtdnVpLWJ1dHRvblxuXHRcdFx0XHRcdFx0YnV0dG9uLXN0eWxlPVwiYWNjZW50XCJcblx0XHRcdFx0XHRcdHNpemU9XCJtaW5pXCJcblx0XHRcdFx0XHRcdDpsb2FkaW5nPVwiY2hlY2tVcGRhdGVzUHJvY2Vzc2VkXCJcblx0XHRcdFx0XHRcdEBjbGljaz1cImNoZWNrUGx1Z2luc1VwZGF0ZVwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PHNwYW4gc2xvdD1cImxhYmVsXCI+XG5cdFx0XHRcdFx0XHRcdDxzdmcgY2xhc3M9XCJidXR0b24taWNvblwiIHdpZHRoPVwiMTRcIiBoZWlnaHQ9XCIxNFwiIHZpZXdCb3g9XCIwIDAgMTQgMTRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPVwiTTExLjcwODUgMi4yOTE3MUMxMC41MDAxIDEuMDgzMzcgOC44NDE4IDAuMzMzMzc0IDcuMDAwMTMgMC4zMzMzNzRDMy4zMTY4IDAuMzMzMzc0IDAuMzQxNzk3IDMuMzE2NzEgMC4zNDE3OTcgNy4wMDAwNEMwLjM0MTc5NyAxMC42ODM0IDMuMzE2OCAxMy42NjY3IDcuMDAwMTMgMTMuNjY2N0MxMC4xMDg1IDEzLjY2NjcgMTIuNzAwMSAxMS41NDE3IDEzLjQ0MTggOC42NjY3MUgxMS43MDg1QzExLjAyNTEgMTAuNjA4NCA5LjE3NTEzIDEyIDcuMDAwMTMgMTJDNC4yNDE4IDEyIDIuMDAwMTMgOS43NTgzNyAyLjAwMDEzIDcuMDAwMDRDMi4wMDAxMyA0LjI0MTcxIDQuMjQxOCAyLjAwMDA0IDcuMDAwMTMgMi4wMDAwNEM4LjM4MzQ2IDIuMDAwMDQgOS42MTY4IDIuNTc1MDQgMTAuNTE2OCAzLjQ4MzM3TDcuODMzNDYgNi4xNjY3MUgxMy42NjY4VjAuMzMzMzc0TDExLjcwODUgMi4yOTE3MVpcIiBmaWxsPVwiIzAwN0NCQVwiLz5cblx0XHRcdFx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdFx0XHRcdDxzcGFuPkNoZWNrIEZvciBVcGRhdGVzPC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdDwvY3gtdnVpLWJ1dHRvbj5cblxuXHRcdFx0XHRcdDxjeC12dWktYnV0dG9uXG5cdFx0XHRcdFx0XHQ6Y2xhc3M9XCJbICFpc0xpY2Vuc2VBY3RpdmF0ZWQgPyAnY3gtdnVpLWJ1dHRvbi0tc3R5bGUtYWNjZW50JyA6ICdjeC12dWktYnV0dG9uLS1zdHlsZS1kYW5nZXInIF1cIlxuXHRcdFx0XHRcdFx0c2l6ZT1cIm1pbmlcIlxuXHRcdFx0XHRcdFx0QGNsaWNrPVwic2hvd0xpY2Vuc2VQb3B1cFwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PHNwYW4gc2xvdD1cImxhYmVsXCI+XG5cdFx0XHRcdFx0XHRcdDxzdmcgY2xhc3M9XCJidXR0b24taWNvblwiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPVwiTTE1LjQ5ODUgMEgxMi40ODk3QzEyLjQxNjYgMCAxMi4zNDg3IDAuMDE1NjcwOSAxMi4yODYgMC4wNDcwMTI3QzEyLjIzMzggMC4wNjc5MDczIDEyLjE4NjcgMC4xMDQ0NzMgMTIuMTQ1IDAuMTU2NzA5TDUuNzY2OSA2LjQ3MjA5QzUuNjIwNjMgNi40NDA3NCA1LjQ2MzkyIDYuNDE0NjMgNS4yOTY3NyA2LjM5MzczQzUuMTI5NjEgNi4zNzI4NCA0Ljk2NzY4IDYuMzYyMzkgNC44MTA5NyA2LjM2MjM5QzQuMTYzMjQgNi4zNjIzOSAzLjU0Njg1IDYuNDg3NzYgMi45NjE4IDYuNzM4NDlDMi4zNzY3NSA2Ljk3ODc4IDEuODU5NjEgNy4zMjM1NCAxLjQxMDM4IDcuNzcyNzdDMC45NjExNDkgOC4yMjIgMC42MTExNjYgOC43MzkxNCAwLjM2MDQzMSA5LjMyNDE5QzAuMTIwMTQ0IDkuOTA5MjQgMCAxMC41MzA5IDAgMTEuMTg5QzAgMTEuODM2OCAwLjEyMDE0NCAxMi40NTMyIDAuMzYwNDMxIDEzLjAzODJDMC42MTExNjYgMTMuNjIzMiAwLjk2MTE0OSAxNC4xNDA0IDEuNDEwMzggMTQuNTg5NkMxLjg1OTYxIDE1LjAzODkgMi4zNzY3NSAxNS4zODM2IDIuOTYxOCAxNS42MjM5QzMuNTQ2ODUgMTUuODc0NiA0LjE2MzI0IDE2IDQuODEwOTcgMTZDNS40NjkxNSAxNiA2LjA5MDc2IDE1Ljg3NDYgNi42NzU4MSAxNS42MjM5QzcuMjYwODYgMTUuMzgzNiA3Ljc3OCAxNS4wMzg5IDguMjI3MjMgMTQuNTg5NkM4LjgwMTgzIDE0LjAxNSA5LjE5ODgyIDEzLjM0NjQgOS40MTgyMiAxMi41ODM3QzkuNjQ4MDYgMTEuODIxMSA5LjY4NDYyIDExLjAzNzUgOS41Mjc5MSAxMC4yMzMxTDEwLjg5MTMgOC44Njk3NEMxMC45MzMxIDguODI3OTUgMTAuOTY0NCA4Ljc4MDkzIDEwLjk4NTMgOC43Mjg3QzExLjAxNjcgOC42NjYwMSAxMS4wMzIzIDguNTk4MTEgMTEuMDMyMyA4LjUyNDk4VjcuMDIwNTdIMTIuNTM2N0MxMi42OTM0IDcuMDIwNTcgMTIuODEzNiA2Ljk3MzU2IDEyLjg5NzIgNi44Nzk1M0MxMi45OTEyIDYuNzg1NSAxMy4wMzgyIDYuNjY1MzYgMTMuMDM4MiA2LjUxOTFWNS4wMTQ2OUgxNC41NDI2QzE0LjYxNTcgNS4wMTQ2OSAxNC42Nzg0IDUuMDA0MjQgMTQuNzMwNyA0Ljk4MzM1QzE0Ljc5MzMgNC45NTIwMSAxNC44NTA4IDQuOTEwMjIgMTQuOTAzIDQuODU3OThMMTUuOTA2IDMuODU1MDRDMTUuOTI2OSAzLjgxMzI2IDE1Ljk0NzggMy43NjYyNCAxNS45Njg3IDMuNzE0MDFDMTUuOTg5NiAzLjY1MTMyIDE2IDMuNTgzNDIgMTYgMy41MTAyOFYwLjUwMTQ2OUMxNiAwLjM1NTIwNyAxNS45NTMgMC4yMzUwNjQgMTUuODU5IDAuMTQxMDM4QzE1Ljc2NDkgMC4wNDcwMTI3IDE1LjY0NDggMCAxNS40OTg1IDBaTTQuOTY3NjggMTIuNzg3NUM0Ljc5MDA4IDEyLjk2NTEgNC41OTY4IDEzLjA5NTcgNC4zODc4NiAxMy4xNzkyQzQuMTg5MzYgMTMuMjUyNCAzLjk2NDc0IDEzLjI4ODkgMy43MTQwMSAxMy4yODg5QzMuNDYzMjcgMTMuMjg4OSAzLjIzMzQzIDEzLjI0MTkgMy4wMjQ0OSAxMy4xNDc5QzIuODI1OTkgMTMuMDUzOSAyLjYzNzk0IDEyLjkzMzcgMi40NjAzMyAxMi43ODc1QzIuMjgyNzMgMTIuNjA5OSAyLjE1MjE0IDEyLjQyMTggMi4wNjg1NiAxMi4yMjMzQzEuOTk1NDMgMTIuMDE0NCAxLjk1ODg2IDExLjc4NDUgMS45NTg4NiAxMS41MzM4QzEuOTU4ODYgMTEuMjgzMSAyLjAwNTg4IDExLjA1ODQgMi4wOTk5IDEwLjg1OTlDMi4xOTM5MyAxMC42NTEgMi4zMTQwNyAxMC40NTc3IDIuNDYwMzMgMTAuMjgwMUMyLjc4NDIgOS45NTYyNSAzLjE5MTY0IDkuNzk0MzIgMy42ODI2NiA5Ljc5NDMyQzQuMTg0MTMgOS43OTQzMiA0LjU5NjggOS45NTYyNSA0LjkyMDY3IDEwLjI4MDFDNS4wOTgyNyAxMC40NTc3IDUuMjIzNjQgMTAuNjUxIDUuMjk2NzcgMTAuODU5OUM1LjM4MDM1IDExLjA1ODQgNS40MjIxNCAxMS4yODMxIDUuNDIyMTQgMTEuNTMzOEM1LjQyMjE0IDExLjc4NDUgNS4zODAzNSAxMi4wMTQ0IDUuMjk2NzcgMTIuMjIzM0M1LjIyMzY0IDEyLjQyMTggNS4xMTM5NCAxMi42MDk5IDQuOTY3NjggMTIuNzg3NVpcIiBmaWxsPVwiI0QzRDNEM1wiLz5cblx0XHRcdFx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIHYtaWY9XCIhaXNMaWNlbnNlQWN0aXZhdGVkXCI+QWN0aXZhdGUgTGljZW5zZTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PHNwYW4gdi1pZj1cImlzTGljZW5zZUFjdGl2YXRlZFwiPkRlYWN0aXZhdGUgTGljZW5zZTwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHQ8L2N4LXZ1aS1idXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0Y2xhc3M9XCJnby1wcm8tYmFubmVyXCJcblx0XHRcdFx0XHR2LWlmPVwiIWlzTGljZW5zZUFjdGl2YXRlZFwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZ28tcHJvLWJhbm5lcl9fc3VidGl0bGVcIj5GZWF0dXJlcyAmIEludGVncmF0aW9ucyA8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZ28tcHJvLWJhbm5lcl9fdGl0bGVcIj5FeHRlbmQgZnVuY3Rpb25hbGl0eSB3aXRoIFBSTyBBZGRvbnM8L2Rpdj5cblx0XHRcdFx0XHQ8Y3gtdnVpLWJ1dHRvblxuXHRcdFx0XHRcdFx0Y2xhc3M9XCJnby1wcm8tYmFubmVyX19idXR0b25cIlxuXHRcdFx0XHRcdFx0YnV0dG9uLXN0eWxlPVwiZGVmYXVsdFwiXG5cdFx0XHRcdFx0XHRzaXplPVwibWluaVwiXG5cdFx0XHRcdFx0XHQ6dXJsPVwiZ29Qcm9MaW5rXCJcblx0XHRcdFx0XHRcdHRhZy1uYW1lPVwiYVwiXG5cdFx0XHRcdFx0XHR0YXJnZXQ9XCJfYmxhbmtcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxzcGFuIHNsb3Q9XCJsYWJlbFwiPlxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj5HbyBQcm88L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0PC9jeC12dWktYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdGNsYXNzPVwiamZiLWFkZG9uc1wiXG5cdFx0XHRcdHYtaWY9XCIwIT09T2JqZWN0LmtleXMoaW5zdGFsbGVkQWRkb25MaXN0KS5sZW5ndGhcIlxuXHRcdFx0PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiamZiLWFkZG9uc19faGVhZGVyXCI+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJjeC12dWktc3VidGl0bGVcIj5Zb3VyIEluc3RhbGxlZCBBZGRvbnM8L3NwYW4+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiamZiLWFkZG9uc19fbGlzdFwiPlxuXHRcdFx0XHRcdDxBZGRvbkl0ZW1cblx0XHRcdFx0XHRcdHYtZm9yPVwiKCBhZGRvbkRhdGEsIGluZGV4ICkgaW4gaW5zdGFsbGVkQWRkb25MaXN0XCJcblx0XHRcdFx0XHRcdDprZXk9XCJpbmRleFwiXG5cdFx0XHRcdFx0XHQ6YWRkb24tZGF0YT1cImFkZG9uRGF0YVwiXG5cdFx0XHRcdFx0PjwvQWRkb25JdGVtPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdGNsYXNzPVwiamZiLWFkZG9uc1wiXG5cdFx0XHRcdHYtaWY9XCIwIT09T2JqZWN0LmtleXMoYXZhaWxhYmxlQWRkb25MaXN0KS5sZW5ndGhcIlxuXHRcdFx0PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiamZiLWFkZG9uc19faGVhZGVyXCI+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJjeC12dWktc3VidGl0bGVcIj5BbGwgQXZhaWxhYmxlIEFkZG9uczwvc3Bhbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJqZmItYWRkb25zX19saXN0XCI+XG5cdFx0XHRcdFx0PEFkZG9uSXRlbVxuXHRcdFx0XHRcdFx0di1mb3I9XCIoIGFkZG9uRGF0YSwgaW5kZXggKSBpbiBhdmFpbGFibGVBZGRvbkxpc3RcIlxuXHRcdFx0XHRcdFx0OmtleT1cImluZGV4XCJcblx0XHRcdFx0XHRcdDphZGRvbi1kYXRhPVwiYWRkb25EYXRhXCJcblx0XHRcdFx0XHQ+PC9BZGRvbkl0ZW0+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cblx0XHQ8Y3gtdnVpLXBvcHVwXG5cdFx0XHRjbGFzcz1cImpmYi1hZGRvbnMtcGFnZV9fbGljZW5zZS1wb3B1cFwiXG5cdFx0XHR2LW1vZGVsPVwibGljZW5zZVBvcHVwVmlzaWJsZVwiXG5cdFx0XHQ6Zm9vdGVyPVwiZmFsc2VcIlxuXHRcdFx0Ym9keS13aWR0aD1cIjU0MHB4XCJcblx0XHQ+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY3gtdnVpLXBvcHVwX19oZWFkZXItdGl0bGVcIiBzbG90PVwidGl0bGVcIj5cblx0XHRcdFx0PHNwYW4gdi1pZj1cIiFpc0xpY2Vuc2VBY3RpdmF0ZWRcIj5BY3RpdmF0ZSBMaWNlbnNlPC9zcGFuPlxuXHRcdFx0XHQ8c3BhbiB2LWlmPVwiaXNMaWNlbnNlQWN0aXZhdGVkXCI+RGVhY3RpdmF0ZSBMaWNlbnNlPC9zcGFuPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiamZiLWFkZG9ucy1wYWdlX19saWNlbnNlLWZvcm1cIiBzbG90PVwiY29udGVudFwiPlxuXHRcdFx0XHQ8c3BhbiB2LWlmPVwiIWlzTGljZW5zZUFjdGl2YXRlZFwiPkFjdGl2YXRlIGxpY2Vuc2UgZm9yIGF1dG9tYXRpYyB1cGRhdGVzIGFuZCBhd2Vzb21lIHN1cHBvcnQ8L3NwYW4+XG5cdFx0XHRcdDxzcGFuIHYtaWY9XCJpc0xpY2Vuc2VBY3RpdmF0ZWRcIj5CeSBkZWFjdGl2YXRpbmcgdGhlIGxpY2Vuc2UgeW91IHdpbGwgbm90IGJlIGFibGUgdG8gdXBkYXRlIHRoZSBhZGRvbnM8L3NwYW4+XG5cdFx0XHRcdDxjeC12dWktaW5wdXRcblx0XHRcdFx0XHRjbGFzcz1cImpmYi1hZGRvbnMtcGFnZV9fbGljZW5zZS1pbnB1dFwiXG5cdFx0XHRcdFx0c2l6ZT1cImZ1bGx3aWR0aFwiXG5cdFx0XHRcdFx0dHlwZT1cInBhc3N3b3JkXCJcblx0XHRcdFx0XHQ6YXV0b2ZvY3VzPVwidHJ1ZVwiXG5cdFx0XHRcdFx0OnByZXZlbnQtd3JhcD1cInRydWVcIlxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiSnVzdCBwYXN0ZSBpdCBoZXJlXCJcblx0XHRcdFx0XHR2LW1vZGVsPVwibGljZW5zZUtleVwiXG5cdFx0XHRcdD48L2N4LXZ1aS1pbnB1dD5cblx0XHRcdFx0PGN4LXZ1aS1idXR0b25cblx0XHRcdFx0XHRjbGFzcz1cImpmYi1hZGRvbnMtcGFnZV9fbGljZW5zZS1hY3Rpb25cIlxuXHRcdFx0XHRcdGJ1dHRvbi1zdHlsZT1cImFjY2VudFwiXG5cdFx0XHRcdFx0c2l6ZT1cIm1pbmlcIlxuXHRcdFx0XHRcdDpsb2FkaW5nPVwibGljZW5zZVByb2NjZXNpbmdTdGF0ZVwiXG5cdFx0XHRcdFx0QGNsaWNrPVwibGljZW5zZUFjdGlvblwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8c3BhbiBzbG90PVwibGFiZWxcIj5cblx0XHRcdFx0XHRcdDxzcGFuIHYtaWY9XCIhaXNMaWNlbnNlQWN0aXZhdGVkXCI+QWN0aXZhdGU8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8c3BhbiB2LWlmPVwiaXNMaWNlbnNlQWN0aXZhdGVkXCI+RGVhY3RpdmF0ZTwvc3Bhbj5cblx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdDwvY3gtdnVpLWJ1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvY3gtdnVpLXBvcHVwPlxuXHQ8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IEFkZG9uSXRlbSBmcm9tICcuL2NvbXBvbmVudHMvQWRkb25JdGVtLnZ1ZSc7XG5cbmNvbnN0IHsgYXBwbHlGaWx0ZXJzLCBkb0FjdGlvbiB9ID0gd3AuaG9va3M7XG5cbndpbmRvdy5qZmJFdmVudEJ1cyA9IG5ldyBWdWUoKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRuYW1lOiAnamZiLWFkZG9ucycsXG5cdGNvbXBvbmVudHM6IHtcblx0XHRBZGRvbkl0ZW0sXG5cdH0sXG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGFsbEFkZG9uczogd2luZG93LkpldEZCUGFnZUNvbmZpZy5hbGxBZGRvbnMgfHwge30sXG5cdFx0XHRsaWNlbnNlTGlzdDogd2luZG93LkpldEZCUGFnZUNvbmZpZy5saWNlbnNlTGlzdCB8fCBbXSxcblx0XHRcdGxpY2Vuc2VLZXk6IHdpbmRvdy5KZXRGQlBhZ2VDb25maWcubGljZW5zZUtleSB8fCAnJyxcblx0XHRcdHRoZW1lSW5mbzogd2luZG93LkpldEZCUGFnZUNvbmZpZy50aGVtZUluZm8gfHwgZmFsc2UsXG5cdFx0XHRtaXNjSW5mbzogd2luZG93LkpldEZCUGFnZUNvbmZpZy5taXNjSW5mbyB8fCBmYWxzZSxcblxuXHRcdFx0bGljZW5zZUFjdGl2YXRlZDogZmFsc2UsXG5cdFx0XHRsaWNlbnNlUG9wdXBWaXNpYmxlOiBmYWxzZSxcblx0XHRcdGxpY2Vuc2VQcm9jY2VzaW5nU3RhdGU6IGZhbHNlLFxuXHRcdFx0bGljZW5zZUFqYXhBY3Rpb246IG51bGwsXG5cblx0XHRcdGNoZWNrVXBkYXRlc0FjdGlvbjogbnVsbCxcblx0XHRcdGNoZWNrVXBkYXRlc1Byb2Nlc3NlZDogZmFsc2UsXG5cblx0XHRcdHByb2NjZXNpbmdTdGF0ZTogZmFsc2UsXG5cdFx0fTtcblx0fSxcblx0bW91bnRlZDogZnVuY3Rpb24oKSB7XG5cdFx0d2luZG93LmpmYkV2ZW50QnVzLiRvbiggJ3VwZGF0ZUFkZG9uRGF0YScsIHRoaXMudXBkYXRlQWRkb25EYXRhICk7XG5cdFx0d2luZG93LmpmYkV2ZW50QnVzLiRvbiggJ3Nob3dMaWNlbnNlUG9wdXAnLCB0aGlzLnNob3dMaWNlbnNlUG9wdXAgKTtcblx0fSxcblx0Y29tcHV0ZWQ6IHtcblx0XHRpc0xpY2Vuc2VNb2RlKCkge1xuXHRcdFx0cmV0dXJuICcnICE9PSB3aW5kb3cuSmV0RkJQYWdlQ29uZmlnLmxpY2Vuc2VNb2RlID8gdHJ1ZSA6IGZhbHNlO1xuXHRcdH0sXG5cblx0XHRpc0xpY2Vuc2VBY3RpdmF0ZWQoKSB7XG5cdFx0XHRyZXR1cm4gMCAhPT0gdGhpcy5saWNlbnNlTGlzdC5sZW5ndGg7XG5cdFx0fSxcblxuXHRcdGxpY2Vuc2VBY3Rpb25UeXBlKCkge1xuXHRcdFx0cmV0dXJuICEgdGhpcy5pc0xpY2Vuc2VBY3RpdmF0ZWQgPyAnYWN0aXZhdGVfbGljZW5zZScgOiAnZGVhY3RpdmF0ZV9saWNlbnNlJztcblx0XHR9LFxuXG5cdFx0aW5zdGFsbGVkQWRkb25MaXN0KCkge1xuXHRcdFx0bGV0IGluc3RhbGxlZEFkZG9uc0xpc3QgPSB7fTtcblxuXHRcdFx0Zm9yICggbGV0IGFkZG9uU2x1ZyBpbiB0aGlzLmFsbEFkZG9ucyApIHtcblxuXHRcdFx0XHRpZiAoIHRoaXMuYWxsQWRkb25zWyBhZGRvblNsdWcgXVsgJ2lzSW5zdGFsbGVkJyBdICkge1xuXHRcdFx0XHRcdGluc3RhbGxlZEFkZG9uc0xpc3RbIGFkZG9uU2x1ZyBdID0gdGhpcy5hbGxBZGRvbnNbIGFkZG9uU2x1ZyBdO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBpbnN0YWxsZWRBZGRvbnNMaXN0O1xuXHRcdH0sXG5cblx0XHRhdmFpbGFibGVBZGRvbkxpc3QoKSB7XG5cdFx0XHRsZXQgYXZhaWxhYmxlQWRkb25MaXN0ID0ge307XG5cblx0XHRcdGZvciAoIGxldCBhZGRvblNsdWcgaW4gdGhpcy5hbGxBZGRvbnMgKSB7XG5cblx0XHRcdFx0aWYgKCAhIHRoaXMuYWxsQWRkb25zWyBhZGRvblNsdWcgXVsgJ2lzSW5zdGFsbGVkJyBdICkge1xuXHRcdFx0XHRcdGF2YWlsYWJsZUFkZG9uTGlzdFsgYWRkb25TbHVnIF0gPSB0aGlzLmFsbEFkZG9uc1sgYWRkb25TbHVnIF07XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGF2YWlsYWJsZUFkZG9uTGlzdDtcblx0XHR9LFxuXG5cdFx0Z29Qcm9MaW5rKCkge1xuXHRcdFx0bGV0IHByaWNpbmdQYWdlVXJsID0gdGhpcy5taXNjSW5mby5wcmljaW5nUGFnZVVybCxcblx0XHRcdFx0dXRtUGFyYW1zID0gdGhpcy5nZXRVdG1QYXJhbXNTdHJpbmcoIHtcblx0XHRcdFx0XHR1dG1fc291cmNlOiBgZGFzaGJvYXJkL2pldC1mb3JtLWJ1aWxkZXItYWRkb25zLXBhZ2VgLFxuXHRcdFx0XHRcdHV0bV9tZWRpdW06IGBjcm9jb2Jsb2NrLWxpY2Vuc2UvJHsgdGhpcy50aGVtZUluZm8udGhlbWUgfWAsXG5cdFx0XHRcdFx0dXRtX2NhbXBhaWduOiAnZ28tcHJvLWJ1dHRvbicsXG5cdFx0XHRcdH0gKTtcblxuXHRcdFx0cmV0dXJuIGAkeyBwcmljaW5nUGFnZVVybCB9PyR7IHV0bVBhcmFtcyB9YDtcblx0XHR9XG5cdH0sXG5cdG1ldGhvZHM6IHtcblx0XHRzaG93TGljZW5zZVBvcHVwKCkge1xuXHRcdFx0dGhpcy5saWNlbnNlUG9wdXBWaXNpYmxlID0gdHJ1ZTtcblx0XHR9LFxuXG5cdFx0dXBkYXRlQWRkb25EYXRhKCBkYXRhICkge1xuXHRcdFx0bGV0IHNsdWcgPSBkYXRhLnNsdWcsXG5cdFx0XHRcdGFkZG9uRGF0YSA9IGRhdGEuYWRkb25EYXRhLFxuXHRcdFx0XHRwbHVnaW5BY3Rpb24gPSBkYXRhLmFjdGlvbixcblx0XHRcdFx0cmVsb2FkQWN0aW9uTWFwID0gWyAnYWN0aXZhdGUnLCAnZGVhY3RpdmF0ZScsICd1cGRhdGUnIF07XG5cblx0XHRcdHRoaXMuYWxsQWRkb25zWyBzbHVnIF0gPSBPYmplY3QuYXNzaWduKCB7fSwgdGhpcy5hbGxBZGRvbnNbIHNsdWcgXSwgYWRkb25EYXRhICk7XG5cblx0XHRcdGlmICggcmVsb2FkQWN0aW9uTWFwLmluY2x1ZGVzKCBwbHVnaW5BY3Rpb24gKSApIHtcblx0XHRcdFx0dGhpcy5wcm9jY2VzaW5nU3RhdGUgPSB0cnVlO1xuXG5cdFx0XHRcdHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcblx0XHRcdFx0fSwgMTAwMCApO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRsaWNlbnNlQWN0aW9uKCkge1xuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0XHRpZiAoICcnID09PSB0aGlzLmxpY2Vuc2VLZXkgKSB7XG5cdFx0XHRcdHNlbGYuJENYTm90aWNlLmFkZCgge1xuXHRcdFx0XHRcdG1lc3NhZ2U6ICdMaWNlbnNlIGtleSBpcyBtaXNzaW5nJyxcblx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0XHRcdGR1cmF0aW9uOiA0MDAwLFxuXHRcdFx0XHR9ICk7XG5cblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmxpY2Vuc2VQcm9jY2VzaW5nU3RhdGUgPSB0cnVlO1xuXG5cdFx0XHRzZWxmLmxpY2Vuc2VBamF4QWN0aW9uID0galF1ZXJ5LmFqYXgoIHtcblx0XHRcdFx0dHlwZTogJ1BPU1QnLFxuXHRcdFx0XHR1cmw6IHdpbmRvdy5KZXRGQlBhZ2VDb25maWcuYWpheFVybCxcblx0XHRcdFx0ZGF0YVR5cGU6ICdqc29uJyxcblx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdGFjdGlvbjogJ2pmYl9saWNlbnNlX2FjdGlvbicsXG5cdFx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdFx0bGljZW5zZTogc2VsZi5saWNlbnNlS2V5LFxuXHRcdFx0XHRcdFx0YWN0aW9uOiBzZWxmLmxpY2Vuc2VBY3Rpb25UeXBlXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRiZWZvcmVTZW5kOiAoIGpxWEhSLCBhamF4U2V0dGluZ3MgKSA9PiB7XG5cblx0XHRcdFx0XHRpZiAoIG51bGwgIT09IHNlbGYubGljZW5zZUFqYXhBY3Rpb24gKSB7XG5cdFx0XHRcdFx0XHRzZWxmLmxpY2Vuc2VBamF4QWN0aW9uLmFib3J0KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRzdWNjZXNzOiAoIHJlc3BvbmNlLCB0ZXh0U3RhdHVzLCBqcVhIUiApID0+IHtcblx0XHRcdFx0XHRzZWxmLmxpY2Vuc2VQcm9jY2VzaW5nU3RhdGUgPSBmYWxzZTtcblxuXHRcdFx0XHRcdGlmICggcmVzcG9uY2Uuc3VjY2VzcyApIHtcblx0XHRcdFx0XHRcdHNlbGYuJENYTm90aWNlLmFkZCgge1xuXHRcdFx0XHRcdFx0XHRtZXNzYWdlOiByZXNwb25jZS5tZXNzYWdlLFxuXHRcdFx0XHRcdFx0XHR0eXBlOiAnc3VjY2VzcycsXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiA0MDAwLFxuXHRcdFx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdFx0XHRsZXQgbGljZW5zZURhdGEgPSByZXNwb25jZS5kYXRhO1xuXG5cdFx0XHRcdFx0XHRsaWNlbnNlRGF0YVsnbGljZW5zZV9rZXknXSA9IHNlbGYubGljZW5zZUtleTtcblxuXHRcdFx0XHRcdFx0c3dpdGNoICggc2VsZi5saWNlbnNlQWN0aW9uVHlwZSApIHtcblx0XHRcdFx0XHRcdFx0Y2FzZSAnYWN0aXZhdGVfbGljZW5zZSc6XG5cblx0XHRcdFx0XHRcdFx0XHRzZWxmLmxpY2Vuc2VMaXN0LnB1c2goIGxpY2Vuc2VEYXRhICk7XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ2RlYWN0aXZhdGVfbGljZW5zZSc6XG5cblx0XHRcdFx0XHRcdFx0XHRzZWxmLmxpY2Vuc2VMaXN0ID0gc2VsZi5saWNlbnNlTGlzdC5maWx0ZXIoICggbGljZW5zZURhdGEgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gc2VsZi5saWNlbnNlS2V5ICE9PSBsaWNlbnNlRGF0YVsnbGljZW5zZV9rZXknXTtcblx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cblx0XHRcdFx0XHRcdFx0XHRzZWxmLmxpY2Vuc2VLZXkgPSAnJztcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0c2VsZi5saWNlbnNlUG9wdXBWaXNpYmxlID0gZmFsc2U7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHNlbGYuJENYTm90aWNlLmFkZCgge1xuXHRcdFx0XHRcdFx0XHRtZXNzYWdlOiByZXNwb25jZS5tZXNzYWdlLFxuXHRcdFx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogNDAwMCxcblx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHR9LFxuXG5cdFx0Y2hlY2tQbHVnaW5zVXBkYXRlOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdFx0c2VsZi5jaGVja1VwZGF0ZXNBY3Rpb24gPSBqUXVlcnkuYWpheCgge1xuXHRcdFx0XHR0eXBlOiAnUE9TVCcsXG5cdFx0XHRcdHVybDogd2luZG93LkpldEZCUGFnZUNvbmZpZy5hamF4VXJsLFxuXHRcdFx0XHRkYXRhVHlwZTogJ2pzb24nLFxuXHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0YWN0aW9uOiAnamZiX2xpY2Vuc2Vfc2VydmljZV9hY3Rpb24nLFxuXHRcdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRcdGFjdGlvbjogJ2NoZWNrLXBsdWdpbi11cGRhdGUnXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRiZWZvcmVTZW5kOiAoIGpxWEhSLCBhamF4U2V0dGluZ3MgKSA9PiB7XG5cblx0XHRcdFx0XHRpZiAoIG51bGwgIT09IHNlbGYuY2hlY2tVcGRhdGVzQWN0aW9uICkge1xuXHRcdFx0XHRcdFx0c2VsZi5jaGVja1VwZGF0ZXNBY3Rpb24uYWJvcnQoKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRzZWxmLmNoZWNrVXBkYXRlc1Byb2Nlc3NlZCA9IHRydWU7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKCByZXNwb25jZSwgdGV4dFN0YXR1cywganFYSFIgKSB7XG5cdFx0XHRcdFx0c2VsZi5jaGVja1VwZGF0ZXNQcm9jZXNzZWQgPSBmYWxzZTtcblxuXHRcdFx0XHRcdGlmICggcmVzcG9uY2Uuc3VjY2VzcyApIHtcblx0XHRcdFx0XHRcdHNlbGYuJENYTm90aWNlLmFkZCgge1xuXHRcdFx0XHRcdFx0XHRtZXNzYWdlOiByZXNwb25jZS5tZXNzYWdlLFxuXHRcdFx0XHRcdFx0XHR0eXBlOiAnc3VjY2VzcycsXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiA0MDAwLFxuXHRcdFx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdFx0XHRzZWxmLnByb2NjZXNpbmdTdGF0ZSA9IHRydWU7XG5cblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG5cdFx0XHRcdFx0XHR9LCAxMDAwICk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHNlbGYuJENYTm90aWNlLmFkZCgge1xuXHRcdFx0XHRcdFx0XHRtZXNzYWdlOiByZXNwb25jZS5tZXNzYWdlLFxuXHRcdFx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogNDAwMCxcblx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHR9LFxuXG5cdFx0YWRkTGljZW5zZSggbGljZW5zZURhdGEgKSB7XG5cdFx0XHR0aGlzLmxpY2Vuc2VMaXN0LnB1c2goIGxpY2Vuc2VEYXRhICk7XG5cblx0XHRcdHNlbGYucHJvY2Nlc2luZ1N0YXRlID0gdHJ1ZTtcblxuXHRcdFx0c2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcblx0XHRcdH0sIDMwMDAgKTtcblx0XHR9LFxuXG5cdFx0cmVtb3ZlTGljZW5zZSggbGljZW5jZUtleSApIHtcblxuXHRcdFx0bGV0IHJlbW92aW5nSW5kZXggPSBmYWxzZTtcblxuXHRcdFx0Zm9yICggbGV0IGxpY2VuY2VJbmRleCBpbiB0aGlzLmxpY2Vuc2VMaXN0ICkge1xuXHRcdFx0XHRsZXQgbGljZW5zZURhdGEgPSAgdGhpcy5saWNlbnNlTGlzdFsgbGljZW5jZUluZGV4IF07XG5cblx0XHRcdFx0aWYgKCBsaWNlbnNlRGF0YVsnbGljZW5zZUtleSddID09PSBsaWNlbmNlS2V5ICkge1xuXHRcdFx0XHRcdHJlbW92aW5nSW5kZXggPSBsaWNlbmNlSW5kZXg7XG5cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIHJlbW92aW5nSW5kZXggKSB7XG5cdFx0XHRcdHRoaXMubGljZW5zZUxpc3Quc3BsaWNlKCByZW1vdmluZ0luZGV4LCAxICk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMubGljZW5zZVBvcHVwVmlzaWJsZSA9IGZhbHNlO1xuXG5cdFx0XHRzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcblx0XHRcdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuXHRcdFx0fSwgNTAwICk7XG5cdFx0fSxcblxuXHRcdGdldFV0bVBhcmFtc1N0cmluZyggZGF0YSA9IHt9ICkge1xuXHRcdFx0bGV0IHV0bVN0cmluZyA9IGZhbHNlO1xuXG5cdFx0XHRpZiAoIDAgPT09IE9iamVjdC5rZXlzKCBkYXRhICkubGVuZ3RoICkge1xuXHRcdFx0XHRyZXR1cm4gdXRtU3RyaW5nO1xuXHRcdFx0fVxuXG5cdFx0XHR1dG1TdHJpbmcgPSBPYmplY3Qua2V5cyggZGF0YSApLm1hcCggKCBrZXkgKSA9PiB7XG5cdFx0XHRcdHJldHVybiBbIGtleSwgZGF0YVsga2V5IF0gXS5tYXAoIGVuY29kZVVSSUNvbXBvbmVudCApLmpvaW4oICc9JyApO1xuXHRcdFx0fSApLmpvaW4oICcmJyApO1xuXG5cdFx0XHRyZXR1cm4gdXRtU3RyaW5nO1xuXHRcdH1cblx0fSxcbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cblxuLnByb2NjZXNpbmctc3RhdGUge1xuXHRvcGFjaXR5OiAwLjU7XG5cdHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uamZiLWFkZG9ucy1wYWdlIHtcblxuXHQmX19pbm5lciB7XG5cdFx0cGFkZGluZzogMzBweDtcblx0XHRoZWlnaHQ6IDEwMCU7XG5cdH1cblxuXHQmX19oZWFkZXIge1xuXHRcdG1hcmdpbi1ib3R0b206IDMwcHg7XG5cdH1cblxuXHQmX19oZWFkZXItY29udHJvbHMge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdHBhZGRpbmctYm90dG9tOiAxNXB4O1xuXHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRENEQ0REO1xuXG5cdFx0PiAuY3gtdnVpLWJ1dHRvbiB7XG5cdFx0XHRtYXJnaW4tbGVmdDogMTBweDtcblx0XHR9XG5cdH1cblxuXHQuY3gtdnVpLWJ1dHRvbiB7XG5cdFx0Zm9udC1zaXplOiAxM3B4O1xuXHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cblx0XHQuYnV0dG9uLWljb24ge1xuXHRcdFx0bWFyZ2luLXJpZ2h0OiA1cHg7XG5cdFx0fVxuXG5cdFx0Ji0tc3R5bGUtYWNjZW50IHtcblx0XHRcdGNvbG9yOiAjMDA3Y2JhO1xuXHRcdFx0Ym94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICMwMDdjYmE7XG5cblx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3Y2JhMTI7XG5cdFx0XHR9XG5cblx0XHRcdC5idXR0b24taWNvbiB7XG5cdFx0XHRcdHBhdGgge1xuXHRcdFx0XHRcdGZpbGw6ICMwMDdjYmE7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQmLS1zdHlsZS1kYW5nZXIge1xuXHRcdFx0Y29sb3I6ICNkNjMzNmM7XG5cdFx0XHRib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggI2Q2MzM2YztcblxuXHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNkNjMzNmMxMjtcblx0XHRcdH1cblxuXHRcdFx0LmJ1dHRvbi1pY29uIHtcblx0XHRcdFx0cGF0aCB7XG5cdFx0XHRcdFx0ZmlsbDogI2Q2MzM2Yztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdCZfX2NvbnRlbnQge1xuXHRcdFx0PiBzcGFuIHtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LmN4LXZ1aS1wb3B1cCB7XG5cdFx0Jl9faGVhZGVyIHtcblx0XHRcdHBhZGRpbmctYm90dG9tOiAxNXB4O1xuXHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEQ0RDREQ7XG5cdFx0XHRtYXJnaW4tYm90dG9tOiAzMHB4O1xuXHRcdH1cblxuXHRcdCZfX2hlYWRlci10aXRsZSB7XG5cdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0Zm9udC1zaXplOiAyNHB4O1xuXHRcdFx0bGluZS1oZWlnaHQ6IDM2cHg7XG5cdFx0XHRjb2xvcjogIzIzMjgyRDtcblx0XHR9XG5cdH1cblxuXHQmX19saWNlbnNlLXBvcHVwIHtcblxuXHR9XG5cblx0Jl9fbGljZW5zZS1mb3JtIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHRcdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuXG5cdFx0PiBzcGFuIHtcblx0XHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XG5cdFx0fVxuXHR9XG5cblx0Jl9fbGljZW5zZS1pbnB1dCB7XG5cdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0fVxuXG5cdC5nby1wcm8tYmFubmVyIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRwYWRkaW5nOiAyNHB4IDA7XG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEQ0RDREQ7XG5cblx0XHQmX19zdWJ0aXRsZSB7XG5cdFx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0XHRsaW5lLWhlaWdodDogMS4yNTtcblx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRjb2xvcjogIzAwN0NCQTtcblx0XHRcdG1hcmdpbi1ib3R0b206IDVweDtcblx0XHR9XG5cblx0XHQmX190aXRsZSB7XG5cdFx0XHRmb250LXNpemU6IDI0cHg7XG5cdFx0XHRsaW5lLWhlaWdodDogMS4yNTtcblx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRjb2xvcjogIzIzMjgyRDtcblx0XHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XG5cdFx0fVxuXG5cdFx0Jl9fYnV0dG9uIHtcblx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDdDQkE7XG5cdFx0fVxuXHR9XG59XG5cbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxuXHQ8ZGl2XG5cdFx0Y2xhc3M9XCJqZmItYWRkb25zX19pdGVtXCJcblx0XHQ6Y2xhc3M9XCJ7XG5cdFx0XHQnYWN0aXZhdGVkJzogYWRkb25EYXRhLmlzQWN0aXZhdGVkLFxuXHRcdFx0J3VwZGF0ZS1hdmFsaWFibGUnOiB1cGRhdGVBdmFsaWFibGUsXG5cdFx0fVwiXG5cdD5cblx0XHQ8ZGl2XG5cdFx0XHRjbGFzcz1cImpmYi1hZGRvbnNfX2l0ZW0taW5uZXJcIlxuXHRcdFx0OmNsYXNzPVwieyAncHJvY2Nlc2luZy1zdGF0ZSc6IHByb2NjZXNpbmdTdGF0ZSB9XCJcblx0XHQ+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiamZiLWFkZG9uc19faXRlbS10aHVtYlwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwicHJvLWJhZGdlXCIgdi1pZj1cIiFhZGRvbkRhdGEuaXNJbnN0YWxsZWRcIj5cblx0XHRcdFx0XHQ8c3ZnIHdpZHRoPVwiNDBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgNDAgMjBcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cblx0XHRcdFx0XHRcdDxyZWN0IHdpZHRoPVwiNDBcIiBoZWlnaHQ9XCIyMFwiIHJ4PVwiNFwiIGZpbGw9XCIjRUU3QjE2XCIvPlxuXHRcdFx0XHRcdFx0PHBhdGggZD1cIk0xMC42MjUgMTAuODMwMVYxNEg5LjE0MjU4VjUuNDY4NzVIMTIuNDA2MkMxMy4zNTk0IDUuNDY4NzUgMTQuMTE1MiA1LjcxNjggMTQuNjczOCA2LjIxMjg5QzE1LjIzNjMgNi43MDg5OCAxNS41MTc2IDcuMzY1MjMgMTUuNTE3NiA4LjE4MTY0QzE1LjUxNzYgOS4wMTc1OCAxNS4yNDIyIDkuNjY3OTcgMTQuNjkxNCAxMC4xMzI4QzE0LjE0NDUgMTAuNTk3NyAxMy4zNzcgMTAuODMwMSAxMi4zODg3IDEwLjgzMDFIMTAuNjI1Wk0xMC42MjUgOS42NDA2MkgxMi40MDYyQzEyLjkzMzYgOS42NDA2MiAxMy4zMzU5IDkuNTE3NTggMTMuNjEzMyA5LjI3MTQ4QzEzLjg5MDYgOS4wMjE0OCAxNC4wMjkzIDguNjYyMTEgMTQuMDI5MyA4LjE5MzM2QzE0LjAyOTMgNy43MzI0MiAxMy44ODg3IDcuMzY1MjMgMTMuNjA3NCA3LjA5MThDMTMuMzI2MiA2LjgxNDQ1IDEyLjkzOTUgNi42NzE4OCAxMi40NDczIDYuNjY0MDZIMTAuNjI1VjkuNjQwNjJaTTE5Ljk1MzEgMTAuNzEyOUgxOC4zMDA4VjE0SDE2LjgxODRWNS40Njg3NUgxOS44MTg0QzIwLjgwMjcgNS40Njg3NSAyMS41NjI1IDUuNjg5NDUgMjIuMDk3NyA2LjEzMDg2QzIyLjYzMjggNi41NzIyNyAyMi45MDA0IDcuMjEwOTQgMjIuOTAwNCA4LjA0Njg4QzIyLjkwMDQgOC42MTcxOSAyMi43NjE3IDkuMDk1NyAyMi40ODQ0IDkuNDgyNDJDMjIuMjEwOSA5Ljg2NTIzIDIxLjgyODEgMTAuMTYwMiAyMS4zMzU5IDEwLjM2NzJMMjMuMjUyIDEzLjkyMzhWMTRIMjEuNjY0MUwxOS45NTMxIDEwLjcxMjlaTTE4LjMwMDggOS41MjM0NEgxOS44MjQyQzIwLjMyNDIgOS41MjM0NCAyMC43MTQ4IDkuMzk4NDQgMjAuOTk2MSA5LjE0ODQ0QzIxLjI3NzMgOC44OTQ1MyAyMS40MTggOC41NDg4MyAyMS40MTggOC4xMTEzM0MyMS40MTggNy42NTQzIDIxLjI4NzEgNy4zMDA3OCAyMS4wMjU0IDcuMDUwNzhDMjAuNzY3NiA2LjgwMDc4IDIwLjM4MDkgNi42NzE4OCAxOS44NjUyIDYuNjY0MDZIMTguMzAwOFY5LjUyMzQ0Wk0zMS4xMTUyIDkuOTU3MDNDMzEuMTE1MiAxMC43OTMgMzAuOTcwNyAxMS41MjczIDMwLjY4MTYgMTIuMTYwMkMzMC4zOTI2IDEyLjc4OTEgMjkuOTc4NSAxMy4yNzM0IDI5LjQzOTUgMTMuNjEzM0MyOC45MDQzIDEzLjk0OTIgMjguMjg3MSAxNC4xMTcyIDI3LjU4NzkgMTQuMTE3MkMyNi44OTY1IDE0LjExNzIgMjYuMjc5MyAxMy45NDkyIDI1LjczNjMgMTMuNjEzM0MyNS4xOTczIDEzLjI3MzQgMjQuNzc5MyAxMi43OTEgMjQuNDgyNCAxMi4xNjZDMjQuMTg5NSAxMS41NDEgMjQuMDQxIDEwLjgyMDMgMjQuMDM3MSAxMC4wMDM5VjkuNTIzNDRDMjQuMDM3MSA4LjY5MTQxIDI0LjE4MzYgNy45NTcwMyAyNC40NzY2IDcuMzIwMzFDMjQuNzczNCA2LjY4MzU5IDI1LjE4OTUgNi4xOTcyNyAyNS43MjQ2IDUuODYxMzNDMjYuMjYzNyA1LjUyMTQ4IDI2Ljg4MDkgNS4zNTE1NiAyNy41NzYyIDUuMzUxNTZDMjguMjcxNSA1LjM1MTU2IDI4Ljg4NjcgNS41MTk1MyAyOS40MjE5IDUuODU1NDdDMjkuOTYwOSA2LjE4NzUgMzAuMzc3IDYuNjY3OTcgMzAuNjY5OSA3LjI5Njg4QzMwLjk2MjkgNy45MjE4OCAzMS4xMTEzIDguNjUwMzkgMzEuMTE1MiA5LjQ4MjQyVjkuOTU3MDNaTTI5LjYzMjggOS41MTE3MkMyOS42MzI4IDguNTY2NDEgMjkuNDUzMSA3Ljg0MTggMjkuMDkzOCA3LjMzNzg5QzI4LjczODMgNi44MzM5OCAyOC4yMzI0IDYuNTgyMDMgMjcuNTc2MiA2LjU4MjAzQzI2LjkzNTUgNi41ODIwMyAyNi40MzM2IDYuODMzOTggMjYuMDcwMyA3LjMzNzg5QzI1LjcxMDkgNy44Mzc4OSAyNS41MjczIDguNTQ2ODggMjUuNTE5NSA5LjQ2NDg0VjkuOTU3MDNDMjUuNTE5NSAxMC44OTQ1IDI1LjcwMTIgMTEuNjE5MSAyNi4wNjQ1IDEyLjEzMDlDMjYuNDMxNiAxMi42NDI2IDI2LjkzOTUgMTIuODk4NCAyNy41ODc5IDEyLjg5ODRDMjguMjQ0MSAxMi44OTg0IDI4Ljc0OCAxMi42NDg0IDI5LjA5OTYgMTIuMTQ4NEMyOS40NTUxIDExLjY0ODQgMjkuNjMyOCAxMC45MTggMjkuNjMyOCA5Ljk1NzAzVjkuNTExNzJaXCIgZmlsbD1cIndoaXRlXCIvPlxuXHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGltZyA6c3JjPVwiYWRkb25EYXRhLnRodW1iXCIgYWx0PVwiXCI+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJqZmItYWRkb25zX19pdGVtLWluZm9cIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImpmYi1hZGRvbnNfX2l0ZW0tbmFtZVwiPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwibGFiZWxcIj57eyBhZGRvbkRhdGEubmFtZSB9fTwvc3Bhbj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInZlcnNpb25cIj57eyBhZGRvbkRhdGEuY3VycmVudFZlcnNpb24gfX08L3NwYW4+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0Y2xhc3M9XCJqZmItYWRkb25zX19pdGVtLXVwZGF0ZVwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8ZGl2IHYtaWY9XCIhdXBkYXRlQXZhbGlhYmxlXCI+WW91ciBwbHVnaW4gaXMgdXAgdG8gZGF0ZTwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgdi1pZj1cInVwZGF0ZUF2YWxpYWJsZVwiPlxuXHRcdFx0XHRcdFx0VmVyc2lvbiA8c3BhbiBjbGFzcz1cImxhdGVzdC12ZXJzaW9uXCI+e3sgYWRkb25EYXRhLnZlcnNpb24gfX08L3NwYW4+IGF2YWlsYWJsZVxuXHRcdFx0XHRcdFx0PGN4LXZ1aS1idXR0b25cblx0XHRcdFx0XHRcdFx0YnV0dG9uLXN0eWxlPVwibGluay1hY2NlbnRcIlxuXHRcdFx0XHRcdFx0XHRzaXplPVwibGlua1wiXG5cdFx0XHRcdFx0XHRcdDpsb2FkaW5nPVwidXBkYXRlUGx1Z2luUHJvY2Vzc2VkXCJcblx0XHRcdFx0XHRcdFx0QGNsaWNrPVwidXBkYXRlUGx1Z2luXCJcblx0XHRcdFx0XHRcdFx0di1pZj1cIiFhY3RpdmF0ZUxpY2VuY2VBY3Rpb25BdmFsaWFibGUgJiYgaXNMaWNlbnNlTW9kZVwiXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIHNsb3Q9XCJsYWJlbFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuPlVwZGF0ZSBOb3c8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvY3gtdnVpLWJ1dHRvbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRjbGFzcz1cImpmYi1hZGRvbnNfX2l0ZW0tbGljZW5zZVwiXG5cdFx0XHRcdFx0di1pZj1cImFjdGl2YXRlTGljZW5jZUFjdGlvbkF2YWxpYWJsZVwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8c3Bhbj5MaWNlbnNlIG5vdCBhY3RpdmF0ZWQ8L3NwYW4+XG5cdFx0XHRcdFx0PGN4LXZ1aS1idXR0b25cblx0XHRcdFx0XHRcdGJ1dHRvbi1zdHlsZT1cImxpbmstYWNjZW50XCJcblx0XHRcdFx0XHRcdHNpemU9XCJsaW5rXCJcblx0XHRcdFx0XHRcdEBjbGljaz1cImFjdGl2YXRlTGljZW5zZVwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PHNwYW4gc2xvdD1cImxhYmVsXCI+XG5cdFx0XHRcdFx0XHRcdDxzcGFuPkFjdGl2YXRlIE5vdzwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHQ8L2N4LXZ1aS1idXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0Y2xhc3M9XCJqZmItYWRkb25zX19pdGVtLWRlc2NcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PHNwYW4gdi1odG1sPVwiYWRkb25EYXRhLmRlc2NcIj48L3NwYW4+XG5cdFx0XHRcdFx0PGEgOmhyZWY9XCJsZWFybk1vcmVVcmxcIiB0YXJnZXQ9XCJfYmxhbmtcIj5MZWFybiBNb3JlPC9hPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImpmYi1hZGRvbnNfX2l0ZW0tYWN0aW9uc1wiPlxuXG5cdFx0XHRcdFx0PGN4LXZ1aS1idXR0b25cblx0XHRcdFx0XHRcdGJ1dHRvbi1zdHlsZT1cImxpbmstYWNjZW50XCJcblx0XHRcdFx0XHRcdHNpemU9XCJsaW5rXCJcblx0XHRcdFx0XHRcdDpsb2FkaW5nPVwiYWN0aW9uUGx1Z2luUHJvY2Vzc2VkXCJcblx0XHRcdFx0XHRcdHYtaWY9XCJpbnN0YWxsQWN0aW9uQXZhbGlhYmxlXCJcblx0XHRcdFx0XHRcdEBjbGljaz1cImluc3RhbGxQbHVnaW5cIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxzcGFuIHNsb3Q9XCJsYWJlbFwiPlxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj5JbnN0YWxsIEFkZG9uPC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdDwvY3gtdnVpLWJ1dHRvbj5cblx0XHRcdFx0XHQ8Y3gtdnVpLWJ1dHRvblxuXHRcdFx0XHRcdFx0YnV0dG9uLXN0eWxlPVwibGluay1hY2NlbnRcIlxuXHRcdFx0XHRcdFx0c2l6ZT1cImxpbmtcIlxuXHRcdFx0XHRcdFx0OmxvYWRpbmc9XCJhY3Rpb25QbHVnaW5Qcm9jZXNzZWRcIlxuXHRcdFx0XHRcdFx0di1pZj1cImFjdGl2YXRlQWN0aW9uQXZhbGlhYmxlXCJcblx0XHRcdFx0XHRcdEBjbGljaz1cImFjdGl2YXRlUGx1Z2luXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8c3BhbiBzbG90PVwibGFiZWxcIj5cblx0XHRcdFx0XHRcdFx0PHNwYW4+QWN0aXZhdGUgQWRkb248L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0PC9jeC12dWktYnV0dG9uPlxuXHRcdFx0XHRcdDxjeC12dWktYnV0dG9uXG5cdFx0XHRcdFx0XHRidXR0b24tc3R5bGU9XCJsaW5rLWVycm9yXCJcblx0XHRcdFx0XHRcdHNpemU9XCJsaW5rXCJcblx0XHRcdFx0XHRcdDpsb2FkaW5nPVwiYWN0aW9uUGx1Z2luUHJvY2Vzc2VkXCJcblx0XHRcdFx0XHRcdHYtaWY9XCJkZWFjdGl2YXRlQWN0aW9uQXZhbGlhYmxlXCJcblx0XHRcdFx0XHRcdEBjbGljaz1cImRlYWN0aXZhdGVQbHVnaW5cIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxzcGFuIHNsb3Q9XCJsYWJlbFwiPlxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj5EZWFjdGl2YXRlIEFkZG9uPC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdDwvY3gtdnVpLWJ1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0bmFtZTogJ2FkZG9uLWl0ZW0nLFxuXHRwcm9wczoge1xuXHRcdGFkZG9uRGF0YTogT2JqZWN0XG5cdH0sXG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGFjdGlvblBsdWdpbjogZmFsc2UsXG5cdFx0XHRhY3Rpb25QbHVnaW5SZXF1ZXN0OiBudWxsLFxuXHRcdFx0YWN0aW9uUGx1Z2luUHJvY2Vzc2VkOiBmYWxzZSxcblx0XHRcdHVwZGF0ZVBsdWdpblByb2Nlc3NlZDogZmFsc2UsXG5cdFx0fTtcblx0fSxcblx0Y29tcHV0ZWQ6IHtcblx0XHRjbGFzc0xpc3Q6IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIFtcblx0XHRcdFx0J2pmYi1hZGRvbnNfX2l0ZW0nLFxuXHRcdFx0XHR0aGlzLnVwZGF0ZUF2YWxpYWJsZSA/ICd1cGRhdGUtYXZhbGlhYmxlJyA6IGZhbHNlLFxuXHRcdFx0XHR0aGlzLmFjdGl2YXRlQXZhbGlhYmxlID8gJ2FjdGl2YXRlLWF2YWxpYWJsZScgOiBmYWxzZSxcblx0XHRcdF07XG5cdFx0fSxcblxuXHRcdGxlYXJuTW9yZUF2YWxpYWJsZSgpIHtcblx0XHRcdHJldHVybiAoICEgdGhpcy4kcGFyZW50LmlzTGljZW5zZUFjdGl2YXRlZCApID8gdHJ1ZSA6IGZhbHNlO1xuXHRcdH0sXG5cblx0XHRhY3RpdmF0ZUxpY2VuY2VBY3Rpb25BdmFsaWFibGUoKSB7XG5cdFx0XHRyZXR1cm4gKCAhIHRoaXMuJHBhcmVudC5pc0xpY2Vuc2VBY3RpdmF0ZWQgJiYgdGhpcy4kcGFyZW50LmlzTGljZW5zZU1vZGUgKSA/IHRydWUgOiBmYWxzZTtcblx0XHR9LFxuXG5cdFx0aW5zdGFsbEFjdGlvbkF2YWxpYWJsZSgpIHtcblx0XHRcdHJldHVybiAoICEgdGhpcy5hZGRvbkRhdGFbJ2lzSW5zdGFsbGVkJ10gJiYgdGhpcy4kcGFyZW50LmlzTGljZW5zZUFjdGl2YXRlZCApID8gdHJ1ZSA6IGZhbHNlO1xuXHRcdH0sXG5cblx0XHRhY3RpdmF0ZUFjdGlvbkF2YWxpYWJsZSgpIHtcblx0XHRcdHJldHVybiAoIHRoaXMuYWRkb25EYXRhWydpc0luc3RhbGxlZCddICYmICEgdGhpcy5hZGRvbkRhdGFbJ2lzQWN0aXZhdGVkJ10gKSA/IHRydWUgOiBmYWxzZTtcblx0XHR9LFxuXG5cdFx0ZGVhY3RpdmF0ZUFjdGlvbkF2YWxpYWJsZSgpIHtcblx0XHRcdHJldHVybiAoIHRoaXMuYWRkb25EYXRhWydpc0luc3RhbGxlZCddICYmIHRoaXMuYWRkb25EYXRhWydpc0FjdGl2YXRlZCddICkgPyB0cnVlIDogZmFsc2U7XG5cdFx0fSxcblxuXHRcdHVwZGF0ZUF2YWxpYWJsZSgpIHtcblx0XHRcdHJldHVybiAoIHRoaXMuYWRkb25EYXRhWyd1cGRhdGVBdmFsaWFibGUnXSApID8gdHJ1ZSA6IGZhbHNlO1xuXHRcdH0sXG5cblx0XHRpc0xpY2Vuc2VNb2RlKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuJHBhcmVudC5pc0xpY2Vuc2VNb2RlO1xuXHRcdH0sXG5cblx0XHRwcm9jY2VzaW5nU3RhdGUoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5hY3Rpb25QbHVnaW5Qcm9jZXNzZWQgfHwgdGhpcy51cGRhdGVQbHVnaW5Qcm9jZXNzZWQ7XG5cdFx0fSxcblxuXHRcdGxlYXJuTW9yZVVybCgpIHtcblx0XHRcdGxldCBkZW1vVXJsID0gdGhpcy5hZGRvbkRhdGEuZGVtbyxcblx0XHRcdFx0dXRtUGFyYW1zID0gdGhpcy4kcGFyZW50LmdldFV0bVBhcmFtc1N0cmluZygge1xuXHRcdFx0XHRcdHV0bV9zb3VyY2U6IGBkYXNoYm9hcmQvamV0LWZvcm0tYnVpbGRlci1hZGRvbnMtcGFnZWAsXG5cdFx0XHRcdFx0dXRtX21lZGl1bTogYGNyb2NvYmxvY2stbGljZW5zZS8keyB0aGlzLiRwYXJlbnQudGhlbWVJbmZvLnRoZW1lIH1gLFxuXHRcdFx0XHRcdHV0bV9jYW1wYWlnbjogJ2FkZG9uLWxlYXJuLW1vcmUnLFxuXHRcdFx0XHR9ICk7XG5cblx0XHRcdHJldHVybiBgJHsgZGVtb1VybCB9PyR7IHV0bVBhcmFtcyB9YDtcblx0XHR9XG5cblx0fSxcblx0bWV0aG9kczoge1xuXG5cdFx0YWN0aXZhdGVMaWNlbnNlKCkge1xuXHRcdFx0d2luZG93LmpmYkV2ZW50QnVzLiRlbWl0KCAnc2hvd0xpY2Vuc2VQb3B1cCcgKTtcblx0XHR9LFxuXG5cdFx0aW5zdGFsbFBsdWdpbigpIHtcblx0XHRcdHRoaXMuYWN0aW9uUGx1Z2luID0gJ2luc3RhbGwnO1xuXHRcdFx0dGhpcy5wbHVnaW5BY3Rpb24oKTtcblx0XHR9LFxuXG5cdFx0ZGVhY3RpdmF0ZVBsdWdpbigpIHtcblx0XHRcdHRoaXMuYWN0aW9uUGx1Z2luID0gJ2RlYWN0aXZhdGUnO1xuXHRcdFx0dGhpcy5wbHVnaW5BY3Rpb24oKTtcblx0XHR9LFxuXG5cdFx0YWN0aXZhdGVQbHVnaW4oKSB7XG5cdFx0XHR0aGlzLmFjdGlvblBsdWdpbiA9ICdhY3RpdmF0ZSc7XG5cdFx0XHR0aGlzLnBsdWdpbkFjdGlvbigpO1xuXHRcdH0sXG5cblx0XHR1cGRhdGVQbHVnaW4oKSB7XG5cblx0XHRcdGlmICggdGhpcy51cGRhdGVBdmFsaWFibGUgKSB7XG5cdFx0XHRcdHRoaXMuYWN0aW9uUGx1Z2luID0gJ3VwZGF0ZSc7XG5cdFx0XHRcdHRoaXMucGx1Z2luQWN0aW9uKCk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdHBsdWdpbkFjdGlvbjogZnVuY3Rpb24oKSB7XG5cdFx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cblx0XHRcdHNlbGYuYWN0aW9uUGx1Z2luUmVxdWVzdCA9IGpRdWVyeS5hamF4KCB7XG5cdFx0XHRcdHR5cGU6ICdQT1NUJyxcblx0XHRcdFx0dXJsOiB3aW5kb3cuSmV0RkJQYWdlQ29uZmlnLmFqYXhVcmwsXG5cdFx0XHRcdGRhdGFUeXBlOiAnanNvbicsXG5cdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRhY3Rpb246IGBqZmJfYWRkb25fJHsgc2VsZi5hY3Rpb25QbHVnaW4gfV9hY3Rpb25gLFxuXHRcdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRcdHBsdWdpbjogc2VsZi5hZGRvbkRhdGFbJ3NsdWcnXVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0YmVmb3JlU2VuZDogZnVuY3Rpb24oIGpxWEhSLCBhamF4U2V0dGluZ3MgKSB7XG5cblx0XHRcdFx0XHRpZiAoIG51bGwgIT09IHNlbGYuYWN0aW9uUGx1Z2luUmVxdWVzdCApIHtcblx0XHRcdFx0XHRcdHNlbGYuYWN0aW9uUGx1Z2luUmVxdWVzdC5hYm9ydCgpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHN3aXRjaCAoIHNlbGYuYWN0aW9uUGx1Z2luICkge1xuXHRcdFx0XHRcdFx0Y2FzZSAnaW5zdGFsbCc6XG5cdFx0XHRcdFx0XHRjYXNlICdhY3RpdmF0ZSc6XG5cdFx0XHRcdFx0XHRjYXNlICdkZWFjdGl2YXRlJzpcblx0XHRcdFx0XHRcdFx0c2VsZi5hY3Rpb25QbHVnaW5Qcm9jZXNzZWQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGNhc2UgJ3VwZGF0ZSc6XG5cdFx0XHRcdFx0XHRcdHNlbGYudXBkYXRlUGx1Z2luUHJvY2Vzc2VkID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbiggcmVzcG9uY2UsIHRleHRTdGF0dXMsIGpxWEhSICkge1xuXG5cdFx0XHRcdFx0c3dpdGNoICggc2VsZi5hY3Rpb25QbHVnaW4gKSB7XG5cdFx0XHRcdFx0XHRjYXNlICdpbnN0YWxsJzpcblx0XHRcdFx0XHRcdGNhc2UgJ2FjdGl2YXRlJzpcblx0XHRcdFx0XHRcdGNhc2UgJ2RlYWN0aXZhdGUnOlxuXHRcdFx0XHRcdFx0XHRzZWxmLmFjdGlvblBsdWdpblByb2Nlc3NlZCA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGNhc2UgJ3VwZGF0ZSc6XG5cdFx0XHRcdFx0XHRcdHNlbGYudXBkYXRlUGx1Z2luUHJvY2Vzc2VkID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICggcmVzcG9uY2Uuc3VjY2VzcyApIHtcblx0XHRcdFx0XHRcdHNlbGYuJENYTm90aWNlLmFkZCgge1xuXHRcdFx0XHRcdFx0XHRtZXNzYWdlOiByZXNwb25jZS5tZXNzYWdlLFxuXHRcdFx0XHRcdFx0XHR0eXBlOiAnc3VjY2VzcycsXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiA0MDAwLFxuXHRcdFx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdFx0XHR3aW5kb3cuamZiRXZlbnRCdXMuJGVtaXQoICd1cGRhdGVBZGRvbkRhdGEnLCB7XG5cdFx0XHRcdFx0XHRcdHNsdWc6IHNlbGYuYWRkb25EYXRhWydzbHVnJ10sXG5cdFx0XHRcdFx0XHRcdGFkZG9uRGF0YTogcmVzcG9uY2UuZGF0YSxcblx0XHRcdFx0XHRcdFx0YWN0aW9uOiBzZWxmLmFjdGlvblBsdWdpbixcblx0XHRcdFx0XHRcdH0gKTtcblxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRzZWxmLiRDWE5vdGljZS5hZGQoIHtcblx0XHRcdFx0XHRcdFx0bWVzc2FnZTogcmVzcG9uY2UubWVzc2FnZSxcblx0XHRcdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDQwMDAsXG5cdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHR9LFxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuXG4uamZiLWFkZG9ucyB7XG5cdG1hcmdpbi1ib3R0b206IDUwcHg7XG5cblx0JjpsYXN0LWNoaWxkIHtcblx0XHRtYXJnaW4tYm90dG9tOiAwO1xuXHR9XG5cblx0YSB7XG5cdFx0Y29sb3I6ICMwMDdjYmE7XG5cdH1cblxuXHQmX19oZWFkZXIge1xuXHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XG5cdH1cblxuXHQmX19saXN0IHtcblx0XHRkaXNwbGF5OiBncmlkO1xuXHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG5cdFx0Z2FwOiA0MHB4O1xuXG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6IDExNDBweCkge1xuXHRcdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcblx0XHR9XG5cdH1cblxuXHQmX19pdGVtIHtcblx0XHR0cmFuc2l0aW9uOiBib3gtc2hhZG93IC4zcyBlYXNlLW91dDtcblx0XHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXG5cdFx0Jjpob3ZlciB7XG5cdFx0XHRib3gtc2hhZG93OiAwcHggNHB4IDI4cHggcmdiYSgxNSwgMjMsIDQyLCAwLjEpO1xuXHRcdH1cblxuXHRcdCYuYWN0aXZhdGVkIHtcblx0XHRcdC5qZmItYWRkb25zX19pdGVtLWluZm8ge1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQmLnVwZGF0ZS1hdmFsaWFibGUge1xuXHRcdFx0LmpmYi1hZGRvbnNfX2l0ZW0tbmFtZSB7XG5cdFx0XHRcdC52ZXJzaW9uIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRDYzMzZDO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQuamZiLWFkZG9uc19faXRlbS11cGRhdGUge1xuXHRcdFx0XHQubGF0ZXN0LXZlcnNpb24ge1xuXHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjNDZCNDUwO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDJweCA4cHg7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Jl9faXRlbS1pbm5lciB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuXHRcdGhlaWdodDogMTAwJTtcblx0fVxuXG5cdCZfX2l0ZW0tdGh1bWIge1xuXHRcdGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XG5cdFx0bGluZS1oZWlnaHQ6IDA7XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cblx0XHQucHJvLWJhZGdlIHtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdHRvcDogMTJweDtcblx0XHRcdGxlZnQ6IDEycHg7XG5cdFx0fVxuXG5cdFx0aW1nIHtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdH1cblx0fVxuXG5cdCZfX2l0ZW0taW5mbyB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuXHRcdGZsZXg6IDEgMSBhdXRvO1xuXHRcdHBhZGRpbmc6IDIwcHg7XG5cdFx0Ym9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcblx0XHRib3JkZXItd2lkdGg6IDAgMXB4IDFweCAxcHg7XG5cdFx0Ym9yZGVyLWNvbG9yOiAjRENEQ0REO1xuXHRcdGJvcmRlci1zdHlsZTogc29saWQ7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cdH1cblxuXHQmX19pdGVtLW5hbWUge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XG5cblx0XHQubGFiZWwge1xuXHRcdFx0Zm9udC1zaXplOiAyMHB4O1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRcdGxpbmUtaGVpZ2h0OiAxLjI1O1xuXHRcdH1cblxuXHRcdC52ZXJzaW9uIHtcblx0XHRcdHBhZGRpbmc6IDFweCA4cHg7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjNDZCNDUwO1xuXHRcdFx0bWFyZ2luLWxlZnQ6IDEwcHg7XG5cdFx0fVxuXHR9XG5cblx0Jl9faXRlbS11cGRhdGUge1xuXHRcdGNvbG9yOiAjN2I3ZTgxO1xuXHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XG5cdH1cblxuXHQmX19pdGVtLWxpY2Vuc2Uge1xuXHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XG5cdFx0Y29sb3I6ICM3YjdlODE7XG5cblx0XHQuY3gtdnVpLWJ1dHRvbiB7XG5cdFx0XHRtYXJnaW4tbGVmdDogM3B4O1xuXHRcdH1cblx0fVxuXG5cdCZfX2l0ZW0tZGVzYyB7XG5cdFx0ZmxleDogMSAxIGF1dG87XG5cblx0XHRhIHtcblx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHR9XG5cdH1cblxuXHQmX19pdGVtLWFjdGlvbnMge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0ZmxleC13cmFwOiB3cmFwO1xuXHRcdG1hcmdpbi10b3A6IDIwcHg7XG5cblx0XHQmOmVtcHR5IHtcblx0XHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0fVxuXG5cdFx0LmN4LXZ1aS1idXR0b24ge1xuXHRcdFx0bWFyZ2luLXJpZ2h0OiAyMHB4O1xuXHRcdH1cblx0fVxufVxuXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cblx0PGRpdiBjbGFzcz1cImpldC1mYi1zZXR0aW5ncy1wYWdlIHdyYXBcIj5cblx0XHQ8aDEgY2xhc3M9XCJjcy12dWktdGl0bGVcIj57eyAnSmV0Rm9ybUJ1aWxkZXIgU2V0dGluZ3MnIH19PC9oMT5cblx0XHQ8ZGl2IGNsYXNzPVwiY3gtdnVpLXBhbmVsXCI+XG5cdFx0XHQ8Y3gtdnVpLXRhYnNcblx0XHRcdFx0OmluLXBhbmVsPVwiZmFsc2VcIlxuXHRcdFx0XHQ6dmFsdWU9XCJhY3RpdmVUYWJTbHVnXCJcblx0XHRcdFx0bGF5b3V0PVwidmVydGljYWxcIlxuXHRcdFx0PlxuXHRcdFx0XHQ8Y3gtdnVpLXRhYnMtcGFuZWxcblx0XHRcdFx0XHR2LWZvcj1cIiggeyBkaXNwbGF5QnV0dG9uID0gdHJ1ZSwgLi4udGFiIH0sIGluZGV4ICkgaW4gdGFic1wiXG5cdFx0XHRcdFx0Om5hbWU9XCJ0YWIuY29tcG9uZW50Lm5hbWVcIlxuXHRcdFx0XHRcdDpsYWJlbD1cInRhYi50aXRsZVwiXG5cdFx0XHRcdFx0OmtleT1cInRhYi5jb21wb25lbnQubmFtZVwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8a2VlcC1hbGl2ZT5cblx0XHRcdFx0XHRcdDxjb21wb25lbnRcblx0XHRcdFx0XHRcdFx0di1iaW5kOmlzPVwidGFiLmNvbXBvbmVudFwiXG5cdFx0XHRcdFx0XHRcdDppbmNvbWluZz1cImdldEluY29taW5nKCB0YWIuY29tcG9uZW50Lm5hbWUgKVwiXG5cdFx0XHRcdFx0XHRcdHJlZj1cInRhYkNvbXBvbmVudHNcIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2tlZXAtYWxpdmU+XG5cdFx0XHRcdFx0PGN4LXZ1aS1idXR0b25cblx0XHRcdFx0XHRcdHYtaWY9XCJkaXNwbGF5QnV0dG9uXCJcblx0XHRcdFx0XHRcdGJ1dHRvbi1zdHlsZT1cImFjY2VudFwiXG5cdFx0XHRcdFx0XHQ6bG9hZGluZz1cImxvYWRpbmdUYWJbIHRhYi5jb21wb25lbnQubmFtZSBdXCJcblx0XHRcdFx0XHRcdEBjbGljaz1cIm9uU2F2ZVRhYiggaW5kZXgsIHRhYi5jb21wb25lbnQubmFtZSApXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8dGVtcGxhdGUgI2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj5TYXZlPC9zcGFuPlxuXHRcdFx0XHRcdFx0PC90ZW1wbGF0ZT5cblx0XHRcdFx0XHQ8L2N4LXZ1aS1idXR0b24+XG5cdFx0XHRcdDwvY3gtdnVpLXRhYnMtcGFuZWw+XG5cdFx0XHQ8L2N4LXZ1aS10YWJzPlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgKiBhcyBjYXB0Y2hhIGZyb20gJy4vdGFicy9jYXB0Y2hhJ1xuaW1wb3J0ICogYXMgbWFpbGNoaW1wIGZyb20gJy4vdGFicy9tYWlsY2hpbXAnXG5pbXBvcnQgKiBhcyBnZXRSZXNwb25zZSBmcm9tICcuL3RhYnMvZ2V0cmVzcG9uc2UnXG5pbXBvcnQgKiBhcyBhY3RpdmVjYW1wYWlnbiBmcm9tICcuL3RhYnMvYWN0aXZlY2FtcGFpZ24nXG5pbXBvcnQgKiBhcyBwYXltZW50R2F0ZXdheXMgZnJvbSAnLi90YWJzL3BheW1lbnRzLWdhdGV3YXlzJ1xuaW1wb3J0IFNhdmVUYWJCeUFqYXggZnJvbSAnQGFkbWluL21peGlucy9TYXZlVGFiQnlBamF4JztcbmltcG9ydCBHZXRJbmNvbWluZyBmcm9tICdAYWRtaW4vbWl4aW5zL0dldEluY29taW5nJztcblxuY29uc3QgeyBhcHBseUZpbHRlcnMsIGRvQWN0aW9uIH0gPSB3cC5ob29rcztcblxud2luZG93LmpmYkV2ZW50QnVzID0gbmV3IFZ1ZSgpO1xuXG5jb25zdCBzZXR0aW5nVGFicyA9IGFwcGx5RmlsdGVycyggJ2pldC5mYi5yZWdpc3Rlci5zZXR0aW5ncy1wYWdlLnRhYnMnLCBbXG5cdHBheW1lbnRHYXRld2F5cyxcblx0Y2FwdGNoYSxcblx0bWFpbGNoaW1wLFxuXHRnZXRSZXNwb25zZSxcblx0YWN0aXZlY2FtcGFpZ24sXG5dICk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0bmFtZTogJ2pmYi1zZXR0aW5ncycsXG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGFjdGl2ZVRhYlNsdWc6IHNldHRpbmdUYWJzWyAwIF0uY29tcG9uZW50Lm5hbWUsXG5cdFx0XHR0YWJzOiBzZXR0aW5nVGFicyxcblx0XHRcdGxvYWRpbmdUYWI6IHt9LFxuXHRcdH07XG5cdH0sXG5cdG1peGluczogWyBTYXZlVGFiQnlBamF4LCBHZXRJbmNvbWluZyBdLFxuXHRjcmVhdGVkKCkge1xuXHRcdGpmYkV2ZW50QnVzLiRvbiggJ3JlcXVlc3Qtc3RhdGUnLCBwcm9wcyA9PiB7XG5cdFx0XHRjb25zdCB7IHN0YXRlLCBzbHVnIH0gPSBwcm9wcztcblx0XHRcdHRoaXMuJHNldCggdGhpcy5sb2FkaW5nVGFiLCBzbHVnLCBzdGF0ZSA9PT0gJ2JlZ2luJyApO1xuXHRcdH0gKTtcblx0fSxcblx0bWV0aG9kczoge1xuXHRcdG9uU2F2ZVRhYiggaW5kZXhUYWIsIHRhYlNsdWcgKSB7XG5cdFx0XHRjb25zdCBjdXJyZW50VGFiID0gdGhpcy4kcmVmcy50YWJDb21wb25lbnRzWyBpbmRleFRhYiBdO1xuXG5cdFx0XHR0aGlzLnNhdmVCeUFqYXgoIGN1cnJlbnRUYWIsIHRhYlNsdWcgKTtcblx0XHR9LFxuXHR9LFxufVxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuXHQ8c2VjdGlvbj5cblx0XHQ8Y3gtdnVpLWlucHV0XG5cdFx0XHQ6bGFiZWw9XCJsYWJlbC5jbGllbnRfaWRcIlxuXHRcdFx0OndyYXBwZXItY3NzPVwiWyAnZXF1YWx3aWR0aCcgXVwiXG5cdFx0XHQ6c2l6ZT1cIidmdWxsd2lkdGgnXCJcblx0XHRcdHYtbW9kZWw9XCJzdG9yYWdlLmNsaWVudF9pZFwiXG5cdFx0PjwvY3gtdnVpLWlucHV0PlxuXHRcdDxjeC12dWktaW5wdXRcblx0XHRcdDpsYWJlbD1cImxhYmVsLnNlY3JldFwiXG5cdFx0XHQ6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJyBdXCJcblx0XHRcdDpzaXplPVwiJ2Z1bGx3aWR0aCdcIlxuXHRcdFx0di1tb2RlbD1cInN0b3JhZ2Uuc2VjcmV0XCJcblx0XHQ+PC9jeC12dWktaW5wdXQ+XG5cdDwvc2VjdGlvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCB7XG5cdGhlbHAsXG5cdGxhYmVsLFxufSBmcm9tIFwiLi9zb3VyY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRuYW1lOiAncGF5cGFsJyxcblx0cHJvcHM6IHtcblx0XHRpbmNvbWluZzoge1xuXHRcdFx0dHlwZTogT2JqZWN0LFxuXHRcdFx0ZGVmYXVsdCgpIHtcblx0XHRcdFx0cmV0dXJuIHt9O1xuXHRcdFx0fSxcblx0XHR9LFxuXHR9LFxuXHRkYXRhKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRsYWJlbCwgaGVscCxcblx0XHRcdHN0b3JhZ2U6IHt9LFxuXHRcdH07XG5cdH0sXG5cdGNyZWF0ZWQoKSB7XG5cdFx0dGhpcy5zdG9yYWdlID0gSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIHRoaXMuaW5jb21pbmcgKSApO1xuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0Z2V0UmVxdWVzdE9uU2F2ZSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGRhdGE6IHsgLi4udGhpcy5zdG9yYWdlIH0sXG5cdFx0XHR9O1xuXHRcdH0sXG5cdH0sXG59XG5cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cblx0PGRpdj5cblx0XHQ8Y3gtdnVpLWlucHV0XG5cdFx0XHQ6bGFiZWw9XCJsYWJlbC5hcGlfa2V5XCJcblx0XHRcdDp3cmFwcGVyLWNzcz1cIlsgJ2VxdWFsd2lkdGgnIF1cIlxuXHRcdFx0OnNpemU9XCInZnVsbHdpZHRoJ1wiXG5cdFx0XHR2LW1vZGVsPVwiYXBpX2tleVwiXG5cdFx0Lz5cblx0XHQ8Y3gtdnVpLWlucHV0XG5cdFx0XHQ6bGFiZWw9XCJsYWJlbC5hcGlfdXJsXCJcblx0XHRcdDp3cmFwcGVyLWNzcz1cIlsgJ2VxdWFsd2lkdGgnIF1cIlxuXHRcdFx0OnNpemU9XCInZnVsbHdpZHRoJ1wiXG5cdFx0XHR2LW1vZGVsPVwiYXBpX3VybFwiXG5cdFx0Lz5cblx0XHQ8cCBjbGFzcz1cImZiLWRlc2NyaXB0aW9uXCI+e3sgaGVscC5hcGlQcmVmIH19IDxhIDpocmVmPVwiaGVscC5hcGlMaW5rXCIgdGFyZ2V0PVwiX2JsYW5rXCI+e3sgaGVscC5hcGlMaW5rTGFiZWwgfX08L2E+XG5cdFx0PC9wPlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCB7XG5cdGhlbHAsXG5cdGxhYmVsXG59IGZyb20gXCIuL3NvdXJjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdG5hbWU6ICdhY3RpdmUtY2FtcGFpZ24tdGFiJyxcblx0cHJvcHM6IHtcblx0XHRpbmNvbWluZzoge1xuXHRcdFx0dHlwZTogT2JqZWN0LFxuXHRcdFx0ZGVmYXVsdDoge30sXG5cdFx0fSxcblx0fSxcblx0ZGF0YSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bGFiZWwsIGhlbHAsXG5cdFx0XHRhcGlfa2V5OiAnJyxcblx0XHRcdGFwaV91cmw6ICcnXG5cdFx0fTtcblx0fSxcblx0Y3JlYXRlZCgpIHtcblx0XHR0aGlzLmFwaV9rZXkgPSB0aGlzLmluY29taW5nLmFwaV9rZXkgfHwgJydcblx0XHR0aGlzLmFwaV91cmwgPSB0aGlzLmluY29taW5nLmFwaV91cmwgfHwgJydcblx0fSxcblx0bWV0aG9kczoge1xuXHRcdGdldFJlcXVlc3RPblNhdmUoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0YXBpX2tleTogdGhpcy5hcGlfa2V5LFxuXHRcdFx0XHRcdGFwaV91cmw6IHRoaXMuYXBpX3VybFxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH1cblx0fVxufVxuXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG5cdDxkaXY+XG5cdFx0PGN4LXZ1aS1pbnB1dFxuXHRcdFx0OmxhYmVsPVwibGFiZWwua2V5XCJcblx0XHRcdDp3cmFwcGVyLWNzcz1cIlsgJ2VxdWFsd2lkdGgnIF1cIlxuXHRcdFx0OnNpemU9XCInZnVsbHdpZHRoJ1wiXG5cdFx0XHR2LW1vZGVsPVwia2V5XCJcblx0XHQ+PC9jeC12dWktaW5wdXQ+XG5cdFx0PGN4LXZ1aS1pbnB1dFxuXHRcdFx0OmxhYmVsPVwibGFiZWwuc2VjcmV0XCJcblx0XHRcdDp3cmFwcGVyLWNzcz1cIlsgJ2VxdWFsd2lkdGgnIF1cIlxuXHRcdFx0OnNpemU9XCInZnVsbHdpZHRoJ1wiXG5cdFx0XHR2LW1vZGVsPVwic2VjcmV0XCJcblx0XHQ+PC9jeC12dWktaW5wdXQ+XG5cdFx0PHAgY2xhc3M9XCJmYi1kZXNjcmlwdGlvblwiPnt7IGhlbHAuYXBpUHJlZiB9fSA8YSA6aHJlZj1cImhlbHAuYXBpTGlua1wiIHRhcmdldD1cIl9ibGFua1wiPnt7IGhlbHAuYXBpTGlua0xhYmVsIH19PC9hPlxuXHRcdDwvcD5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHtcblx0bGFiZWwsXG5cdGhlbHAsXG59IGZyb20gXCIuL3NvdXJjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdG5hbWU6ICdjYXB0Y2hhLXRhYicsXG5cdHByb3BzOiB7XG5cdFx0aW5jb21pbmc6IHtcblx0XHRcdHR5cGU6IE9iamVjdCxcblx0XHRcdGRlZmF1bHQ6IHt9LFxuXHRcdH0sXG5cdH0sXG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGxhYmVsLCBoZWxwLFxuXHRcdFx0a2V5OiAnJyxcblx0XHRcdHNlY3JldDogJycsXG5cdFx0fTtcblx0fSxcblx0Y3JlYXRlZCgpIHtcblx0XHR0aGlzLmtleSA9IHRoaXMuaW5jb21pbmcua2V5IHx8ICcnO1xuXHRcdHRoaXMuc2VjcmV0ID0gdGhpcy5pbmNvbWluZy5zZWNyZXQgfHwgJyc7XG5cdH0sXG5cdG1ldGhvZHM6IHtcblx0XHRnZXRSZXF1ZXN0T25TYXZlKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdHNlY3JldDogdGhpcy5zZWNyZXQsXG5cdFx0XHRcdFx0a2V5OiB0aGlzLmtleSxcblx0XHRcdFx0fSxcblx0XHRcdH07XG5cdFx0fSxcblx0fSxcbn1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cblx0PGN4LXZ1aS1pbnB1dFxuXHRcdDpsYWJlbD1cImxhYmVsLmFwaV9rZXlcIlxuXHRcdDp3cmFwcGVyLWNzcz1cIlsgJ2VxdWFsd2lkdGgnIF1cIlxuXHRcdDpkZXNjcmlwdGlvbj0nYCR7IGhlbHAuYXBpUHJlZiB9IDxhIGhyZWY9XCIkeyBoZWxwLmFwaUxpbmsgfVwiIHRhcmdldD1cIl9ibGFua1wiPiR7IGhlbHAuYXBpTGlua0xhYmVsIH08L2E+YCdcblx0XHQ6c2l6ZT1cIidmdWxsd2lkdGgnXCJcblx0XHR2LW1vZGVsPVwiYXBpX2tleVwiXG5cdC8+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQge1xuXHRoZWxwLFxuXHRsYWJlbFxufSBmcm9tIFwiLi9zb3VyY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRuYW1lOiAnZ2V0LXJlc3BvbnNlLXRhYicsXG5cdHByb3BzOiB7XG5cdFx0aW5jb21pbmc6IHtcblx0XHRcdHR5cGU6IE9iamVjdCxcblx0XHRcdGRlZmF1bHQ6IHt9LFxuXHRcdH0sXG5cdH0sXG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGxhYmVsLCBoZWxwLFxuXHRcdFx0YXBpX2tleTogJycsXG5cdFx0fTtcblx0fSxcblx0Y3JlYXRlZCgpIHtcblx0XHR0aGlzLmFwaV9rZXkgPSB0aGlzLmluY29taW5nLmFwaV9rZXkgfHwgJydcblx0fSxcblx0bWV0aG9kczoge1xuXHRcdGdldFJlcXVlc3RPblNhdmUoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0YXBpX2tleTogdGhpcy5hcGlfa2V5LFxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH1cblx0fVxufVxuXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG5cdDxjeC12dWktaW5wdXRcblx0XHQ6bGFiZWw9XCJsYWJlbC5hcGlfa2V5XCJcblx0XHQ6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJyBdXCJcblx0XHQ6ZGVzY3JpcHRpb249J2AkeyBoZWxwLmFwaVByZWYgfSA8YSBocmVmPVwiJHsgaGVscC5hcGlMaW5rIH1cIiB0YXJnZXQ9XCJfYmxhbmtcIj4keyBoZWxwLmFwaUxpbmtMYWJlbCB9PC9hPmAnXG5cdFx0OnNpemU9XCInZnVsbHdpZHRoJ1wiXG5cdFx0di1tb2RlbD1cImFwaV9rZXlcIlxuXHQvPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IHtcblx0aGVscCxcblx0bGFiZWxcbn0gZnJvbSBcIi4vc291cmNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0bmFtZTogJ21haWxjaGltcC10YWInLFxuXHRwcm9wczoge1xuXHRcdGluY29taW5nOiB7XG5cdFx0XHR0eXBlOiBPYmplY3QsXG5cdFx0XHRkZWZhdWx0OiB7fSxcblx0XHR9LFxuXHR9LFxuXHRkYXRhKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRsYWJlbCwgaGVscCxcblx0XHRcdGFwaV9rZXk6ICcnLFxuXHRcdH07XG5cdH0sXG5cdGNyZWF0ZWQoKSB7XG5cdFx0dGhpcy5hcGlfa2V5ID0gdGhpcy5pbmNvbWluZy5hcGlfa2V5IHx8ICcnXG5cdH0sXG5cdG1ldGhvZHM6IHtcblx0XHRnZXRSZXF1ZXN0T25TYXZlKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdGFwaV9rZXk6IHRoaXMuYXBpX2tleSxcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9XG5cdH1cbn1cblxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuXHQ8c2VjdGlvbj5cblx0XHQ8Y3gtdnVpLXN3aXRjaGVyXG5cdFx0XHRuYW1lPVwidXNlX2dhdGV3YXlzXCJcblx0XHRcdDp3cmFwcGVyLWNzcz1cIlsgJ2VxdWFsd2lkdGgnIF1cIlxuXHRcdFx0OmxhYmVsPVwibGFiZWwudXNlX2dhdGV3YXlzXCJcblx0XHRcdDpkZXNjcmlwdGlvbj1cImhlbHAudXNlX2dhdGV3YXlzXCJcblx0XHRcdDp2YWx1ZT1cInN0b3JhZ2UudXNlX2dhdGV3YXlzXCJcblx0XHRcdEBpbnB1dD1cImNoYW5nZVZhbCggJ3VzZV9nYXRld2F5cycsICRldmVudCApXCJcblx0XHQ+PC9jeC12dWktc3dpdGNoZXI+XG5cdFx0PGN4LXZ1aS1zd2l0Y2hlclxuXHRcdFx0di1pZj1cInN0b3JhZ2UudXNlX2dhdGV3YXlzXCJcblx0XHRcdG5hbWU9XCJlbmFibGVfdGVzdF9tb2RlXCJcblx0XHRcdDp3cmFwcGVyLWNzcz1cIlsgJ2VxdWFsd2lkdGgnIF1cIlxuXHRcdFx0OmRlc2NyaXB0aW9uPVwiaGVscC5lbmFibGVfdGVzdF9tb2RlXCJcblx0XHRcdDpsYWJlbD1cImxhYmVsLmVuYWJsZV90ZXN0X21vZGVcIlxuXHRcdFx0OnZhbHVlPVwic3RvcmFnZS5lbmFibGVfdGVzdF9tb2RlXCJcblx0XHRcdEBpbnB1dD1cImNoYW5nZVZhbCggJ2VuYWJsZV90ZXN0X21vZGUnLCAkZXZlbnQgKVwiXG5cdFx0PjwvY3gtdnVpLXN3aXRjaGVyPlxuXHRcdDx0ZW1wbGF0ZSB2LWlmPVwic3RvcmFnZS51c2VfZ2F0ZXdheXNcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjeC12dWktaW5uZXItcGFuZWxcIj5cblx0XHRcdFx0PEN4VnVpQ29sbGFwc2VNaW5pXG5cdFx0XHRcdFx0d2l0aC1wYW5lbFxuXHRcdFx0XHRcdHYtZm9yPVwiKCB0YWIsIGluZGV4ICkgaW4gZ2F0ZXdheXNcIlxuXHRcdFx0XHRcdDpkZXNjPVwidGFiLmRlc2MgfHwgJydcIlxuXHRcdFx0XHRcdDpsYWJlbD1cInRhYi50aXRsZVwiXG5cdFx0XHRcdFx0OmtleT1cInRhYi5jb21wb25lbnQubmFtZVwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8a2VlcC1hbGl2ZT5cblx0XHRcdFx0XHRcdDxjb21wb25lbnRcblx0XHRcdFx0XHRcdFx0di1iaW5kOmlzPVwidGFiLmNvbXBvbmVudFwiXG5cdFx0XHRcdFx0XHRcdHJlZj1cImdhdGV3YXlzXCJcblx0XHRcdFx0XHRcdFx0OmluY29taW5nPVwiZ2V0SW5jb21pbmcoIHRhYi5jb21wb25lbnQubmFtZSApXCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9rZWVwLWFsaXZlPlxuXHRcdFx0XHRcdDxjeC12dWktYnV0dG9uXG5cdFx0XHRcdFx0XHRidXR0b24tc3R5bGU9XCJhY2NlbnRcIlxuXHRcdFx0XHRcdFx0OmxvYWRpbmc9XCJsb2FkaW5nR2F0ZXdheXNbIHRhYi5jb21wb25lbnQubmFtZSBdXCJcblx0XHRcdFx0XHRcdEBjbGljaz1cIm9uU2F2ZUdhdGV3YXkoIGluZGV4LCB0YWIuY29tcG9uZW50Lm5hbWUgKVwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PHNwYW4gc2xvdD1cImxhYmVsXCI+U2F2ZTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2N4LXZ1aS1idXR0b24+XG5cdFx0XHRcdDwvQ3hWdWlDb2xsYXBzZU1pbmk+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L3RlbXBsYXRlPlxuXHQ8L3NlY3Rpb24+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEN4VnVpQ29sbGFwc2VNaW5pIGZyb20gJ0BhZG1pbi9jb21wb25lbnRzL2NvbGxhcHNlLW1pbmkvQ3hWdWlDb2xsYXBzZU1pbmknO1xuaW1wb3J0IHtcblx0aGVscCxcblx0bGFiZWwsXG59IGZyb20gXCIuL3NvdXJjZVwiO1xuaW1wb3J0IFNhdmVUYWJCeUFqYXggZnJvbSAnQGFkbWluL21peGlucy9TYXZlVGFiQnlBamF4JztcbmltcG9ydCBHZXRJbmNvbWluZyBmcm9tICdAYWRtaW4vbWl4aW5zL0dldEluY29taW5nJztcbmltcG9ydCAqIGFzIHBheXBhbCBmcm9tICcuLi8uLi9nYXRld2F5cy9wYXlwYWwnO1xuXG5jb25zdCB7IGFwcGx5RmlsdGVycyB9ID0gd3AuaG9va3M7XG5cbmNvbnN0IGdhdGV3YXlzVGFicyA9IGFwcGx5RmlsdGVycyggJ2pldC5mYi5yZWdpc3Rlci5nYXRld2F5cycsIFtcblx0cGF5cGFsLFxuXSApO1xuXG5sZXQgcmVxdWVzdEZ1bmMgPSAoKSA9PiB7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdG5hbWU6ICdwYXltZW50cy1nYXRld2F5cycsXG5cdHByb3BzOiB7XG5cdFx0aW5jb21pbmc6IHtcblx0XHRcdHR5cGU6IE9iamVjdCxcblx0XHRcdGRlZmF1bHQoKSB7XG5cdFx0XHRcdHJldHVybiB7fTtcblx0XHRcdH0sXG5cdFx0fSxcblx0fSxcblx0Y29tcG9uZW50czogeyBDeFZ1aUNvbGxhcHNlTWluaSB9LFxuXHRtaXhpbnM6IFsgU2F2ZVRhYkJ5QWpheCwgR2V0SW5jb21pbmcgXSxcblx0ZGF0YSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bGFiZWwsIGhlbHAsXG5cdFx0XHRzdG9yYWdlOiBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggdGhpcy5pbmNvbWluZyApICksXG5cdFx0XHRnYXRld2F5czogZ2F0ZXdheXNUYWJzLFxuXHRcdFx0bG9hZGluZ0dhdGV3YXlzOiB7fSxcblx0XHR9O1xuXHR9LFxuXHRjcmVhdGVkKCkge1xuXHRcdGpmYkV2ZW50QnVzLiRvbiggJ3JlcXVlc3Qtc3RhdGUnLCBwcm9wcyA9PiB7XG5cdFx0XHRjb25zdCB7IHN0YXRlLCBzbHVnIH0gPSBwcm9wcztcblx0XHRcdHRoaXMuJHNldCggdGhpcy5sb2FkaW5nR2F0ZXdheXMsIHNsdWcsIHN0YXRlID09PSAnYmVnaW4nICk7XG5cdFx0fSApO1xuXG5cdFx0cmVxdWVzdEZ1bmMgPSBfLmRlYm91bmNlKCAoKSA9PiB7XG5cdFx0XHR0aGlzLnNhdmVCeUFqYXgoIHRoaXMsIHRoaXMuJG9wdGlvbnMubmFtZSApXG5cdFx0fSwgMTAwMCApO1xuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0Y2hhbmdlVmFsKCBuYW1lLCB2YWx1ZSApIHtcblx0XHRcdHRoaXMuJHNldCggdGhpcy5zdG9yYWdlLCBuYW1lLCB2YWx1ZSApO1xuXG5cdFx0XHRyZXF1ZXN0RnVuYygpO1xuXHRcdH0sXG5cdFx0b25TYXZlR2F0ZXdheSggaW5kZXhUYWIsIHRhYlNsdWcgKSB7XG5cdFx0XHRjb25zdCBjdXJyZW50ID0gdGhpcy4kcmVmcy5nYXRld2F5c1sgaW5kZXhUYWIgXTtcblxuXHRcdFx0dGhpcy5zYXZlQnlBamF4KCBjdXJyZW50LCB0YWJTbHVnICk7XG5cdFx0fSxcblx0XHRnZXRSZXF1ZXN0T25TYXZlKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZGF0YTogeyAuLi50aGlzLnN0b3JhZ2UgfSxcblx0XHRcdH07XG5cdFx0fSxcblx0fSxcbn1cblxuPC9zY3JpcHQ+IiwiZXhwb3J0IGRlZmF1bHQge1xuXHRtZXRob2RzOiB7XG5cdFx0Z2V0SW5jb21pbmcoIHRhYk5hbWUgKSB7XG5cdFx0XHRyZXR1cm4gd2luZG93LkpldEZCUGFnZUNvbmZpZ1sgdGFiTmFtZSBdO1xuXHRcdH0sXG5cdH1cbn0iLCJleHBvcnQgZGVmYXVsdCB7XG5cdG1ldGhvZHM6IHtcblx0XHRzYXZlQnlBamF4KCBjdXJyZW50VGFiLCB0YWJTbHVnICkge1xuXHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0XHRsZXQgYWpheFJlcXVlc3QgPSB7fTtcblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YWpheFJlcXVlc3QgPSB0aGlzLmdldEFqYXhPYmplY3QoIGN1cnJlbnRUYWIsIHRhYlNsdWcgKTtcblx0XHRcdH0gY2F0Y2ggKCBlcnJvciApIHtcblx0XHRcdFx0aWYgKCAhIGVycm9yICkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICggJ29iamVjdCcgPT09IHR5cGVvZiBlcnJvci5ub3RpY2VPcHRpb25zICkge1xuXHRcdFx0XHRcdHNlbGYuJENYTm90aWNlLmFkZCgge1xuXHRcdFx0XHRcdFx0bWVzc2FnZTogJ0ludmFsaWQgcmVxdWVzdCBkYXRhLicsXG5cdFx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0XHRcdFx0ZHVyYXRpb246IDIwMDAsXG5cdFx0XHRcdFx0XHQuLi5lcnJvci5ub3RpY2VPcHRpb25zLFxuXHRcdFx0XHRcdH0gKTtcblxuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHNlbGYuJENYTm90aWNlLmFkZCgge1xuXHRcdFx0XHRcdG1lc3NhZ2U6IGVycm9yLFxuXHRcdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHRcdFx0ZHVyYXRpb246IDIwMDAsXG5cdFx0XHRcdH0gKTtcblxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGpmYkV2ZW50QnVzLiRlbWl0KCAncmVxdWVzdC1zdGF0ZScsIHsgc3RhdGU6ICdiZWdpbicsIHNsdWc6IHRhYlNsdWcgfSApO1xuXG5cdFx0XHRqUXVlcnkuYWpheCggYWpheFJlcXVlc3QgKVxuXHRcdFx0XHQuZG9uZSggZnVuY3Rpb24oIHJlc3BvbnNlICkge1xuXG5cdFx0XHRcdFx0aWYgKCAnZnVuY3Rpb24nID09PSB0eXBlb2YgY3VycmVudFRhYi5vblNhdmVEb25lICkge1xuXHRcdFx0XHRcdFx0Y3VycmVudFRhYi5vblNhdmVEb25lKCByZXNwb25zZSApO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpZiAoIHJlc3BvbnNlLnN1Y2Nlc3MgKSB7XG5cdFx0XHRcdFx0XHRcdHNlbGYuJENYTm90aWNlLmFkZCgge1xuXHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2U6IHJlc3BvbnNlLmRhdGEubWVzc2FnZSxcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnc3VjY2VzcycsXG5cdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDUwMDAsXG5cdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0aWYgKCAnZnVuY3Rpb24nID09PSB0eXBlb2YgY3VycmVudFRhYi5vblNhdmVEb25lU3VjY2VzcyApIHtcblx0XHRcdFx0XHRcdFx0XHRjdXJyZW50VGFiLm9uU2F2ZURvbmVTdWNjZXNzKCByZXNwb25zZSApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRzZWxmLiRDWE5vdGljZS5hZGQoIHtcblx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlOiByZXNwb25zZS5kYXRhLm1lc3NhZ2UsXG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogNTAwMCxcblx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0XHRpZiAoICdmdW5jdGlvbicgPT09IHR5cGVvZiBjdXJyZW50VGFiLm9uU2F2ZURvbmVFcnJvciApIHtcblx0XHRcdFx0XHRcdFx0XHRjdXJyZW50VGFiLm9uU2F2ZURvbmVFcnJvciggcmVzcG9uc2UgKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRqZmJFdmVudEJ1cy4kZW1pdCggJ3JlcXVlc3Qtc3RhdGUnLCB7IHN0YXRlOiAnZW5kJywgc2x1ZzogdGFiU2x1ZyB9ICk7XG5cdFx0XHRcdH0gKVxuXHRcdFx0XHQuZmFpbCggZnVuY3Rpb24oIGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93biApIHtcblx0XHRcdFx0XHRpZiAoICdmdW5jdGlvbicgPT09IHR5cGVvZiBjdXJyZW50VGFiLm9uU2F2ZUZhaWwgKSB7XG5cdFx0XHRcdFx0XHRjdXJyZW50VGFiLm9uU2F2ZUZhaWwoIGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93biApO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRzZWxmLiRDWE5vdGljZS5hZGQoIHtcblx0XHRcdFx0XHRcdFx0bWVzc2FnZTogZXJyb3JUaHJvd24sXG5cdFx0XHRcdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiA1MDAwLFxuXHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRqZmJFdmVudEJ1cy4kZW1pdCggJ3JlcXVlc3Qtc3RhdGUnLCB7IHN0YXRlOiAnZW5kJywgc2x1ZzogdGFiU2x1ZyB9ICk7XG5cdFx0XHRcdH0gKTtcblx0XHR9LFxuXG5cdFx0Z2V0QWpheE9iamVjdCggY3VycmVudFRhYiwgdGFiU2x1ZyApIHtcblx0XHRcdGNvbnN0IGFqYXhSZXF1ZXN0ID0ge1xuXHRcdFx0XHR1cmw6IHdpbmRvdy5hamF4dXJsLFxuXHRcdFx0XHR0eXBlOiAnUE9TVCcsXG5cdFx0XHRcdGRhdGFUeXBlOiAnanNvbicsXG5cdFx0XHRcdC4uLmN1cnJlbnRUYWIuZ2V0UmVxdWVzdE9uU2F2ZSgpLFxuXHRcdFx0fTtcblx0XHRcdGFqYXhSZXF1ZXN0LmRhdGEgPSB7XG5cdFx0XHRcdGFjdGlvbjogYGpldF9mYl9zYXZlX3RhYl9fJHsgdGFiU2x1ZyB9YCxcblx0XHRcdFx0Li4uYWpheFJlcXVlc3QuZGF0YSxcblx0XHRcdH07XG5cblx0XHRcdHJldHVybiBhamF4UmVxdWVzdDtcblx0XHR9LFxuXHR9LFxufSIsImltcG9ydCBUYWIgZnJvbSAnLi9QYXlwYWxUYWIudnVlJztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3QgdGl0bGUgPSBfXyggJ1BheVBhbCBHYXRld2F5IEFQSScsICdqZXQtZm9ybS1idWlsZGVyJyApO1xuY29uc3QgY29tcG9uZW50ID0gVGFiO1xuXG5leHBvcnQge1xuXHR0aXRsZSxcblx0Y29tcG9uZW50LFxufSIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IGxhYmVsID0ge1xuXHRjbGllbnRfaWQ6IF9fKCAnQ2xpZW50IElEJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdHNlY3JldDogX18oICdTZWNyZXQgS2V5JywgJ2pldC1mb3JtLWJ1aWxkZXInIClcbn07XG5cbmNvbnN0IGhlbHAgPSB7fTtcblxuZXhwb3J0IHsgbGFiZWwsIGhlbHAgfTsiLCJpbXBvcnQgQWN0aXZlQ2FtcGFpZ24gZnJvbSAnLi9BY3RpdmVDYW1wYWlnblRhYi52dWUnO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB0aXRsZSA9IF9fKCAnQWN0aXZlQ2FtcGFpZ24gQVBJJywgJ2pldC1mb3JtLWJ1aWxkZXInICk7XG5jb25zdCBjb21wb25lbnQgPSBBY3RpdmVDYW1wYWlnbjtcblxuZXhwb3J0IHtcblx0dGl0bGUsXG5cdGNvbXBvbmVudFxufSIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IGxhYmVsID0ge1xuXHRhcGlfa2V5OiBfXyggJ0FQSSBLZXknLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0YXBpX3VybDogX18oICdBUEkgVVJMJywgJ2pldC1mb3JtLWJ1aWxkZXInIClcbn07XG5cbmNvbnN0IGhlbHAgPSB7XG5cdGFwaVByZWY6IF9fKCAnSG93IHRvIG9idGFpbiB5b3VyIEFjdGl2ZUNhbXBhaWduIEFQSSBVUkwgYW5kIEtleT8gTW9yZSBpbmZvJyApLFxuXHRhcGlMaW5rTGFiZWw6IF9fKCAnaGVyZScgKSxcblx0YXBpTGluazogJ2h0dHBzOi8vaGVscC5hY3RpdmVjYW1wYWlnbi5jb20vaGMvZW4tdXMvYXJ0aWNsZXMvMjA3MzE3NTkwLUdldHRpbmctc3RhcnRlZC13aXRoLXRoZS1BUEknXG59O1xuXG5leHBvcnQgeyBsYWJlbCwgaGVscCB9OyIsImltcG9ydCBDYXB0Y2hhVGFiIGZyb20gJy4vQ2FwdGNoYVRhYi52dWUnO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB0aXRsZSA9IF9fKCAnQ2FwdGNoYSBTZXR0aW5ncycsICdqZXQtZm9ybS1idWlsZGVyJyApO1xuY29uc3QgY29tcG9uZW50ID0gQ2FwdGNoYVRhYjtcblxuZXhwb3J0IHtcblx0dGl0bGUsXG5cdGNvbXBvbmVudFxufSIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IGxhYmVsID0ge1xuXHRrZXk6IF9fKCAnU2l0ZSBLZXknLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0c2VjcmV0OiBfXyggJ1NlY3JldCBLZXknLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcbn07XG5cbmNvbnN0IGhlbHAgPSB7XG5cdGFwaVByZWY6IF9fKCAnUmVnaXN0ZXIgcmVDQVBUQ0hBIHYzIGtleXMnICksXG5cdGFwaUxpbmtMYWJlbDogX18oICdoZXJlJyApLFxuXHRhcGlMaW5rOiAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9yZWNhcHRjaGEvYWRtaW4vY3JlYXRlJ1xufTtcblxuZXhwb3J0IHsgbGFiZWwsIGhlbHAgfTsiLCJpbXBvcnQgR2V0UmVzcG9uc2VUYWIgZnJvbSAnLi9HZXRSZXNwb25zZVRhYi52dWUnO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB0aXRsZSA9IF9fKCAnR2V0UmVzcG9uc2UgQVBJJywgJ2pldC1mb3JtLWJ1aWxkZXInICk7XG5jb25zdCBjb21wb25lbnQgPSBHZXRSZXNwb25zZVRhYjtcblxuZXhwb3J0IHtcblx0dGl0bGUsXG5cdGNvbXBvbmVudFxufSIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IGxhYmVsID0ge1xuXHRhcGlfa2V5OiBfXyggJ0FQSSBLZXknLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcbn07XG5cbmNvbnN0IGhlbHAgPSB7XG5cdGFwaVByZWY6IF9fKCAnSG93IHRvIG9idGFpbiB5b3VyIEdldFJlc3BvbnNlIEFQSSBLZXk/IE1vcmUgaW5mbycgKSxcblx0YXBpTGlua0xhYmVsOiBfXyggJ2hlcmUnICksXG5cdGFwaUxpbms6ICdodHRwczovL2FwcC5nZXRyZXNwb25zZS5jb20vYXBpJ1xufTtcblxuZXhwb3J0IHsgbGFiZWwsIGhlbHAgfTsiLCJpbXBvcnQgTWFpbENoaW1wVGFiIGZyb20gJy4vTWFpbENoaW1wVGFiLnZ1ZSc7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHRpdGxlID0gX18oICdNYWlsQ2hpbXAgQVBJJywgJ2pldC1mb3JtLWJ1aWxkZXInICk7XG5jb25zdCBjb21wb25lbnQgPSBNYWlsQ2hpbXBUYWI7XG5cbmV4cG9ydCB7XG5cdHRpdGxlLFxuXHRjb21wb25lbnRcbn0iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCBsYWJlbCA9IHtcblx0YXBpX2tleTogX18oICdBUEkgS2V5JywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG59O1xuXG5jb25zdCBoZWxwID0ge1xuXHRhcGlQcmVmOiBfXyggJ0hvdyB0byBvYnRhaW4geW91ciBNYWlsQ2hpbXAgQVBJIEtleT8gTW9yZSBpbmZvJyApLFxuXHRhcGlMaW5rTGFiZWw6IF9fKCAnaGVyZScgKSxcblx0YXBpTGluazogJ2h0dHBzOi8vbWFpbGNoaW1wLmNvbS9oZWxwL2Fib3V0LWFwaS1rZXlzLydcbn07XG5cbmV4cG9ydCB7IGxhYmVsLCBoZWxwIH07IiwiaW1wb3J0IFRhYiBmcm9tICcuL1BheW1lbnRzR2F0ZXdheXMudnVlJztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3QgdGl0bGUgPSBfXyggJ1BheW1lbnRzIEdhdGV3YXlzJywgJ2pldC1mb3JtLWJ1aWxkZXInICk7XG5jb25zdCBjb21wb25lbnQgPSBUYWI7XG5jb25zdCBkaXNwbGF5QnV0dG9uID0gZmFsc2U7XG5cbmV4cG9ydCB7XG5cdHRpdGxlLFxuXHRjb21wb25lbnQsXG5cdGRpc3BsYXlCdXR0b25cbn0iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCBsYWJlbCA9IHtcblx0dXNlX2dhdGV3YXlzOiBfXyggJ0VuYWJsZSBHYXRld2F5cycsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRlbmFibGVfdGVzdF9tb2RlOiBfXyggJ0VuYWJsZSBUZXN0IE1vZGUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcbn07XG5cbmNvbnN0IGhlbHAgPSB7XG5cdGVuYWJsZV90ZXN0X21vZGU6IF9fKFxuXHRcdGBUaGlzIG9wdGlvbiB0YWtlcyBwcmVjZWRlbmNlIG92ZXIgdGhlIDxjb2RlPmpldC1mb3JtLWJ1aWxkZXIvZ2F0ZXdheXMvcGF5cGFsL3NhbmRib3gtbW9kZTwvY29kZT4gZmlsdGVyLiBcblx0XHRBcyBvZiByaWdodCBub3csIHdvcmtzIG9ubHkgZm9yIFBheVBhbCBwYXltZW50IHN5c3RlbWAsXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHQpLFxuXHR1c2VfZ2F0ZXdheXM6IF9fKFxuXHRcdGBBY3RpdmF0ZSBwYXltZW50IGdhdGV3YXlzIGZvciB0aGUgZm9ybXMuIFRoaXMgb3B0aW9uIHRha2VzIHByZWNlZGVuY2Ugb3ZlciB0aGUgXG5cdFx0PGNvZGU+amV0LWZvcm0tYnVpbGRlci9hbGxvdy1nYXRld2F5czwvY29kZT4gZmlsdGVyYCxcblx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdCksXG59O1xuXG5leHBvcnQge1xuXHRsYWJlbCxcblx0aGVscCxcbn07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIucHJvY2Nlc2luZy1zdGF0ZSB7XFxuICBvcGFjaXR5OiAwLjU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZV9faW5uZXIge1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZV9faGVhZGVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcbi5qZmItYWRkb25zLXBhZ2VfX2hlYWRlci1jb250cm9scyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRENEQ0REO1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlX19oZWFkZXItY29udHJvbHMgPiAuY3gtdnVpLWJ1dHRvbiB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuY3gtdnVpLWJ1dHRvbiB7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmN4LXZ1aS1idXR0b24gLmJ1dHRvbi1pY29uIHtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlIC5jeC12dWktYnV0dG9uLS1zdHlsZS1hY2NlbnQge1xcbiAgY29sb3I6ICMwMDdjYmE7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggIzAwN2NiYTtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuY3gtdnVpLWJ1dHRvbi0tc3R5bGUtYWNjZW50OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdjYmExMjtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuY3gtdnVpLWJ1dHRvbi0tc3R5bGUtYWNjZW50IC5idXR0b24taWNvbiBwYXRoIHtcXG4gIGZpbGw6ICMwMDdjYmE7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmN4LXZ1aS1idXR0b24tLXN0eWxlLWRhbmdlciB7XFxuICBjb2xvcjogI2Q2MzM2YztcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjZDYzMzZjO1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlIC5jeC12dWktYnV0dG9uLS1zdHlsZS1kYW5nZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q2MzM2YzEyO1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlIC5jeC12dWktYnV0dG9uLS1zdHlsZS1kYW5nZXIgLmJ1dHRvbi1pY29uIHBhdGgge1xcbiAgZmlsbDogI2Q2MzM2YztcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuY3gtdnVpLWJ1dHRvbl9fY29udGVudCA+IHNwYW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuY3gtdnVpLXBvcHVwX19oZWFkZXIge1xcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RDRENERDtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmN4LXZ1aS1wb3B1cF9faGVhZGVyLXRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBsaW5lLWhlaWdodDogMzZweDtcXG4gIGNvbG9yOiAjMjMyODJEO1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlX19saWNlbnNlLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZV9fbGljZW5zZS1mb3JtID4gc3BhbiB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlX19saWNlbnNlLWlucHV0IHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmdvLXByby1iYW5uZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyNHB4IDA7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RDRENERDtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuZ28tcHJvLWJhbm5lcl9fc3VidGl0bGUge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY29sb3I6ICMwMDdDQkE7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmdvLXByby1iYW5uZXJfX3RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiAjMjMyODJEO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuZ28tcHJvLWJhbm5lcl9fYnV0dG9uIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdDQkE7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2FkbWluL3BhZ2VzL2FkZG9ucy9BZGRvbnNQYWdlLnZ1ZVwiLFwid2VicGFjazovLy4vLi4vQWRkb25zUGFnZS52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBNlpBO0VBQ0MsWUFBQTtFQUNBLG9CQUFBO0FDNVpEO0FEaWFDO0VBQ0MsYUFBQTtFQUNBLFlBQUE7QUM5WkY7QURpYUM7RUFDQyxtQkFBQTtBQy9aRjtBRGthQztFQUNDLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQ0FBQTtBQ2hhRjtBRGthRTtFQUNDLGlCQUFBO0FDaGFIO0FEb2FDO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7QUNsYUY7QURvYUU7RUFDQyxpQkFBQTtBQ2xhSDtBRHFhRTtFQUNDLGNBQUE7RUFDQSxtQ0FBQTtBQ25hSDtBRHFhRztFQUNDLDJCQUFBO0FDbmFKO0FEdWFJO0VBQ0MsYUFBQTtBQ3JhTDtBRDBhRTtFQUNDLGNBQUE7RUFDQSxtQ0FBQTtBQ3hhSDtBRDBhRztFQUNDLDJCQUFBO0FDeGFKO0FENGFJO0VBQ0MsYUFBQTtBQzFhTDtBRGdiRztFQUNDLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDOWFKO0FEb2JFO0VBQ0Msb0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0FDbGJIO0FEcWJFO0VBQ0MsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDbmJIO0FEMmJDO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtBQ3piRjtBRDJiRTtFQUNDLG1CQUFBO0FDemJIO0FENmJDO0VBQ0MsbUJBQUE7QUMzYkY7QUQ4YkM7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FDNWJGO0FEOGJFO0VBQ0MsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUM1Ykg7QUQrYkU7RUFDQyxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQzdiSDtBRGdjRTtFQUNDLFlBQUE7RUFDQSx5QkFBQTtBQzliSFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4ucHJvY2Nlc2luZy1zdGF0ZSB7XFxuXFx0b3BhY2l0eTogMC41O1xcblxcdHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uamZiLWFkZG9ucy1wYWdlIHtcXG5cXG5cXHQmX19pbm5lciB7XFxuXFx0XFx0cGFkZGluZzogMzBweDtcXG5cXHRcXHRoZWlnaHQ6IDEwMCU7XFxuXFx0fVxcblxcblxcdCZfX2hlYWRlciB7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMzBweDtcXG5cXHR9XFxuXFxuXFx0Jl9faGVhZGVyLWNvbnRyb2xzIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHRwYWRkaW5nLWJvdHRvbTogMTVweDtcXG5cXHRcXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RDRENERDtcXG5cXG5cXHRcXHQ+IC5jeC12dWktYnV0dG9uIHtcXG5cXHRcXHRcXHRtYXJnaW4tbGVmdDogMTBweDtcXG5cXHRcXHR9XFxuXFx0fVxcblxcblxcdC5jeC12dWktYnV0dG9uIHtcXG5cXHRcXHRmb250LXNpemU6IDEzcHg7XFxuXFx0XFx0Zm9udC13ZWlnaHQ6IDQwMDtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cXG5cXHRcXHQuYnV0dG9uLWljb24ge1xcblxcdFxcdFxcdG1hcmdpbi1yaWdodDogNXB4O1xcblxcdFxcdH1cXG5cXG5cXHRcXHQmLS1zdHlsZS1hY2NlbnQge1xcblxcdFxcdFxcdGNvbG9yOiAjMDA3Y2JhO1xcblxcdFxcdFxcdGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjMDA3Y2JhO1xcblxcblxcdFxcdFxcdCY6aG92ZXIge1xcblxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICMwMDdjYmExMjtcXG5cXHRcXHRcXHR9XFxuXFxuXFx0XFx0XFx0LmJ1dHRvbi1pY29uIHtcXG5cXHRcXHRcXHRcXHRwYXRoIHtcXG5cXHRcXHRcXHRcXHRcXHRmaWxsOiAjMDA3Y2JhO1xcblxcdFxcdFxcdFxcdH1cXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcblxcdFxcdCYtLXN0eWxlLWRhbmdlciB7XFxuXFx0XFx0XFx0Y29sb3I6ICNkNjMzNmM7XFxuXFx0XFx0XFx0Ym94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICNkNjMzNmM7XFxuXFxuXFx0XFx0XFx0Jjpob3ZlciB7XFxuXFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogI2Q2MzM2YzEyO1xcblxcdFxcdFxcdH1cXG5cXG5cXHRcXHRcXHQuYnV0dG9uLWljb24ge1xcblxcdFxcdFxcdFxcdHBhdGgge1xcblxcdFxcdFxcdFxcdFxcdGZpbGw6ICNkNjMzNmM7XFxuXFx0XFx0XFx0XFx0fVxcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFxuXFx0XFx0Jl9fY29udGVudCB7XFxuXFx0XFx0XFx0PiBzcGFuIHtcXG5cXHRcXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdFxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdFxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0LmN4LXZ1aS1wb3B1cCB7XFxuXFx0XFx0Jl9faGVhZGVyIHtcXG5cXHRcXHRcXHRwYWRkaW5nLWJvdHRvbTogMTVweDtcXG5cXHRcXHRcXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RDRENERDtcXG5cXHRcXHRcXHRtYXJnaW4tYm90dG9tOiAzMHB4O1xcblxcdFxcdH1cXG5cXG5cXHRcXHQmX19oZWFkZXItdGl0bGUge1xcblxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxuXFx0XFx0XFx0Zm9udC1zaXplOiAyNHB4O1xcblxcdFxcdFxcdGxpbmUtaGVpZ2h0OiAzNnB4O1xcblxcdFxcdFxcdGNvbG9yOiAjMjMyODJEO1xcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0Jl9fbGljZW5zZS1wb3B1cCB7XFxuXFxuXFx0fVxcblxcblxcdCZfX2xpY2Vuc2UtZm9ybSB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG5cXHRcXHRhbGlnbi1pdGVtczogc3RyZXRjaDtcXG5cXG5cXHRcXHQ+IHNwYW4ge1xcblxcdFxcdFxcdG1hcmdpbi1ib3R0b206IDEwcHg7XFxuXFx0XFx0fVxcblxcdH1cXG5cXG5cXHQmX19saWNlbnNlLWlucHV0IHtcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xcblxcdH1cXG5cXG5cXHQuZ28tcHJvLWJhbm5lciB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0cGFkZGluZzogMjRweCAwO1xcblxcdFxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRENEQ0REO1xcblxcblxcdFxcdCZfX3N1YnRpdGxlIHtcXG5cXHRcXHRcXHRmb250LXNpemU6IDE4cHg7XFxuXFx0XFx0XFx0bGluZS1oZWlnaHQ6IDEuMjU7XFxuXFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDUwMDtcXG5cXHRcXHRcXHRjb2xvcjogIzAwN0NCQTtcXG5cXHRcXHRcXHRtYXJnaW4tYm90dG9tOiA1cHg7XFxuXFx0XFx0fVxcblxcblxcdFxcdCZfX3RpdGxlIHtcXG5cXHRcXHRcXHRmb250LXNpemU6IDI0cHg7XFxuXFx0XFx0XFx0bGluZS1oZWlnaHQ6IDEuMjU7XFxuXFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDUwMDtcXG5cXHRcXHRcXHRjb2xvcjogIzIzMjgyRDtcXG5cXHRcXHRcXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xcblxcdFxcdH1cXG5cXG5cXHRcXHQmX19idXR0b24ge1xcblxcdFxcdFxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3Q0JBO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblxcblwiLFwiLnByb2NjZXNpbmctc3RhdGUge1xcbiAgb3BhY2l0eTogMC41O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5qZmItYWRkb25zLXBhZ2VfX2lubmVyIHtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5qZmItYWRkb25zLXBhZ2VfX2hlYWRlciB7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlX19oZWFkZXItY29udHJvbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RDRENERDtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZV9faGVhZGVyLWNvbnRyb2xzID4gLmN4LXZ1aS1idXR0b24ge1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmN4LXZ1aS1idXR0b24ge1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlIC5jeC12dWktYnV0dG9uIC5idXR0b24taWNvbiB7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuY3gtdnVpLWJ1dHRvbi0tc3R5bGUtYWNjZW50IHtcXG4gIGNvbG9yOiAjMDA3Y2JhO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICMwMDdjYmE7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmN4LXZ1aS1idXR0b24tLXN0eWxlLWFjY2VudDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3Y2JhMTI7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmN4LXZ1aS1idXR0b24tLXN0eWxlLWFjY2VudCAuYnV0dG9uLWljb24gcGF0aCB7XFxuICBmaWxsOiAjMDA3Y2JhO1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlIC5jeC12dWktYnV0dG9uLS1zdHlsZS1kYW5nZXIge1xcbiAgY29sb3I6ICNkNjMzNmM7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggI2Q2MzM2YztcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuY3gtdnVpLWJ1dHRvbi0tc3R5bGUtZGFuZ2VyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNjMzNmMxMjtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuY3gtdnVpLWJ1dHRvbi0tc3R5bGUtZGFuZ2VyIC5idXR0b24taWNvbiBwYXRoIHtcXG4gIGZpbGw6ICNkNjMzNmM7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmN4LXZ1aS1idXR0b25fX2NvbnRlbnQgPiBzcGFuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmN4LXZ1aS1wb3B1cF9faGVhZGVyIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEQ0RDREQ7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlIC5jeC12dWktcG9wdXBfX2hlYWRlci10aXRsZSB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XFxuICBjb2xvcjogIzIzMjgyRDtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZV9fbGljZW5zZS1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxufVxcbi5qZmItYWRkb25zLXBhZ2VfX2xpY2Vuc2UtZm9ybSA+IHNwYW4ge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZV9fbGljZW5zZS1pbnB1dCB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlIC5nby1wcm8tYmFubmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMjRweCAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEQ0RDREQ7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmdvLXByby1iYW5uZXJfX3N1YnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiAjMDA3Q0JBO1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlIC5nby1wcm8tYmFubmVyX190aXRsZSB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBsaW5lLWhlaWdodDogMS4yNTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogIzIzMjgyRDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmdvLXByby1iYW5uZXJfX2J1dHRvbiB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3Q0JBO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuamZiLWFkZG9ucyB7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG4uamZiLWFkZG9uczpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcbi5qZmItYWRkb25zIGEge1xcbiAgY29sb3I6ICMwMDdjYmE7XFxufVxcbi5qZmItYWRkb25zX19oZWFkZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLmpmYi1hZGRvbnNfX2xpc3Qge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICBnYXA6IDQwcHg7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTQwcHgpIHtcXG4uamZiLWFkZG9uc19fbGlzdCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxufVxcbn1cXG4uamZiLWFkZG9uc19faXRlbSB7XFxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3MgZWFzZS1vdXQ7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4uamZiLWFkZG9uc19faXRlbTpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwcHggNHB4IDI4cHggcmdiYSgxNSwgMjMsIDQyLCAwLjEpO1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS5hY3RpdmF0ZWQgLmpmYi1hZGRvbnNfX2l0ZW0taW5mbyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0udXBkYXRlLWF2YWxpYWJsZSAuamZiLWFkZG9uc19faXRlbS1uYW1lIC52ZXJzaW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNENjMzNkM7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLnVwZGF0ZS1hdmFsaWFibGUgLmpmYi1hZGRvbnNfX2l0ZW0tdXBkYXRlIC5sYXRlc3QtdmVyc2lvbiB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDZCNDUwO1xcbiAgcGFkZGluZzogMnB4IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0taW5uZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tdGh1bWIge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tdGh1bWIgLnByby1iYWRnZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEycHg7XFxuICBsZWZ0OiAxMnB4O1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS10aHVtYiBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcbi5qZmItYWRkb25zX19pdGVtLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XFxuICBib3JkZXItd2lkdGg6IDAgMXB4IDFweCAxcHg7XFxuICBib3JkZXItY29sb3I6ICNEQ0RDREQ7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLW5hbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tbmFtZSAubGFiZWwge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS1uYW1lIC52ZXJzaW9uIHtcXG4gIHBhZGRpbmc6IDFweCA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDZCNDUwO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLXVwZGF0ZSB7XFxuICBjb2xvcjogIzdiN2U4MTtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLWxpY2Vuc2Uge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGNvbG9yOiAjN2I3ZTgxO1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS1saWNlbnNlIC5jeC12dWktYnV0dG9uIHtcXG4gIG1hcmdpbi1sZWZ0OiAzcHg7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLWRlc2Mge1xcbiAgZmxleDogMSAxIGF1dG87XFxufVxcbi5qZmItYWRkb25zX19pdGVtLWRlc2MgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLWFjdGlvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS1hY3Rpb25zOmVtcHR5IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLWFjdGlvbnMgLmN4LXZ1aS1idXR0b24ge1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9hZG1pbi9wYWdlcy9hZGRvbnMvY29tcG9uZW50cy9BZGRvbkl0ZW0udnVlXCIsXCJ3ZWJwYWNrOi8vLi8uLi9BZGRvbkl0ZW0udnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQXFSQTtFQUNDLG1CQUFBO0FDcFJEO0FEc1JDO0VBQ0MsZ0JBQUE7QUNwUkY7QUR1UkM7RUFDQyxjQUFBO0FDclJGO0FEd1JDO0VBQ0MsbUJBQUE7QUN0UkY7QUR5UkM7RUFDQyxhQUFBO0VBQ0EscUNBQUE7RUFDQSxTQUFBO0FDdlJGO0FEeVJFO0FBTEQ7SUFNRSxxQ0FBQTtBQ3RSRDtBQUNGO0FEeVJDO0VBQ0Msb0NBQUE7RUFDQSxtQkFBQTtBQ3ZSRjtBRHlSRTtFQUNDLDhDQUFBO0FDdlJIO0FEMlJHO0VBQ0MsdUJBQUE7QUN6Uko7QUQrUkk7RUFDQyx5QkFBQTtBQzdSTDtBRGlTSTtFQUNDLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUMvUkw7QURxU0M7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUNuU0Y7QURzU0M7RUFDQyw0QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDcFNGO0FEc1NFO0VBQ0Msa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ3BTSDtBRHVTRTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FDclNIO0FEeVNDO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUN2U0Y7QUQwU0M7RUFDQyxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDeFNGO0FEMFNFO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUN4U0g7QUQyU0U7RUFDQyxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUN6U0g7QUQ2U0M7RUFDQyxjQUFBO0VBQ0EsbUJBQUE7QUMzU0Y7QUQ4U0M7RUFDQyxtQkFBQTtFQUNBLGNBQUE7QUM1U0Y7QUQ4U0U7RUFDQyxnQkFBQTtBQzVTSDtBRGdUQztFQUNDLGNBQUE7QUM5U0Y7QURnVEU7RUFDQyxxQkFBQTtBQzlTSDtBRGtUQztFQUNDLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDaFRGO0FEa1RFO0VBQ0MsYUFBQTtBQ2hUSDtBRG1URTtFQUNDLGtCQUFBO0FDalRIXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcbi5qZmItYWRkb25zIHtcXG5cXHRtYXJnaW4tYm90dG9tOiA1MHB4O1xcblxcblxcdCY6bGFzdC1jaGlsZCB7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMDtcXG5cXHR9XFxuXFxuXFx0YSB7XFxuXFx0XFx0Y29sb3I6ICMwMDdjYmE7XFxuXFx0fVxcblxcblxcdCZfX2hlYWRlciB7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMjBweDtcXG5cXHR9XFxuXFxuXFx0Jl9fbGlzdCB7XFxuXFx0XFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcblxcdFxcdGdhcDogNDBweDtcXG5cXG5cXHRcXHRAbWVkaWEgKG1heC13aWR0aDogMTE0MHB4KSB7XFxuXFx0XFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG5cXHRcXHR9XFxuXFx0fVxcblxcblxcdCZfX2l0ZW0ge1xcblxcdFxcdHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjNzIGVhc2Utb3V0O1xcblxcdFxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFxuXFx0XFx0Jjpob3ZlciB7XFxuXFx0XFx0XFx0Ym94LXNoYWRvdzogMHB4IDRweCAyOHB4IHJnYmEoMTUsIDIzLCA0MiwgMC4xKTtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0Ji5hY3RpdmF0ZWQge1xcblxcdFxcdFxcdC5qZmItYWRkb25zX19pdGVtLWluZm8ge1xcblxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFxuXFx0XFx0Ji51cGRhdGUtYXZhbGlhYmxlIHtcXG5cXHRcXHRcXHQuamZiLWFkZG9uc19faXRlbS1uYW1lIHtcXG5cXHRcXHRcXHRcXHQudmVyc2lvbiB7XFxuXFx0XFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogI0Q2MzM2QztcXG5cXHRcXHRcXHRcXHR9XFxuXFx0XFx0XFx0fVxcblxcdFxcdFxcdC5qZmItYWRkb25zX19pdGVtLXVwZGF0ZSB7XFxuXFx0XFx0XFx0XFx0LmxhdGVzdC12ZXJzaW9uIHtcXG5cXHRcXHRcXHRcXHRcXHRjb2xvcjogd2hpdGU7XFxuXFx0XFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogIzQ2QjQ1MDtcXG5cXHRcXHRcXHRcXHRcXHRwYWRkaW5nOiAycHggOHB4O1xcblxcdFxcdFxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IDRweDtcXG5cXHRcXHRcXHRcXHR9XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0Jl9faXRlbS1pbm5lciB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcblxcdFxcdGhlaWdodDogMTAwJTtcXG5cXHR9XFxuXFxuXFx0Jl9faXRlbS10aHVtYiB7XFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcXG5cXHRcXHRsaW5lLWhlaWdodDogMDtcXG5cXHRcXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG5cXHRcXHQucHJvLWJhZGdlIHtcXG5cXHRcXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0XFx0XFx0dG9wOiAxMnB4O1xcblxcdFxcdFxcdGxlZnQ6IDEycHg7XFxuXFx0XFx0fVxcblxcblxcdFxcdGltZyB7XFxuXFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0XFx0aGVpZ2h0OiBhdXRvO1xcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0Jl9faXRlbS1pbmZvIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0YWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuXFx0XFx0ZmxleDogMSAxIGF1dG87XFxuXFx0XFx0cGFkZGluZzogMjBweDtcXG5cXHRcXHRib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xcblxcdFxcdGJvcmRlci13aWR0aDogMCAxcHggMXB4IDFweDtcXG5cXHRcXHRib3JkZXItY29sb3I6ICNEQ0RDREQ7XFxuXFx0XFx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXHR9XFxuXFxuXFx0Jl9faXRlbS1uYW1lIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRcXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xcblxcblxcdFxcdC5sYWJlbCB7XFxuXFx0XFx0XFx0Zm9udC1zaXplOiAyMHB4O1xcblxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0XFx0XFx0bGluZS1oZWlnaHQ6IDEuMjU7XFxuXFx0XFx0fVxcblxcblxcdFxcdC52ZXJzaW9uIHtcXG5cXHRcXHRcXHRwYWRkaW5nOiAxcHggOHB4O1xcblxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IDRweDtcXG5cXHRcXHRcXHRjb2xvcjogd2hpdGU7XFxuXFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogIzQ2QjQ1MDtcXG5cXHRcXHRcXHRtYXJnaW4tbGVmdDogMTBweDtcXG5cXHRcXHR9XFxuXFx0fVxcblxcblxcdCZfX2l0ZW0tdXBkYXRlIHtcXG5cXHRcXHRjb2xvcjogIzdiN2U4MTtcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xcblxcdH1cXG5cXG5cXHQmX19pdGVtLWxpY2Vuc2Uge1xcblxcdFxcdG1hcmdpbi1ib3R0b206IDEwcHg7XFxuXFx0XFx0Y29sb3I6ICM3YjdlODE7XFxuXFxuXFx0XFx0LmN4LXZ1aS1idXR0b24ge1xcblxcdFxcdFxcdG1hcmdpbi1sZWZ0OiAzcHg7XFxuXFx0XFx0fVxcblxcdH1cXG5cXG5cXHQmX19pdGVtLWRlc2Mge1xcblxcdFxcdGZsZXg6IDEgMSBhdXRvO1xcblxcblxcdFxcdGEge1xcblxcdFxcdFxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRcXHR9XFxuXFx0fVxcblxcblxcdCZfX2l0ZW0tYWN0aW9ucyB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0XFx0bWFyZ2luLXRvcDogMjBweDtcXG5cXG5cXHRcXHQmOmVtcHR5IHtcXG5cXHRcXHRcXHRkaXNwbGF5OiBub25lO1xcblxcdFxcdH1cXG5cXG5cXHRcXHQuY3gtdnVpLWJ1dHRvbiB7XFxuXFx0XFx0XFx0bWFyZ2luLXJpZ2h0OiAyMHB4O1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblxcblwiLFwiLmpmYi1hZGRvbnMge1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuLmpmYi1hZGRvbnM6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG4uamZiLWFkZG9ucyBhIHtcXG4gIGNvbG9yOiAjMDA3Y2JhO1xcbn1cXG4uamZiLWFkZG9uc19faGVhZGVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi5qZmItYWRkb25zX19saXN0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgZ2FwOiA0MHB4O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTE0MHB4KSB7XFxuICAuamZiLWFkZG9uc19fbGlzdCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICB9XFxufVxcbi5qZmItYWRkb25zX19pdGVtIHtcXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcyBlYXNlLW91dDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5qZmItYWRkb25zX19pdGVtOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDBweCA0cHggMjhweCByZ2JhKDE1LCAyMywgNDIsIDAuMSk7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLmFjdGl2YXRlZCAuamZiLWFkZG9uc19faXRlbS1pbmZvIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS51cGRhdGUtYXZhbGlhYmxlIC5qZmItYWRkb25zX19pdGVtLW5hbWUgLnZlcnNpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q2MzM2QztcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0udXBkYXRlLWF2YWxpYWJsZSAuamZiLWFkZG9uc19faXRlbS11cGRhdGUgLmxhdGVzdC12ZXJzaW9uIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NkI0NTA7XFxuICBwYWRkaW5nOiAycHggOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS1pbm5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS10aHVtYiAucHJvLWJhZGdlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTJweDtcXG4gIGxlZnQ6IDEycHg7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLXRodW1iIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0taW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcXG4gIGJvcmRlci13aWR0aDogMCAxcHggMXB4IDFweDtcXG4gIGJvcmRlci1jb2xvcjogI0RDRENERDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tbmFtZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS1uYW1lIC5sYWJlbCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLW5hbWUgLnZlcnNpb24ge1xcbiAgcGFkZGluZzogMXB4IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NkI0NTA7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tdXBkYXRlIHtcXG4gIGNvbG9yOiAjN2I3ZTgxO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tbGljZW5zZSB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgY29sb3I6ICM3YjdlODE7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLWxpY2Vuc2UgLmN4LXZ1aS1idXR0b24ge1xcbiAgbWFyZ2luLWxlZnQ6IDNweDtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tZGVzYyB7XFxuICBmbGV4OiAxIDEgYXV0bztcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tZGVzYyBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tYWN0aW9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLWFjdGlvbnM6ZW1wdHkge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tYWN0aW9ucyAuY3gtdnVpLWJ1dHRvbiB7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQ3hWdWlDb2xsYXBzZU1pbmkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVjOGJjMGI2JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0N4VnVpQ29sbGFwc2VNaW5pLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQ3hWdWlDb2xsYXBzZU1pbmkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvc2hpbi9kb21haW5zL3Byb2plY3RzL3RoZW1lLWNoZWNrL2Nyb2NvLWRldi93cC1jb250ZW50L3BsdWdpbnMvamV0Zm9ybWJ1aWxkZXIvYXNzZXRzL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzVjOGJjMGI2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzVjOGJjMGI2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzVjOGJjMGI2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9DeFZ1aUNvbGxhcHNlTWluaS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWM4YmMwYjYmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNWM4YmMwYjYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFkbWluL2NvbXBvbmVudHMvY29sbGFwc2UtbWluaS9DeFZ1aUNvbGxhcHNlTWluaS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0FkZG9uc1BhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZiMmY2Yzc1JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0FkZG9uc1BhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BZGRvbnNQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9BZGRvbnNQYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3NoaW4vZG9tYWlucy9wcm9qZWN0cy90aGVtZS1jaGVjay9jcm9jby1kZXYvd3AtY29udGVudC9wbHVnaW5zL2pldGZvcm1idWlsZGVyL2Fzc2V0cy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2YjJmNmM3NScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2YjJmNmM3NScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2YjJmNmM3NScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQWRkb25zUGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmIyZjZjNzUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNmIyZjZjNzUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFkbWluL3BhZ2VzL2FkZG9ucy9BZGRvbnNQYWdlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQWRkb25JdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00Mjk0NThjZCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BZGRvbkl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BZGRvbkl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0FkZG9uSXRlbS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9zaGluL2RvbWFpbnMvcHJvamVjdHMvdGhlbWUtY2hlY2svY3JvY28tZGV2L3dwLWNvbnRlbnQvcGx1Z2lucy9qZXRmb3JtYnVpbGRlci9hc3NldHMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNDI5NDU4Y2QnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDI5NDU4Y2QnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDI5NDU4Y2QnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0FkZG9uSXRlbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDI5NDU4Y2QmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDI5NDU4Y2QnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFkbWluL3BhZ2VzL2FkZG9ucy9jb21wb25lbnRzL0FkZG9uSXRlbS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1NldHRpbmdzUGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmRmYTEzZjUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2V0dGluZ3NQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU2V0dGluZ3NQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3NoaW4vZG9tYWlucy9wcm9qZWN0cy90aGVtZS1jaGVjay9jcm9jby1kZXYvd3AtY29udGVudC9wbHVnaW5zL2pldGZvcm1idWlsZGVyL2Fzc2V0cy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyZGZhMTNmNScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyZGZhMTNmNScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyZGZhMTNmNScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU2V0dGluZ3NQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yZGZhMTNmNSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyZGZhMTNmNScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYWRtaW4vcGFnZXMvc2V0dGluZ3MvU2V0dGluZ3NQYWdlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUGF5cGFsVGFiLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yZDNmNGI1MyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9QYXlwYWxUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9QYXlwYWxUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvc2hpbi9kb21haW5zL3Byb2plY3RzL3RoZW1lLWNoZWNrL2Nyb2NvLWRldi93cC1jb250ZW50L3BsdWdpbnMvamV0Zm9ybWJ1aWxkZXIvYXNzZXRzL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzJkM2Y0YjUzJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzJkM2Y0YjUzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzJkM2Y0YjUzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9QYXlwYWxUYWIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJkM2Y0YjUzJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzJkM2Y0YjUzJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhZG1pbi9wYWdlcy9zZXR0aW5ncy9nYXRld2F5cy9wYXlwYWwvUGF5cGFsVGFiLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQWN0aXZlQ2FtcGFpZ25UYWIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ3NDQzYWI4JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0FjdGl2ZUNhbXBhaWduVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQWN0aXZlQ2FtcGFpZ25UYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvc2hpbi9kb21haW5zL3Byb2plY3RzL3RoZW1lLWNoZWNrL2Nyb2NvLWRldi93cC1jb250ZW50L3BsdWdpbnMvamV0Zm9ybWJ1aWxkZXIvYXNzZXRzL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzQ3NDQzYWI4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzQ3NDQzYWI4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzQ3NDQzYWI4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BY3RpdmVDYW1wYWlnblRhYi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDc0NDNhYjgmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDc0NDNhYjgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFkbWluL3BhZ2VzL3NldHRpbmdzL3RhYnMvYWN0aXZlY2FtcGFpZ24vQWN0aXZlQ2FtcGFpZ25UYWIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9DYXB0Y2hhVGFiLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNDgxMDQwZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9DYXB0Y2hhVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQ2FwdGNoYVRhYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9zaGluL2RvbWFpbnMvcHJvamVjdHMvdGhlbWUtY2hlY2svY3JvY28tZGV2L3dwLWNvbnRlbnQvcGx1Z2lucy9qZXRmb3JtYnVpbGRlci9hc3NldHMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMTQ4MTA0MGUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMTQ4MTA0MGUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMTQ4MTA0MGUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0NhcHRjaGFUYWIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE0ODEwNDBlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzE0ODEwNDBlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhZG1pbi9wYWdlcy9zZXR0aW5ncy90YWJzL2NhcHRjaGEvQ2FwdGNoYVRhYi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0dldFJlc3BvbnNlVGFiLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kN2FhZTkxOCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9HZXRSZXNwb25zZVRhYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0dldFJlc3BvbnNlVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3NoaW4vZG9tYWlucy9wcm9qZWN0cy90aGVtZS1jaGVjay9jcm9jby1kZXYvd3AtY29udGVudC9wbHVnaW5zL2pldGZvcm1idWlsZGVyL2Fzc2V0cy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdkN2FhZTkxOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdkN2FhZTkxOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdkN2FhZTkxOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vR2V0UmVzcG9uc2VUYWIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQ3YWFlOTE4JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2Q3YWFlOTE4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhZG1pbi9wYWdlcy9zZXR0aW5ncy90YWJzL2dldHJlc3BvbnNlL0dldFJlc3BvbnNlVGFiLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTWFpbENoaW1wVGFiLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04ZDMzNjFmYyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9NYWlsQ2hpbXBUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9NYWlsQ2hpbXBUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvc2hpbi9kb21haW5zL3Byb2plY3RzL3RoZW1lLWNoZWNrL2Nyb2NvLWRldi93cC1jb250ZW50L3BsdWdpbnMvamV0Zm9ybWJ1aWxkZXIvYXNzZXRzL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzhkMzM2MWZjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzhkMzM2MWZjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzhkMzM2MWZjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9NYWlsQ2hpbXBUYWIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPThkMzM2MWZjJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzhkMzM2MWZjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhZG1pbi9wYWdlcy9zZXR0aW5ncy90YWJzL21haWxjaGltcC9NYWlsQ2hpbXBUYWIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9QYXltZW50c0dhdGV3YXlzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wODJlNmE1YSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9QYXltZW50c0dhdGV3YXlzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUGF5bWVudHNHYXRld2F5cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9zaGluL2RvbWFpbnMvcHJvamVjdHMvdGhlbWUtY2hlY2svY3JvY28tZGV2L3dwLWNvbnRlbnQvcGx1Z2lucy9qZXRmb3JtYnVpbGRlci9hc3NldHMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMDgyZTZhNWEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMDgyZTZhNWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMDgyZTZhNWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1BheW1lbnRzR2F0ZXdheXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA4MmU2YTVhJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzA4MmU2YTVhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhZG1pbi9wYWdlcy9zZXR0aW5ncy90YWJzL3BheW1lbnRzLWdhdGV3YXlzL1BheW1lbnRzR2F0ZXdheXMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0N4VnVpQ29sbGFwc2VNaW5pLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0N4VnVpQ29sbGFwc2VNaW5pLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BZGRvbnNQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FkZG9uc1BhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FkZG9uSXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BZGRvbkl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NldHRpbmdzUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZXR0aW5nc1BhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BheXBhbFRhYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYXlwYWxUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FjdGl2ZUNhbXBhaWduVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FjdGl2ZUNhbXBhaWduVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DYXB0Y2hhVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NhcHRjaGFUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dldFJlc3BvbnNlVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dldFJlc3BvbnNlVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NYWlsQ2hpbXBUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWFpbENoaW1wVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYXltZW50c0dhdGV3YXlzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BheW1lbnRzR2F0ZXdheXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgIFwiY3gtdnVpLXBhbmVsXCI6IF92bS53aXRoUGFuZWwsXG4gICAgICAgIFwiY3gtdnVpLWNvbGxhcHNlLW1pbmlfX2l0ZW1cIjogdHJ1ZSxcbiAgICAgICAgXCJjeC12dWktY29sbGFwc2UtbWluaV9faXRlbS0tYWN0aXZlXCI6IF92bS5pc0FjdGl2ZVxuICAgICAgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJjeC12dWktY29sbGFwc2UtbWluaV9faGVhZGVyXCIsXG4gICAgICAgICAgb246IHsgY2xpY2s6IF92bS5jb2xsYXBzZSB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImN4LXZ1aS1jb2xsYXBzZS1taW5pX19oZWFkZXItbGFiZWxcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJzdmdcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIxNFwiLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE0XCIsXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94OiBcIjAgMCAxNCAxNFwiLFxuICAgICAgICAgICAgICAgICAgZmlsbDogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJwYXRoXCIsIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGQ6XG4gICAgICAgICAgICAgICAgICAgICAgXCJNMTQgMTMuOTk5OUwxNCAtMC4wMDAxMjIwN0wwIC0wLjAwMDEyMTQ1OEw2LjExOTU5ZS0wNyAxMy45OTk5TDE0IDEzLjk5OTlaXCIsXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IFwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJwYXRoXCIsIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGQ6XG4gICAgICAgICAgICAgICAgICAgICAgXCJNNS4zMjkxMSAxTDExIDdMNS4zMjkxMSAxM0w0IDExLjU5MzhMOC4zNDE3NyA3TDQgMi40MDYyNUw1LjMyOTExIDFaXCIsXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IFwiIzAwN0NCQVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIlxcblxcdFxcdFxcdFwiICsgX3ZtLl9zKF92bS5sYWJlbCkgKyBcIlxcblxcdFxcdFwiKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLmRlc2NcbiAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjeC12dWktY29sbGFwc2UtbWluaV9faGVhZGVyLWRlc2NcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuXFx0XFx0XFx0XCIgKyBfdm0uX3MoX3ZtLmRlc2MpICsgXCJcXG5cXHRcXHRcIilcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uaXNBY3RpdmUsXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXNBY3RpdmVcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY3gtdnVpLWNvbGxhcHNlLW1pbmlfX2NvbnRlbnRcIlxuICAgICAgICB9LFxuICAgICAgICBbX3ZtLl90KFwiZGVmYXVsdFwiLCBbX3ZtLl92KFwiQ29sbGFwc2UgY29udGVudC4uLlwiKV0pXSxcbiAgICAgICAgMlxuICAgICAgKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJqZmItYWRkb25zLXBhZ2Ugd3JhcFwiLFxuICAgICAgY2xhc3M6IHsgXCJwcm9jY2VzaW5nLXN0YXRlXCI6IF92bS5wcm9jY2VzaW5nU3RhdGUgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJoMVwiLCB7IHN0YXRpY0NsYXNzOiBcImNzLXZ1aS10aXRsZVwiIH0sIFtcbiAgICAgICAgX3ZtLl92KF92bS5fcyhcIkpldEZvcm1CdWlsZGVyIEFkZG9uc1wiKSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiamZiLWFkZG9ucy1wYWdlX19pbm5lciBjeC12dWktcGFuZWxcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiamZiLWFkZG9ucy1wYWdlX19oZWFkZXJcIiB9LCBbXG4gICAgICAgICAgX3ZtLmlzTGljZW5zZU1vZGVcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImpmYi1hZGRvbnMtcGFnZV9faGVhZGVyLWNvbnRyb2xzXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJjeC12dWktYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b24tc3R5bGVcIjogXCJhY2NlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IFwibWluaVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogX3ZtLmNoZWNrVXBkYXRlc1Byb2Nlc3NlZFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5jaGVja1BsdWdpbnNVcGRhdGUgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgYXR0cnM6IHsgc2xvdDogXCJsYWJlbFwiIH0sIHNsb3Q6IFwibGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbi1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjE0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g6IFwiMCAwIDE0IDE0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBhdGhcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk0xMS43MDg1IDIuMjkxNzFDMTAuNTAwMSAxLjA4MzM3IDguODQxOCAwLjMzMzM3NCA3LjAwMDEzIDAuMzMzMzc0QzMuMzE2OCAwLjMzMzM3NCAwLjM0MTc5NyAzLjMxNjcxIDAuMzQxNzk3IDcuMDAwMDRDMC4zNDE3OTcgMTAuNjgzNCAzLjMxNjggMTMuNjY2NyA3LjAwMDEzIDEzLjY2NjdDMTAuMTA4NSAxMy42NjY3IDEyLjcwMDEgMTEuNTQxNyAxMy40NDE4IDguNjY2NzFIMTEuNzA4NUMxMS4wMjUxIDEwLjYwODQgOS4xNzUxMyAxMiA3LjAwMDEzIDEyQzQuMjQxOCAxMiAyLjAwMDEzIDkuNzU4MzcgMi4wMDAxMyA3LjAwMDA0QzIuMDAwMTMgNC4yNDE3MSA0LjI0MTggMi4wMDAwNCA3LjAwMDEzIDIuMDAwMDRDOC4zODM0NiAyLjAwMDA0IDkuNjE2OCAyLjU3NTA0IDEwLjUxNjggMy40ODMzN0w3LjgzMzQ2IDYuMTY2NzFIMTMuNjY2OFYwLjMzMzM3NEwxMS43MDg1IDIuMjkxNzFaXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IFwiIzAwN0NCQVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIkNoZWNrIEZvciBVcGRhdGVzXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImN4LXZ1aS1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLmlzTGljZW5zZUFjdGl2YXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiY3gtdnVpLWJ1dHRvbi0tc3R5bGUtYWNjZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImN4LXZ1aS1idXR0b24tLXN0eWxlLWRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzaXplOiBcIm1pbmlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uc2hvd0xpY2Vuc2VQb3B1cCB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBhdHRyczogeyBzbG90OiBcImxhYmVsXCIgfSwgc2xvdDogXCJsYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInN2Z1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uLWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxNlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveDogXCIwIDAgMTYgMTZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicGF0aFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTTE1LjQ5ODUgMEgxMi40ODk3QzEyLjQxNjYgMCAxMi4zNDg3IDAuMDE1NjcwOSAxMi4yODYgMC4wNDcwMTI3QzEyLjIzMzggMC4wNjc5MDczIDEyLjE4NjcgMC4xMDQ0NzMgMTIuMTQ1IDAuMTU2NzA5TDUuNzY2OSA2LjQ3MjA5QzUuNjIwNjMgNi40NDA3NCA1LjQ2MzkyIDYuNDE0NjMgNS4yOTY3NyA2LjM5MzczQzUuMTI5NjEgNi4zNzI4NCA0Ljk2NzY4IDYuMzYyMzkgNC44MTA5NyA2LjM2MjM5QzQuMTYzMjQgNi4zNjIzOSAzLjU0Njg1IDYuNDg3NzYgMi45NjE4IDYuNzM4NDlDMi4zNzY3NSA2Ljk3ODc4IDEuODU5NjEgNy4zMjM1NCAxLjQxMDM4IDcuNzcyNzdDMC45NjExNDkgOC4yMjIgMC42MTExNjYgOC43MzkxNCAwLjM2MDQzMSA5LjMyNDE5QzAuMTIwMTQ0IDkuOTA5MjQgMCAxMC41MzA5IDAgMTEuMTg5QzAgMTEuODM2OCAwLjEyMDE0NCAxMi40NTMyIDAuMzYwNDMxIDEzLjAzODJDMC42MTExNjYgMTMuNjIzMiAwLjk2MTE0OSAxNC4xNDA0IDEuNDEwMzggMTQuNTg5NkMxLjg1OTYxIDE1LjAzODkgMi4zNzY3NSAxNS4zODM2IDIuOTYxOCAxNS42MjM5QzMuNTQ2ODUgMTUuODc0NiA0LjE2MzI0IDE2IDQuODEwOTcgMTZDNS40NjkxNSAxNiA2LjA5MDc2IDE1Ljg3NDYgNi42NzU4MSAxNS42MjM5QzcuMjYwODYgMTUuMzgzNiA3Ljc3OCAxNS4wMzg5IDguMjI3MjMgMTQuNTg5NkM4LjgwMTgzIDE0LjAxNSA5LjE5ODgyIDEzLjM0NjQgOS40MTgyMiAxMi41ODM3QzkuNjQ4MDYgMTEuODIxMSA5LjY4NDYyIDExLjAzNzUgOS41Mjc5MSAxMC4yMzMxTDEwLjg5MTMgOC44Njk3NEMxMC45MzMxIDguODI3OTUgMTAuOTY0NCA4Ljc4MDkzIDEwLjk4NTMgOC43Mjg3QzExLjAxNjcgOC42NjYwMSAxMS4wMzIzIDguNTk4MTEgMTEuMDMyMyA4LjUyNDk4VjcuMDIwNTdIMTIuNTM2N0MxMi42OTM0IDcuMDIwNTcgMTIuODEzNiA2Ljk3MzU2IDEyLjg5NzIgNi44Nzk1M0MxMi45OTEyIDYuNzg1NSAxMy4wMzgyIDYuNjY1MzYgMTMuMDM4MiA2LjUxOTFWNS4wMTQ2OUgxNC41NDI2QzE0LjYxNTcgNS4wMTQ2OSAxNC42Nzg0IDUuMDA0MjQgMTQuNzMwNyA0Ljk4MzM1QzE0Ljc5MzMgNC45NTIwMSAxNC44NTA4IDQuOTEwMjIgMTQuOTAzIDQuODU3OThMMTUuOTA2IDMuODU1MDRDMTUuOTI2OSAzLjgxMzI2IDE1Ljk0NzggMy43NjYyNCAxNS45Njg3IDMuNzE0MDFDMTUuOTg5NiAzLjY1MTMyIDE2IDMuNTgzNDIgMTYgMy41MTAyOFYwLjUwMTQ2OUMxNiAwLjM1NTIwNyAxNS45NTMgMC4yMzUwNjQgMTUuODU5IDAuMTQxMDM4QzE1Ljc2NDkgMC4wNDcwMTI3IDE1LjY0NDggMCAxNS40OTg1IDBaTTQuOTY3NjggMTIuNzg3NUM0Ljc5MDA4IDEyLjk2NTEgNC41OTY4IDEzLjA5NTcgNC4zODc4NiAxMy4xNzkyQzQuMTg5MzYgMTMuMjUyNCAzLjk2NDc0IDEzLjI4ODkgMy43MTQwMSAxMy4yODg5QzMuNDYzMjcgMTMuMjg4OSAzLjIzMzQzIDEzLjI0MTkgMy4wMjQ0OSAxMy4xNDc5QzIuODI1OTkgMTMuMDUzOSAyLjYzNzk0IDEyLjkzMzcgMi40NjAzMyAxMi43ODc1QzIuMjgyNzMgMTIuNjA5OSAyLjE1MjE0IDEyLjQyMTggMi4wNjg1NiAxMi4yMjMzQzEuOTk1NDMgMTIuMDE0NCAxLjk1ODg2IDExLjc4NDUgMS45NTg4NiAxMS41MzM4QzEuOTU4ODYgMTEuMjgzMSAyLjAwNTg4IDExLjA1ODQgMi4wOTk5IDEwLjg1OTlDMi4xOTM5MyAxMC42NTEgMi4zMTQwNyAxMC40NTc3IDIuNDYwMzMgMTAuMjgwMUMyLjc4NDIgOS45NTYyNSAzLjE5MTY0IDkuNzk0MzIgMy42ODI2NiA5Ljc5NDMyQzQuMTg0MTMgOS43OTQzMiA0LjU5NjggOS45NTYyNSA0LjkyMDY3IDEwLjI4MDFDNS4wOTgyNyAxMC40NTc3IDUuMjIzNjQgMTAuNjUxIDUuMjk2NzcgMTAuODU5OUM1LjM4MDM1IDExLjA1ODQgNS40MjIxNCAxMS4yODMxIDUuNDIyMTQgMTEuNTMzOEM1LjQyMjE0IDExLjc4NDUgNS4zODAzNSAxMi4wMTQ0IDUuMjk2NzcgMTIuMjIzM0M1LjIyMzY0IDEyLjQyMTggNS4xMTM5NCAxMi42MDk5IDQuOTY3NjggMTIuNzg3NVpcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogXCIjRDNEM0QzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICFfdm0uaXNMaWNlbnNlQWN0aXZhdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJBY3RpdmF0ZSBMaWNlbnNlXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uaXNMaWNlbnNlQWN0aXZhdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJEZWFjdGl2YXRlIExpY2Vuc2VcIildKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgIV92bS5pc0xpY2Vuc2VBY3RpdmF0ZWRcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImdvLXByby1iYW5uZXJcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZ28tcHJvLWJhbm5lcl9fc3VidGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkZlYXR1cmVzICYgSW50ZWdyYXRpb25zIFwiKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJnby1wcm8tYmFubmVyX190aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiRXh0ZW5kIGZ1bmN0aW9uYWxpdHkgd2l0aCBQUk8gQWRkb25zXCIpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJjeC12dWktYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJnby1wcm8tYmFubmVyX19idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b24tc3R5bGVcIjogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBcIm1pbmlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogX3ZtLmdvUHJvTGluayxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGFnLW5hbWVcIjogXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBhdHRyczogeyBzbG90OiBcImxhYmVsXCIgfSwgc2xvdDogXCJsYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiR28gUHJvXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIDAgIT09IE9iamVjdC5rZXlzKF92bS5pbnN0YWxsZWRBZGRvbkxpc3QpLmxlbmd0aFxuICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJqZmItYWRkb25zXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJqZmItYWRkb25zX19saXN0XCIgfSxcbiAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmluc3RhbGxlZEFkZG9uTGlzdCwgZnVuY3Rpb24oYWRkb25EYXRhLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwiQWRkb25JdGVtXCIsIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJhZGRvbi1kYXRhXCI6IGFkZG9uRGF0YSB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAwICE9PSBPYmplY3Qua2V5cyhfdm0uYXZhaWxhYmxlQWRkb25MaXN0KS5sZW5ndGhcbiAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiamZiLWFkZG9uc1wiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiamZiLWFkZG9uc19fbGlzdFwiIH0sXG4gICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5hdmFpbGFibGVBZGRvbkxpc3QsIGZ1bmN0aW9uKGFkZG9uRGF0YSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcIkFkZG9uSXRlbVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYWRkb24tZGF0YVwiOiBhZGRvbkRhdGEgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiY3gtdnVpLXBvcHVwXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJqZmItYWRkb25zLXBhZ2VfX2xpY2Vuc2UtcG9wdXBcIixcbiAgICAgICAgICBhdHRyczogeyBmb290ZXI6IGZhbHNlLCBcImJvZHktd2lkdGhcIjogXCI1NDBweFwiIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0ubGljZW5zZVBvcHVwVmlzaWJsZSxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLmxpY2Vuc2VQb3B1cFZpc2libGUgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImxpY2Vuc2VQb3B1cFZpc2libGVcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY3gtdnVpLXBvcHVwX19oZWFkZXItdGl0bGVcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJ0aXRsZVwiIH0sXG4gICAgICAgICAgICAgIHNsb3Q6IFwidGl0bGVcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgIV92bS5pc0xpY2Vuc2VBY3RpdmF0ZWRcbiAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbX3ZtLl92KFwiQWN0aXZhdGUgTGljZW5zZVwiKV0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLmlzTGljZW5zZUFjdGl2YXRlZFxuICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJEZWFjdGl2YXRlIExpY2Vuc2VcIildKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJqZmItYWRkb25zLXBhZ2VfX2xpY2Vuc2UtZm9ybVwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBzbG90OiBcImNvbnRlbnRcIiB9LFxuICAgICAgICAgICAgICBzbG90OiBcImNvbnRlbnRcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgIV92bS5pc0xpY2Vuc2VBY3RpdmF0ZWRcbiAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIkFjdGl2YXRlIGxpY2Vuc2UgZm9yIGF1dG9tYXRpYyB1cGRhdGVzIGFuZCBhd2Vzb21lIHN1cHBvcnRcIlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5pc0xpY2Vuc2VBY3RpdmF0ZWRcbiAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIkJ5IGRlYWN0aXZhdGluZyB0aGUgbGljZW5zZSB5b3Ugd2lsbCBub3QgYmUgYWJsZSB0byB1cGRhdGUgdGhlIGFkZG9uc1wiXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJjeC12dWktaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImpmYi1hZGRvbnMtcGFnZV9fbGljZW5zZS1pbnB1dFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBzaXplOiBcImZ1bGx3aWR0aFwiLFxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgYXV0b2ZvY3VzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgXCJwcmV2ZW50LXdyYXBcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkp1c3QgcGFzdGUgaXQgaGVyZVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5saWNlbnNlS2V5LFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0ubGljZW5zZUtleSA9ICQkdlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibGljZW5zZUtleVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJjeC12dWktYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiamZiLWFkZG9ucy1wYWdlX19saWNlbnNlLWFjdGlvblwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJidXR0b24tc3R5bGVcIjogXCJhY2NlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCJtaW5pXCIsXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IF92bS5saWNlbnNlUHJvY2Nlc2luZ1N0YXRlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5saWNlbnNlQWN0aW9uIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IGF0dHJzOiB7IHNsb3Q6IFwibGFiZWxcIiB9LCBzbG90OiBcImxhYmVsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAhX3ZtLmlzTGljZW5zZUFjdGl2YXRlZFxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJBY3RpdmF0ZVwiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmlzTGljZW5zZUFjdGl2YXRlZFxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJEZWFjdGl2YXRlXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJqZmItYWRkb25zX19oZWFkZXJcIiB9LCBbXG4gICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJjeC12dWktc3VidGl0bGVcIiB9LCBbXG4gICAgICAgIF92bS5fdihcIllvdXIgSW5zdGFsbGVkIEFkZG9uc1wiKVxuICAgICAgXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImpmYi1hZGRvbnNfX2hlYWRlclwiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImN4LXZ1aS1zdWJ0aXRsZVwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiQWxsIEF2YWlsYWJsZSBBZGRvbnNcIilcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiamZiLWFkZG9uc19faXRlbVwiLFxuICAgICAgY2xhc3M6IHtcbiAgICAgICAgYWN0aXZhdGVkOiBfdm0uYWRkb25EYXRhLmlzQWN0aXZhdGVkLFxuICAgICAgICBcInVwZGF0ZS1hdmFsaWFibGVcIjogX3ZtLnVwZGF0ZUF2YWxpYWJsZVxuICAgICAgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJqZmItYWRkb25zX19pdGVtLWlubmVyXCIsXG4gICAgICAgICAgY2xhc3M6IHsgXCJwcm9jY2VzaW5nLXN0YXRlXCI6IF92bS5wcm9jY2VzaW5nU3RhdGUgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJqZmItYWRkb25zX19pdGVtLXRodW1iXCIgfSwgW1xuICAgICAgICAgICAgIV92bS5hZGRvbkRhdGEuaXNJbnN0YWxsZWRcbiAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInByby1iYWRnZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInN2Z1wiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjQwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g6IFwiMCAwIDQwIDIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInJlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiNDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJ4OiBcIjRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogXCIjRUU3QjE2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwicGF0aFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTTEwLjYyNSAxMC44MzAxVjE0SDkuMTQyNThWNS40Njg3NUgxMi40MDYyQzEzLjM1OTQgNS40Njg3NSAxNC4xMTUyIDUuNzE2OCAxNC42NzM4IDYuMjEyODlDMTUuMjM2MyA2LjcwODk4IDE1LjUxNzYgNy4zNjUyMyAxNS41MTc2IDguMTgxNjRDMTUuNTE3NiA5LjAxNzU4IDE1LjI0MjIgOS42Njc5NyAxNC42OTE0IDEwLjEzMjhDMTQuMTQ0NSAxMC41OTc3IDEzLjM3NyAxMC44MzAxIDEyLjM4ODcgMTAuODMwMUgxMC42MjVaTTEwLjYyNSA5LjY0MDYySDEyLjQwNjJDMTIuOTMzNiA5LjY0MDYyIDEzLjMzNTkgOS41MTc1OCAxMy42MTMzIDkuMjcxNDhDMTMuODkwNiA5LjAyMTQ4IDE0LjAyOTMgOC42NjIxMSAxNC4wMjkzIDguMTkzMzZDMTQuMDI5MyA3LjczMjQyIDEzLjg4ODcgNy4zNjUyMyAxMy42MDc0IDcuMDkxOEMxMy4zMjYyIDYuODE0NDUgMTIuOTM5NSA2LjY3MTg4IDEyLjQ0NzMgNi42NjQwNkgxMC42MjVWOS42NDA2MlpNMTkuOTUzMSAxMC43MTI5SDE4LjMwMDhWMTRIMTYuODE4NFY1LjQ2ODc1SDE5LjgxODRDMjAuODAyNyA1LjQ2ODc1IDIxLjU2MjUgNS42ODk0NSAyMi4wOTc3IDYuMTMwODZDMjIuNjMyOCA2LjU3MjI3IDIyLjkwMDQgNy4yMTA5NCAyMi45MDA0IDguMDQ2ODhDMjIuOTAwNCA4LjYxNzE5IDIyLjc2MTcgOS4wOTU3IDIyLjQ4NDQgOS40ODI0MkMyMi4yMTA5IDkuODY1MjMgMjEuODI4MSAxMC4xNjAyIDIxLjMzNTkgMTAuMzY3MkwyMy4yNTIgMTMuOTIzOFYxNEgyMS42NjQxTDE5Ljk1MzEgMTAuNzEyOVpNMTguMzAwOCA5LjUyMzQ0SDE5LjgyNDJDMjAuMzI0MiA5LjUyMzQ0IDIwLjcxNDggOS4zOTg0NCAyMC45OTYxIDkuMTQ4NDRDMjEuMjc3MyA4Ljg5NDUzIDIxLjQxOCA4LjU0ODgzIDIxLjQxOCA4LjExMTMzQzIxLjQxOCA3LjY1NDMgMjEuMjg3MSA3LjMwMDc4IDIxLjAyNTQgNy4wNTA3OEMyMC43Njc2IDYuODAwNzggMjAuMzgwOSA2LjY3MTg4IDE5Ljg2NTIgNi42NjQwNkgxOC4zMDA4VjkuNTIzNDRaTTMxLjExNTIgOS45NTcwM0MzMS4xMTUyIDEwLjc5MyAzMC45NzA3IDExLjUyNzMgMzAuNjgxNiAxMi4xNjAyQzMwLjM5MjYgMTIuNzg5MSAyOS45Nzg1IDEzLjI3MzQgMjkuNDM5NSAxMy42MTMzQzI4LjkwNDMgMTMuOTQ5MiAyOC4yODcxIDE0LjExNzIgMjcuNTg3OSAxNC4xMTcyQzI2Ljg5NjUgMTQuMTE3MiAyNi4yNzkzIDEzLjk0OTIgMjUuNzM2MyAxMy42MTMzQzI1LjE5NzMgMTMuMjczNCAyNC43NzkzIDEyLjc5MSAyNC40ODI0IDEyLjE2NkMyNC4xODk1IDExLjU0MSAyNC4wNDEgMTAuODIwMyAyNC4wMzcxIDEwLjAwMzlWOS41MjM0NEMyNC4wMzcxIDguNjkxNDEgMjQuMTgzNiA3Ljk1NzAzIDI0LjQ3NjYgNy4zMjAzMUMyNC43NzM0IDYuNjgzNTkgMjUuMTg5NSA2LjE5NzI3IDI1LjcyNDYgNS44NjEzM0MyNi4yNjM3IDUuNTIxNDggMjYuODgwOSA1LjM1MTU2IDI3LjU3NjIgNS4zNTE1NkMyOC4yNzE1IDUuMzUxNTYgMjguODg2NyA1LjUxOTUzIDI5LjQyMTkgNS44NTU0N0MyOS45NjA5IDYuMTg3NSAzMC4zNzcgNi42Njc5NyAzMC42Njk5IDcuMjk2ODhDMzAuOTYyOSA3LjkyMTg4IDMxLjExMTMgOC42NTAzOSAzMS4xMTUyIDkuNDgyNDJWOS45NTcwM1pNMjkuNjMyOCA5LjUxMTcyQzI5LjYzMjggOC41NjY0MSAyOS40NTMxIDcuODQxOCAyOS4wOTM4IDcuMzM3ODlDMjguNzM4MyA2LjgzMzk4IDI4LjIzMjQgNi41ODIwMyAyNy41NzYyIDYuNTgyMDNDMjYuOTM1NSA2LjU4MjAzIDI2LjQzMzYgNi44MzM5OCAyNi4wNzAzIDcuMzM3ODlDMjUuNzEwOSA3LjgzNzg5IDI1LjUyNzMgOC41NDY4OCAyNS41MTk1IDkuNDY0ODRWOS45NTcwM0MyNS41MTk1IDEwLjg5NDUgMjUuNzAxMiAxMS42MTkxIDI2LjA2NDUgMTIuMTMwOUMyNi40MzE2IDEyLjY0MjYgMjYuOTM5NSAxMi44OTg0IDI3LjU4NzkgMTIuODk4NEMyOC4yNDQxIDEyLjg5ODQgMjguNzQ4IDEyLjY0ODQgMjkuMDk5NiAxMi4xNDg0QzI5LjQ1NTEgMTEuNjQ4NCAyOS42MzI4IDEwLjkxOCAyOS42MzI4IDkuOTU3MDNWOS41MTE3MlpcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogXCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJpbWdcIiwgeyBhdHRyczogeyBzcmM6IF92bS5hZGRvbkRhdGEudGh1bWIsIGFsdDogXCJcIiB9IH0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImpmYi1hZGRvbnNfX2l0ZW0taW5mb1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiamZiLWFkZG9uc19faXRlbS1uYW1lXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5hZGRvbkRhdGEubmFtZSkpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ2ZXJzaW9uXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmFkZG9uRGF0YS5jdXJyZW50VmVyc2lvbikpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImpmYi1hZGRvbnNfX2l0ZW0tdXBkYXRlXCIgfSwgW1xuICAgICAgICAgICAgICAhX3ZtLnVwZGF0ZUF2YWxpYWJsZVxuICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgW192bS5fdihcIllvdXIgcGx1Z2luIGlzIHVwIHRvIGRhdGVcIildKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS51cGRhdGVBdmFsaWFibGVcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx0XFx0VmVyc2lvbiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibGF0ZXN0LXZlcnNpb25cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5hZGRvbkRhdGEudmVyc2lvbikpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIGF2YWlsYWJsZVxcblxcdFxcdFxcdFxcdFxcdFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAhX3ZtLmFjdGl2YXRlTGljZW5jZUFjdGlvbkF2YWxpYWJsZSAmJiBfdm0uaXNMaWNlbnNlTW9kZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImN4LXZ1aS1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvbi1zdHlsZVwiOiBcImxpbmstYWNjZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IFwibGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBfdm0udXBkYXRlUGx1Z2luUHJvY2Vzc2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS51cGRhdGVQbHVnaW4gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNsb3Q6IFwibGFiZWxcIiB9LCBzbG90OiBcImxhYmVsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwic3BhblwiLCBbX3ZtLl92KFwiVXBkYXRlIE5vd1wiKV0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLmFjdGl2YXRlTGljZW5jZUFjdGlvbkF2YWxpYWJsZVxuICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiamZiLWFkZG9uc19faXRlbS1saWNlbnNlXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJMaWNlbnNlIG5vdCBhY3RpdmF0ZWRcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJjeC12dWktYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJidXR0b24tc3R5bGVcIjogXCJsaW5rLWFjY2VudFwiLCBzaXplOiBcImxpbmtcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5hY3RpdmF0ZUxpY2Vuc2UgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNsb3Q6IFwibGFiZWxcIiB9LCBzbG90OiBcImxhYmVsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwic3BhblwiLCBbX3ZtLl92KFwiQWN0aXZhdGUgTm93XCIpXSldXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImpmYi1hZGRvbnNfX2l0ZW0tZGVzY1wiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0uYWRkb25EYXRhLmRlc2MpIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IF92bS5sZWFybk1vcmVVcmwsIHRhcmdldDogXCJfYmxhbmtcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJMZWFybiBNb3JlXCIpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJqZmItYWRkb25zX19pdGVtLWFjdGlvbnNcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX3ZtLmluc3RhbGxBY3Rpb25BdmFsaWFibGVcbiAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJjeC12dWktYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b24tc3R5bGVcIjogXCJsaW5rLWFjY2VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBcImxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogX3ZtLmFjdGlvblBsdWdpblByb2Nlc3NlZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uaW5zdGFsbFBsdWdpbiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgc2xvdDogXCJsYWJlbFwiIH0sIHNsb3Q6IFwibGFiZWxcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJJbnN0YWxsIEFkZG9uXCIpXSldXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLmFjdGl2YXRlQWN0aW9uQXZhbGlhYmxlXG4gICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiY3gtdnVpLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uLXN0eWxlXCI6IFwibGluay1hY2NlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCJsaW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IF92bS5hY3Rpb25QbHVnaW5Qcm9jZXNzZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmFjdGl2YXRlUGx1Z2luIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBzbG90OiBcImxhYmVsXCIgfSwgc2xvdDogXCJsYWJlbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcInNwYW5cIiwgW192bS5fdihcIkFjdGl2YXRlIEFkZG9uXCIpXSldXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLmRlYWN0aXZhdGVBY3Rpb25BdmFsaWFibGVcbiAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJjeC12dWktYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b24tc3R5bGVcIjogXCJsaW5rLWVycm9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IFwibGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBfdm0uYWN0aW9uUGx1Z2luUHJvY2Vzc2VkXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5kZWFjdGl2YXRlUGx1Z2luIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBzbG90OiBcImxhYmVsXCIgfSwgc2xvdDogXCJsYWJlbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcInNwYW5cIiwgW192bS5fdihcIkRlYWN0aXZhdGUgQWRkb25cIildKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF1cbiAgICAgIClcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJmdW5jdGlvbiBvYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGV4Y2x1ZGUpIHtcbiAgdmFyIHRhcmdldCA9IHt9XG4gIGZvciAodmFyIGsgaW4gb2JqKVxuICAgIGlmIChcbiAgICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGspICYmXG4gICAgICBleGNsdWRlLmluZGV4T2YoaykgPT09IC0xXG4gICAgKVxuICAgICAgdGFyZ2V0W2tdID0gb2JqW2tdXG4gIHJldHVybiB0YXJnZXRcbn1cbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJqZXQtZmItc2V0dGluZ3MtcGFnZSB3cmFwXCIgfSwgW1xuICAgIF9jKFwiaDFcIiwgeyBzdGF0aWNDbGFzczogXCJjcy12dWktdGl0bGVcIiB9LCBbXG4gICAgICBfdm0uX3YoX3ZtLl9zKFwiSmV0Rm9ybUJ1aWxkZXIgU2V0dGluZ3NcIikpXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImN4LXZ1aS1wYW5lbFwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiY3gtdnVpLXRhYnNcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBcImluLXBhbmVsXCI6IGZhbHNlLFxuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmFjdGl2ZVRhYlNsdWcsXG4gICAgICAgICAgICAgIGxheW91dDogXCJ2ZXJ0aWNhbFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBfdm0uX2woX3ZtLnRhYnMsIGZ1bmN0aW9uKHJlZiwgaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBkaXNwbGF5QnV0dG9uID0gcmVmLmRpc3BsYXlCdXR0b25cbiAgICAgICAgICAgIGlmIChkaXNwbGF5QnV0dG9uID09PSB2b2lkIDApIGRpc3BsYXlCdXR0b24gPSB0cnVlXG4gICAgICAgICAgICB2YXIgcmVzdCA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHJlZiwgW1wiZGlzcGxheUJ1dHRvblwiXSlcbiAgICAgICAgICAgIHZhciB0YWIgPSByZXN0XG4gICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgIFwiY3gtdnVpLXRhYnMtcGFuZWxcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogdGFiLmNvbXBvbmVudC5uYW1lLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IG5hbWU6IHRhYi5jb21wb25lbnQubmFtZSwgbGFiZWw6IHRhYi50aXRsZSB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwia2VlcC1hbGl2ZVwiLFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyh0YWIuY29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVmOiBcInRhYkNvbXBvbmVudHNcIixcbiAgICAgICAgICAgICAgICAgICAgICByZWZJbkZvcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICB0YWc6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaW5jb21pbmc6IF92bS5nZXRJbmNvbWluZyh0YWIuY29tcG9uZW50Lm5hbWUpIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlCdXR0b25cbiAgICAgICAgICAgICAgICAgID8gX2MoXCJjeC12dWktYnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b24tc3R5bGVcIjogXCJhY2NlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IF92bS5sb2FkaW5nVGFiW3RhYi5jb21wb25lbnQubmFtZV1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25TYXZlVGFiKGluZGV4LCB0YWIuY29tcG9uZW50Lm5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtfYyhcInNwYW5cIiwgW192bS5fdihcIlNhdmVcIildKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInNlY3Rpb25cIixcbiAgICBbXG4gICAgICBfYyhcImN4LXZ1aS1pbnB1dFwiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgbGFiZWw6IF92bS5sYWJlbC5jbGllbnRfaWQsXG4gICAgICAgICAgXCJ3cmFwcGVyLWNzc1wiOiBbXCJlcXVhbHdpZHRoXCJdLFxuICAgICAgICAgIHNpemU6IFwiZnVsbHdpZHRoXCJcbiAgICAgICAgfSxcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICB2YWx1ZTogX3ZtLnN0b3JhZ2UuY2xpZW50X2lkLFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgIF92bS4kc2V0KF92bS5zdG9yYWdlLCBcImNsaWVudF9pZFwiLCAkJHYpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcInN0b3JhZ2UuY2xpZW50X2lkXCJcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJjeC12dWktaW5wdXRcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGxhYmVsOiBfdm0ubGFiZWwuc2VjcmV0LFxuICAgICAgICAgIFwid3JhcHBlci1jc3NcIjogW1wiZXF1YWx3aWR0aFwiXSxcbiAgICAgICAgICBzaXplOiBcImZ1bGx3aWR0aFwiXG4gICAgICAgIH0sXG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgdmFsdWU6IF92bS5zdG9yYWdlLnNlY3JldCxcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICBfdm0uJHNldChfdm0uc3RvcmFnZSwgXCJzZWNyZXRcIiwgJCR2KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJzdG9yYWdlLnNlY3JldFwiXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXCJjeC12dWktaW5wdXRcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGxhYmVsOiBfdm0ubGFiZWwuYXBpX2tleSxcbiAgICAgICAgICBcIndyYXBwZXItY3NzXCI6IFtcImVxdWFsd2lkdGhcIl0sXG4gICAgICAgICAgc2l6ZTogXCJmdWxsd2lkdGhcIlxuICAgICAgICB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0uYXBpX2tleSxcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICBfdm0uYXBpX2tleSA9ICQkdlxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJhcGlfa2V5XCJcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJjeC12dWktaW5wdXRcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGxhYmVsOiBfdm0ubGFiZWwuYXBpX3VybCxcbiAgICAgICAgICBcIndyYXBwZXItY3NzXCI6IFtcImVxdWFsd2lkdGhcIl0sXG4gICAgICAgICAgc2l6ZTogXCJmdWxsd2lkdGhcIlxuICAgICAgICB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0uYXBpX3VybCxcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICBfdm0uYXBpX3VybCA9ICQkdlxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJhcGlfdXJsXCJcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmItZGVzY3JpcHRpb25cIiB9LCBbXG4gICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmhlbHAuYXBpUHJlZikgKyBcIiBcIiksXG4gICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IF92bS5oZWxwLmFwaUxpbmssIHRhcmdldDogXCJfYmxhbmtcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5oZWxwLmFwaUxpbmtMYWJlbCkpXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFwiY3gtdnVpLWlucHV0XCIsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBsYWJlbDogX3ZtLmxhYmVsLmtleSxcbiAgICAgICAgICBcIndyYXBwZXItY3NzXCI6IFtcImVxdWFsd2lkdGhcIl0sXG4gICAgICAgICAgc2l6ZTogXCJmdWxsd2lkdGhcIlxuICAgICAgICB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0ua2V5LFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgIF92bS5rZXkgPSAkJHZcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwia2V5XCJcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJjeC12dWktaW5wdXRcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGxhYmVsOiBfdm0ubGFiZWwuc2VjcmV0LFxuICAgICAgICAgIFwid3JhcHBlci1jc3NcIjogW1wiZXF1YWx3aWR0aFwiXSxcbiAgICAgICAgICBzaXplOiBcImZ1bGx3aWR0aFwiXG4gICAgICAgIH0sXG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgdmFsdWU6IF92bS5zZWNyZXQsXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLnNlY3JldCA9ICQkdlxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWNyZXRcIlxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJmYi1kZXNjcmlwdGlvblwiIH0sIFtcbiAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uaGVscC5hcGlQcmVmKSArIFwiIFwiKSxcbiAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogX3ZtLmhlbHAuYXBpTGluaywgdGFyZ2V0OiBcIl9ibGFua1wiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmhlbHAuYXBpTGlua0xhYmVsKSlcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiY3gtdnVpLWlucHV0XCIsIHtcbiAgICBhdHRyczoge1xuICAgICAgbGFiZWw6IF92bS5sYWJlbC5hcGlfa2V5LFxuICAgICAgXCJ3cmFwcGVyLWNzc1wiOiBbXCJlcXVhbHdpZHRoXCJdLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIF92bS5oZWxwLmFwaVByZWYgK1xuICAgICAgICAnIDxhIGhyZWY9XCInICtcbiAgICAgICAgX3ZtLmhlbHAuYXBpTGluayArXG4gICAgICAgICdcIiB0YXJnZXQ9XCJfYmxhbmtcIj4nICtcbiAgICAgICAgX3ZtLmhlbHAuYXBpTGlua0xhYmVsICtcbiAgICAgICAgXCI8L2E+XCIsXG4gICAgICBzaXplOiBcImZ1bGx3aWR0aFwiXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IF92bS5hcGlfa2V5LFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uYXBpX2tleSA9ICQkdlxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwiYXBpX2tleVwiXG4gICAgfVxuICB9KVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJjeC12dWktaW5wdXRcIiwge1xuICAgIGF0dHJzOiB7XG4gICAgICBsYWJlbDogX3ZtLmxhYmVsLmFwaV9rZXksXG4gICAgICBcIndyYXBwZXItY3NzXCI6IFtcImVxdWFsd2lkdGhcIl0sXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgX3ZtLmhlbHAuYXBpUHJlZiArXG4gICAgICAgICcgPGEgaHJlZj1cIicgK1xuICAgICAgICBfdm0uaGVscC5hcGlMaW5rICtcbiAgICAgICAgJ1wiIHRhcmdldD1cIl9ibGFua1wiPicgK1xuICAgICAgICBfdm0uaGVscC5hcGlMaW5rTGFiZWwgK1xuICAgICAgICBcIjwvYT5cIixcbiAgICAgIHNpemU6IFwiZnVsbHdpZHRoXCJcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogX3ZtLmFwaV9rZXksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS5hcGlfa2V5ID0gJCR2XG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJhcGlfa2V5XCJcbiAgICB9XG4gIH0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInNlY3Rpb25cIixcbiAgICBbXG4gICAgICBfYyhcImN4LXZ1aS1zd2l0Y2hlclwiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgbmFtZTogXCJ1c2VfZ2F0ZXdheXNcIixcbiAgICAgICAgICBcIndyYXBwZXItY3NzXCI6IFtcImVxdWFsd2lkdGhcIl0sXG4gICAgICAgICAgbGFiZWw6IF92bS5sYWJlbC51c2VfZ2F0ZXdheXMsXG4gICAgICAgICAgZGVzY3JpcHRpb246IF92bS5oZWxwLnVzZV9nYXRld2F5cyxcbiAgICAgICAgICB2YWx1ZTogX3ZtLnN0b3JhZ2UudXNlX2dhdGV3YXlzXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS5jaGFuZ2VWYWwoXCJ1c2VfZ2F0ZXdheXNcIiwgJGV2ZW50KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLnN0b3JhZ2UudXNlX2dhdGV3YXlzXG4gICAgICAgID8gX2MoXCJjeC12dWktc3dpdGNoZXJcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgbmFtZTogXCJlbmFibGVfdGVzdF9tb2RlXCIsXG4gICAgICAgICAgICAgIFwid3JhcHBlci1jc3NcIjogW1wiZXF1YWx3aWR0aFwiXSxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IF92bS5oZWxwLmVuYWJsZV90ZXN0X21vZGUsXG4gICAgICAgICAgICAgIGxhYmVsOiBfdm0ubGFiZWwuZW5hYmxlX3Rlc3RfbW9kZSxcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5zdG9yYWdlLmVuYWJsZV90ZXN0X21vZGVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jaGFuZ2VWYWwoXCJlbmFibGVfdGVzdF9tb2RlXCIsICRldmVudClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLnN0b3JhZ2UudXNlX2dhdGV3YXlzXG4gICAgICAgID8gW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY3gtdnVpLWlubmVyLXBhbmVsXCIgfSxcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS5nYXRld2F5cywgZnVuY3Rpb24odGFiLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgIFwiQ3hWdWlDb2xsYXBzZU1pbmlcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiB0YWIuY29tcG9uZW50Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ3aXRoLXBhbmVsXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgZGVzYzogdGFiLmRlc2MgfHwgXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogdGFiLnRpdGxlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwia2VlcC1hbGl2ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKHRhYi5jb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiBcImdhdGV3YXlzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlZkluRm9yOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jb21pbmc6IF92bS5nZXRJbmNvbWluZyh0YWIuY29tcG9uZW50Lm5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiY3gtdnVpLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uLXN0eWxlXCI6IFwiYWNjZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IF92bS5sb2FkaW5nR2F0ZXdheXNbdGFiLmNvbXBvbmVudC5uYW1lXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uU2F2ZUdhdGV3YXkoaW5kZXgsIHRhYi5jb21wb25lbnQubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNsb3Q6IFwibGFiZWxcIiB9LCBzbG90OiBcImxhYmVsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlNhdmVcIildXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyLCAvKiBzZXJ2ZXIgb25seSAqL1xuICBzaGFkb3dNb2RlIC8qIHZ1ZS1jbGkgb25seSAqL1xuKSB7XG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gJ2RhdGEtdi0nICsgc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICAob3B0aW9ucy5mdW5jdGlvbmFsID8gdGhpcy5wYXJlbnQgOiB0aGlzKS4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290XG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIDogaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb25hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FkZG9uc1BhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIxYmM3M2RlMVwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FkZG9uc1BhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRkb25zUGFnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRkb25JdGVtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNWYyNzgyODZcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BZGRvbkl0ZW0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRkb25JdGVtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuICBNb2RpZmllZCBieSBFdmFuIFlvdSBAeXl4OTkwODAzXG4qL1xuXG5pbXBvcnQgbGlzdFRvU3R5bGVzIGZyb20gJy4vbGlzdFRvU3R5bGVzJ1xuXG52YXIgaGFzRG9jdW1lbnQgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG5cbmlmICh0eXBlb2YgREVCVUcgIT09ICd1bmRlZmluZWQnICYmIERFQlVHKSB7XG4gIGlmICghaGFzRG9jdW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ3Z1ZS1zdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudC4gJyArXG4gICAgXCJVc2UgeyB0YXJnZXQ6ICdub2RlJyB9IGluIHlvdXIgV2VicGFjayBjb25maWcgdG8gaW5kaWNhdGUgYSBzZXJ2ZXItcmVuZGVyaW5nIGVudmlyb25tZW50LlwiXG4gICkgfVxufVxuXG4vKlxudHlwZSBTdHlsZU9iamVjdCA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgcGFydHM6IEFycmF5PFN0eWxlT2JqZWN0UGFydD5cbn1cblxudHlwZSBTdHlsZU9iamVjdFBhcnQgPSB7XG4gIGNzczogc3RyaW5nO1xuICBtZWRpYTogc3RyaW5nO1xuICBzb3VyY2VNYXA6ID9zdHJpbmdcbn1cbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHsvKlxuICBbaWQ6IG51bWJlcl06IHtcbiAgICBpZDogbnVtYmVyLFxuICAgIHJlZnM6IG51bWJlcixcbiAgICBwYXJ0czogQXJyYXk8KG9iaj86IFN0eWxlT2JqZWN0UGFydCkgPT4gdm9pZD5cbiAgfVxuKi99XG5cbnZhciBoZWFkID0gaGFzRG9jdW1lbnQgJiYgKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSlcbnZhciBzaW5nbGV0b25FbGVtZW50ID0gbnVsbFxudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwXG52YXIgaXNQcm9kdWN0aW9uID0gZmFsc2VcbnZhciBub29wID0gZnVuY3Rpb24gKCkge31cbnZhciBvcHRpb25zID0gbnVsbFxudmFyIHNzcklkS2V5ID0gJ2RhdGEtdnVlLXNzci1pZCdcblxuLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4vLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG52YXIgaXNPbGRJRSA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIC9tc2llIFs2LTldXFxiLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkU3R5bGVzQ2xpZW50IChwYXJlbnRJZCwgbGlzdCwgX2lzUHJvZHVjdGlvbiwgX29wdGlvbnMpIHtcbiAgaXNQcm9kdWN0aW9uID0gX2lzUHJvZHVjdGlvblxuXG4gIG9wdGlvbnMgPSBfb3B0aW9ucyB8fCB7fVxuXG4gIHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIGxpc3QpXG4gIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG4gICAgdmFyIG1heVJlbW92ZSA9IFtdXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgICAgZG9tU3R5bGUucmVmcy0tXG4gICAgICBtYXlSZW1vdmUucHVzaChkb21TdHlsZSlcbiAgICB9XG4gICAgaWYgKG5ld0xpc3QpIHtcbiAgICAgIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbmV3TGlzdClcbiAgICAgIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzID0gW11cbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXVxuICAgICAgaWYgKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKClcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMgLyogQXJyYXk8U3R5bGVPYmplY3Q+ICovKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgZG9tU3R5bGUucmVmcysrXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pXG4gICAgICB9XG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIGlmIChkb21TdHlsZS5wYXJ0cy5sZW5ndGggPiBpdGVtLnBhcnRzLmxlbmd0aCkge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5sZW5ndGggPSBpdGVtLnBhcnRzLmxlbmd0aFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGFydHMgPSBbXVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHsgaWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0cyB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAoKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gIHN0eWxlRWxlbWVudC50eXBlID0gJ3RleHQvY3NzJ1xuICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudClcbiAgcmV0dXJuIHN0eWxlRWxlbWVudFxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICB2YXIgdXBkYXRlLCByZW1vdmVcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlWycgKyBzc3JJZEtleSArICd+PVwiJyArIG9iai5pZCArICdcIl0nKVxuXG4gIGlmIChzdHlsZUVsZW1lbnQpIHtcbiAgICBpZiAoaXNQcm9kdWN0aW9uKSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBhbmQgaW4gcHJvZHVjdGlvbiBtb2RlLlxuICAgICAgLy8gc2ltcGx5IGRvIG5vdGhpbmcuXG4gICAgICByZXR1cm4gbm9vcFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBidXQgaW4gZGV2IG1vZGUuXG4gICAgICAvLyBmb3Igc29tZSByZWFzb24gQ2hyb21lIGNhbid0IGhhbmRsZSBzb3VyY2UgbWFwIGluIHNlcnZlci1yZW5kZXJlZFxuICAgICAgLy8gc3R5bGUgdGFncyAtIHNvdXJjZSBtYXBzIGluIDxzdHlsZT4gb25seSB3b3JrcyBpZiB0aGUgc3R5bGUgdGFnIGlzXG4gICAgICAvLyBjcmVhdGVkIGFuZCBpbnNlcnRlZCBkeW5hbWljYWxseS4gU28gd2UgcmVtb3ZlIHRoZSBzZXJ2ZXIgcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlcyBhbmQgaW5qZWN0IG5ldyBvbmVzLlxuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIGlmIChpc09sZElFKSB7XG4gICAgLy8gdXNlIHNpbmdsZXRvbiBtb2RlIGZvciBJRTkuXG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKytcbiAgICBzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KCkpXG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpXG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSlcbiAgfSBlbHNlIHtcbiAgICAvLyB1c2UgbXVsdGktc3R5bGUtdGFnIG1vZGUgaW4gYWxsIG90aGVyIGNhc2VzXG4gICAgc3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KClcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KVxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICB1cGRhdGUob2JqKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG4gICAgICAgICAgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcbiAgICAgICAgICBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iailcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKClcbiAgICB9XG4gIH1cbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnRcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKVxuICB9XG59KSgpXG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3NcblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcylcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcylcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSlcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGVFbGVtZW50LCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3NcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwXG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSlcbiAgfVxuICBpZiAob3B0aW9ucy5zc3JJZCkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoc3NySWRLZXksIG9iai5pZClcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXApIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RldnRvb2xzL2RvY3MvamF2YXNjcmlwdC1kZWJ1Z2dpbmdcbiAgICAvLyB0aGlzIG1ha2VzIHNvdXJjZSBtYXBzIGluc2lkZSBzdHlsZSB0YWdzIHdvcmsgcHJvcGVybHkgaW4gQ2hyb21lXG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlVVJMPScgKyBzb3VyY2VNYXAuc291cmNlc1swXSArICcgKi8nXG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJyArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyAnICovJ1xuICB9XG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzc1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKVxuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSlcbiAgfVxufVxuIiwiLyoqXG4gKiBUcmFuc2xhdGVzIHRoZSBsaXN0IGZvcm1hdCBwcm9kdWNlZCBieSBjc3MtbG9hZGVyIGludG8gc29tZXRoaW5nXG4gKiBlYXNpZXIgdG8gbWFuaXB1bGF0ZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChwYXJlbnRJZCwgbGlzdCkge1xuICB2YXIgc3R5bGVzID0gW11cbiAgdmFyIG5ld1N0eWxlcyA9IHt9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXVxuICAgIHZhciBpZCA9IGl0ZW1bMF1cbiAgICB2YXIgY3NzID0gaXRlbVsxXVxuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl1cbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXVxuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgaWQ6IHBhcmVudElkICsgJzonICsgaSxcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9XG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0geyBpZDogaWQsIHBhcnRzOiBbcGFydF0gfSlcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpXG4gICAgfVxuICB9XG4gIHJldHVybiBzdHlsZXNcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgU2V0dGluZ3NQYWdlIGZyb20gXCIuL3BhZ2VzL3NldHRpbmdzL1NldHRpbmdzUGFnZVwiO1xuaW1wb3J0IEFkZG9uc1BhZ2UgZnJvbSBcIi4vcGFnZXMvYWRkb25zL0FkZG9uc1BhZ2VcIjtcblxuKCAoKSA9PiB7XG5cdGNvbnN0IHByZWYgPSAnamV0LWZvcm0tYnVpbGRlcl9wYWdlXyc7XG5cblx0Y29uc3QgeyBhcHBseUZpbHRlcnMgfSA9IHdwLmhvb2tzO1xuXG5cdGNvbnN0IHBhZ2VzID0gYXBwbHlGaWx0ZXJzKCAnamV0LmZiLnJlZ2lzdGVyLmFkbWluLXBhZ2VzJywgW1xuXHRcdFNldHRpbmdzUGFnZSxcblx0XHRBZGRvbnNQYWdlXG5cdF0gKVxuXG5cdHBhZ2VzLmZvckVhY2goIFBhZ2VDb21wb25lbnQgPT4ge1xuXHRcdGNvbnN0IHBhZ2VOYW1lID0gKCBwcmVmICsgUGFnZUNvbXBvbmVudC5uYW1lICk7XG5cblx0XHRpZiAoIHdpbmRvdy5wYWdlbm93ID09PSBwYWdlTmFtZSApIHtcblx0XHRcdG5ldyBWdWUoIHtcblx0XHRcdFx0ZWw6ICcjJyArIHByZWYgKyBQYWdlQ29tcG9uZW50Lm5hbWUsXG5cdFx0XHRcdHJlbmRlcjogaCA9PiBoKCBQYWdlQ29tcG9uZW50IClcblx0XHRcdH0gKTtcblx0XHR9XG5cdH0gKVxuXG59KSgpXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQWJBO0FBa0JBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBNUJBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2dHQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFmQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQWhEQTtBQWtEQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQVpBO0FBQ0E7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUF0REE7QUF3REE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQXhDQTtBQTBDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUE3TEE7QUE5RUE7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFsREE7QUFxREE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQVJBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQTVEQTtBQThEQTtBQTlGQTtBQWxFQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFMQTtBQWhCQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFEQTtBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTEE7QUFuQkE7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFSQTtBQW5CQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQVJBO0FBbkJBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBUEE7QUFqQkE7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFQQTtBQWpCQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQytCQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQURBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFmQTtBQTlCQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7QUNwRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQURBO0FBS0E7QUFDQTtBQXpGQTtBQURBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7OztBQ1BBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7OztBQ1BBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUVBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUVBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUtBO0FBTkE7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7QUNsRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWtCQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBa0JBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFrQkE7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWtCQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBa0JBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFrQkE7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWtCQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBa0JBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFrQkE7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWtCQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBOzs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBOzs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7OztBOzs7Ozs7Ozs7Ozs7Ozs7OztBOzs7Ozs7Ozs7Ozs7Ozs7OztBOzs7Ozs7Ozs7Ozs7Ozs7OztBOzs7Ozs7Ozs7Ozs7Ozs7OztBOzs7Ozs7Ozs7Ozs7Ozs7OztBOzs7Ozs7Ozs7Ozs7Ozs7OztBOzs7Ozs7Ozs7Ozs7Ozs7OztBOzs7Ozs7Ozs7Ozs7Ozs7OztBOzs7Ozs7Ozs7Ozs7Ozs7OztBOzs7Ozs7Ozs7Ozs7Ozs7OztBOzs7Ozs7Ozs7Ozs7Ozs7OztBOzs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7QUNyRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7QUM5VEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7OztBQ2xPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7QUNsR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7QUM1R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7QUNuR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7OztBQy9OQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFDQTtBQUVBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=