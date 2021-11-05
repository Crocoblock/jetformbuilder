/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-addons/AddonsPage.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-addons/AddonsPage.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_AddonItem_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/AddonItem.vue */ "./admin/pages/jfb-addons/components/AddonItem.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-addons/components/AddonItem.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-addons/components/AddonItem.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
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

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-addons/AddonsPage.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-addons/AddonsPage.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".proccesing-state {\n  opacity: 0.5;\n  pointer-events: none;\n}\n.jfb-addons-page__inner {\n  padding: 30px;\n  height: 100%;\n}\n.jfb-addons-page__header {\n  margin-bottom: 30px;\n}\n.jfb-addons-page__header-controls {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  padding-bottom: 15px;\n  border-bottom: 1px solid #DCDCDD;\n}\n.jfb-addons-page__header-controls > .cx-vui-button {\n  margin-left: 10px;\n}\n.jfb-addons-page .cx-vui-button {\n  font-size: 13px;\n  font-weight: 400;\n  background-color: transparent;\n}\n.jfb-addons-page .cx-vui-button .button-icon {\n  margin-right: 5px;\n}\n.jfb-addons-page .cx-vui-button--style-accent {\n  color: #007cba;\n  box-shadow: inset 0 0 0 1px #007cba;\n}\n.jfb-addons-page .cx-vui-button--style-accent:hover {\n  background-color: #007cba12;\n}\n.jfb-addons-page .cx-vui-button--style-accent .button-icon path {\n  fill: #007cba;\n}\n.jfb-addons-page .cx-vui-button--style-danger {\n  color: #d6336c;\n  box-shadow: inset 0 0 0 1px #d6336c;\n}\n.jfb-addons-page .cx-vui-button--style-danger:hover {\n  background-color: #d6336c12;\n}\n.jfb-addons-page .cx-vui-button--style-danger .button-icon path {\n  fill: #d6336c;\n}\n.jfb-addons-page .cx-vui-button__content > span {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.jfb-addons-page .cx-vui-popup__header {\n  padding-bottom: 15px;\n  border-bottom: 1px solid #DCDCDD;\n  margin-bottom: 30px;\n}\n.jfb-addons-page .cx-vui-popup__header-title {\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 36px;\n  color: #23282D;\n}\n.jfb-addons-page__license-form {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: stretch;\n}\n.jfb-addons-page__license-form > span {\n  margin-bottom: 10px;\n}\n.jfb-addons-page__license-input {\n  margin-bottom: 10px;\n}\n.jfb-addons-page .go-pro-banner {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 24px 0;\n  border-bottom: 1px solid #DCDCDD;\n}\n.jfb-addons-page .go-pro-banner__subtitle {\n  font-size: 18px;\n  line-height: 1.25;\n  font-weight: 500;\n  color: #007CBA;\n  margin-bottom: 5px;\n}\n.jfb-addons-page .go-pro-banner__title {\n  font-size: 24px;\n  line-height: 1.25;\n  font-weight: 500;\n  color: #23282D;\n  margin-bottom: 20px;\n}\n.jfb-addons-page .go-pro-banner__button {\n  color: white;\n  background-color: #007CBA;\n}", "",{"version":3,"sources":["webpack://./admin/pages/jfb-addons/AddonsPage.vue","webpack://./../AddonsPage.vue"],"names":[],"mappings":"AA6ZA;EACC,YAAA;EACA,oBAAA;AC5ZD;ADiaC;EACC,aAAA;EACA,YAAA;AC9ZF;ADiaC;EACC,mBAAA;AC/ZF;ADkaC;EACC,aAAA;EACA,yBAAA;EACA,mBAAA;EACA,oBAAA;EACA,gCAAA;AChaF;ADkaE;EACC,iBAAA;AChaH;ADoaC;EACC,eAAA;EACA,gBAAA;EACA,6BAAA;AClaF;ADoaE;EACC,iBAAA;AClaH;ADqaE;EACC,cAAA;EACA,mCAAA;ACnaH;ADqaG;EACC,2BAAA;ACnaJ;ADuaI;EACC,aAAA;ACraL;AD0aE;EACC,cAAA;EACA,mCAAA;ACxaH;AD0aG;EACC,2BAAA;ACxaJ;AD4aI;EACC,aAAA;AC1aL;ADgbG;EACC,aAAA;EACA,uBAAA;EACA,mBAAA;AC9aJ;ADobE;EACC,oBAAA;EACA,gCAAA;EACA,mBAAA;AClbH;ADqbE;EACC,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cAAA;ACnbH;AD2bC;EACC,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,oBAAA;ACzbF;AD2bE;EACC,mBAAA;ACzbH;AD6bC;EACC,mBAAA;AC3bF;AD8bC;EACC,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;EACA,gCAAA;AC5bF;AD8bE;EACC,eAAA;EACA,iBAAA;EACA,gBAAA;EACA,cAAA;EACA,kBAAA;AC5bH;AD+bE;EACC,eAAA;EACA,iBAAA;EACA,gBAAA;EACA,cAAA;EACA,mBAAA;AC7bH;ADgcE;EACC,YAAA;EACA,yBAAA;AC9bH","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n\r\n.proccesing-state {\r\n\topacity: 0.5;\r\n\tpointer-events: none;\r\n}\r\n\r\n.jfb-addons-page {\r\n\r\n\t&__inner {\r\n\t\tpadding: 30px;\r\n\t\theight: 100%;\r\n\t}\r\n\r\n\t&__header {\r\n\t\tmargin-bottom: 30px;\r\n\t}\r\n\r\n\t&__header-controls {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: flex-end;\r\n\t\talign-items: center;\r\n\t\tpadding-bottom: 15px;\r\n\t\tborder-bottom: 1px solid #DCDCDD;\r\n\r\n\t\t> .cx-vui-button {\r\n\t\t\tmargin-left: 10px;\r\n\t\t}\r\n\t}\r\n\r\n\t.cx-vui-button {\r\n\t\tfont-size: 13px;\r\n\t\tfont-weight: 400;\r\n\t\tbackground-color: transparent;\r\n\r\n\t\t.button-icon {\r\n\t\t\tmargin-right: 5px;\r\n\t\t}\r\n\r\n\t\t&--style-accent {\r\n\t\t\tcolor: #007cba;\r\n\t\t\tbox-shadow: inset 0 0 0 1px #007cba;\r\n\r\n\t\t\t&:hover {\r\n\t\t\t\tbackground-color: #007cba12;\r\n\t\t\t}\r\n\r\n\t\t\t.button-icon {\r\n\t\t\t\tpath {\r\n\t\t\t\t\tfill: #007cba;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t&--style-danger {\r\n\t\t\tcolor: #d6336c;\r\n\t\t\tbox-shadow: inset 0 0 0 1px #d6336c;\r\n\r\n\t\t\t&:hover {\r\n\t\t\t\tbackground-color: #d6336c12;\r\n\t\t\t}\r\n\r\n\t\t\t.button-icon {\r\n\t\t\t\tpath {\r\n\t\t\t\t\tfill: #d6336c;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t&__content {\r\n\t\t\t> span {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\tjustify-content: center;\r\n\t\t\t\talign-items: center;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t.cx-vui-popup {\r\n\t\t&__header {\r\n\t\t\tpadding-bottom: 15px;\r\n\t\t\tborder-bottom: 1px solid #DCDCDD;\r\n\t\t\tmargin-bottom: 30px;\r\n\t\t}\r\n\r\n\t\t&__header-title {\r\n\t\t\tfont-weight: 500;\r\n\t\t\tfont-size: 24px;\r\n\t\t\tline-height: 36px;\r\n\t\t\tcolor: #23282D;\r\n\t\t}\r\n\t}\r\n\r\n\t&__license-popup {\r\n\r\n\t}\r\n\r\n\t&__license-form {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tjustify-content: flex-start;\r\n\t\talign-items: stretch;\r\n\r\n\t\t> span {\r\n\t\t\tmargin-bottom: 10px;\r\n\t\t}\r\n\t}\r\n\r\n\t&__license-input {\r\n\t\tmargin-bottom: 10px;\r\n\t}\r\n\r\n\t.go-pro-banner {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tjustify-content: center;\r\n\t\talign-items: center;\r\n\t\tpadding: 24px 0;\r\n\t\tborder-bottom: 1px solid #DCDCDD;\r\n\r\n\t\t&__subtitle {\r\n\t\t\tfont-size: 18px;\r\n\t\t\tline-height: 1.25;\r\n\t\t\tfont-weight: 500;\r\n\t\t\tcolor: #007CBA;\r\n\t\t\tmargin-bottom: 5px;\r\n\t\t}\r\n\r\n\t\t&__title {\r\n\t\t\tfont-size: 24px;\r\n\t\t\tline-height: 1.25;\r\n\t\t\tfont-weight: 500;\r\n\t\t\tcolor: #23282D;\r\n\t\t\tmargin-bottom: 20px;\r\n\t\t}\r\n\r\n\t\t&__button {\r\n\t\t\tcolor: white;\r\n\t\t\tbackground-color: #007CBA;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n",".proccesing-state {\n  opacity: 0.5;\n  pointer-events: none;\n}\n\n.jfb-addons-page__inner {\n  padding: 30px;\n  height: 100%;\n}\n.jfb-addons-page__header {\n  margin-bottom: 30px;\n}\n.jfb-addons-page__header-controls {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  padding-bottom: 15px;\n  border-bottom: 1px solid #DCDCDD;\n}\n.jfb-addons-page__header-controls > .cx-vui-button {\n  margin-left: 10px;\n}\n.jfb-addons-page .cx-vui-button {\n  font-size: 13px;\n  font-weight: 400;\n  background-color: transparent;\n}\n.jfb-addons-page .cx-vui-button .button-icon {\n  margin-right: 5px;\n}\n.jfb-addons-page .cx-vui-button--style-accent {\n  color: #007cba;\n  box-shadow: inset 0 0 0 1px #007cba;\n}\n.jfb-addons-page .cx-vui-button--style-accent:hover {\n  background-color: #007cba12;\n}\n.jfb-addons-page .cx-vui-button--style-accent .button-icon path {\n  fill: #007cba;\n}\n.jfb-addons-page .cx-vui-button--style-danger {\n  color: #d6336c;\n  box-shadow: inset 0 0 0 1px #d6336c;\n}\n.jfb-addons-page .cx-vui-button--style-danger:hover {\n  background-color: #d6336c12;\n}\n.jfb-addons-page .cx-vui-button--style-danger .button-icon path {\n  fill: #d6336c;\n}\n.jfb-addons-page .cx-vui-button__content > span {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.jfb-addons-page .cx-vui-popup__header {\n  padding-bottom: 15px;\n  border-bottom: 1px solid #DCDCDD;\n  margin-bottom: 30px;\n}\n.jfb-addons-page .cx-vui-popup__header-title {\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 36px;\n  color: #23282D;\n}\n.jfb-addons-page__license-form {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: stretch;\n}\n.jfb-addons-page__license-form > span {\n  margin-bottom: 10px;\n}\n.jfb-addons-page__license-input {\n  margin-bottom: 10px;\n}\n.jfb-addons-page .go-pro-banner {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 24px 0;\n  border-bottom: 1px solid #DCDCDD;\n}\n.jfb-addons-page .go-pro-banner__subtitle {\n  font-size: 18px;\n  line-height: 1.25;\n  font-weight: 500;\n  color: #007CBA;\n  margin-bottom: 5px;\n}\n.jfb-addons-page .go-pro-banner__title {\n  font-size: 24px;\n  line-height: 1.25;\n  font-weight: 500;\n  color: #23282D;\n  margin-bottom: 20px;\n}\n.jfb-addons-page .go-pro-banner__button {\n  color: white;\n  background-color: #007CBA;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-addons/components/AddonItem.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-addons/components/AddonItem.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".jfb-addons {\n  margin-bottom: 50px;\n}\n.jfb-addons:last-child {\n  margin-bottom: 0;\n}\n.jfb-addons a {\n  color: #007cba;\n}\n.jfb-addons__header {\n  margin-bottom: 20px;\n}\n.jfb-addons__list {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 40px;\n}\n@media (max-width: 1140px) {\n.jfb-addons__list {\n    grid-template-columns: repeat(2, 1fr);\n}\n}\n.jfb-addons__item {\n  transition: box-shadow 0.3s ease-out;\n  border-radius: 10px;\n}\n.jfb-addons__item:hover {\n  box-shadow: 0px 4px 28px rgba(15, 23, 42, 0.1);\n}\n.jfb-addons__item.activated .jfb-addons__item-info {\n  background-color: white;\n}\n.jfb-addons__item.update-avaliable .jfb-addons__item-name .version {\n  background-color: #D6336C;\n}\n.jfb-addons__item.update-avaliable .jfb-addons__item-update .latest-version {\n  color: white;\n  background-color: #46B450;\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n.jfb-addons__item-inner {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  height: 100%;\n}\n.jfb-addons__item-thumb {\n  border-radius: 10px 10px 0 0;\n  line-height: 0;\n  overflow: hidden;\n  position: relative;\n}\n.jfb-addons__item-thumb .pro-badge {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n}\n.jfb-addons__item-thumb img {\n  width: 100%;\n  height: auto;\n}\n.jfb-addons__item-info {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  flex: 1 1 auto;\n  padding: 20px;\n  border-radius: 0 0 10px 10px;\n  border-width: 0 1px 1px 1px;\n  border-color: #DCDCDD;\n  border-style: solid;\n  background-color: white;\n}\n.jfb-addons__item-name {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 10px;\n}\n.jfb-addons__item-name .label {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.25;\n}\n.jfb-addons__item-name .version {\n  padding: 1px 8px;\n  border-radius: 4px;\n  color: white;\n  background-color: #46B450;\n  margin-left: 10px;\n}\n.jfb-addons__item-update {\n  color: #7b7e81;\n  margin-bottom: 10px;\n}\n.jfb-addons__item-license {\n  margin-bottom: 10px;\n  color: #7b7e81;\n}\n.jfb-addons__item-license .cx-vui-button {\n  margin-left: 3px;\n}\n.jfb-addons__item-desc {\n  flex: 1 1 auto;\n}\n.jfb-addons__item-desc a {\n  text-decoration: none;\n}\n.jfb-addons__item-actions {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-top: 20px;\n}\n.jfb-addons__item-actions:empty {\n  display: none;\n}\n.jfb-addons__item-actions .cx-vui-button {\n  margin-right: 20px;\n}", "",{"version":3,"sources":["webpack://./admin/pages/jfb-addons/components/AddonItem.vue","webpack://./../AddonItem.vue"],"names":[],"mappings":"AAqRA;EACC,mBAAA;ACpRD;ADsRC;EACC,gBAAA;ACpRF;ADuRC;EACC,cAAA;ACrRF;ADwRC;EACC,mBAAA;ACtRF;ADyRC;EACC,aAAA;EACA,qCAAA;EACA,SAAA;ACvRF;ADyRE;AALD;IAME,qCAAA;ACtRD;AACF;ADyRC;EACC,oCAAA;EACA,mBAAA;ACvRF;ADyRE;EACC,8CAAA;ACvRH;AD2RG;EACC,uBAAA;ACzRJ;AD+RI;EACC,yBAAA;AC7RL;ADiSI;EACC,YAAA;EACA,yBAAA;EACA,gBAAA;EACA,kBAAA;AC/RL;ADqSC;EACC,aAAA;EACA,sBAAA;EACA,oBAAA;EACA,YAAA;ACnSF;ADsSC;EACC,4BAAA;EACA,cAAA;EACA,gBAAA;EACA,kBAAA;ACpSF;ADsSE;EACC,kBAAA;EACA,SAAA;EACA,UAAA;ACpSH;ADuSE;EACC,WAAA;EACA,YAAA;ACrSH;ADySC;EACC,aAAA;EACA,sBAAA;EACA,oBAAA;EACA,cAAA;EACA,aAAA;EACA,4BAAA;EACA,2BAAA;EACA,qBAAA;EACA,mBAAA;EACA,uBAAA;ACvSF;AD0SC;EACC,aAAA;EACA,8BAAA;EACA,uBAAA;EACA,mBAAA;ACxSF;AD0SE;EACC,eAAA;EACA,gBAAA;EACA,iBAAA;ACxSH;AD2SE;EACC,gBAAA;EACA,kBAAA;EACA,YAAA;EACA,yBAAA;EACA,iBAAA;ACzSH;AD6SC;EACC,cAAA;EACA,mBAAA;AC3SF;AD8SC;EACC,mBAAA;EACA,cAAA;AC5SF;AD8SE;EACC,gBAAA;AC5SH;ADgTC;EACC,cAAA;AC9SF;ADgTE;EACC,qBAAA;AC9SH;ADkTC;EACC,aAAA;EACA,2BAAA;EACA,mBAAA;EACA,eAAA;EACA,gBAAA;AChTF;ADkTE;EACC,aAAA;AChTH;ADmTE;EACC,kBAAA;ACjTH","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n\r\n.jfb-addons {\r\n\tmargin-bottom: 50px;\r\n\r\n\t&:last-child {\r\n\t\tmargin-bottom: 0;\r\n\t}\r\n\r\n\ta {\r\n\t\tcolor: #007cba;\r\n\t}\r\n\r\n\t&__header {\r\n\t\tmargin-bottom: 20px;\r\n\t}\r\n\r\n\t&__list {\r\n\t\tdisplay: grid;\r\n\t\tgrid-template-columns: repeat(4, 1fr);\r\n\t\tgap: 40px;\r\n\r\n\t\t@media (max-width: 1140px) {\r\n\t\t\tgrid-template-columns: repeat(2, 1fr);\r\n\t\t}\r\n\t}\r\n\r\n\t&__item {\r\n\t\ttransition: box-shadow .3s ease-out;\r\n\t\tborder-radius: 10px;\r\n\r\n\t\t&:hover {\r\n\t\t\tbox-shadow: 0px 4px 28px rgba(15, 23, 42, 0.1);\r\n\t\t}\r\n\r\n\t\t&.activated {\r\n\t\t\t.jfb-addons__item-info {\r\n\t\t\t\tbackground-color: white;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t&.update-avaliable {\r\n\t\t\t.jfb-addons__item-name {\r\n\t\t\t\t.version {\r\n\t\t\t\t\tbackground-color: #D6336C;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t.jfb-addons__item-update {\r\n\t\t\t\t.latest-version {\r\n\t\t\t\t\tcolor: white;\r\n\t\t\t\t\tbackground-color: #46B450;\r\n\t\t\t\t\tpadding: 2px 8px;\r\n\t\t\t\t\tborder-radius: 4px;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t&__item-inner {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\talign-items: stretch;\r\n\t\theight: 100%;\r\n\t}\r\n\r\n\t&__item-thumb {\r\n\t\tborder-radius: 10px 10px 0 0;\r\n\t\tline-height: 0;\r\n\t\toverflow: hidden;\r\n\t\tposition: relative;\r\n\r\n\t\t.pro-badge {\r\n\t\t\tposition: absolute;\r\n\t\t\ttop: 12px;\r\n\t\t\tleft: 12px;\r\n\t\t}\r\n\r\n\t\timg {\r\n\t\t\twidth: 100%;\r\n\t\t\theight: auto;\r\n\t\t}\r\n\t}\r\n\r\n\t&__item-info {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\talign-items: stretch;\r\n\t\tflex: 1 1 auto;\r\n\t\tpadding: 20px;\r\n\t\tborder-radius: 0 0 10px 10px;\r\n\t\tborder-width: 0 1px 1px 1px;\r\n\t\tborder-color: #DCDCDD;\r\n\t\tborder-style: solid;\r\n\t\tbackground-color: white;\r\n\t}\r\n\r\n\t&__item-name {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t\talign-items: flex-start;\r\n\t\tmargin-bottom: 10px;\r\n\r\n\t\t.label {\r\n\t\t\tfont-size: 20px;\r\n\t\t\tfont-weight: 700;\r\n\t\t\tline-height: 1.25;\r\n\t\t}\r\n\r\n\t\t.version {\r\n\t\t\tpadding: 1px 8px;\r\n\t\t\tborder-radius: 4px;\r\n\t\t\tcolor: white;\r\n\t\t\tbackground-color: #46B450;\r\n\t\t\tmargin-left: 10px;\r\n\t\t}\r\n\t}\r\n\r\n\t&__item-update {\r\n\t\tcolor: #7b7e81;\r\n\t\tmargin-bottom: 10px;\r\n\t}\r\n\r\n\t&__item-license {\r\n\t\tmargin-bottom: 10px;\r\n\t\tcolor: #7b7e81;\r\n\r\n\t\t.cx-vui-button {\r\n\t\t\tmargin-left: 3px;\r\n\t\t}\r\n\t}\r\n\r\n\t&__item-desc {\r\n\t\tflex: 1 1 auto;\r\n\r\n\t\ta {\r\n\t\t\ttext-decoration: none;\r\n\t\t}\r\n\t}\r\n\r\n\t&__item-actions {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: flex-start;\r\n\t\talign-items: center;\r\n\t\tflex-wrap: wrap;\r\n\t\tmargin-top: 20px;\r\n\r\n\t\t&:empty {\r\n\t\t\tdisplay: none;\r\n\t\t}\r\n\r\n\t\t.cx-vui-button {\r\n\t\t\tmargin-right: 20px;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n",".jfb-addons {\n  margin-bottom: 50px;\n}\n.jfb-addons:last-child {\n  margin-bottom: 0;\n}\n.jfb-addons a {\n  color: #007cba;\n}\n.jfb-addons__header {\n  margin-bottom: 20px;\n}\n.jfb-addons__list {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 40px;\n}\n@media (max-width: 1140px) {\n  .jfb-addons__list {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.jfb-addons__item {\n  transition: box-shadow 0.3s ease-out;\n  border-radius: 10px;\n}\n.jfb-addons__item:hover {\n  box-shadow: 0px 4px 28px rgba(15, 23, 42, 0.1);\n}\n.jfb-addons__item.activated .jfb-addons__item-info {\n  background-color: white;\n}\n.jfb-addons__item.update-avaliable .jfb-addons__item-name .version {\n  background-color: #D6336C;\n}\n.jfb-addons__item.update-avaliable .jfb-addons__item-update .latest-version {\n  color: white;\n  background-color: #46B450;\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n.jfb-addons__item-inner {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  height: 100%;\n}\n.jfb-addons__item-thumb {\n  border-radius: 10px 10px 0 0;\n  line-height: 0;\n  overflow: hidden;\n  position: relative;\n}\n.jfb-addons__item-thumb .pro-badge {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n}\n.jfb-addons__item-thumb img {\n  width: 100%;\n  height: auto;\n}\n.jfb-addons__item-info {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  flex: 1 1 auto;\n  padding: 20px;\n  border-radius: 0 0 10px 10px;\n  border-width: 0 1px 1px 1px;\n  border-color: #DCDCDD;\n  border-style: solid;\n  background-color: white;\n}\n.jfb-addons__item-name {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 10px;\n}\n.jfb-addons__item-name .label {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.25;\n}\n.jfb-addons__item-name .version {\n  padding: 1px 8px;\n  border-radius: 4px;\n  color: white;\n  background-color: #46B450;\n  margin-left: 10px;\n}\n.jfb-addons__item-update {\n  color: #7b7e81;\n  margin-bottom: 10px;\n}\n.jfb-addons__item-license {\n  margin-bottom: 10px;\n  color: #7b7e81;\n}\n.jfb-addons__item-license .cx-vui-button {\n  margin-left: 3px;\n}\n.jfb-addons__item-desc {\n  flex: 1 1 auto;\n}\n.jfb-addons__item-desc a {\n  text-decoration: none;\n}\n.jfb-addons__item-actions {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-top: 20px;\n}\n.jfb-addons__item-actions:empty {\n  display: none;\n}\n.jfb-addons__item-actions .cx-vui-button {\n  margin-right: 20px;\n}"],"sourceRoot":""}]);
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

/***/ "./admin/pages/jfb-addons/AddonsPage.vue":
/*!***********************************************!*\
  !*** ./admin/pages/jfb-addons/AddonsPage.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddonsPage_vue_vue_type_template_id_5e249d0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddonsPage.vue?vue&type=template&id=5e249d0e& */ "./admin/pages/jfb-addons/AddonsPage.vue?vue&type=template&id=5e249d0e&");
/* harmony import */ var _AddonsPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddonsPage.vue?vue&type=script&lang=js& */ "./admin/pages/jfb-addons/AddonsPage.vue?vue&type=script&lang=js&");
/* harmony import */ var _AddonsPage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddonsPage.vue?vue&type=style&index=0&lang=scss& */ "./admin/pages/jfb-addons/AddonsPage.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _AddonsPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AddonsPage_vue_vue_type_template_id_5e249d0e___WEBPACK_IMPORTED_MODULE_0__.render,
  _AddonsPage_vue_vue_type_template_id_5e249d0e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "admin/pages/jfb-addons/AddonsPage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./admin/pages/jfb-addons/components/AddonItem.vue":
/*!*********************************************************!*\
  !*** ./admin/pages/jfb-addons/components/AddonItem.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddonItem_vue_vue_type_template_id_b50743b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddonItem.vue?vue&type=template&id=b50743b4& */ "./admin/pages/jfb-addons/components/AddonItem.vue?vue&type=template&id=b50743b4&");
/* harmony import */ var _AddonItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddonItem.vue?vue&type=script&lang=js& */ "./admin/pages/jfb-addons/components/AddonItem.vue?vue&type=script&lang=js&");
/* harmony import */ var _AddonItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddonItem.vue?vue&type=style&index=0&lang=scss& */ "./admin/pages/jfb-addons/components/AddonItem.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _AddonItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AddonItem_vue_vue_type_template_id_b50743b4___WEBPACK_IMPORTED_MODULE_0__.render,
  _AddonItem_vue_vue_type_template_id_b50743b4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "admin/pages/jfb-addons/components/AddonItem.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./admin/pages/jfb-addons/AddonsPage.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./admin/pages/jfb-addons/AddonsPage.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonsPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddonsPage.vue?vue&type=script&lang=js& */ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-addons/AddonsPage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonsPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./admin/pages/jfb-addons/components/AddonItem.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./admin/pages/jfb-addons/components/AddonItem.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddonItem.vue?vue&type=script&lang=js& */ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-addons/components/AddonItem.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./admin/pages/jfb-addons/AddonsPage.vue?vue&type=template&id=5e249d0e&":
/*!******************************************************************************!*\
  !*** ./admin/pages/jfb-addons/AddonsPage.vue?vue&type=template&id=5e249d0e& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonsPage_vue_vue_type_template_id_5e249d0e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonsPage_vue_vue_type_template_id_5e249d0e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonsPage_vue_vue_type_template_id_5e249d0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddonsPage.vue?vue&type=template&id=5e249d0e& */ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-addons/AddonsPage.vue?vue&type=template&id=5e249d0e&");


/***/ }),

/***/ "./admin/pages/jfb-addons/components/AddonItem.vue?vue&type=template&id=b50743b4&":
/*!****************************************************************************************!*\
  !*** ./admin/pages/jfb-addons/components/AddonItem.vue?vue&type=template&id=b50743b4& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonItem_vue_vue_type_template_id_b50743b4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonItem_vue_vue_type_template_id_b50743b4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonItem_vue_vue_type_template_id_b50743b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddonItem.vue?vue&type=template&id=b50743b4& */ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-addons/components/AddonItem.vue?vue&type=template&id=b50743b4&");


/***/ }),

/***/ "./admin/pages/jfb-addons/AddonsPage.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************!*\
  !*** ./admin/pages/jfb-addons/AddonsPage.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonsPage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader/index.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddonsPage.vue?vue&type=style&index=0&lang=scss& */ "../node_modules/vue-style-loader/index.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-addons/AddonsPage.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonsPage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonsPage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonsPage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonsPage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./admin/pages/jfb-addons/components/AddonItem.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************!*\
  !*** ./admin/pages/jfb-addons/components/AddonItem.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader/index.js!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddonItem.vue?vue&type=style&index=0&lang=scss& */ "../node_modules/vue-style-loader/index.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-addons/components/AddonItem.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-addons/AddonsPage.vue?vue&type=template&id=5e249d0e&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-addons/AddonsPage.vue?vue&type=template&id=5e249d0e& ***!
  \***********************************************************************************************************************************************************************************************************************/
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

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-addons/components/AddonItem.vue?vue&type=template&id=b50743b4&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-addons/components/AddonItem.vue?vue&type=template&id=b50743b4& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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

/***/ "../node_modules/vue-style-loader/index.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-addons/AddonsPage.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-style-loader/index.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-addons/AddonsPage.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddonsPage.vue?vue&type=style&index=0&lang=scss& */ "../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-addons/AddonsPage.vue?vue&type=style&index=0&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "../node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("725dd87a", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "../node_modules/vue-style-loader/index.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-addons/components/AddonItem.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-style-loader/index.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-addons/components/AddonItem.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddonItem.vue?vue&type=style&index=0&lang=scss& */ "../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-addons/components/AddonItem.vue?vue&type=style&index=0&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "../node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("e6fbf942", content, false, {});
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
/*!*****************************************!*\
  !*** ./admin/pages/jfb-addons/index.js ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddonsPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddonsPage */ "./admin/pages/jfb-addons/AddonsPage.vue");

var renderCurrentPage = window.JetFBActions.renderCurrentPage;
renderCurrentPage(_AddonsPage__WEBPACK_IMPORTED_MODULE_0__.default);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4vcGFnZXMvamZiLWFkZG9ucy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hZG1pbi9wYWdlcy9qZmItYWRkb25zL0FkZG9uc1BhZ2UudnVlIiwid2VicGFjazovLy9hZG1pbi9wYWdlcy9qZmItYWRkb25zL2NvbXBvbmVudHMvQWRkb25JdGVtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9qZmItYWRkb25zL0FkZG9uc1BhZ2UudnVlP2Y0ZTciLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvamZiLWFkZG9ucy9jb21wb25lbnRzL0FkZG9uSXRlbS52dWU/MmRiOCIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvamZiLWFkZG9ucy9BZGRvbnNQYWdlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9qZmItYWRkb25zL2NvbXBvbmVudHMvQWRkb25JdGVtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9qZmItYWRkb25zL0FkZG9uc1BhZ2UudnVlPzdlMzUiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvamZiLWFkZG9ucy9jb21wb25lbnRzL0FkZG9uSXRlbS52dWU/OWExNCIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9qZmItYWRkb25zL0FkZG9uc1BhZ2UudnVlPzkwYTIiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvamZiLWFkZG9ucy9jb21wb25lbnRzL0FkZG9uSXRlbS52dWU/MTU0ZCIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcyIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9qZmItYWRkb25zL0FkZG9uc1BhZ2UudnVlP2IwMjgiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvamZiLWFkZG9ucy9jb21wb25lbnRzL0FkZG9uSXRlbS52dWU/NTdhOCIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2xpc3RUb1N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvamZiLWFkZG9ucy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PGRpdlxyXG5cdFx0Y2xhc3M9XCJqZmItYWRkb25zLXBhZ2Ugd3JhcFwiXHJcblx0XHQ6Y2xhc3M9XCJ7ICdwcm9jY2VzaW5nLXN0YXRlJzogcHJvY2Nlc2luZ1N0YXRlIH1cIlxyXG5cdD5cclxuXHRcdDxoMSBjbGFzcz1cImNzLXZ1aS10aXRsZVwiPnt7ICdKZXRGb3JtQnVpbGRlciBBZGRvbnMnIH19PC9oMT5cclxuXHRcdDxkaXYgY2xhc3M9XCJqZmItYWRkb25zLXBhZ2VfX2lubmVyIGN4LXZ1aS1wYW5lbFwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiamZiLWFkZG9ucy1wYWdlX19oZWFkZXJcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiamZiLWFkZG9ucy1wYWdlX19oZWFkZXItY29udHJvbHNcIiB2LWlmPVwiaXNMaWNlbnNlTW9kZVwiPlxyXG5cdFx0XHRcdFx0PGN4LXZ1aS1idXR0b25cclxuXHRcdFx0XHRcdFx0YnV0dG9uLXN0eWxlPVwiYWNjZW50XCJcclxuXHRcdFx0XHRcdFx0c2l6ZT1cIm1pbmlcIlxyXG5cdFx0XHRcdFx0XHQ6bG9hZGluZz1cImNoZWNrVXBkYXRlc1Byb2Nlc3NlZFwiXHJcblx0XHRcdFx0XHRcdEBjbGljaz1cImNoZWNrUGx1Z2luc1VwZGF0ZVwiXHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxzcGFuIHNsb3Q9XCJsYWJlbFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxzdmcgY2xhc3M9XCJidXR0b24taWNvblwiIHdpZHRoPVwiMTRcIiBoZWlnaHQ9XCIxNFwiIHZpZXdCb3g9XCIwIDAgMTQgMTRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9XCJNMTEuNzA4NSAyLjI5MTcxQzEwLjUwMDEgMS4wODMzNyA4Ljg0MTggMC4zMzMzNzQgNy4wMDAxMyAwLjMzMzM3NEMzLjMxNjggMC4zMzMzNzQgMC4zNDE3OTcgMy4zMTY3MSAwLjM0MTc5NyA3LjAwMDA0QzAuMzQxNzk3IDEwLjY4MzQgMy4zMTY4IDEzLjY2NjcgNy4wMDAxMyAxMy42NjY3QzEwLjEwODUgMTMuNjY2NyAxMi43MDAxIDExLjU0MTcgMTMuNDQxOCA4LjY2NjcxSDExLjcwODVDMTEuMDI1MSAxMC42MDg0IDkuMTc1MTMgMTIgNy4wMDAxMyAxMkM0LjI0MTggMTIgMi4wMDAxMyA5Ljc1ODM3IDIuMDAwMTMgNy4wMDAwNEMyLjAwMDEzIDQuMjQxNzEgNC4yNDE4IDIuMDAwMDQgNy4wMDAxMyAyLjAwMDA0QzguMzgzNDYgMi4wMDAwNCA5LjYxNjggMi41NzUwNCAxMC41MTY4IDMuNDgzMzdMNy44MzM0NiA2LjE2NjcxSDEzLjY2NjhWMC4zMzMzNzRMMTEuNzA4NSAyLjI5MTcxWlwiIGZpbGw9XCIjMDA3Q0JBXCIvPlxyXG5cdFx0XHRcdFx0XHRcdDwvc3ZnPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuPkNoZWNrIEZvciBVcGRhdGVzPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHQ8L2N4LXZ1aS1idXR0b24+XHJcblxyXG5cdFx0XHRcdFx0PGN4LXZ1aS1idXR0b25cclxuXHRcdFx0XHRcdFx0OmNsYXNzPVwiWyAhaXNMaWNlbnNlQWN0aXZhdGVkID8gJ2N4LXZ1aS1idXR0b24tLXN0eWxlLWFjY2VudCcgOiAnY3gtdnVpLWJ1dHRvbi0tc3R5bGUtZGFuZ2VyJyBdXCJcclxuXHRcdFx0XHRcdFx0c2l6ZT1cIm1pbmlcIlxyXG5cdFx0XHRcdFx0XHRAY2xpY2s9XCJzaG93TGljZW5zZVBvcHVwXCJcclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PHNwYW4gc2xvdD1cImxhYmVsXCI+XHJcblx0XHRcdFx0XHRcdFx0PHN2ZyBjbGFzcz1cImJ1dHRvbi1pY29uXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD1cIk0xNS40OTg1IDBIMTIuNDg5N0MxMi40MTY2IDAgMTIuMzQ4NyAwLjAxNTY3MDkgMTIuMjg2IDAuMDQ3MDEyN0MxMi4yMzM4IDAuMDY3OTA3MyAxMi4xODY3IDAuMTA0NDczIDEyLjE0NSAwLjE1NjcwOUw1Ljc2NjkgNi40NzIwOUM1LjYyMDYzIDYuNDQwNzQgNS40NjM5MiA2LjQxNDYzIDUuMjk2NzcgNi4zOTM3M0M1LjEyOTYxIDYuMzcyODQgNC45Njc2OCA2LjM2MjM5IDQuODEwOTcgNi4zNjIzOUM0LjE2MzI0IDYuMzYyMzkgMy41NDY4NSA2LjQ4Nzc2IDIuOTYxOCA2LjczODQ5QzIuMzc2NzUgNi45Nzg3OCAxLjg1OTYxIDcuMzIzNTQgMS40MTAzOCA3Ljc3Mjc3QzAuOTYxMTQ5IDguMjIyIDAuNjExMTY2IDguNzM5MTQgMC4zNjA0MzEgOS4zMjQxOUMwLjEyMDE0NCA5LjkwOTI0IDAgMTAuNTMwOSAwIDExLjE4OUMwIDExLjgzNjggMC4xMjAxNDQgMTIuNDUzMiAwLjM2MDQzMSAxMy4wMzgyQzAuNjExMTY2IDEzLjYyMzIgMC45NjExNDkgMTQuMTQwNCAxLjQxMDM4IDE0LjU4OTZDMS44NTk2MSAxNS4wMzg5IDIuMzc2NzUgMTUuMzgzNiAyLjk2MTggMTUuNjIzOUMzLjU0Njg1IDE1Ljg3NDYgNC4xNjMyNCAxNiA0LjgxMDk3IDE2QzUuNDY5MTUgMTYgNi4wOTA3NiAxNS44NzQ2IDYuNjc1ODEgMTUuNjIzOUM3LjI2MDg2IDE1LjM4MzYgNy43NzggMTUuMDM4OSA4LjIyNzIzIDE0LjU4OTZDOC44MDE4MyAxNC4wMTUgOS4xOTg4MiAxMy4zNDY0IDkuNDE4MjIgMTIuNTgzN0M5LjY0ODA2IDExLjgyMTEgOS42ODQ2MiAxMS4wMzc1IDkuNTI3OTEgMTAuMjMzMUwxMC44OTEzIDguODY5NzRDMTAuOTMzMSA4LjgyNzk1IDEwLjk2NDQgOC43ODA5MyAxMC45ODUzIDguNzI4N0MxMS4wMTY3IDguNjY2MDEgMTEuMDMyMyA4LjU5ODExIDExLjAzMjMgOC41MjQ5OFY3LjAyMDU3SDEyLjUzNjdDMTIuNjkzNCA3LjAyMDU3IDEyLjgxMzYgNi45NzM1NiAxMi44OTcyIDYuODc5NTNDMTIuOTkxMiA2Ljc4NTUgMTMuMDM4MiA2LjY2NTM2IDEzLjAzODIgNi41MTkxVjUuMDE0NjlIMTQuNTQyNkMxNC42MTU3IDUuMDE0NjkgMTQuNjc4NCA1LjAwNDI0IDE0LjczMDcgNC45ODMzNUMxNC43OTMzIDQuOTUyMDEgMTQuODUwOCA0LjkxMDIyIDE0LjkwMyA0Ljg1Nzk4TDE1LjkwNiAzLjg1NTA0QzE1LjkyNjkgMy44MTMyNiAxNS45NDc4IDMuNzY2MjQgMTUuOTY4NyAzLjcxNDAxQzE1Ljk4OTYgMy42NTEzMiAxNiAzLjU4MzQyIDE2IDMuNTEwMjhWMC41MDE0NjlDMTYgMC4zNTUyMDcgMTUuOTUzIDAuMjM1MDY0IDE1Ljg1OSAwLjE0MTAzOEMxNS43NjQ5IDAuMDQ3MDEyNyAxNS42NDQ4IDAgMTUuNDk4NSAwWk00Ljk2NzY4IDEyLjc4NzVDNC43OTAwOCAxMi45NjUxIDQuNTk2OCAxMy4wOTU3IDQuMzg3ODYgMTMuMTc5MkM0LjE4OTM2IDEzLjI1MjQgMy45NjQ3NCAxMy4yODg5IDMuNzE0MDEgMTMuMjg4OUMzLjQ2MzI3IDEzLjI4ODkgMy4yMzM0MyAxMy4yNDE5IDMuMDI0NDkgMTMuMTQ3OUMyLjgyNTk5IDEzLjA1MzkgMi42Mzc5NCAxMi45MzM3IDIuNDYwMzMgMTIuNzg3NUMyLjI4MjczIDEyLjYwOTkgMi4xNTIxNCAxMi40MjE4IDIuMDY4NTYgMTIuMjIzM0MxLjk5NTQzIDEyLjAxNDQgMS45NTg4NiAxMS43ODQ1IDEuOTU4ODYgMTEuNTMzOEMxLjk1ODg2IDExLjI4MzEgMi4wMDU4OCAxMS4wNTg0IDIuMDk5OSAxMC44NTk5QzIuMTkzOTMgMTAuNjUxIDIuMzE0MDcgMTAuNDU3NyAyLjQ2MDMzIDEwLjI4MDFDMi43ODQyIDkuOTU2MjUgMy4xOTE2NCA5Ljc5NDMyIDMuNjgyNjYgOS43OTQzMkM0LjE4NDEzIDkuNzk0MzIgNC41OTY4IDkuOTU2MjUgNC45MjA2NyAxMC4yODAxQzUuMDk4MjcgMTAuNDU3NyA1LjIyMzY0IDEwLjY1MSA1LjI5Njc3IDEwLjg1OTlDNS4zODAzNSAxMS4wNTg0IDUuNDIyMTQgMTEuMjgzMSA1LjQyMjE0IDExLjUzMzhDNS40MjIxNCAxMS43ODQ1IDUuMzgwMzUgMTIuMDE0NCA1LjI5Njc3IDEyLjIyMzNDNS4yMjM2NCAxMi40MjE4IDUuMTEzOTQgMTIuNjA5OSA0Ljk2NzY4IDEyLjc4NzVaXCIgZmlsbD1cIiNEM0QzRDNcIi8+XHJcblx0XHRcdFx0XHRcdFx0PC9zdmc+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gdi1pZj1cIiFpc0xpY2Vuc2VBY3RpdmF0ZWRcIj5BY3RpdmF0ZSBMaWNlbnNlPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuIHYtaWY9XCJpc0xpY2Vuc2VBY3RpdmF0ZWRcIj5EZWFjdGl2YXRlIExpY2Vuc2U8L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvY3gtdnVpLWJ1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRjbGFzcz1cImdvLXByby1iYW5uZXJcIlxyXG5cdFx0XHRcdFx0di1pZj1cIiFpc0xpY2Vuc2VBY3RpdmF0ZWRcIlxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJnby1wcm8tYmFubmVyX19zdWJ0aXRsZVwiPkZlYXR1cmVzICYgSW50ZWdyYXRpb25zIDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImdvLXByby1iYW5uZXJfX3RpdGxlXCI+RXh0ZW5kIGZ1bmN0aW9uYWxpdHkgd2l0aCBQUk8gQWRkb25zPC9kaXY+XHJcblx0XHRcdFx0XHQ8Y3gtdnVpLWJ1dHRvblxyXG5cdFx0XHRcdFx0XHRjbGFzcz1cImdvLXByby1iYW5uZXJfX2J1dHRvblwiXHJcblx0XHRcdFx0XHRcdGJ1dHRvbi1zdHlsZT1cImRlZmF1bHRcIlxyXG5cdFx0XHRcdFx0XHRzaXplPVwibWluaVwiXHJcblx0XHRcdFx0XHRcdDp1cmw9XCJnb1Byb0xpbmtcIlxyXG5cdFx0XHRcdFx0XHR0YWctbmFtZT1cImFcIlxyXG5cdFx0XHRcdFx0XHR0YXJnZXQ9XCJfYmxhbmtcIlxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBzbG90PVwibGFiZWxcIj5cclxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj5HbyBQcm88L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvY3gtdnVpLWJ1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8ZGl2XHJcblx0XHRcdFx0Y2xhc3M9XCJqZmItYWRkb25zXCJcclxuXHRcdFx0XHR2LWlmPVwiMCE9PU9iamVjdC5rZXlzKGluc3RhbGxlZEFkZG9uTGlzdCkubGVuZ3RoXCJcclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJqZmItYWRkb25zX19oZWFkZXJcIj5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiY3gtdnVpLXN1YnRpdGxlXCI+WW91ciBJbnN0YWxsZWQgQWRkb25zPC9zcGFuPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJqZmItYWRkb25zX19saXN0XCI+XHJcblx0XHRcdFx0XHQ8QWRkb25JdGVtXHJcblx0XHRcdFx0XHRcdHYtZm9yPVwiKCBhZGRvbkRhdGEsIGluZGV4ICkgaW4gaW5zdGFsbGVkQWRkb25MaXN0XCJcclxuXHRcdFx0XHRcdFx0OmtleT1cImluZGV4XCJcclxuXHRcdFx0XHRcdFx0OmFkZG9uLWRhdGE9XCJhZGRvbkRhdGFcIlxyXG5cdFx0XHRcdFx0PjwvQWRkb25JdGVtPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxkaXZcclxuXHRcdFx0XHRjbGFzcz1cImpmYi1hZGRvbnNcIlxyXG5cdFx0XHRcdHYtaWY9XCIwIT09T2JqZWN0LmtleXMoYXZhaWxhYmxlQWRkb25MaXN0KS5sZW5ndGhcIlxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImpmYi1hZGRvbnNfX2hlYWRlclwiPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJjeC12dWktc3VidGl0bGVcIj5BbGwgQXZhaWxhYmxlIEFkZG9uczwvc3Bhbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiamZiLWFkZG9uc19fbGlzdFwiPlxyXG5cdFx0XHRcdFx0PEFkZG9uSXRlbVxyXG5cdFx0XHRcdFx0XHR2LWZvcj1cIiggYWRkb25EYXRhLCBpbmRleCApIGluIGF2YWlsYWJsZUFkZG9uTGlzdFwiXHJcblx0XHRcdFx0XHRcdDprZXk9XCJpbmRleFwiXHJcblx0XHRcdFx0XHRcdDphZGRvbi1kYXRhPVwiYWRkb25EYXRhXCJcclxuXHRcdFx0XHRcdD48L0FkZG9uSXRlbT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHJcblx0XHQ8Y3gtdnVpLXBvcHVwXHJcblx0XHRcdGNsYXNzPVwiamZiLWFkZG9ucy1wYWdlX19saWNlbnNlLXBvcHVwXCJcclxuXHRcdFx0di1tb2RlbD1cImxpY2Vuc2VQb3B1cFZpc2libGVcIlxyXG5cdFx0XHQ6Zm9vdGVyPVwiZmFsc2VcIlxyXG5cdFx0XHRib2R5LXdpZHRoPVwiNTQwcHhcIlxyXG5cdFx0PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY3gtdnVpLXBvcHVwX19oZWFkZXItdGl0bGVcIiBzbG90PVwidGl0bGVcIj5cclxuXHRcdFx0XHQ8c3BhbiB2LWlmPVwiIWlzTGljZW5zZUFjdGl2YXRlZFwiPkFjdGl2YXRlIExpY2Vuc2U8L3NwYW4+XHJcblx0XHRcdFx0PHNwYW4gdi1pZj1cImlzTGljZW5zZUFjdGl2YXRlZFwiPkRlYWN0aXZhdGUgTGljZW5zZTwvc3Bhbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJqZmItYWRkb25zLXBhZ2VfX2xpY2Vuc2UtZm9ybVwiIHNsb3Q9XCJjb250ZW50XCI+XHJcblx0XHRcdFx0PHNwYW4gdi1pZj1cIiFpc0xpY2Vuc2VBY3RpdmF0ZWRcIj5BY3RpdmF0ZSBsaWNlbnNlIGZvciBhdXRvbWF0aWMgdXBkYXRlcyBhbmQgYXdlc29tZSBzdXBwb3J0PC9zcGFuPlxyXG5cdFx0XHRcdDxzcGFuIHYtaWY9XCJpc0xpY2Vuc2VBY3RpdmF0ZWRcIj5CeSBkZWFjdGl2YXRpbmcgdGhlIGxpY2Vuc2UgeW91IHdpbGwgbm90IGJlIGFibGUgdG8gdXBkYXRlIHRoZSBhZGRvbnM8L3NwYW4+XHJcblx0XHRcdFx0PGN4LXZ1aS1pbnB1dFxyXG5cdFx0XHRcdFx0Y2xhc3M9XCJqZmItYWRkb25zLXBhZ2VfX2xpY2Vuc2UtaW5wdXRcIlxyXG5cdFx0XHRcdFx0c2l6ZT1cImZ1bGx3aWR0aFwiXHJcblx0XHRcdFx0XHR0eXBlPVwicGFzc3dvcmRcIlxyXG5cdFx0XHRcdFx0OmF1dG9mb2N1cz1cInRydWVcIlxyXG5cdFx0XHRcdFx0OnByZXZlbnQtd3JhcD1cInRydWVcIlxyXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJKdXN0IHBhc3RlIGl0IGhlcmVcIlxyXG5cdFx0XHRcdFx0di1tb2RlbD1cImxpY2Vuc2VLZXlcIlxyXG5cdFx0XHRcdD48L2N4LXZ1aS1pbnB1dD5cclxuXHRcdFx0XHQ8Y3gtdnVpLWJ1dHRvblxyXG5cdFx0XHRcdFx0Y2xhc3M9XCJqZmItYWRkb25zLXBhZ2VfX2xpY2Vuc2UtYWN0aW9uXCJcclxuXHRcdFx0XHRcdGJ1dHRvbi1zdHlsZT1cImFjY2VudFwiXHJcblx0XHRcdFx0XHRzaXplPVwibWluaVwiXHJcblx0XHRcdFx0XHQ6bG9hZGluZz1cImxpY2Vuc2VQcm9jY2VzaW5nU3RhdGVcIlxyXG5cdFx0XHRcdFx0QGNsaWNrPVwibGljZW5zZUFjdGlvblwiXHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PHNwYW4gc2xvdD1cImxhYmVsXCI+XHJcblx0XHRcdFx0XHRcdDxzcGFuIHYtaWY9XCIhaXNMaWNlbnNlQWN0aXZhdGVkXCI+QWN0aXZhdGU8L3NwYW4+XHJcblx0XHRcdFx0XHRcdDxzcGFuIHYtaWY9XCJpc0xpY2Vuc2VBY3RpdmF0ZWRcIj5EZWFjdGl2YXRlPC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdDwvY3gtdnVpLWJ1dHRvbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2N4LXZ1aS1wb3B1cD5cclxuXHQ8L2Rpdj5cclxuXHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cclxuaW1wb3J0IEFkZG9uSXRlbSBmcm9tICcuL2NvbXBvbmVudHMvQWRkb25JdGVtLnZ1ZSc7XHJcblxyXG5jb25zdCB7IGFwcGx5RmlsdGVycywgZG9BY3Rpb24gfSA9IHdwLmhvb2tzO1xyXG5cclxud2luZG93LmpmYkV2ZW50QnVzID0gbmV3IFZ1ZSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdG5hbWU6ICdqZmItYWRkb25zJyxcclxuXHRjb21wb25lbnRzOiB7XHJcblx0XHRBZGRvbkl0ZW0sXHJcblx0fSxcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0YWxsQWRkb25zOiB3aW5kb3cuSmV0RkJQYWdlQ29uZmlnLmFsbEFkZG9ucyB8fCB7fSxcclxuXHRcdFx0bGljZW5zZUxpc3Q6IHdpbmRvdy5KZXRGQlBhZ2VDb25maWcubGljZW5zZUxpc3QgfHwgW10sXHJcblx0XHRcdGxpY2Vuc2VLZXk6IHdpbmRvdy5KZXRGQlBhZ2VDb25maWcubGljZW5zZUtleSB8fCAnJyxcclxuXHRcdFx0dGhlbWVJbmZvOiB3aW5kb3cuSmV0RkJQYWdlQ29uZmlnLnRoZW1lSW5mbyB8fCBmYWxzZSxcclxuXHRcdFx0bWlzY0luZm86IHdpbmRvdy5KZXRGQlBhZ2VDb25maWcubWlzY0luZm8gfHwgZmFsc2UsXHJcblxyXG5cdFx0XHRsaWNlbnNlQWN0aXZhdGVkOiBmYWxzZSxcclxuXHRcdFx0bGljZW5zZVBvcHVwVmlzaWJsZTogZmFsc2UsXHJcblx0XHRcdGxpY2Vuc2VQcm9jY2VzaW5nU3RhdGU6IGZhbHNlLFxyXG5cdFx0XHRsaWNlbnNlQWpheEFjdGlvbjogbnVsbCxcclxuXHJcblx0XHRcdGNoZWNrVXBkYXRlc0FjdGlvbjogbnVsbCxcclxuXHRcdFx0Y2hlY2tVcGRhdGVzUHJvY2Vzc2VkOiBmYWxzZSxcclxuXHJcblx0XHRcdHByb2NjZXNpbmdTdGF0ZTogZmFsc2UsXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0bW91bnRlZDogZnVuY3Rpb24oKSB7XHJcblx0XHR3aW5kb3cuamZiRXZlbnRCdXMuJG9uKCAndXBkYXRlQWRkb25EYXRhJywgdGhpcy51cGRhdGVBZGRvbkRhdGEgKTtcclxuXHRcdHdpbmRvdy5qZmJFdmVudEJ1cy4kb24oICdzaG93TGljZW5zZVBvcHVwJywgdGhpcy5zaG93TGljZW5zZVBvcHVwICk7XHJcblx0fSxcclxuXHRjb21wdXRlZDoge1xyXG5cdFx0aXNMaWNlbnNlTW9kZSgpIHtcclxuXHRcdFx0cmV0dXJuICcnICE9PSB3aW5kb3cuSmV0RkJQYWdlQ29uZmlnLmxpY2Vuc2VNb2RlID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdFx0fSxcclxuXHJcblx0XHRpc0xpY2Vuc2VBY3RpdmF0ZWQoKSB7XHJcblx0XHRcdHJldHVybiAwICE9PSB0aGlzLmxpY2Vuc2VMaXN0Lmxlbmd0aDtcclxuXHRcdH0sXHJcblxyXG5cdFx0bGljZW5zZUFjdGlvblR5cGUoKSB7XHJcblx0XHRcdHJldHVybiAhIHRoaXMuaXNMaWNlbnNlQWN0aXZhdGVkID8gJ2FjdGl2YXRlX2xpY2Vuc2UnIDogJ2RlYWN0aXZhdGVfbGljZW5zZSc7XHJcblx0XHR9LFxyXG5cclxuXHRcdGluc3RhbGxlZEFkZG9uTGlzdCgpIHtcclxuXHRcdFx0bGV0IGluc3RhbGxlZEFkZG9uc0xpc3QgPSB7fTtcclxuXHJcblx0XHRcdGZvciAoIGxldCBhZGRvblNsdWcgaW4gdGhpcy5hbGxBZGRvbnMgKSB7XHJcblxyXG5cdFx0XHRcdGlmICggdGhpcy5hbGxBZGRvbnNbIGFkZG9uU2x1ZyBdWyAnaXNJbnN0YWxsZWQnIF0gKSB7XHJcblx0XHRcdFx0XHRpbnN0YWxsZWRBZGRvbnNMaXN0WyBhZGRvblNsdWcgXSA9IHRoaXMuYWxsQWRkb25zWyBhZGRvblNsdWcgXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiBpbnN0YWxsZWRBZGRvbnNMaXN0O1xyXG5cdFx0fSxcclxuXHJcblx0XHRhdmFpbGFibGVBZGRvbkxpc3QoKSB7XHJcblx0XHRcdGxldCBhdmFpbGFibGVBZGRvbkxpc3QgPSB7fTtcclxuXHJcblx0XHRcdGZvciAoIGxldCBhZGRvblNsdWcgaW4gdGhpcy5hbGxBZGRvbnMgKSB7XHJcblxyXG5cdFx0XHRcdGlmICggISB0aGlzLmFsbEFkZG9uc1sgYWRkb25TbHVnIF1bICdpc0luc3RhbGxlZCcgXSApIHtcclxuXHRcdFx0XHRcdGF2YWlsYWJsZUFkZG9uTGlzdFsgYWRkb25TbHVnIF0gPSB0aGlzLmFsbEFkZG9uc1sgYWRkb25TbHVnIF07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gYXZhaWxhYmxlQWRkb25MaXN0O1xyXG5cdFx0fSxcclxuXHJcblx0XHRnb1Byb0xpbmsoKSB7XHJcblx0XHRcdGxldCBwcmljaW5nUGFnZVVybCA9IHRoaXMubWlzY0luZm8ucHJpY2luZ1BhZ2VVcmwsXHJcblx0XHRcdFx0dXRtUGFyYW1zID0gdGhpcy5nZXRVdG1QYXJhbXNTdHJpbmcoIHtcclxuXHRcdFx0XHRcdHV0bV9zb3VyY2U6IGBkYXNoYm9hcmQvamV0LWZvcm0tYnVpbGRlci1hZGRvbnMtcGFnZWAsXHJcblx0XHRcdFx0XHR1dG1fbWVkaXVtOiBgY3JvY29ibG9jay1saWNlbnNlLyR7IHRoaXMudGhlbWVJbmZvLnRoZW1lIH1gLFxyXG5cdFx0XHRcdFx0dXRtX2NhbXBhaWduOiAnZ28tcHJvLWJ1dHRvbicsXHJcblx0XHRcdFx0fSApO1xyXG5cclxuXHRcdFx0cmV0dXJuIGAkeyBwcmljaW5nUGFnZVVybCB9PyR7IHV0bVBhcmFtcyB9YDtcclxuXHRcdH1cclxuXHR9LFxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdHNob3dMaWNlbnNlUG9wdXAoKSB7XHJcblx0XHRcdHRoaXMubGljZW5zZVBvcHVwVmlzaWJsZSA9IHRydWU7XHJcblx0XHR9LFxyXG5cclxuXHRcdHVwZGF0ZUFkZG9uRGF0YSggZGF0YSApIHtcclxuXHRcdFx0bGV0IHNsdWcgPSBkYXRhLnNsdWcsXHJcblx0XHRcdFx0YWRkb25EYXRhID0gZGF0YS5hZGRvbkRhdGEsXHJcblx0XHRcdFx0cGx1Z2luQWN0aW9uID0gZGF0YS5hY3Rpb24sXHJcblx0XHRcdFx0cmVsb2FkQWN0aW9uTWFwID0gWyAnYWN0aXZhdGUnLCAnZGVhY3RpdmF0ZScsICd1cGRhdGUnIF07XHJcblxyXG5cdFx0XHR0aGlzLmFsbEFkZG9uc1sgc2x1ZyBdID0gT2JqZWN0LmFzc2lnbigge30sIHRoaXMuYWxsQWRkb25zWyBzbHVnIF0sIGFkZG9uRGF0YSApO1xyXG5cclxuXHRcdFx0aWYgKCByZWxvYWRBY3Rpb25NYXAuaW5jbHVkZXMoIHBsdWdpbkFjdGlvbiApICkge1xyXG5cdFx0XHRcdHRoaXMucHJvY2Nlc2luZ1N0YXRlID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0c2V0VGltZW91dCggZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcblx0XHRcdFx0fSwgMTAwMCApO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdGxpY2Vuc2VBY3Rpb24oKSB7XHJcblx0XHRcdHZhciBzZWxmID0gdGhpcztcclxuXHJcblx0XHRcdGlmICggJycgPT09IHRoaXMubGljZW5zZUtleSApIHtcclxuXHRcdFx0XHRzZWxmLiRDWE5vdGljZS5hZGQoIHtcclxuXHRcdFx0XHRcdG1lc3NhZ2U6ICdMaWNlbnNlIGtleSBpcyBtaXNzaW5nJyxcclxuXHRcdFx0XHRcdHR5cGU6ICdlcnJvcicsXHJcblx0XHRcdFx0XHRkdXJhdGlvbjogNDAwMCxcclxuXHRcdFx0XHR9ICk7XHJcblxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5saWNlbnNlUHJvY2Nlc2luZ1N0YXRlID0gdHJ1ZTtcclxuXHJcblx0XHRcdHNlbGYubGljZW5zZUFqYXhBY3Rpb24gPSBqUXVlcnkuYWpheCgge1xyXG5cdFx0XHRcdHR5cGU6ICdQT1NUJyxcclxuXHRcdFx0XHR1cmw6IHdpbmRvdy5KZXRGQlBhZ2VDb25maWcuYWpheFVybCxcclxuXHRcdFx0XHRkYXRhVHlwZTogJ2pzb24nLFxyXG5cdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdGFjdGlvbjogJ2pmYl9saWNlbnNlX2FjdGlvbicsXHJcblx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdGxpY2Vuc2U6IHNlbGYubGljZW5zZUtleSxcclxuXHRcdFx0XHRcdFx0YWN0aW9uOiBzZWxmLmxpY2Vuc2VBY3Rpb25UeXBlXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRiZWZvcmVTZW5kOiAoIGpxWEhSLCBhamF4U2V0dGluZ3MgKSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBudWxsICE9PSBzZWxmLmxpY2Vuc2VBamF4QWN0aW9uICkge1xyXG5cdFx0XHRcdFx0XHRzZWxmLmxpY2Vuc2VBamF4QWN0aW9uLmFib3J0KCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzdWNjZXNzOiAoIHJlc3BvbmNlLCB0ZXh0U3RhdHVzLCBqcVhIUiApID0+IHtcclxuXHRcdFx0XHRcdHNlbGYubGljZW5zZVByb2NjZXNpbmdTdGF0ZSA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHRcdGlmICggcmVzcG9uY2Uuc3VjY2VzcyApIHtcclxuXHRcdFx0XHRcdFx0c2VsZi4kQ1hOb3RpY2UuYWRkKCB7XHJcblx0XHRcdFx0XHRcdFx0bWVzc2FnZTogcmVzcG9uY2UubWVzc2FnZSxcclxuXHRcdFx0XHRcdFx0XHR0eXBlOiAnc3VjY2VzcycsXHJcblx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDQwMDAsXHJcblx0XHRcdFx0XHRcdH0gKTtcclxuXHJcblx0XHRcdFx0XHRcdGxldCBsaWNlbnNlRGF0YSA9IHJlc3BvbmNlLmRhdGE7XHJcblxyXG5cdFx0XHRcdFx0XHRsaWNlbnNlRGF0YVsnbGljZW5zZV9rZXknXSA9IHNlbGYubGljZW5zZUtleTtcclxuXHJcblx0XHRcdFx0XHRcdHN3aXRjaCAoIHNlbGYubGljZW5zZUFjdGlvblR5cGUgKSB7XHJcblx0XHRcdFx0XHRcdFx0Y2FzZSAnYWN0aXZhdGVfbGljZW5zZSc6XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0c2VsZi5saWNlbnNlTGlzdC5wdXNoKCBsaWNlbnNlRGF0YSApO1xyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0Y2FzZSAnZGVhY3RpdmF0ZV9saWNlbnNlJzpcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRzZWxmLmxpY2Vuc2VMaXN0ID0gc2VsZi5saWNlbnNlTGlzdC5maWx0ZXIoICggbGljZW5zZURhdGEgKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBzZWxmLmxpY2Vuc2VLZXkgIT09IGxpY2Vuc2VEYXRhWydsaWNlbnNlX2tleSddO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSApO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdHNlbGYubGljZW5zZUtleSA9ICcnO1xyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdHNlbGYubGljZW5zZVBvcHVwVmlzaWJsZSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0c2VsZi4kQ1hOb3RpY2UuYWRkKCB7XHJcblx0XHRcdFx0XHRcdFx0bWVzc2FnZTogcmVzcG9uY2UubWVzc2FnZSxcclxuXHRcdFx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxyXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiA0MDAwLFxyXG5cdFx0XHRcdFx0XHR9ICk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9ICk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGNoZWNrUGx1Z2luc1VwZGF0ZTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBzZWxmID0gdGhpcztcclxuXHJcblx0XHRcdHNlbGYuY2hlY2tVcGRhdGVzQWN0aW9uID0galF1ZXJ5LmFqYXgoIHtcclxuXHRcdFx0XHR0eXBlOiAnUE9TVCcsXHJcblx0XHRcdFx0dXJsOiB3aW5kb3cuSmV0RkJQYWdlQ29uZmlnLmFqYXhVcmwsXHJcblx0XHRcdFx0ZGF0YVR5cGU6ICdqc29uJyxcclxuXHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRhY3Rpb246ICdqZmJfbGljZW5zZV9zZXJ2aWNlX2FjdGlvbicsXHJcblx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdGFjdGlvbjogJ2NoZWNrLXBsdWdpbi11cGRhdGUnXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRiZWZvcmVTZW5kOiAoIGpxWEhSLCBhamF4U2V0dGluZ3MgKSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBudWxsICE9PSBzZWxmLmNoZWNrVXBkYXRlc0FjdGlvbiApIHtcclxuXHRcdFx0XHRcdFx0c2VsZi5jaGVja1VwZGF0ZXNBY3Rpb24uYWJvcnQoKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRzZWxmLmNoZWNrVXBkYXRlc1Byb2Nlc3NlZCA9IHRydWU7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbiggcmVzcG9uY2UsIHRleHRTdGF0dXMsIGpxWEhSICkge1xyXG5cdFx0XHRcdFx0c2VsZi5jaGVja1VwZGF0ZXNQcm9jZXNzZWQgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0XHRpZiAoIHJlc3BvbmNlLnN1Y2Nlc3MgKSB7XHJcblx0XHRcdFx0XHRcdHNlbGYuJENYTm90aWNlLmFkZCgge1xyXG5cdFx0XHRcdFx0XHRcdG1lc3NhZ2U6IHJlc3BvbmNlLm1lc3NhZ2UsXHJcblx0XHRcdFx0XHRcdFx0dHlwZTogJ3N1Y2Nlc3MnLFxyXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiA0MDAwLFxyXG5cdFx0XHRcdFx0XHR9ICk7XHJcblxyXG5cdFx0XHRcdFx0XHRzZWxmLnByb2NjZXNpbmdTdGF0ZSA9IHRydWU7XHJcblxyXG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcblx0XHRcdFx0XHRcdH0sIDEwMDAgKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHNlbGYuJENYTm90aWNlLmFkZCgge1xyXG5cdFx0XHRcdFx0XHRcdG1lc3NhZ2U6IHJlc3BvbmNlLm1lc3NhZ2UsXHJcblx0XHRcdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcclxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogNDAwMCxcclxuXHRcdFx0XHRcdFx0fSApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSApO1xyXG5cdFx0fSxcclxuXHJcblx0XHRhZGRMaWNlbnNlKCBsaWNlbnNlRGF0YSApIHtcclxuXHRcdFx0dGhpcy5saWNlbnNlTGlzdC5wdXNoKCBsaWNlbnNlRGF0YSApO1xyXG5cclxuXHRcdFx0c2VsZi5wcm9jY2VzaW5nU3RhdGUgPSB0cnVlO1xyXG5cclxuXHRcdFx0c2V0VGltZW91dCggZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG5cdFx0XHR9LCAzMDAwICk7XHJcblx0XHR9LFxyXG5cclxuXHRcdHJlbW92ZUxpY2Vuc2UoIGxpY2VuY2VLZXkgKSB7XHJcblxyXG5cdFx0XHRsZXQgcmVtb3ZpbmdJbmRleCA9IGZhbHNlO1xyXG5cclxuXHRcdFx0Zm9yICggbGV0IGxpY2VuY2VJbmRleCBpbiB0aGlzLmxpY2Vuc2VMaXN0ICkge1xyXG5cdFx0XHRcdGxldCBsaWNlbnNlRGF0YSA9ICB0aGlzLmxpY2Vuc2VMaXN0WyBsaWNlbmNlSW5kZXggXTtcclxuXHJcblx0XHRcdFx0aWYgKCBsaWNlbnNlRGF0YVsnbGljZW5zZUtleSddID09PSBsaWNlbmNlS2V5ICkge1xyXG5cdFx0XHRcdFx0cmVtb3ZpbmdJbmRleCA9IGxpY2VuY2VJbmRleDtcclxuXHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggcmVtb3ZpbmdJbmRleCApIHtcclxuXHRcdFx0XHR0aGlzLmxpY2Vuc2VMaXN0LnNwbGljZSggcmVtb3ZpbmdJbmRleCwgMSApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLmxpY2Vuc2VQb3B1cFZpc2libGUgPSBmYWxzZTtcclxuXHJcblx0XHRcdHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuXHRcdFx0fSwgNTAwICk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGdldFV0bVBhcmFtc1N0cmluZyggZGF0YSA9IHt9ICkge1xyXG5cdFx0XHRsZXQgdXRtU3RyaW5nID0gZmFsc2U7XHJcblxyXG5cdFx0XHRpZiAoIDAgPT09IE9iamVjdC5rZXlzKCBkYXRhICkubGVuZ3RoICkge1xyXG5cdFx0XHRcdHJldHVybiB1dG1TdHJpbmc7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHV0bVN0cmluZyA9IE9iamVjdC5rZXlzKCBkYXRhICkubWFwKCAoIGtleSApID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gWyBrZXksIGRhdGFbIGtleSBdIF0ubWFwKCBlbmNvZGVVUklDb21wb25lbnQgKS5qb2luKCAnPScgKTtcclxuXHRcdFx0fSApLmpvaW4oICcmJyApO1xyXG5cclxuXHRcdFx0cmV0dXJuIHV0bVN0cmluZztcclxuXHRcdH1cclxuXHR9LFxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XHJcblxyXG4ucHJvY2Nlc2luZy1zdGF0ZSB7XHJcblx0b3BhY2l0eTogMC41O1xyXG5cdHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4uamZiLWFkZG9ucy1wYWdlIHtcclxuXHJcblx0Jl9faW5uZXIge1xyXG5cdFx0cGFkZGluZzogMzBweDtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHR9XHJcblxyXG5cdCZfX2hlYWRlciB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cdH1cclxuXHJcblx0Jl9faGVhZGVyLWNvbnRyb2xzIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEQ0RDREQ7XHJcblxyXG5cdFx0PiAuY3gtdnVpLWJ1dHRvbiB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LmN4LXZ1aS1idXR0b24ge1xyXG5cdFx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cclxuXHRcdC5idXR0b24taWNvbiB7XHJcblx0XHRcdG1hcmdpbi1yaWdodDogNXB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdCYtLXN0eWxlLWFjY2VudCB7XHJcblx0XHRcdGNvbG9yOiAjMDA3Y2JhO1xyXG5cdFx0XHRib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggIzAwN2NiYTtcclxuXHJcblx0XHRcdCY6aG92ZXIge1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDdjYmExMjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LmJ1dHRvbi1pY29uIHtcclxuXHRcdFx0XHRwYXRoIHtcclxuXHRcdFx0XHRcdGZpbGw6ICMwMDdjYmE7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ji0tc3R5bGUtZGFuZ2VyIHtcclxuXHRcdFx0Y29sb3I6ICNkNjMzNmM7XHJcblx0XHRcdGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjZDYzMzZjO1xyXG5cclxuXHRcdFx0Jjpob3ZlciB7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2Q2MzM2YzEyO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQuYnV0dG9uLWljb24ge1xyXG5cdFx0XHRcdHBhdGgge1xyXG5cdFx0XHRcdFx0ZmlsbDogI2Q2MzM2YztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQmX19jb250ZW50IHtcclxuXHRcdFx0PiBzcGFuIHtcclxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5jeC12dWktcG9wdXAge1xyXG5cdFx0Jl9faGVhZGVyIHtcclxuXHRcdFx0cGFkZGluZy1ib3R0b206IDE1cHg7XHJcblx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRENEQ0REO1xyXG5cdFx0XHRtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdCZfX2hlYWRlci10aXRsZSB7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRcdGZvbnQtc2l6ZTogMjRweDtcclxuXHRcdFx0bGluZS1oZWlnaHQ6IDM2cHg7XHJcblx0XHRcdGNvbG9yOiAjMjMyODJEO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Jl9fbGljZW5zZS1wb3B1cCB7XHJcblxyXG5cdH1cclxuXHJcblx0Jl9fbGljZW5zZS1mb3JtIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cdFx0YWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcblxyXG5cdFx0PiBzcGFuIHtcclxuXHRcdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdCZfX2xpY2Vuc2UtaW5wdXQge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHR9XHJcblxyXG5cdC5nby1wcm8tYmFubmVyIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0cGFkZGluZzogMjRweCAwO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEQ0RDREQ7XHJcblxyXG5cdFx0Jl9fc3VidGl0bGUge1xyXG5cdFx0XHRmb250LXNpemU6IDE4cHg7XHJcblx0XHRcdGxpbmUtaGVpZ2h0OiAxLjI1O1xyXG5cdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRjb2xvcjogIzAwN0NCQTtcclxuXHRcdFx0bWFyZ2luLWJvdHRvbTogNXB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdCZfX3RpdGxlIHtcclxuXHRcdFx0Zm9udC1zaXplOiAyNHB4O1xyXG5cdFx0XHRsaW5lLWhlaWdodDogMS4yNTtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0Y29sb3I6ICMyMzI4MkQ7XHJcblx0XHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0Jl9fYnV0dG9uIHtcclxuXHRcdFx0Y29sb3I6IHdoaXRlO1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3Q0JBO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcblx0PGRpdlxyXG5cdFx0Y2xhc3M9XCJqZmItYWRkb25zX19pdGVtXCJcclxuXHRcdDpjbGFzcz1cIntcclxuXHRcdFx0J2FjdGl2YXRlZCc6IGFkZG9uRGF0YS5pc0FjdGl2YXRlZCxcclxuXHRcdFx0J3VwZGF0ZS1hdmFsaWFibGUnOiB1cGRhdGVBdmFsaWFibGUsXHJcblx0XHR9XCJcclxuXHQ+XHJcblx0XHQ8ZGl2XHJcblx0XHRcdGNsYXNzPVwiamZiLWFkZG9uc19faXRlbS1pbm5lclwiXHJcblx0XHRcdDpjbGFzcz1cInsgJ3Byb2NjZXNpbmctc3RhdGUnOiBwcm9jY2VzaW5nU3RhdGUgfVwiXHJcblx0XHQ+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJqZmItYWRkb25zX19pdGVtLXRodW1iXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cInByby1iYWRnZVwiIHYtaWY9XCIhYWRkb25EYXRhLmlzSW5zdGFsbGVkXCI+XHJcblx0XHRcdFx0XHQ8c3ZnIHdpZHRoPVwiNDBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgNDAgMjBcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuXHRcdFx0XHRcdFx0PHJlY3Qgd2lkdGg9XCI0MFwiIGhlaWdodD1cIjIwXCIgcng9XCI0XCIgZmlsbD1cIiNFRTdCMTZcIi8+XHJcblx0XHRcdFx0XHRcdDxwYXRoIGQ9XCJNMTAuNjI1IDEwLjgzMDFWMTRIOS4xNDI1OFY1LjQ2ODc1SDEyLjQwNjJDMTMuMzU5NCA1LjQ2ODc1IDE0LjExNTIgNS43MTY4IDE0LjY3MzggNi4yMTI4OUMxNS4yMzYzIDYuNzA4OTggMTUuNTE3NiA3LjM2NTIzIDE1LjUxNzYgOC4xODE2NEMxNS41MTc2IDkuMDE3NTggMTUuMjQyMiA5LjY2Nzk3IDE0LjY5MTQgMTAuMTMyOEMxNC4xNDQ1IDEwLjU5NzcgMTMuMzc3IDEwLjgzMDEgMTIuMzg4NyAxMC44MzAxSDEwLjYyNVpNMTAuNjI1IDkuNjQwNjJIMTIuNDA2MkMxMi45MzM2IDkuNjQwNjIgMTMuMzM1OSA5LjUxNzU4IDEzLjYxMzMgOS4yNzE0OEMxMy44OTA2IDkuMDIxNDggMTQuMDI5MyA4LjY2MjExIDE0LjAyOTMgOC4xOTMzNkMxNC4wMjkzIDcuNzMyNDIgMTMuODg4NyA3LjM2NTIzIDEzLjYwNzQgNy4wOTE4QzEzLjMyNjIgNi44MTQ0NSAxMi45Mzk1IDYuNjcxODggMTIuNDQ3MyA2LjY2NDA2SDEwLjYyNVY5LjY0MDYyWk0xOS45NTMxIDEwLjcxMjlIMTguMzAwOFYxNEgxNi44MTg0VjUuNDY4NzVIMTkuODE4NEMyMC44MDI3IDUuNDY4NzUgMjEuNTYyNSA1LjY4OTQ1IDIyLjA5NzcgNi4xMzA4NkMyMi42MzI4IDYuNTcyMjcgMjIuOTAwNCA3LjIxMDk0IDIyLjkwMDQgOC4wNDY4OEMyMi45MDA0IDguNjE3MTkgMjIuNzYxNyA5LjA5NTcgMjIuNDg0NCA5LjQ4MjQyQzIyLjIxMDkgOS44NjUyMyAyMS44MjgxIDEwLjE2MDIgMjEuMzM1OSAxMC4zNjcyTDIzLjI1MiAxMy45MjM4VjE0SDIxLjY2NDFMMTkuOTUzMSAxMC43MTI5Wk0xOC4zMDA4IDkuNTIzNDRIMTkuODI0MkMyMC4zMjQyIDkuNTIzNDQgMjAuNzE0OCA5LjM5ODQ0IDIwLjk5NjEgOS4xNDg0NEMyMS4yNzczIDguODk0NTMgMjEuNDE4IDguNTQ4ODMgMjEuNDE4IDguMTExMzNDMjEuNDE4IDcuNjU0MyAyMS4yODcxIDcuMzAwNzggMjEuMDI1NCA3LjA1MDc4QzIwLjc2NzYgNi44MDA3OCAyMC4zODA5IDYuNjcxODggMTkuODY1MiA2LjY2NDA2SDE4LjMwMDhWOS41MjM0NFpNMzEuMTE1MiA5Ljk1NzAzQzMxLjExNTIgMTAuNzkzIDMwLjk3MDcgMTEuNTI3MyAzMC42ODE2IDEyLjE2MDJDMzAuMzkyNiAxMi43ODkxIDI5Ljk3ODUgMTMuMjczNCAyOS40Mzk1IDEzLjYxMzNDMjguOTA0MyAxMy45NDkyIDI4LjI4NzEgMTQuMTE3MiAyNy41ODc5IDE0LjExNzJDMjYuODk2NSAxNC4xMTcyIDI2LjI3OTMgMTMuOTQ5MiAyNS43MzYzIDEzLjYxMzNDMjUuMTk3MyAxMy4yNzM0IDI0Ljc3OTMgMTIuNzkxIDI0LjQ4MjQgMTIuMTY2QzI0LjE4OTUgMTEuNTQxIDI0LjA0MSAxMC44MjAzIDI0LjAzNzEgMTAuMDAzOVY5LjUyMzQ0QzI0LjAzNzEgOC42OTE0MSAyNC4xODM2IDcuOTU3MDMgMjQuNDc2NiA3LjMyMDMxQzI0Ljc3MzQgNi42ODM1OSAyNS4xODk1IDYuMTk3MjcgMjUuNzI0NiA1Ljg2MTMzQzI2LjI2MzcgNS41MjE0OCAyNi44ODA5IDUuMzUxNTYgMjcuNTc2MiA1LjM1MTU2QzI4LjI3MTUgNS4zNTE1NiAyOC44ODY3IDUuNTE5NTMgMjkuNDIxOSA1Ljg1NTQ3QzI5Ljk2MDkgNi4xODc1IDMwLjM3NyA2LjY2Nzk3IDMwLjY2OTkgNy4yOTY4OEMzMC45NjI5IDcuOTIxODggMzEuMTExMyA4LjY1MDM5IDMxLjExNTIgOS40ODI0MlY5Ljk1NzAzWk0yOS42MzI4IDkuNTExNzJDMjkuNjMyOCA4LjU2NjQxIDI5LjQ1MzEgNy44NDE4IDI5LjA5MzggNy4zMzc4OUMyOC43MzgzIDYuODMzOTggMjguMjMyNCA2LjU4MjAzIDI3LjU3NjIgNi41ODIwM0MyNi45MzU1IDYuNTgyMDMgMjYuNDMzNiA2LjgzMzk4IDI2LjA3MDMgNy4zMzc4OUMyNS43MTA5IDcuODM3ODkgMjUuNTI3MyA4LjU0Njg4IDI1LjUxOTUgOS40NjQ4NFY5Ljk1NzAzQzI1LjUxOTUgMTAuODk0NSAyNS43MDEyIDExLjYxOTEgMjYuMDY0NSAxMi4xMzA5QzI2LjQzMTYgMTIuNjQyNiAyNi45Mzk1IDEyLjg5ODQgMjcuNTg3OSAxMi44OTg0QzI4LjI0NDEgMTIuODk4NCAyOC43NDggMTIuNjQ4NCAyOS4wOTk2IDEyLjE0ODRDMjkuNDU1MSAxMS42NDg0IDI5LjYzMjggMTAuOTE4IDI5LjYzMjggOS45NTcwM1Y5LjUxMTcyWlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuXHRcdFx0XHRcdDwvc3ZnPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxpbWcgOnNyYz1cImFkZG9uRGF0YS50aHVtYlwiIGFsdD1cIlwiPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImpmYi1hZGRvbnNfX2l0ZW0taW5mb1wiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJqZmItYWRkb25zX19pdGVtLW5hbWVcIj5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwibGFiZWxcIj57eyBhZGRvbkRhdGEubmFtZSB9fTwvc3Bhbj5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwidmVyc2lvblwiPnt7IGFkZG9uRGF0YS5jdXJyZW50VmVyc2lvbiB9fTwvc3Bhbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRjbGFzcz1cImpmYi1hZGRvbnNfX2l0ZW0tdXBkYXRlXCJcclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8ZGl2IHYtaWY9XCIhdXBkYXRlQXZhbGlhYmxlXCI+WW91ciBwbHVnaW4gaXMgdXAgdG8gZGF0ZTwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiB2LWlmPVwidXBkYXRlQXZhbGlhYmxlXCI+XHJcblx0XHRcdFx0XHRcdFZlcnNpb24gPHNwYW4gY2xhc3M9XCJsYXRlc3QtdmVyc2lvblwiPnt7IGFkZG9uRGF0YS52ZXJzaW9uIH19PC9zcGFuPiBhdmFpbGFibGVcclxuXHRcdFx0XHRcdFx0PGN4LXZ1aS1idXR0b25cclxuXHRcdFx0XHRcdFx0XHRidXR0b24tc3R5bGU9XCJsaW5rLWFjY2VudFwiXHJcblx0XHRcdFx0XHRcdFx0c2l6ZT1cImxpbmtcIlxyXG5cdFx0XHRcdFx0XHRcdDpsb2FkaW5nPVwidXBkYXRlUGx1Z2luUHJvY2Vzc2VkXCJcclxuXHRcdFx0XHRcdFx0XHRAY2xpY2s9XCJ1cGRhdGVQbHVnaW5cIlxyXG5cdFx0XHRcdFx0XHRcdHYtaWY9XCIhYWN0aXZhdGVMaWNlbmNlQWN0aW9uQXZhbGlhYmxlICYmIGlzTGljZW5zZU1vZGVcIlxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gc2xvdD1cImxhYmVsXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5VcGRhdGUgTm93PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9jeC12dWktYnV0dG9uPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0Y2xhc3M9XCJqZmItYWRkb25zX19pdGVtLWxpY2Vuc2VcIlxyXG5cdFx0XHRcdFx0di1pZj1cImFjdGl2YXRlTGljZW5jZUFjdGlvbkF2YWxpYWJsZVwiXHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PHNwYW4+TGljZW5zZSBub3QgYWN0aXZhdGVkPC9zcGFuPlxyXG5cdFx0XHRcdFx0PGN4LXZ1aS1idXR0b25cclxuXHRcdFx0XHRcdFx0YnV0dG9uLXN0eWxlPVwibGluay1hY2NlbnRcIlxyXG5cdFx0XHRcdFx0XHRzaXplPVwibGlua1wiXHJcblx0XHRcdFx0XHRcdEBjbGljaz1cImFjdGl2YXRlTGljZW5zZVwiXHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxzcGFuIHNsb3Q9XCJsYWJlbFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuPkFjdGl2YXRlIE5vdzwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9jeC12dWktYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdGNsYXNzPVwiamZiLWFkZG9uc19faXRlbS1kZXNjXCJcclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8c3BhbiB2LWh0bWw9XCJhZGRvbkRhdGEuZGVzY1wiPjwvc3Bhbj5cclxuXHRcdFx0XHRcdDxhIDpocmVmPVwibGVhcm5Nb3JlVXJsXCIgdGFyZ2V0PVwiX2JsYW5rXCI+TGVhcm4gTW9yZTwvYT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiamZiLWFkZG9uc19faXRlbS1hY3Rpb25zXCI+XHJcblxyXG5cdFx0XHRcdFx0PGN4LXZ1aS1idXR0b25cclxuXHRcdFx0XHRcdFx0YnV0dG9uLXN0eWxlPVwibGluay1hY2NlbnRcIlxyXG5cdFx0XHRcdFx0XHRzaXplPVwibGlua1wiXHJcblx0XHRcdFx0XHRcdDpsb2FkaW5nPVwiYWN0aW9uUGx1Z2luUHJvY2Vzc2VkXCJcclxuXHRcdFx0XHRcdFx0di1pZj1cImluc3RhbGxBY3Rpb25BdmFsaWFibGVcIlxyXG5cdFx0XHRcdFx0XHRAY2xpY2s9XCJpbnN0YWxsUGx1Z2luXCJcclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PHNwYW4gc2xvdD1cImxhYmVsXCI+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4+SW5zdGFsbCBBZGRvbjwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9jeC12dWktYnV0dG9uPlxyXG5cdFx0XHRcdFx0PGN4LXZ1aS1idXR0b25cclxuXHRcdFx0XHRcdFx0YnV0dG9uLXN0eWxlPVwibGluay1hY2NlbnRcIlxyXG5cdFx0XHRcdFx0XHRzaXplPVwibGlua1wiXHJcblx0XHRcdFx0XHRcdDpsb2FkaW5nPVwiYWN0aW9uUGx1Z2luUHJvY2Vzc2VkXCJcclxuXHRcdFx0XHRcdFx0di1pZj1cImFjdGl2YXRlQWN0aW9uQXZhbGlhYmxlXCJcclxuXHRcdFx0XHRcdFx0QGNsaWNrPVwiYWN0aXZhdGVQbHVnaW5cIlxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBzbG90PVwibGFiZWxcIj5cclxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj5BY3RpdmF0ZSBBZGRvbjwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9jeC12dWktYnV0dG9uPlxyXG5cdFx0XHRcdFx0PGN4LXZ1aS1idXR0b25cclxuXHRcdFx0XHRcdFx0YnV0dG9uLXN0eWxlPVwibGluay1lcnJvclwiXHJcblx0XHRcdFx0XHRcdHNpemU9XCJsaW5rXCJcclxuXHRcdFx0XHRcdFx0OmxvYWRpbmc9XCJhY3Rpb25QbHVnaW5Qcm9jZXNzZWRcIlxyXG5cdFx0XHRcdFx0XHR2LWlmPVwiZGVhY3RpdmF0ZUFjdGlvbkF2YWxpYWJsZVwiXHJcblx0XHRcdFx0XHRcdEBjbGljaz1cImRlYWN0aXZhdGVQbHVnaW5cIlxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBzbG90PVwibGFiZWxcIj5cclxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj5EZWFjdGl2YXRlIEFkZG9uPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHQ8L2N4LXZ1aS1idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblxyXG5cdDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRuYW1lOiAnYWRkb24taXRlbScsXHJcblx0cHJvcHM6IHtcclxuXHRcdGFkZG9uRGF0YTogT2JqZWN0XHJcblx0fSxcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0YWN0aW9uUGx1Z2luOiBmYWxzZSxcclxuXHRcdFx0YWN0aW9uUGx1Z2luUmVxdWVzdDogbnVsbCxcclxuXHRcdFx0YWN0aW9uUGx1Z2luUHJvY2Vzc2VkOiBmYWxzZSxcclxuXHRcdFx0dXBkYXRlUGx1Z2luUHJvY2Vzc2VkOiBmYWxzZSxcclxuXHRcdH07XHJcblx0fSxcclxuXHRjb21wdXRlZDoge1xyXG5cdFx0Y2xhc3NMaXN0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuIFtcclxuXHRcdFx0XHQnamZiLWFkZG9uc19faXRlbScsXHJcblx0XHRcdFx0dGhpcy51cGRhdGVBdmFsaWFibGUgPyAndXBkYXRlLWF2YWxpYWJsZScgOiBmYWxzZSxcclxuXHRcdFx0XHR0aGlzLmFjdGl2YXRlQXZhbGlhYmxlID8gJ2FjdGl2YXRlLWF2YWxpYWJsZScgOiBmYWxzZSxcclxuXHRcdFx0XTtcclxuXHRcdH0sXHJcblxyXG5cdFx0bGVhcm5Nb3JlQXZhbGlhYmxlKCkge1xyXG5cdFx0XHRyZXR1cm4gKCAhIHRoaXMuJHBhcmVudC5pc0xpY2Vuc2VBY3RpdmF0ZWQgKSA/IHRydWUgOiBmYWxzZTtcclxuXHRcdH0sXHJcblxyXG5cdFx0YWN0aXZhdGVMaWNlbmNlQWN0aW9uQXZhbGlhYmxlKCkge1xyXG5cdFx0XHRyZXR1cm4gKCAhIHRoaXMuJHBhcmVudC5pc0xpY2Vuc2VBY3RpdmF0ZWQgJiYgdGhpcy4kcGFyZW50LmlzTGljZW5zZU1vZGUgKSA/IHRydWUgOiBmYWxzZTtcclxuXHRcdH0sXHJcblxyXG5cdFx0aW5zdGFsbEFjdGlvbkF2YWxpYWJsZSgpIHtcclxuXHRcdFx0cmV0dXJuICggISB0aGlzLmFkZG9uRGF0YVsnaXNJbnN0YWxsZWQnXSAmJiB0aGlzLiRwYXJlbnQuaXNMaWNlbnNlQWN0aXZhdGVkICkgPyB0cnVlIDogZmFsc2U7XHJcblx0XHR9LFxyXG5cclxuXHRcdGFjdGl2YXRlQWN0aW9uQXZhbGlhYmxlKCkge1xyXG5cdFx0XHRyZXR1cm4gKCB0aGlzLmFkZG9uRGF0YVsnaXNJbnN0YWxsZWQnXSAmJiAhIHRoaXMuYWRkb25EYXRhWydpc0FjdGl2YXRlZCddICkgPyB0cnVlIDogZmFsc2U7XHJcblx0XHR9LFxyXG5cclxuXHRcdGRlYWN0aXZhdGVBY3Rpb25BdmFsaWFibGUoKSB7XHJcblx0XHRcdHJldHVybiAoIHRoaXMuYWRkb25EYXRhWydpc0luc3RhbGxlZCddICYmIHRoaXMuYWRkb25EYXRhWydpc0FjdGl2YXRlZCddICkgPyB0cnVlIDogZmFsc2U7XHJcblx0XHR9LFxyXG5cclxuXHRcdHVwZGF0ZUF2YWxpYWJsZSgpIHtcclxuXHRcdFx0cmV0dXJuICggdGhpcy5hZGRvbkRhdGFbJ3VwZGF0ZUF2YWxpYWJsZSddICkgPyB0cnVlIDogZmFsc2U7XHJcblx0XHR9LFxyXG5cclxuXHRcdGlzTGljZW5zZU1vZGUoKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLiRwYXJlbnQuaXNMaWNlbnNlTW9kZTtcclxuXHRcdH0sXHJcblxyXG5cdFx0cHJvY2Nlc2luZ1N0YXRlKCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5hY3Rpb25QbHVnaW5Qcm9jZXNzZWQgfHwgdGhpcy51cGRhdGVQbHVnaW5Qcm9jZXNzZWQ7XHJcblx0XHR9LFxyXG5cclxuXHRcdGxlYXJuTW9yZVVybCgpIHtcclxuXHRcdFx0bGV0IGRlbW9VcmwgPSB0aGlzLmFkZG9uRGF0YS5kZW1vLFxyXG5cdFx0XHRcdHV0bVBhcmFtcyA9IHRoaXMuJHBhcmVudC5nZXRVdG1QYXJhbXNTdHJpbmcoIHtcclxuXHRcdFx0XHRcdHV0bV9zb3VyY2U6IGBkYXNoYm9hcmQvamV0LWZvcm0tYnVpbGRlci1hZGRvbnMtcGFnZWAsXHJcblx0XHRcdFx0XHR1dG1fbWVkaXVtOiBgY3JvY29ibG9jay1saWNlbnNlLyR7IHRoaXMuJHBhcmVudC50aGVtZUluZm8udGhlbWUgfWAsXHJcblx0XHRcdFx0XHR1dG1fY2FtcGFpZ246ICdhZGRvbi1sZWFybi1tb3JlJyxcclxuXHRcdFx0XHR9ICk7XHJcblxyXG5cdFx0XHRyZXR1cm4gYCR7IGRlbW9VcmwgfT8keyB1dG1QYXJhbXMgfWA7XHJcblx0XHR9XHJcblxyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cclxuXHRcdGFjdGl2YXRlTGljZW5zZSgpIHtcclxuXHRcdFx0d2luZG93LmpmYkV2ZW50QnVzLiRlbWl0KCAnc2hvd0xpY2Vuc2VQb3B1cCcgKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0aW5zdGFsbFBsdWdpbigpIHtcclxuXHRcdFx0dGhpcy5hY3Rpb25QbHVnaW4gPSAnaW5zdGFsbCc7XHJcblx0XHRcdHRoaXMucGx1Z2luQWN0aW9uKCk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGRlYWN0aXZhdGVQbHVnaW4oKSB7XHJcblx0XHRcdHRoaXMuYWN0aW9uUGx1Z2luID0gJ2RlYWN0aXZhdGUnO1xyXG5cdFx0XHR0aGlzLnBsdWdpbkFjdGlvbigpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRhY3RpdmF0ZVBsdWdpbigpIHtcclxuXHRcdFx0dGhpcy5hY3Rpb25QbHVnaW4gPSAnYWN0aXZhdGUnO1xyXG5cdFx0XHR0aGlzLnBsdWdpbkFjdGlvbigpO1xyXG5cdFx0fSxcclxuXHJcblx0XHR1cGRhdGVQbHVnaW4oKSB7XHJcblxyXG5cdFx0XHRpZiAoIHRoaXMudXBkYXRlQXZhbGlhYmxlICkge1xyXG5cdFx0XHRcdHRoaXMuYWN0aW9uUGx1Z2luID0gJ3VwZGF0ZSc7XHJcblx0XHRcdFx0dGhpcy5wbHVnaW5BY3Rpb24oKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHRwbHVnaW5BY3Rpb246IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG5cdFx0XHRzZWxmLmFjdGlvblBsdWdpblJlcXVlc3QgPSBqUXVlcnkuYWpheCgge1xyXG5cdFx0XHRcdHR5cGU6ICdQT1NUJyxcclxuXHRcdFx0XHR1cmw6IHdpbmRvdy5KZXRGQlBhZ2VDb25maWcuYWpheFVybCxcclxuXHRcdFx0XHRkYXRhVHlwZTogJ2pzb24nLFxyXG5cdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdGFjdGlvbjogYGpmYl9hZGRvbl8keyBzZWxmLmFjdGlvblBsdWdpbiB9X2FjdGlvbmAsXHJcblx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdHBsdWdpbjogc2VsZi5hZGRvbkRhdGFbJ3NsdWcnXVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0YmVmb3JlU2VuZDogZnVuY3Rpb24oIGpxWEhSLCBhamF4U2V0dGluZ3MgKSB7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBudWxsICE9PSBzZWxmLmFjdGlvblBsdWdpblJlcXVlc3QgKSB7XHJcblx0XHRcdFx0XHRcdHNlbGYuYWN0aW9uUGx1Z2luUmVxdWVzdC5hYm9ydCgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHN3aXRjaCAoIHNlbGYuYWN0aW9uUGx1Z2luICkge1xyXG5cdFx0XHRcdFx0XHRjYXNlICdpbnN0YWxsJzpcclxuXHRcdFx0XHRcdFx0Y2FzZSAnYWN0aXZhdGUnOlxyXG5cdFx0XHRcdFx0XHRjYXNlICdkZWFjdGl2YXRlJzpcclxuXHRcdFx0XHRcdFx0XHRzZWxmLmFjdGlvblBsdWdpblByb2Nlc3NlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGNhc2UgJ3VwZGF0ZSc6XHJcblx0XHRcdFx0XHRcdFx0c2VsZi51cGRhdGVQbHVnaW5Qcm9jZXNzZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24oIHJlc3BvbmNlLCB0ZXh0U3RhdHVzLCBqcVhIUiApIHtcclxuXHJcblx0XHRcdFx0XHRzd2l0Y2ggKCBzZWxmLmFjdGlvblBsdWdpbiApIHtcclxuXHRcdFx0XHRcdFx0Y2FzZSAnaW5zdGFsbCc6XHJcblx0XHRcdFx0XHRcdGNhc2UgJ2FjdGl2YXRlJzpcclxuXHRcdFx0XHRcdFx0Y2FzZSAnZGVhY3RpdmF0ZSc6XHJcblx0XHRcdFx0XHRcdFx0c2VsZi5hY3Rpb25QbHVnaW5Qcm9jZXNzZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0Y2FzZSAndXBkYXRlJzpcclxuXHRcdFx0XHRcdFx0XHRzZWxmLnVwZGF0ZVBsdWdpblByb2Nlc3NlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmICggcmVzcG9uY2Uuc3VjY2VzcyApIHtcclxuXHRcdFx0XHRcdFx0c2VsZi4kQ1hOb3RpY2UuYWRkKCB7XHJcblx0XHRcdFx0XHRcdFx0bWVzc2FnZTogcmVzcG9uY2UubWVzc2FnZSxcclxuXHRcdFx0XHRcdFx0XHR0eXBlOiAnc3VjY2VzcycsXHJcblx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDQwMDAsXHJcblx0XHRcdFx0XHRcdH0gKTtcclxuXHJcblx0XHRcdFx0XHRcdHdpbmRvdy5qZmJFdmVudEJ1cy4kZW1pdCggJ3VwZGF0ZUFkZG9uRGF0YScsIHtcclxuXHRcdFx0XHRcdFx0XHRzbHVnOiBzZWxmLmFkZG9uRGF0YVsnc2x1ZyddLFxyXG5cdFx0XHRcdFx0XHRcdGFkZG9uRGF0YTogcmVzcG9uY2UuZGF0YSxcclxuXHRcdFx0XHRcdFx0XHRhY3Rpb246IHNlbGYuYWN0aW9uUGx1Z2luLFxyXG5cdFx0XHRcdFx0XHR9ICk7XHJcblxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0c2VsZi4kQ1hOb3RpY2UuYWRkKCB7XHJcblx0XHRcdFx0XHRcdFx0bWVzc2FnZTogcmVzcG9uY2UubWVzc2FnZSxcclxuXHRcdFx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxyXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiA0MDAwLFxyXG5cdFx0XHRcdFx0XHR9ICk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9ICk7XHJcblx0XHR9XHJcblx0fSxcclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG5cclxuLmpmYi1hZGRvbnMge1xyXG5cdG1hcmdpbi1ib3R0b206IDUwcHg7XHJcblxyXG5cdCY6bGFzdC1jaGlsZCB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAwO1xyXG5cdH1cclxuXHJcblx0YSB7XHJcblx0XHRjb2xvcjogIzAwN2NiYTtcclxuXHR9XHJcblxyXG5cdCZfX2hlYWRlciB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cdH1cclxuXHJcblx0Jl9fbGlzdCB7XHJcblx0XHRkaXNwbGF5OiBncmlkO1xyXG5cdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcclxuXHRcdGdhcDogNDBweDtcclxuXHJcblx0XHRAbWVkaWEgKG1heC13aWR0aDogMTE0MHB4KSB7XHJcblx0XHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQmX19pdGVtIHtcclxuXHRcdHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjNzIGVhc2Utb3V0O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcblx0XHQmOmhvdmVyIHtcclxuXHRcdFx0Ym94LXNoYWRvdzogMHB4IDRweCAyOHB4IHJnYmEoMTUsIDIzLCA0MiwgMC4xKTtcclxuXHRcdH1cclxuXHJcblx0XHQmLmFjdGl2YXRlZCB7XHJcblx0XHRcdC5qZmItYWRkb25zX19pdGVtLWluZm8ge1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ji51cGRhdGUtYXZhbGlhYmxlIHtcclxuXHRcdFx0LmpmYi1hZGRvbnNfX2l0ZW0tbmFtZSB7XHJcblx0XHRcdFx0LnZlcnNpb24ge1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI0Q2MzM2QztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0LmpmYi1hZGRvbnNfX2l0ZW0tdXBkYXRlIHtcclxuXHRcdFx0XHQubGF0ZXN0LXZlcnNpb24ge1xyXG5cdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzQ2QjQ1MDtcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDJweCA4cHg7XHJcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQmX19pdGVtLWlubmVyIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0YWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0fVxyXG5cclxuXHQmX19pdGVtLXRodW1iIHtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XHJcblx0XHRsaW5lLWhlaWdodDogMDtcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG5cdFx0LnByby1iYWRnZSB7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0dG9wOiAxMnB4O1xyXG5cdFx0XHRsZWZ0OiAxMnB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdGltZyB7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRoZWlnaHQ6IGF1dG87XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQmX19pdGVtLWluZm8ge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuXHRcdGZsZXg6IDEgMSBhdXRvO1xyXG5cdFx0cGFkZGluZzogMjBweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XHJcblx0XHRib3JkZXItd2lkdGg6IDAgMXB4IDFweCAxcHg7XHJcblx0XHRib3JkZXItY29sb3I6ICNEQ0RDREQ7XHJcblx0XHRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblx0fVxyXG5cclxuXHQmX19pdGVtLW5hbWUge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcblx0XHQubGFiZWwge1xyXG5cdFx0XHRmb250LXNpemU6IDIwcHg7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0XHRcdGxpbmUtaGVpZ2h0OiAxLjI1O1xyXG5cdFx0fVxyXG5cclxuXHRcdC52ZXJzaW9uIHtcclxuXHRcdFx0cGFkZGluZzogMXB4IDhweDtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdFx0XHRjb2xvcjogd2hpdGU7XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICM0NkI0NTA7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Jl9faXRlbS11cGRhdGUge1xyXG5cdFx0Y29sb3I6ICM3YjdlODE7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cdH1cclxuXHJcblx0Jl9faXRlbS1saWNlbnNlIHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0XHRjb2xvcjogIzdiN2U4MTtcclxuXHJcblx0XHQuY3gtdnVpLWJ1dHRvbiB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAzcHg7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQmX19pdGVtLWRlc2Mge1xyXG5cdFx0ZmxleDogMSAxIGF1dG87XHJcblxyXG5cdFx0YSB7XHJcblx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdCZfX2l0ZW0tYWN0aW9ucyB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGZsZXgtd3JhcDogd3JhcDtcclxuXHRcdG1hcmdpbi10b3A6IDIwcHg7XHJcblxyXG5cdFx0JjplbXB0eSB7XHJcblx0XHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0XHR9XHJcblxyXG5cdFx0LmN4LXZ1aS1idXR0b24ge1xyXG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG48L3N0eWxlPiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnByb2NjZXNpbmctc3RhdGUge1xcbiAgb3BhY2l0eTogMC41O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5qZmItYWRkb25zLXBhZ2VfX2lubmVyIHtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5qZmItYWRkb25zLXBhZ2VfX2hlYWRlciB7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlX19oZWFkZXItY29udHJvbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RDRENERDtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZV9faGVhZGVyLWNvbnRyb2xzID4gLmN4LXZ1aS1idXR0b24ge1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmN4LXZ1aS1idXR0b24ge1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlIC5jeC12dWktYnV0dG9uIC5idXR0b24taWNvbiB7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuY3gtdnVpLWJ1dHRvbi0tc3R5bGUtYWNjZW50IHtcXG4gIGNvbG9yOiAjMDA3Y2JhO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICMwMDdjYmE7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmN4LXZ1aS1idXR0b24tLXN0eWxlLWFjY2VudDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3Y2JhMTI7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmN4LXZ1aS1idXR0b24tLXN0eWxlLWFjY2VudCAuYnV0dG9uLWljb24gcGF0aCB7XFxuICBmaWxsOiAjMDA3Y2JhO1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlIC5jeC12dWktYnV0dG9uLS1zdHlsZS1kYW5nZXIge1xcbiAgY29sb3I6ICNkNjMzNmM7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggI2Q2MzM2YztcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuY3gtdnVpLWJ1dHRvbi0tc3R5bGUtZGFuZ2VyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNjMzNmMxMjtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuY3gtdnVpLWJ1dHRvbi0tc3R5bGUtZGFuZ2VyIC5idXR0b24taWNvbiBwYXRoIHtcXG4gIGZpbGw6ICNkNjMzNmM7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmN4LXZ1aS1idXR0b25fX2NvbnRlbnQgPiBzcGFuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmN4LXZ1aS1wb3B1cF9faGVhZGVyIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEQ0RDREQ7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlIC5jeC12dWktcG9wdXBfX2hlYWRlci10aXRsZSB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XFxuICBjb2xvcjogIzIzMjgyRDtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZV9fbGljZW5zZS1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxufVxcbi5qZmItYWRkb25zLXBhZ2VfX2xpY2Vuc2UtZm9ybSA+IHNwYW4ge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZV9fbGljZW5zZS1pbnB1dCB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlIC5nby1wcm8tYmFubmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMjRweCAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEQ0RDREQ7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmdvLXByby1iYW5uZXJfX3N1YnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiAjMDA3Q0JBO1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlIC5nby1wcm8tYmFubmVyX190aXRsZSB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBsaW5lLWhlaWdodDogMS4yNTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogIzIzMjgyRDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmdvLXByby1iYW5uZXJfX2J1dHRvbiB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3Q0JBO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9hZG1pbi9wYWdlcy9qZmItYWRkb25zL0FkZG9uc1BhZ2UudnVlXCIsXCJ3ZWJwYWNrOi8vLi8uLi9BZGRvbnNQYWdlLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUE2WkE7RUFDQyxZQUFBO0VBQ0Esb0JBQUE7QUM1WkQ7QURpYUM7RUFDQyxhQUFBO0VBQ0EsWUFBQTtBQzlaRjtBRGlhQztFQUNDLG1CQUFBO0FDL1pGO0FEa2FDO0VBQ0MsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdDQUFBO0FDaGFGO0FEa2FFO0VBQ0MsaUJBQUE7QUNoYUg7QURvYUM7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBQ2xhRjtBRG9hRTtFQUNDLGlCQUFBO0FDbGFIO0FEcWFFO0VBQ0MsY0FBQTtFQUNBLG1DQUFBO0FDbmFIO0FEcWFHO0VBQ0MsMkJBQUE7QUNuYUo7QUR1YUk7RUFDQyxhQUFBO0FDcmFMO0FEMGFFO0VBQ0MsY0FBQTtFQUNBLG1DQUFBO0FDeGFIO0FEMGFHO0VBQ0MsMkJBQUE7QUN4YUo7QUQ0YUk7RUFDQyxhQUFBO0FDMWFMO0FEZ2JHO0VBQ0MsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUM5YUo7QURvYkU7RUFDQyxvQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7QUNsYkg7QURxYkU7RUFDQyxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNuYkg7QUQyYkM7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0FDemJGO0FEMmJFO0VBQ0MsbUJBQUE7QUN6Ykg7QUQ2YkM7RUFDQyxtQkFBQTtBQzNiRjtBRDhiQztFQUNDLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUM1YkY7QUQ4YkU7RUFDQyxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQzViSDtBRCtiRTtFQUNDLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDN2JIO0FEZ2NFO0VBQ0MsWUFBQTtFQUNBLHlCQUFBO0FDOWJIXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcclxcblxcclxcbi5wcm9jY2VzaW5nLXN0YXRlIHtcXHJcXG5cXHRvcGFjaXR5OiAwLjU7XFxyXFxuXFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5qZmItYWRkb25zLXBhZ2Uge1xcclxcblxcclxcblxcdCZfX2lubmVyIHtcXHJcXG5cXHRcXHRwYWRkaW5nOiAzMHB4O1xcclxcblxcdFxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Jl9faGVhZGVyIHtcXHJcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQmX19oZWFkZXItY29udHJvbHMge1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdHBhZGRpbmctYm90dG9tOiAxNXB4O1xcclxcblxcdFxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRENEQ0REO1xcclxcblxcclxcblxcdFxcdD4gLmN4LXZ1aS1idXR0b24ge1xcclxcblxcdFxcdFxcdG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LmN4LXZ1aS1idXR0b24ge1xcclxcblxcdFxcdGZvbnQtc2l6ZTogMTNweDtcXHJcXG5cXHRcXHRmb250LXdlaWdodDogNDAwO1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcblxcclxcblxcdFxcdC5idXR0b24taWNvbiB7XFxyXFxuXFx0XFx0XFx0bWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdCYtLXN0eWxlLWFjY2VudCB7XFxyXFxuXFx0XFx0XFx0Y29sb3I6ICMwMDdjYmE7XFxyXFxuXFx0XFx0XFx0Ym94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICMwMDdjYmE7XFxyXFxuXFxyXFxuXFx0XFx0XFx0Jjpob3ZlciB7XFxyXFxuXFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogIzAwN2NiYTEyO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHQuYnV0dG9uLWljb24ge1xcclxcblxcdFxcdFxcdFxcdHBhdGgge1xcclxcblxcdFxcdFxcdFxcdFxcdGZpbGw6ICMwMDdjYmE7XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Ji0tc3R5bGUtZGFuZ2VyIHtcXHJcXG5cXHRcXHRcXHRjb2xvcjogI2Q2MzM2YztcXHJcXG5cXHRcXHRcXHRib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggI2Q2MzM2YztcXHJcXG5cXHJcXG5cXHRcXHRcXHQmOmhvdmVyIHtcXHJcXG5cXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZDYzMzZjMTI7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdC5idXR0b24taWNvbiB7XFxyXFxuXFx0XFx0XFx0XFx0cGF0aCB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0ZmlsbDogI2Q2MzM2YztcXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQmX19jb250ZW50IHtcXHJcXG5cXHRcXHRcXHQ+IHNwYW4ge1xcclxcblxcdFxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQuY3gtdnVpLXBvcHVwIHtcXHJcXG5cXHRcXHQmX19oZWFkZXIge1xcclxcblxcdFxcdFxcdHBhZGRpbmctYm90dG9tOiAxNXB4O1xcclxcblxcdFxcdFxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRENEQ0REO1xcclxcblxcdFxcdFxcdG1hcmdpbi1ib3R0b206IDMwcHg7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdCZfX2hlYWRlci10aXRsZSB7XFxyXFxuXFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDUwMDtcXHJcXG5cXHRcXHRcXHRmb250LXNpemU6IDI0cHg7XFxyXFxuXFx0XFx0XFx0bGluZS1oZWlnaHQ6IDM2cHg7XFxyXFxuXFx0XFx0XFx0Y29sb3I6ICMyMzI4MkQ7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQmX19saWNlbnNlLXBvcHVwIHtcXHJcXG5cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Jl9fbGljZW5zZS1mb3JtIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcblxcdFxcdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcblxcclxcblxcdFxcdD4gc3BhbiB7XFxyXFxuXFx0XFx0XFx0bWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCZfX2xpY2Vuc2UtaW5wdXQge1xcclxcblxcdFxcdG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5nby1wcm8tYmFubmVyIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHRwYWRkaW5nOiAyNHB4IDA7XFxyXFxuXFx0XFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEQ0RDREQ7XFxyXFxuXFxyXFxuXFx0XFx0Jl9fc3VidGl0bGUge1xcclxcblxcdFxcdFxcdGZvbnQtc2l6ZTogMThweDtcXHJcXG5cXHRcXHRcXHRsaW5lLWhlaWdodDogMS4yNTtcXHJcXG5cXHRcXHRcXHRmb250LXdlaWdodDogNTAwO1xcclxcblxcdFxcdFxcdGNvbG9yOiAjMDA3Q0JBO1xcclxcblxcdFxcdFxcdG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Jl9fdGl0bGUge1xcclxcblxcdFxcdFxcdGZvbnQtc2l6ZTogMjRweDtcXHJcXG5cXHRcXHRcXHRsaW5lLWhlaWdodDogMS4yNTtcXHJcXG5cXHRcXHRcXHRmb250LXdlaWdodDogNTAwO1xcclxcblxcdFxcdFxcdGNvbG9yOiAjMjMyODJEO1xcclxcblxcdFxcdFxcdG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdCZfX2J1dHRvbiB7XFxyXFxuXFx0XFx0XFx0Y29sb3I6IHdoaXRlO1xcclxcblxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICMwMDdDQkE7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuXCIsXCIucHJvY2Nlc2luZy1zdGF0ZSB7XFxuICBvcGFjaXR5OiAwLjU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmpmYi1hZGRvbnMtcGFnZV9faW5uZXIge1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZV9faGVhZGVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcbi5qZmItYWRkb25zLXBhZ2VfX2hlYWRlci1jb250cm9scyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRENEQ0REO1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlX19oZWFkZXItY29udHJvbHMgPiAuY3gtdnVpLWJ1dHRvbiB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuY3gtdnVpLWJ1dHRvbiB7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmN4LXZ1aS1idXR0b24gLmJ1dHRvbi1pY29uIHtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlIC5jeC12dWktYnV0dG9uLS1zdHlsZS1hY2NlbnQge1xcbiAgY29sb3I6ICMwMDdjYmE7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggIzAwN2NiYTtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuY3gtdnVpLWJ1dHRvbi0tc3R5bGUtYWNjZW50OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdjYmExMjtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuY3gtdnVpLWJ1dHRvbi0tc3R5bGUtYWNjZW50IC5idXR0b24taWNvbiBwYXRoIHtcXG4gIGZpbGw6ICMwMDdjYmE7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmN4LXZ1aS1idXR0b24tLXN0eWxlLWRhbmdlciB7XFxuICBjb2xvcjogI2Q2MzM2YztcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjZDYzMzZjO1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlIC5jeC12dWktYnV0dG9uLS1zdHlsZS1kYW5nZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q2MzM2YzEyO1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlIC5jeC12dWktYnV0dG9uLS1zdHlsZS1kYW5nZXIgLmJ1dHRvbi1pY29uIHBhdGgge1xcbiAgZmlsbDogI2Q2MzM2YztcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuY3gtdnVpLWJ1dHRvbl9fY29udGVudCA+IHNwYW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuY3gtdnVpLXBvcHVwX19oZWFkZXIge1xcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RDRENERDtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmN4LXZ1aS1wb3B1cF9faGVhZGVyLXRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBsaW5lLWhlaWdodDogMzZweDtcXG4gIGNvbG9yOiAjMjMyODJEO1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlX19saWNlbnNlLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZV9fbGljZW5zZS1mb3JtID4gc3BhbiB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlX19saWNlbnNlLWlucHV0IHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmdvLXByby1iYW5uZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyNHB4IDA7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RDRENERDtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuZ28tcHJvLWJhbm5lcl9fc3VidGl0bGUge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY29sb3I6ICMwMDdDQkE7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmdvLXByby1iYW5uZXJfX3RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiAjMjMyODJEO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuZ28tcHJvLWJhbm5lcl9fYnV0dG9uIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdDQkE7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5qZmItYWRkb25zIHtcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcbi5qZmItYWRkb25zOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuLmpmYi1hZGRvbnMgYSB7XFxuICBjb2xvcjogIzAwN2NiYTtcXG59XFxuLmpmYi1hZGRvbnNfX2hlYWRlciB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4uamZiLWFkZG9uc19fbGlzdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gIGdhcDogNDBweDtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDExNDBweCkge1xcbi5qZmItYWRkb25zX19saXN0IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG59XFxufVxcbi5qZmItYWRkb25zX19pdGVtIHtcXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcyBlYXNlLW91dDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5qZmItYWRkb25zX19pdGVtOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDBweCA0cHggMjhweCByZ2JhKDE1LCAyMywgNDIsIDAuMSk7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLmFjdGl2YXRlZCAuamZiLWFkZG9uc19faXRlbS1pbmZvIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS51cGRhdGUtYXZhbGlhYmxlIC5qZmItYWRkb25zX19pdGVtLW5hbWUgLnZlcnNpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q2MzM2QztcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0udXBkYXRlLWF2YWxpYWJsZSAuamZiLWFkZG9uc19faXRlbS11cGRhdGUgLmxhdGVzdC12ZXJzaW9uIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NkI0NTA7XFxuICBwYWRkaW5nOiAycHggOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS1pbm5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS10aHVtYiAucHJvLWJhZGdlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTJweDtcXG4gIGxlZnQ6IDEycHg7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLXRodW1iIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0taW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcXG4gIGJvcmRlci13aWR0aDogMCAxcHggMXB4IDFweDtcXG4gIGJvcmRlci1jb2xvcjogI0RDRENERDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tbmFtZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS1uYW1lIC5sYWJlbCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLW5hbWUgLnZlcnNpb24ge1xcbiAgcGFkZGluZzogMXB4IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NkI0NTA7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tdXBkYXRlIHtcXG4gIGNvbG9yOiAjN2I3ZTgxO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tbGljZW5zZSB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgY29sb3I6ICM3YjdlODE7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLWxpY2Vuc2UgLmN4LXZ1aS1idXR0b24ge1xcbiAgbWFyZ2luLWxlZnQ6IDNweDtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tZGVzYyB7XFxuICBmbGV4OiAxIDEgYXV0bztcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tZGVzYyBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tYWN0aW9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLWFjdGlvbnM6ZW1wdHkge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tYWN0aW9ucyAuY3gtdnVpLWJ1dHRvbiB7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2FkbWluL3BhZ2VzL2pmYi1hZGRvbnMvY29tcG9uZW50cy9BZGRvbkl0ZW0udnVlXCIsXCJ3ZWJwYWNrOi8vLi8uLi9BZGRvbkl0ZW0udnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQXFSQTtFQUNDLG1CQUFBO0FDcFJEO0FEc1JDO0VBQ0MsZ0JBQUE7QUNwUkY7QUR1UkM7RUFDQyxjQUFBO0FDclJGO0FEd1JDO0VBQ0MsbUJBQUE7QUN0UkY7QUR5UkM7RUFDQyxhQUFBO0VBQ0EscUNBQUE7RUFDQSxTQUFBO0FDdlJGO0FEeVJFO0FBTEQ7SUFNRSxxQ0FBQTtBQ3RSRDtBQUNGO0FEeVJDO0VBQ0Msb0NBQUE7RUFDQSxtQkFBQTtBQ3ZSRjtBRHlSRTtFQUNDLDhDQUFBO0FDdlJIO0FEMlJHO0VBQ0MsdUJBQUE7QUN6Uko7QUQrUkk7RUFDQyx5QkFBQTtBQzdSTDtBRGlTSTtFQUNDLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUMvUkw7QURxU0M7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUNuU0Y7QURzU0M7RUFDQyw0QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDcFNGO0FEc1NFO0VBQ0Msa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ3BTSDtBRHVTRTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FDclNIO0FEeVNDO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUN2U0Y7QUQwU0M7RUFDQyxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDeFNGO0FEMFNFO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUN4U0g7QUQyU0U7RUFDQyxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUN6U0g7QUQ2U0M7RUFDQyxjQUFBO0VBQ0EsbUJBQUE7QUMzU0Y7QUQ4U0M7RUFDQyxtQkFBQTtFQUNBLGNBQUE7QUM1U0Y7QUQ4U0U7RUFDQyxnQkFBQTtBQzVTSDtBRGdUQztFQUNDLGNBQUE7QUM5U0Y7QURnVEU7RUFDQyxxQkFBQTtBQzlTSDtBRGtUQztFQUNDLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDaFRGO0FEa1RFO0VBQ0MsYUFBQTtBQ2hUSDtBRG1URTtFQUNDLGtCQUFBO0FDalRIXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcclxcblxcclxcbi5qZmItYWRkb25zIHtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiA1MHB4O1xcclxcblxcclxcblxcdCY6bGFzdC1jaGlsZCB7XFxyXFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMDtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0YSB7XFxyXFxuXFx0XFx0Y29sb3I6ICMwMDdjYmE7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCZfX2hlYWRlciB7XFxyXFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Jl9fbGlzdCB7XFxyXFxuXFx0XFx0ZGlzcGxheTogZ3JpZDtcXHJcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcclxcblxcdFxcdGdhcDogNDBweDtcXHJcXG5cXHJcXG5cXHRcXHRAbWVkaWEgKG1heC13aWR0aDogMTE0MHB4KSB7XFxyXFxuXFx0XFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCZfX2l0ZW0ge1xcclxcblxcdFxcdHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjNzIGVhc2Utb3V0O1xcclxcblxcdFxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuXFxyXFxuXFx0XFx0Jjpob3ZlciB7XFxyXFxuXFx0XFx0XFx0Ym94LXNoYWRvdzogMHB4IDRweCAyOHB4IHJnYmEoMTUsIDIzLCA0MiwgMC4xKTtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Ji5hY3RpdmF0ZWQge1xcclxcblxcdFxcdFxcdC5qZmItYWRkb25zX19pdGVtLWluZm8ge1xcclxcblxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Ji51cGRhdGUtYXZhbGlhYmxlIHtcXHJcXG5cXHRcXHRcXHQuamZiLWFkZG9uc19faXRlbS1uYW1lIHtcXHJcXG5cXHRcXHRcXHRcXHQudmVyc2lvbiB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogI0Q2MzM2QztcXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdC5qZmItYWRkb25zX19pdGVtLXVwZGF0ZSB7XFxyXFxuXFx0XFx0XFx0XFx0LmxhdGVzdC12ZXJzaW9uIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRjb2xvcjogd2hpdGU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogIzQ2QjQ1MDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRwYWRkaW5nOiAycHggOHB4O1xcclxcblxcdFxcdFxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Jl9faXRlbS1pbm5lciB7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdFxcdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcblxcdFxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Jl9faXRlbS10aHVtYiB7XFxyXFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcXHJcXG5cXHRcXHRsaW5lLWhlaWdodDogMDtcXHJcXG5cXHRcXHRvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHJcXG5cXHRcXHQucHJvLWJhZGdlIHtcXHJcXG5cXHRcXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0XFx0dG9wOiAxMnB4O1xcclxcblxcdFxcdFxcdGxlZnQ6IDEycHg7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdGltZyB7XFxyXFxuXFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0XFx0aGVpZ2h0OiBhdXRvO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Jl9faXRlbS1pbmZvIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0XFx0YWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxyXFxuXFx0XFx0ZmxleDogMSAxIGF1dG87XFxyXFxuXFx0XFx0cGFkZGluZzogMjBweDtcXHJcXG5cXHRcXHRib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xcclxcblxcdFxcdGJvcmRlci13aWR0aDogMCAxcHggMXB4IDFweDtcXHJcXG5cXHRcXHRib3JkZXItY29sb3I6ICNEQ0RDREQ7XFxyXFxuXFx0XFx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Jl9faXRlbS1uYW1lIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRcXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcblxcclxcblxcdFxcdC5sYWJlbCB7XFxyXFxuXFx0XFx0XFx0Zm9udC1zaXplOiAyMHB4O1xcclxcblxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFx0XFx0XFx0bGluZS1oZWlnaHQ6IDEuMjU7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC52ZXJzaW9uIHtcXHJcXG5cXHRcXHRcXHRwYWRkaW5nOiAxcHggOHB4O1xcclxcblxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG5cXHRcXHRcXHRjb2xvcjogd2hpdGU7XFxyXFxuXFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogIzQ2QjQ1MDtcXHJcXG5cXHRcXHRcXHRtYXJnaW4tbGVmdDogMTBweDtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCZfX2l0ZW0tdXBkYXRlIHtcXHJcXG5cXHRcXHRjb2xvcjogIzdiN2U4MTtcXHJcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQmX19pdGVtLWxpY2Vuc2Uge1xcclxcblxcdFxcdG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuXFx0XFx0Y29sb3I6ICM3YjdlODE7XFxyXFxuXFxyXFxuXFx0XFx0LmN4LXZ1aS1idXR0b24ge1xcclxcblxcdFxcdFxcdG1hcmdpbi1sZWZ0OiAzcHg7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQmX19pdGVtLWRlc2Mge1xcclxcblxcdFxcdGZsZXg6IDEgMSBhdXRvO1xcclxcblxcclxcblxcdFxcdGEge1xcclxcblxcdFxcdFxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCZfX2l0ZW0tYWN0aW9ucyB7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHRmbGV4LXdyYXA6IHdyYXA7XFxyXFxuXFx0XFx0bWFyZ2luLXRvcDogMjBweDtcXHJcXG5cXHJcXG5cXHRcXHQmOmVtcHR5IHtcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBub25lO1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQuY3gtdnVpLWJ1dHRvbiB7XFxyXFxuXFx0XFx0XFx0bWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcblwiLFwiLmpmYi1hZGRvbnMge1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuLmpmYi1hZGRvbnM6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG4uamZiLWFkZG9ucyBhIHtcXG4gIGNvbG9yOiAjMDA3Y2JhO1xcbn1cXG4uamZiLWFkZG9uc19faGVhZGVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi5qZmItYWRkb25zX19saXN0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgZ2FwOiA0MHB4O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTE0MHB4KSB7XFxuICAuamZiLWFkZG9uc19fbGlzdCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICB9XFxufVxcbi5qZmItYWRkb25zX19pdGVtIHtcXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcyBlYXNlLW91dDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5qZmItYWRkb25zX19pdGVtOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDBweCA0cHggMjhweCByZ2JhKDE1LCAyMywgNDIsIDAuMSk7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLmFjdGl2YXRlZCAuamZiLWFkZG9uc19faXRlbS1pbmZvIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS51cGRhdGUtYXZhbGlhYmxlIC5qZmItYWRkb25zX19pdGVtLW5hbWUgLnZlcnNpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q2MzM2QztcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0udXBkYXRlLWF2YWxpYWJsZSAuamZiLWFkZG9uc19faXRlbS11cGRhdGUgLmxhdGVzdC12ZXJzaW9uIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NkI0NTA7XFxuICBwYWRkaW5nOiAycHggOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS1pbm5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS10aHVtYiAucHJvLWJhZGdlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTJweDtcXG4gIGxlZnQ6IDEycHg7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLXRodW1iIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0taW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcXG4gIGJvcmRlci13aWR0aDogMCAxcHggMXB4IDFweDtcXG4gIGJvcmRlci1jb2xvcjogI0RDRENERDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tbmFtZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS1uYW1lIC5sYWJlbCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLW5hbWUgLnZlcnNpb24ge1xcbiAgcGFkZGluZzogMXB4IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NkI0NTA7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tdXBkYXRlIHtcXG4gIGNvbG9yOiAjN2I3ZTgxO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tbGljZW5zZSB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgY29sb3I6ICM3YjdlODE7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLWxpY2Vuc2UgLmN4LXZ1aS1idXR0b24ge1xcbiAgbWFyZ2luLWxlZnQ6IDNweDtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tZGVzYyB7XFxuICBmbGV4OiAxIDEgYXV0bztcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tZGVzYyBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tYWN0aW9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLWFjdGlvbnM6ZW1wdHkge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tYWN0aW9ucyAuY3gtdnVpLWJ1dHRvbiB7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQWRkb25zUGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWUyNDlkMGUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQWRkb25zUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0FkZG9uc1BhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0FkZG9uc1BhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxPcGVuU2VydmVyXFxcXGRvbWFpbnNcXFxcZGV2ZWxvcC5ob21lLmNvbVxcXFx3cC1jb250ZW50XFxcXHBsdWdpbnNcXFxcamV0Zm9ybWJ1aWxkZXJcXFxcYXNzZXRzXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzVlMjQ5ZDBlJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzVlMjQ5ZDBlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzVlMjQ5ZDBlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BZGRvbnNQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ZTI0OWQwZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1ZTI0OWQwZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYWRtaW4vcGFnZXMvamZiLWFkZG9ucy9BZGRvbnNQYWdlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQWRkb25JdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iNTA3NDNiNCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BZGRvbkl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BZGRvbkl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0FkZG9uSXRlbS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXE9wZW5TZXJ2ZXJcXFxcZG9tYWluc1xcXFxkZXZlbG9wLmhvbWUuY29tXFxcXHdwLWNvbnRlbnRcXFxccGx1Z2luc1xcXFxqZXRmb3JtYnVpbGRlclxcXFxhc3NldHNcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYjUwNzQzYjQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYjUwNzQzYjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYjUwNzQzYjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0FkZG9uSXRlbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YjUwNzQzYjQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYjUwNzQzYjQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFkbWluL3BhZ2VzL2pmYi1hZGRvbnMvY29tcG9uZW50cy9BZGRvbkl0ZW0udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FkZG9uc1BhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRkb25zUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRkb25JdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FkZG9uSXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiamZiLWFkZG9ucy1wYWdlIHdyYXBcIixcbiAgICAgIGNsYXNzOiB7IFwicHJvY2Nlc2luZy1zdGF0ZVwiOiBfdm0ucHJvY2Nlc2luZ1N0YXRlIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFwiaDFcIiwgeyBzdGF0aWNDbGFzczogXCJjcy12dWktdGl0bGVcIiB9LCBbXG4gICAgICAgIF92bS5fdihfdm0uX3MoXCJKZXRGb3JtQnVpbGRlciBBZGRvbnNcIikpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImpmYi1hZGRvbnMtcGFnZV9faW5uZXIgY3gtdnVpLXBhbmVsXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImpmYi1hZGRvbnMtcGFnZV9faGVhZGVyXCIgfSwgW1xuICAgICAgICAgIF92bS5pc0xpY2Vuc2VNb2RlXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJqZmItYWRkb25zLXBhZ2VfX2hlYWRlci1jb250cm9sc1wiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiY3gtdnVpLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uLXN0eWxlXCI6IFwiYWNjZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBcIm1pbmlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IF92bS5jaGVja1VwZGF0ZXNQcm9jZXNzZWRcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY2hlY2tQbHVnaW5zVXBkYXRlIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IGF0dHJzOiB7IHNsb3Q6IFwibGFiZWxcIiB9LCBzbG90OiBcImxhYmVsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwic3ZnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b24taWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94OiBcIjAgMCAxNCAxNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwYXRoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJNMTEuNzA4NSAyLjI5MTcxQzEwLjUwMDEgMS4wODMzNyA4Ljg0MTggMC4zMzMzNzQgNy4wMDAxMyAwLjMzMzM3NEMzLjMxNjggMC4zMzMzNzQgMC4zNDE3OTcgMy4zMTY3MSAwLjM0MTc5NyA3LjAwMDA0QzAuMzQxNzk3IDEwLjY4MzQgMy4zMTY4IDEzLjY2NjcgNy4wMDAxMyAxMy42NjY3QzEwLjEwODUgMTMuNjY2NyAxMi43MDAxIDExLjU0MTcgMTMuNDQxOCA4LjY2NjcxSDExLjcwODVDMTEuMDI1MSAxMC42MDg0IDkuMTc1MTMgMTIgNy4wMDAxMyAxMkM0LjI0MTggMTIgMi4wMDAxMyA5Ljc1ODM3IDIuMDAwMTMgNy4wMDAwNEMyLjAwMDEzIDQuMjQxNzEgNC4yNDE4IDIuMDAwMDQgNy4wMDAxMyAyLjAwMDA0QzguMzgzNDYgMi4wMDAwNCA5LjYxNjggMi41NzUwNCAxMC41MTY4IDMuNDgzMzdMNy44MzM0NiA2LjE2NjcxSDEzLjY2NjhWMC4zMzMzNzRMMTEuNzA4NSAyLjI5MTcxWlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBcIiMwMDdDQkFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJDaGVjayBGb3IgVXBkYXRlc1wiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJjeC12dWktYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgIV92bS5pc0xpY2Vuc2VBY3RpdmF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImN4LXZ1aS1idXR0b24tLXN0eWxlLWFjY2VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJjeC12dWktYnV0dG9uLS1zdHlsZS1kYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc2l6ZTogXCJtaW5pXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnNob3dMaWNlbnNlUG9wdXAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgYXR0cnM6IHsgc2xvdDogXCJsYWJlbFwiIH0sIHNsb3Q6IFwibGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbi1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjE2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g6IFwiMCAwIDE2IDE2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBhdGhcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk0xNS40OTg1IDBIMTIuNDg5N0MxMi40MTY2IDAgMTIuMzQ4NyAwLjAxNTY3MDkgMTIuMjg2IDAuMDQ3MDEyN0MxMi4yMzM4IDAuMDY3OTA3MyAxMi4xODY3IDAuMTA0NDczIDEyLjE0NSAwLjE1NjcwOUw1Ljc2NjkgNi40NzIwOUM1LjYyMDYzIDYuNDQwNzQgNS40NjM5MiA2LjQxNDYzIDUuMjk2NzcgNi4zOTM3M0M1LjEyOTYxIDYuMzcyODQgNC45Njc2OCA2LjM2MjM5IDQuODEwOTcgNi4zNjIzOUM0LjE2MzI0IDYuMzYyMzkgMy41NDY4NSA2LjQ4Nzc2IDIuOTYxOCA2LjczODQ5QzIuMzc2NzUgNi45Nzg3OCAxLjg1OTYxIDcuMzIzNTQgMS40MTAzOCA3Ljc3Mjc3QzAuOTYxMTQ5IDguMjIyIDAuNjExMTY2IDguNzM5MTQgMC4zNjA0MzEgOS4zMjQxOUMwLjEyMDE0NCA5LjkwOTI0IDAgMTAuNTMwOSAwIDExLjE4OUMwIDExLjgzNjggMC4xMjAxNDQgMTIuNDUzMiAwLjM2MDQzMSAxMy4wMzgyQzAuNjExMTY2IDEzLjYyMzIgMC45NjExNDkgMTQuMTQwNCAxLjQxMDM4IDE0LjU4OTZDMS44NTk2MSAxNS4wMzg5IDIuMzc2NzUgMTUuMzgzNiAyLjk2MTggMTUuNjIzOUMzLjU0Njg1IDE1Ljg3NDYgNC4xNjMyNCAxNiA0LjgxMDk3IDE2QzUuNDY5MTUgMTYgNi4wOTA3NiAxNS44NzQ2IDYuNjc1ODEgMTUuNjIzOUM3LjI2MDg2IDE1LjM4MzYgNy43NzggMTUuMDM4OSA4LjIyNzIzIDE0LjU4OTZDOC44MDE4MyAxNC4wMTUgOS4xOTg4MiAxMy4zNDY0IDkuNDE4MjIgMTIuNTgzN0M5LjY0ODA2IDExLjgyMTEgOS42ODQ2MiAxMS4wMzc1IDkuNTI3OTEgMTAuMjMzMUwxMC44OTEzIDguODY5NzRDMTAuOTMzMSA4LjgyNzk1IDEwLjk2NDQgOC43ODA5MyAxMC45ODUzIDguNzI4N0MxMS4wMTY3IDguNjY2MDEgMTEuMDMyMyA4LjU5ODExIDExLjAzMjMgOC41MjQ5OFY3LjAyMDU3SDEyLjUzNjdDMTIuNjkzNCA3LjAyMDU3IDEyLjgxMzYgNi45NzM1NiAxMi44OTcyIDYuODc5NTNDMTIuOTkxMiA2Ljc4NTUgMTMuMDM4MiA2LjY2NTM2IDEzLjAzODIgNi41MTkxVjUuMDE0NjlIMTQuNTQyNkMxNC42MTU3IDUuMDE0NjkgMTQuNjc4NCA1LjAwNDI0IDE0LjczMDcgNC45ODMzNUMxNC43OTMzIDQuOTUyMDEgMTQuODUwOCA0LjkxMDIyIDE0LjkwMyA0Ljg1Nzk4TDE1LjkwNiAzLjg1NTA0QzE1LjkyNjkgMy44MTMyNiAxNS45NDc4IDMuNzY2MjQgMTUuOTY4NyAzLjcxNDAxQzE1Ljk4OTYgMy42NTEzMiAxNiAzLjU4MzQyIDE2IDMuNTEwMjhWMC41MDE0NjlDMTYgMC4zNTUyMDcgMTUuOTUzIDAuMjM1MDY0IDE1Ljg1OSAwLjE0MTAzOEMxNS43NjQ5IDAuMDQ3MDEyNyAxNS42NDQ4IDAgMTUuNDk4NSAwWk00Ljk2NzY4IDEyLjc4NzVDNC43OTAwOCAxMi45NjUxIDQuNTk2OCAxMy4wOTU3IDQuMzg3ODYgMTMuMTc5MkM0LjE4OTM2IDEzLjI1MjQgMy45NjQ3NCAxMy4yODg5IDMuNzE0MDEgMTMuMjg4OUMzLjQ2MzI3IDEzLjI4ODkgMy4yMzM0MyAxMy4yNDE5IDMuMDI0NDkgMTMuMTQ3OUMyLjgyNTk5IDEzLjA1MzkgMi42Mzc5NCAxMi45MzM3IDIuNDYwMzMgMTIuNzg3NUMyLjI4MjczIDEyLjYwOTkgMi4xNTIxNCAxMi40MjE4IDIuMDY4NTYgMTIuMjIzM0MxLjk5NTQzIDEyLjAxNDQgMS45NTg4NiAxMS43ODQ1IDEuOTU4ODYgMTEuNTMzOEMxLjk1ODg2IDExLjI4MzEgMi4wMDU4OCAxMS4wNTg0IDIuMDk5OSAxMC44NTk5QzIuMTkzOTMgMTAuNjUxIDIuMzE0MDcgMTAuNDU3NyAyLjQ2MDMzIDEwLjI4MDFDMi43ODQyIDkuOTU2MjUgMy4xOTE2NCA5Ljc5NDMyIDMuNjgyNjYgOS43OTQzMkM0LjE4NDEzIDkuNzk0MzIgNC41OTY4IDkuOTU2MjUgNC45MjA2NyAxMC4yODAxQzUuMDk4MjcgMTAuNDU3NyA1LjIyMzY0IDEwLjY1MSA1LjI5Njc3IDEwLjg1OTlDNS4zODAzNSAxMS4wNTg0IDUuNDIyMTQgMTEuMjgzMSA1LjQyMjE0IDExLjUzMzhDNS40MjIxNCAxMS43ODQ1IDUuMzgwMzUgMTIuMDE0NCA1LjI5Njc3IDEyLjIyMzNDNS4yMjM2NCAxMi40MjE4IDUuMTEzOTQgMTIuNjA5OSA0Ljk2NzY4IDEyLjc4NzVaXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IFwiI0QzRDNEM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLmlzTGljZW5zZUFjdGl2YXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbX3ZtLl92KFwiQWN0aXZhdGUgTGljZW5zZVwiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmlzTGljZW5zZUFjdGl2YXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbX3ZtLl92KFwiRGVhY3RpdmF0ZSBMaWNlbnNlXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICFfdm0uaXNMaWNlbnNlQWN0aXZhdGVkXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJnby1wcm8tYmFubmVyXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImdvLXByby1iYW5uZXJfX3N1YnRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJGZWF0dXJlcyAmIEludGVncmF0aW9ucyBcIilcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZ28tcHJvLWJhbm5lcl9fdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkV4dGVuZCBmdW5jdGlvbmFsaXR5IHdpdGggUFJPIEFkZG9uc1wiKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiY3gtdnVpLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ28tcHJvLWJhbm5lcl9fYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uLXN0eWxlXCI6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCJtaW5pXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IF92bS5nb1Byb0xpbmssXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRhZy1uYW1lXCI6IFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBcIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgYXR0cnM6IHsgc2xvdDogXCJsYWJlbFwiIH0sIHNsb3Q6IFwibGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIkdvIFByb1wiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAwICE9PSBPYmplY3Qua2V5cyhfdm0uaW5zdGFsbGVkQWRkb25MaXN0KS5sZW5ndGhcbiAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiamZiLWFkZG9uc1wiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiamZiLWFkZG9uc19fbGlzdFwiIH0sXG4gICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5pbnN0YWxsZWRBZGRvbkxpc3QsIGZ1bmN0aW9uKGFkZG9uRGF0YSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcIkFkZG9uSXRlbVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYWRkb24tZGF0YVwiOiBhZGRvbkRhdGEgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgMCAhPT0gT2JqZWN0LmtleXMoX3ZtLmF2YWlsYWJsZUFkZG9uTGlzdCkubGVuZ3RoXG4gICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImpmYi1hZGRvbnNcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImpmYi1hZGRvbnNfX2xpc3RcIiB9LFxuICAgICAgICAgICAgICAgIF92bS5fbChfdm0uYXZhaWxhYmxlQWRkb25MaXN0LCBmdW5jdGlvbihhZGRvbkRhdGEsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJBZGRvbkl0ZW1cIiwge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImFkZG9uLWRhdGFcIjogYWRkb25EYXRhIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImN4LXZ1aS1wb3B1cFwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiamZiLWFkZG9ucy1wYWdlX19saWNlbnNlLXBvcHVwXCIsXG4gICAgICAgICAgYXR0cnM6IHsgZm9vdGVyOiBmYWxzZSwgXCJib2R5LXdpZHRoXCI6IFwiNTQwcHhcIiB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLmxpY2Vuc2VQb3B1cFZpc2libGUsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5saWNlbnNlUG9wdXBWaXNpYmxlID0gJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJsaWNlbnNlUG9wdXBWaXNpYmxlXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImN4LXZ1aS1wb3B1cF9faGVhZGVyLXRpdGxlXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNsb3Q6IFwidGl0bGVcIiB9LFxuICAgICAgICAgICAgICBzbG90OiBcInRpdGxlXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICFfdm0uaXNMaWNlbnNlQWN0aXZhdGVkXG4gICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW192bS5fdihcIkFjdGl2YXRlIExpY2Vuc2VcIildKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5pc0xpY2Vuc2VBY3RpdmF0ZWRcbiAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbX3ZtLl92KFwiRGVhY3RpdmF0ZSBMaWNlbnNlXCIpXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiamZiLWFkZG9ucy1wYWdlX19saWNlbnNlLWZvcm1cIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJjb250ZW50XCIgfSxcbiAgICAgICAgICAgICAgc2xvdDogXCJjb250ZW50XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICFfdm0uaXNMaWNlbnNlQWN0aXZhdGVkXG4gICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJBY3RpdmF0ZSBsaWNlbnNlIGZvciBhdXRvbWF0aWMgdXBkYXRlcyBhbmQgYXdlc29tZSBzdXBwb3J0XCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uaXNMaWNlbnNlQWN0aXZhdGVkXG4gICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJCeSBkZWFjdGl2YXRpbmcgdGhlIGxpY2Vuc2UgeW91IHdpbGwgbm90IGJlIGFibGUgdG8gdXBkYXRlIHRoZSBhZGRvbnNcIlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiY3gtdnVpLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJqZmItYWRkb25zLXBhZ2VfX2xpY2Vuc2UtaW5wdXRcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgc2l6ZTogXCJmdWxsd2lkdGhcIixcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgIGF1dG9mb2N1czogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIFwicHJldmVudC13cmFwXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJKdXN0IHBhc3RlIGl0IGhlcmVcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubGljZW5zZUtleSxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmxpY2Vuc2VLZXkgPSAkJHZcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImxpY2Vuc2VLZXlcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiY3gtdnVpLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImpmYi1hZGRvbnMtcGFnZV9fbGljZW5zZS1hY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uLXN0eWxlXCI6IFwiYWNjZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IFwibWluaVwiLFxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBfdm0ubGljZW5zZVByb2NjZXNpbmdTdGF0ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ubGljZW5zZUFjdGlvbiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBhdHRyczogeyBzbG90OiBcImxhYmVsXCIgfSwgc2xvdDogXCJsYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgIV92bS5pc0xpY2Vuc2VBY3RpdmF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbX3ZtLl92KFwiQWN0aXZhdGVcIildKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5pc0xpY2Vuc2VBY3RpdmF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbX3ZtLl92KFwiRGVhY3RpdmF0ZVwiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiamZiLWFkZG9uc19faGVhZGVyXCIgfSwgW1xuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiY3gtdnVpLXN1YnRpdGxlXCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCJZb3VyIEluc3RhbGxlZCBBZGRvbnNcIilcbiAgICAgIF0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJqZmItYWRkb25zX19oZWFkZXJcIiB9LCBbXG4gICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJjeC12dWktc3VidGl0bGVcIiB9LCBbXG4gICAgICAgIF92bS5fdihcIkFsbCBBdmFpbGFibGUgQWRkb25zXCIpXG4gICAgICBdKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImpmYi1hZGRvbnNfX2l0ZW1cIixcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgIGFjdGl2YXRlZDogX3ZtLmFkZG9uRGF0YS5pc0FjdGl2YXRlZCxcbiAgICAgICAgXCJ1cGRhdGUtYXZhbGlhYmxlXCI6IF92bS51cGRhdGVBdmFsaWFibGVcbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiamZiLWFkZG9uc19faXRlbS1pbm5lclwiLFxuICAgICAgICAgIGNsYXNzOiB7IFwicHJvY2Nlc2luZy1zdGF0ZVwiOiBfdm0ucHJvY2Nlc2luZ1N0YXRlIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiamZiLWFkZG9uc19faXRlbS10aHVtYlwiIH0sIFtcbiAgICAgICAgICAgICFfdm0uYWRkb25EYXRhLmlzSW5zdGFsbGVkXG4gICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwcm8tYmFkZ2VcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJzdmdcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI0MFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94OiBcIjAgMCA0MCAyMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJyZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjQwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIyMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByeDogXCI0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IFwiI0VFN0IxNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInBhdGhcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk0xMC42MjUgMTAuODMwMVYxNEg5LjE0MjU4VjUuNDY4NzVIMTIuNDA2MkMxMy4zNTk0IDUuNDY4NzUgMTQuMTE1MiA1LjcxNjggMTQuNjczOCA2LjIxMjg5QzE1LjIzNjMgNi43MDg5OCAxNS41MTc2IDcuMzY1MjMgMTUuNTE3NiA4LjE4MTY0QzE1LjUxNzYgOS4wMTc1OCAxNS4yNDIyIDkuNjY3OTcgMTQuNjkxNCAxMC4xMzI4QzE0LjE0NDUgMTAuNTk3NyAxMy4zNzcgMTAuODMwMSAxMi4zODg3IDEwLjgzMDFIMTAuNjI1Wk0xMC42MjUgOS42NDA2MkgxMi40MDYyQzEyLjkzMzYgOS42NDA2MiAxMy4zMzU5IDkuNTE3NTggMTMuNjEzMyA5LjI3MTQ4QzEzLjg5MDYgOS4wMjE0OCAxNC4wMjkzIDguNjYyMTEgMTQuMDI5MyA4LjE5MzM2QzE0LjAyOTMgNy43MzI0MiAxMy44ODg3IDcuMzY1MjMgMTMuNjA3NCA3LjA5MThDMTMuMzI2MiA2LjgxNDQ1IDEyLjkzOTUgNi42NzE4OCAxMi40NDczIDYuNjY0MDZIMTAuNjI1VjkuNjQwNjJaTTE5Ljk1MzEgMTAuNzEyOUgxOC4zMDA4VjE0SDE2LjgxODRWNS40Njg3NUgxOS44MTg0QzIwLjgwMjcgNS40Njg3NSAyMS41NjI1IDUuNjg5NDUgMjIuMDk3NyA2LjEzMDg2QzIyLjYzMjggNi41NzIyNyAyMi45MDA0IDcuMjEwOTQgMjIuOTAwNCA4LjA0Njg4QzIyLjkwMDQgOC42MTcxOSAyMi43NjE3IDkuMDk1NyAyMi40ODQ0IDkuNDgyNDJDMjIuMjEwOSA5Ljg2NTIzIDIxLjgyODEgMTAuMTYwMiAyMS4zMzU5IDEwLjM2NzJMMjMuMjUyIDEzLjkyMzhWMTRIMjEuNjY0MUwxOS45NTMxIDEwLjcxMjlaTTE4LjMwMDggOS41MjM0NEgxOS44MjQyQzIwLjMyNDIgOS41MjM0NCAyMC43MTQ4IDkuMzk4NDQgMjAuOTk2MSA5LjE0ODQ0QzIxLjI3NzMgOC44OTQ1MyAyMS40MTggOC41NDg4MyAyMS40MTggOC4xMTEzM0MyMS40MTggNy42NTQzIDIxLjI4NzEgNy4zMDA3OCAyMS4wMjU0IDcuMDUwNzhDMjAuNzY3NiA2LjgwMDc4IDIwLjM4MDkgNi42NzE4OCAxOS44NjUyIDYuNjY0MDZIMTguMzAwOFY5LjUyMzQ0Wk0zMS4xMTUyIDkuOTU3MDNDMzEuMTE1MiAxMC43OTMgMzAuOTcwNyAxMS41MjczIDMwLjY4MTYgMTIuMTYwMkMzMC4zOTI2IDEyLjc4OTEgMjkuOTc4NSAxMy4yNzM0IDI5LjQzOTUgMTMuNjEzM0MyOC45MDQzIDEzLjk0OTIgMjguMjg3MSAxNC4xMTcyIDI3LjU4NzkgMTQuMTE3MkMyNi44OTY1IDE0LjExNzIgMjYuMjc5MyAxMy45NDkyIDI1LjczNjMgMTMuNjEzM0MyNS4xOTczIDEzLjI3MzQgMjQuNzc5MyAxMi43OTEgMjQuNDgyNCAxMi4xNjZDMjQuMTg5NSAxMS41NDEgMjQuMDQxIDEwLjgyMDMgMjQuMDM3MSAxMC4wMDM5VjkuNTIzNDRDMjQuMDM3MSA4LjY5MTQxIDI0LjE4MzYgNy45NTcwMyAyNC40NzY2IDcuMzIwMzFDMjQuNzczNCA2LjY4MzU5IDI1LjE4OTUgNi4xOTcyNyAyNS43MjQ2IDUuODYxMzNDMjYuMjYzNyA1LjUyMTQ4IDI2Ljg4MDkgNS4zNTE1NiAyNy41NzYyIDUuMzUxNTZDMjguMjcxNSA1LjM1MTU2IDI4Ljg4NjcgNS41MTk1MyAyOS40MjE5IDUuODU1NDdDMjkuOTYwOSA2LjE4NzUgMzAuMzc3IDYuNjY3OTcgMzAuNjY5OSA3LjI5Njg4QzMwLjk2MjkgNy45MjE4OCAzMS4xMTEzIDguNjUwMzkgMzEuMTE1MiA5LjQ4MjQyVjkuOTU3MDNaTTI5LjYzMjggOS41MTE3MkMyOS42MzI4IDguNTY2NDEgMjkuNDUzMSA3Ljg0MTggMjkuMDkzOCA3LjMzNzg5QzI4LjczODMgNi44MzM5OCAyOC4yMzI0IDYuNTgyMDMgMjcuNTc2MiA2LjU4MjAzQzI2LjkzNTUgNi41ODIwMyAyNi40MzM2IDYuODMzOTggMjYuMDcwMyA3LjMzNzg5QzI1LjcxMDkgNy44Mzc4OSAyNS41MjczIDguNTQ2ODggMjUuNTE5NSA5LjQ2NDg0VjkuOTU3MDNDMjUuNTE5NSAxMC44OTQ1IDI1LjcwMTIgMTEuNjE5MSAyNi4wNjQ1IDEyLjEzMDlDMjYuNDMxNiAxMi42NDI2IDI2LjkzOTUgMTIuODk4NCAyNy41ODc5IDEyLjg5ODRDMjguMjQ0MSAxMi44OTg0IDI4Ljc0OCAxMi42NDg0IDI5LjA5OTYgMTIuMTQ4NEMyOS40NTUxIDExLjY0ODQgMjkuNjMyOCAxMC45MTggMjkuNjMyOCA5Ljk1NzAzVjkuNTExNzJaXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IFwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBfdm0uYWRkb25EYXRhLnRodW1iLCBhbHQ6IFwiXCIgfSB9KVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJqZmItYWRkb25zX19pdGVtLWluZm9cIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImpmYi1hZGRvbnNfX2l0ZW0tbmFtZVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uYWRkb25EYXRhLm5hbWUpKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidmVyc2lvblwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5hZGRvbkRhdGEuY3VycmVudFZlcnNpb24pKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJqZmItYWRkb25zX19pdGVtLXVwZGF0ZVwiIH0sIFtcbiAgICAgICAgICAgICAgIV92bS51cGRhdGVBdmFsaWFibGVcbiAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtfdm0uX3YoXCJZb3VyIHBsdWdpbiBpcyB1cCB0byBkYXRlXCIpXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0udXBkYXRlQXZhbGlhYmxlXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcblxcdFxcdFxcdFxcdFxcdFZlcnNpb24gXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImxhdGVzdC12ZXJzaW9uXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uYWRkb25EYXRhLnZlcnNpb24pKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBhdmFpbGFibGVcXG5cXHRcXHRcXHRcXHRcXHRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgIV92bS5hY3RpdmF0ZUxpY2VuY2VBY3Rpb25BdmFsaWFibGUgJiYgX3ZtLmlzTGljZW5zZU1vZGVcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjeC12dWktYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b24tc3R5bGVcIjogXCJsaW5rLWFjY2VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBcImxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogX3ZtLnVwZGF0ZVBsdWdpblByb2Nlc3NlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0udXBkYXRlUGx1Z2luIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBzbG90OiBcImxhYmVsXCIgfSwgc2xvdDogXCJsYWJlbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcInNwYW5cIiwgW192bS5fdihcIlVwZGF0ZSBOb3dcIildKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5hY3RpdmF0ZUxpY2VuY2VBY3Rpb25BdmFsaWFibGVcbiAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImpmYi1hZGRvbnNfX2l0ZW0tbGljZW5zZVwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiTGljZW5zZSBub3QgYWN0aXZhdGVkXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiY3gtdnVpLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYnV0dG9uLXN0eWxlXCI6IFwibGluay1hY2NlbnRcIiwgc2l6ZTogXCJsaW5rXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uYWN0aXZhdGVMaWNlbnNlIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBzbG90OiBcImxhYmVsXCIgfSwgc2xvdDogXCJsYWJlbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcInNwYW5cIiwgW192bS5fdihcIkFjdGl2YXRlIE5vd1wiKV0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJqZmItYWRkb25zX19pdGVtLWRlc2NcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLmFkZG9uRGF0YS5kZXNjKSB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBfdm0ubGVhcm5Nb3JlVXJsLCB0YXJnZXQ6IFwiX2JsYW5rXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiTGVhcm4gTW9yZVwiKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiamZiLWFkZG9uc19faXRlbS1hY3Rpb25zXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS5pbnN0YWxsQWN0aW9uQXZhbGlhYmxlXG4gICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiY3gtdnVpLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uLXN0eWxlXCI6IFwibGluay1hY2NlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCJsaW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IF92bS5hY3Rpb25QbHVnaW5Qcm9jZXNzZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmluc3RhbGxQbHVnaW4gfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNsb3Q6IFwibGFiZWxcIiB9LCBzbG90OiBcImxhYmVsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwic3BhblwiLCBbX3ZtLl92KFwiSW5zdGFsbCBBZGRvblwiKV0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS5hY3RpdmF0ZUFjdGlvbkF2YWxpYWJsZVxuICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImN4LXZ1aS1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvbi1zdHlsZVwiOiBcImxpbmstYWNjZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IFwibGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBfdm0uYWN0aW9uUGx1Z2luUHJvY2Vzc2VkXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5hY3RpdmF0ZVBsdWdpbiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgc2xvdDogXCJsYWJlbFwiIH0sIHNsb3Q6IFwibGFiZWxcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJBY3RpdmF0ZSBBZGRvblwiKV0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS5kZWFjdGl2YXRlQWN0aW9uQXZhbGlhYmxlXG4gICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiY3gtdnVpLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uLXN0eWxlXCI6IFwibGluay1lcnJvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBcImxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogX3ZtLmFjdGlvblBsdWdpblByb2Nlc3NlZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uZGVhY3RpdmF0ZVBsdWdpbiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgc2xvdDogXCJsYWJlbFwiIH0sIHNsb3Q6IFwibGFiZWxcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJEZWFjdGl2YXRlIEFkZG9uXCIpXSldXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdXG4gICAgICApXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICBzY3JpcHRFeHBvcnRzLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIsIC8qIHNlcnZlciBvbmx5ICovXG4gIHNoYWRvd01vZGUgLyogdnVlLWNsaSBvbmx5ICovXG4pIHtcbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IHNoYWRvd01vZGVcbiAgICAgID8gZnVuY3Rpb24gKCkge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbChcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIChvcHRpb25zLmZ1bmN0aW9uYWwgPyB0aGlzLnBhcmVudCA6IHRoaXMpLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3RcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvbmFsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIHZhciBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRkb25zUGFnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjcyNWRkODdhXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRkb25zUGFnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BZGRvbnNQYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BZGRvbkl0ZW0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCJlNmZiZjk0MlwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FkZG9uSXRlbS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BZGRvbkl0ZW0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4gIE1vZGlmaWVkIGJ5IEV2YW4gWW91IEB5eXg5OTA4MDNcbiovXG5cbmltcG9ydCBsaXN0VG9TdHlsZXMgZnJvbSAnLi9saXN0VG9TdHlsZXMnXG5cbnZhciBoYXNEb2N1bWVudCA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcblxuaWYgKHR5cGVvZiBERUJVRyAhPT0gJ3VuZGVmaW5lZCcgJiYgREVCVUcpIHtcbiAgaWYgKCFoYXNEb2N1bWVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAndnVlLXN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50LiAnICtcbiAgICBcIlVzZSB7IHRhcmdldDogJ25vZGUnIH0gaW4geW91ciBXZWJwYWNrIGNvbmZpZyB0byBpbmRpY2F0ZSBhIHNlcnZlci1yZW5kZXJpbmcgZW52aXJvbm1lbnQuXCJcbiAgKSB9XG59XG5cbi8qXG50eXBlIFN0eWxlT2JqZWN0ID0ge1xuICBpZDogbnVtYmVyO1xuICBwYXJ0czogQXJyYXk8U3R5bGVPYmplY3RQYXJ0PlxufVxuXG50eXBlIFN0eWxlT2JqZWN0UGFydCA9IHtcbiAgY3NzOiBzdHJpbmc7XG4gIG1lZGlhOiBzdHJpbmc7XG4gIHNvdXJjZU1hcDogP3N0cmluZ1xufVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0gey8qXG4gIFtpZDogbnVtYmVyXToge1xuICAgIGlkOiBudW1iZXIsXG4gICAgcmVmczogbnVtYmVyLFxuICAgIHBhcnRzOiBBcnJheTwob2JqPzogU3R5bGVPYmplY3RQYXJ0KSA9PiB2b2lkPlxuICB9XG4qL31cblxudmFyIGhlYWQgPSBoYXNEb2N1bWVudCAmJiAoZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdKVxudmFyIHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsXG52YXIgc2luZ2xldG9uQ291bnRlciA9IDBcbnZhciBpc1Byb2R1Y3Rpb24gPSBmYWxzZVxudmFyIG5vb3AgPSBmdW5jdGlvbiAoKSB7fVxudmFyIG9wdGlvbnMgPSBudWxsXG52YXIgc3NySWRLZXkgPSAnZGF0YS12dWUtc3NyLWlkJ1xuXG4vLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbi8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcbnZhciBpc09sZElFID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgL21zaWUgWzYtOV1cXGIvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRTdHlsZXNDbGllbnQgKHBhcmVudElkLCBsaXN0LCBfaXNQcm9kdWN0aW9uLCBfb3B0aW9ucykge1xuICBpc1Byb2R1Y3Rpb24gPSBfaXNQcm9kdWN0aW9uXG5cbiAgb3B0aW9ucyA9IF9vcHRpb25zIHx8IHt9XG5cbiAgdmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbGlzdClcbiAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcbiAgICB2YXIgbWF5UmVtb3ZlID0gW11cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdXG4gICAgICBkb21TdHlsZS5yZWZzLS1cbiAgICAgIG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKVxuICAgIH1cbiAgICBpZiAobmV3TGlzdCkge1xuICAgICAgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBuZXdMaXN0KVxuICAgICAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXMgPSBbXVxuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldXG4gICAgICBpZiAoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgZG9tU3R5bGUucGFydHNbal0oKVxuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcyAvKiBBcnJheTxTdHlsZU9iamVjdD4gKi8pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdXG4gICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICBkb21TdHlsZS5yZWZzKytcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSlcbiAgICAgIH1cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgaWYgKGRvbVN0eWxlLnBhcnRzLmxlbmd0aCA+IGl0ZW0ucGFydHMubGVuZ3RoKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLmxlbmd0aCA9IGl0ZW0ucGFydHMubGVuZ3RoXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwYXJ0cyA9IFtdXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgcGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIHN0eWxlc0luRG9tW2l0ZW0uaWRdID0geyBpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50ICgpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcbiAgc3R5bGVFbGVtZW50LnR5cGUgPSAndGV4dC9jc3MnXG4gIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KVxuICByZXR1cm4gc3R5bGVFbGVtZW50XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gIHZhciB1cGRhdGUsIHJlbW92ZVxuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3R5bGVbJyArIHNzcklkS2V5ICsgJ349XCInICsgb2JqLmlkICsgJ1wiXScpXG5cbiAgaWYgKHN0eWxlRWxlbWVudCkge1xuICAgIGlmIChpc1Byb2R1Y3Rpb24pIHtcbiAgICAgIC8vIGhhcyBTU1Igc3R5bGVzIGFuZCBpbiBwcm9kdWN0aW9uIG1vZGUuXG4gICAgICAvLyBzaW1wbHkgZG8gbm90aGluZy5cbiAgICAgIHJldHVybiBub29wXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGhhcyBTU1Igc3R5bGVzIGJ1dCBpbiBkZXYgbW9kZS5cbiAgICAgIC8vIGZvciBzb21lIHJlYXNvbiBDaHJvbWUgY2FuJ3QgaGFuZGxlIHNvdXJjZSBtYXAgaW4gc2VydmVyLXJlbmRlcmVkXG4gICAgICAvLyBzdHlsZSB0YWdzIC0gc291cmNlIG1hcHMgaW4gPHN0eWxlPiBvbmx5IHdvcmtzIGlmIHRoZSBzdHlsZSB0YWcgaXNcbiAgICAgIC8vIGNyZWF0ZWQgYW5kIGluc2VydGVkIGR5bmFtaWNhbGx5LiBTbyB3ZSByZW1vdmUgdGhlIHNlcnZlciByZW5kZXJlZFxuICAgICAgLy8gc3R5bGVzIGFuZCBpbmplY3QgbmV3IG9uZXMuXG4gICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgaWYgKGlzT2xkSUUpIHtcbiAgICAvLyB1c2Ugc2luZ2xldG9uIG1vZGUgZm9yIElFOS5cbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrK1xuICAgIHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQoKSlcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSlcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKVxuICB9IGVsc2Uge1xuICAgIC8vIHVzZSBtdWx0aS1zdHlsZS10YWcgbW9kZSBpbiBhbGwgb3RoZXIgY2FzZXNcbiAgICBzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQoKVxuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZShvYmopXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcbiAgICAgICAgICBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuICAgICAgICAgIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKVxuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKVxuICAgIH1cbiAgfVxufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgdGV4dFN0b3JlID0gW11cblxuICByZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudFxuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpXG4gIH1cbn0pKClcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzc1xuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKVxuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKVxuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXNcbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSlcbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZUVsZW1lbnQsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzc1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWFcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXBcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKVxuICB9XG4gIGlmIChvcHRpb25zLnNzcklkKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShzc3JJZEtleSwgb2JqLmlkKVxuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZGV2dG9vbHMvZG9jcy9qYXZhc2NyaXB0LWRlYnVnZ2luZ1xuICAgIC8vIHRoaXMgbWFrZXMgc291cmNlIG1hcHMgaW5zaWRlIHN0eWxlIHRhZ3Mgd29yayBwcm9wZXJseSBpbiBDaHJvbWVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VVUkw9JyArIHNvdXJjZU1hcC5zb3VyY2VzWzBdICsgJyAqLydcbiAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwnICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArICcgKi8nXG4gIH1cblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzXG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpXG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKVxuICB9XG59XG4iLCIvKipcbiAqIFRyYW5zbGF0ZXMgdGhlIGxpc3QgZm9ybWF0IHByb2R1Y2VkIGJ5IGNzcy1sb2FkZXIgaW50byBzb21ldGhpbmdcbiAqIGVhc2llciB0byBtYW5pcHVsYXRlLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaXN0VG9TdHlsZXMgKHBhcmVudElkLCBsaXN0KSB7XG4gIHZhciBzdHlsZXMgPSBbXVxuICB2YXIgbmV3U3R5bGVzID0ge31cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldXG4gICAgdmFyIGlkID0gaXRlbVswXVxuICAgIHZhciBjc3MgPSBpdGVtWzFdXG4gICAgdmFyIG1lZGlhID0gaXRlbVsyXVxuICAgIHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdXG4gICAgdmFyIHBhcnQgPSB7XG4gICAgICBpZDogcGFyZW50SWQgKyAnOicgKyBpLFxuICAgICAgY3NzOiBjc3MsXG4gICAgICBtZWRpYTogbWVkaWEsXG4gICAgICBzb3VyY2VNYXA6IHNvdXJjZU1hcFxuICAgIH1cbiAgICBpZiAoIW5ld1N0eWxlc1tpZF0pIHtcbiAgICAgIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7IGlkOiBpZCwgcGFydHM6IFtwYXJ0XSB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0eWxlc1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBBZGRvbnNQYWdlIGZyb20gJy4vQWRkb25zUGFnZSc7XHJcblxyXG5jb25zdCB7IHJlbmRlckN1cnJlbnRQYWdlIH0gPSB3aW5kb3cuSmV0RkJBY3Rpb25zO1xyXG5cclxucmVuZGVyQ3VycmVudFBhZ2UoIEFkZG9uc1BhZ2UgKTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUlBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQWZBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBaERBO0FBa0RBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBWkE7QUFDQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQXREQTtBQXdEQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBeENBO0FBMENBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQTdMQTtBQTlFQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQWxEQTtBQXFEQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBUkE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBNURBO0FBOERBO0FBOUZBO0FBbEVBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7QUNsRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWtCQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBa0JBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7OztBQ3hDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7OztBOzs7Ozs7Ozs7Ozs7Ozs7OztBOzs7Ozs7Ozs7Ozs7Ozs7OztBOzs7Ozs7Ozs7Ozs7Ozs7OztBOzs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7O0FDOVRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7OztBQ2xPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7OztBQ25HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7O0FDL05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7OztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFFQTtBQUVBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=