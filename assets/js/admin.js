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
___CSS_LOADER_EXPORT___.push([module.id, ".proccesing-state {\n  opacity: 0.5;\n  pointer-events: none;\n}\n.jfb-addons-page__inner {\n  padding: 30px;\n  height: 100%;\n}\n.jfb-addons-page__header {\n  padding-bottom: 15px;\n  border-bottom: 1px solid #DCDCDD;\n  margin-bottom: 30px;\n}\n.jfb-addons-page__header-controls {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n.jfb-addons-page__header-controls > .cx-vui-button {\n  margin-left: 10px;\n}\n.jfb-addons-page .cx-vui-button {\n  font-size: 13px;\n  font-weight: 400;\n  background-color: transparent;\n}\n.jfb-addons-page .cx-vui-button .button-icon {\n  margin-right: 5px;\n}\n.jfb-addons-page .cx-vui-button--style-accent {\n  color: #007cba;\n  box-shadow: inset 0 0 0 1px #007cba;\n}\n.jfb-addons-page .cx-vui-button--style-accent:hover {\n  background-color: #007cba12;\n}\n.jfb-addons-page .cx-vui-button--style-accent .button-icon path {\n  fill: #007cba;\n}\n.jfb-addons-page .cx-vui-button--style-danger {\n  color: #d6336c;\n  box-shadow: inset 0 0 0 1px #d6336c;\n}\n.jfb-addons-page .cx-vui-button--style-danger:hover {\n  background-color: #d6336c12;\n}\n.jfb-addons-page .cx-vui-button--style-danger .button-icon path {\n  fill: #d6336c;\n}\n.jfb-addons-page .cx-vui-button__content > span {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.jfb-addons-page .cx-vui-popup__header {\n  padding-bottom: 15px;\n  border-bottom: 1px solid #DCDCDD;\n  margin-bottom: 30px;\n}\n.jfb-addons-page .cx-vui-popup__header-title {\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 36px;\n  color: #23282D;\n}\n.jfb-addons-page__license-form {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: stretch;\n}\n.jfb-addons-page__license-form > span {\n  margin-bottom: 10px;\n}\n.jfb-addons-page__license-input {\n  margin-bottom: 10px;\n}", "",{"version":3,"sources":["webpack://./admin/pages/addons/AddonsPage.vue","webpack://./../AddonsPage.vue"],"names":[],"mappings":"AA4WA;EACC,YAAA;EACA,oBAAA;AC3WD;ADgXC;EACC,aAAA;EACA,YAAA;AC7WF;ADgXC;EACC,oBAAA;EACA,gCAAA;EACA,mBAAA;AC9WF;ADiXC;EACC,aAAA;EACA,yBAAA;EACA,mBAAA;AC/WF;ADiXE;EACC,iBAAA;AC/WH;ADmXC;EACC,eAAA;EACA,gBAAA;EACA,6BAAA;ACjXF;ADmXE;EACC,iBAAA;ACjXH;ADoXE;EACC,cAAA;EACA,mCAAA;AClXH;ADoXG;EACC,2BAAA;AClXJ;ADsXI;EACC,aAAA;ACpXL;ADyXE;EACC,cAAA;EACA,mCAAA;ACvXH;ADyXG;EACC,2BAAA;ACvXJ;AD2XI;EACC,aAAA;ACzXL;AD+XG;EACC,aAAA;EACA,uBAAA;EACA,mBAAA;AC7XJ;ADmYE;EACC,oBAAA;EACA,gCAAA;EACA,mBAAA;ACjYH;ADoYE;EACC,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cAAA;AClYH;AD0YC;EACC,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,oBAAA;ACxYF;AD0YE;EACC,mBAAA;ACxYH;AD4YC;EACC,mBAAA;AC1YF","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.proccesing-state {\n\topacity: 0.5;\n\tpointer-events: none;\n}\n\n.jfb-addons-page {\n\n\t&__inner {\n\t\tpadding: 30px;\n\t\theight: 100%;\n\t}\n\n\t&__header {\n\t\tpadding-bottom: 15px;\n\t\tborder-bottom: 1px solid #DCDCDD;\n\t\tmargin-bottom: 30px;\n\t}\n\n\t&__header-controls {\n\t\tdisplay: flex;\n\t\tjustify-content: flex-end;\n\t\talign-items: center;\n\n\t\t> .cx-vui-button {\n\t\t\tmargin-left: 10px;\n\t\t}\n\t}\n\n\t.cx-vui-button {\n\t\tfont-size: 13px;\n\t\tfont-weight: 400;\n\t\tbackground-color: transparent;\n\n\t\t.button-icon {\n\t\t\tmargin-right: 5px;\n\t\t}\n\n\t\t&--style-accent {\n\t\t\tcolor: #007cba;\n\t\t\tbox-shadow: inset 0 0 0 1px #007cba;\n\n\t\t\t&:hover {\n\t\t\t\tbackground-color: #007cba12;\n\t\t\t}\n\n\t\t\t.button-icon {\n\t\t\t\tpath {\n\t\t\t\t\tfill: #007cba;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t&--style-danger {\n\t\t\tcolor: #d6336c;\n\t\t\tbox-shadow: inset 0 0 0 1px #d6336c;\n\n\t\t\t&:hover {\n\t\t\t\tbackground-color: #d6336c12;\n\t\t\t}\n\n\t\t\t.button-icon {\n\t\t\t\tpath {\n\t\t\t\t\tfill: #d6336c;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t&__content {\n\t\t\t> span {\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: center;\n\t\t\t\talign-items: center;\n\t\t\t}\n\t\t}\n\t}\n\n\t.cx-vui-popup {\n\t\t&__header {\n\t\t\tpadding-bottom: 15px;\n\t\t\tborder-bottom: 1px solid #DCDCDD;\n\t\t\tmargin-bottom: 30px;\n\t\t}\n\n\t\t&__header-title {\n\t\t\tfont-weight: 500;\n\t\t\tfont-size: 24px;\n\t\t\tline-height: 36px;\n\t\t\tcolor: #23282D;\n\t\t}\n\t}\n\n\t&__license-popup {\n\n\t}\n\n\t&__license-form {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tjustify-content: flex-start;\n\t\talign-items: stretch;\n\n\t\t> span {\n\t\t\tmargin-bottom: 10px;\n\t\t}\n\t}\n\n\t&__license-input {\n\t\tmargin-bottom: 10px;\n\t}\n}\n\n",".proccesing-state {\n  opacity: 0.5;\n  pointer-events: none;\n}\n\n.jfb-addons-page__inner {\n  padding: 30px;\n  height: 100%;\n}\n.jfb-addons-page__header {\n  padding-bottom: 15px;\n  border-bottom: 1px solid #DCDCDD;\n  margin-bottom: 30px;\n}\n.jfb-addons-page__header-controls {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n.jfb-addons-page__header-controls > .cx-vui-button {\n  margin-left: 10px;\n}\n.jfb-addons-page .cx-vui-button {\n  font-size: 13px;\n  font-weight: 400;\n  background-color: transparent;\n}\n.jfb-addons-page .cx-vui-button .button-icon {\n  margin-right: 5px;\n}\n.jfb-addons-page .cx-vui-button--style-accent {\n  color: #007cba;\n  box-shadow: inset 0 0 0 1px #007cba;\n}\n.jfb-addons-page .cx-vui-button--style-accent:hover {\n  background-color: #007cba12;\n}\n.jfb-addons-page .cx-vui-button--style-accent .button-icon path {\n  fill: #007cba;\n}\n.jfb-addons-page .cx-vui-button--style-danger {\n  color: #d6336c;\n  box-shadow: inset 0 0 0 1px #d6336c;\n}\n.jfb-addons-page .cx-vui-button--style-danger:hover {\n  background-color: #d6336c12;\n}\n.jfb-addons-page .cx-vui-button--style-danger .button-icon path {\n  fill: #d6336c;\n}\n.jfb-addons-page .cx-vui-button__content > span {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.jfb-addons-page .cx-vui-popup__header {\n  padding-bottom: 15px;\n  border-bottom: 1px solid #DCDCDD;\n  margin-bottom: 30px;\n}\n.jfb-addons-page .cx-vui-popup__header-title {\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 36px;\n  color: #23282D;\n}\n.jfb-addons-page__license-form {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: stretch;\n}\n.jfb-addons-page__license-form > span {\n  margin-bottom: 10px;\n}\n.jfb-addons-page__license-input {\n  margin-bottom: 10px;\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".jfb-addons {\n  margin-bottom: 50px;\n}\n.jfb-addons:last-child {\n  margin-bottom: 0;\n}\n.jfb-addons a {\n  color: #007cba;\n}\n.jfb-addons__header {\n  margin-bottom: 20px;\n}\n.jfb-addons__list {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 40px;\n}\n@media (max-width: 1140px) {\n.jfb-addons__list {\n    grid-template-columns: repeat(2, 1fr);\n}\n}\n.jfb-addons__item {\n  transition: box-shadow 0.3s ease-out;\n  border-radius: 10px;\n}\n.jfb-addons__item:hover {\n  box-shadow: 0px 4px 28px rgba(15, 23, 42, 0.1);\n}\n.jfb-addons__item.activated .jfb-addons__item-info {\n  background-color: white;\n}\n.jfb-addons__item.update-avaliable .jfb-addons__item-name .version {\n  background-color: #D6336C;\n}\n.jfb-addons__item.update-avaliable .jfb-addons__item-update .latest-version {\n  color: white;\n  background-color: #46B450;\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n.jfb-addons__item-inner {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  height: 100%;\n}\n.jfb-addons__item-thumb {\n  border-radius: 10px 10px 0 0;\n  line-height: 0;\n  overflow: hidden;\n  position: relative;\n}\n.jfb-addons__item-thumb .pro-badge {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n}\n.jfb-addons__item-thumb img {\n  width: 100%;\n  height: auto;\n}\n.jfb-addons__item-info {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  flex: 1 1 auto;\n  padding: 20px;\n  border-radius: 0 0 10px 10px;\n  border-width: 0 1px 1px 1px;\n  border-color: #DCDCDD;\n  border-style: solid;\n  background-color: white;\n}\n.jfb-addons__item-name {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 10px;\n}\n.jfb-addons__item-name .label {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.25;\n}\n.jfb-addons__item-name .version {\n  padding: 1px 8px;\n  border-radius: 4px;\n  color: white;\n  background-color: #46B450;\n  margin-left: 10px;\n}\n.jfb-addons__item-update {\n  color: #7b7e81;\n  margin-bottom: 10px;\n}\n.jfb-addons__item-license {\n  margin-bottom: 10px;\n  color: #7b7e81;\n}\n.jfb-addons__item-license .cx-vui-button {\n  margin-left: 3px;\n}\n.jfb-addons__item-desc {\n  flex: 1 1 auto;\n}\n.jfb-addons__item-desc a {\n  text-decoration: none;\n}\n.jfb-addons__item-actions {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-top: 20px;\n}\n.jfb-addons__item-actions:empty {\n  display: none;\n}\n.jfb-addons__item-actions .cx-vui-button {\n  margin-right: 20px;\n}", "",{"version":3,"sources":["webpack://./admin/pages/addons/components/AddonItem.vue","webpack://./../AddonItem.vue"],"names":[],"mappings":"AAuQA;EACC,mBAAA;ACtQD;ADwQC;EACC,gBAAA;ACtQF;ADyQC;EACC,cAAA;ACvQF;AD0QC;EACC,mBAAA;ACxQF;AD2QC;EACC,aAAA;EACA,qCAAA;EACA,SAAA;ACzQF;AD2QE;AALD;IAME,qCAAA;ACxQD;AACF;AD2QC;EACC,oCAAA;EACA,mBAAA;ACzQF;AD2QE;EACC,8CAAA;ACzQH;AD6QG;EACC,uBAAA;AC3QJ;ADiRI;EACC,yBAAA;AC/QL;ADmRI;EACC,YAAA;EACA,yBAAA;EACA,gBAAA;EACA,kBAAA;ACjRL;ADuRC;EACC,aAAA;EACA,sBAAA;EACA,oBAAA;EACA,YAAA;ACrRF;ADwRC;EACC,4BAAA;EACA,cAAA;EACA,gBAAA;EACA,kBAAA;ACtRF;ADwRE;EACC,kBAAA;EACA,SAAA;EACA,UAAA;ACtRH;ADyRE;EACC,WAAA;EACA,YAAA;ACvRH;AD2RC;EACC,aAAA;EACA,sBAAA;EACA,oBAAA;EACA,cAAA;EACA,aAAA;EACA,4BAAA;EACA,2BAAA;EACA,qBAAA;EACA,mBAAA;EACA,uBAAA;ACzRF;AD4RC;EACC,aAAA;EACA,8BAAA;EACA,uBAAA;EACA,mBAAA;AC1RF;AD4RE;EACC,eAAA;EACA,gBAAA;EACA,iBAAA;AC1RH;AD6RE;EACC,gBAAA;EACA,kBAAA;EACA,YAAA;EACA,yBAAA;EACA,iBAAA;AC3RH;AD+RC;EACC,cAAA;EACA,mBAAA;AC7RF;ADgSC;EACC,mBAAA;EACA,cAAA;AC9RF;ADgSE;EACC,gBAAA;AC9RH;ADkSC;EACC,cAAA;AChSF;ADkSE;EACC,qBAAA;AChSH;ADoSC;EACC,aAAA;EACA,2BAAA;EACA,mBAAA;EACA,eAAA;EACA,gBAAA;AClSF;ADoSE;EACC,aAAA;AClSH;ADqSE;EACC,kBAAA;ACnSH","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.jfb-addons {\n\tmargin-bottom: 50px;\n\n\t&:last-child {\n\t\tmargin-bottom: 0;\n\t}\n\n\ta {\n\t\tcolor: #007cba;\n\t}\n\n\t&__header {\n\t\tmargin-bottom: 20px;\n\t}\n\n\t&__list {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: repeat(4, 1fr);\n\t\tgap: 40px;\n\n\t\t@media (max-width: 1140px) {\n\t\t\tgrid-template-columns: repeat(2, 1fr);\n\t\t}\n\t}\n\n\t&__item {\n\t\ttransition: box-shadow .3s ease-out;\n\t\tborder-radius: 10px;\n\n\t\t&:hover {\n\t\t\tbox-shadow: 0px 4px 28px rgba(15, 23, 42, 0.1);\n\t\t}\n\n\t\t&.activated {\n\t\t\t.jfb-addons__item-info {\n\t\t\t\tbackground-color: white;\n\t\t\t}\n\t\t}\n\n\t\t&.update-avaliable {\n\t\t\t.jfb-addons__item-name {\n\t\t\t\t.version {\n\t\t\t\t\tbackground-color: #D6336C;\n\t\t\t\t}\n\t\t\t}\n\t\t\t.jfb-addons__item-update {\n\t\t\t\t.latest-version {\n\t\t\t\t\tcolor: white;\n\t\t\t\t\tbackground-color: #46B450;\n\t\t\t\t\tpadding: 2px 8px;\n\t\t\t\t\tborder-radius: 4px;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t&__item-inner {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: stretch;\n\t\theight: 100%;\n\t}\n\n\t&__item-thumb {\n\t\tborder-radius: 10px 10px 0 0;\n\t\tline-height: 0;\n\t\toverflow: hidden;\n\t\tposition: relative;\n\n\t\t.pro-badge {\n\t\t\tposition: absolute;\n\t\t\ttop: 12px;\n\t\t\tleft: 12px;\n\t\t}\n\n\t\timg {\n\t\t\twidth: 100%;\n\t\t\theight: auto;\n\t\t}\n\t}\n\n\t&__item-info {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: stretch;\n\t\tflex: 1 1 auto;\n\t\tpadding: 20px;\n\t\tborder-radius: 0 0 10px 10px;\n\t\tborder-width: 0 1px 1px 1px;\n\t\tborder-color: #DCDCDD;\n\t\tborder-style: solid;\n\t\tbackground-color: white;\n\t}\n\n\t&__item-name {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\talign-items: flex-start;\n\t\tmargin-bottom: 10px;\n\n\t\t.label {\n\t\t\tfont-size: 20px;\n\t\t\tfont-weight: 700;\n\t\t\tline-height: 1.25;\n\t\t}\n\n\t\t.version {\n\t\t\tpadding: 1px 8px;\n\t\t\tborder-radius: 4px;\n\t\t\tcolor: white;\n\t\t\tbackground-color: #46B450;\n\t\t\tmargin-left: 10px;\n\t\t}\n\t}\n\n\t&__item-update {\n\t\tcolor: #7b7e81;\n\t\tmargin-bottom: 10px;\n\t}\n\n\t&__item-license {\n\t\tmargin-bottom: 10px;\n\t\tcolor: #7b7e81;\n\n\t\t.cx-vui-button {\n\t\t\tmargin-left: 3px;\n\t\t}\n\t}\n\n\t&__item-desc {\n\t\tflex: 1 1 auto;\n\n\t\ta {\n\t\t\ttext-decoration: none;\n\t\t}\n\t}\n\n\t&__item-actions {\n\t\tdisplay: flex;\n\t\tjustify-content: flex-start;\n\t\talign-items: center;\n\t\tflex-wrap: wrap;\n\t\tmargin-top: 20px;\n\n\t\t&:empty {\n\t\t\tdisplay: none;\n\t\t}\n\n\t\t.cx-vui-button {\n\t\t\tmargin-right: 20px;\n\t\t}\n\t}\n}\n\n",".jfb-addons {\n  margin-bottom: 50px;\n}\n.jfb-addons:last-child {\n  margin-bottom: 0;\n}\n.jfb-addons a {\n  color: #007cba;\n}\n.jfb-addons__header {\n  margin-bottom: 20px;\n}\n.jfb-addons__list {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 40px;\n}\n@media (max-width: 1140px) {\n  .jfb-addons__list {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.jfb-addons__item {\n  transition: box-shadow 0.3s ease-out;\n  border-radius: 10px;\n}\n.jfb-addons__item:hover {\n  box-shadow: 0px 4px 28px rgba(15, 23, 42, 0.1);\n}\n.jfb-addons__item.activated .jfb-addons__item-info {\n  background-color: white;\n}\n.jfb-addons__item.update-avaliable .jfb-addons__item-name .version {\n  background-color: #D6336C;\n}\n.jfb-addons__item.update-avaliable .jfb-addons__item-update .latest-version {\n  color: white;\n  background-color: #46B450;\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n.jfb-addons__item-inner {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  height: 100%;\n}\n.jfb-addons__item-thumb {\n  border-radius: 10px 10px 0 0;\n  line-height: 0;\n  overflow: hidden;\n  position: relative;\n}\n.jfb-addons__item-thumb .pro-badge {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n}\n.jfb-addons__item-thumb img {\n  width: 100%;\n  height: auto;\n}\n.jfb-addons__item-info {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  flex: 1 1 auto;\n  padding: 20px;\n  border-radius: 0 0 10px 10px;\n  border-width: 0 1px 1px 1px;\n  border-color: #DCDCDD;\n  border-style: solid;\n  background-color: white;\n}\n.jfb-addons__item-name {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 10px;\n}\n.jfb-addons__item-name .label {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.25;\n}\n.jfb-addons__item-name .version {\n  padding: 1px 8px;\n  border-radius: 4px;\n  color: white;\n  background-color: #46B450;\n  margin-left: 10px;\n}\n.jfb-addons__item-update {\n  color: #7b7e81;\n  margin-bottom: 10px;\n}\n.jfb-addons__item-license {\n  margin-bottom: 10px;\n  color: #7b7e81;\n}\n.jfb-addons__item-license .cx-vui-button {\n  margin-left: 3px;\n}\n.jfb-addons__item-desc {\n  flex: 1 1 auto;\n}\n.jfb-addons__item-desc a {\n  text-decoration: none;\n}\n.jfb-addons__item-actions {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-top: 20px;\n}\n.jfb-addons__item-actions:empty {\n  display: none;\n}\n.jfb-addons__item-actions .cx-vui-button {\n  margin-right: 20px;\n}"],"sourceRoot":""}]);
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
              _c(
                "a",
                { attrs: { href: _vm.addonData.demo, target: "_blank" } },
                [_vm._v("Learn More")]
              )
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4uanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYWRtaW4vY29tcG9uZW50cy9jb2xsYXBzZS1taW5pL0N4VnVpQ29sbGFwc2VNaW5pLnZ1ZSIsIndlYnBhY2s6Ly8vYWRtaW4vcGFnZXMvYWRkb25zL0FkZG9uc1BhZ2UudnVlIiwid2VicGFjazovLy9hZG1pbi9wYWdlcy9hZGRvbnMvY29tcG9uZW50cy9BZGRvbkl0ZW0udnVlIiwid2VicGFjazovLy9hZG1pbi9wYWdlcy9zZXR0aW5ncy9TZXR0aW5nc1BhZ2UudnVlIiwid2VicGFjazovLy9hZG1pbi9wYWdlcy9zZXR0aW5ncy9nYXRld2F5cy9wYXlwYWwvUGF5cGFsVGFiLnZ1ZSIsIndlYnBhY2s6Ly8vYWRtaW4vcGFnZXMvc2V0dGluZ3MvdGFicy9hY3RpdmVjYW1wYWlnbi9BY3RpdmVDYW1wYWlnblRhYi52dWUiLCJ3ZWJwYWNrOi8vL2FkbWluL3BhZ2VzL3NldHRpbmdzL3RhYnMvY2FwdGNoYS9DYXB0Y2hhVGFiLnZ1ZSIsIndlYnBhY2s6Ly8vYWRtaW4vcGFnZXMvc2V0dGluZ3MvdGFicy9nZXRyZXNwb25zZS9HZXRSZXNwb25zZVRhYi52dWUiLCJ3ZWJwYWNrOi8vL2FkbWluL3BhZ2VzL3NldHRpbmdzL3RhYnMvbWFpbGNoaW1wL01haWxDaGltcFRhYi52dWUiLCJ3ZWJwYWNrOi8vL2FkbWluL3BhZ2VzL3NldHRpbmdzL3RhYnMvcGF5bWVudHMtZ2F0ZXdheXMvUGF5bWVudHNHYXRld2F5cy52dWUiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vbWl4aW5zL0dldEluY29taW5nLmpzIiwid2VicGFjazovLy8uL2FkbWluL21peGlucy9TYXZlVGFiQnlBamF4LmpzIiwid2VicGFjazovLy8uL2FkbWluL3BhZ2VzL3NldHRpbmdzL2dhdGV3YXlzL3BheXBhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9zZXR0aW5ncy9nYXRld2F5cy9wYXlwYWwvc291cmNlLmpzIiwid2VicGFjazovLy8uL2FkbWluL3BhZ2VzL3NldHRpbmdzL3RhYnMvYWN0aXZlY2FtcGFpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvc2V0dGluZ3MvdGFicy9hY3RpdmVjYW1wYWlnbi9zb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvc2V0dGluZ3MvdGFicy9jYXB0Y2hhL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FkbWluL3BhZ2VzL3NldHRpbmdzL3RhYnMvY2FwdGNoYS9zb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvc2V0dGluZ3MvdGFicy9nZXRyZXNwb25zZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9zZXR0aW5ncy90YWJzL2dldHJlc3BvbnNlL3NvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9zZXR0aW5ncy90YWJzL21haWxjaGltcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9zZXR0aW5ncy90YWJzL21haWxjaGltcC9zb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvc2V0dGluZ3MvdGFicy9wYXltZW50cy1nYXRld2F5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9zZXR0aW5ncy90YWJzL3BheW1lbnRzLWdhdGV3YXlzL3NvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9hZGRvbnMvQWRkb25zUGFnZS52dWU/NmNiMCIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9hZGRvbnMvY29tcG9uZW50cy9BZGRvbkl0ZW0udnVlPzA4MzAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL2FkbWluL2NvbXBvbmVudHMvY29sbGFwc2UtbWluaS9DeFZ1aUNvbGxhcHNlTWluaS52dWUiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvYWRkb25zL0FkZG9uc1BhZ2UudnVlIiwid2VicGFjazovLy8uL2FkbWluL3BhZ2VzL2FkZG9ucy9jb21wb25lbnRzL0FkZG9uSXRlbS52dWUiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvc2V0dGluZ3MvU2V0dGluZ3NQYWdlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9zZXR0aW5ncy9nYXRld2F5cy9wYXlwYWwvUGF5cGFsVGFiLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9zZXR0aW5ncy90YWJzL2FjdGl2ZWNhbXBhaWduL0FjdGl2ZUNhbXBhaWduVGFiLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9zZXR0aW5ncy90YWJzL2NhcHRjaGEvQ2FwdGNoYVRhYi52dWUiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvc2V0dGluZ3MvdGFicy9nZXRyZXNwb25zZS9HZXRSZXNwb25zZVRhYi52dWUiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvc2V0dGluZ3MvdGFicy9tYWlsY2hpbXAvTWFpbENoaW1wVGFiLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9zZXR0aW5ncy90YWJzL3BheW1lbnRzLWdhdGV3YXlzL1BheW1lbnRzR2F0ZXdheXMudnVlIiwid2VicGFjazovLy8uL2FkbWluL2NvbXBvbmVudHMvY29sbGFwc2UtbWluaS9DeFZ1aUNvbGxhcHNlTWluaS52dWU/OWU2YSIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9hZGRvbnMvQWRkb25zUGFnZS52dWU/ZWFlMyIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9hZGRvbnMvY29tcG9uZW50cy9BZGRvbkl0ZW0udnVlP2EwZmYiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvc2V0dGluZ3MvU2V0dGluZ3NQYWdlLnZ1ZT8yYmQ4Iiwid2VicGFjazovLy8uL2FkbWluL3BhZ2VzL3NldHRpbmdzL2dhdGV3YXlzL3BheXBhbC9QYXlwYWxUYWIudnVlPzFkYzQiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvc2V0dGluZ3MvdGFicy9hY3RpdmVjYW1wYWlnbi9BY3RpdmVDYW1wYWlnblRhYi52dWU/OTY4YSIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9zZXR0aW5ncy90YWJzL2NhcHRjaGEvQ2FwdGNoYVRhYi52dWU/ODI5ZCIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9zZXR0aW5ncy90YWJzL2dldHJlc3BvbnNlL0dldFJlc3BvbnNlVGFiLnZ1ZT9jZTBkIiwid2VicGFjazovLy8uL2FkbWluL3BhZ2VzL3NldHRpbmdzL3RhYnMvbWFpbGNoaW1wL01haWxDaGltcFRhYi52dWU/OWM3ZCIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9zZXR0aW5ncy90YWJzL3BheW1lbnRzLWdhdGV3YXlzL1BheW1lbnRzR2F0ZXdheXMudnVlPzIzMjgiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vY29tcG9uZW50cy9jb2xsYXBzZS1taW5pL0N4VnVpQ29sbGFwc2VNaW5pLnZ1ZT9iNmY4Iiwid2VicGFjazovLy8uL2FkbWluL3BhZ2VzL2FkZG9ucy9BZGRvbnNQYWdlLnZ1ZT8wYTkyIiwid2VicGFjazovLy8uL2FkbWluL3BhZ2VzL2FkZG9ucy9jb21wb25lbnRzL0FkZG9uSXRlbS52dWU/OTA1NyIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9zZXR0aW5ncy9TZXR0aW5nc1BhZ2UudnVlP2RlMzIiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvc2V0dGluZ3MvZ2F0ZXdheXMvcGF5cGFsL1BheXBhbFRhYi52dWU/MmVhYiIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9zZXR0aW5ncy90YWJzL2FjdGl2ZWNhbXBhaWduL0FjdGl2ZUNhbXBhaWduVGFiLnZ1ZT8zOTE5Iiwid2VicGFjazovLy8uL2FkbWluL3BhZ2VzL3NldHRpbmdzL3RhYnMvY2FwdGNoYS9DYXB0Y2hhVGFiLnZ1ZT82YzRkIiwid2VicGFjazovLy8uL2FkbWluL3BhZ2VzL3NldHRpbmdzL3RhYnMvZ2V0cmVzcG9uc2UvR2V0UmVzcG9uc2VUYWIudnVlPzQ4YzkiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvc2V0dGluZ3MvdGFicy9tYWlsY2hpbXAvTWFpbENoaW1wVGFiLnZ1ZT9lNzZkIiwid2VicGFjazovLy8uL2FkbWluL3BhZ2VzL3NldHRpbmdzL3RhYnMvcGF5bWVudHMtZ2F0ZXdheXMvUGF5bWVudHNHYXRld2F5cy52dWU/YmE5MCIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcyIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9hZGRvbnMvQWRkb25zUGFnZS52dWU/MzdhMSIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9hZGRvbnMvY29tcG9uZW50cy9BZGRvbkl0ZW0udnVlP2E0ZjgiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9saXN0VG9TdHlsZXMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL2FkbWluL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXHQ8ZGl2IDpjbGFzcz1cIntcblx0XHQnY3gtdnVpLXBhbmVsJzogd2l0aFBhbmVsLFxuXHRcdCdjeC12dWktY29sbGFwc2UtbWluaV9faXRlbSc6IHRydWUsXG5cdFx0J2N4LXZ1aS1jb2xsYXBzZS1taW5pX19pdGVtLS1hY3RpdmUnOiBpc0FjdGl2ZSxcblx0fVwiPlxuXHRcdDxkaXZcblx0XHRcdGNsYXNzPVwiY3gtdnVpLWNvbGxhcHNlLW1pbmlfX2hlYWRlclwiXG5cdFx0XHRAY2xpY2s9XCJjb2xsYXBzZVwiXG5cdFx0PlxuXHRcdFx0PGRpdiBjbGFzcz1cImN4LXZ1aS1jb2xsYXBzZS1taW5pX19oZWFkZXItbGFiZWxcIj5cblx0XHRcdFx0PHN2ZyB3aWR0aD1cIjE0XCIgaGVpZ2h0PVwiMTRcIiB2aWV3Qm94PVwiMCAwIDE0IDE0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG5cdFx0XHRcdFx0PHBhdGggZD1cIk0xNCAxMy45OTk5TDE0IC0wLjAwMDEyMjA3TDAgLTAuMDAwMTIxNDU4TDYuMTE5NTllLTA3IDEzLjk5OTlMMTQgMTMuOTk5OVpcIlxuXHRcdFx0XHRcdFx0ICBmaWxsPVwid2hpdGVcIj48L3BhdGg+XG5cdFx0XHRcdFx0PHBhdGggZD1cIk01LjMyOTExIDFMMTEgN0w1LjMyOTExIDEzTDQgMTEuNTkzOEw4LjM0MTc3IDdMNCAyLjQwNjI1TDUuMzI5MTEgMVpcIiBmaWxsPVwiIzAwN0NCQVwiPjwvcGF0aD5cblx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdHt7IGxhYmVsIH19XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXZcblx0XHRcdFx0di1pZj1cImRlc2NcIlxuXHRcdFx0XHRjbGFzcz1cImN4LXZ1aS1jb2xsYXBzZS1taW5pX19oZWFkZXItZGVzY1wiXG5cdFx0XHQ+XG5cdFx0XHRcdHt7IGRlc2MgfX1cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcdDxkaXZcblx0XHRcdHYtc2hvdz1cImlzQWN0aXZlXCJcblx0XHRcdGNsYXNzPVwiY3gtdnVpLWNvbGxhcHNlLW1pbmlfX2NvbnRlbnRcIlxuXHRcdD5cblx0XHRcdDxzbG90PkNvbGxhcHNlIGNvbnRlbnQuLi48L3Nsb3Q+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRuYW1lOiAnY3gtdnVpLWNvbGxhcHNlLW1pbmknLFxuXHRwcm9wczoge1xuXHRcdHdpdGhQYW5lbDoge1xuXHRcdFx0dHlwZTogQm9vbGVhbixcblx0XHRcdGRlZmF1bHQ6IGZhbHNlLFxuXHRcdH0sXG5cdFx0aW5pdGlhbEFjdGl2ZToge1xuXHRcdFx0dHlwZTogQm9vbGVhbixcblx0XHRcdGRlZmF1bHQ6IGZhbHNlLFxuXHRcdH0sXG5cdFx0bGFiZWw6IHtcblx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHRcdGRlZmF1bHQ6ICdDb2xsYXBzZSBNaW5pJyxcblx0XHR9LFxuXHRcdGRlc2M6IHtcblx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHRcdGRlZmF1bHQ6ICcnLFxuXHRcdH0sXG5cdH0sXG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGlzQWN0aXZlOiBmYWxzZSxcblx0XHR9O1xuXHR9LFxuXHRjcmVhdGVkKCkge1xuXHRcdHRoaXMuaXNBY3RpdmUgPSB0aGlzLmluaXRpYWxBY3RpdmU7XG5cdH0sXG5cdG1ldGhvZHM6IHtcblx0XHRjb2xsYXBzZSgpIHtcblx0XHRcdHRoaXMuaXNBY3RpdmUgPSAhIHRoaXMuaXNBY3RpdmU7XG5cdFx0fSxcblx0fSxcbn1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cblx0PGRpdlxuXHRcdGNsYXNzPVwiamZiLWFkZG9ucy1wYWdlIHdyYXBcIlxuXHRcdDpjbGFzcz1cInsgJ3Byb2NjZXNpbmctc3RhdGUnOiBwcm9jY2VzaW5nU3RhdGUgfVwiXG5cdD5cblx0XHQ8aDEgY2xhc3M9XCJjcy12dWktdGl0bGVcIj57eyAnSmV0Rm9ybXMgQWRkb25zJyB9fTwvaDE+XG5cdFx0PGRpdiBjbGFzcz1cImpmYi1hZGRvbnMtcGFnZV9faW5uZXIgY3gtdnVpLXBhbmVsXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiamZiLWFkZG9ucy1wYWdlX19oZWFkZXJcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImpmYi1hZGRvbnMtcGFnZV9faGVhZGVyLWNvbnRyb2xzXCI+XG5cdFx0XHRcdFx0PGN4LXZ1aS1idXR0b25cblx0XHRcdFx0XHRcdGJ1dHRvbi1zdHlsZT1cImFjY2VudFwiXG5cdFx0XHRcdFx0XHRzaXplPVwibWluaVwiXG5cdFx0XHRcdFx0XHQ6bG9hZGluZz1cImNoZWNrVXBkYXRlc1Byb2Nlc3NlZFwiXG5cdFx0XHRcdFx0XHRAY2xpY2s9XCJjaGVja1BsdWdpbnNVcGRhdGVcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxzcGFuIHNsb3Q9XCJsYWJlbFwiPlxuXHRcdFx0XHRcdFx0XHQ8c3ZnIGNsYXNzPVwiYnV0dG9uLWljb25cIiB3aWR0aD1cIjE0XCIgaGVpZ2h0PVwiMTRcIiB2aWV3Qm94PVwiMCAwIDE0IDE0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD1cIk0xMS43MDg1IDIuMjkxNzFDMTAuNTAwMSAxLjA4MzM3IDguODQxOCAwLjMzMzM3NCA3LjAwMDEzIDAuMzMzMzc0QzMuMzE2OCAwLjMzMzM3NCAwLjM0MTc5NyAzLjMxNjcxIDAuMzQxNzk3IDcuMDAwMDRDMC4zNDE3OTcgMTAuNjgzNCAzLjMxNjggMTMuNjY2NyA3LjAwMDEzIDEzLjY2NjdDMTAuMTA4NSAxMy42NjY3IDEyLjcwMDEgMTEuNTQxNyAxMy40NDE4IDguNjY2NzFIMTEuNzA4NUMxMS4wMjUxIDEwLjYwODQgOS4xNzUxMyAxMiA3LjAwMDEzIDEyQzQuMjQxOCAxMiAyLjAwMDEzIDkuNzU4MzcgMi4wMDAxMyA3LjAwMDA0QzIuMDAwMTMgNC4yNDE3MSA0LjI0MTggMi4wMDAwNCA3LjAwMDEzIDIuMDAwMDRDOC4zODM0NiAyLjAwMDA0IDkuNjE2OCAyLjU3NTA0IDEwLjUxNjggMy40ODMzN0w3LjgzMzQ2IDYuMTY2NzFIMTMuNjY2OFYwLjMzMzM3NEwxMS43MDg1IDIuMjkxNzFaXCIgZmlsbD1cIiMwMDdDQkFcIi8+XG5cdFx0XHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj5DaGVjayBGb3IgVXBkYXRlczwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHQ8L2N4LXZ1aS1idXR0b24+XG5cblx0XHRcdFx0XHQ8Y3gtdnVpLWJ1dHRvblxuXG5cdFx0XHRcdFx0XHQ6Y2xhc3M9XCJbICFpc0xpY2Vuc2VBY3RpdmF0ZWQgPyAnY3gtdnVpLWJ1dHRvbi0tc3R5bGUtYWNjZW50JyA6ICdjeC12dWktYnV0dG9uLS1zdHlsZS1kYW5nZXInIF1cIlxuXHRcdFx0XHRcdFx0c2l6ZT1cIm1pbmlcIlxuXHRcdFx0XHRcdFx0QGNsaWNrPVwic2hvd0xpY2Vuc2VQb3B1cFwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PHNwYW4gc2xvdD1cImxhYmVsXCI+XG5cdFx0XHRcdFx0XHRcdDxzdmcgY2xhc3M9XCJidXR0b24taWNvblwiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPVwiTTE1LjQ5ODUgMEgxMi40ODk3QzEyLjQxNjYgMCAxMi4zNDg3IDAuMDE1NjcwOSAxMi4yODYgMC4wNDcwMTI3QzEyLjIzMzggMC4wNjc5MDczIDEyLjE4NjcgMC4xMDQ0NzMgMTIuMTQ1IDAuMTU2NzA5TDUuNzY2OSA2LjQ3MjA5QzUuNjIwNjMgNi40NDA3NCA1LjQ2MzkyIDYuNDE0NjMgNS4yOTY3NyA2LjM5MzczQzUuMTI5NjEgNi4zNzI4NCA0Ljk2NzY4IDYuMzYyMzkgNC44MTA5NyA2LjM2MjM5QzQuMTYzMjQgNi4zNjIzOSAzLjU0Njg1IDYuNDg3NzYgMi45NjE4IDYuNzM4NDlDMi4zNzY3NSA2Ljk3ODc4IDEuODU5NjEgNy4zMjM1NCAxLjQxMDM4IDcuNzcyNzdDMC45NjExNDkgOC4yMjIgMC42MTExNjYgOC43MzkxNCAwLjM2MDQzMSA5LjMyNDE5QzAuMTIwMTQ0IDkuOTA5MjQgMCAxMC41MzA5IDAgMTEuMTg5QzAgMTEuODM2OCAwLjEyMDE0NCAxMi40NTMyIDAuMzYwNDMxIDEzLjAzODJDMC42MTExNjYgMTMuNjIzMiAwLjk2MTE0OSAxNC4xNDA0IDEuNDEwMzggMTQuNTg5NkMxLjg1OTYxIDE1LjAzODkgMi4zNzY3NSAxNS4zODM2IDIuOTYxOCAxNS42MjM5QzMuNTQ2ODUgMTUuODc0NiA0LjE2MzI0IDE2IDQuODEwOTcgMTZDNS40NjkxNSAxNiA2LjA5MDc2IDE1Ljg3NDYgNi42NzU4MSAxNS42MjM5QzcuMjYwODYgMTUuMzgzNiA3Ljc3OCAxNS4wMzg5IDguMjI3MjMgMTQuNTg5NkM4LjgwMTgzIDE0LjAxNSA5LjE5ODgyIDEzLjM0NjQgOS40MTgyMiAxMi41ODM3QzkuNjQ4MDYgMTEuODIxMSA5LjY4NDYyIDExLjAzNzUgOS41Mjc5MSAxMC4yMzMxTDEwLjg5MTMgOC44Njk3NEMxMC45MzMxIDguODI3OTUgMTAuOTY0NCA4Ljc4MDkzIDEwLjk4NTMgOC43Mjg3QzExLjAxNjcgOC42NjYwMSAxMS4wMzIzIDguNTk4MTEgMTEuMDMyMyA4LjUyNDk4VjcuMDIwNTdIMTIuNTM2N0MxMi42OTM0IDcuMDIwNTcgMTIuODEzNiA2Ljk3MzU2IDEyLjg5NzIgNi44Nzk1M0MxMi45OTEyIDYuNzg1NSAxMy4wMzgyIDYuNjY1MzYgMTMuMDM4MiA2LjUxOTFWNS4wMTQ2OUgxNC41NDI2QzE0LjYxNTcgNS4wMTQ2OSAxNC42Nzg0IDUuMDA0MjQgMTQuNzMwNyA0Ljk4MzM1QzE0Ljc5MzMgNC45NTIwMSAxNC44NTA4IDQuOTEwMjIgMTQuOTAzIDQuODU3OThMMTUuOTA2IDMuODU1MDRDMTUuOTI2OSAzLjgxMzI2IDE1Ljk0NzggMy43NjYyNCAxNS45Njg3IDMuNzE0MDFDMTUuOTg5NiAzLjY1MTMyIDE2IDMuNTgzNDIgMTYgMy41MTAyOFYwLjUwMTQ2OUMxNiAwLjM1NTIwNyAxNS45NTMgMC4yMzUwNjQgMTUuODU5IDAuMTQxMDM4QzE1Ljc2NDkgMC4wNDcwMTI3IDE1LjY0NDggMCAxNS40OTg1IDBaTTQuOTY3NjggMTIuNzg3NUM0Ljc5MDA4IDEyLjk2NTEgNC41OTY4IDEzLjA5NTcgNC4zODc4NiAxMy4xNzkyQzQuMTg5MzYgMTMuMjUyNCAzLjk2NDc0IDEzLjI4ODkgMy43MTQwMSAxMy4yODg5QzMuNDYzMjcgMTMuMjg4OSAzLjIzMzQzIDEzLjI0MTkgMy4wMjQ0OSAxMy4xNDc5QzIuODI1OTkgMTMuMDUzOSAyLjYzNzk0IDEyLjkzMzcgMi40NjAzMyAxMi43ODc1QzIuMjgyNzMgMTIuNjA5OSAyLjE1MjE0IDEyLjQyMTggMi4wNjg1NiAxMi4yMjMzQzEuOTk1NDMgMTIuMDE0NCAxLjk1ODg2IDExLjc4NDUgMS45NTg4NiAxMS41MzM4QzEuOTU4ODYgMTEuMjgzMSAyLjAwNTg4IDExLjA1ODQgMi4wOTk5IDEwLjg1OTlDMi4xOTM5MyAxMC42NTEgMi4zMTQwNyAxMC40NTc3IDIuNDYwMzMgMTAuMjgwMUMyLjc4NDIgOS45NTYyNSAzLjE5MTY0IDkuNzk0MzIgMy42ODI2NiA5Ljc5NDMyQzQuMTg0MTMgOS43OTQzMiA0LjU5NjggOS45NTYyNSA0LjkyMDY3IDEwLjI4MDFDNS4wOTgyNyAxMC40NTc3IDUuMjIzNjQgMTAuNjUxIDUuMjk2NzcgMTAuODU5OUM1LjM4MDM1IDExLjA1ODQgNS40MjIxNCAxMS4yODMxIDUuNDIyMTQgMTEuNTMzOEM1LjQyMjE0IDExLjc4NDUgNS4zODAzNSAxMi4wMTQ0IDUuMjk2NzcgMTIuMjIzM0M1LjIyMzY0IDEyLjQyMTggNS4xMTM5NCAxMi42MDk5IDQuOTY3NjggMTIuNzg3NVpcIiBmaWxsPVwiI0QzRDNEM1wiLz5cblx0XHRcdFx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIHYtaWY9XCIhaXNMaWNlbnNlQWN0aXZhdGVkXCI+QWN0aXZhdGUgTGljZW5zZTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PHNwYW4gdi1pZj1cImlzTGljZW5zZUFjdGl2YXRlZFwiPkRlYWN0aXZhdGUgTGljZW5zZTwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHQ8L2N4LXZ1aS1idXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXZcblx0XHRcdFx0Y2xhc3M9XCJqZmItYWRkb25zXCJcblx0XHRcdFx0di1pZj1cIjAhPT1PYmplY3Qua2V5cyhpbnN0YWxsZWRBZGRvbkxpc3QpLmxlbmd0aFwiXG5cdFx0XHQ+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJqZmItYWRkb25zX19oZWFkZXJcIj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImN4LXZ1aS1zdWJ0aXRsZVwiPllvdXIgSW5zdGFsbGVkIEFkZG9uczwvc3Bhbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJqZmItYWRkb25zX19saXN0XCI+XG5cdFx0XHRcdFx0PEFkZG9uSXRlbVxuXHRcdFx0XHRcdFx0di1mb3I9XCIoIGFkZG9uRGF0YSwgaW5kZXggKSBpbiBpbnN0YWxsZWRBZGRvbkxpc3RcIlxuXHRcdFx0XHRcdFx0OmtleT1cImluZGV4XCJcblx0XHRcdFx0XHRcdDphZGRvbi1kYXRhPVwiYWRkb25EYXRhXCJcblx0XHRcdFx0XHQ+PC9BZGRvbkl0ZW0+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXZcblx0XHRcdFx0Y2xhc3M9XCJqZmItYWRkb25zXCJcblx0XHRcdFx0di1pZj1cIjAhPT1PYmplY3Qua2V5cyhhdmFpbGFibGVBZGRvbkxpc3QpLmxlbmd0aFwiXG5cdFx0XHQ+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJqZmItYWRkb25zX19oZWFkZXJcIj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImN4LXZ1aS1zdWJ0aXRsZVwiPkFsbCBBdmFpbGFibGUgQWRkb25zPC9zcGFuPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImpmYi1hZGRvbnNfX2xpc3RcIj5cblx0XHRcdFx0XHQ8QWRkb25JdGVtXG5cdFx0XHRcdFx0XHR2LWZvcj1cIiggYWRkb25EYXRhLCBpbmRleCApIGluIGF2YWlsYWJsZUFkZG9uTGlzdFwiXG5cdFx0XHRcdFx0XHQ6a2V5PVwiaW5kZXhcIlxuXHRcdFx0XHRcdFx0OmFkZG9uLWRhdGE9XCJhZGRvbkRhdGFcIlxuXHRcdFx0XHRcdD48L0FkZG9uSXRlbT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblxuXHRcdDxjeC12dWktcG9wdXBcblx0XHRcdGNsYXNzPVwiamZiLWFkZG9ucy1wYWdlX19saWNlbnNlLXBvcHVwXCJcblx0XHRcdHYtbW9kZWw9XCJsaWNlbnNlUG9wdXBWaXNpYmxlXCJcblx0XHRcdDpmb290ZXI9XCJmYWxzZVwiXG5cdFx0XHRib2R5LXdpZHRoPVwiNTQwcHhcIlxuXHRcdD5cblx0XHRcdDxkaXYgY2xhc3M9XCJjeC12dWktcG9wdXBfX2hlYWRlci10aXRsZVwiIHNsb3Q9XCJ0aXRsZVwiPlxuXHRcdFx0XHQ8c3BhbiB2LWlmPVwiIWlzTGljZW5zZUFjdGl2YXRlZFwiPkFjdGl2YXRlIExpY2Vuc2U8L3NwYW4+XG5cdFx0XHRcdDxzcGFuIHYtaWY9XCJpc0xpY2Vuc2VBY3RpdmF0ZWRcIj5EZWFjdGl2YXRlIExpY2Vuc2U8L3NwYW4+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJqZmItYWRkb25zLXBhZ2VfX2xpY2Vuc2UtZm9ybVwiIHNsb3Q9XCJjb250ZW50XCI+XG5cdFx0XHRcdDxzcGFuIHYtaWY9XCIhaXNMaWNlbnNlQWN0aXZhdGVkXCI+QWN0aXZhdGUgbGljZW5zZSBmb3IgYXV0b21hdGljIHVwZGF0ZXMgYW5kIGF3ZXNvbWUgc3VwcG9ydDwvc3Bhbj5cblx0XHRcdFx0PHNwYW4gdi1pZj1cImlzTGljZW5zZUFjdGl2YXRlZFwiPkJ5IGRlYWN0aXZhdGluZyB0aGUgbGljZW5zZSB5b3Ugd2lsbCBub3QgYmUgYWJsZSB0byB1cGRhdGUgdGhlIGFkZG9uczwvc3Bhbj5cblx0XHRcdFx0PGN4LXZ1aS1pbnB1dFxuXHRcdFx0XHRcdGNsYXNzPVwiamZiLWFkZG9ucy1wYWdlX19saWNlbnNlLWlucHV0XCJcblx0XHRcdFx0XHRzaXplPVwiZnVsbHdpZHRoXCJcblx0XHRcdFx0XHR0eXBlPVwicGFzc3dvcmRcIlxuXHRcdFx0XHRcdDphdXRvZm9jdXM9XCJ0cnVlXCJcblx0XHRcdFx0XHQ6cHJldmVudC13cmFwPVwidHJ1ZVwiXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJKdXN0IHBhc3RlIGl0IGhlcmVcIlxuXHRcdFx0XHRcdHYtbW9kZWw9XCJsaWNlbnNlS2V5XCJcblx0XHRcdFx0PjwvY3gtdnVpLWlucHV0PlxuXHRcdFx0XHQ8Y3gtdnVpLWJ1dHRvblxuXHRcdFx0XHRcdGNsYXNzPVwiamZiLWFkZG9ucy1wYWdlX19saWNlbnNlLWFjdGlvblwiXG5cdFx0XHRcdFx0YnV0dG9uLXN0eWxlPVwiYWNjZW50XCJcblx0XHRcdFx0XHRzaXplPVwibWluaVwiXG5cdFx0XHRcdFx0OmxvYWRpbmc9XCJsaWNlbnNlUHJvY2Nlc2luZ1N0YXRlXCJcblx0XHRcdFx0XHRAY2xpY2s9XCJsaWNlbnNlQWN0aW9uXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxzcGFuIHNsb3Q9XCJsYWJlbFwiPlxuXHRcdFx0XHRcdFx0PHNwYW4gdi1pZj1cIiFpc0xpY2Vuc2VBY3RpdmF0ZWRcIj5BY3RpdmF0ZTwvc3Bhbj5cblx0XHRcdFx0XHRcdDxzcGFuIHYtaWY9XCJpc0xpY2Vuc2VBY3RpdmF0ZWRcIj5EZWFjdGl2YXRlPC9zcGFuPlxuXHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0PC9jeC12dWktYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9jeC12dWktcG9wdXA+XG5cdDwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgQWRkb25JdGVtIGZyb20gJy4vY29tcG9uZW50cy9BZGRvbkl0ZW0udnVlJztcblxuY29uc3QgeyBhcHBseUZpbHRlcnMsIGRvQWN0aW9uIH0gPSB3cC5ob29rcztcblxud2luZG93LmpmYkV2ZW50QnVzID0gbmV3IFZ1ZSgpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdG5hbWU6ICdqZmItYWRkb25zJyxcblx0Y29tcG9uZW50czoge1xuXHRcdEFkZG9uSXRlbSxcblx0fSxcblx0ZGF0YSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0YWxsQWRkb25zOiB3aW5kb3cuSmV0RkJQYWdlQ29uZmlnLmFsbEFkZG9ucyB8fCB7fSxcblx0XHRcdGxpY2Vuc2VMaXN0OiB3aW5kb3cuSmV0RkJQYWdlQ29uZmlnLmxpY2Vuc2VMaXN0IHx8IFtdLFxuXHRcdFx0bGljZW5zZUtleTogd2luZG93LkpldEZCUGFnZUNvbmZpZy5saWNlbnNlS2V5IHx8ICcnLFxuXG5cdFx0XHRsaWNlbnNlQWN0aXZhdGVkOiBmYWxzZSxcblx0XHRcdGxpY2Vuc2VQb3B1cFZpc2libGU6IGZhbHNlLFxuXHRcdFx0bGljZW5zZVByb2NjZXNpbmdTdGF0ZTogZmFsc2UsXG5cdFx0XHRsaWNlbnNlQWpheEFjdGlvbjogbnVsbCxcblxuXHRcdFx0Y2hlY2tVcGRhdGVzQWN0aW9uOiBudWxsLFxuXHRcdFx0Y2hlY2tVcGRhdGVzUHJvY2Vzc2VkOiBmYWxzZSxcblxuXHRcdFx0cHJvY2Nlc2luZ1N0YXRlOiBmYWxzZSxcblx0XHR9O1xuXHR9LFxuXHRtb3VudGVkOiBmdW5jdGlvbigpIHtcblx0XHR3aW5kb3cuamZiRXZlbnRCdXMuJG9uKCAndXBkYXRlQWRkb25EYXRhJywgdGhpcy51cGRhdGVBZGRvbkRhdGEgKTtcblx0XHR3aW5kb3cuamZiRXZlbnRCdXMuJG9uKCAnc2hvd0xpY2Vuc2VQb3B1cCcsIHRoaXMuc2hvd0xpY2Vuc2VQb3B1cCApO1xuXHR9LFxuXHRjb21wdXRlZDoge1xuXHRcdGlzTGljZW5zZUFjdGl2YXRlZCgpIHtcblx0XHRcdHJldHVybiAwICE9PSB0aGlzLmxpY2Vuc2VMaXN0Lmxlbmd0aDtcblx0XHR9LFxuXG5cdFx0bGljZW5zZUFjdGlvblR5cGUoKSB7XG5cdFx0XHRyZXR1cm4gISB0aGlzLmlzTGljZW5zZUFjdGl2YXRlZCA/ICdhY3RpdmF0ZV9saWNlbnNlJyA6ICdkZWFjdGl2YXRlX2xpY2Vuc2UnO1xuXHRcdH0sXG5cblx0XHRpbnN0YWxsZWRBZGRvbkxpc3QoKSB7XG5cdFx0XHRsZXQgaW5zdGFsbGVkQWRkb25zTGlzdCA9IHt9O1xuXG5cdFx0XHRmb3IgKCBsZXQgYWRkb25TbHVnIGluIHRoaXMuYWxsQWRkb25zICkge1xuXG5cdFx0XHRcdGlmICggdGhpcy5hbGxBZGRvbnNbIGFkZG9uU2x1ZyBdWyAnaXNJbnN0YWxsZWQnIF0gKSB7XG5cdFx0XHRcdFx0aW5zdGFsbGVkQWRkb25zTGlzdFsgYWRkb25TbHVnIF0gPSB0aGlzLmFsbEFkZG9uc1sgYWRkb25TbHVnIF07XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGluc3RhbGxlZEFkZG9uc0xpc3Q7XG5cdFx0fSxcblxuXHRcdGF2YWlsYWJsZUFkZG9uTGlzdCgpIHtcblx0XHRcdGxldCBhdmFpbGFibGVBZGRvbkxpc3QgPSB7fTtcblxuXHRcdFx0Zm9yICggbGV0IGFkZG9uU2x1ZyBpbiB0aGlzLmFsbEFkZG9ucyApIHtcblxuXHRcdFx0XHRpZiAoICEgdGhpcy5hbGxBZGRvbnNbIGFkZG9uU2x1ZyBdWyAnaXNJbnN0YWxsZWQnIF0gKSB7XG5cdFx0XHRcdFx0YXZhaWxhYmxlQWRkb25MaXN0WyBhZGRvblNsdWcgXSA9IHRoaXMuYWxsQWRkb25zWyBhZGRvblNsdWcgXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gYXZhaWxhYmxlQWRkb25MaXN0O1xuXHRcdH1cblx0fSxcblx0bWV0aG9kczoge1xuXHRcdHNob3dMaWNlbnNlUG9wdXAoKSB7XG5cdFx0XHR0aGlzLmxpY2Vuc2VQb3B1cFZpc2libGUgPSB0cnVlO1xuXHRcdH0sXG5cblx0XHR1cGRhdGVBZGRvbkRhdGEoIGRhdGEgKSB7XG5cdFx0XHRsZXQgc2x1ZyA9IGRhdGEuc2x1Zyxcblx0XHRcdFx0YWRkb25EYXRhID0gZGF0YS5hZGRvbkRhdGEsXG5cdFx0XHRcdHBsdWdpbkFjdGlvbiA9IGRhdGEuYWN0aW9uLFxuXHRcdFx0XHRyZWxvYWRBY3Rpb25NYXAgPSBbICdhY3RpdmF0ZScsICdkZWFjdGl2YXRlJywgJ3VwZGF0ZScgXTtcblxuXHRcdFx0dGhpcy5hbGxBZGRvbnNbIHNsdWcgXSA9IE9iamVjdC5hc3NpZ24oIHt9LCB0aGlzLmFsbEFkZG9uc1sgc2x1ZyBdLCBhZGRvbkRhdGEgKTtcblxuXHRcdFx0aWYgKCByZWxvYWRBY3Rpb25NYXAuaW5jbHVkZXMoIHBsdWdpbkFjdGlvbiApICkge1xuXHRcdFx0XHR0aGlzLnByb2NjZXNpbmdTdGF0ZSA9IHRydWU7XG5cblx0XHRcdFx0c2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuXHRcdFx0XHR9LCAxMDAwICk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdGxpY2Vuc2VBY3Rpb24oKSB7XG5cdFx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0XHRcdGlmICggJycgPT09IHRoaXMubGljZW5zZUtleSApIHtcblx0XHRcdFx0c2VsZi4kQ1hOb3RpY2UuYWRkKCB7XG5cdFx0XHRcdFx0bWVzc2FnZTogJ0xpY2Vuc2Uga2V5IGlzIG1pc3NpbmcnLFxuXHRcdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHRcdFx0ZHVyYXRpb246IDQwMDAsXG5cdFx0XHRcdH0gKTtcblxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMubGljZW5zZVByb2NjZXNpbmdTdGF0ZSA9IHRydWU7XG5cblx0XHRcdHNlbGYubGljZW5zZUFqYXhBY3Rpb24gPSBqUXVlcnkuYWpheCgge1xuXHRcdFx0XHR0eXBlOiAnUE9TVCcsXG5cdFx0XHRcdHVybDogd2luZG93LkpldEZCUGFnZUNvbmZpZy5hamF4VXJsLFxuXHRcdFx0XHRkYXRhVHlwZTogJ2pzb24nLFxuXHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0YWN0aW9uOiAnamZiX2xpY2Vuc2VfYWN0aW9uJyxcblx0XHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0XHRsaWNlbnNlOiBzZWxmLmxpY2Vuc2VLZXksXG5cdFx0XHRcdFx0XHRhY3Rpb246IHNlbGYubGljZW5zZUFjdGlvblR5cGVcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGJlZm9yZVNlbmQ6ICgganFYSFIsIGFqYXhTZXR0aW5ncyApID0+IHtcblxuXHRcdFx0XHRcdGlmICggbnVsbCAhPT0gc2VsZi5saWNlbnNlQWpheEFjdGlvbiApIHtcblx0XHRcdFx0XHRcdHNlbGYubGljZW5zZUFqYXhBY3Rpb24uYWJvcnQoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHN1Y2Nlc3M6ICggcmVzcG9uY2UsIHRleHRTdGF0dXMsIGpxWEhSICkgPT4ge1xuXHRcdFx0XHRcdHNlbGYubGljZW5zZVByb2NjZXNpbmdTdGF0ZSA9IGZhbHNlO1xuXG5cdFx0XHRcdFx0aWYgKCByZXNwb25jZS5zdWNjZXNzICkge1xuXHRcdFx0XHRcdFx0c2VsZi4kQ1hOb3RpY2UuYWRkKCB7XG5cdFx0XHRcdFx0XHRcdG1lc3NhZ2U6IHJlc3BvbmNlLm1lc3NhZ2UsXG5cdFx0XHRcdFx0XHRcdHR5cGU6ICdzdWNjZXNzJyxcblx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDQwMDAsXG5cdFx0XHRcdFx0XHR9ICk7XG5cblx0XHRcdFx0XHRcdGxldCBsaWNlbnNlRGF0YSA9IHJlc3BvbmNlLmRhdGE7XG5cblx0XHRcdFx0XHRcdGxpY2Vuc2VEYXRhWydsaWNlbnNlX2tleSddID0gc2VsZi5saWNlbnNlS2V5O1xuXG5cdFx0XHRcdFx0XHRzd2l0Y2ggKCBzZWxmLmxpY2Vuc2VBY3Rpb25UeXBlICkge1xuXHRcdFx0XHRcdFx0XHRjYXNlICdhY3RpdmF0ZV9saWNlbnNlJzpcblxuXHRcdFx0XHRcdFx0XHRcdHNlbGYubGljZW5zZUxpc3QucHVzaCggbGljZW5zZURhdGEgKTtcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0Y2FzZSAnZGVhY3RpdmF0ZV9saWNlbnNlJzpcblxuXHRcdFx0XHRcdFx0XHRcdHNlbGYubGljZW5zZUxpc3QgPSBzZWxmLmxpY2Vuc2VMaXN0LmZpbHRlciggKCBsaWNlbnNlRGF0YSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBzZWxmLmxpY2Vuc2VLZXkgIT09IGxpY2Vuc2VEYXRhWydsaWNlbnNlX2tleSddO1xuXHRcdFx0XHRcdFx0XHRcdH0gKTtcblxuXHRcdFx0XHRcdFx0XHRcdHNlbGYubGljZW5zZUtleSA9ICcnO1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRzZWxmLmxpY2Vuc2VQb3B1cFZpc2libGUgPSBmYWxzZTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0c2VsZi4kQ1hOb3RpY2UuYWRkKCB7XG5cdFx0XHRcdFx0XHRcdG1lc3NhZ2U6IHJlc3BvbmNlLm1lc3NhZ2UsXG5cdFx0XHRcdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiA0MDAwLFxuXHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXHRcdH0sXG5cblx0XHRjaGVja1BsdWdpbnNVcGRhdGU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0XHRzZWxmLmNoZWNrVXBkYXRlc0FjdGlvbiA9IGpRdWVyeS5hamF4KCB7XG5cdFx0XHRcdHR5cGU6ICdQT1NUJyxcblx0XHRcdFx0dXJsOiB3aW5kb3cuSmV0RkJQYWdlQ29uZmlnLmFqYXhVcmwsXG5cdFx0XHRcdGRhdGFUeXBlOiAnanNvbicsXG5cdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRhY3Rpb246ICdqZmJfbGljZW5zZV9zZXJ2aWNlX2FjdGlvbicsXG5cdFx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdFx0YWN0aW9uOiAnY2hlY2stcGx1Z2luLXVwZGF0ZSdcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGJlZm9yZVNlbmQ6ICgganFYSFIsIGFqYXhTZXR0aW5ncyApID0+IHtcblxuXHRcdFx0XHRcdGlmICggbnVsbCAhPT0gc2VsZi5jaGVja1VwZGF0ZXNBY3Rpb24gKSB7XG5cdFx0XHRcdFx0XHRzZWxmLmNoZWNrVXBkYXRlc0FjdGlvbi5hYm9ydCgpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHNlbGYuY2hlY2tVcGRhdGVzUHJvY2Vzc2VkID0gdHJ1ZTtcblx0XHRcdFx0fSxcblx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24oIHJlc3BvbmNlLCB0ZXh0U3RhdHVzLCBqcVhIUiApIHtcblx0XHRcdFx0XHRzZWxmLmNoZWNrVXBkYXRlc1Byb2Nlc3NlZCA9IGZhbHNlO1xuXG5cdFx0XHRcdFx0aWYgKCByZXNwb25jZS5zdWNjZXNzICkge1xuXHRcdFx0XHRcdFx0c2VsZi4kQ1hOb3RpY2UuYWRkKCB7XG5cdFx0XHRcdFx0XHRcdG1lc3NhZ2U6IHJlc3BvbmNlLm1lc3NhZ2UsXG5cdFx0XHRcdFx0XHRcdHR5cGU6ICdzdWNjZXNzJyxcblx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDQwMDAsXG5cdFx0XHRcdFx0XHR9ICk7XG5cblx0XHRcdFx0XHRcdHNlbGYucHJvY2Nlc2luZ1N0YXRlID0gdHJ1ZTtcblxuXHRcdFx0XHRcdFx0c2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcblx0XHRcdFx0XHRcdH0sIDEwMDAgKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0c2VsZi4kQ1hOb3RpY2UuYWRkKCB7XG5cdFx0XHRcdFx0XHRcdG1lc3NhZ2U6IHJlc3BvbmNlLm1lc3NhZ2UsXG5cdFx0XHRcdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiA0MDAwLFxuXHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXHRcdH0sXG5cblx0XHRhZGRMaWNlbnNlKCBsaWNlbnNlRGF0YSApIHtcblx0XHRcdHRoaXMubGljZW5zZUxpc3QucHVzaCggbGljZW5zZURhdGEgKTtcblxuXHRcdFx0c2VsZi5wcm9jY2VzaW5nU3RhdGUgPSB0cnVlO1xuXG5cdFx0XHRzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcblx0XHRcdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuXHRcdFx0fSwgMzAwMCApO1xuXHRcdH0sXG5cblx0XHRyZW1vdmVMaWNlbnNlKCBsaWNlbmNlS2V5ICkge1xuXG5cdFx0XHRsZXQgcmVtb3ZpbmdJbmRleCA9IGZhbHNlO1xuXG5cdFx0XHRmb3IgKCBsZXQgbGljZW5jZUluZGV4IGluIHRoaXMubGljZW5zZUxpc3QgKSB7XG5cdFx0XHRcdGxldCBsaWNlbnNlRGF0YSA9ICB0aGlzLmxpY2Vuc2VMaXN0WyBsaWNlbmNlSW5kZXggXTtcblxuXHRcdFx0XHRpZiAoIGxpY2Vuc2VEYXRhWydsaWNlbnNlS2V5J10gPT09IGxpY2VuY2VLZXkgKSB7XG5cdFx0XHRcdFx0cmVtb3ZpbmdJbmRleCA9IGxpY2VuY2VJbmRleDtcblxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICggcmVtb3ZpbmdJbmRleCApIHtcblx0XHRcdFx0dGhpcy5saWNlbnNlTGlzdC5zcGxpY2UoIHJlbW92aW5nSW5kZXgsIDEgKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5saWNlbnNlUG9wdXBWaXNpYmxlID0gZmFsc2U7XG5cblx0XHRcdHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG5cdFx0XHR9LCA1MDAgKTtcblx0XHR9LFxuXHR9LFxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuXG4ucHJvY2Nlc2luZy1zdGF0ZSB7XG5cdG9wYWNpdHk6IDAuNTtcblx0cG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5qZmItYWRkb25zLXBhZ2Uge1xuXG5cdCZfX2lubmVyIHtcblx0XHRwYWRkaW5nOiAzMHB4O1xuXHRcdGhlaWdodDogMTAwJTtcblx0fVxuXG5cdCZfX2hlYWRlciB7XG5cdFx0cGFkZGluZy1ib3R0b206IDE1cHg7XG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEQ0RDREQ7XG5cdFx0bWFyZ2luLWJvdHRvbTogMzBweDtcblx0fVxuXG5cdCZfX2hlYWRlci1jb250cm9scyB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cblx0XHQ+IC5jeC12dWktYnV0dG9uIHtcblx0XHRcdG1hcmdpbi1sZWZ0OiAxMHB4O1xuXHRcdH1cblx0fVxuXG5cdC5jeC12dWktYnV0dG9uIHtcblx0XHRmb250LXNpemU6IDEzcHg7XG5cdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuXHRcdC5idXR0b24taWNvbiB7XG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDVweDtcblx0XHR9XG5cblx0XHQmLS1zdHlsZS1hY2NlbnQge1xuXHRcdFx0Y29sb3I6ICMwMDdjYmE7XG5cdFx0XHRib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggIzAwN2NiYTtcblxuXHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDdjYmExMjtcblx0XHRcdH1cblxuXHRcdFx0LmJ1dHRvbi1pY29uIHtcblx0XHRcdFx0cGF0aCB7XG5cdFx0XHRcdFx0ZmlsbDogIzAwN2NiYTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdCYtLXN0eWxlLWRhbmdlciB7XG5cdFx0XHRjb2xvcjogI2Q2MzM2Yztcblx0XHRcdGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjZDYzMzZjO1xuXG5cdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2Q2MzM2YzEyO1xuXHRcdFx0fVxuXG5cdFx0XHQuYnV0dG9uLWljb24ge1xuXHRcdFx0XHRwYXRoIHtcblx0XHRcdFx0XHRmaWxsOiAjZDYzMzZjO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Jl9fY29udGVudCB7XG5cdFx0XHQ+IHNwYW4ge1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQuY3gtdnVpLXBvcHVwIHtcblx0XHQmX19oZWFkZXIge1xuXHRcdFx0cGFkZGluZy1ib3R0b206IDE1cHg7XG5cdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RDRENERDtcblx0XHRcdG1hcmdpbi1ib3R0b206IDMwcHg7XG5cdFx0fVxuXG5cdFx0Jl9faGVhZGVyLXRpdGxlIHtcblx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRmb250LXNpemU6IDI0cHg7XG5cdFx0XHRsaW5lLWhlaWdodDogMzZweDtcblx0XHRcdGNvbG9yOiAjMjMyODJEO1xuXHRcdH1cblx0fVxuXG5cdCZfX2xpY2Vuc2UtcG9wdXAge1xuXG5cdH1cblxuXHQmX19saWNlbnNlLWZvcm0ge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cdFx0YWxpZ24taXRlbXM6IHN0cmV0Y2g7XG5cblx0XHQ+IHNwYW4ge1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0XHR9XG5cdH1cblxuXHQmX19saWNlbnNlLWlucHV0IHtcblx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xuXHR9XG59XG5cbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxuXHQ8ZGl2XG5cdFx0Y2xhc3M9XCJqZmItYWRkb25zX19pdGVtXCJcblx0XHQ6Y2xhc3M9XCJ7XG5cdFx0XHQnYWN0aXZhdGVkJzogYWRkb25EYXRhLmlzQWN0aXZhdGVkLFxuXHRcdFx0J3VwZGF0ZS1hdmFsaWFibGUnOiB1cGRhdGVBY3Rpb25BdmFsaWFibGUsXG5cdFx0fVwiXG5cdD5cblx0XHQ8ZGl2XG5cdFx0XHRjbGFzcz1cImpmYi1hZGRvbnNfX2l0ZW0taW5uZXJcIlxuXHRcdFx0OmNsYXNzPVwieyAncHJvY2Nlc2luZy1zdGF0ZSc6IHByb2NjZXNpbmdTdGF0ZSB9XCJcblx0XHQ+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiamZiLWFkZG9uc19faXRlbS10aHVtYlwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwicHJvLWJhZGdlXCIgdi1pZj1cIiFhZGRvbkRhdGEuaXNJbnN0YWxsZWRcIj5cblx0XHRcdFx0XHQ8c3ZnIHdpZHRoPVwiNDBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgNDAgMjBcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cblx0XHRcdFx0XHRcdDxyZWN0IHdpZHRoPVwiNDBcIiBoZWlnaHQ9XCIyMFwiIHJ4PVwiNFwiIGZpbGw9XCIjRUU3QjE2XCIvPlxuXHRcdFx0XHRcdFx0PHBhdGggZD1cIk0xMC42MjUgMTAuODMwMVYxNEg5LjE0MjU4VjUuNDY4NzVIMTIuNDA2MkMxMy4zNTk0IDUuNDY4NzUgMTQuMTE1MiA1LjcxNjggMTQuNjczOCA2LjIxMjg5QzE1LjIzNjMgNi43MDg5OCAxNS41MTc2IDcuMzY1MjMgMTUuNTE3NiA4LjE4MTY0QzE1LjUxNzYgOS4wMTc1OCAxNS4yNDIyIDkuNjY3OTcgMTQuNjkxNCAxMC4xMzI4QzE0LjE0NDUgMTAuNTk3NyAxMy4zNzcgMTAuODMwMSAxMi4zODg3IDEwLjgzMDFIMTAuNjI1Wk0xMC42MjUgOS42NDA2MkgxMi40MDYyQzEyLjkzMzYgOS42NDA2MiAxMy4zMzU5IDkuNTE3NTggMTMuNjEzMyA5LjI3MTQ4QzEzLjg5MDYgOS4wMjE0OCAxNC4wMjkzIDguNjYyMTEgMTQuMDI5MyA4LjE5MzM2QzE0LjAyOTMgNy43MzI0MiAxMy44ODg3IDcuMzY1MjMgMTMuNjA3NCA3LjA5MThDMTMuMzI2MiA2LjgxNDQ1IDEyLjkzOTUgNi42NzE4OCAxMi40NDczIDYuNjY0MDZIMTAuNjI1VjkuNjQwNjJaTTE5Ljk1MzEgMTAuNzEyOUgxOC4zMDA4VjE0SDE2LjgxODRWNS40Njg3NUgxOS44MTg0QzIwLjgwMjcgNS40Njg3NSAyMS41NjI1IDUuNjg5NDUgMjIuMDk3NyA2LjEzMDg2QzIyLjYzMjggNi41NzIyNyAyMi45MDA0IDcuMjEwOTQgMjIuOTAwNCA4LjA0Njg4QzIyLjkwMDQgOC42MTcxOSAyMi43NjE3IDkuMDk1NyAyMi40ODQ0IDkuNDgyNDJDMjIuMjEwOSA5Ljg2NTIzIDIxLjgyODEgMTAuMTYwMiAyMS4zMzU5IDEwLjM2NzJMMjMuMjUyIDEzLjkyMzhWMTRIMjEuNjY0MUwxOS45NTMxIDEwLjcxMjlaTTE4LjMwMDggOS41MjM0NEgxOS44MjQyQzIwLjMyNDIgOS41MjM0NCAyMC43MTQ4IDkuMzk4NDQgMjAuOTk2MSA5LjE0ODQ0QzIxLjI3NzMgOC44OTQ1MyAyMS40MTggOC41NDg4MyAyMS40MTggOC4xMTEzM0MyMS40MTggNy42NTQzIDIxLjI4NzEgNy4zMDA3OCAyMS4wMjU0IDcuMDUwNzhDMjAuNzY3NiA2LjgwMDc4IDIwLjM4MDkgNi42NzE4OCAxOS44NjUyIDYuNjY0MDZIMTguMzAwOFY5LjUyMzQ0Wk0zMS4xMTUyIDkuOTU3MDNDMzEuMTE1MiAxMC43OTMgMzAuOTcwNyAxMS41MjczIDMwLjY4MTYgMTIuMTYwMkMzMC4zOTI2IDEyLjc4OTEgMjkuOTc4NSAxMy4yNzM0IDI5LjQzOTUgMTMuNjEzM0MyOC45MDQzIDEzLjk0OTIgMjguMjg3MSAxNC4xMTcyIDI3LjU4NzkgMTQuMTE3MkMyNi44OTY1IDE0LjExNzIgMjYuMjc5MyAxMy45NDkyIDI1LjczNjMgMTMuNjEzM0MyNS4xOTczIDEzLjI3MzQgMjQuNzc5MyAxMi43OTEgMjQuNDgyNCAxMi4xNjZDMjQuMTg5NSAxMS41NDEgMjQuMDQxIDEwLjgyMDMgMjQuMDM3MSAxMC4wMDM5VjkuNTIzNDRDMjQuMDM3MSA4LjY5MTQxIDI0LjE4MzYgNy45NTcwMyAyNC40NzY2IDcuMzIwMzFDMjQuNzczNCA2LjY4MzU5IDI1LjE4OTUgNi4xOTcyNyAyNS43MjQ2IDUuODYxMzNDMjYuMjYzNyA1LjUyMTQ4IDI2Ljg4MDkgNS4zNTE1NiAyNy41NzYyIDUuMzUxNTZDMjguMjcxNSA1LjM1MTU2IDI4Ljg4NjcgNS41MTk1MyAyOS40MjE5IDUuODU1NDdDMjkuOTYwOSA2LjE4NzUgMzAuMzc3IDYuNjY3OTcgMzAuNjY5OSA3LjI5Njg4QzMwLjk2MjkgNy45MjE4OCAzMS4xMTEzIDguNjUwMzkgMzEuMTE1MiA5LjQ4MjQyVjkuOTU3MDNaTTI5LjYzMjggOS41MTE3MkMyOS42MzI4IDguNTY2NDEgMjkuNDUzMSA3Ljg0MTggMjkuMDkzOCA3LjMzNzg5QzI4LjczODMgNi44MzM5OCAyOC4yMzI0IDYuNTgyMDMgMjcuNTc2MiA2LjU4MjAzQzI2LjkzNTUgNi41ODIwMyAyNi40MzM2IDYuODMzOTggMjYuMDcwMyA3LjMzNzg5QzI1LjcxMDkgNy44Mzc4OSAyNS41MjczIDguNTQ2ODggMjUuNTE5NSA5LjQ2NDg0VjkuOTU3MDNDMjUuNTE5NSAxMC44OTQ1IDI1LjcwMTIgMTEuNjE5MSAyNi4wNjQ1IDEyLjEzMDlDMjYuNDMxNiAxMi42NDI2IDI2LjkzOTUgMTIuODk4NCAyNy41ODc5IDEyLjg5ODRDMjguMjQ0MSAxMi44OTg0IDI4Ljc0OCAxMi42NDg0IDI5LjA5OTYgMTIuMTQ4NEMyOS40NTUxIDExLjY0ODQgMjkuNjMyOCAxMC45MTggMjkuNjMyOCA5Ljk1NzAzVjkuNTExNzJaXCIgZmlsbD1cIndoaXRlXCIvPlxuXHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGltZyA6c3JjPVwiYWRkb25EYXRhLnRodW1iXCIgYWx0PVwiXCI+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJqZmItYWRkb25zX19pdGVtLWluZm9cIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImpmYi1hZGRvbnNfX2l0ZW0tbmFtZVwiPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwibGFiZWxcIj57eyBhZGRvbkRhdGEubmFtZSB9fTwvc3Bhbj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInZlcnNpb25cIj57eyBhZGRvbkRhdGEuY3VycmVudFZlcnNpb24gfX08L3NwYW4+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0Y2xhc3M9XCJqZmItYWRkb25zX19pdGVtLXVwZGF0ZVwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8ZGl2IHYtaWY9XCIhdXBkYXRlQWN0aW9uQXZhbGlhYmxlXCI+WW91ciBwbHVnaW4gaXMgdXAgdG8gZGF0ZTwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgdi1pZj1cInVwZGF0ZUFjdGlvbkF2YWxpYWJsZVwiPlxuXHRcdFx0XHRcdFx0VmVyc2lvbiA8c3BhbiBjbGFzcz1cImxhdGVzdC12ZXJzaW9uXCI+e3sgYWRkb25EYXRhLnZlcnNpb24gfX08L3NwYW4+IGF2YWlsYWJsZVxuXHRcdFx0XHRcdFx0PGN4LXZ1aS1idXR0b25cblx0XHRcdFx0XHRcdFx0YnV0dG9uLXN0eWxlPVwibGluay1hY2NlbnRcIlxuXHRcdFx0XHRcdFx0XHRzaXplPVwibGlua1wiXG5cdFx0XHRcdFx0XHRcdDpsb2FkaW5nPVwidXBkYXRlUGx1Z2luUHJvY2Vzc2VkXCJcblx0XHRcdFx0XHRcdFx0QGNsaWNrPVwidXBkYXRlUGx1Z2luXCJcblx0XHRcdFx0XHRcdFx0di1pZj1cIiFhY3RpdmF0ZUxpY2VuY2VBY3Rpb25BdmFsaWFibGVcIlxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBzbG90PVwibGFiZWxcIj5cblx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5VcGRhdGUgTm93PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2N4LXZ1aS1idXR0b24+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0Y2xhc3M9XCJqZmItYWRkb25zX19pdGVtLWxpY2Vuc2VcIlxuXHRcdFx0XHRcdHYtaWY9XCJhY3RpdmF0ZUxpY2VuY2VBY3Rpb25BdmFsaWFibGVcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PHNwYW4+TGljZW5zZSBub3QgYWN0aXZhdGVkPC9zcGFuPlxuXHRcdFx0XHRcdDxjeC12dWktYnV0dG9uXG5cdFx0XHRcdFx0XHRidXR0b24tc3R5bGU9XCJsaW5rLWFjY2VudFwiXG5cdFx0XHRcdFx0XHRzaXplPVwibGlua1wiXG5cdFx0XHRcdFx0XHRAY2xpY2s9XCJhY3RpdmF0ZUxpY2Vuc2VcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxzcGFuIHNsb3Q9XCJsYWJlbFwiPlxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj5BY3RpdmF0ZSBOb3c8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0PC9jeC12dWktYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdGNsYXNzPVwiamZiLWFkZG9uc19faXRlbS1kZXNjXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxzcGFuIHYtaHRtbD1cImFkZG9uRGF0YS5kZXNjXCI+PC9zcGFuPlxuXHRcdFx0XHRcdDxhIDpocmVmPVwiYWRkb25EYXRhLmRlbW9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5MZWFybiBNb3JlPC9hPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImpmYi1hZGRvbnNfX2l0ZW0tYWN0aW9uc1wiPlxuXG5cdFx0XHRcdFx0PGN4LXZ1aS1idXR0b25cblx0XHRcdFx0XHRcdGJ1dHRvbi1zdHlsZT1cImxpbmstYWNjZW50XCJcblx0XHRcdFx0XHRcdHNpemU9XCJsaW5rXCJcblx0XHRcdFx0XHRcdDpsb2FkaW5nPVwiYWN0aW9uUGx1Z2luUHJvY2Vzc2VkXCJcblx0XHRcdFx0XHRcdHYtaWY9XCJpbnN0YWxsQWN0aW9uQXZhbGlhYmxlXCJcblx0XHRcdFx0XHRcdEBjbGljaz1cImluc3RhbGxQbHVnaW5cIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxzcGFuIHNsb3Q9XCJsYWJlbFwiPlxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj5JbnN0YWxsIEFkZG9uPC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdDwvY3gtdnVpLWJ1dHRvbj5cblx0XHRcdFx0XHQ8Y3gtdnVpLWJ1dHRvblxuXHRcdFx0XHRcdFx0YnV0dG9uLXN0eWxlPVwibGluay1hY2NlbnRcIlxuXHRcdFx0XHRcdFx0c2l6ZT1cImxpbmtcIlxuXHRcdFx0XHRcdFx0OmxvYWRpbmc9XCJhY3Rpb25QbHVnaW5Qcm9jZXNzZWRcIlxuXHRcdFx0XHRcdFx0di1pZj1cImFjdGl2YXRlQWN0aW9uQXZhbGlhYmxlXCJcblx0XHRcdFx0XHRcdEBjbGljaz1cImFjdGl2YXRlUGx1Z2luXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8c3BhbiBzbG90PVwibGFiZWxcIj5cblx0XHRcdFx0XHRcdFx0PHNwYW4+QWN0aXZhdGUgQWRkb248L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0PC9jeC12dWktYnV0dG9uPlxuXHRcdFx0XHRcdDxjeC12dWktYnV0dG9uXG5cdFx0XHRcdFx0XHRidXR0b24tc3R5bGU9XCJsaW5rLWVycm9yXCJcblx0XHRcdFx0XHRcdHNpemU9XCJsaW5rXCJcblx0XHRcdFx0XHRcdDpsb2FkaW5nPVwiYWN0aW9uUGx1Z2luUHJvY2Vzc2VkXCJcblx0XHRcdFx0XHRcdHYtaWY9XCJkZWFjdGl2YXRlQWN0aW9uQXZhbGlhYmxlXCJcblx0XHRcdFx0XHRcdEBjbGljaz1cImRlYWN0aXZhdGVQbHVnaW5cIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxzcGFuIHNsb3Q9XCJsYWJlbFwiPlxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj5EZWFjdGl2YXRlIEFkZG9uPC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdDwvY3gtdnVpLWJ1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0bmFtZTogJ2FkZG9uLWl0ZW0nLFxuXHRwcm9wczoge1xuXHRcdGFkZG9uRGF0YTogT2JqZWN0XG5cdH0sXG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGFjdGlvblBsdWdpbjogZmFsc2UsXG5cdFx0XHRhY3Rpb25QbHVnaW5SZXF1ZXN0OiBudWxsLFxuXHRcdFx0YWN0aW9uUGx1Z2luUHJvY2Vzc2VkOiBmYWxzZSxcblx0XHRcdHVwZGF0ZVBsdWdpblByb2Nlc3NlZDogZmFsc2UsXG5cdFx0fTtcblx0fSxcblx0Y29tcHV0ZWQ6IHtcblx0XHRjbGFzc0xpc3Q6IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIFtcblx0XHRcdFx0J2pmYi1hZGRvbnNfX2l0ZW0nLFxuXHRcdFx0XHR0aGlzLnVwZGF0ZUF2YWxpYWJsZSA/ICd1cGRhdGUtYXZhbGlhYmxlJyA6IGZhbHNlLFxuXHRcdFx0XHR0aGlzLmFjdGl2YXRlQXZhbGlhYmxlID8gJ2FjdGl2YXRlLWF2YWxpYWJsZScgOiBmYWxzZSxcblx0XHRcdF07XG5cdFx0fSxcblxuXHRcdGxlYXJuTW9yZUF2YWxpYWJsZSgpIHtcblx0XHRcdHJldHVybiAoICEgdGhpcy4kcGFyZW50LmlzTGljZW5zZUFjdGl2YXRlZCApID8gdHJ1ZSA6IGZhbHNlO1xuXHRcdH0sXG5cblx0XHRhY3RpdmF0ZUxpY2VuY2VBY3Rpb25BdmFsaWFibGUoKSB7XG5cdFx0XHRyZXR1cm4gKCAhIHRoaXMuJHBhcmVudC5pc0xpY2Vuc2VBY3RpdmF0ZWQgKSA/IHRydWUgOiBmYWxzZTtcblx0XHR9LFxuXG5cdFx0aW5zdGFsbEFjdGlvbkF2YWxpYWJsZSgpIHtcblx0XHRcdHJldHVybiAoICEgdGhpcy5hZGRvbkRhdGFbJ2lzSW5zdGFsbGVkJ10gJiYgdGhpcy4kcGFyZW50LmlzTGljZW5zZUFjdGl2YXRlZCApID8gdHJ1ZSA6IGZhbHNlO1xuXHRcdH0sXG5cblx0XHRhY3RpdmF0ZUFjdGlvbkF2YWxpYWJsZSgpIHtcblx0XHRcdHJldHVybiAoIHRoaXMuYWRkb25EYXRhWydpc0luc3RhbGxlZCddICYmICEgdGhpcy5hZGRvbkRhdGFbJ2lzQWN0aXZhdGVkJ10gKSA/IHRydWUgOiBmYWxzZTtcblx0XHR9LFxuXG5cdFx0ZGVhY3RpdmF0ZUFjdGlvbkF2YWxpYWJsZSgpIHtcblx0XHRcdHJldHVybiAoIHRoaXMuYWRkb25EYXRhWydpc0luc3RhbGxlZCddICYmIHRoaXMuYWRkb25EYXRhWydpc0FjdGl2YXRlZCddICkgPyB0cnVlIDogZmFsc2U7XG5cdFx0fSxcblxuXHRcdHVwZGF0ZUFjdGlvbkF2YWxpYWJsZSgpIHtcblx0XHRcdHJldHVybiAoIHRoaXMuYWRkb25EYXRhWyd1cGRhdGVBdmFsaWFibGUnXSApID8gdHJ1ZSA6IGZhbHNlO1xuXHRcdH0sXG5cblx0XHRwcm9jY2VzaW5nU3RhdGUoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5hY3Rpb25QbHVnaW5Qcm9jZXNzZWQgfHwgdGhpcy51cGRhdGVQbHVnaW5Qcm9jZXNzZWQ7XG5cdFx0fVxuXG5cdH0sXG5cdG1ldGhvZHM6IHtcblxuXHRcdGFjdGl2YXRlTGljZW5zZSgpIHtcblx0XHRcdHdpbmRvdy5qZmJFdmVudEJ1cy4kZW1pdCggJ3Nob3dMaWNlbnNlUG9wdXAnICk7XG5cdFx0fSxcblxuXHRcdGluc3RhbGxQbHVnaW4oKSB7XG5cdFx0XHR0aGlzLmFjdGlvblBsdWdpbiA9ICdpbnN0YWxsJztcblx0XHRcdHRoaXMucGx1Z2luQWN0aW9uKCk7XG5cdFx0fSxcblxuXHRcdGRlYWN0aXZhdGVQbHVnaW4oKSB7XG5cdFx0XHR0aGlzLmFjdGlvblBsdWdpbiA9ICdkZWFjdGl2YXRlJztcblx0XHRcdHRoaXMucGx1Z2luQWN0aW9uKCk7XG5cdFx0fSxcblxuXHRcdGFjdGl2YXRlUGx1Z2luKCkge1xuXHRcdFx0dGhpcy5hY3Rpb25QbHVnaW4gPSAnYWN0aXZhdGUnO1xuXHRcdFx0dGhpcy5wbHVnaW5BY3Rpb24oKTtcblx0XHR9LFxuXG5cdFx0dXBkYXRlUGx1Z2luKCkge1xuXG5cdFx0XHRpZiAoIHRoaXMudXBkYXRlQWN0aW9uQXZhbGlhYmxlICkge1xuXHRcdFx0XHR0aGlzLmFjdGlvblBsdWdpbiA9ICd1cGRhdGUnO1xuXHRcdFx0XHR0aGlzLnBsdWdpbkFjdGlvbigpO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRwbHVnaW5BY3Rpb246IGZ1bmN0aW9uKCkge1xuXHRcdFx0bGV0IHNlbGYgPSB0aGlzO1xuXG5cdFx0XHRzZWxmLmFjdGlvblBsdWdpblJlcXVlc3QgPSBqUXVlcnkuYWpheCgge1xuXHRcdFx0XHR0eXBlOiAnUE9TVCcsXG5cdFx0XHRcdHVybDogd2luZG93LkpldEZCUGFnZUNvbmZpZy5hamF4VXJsLFxuXHRcdFx0XHRkYXRhVHlwZTogJ2pzb24nLFxuXHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0YWN0aW9uOiAnamZiX2FkZG9uX2FjdGlvbicsXG5cdFx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdFx0YWN0aW9uOiBzZWxmLmFjdGlvblBsdWdpbixcblx0XHRcdFx0XHRcdHBsdWdpbjogc2VsZi5hZGRvbkRhdGFbJ3NsdWcnXVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0YmVmb3JlU2VuZDogZnVuY3Rpb24oIGpxWEhSLCBhamF4U2V0dGluZ3MgKSB7XG5cblx0XHRcdFx0XHRpZiAoIG51bGwgIT09IHNlbGYuYWN0aW9uUGx1Z2luUmVxdWVzdCApIHtcblx0XHRcdFx0XHRcdHNlbGYuYWN0aW9uUGx1Z2luUmVxdWVzdC5hYm9ydCgpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHN3aXRjaCAoIHNlbGYuYWN0aW9uUGx1Z2luICkge1xuXHRcdFx0XHRcdFx0Y2FzZSAnaW5zdGFsbCc6XG5cdFx0XHRcdFx0XHRjYXNlICdhY3RpdmF0ZSc6XG5cdFx0XHRcdFx0XHRjYXNlICdkZWFjdGl2YXRlJzpcblx0XHRcdFx0XHRcdFx0c2VsZi5hY3Rpb25QbHVnaW5Qcm9jZXNzZWQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGNhc2UgJ3VwZGF0ZSc6XG5cdFx0XHRcdFx0XHRcdHNlbGYudXBkYXRlUGx1Z2luUHJvY2Vzc2VkID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbiggcmVzcG9uY2UsIHRleHRTdGF0dXMsIGpxWEhSICkge1xuXG5cdFx0XHRcdFx0c3dpdGNoICggc2VsZi5hY3Rpb25QbHVnaW4gKSB7XG5cdFx0XHRcdFx0XHRjYXNlICdpbnN0YWxsJzpcblx0XHRcdFx0XHRcdGNhc2UgJ2FjdGl2YXRlJzpcblx0XHRcdFx0XHRcdGNhc2UgJ2RlYWN0aXZhdGUnOlxuXHRcdFx0XHRcdFx0XHRzZWxmLmFjdGlvblBsdWdpblByb2Nlc3NlZCA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGNhc2UgJ3VwZGF0ZSc6XG5cdFx0XHRcdFx0XHRcdHNlbGYudXBkYXRlUGx1Z2luUHJvY2Vzc2VkID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICggcmVzcG9uY2Uuc3VjY2VzcyApIHtcblx0XHRcdFx0XHRcdHNlbGYuJENYTm90aWNlLmFkZCgge1xuXHRcdFx0XHRcdFx0XHRtZXNzYWdlOiByZXNwb25jZS5tZXNzYWdlLFxuXHRcdFx0XHRcdFx0XHR0eXBlOiAnc3VjY2VzcycsXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiA0MDAwLFxuXHRcdFx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdFx0XHR3aW5kb3cuamZiRXZlbnRCdXMuJGVtaXQoICd1cGRhdGVBZGRvbkRhdGEnLCB7XG5cdFx0XHRcdFx0XHRcdHNsdWc6IHNlbGYuYWRkb25EYXRhWydzbHVnJ10sXG5cdFx0XHRcdFx0XHRcdGFkZG9uRGF0YTogcmVzcG9uY2UuZGF0YSxcblx0XHRcdFx0XHRcdFx0YWN0aW9uOiBzZWxmLmFjdGlvblBsdWdpbixcblx0XHRcdFx0XHRcdH0gKTtcblxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRzZWxmLiRDWE5vdGljZS5hZGQoIHtcblx0XHRcdFx0XHRcdFx0bWVzc2FnZTogcmVzcG9uY2UubWVzc2FnZSxcblx0XHRcdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDQwMDAsXG5cdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHR9LFxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuXG4uamZiLWFkZG9ucyB7XG5cdG1hcmdpbi1ib3R0b206IDUwcHg7XG5cblx0JjpsYXN0LWNoaWxkIHtcblx0XHRtYXJnaW4tYm90dG9tOiAwO1xuXHR9XG5cblx0YSB7XG5cdFx0Y29sb3I6ICMwMDdjYmE7XG5cdH1cblxuXHQmX19oZWFkZXIge1xuXHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XG5cdH1cblxuXHQmX19saXN0IHtcblx0XHRkaXNwbGF5OiBncmlkO1xuXHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG5cdFx0Z2FwOiA0MHB4O1xuXG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6IDExNDBweCkge1xuXHRcdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcblx0XHR9XG5cdH1cblxuXHQmX19pdGVtIHtcblx0XHR0cmFuc2l0aW9uOiBib3gtc2hhZG93IC4zcyBlYXNlLW91dDtcblx0XHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXG5cdFx0Jjpob3ZlciB7XG5cdFx0XHRib3gtc2hhZG93OiAwcHggNHB4IDI4cHggcmdiYSgxNSwgMjMsIDQyLCAwLjEpO1xuXHRcdH1cblxuXHRcdCYuYWN0aXZhdGVkIHtcblx0XHRcdC5qZmItYWRkb25zX19pdGVtLWluZm8ge1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQmLnVwZGF0ZS1hdmFsaWFibGUge1xuXHRcdFx0LmpmYi1hZGRvbnNfX2l0ZW0tbmFtZSB7XG5cdFx0XHRcdC52ZXJzaW9uIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRDYzMzZDO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQuamZiLWFkZG9uc19faXRlbS11cGRhdGUge1xuXHRcdFx0XHQubGF0ZXN0LXZlcnNpb24ge1xuXHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjNDZCNDUwO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDJweCA4cHg7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Jl9faXRlbS1pbm5lciB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuXHRcdGhlaWdodDogMTAwJTtcblx0fVxuXG5cdCZfX2l0ZW0tdGh1bWIge1xuXHRcdGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XG5cdFx0bGluZS1oZWlnaHQ6IDA7XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cblx0XHQucHJvLWJhZGdlIHtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdHRvcDogMTJweDtcblx0XHRcdGxlZnQ6IDEycHg7XG5cdFx0fVxuXG5cdFx0aW1nIHtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdH1cblx0fVxuXG5cdCZfX2l0ZW0taW5mbyB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuXHRcdGZsZXg6IDEgMSBhdXRvO1xuXHRcdHBhZGRpbmc6IDIwcHg7XG5cdFx0Ym9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcblx0XHRib3JkZXItd2lkdGg6IDAgMXB4IDFweCAxcHg7XG5cdFx0Ym9yZGVyLWNvbG9yOiAjRENEQ0REO1xuXHRcdGJvcmRlci1zdHlsZTogc29saWQ7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cdH1cblxuXHQmX19pdGVtLW5hbWUge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XG5cblx0XHQubGFiZWwge1xuXHRcdFx0Zm9udC1zaXplOiAyMHB4O1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRcdGxpbmUtaGVpZ2h0OiAxLjI1O1xuXHRcdH1cblxuXHRcdC52ZXJzaW9uIHtcblx0XHRcdHBhZGRpbmc6IDFweCA4cHg7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjNDZCNDUwO1xuXHRcdFx0bWFyZ2luLWxlZnQ6IDEwcHg7XG5cdFx0fVxuXHR9XG5cblx0Jl9faXRlbS11cGRhdGUge1xuXHRcdGNvbG9yOiAjN2I3ZTgxO1xuXHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XG5cdH1cblxuXHQmX19pdGVtLWxpY2Vuc2Uge1xuXHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XG5cdFx0Y29sb3I6ICM3YjdlODE7XG5cblx0XHQuY3gtdnVpLWJ1dHRvbiB7XG5cdFx0XHRtYXJnaW4tbGVmdDogM3B4O1xuXHRcdH1cblx0fVxuXG5cdCZfX2l0ZW0tZGVzYyB7XG5cdFx0ZmxleDogMSAxIGF1dG87XG5cblx0XHRhIHtcblx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHR9XG5cdH1cblxuXHQmX19pdGVtLWFjdGlvbnMge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0ZmxleC13cmFwOiB3cmFwO1xuXHRcdG1hcmdpbi10b3A6IDIwcHg7XG5cblx0XHQmOmVtcHR5IHtcblx0XHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0fVxuXG5cdFx0LmN4LXZ1aS1idXR0b24ge1xuXHRcdFx0bWFyZ2luLXJpZ2h0OiAyMHB4O1xuXHRcdH1cblx0fVxufVxuXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cblx0PGRpdiBjbGFzcz1cImpldC1mYi1zZXR0aW5ncy1wYWdlIHdyYXBcIj5cblx0XHQ8aDEgY2xhc3M9XCJjcy12dWktdGl0bGVcIj57eyAnSmV0Rm9ybXMgU2V0dGluZ3MnIH19PC9oMT5cblx0XHQ8ZGl2IGNsYXNzPVwiY3gtdnVpLXBhbmVsXCI+XG5cdFx0XHQ8Y3gtdnVpLXRhYnNcblx0XHRcdFx0OmluLXBhbmVsPVwiZmFsc2VcIlxuXHRcdFx0XHQ6dmFsdWU9XCJhY3RpdmVUYWJTbHVnXCJcblx0XHRcdFx0bGF5b3V0PVwidmVydGljYWxcIlxuXHRcdFx0PlxuXHRcdFx0XHQ8Y3gtdnVpLXRhYnMtcGFuZWxcblx0XHRcdFx0XHR2LWZvcj1cIiggeyBkaXNwbGF5QnV0dG9uID0gdHJ1ZSwgLi4udGFiIH0sIGluZGV4ICkgaW4gdGFic1wiXG5cdFx0XHRcdFx0Om5hbWU9XCJ0YWIuY29tcG9uZW50Lm5hbWVcIlxuXHRcdFx0XHRcdDpsYWJlbD1cInRhYi50aXRsZVwiXG5cdFx0XHRcdFx0OmtleT1cInRhYi5jb21wb25lbnQubmFtZVwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8a2VlcC1hbGl2ZT5cblx0XHRcdFx0XHRcdDxjb21wb25lbnRcblx0XHRcdFx0XHRcdFx0di1iaW5kOmlzPVwidGFiLmNvbXBvbmVudFwiXG5cdFx0XHRcdFx0XHRcdDppbmNvbWluZz1cImdldEluY29taW5nKCB0YWIuY29tcG9uZW50Lm5hbWUgKVwiXG5cdFx0XHRcdFx0XHRcdHJlZj1cInRhYkNvbXBvbmVudHNcIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2tlZXAtYWxpdmU+XG5cdFx0XHRcdFx0PGN4LXZ1aS1idXR0b25cblx0XHRcdFx0XHRcdHYtaWY9XCJkaXNwbGF5QnV0dG9uXCJcblx0XHRcdFx0XHRcdGJ1dHRvbi1zdHlsZT1cImFjY2VudFwiXG5cdFx0XHRcdFx0XHQ6bG9hZGluZz1cImxvYWRpbmdUYWJbIHRhYi5jb21wb25lbnQubmFtZSBdXCJcblx0XHRcdFx0XHRcdEBjbGljaz1cIm9uU2F2ZVRhYiggaW5kZXgsIHRhYi5jb21wb25lbnQubmFtZSApXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8dGVtcGxhdGUgI2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj5TYXZlPC9zcGFuPlxuXHRcdFx0XHRcdFx0PC90ZW1wbGF0ZT5cblx0XHRcdFx0XHQ8L2N4LXZ1aS1idXR0b24+XG5cdFx0XHRcdDwvY3gtdnVpLXRhYnMtcGFuZWw+XG5cdFx0XHQ8L2N4LXZ1aS10YWJzPlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgKiBhcyBjYXB0Y2hhIGZyb20gJy4vdGFicy9jYXB0Y2hhJ1xuaW1wb3J0ICogYXMgbWFpbGNoaW1wIGZyb20gJy4vdGFicy9tYWlsY2hpbXAnXG5pbXBvcnQgKiBhcyBnZXRSZXNwb25zZSBmcm9tICcuL3RhYnMvZ2V0cmVzcG9uc2UnXG5pbXBvcnQgKiBhcyBhY3RpdmVjYW1wYWlnbiBmcm9tICcuL3RhYnMvYWN0aXZlY2FtcGFpZ24nXG5pbXBvcnQgKiBhcyBwYXltZW50R2F0ZXdheXMgZnJvbSAnLi90YWJzL3BheW1lbnRzLWdhdGV3YXlzJ1xuaW1wb3J0IFNhdmVUYWJCeUFqYXggZnJvbSAnQGFkbWluL21peGlucy9TYXZlVGFiQnlBamF4JztcbmltcG9ydCBHZXRJbmNvbWluZyBmcm9tICdAYWRtaW4vbWl4aW5zL0dldEluY29taW5nJztcblxuY29uc3QgeyBhcHBseUZpbHRlcnMsIGRvQWN0aW9uIH0gPSB3cC5ob29rcztcblxud2luZG93LmpmYkV2ZW50QnVzID0gbmV3IFZ1ZSgpO1xuXG5jb25zdCBzZXR0aW5nVGFicyA9IGFwcGx5RmlsdGVycyggJ2pldC5mYi5yZWdpc3Rlci5zZXR0aW5ncy1wYWdlLnRhYnMnLCBbXG5cdHBheW1lbnRHYXRld2F5cyxcblx0Y2FwdGNoYSxcblx0bWFpbGNoaW1wLFxuXHRnZXRSZXNwb25zZSxcblx0YWN0aXZlY2FtcGFpZ24sXG5dICk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0bmFtZTogJ2pmYi1zZXR0aW5ncycsXG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGFjdGl2ZVRhYlNsdWc6IHNldHRpbmdUYWJzWyAwIF0uY29tcG9uZW50Lm5hbWUsXG5cdFx0XHR0YWJzOiBzZXR0aW5nVGFicyxcblx0XHRcdGxvYWRpbmdUYWI6IHt9LFxuXHRcdH07XG5cdH0sXG5cdG1peGluczogWyBTYXZlVGFiQnlBamF4LCBHZXRJbmNvbWluZyBdLFxuXHRjcmVhdGVkKCkge1xuXHRcdGpmYkV2ZW50QnVzLiRvbiggJ3JlcXVlc3Qtc3RhdGUnLCBwcm9wcyA9PiB7XG5cdFx0XHRjb25zdCB7IHN0YXRlLCBzbHVnIH0gPSBwcm9wcztcblx0XHRcdHRoaXMuJHNldCggdGhpcy5sb2FkaW5nVGFiLCBzbHVnLCBzdGF0ZSA9PT0gJ2JlZ2luJyApO1xuXHRcdH0gKTtcblx0fSxcblx0bWV0aG9kczoge1xuXHRcdG9uU2F2ZVRhYiggaW5kZXhUYWIsIHRhYlNsdWcgKSB7XG5cdFx0XHRjb25zdCBjdXJyZW50VGFiID0gdGhpcy4kcmVmcy50YWJDb21wb25lbnRzWyBpbmRleFRhYiBdO1xuXG5cdFx0XHR0aGlzLnNhdmVCeUFqYXgoIGN1cnJlbnRUYWIsIHRhYlNsdWcgKTtcblx0XHR9LFxuXHR9LFxufVxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuXHQ8c2VjdGlvbj5cblx0XHQ8Y3gtdnVpLWlucHV0XG5cdFx0XHQ6bGFiZWw9XCJsYWJlbC5jbGllbnRfaWRcIlxuXHRcdFx0OndyYXBwZXItY3NzPVwiWyAnZXF1YWx3aWR0aCcgXVwiXG5cdFx0XHQ6c2l6ZT1cIidmdWxsd2lkdGgnXCJcblx0XHRcdHYtbW9kZWw9XCJzdG9yYWdlLmNsaWVudF9pZFwiXG5cdFx0PjwvY3gtdnVpLWlucHV0PlxuXHRcdDxjeC12dWktaW5wdXRcblx0XHRcdDpsYWJlbD1cImxhYmVsLnNlY3JldFwiXG5cdFx0XHQ6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJyBdXCJcblx0XHRcdDpzaXplPVwiJ2Z1bGx3aWR0aCdcIlxuXHRcdFx0di1tb2RlbD1cInN0b3JhZ2Uuc2VjcmV0XCJcblx0XHQ+PC9jeC12dWktaW5wdXQ+XG5cdDwvc2VjdGlvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCB7XG5cdGhlbHAsXG5cdGxhYmVsLFxufSBmcm9tIFwiLi9zb3VyY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRuYW1lOiAncGF5cGFsJyxcblx0cHJvcHM6IHtcblx0XHRpbmNvbWluZzoge1xuXHRcdFx0dHlwZTogT2JqZWN0LFxuXHRcdFx0ZGVmYXVsdCgpIHtcblx0XHRcdFx0cmV0dXJuIHt9O1xuXHRcdFx0fSxcblx0XHR9LFxuXHR9LFxuXHRkYXRhKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRsYWJlbCwgaGVscCxcblx0XHRcdHN0b3JhZ2U6IHt9LFxuXHRcdH07XG5cdH0sXG5cdGNyZWF0ZWQoKSB7XG5cdFx0dGhpcy5zdG9yYWdlID0gSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIHRoaXMuaW5jb21pbmcgKSApO1xuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0Z2V0UmVxdWVzdE9uU2F2ZSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGRhdGE6IHsgLi4udGhpcy5zdG9yYWdlIH0sXG5cdFx0XHR9O1xuXHRcdH0sXG5cdH0sXG59XG5cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cblx0PGRpdj5cblx0XHQ8Y3gtdnVpLWlucHV0XG5cdFx0XHQ6bGFiZWw9XCJsYWJlbC5hcGlfa2V5XCJcblx0XHRcdDp3cmFwcGVyLWNzcz1cIlsgJ2VxdWFsd2lkdGgnIF1cIlxuXHRcdFx0OnNpemU9XCInZnVsbHdpZHRoJ1wiXG5cdFx0XHR2LW1vZGVsPVwiYXBpX2tleVwiXG5cdFx0Lz5cblx0XHQ8Y3gtdnVpLWlucHV0XG5cdFx0XHQ6bGFiZWw9XCJsYWJlbC5hcGlfdXJsXCJcblx0XHRcdDp3cmFwcGVyLWNzcz1cIlsgJ2VxdWFsd2lkdGgnIF1cIlxuXHRcdFx0OnNpemU9XCInZnVsbHdpZHRoJ1wiXG5cdFx0XHR2LW1vZGVsPVwiYXBpX3VybFwiXG5cdFx0Lz5cblx0XHQ8cCBjbGFzcz1cImZiLWRlc2NyaXB0aW9uXCI+e3sgaGVscC5hcGlQcmVmIH19IDxhIDpocmVmPVwiaGVscC5hcGlMaW5rXCIgdGFyZ2V0PVwiX2JsYW5rXCI+e3sgaGVscC5hcGlMaW5rTGFiZWwgfX08L2E+XG5cdFx0PC9wPlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCB7XG5cdGhlbHAsXG5cdGxhYmVsXG59IGZyb20gXCIuL3NvdXJjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdG5hbWU6ICdhY3RpdmUtY2FtcGFpZ24tdGFiJyxcblx0cHJvcHM6IHtcblx0XHRpbmNvbWluZzoge1xuXHRcdFx0dHlwZTogT2JqZWN0LFxuXHRcdFx0ZGVmYXVsdDoge30sXG5cdFx0fSxcblx0fSxcblx0ZGF0YSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bGFiZWwsIGhlbHAsXG5cdFx0XHRhcGlfa2V5OiAnJyxcblx0XHRcdGFwaV91cmw6ICcnXG5cdFx0fTtcblx0fSxcblx0Y3JlYXRlZCgpIHtcblx0XHR0aGlzLmFwaV9rZXkgPSB0aGlzLmluY29taW5nLmFwaV9rZXkgfHwgJydcblx0XHR0aGlzLmFwaV91cmwgPSB0aGlzLmluY29taW5nLmFwaV91cmwgfHwgJydcblx0fSxcblx0bWV0aG9kczoge1xuXHRcdGdldFJlcXVlc3RPblNhdmUoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0YXBpX2tleTogdGhpcy5hcGlfa2V5LFxuXHRcdFx0XHRcdGFwaV91cmw6IHRoaXMuYXBpX3VybFxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH1cblx0fVxufVxuXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG5cdDxkaXY+XG5cdFx0PGN4LXZ1aS1pbnB1dFxuXHRcdFx0OmxhYmVsPVwibGFiZWwua2V5XCJcblx0XHRcdDp3cmFwcGVyLWNzcz1cIlsgJ2VxdWFsd2lkdGgnIF1cIlxuXHRcdFx0OnNpemU9XCInZnVsbHdpZHRoJ1wiXG5cdFx0XHR2LW1vZGVsPVwia2V5XCJcblx0XHQ+PC9jeC12dWktaW5wdXQ+XG5cdFx0PGN4LXZ1aS1pbnB1dFxuXHRcdFx0OmxhYmVsPVwibGFiZWwuc2VjcmV0XCJcblx0XHRcdDp3cmFwcGVyLWNzcz1cIlsgJ2VxdWFsd2lkdGgnIF1cIlxuXHRcdFx0OnNpemU9XCInZnVsbHdpZHRoJ1wiXG5cdFx0XHR2LW1vZGVsPVwic2VjcmV0XCJcblx0XHQ+PC9jeC12dWktaW5wdXQ+XG5cdFx0PHAgY2xhc3M9XCJmYi1kZXNjcmlwdGlvblwiPnt7IGhlbHAuYXBpUHJlZiB9fSA8YSA6aHJlZj1cImhlbHAuYXBpTGlua1wiIHRhcmdldD1cIl9ibGFua1wiPnt7IGhlbHAuYXBpTGlua0xhYmVsIH19PC9hPlxuXHRcdDwvcD5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHtcblx0bGFiZWwsXG5cdGhlbHAsXG59IGZyb20gXCIuL3NvdXJjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdG5hbWU6ICdjYXB0Y2hhLXRhYicsXG5cdHByb3BzOiB7XG5cdFx0aW5jb21pbmc6IHtcblx0XHRcdHR5cGU6IE9iamVjdCxcblx0XHRcdGRlZmF1bHQ6IHt9LFxuXHRcdH0sXG5cdH0sXG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGxhYmVsLCBoZWxwLFxuXHRcdFx0a2V5OiAnJyxcblx0XHRcdHNlY3JldDogJycsXG5cdFx0fTtcblx0fSxcblx0Y3JlYXRlZCgpIHtcblx0XHR0aGlzLmtleSA9IHRoaXMuaW5jb21pbmcua2V5IHx8ICcnO1xuXHRcdHRoaXMuc2VjcmV0ID0gdGhpcy5pbmNvbWluZy5zZWNyZXQgfHwgJyc7XG5cdH0sXG5cdG1ldGhvZHM6IHtcblx0XHRnZXRSZXF1ZXN0T25TYXZlKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdHNlY3JldDogdGhpcy5zZWNyZXQsXG5cdFx0XHRcdFx0a2V5OiB0aGlzLmtleSxcblx0XHRcdFx0fSxcblx0XHRcdH07XG5cdFx0fSxcblx0fSxcbn1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cblx0PGN4LXZ1aS1pbnB1dFxuXHRcdDpsYWJlbD1cImxhYmVsLmFwaV9rZXlcIlxuXHRcdDp3cmFwcGVyLWNzcz1cIlsgJ2VxdWFsd2lkdGgnIF1cIlxuXHRcdDpkZXNjcmlwdGlvbj0nYCR7IGhlbHAuYXBpUHJlZiB9IDxhIGhyZWY9XCIkeyBoZWxwLmFwaUxpbmsgfVwiIHRhcmdldD1cIl9ibGFua1wiPiR7IGhlbHAuYXBpTGlua0xhYmVsIH08L2E+YCdcblx0XHQ6c2l6ZT1cIidmdWxsd2lkdGgnXCJcblx0XHR2LW1vZGVsPVwiYXBpX2tleVwiXG5cdC8+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQge1xuXHRoZWxwLFxuXHRsYWJlbFxufSBmcm9tIFwiLi9zb3VyY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRuYW1lOiAnZ2V0LXJlc3BvbnNlLXRhYicsXG5cdHByb3BzOiB7XG5cdFx0aW5jb21pbmc6IHtcblx0XHRcdHR5cGU6IE9iamVjdCxcblx0XHRcdGRlZmF1bHQ6IHt9LFxuXHRcdH0sXG5cdH0sXG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGxhYmVsLCBoZWxwLFxuXHRcdFx0YXBpX2tleTogJycsXG5cdFx0fTtcblx0fSxcblx0Y3JlYXRlZCgpIHtcblx0XHR0aGlzLmFwaV9rZXkgPSB0aGlzLmluY29taW5nLmFwaV9rZXkgfHwgJydcblx0fSxcblx0bWV0aG9kczoge1xuXHRcdGdldFJlcXVlc3RPblNhdmUoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0YXBpX2tleTogdGhpcy5hcGlfa2V5LFxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH1cblx0fVxufVxuXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG5cdDxjeC12dWktaW5wdXRcblx0XHQ6bGFiZWw9XCJsYWJlbC5hcGlfa2V5XCJcblx0XHQ6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJyBdXCJcblx0XHQ6ZGVzY3JpcHRpb249J2AkeyBoZWxwLmFwaVByZWYgfSA8YSBocmVmPVwiJHsgaGVscC5hcGlMaW5rIH1cIiB0YXJnZXQ9XCJfYmxhbmtcIj4keyBoZWxwLmFwaUxpbmtMYWJlbCB9PC9hPmAnXG5cdFx0OnNpemU9XCInZnVsbHdpZHRoJ1wiXG5cdFx0di1tb2RlbD1cImFwaV9rZXlcIlxuXHQvPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IHtcblx0aGVscCxcblx0bGFiZWxcbn0gZnJvbSBcIi4vc291cmNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0bmFtZTogJ21haWxjaGltcC10YWInLFxuXHRwcm9wczoge1xuXHRcdGluY29taW5nOiB7XG5cdFx0XHR0eXBlOiBPYmplY3QsXG5cdFx0XHRkZWZhdWx0OiB7fSxcblx0XHR9LFxuXHR9LFxuXHRkYXRhKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRsYWJlbCwgaGVscCxcblx0XHRcdGFwaV9rZXk6ICcnLFxuXHRcdH07XG5cdH0sXG5cdGNyZWF0ZWQoKSB7XG5cdFx0dGhpcy5hcGlfa2V5ID0gdGhpcy5pbmNvbWluZy5hcGlfa2V5IHx8ICcnXG5cdH0sXG5cdG1ldGhvZHM6IHtcblx0XHRnZXRSZXF1ZXN0T25TYXZlKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdGFwaV9rZXk6IHRoaXMuYXBpX2tleSxcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9XG5cdH1cbn1cblxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuXHQ8c2VjdGlvbj5cblx0XHQ8Y3gtdnVpLXN3aXRjaGVyXG5cdFx0XHRuYW1lPVwidXNlX2dhdGV3YXlzXCJcblx0XHRcdDp3cmFwcGVyLWNzcz1cIlsgJ2VxdWFsd2lkdGgnIF1cIlxuXHRcdFx0OmxhYmVsPVwibGFiZWwudXNlX2dhdGV3YXlzXCJcblx0XHRcdDpkZXNjcmlwdGlvbj1cImhlbHAudXNlX2dhdGV3YXlzXCJcblx0XHRcdDp2YWx1ZT1cInN0b3JhZ2UudXNlX2dhdGV3YXlzXCJcblx0XHRcdEBpbnB1dD1cImNoYW5nZVZhbCggJ3VzZV9nYXRld2F5cycsICRldmVudCApXCJcblx0XHQ+PC9jeC12dWktc3dpdGNoZXI+XG5cdFx0PGN4LXZ1aS1zd2l0Y2hlclxuXHRcdFx0di1pZj1cInN0b3JhZ2UudXNlX2dhdGV3YXlzXCJcblx0XHRcdG5hbWU9XCJlbmFibGVfdGVzdF9tb2RlXCJcblx0XHRcdDp3cmFwcGVyLWNzcz1cIlsgJ2VxdWFsd2lkdGgnIF1cIlxuXHRcdFx0OmRlc2NyaXB0aW9uPVwiaGVscC5lbmFibGVfdGVzdF9tb2RlXCJcblx0XHRcdDpsYWJlbD1cImxhYmVsLmVuYWJsZV90ZXN0X21vZGVcIlxuXHRcdFx0OnZhbHVlPVwic3RvcmFnZS5lbmFibGVfdGVzdF9tb2RlXCJcblx0XHRcdEBpbnB1dD1cImNoYW5nZVZhbCggJ2VuYWJsZV90ZXN0X21vZGUnLCAkZXZlbnQgKVwiXG5cdFx0PjwvY3gtdnVpLXN3aXRjaGVyPlxuXHRcdDx0ZW1wbGF0ZSB2LWlmPVwic3RvcmFnZS51c2VfZ2F0ZXdheXNcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjeC12dWktaW5uZXItcGFuZWxcIj5cblx0XHRcdFx0PEN4VnVpQ29sbGFwc2VNaW5pXG5cdFx0XHRcdFx0d2l0aC1wYW5lbFxuXHRcdFx0XHRcdHYtZm9yPVwiKCB0YWIsIGluZGV4ICkgaW4gZ2F0ZXdheXNcIlxuXHRcdFx0XHRcdDpkZXNjPVwidGFiLmRlc2MgfHwgJydcIlxuXHRcdFx0XHRcdDpsYWJlbD1cInRhYi50aXRsZVwiXG5cdFx0XHRcdFx0OmtleT1cInRhYi5jb21wb25lbnQubmFtZVwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8a2VlcC1hbGl2ZT5cblx0XHRcdFx0XHRcdDxjb21wb25lbnRcblx0XHRcdFx0XHRcdFx0di1iaW5kOmlzPVwidGFiLmNvbXBvbmVudFwiXG5cdFx0XHRcdFx0XHRcdHJlZj1cImdhdGV3YXlzXCJcblx0XHRcdFx0XHRcdFx0OmluY29taW5nPVwiZ2V0SW5jb21pbmcoIHRhYi5jb21wb25lbnQubmFtZSApXCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9rZWVwLWFsaXZlPlxuXHRcdFx0XHRcdDxjeC12dWktYnV0dG9uXG5cdFx0XHRcdFx0XHRidXR0b24tc3R5bGU9XCJhY2NlbnRcIlxuXHRcdFx0XHRcdFx0OmxvYWRpbmc9XCJsb2FkaW5nR2F0ZXdheXNbIHRhYi5jb21wb25lbnQubmFtZSBdXCJcblx0XHRcdFx0XHRcdEBjbGljaz1cIm9uU2F2ZUdhdGV3YXkoIGluZGV4LCB0YWIuY29tcG9uZW50Lm5hbWUgKVwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PHNwYW4gc2xvdD1cImxhYmVsXCI+U2F2ZTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2N4LXZ1aS1idXR0b24+XG5cdFx0XHRcdDwvQ3hWdWlDb2xsYXBzZU1pbmk+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L3RlbXBsYXRlPlxuXHQ8L3NlY3Rpb24+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEN4VnVpQ29sbGFwc2VNaW5pIGZyb20gJ0BhZG1pbi9jb21wb25lbnRzL2NvbGxhcHNlLW1pbmkvQ3hWdWlDb2xsYXBzZU1pbmknO1xuaW1wb3J0IHtcblx0aGVscCxcblx0bGFiZWwsXG59IGZyb20gXCIuL3NvdXJjZVwiO1xuaW1wb3J0IFNhdmVUYWJCeUFqYXggZnJvbSAnQGFkbWluL21peGlucy9TYXZlVGFiQnlBamF4JztcbmltcG9ydCBHZXRJbmNvbWluZyBmcm9tICdAYWRtaW4vbWl4aW5zL0dldEluY29taW5nJztcbmltcG9ydCAqIGFzIHBheXBhbCBmcm9tICcuLi8uLi9nYXRld2F5cy9wYXlwYWwnO1xuXG5jb25zdCB7IGFwcGx5RmlsdGVycyB9ID0gd3AuaG9va3M7XG5cbmNvbnN0IGdhdGV3YXlzVGFicyA9IGFwcGx5RmlsdGVycyggJ2pldC5mYi5yZWdpc3Rlci5nYXRld2F5cycsIFtcblx0cGF5cGFsLFxuXSApO1xuXG5sZXQgcmVxdWVzdEZ1bmMgPSAoKSA9PiB7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdG5hbWU6ICdwYXltZW50cy1nYXRld2F5cycsXG5cdHByb3BzOiB7XG5cdFx0aW5jb21pbmc6IHtcblx0XHRcdHR5cGU6IE9iamVjdCxcblx0XHRcdGRlZmF1bHQoKSB7XG5cdFx0XHRcdHJldHVybiB7fTtcblx0XHRcdH0sXG5cdFx0fSxcblx0fSxcblx0Y29tcG9uZW50czogeyBDeFZ1aUNvbGxhcHNlTWluaSB9LFxuXHRtaXhpbnM6IFsgU2F2ZVRhYkJ5QWpheCwgR2V0SW5jb21pbmcgXSxcblx0ZGF0YSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bGFiZWwsIGhlbHAsXG5cdFx0XHRzdG9yYWdlOiBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggdGhpcy5pbmNvbWluZyApICksXG5cdFx0XHRnYXRld2F5czogZ2F0ZXdheXNUYWJzLFxuXHRcdFx0bG9hZGluZ0dhdGV3YXlzOiB7fSxcblx0XHR9O1xuXHR9LFxuXHRjcmVhdGVkKCkge1xuXHRcdGpmYkV2ZW50QnVzLiRvbiggJ3JlcXVlc3Qtc3RhdGUnLCBwcm9wcyA9PiB7XG5cdFx0XHRjb25zdCB7IHN0YXRlLCBzbHVnIH0gPSBwcm9wcztcblx0XHRcdHRoaXMuJHNldCggdGhpcy5sb2FkaW5nR2F0ZXdheXMsIHNsdWcsIHN0YXRlID09PSAnYmVnaW4nICk7XG5cdFx0fSApO1xuXG5cdFx0cmVxdWVzdEZ1bmMgPSBfLmRlYm91bmNlKCAoKSA9PiB7XG5cdFx0XHR0aGlzLnNhdmVCeUFqYXgoIHRoaXMsIHRoaXMuJG9wdGlvbnMubmFtZSApXG5cdFx0fSwgMTAwMCApO1xuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0Y2hhbmdlVmFsKCBuYW1lLCB2YWx1ZSApIHtcblx0XHRcdHRoaXMuJHNldCggdGhpcy5zdG9yYWdlLCBuYW1lLCB2YWx1ZSApO1xuXG5cdFx0XHRyZXF1ZXN0RnVuYygpO1xuXHRcdH0sXG5cdFx0b25TYXZlR2F0ZXdheSggaW5kZXhUYWIsIHRhYlNsdWcgKSB7XG5cdFx0XHRjb25zdCBjdXJyZW50ID0gdGhpcy4kcmVmcy5nYXRld2F5c1sgaW5kZXhUYWIgXTtcblxuXHRcdFx0dGhpcy5zYXZlQnlBamF4KCBjdXJyZW50LCB0YWJTbHVnICk7XG5cdFx0fSxcblx0XHRnZXRSZXF1ZXN0T25TYXZlKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZGF0YTogeyAuLi50aGlzLnN0b3JhZ2UgfSxcblx0XHRcdH07XG5cdFx0fSxcblx0fSxcbn1cblxuPC9zY3JpcHQ+IiwiZXhwb3J0IGRlZmF1bHQge1xuXHRtZXRob2RzOiB7XG5cdFx0Z2V0SW5jb21pbmcoIHRhYk5hbWUgKSB7XG5cdFx0XHRyZXR1cm4gd2luZG93LkpldEZCUGFnZUNvbmZpZ1sgdGFiTmFtZSBdO1xuXHRcdH0sXG5cdH1cbn0iLCJleHBvcnQgZGVmYXVsdCB7XG5cdG1ldGhvZHM6IHtcblx0XHRzYXZlQnlBamF4KCBjdXJyZW50VGFiLCB0YWJTbHVnICkge1xuXHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cblx0XHRcdGNvbnN0IGFqYXhSZXF1ZXN0ID0ge1xuXHRcdFx0XHQuLi57XG5cdFx0XHRcdFx0dXJsOiB3aW5kb3cuYWpheHVybCxcblx0XHRcdFx0XHR0eXBlOiAnUE9TVCcsXG5cdFx0XHRcdFx0ZGF0YVR5cGU6ICdqc29uJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0Li4uY3VycmVudFRhYi5nZXRSZXF1ZXN0T25TYXZlKCksXG5cdFx0XHR9O1xuXHRcdFx0YWpheFJlcXVlc3QuZGF0YSA9IHtcblx0XHRcdFx0YWN0aW9uOiBgamV0X2ZiX3NhdmVfdGFiX18keyB0YWJTbHVnIH1gLFxuXHRcdFx0XHQuLi5hamF4UmVxdWVzdC5kYXRhLFxuXHRcdFx0fTtcblxuXHRcdFx0amZiRXZlbnRCdXMuJGVtaXQoICdyZXF1ZXN0LXN0YXRlJywgeyBzdGF0ZTogJ2JlZ2luJywgc2x1ZzogdGFiU2x1ZyB9ICk7XG5cblx0XHRcdGpRdWVyeS5hamF4KCBhamF4UmVxdWVzdCApXG5cdFx0XHRcdC5kb25lKCBmdW5jdGlvbiggcmVzcG9uc2UgKSB7XG5cblx0XHRcdFx0XHRpZiAoICdmdW5jdGlvbicgPT09IHR5cGVvZiBjdXJyZW50VGFiLm9uU2F2ZURvbmUgKSB7XG5cdFx0XHRcdFx0XHRjdXJyZW50VGFiLm9uU2F2ZURvbmUoIHJlc3BvbnNlICk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGlmICggcmVzcG9uc2Uuc3VjY2VzcyApIHtcblx0XHRcdFx0XHRcdFx0c2VsZi4kQ1hOb3RpY2UuYWRkKCB7XG5cdFx0XHRcdFx0XHRcdFx0bWVzc2FnZTogcmVzcG9uc2UuZGF0YS5tZXNzYWdlLFxuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdzdWNjZXNzJyxcblx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogNTAwMCxcblx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0XHRpZiAoICdmdW5jdGlvbicgPT09IHR5cGVvZiBjdXJyZW50VGFiLm9uU2F2ZURvbmVTdWNjZXNzICkge1xuXHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRUYWIub25TYXZlRG9uZVN1Y2Nlc3MoIHJlc3BvbnNlICk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHNlbGYuJENYTm90aWNlLmFkZCgge1xuXHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2U6IHJlc3BvbnNlLmRhdGEubWVzc2FnZSxcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiA1MDAwLFxuXHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdGlmICggJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGN1cnJlbnRUYWIub25TYXZlRG9uZUVycm9yICkge1xuXHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRUYWIub25TYXZlRG9uZUVycm9yKCByZXNwb25zZSApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGpmYkV2ZW50QnVzLiRlbWl0KCAncmVxdWVzdC1zdGF0ZScsIHsgc3RhdGU6ICdlbmQnLCBzbHVnOiB0YWJTbHVnIH0gKTtcblx0XHRcdFx0fSApXG5cdFx0XHRcdC5mYWlsKCBmdW5jdGlvbigganFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duICkge1xuXHRcdFx0XHRcdGlmICggJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGN1cnJlbnRUYWIub25TYXZlRmFpbCApIHtcblx0XHRcdFx0XHRcdGN1cnJlbnRUYWIub25TYXZlRmFpbCgganFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duICk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHNlbGYuJENYTm90aWNlLmFkZCgge1xuXHRcdFx0XHRcdFx0XHRtZXNzYWdlOiBlcnJvclRocm93bixcblx0XHRcdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDUwMDAsXG5cdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGpmYkV2ZW50QnVzLiRlbWl0KCAncmVxdWVzdC1zdGF0ZScsIHsgc3RhdGU6ICdlbmQnLCBzbHVnOiB0YWJTbHVnIH0gKTtcblx0XHRcdFx0fSApO1xuXHRcdH1cblx0fVxufSIsImltcG9ydCBUYWIgZnJvbSAnLi9QYXlwYWxUYWIudnVlJztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3QgdGl0bGUgPSBfXyggJ1BheVBhbCBHYXRld2F5IEFQSScsICdqZXQtZm9ybS1idWlsZGVyJyApO1xuY29uc3QgY29tcG9uZW50ID0gVGFiO1xuXG5leHBvcnQge1xuXHR0aXRsZSxcblx0Y29tcG9uZW50LFxufSIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IGxhYmVsID0ge1xuXHRjbGllbnRfaWQ6IF9fKCAnQ2xpZW50IElEJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdHNlY3JldDogX18oICdTZWNyZXQgS2V5JywgJ2pldC1mb3JtLWJ1aWxkZXInIClcbn07XG5cbmNvbnN0IGhlbHAgPSB7fTtcblxuZXhwb3J0IHsgbGFiZWwsIGhlbHAgfTsiLCJpbXBvcnQgQWN0aXZlQ2FtcGFpZ24gZnJvbSAnLi9BY3RpdmVDYW1wYWlnblRhYi52dWUnO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB0aXRsZSA9IF9fKCAnQWN0aXZlQ2FtcGFpZ24gQVBJJywgJ2pldC1mb3JtLWJ1aWxkZXInICk7XG5jb25zdCBjb21wb25lbnQgPSBBY3RpdmVDYW1wYWlnbjtcblxuZXhwb3J0IHtcblx0dGl0bGUsXG5cdGNvbXBvbmVudFxufSIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IGxhYmVsID0ge1xuXHRhcGlfa2V5OiBfXyggJ0FQSSBLZXknLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0YXBpX3VybDogX18oICdBUEkgVVJMJywgJ2pldC1mb3JtLWJ1aWxkZXInIClcbn07XG5cbmNvbnN0IGhlbHAgPSB7XG5cdGFwaVByZWY6IF9fKCAnSG93IHRvIG9idGFpbiB5b3VyIEFjdGl2ZUNhbXBhaWduIEFQSSBVUkwgYW5kIEtleT8gTW9yZSBpbmZvJyApLFxuXHRhcGlMaW5rTGFiZWw6IF9fKCAnaGVyZScgKSxcblx0YXBpTGluazogJ2h0dHBzOi8vaGVscC5hY3RpdmVjYW1wYWlnbi5jb20vaGMvZW4tdXMvYXJ0aWNsZXMvMjA3MzE3NTkwLUdldHRpbmctc3RhcnRlZC13aXRoLXRoZS1BUEknXG59O1xuXG5leHBvcnQgeyBsYWJlbCwgaGVscCB9OyIsImltcG9ydCBDYXB0Y2hhVGFiIGZyb20gJy4vQ2FwdGNoYVRhYi52dWUnO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB0aXRsZSA9IF9fKCAnQ2FwdGNoYSBTZXR0aW5ncycsICdqZXQtZm9ybS1idWlsZGVyJyApO1xuY29uc3QgY29tcG9uZW50ID0gQ2FwdGNoYVRhYjtcblxuZXhwb3J0IHtcblx0dGl0bGUsXG5cdGNvbXBvbmVudFxufSIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IGxhYmVsID0ge1xuXHRrZXk6IF9fKCAnU2l0ZSBLZXknLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0c2VjcmV0OiBfXyggJ1NlY3JldCBLZXknLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcbn07XG5cbmNvbnN0IGhlbHAgPSB7XG5cdGFwaVByZWY6IF9fKCAnUmVnaXN0ZXIgcmVDQVBUQ0hBIHYzIGtleXMnICksXG5cdGFwaUxpbmtMYWJlbDogX18oICdoZXJlJyApLFxuXHRhcGlMaW5rOiAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9yZWNhcHRjaGEvYWRtaW4vY3JlYXRlJ1xufTtcblxuZXhwb3J0IHsgbGFiZWwsIGhlbHAgfTsiLCJpbXBvcnQgR2V0UmVzcG9uc2VUYWIgZnJvbSAnLi9HZXRSZXNwb25zZVRhYi52dWUnO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB0aXRsZSA9IF9fKCAnR2V0UmVzcG9uc2UgQVBJJywgJ2pldC1mb3JtLWJ1aWxkZXInICk7XG5jb25zdCBjb21wb25lbnQgPSBHZXRSZXNwb25zZVRhYjtcblxuZXhwb3J0IHtcblx0dGl0bGUsXG5cdGNvbXBvbmVudFxufSIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IGxhYmVsID0ge1xuXHRhcGlfa2V5OiBfXyggJ0FQSSBLZXknLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcbn07XG5cbmNvbnN0IGhlbHAgPSB7XG5cdGFwaVByZWY6IF9fKCAnSG93IHRvIG9idGFpbiB5b3VyIEdldFJlc3BvbnNlIEFQSSBLZXk/IE1vcmUgaW5mbycgKSxcblx0YXBpTGlua0xhYmVsOiBfXyggJ2hlcmUnICksXG5cdGFwaUxpbms6ICdodHRwczovL2FwcC5nZXRyZXNwb25zZS5jb20vYXBpJ1xufTtcblxuZXhwb3J0IHsgbGFiZWwsIGhlbHAgfTsiLCJpbXBvcnQgTWFpbENoaW1wVGFiIGZyb20gJy4vTWFpbENoaW1wVGFiLnZ1ZSc7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHRpdGxlID0gX18oICdNYWlsQ2hpbXAgQVBJJywgJ2pldC1mb3JtLWJ1aWxkZXInICk7XG5jb25zdCBjb21wb25lbnQgPSBNYWlsQ2hpbXBUYWI7XG5cbmV4cG9ydCB7XG5cdHRpdGxlLFxuXHRjb21wb25lbnRcbn0iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCBsYWJlbCA9IHtcblx0YXBpX2tleTogX18oICdBUEkgS2V5JywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG59O1xuXG5jb25zdCBoZWxwID0ge1xuXHRhcGlQcmVmOiBfXyggJ0hvdyB0byBvYnRhaW4geW91ciBNYWlsQ2hpbXAgQVBJIEtleT8gTW9yZSBpbmZvJyApLFxuXHRhcGlMaW5rTGFiZWw6IF9fKCAnaGVyZScgKSxcblx0YXBpTGluazogJ2h0dHBzOi8vbWFpbGNoaW1wLmNvbS9oZWxwL2Fib3V0LWFwaS1rZXlzLydcbn07XG5cbmV4cG9ydCB7IGxhYmVsLCBoZWxwIH07IiwiaW1wb3J0IFRhYiBmcm9tICcuL1BheW1lbnRzR2F0ZXdheXMudnVlJztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3QgdGl0bGUgPSBfXyggJ1BheW1lbnRzIEdhdGV3YXlzJywgJ2pldC1mb3JtLWJ1aWxkZXInICk7XG5jb25zdCBjb21wb25lbnQgPSBUYWI7XG5jb25zdCBkaXNwbGF5QnV0dG9uID0gZmFsc2U7XG5cbmV4cG9ydCB7XG5cdHRpdGxlLFxuXHRjb21wb25lbnQsXG5cdGRpc3BsYXlCdXR0b25cbn0iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCBsYWJlbCA9IHtcblx0dXNlX2dhdGV3YXlzOiBfXyggJ0VuYWJsZSBHYXRld2F5cycsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRlbmFibGVfdGVzdF9tb2RlOiBfXyggJ0VuYWJsZSBUZXN0IE1vZGUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcbn07XG5cbmNvbnN0IGhlbHAgPSB7XG5cdGVuYWJsZV90ZXN0X21vZGU6IF9fKFxuXHRcdGBUaGlzIG9wdGlvbiB0YWtlcyBwcmVjZWRlbmNlIG92ZXIgdGhlIDxjb2RlPmpldC1mb3JtLWJ1aWxkZXIvZ2F0ZXdheXMvcGF5cGFsL3NhbmRib3gtbW9kZTwvY29kZT4gZmlsdGVyLiBcblx0XHRBcyBvZiByaWdodCBub3csIHdvcmtzIG9ubHkgZm9yIFBheVBhbCBwYXltZW50IHN5c3RlbWAsXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHQpLFxuXHR1c2VfZ2F0ZXdheXM6IF9fKFxuXHRcdGBBY3RpdmF0ZSBwYXltZW50IGdhdGV3YXlzIGZvciB0aGUgZm9ybXMuIFRoaXMgb3B0aW9uIHRha2VzIHByZWNlZGVuY2Ugb3ZlciB0aGUgXG5cdFx0PGNvZGU+amV0LWZvcm0tYnVpbGRlci9hbGxvdy1nYXRld2F5czwvY29kZT4gZmlsdGVyYCxcblx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdCksXG59O1xuXG5leHBvcnQge1xuXHRsYWJlbCxcblx0aGVscCxcbn07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIucHJvY2Nlc2luZy1zdGF0ZSB7XFxuICBvcGFjaXR5OiAwLjU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZV9faW5uZXIge1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZV9faGVhZGVyIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEQ0RDREQ7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlX19oZWFkZXItY29udHJvbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlX19oZWFkZXItY29udHJvbHMgPiAuY3gtdnVpLWJ1dHRvbiB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuY3gtdnVpLWJ1dHRvbiB7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmN4LXZ1aS1idXR0b24gLmJ1dHRvbi1pY29uIHtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlIC5jeC12dWktYnV0dG9uLS1zdHlsZS1hY2NlbnQge1xcbiAgY29sb3I6ICMwMDdjYmE7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggIzAwN2NiYTtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuY3gtdnVpLWJ1dHRvbi0tc3R5bGUtYWNjZW50OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdjYmExMjtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuY3gtdnVpLWJ1dHRvbi0tc3R5bGUtYWNjZW50IC5idXR0b24taWNvbiBwYXRoIHtcXG4gIGZpbGw6ICMwMDdjYmE7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmN4LXZ1aS1idXR0b24tLXN0eWxlLWRhbmdlciB7XFxuICBjb2xvcjogI2Q2MzM2YztcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjZDYzMzZjO1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlIC5jeC12dWktYnV0dG9uLS1zdHlsZS1kYW5nZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q2MzM2YzEyO1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlIC5jeC12dWktYnV0dG9uLS1zdHlsZS1kYW5nZXIgLmJ1dHRvbi1pY29uIHBhdGgge1xcbiAgZmlsbDogI2Q2MzM2YztcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuY3gtdnVpLWJ1dHRvbl9fY29udGVudCA+IHNwYW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuY3gtdnVpLXBvcHVwX19oZWFkZXIge1xcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RDRENERDtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmN4LXZ1aS1wb3B1cF9faGVhZGVyLXRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBsaW5lLWhlaWdodDogMzZweDtcXG4gIGNvbG9yOiAjMjMyODJEO1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlX19saWNlbnNlLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZV9fbGljZW5zZS1mb3JtID4gc3BhbiB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlX19saWNlbnNlLWlucHV0IHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2FkbWluL3BhZ2VzL2FkZG9ucy9BZGRvbnNQYWdlLnZ1ZVwiLFwid2VicGFjazovLy4vLi4vQWRkb25zUGFnZS52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBNFdBO0VBQ0MsWUFBQTtFQUNBLG9CQUFBO0FDM1dEO0FEZ1hDO0VBQ0MsYUFBQTtFQUNBLFlBQUE7QUM3V0Y7QURnWEM7RUFDQyxvQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7QUM5V0Y7QURpWEM7RUFDQyxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQy9XRjtBRGlYRTtFQUNDLGlCQUFBO0FDL1dIO0FEbVhDO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7QUNqWEY7QURtWEU7RUFDQyxpQkFBQTtBQ2pYSDtBRG9YRTtFQUNDLGNBQUE7RUFDQSxtQ0FBQTtBQ2xYSDtBRG9YRztFQUNDLDJCQUFBO0FDbFhKO0FEc1hJO0VBQ0MsYUFBQTtBQ3BYTDtBRHlYRTtFQUNDLGNBQUE7RUFDQSxtQ0FBQTtBQ3ZYSDtBRHlYRztFQUNDLDJCQUFBO0FDdlhKO0FEMlhJO0VBQ0MsYUFBQTtBQ3pYTDtBRCtYRztFQUNDLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDN1hKO0FEbVlFO0VBQ0Msb0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0FDallIO0FEb1lFO0VBQ0MsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDbFlIO0FEMFlDO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtBQ3hZRjtBRDBZRTtFQUNDLG1CQUFBO0FDeFlIO0FENFlDO0VBQ0MsbUJBQUE7QUMxWUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuLnByb2NjZXNpbmctc3RhdGUge1xcblxcdG9wYWNpdHk6IDAuNTtcXG5cXHRwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmpmYi1hZGRvbnMtcGFnZSB7XFxuXFxuXFx0Jl9faW5uZXIge1xcblxcdFxcdHBhZGRpbmc6IDMwcHg7XFxuXFx0XFx0aGVpZ2h0OiAxMDAlO1xcblxcdH1cXG5cXG5cXHQmX19oZWFkZXIge1xcblxcdFxcdHBhZGRpbmctYm90dG9tOiAxNXB4O1xcblxcdFxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRENEQ0REO1xcblxcdFxcdG1hcmdpbi1ib3R0b206IDMwcHg7XFxuXFx0fVxcblxcblxcdCZfX2hlYWRlci1jb250cm9scyB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFx0XFx0PiAuY3gtdnVpLWJ1dHRvbiB7XFxuXFx0XFx0XFx0bWFyZ2luLWxlZnQ6IDEwcHg7XFxuXFx0XFx0fVxcblxcdH1cXG5cXG5cXHQuY3gtdnVpLWJ1dHRvbiB7XFxuXFx0XFx0Zm9udC1zaXplOiAxM3B4O1xcblxcdFxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFxuXFx0XFx0LmJ1dHRvbi1pY29uIHtcXG5cXHRcXHRcXHRtYXJnaW4tcmlnaHQ6IDVweDtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0Ji0tc3R5bGUtYWNjZW50IHtcXG5cXHRcXHRcXHRjb2xvcjogIzAwN2NiYTtcXG5cXHRcXHRcXHRib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggIzAwN2NiYTtcXG5cXG5cXHRcXHRcXHQmOmhvdmVyIHtcXG5cXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3Y2JhMTI7XFxuXFx0XFx0XFx0fVxcblxcblxcdFxcdFxcdC5idXR0b24taWNvbiB7XFxuXFx0XFx0XFx0XFx0cGF0aCB7XFxuXFx0XFx0XFx0XFx0XFx0ZmlsbDogIzAwN2NiYTtcXG5cXHRcXHRcXHRcXHR9XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXG5cXHRcXHQmLS1zdHlsZS1kYW5nZXIge1xcblxcdFxcdFxcdGNvbG9yOiAjZDYzMzZjO1xcblxcdFxcdFxcdGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjZDYzMzZjO1xcblxcblxcdFxcdFxcdCY6aG92ZXIge1xcblxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICNkNjMzNmMxMjtcXG5cXHRcXHRcXHR9XFxuXFxuXFx0XFx0XFx0LmJ1dHRvbi1pY29uIHtcXG5cXHRcXHRcXHRcXHRwYXRoIHtcXG5cXHRcXHRcXHRcXHRcXHRmaWxsOiAjZDYzMzZjO1xcblxcdFxcdFxcdFxcdH1cXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcblxcdFxcdCZfX2NvbnRlbnQge1xcblxcdFxcdFxcdD4gc3BhbiB7XFxuXFx0XFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRcXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFx0fVxcblxcblxcdC5jeC12dWktcG9wdXAge1xcblxcdFxcdCZfX2hlYWRlciB7XFxuXFx0XFx0XFx0cGFkZGluZy1ib3R0b206IDE1cHg7XFxuXFx0XFx0XFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEQ0RDREQ7XFxuXFx0XFx0XFx0bWFyZ2luLWJvdHRvbTogMzBweDtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0Jl9faGVhZGVyLXRpdGxlIHtcXG5cXHRcXHRcXHRmb250LXdlaWdodDogNTAwO1xcblxcdFxcdFxcdGZvbnQtc2l6ZTogMjRweDtcXG5cXHRcXHRcXHRsaW5lLWhlaWdodDogMzZweDtcXG5cXHRcXHRcXHRjb2xvcjogIzIzMjgyRDtcXG5cXHRcXHR9XFxuXFx0fVxcblxcblxcdCZfX2xpY2Vuc2UtcG9wdXAge1xcblxcblxcdH1cXG5cXG5cXHQmX19saWNlbnNlLWZvcm0ge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuXFx0XFx0YWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuXFxuXFx0XFx0PiBzcGFuIHtcXG5cXHRcXHRcXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0Jl9fbGljZW5zZS1pbnB1dCB7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMTBweDtcXG5cXHR9XFxufVxcblxcblwiLFwiLnByb2NjZXNpbmctc3RhdGUge1xcbiAgb3BhY2l0eTogMC41O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5qZmItYWRkb25zLXBhZ2VfX2lubmVyIHtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5qZmItYWRkb25zLXBhZ2VfX2hlYWRlciB7XFxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRENEQ0REO1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZV9faGVhZGVyLWNvbnRyb2xzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZV9faGVhZGVyLWNvbnRyb2xzID4gLmN4LXZ1aS1idXR0b24ge1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmN4LXZ1aS1idXR0b24ge1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlIC5jeC12dWktYnV0dG9uIC5idXR0b24taWNvbiB7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuY3gtdnVpLWJ1dHRvbi0tc3R5bGUtYWNjZW50IHtcXG4gIGNvbG9yOiAjMDA3Y2JhO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICMwMDdjYmE7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmN4LXZ1aS1idXR0b24tLXN0eWxlLWFjY2VudDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3Y2JhMTI7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmN4LXZ1aS1idXR0b24tLXN0eWxlLWFjY2VudCAuYnV0dG9uLWljb24gcGF0aCB7XFxuICBmaWxsOiAjMDA3Y2JhO1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlIC5jeC12dWktYnV0dG9uLS1zdHlsZS1kYW5nZXIge1xcbiAgY29sb3I6ICNkNjMzNmM7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggI2Q2MzM2YztcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuY3gtdnVpLWJ1dHRvbi0tc3R5bGUtZGFuZ2VyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNjMzNmMxMjtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuY3gtdnVpLWJ1dHRvbi0tc3R5bGUtZGFuZ2VyIC5idXR0b24taWNvbiBwYXRoIHtcXG4gIGZpbGw6ICNkNjMzNmM7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmN4LXZ1aS1idXR0b25fX2NvbnRlbnQgPiBzcGFuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmN4LXZ1aS1wb3B1cF9faGVhZGVyIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEQ0RDREQ7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlIC5jeC12dWktcG9wdXBfX2hlYWRlci10aXRsZSB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XFxuICBjb2xvcjogIzIzMjgyRDtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZV9fbGljZW5zZS1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxufVxcbi5qZmItYWRkb25zLXBhZ2VfX2xpY2Vuc2UtZm9ybSA+IHNwYW4ge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZV9fbGljZW5zZS1pbnB1dCB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuamZiLWFkZG9ucyB7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG4uamZiLWFkZG9uczpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcbi5qZmItYWRkb25zIGEge1xcbiAgY29sb3I6ICMwMDdjYmE7XFxufVxcbi5qZmItYWRkb25zX19oZWFkZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLmpmYi1hZGRvbnNfX2xpc3Qge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICBnYXA6IDQwcHg7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTQwcHgpIHtcXG4uamZiLWFkZG9uc19fbGlzdCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxufVxcbn1cXG4uamZiLWFkZG9uc19faXRlbSB7XFxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3MgZWFzZS1vdXQ7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4uamZiLWFkZG9uc19faXRlbTpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwcHggNHB4IDI4cHggcmdiYSgxNSwgMjMsIDQyLCAwLjEpO1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS5hY3RpdmF0ZWQgLmpmYi1hZGRvbnNfX2l0ZW0taW5mbyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0udXBkYXRlLWF2YWxpYWJsZSAuamZiLWFkZG9uc19faXRlbS1uYW1lIC52ZXJzaW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNENjMzNkM7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLnVwZGF0ZS1hdmFsaWFibGUgLmpmYi1hZGRvbnNfX2l0ZW0tdXBkYXRlIC5sYXRlc3QtdmVyc2lvbiB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDZCNDUwO1xcbiAgcGFkZGluZzogMnB4IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0taW5uZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tdGh1bWIge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tdGh1bWIgLnByby1iYWRnZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEycHg7XFxuICBsZWZ0OiAxMnB4O1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS10aHVtYiBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcbi5qZmItYWRkb25zX19pdGVtLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XFxuICBib3JkZXItd2lkdGg6IDAgMXB4IDFweCAxcHg7XFxuICBib3JkZXItY29sb3I6ICNEQ0RDREQ7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLW5hbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tbmFtZSAubGFiZWwge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS1uYW1lIC52ZXJzaW9uIHtcXG4gIHBhZGRpbmc6IDFweCA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDZCNDUwO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLXVwZGF0ZSB7XFxuICBjb2xvcjogIzdiN2U4MTtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLWxpY2Vuc2Uge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGNvbG9yOiAjN2I3ZTgxO1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS1saWNlbnNlIC5jeC12dWktYnV0dG9uIHtcXG4gIG1hcmdpbi1sZWZ0OiAzcHg7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLWRlc2Mge1xcbiAgZmxleDogMSAxIGF1dG87XFxufVxcbi5qZmItYWRkb25zX19pdGVtLWRlc2MgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLWFjdGlvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS1hY3Rpb25zOmVtcHR5IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLWFjdGlvbnMgLmN4LXZ1aS1idXR0b24ge1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9hZG1pbi9wYWdlcy9hZGRvbnMvY29tcG9uZW50cy9BZGRvbkl0ZW0udnVlXCIsXCJ3ZWJwYWNrOi8vLi8uLi9BZGRvbkl0ZW0udnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQXVRQTtFQUNDLG1CQUFBO0FDdFFEO0FEd1FDO0VBQ0MsZ0JBQUE7QUN0UUY7QUR5UUM7RUFDQyxjQUFBO0FDdlFGO0FEMFFDO0VBQ0MsbUJBQUE7QUN4UUY7QUQyUUM7RUFDQyxhQUFBO0VBQ0EscUNBQUE7RUFDQSxTQUFBO0FDelFGO0FEMlFFO0FBTEQ7SUFNRSxxQ0FBQTtBQ3hRRDtBQUNGO0FEMlFDO0VBQ0Msb0NBQUE7RUFDQSxtQkFBQTtBQ3pRRjtBRDJRRTtFQUNDLDhDQUFBO0FDelFIO0FENlFHO0VBQ0MsdUJBQUE7QUMzUUo7QURpUkk7RUFDQyx5QkFBQTtBQy9RTDtBRG1SSTtFQUNDLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNqUkw7QUR1UkM7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUNyUkY7QUR3UkM7RUFDQyw0QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDdFJGO0FEd1JFO0VBQ0Msa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ3RSSDtBRHlSRTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FDdlJIO0FEMlJDO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUN6UkY7QUQ0UkM7RUFDQyxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDMVJGO0FENFJFO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUMxUkg7QUQ2UkU7RUFDQyxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUMzUkg7QUQrUkM7RUFDQyxjQUFBO0VBQ0EsbUJBQUE7QUM3UkY7QURnU0M7RUFDQyxtQkFBQTtFQUNBLGNBQUE7QUM5UkY7QURnU0U7RUFDQyxnQkFBQTtBQzlSSDtBRGtTQztFQUNDLGNBQUE7QUNoU0Y7QURrU0U7RUFDQyxxQkFBQTtBQ2hTSDtBRG9TQztFQUNDLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDbFNGO0FEb1NFO0VBQ0MsYUFBQTtBQ2xTSDtBRHFTRTtFQUNDLGtCQUFBO0FDblNIXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcbi5qZmItYWRkb25zIHtcXG5cXHRtYXJnaW4tYm90dG9tOiA1MHB4O1xcblxcblxcdCY6bGFzdC1jaGlsZCB7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMDtcXG5cXHR9XFxuXFxuXFx0YSB7XFxuXFx0XFx0Y29sb3I6ICMwMDdjYmE7XFxuXFx0fVxcblxcblxcdCZfX2hlYWRlciB7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMjBweDtcXG5cXHR9XFxuXFxuXFx0Jl9fbGlzdCB7XFxuXFx0XFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcblxcdFxcdGdhcDogNDBweDtcXG5cXG5cXHRcXHRAbWVkaWEgKG1heC13aWR0aDogMTE0MHB4KSB7XFxuXFx0XFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG5cXHRcXHR9XFxuXFx0fVxcblxcblxcdCZfX2l0ZW0ge1xcblxcdFxcdHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjNzIGVhc2Utb3V0O1xcblxcdFxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFxuXFx0XFx0Jjpob3ZlciB7XFxuXFx0XFx0XFx0Ym94LXNoYWRvdzogMHB4IDRweCAyOHB4IHJnYmEoMTUsIDIzLCA0MiwgMC4xKTtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0Ji5hY3RpdmF0ZWQge1xcblxcdFxcdFxcdC5qZmItYWRkb25zX19pdGVtLWluZm8ge1xcblxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFxuXFx0XFx0Ji51cGRhdGUtYXZhbGlhYmxlIHtcXG5cXHRcXHRcXHQuamZiLWFkZG9uc19faXRlbS1uYW1lIHtcXG5cXHRcXHRcXHRcXHQudmVyc2lvbiB7XFxuXFx0XFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogI0Q2MzM2QztcXG5cXHRcXHRcXHRcXHR9XFxuXFx0XFx0XFx0fVxcblxcdFxcdFxcdC5qZmItYWRkb25zX19pdGVtLXVwZGF0ZSB7XFxuXFx0XFx0XFx0XFx0LmxhdGVzdC12ZXJzaW9uIHtcXG5cXHRcXHRcXHRcXHRcXHRjb2xvcjogd2hpdGU7XFxuXFx0XFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogIzQ2QjQ1MDtcXG5cXHRcXHRcXHRcXHRcXHRwYWRkaW5nOiAycHggOHB4O1xcblxcdFxcdFxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IDRweDtcXG5cXHRcXHRcXHRcXHR9XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0Jl9faXRlbS1pbm5lciB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcblxcdFxcdGhlaWdodDogMTAwJTtcXG5cXHR9XFxuXFxuXFx0Jl9faXRlbS10aHVtYiB7XFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcXG5cXHRcXHRsaW5lLWhlaWdodDogMDtcXG5cXHRcXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG5cXHRcXHQucHJvLWJhZGdlIHtcXG5cXHRcXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0XFx0XFx0dG9wOiAxMnB4O1xcblxcdFxcdFxcdGxlZnQ6IDEycHg7XFxuXFx0XFx0fVxcblxcblxcdFxcdGltZyB7XFxuXFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0XFx0aGVpZ2h0OiBhdXRvO1xcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0Jl9faXRlbS1pbmZvIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0YWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuXFx0XFx0ZmxleDogMSAxIGF1dG87XFxuXFx0XFx0cGFkZGluZzogMjBweDtcXG5cXHRcXHRib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xcblxcdFxcdGJvcmRlci13aWR0aDogMCAxcHggMXB4IDFweDtcXG5cXHRcXHRib3JkZXItY29sb3I6ICNEQ0RDREQ7XFxuXFx0XFx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXHR9XFxuXFxuXFx0Jl9faXRlbS1uYW1lIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRcXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xcblxcblxcdFxcdC5sYWJlbCB7XFxuXFx0XFx0XFx0Zm9udC1zaXplOiAyMHB4O1xcblxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0XFx0XFx0bGluZS1oZWlnaHQ6IDEuMjU7XFxuXFx0XFx0fVxcblxcblxcdFxcdC52ZXJzaW9uIHtcXG5cXHRcXHRcXHRwYWRkaW5nOiAxcHggOHB4O1xcblxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IDRweDtcXG5cXHRcXHRcXHRjb2xvcjogd2hpdGU7XFxuXFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogIzQ2QjQ1MDtcXG5cXHRcXHRcXHRtYXJnaW4tbGVmdDogMTBweDtcXG5cXHRcXHR9XFxuXFx0fVxcblxcblxcdCZfX2l0ZW0tdXBkYXRlIHtcXG5cXHRcXHRjb2xvcjogIzdiN2U4MTtcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xcblxcdH1cXG5cXG5cXHQmX19pdGVtLWxpY2Vuc2Uge1xcblxcdFxcdG1hcmdpbi1ib3R0b206IDEwcHg7XFxuXFx0XFx0Y29sb3I6ICM3YjdlODE7XFxuXFxuXFx0XFx0LmN4LXZ1aS1idXR0b24ge1xcblxcdFxcdFxcdG1hcmdpbi1sZWZ0OiAzcHg7XFxuXFx0XFx0fVxcblxcdH1cXG5cXG5cXHQmX19pdGVtLWRlc2Mge1xcblxcdFxcdGZsZXg6IDEgMSBhdXRvO1xcblxcblxcdFxcdGEge1xcblxcdFxcdFxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRcXHR9XFxuXFx0fVxcblxcblxcdCZfX2l0ZW0tYWN0aW9ucyB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0XFx0bWFyZ2luLXRvcDogMjBweDtcXG5cXG5cXHRcXHQmOmVtcHR5IHtcXG5cXHRcXHRcXHRkaXNwbGF5OiBub25lO1xcblxcdFxcdH1cXG5cXG5cXHRcXHQuY3gtdnVpLWJ1dHRvbiB7XFxuXFx0XFx0XFx0bWFyZ2luLXJpZ2h0OiAyMHB4O1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblxcblwiLFwiLmpmYi1hZGRvbnMge1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuLmpmYi1hZGRvbnM6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG4uamZiLWFkZG9ucyBhIHtcXG4gIGNvbG9yOiAjMDA3Y2JhO1xcbn1cXG4uamZiLWFkZG9uc19faGVhZGVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi5qZmItYWRkb25zX19saXN0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgZ2FwOiA0MHB4O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTE0MHB4KSB7XFxuICAuamZiLWFkZG9uc19fbGlzdCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICB9XFxufVxcbi5qZmItYWRkb25zX19pdGVtIHtcXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcyBlYXNlLW91dDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5qZmItYWRkb25zX19pdGVtOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDBweCA0cHggMjhweCByZ2JhKDE1LCAyMywgNDIsIDAuMSk7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLmFjdGl2YXRlZCAuamZiLWFkZG9uc19faXRlbS1pbmZvIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS51cGRhdGUtYXZhbGlhYmxlIC5qZmItYWRkb25zX19pdGVtLW5hbWUgLnZlcnNpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q2MzM2QztcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0udXBkYXRlLWF2YWxpYWJsZSAuamZiLWFkZG9uc19faXRlbS11cGRhdGUgLmxhdGVzdC12ZXJzaW9uIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NkI0NTA7XFxuICBwYWRkaW5nOiAycHggOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS1pbm5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS10aHVtYiAucHJvLWJhZGdlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTJweDtcXG4gIGxlZnQ6IDEycHg7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLXRodW1iIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0taW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcXG4gIGJvcmRlci13aWR0aDogMCAxcHggMXB4IDFweDtcXG4gIGJvcmRlci1jb2xvcjogI0RDRENERDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tbmFtZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS1uYW1lIC5sYWJlbCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLW5hbWUgLnZlcnNpb24ge1xcbiAgcGFkZGluZzogMXB4IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NkI0NTA7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tdXBkYXRlIHtcXG4gIGNvbG9yOiAjN2I3ZTgxO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tbGljZW5zZSB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgY29sb3I6ICM3YjdlODE7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLWxpY2Vuc2UgLmN4LXZ1aS1idXR0b24ge1xcbiAgbWFyZ2luLWxlZnQ6IDNweDtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tZGVzYyB7XFxuICBmbGV4OiAxIDEgYXV0bztcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tZGVzYyBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tYWN0aW9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLWFjdGlvbnM6ZW1wdHkge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tYWN0aW9ucyAuY3gtdnVpLWJ1dHRvbiB7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQ3hWdWlDb2xsYXBzZU1pbmkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVjOGJjMGI2JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0N4VnVpQ29sbGFwc2VNaW5pLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQ3hWdWlDb2xsYXBzZU1pbmkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvc2hpbi9kb21haW5zL3Byb2plY3RzL3RoZW1lLWNoZWNrL2Nyb2NvLWRldi93cC1jb250ZW50L3BsdWdpbnMvamV0LWZvcm0tYnVpbGRlci9hc3NldHMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNWM4YmMwYjYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNWM4YmMwYjYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNWM4YmMwYjYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0N4VnVpQ29sbGFwc2VNaW5pLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01YzhiYzBiNiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1YzhiYzBiNicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYWRtaW4vY29tcG9uZW50cy9jb2xsYXBzZS1taW5pL0N4VnVpQ29sbGFwc2VNaW5pLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQWRkb25zUGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmIyZjZjNzUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQWRkb25zUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0FkZG9uc1BhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0FkZG9uc1BhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvc2hpbi9kb21haW5zL3Byb2plY3RzL3RoZW1lLWNoZWNrL2Nyb2NvLWRldi93cC1jb250ZW50L3BsdWdpbnMvamV0LWZvcm0tYnVpbGRlci9hc3NldHMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNmIyZjZjNzUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNmIyZjZjNzUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNmIyZjZjNzUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0FkZG9uc1BhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZiMmY2Yzc1JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzZiMmY2Yzc1Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhZG1pbi9wYWdlcy9hZGRvbnMvQWRkb25zUGFnZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0FkZG9uSXRlbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDI5NDU4Y2QmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQWRkb25JdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQWRkb25JdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9BZGRvbkl0ZW0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvc2hpbi9kb21haW5zL3Byb2plY3RzL3RoZW1lLWNoZWNrL2Nyb2NvLWRldi93cC1jb250ZW50L3BsdWdpbnMvamV0LWZvcm0tYnVpbGRlci9hc3NldHMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNDI5NDU4Y2QnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDI5NDU4Y2QnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDI5NDU4Y2QnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0FkZG9uSXRlbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDI5NDU4Y2QmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDI5NDU4Y2QnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFkbWluL3BhZ2VzL2FkZG9ucy9jb21wb25lbnRzL0FkZG9uSXRlbS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1NldHRpbmdzUGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmRmYTEzZjUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2V0dGluZ3NQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU2V0dGluZ3NQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3NoaW4vZG9tYWlucy9wcm9qZWN0cy90aGVtZS1jaGVjay9jcm9jby1kZXYvd3AtY29udGVudC9wbHVnaW5zL2pldC1mb3JtLWJ1aWxkZXIvYXNzZXRzL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzJkZmExM2Y1JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzJkZmExM2Y1JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzJkZmExM2Y1JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TZXR0aW5nc1BhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJkZmExM2Y1JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzJkZmExM2Y1Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhZG1pbi9wYWdlcy9zZXR0aW5ncy9TZXR0aW5nc1BhZ2UudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9QYXlwYWxUYWIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJkM2Y0YjUzJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1BheXBhbFRhYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1BheXBhbFRhYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9zaGluL2RvbWFpbnMvcHJvamVjdHMvdGhlbWUtY2hlY2svY3JvY28tZGV2L3dwLWNvbnRlbnQvcGx1Z2lucy9qZXQtZm9ybS1idWlsZGVyL2Fzc2V0cy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyZDNmNGI1MycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyZDNmNGI1MycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyZDNmNGI1MycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUGF5cGFsVGFiLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yZDNmNGI1MyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyZDNmNGI1MycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYWRtaW4vcGFnZXMvc2V0dGluZ3MvZ2F0ZXdheXMvcGF5cGFsL1BheXBhbFRhYi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0FjdGl2ZUNhbXBhaWduVGFiLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NzQ0M2FiOCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BY3RpdmVDYW1wYWlnblRhYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0FjdGl2ZUNhbXBhaWduVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3NoaW4vZG9tYWlucy9wcm9qZWN0cy90aGVtZS1jaGVjay9jcm9jby1kZXYvd3AtY29udGVudC9wbHVnaW5zL2pldC1mb3JtLWJ1aWxkZXIvYXNzZXRzL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzQ3NDQzYWI4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzQ3NDQzYWI4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzQ3NDQzYWI4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BY3RpdmVDYW1wYWlnblRhYi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDc0NDNhYjgmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDc0NDNhYjgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFkbWluL3BhZ2VzL3NldHRpbmdzL3RhYnMvYWN0aXZlY2FtcGFpZ24vQWN0aXZlQ2FtcGFpZ25UYWIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9DYXB0Y2hhVGFiLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNDgxMDQwZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9DYXB0Y2hhVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQ2FwdGNoYVRhYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9zaGluL2RvbWFpbnMvcHJvamVjdHMvdGhlbWUtY2hlY2svY3JvY28tZGV2L3dwLWNvbnRlbnQvcGx1Z2lucy9qZXQtZm9ybS1idWlsZGVyL2Fzc2V0cy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxNDgxMDQwZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxNDgxMDQwZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxNDgxMDQwZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQ2FwdGNoYVRhYi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTQ4MTA0MGUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMTQ4MTA0MGUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFkbWluL3BhZ2VzL3NldHRpbmdzL3RhYnMvY2FwdGNoYS9DYXB0Y2hhVGFiLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vR2V0UmVzcG9uc2VUYWIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQ3YWFlOTE4JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0dldFJlc3BvbnNlVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vR2V0UmVzcG9uc2VUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvc2hpbi9kb21haW5zL3Byb2plY3RzL3RoZW1lLWNoZWNrL2Nyb2NvLWRldi93cC1jb250ZW50L3BsdWdpbnMvamV0LWZvcm0tYnVpbGRlci9hc3NldHMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnZDdhYWU5MTgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZDdhYWU5MTgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZDdhYWU5MTgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0dldFJlc3BvbnNlVGFiLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kN2FhZTkxOCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdkN2FhZTkxOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYWRtaW4vcGFnZXMvc2V0dGluZ3MvdGFicy9nZXRyZXNwb25zZS9HZXRSZXNwb25zZVRhYi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL01haWxDaGltcFRhYi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OGQzMzYxZmMmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTWFpbENoaW1wVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTWFpbENoaW1wVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3NoaW4vZG9tYWlucy9wcm9qZWN0cy90aGVtZS1jaGVjay9jcm9jby1kZXYvd3AtY29udGVudC9wbHVnaW5zL2pldC1mb3JtLWJ1aWxkZXIvYXNzZXRzL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzhkMzM2MWZjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzhkMzM2MWZjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzhkMzM2MWZjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9NYWlsQ2hpbXBUYWIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPThkMzM2MWZjJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzhkMzM2MWZjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhZG1pbi9wYWdlcy9zZXR0aW5ncy90YWJzL21haWxjaGltcC9NYWlsQ2hpbXBUYWIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9QYXltZW50c0dhdGV3YXlzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wODJlNmE1YSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9QYXltZW50c0dhdGV3YXlzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUGF5bWVudHNHYXRld2F5cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9zaGluL2RvbWFpbnMvcHJvamVjdHMvdGhlbWUtY2hlY2svY3JvY28tZGV2L3dwLWNvbnRlbnQvcGx1Z2lucy9qZXQtZm9ybS1idWlsZGVyL2Fzc2V0cy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwODJlNmE1YScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwODJlNmE1YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwODJlNmE1YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUGF5bWVudHNHYXRld2F5cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDgyZTZhNWEmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMDgyZTZhNWEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFkbWluL3BhZ2VzL3NldHRpbmdzL3RhYnMvcGF5bWVudHMtZ2F0ZXdheXMvUGF5bWVudHNHYXRld2F5cy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ3hWdWlDb2xsYXBzZU1pbmkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ3hWdWlDb2xsYXBzZU1pbmkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FkZG9uc1BhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRkb25zUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRkb25JdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FkZG9uSXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2V0dGluZ3NQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NldHRpbmdzUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGF5cGFsVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BheXBhbFRhYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWN0aXZlQ2FtcGFpZ25UYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWN0aXZlQ2FtcGFpZ25UYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NhcHRjaGFUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2FwdGNoYVRhYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR2V0UmVzcG9uc2VUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR2V0UmVzcG9uc2VUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01haWxDaGltcFRhYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NYWlsQ2hpbXBUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BheW1lbnRzR2F0ZXdheXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGF5bWVudHNHYXRld2F5cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgY2xhc3M6IHtcbiAgICAgICAgXCJjeC12dWktcGFuZWxcIjogX3ZtLndpdGhQYW5lbCxcbiAgICAgICAgXCJjeC12dWktY29sbGFwc2UtbWluaV9faXRlbVwiOiB0cnVlLFxuICAgICAgICBcImN4LXZ1aS1jb2xsYXBzZS1taW5pX19pdGVtLS1hY3RpdmVcIjogX3ZtLmlzQWN0aXZlXG4gICAgICB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImN4LXZ1aS1jb2xsYXBzZS1taW5pX19oZWFkZXJcIixcbiAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNvbGxhcHNlIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY3gtdnVpLWNvbGxhcHNlLW1pbmlfX2hlYWRlci1sYWJlbFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInN2Z1wiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjE0XCIsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTRcIixcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g6IFwiMCAwIDE0IDE0XCIsXG4gICAgICAgICAgICAgICAgICBmaWxsOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInBhdGhcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgZDpcbiAgICAgICAgICAgICAgICAgICAgICBcIk0xNCAxMy45OTk5TDE0IC0wLjAwMDEyMjA3TDAgLTAuMDAwMTIxNDU4TDYuMTE5NTllLTA3IDEzLjk5OTlMMTQgMTMuOTk5OVpcIixcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogXCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInBhdGhcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgZDpcbiAgICAgICAgICAgICAgICAgICAgICBcIk01LjMyOTExIDFMMTEgN0w1LjMyOTExIDEzTDQgMTEuNTkzOEw4LjM0MTc3IDdMNCAyLjQwNjI1TDUuMzI5MTEgMVpcIixcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogXCIjMDA3Q0JBXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiXFxuXFx0XFx0XFx0XCIgKyBfdm0uX3MoX3ZtLmxhYmVsKSArIFwiXFxuXFx0XFx0XCIpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uZGVzY1xuICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImN4LXZ1aS1jb2xsYXBzZS1taW5pX19oZWFkZXItZGVzY1wiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG5cXHRcXHRcXHRcIiArIF92bS5fcyhfdm0uZGVzYykgKyBcIlxcblxcdFxcdFwiKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5pc0FjdGl2ZSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpc0FjdGl2ZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJjeC12dWktY29sbGFwc2UtbWluaV9fY29udGVudFwiXG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3QoXCJkZWZhdWx0XCIsIFtfdm0uX3YoXCJDb2xsYXBzZSBjb250ZW50Li4uXCIpXSldLFxuICAgICAgICAyXG4gICAgICApXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImpmYi1hZGRvbnMtcGFnZSB3cmFwXCIsXG4gICAgICBjbGFzczogeyBcInByb2NjZXNpbmctc3RhdGVcIjogX3ZtLnByb2NjZXNpbmdTdGF0ZSB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcImgxXCIsIHsgc3RhdGljQ2xhc3M6IFwiY3MtdnVpLXRpdGxlXCIgfSwgW1xuICAgICAgICBfdm0uX3YoX3ZtLl9zKFwiSmV0Rm9ybXMgQWRkb25zXCIpKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJqZmItYWRkb25zLXBhZ2VfX2lubmVyIGN4LXZ1aS1wYW5lbFwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJqZmItYWRkb25zLXBhZ2VfX2hlYWRlclwiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImpmYi1hZGRvbnMtcGFnZV9faGVhZGVyLWNvbnRyb2xzXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJjeC12dWktYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJidXR0b24tc3R5bGVcIjogXCJhY2NlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCJtaW5pXCIsXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IF92bS5jaGVja1VwZGF0ZXNQcm9jZXNzZWRcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNoZWNrUGx1Z2luc1VwZGF0ZSB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBhdHRyczogeyBzbG90OiBcImxhYmVsXCIgfSwgc2xvdDogXCJsYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJzdmdcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b24taWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g6IFwiMCAwIDE0IDE0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBhdGhcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk0xMS43MDg1IDIuMjkxNzFDMTAuNTAwMSAxLjA4MzM3IDguODQxOCAwLjMzMzM3NCA3LjAwMDEzIDAuMzMzMzc0QzMuMzE2OCAwLjMzMzM3NCAwLjM0MTc5NyAzLjMxNjcxIDAuMzQxNzk3IDcuMDAwMDRDMC4zNDE3OTcgMTAuNjgzNCAzLjMxNjggMTMuNjY2NyA3LjAwMDEzIDEzLjY2NjdDMTAuMTA4NSAxMy42NjY3IDEyLjcwMDEgMTEuNTQxNyAxMy40NDE4IDguNjY2NzFIMTEuNzA4NUMxMS4wMjUxIDEwLjYwODQgOS4xNzUxMyAxMiA3LjAwMDEzIDEyQzQuMjQxOCAxMiAyLjAwMDEzIDkuNzU4MzcgMi4wMDAxMyA3LjAwMDA0QzIuMDAwMTMgNC4yNDE3MSA0LjI0MTggMi4wMDAwNCA3LjAwMDEzIDIuMDAwMDRDOC4zODM0NiAyLjAwMDA0IDkuNjE2OCAyLjU3NTA0IDEwLjUxNjggMy40ODMzN0w3LjgzMzQ2IDYuMTY2NzFIMTMuNjY2OFYwLjMzMzM3NEwxMS43MDg1IDIuMjkxNzFaXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogXCIjMDA3Q0JBXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiQ2hlY2sgRm9yIFVwZGF0ZXNcIildKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiY3gtdnVpLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICFfdm0uaXNMaWNlbnNlQWN0aXZhdGVkXG4gICAgICAgICAgICAgICAgICAgICAgPyBcImN4LXZ1aS1idXR0b24tLXN0eWxlLWFjY2VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcImN4LXZ1aS1idXR0b24tLXN0eWxlLWRhbmdlclwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc2l6ZTogXCJtaW5pXCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uc2hvd0xpY2Vuc2VQb3B1cCB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBhdHRyczogeyBzbG90OiBcImxhYmVsXCIgfSwgc2xvdDogXCJsYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJzdmdcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b24taWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g6IFwiMCAwIDE2IDE2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBhdGhcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk0xNS40OTg1IDBIMTIuNDg5N0MxMi40MTY2IDAgMTIuMzQ4NyAwLjAxNTY3MDkgMTIuMjg2IDAuMDQ3MDEyN0MxMi4yMzM4IDAuMDY3OTA3MyAxMi4xODY3IDAuMTA0NDczIDEyLjE0NSAwLjE1NjcwOUw1Ljc2NjkgNi40NzIwOUM1LjYyMDYzIDYuNDQwNzQgNS40NjM5MiA2LjQxNDYzIDUuMjk2NzcgNi4zOTM3M0M1LjEyOTYxIDYuMzcyODQgNC45Njc2OCA2LjM2MjM5IDQuODEwOTcgNi4zNjIzOUM0LjE2MzI0IDYuMzYyMzkgMy41NDY4NSA2LjQ4Nzc2IDIuOTYxOCA2LjczODQ5QzIuMzc2NzUgNi45Nzg3OCAxLjg1OTYxIDcuMzIzNTQgMS40MTAzOCA3Ljc3Mjc3QzAuOTYxMTQ5IDguMjIyIDAuNjExMTY2IDguNzM5MTQgMC4zNjA0MzEgOS4zMjQxOUMwLjEyMDE0NCA5LjkwOTI0IDAgMTAuNTMwOSAwIDExLjE4OUMwIDExLjgzNjggMC4xMjAxNDQgMTIuNDUzMiAwLjM2MDQzMSAxMy4wMzgyQzAuNjExMTY2IDEzLjYyMzIgMC45NjExNDkgMTQuMTQwNCAxLjQxMDM4IDE0LjU4OTZDMS44NTk2MSAxNS4wMzg5IDIuMzc2NzUgMTUuMzgzNiAyLjk2MTggMTUuNjIzOUMzLjU0Njg1IDE1Ljg3NDYgNC4xNjMyNCAxNiA0LjgxMDk3IDE2QzUuNDY5MTUgMTYgNi4wOTA3NiAxNS44NzQ2IDYuNjc1ODEgMTUuNjIzOUM3LjI2MDg2IDE1LjM4MzYgNy43NzggMTUuMDM4OSA4LjIyNzIzIDE0LjU4OTZDOC44MDE4MyAxNC4wMTUgOS4xOTg4MiAxMy4zNDY0IDkuNDE4MjIgMTIuNTgzN0M5LjY0ODA2IDExLjgyMTEgOS42ODQ2MiAxMS4wMzc1IDkuNTI3OTEgMTAuMjMzMUwxMC44OTEzIDguODY5NzRDMTAuOTMzMSA4LjgyNzk1IDEwLjk2NDQgOC43ODA5MyAxMC45ODUzIDguNzI4N0MxMS4wMTY3IDguNjY2MDEgMTEuMDMyMyA4LjU5ODExIDExLjAzMjMgOC41MjQ5OFY3LjAyMDU3SDEyLjUzNjdDMTIuNjkzNCA3LjAyMDU3IDEyLjgxMzYgNi45NzM1NiAxMi44OTcyIDYuODc5NTNDMTIuOTkxMiA2Ljc4NTUgMTMuMDM4MiA2LjY2NTM2IDEzLjAzODIgNi41MTkxVjUuMDE0NjlIMTQuNTQyNkMxNC42MTU3IDUuMDE0NjkgMTQuNjc4NCA1LjAwNDI0IDE0LjczMDcgNC45ODMzNUMxNC43OTMzIDQuOTUyMDEgMTQuODUwOCA0LjkxMDIyIDE0LjkwMyA0Ljg1Nzk4TDE1LjkwNiAzLjg1NTA0QzE1LjkyNjkgMy44MTMyNiAxNS45NDc4IDMuNzY2MjQgMTUuOTY4NyAzLjcxNDAxQzE1Ljk4OTYgMy42NTEzMiAxNiAzLjU4MzQyIDE2IDMuNTEwMjhWMC41MDE0NjlDMTYgMC4zNTUyMDcgMTUuOTUzIDAuMjM1MDY0IDE1Ljg1OSAwLjE0MTAzOEMxNS43NjQ5IDAuMDQ3MDEyNyAxNS42NDQ4IDAgMTUuNDk4NSAwWk00Ljk2NzY4IDEyLjc4NzVDNC43OTAwOCAxMi45NjUxIDQuNTk2OCAxMy4wOTU3IDQuMzg3ODYgMTMuMTc5MkM0LjE4OTM2IDEzLjI1MjQgMy45NjQ3NCAxMy4yODg5IDMuNzE0MDEgMTMuMjg4OUMzLjQ2MzI3IDEzLjI4ODkgMy4yMzM0MyAxMy4yNDE5IDMuMDI0NDkgMTMuMTQ3OUMyLjgyNTk5IDEzLjA1MzkgMi42Mzc5NCAxMi45MzM3IDIuNDYwMzMgMTIuNzg3NUMyLjI4MjczIDEyLjYwOTkgMi4xNTIxNCAxMi40MjE4IDIuMDY4NTYgMTIuMjIzM0MxLjk5NTQzIDEyLjAxNDQgMS45NTg4NiAxMS43ODQ1IDEuOTU4ODYgMTEuNTMzOEMxLjk1ODg2IDExLjI4MzEgMi4wMDU4OCAxMS4wNTg0IDIuMDk5OSAxMC44NTk5QzIuMTkzOTMgMTAuNjUxIDIuMzE0MDcgMTAuNDU3NyAyLjQ2MDMzIDEwLjI4MDFDMi43ODQyIDkuOTU2MjUgMy4xOTE2NCA5Ljc5NDMyIDMuNjgyNjYgOS43OTQzMkM0LjE4NDEzIDkuNzk0MzIgNC41OTY4IDkuOTU2MjUgNC45MjA2NyAxMC4yODAxQzUuMDk4MjcgMTAuNDU3NyA1LjIyMzY0IDEwLjY1MSA1LjI5Njc3IDEwLjg1OTlDNS4zODAzNSAxMS4wNTg0IDUuNDIyMTQgMTEuMjgzMSA1LjQyMjE0IDExLjUzMzhDNS40MjIxNCAxMS43ODQ1IDUuMzgwMzUgMTIuMDE0NCA1LjI5Njc3IDEyLjIyMzNDNS4yMjM2NCAxMi40MjE4IDUuMTEzOTQgMTIuNjA5OSA0Ljk2NzY4IDEyLjc4NzVaXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogXCIjRDNEM0QzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICFfdm0uaXNMaWNlbnNlQWN0aXZhdGVkXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW192bS5fdihcIkFjdGl2YXRlIExpY2Vuc2VcIildKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5pc0xpY2Vuc2VBY3RpdmF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbX3ZtLl92KFwiRGVhY3RpdmF0ZSBMaWNlbnNlXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAwICE9PSBPYmplY3Qua2V5cyhfdm0uaW5zdGFsbGVkQWRkb25MaXN0KS5sZW5ndGhcbiAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiamZiLWFkZG9uc1wiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiamZiLWFkZG9uc19fbGlzdFwiIH0sXG4gICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5pbnN0YWxsZWRBZGRvbkxpc3QsIGZ1bmN0aW9uKGFkZG9uRGF0YSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcIkFkZG9uSXRlbVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYWRkb24tZGF0YVwiOiBhZGRvbkRhdGEgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgMCAhPT0gT2JqZWN0LmtleXMoX3ZtLmF2YWlsYWJsZUFkZG9uTGlzdCkubGVuZ3RoXG4gICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImpmYi1hZGRvbnNcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImpmYi1hZGRvbnNfX2xpc3RcIiB9LFxuICAgICAgICAgICAgICAgIF92bS5fbChfdm0uYXZhaWxhYmxlQWRkb25MaXN0LCBmdW5jdGlvbihhZGRvbkRhdGEsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJBZGRvbkl0ZW1cIiwge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImFkZG9uLWRhdGFcIjogYWRkb25EYXRhIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImN4LXZ1aS1wb3B1cFwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiamZiLWFkZG9ucy1wYWdlX19saWNlbnNlLXBvcHVwXCIsXG4gICAgICAgICAgYXR0cnM6IHsgZm9vdGVyOiBmYWxzZSwgXCJib2R5LXdpZHRoXCI6IFwiNTQwcHhcIiB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLmxpY2Vuc2VQb3B1cFZpc2libGUsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5saWNlbnNlUG9wdXBWaXNpYmxlID0gJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJsaWNlbnNlUG9wdXBWaXNpYmxlXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImN4LXZ1aS1wb3B1cF9faGVhZGVyLXRpdGxlXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNsb3Q6IFwidGl0bGVcIiB9LFxuICAgICAgICAgICAgICBzbG90OiBcInRpdGxlXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICFfdm0uaXNMaWNlbnNlQWN0aXZhdGVkXG4gICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW192bS5fdihcIkFjdGl2YXRlIExpY2Vuc2VcIildKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5pc0xpY2Vuc2VBY3RpdmF0ZWRcbiAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbX3ZtLl92KFwiRGVhY3RpdmF0ZSBMaWNlbnNlXCIpXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiamZiLWFkZG9ucy1wYWdlX19saWNlbnNlLWZvcm1cIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJjb250ZW50XCIgfSxcbiAgICAgICAgICAgICAgc2xvdDogXCJjb250ZW50XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICFfdm0uaXNMaWNlbnNlQWN0aXZhdGVkXG4gICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJBY3RpdmF0ZSBsaWNlbnNlIGZvciBhdXRvbWF0aWMgdXBkYXRlcyBhbmQgYXdlc29tZSBzdXBwb3J0XCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uaXNMaWNlbnNlQWN0aXZhdGVkXG4gICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJCeSBkZWFjdGl2YXRpbmcgdGhlIGxpY2Vuc2UgeW91IHdpbGwgbm90IGJlIGFibGUgdG8gdXBkYXRlIHRoZSBhZGRvbnNcIlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiY3gtdnVpLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJqZmItYWRkb25zLXBhZ2VfX2xpY2Vuc2UtaW5wdXRcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgc2l6ZTogXCJmdWxsd2lkdGhcIixcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgIGF1dG9mb2N1czogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIFwicHJldmVudC13cmFwXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJKdXN0IHBhc3RlIGl0IGhlcmVcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubGljZW5zZUtleSxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmxpY2Vuc2VLZXkgPSAkJHZcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImxpY2Vuc2VLZXlcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiY3gtdnVpLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImpmYi1hZGRvbnMtcGFnZV9fbGljZW5zZS1hY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uLXN0eWxlXCI6IFwiYWNjZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IFwibWluaVwiLFxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBfdm0ubGljZW5zZVByb2NjZXNpbmdTdGF0ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ubGljZW5zZUFjdGlvbiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBhdHRyczogeyBzbG90OiBcImxhYmVsXCIgfSwgc2xvdDogXCJsYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgIV92bS5pc0xpY2Vuc2VBY3RpdmF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbX3ZtLl92KFwiQWN0aXZhdGVcIildKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5pc0xpY2Vuc2VBY3RpdmF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbX3ZtLl92KFwiRGVhY3RpdmF0ZVwiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiamZiLWFkZG9uc19faGVhZGVyXCIgfSwgW1xuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiY3gtdnVpLXN1YnRpdGxlXCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCJZb3VyIEluc3RhbGxlZCBBZGRvbnNcIilcbiAgICAgIF0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJqZmItYWRkb25zX19oZWFkZXJcIiB9LCBbXG4gICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJjeC12dWktc3VidGl0bGVcIiB9LCBbXG4gICAgICAgIF92bS5fdihcIkFsbCBBdmFpbGFibGUgQWRkb25zXCIpXG4gICAgICBdKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImpmYi1hZGRvbnNfX2l0ZW1cIixcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgIGFjdGl2YXRlZDogX3ZtLmFkZG9uRGF0YS5pc0FjdGl2YXRlZCxcbiAgICAgICAgXCJ1cGRhdGUtYXZhbGlhYmxlXCI6IF92bS51cGRhdGVBY3Rpb25BdmFsaWFibGVcbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiamZiLWFkZG9uc19faXRlbS1pbm5lclwiLFxuICAgICAgICAgIGNsYXNzOiB7IFwicHJvY2Nlc2luZy1zdGF0ZVwiOiBfdm0ucHJvY2Nlc2luZ1N0YXRlIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiamZiLWFkZG9uc19faXRlbS10aHVtYlwiIH0sIFtcbiAgICAgICAgICAgICFfdm0uYWRkb25EYXRhLmlzSW5zdGFsbGVkXG4gICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwcm8tYmFkZ2VcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJzdmdcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI0MFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94OiBcIjAgMCA0MCAyMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJyZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjQwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIyMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByeDogXCI0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IFwiI0VFN0IxNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInBhdGhcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk0xMC42MjUgMTAuODMwMVYxNEg5LjE0MjU4VjUuNDY4NzVIMTIuNDA2MkMxMy4zNTk0IDUuNDY4NzUgMTQuMTE1MiA1LjcxNjggMTQuNjczOCA2LjIxMjg5QzE1LjIzNjMgNi43MDg5OCAxNS41MTc2IDcuMzY1MjMgMTUuNTE3NiA4LjE4MTY0QzE1LjUxNzYgOS4wMTc1OCAxNS4yNDIyIDkuNjY3OTcgMTQuNjkxNCAxMC4xMzI4QzE0LjE0NDUgMTAuNTk3NyAxMy4zNzcgMTAuODMwMSAxMi4zODg3IDEwLjgzMDFIMTAuNjI1Wk0xMC42MjUgOS42NDA2MkgxMi40MDYyQzEyLjkzMzYgOS42NDA2MiAxMy4zMzU5IDkuNTE3NTggMTMuNjEzMyA5LjI3MTQ4QzEzLjg5MDYgOS4wMjE0OCAxNC4wMjkzIDguNjYyMTEgMTQuMDI5MyA4LjE5MzM2QzE0LjAyOTMgNy43MzI0MiAxMy44ODg3IDcuMzY1MjMgMTMuNjA3NCA3LjA5MThDMTMuMzI2MiA2LjgxNDQ1IDEyLjkzOTUgNi42NzE4OCAxMi40NDczIDYuNjY0MDZIMTAuNjI1VjkuNjQwNjJaTTE5Ljk1MzEgMTAuNzEyOUgxOC4zMDA4VjE0SDE2LjgxODRWNS40Njg3NUgxOS44MTg0QzIwLjgwMjcgNS40Njg3NSAyMS41NjI1IDUuNjg5NDUgMjIuMDk3NyA2LjEzMDg2QzIyLjYzMjggNi41NzIyNyAyMi45MDA0IDcuMjEwOTQgMjIuOTAwNCA4LjA0Njg4QzIyLjkwMDQgOC42MTcxOSAyMi43NjE3IDkuMDk1NyAyMi40ODQ0IDkuNDgyNDJDMjIuMjEwOSA5Ljg2NTIzIDIxLjgyODEgMTAuMTYwMiAyMS4zMzU5IDEwLjM2NzJMMjMuMjUyIDEzLjkyMzhWMTRIMjEuNjY0MUwxOS45NTMxIDEwLjcxMjlaTTE4LjMwMDggOS41MjM0NEgxOS44MjQyQzIwLjMyNDIgOS41MjM0NCAyMC43MTQ4IDkuMzk4NDQgMjAuOTk2MSA5LjE0ODQ0QzIxLjI3NzMgOC44OTQ1MyAyMS40MTggOC41NDg4MyAyMS40MTggOC4xMTEzM0MyMS40MTggNy42NTQzIDIxLjI4NzEgNy4zMDA3OCAyMS4wMjU0IDcuMDUwNzhDMjAuNzY3NiA2LjgwMDc4IDIwLjM4MDkgNi42NzE4OCAxOS44NjUyIDYuNjY0MDZIMTguMzAwOFY5LjUyMzQ0Wk0zMS4xMTUyIDkuOTU3MDNDMzEuMTE1MiAxMC43OTMgMzAuOTcwNyAxMS41MjczIDMwLjY4MTYgMTIuMTYwMkMzMC4zOTI2IDEyLjc4OTEgMjkuOTc4NSAxMy4yNzM0IDI5LjQzOTUgMTMuNjEzM0MyOC45MDQzIDEzLjk0OTIgMjguMjg3MSAxNC4xMTcyIDI3LjU4NzkgMTQuMTE3MkMyNi44OTY1IDE0LjExNzIgMjYuMjc5MyAxMy45NDkyIDI1LjczNjMgMTMuNjEzM0MyNS4xOTczIDEzLjI3MzQgMjQuNzc5MyAxMi43OTEgMjQuNDgyNCAxMi4xNjZDMjQuMTg5NSAxMS41NDEgMjQuMDQxIDEwLjgyMDMgMjQuMDM3MSAxMC4wMDM5VjkuNTIzNDRDMjQuMDM3MSA4LjY5MTQxIDI0LjE4MzYgNy45NTcwMyAyNC40NzY2IDcuMzIwMzFDMjQuNzczNCA2LjY4MzU5IDI1LjE4OTUgNi4xOTcyNyAyNS43MjQ2IDUuODYxMzNDMjYuMjYzNyA1LjUyMTQ4IDI2Ljg4MDkgNS4zNTE1NiAyNy41NzYyIDUuMzUxNTZDMjguMjcxNSA1LjM1MTU2IDI4Ljg4NjcgNS41MTk1MyAyOS40MjE5IDUuODU1NDdDMjkuOTYwOSA2LjE4NzUgMzAuMzc3IDYuNjY3OTcgMzAuNjY5OSA3LjI5Njg4QzMwLjk2MjkgNy45MjE4OCAzMS4xMTEzIDguNjUwMzkgMzEuMTE1MiA5LjQ4MjQyVjkuOTU3MDNaTTI5LjYzMjggOS41MTE3MkMyOS42MzI4IDguNTY2NDEgMjkuNDUzMSA3Ljg0MTggMjkuMDkzOCA3LjMzNzg5QzI4LjczODMgNi44MzM5OCAyOC4yMzI0IDYuNTgyMDMgMjcuNTc2MiA2LjU4MjAzQzI2LjkzNTUgNi41ODIwMyAyNi40MzM2IDYuODMzOTggMjYuMDcwMyA3LjMzNzg5QzI1LjcxMDkgNy44Mzc4OSAyNS41MjczIDguNTQ2ODggMjUuNTE5NSA5LjQ2NDg0VjkuOTU3MDNDMjUuNTE5NSAxMC44OTQ1IDI1LjcwMTIgMTEuNjE5MSAyNi4wNjQ1IDEyLjEzMDlDMjYuNDMxNiAxMi42NDI2IDI2LjkzOTUgMTIuODk4NCAyNy41ODc5IDEyLjg5ODRDMjguMjQ0MSAxMi44OTg0IDI4Ljc0OCAxMi42NDg0IDI5LjA5OTYgMTIuMTQ4NEMyOS40NTUxIDExLjY0ODQgMjkuNjMyOCAxMC45MTggMjkuNjMyOCA5Ljk1NzAzVjkuNTExNzJaXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IFwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBfdm0uYWRkb25EYXRhLnRodW1iLCBhbHQ6IFwiXCIgfSB9KVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJqZmItYWRkb25zX19pdGVtLWluZm9cIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImpmYi1hZGRvbnNfX2l0ZW0tbmFtZVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uYWRkb25EYXRhLm5hbWUpKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidmVyc2lvblwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5hZGRvbkRhdGEuY3VycmVudFZlcnNpb24pKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJqZmItYWRkb25zX19pdGVtLXVwZGF0ZVwiIH0sIFtcbiAgICAgICAgICAgICAgIV92bS51cGRhdGVBY3Rpb25BdmFsaWFibGVcbiAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtfdm0uX3YoXCJZb3VyIHBsdWdpbiBpcyB1cCB0byBkYXRlXCIpXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0udXBkYXRlQWN0aW9uQXZhbGlhYmxlXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcblxcdFxcdFxcdFxcdFxcdFZlcnNpb24gXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImxhdGVzdC12ZXJzaW9uXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uYWRkb25EYXRhLnZlcnNpb24pKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBhdmFpbGFibGVcXG5cXHRcXHRcXHRcXHRcXHRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgIV92bS5hY3RpdmF0ZUxpY2VuY2VBY3Rpb25BdmFsaWFibGVcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjeC12dWktYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b24tc3R5bGVcIjogXCJsaW5rLWFjY2VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBcImxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogX3ZtLnVwZGF0ZVBsdWdpblByb2Nlc3NlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0udXBkYXRlUGx1Z2luIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBzbG90OiBcImxhYmVsXCIgfSwgc2xvdDogXCJsYWJlbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcInNwYW5cIiwgW192bS5fdihcIlVwZGF0ZSBOb3dcIildKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5hY3RpdmF0ZUxpY2VuY2VBY3Rpb25BdmFsaWFibGVcbiAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImpmYi1hZGRvbnNfX2l0ZW0tbGljZW5zZVwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiTGljZW5zZSBub3QgYWN0aXZhdGVkXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiY3gtdnVpLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYnV0dG9uLXN0eWxlXCI6IFwibGluay1hY2NlbnRcIiwgc2l6ZTogXCJsaW5rXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uYWN0aXZhdGVMaWNlbnNlIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBzbG90OiBcImxhYmVsXCIgfSwgc2xvdDogXCJsYWJlbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcInNwYW5cIiwgW192bS5fdihcIkFjdGl2YXRlIE5vd1wiKV0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJqZmItYWRkb25zX19pdGVtLWRlc2NcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLmFkZG9uRGF0YS5kZXNjKSB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGhyZWY6IF92bS5hZGRvbkRhdGEuZGVtbywgdGFyZ2V0OiBcIl9ibGFua1wiIH0gfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiTGVhcm4gTW9yZVwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiamZiLWFkZG9uc19faXRlbS1hY3Rpb25zXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS5pbnN0YWxsQWN0aW9uQXZhbGlhYmxlXG4gICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiY3gtdnVpLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uLXN0eWxlXCI6IFwibGluay1hY2NlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCJsaW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IF92bS5hY3Rpb25QbHVnaW5Qcm9jZXNzZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmluc3RhbGxQbHVnaW4gfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNsb3Q6IFwibGFiZWxcIiB9LCBzbG90OiBcImxhYmVsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwic3BhblwiLCBbX3ZtLl92KFwiSW5zdGFsbCBBZGRvblwiKV0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS5hY3RpdmF0ZUFjdGlvbkF2YWxpYWJsZVxuICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImN4LXZ1aS1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvbi1zdHlsZVwiOiBcImxpbmstYWNjZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IFwibGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBfdm0uYWN0aW9uUGx1Z2luUHJvY2Vzc2VkXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5hY3RpdmF0ZVBsdWdpbiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgc2xvdDogXCJsYWJlbFwiIH0sIHNsb3Q6IFwibGFiZWxcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJBY3RpdmF0ZSBBZGRvblwiKV0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS5kZWFjdGl2YXRlQWN0aW9uQXZhbGlhYmxlXG4gICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiY3gtdnVpLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uLXN0eWxlXCI6IFwibGluay1lcnJvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBcImxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogX3ZtLmFjdGlvblBsdWdpblByb2Nlc3NlZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uZGVhY3RpdmF0ZVBsdWdpbiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgc2xvdDogXCJsYWJlbFwiIH0sIHNsb3Q6IFwibGFiZWxcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJEZWFjdGl2YXRlIEFkZG9uXCIpXSldXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdXG4gICAgICApXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiZnVuY3Rpb24gb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBleGNsdWRlKSB7XG4gIHZhciB0YXJnZXQgPSB7fVxuICBmb3IgKHZhciBrIGluIG9iailcbiAgICBpZiAoXG4gICAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrKSAmJlxuICAgICAgZXhjbHVkZS5pbmRleE9mKGspID09PSAtMVxuICAgIClcbiAgICAgIHRhcmdldFtrXSA9IG9ialtrXVxuICByZXR1cm4gdGFyZ2V0XG59XG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiamV0LWZiLXNldHRpbmdzLXBhZ2Ugd3JhcFwiIH0sIFtcbiAgICBfYyhcImgxXCIsIHsgc3RhdGljQ2xhc3M6IFwiY3MtdnVpLXRpdGxlXCIgfSwgW1xuICAgICAgX3ZtLl92KF92bS5fcyhcIkpldEZvcm1zIFNldHRpbmdzXCIpKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJjeC12dWktcGFuZWxcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImN4LXZ1aS10YWJzXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgXCJpbi1wYW5lbFwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5hY3RpdmVUYWJTbHVnLFxuICAgICAgICAgICAgICBsYXlvdXQ6IFwidmVydGljYWxcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgX3ZtLl9sKF92bS50YWJzLCBmdW5jdGlvbihyZWYsIGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgZGlzcGxheUJ1dHRvbiA9IHJlZi5kaXNwbGF5QnV0dG9uXG4gICAgICAgICAgICBpZiAoZGlzcGxheUJ1dHRvbiA9PT0gdm9pZCAwKSBkaXNwbGF5QnV0dG9uID0gdHJ1ZVxuICAgICAgICAgICAgdmFyIHJlc3QgPSBvYmplY3RXaXRob3V0UHJvcGVydGllcyhyZWYsIFtcImRpc3BsYXlCdXR0b25cIl0pXG4gICAgICAgICAgICB2YXIgdGFiID0gcmVzdFxuICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICBcImN4LXZ1aS10YWJzLXBhbmVsXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IHRhYi5jb21wb25lbnQubmFtZSxcbiAgICAgICAgICAgICAgICBhdHRyczogeyBuYW1lOiB0YWIuY29tcG9uZW50Lm5hbWUsIGxhYmVsOiB0YWIudGl0bGUgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImtlZXAtYWxpdmVcIixcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2ModGFiLmNvbXBvbmVudCwge1xuICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJ0YWJDb21wb25lbnRzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmVmSW5Gb3I6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgdGFnOiBcImNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGluY29taW5nOiBfdm0uZ2V0SW5jb21pbmcodGFiLmNvbXBvbmVudC5uYW1lKSB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBkaXNwbGF5QnV0dG9uXG4gICAgICAgICAgICAgICAgICA/IF9jKFwiY3gtdnVpLWJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uLXN0eWxlXCI6IFwiYWNjZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBfdm0ubG9hZGluZ1RhYlt0YWIuY29tcG9uZW50Lm5hbWVdXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uU2F2ZVRhYihpbmRleCwgdGFiLmNvbXBvbmVudC5uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJTYXZlXCIpXSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm94eTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJzZWN0aW9uXCIsXG4gICAgW1xuICAgICAgX2MoXCJjeC12dWktaW5wdXRcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGxhYmVsOiBfdm0ubGFiZWwuY2xpZW50X2lkLFxuICAgICAgICAgIFwid3JhcHBlci1jc3NcIjogW1wiZXF1YWx3aWR0aFwiXSxcbiAgICAgICAgICBzaXplOiBcImZ1bGx3aWR0aFwiXG4gICAgICAgIH0sXG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgdmFsdWU6IF92bS5zdG9yYWdlLmNsaWVudF9pZCxcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICBfdm0uJHNldChfdm0uc3RvcmFnZSwgXCJjbGllbnRfaWRcIiwgJCR2KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJzdG9yYWdlLmNsaWVudF9pZFwiXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiY3gtdnVpLWlucHV0XCIsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBsYWJlbDogX3ZtLmxhYmVsLnNlY3JldCxcbiAgICAgICAgICBcIndyYXBwZXItY3NzXCI6IFtcImVxdWFsd2lkdGhcIl0sXG4gICAgICAgICAgc2l6ZTogXCJmdWxsd2lkdGhcIlxuICAgICAgICB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0uc3RvcmFnZS5zZWNyZXQsXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnN0b3JhZ2UsIFwic2VjcmV0XCIsICQkdilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwic3RvcmFnZS5zZWNyZXRcIlxuICAgICAgICB9XG4gICAgICB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFwiY3gtdnVpLWlucHV0XCIsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBsYWJlbDogX3ZtLmxhYmVsLmFwaV9rZXksXG4gICAgICAgICAgXCJ3cmFwcGVyLWNzc1wiOiBbXCJlcXVhbHdpZHRoXCJdLFxuICAgICAgICAgIHNpemU6IFwiZnVsbHdpZHRoXCJcbiAgICAgICAgfSxcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICB2YWx1ZTogX3ZtLmFwaV9rZXksXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLmFwaV9rZXkgPSAkJHZcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwiYXBpX2tleVwiXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiY3gtdnVpLWlucHV0XCIsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBsYWJlbDogX3ZtLmxhYmVsLmFwaV91cmwsXG4gICAgICAgICAgXCJ3cmFwcGVyLWNzc1wiOiBbXCJlcXVhbHdpZHRoXCJdLFxuICAgICAgICAgIHNpemU6IFwiZnVsbHdpZHRoXCJcbiAgICAgICAgfSxcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICB2YWx1ZTogX3ZtLmFwaV91cmwsXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLmFwaV91cmwgPSAkJHZcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwiYXBpX3VybFwiXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImZiLWRlc2NyaXB0aW9uXCIgfSwgW1xuICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5oZWxwLmFwaVByZWYpICsgXCIgXCIpLFxuICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBfdm0uaGVscC5hcGlMaW5rLCB0YXJnZXQ6IFwiX2JsYW5rXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uaGVscC5hcGlMaW5rTGFiZWwpKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcImN4LXZ1aS1pbnB1dFwiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgbGFiZWw6IF92bS5sYWJlbC5rZXksXG4gICAgICAgICAgXCJ3cmFwcGVyLWNzc1wiOiBbXCJlcXVhbHdpZHRoXCJdLFxuICAgICAgICAgIHNpemU6IFwiZnVsbHdpZHRoXCJcbiAgICAgICAgfSxcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICB2YWx1ZTogX3ZtLmtleSxcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICBfdm0ua2V5ID0gJCR2XG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcImtleVwiXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiY3gtdnVpLWlucHV0XCIsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBsYWJlbDogX3ZtLmxhYmVsLnNlY3JldCxcbiAgICAgICAgICBcIndyYXBwZXItY3NzXCI6IFtcImVxdWFsd2lkdGhcIl0sXG4gICAgICAgICAgc2l6ZTogXCJmdWxsd2lkdGhcIlxuICAgICAgICB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0uc2VjcmV0LFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgIF92bS5zZWNyZXQgPSAkJHZcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwic2VjcmV0XCJcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmItZGVzY3JpcHRpb25cIiB9LCBbXG4gICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmhlbHAuYXBpUHJlZikgKyBcIiBcIiksXG4gICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IF92bS5oZWxwLmFwaUxpbmssIHRhcmdldDogXCJfYmxhbmtcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5oZWxwLmFwaUxpbmtMYWJlbCkpXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImN4LXZ1aS1pbnB1dFwiLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIGxhYmVsOiBfdm0ubGFiZWwuYXBpX2tleSxcbiAgICAgIFwid3JhcHBlci1jc3NcIjogW1wiZXF1YWx3aWR0aFwiXSxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBfdm0uaGVscC5hcGlQcmVmICtcbiAgICAgICAgJyA8YSBocmVmPVwiJyArXG4gICAgICAgIF92bS5oZWxwLmFwaUxpbmsgK1xuICAgICAgICAnXCIgdGFyZ2V0PVwiX2JsYW5rXCI+JyArXG4gICAgICAgIF92bS5oZWxwLmFwaUxpbmtMYWJlbCArXG4gICAgICAgIFwiPC9hPlwiLFxuICAgICAgc2l6ZTogXCJmdWxsd2lkdGhcIlxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiBfdm0uYXBpX2tleSxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgX3ZtLmFwaV9rZXkgPSAkJHZcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcImFwaV9rZXlcIlxuICAgIH1cbiAgfSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiY3gtdnVpLWlucHV0XCIsIHtcbiAgICBhdHRyczoge1xuICAgICAgbGFiZWw6IF92bS5sYWJlbC5hcGlfa2V5LFxuICAgICAgXCJ3cmFwcGVyLWNzc1wiOiBbXCJlcXVhbHdpZHRoXCJdLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIF92bS5oZWxwLmFwaVByZWYgK1xuICAgICAgICAnIDxhIGhyZWY9XCInICtcbiAgICAgICAgX3ZtLmhlbHAuYXBpTGluayArXG4gICAgICAgICdcIiB0YXJnZXQ9XCJfYmxhbmtcIj4nICtcbiAgICAgICAgX3ZtLmhlbHAuYXBpTGlua0xhYmVsICtcbiAgICAgICAgXCI8L2E+XCIsXG4gICAgICBzaXplOiBcImZ1bGx3aWR0aFwiXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IF92bS5hcGlfa2V5LFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uYXBpX2tleSA9ICQkdlxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwiYXBpX2tleVwiXG4gICAgfVxuICB9KVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJzZWN0aW9uXCIsXG4gICAgW1xuICAgICAgX2MoXCJjeC12dWktc3dpdGNoZXJcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIG5hbWU6IFwidXNlX2dhdGV3YXlzXCIsXG4gICAgICAgICAgXCJ3cmFwcGVyLWNzc1wiOiBbXCJlcXVhbHdpZHRoXCJdLFxuICAgICAgICAgIGxhYmVsOiBfdm0ubGFiZWwudXNlX2dhdGV3YXlzLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBfdm0uaGVscC51c2VfZ2F0ZXdheXMsXG4gICAgICAgICAgdmFsdWU6IF92bS5zdG9yYWdlLnVzZV9nYXRld2F5c1xuICAgICAgICB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdm0uY2hhbmdlVmFsKFwidXNlX2dhdGV3YXlzXCIsICRldmVudClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5zdG9yYWdlLnVzZV9nYXRld2F5c1xuICAgICAgICA/IF9jKFwiY3gtdnVpLXN3aXRjaGVyXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIG5hbWU6IFwiZW5hYmxlX3Rlc3RfbW9kZVwiLFxuICAgICAgICAgICAgICBcIndyYXBwZXItY3NzXCI6IFtcImVxdWFsd2lkdGhcIl0sXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBfdm0uaGVscC5lbmFibGVfdGVzdF9tb2RlLFxuICAgICAgICAgICAgICBsYWJlbDogX3ZtLmxhYmVsLmVuYWJsZV90ZXN0X21vZGUsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uc3RvcmFnZS5lbmFibGVfdGVzdF9tb2RlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2hhbmdlVmFsKFwiZW5hYmxlX3Rlc3RfbW9kZVwiLCAkZXZlbnQpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5zdG9yYWdlLnVzZV9nYXRld2F5c1xuICAgICAgICA/IFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImN4LXZ1aS1pbm5lci1wYW5lbFwiIH0sXG4gICAgICAgICAgICAgIF92bS5fbChfdm0uZ2F0ZXdheXMsIGZ1bmN0aW9uKHRhYiwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICBcIkN4VnVpQ29sbGFwc2VNaW5pXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogdGFiLmNvbXBvbmVudC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIFwid2l0aC1wYW5lbFwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGRlc2M6IHRhYi5kZXNjIHx8IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHRhYi50aXRsZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImtlZXAtYWxpdmVcIixcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyh0YWIuY29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJnYXRld2F5c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZWZJbkZvcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiBcImNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluY29taW5nOiBfdm0uZ2V0SW5jb21pbmcodGFiLmNvbXBvbmVudC5uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImN4LXZ1aS1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvbi1zdHlsZVwiOiBcImFjY2VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBfdm0ubG9hZGluZ0dhdGV3YXlzW3RhYi5jb21wb25lbnQubmFtZV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vblNhdmVHYXRld2F5KGluZGV4LCB0YWIuY29tcG9uZW50Lm5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBzbG90OiBcImxhYmVsXCIgfSwgc2xvdDogXCJsYWJlbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJTYXZlXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgXVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciwgLyogc2VydmVyIG9ubHkgKi9cbiAgc2hhZG93TW9kZSAvKiB2dWUtY2xpIG9ubHkgKi9cbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgKG9wdGlvbnMuZnVuY3Rpb25hbCA/IHRoaXMucGFyZW50IDogdGhpcykuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdFxuICAgICAgICApXG4gICAgICB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9uYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BZGRvbnNQYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMWJjNzNkZTFcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BZGRvbnNQYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FkZG9uc1BhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FkZG9uSXRlbS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjVmMjc4Mjg2XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRkb25JdGVtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FkZG9uSXRlbS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiAgTW9kaWZpZWQgYnkgRXZhbiBZb3UgQHl5eDk5MDgwM1xuKi9cblxuaW1wb3J0IGxpc3RUb1N0eWxlcyBmcm9tICcuL2xpc3RUb1N0eWxlcydcblxudmFyIGhhc0RvY3VtZW50ID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuXG5pZiAodHlwZW9mIERFQlVHICE9PSAndW5kZWZpbmVkJyAmJiBERUJVRykge1xuICBpZiAoIWhhc0RvY3VtZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICd2dWUtc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQuICcgK1xuICAgIFwiVXNlIHsgdGFyZ2V0OiAnbm9kZScgfSBpbiB5b3VyIFdlYnBhY2sgY29uZmlnIHRvIGluZGljYXRlIGEgc2VydmVyLXJlbmRlcmluZyBlbnZpcm9ubWVudC5cIlxuICApIH1cbn1cblxuLypcbnR5cGUgU3R5bGVPYmplY3QgPSB7XG4gIGlkOiBudW1iZXI7XG4gIHBhcnRzOiBBcnJheTxTdHlsZU9iamVjdFBhcnQ+XG59XG5cbnR5cGUgU3R5bGVPYmplY3RQYXJ0ID0ge1xuICBjc3M6IHN0cmluZztcbiAgbWVkaWE6IHN0cmluZztcbiAgc291cmNlTWFwOiA/c3RyaW5nXG59XG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7LypcbiAgW2lkOiBudW1iZXJdOiB7XG4gICAgaWQ6IG51bWJlcixcbiAgICByZWZzOiBudW1iZXIsXG4gICAgcGFydHM6IEFycmF5PChvYmo/OiBTdHlsZU9iamVjdFBhcnQpID0+IHZvaWQ+XG4gIH1cbiovfVxuXG52YXIgaGVhZCA9IGhhc0RvY3VtZW50ICYmIChkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0pXG52YXIgc2luZ2xldG9uRWxlbWVudCA9IG51bGxcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMFxudmFyIGlzUHJvZHVjdGlvbiA9IGZhbHNlXG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHt9XG52YXIgb3B0aW9ucyA9IG51bGxcbnZhciBzc3JJZEtleSA9ICdkYXRhLXZ1ZS1zc3ItaWQnXG5cbi8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxudmFyIGlzT2xkSUUgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAvbXNpZSBbNi05XVxcYi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFN0eWxlc0NsaWVudCAocGFyZW50SWQsIGxpc3QsIF9pc1Byb2R1Y3Rpb24sIF9vcHRpb25zKSB7XG4gIGlzUHJvZHVjdGlvbiA9IF9pc1Byb2R1Y3Rpb25cblxuICBvcHRpb25zID0gX29wdGlvbnMgfHwge31cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBsaXN0KVxuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuICAgIHZhciBtYXlSZW1vdmUgPSBbXVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICAgIGRvbVN0eWxlLnJlZnMtLVxuICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpXG4gICAgfVxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIG5ld0xpc3QpXG4gICAgICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlcyA9IFtdXG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV1cbiAgICAgIGlmIChkb21TdHlsZS5yZWZzID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXSgpXG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzIC8qIEFycmF5PFN0eWxlT2JqZWN0PiAqLykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgIGRvbVN0eWxlLnJlZnMrK1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKVxuICAgICAgfVxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBpZiAoZG9tU3R5bGUucGFydHMubGVuZ3RoID4gaXRlbS5wYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMubGVuZ3RoID0gaXRlbS5wYXJ0cy5sZW5ndGhcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW11cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7IGlkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHMgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKCkge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICBzdHlsZUVsZW1lbnQudHlwZSA9ICd0ZXh0L2NzcydcbiAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpXG4gIHJldHVybiBzdHlsZUVsZW1lbnRcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgdmFyIHVwZGF0ZSwgcmVtb3ZlXG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdHlsZVsnICsgc3NySWRLZXkgKyAnfj1cIicgKyBvYmouaWQgKyAnXCJdJylcblxuICBpZiAoc3R5bGVFbGVtZW50KSB7XG4gICAgaWYgKGlzUHJvZHVjdGlvbikge1xuICAgICAgLy8gaGFzIFNTUiBzdHlsZXMgYW5kIGluIHByb2R1Y3Rpb24gbW9kZS5cbiAgICAgIC8vIHNpbXBseSBkbyBub3RoaW5nLlxuICAgICAgcmV0dXJuIG5vb3BcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaGFzIFNTUiBzdHlsZXMgYnV0IGluIGRldiBtb2RlLlxuICAgICAgLy8gZm9yIHNvbWUgcmVhc29uIENocm9tZSBjYW4ndCBoYW5kbGUgc291cmNlIG1hcCBpbiBzZXJ2ZXItcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlIHRhZ3MgLSBzb3VyY2UgbWFwcyBpbiA8c3R5bGU+IG9ubHkgd29ya3MgaWYgdGhlIHN0eWxlIHRhZyBpc1xuICAgICAgLy8gY3JlYXRlZCBhbmQgaW5zZXJ0ZWQgZHluYW1pY2FsbHkuIFNvIHdlIHJlbW92ZSB0aGUgc2VydmVyIHJlbmRlcmVkXG4gICAgICAvLyBzdHlsZXMgYW5kIGluamVjdCBuZXcgb25lcy5cbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICBpZiAoaXNPbGRJRSkge1xuICAgIC8vIHVzZSBzaW5nbGV0b24gbW9kZSBmb3IgSUU5LlxuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrXG4gICAgc3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpKVxuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKVxuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpXG4gIH0gZWxzZSB7XG4gICAgLy8gdXNlIG11bHRpLXN0eWxlLXRhZyBtb2RlIGluIGFsbCBvdGhlciBjYXNlc1xuICAgIHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpXG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudClcbiAgICByZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKG9iailcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuICAgICAgICAgIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG4gICAgICAgICAgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpXG4gICAgfVxuICB9XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXVxuXG4gIHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJylcbiAgfVxufSkoKVxuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzXG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpXG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpXG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2Rlc1xuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSlcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlRWxlbWVudCwgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzXG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcFxuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpXG4gIH1cbiAgaWYgKG9wdGlvbnMuc3NySWQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKHNzcklkS2V5LCBvYmouaWQpXG4gIH1cblxuICBpZiAoc291cmNlTWFwKSB7XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kZXZ0b29scy9kb2NzL2phdmFzY3JpcHQtZGVidWdnaW5nXG4gICAgLy8gdGhpcyBtYWtlcyBzb3VyY2UgbWFwcyBpbnNpZGUgc3R5bGUgdGFncyB3b3JrIHByb3Blcmx5IGluIENocm9tZVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZVVSTD0nICsgc291cmNlTWFwLnNvdXJjZXNbMF0gKyAnICovJ1xuICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LCcgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgJyAqLydcbiAgfVxuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3NcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZClcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpXG4gIH1cbn1cbiIsIi8qKlxuICogVHJhbnNsYXRlcyB0aGUgbGlzdCBmb3JtYXQgcHJvZHVjZWQgYnkgY3NzLWxvYWRlciBpbnRvIHNvbWV0aGluZ1xuICogZWFzaWVyIHRvIG1hbmlwdWxhdGUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAocGFyZW50SWQsIGxpc3QpIHtcbiAgdmFyIHN0eWxlcyA9IFtdXG4gIHZhciBuZXdTdHlsZXMgPSB7fVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV1cbiAgICB2YXIgaWQgPSBpdGVtWzBdXG4gICAgdmFyIGNzcyA9IGl0ZW1bMV1cbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdXG4gICAgdmFyIHNvdXJjZU1hcCA9IGl0ZW1bM11cbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGlkOiBwYXJlbnRJZCArICc6JyArIGksXG4gICAgICBjc3M6IGNzcyxcbiAgICAgIG1lZGlhOiBtZWRpYSxcbiAgICAgIHNvdXJjZU1hcDogc291cmNlTWFwXG4gICAgfVxuICAgIGlmICghbmV3U3R5bGVzW2lkXSkge1xuICAgICAgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHsgaWQ6IGlkLCBwYXJ0czogW3BhcnRdIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KVxuICAgIH1cbiAgfVxuICByZXR1cm4gc3R5bGVzXG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFNldHRpbmdzUGFnZSBmcm9tIFwiLi9wYWdlcy9zZXR0aW5ncy9TZXR0aW5nc1BhZ2VcIjtcbmltcG9ydCBBZGRvbnNQYWdlIGZyb20gXCIuL3BhZ2VzL2FkZG9ucy9BZGRvbnNQYWdlXCI7XG5cbiggKCkgPT4ge1xuXHRjb25zdCBwcmVmID0gJ2pldC1mb3JtLWJ1aWxkZXJfcGFnZV8nO1xuXG5cdGNvbnN0IHsgYXBwbHlGaWx0ZXJzIH0gPSB3cC5ob29rcztcblxuXHRjb25zdCBwYWdlcyA9IGFwcGx5RmlsdGVycyggJ2pldC5mYi5yZWdpc3Rlci5hZG1pbi1wYWdlcycsIFtcblx0XHRTZXR0aW5nc1BhZ2UsXG5cdFx0QWRkb25zUGFnZVxuXHRdIClcblxuXHRwYWdlcy5mb3JFYWNoKCBQYWdlQ29tcG9uZW50ID0+IHtcblx0XHRjb25zdCBwYWdlTmFtZSA9ICggcHJlZiArIFBhZ2VDb21wb25lbnQubmFtZSApO1xuXG5cdFx0aWYgKCB3aW5kb3cucGFnZW5vdyA9PT0gcGFnZU5hbWUgKSB7XG5cdFx0XHRuZXcgVnVlKCB7XG5cdFx0XHRcdGVsOiAnIycgKyBwcmVmICsgUGFnZUNvbXBvbmVudC5uYW1lLFxuXHRcdFx0XHRyZW5kZXI6IGggPT4gaCggUGFnZUNvbXBvbmVudCApXG5cdFx0XHR9ICk7XG5cdFx0fVxuXHR9IClcblxufSkoKVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFiQTtBQWtCQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQTVCQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM4RUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFiQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakNBO0FBbUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBWkE7QUFDQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQXREQTtBQXdEQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBeENBO0FBMENBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUEvS0E7QUE3REE7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQW5DQTtBQXNDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFSQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUE3REE7QUErREE7QUEvRkE7QUFuREE7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBTEE7QUFoQkE7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBREE7QUFRQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBO0FBbkJBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBUkE7QUFuQkE7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFSQTtBQW5CQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTtBQVBBO0FBakJBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBUEE7QUFqQkE7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMrQkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFEQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBZkE7QUE5QkE7QUFDQTtBOzs7Ozs7Ozs7Ozs7O0FDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFNQTtBQUNBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQTNEQTtBQURBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7OztBQ1BBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7OztBQ1BBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUVBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUVBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUtBO0FBTkE7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7QUNsRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWtCQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBa0JBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFrQkE7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWtCQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBa0JBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFrQkE7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWtCQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBa0JBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFrQkE7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWtCQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBOzs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBOzs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7OztBOzs7Ozs7Ozs7Ozs7Ozs7OztBOzs7Ozs7Ozs7Ozs7Ozs7OztBOzs7Ozs7Ozs7Ozs7Ozs7OztBOzs7Ozs7Ozs7Ozs7Ozs7OztBOzs7Ozs7Ozs7Ozs7Ozs7OztBOzs7Ozs7Ozs7Ozs7Ozs7OztBOzs7Ozs7Ozs7Ozs7Ozs7OztBOzs7Ozs7Ozs7Ozs7Ozs7OztBOzs7Ozs7Ozs7Ozs7Ozs7OztBOzs7Ozs7Ozs7Ozs7Ozs7OztBOzs7Ozs7Ozs7Ozs7Ozs7OztBOzs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7QUNyRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7OztBQ3hSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7OztBQ3BPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7QUNsR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7QUM1R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7QUNuR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7OztBQy9OQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFDQTtBQUVBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=