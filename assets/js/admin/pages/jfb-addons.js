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
___CSS_LOADER_EXPORT___.push([module.id, ".proccesing-state {\n  opacity: 0.5;\n  pointer-events: none;\n}\n.jfb-addons-page__inner {\n  padding: 30px;\n  height: 100%;\n}\n.jfb-addons-page__header {\n  margin-bottom: 30px;\n}\n.jfb-addons-page__header-controls {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  padding-bottom: 15px;\n  border-bottom: 1px solid #DCDCDD;\n}\n.jfb-addons-page__header-controls > .cx-vui-button {\n  margin-left: 10px;\n}\n.jfb-addons-page .cx-vui-button {\n  font-size: 13px;\n  font-weight: 400;\n  background-color: transparent;\n}\n.jfb-addons-page .cx-vui-button .button-icon {\n  margin-right: 5px;\n}\n.jfb-addons-page .cx-vui-button--style-accent {\n  color: #007cba;\n  box-shadow: inset 0 0 0 1px #007cba;\n}\n.jfb-addons-page .cx-vui-button--style-accent:hover {\n  background-color: #007cba12;\n}\n.jfb-addons-page .cx-vui-button--style-accent .button-icon path {\n  fill: #007cba;\n}\n.jfb-addons-page .cx-vui-button--style-danger {\n  color: #d6336c;\n  box-shadow: inset 0 0 0 1px #d6336c;\n}\n.jfb-addons-page .cx-vui-button--style-danger:hover {\n  background-color: #d6336c12;\n}\n.jfb-addons-page .cx-vui-button--style-danger .button-icon path {\n  fill: #d6336c;\n}\n.jfb-addons-page .cx-vui-button__content > span {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.jfb-addons-page .cx-vui-popup__header {\n  padding-bottom: 15px;\n  border-bottom: 1px solid #DCDCDD;\n  margin-bottom: 30px;\n}\n.jfb-addons-page .cx-vui-popup__header-title {\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 36px;\n  color: #23282D;\n}\n.jfb-addons-page__license-form {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: stretch;\n}\n.jfb-addons-page__license-form > span {\n  margin-bottom: 10px;\n}\n.jfb-addons-page__license-input {\n  margin-bottom: 10px;\n}\n.jfb-addons-page .go-pro-banner {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 24px 0;\n  border-bottom: 1px solid #DCDCDD;\n}\n.jfb-addons-page .go-pro-banner__subtitle {\n  font-size: 18px;\n  line-height: 1.25;\n  font-weight: 500;\n  color: #007CBA;\n  margin-bottom: 5px;\n}\n.jfb-addons-page .go-pro-banner__title {\n  font-size: 24px;\n  line-height: 1.25;\n  font-weight: 500;\n  color: #23282D;\n  margin-bottom: 20px;\n}\n.jfb-addons-page .go-pro-banner__button {\n  color: white;\n  background-color: #007CBA;\n}", "",{"version":3,"sources":["webpack://./admin/pages/jfb-addons/AddonsPage.vue","webpack://./../AddonsPage.vue"],"names":[],"mappings":"AA0ZA;EACC,YAAA;EACA,oBAAA;ACzZD;AD8ZC;EACC,aAAA;EACA,YAAA;AC3ZF;AD8ZC;EACC,mBAAA;AC5ZF;AD+ZC;EACC,aAAA;EACA,yBAAA;EACA,mBAAA;EACA,oBAAA;EACA,gCAAA;AC7ZF;AD+ZE;EACC,iBAAA;AC7ZH;ADiaC;EACC,eAAA;EACA,gBAAA;EACA,6BAAA;AC/ZF;ADiaE;EACC,iBAAA;AC/ZH;ADkaE;EACC,cAAA;EACA,mCAAA;AChaH;ADkaG;EACC,2BAAA;AChaJ;ADoaI;EACC,aAAA;AClaL;ADuaE;EACC,cAAA;EACA,mCAAA;ACraH;ADuaG;EACC,2BAAA;ACraJ;ADyaI;EACC,aAAA;ACvaL;AD6aG;EACC,aAAA;EACA,uBAAA;EACA,mBAAA;AC3aJ;ADibE;EACC,oBAAA;EACA,gCAAA;EACA,mBAAA;AC/aH;ADkbE;EACC,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cAAA;AChbH;ADwbC;EACC,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,oBAAA;ACtbF;ADwbE;EACC,mBAAA;ACtbH;AD0bC;EACC,mBAAA;ACxbF;AD2bC;EACC,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;EACA,gCAAA;ACzbF;AD2bE;EACC,eAAA;EACA,iBAAA;EACA,gBAAA;EACA,cAAA;EACA,kBAAA;ACzbH;AD4bE;EACC,eAAA;EACA,iBAAA;EACA,gBAAA;EACA,cAAA;EACA,mBAAA;AC1bH;AD6bE;EACC,YAAA;EACA,yBAAA;AC3bH","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n\r\n.proccesing-state {\r\n\topacity: 0.5;\r\n\tpointer-events: none;\r\n}\r\n\r\n.jfb-addons-page {\r\n\r\n\t&__inner {\r\n\t\tpadding: 30px;\r\n\t\theight: 100%;\r\n\t}\r\n\r\n\t&__header {\r\n\t\tmargin-bottom: 30px;\r\n\t}\r\n\r\n\t&__header-controls {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: flex-end;\r\n\t\talign-items: center;\r\n\t\tpadding-bottom: 15px;\r\n\t\tborder-bottom: 1px solid #DCDCDD;\r\n\r\n\t\t> .cx-vui-button {\r\n\t\t\tmargin-left: 10px;\r\n\t\t}\r\n\t}\r\n\r\n\t.cx-vui-button {\r\n\t\tfont-size: 13px;\r\n\t\tfont-weight: 400;\r\n\t\tbackground-color: transparent;\r\n\r\n\t\t.button-icon {\r\n\t\t\tmargin-right: 5px;\r\n\t\t}\r\n\r\n\t\t&--style-accent {\r\n\t\t\tcolor: #007cba;\r\n\t\t\tbox-shadow: inset 0 0 0 1px #007cba;\r\n\r\n\t\t\t&:hover {\r\n\t\t\t\tbackground-color: #007cba12;\r\n\t\t\t}\r\n\r\n\t\t\t.button-icon {\r\n\t\t\t\tpath {\r\n\t\t\t\t\tfill: #007cba;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t&--style-danger {\r\n\t\t\tcolor: #d6336c;\r\n\t\t\tbox-shadow: inset 0 0 0 1px #d6336c;\r\n\r\n\t\t\t&:hover {\r\n\t\t\t\tbackground-color: #d6336c12;\r\n\t\t\t}\r\n\r\n\t\t\t.button-icon {\r\n\t\t\t\tpath {\r\n\t\t\t\t\tfill: #d6336c;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t&__content {\r\n\t\t\t> span {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\tjustify-content: center;\r\n\t\t\t\talign-items: center;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t.cx-vui-popup {\r\n\t\t&__header {\r\n\t\t\tpadding-bottom: 15px;\r\n\t\t\tborder-bottom: 1px solid #DCDCDD;\r\n\t\t\tmargin-bottom: 30px;\r\n\t\t}\r\n\r\n\t\t&__header-title {\r\n\t\t\tfont-weight: 500;\r\n\t\t\tfont-size: 24px;\r\n\t\t\tline-height: 36px;\r\n\t\t\tcolor: #23282D;\r\n\t\t}\r\n\t}\r\n\r\n\t&__license-popup {\r\n\r\n\t}\r\n\r\n\t&__license-form {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tjustify-content: flex-start;\r\n\t\talign-items: stretch;\r\n\r\n\t\t> span {\r\n\t\t\tmargin-bottom: 10px;\r\n\t\t}\r\n\t}\r\n\r\n\t&__license-input {\r\n\t\tmargin-bottom: 10px;\r\n\t}\r\n\r\n\t.go-pro-banner {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tjustify-content: center;\r\n\t\talign-items: center;\r\n\t\tpadding: 24px 0;\r\n\t\tborder-bottom: 1px solid #DCDCDD;\r\n\r\n\t\t&__subtitle {\r\n\t\t\tfont-size: 18px;\r\n\t\t\tline-height: 1.25;\r\n\t\t\tfont-weight: 500;\r\n\t\t\tcolor: #007CBA;\r\n\t\t\tmargin-bottom: 5px;\r\n\t\t}\r\n\r\n\t\t&__title {\r\n\t\t\tfont-size: 24px;\r\n\t\t\tline-height: 1.25;\r\n\t\t\tfont-weight: 500;\r\n\t\t\tcolor: #23282D;\r\n\t\t\tmargin-bottom: 20px;\r\n\t\t}\r\n\r\n\t\t&__button {\r\n\t\t\tcolor: white;\r\n\t\t\tbackground-color: #007CBA;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n",".proccesing-state {\n  opacity: 0.5;\n  pointer-events: none;\n}\n\n.jfb-addons-page__inner {\n  padding: 30px;\n  height: 100%;\n}\n.jfb-addons-page__header {\n  margin-bottom: 30px;\n}\n.jfb-addons-page__header-controls {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  padding-bottom: 15px;\n  border-bottom: 1px solid #DCDCDD;\n}\n.jfb-addons-page__header-controls > .cx-vui-button {\n  margin-left: 10px;\n}\n.jfb-addons-page .cx-vui-button {\n  font-size: 13px;\n  font-weight: 400;\n  background-color: transparent;\n}\n.jfb-addons-page .cx-vui-button .button-icon {\n  margin-right: 5px;\n}\n.jfb-addons-page .cx-vui-button--style-accent {\n  color: #007cba;\n  box-shadow: inset 0 0 0 1px #007cba;\n}\n.jfb-addons-page .cx-vui-button--style-accent:hover {\n  background-color: #007cba12;\n}\n.jfb-addons-page .cx-vui-button--style-accent .button-icon path {\n  fill: #007cba;\n}\n.jfb-addons-page .cx-vui-button--style-danger {\n  color: #d6336c;\n  box-shadow: inset 0 0 0 1px #d6336c;\n}\n.jfb-addons-page .cx-vui-button--style-danger:hover {\n  background-color: #d6336c12;\n}\n.jfb-addons-page .cx-vui-button--style-danger .button-icon path {\n  fill: #d6336c;\n}\n.jfb-addons-page .cx-vui-button__content > span {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.jfb-addons-page .cx-vui-popup__header {\n  padding-bottom: 15px;\n  border-bottom: 1px solid #DCDCDD;\n  margin-bottom: 30px;\n}\n.jfb-addons-page .cx-vui-popup__header-title {\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 36px;\n  color: #23282D;\n}\n.jfb-addons-page__license-form {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: stretch;\n}\n.jfb-addons-page__license-form > span {\n  margin-bottom: 10px;\n}\n.jfb-addons-page__license-input {\n  margin-bottom: 10px;\n}\n.jfb-addons-page .go-pro-banner {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 24px 0;\n  border-bottom: 1px solid #DCDCDD;\n}\n.jfb-addons-page .go-pro-banner__subtitle {\n  font-size: 18px;\n  line-height: 1.25;\n  font-weight: 500;\n  color: #007CBA;\n  margin-bottom: 5px;\n}\n.jfb-addons-page .go-pro-banner__title {\n  font-size: 24px;\n  line-height: 1.25;\n  font-weight: 500;\n  color: #23282D;\n  margin-bottom: 20px;\n}\n.jfb-addons-page .go-pro-banner__button {\n  color: white;\n  background-color: #007CBA;\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".jfb-addons {\n  margin-bottom: 50px;\n}\n.jfb-addons:last-child {\n  margin-bottom: 0;\n}\n.jfb-addons a {\n  color: #007cba;\n}\n.jfb-addons__header {\n  margin-bottom: 20px;\n}\n.jfb-addons__list {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 40px;\n}\n@media (max-width: 1140px) {\n.jfb-addons__list {\n    grid-template-columns: repeat(2, 1fr);\n}\n}\n.jfb-addons__item {\n  transition: box-shadow 0.3s ease-out;\n  border-radius: 10px;\n}\n.jfb-addons__item:hover {\n  box-shadow: 0px 4px 28px rgba(15, 23, 42, 0.1);\n}\n.jfb-addons__item.activated .jfb-addons__item-info {\n  background-color: white;\n}\n.jfb-addons__item.update-avaliable .jfb-addons__item-name .version {\n  background-color: #D6336C;\n}\n.jfb-addons__item.update-avaliable .jfb-addons__item-update .latest-version {\n  color: white;\n  background-color: #46B450;\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n.jfb-addons__item-inner {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  height: 100%;\n}\n.jfb-addons__item-thumb {\n  border-radius: 10px 10px 0 0;\n  line-height: 0;\n  overflow: hidden;\n  position: relative;\n}\n.jfb-addons__item-thumb .pro-badge {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n}\n.jfb-addons__item-thumb img {\n  width: 100%;\n  height: auto;\n}\n.jfb-addons__item-info {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  flex: 1 1 auto;\n  padding: 20px;\n  border-radius: 0 0 10px 10px;\n  border-width: 0 1px 1px 1px;\n  border-color: #DCDCDD;\n  border-style: solid;\n  background-color: white;\n}\n.jfb-addons__item-name {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 10px;\n}\n.jfb-addons__item-name .label {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.25;\n}\n.jfb-addons__item-name .version {\n  padding: 1px 8px;\n  border-radius: 4px;\n  color: white;\n  background-color: #46B450;\n  margin-left: 10px;\n}\n.jfb-addons__item-update {\n  color: #7b7e81;\n  margin-bottom: 10px;\n}\n.jfb-addons__item-license {\n  margin-bottom: 10px;\n  color: #7b7e81;\n}\n.jfb-addons__item-license .cx-vui-button {\n  margin-left: 3px;\n}\n.jfb-addons__item-desc {\n  flex: 1 1 auto;\n}\n.jfb-addons__item-desc a {\n  text-decoration: none;\n}\n.jfb-addons__item-actions {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-top: 20px;\n}\n.jfb-addons__item-actions:empty {\n  display: none;\n}\n.jfb-addons__item-actions .cx-vui-button {\n  margin-right: 20px;\n}", "",{"version":3,"sources":["webpack://./admin/pages/jfb-addons/components/AddonItem.vue","webpack://./../AddonItem.vue"],"names":[],"mappings":"AAkRA;EACC,mBAAA;ACjRD;ADmRC;EACC,gBAAA;ACjRF;ADoRC;EACC,cAAA;AClRF;ADqRC;EACC,mBAAA;ACnRF;ADsRC;EACC,aAAA;EACA,qCAAA;EACA,SAAA;ACpRF;ADsRE;AALD;IAME,qCAAA;ACnRD;AACF;ADsRC;EACC,oCAAA;EACA,mBAAA;ACpRF;ADsRE;EACC,8CAAA;ACpRH;ADwRG;EACC,uBAAA;ACtRJ;AD4RI;EACC,yBAAA;AC1RL;AD8RI;EACC,YAAA;EACA,yBAAA;EACA,gBAAA;EACA,kBAAA;AC5RL;ADkSC;EACC,aAAA;EACA,sBAAA;EACA,oBAAA;EACA,YAAA;AChSF;ADmSC;EACC,4BAAA;EACA,cAAA;EACA,gBAAA;EACA,kBAAA;ACjSF;ADmSE;EACC,kBAAA;EACA,SAAA;EACA,UAAA;ACjSH;ADoSE;EACC,WAAA;EACA,YAAA;AClSH;ADsSC;EACC,aAAA;EACA,sBAAA;EACA,oBAAA;EACA,cAAA;EACA,aAAA;EACA,4BAAA;EACA,2BAAA;EACA,qBAAA;EACA,mBAAA;EACA,uBAAA;ACpSF;ADuSC;EACC,aAAA;EACA,8BAAA;EACA,uBAAA;EACA,mBAAA;ACrSF;ADuSE;EACC,eAAA;EACA,gBAAA;EACA,iBAAA;ACrSH;ADwSE;EACC,gBAAA;EACA,kBAAA;EACA,YAAA;EACA,yBAAA;EACA,iBAAA;ACtSH;AD0SC;EACC,cAAA;EACA,mBAAA;ACxSF;AD2SC;EACC,mBAAA;EACA,cAAA;ACzSF;AD2SE;EACC,gBAAA;ACzSH;AD6SC;EACC,cAAA;AC3SF;AD6SE;EACC,qBAAA;AC3SH;AD+SC;EACC,aAAA;EACA,2BAAA;EACA,mBAAA;EACA,eAAA;EACA,gBAAA;AC7SF;AD+SE;EACC,aAAA;AC7SH;ADgTE;EACC,kBAAA;AC9SH","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n\r\n.jfb-addons {\r\n\tmargin-bottom: 50px;\r\n\r\n\t&:last-child {\r\n\t\tmargin-bottom: 0;\r\n\t}\r\n\r\n\ta {\r\n\t\tcolor: #007cba;\r\n\t}\r\n\r\n\t&__header {\r\n\t\tmargin-bottom: 20px;\r\n\t}\r\n\r\n\t&__list {\r\n\t\tdisplay: grid;\r\n\t\tgrid-template-columns: repeat(4, 1fr);\r\n\t\tgap: 40px;\r\n\r\n\t\t@media (max-width: 1140px) {\r\n\t\t\tgrid-template-columns: repeat(2, 1fr);\r\n\t\t}\r\n\t}\r\n\r\n\t&__item {\r\n\t\ttransition: box-shadow .3s ease-out;\r\n\t\tborder-radius: 10px;\r\n\r\n\t\t&:hover {\r\n\t\t\tbox-shadow: 0px 4px 28px rgba(15, 23, 42, 0.1);\r\n\t\t}\r\n\r\n\t\t&.activated {\r\n\t\t\t.jfb-addons__item-info {\r\n\t\t\t\tbackground-color: white;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t&.update-avaliable {\r\n\t\t\t.jfb-addons__item-name {\r\n\t\t\t\t.version {\r\n\t\t\t\t\tbackground-color: #D6336C;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t.jfb-addons__item-update {\r\n\t\t\t\t.latest-version {\r\n\t\t\t\t\tcolor: white;\r\n\t\t\t\t\tbackground-color: #46B450;\r\n\t\t\t\t\tpadding: 2px 8px;\r\n\t\t\t\t\tborder-radius: 4px;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t&__item-inner {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\talign-items: stretch;\r\n\t\theight: 100%;\r\n\t}\r\n\r\n\t&__item-thumb {\r\n\t\tborder-radius: 10px 10px 0 0;\r\n\t\tline-height: 0;\r\n\t\toverflow: hidden;\r\n\t\tposition: relative;\r\n\r\n\t\t.pro-badge {\r\n\t\t\tposition: absolute;\r\n\t\t\ttop: 12px;\r\n\t\t\tleft: 12px;\r\n\t\t}\r\n\r\n\t\timg {\r\n\t\t\twidth: 100%;\r\n\t\t\theight: auto;\r\n\t\t}\r\n\t}\r\n\r\n\t&__item-info {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\talign-items: stretch;\r\n\t\tflex: 1 1 auto;\r\n\t\tpadding: 20px;\r\n\t\tborder-radius: 0 0 10px 10px;\r\n\t\tborder-width: 0 1px 1px 1px;\r\n\t\tborder-color: #DCDCDD;\r\n\t\tborder-style: solid;\r\n\t\tbackground-color: white;\r\n\t}\r\n\r\n\t&__item-name {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t\talign-items: flex-start;\r\n\t\tmargin-bottom: 10px;\r\n\r\n\t\t.label {\r\n\t\t\tfont-size: 20px;\r\n\t\t\tfont-weight: 700;\r\n\t\t\tline-height: 1.25;\r\n\t\t}\r\n\r\n\t\t.version {\r\n\t\t\tpadding: 1px 8px;\r\n\t\t\tborder-radius: 4px;\r\n\t\t\tcolor: white;\r\n\t\t\tbackground-color: #46B450;\r\n\t\t\tmargin-left: 10px;\r\n\t\t}\r\n\t}\r\n\r\n\t&__item-update {\r\n\t\tcolor: #7b7e81;\r\n\t\tmargin-bottom: 10px;\r\n\t}\r\n\r\n\t&__item-license {\r\n\t\tmargin-bottom: 10px;\r\n\t\tcolor: #7b7e81;\r\n\r\n\t\t.cx-vui-button {\r\n\t\t\tmargin-left: 3px;\r\n\t\t}\r\n\t}\r\n\r\n\t&__item-desc {\r\n\t\tflex: 1 1 auto;\r\n\r\n\t\ta {\r\n\t\t\ttext-decoration: none;\r\n\t\t}\r\n\t}\r\n\r\n\t&__item-actions {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: flex-start;\r\n\t\talign-items: center;\r\n\t\tflex-wrap: wrap;\r\n\t\tmargin-top: 20px;\r\n\r\n\t\t&:empty {\r\n\t\t\tdisplay: none;\r\n\t\t}\r\n\r\n\t\t.cx-vui-button {\r\n\t\t\tmargin-right: 20px;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n",".jfb-addons {\n  margin-bottom: 50px;\n}\n.jfb-addons:last-child {\n  margin-bottom: 0;\n}\n.jfb-addons a {\n  color: #007cba;\n}\n.jfb-addons__header {\n  margin-bottom: 20px;\n}\n.jfb-addons__list {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 40px;\n}\n@media (max-width: 1140px) {\n  .jfb-addons__list {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.jfb-addons__item {\n  transition: box-shadow 0.3s ease-out;\n  border-radius: 10px;\n}\n.jfb-addons__item:hover {\n  box-shadow: 0px 4px 28px rgba(15, 23, 42, 0.1);\n}\n.jfb-addons__item.activated .jfb-addons__item-info {\n  background-color: white;\n}\n.jfb-addons__item.update-avaliable .jfb-addons__item-name .version {\n  background-color: #D6336C;\n}\n.jfb-addons__item.update-avaliable .jfb-addons__item-update .latest-version {\n  color: white;\n  background-color: #46B450;\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n.jfb-addons__item-inner {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  height: 100%;\n}\n.jfb-addons__item-thumb {\n  border-radius: 10px 10px 0 0;\n  line-height: 0;\n  overflow: hidden;\n  position: relative;\n}\n.jfb-addons__item-thumb .pro-badge {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n}\n.jfb-addons__item-thumb img {\n  width: 100%;\n  height: auto;\n}\n.jfb-addons__item-info {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  flex: 1 1 auto;\n  padding: 20px;\n  border-radius: 0 0 10px 10px;\n  border-width: 0 1px 1px 1px;\n  border-color: #DCDCDD;\n  border-style: solid;\n  background-color: white;\n}\n.jfb-addons__item-name {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 10px;\n}\n.jfb-addons__item-name .label {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.25;\n}\n.jfb-addons__item-name .version {\n  padding: 1px 8px;\n  border-radius: 4px;\n  color: white;\n  background-color: #46B450;\n  margin-left: 10px;\n}\n.jfb-addons__item-update {\n  color: #7b7e81;\n  margin-bottom: 10px;\n}\n.jfb-addons__item-license {\n  margin-bottom: 10px;\n  color: #7b7e81;\n}\n.jfb-addons__item-license .cx-vui-button {\n  margin-left: 3px;\n}\n.jfb-addons__item-desc {\n  flex: 1 1 auto;\n}\n.jfb-addons__item-desc a {\n  text-decoration: none;\n}\n.jfb-addons__item-actions {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-top: 20px;\n}\n.jfb-addons__item-actions:empty {\n  display: none;\n}\n.jfb-addons__item-actions .cx-vui-button {\n  margin-right: 20px;\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4vcGFnZXMvamZiLWFkZG9ucy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hZG1pbi9wYWdlcy9qZmItYWRkb25zL0FkZG9uc1BhZ2UudnVlIiwid2VicGFjazovLy9hZG1pbi9wYWdlcy9qZmItYWRkb25zL2NvbXBvbmVudHMvQWRkb25JdGVtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9qZmItYWRkb25zL0FkZG9uc1BhZ2UudnVlP2Y0ZTciLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvamZiLWFkZG9ucy9jb21wb25lbnRzL0FkZG9uSXRlbS52dWU/MmRiOCIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvamZiLWFkZG9ucy9BZGRvbnNQYWdlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9qZmItYWRkb25zL2NvbXBvbmVudHMvQWRkb25JdGVtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9qZmItYWRkb25zL0FkZG9uc1BhZ2UudnVlPzdlMzUiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvamZiLWFkZG9ucy9jb21wb25lbnRzL0FkZG9uSXRlbS52dWU/OWExNCIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9qZmItYWRkb25zL0FkZG9uc1BhZ2UudnVlPzkwYTIiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvamZiLWFkZG9ucy9jb21wb25lbnRzL0FkZG9uSXRlbS52dWU/MTU0ZCIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcyIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9qZmItYWRkb25zL0FkZG9uc1BhZ2UudnVlP2IwMjgiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvamZiLWFkZG9ucy9jb21wb25lbnRzL0FkZG9uSXRlbS52dWU/NTdhOCIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2xpc3RUb1N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvamZiLWFkZG9ucy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PGRpdlxyXG5cdFx0Y2xhc3M9XCJqZmItYWRkb25zLXBhZ2Ugd3JhcFwiXHJcblx0XHQ6Y2xhc3M9XCJ7ICdwcm9jY2VzaW5nLXN0YXRlJzogcHJvY2Nlc2luZ1N0YXRlIH1cIlxyXG5cdD5cclxuXHRcdDxoMSBjbGFzcz1cImNzLXZ1aS10aXRsZVwiPnt7ICdKZXRGb3JtQnVpbGRlciBBZGRvbnMnIH19PC9oMT5cclxuXHRcdDxkaXYgY2xhc3M9XCJqZmItYWRkb25zLXBhZ2VfX2lubmVyIGN4LXZ1aS1wYW5lbFwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiamZiLWFkZG9ucy1wYWdlX19oZWFkZXJcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiamZiLWFkZG9ucy1wYWdlX19oZWFkZXItY29udHJvbHNcIj5cclxuXHRcdFx0XHRcdDxjeC12dWktYnV0dG9uXHJcblx0XHRcdFx0XHRcdGJ1dHRvbi1zdHlsZT1cImFjY2VudFwiXHJcblx0XHRcdFx0XHRcdHNpemU9XCJtaW5pXCJcclxuXHRcdFx0XHRcdFx0OmxvYWRpbmc9XCJjaGVja1VwZGF0ZXNQcm9jZXNzZWRcIlxyXG5cdFx0XHRcdFx0XHRAY2xpY2s9XCJjaGVja1BsdWdpbnNVcGRhdGVcIlxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBzbG90PVwibGFiZWxcIj5cclxuXHRcdFx0XHRcdFx0XHQ8c3ZnIGNsYXNzPVwiYnV0dG9uLWljb25cIiB3aWR0aD1cIjE0XCIgaGVpZ2h0PVwiMTRcIiB2aWV3Qm94PVwiMCAwIDE0IDE0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPVwiTTExLjcwODUgMi4yOTE3MUMxMC41MDAxIDEuMDgzMzcgOC44NDE4IDAuMzMzMzc0IDcuMDAwMTMgMC4zMzMzNzRDMy4zMTY4IDAuMzMzMzc0IDAuMzQxNzk3IDMuMzE2NzEgMC4zNDE3OTcgNy4wMDAwNEMwLjM0MTc5NyAxMC42ODM0IDMuMzE2OCAxMy42NjY3IDcuMDAwMTMgMTMuNjY2N0MxMC4xMDg1IDEzLjY2NjcgMTIuNzAwMSAxMS41NDE3IDEzLjQ0MTggOC42NjY3MUgxMS43MDg1QzExLjAyNTEgMTAuNjA4NCA5LjE3NTEzIDEyIDcuMDAwMTMgMTJDNC4yNDE4IDEyIDIuMDAwMTMgOS43NTgzNyAyLjAwMDEzIDcuMDAwMDRDMi4wMDAxMyA0LjI0MTcxIDQuMjQxOCAyLjAwMDA0IDcuMDAwMTMgMi4wMDAwNEM4LjM4MzQ2IDIuMDAwMDQgOS42MTY4IDIuNTc1MDQgMTAuNTE2OCAzLjQ4MzM3TDcuODMzNDYgNi4xNjY3MUgxMy42NjY4VjAuMzMzMzc0TDExLjcwODUgMi4yOTE3MVpcIiBmaWxsPVwiIzAwN0NCQVwiLz5cclxuXHRcdFx0XHRcdFx0XHQ8L3N2Zz5cclxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj5DaGVjayBGb3IgVXBkYXRlczwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9jeC12dWktYnV0dG9uPlxyXG5cclxuXHRcdFx0XHRcdDxjeC12dWktYnV0dG9uXHJcblxyXG5cdFx0XHRcdFx0XHQ6Y2xhc3M9XCJbICFpc0xpY2Vuc2VBY3RpdmF0ZWQgPyAnY3gtdnVpLWJ1dHRvbi0tc3R5bGUtYWNjZW50JyA6ICdjeC12dWktYnV0dG9uLS1zdHlsZS1kYW5nZXInIF1cIlxyXG5cdFx0XHRcdFx0XHRzaXplPVwibWluaVwiXHJcblx0XHRcdFx0XHRcdEBjbGljaz1cInNob3dMaWNlbnNlUG9wdXBcIlxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBzbG90PVwibGFiZWxcIj5cclxuXHRcdFx0XHRcdFx0XHQ8c3ZnIGNsYXNzPVwiYnV0dG9uLWljb25cIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPVwiTTE1LjQ5ODUgMEgxMi40ODk3QzEyLjQxNjYgMCAxMi4zNDg3IDAuMDE1NjcwOSAxMi4yODYgMC4wNDcwMTI3QzEyLjIzMzggMC4wNjc5MDczIDEyLjE4NjcgMC4xMDQ0NzMgMTIuMTQ1IDAuMTU2NzA5TDUuNzY2OSA2LjQ3MjA5QzUuNjIwNjMgNi40NDA3NCA1LjQ2MzkyIDYuNDE0NjMgNS4yOTY3NyA2LjM5MzczQzUuMTI5NjEgNi4zNzI4NCA0Ljk2NzY4IDYuMzYyMzkgNC44MTA5NyA2LjM2MjM5QzQuMTYzMjQgNi4zNjIzOSAzLjU0Njg1IDYuNDg3NzYgMi45NjE4IDYuNzM4NDlDMi4zNzY3NSA2Ljk3ODc4IDEuODU5NjEgNy4zMjM1NCAxLjQxMDM4IDcuNzcyNzdDMC45NjExNDkgOC4yMjIgMC42MTExNjYgOC43MzkxNCAwLjM2MDQzMSA5LjMyNDE5QzAuMTIwMTQ0IDkuOTA5MjQgMCAxMC41MzA5IDAgMTEuMTg5QzAgMTEuODM2OCAwLjEyMDE0NCAxMi40NTMyIDAuMzYwNDMxIDEzLjAzODJDMC42MTExNjYgMTMuNjIzMiAwLjk2MTE0OSAxNC4xNDA0IDEuNDEwMzggMTQuNTg5NkMxLjg1OTYxIDE1LjAzODkgMi4zNzY3NSAxNS4zODM2IDIuOTYxOCAxNS42MjM5QzMuNTQ2ODUgMTUuODc0NiA0LjE2MzI0IDE2IDQuODEwOTcgMTZDNS40NjkxNSAxNiA2LjA5MDc2IDE1Ljg3NDYgNi42NzU4MSAxNS42MjM5QzcuMjYwODYgMTUuMzgzNiA3Ljc3OCAxNS4wMzg5IDguMjI3MjMgMTQuNTg5NkM4LjgwMTgzIDE0LjAxNSA5LjE5ODgyIDEzLjM0NjQgOS40MTgyMiAxMi41ODM3QzkuNjQ4MDYgMTEuODIxMSA5LjY4NDYyIDExLjAzNzUgOS41Mjc5MSAxMC4yMzMxTDEwLjg5MTMgOC44Njk3NEMxMC45MzMxIDguODI3OTUgMTAuOTY0NCA4Ljc4MDkzIDEwLjk4NTMgOC43Mjg3QzExLjAxNjcgOC42NjYwMSAxMS4wMzIzIDguNTk4MTEgMTEuMDMyMyA4LjUyNDk4VjcuMDIwNTdIMTIuNTM2N0MxMi42OTM0IDcuMDIwNTcgMTIuODEzNiA2Ljk3MzU2IDEyLjg5NzIgNi44Nzk1M0MxMi45OTEyIDYuNzg1NSAxMy4wMzgyIDYuNjY1MzYgMTMuMDM4MiA2LjUxOTFWNS4wMTQ2OUgxNC41NDI2QzE0LjYxNTcgNS4wMTQ2OSAxNC42Nzg0IDUuMDA0MjQgMTQuNzMwNyA0Ljk4MzM1QzE0Ljc5MzMgNC45NTIwMSAxNC44NTA4IDQuOTEwMjIgMTQuOTAzIDQuODU3OThMMTUuOTA2IDMuODU1MDRDMTUuOTI2OSAzLjgxMzI2IDE1Ljk0NzggMy43NjYyNCAxNS45Njg3IDMuNzE0MDFDMTUuOTg5NiAzLjY1MTMyIDE2IDMuNTgzNDIgMTYgMy41MTAyOFYwLjUwMTQ2OUMxNiAwLjM1NTIwNyAxNS45NTMgMC4yMzUwNjQgMTUuODU5IDAuMTQxMDM4QzE1Ljc2NDkgMC4wNDcwMTI3IDE1LjY0NDggMCAxNS40OTg1IDBaTTQuOTY3NjggMTIuNzg3NUM0Ljc5MDA4IDEyLjk2NTEgNC41OTY4IDEzLjA5NTcgNC4zODc4NiAxMy4xNzkyQzQuMTg5MzYgMTMuMjUyNCAzLjk2NDc0IDEzLjI4ODkgMy43MTQwMSAxMy4yODg5QzMuNDYzMjcgMTMuMjg4OSAzLjIzMzQzIDEzLjI0MTkgMy4wMjQ0OSAxMy4xNDc5QzIuODI1OTkgMTMuMDUzOSAyLjYzNzk0IDEyLjkzMzcgMi40NjAzMyAxMi43ODc1QzIuMjgyNzMgMTIuNjA5OSAyLjE1MjE0IDEyLjQyMTggMi4wNjg1NiAxMi4yMjMzQzEuOTk1NDMgMTIuMDE0NCAxLjk1ODg2IDExLjc4NDUgMS45NTg4NiAxMS41MzM4QzEuOTU4ODYgMTEuMjgzMSAyLjAwNTg4IDExLjA1ODQgMi4wOTk5IDEwLjg1OTlDMi4xOTM5MyAxMC42NTEgMi4zMTQwNyAxMC40NTc3IDIuNDYwMzMgMTAuMjgwMUMyLjc4NDIgOS45NTYyNSAzLjE5MTY0IDkuNzk0MzIgMy42ODI2NiA5Ljc5NDMyQzQuMTg0MTMgOS43OTQzMiA0LjU5NjggOS45NTYyNSA0LjkyMDY3IDEwLjI4MDFDNS4wOTgyNyAxMC40NTc3IDUuMjIzNjQgMTAuNjUxIDUuMjk2NzcgMTAuODU5OUM1LjM4MDM1IDExLjA1ODQgNS40MjIxNCAxMS4yODMxIDUuNDIyMTQgMTEuNTMzOEM1LjQyMjE0IDExLjc4NDUgNS4zODAzNSAxMi4wMTQ0IDUuMjk2NzcgMTIuMjIzM0M1LjIyMzY0IDEyLjQyMTggNS4xMTM5NCAxMi42MDk5IDQuOTY3NjggMTIuNzg3NVpcIiBmaWxsPVwiI0QzRDNEM1wiLz5cclxuXHRcdFx0XHRcdFx0XHQ8L3N2Zz5cclxuXHRcdFx0XHRcdFx0XHQ8c3BhbiB2LWlmPVwiIWlzTGljZW5zZUFjdGl2YXRlZFwiPkFjdGl2YXRlIExpY2Vuc2U8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gdi1pZj1cImlzTGljZW5zZUFjdGl2YXRlZFwiPkRlYWN0aXZhdGUgTGljZW5zZTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9jeC12dWktYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdGNsYXNzPVwiZ28tcHJvLWJhbm5lclwiXHJcblx0XHRcdFx0XHR2LWlmPVwiIWlzTGljZW5zZUFjdGl2YXRlZFwiXHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImdvLXByby1iYW5uZXJfX3N1YnRpdGxlXCI+RmVhdHVyZXMgJiBJbnRlZ3JhdGlvbnMgPC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZ28tcHJvLWJhbm5lcl9fdGl0bGVcIj5FeHRlbmQgZnVuY3Rpb25hbGl0eSB3aXRoIFBSTyBBZGRvbnM8L2Rpdj5cclxuXHRcdFx0XHRcdDxjeC12dWktYnV0dG9uXHJcblx0XHRcdFx0XHRcdGNsYXNzPVwiZ28tcHJvLWJhbm5lcl9fYnV0dG9uXCJcclxuXHRcdFx0XHRcdFx0YnV0dG9uLXN0eWxlPVwiZGVmYXVsdFwiXHJcblx0XHRcdFx0XHRcdHNpemU9XCJtaW5pXCJcclxuXHRcdFx0XHRcdFx0OnVybD1cImdvUHJvTGlua1wiXHJcblx0XHRcdFx0XHRcdHRhZy1uYW1lPVwiYVwiXHJcblx0XHRcdFx0XHRcdHRhcmdldD1cIl9ibGFua1wiXHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxzcGFuIHNsb3Q9XCJsYWJlbFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuPkdvIFBybzwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9jeC12dWktYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxkaXZcclxuXHRcdFx0XHRjbGFzcz1cImpmYi1hZGRvbnNcIlxyXG5cdFx0XHRcdHYtaWY9XCIwIT09T2JqZWN0LmtleXMoaW5zdGFsbGVkQWRkb25MaXN0KS5sZW5ndGhcIlxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImpmYi1hZGRvbnNfX2hlYWRlclwiPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJjeC12dWktc3VidGl0bGVcIj5Zb3VyIEluc3RhbGxlZCBBZGRvbnM8L3NwYW4+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImpmYi1hZGRvbnNfX2xpc3RcIj5cclxuXHRcdFx0XHRcdDxBZGRvbkl0ZW1cclxuXHRcdFx0XHRcdFx0di1mb3I9XCIoIGFkZG9uRGF0YSwgaW5kZXggKSBpbiBpbnN0YWxsZWRBZGRvbkxpc3RcIlxyXG5cdFx0XHRcdFx0XHQ6a2V5PVwiaW5kZXhcIlxyXG5cdFx0XHRcdFx0XHQ6YWRkb24tZGF0YT1cImFkZG9uRGF0YVwiXHJcblx0XHRcdFx0XHQ+PC9BZGRvbkl0ZW0+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PGRpdlxyXG5cdFx0XHRcdGNsYXNzPVwiamZiLWFkZG9uc1wiXHJcblx0XHRcdFx0di1pZj1cIjAhPT1PYmplY3Qua2V5cyhhdmFpbGFibGVBZGRvbkxpc3QpLmxlbmd0aFwiXHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiamZiLWFkZG9uc19faGVhZGVyXCI+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImN4LXZ1aS1zdWJ0aXRsZVwiPkFsbCBBdmFpbGFibGUgQWRkb25zPC9zcGFuPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJqZmItYWRkb25zX19saXN0XCI+XHJcblx0XHRcdFx0XHQ8QWRkb25JdGVtXHJcblx0XHRcdFx0XHRcdHYtZm9yPVwiKCBhZGRvbkRhdGEsIGluZGV4ICkgaW4gYXZhaWxhYmxlQWRkb25MaXN0XCJcclxuXHRcdFx0XHRcdFx0OmtleT1cImluZGV4XCJcclxuXHRcdFx0XHRcdFx0OmFkZG9uLWRhdGE9XCJhZGRvbkRhdGFcIlxyXG5cdFx0XHRcdFx0PjwvQWRkb25JdGVtPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cclxuXHRcdDxjeC12dWktcG9wdXBcclxuXHRcdFx0Y2xhc3M9XCJqZmItYWRkb25zLXBhZ2VfX2xpY2Vuc2UtcG9wdXBcIlxyXG5cdFx0XHR2LW1vZGVsPVwibGljZW5zZVBvcHVwVmlzaWJsZVwiXHJcblx0XHRcdDpmb290ZXI9XCJmYWxzZVwiXHJcblx0XHRcdGJvZHktd2lkdGg9XCI1NDBweFwiXHJcblx0XHQ+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjeC12dWktcG9wdXBfX2hlYWRlci10aXRsZVwiIHNsb3Q9XCJ0aXRsZVwiPlxyXG5cdFx0XHRcdDxzcGFuIHYtaWY9XCIhaXNMaWNlbnNlQWN0aXZhdGVkXCI+QWN0aXZhdGUgTGljZW5zZTwvc3Bhbj5cclxuXHRcdFx0XHQ8c3BhbiB2LWlmPVwiaXNMaWNlbnNlQWN0aXZhdGVkXCI+RGVhY3RpdmF0ZSBMaWNlbnNlPC9zcGFuPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImpmYi1hZGRvbnMtcGFnZV9fbGljZW5zZS1mb3JtXCIgc2xvdD1cImNvbnRlbnRcIj5cclxuXHRcdFx0XHQ8c3BhbiB2LWlmPVwiIWlzTGljZW5zZUFjdGl2YXRlZFwiPkFjdGl2YXRlIGxpY2Vuc2UgZm9yIGF1dG9tYXRpYyB1cGRhdGVzIGFuZCBhd2Vzb21lIHN1cHBvcnQ8L3NwYW4+XHJcblx0XHRcdFx0PHNwYW4gdi1pZj1cImlzTGljZW5zZUFjdGl2YXRlZFwiPkJ5IGRlYWN0aXZhdGluZyB0aGUgbGljZW5zZSB5b3Ugd2lsbCBub3QgYmUgYWJsZSB0byB1cGRhdGUgdGhlIGFkZG9uczwvc3Bhbj5cclxuXHRcdFx0XHQ8Y3gtdnVpLWlucHV0XHJcblx0XHRcdFx0XHRjbGFzcz1cImpmYi1hZGRvbnMtcGFnZV9fbGljZW5zZS1pbnB1dFwiXHJcblx0XHRcdFx0XHRzaXplPVwiZnVsbHdpZHRoXCJcclxuXHRcdFx0XHRcdHR5cGU9XCJwYXNzd29yZFwiXHJcblx0XHRcdFx0XHQ6YXV0b2ZvY3VzPVwidHJ1ZVwiXHJcblx0XHRcdFx0XHQ6cHJldmVudC13cmFwPVwidHJ1ZVwiXHJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkp1c3QgcGFzdGUgaXQgaGVyZVwiXHJcblx0XHRcdFx0XHR2LW1vZGVsPVwibGljZW5zZUtleVwiXHJcblx0XHRcdFx0PjwvY3gtdnVpLWlucHV0PlxyXG5cdFx0XHRcdDxjeC12dWktYnV0dG9uXHJcblx0XHRcdFx0XHRjbGFzcz1cImpmYi1hZGRvbnMtcGFnZV9fbGljZW5zZS1hY3Rpb25cIlxyXG5cdFx0XHRcdFx0YnV0dG9uLXN0eWxlPVwiYWNjZW50XCJcclxuXHRcdFx0XHRcdHNpemU9XCJtaW5pXCJcclxuXHRcdFx0XHRcdDpsb2FkaW5nPVwibGljZW5zZVByb2NjZXNpbmdTdGF0ZVwiXHJcblx0XHRcdFx0XHRAY2xpY2s9XCJsaWNlbnNlQWN0aW9uXCJcclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8c3BhbiBzbG90PVwibGFiZWxcIj5cclxuXHRcdFx0XHRcdFx0PHNwYW4gdi1pZj1cIiFpc0xpY2Vuc2VBY3RpdmF0ZWRcIj5BY3RpdmF0ZTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PHNwYW4gdi1pZj1cImlzTGljZW5zZUFjdGl2YXRlZFwiPkRlYWN0aXZhdGU8L3NwYW4+XHJcblx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0PC9jeC12dWktYnV0dG9uPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvY3gtdnVpLXBvcHVwPlxyXG5cdDwvZGl2PlxyXG5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblxyXG5pbXBvcnQgQWRkb25JdGVtIGZyb20gJy4vY29tcG9uZW50cy9BZGRvbkl0ZW0udnVlJztcclxuXHJcbmNvbnN0IHsgYXBwbHlGaWx0ZXJzLCBkb0FjdGlvbiB9ID0gd3AuaG9va3M7XHJcblxyXG53aW5kb3cuamZiRXZlbnRCdXMgPSBuZXcgVnVlKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0bmFtZTogJ2pmYi1hZGRvbnMnLFxyXG5cdGNvbXBvbmVudHM6IHtcclxuXHRcdEFkZG9uSXRlbSxcclxuXHR9LFxyXG5cdGRhdGEoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRhbGxBZGRvbnM6IHdpbmRvdy5KZXRGQlBhZ2VDb25maWcuYWxsQWRkb25zIHx8IHt9LFxyXG5cdFx0XHRsaWNlbnNlTGlzdDogd2luZG93LkpldEZCUGFnZUNvbmZpZy5saWNlbnNlTGlzdCB8fCBbXSxcclxuXHRcdFx0bGljZW5zZUtleTogd2luZG93LkpldEZCUGFnZUNvbmZpZy5saWNlbnNlS2V5IHx8ICcnLFxyXG5cdFx0XHR0aGVtZUluZm86IHdpbmRvdy5KZXRGQlBhZ2VDb25maWcudGhlbWVJbmZvIHx8IGZhbHNlLFxyXG5cdFx0XHRtaXNjSW5mbzogd2luZG93LkpldEZCUGFnZUNvbmZpZy5taXNjSW5mbyB8fCBmYWxzZSxcclxuXHJcblx0XHRcdGxpY2Vuc2VBY3RpdmF0ZWQ6IGZhbHNlLFxyXG5cdFx0XHRsaWNlbnNlUG9wdXBWaXNpYmxlOiBmYWxzZSxcclxuXHRcdFx0bGljZW5zZVByb2NjZXNpbmdTdGF0ZTogZmFsc2UsXHJcblx0XHRcdGxpY2Vuc2VBamF4QWN0aW9uOiBudWxsLFxyXG5cclxuXHRcdFx0Y2hlY2tVcGRhdGVzQWN0aW9uOiBudWxsLFxyXG5cdFx0XHRjaGVja1VwZGF0ZXNQcm9jZXNzZWQ6IGZhbHNlLFxyXG5cclxuXHRcdFx0cHJvY2Nlc2luZ1N0YXRlOiBmYWxzZSxcclxuXHRcdH07XHJcblx0fSxcclxuXHRtb3VudGVkOiBmdW5jdGlvbigpIHtcclxuXHRcdHdpbmRvdy5qZmJFdmVudEJ1cy4kb24oICd1cGRhdGVBZGRvbkRhdGEnLCB0aGlzLnVwZGF0ZUFkZG9uRGF0YSApO1xyXG5cdFx0d2luZG93LmpmYkV2ZW50QnVzLiRvbiggJ3Nob3dMaWNlbnNlUG9wdXAnLCB0aGlzLnNob3dMaWNlbnNlUG9wdXAgKTtcclxuXHR9LFxyXG5cdGNvbXB1dGVkOiB7XHJcblx0XHRpc0xpY2Vuc2VBY3RpdmF0ZWQoKSB7XHJcblx0XHRcdHJldHVybiAwICE9PSB0aGlzLmxpY2Vuc2VMaXN0Lmxlbmd0aDtcclxuXHRcdH0sXHJcblxyXG5cdFx0bGljZW5zZUFjdGlvblR5cGUoKSB7XHJcblx0XHRcdHJldHVybiAhIHRoaXMuaXNMaWNlbnNlQWN0aXZhdGVkID8gJ2FjdGl2YXRlX2xpY2Vuc2UnIDogJ2RlYWN0aXZhdGVfbGljZW5zZSc7XHJcblx0XHR9LFxyXG5cclxuXHRcdGluc3RhbGxlZEFkZG9uTGlzdCgpIHtcclxuXHRcdFx0bGV0IGluc3RhbGxlZEFkZG9uc0xpc3QgPSB7fTtcclxuXHJcblx0XHRcdGZvciAoIGxldCBhZGRvblNsdWcgaW4gdGhpcy5hbGxBZGRvbnMgKSB7XHJcblxyXG5cdFx0XHRcdGlmICggdGhpcy5hbGxBZGRvbnNbIGFkZG9uU2x1ZyBdWyAnaXNJbnN0YWxsZWQnIF0gKSB7XHJcblx0XHRcdFx0XHRpbnN0YWxsZWRBZGRvbnNMaXN0WyBhZGRvblNsdWcgXSA9IHRoaXMuYWxsQWRkb25zWyBhZGRvblNsdWcgXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiBpbnN0YWxsZWRBZGRvbnNMaXN0O1xyXG5cdFx0fSxcclxuXHJcblx0XHRhdmFpbGFibGVBZGRvbkxpc3QoKSB7XHJcblx0XHRcdGxldCBhdmFpbGFibGVBZGRvbkxpc3QgPSB7fTtcclxuXHJcblx0XHRcdGZvciAoIGxldCBhZGRvblNsdWcgaW4gdGhpcy5hbGxBZGRvbnMgKSB7XHJcblxyXG5cdFx0XHRcdGlmICggISB0aGlzLmFsbEFkZG9uc1sgYWRkb25TbHVnIF1bICdpc0luc3RhbGxlZCcgXSApIHtcclxuXHRcdFx0XHRcdGF2YWlsYWJsZUFkZG9uTGlzdFsgYWRkb25TbHVnIF0gPSB0aGlzLmFsbEFkZG9uc1sgYWRkb25TbHVnIF07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gYXZhaWxhYmxlQWRkb25MaXN0O1xyXG5cdFx0fSxcclxuXHJcblx0XHRnb1Byb0xpbmsoKSB7XHJcblx0XHRcdGxldCBwcmljaW5nUGFnZVVybCA9IHRoaXMubWlzY0luZm8ucHJpY2luZ1BhZ2VVcmwsXHJcblx0XHRcdFx0dXRtUGFyYW1zID0gdGhpcy5nZXRVdG1QYXJhbXNTdHJpbmcoIHtcclxuXHRcdFx0XHRcdHV0bV9zb3VyY2U6IGBkYXNoYm9hcmQvamV0LWZvcm0tYnVpbGRlci1hZGRvbnMtcGFnZWAsXHJcblx0XHRcdFx0XHR1dG1fbWVkaXVtOiBgY3JvY29ibG9jay1saWNlbnNlLyR7IHRoaXMudGhlbWVJbmZvLnRoZW1lIH1gLFxyXG5cdFx0XHRcdFx0dXRtX2NhbXBhaWduOiAnZ28tcHJvLWJ1dHRvbicsXHJcblx0XHRcdFx0fSApO1xyXG5cclxuXHRcdFx0cmV0dXJuIGAkeyBwcmljaW5nUGFnZVVybCB9PyR7IHV0bVBhcmFtcyB9YDtcclxuXHRcdH1cclxuXHR9LFxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdHNob3dMaWNlbnNlUG9wdXAoKSB7XHJcblx0XHRcdHRoaXMubGljZW5zZVBvcHVwVmlzaWJsZSA9IHRydWU7XHJcblx0XHR9LFxyXG5cclxuXHRcdHVwZGF0ZUFkZG9uRGF0YSggZGF0YSApIHtcclxuXHRcdFx0bGV0IHNsdWcgPSBkYXRhLnNsdWcsXHJcblx0XHRcdFx0YWRkb25EYXRhID0gZGF0YS5hZGRvbkRhdGEsXHJcblx0XHRcdFx0cGx1Z2luQWN0aW9uID0gZGF0YS5hY3Rpb24sXHJcblx0XHRcdFx0cmVsb2FkQWN0aW9uTWFwID0gWyAnYWN0aXZhdGUnLCAnZGVhY3RpdmF0ZScsICd1cGRhdGUnIF07XHJcblxyXG5cdFx0XHR0aGlzLmFsbEFkZG9uc1sgc2x1ZyBdID0gT2JqZWN0LmFzc2lnbigge30sIHRoaXMuYWxsQWRkb25zWyBzbHVnIF0sIGFkZG9uRGF0YSApO1xyXG5cclxuXHRcdFx0aWYgKCByZWxvYWRBY3Rpb25NYXAuaW5jbHVkZXMoIHBsdWdpbkFjdGlvbiApICkge1xyXG5cdFx0XHRcdHRoaXMucHJvY2Nlc2luZ1N0YXRlID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0c2V0VGltZW91dCggZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcblx0XHRcdFx0fSwgMTAwMCApO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdGxpY2Vuc2VBY3Rpb24oKSB7XHJcblx0XHRcdHZhciBzZWxmID0gdGhpcztcclxuXHJcblx0XHRcdGlmICggJycgPT09IHRoaXMubGljZW5zZUtleSApIHtcclxuXHRcdFx0XHRzZWxmLiRDWE5vdGljZS5hZGQoIHtcclxuXHRcdFx0XHRcdG1lc3NhZ2U6ICdMaWNlbnNlIGtleSBpcyBtaXNzaW5nJyxcclxuXHRcdFx0XHRcdHR5cGU6ICdlcnJvcicsXHJcblx0XHRcdFx0XHRkdXJhdGlvbjogNDAwMCxcclxuXHRcdFx0XHR9ICk7XHJcblxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5saWNlbnNlUHJvY2Nlc2luZ1N0YXRlID0gdHJ1ZTtcclxuXHJcblx0XHRcdHNlbGYubGljZW5zZUFqYXhBY3Rpb24gPSBqUXVlcnkuYWpheCgge1xyXG5cdFx0XHRcdHR5cGU6ICdQT1NUJyxcclxuXHRcdFx0XHR1cmw6IHdpbmRvdy5KZXRGQlBhZ2VDb25maWcuYWpheFVybCxcclxuXHRcdFx0XHRkYXRhVHlwZTogJ2pzb24nLFxyXG5cdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdGFjdGlvbjogJ2pmYl9saWNlbnNlX2FjdGlvbicsXHJcblx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdGxpY2Vuc2U6IHNlbGYubGljZW5zZUtleSxcclxuXHRcdFx0XHRcdFx0YWN0aW9uOiBzZWxmLmxpY2Vuc2VBY3Rpb25UeXBlXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRiZWZvcmVTZW5kOiAoIGpxWEhSLCBhamF4U2V0dGluZ3MgKSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBudWxsICE9PSBzZWxmLmxpY2Vuc2VBamF4QWN0aW9uICkge1xyXG5cdFx0XHRcdFx0XHRzZWxmLmxpY2Vuc2VBamF4QWN0aW9uLmFib3J0KCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzdWNjZXNzOiAoIHJlc3BvbmNlLCB0ZXh0U3RhdHVzLCBqcVhIUiApID0+IHtcclxuXHRcdFx0XHRcdHNlbGYubGljZW5zZVByb2NjZXNpbmdTdGF0ZSA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHRcdGlmICggcmVzcG9uY2Uuc3VjY2VzcyApIHtcclxuXHRcdFx0XHRcdFx0c2VsZi4kQ1hOb3RpY2UuYWRkKCB7XHJcblx0XHRcdFx0XHRcdFx0bWVzc2FnZTogcmVzcG9uY2UubWVzc2FnZSxcclxuXHRcdFx0XHRcdFx0XHR0eXBlOiAnc3VjY2VzcycsXHJcblx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDQwMDAsXHJcblx0XHRcdFx0XHRcdH0gKTtcclxuXHJcblx0XHRcdFx0XHRcdGxldCBsaWNlbnNlRGF0YSA9IHJlc3BvbmNlLmRhdGE7XHJcblxyXG5cdFx0XHRcdFx0XHRsaWNlbnNlRGF0YVsnbGljZW5zZV9rZXknXSA9IHNlbGYubGljZW5zZUtleTtcclxuXHJcblx0XHRcdFx0XHRcdHN3aXRjaCAoIHNlbGYubGljZW5zZUFjdGlvblR5cGUgKSB7XHJcblx0XHRcdFx0XHRcdFx0Y2FzZSAnYWN0aXZhdGVfbGljZW5zZSc6XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0c2VsZi5saWNlbnNlTGlzdC5wdXNoKCBsaWNlbnNlRGF0YSApO1xyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0Y2FzZSAnZGVhY3RpdmF0ZV9saWNlbnNlJzpcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRzZWxmLmxpY2Vuc2VMaXN0ID0gc2VsZi5saWNlbnNlTGlzdC5maWx0ZXIoICggbGljZW5zZURhdGEgKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBzZWxmLmxpY2Vuc2VLZXkgIT09IGxpY2Vuc2VEYXRhWydsaWNlbnNlX2tleSddO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSApO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdHNlbGYubGljZW5zZUtleSA9ICcnO1xyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdHNlbGYubGljZW5zZVBvcHVwVmlzaWJsZSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0c2VsZi4kQ1hOb3RpY2UuYWRkKCB7XHJcblx0XHRcdFx0XHRcdFx0bWVzc2FnZTogcmVzcG9uY2UubWVzc2FnZSxcclxuXHRcdFx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxyXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiA0MDAwLFxyXG5cdFx0XHRcdFx0XHR9ICk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9ICk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGNoZWNrUGx1Z2luc1VwZGF0ZTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBzZWxmID0gdGhpcztcclxuXHJcblx0XHRcdHNlbGYuY2hlY2tVcGRhdGVzQWN0aW9uID0galF1ZXJ5LmFqYXgoIHtcclxuXHRcdFx0XHR0eXBlOiAnUE9TVCcsXHJcblx0XHRcdFx0dXJsOiB3aW5kb3cuSmV0RkJQYWdlQ29uZmlnLmFqYXhVcmwsXHJcblx0XHRcdFx0ZGF0YVR5cGU6ICdqc29uJyxcclxuXHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRhY3Rpb246ICdqZmJfbGljZW5zZV9zZXJ2aWNlX2FjdGlvbicsXHJcblx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdGFjdGlvbjogJ2NoZWNrLXBsdWdpbi11cGRhdGUnXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRiZWZvcmVTZW5kOiAoIGpxWEhSLCBhamF4U2V0dGluZ3MgKSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBudWxsICE9PSBzZWxmLmNoZWNrVXBkYXRlc0FjdGlvbiApIHtcclxuXHRcdFx0XHRcdFx0c2VsZi5jaGVja1VwZGF0ZXNBY3Rpb24uYWJvcnQoKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRzZWxmLmNoZWNrVXBkYXRlc1Byb2Nlc3NlZCA9IHRydWU7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbiggcmVzcG9uY2UsIHRleHRTdGF0dXMsIGpxWEhSICkge1xyXG5cdFx0XHRcdFx0c2VsZi5jaGVja1VwZGF0ZXNQcm9jZXNzZWQgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0XHRpZiAoIHJlc3BvbmNlLnN1Y2Nlc3MgKSB7XHJcblx0XHRcdFx0XHRcdHNlbGYuJENYTm90aWNlLmFkZCgge1xyXG5cdFx0XHRcdFx0XHRcdG1lc3NhZ2U6IHJlc3BvbmNlLm1lc3NhZ2UsXHJcblx0XHRcdFx0XHRcdFx0dHlwZTogJ3N1Y2Nlc3MnLFxyXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiA0MDAwLFxyXG5cdFx0XHRcdFx0XHR9ICk7XHJcblxyXG5cdFx0XHRcdFx0XHRzZWxmLnByb2NjZXNpbmdTdGF0ZSA9IHRydWU7XHJcblxyXG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcblx0XHRcdFx0XHRcdH0sIDEwMDAgKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHNlbGYuJENYTm90aWNlLmFkZCgge1xyXG5cdFx0XHRcdFx0XHRcdG1lc3NhZ2U6IHJlc3BvbmNlLm1lc3NhZ2UsXHJcblx0XHRcdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcclxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogNDAwMCxcclxuXHRcdFx0XHRcdFx0fSApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSApO1xyXG5cdFx0fSxcclxuXHJcblx0XHRhZGRMaWNlbnNlKCBsaWNlbnNlRGF0YSApIHtcclxuXHRcdFx0dGhpcy5saWNlbnNlTGlzdC5wdXNoKCBsaWNlbnNlRGF0YSApO1xyXG5cclxuXHRcdFx0c2VsZi5wcm9jY2VzaW5nU3RhdGUgPSB0cnVlO1xyXG5cclxuXHRcdFx0c2V0VGltZW91dCggZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG5cdFx0XHR9LCAzMDAwICk7XHJcblx0XHR9LFxyXG5cclxuXHRcdHJlbW92ZUxpY2Vuc2UoIGxpY2VuY2VLZXkgKSB7XHJcblxyXG5cdFx0XHRsZXQgcmVtb3ZpbmdJbmRleCA9IGZhbHNlO1xyXG5cclxuXHRcdFx0Zm9yICggbGV0IGxpY2VuY2VJbmRleCBpbiB0aGlzLmxpY2Vuc2VMaXN0ICkge1xyXG5cdFx0XHRcdGxldCBsaWNlbnNlRGF0YSA9ICB0aGlzLmxpY2Vuc2VMaXN0WyBsaWNlbmNlSW5kZXggXTtcclxuXHJcblx0XHRcdFx0aWYgKCBsaWNlbnNlRGF0YVsnbGljZW5zZUtleSddID09PSBsaWNlbmNlS2V5ICkge1xyXG5cdFx0XHRcdFx0cmVtb3ZpbmdJbmRleCA9IGxpY2VuY2VJbmRleDtcclxuXHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggcmVtb3ZpbmdJbmRleCApIHtcclxuXHRcdFx0XHR0aGlzLmxpY2Vuc2VMaXN0LnNwbGljZSggcmVtb3ZpbmdJbmRleCwgMSApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLmxpY2Vuc2VQb3B1cFZpc2libGUgPSBmYWxzZTtcclxuXHJcblx0XHRcdHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuXHRcdFx0fSwgNTAwICk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGdldFV0bVBhcmFtc1N0cmluZyggZGF0YSA9IHt9ICkge1xyXG5cdFx0XHRsZXQgdXRtU3RyaW5nID0gZmFsc2U7XHJcblxyXG5cdFx0XHRpZiAoIDAgPT09IE9iamVjdC5rZXlzKCBkYXRhICkubGVuZ3RoICkge1xyXG5cdFx0XHRcdHJldHVybiB1dG1TdHJpbmc7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHV0bVN0cmluZyA9IE9iamVjdC5rZXlzKCBkYXRhICkubWFwKCAoIGtleSApID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gWyBrZXksIGRhdGFbIGtleSBdIF0ubWFwKCBlbmNvZGVVUklDb21wb25lbnQgKS5qb2luKCAnPScgKTtcclxuXHRcdFx0fSApLmpvaW4oICcmJyApO1xyXG5cclxuXHRcdFx0cmV0dXJuIHV0bVN0cmluZztcclxuXHRcdH1cclxuXHR9LFxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XHJcblxyXG4ucHJvY2Nlc2luZy1zdGF0ZSB7XHJcblx0b3BhY2l0eTogMC41O1xyXG5cdHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4uamZiLWFkZG9ucy1wYWdlIHtcclxuXHJcblx0Jl9faW5uZXIge1xyXG5cdFx0cGFkZGluZzogMzBweDtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHR9XHJcblxyXG5cdCZfX2hlYWRlciB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cdH1cclxuXHJcblx0Jl9faGVhZGVyLWNvbnRyb2xzIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEQ0RDREQ7XHJcblxyXG5cdFx0PiAuY3gtdnVpLWJ1dHRvbiB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LmN4LXZ1aS1idXR0b24ge1xyXG5cdFx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cclxuXHRcdC5idXR0b24taWNvbiB7XHJcblx0XHRcdG1hcmdpbi1yaWdodDogNXB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdCYtLXN0eWxlLWFjY2VudCB7XHJcblx0XHRcdGNvbG9yOiAjMDA3Y2JhO1xyXG5cdFx0XHRib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggIzAwN2NiYTtcclxuXHJcblx0XHRcdCY6aG92ZXIge1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDdjYmExMjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LmJ1dHRvbi1pY29uIHtcclxuXHRcdFx0XHRwYXRoIHtcclxuXHRcdFx0XHRcdGZpbGw6ICMwMDdjYmE7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ji0tc3R5bGUtZGFuZ2VyIHtcclxuXHRcdFx0Y29sb3I6ICNkNjMzNmM7XHJcblx0XHRcdGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjZDYzMzZjO1xyXG5cclxuXHRcdFx0Jjpob3ZlciB7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2Q2MzM2YzEyO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQuYnV0dG9uLWljb24ge1xyXG5cdFx0XHRcdHBhdGgge1xyXG5cdFx0XHRcdFx0ZmlsbDogI2Q2MzM2YztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQmX19jb250ZW50IHtcclxuXHRcdFx0PiBzcGFuIHtcclxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5jeC12dWktcG9wdXAge1xyXG5cdFx0Jl9faGVhZGVyIHtcclxuXHRcdFx0cGFkZGluZy1ib3R0b206IDE1cHg7XHJcblx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRENEQ0REO1xyXG5cdFx0XHRtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdCZfX2hlYWRlci10aXRsZSB7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRcdGZvbnQtc2l6ZTogMjRweDtcclxuXHRcdFx0bGluZS1oZWlnaHQ6IDM2cHg7XHJcblx0XHRcdGNvbG9yOiAjMjMyODJEO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Jl9fbGljZW5zZS1wb3B1cCB7XHJcblxyXG5cdH1cclxuXHJcblx0Jl9fbGljZW5zZS1mb3JtIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cdFx0YWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcblxyXG5cdFx0PiBzcGFuIHtcclxuXHRcdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdCZfX2xpY2Vuc2UtaW5wdXQge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHR9XHJcblxyXG5cdC5nby1wcm8tYmFubmVyIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0cGFkZGluZzogMjRweCAwO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEQ0RDREQ7XHJcblxyXG5cdFx0Jl9fc3VidGl0bGUge1xyXG5cdFx0XHRmb250LXNpemU6IDE4cHg7XHJcblx0XHRcdGxpbmUtaGVpZ2h0OiAxLjI1O1xyXG5cdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRjb2xvcjogIzAwN0NCQTtcclxuXHRcdFx0bWFyZ2luLWJvdHRvbTogNXB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdCZfX3RpdGxlIHtcclxuXHRcdFx0Zm9udC1zaXplOiAyNHB4O1xyXG5cdFx0XHRsaW5lLWhlaWdodDogMS4yNTtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0Y29sb3I6ICMyMzI4MkQ7XHJcblx0XHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0Jl9fYnV0dG9uIHtcclxuXHRcdFx0Y29sb3I6IHdoaXRlO1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3Q0JBO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcblx0PGRpdlxyXG5cdFx0Y2xhc3M9XCJqZmItYWRkb25zX19pdGVtXCJcclxuXHRcdDpjbGFzcz1cIntcclxuXHRcdFx0J2FjdGl2YXRlZCc6IGFkZG9uRGF0YS5pc0FjdGl2YXRlZCxcclxuXHRcdFx0J3VwZGF0ZS1hdmFsaWFibGUnOiB1cGRhdGVBY3Rpb25BdmFsaWFibGUsXHJcblx0XHR9XCJcclxuXHQ+XHJcblx0XHQ8ZGl2XHJcblx0XHRcdGNsYXNzPVwiamZiLWFkZG9uc19faXRlbS1pbm5lclwiXHJcblx0XHRcdDpjbGFzcz1cInsgJ3Byb2NjZXNpbmctc3RhdGUnOiBwcm9jY2VzaW5nU3RhdGUgfVwiXHJcblx0XHQ+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJqZmItYWRkb25zX19pdGVtLXRodW1iXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cInByby1iYWRnZVwiIHYtaWY9XCIhYWRkb25EYXRhLmlzSW5zdGFsbGVkXCI+XHJcblx0XHRcdFx0XHQ8c3ZnIHdpZHRoPVwiNDBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgNDAgMjBcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuXHRcdFx0XHRcdFx0PHJlY3Qgd2lkdGg9XCI0MFwiIGhlaWdodD1cIjIwXCIgcng9XCI0XCIgZmlsbD1cIiNFRTdCMTZcIi8+XHJcblx0XHRcdFx0XHRcdDxwYXRoIGQ9XCJNMTAuNjI1IDEwLjgzMDFWMTRIOS4xNDI1OFY1LjQ2ODc1SDEyLjQwNjJDMTMuMzU5NCA1LjQ2ODc1IDE0LjExNTIgNS43MTY4IDE0LjY3MzggNi4yMTI4OUMxNS4yMzYzIDYuNzA4OTggMTUuNTE3NiA3LjM2NTIzIDE1LjUxNzYgOC4xODE2NEMxNS41MTc2IDkuMDE3NTggMTUuMjQyMiA5LjY2Nzk3IDE0LjY5MTQgMTAuMTMyOEMxNC4xNDQ1IDEwLjU5NzcgMTMuMzc3IDEwLjgzMDEgMTIuMzg4NyAxMC44MzAxSDEwLjYyNVpNMTAuNjI1IDkuNjQwNjJIMTIuNDA2MkMxMi45MzM2IDkuNjQwNjIgMTMuMzM1OSA5LjUxNzU4IDEzLjYxMzMgOS4yNzE0OEMxMy44OTA2IDkuMDIxNDggMTQuMDI5MyA4LjY2MjExIDE0LjAyOTMgOC4xOTMzNkMxNC4wMjkzIDcuNzMyNDIgMTMuODg4NyA3LjM2NTIzIDEzLjYwNzQgNy4wOTE4QzEzLjMyNjIgNi44MTQ0NSAxMi45Mzk1IDYuNjcxODggMTIuNDQ3MyA2LjY2NDA2SDEwLjYyNVY5LjY0MDYyWk0xOS45NTMxIDEwLjcxMjlIMTguMzAwOFYxNEgxNi44MTg0VjUuNDY4NzVIMTkuODE4NEMyMC44MDI3IDUuNDY4NzUgMjEuNTYyNSA1LjY4OTQ1IDIyLjA5NzcgNi4xMzA4NkMyMi42MzI4IDYuNTcyMjcgMjIuOTAwNCA3LjIxMDk0IDIyLjkwMDQgOC4wNDY4OEMyMi45MDA0IDguNjE3MTkgMjIuNzYxNyA5LjA5NTcgMjIuNDg0NCA5LjQ4MjQyQzIyLjIxMDkgOS44NjUyMyAyMS44MjgxIDEwLjE2MDIgMjEuMzM1OSAxMC4zNjcyTDIzLjI1MiAxMy45MjM4VjE0SDIxLjY2NDFMMTkuOTUzMSAxMC43MTI5Wk0xOC4zMDA4IDkuNTIzNDRIMTkuODI0MkMyMC4zMjQyIDkuNTIzNDQgMjAuNzE0OCA5LjM5ODQ0IDIwLjk5NjEgOS4xNDg0NEMyMS4yNzczIDguODk0NTMgMjEuNDE4IDguNTQ4ODMgMjEuNDE4IDguMTExMzNDMjEuNDE4IDcuNjU0MyAyMS4yODcxIDcuMzAwNzggMjEuMDI1NCA3LjA1MDc4QzIwLjc2NzYgNi44MDA3OCAyMC4zODA5IDYuNjcxODggMTkuODY1MiA2LjY2NDA2SDE4LjMwMDhWOS41MjM0NFpNMzEuMTE1MiA5Ljk1NzAzQzMxLjExNTIgMTAuNzkzIDMwLjk3MDcgMTEuNTI3MyAzMC42ODE2IDEyLjE2MDJDMzAuMzkyNiAxMi43ODkxIDI5Ljk3ODUgMTMuMjczNCAyOS40Mzk1IDEzLjYxMzNDMjguOTA0MyAxMy45NDkyIDI4LjI4NzEgMTQuMTE3MiAyNy41ODc5IDE0LjExNzJDMjYuODk2NSAxNC4xMTcyIDI2LjI3OTMgMTMuOTQ5MiAyNS43MzYzIDEzLjYxMzNDMjUuMTk3MyAxMy4yNzM0IDI0Ljc3OTMgMTIuNzkxIDI0LjQ4MjQgMTIuMTY2QzI0LjE4OTUgMTEuNTQxIDI0LjA0MSAxMC44MjAzIDI0LjAzNzEgMTAuMDAzOVY5LjUyMzQ0QzI0LjAzNzEgOC42OTE0MSAyNC4xODM2IDcuOTU3MDMgMjQuNDc2NiA3LjMyMDMxQzI0Ljc3MzQgNi42ODM1OSAyNS4xODk1IDYuMTk3MjcgMjUuNzI0NiA1Ljg2MTMzQzI2LjI2MzcgNS41MjE0OCAyNi44ODA5IDUuMzUxNTYgMjcuNTc2MiA1LjM1MTU2QzI4LjI3MTUgNS4zNTE1NiAyOC44ODY3IDUuNTE5NTMgMjkuNDIxOSA1Ljg1NTQ3QzI5Ljk2MDkgNi4xODc1IDMwLjM3NyA2LjY2Nzk3IDMwLjY2OTkgNy4yOTY4OEMzMC45NjI5IDcuOTIxODggMzEuMTExMyA4LjY1MDM5IDMxLjExNTIgOS40ODI0MlY5Ljk1NzAzWk0yOS42MzI4IDkuNTExNzJDMjkuNjMyOCA4LjU2NjQxIDI5LjQ1MzEgNy44NDE4IDI5LjA5MzggNy4zMzc4OUMyOC43MzgzIDYuODMzOTggMjguMjMyNCA2LjU4MjAzIDI3LjU3NjIgNi41ODIwM0MyNi45MzU1IDYuNTgyMDMgMjYuNDMzNiA2LjgzMzk4IDI2LjA3MDMgNy4zMzc4OUMyNS43MTA5IDcuODM3ODkgMjUuNTI3MyA4LjU0Njg4IDI1LjUxOTUgOS40NjQ4NFY5Ljk1NzAzQzI1LjUxOTUgMTAuODk0NSAyNS43MDEyIDExLjYxOTEgMjYuMDY0NSAxMi4xMzA5QzI2LjQzMTYgMTIuNjQyNiAyNi45Mzk1IDEyLjg5ODQgMjcuNTg3OSAxMi44OTg0QzI4LjI0NDEgMTIuODk4NCAyOC43NDggMTIuNjQ4NCAyOS4wOTk2IDEyLjE0ODRDMjkuNDU1MSAxMS42NDg0IDI5LjYzMjggMTAuOTE4IDI5LjYzMjggOS45NTcwM1Y5LjUxMTcyWlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuXHRcdFx0XHRcdDwvc3ZnPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxpbWcgOnNyYz1cImFkZG9uRGF0YS50aHVtYlwiIGFsdD1cIlwiPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImpmYi1hZGRvbnNfX2l0ZW0taW5mb1wiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJqZmItYWRkb25zX19pdGVtLW5hbWVcIj5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwibGFiZWxcIj57eyBhZGRvbkRhdGEubmFtZSB9fTwvc3Bhbj5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwidmVyc2lvblwiPnt7IGFkZG9uRGF0YS5jdXJyZW50VmVyc2lvbiB9fTwvc3Bhbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRjbGFzcz1cImpmYi1hZGRvbnNfX2l0ZW0tdXBkYXRlXCJcclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8ZGl2IHYtaWY9XCIhdXBkYXRlQWN0aW9uQXZhbGlhYmxlXCI+WW91ciBwbHVnaW4gaXMgdXAgdG8gZGF0ZTwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiB2LWlmPVwidXBkYXRlQWN0aW9uQXZhbGlhYmxlXCI+XHJcblx0XHRcdFx0XHRcdFZlcnNpb24gPHNwYW4gY2xhc3M9XCJsYXRlc3QtdmVyc2lvblwiPnt7IGFkZG9uRGF0YS52ZXJzaW9uIH19PC9zcGFuPiBhdmFpbGFibGVcclxuXHRcdFx0XHRcdFx0PGN4LXZ1aS1idXR0b25cclxuXHRcdFx0XHRcdFx0XHRidXR0b24tc3R5bGU9XCJsaW5rLWFjY2VudFwiXHJcblx0XHRcdFx0XHRcdFx0c2l6ZT1cImxpbmtcIlxyXG5cdFx0XHRcdFx0XHRcdDpsb2FkaW5nPVwidXBkYXRlUGx1Z2luUHJvY2Vzc2VkXCJcclxuXHRcdFx0XHRcdFx0XHRAY2xpY2s9XCJ1cGRhdGVQbHVnaW5cIlxyXG5cdFx0XHRcdFx0XHRcdHYtaWY9XCIhYWN0aXZhdGVMaWNlbmNlQWN0aW9uQXZhbGlhYmxlXCJcclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuIHNsb3Q9XCJsYWJlbFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4+VXBkYXRlIE5vdzwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvY3gtdnVpLWJ1dHRvbj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdGNsYXNzPVwiamZiLWFkZG9uc19faXRlbS1saWNlbnNlXCJcclxuXHRcdFx0XHRcdHYtaWY9XCJhY3RpdmF0ZUxpY2VuY2VBY3Rpb25BdmFsaWFibGVcIlxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxzcGFuPkxpY2Vuc2Ugbm90IGFjdGl2YXRlZDwvc3Bhbj5cclxuXHRcdFx0XHRcdDxjeC12dWktYnV0dG9uXHJcblx0XHRcdFx0XHRcdGJ1dHRvbi1zdHlsZT1cImxpbmstYWNjZW50XCJcclxuXHRcdFx0XHRcdFx0c2l6ZT1cImxpbmtcIlxyXG5cdFx0XHRcdFx0XHRAY2xpY2s9XCJhY3RpdmF0ZUxpY2Vuc2VcIlxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBzbG90PVwibGFiZWxcIj5cclxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj5BY3RpdmF0ZSBOb3c8L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvY3gtdnVpLWJ1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRjbGFzcz1cImpmYi1hZGRvbnNfX2l0ZW0tZGVzY1wiXHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PHNwYW4gdi1odG1sPVwiYWRkb25EYXRhLmRlc2NcIj48L3NwYW4+XHJcblx0XHRcdFx0XHQ8YSA6aHJlZj1cImxlYXJuTW9yZVVybFwiIHRhcmdldD1cIl9ibGFua1wiPkxlYXJuIE1vcmU8L2E+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImpmYi1hZGRvbnNfX2l0ZW0tYWN0aW9uc1wiPlxyXG5cclxuXHRcdFx0XHRcdDxjeC12dWktYnV0dG9uXHJcblx0XHRcdFx0XHRcdGJ1dHRvbi1zdHlsZT1cImxpbmstYWNjZW50XCJcclxuXHRcdFx0XHRcdFx0c2l6ZT1cImxpbmtcIlxyXG5cdFx0XHRcdFx0XHQ6bG9hZGluZz1cImFjdGlvblBsdWdpblByb2Nlc3NlZFwiXHJcblx0XHRcdFx0XHRcdHYtaWY9XCJpbnN0YWxsQWN0aW9uQXZhbGlhYmxlXCJcclxuXHRcdFx0XHRcdFx0QGNsaWNrPVwiaW5zdGFsbFBsdWdpblwiXHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxzcGFuIHNsb3Q9XCJsYWJlbFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuPkluc3RhbGwgQWRkb248L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvY3gtdnVpLWJ1dHRvbj5cclxuXHRcdFx0XHRcdDxjeC12dWktYnV0dG9uXHJcblx0XHRcdFx0XHRcdGJ1dHRvbi1zdHlsZT1cImxpbmstYWNjZW50XCJcclxuXHRcdFx0XHRcdFx0c2l6ZT1cImxpbmtcIlxyXG5cdFx0XHRcdFx0XHQ6bG9hZGluZz1cImFjdGlvblBsdWdpblByb2Nlc3NlZFwiXHJcblx0XHRcdFx0XHRcdHYtaWY9XCJhY3RpdmF0ZUFjdGlvbkF2YWxpYWJsZVwiXHJcblx0XHRcdFx0XHRcdEBjbGljaz1cImFjdGl2YXRlUGx1Z2luXCJcclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PHNwYW4gc2xvdD1cImxhYmVsXCI+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4+QWN0aXZhdGUgQWRkb248L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvY3gtdnVpLWJ1dHRvbj5cclxuXHRcdFx0XHRcdDxjeC12dWktYnV0dG9uXHJcblx0XHRcdFx0XHRcdGJ1dHRvbi1zdHlsZT1cImxpbmstZXJyb3JcIlxyXG5cdFx0XHRcdFx0XHRzaXplPVwibGlua1wiXHJcblx0XHRcdFx0XHRcdDpsb2FkaW5nPVwiYWN0aW9uUGx1Z2luUHJvY2Vzc2VkXCJcclxuXHRcdFx0XHRcdFx0di1pZj1cImRlYWN0aXZhdGVBY3Rpb25BdmFsaWFibGVcIlxyXG5cdFx0XHRcdFx0XHRAY2xpY2s9XCJkZWFjdGl2YXRlUGx1Z2luXCJcclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PHNwYW4gc2xvdD1cImxhYmVsXCI+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4+RGVhY3RpdmF0ZSBBZGRvbjwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9jeC12dWktYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cclxuXHQ8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0bmFtZTogJ2FkZG9uLWl0ZW0nLFxyXG5cdHByb3BzOiB7XHJcblx0XHRhZGRvbkRhdGE6IE9iamVjdFxyXG5cdH0sXHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGFjdGlvblBsdWdpbjogZmFsc2UsXHJcblx0XHRcdGFjdGlvblBsdWdpblJlcXVlc3Q6IG51bGwsXHJcblx0XHRcdGFjdGlvblBsdWdpblByb2Nlc3NlZDogZmFsc2UsXHJcblx0XHRcdHVwZGF0ZVBsdWdpblByb2Nlc3NlZDogZmFsc2UsXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0Y29tcHV0ZWQ6IHtcclxuXHRcdGNsYXNzTGlzdDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiBbXHJcblx0XHRcdFx0J2pmYi1hZGRvbnNfX2l0ZW0nLFxyXG5cdFx0XHRcdHRoaXMudXBkYXRlQXZhbGlhYmxlID8gJ3VwZGF0ZS1hdmFsaWFibGUnIDogZmFsc2UsXHJcblx0XHRcdFx0dGhpcy5hY3RpdmF0ZUF2YWxpYWJsZSA/ICdhY3RpdmF0ZS1hdmFsaWFibGUnIDogZmFsc2UsXHJcblx0XHRcdF07XHJcblx0XHR9LFxyXG5cclxuXHRcdGxlYXJuTW9yZUF2YWxpYWJsZSgpIHtcclxuXHRcdFx0cmV0dXJuICggISB0aGlzLiRwYXJlbnQuaXNMaWNlbnNlQWN0aXZhdGVkICkgPyB0cnVlIDogZmFsc2U7XHJcblx0XHR9LFxyXG5cclxuXHRcdGFjdGl2YXRlTGljZW5jZUFjdGlvbkF2YWxpYWJsZSgpIHtcclxuXHRcdFx0cmV0dXJuICggISB0aGlzLiRwYXJlbnQuaXNMaWNlbnNlQWN0aXZhdGVkICkgPyB0cnVlIDogZmFsc2U7XHJcblx0XHR9LFxyXG5cclxuXHRcdGluc3RhbGxBY3Rpb25BdmFsaWFibGUoKSB7XHJcblx0XHRcdHJldHVybiAoICEgdGhpcy5hZGRvbkRhdGFbJ2lzSW5zdGFsbGVkJ10gJiYgdGhpcy4kcGFyZW50LmlzTGljZW5zZUFjdGl2YXRlZCApID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdFx0fSxcclxuXHJcblx0XHRhY3RpdmF0ZUFjdGlvbkF2YWxpYWJsZSgpIHtcclxuXHRcdFx0cmV0dXJuICggdGhpcy5hZGRvbkRhdGFbJ2lzSW5zdGFsbGVkJ10gJiYgISB0aGlzLmFkZG9uRGF0YVsnaXNBY3RpdmF0ZWQnXSApID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdFx0fSxcclxuXHJcblx0XHRkZWFjdGl2YXRlQWN0aW9uQXZhbGlhYmxlKCkge1xyXG5cdFx0XHRyZXR1cm4gKCB0aGlzLmFkZG9uRGF0YVsnaXNJbnN0YWxsZWQnXSAmJiB0aGlzLmFkZG9uRGF0YVsnaXNBY3RpdmF0ZWQnXSApID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdFx0fSxcclxuXHJcblx0XHR1cGRhdGVBY3Rpb25BdmFsaWFibGUoKSB7XHJcblx0XHRcdHJldHVybiAoIHRoaXMuYWRkb25EYXRhWyd1cGRhdGVBdmFsaWFibGUnXSApID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdFx0fSxcclxuXHJcblx0XHRwcm9jY2VzaW5nU3RhdGUoKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmFjdGlvblBsdWdpblByb2Nlc3NlZCB8fCB0aGlzLnVwZGF0ZVBsdWdpblByb2Nlc3NlZDtcclxuXHRcdH0sXHJcblxyXG5cdFx0bGVhcm5Nb3JlVXJsKCkge1xyXG5cdFx0XHRsZXQgZGVtb1VybCA9IHRoaXMuYWRkb25EYXRhLmRlbW8sXHJcblx0XHRcdFx0dXRtUGFyYW1zID0gdGhpcy4kcGFyZW50LmdldFV0bVBhcmFtc1N0cmluZygge1xyXG5cdFx0XHRcdFx0dXRtX3NvdXJjZTogYGRhc2hib2FyZC9qZXQtZm9ybS1idWlsZGVyLWFkZG9ucy1wYWdlYCxcclxuXHRcdFx0XHRcdHV0bV9tZWRpdW06IGBjcm9jb2Jsb2NrLWxpY2Vuc2UvJHsgdGhpcy4kcGFyZW50LnRoZW1lSW5mby50aGVtZSB9YCxcclxuXHRcdFx0XHRcdHV0bV9jYW1wYWlnbjogJ2FkZG9uLWxlYXJuLW1vcmUnLFxyXG5cdFx0XHRcdH0gKTtcclxuXHJcblx0XHRcdHJldHVybiBgJHsgZGVtb1VybCB9PyR7IHV0bVBhcmFtcyB9YDtcclxuXHRcdH1cclxuXHJcblx0fSxcclxuXHRtZXRob2RzOiB7XHJcblxyXG5cdFx0YWN0aXZhdGVMaWNlbnNlKCkge1xyXG5cdFx0XHR3aW5kb3cuamZiRXZlbnRCdXMuJGVtaXQoICdzaG93TGljZW5zZVBvcHVwJyApO1xyXG5cdFx0fSxcclxuXHJcblx0XHRpbnN0YWxsUGx1Z2luKCkge1xyXG5cdFx0XHR0aGlzLmFjdGlvblBsdWdpbiA9ICdpbnN0YWxsJztcclxuXHRcdFx0dGhpcy5wbHVnaW5BY3Rpb24oKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0ZGVhY3RpdmF0ZVBsdWdpbigpIHtcclxuXHRcdFx0dGhpcy5hY3Rpb25QbHVnaW4gPSAnZGVhY3RpdmF0ZSc7XHJcblx0XHRcdHRoaXMucGx1Z2luQWN0aW9uKCk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGFjdGl2YXRlUGx1Z2luKCkge1xyXG5cdFx0XHR0aGlzLmFjdGlvblBsdWdpbiA9ICdhY3RpdmF0ZSc7XHJcblx0XHRcdHRoaXMucGx1Z2luQWN0aW9uKCk7XHJcblx0XHR9LFxyXG5cclxuXHRcdHVwZGF0ZVBsdWdpbigpIHtcclxuXHJcblx0XHRcdGlmICggdGhpcy51cGRhdGVBY3Rpb25BdmFsaWFibGUgKSB7XHJcblx0XHRcdFx0dGhpcy5hY3Rpb25QbHVnaW4gPSAndXBkYXRlJztcclxuXHRcdFx0XHR0aGlzLnBsdWdpbkFjdGlvbigpO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdHBsdWdpbkFjdGlvbjogZnVuY3Rpb24oKSB7XHJcblx0XHRcdGxldCBzZWxmID0gdGhpcztcclxuXHJcblx0XHRcdHNlbGYuYWN0aW9uUGx1Z2luUmVxdWVzdCA9IGpRdWVyeS5hamF4KCB7XHJcblx0XHRcdFx0dHlwZTogJ1BPU1QnLFxyXG5cdFx0XHRcdHVybDogd2luZG93LkpldEZCUGFnZUNvbmZpZy5hamF4VXJsLFxyXG5cdFx0XHRcdGRhdGFUeXBlOiAnanNvbicsXHJcblx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0YWN0aW9uOiAnamZiX2FkZG9uX2FjdGlvbicsXHJcblx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdGFjdGlvbjogc2VsZi5hY3Rpb25QbHVnaW4sXHJcblx0XHRcdFx0XHRcdHBsdWdpbjogc2VsZi5hZGRvbkRhdGFbJ3NsdWcnXVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0YmVmb3JlU2VuZDogZnVuY3Rpb24oIGpxWEhSLCBhamF4U2V0dGluZ3MgKSB7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBudWxsICE9PSBzZWxmLmFjdGlvblBsdWdpblJlcXVlc3QgKSB7XHJcblx0XHRcdFx0XHRcdHNlbGYuYWN0aW9uUGx1Z2luUmVxdWVzdC5hYm9ydCgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHN3aXRjaCAoIHNlbGYuYWN0aW9uUGx1Z2luICkge1xyXG5cdFx0XHRcdFx0XHRjYXNlICdpbnN0YWxsJzpcclxuXHRcdFx0XHRcdFx0Y2FzZSAnYWN0aXZhdGUnOlxyXG5cdFx0XHRcdFx0XHRjYXNlICdkZWFjdGl2YXRlJzpcclxuXHRcdFx0XHRcdFx0XHRzZWxmLmFjdGlvblBsdWdpblByb2Nlc3NlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGNhc2UgJ3VwZGF0ZSc6XHJcblx0XHRcdFx0XHRcdFx0c2VsZi51cGRhdGVQbHVnaW5Qcm9jZXNzZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24oIHJlc3BvbmNlLCB0ZXh0U3RhdHVzLCBqcVhIUiApIHtcclxuXHJcblx0XHRcdFx0XHRzd2l0Y2ggKCBzZWxmLmFjdGlvblBsdWdpbiApIHtcclxuXHRcdFx0XHRcdFx0Y2FzZSAnaW5zdGFsbCc6XHJcblx0XHRcdFx0XHRcdGNhc2UgJ2FjdGl2YXRlJzpcclxuXHRcdFx0XHRcdFx0Y2FzZSAnZGVhY3RpdmF0ZSc6XHJcblx0XHRcdFx0XHRcdFx0c2VsZi5hY3Rpb25QbHVnaW5Qcm9jZXNzZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0Y2FzZSAndXBkYXRlJzpcclxuXHRcdFx0XHRcdFx0XHRzZWxmLnVwZGF0ZVBsdWdpblByb2Nlc3NlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmICggcmVzcG9uY2Uuc3VjY2VzcyApIHtcclxuXHRcdFx0XHRcdFx0c2VsZi4kQ1hOb3RpY2UuYWRkKCB7XHJcblx0XHRcdFx0XHRcdFx0bWVzc2FnZTogcmVzcG9uY2UubWVzc2FnZSxcclxuXHRcdFx0XHRcdFx0XHR0eXBlOiAnc3VjY2VzcycsXHJcblx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDQwMDAsXHJcblx0XHRcdFx0XHRcdH0gKTtcclxuXHJcblx0XHRcdFx0XHRcdHdpbmRvdy5qZmJFdmVudEJ1cy4kZW1pdCggJ3VwZGF0ZUFkZG9uRGF0YScsIHtcclxuXHRcdFx0XHRcdFx0XHRzbHVnOiBzZWxmLmFkZG9uRGF0YVsnc2x1ZyddLFxyXG5cdFx0XHRcdFx0XHRcdGFkZG9uRGF0YTogcmVzcG9uY2UuZGF0YSxcclxuXHRcdFx0XHRcdFx0XHRhY3Rpb246IHNlbGYuYWN0aW9uUGx1Z2luLFxyXG5cdFx0XHRcdFx0XHR9ICk7XHJcblxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0c2VsZi4kQ1hOb3RpY2UuYWRkKCB7XHJcblx0XHRcdFx0XHRcdFx0bWVzc2FnZTogcmVzcG9uY2UubWVzc2FnZSxcclxuXHRcdFx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxyXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiA0MDAwLFxyXG5cdFx0XHRcdFx0XHR9ICk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9ICk7XHJcblx0XHR9XHJcblx0fSxcclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG5cclxuLmpmYi1hZGRvbnMge1xyXG5cdG1hcmdpbi1ib3R0b206IDUwcHg7XHJcblxyXG5cdCY6bGFzdC1jaGlsZCB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAwO1xyXG5cdH1cclxuXHJcblx0YSB7XHJcblx0XHRjb2xvcjogIzAwN2NiYTtcclxuXHR9XHJcblxyXG5cdCZfX2hlYWRlciB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cdH1cclxuXHJcblx0Jl9fbGlzdCB7XHJcblx0XHRkaXNwbGF5OiBncmlkO1xyXG5cdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcclxuXHRcdGdhcDogNDBweDtcclxuXHJcblx0XHRAbWVkaWEgKG1heC13aWR0aDogMTE0MHB4KSB7XHJcblx0XHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQmX19pdGVtIHtcclxuXHRcdHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjNzIGVhc2Utb3V0O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcblx0XHQmOmhvdmVyIHtcclxuXHRcdFx0Ym94LXNoYWRvdzogMHB4IDRweCAyOHB4IHJnYmEoMTUsIDIzLCA0MiwgMC4xKTtcclxuXHRcdH1cclxuXHJcblx0XHQmLmFjdGl2YXRlZCB7XHJcblx0XHRcdC5qZmItYWRkb25zX19pdGVtLWluZm8ge1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ji51cGRhdGUtYXZhbGlhYmxlIHtcclxuXHRcdFx0LmpmYi1hZGRvbnNfX2l0ZW0tbmFtZSB7XHJcblx0XHRcdFx0LnZlcnNpb24ge1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI0Q2MzM2QztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0LmpmYi1hZGRvbnNfX2l0ZW0tdXBkYXRlIHtcclxuXHRcdFx0XHQubGF0ZXN0LXZlcnNpb24ge1xyXG5cdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzQ2QjQ1MDtcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDJweCA4cHg7XHJcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQmX19pdGVtLWlubmVyIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0YWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0fVxyXG5cclxuXHQmX19pdGVtLXRodW1iIHtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XHJcblx0XHRsaW5lLWhlaWdodDogMDtcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG5cdFx0LnByby1iYWRnZSB7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0dG9wOiAxMnB4O1xyXG5cdFx0XHRsZWZ0OiAxMnB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdGltZyB7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRoZWlnaHQ6IGF1dG87XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQmX19pdGVtLWluZm8ge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuXHRcdGZsZXg6IDEgMSBhdXRvO1xyXG5cdFx0cGFkZGluZzogMjBweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XHJcblx0XHRib3JkZXItd2lkdGg6IDAgMXB4IDFweCAxcHg7XHJcblx0XHRib3JkZXItY29sb3I6ICNEQ0RDREQ7XHJcblx0XHRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblx0fVxyXG5cclxuXHQmX19pdGVtLW5hbWUge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcblx0XHQubGFiZWwge1xyXG5cdFx0XHRmb250LXNpemU6IDIwcHg7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0XHRcdGxpbmUtaGVpZ2h0OiAxLjI1O1xyXG5cdFx0fVxyXG5cclxuXHRcdC52ZXJzaW9uIHtcclxuXHRcdFx0cGFkZGluZzogMXB4IDhweDtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdFx0XHRjb2xvcjogd2hpdGU7XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICM0NkI0NTA7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Jl9faXRlbS11cGRhdGUge1xyXG5cdFx0Y29sb3I6ICM3YjdlODE7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cdH1cclxuXHJcblx0Jl9faXRlbS1saWNlbnNlIHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0XHRjb2xvcjogIzdiN2U4MTtcclxuXHJcblx0XHQuY3gtdnVpLWJ1dHRvbiB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAzcHg7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQmX19pdGVtLWRlc2Mge1xyXG5cdFx0ZmxleDogMSAxIGF1dG87XHJcblxyXG5cdFx0YSB7XHJcblx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdCZfX2l0ZW0tYWN0aW9ucyB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGZsZXgtd3JhcDogd3JhcDtcclxuXHRcdG1hcmdpbi10b3A6IDIwcHg7XHJcblxyXG5cdFx0JjplbXB0eSB7XHJcblx0XHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0XHR9XHJcblxyXG5cdFx0LmN4LXZ1aS1idXR0b24ge1xyXG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG48L3N0eWxlPiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnByb2NjZXNpbmctc3RhdGUge1xcbiAgb3BhY2l0eTogMC41O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5qZmItYWRkb25zLXBhZ2VfX2lubmVyIHtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5qZmItYWRkb25zLXBhZ2VfX2hlYWRlciB7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlX19oZWFkZXItY29udHJvbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RDRENERDtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZV9faGVhZGVyLWNvbnRyb2xzID4gLmN4LXZ1aS1idXR0b24ge1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmN4LXZ1aS1idXR0b24ge1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlIC5jeC12dWktYnV0dG9uIC5idXR0b24taWNvbiB7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuY3gtdnVpLWJ1dHRvbi0tc3R5bGUtYWNjZW50IHtcXG4gIGNvbG9yOiAjMDA3Y2JhO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICMwMDdjYmE7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmN4LXZ1aS1idXR0b24tLXN0eWxlLWFjY2VudDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3Y2JhMTI7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmN4LXZ1aS1idXR0b24tLXN0eWxlLWFjY2VudCAuYnV0dG9uLWljb24gcGF0aCB7XFxuICBmaWxsOiAjMDA3Y2JhO1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlIC5jeC12dWktYnV0dG9uLS1zdHlsZS1kYW5nZXIge1xcbiAgY29sb3I6ICNkNjMzNmM7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggI2Q2MzM2YztcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuY3gtdnVpLWJ1dHRvbi0tc3R5bGUtZGFuZ2VyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNjMzNmMxMjtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuY3gtdnVpLWJ1dHRvbi0tc3R5bGUtZGFuZ2VyIC5idXR0b24taWNvbiBwYXRoIHtcXG4gIGZpbGw6ICNkNjMzNmM7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmN4LXZ1aS1idXR0b25fX2NvbnRlbnQgPiBzcGFuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmN4LXZ1aS1wb3B1cF9faGVhZGVyIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEQ0RDREQ7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlIC5jeC12dWktcG9wdXBfX2hlYWRlci10aXRsZSB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XFxuICBjb2xvcjogIzIzMjgyRDtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZV9fbGljZW5zZS1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxufVxcbi5qZmItYWRkb25zLXBhZ2VfX2xpY2Vuc2UtZm9ybSA+IHNwYW4ge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZV9fbGljZW5zZS1pbnB1dCB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlIC5nby1wcm8tYmFubmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMjRweCAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEQ0RDREQ7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmdvLXByby1iYW5uZXJfX3N1YnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiAjMDA3Q0JBO1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlIC5nby1wcm8tYmFubmVyX190aXRsZSB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBsaW5lLWhlaWdodDogMS4yNTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogIzIzMjgyRDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmdvLXByby1iYW5uZXJfX2J1dHRvbiB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3Q0JBO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9hZG1pbi9wYWdlcy9qZmItYWRkb25zL0FkZG9uc1BhZ2UudnVlXCIsXCJ3ZWJwYWNrOi8vLi8uLi9BZGRvbnNQYWdlLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUEwWkE7RUFDQyxZQUFBO0VBQ0Esb0JBQUE7QUN6WkQ7QUQ4WkM7RUFDQyxhQUFBO0VBQ0EsWUFBQTtBQzNaRjtBRDhaQztFQUNDLG1CQUFBO0FDNVpGO0FEK1pDO0VBQ0MsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdDQUFBO0FDN1pGO0FEK1pFO0VBQ0MsaUJBQUE7QUM3Wkg7QURpYUM7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBQy9aRjtBRGlhRTtFQUNDLGlCQUFBO0FDL1pIO0FEa2FFO0VBQ0MsY0FBQTtFQUNBLG1DQUFBO0FDaGFIO0FEa2FHO0VBQ0MsMkJBQUE7QUNoYUo7QURvYUk7RUFDQyxhQUFBO0FDbGFMO0FEdWFFO0VBQ0MsY0FBQTtFQUNBLG1DQUFBO0FDcmFIO0FEdWFHO0VBQ0MsMkJBQUE7QUNyYUo7QUR5YUk7RUFDQyxhQUFBO0FDdmFMO0FENmFHO0VBQ0MsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUMzYUo7QURpYkU7RUFDQyxvQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7QUMvYUg7QURrYkU7RUFDQyxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNoYkg7QUR3YkM7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0FDdGJGO0FEd2JFO0VBQ0MsbUJBQUE7QUN0Ykg7QUQwYkM7RUFDQyxtQkFBQTtBQ3hiRjtBRDJiQztFQUNDLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUN6YkY7QUQyYkU7RUFDQyxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ3piSDtBRDRiRTtFQUNDLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDMWJIO0FENmJFO0VBQ0MsWUFBQTtFQUNBLHlCQUFBO0FDM2JIXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcclxcblxcclxcbi5wcm9jY2VzaW5nLXN0YXRlIHtcXHJcXG5cXHRvcGFjaXR5OiAwLjU7XFxyXFxuXFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5qZmItYWRkb25zLXBhZ2Uge1xcclxcblxcclxcblxcdCZfX2lubmVyIHtcXHJcXG5cXHRcXHRwYWRkaW5nOiAzMHB4O1xcclxcblxcdFxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Jl9faGVhZGVyIHtcXHJcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQmX19oZWFkZXItY29udHJvbHMge1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdHBhZGRpbmctYm90dG9tOiAxNXB4O1xcclxcblxcdFxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRENEQ0REO1xcclxcblxcclxcblxcdFxcdD4gLmN4LXZ1aS1idXR0b24ge1xcclxcblxcdFxcdFxcdG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LmN4LXZ1aS1idXR0b24ge1xcclxcblxcdFxcdGZvbnQtc2l6ZTogMTNweDtcXHJcXG5cXHRcXHRmb250LXdlaWdodDogNDAwO1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcblxcclxcblxcdFxcdC5idXR0b24taWNvbiB7XFxyXFxuXFx0XFx0XFx0bWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdCYtLXN0eWxlLWFjY2VudCB7XFxyXFxuXFx0XFx0XFx0Y29sb3I6ICMwMDdjYmE7XFxyXFxuXFx0XFx0XFx0Ym94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICMwMDdjYmE7XFxyXFxuXFxyXFxuXFx0XFx0XFx0Jjpob3ZlciB7XFxyXFxuXFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogIzAwN2NiYTEyO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHQuYnV0dG9uLWljb24ge1xcclxcblxcdFxcdFxcdFxcdHBhdGgge1xcclxcblxcdFxcdFxcdFxcdFxcdGZpbGw6ICMwMDdjYmE7XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Ji0tc3R5bGUtZGFuZ2VyIHtcXHJcXG5cXHRcXHRcXHRjb2xvcjogI2Q2MzM2YztcXHJcXG5cXHRcXHRcXHRib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggI2Q2MzM2YztcXHJcXG5cXHJcXG5cXHRcXHRcXHQmOmhvdmVyIHtcXHJcXG5cXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZDYzMzZjMTI7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdC5idXR0b24taWNvbiB7XFxyXFxuXFx0XFx0XFx0XFx0cGF0aCB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0ZmlsbDogI2Q2MzM2YztcXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQmX19jb250ZW50IHtcXHJcXG5cXHRcXHRcXHQ+IHNwYW4ge1xcclxcblxcdFxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQuY3gtdnVpLXBvcHVwIHtcXHJcXG5cXHRcXHQmX19oZWFkZXIge1xcclxcblxcdFxcdFxcdHBhZGRpbmctYm90dG9tOiAxNXB4O1xcclxcblxcdFxcdFxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRENEQ0REO1xcclxcblxcdFxcdFxcdG1hcmdpbi1ib3R0b206IDMwcHg7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdCZfX2hlYWRlci10aXRsZSB7XFxyXFxuXFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDUwMDtcXHJcXG5cXHRcXHRcXHRmb250LXNpemU6IDI0cHg7XFxyXFxuXFx0XFx0XFx0bGluZS1oZWlnaHQ6IDM2cHg7XFxyXFxuXFx0XFx0XFx0Y29sb3I6ICMyMzI4MkQ7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQmX19saWNlbnNlLXBvcHVwIHtcXHJcXG5cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Jl9fbGljZW5zZS1mb3JtIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcblxcdFxcdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcblxcclxcblxcdFxcdD4gc3BhbiB7XFxyXFxuXFx0XFx0XFx0bWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCZfX2xpY2Vuc2UtaW5wdXQge1xcclxcblxcdFxcdG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5nby1wcm8tYmFubmVyIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHRwYWRkaW5nOiAyNHB4IDA7XFxyXFxuXFx0XFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEQ0RDREQ7XFxyXFxuXFxyXFxuXFx0XFx0Jl9fc3VidGl0bGUge1xcclxcblxcdFxcdFxcdGZvbnQtc2l6ZTogMThweDtcXHJcXG5cXHRcXHRcXHRsaW5lLWhlaWdodDogMS4yNTtcXHJcXG5cXHRcXHRcXHRmb250LXdlaWdodDogNTAwO1xcclxcblxcdFxcdFxcdGNvbG9yOiAjMDA3Q0JBO1xcclxcblxcdFxcdFxcdG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Jl9fdGl0bGUge1xcclxcblxcdFxcdFxcdGZvbnQtc2l6ZTogMjRweDtcXHJcXG5cXHRcXHRcXHRsaW5lLWhlaWdodDogMS4yNTtcXHJcXG5cXHRcXHRcXHRmb250LXdlaWdodDogNTAwO1xcclxcblxcdFxcdFxcdGNvbG9yOiAjMjMyODJEO1xcclxcblxcdFxcdFxcdG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdCZfX2J1dHRvbiB7XFxyXFxuXFx0XFx0XFx0Y29sb3I6IHdoaXRlO1xcclxcblxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICMwMDdDQkE7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuXCIsXCIucHJvY2Nlc2luZy1zdGF0ZSB7XFxuICBvcGFjaXR5OiAwLjU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmpmYi1hZGRvbnMtcGFnZV9faW5uZXIge1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZV9faGVhZGVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcbi5qZmItYWRkb25zLXBhZ2VfX2hlYWRlci1jb250cm9scyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRENEQ0REO1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlX19oZWFkZXItY29udHJvbHMgPiAuY3gtdnVpLWJ1dHRvbiB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuY3gtdnVpLWJ1dHRvbiB7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmN4LXZ1aS1idXR0b24gLmJ1dHRvbi1pY29uIHtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlIC5jeC12dWktYnV0dG9uLS1zdHlsZS1hY2NlbnQge1xcbiAgY29sb3I6ICMwMDdjYmE7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggIzAwN2NiYTtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuY3gtdnVpLWJ1dHRvbi0tc3R5bGUtYWNjZW50OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdjYmExMjtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuY3gtdnVpLWJ1dHRvbi0tc3R5bGUtYWNjZW50IC5idXR0b24taWNvbiBwYXRoIHtcXG4gIGZpbGw6ICMwMDdjYmE7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmN4LXZ1aS1idXR0b24tLXN0eWxlLWRhbmdlciB7XFxuICBjb2xvcjogI2Q2MzM2YztcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjZDYzMzZjO1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlIC5jeC12dWktYnV0dG9uLS1zdHlsZS1kYW5nZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q2MzM2YzEyO1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlIC5jeC12dWktYnV0dG9uLS1zdHlsZS1kYW5nZXIgLmJ1dHRvbi1pY29uIHBhdGgge1xcbiAgZmlsbDogI2Q2MzM2YztcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuY3gtdnVpLWJ1dHRvbl9fY29udGVudCA+IHNwYW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuY3gtdnVpLXBvcHVwX19oZWFkZXIge1xcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RDRENERDtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmN4LXZ1aS1wb3B1cF9faGVhZGVyLXRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBsaW5lLWhlaWdodDogMzZweDtcXG4gIGNvbG9yOiAjMjMyODJEO1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlX19saWNlbnNlLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZV9fbGljZW5zZS1mb3JtID4gc3BhbiB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlX19saWNlbnNlLWlucHV0IHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmdvLXByby1iYW5uZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyNHB4IDA7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RDRENERDtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuZ28tcHJvLWJhbm5lcl9fc3VidGl0bGUge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY29sb3I6ICMwMDdDQkE7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmdvLXByby1iYW5uZXJfX3RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiAjMjMyODJEO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuZ28tcHJvLWJhbm5lcl9fYnV0dG9uIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdDQkE7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5qZmItYWRkb25zIHtcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcbi5qZmItYWRkb25zOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuLmpmYi1hZGRvbnMgYSB7XFxuICBjb2xvcjogIzAwN2NiYTtcXG59XFxuLmpmYi1hZGRvbnNfX2hlYWRlciB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4uamZiLWFkZG9uc19fbGlzdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gIGdhcDogNDBweDtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDExNDBweCkge1xcbi5qZmItYWRkb25zX19saXN0IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG59XFxufVxcbi5qZmItYWRkb25zX19pdGVtIHtcXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcyBlYXNlLW91dDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5qZmItYWRkb25zX19pdGVtOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDBweCA0cHggMjhweCByZ2JhKDE1LCAyMywgNDIsIDAuMSk7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLmFjdGl2YXRlZCAuamZiLWFkZG9uc19faXRlbS1pbmZvIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS51cGRhdGUtYXZhbGlhYmxlIC5qZmItYWRkb25zX19pdGVtLW5hbWUgLnZlcnNpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q2MzM2QztcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0udXBkYXRlLWF2YWxpYWJsZSAuamZiLWFkZG9uc19faXRlbS11cGRhdGUgLmxhdGVzdC12ZXJzaW9uIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NkI0NTA7XFxuICBwYWRkaW5nOiAycHggOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS1pbm5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS10aHVtYiAucHJvLWJhZGdlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTJweDtcXG4gIGxlZnQ6IDEycHg7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLXRodW1iIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0taW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcXG4gIGJvcmRlci13aWR0aDogMCAxcHggMXB4IDFweDtcXG4gIGJvcmRlci1jb2xvcjogI0RDRENERDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tbmFtZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS1uYW1lIC5sYWJlbCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLW5hbWUgLnZlcnNpb24ge1xcbiAgcGFkZGluZzogMXB4IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NkI0NTA7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tdXBkYXRlIHtcXG4gIGNvbG9yOiAjN2I3ZTgxO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tbGljZW5zZSB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgY29sb3I6ICM3YjdlODE7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLWxpY2Vuc2UgLmN4LXZ1aS1idXR0b24ge1xcbiAgbWFyZ2luLWxlZnQ6IDNweDtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tZGVzYyB7XFxuICBmbGV4OiAxIDEgYXV0bztcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tZGVzYyBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tYWN0aW9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLWFjdGlvbnM6ZW1wdHkge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tYWN0aW9ucyAuY3gtdnVpLWJ1dHRvbiB7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2FkbWluL3BhZ2VzL2pmYi1hZGRvbnMvY29tcG9uZW50cy9BZGRvbkl0ZW0udnVlXCIsXCJ3ZWJwYWNrOi8vLi8uLi9BZGRvbkl0ZW0udnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQWtSQTtFQUNDLG1CQUFBO0FDalJEO0FEbVJDO0VBQ0MsZ0JBQUE7QUNqUkY7QURvUkM7RUFDQyxjQUFBO0FDbFJGO0FEcVJDO0VBQ0MsbUJBQUE7QUNuUkY7QURzUkM7RUFDQyxhQUFBO0VBQ0EscUNBQUE7RUFDQSxTQUFBO0FDcFJGO0FEc1JFO0FBTEQ7SUFNRSxxQ0FBQTtBQ25SRDtBQUNGO0FEc1JDO0VBQ0Msb0NBQUE7RUFDQSxtQkFBQTtBQ3BSRjtBRHNSRTtFQUNDLDhDQUFBO0FDcFJIO0FEd1JHO0VBQ0MsdUJBQUE7QUN0Uko7QUQ0Ukk7RUFDQyx5QkFBQTtBQzFSTDtBRDhSSTtFQUNDLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUM1Ukw7QURrU0M7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUNoU0Y7QURtU0M7RUFDQyw0QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDalNGO0FEbVNFO0VBQ0Msa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ2pTSDtBRG9TRTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FDbFNIO0FEc1NDO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNwU0Y7QUR1U0M7RUFDQyxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDclNGO0FEdVNFO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNyU0g7QUR3U0U7RUFDQyxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUN0U0g7QUQwU0M7RUFDQyxjQUFBO0VBQ0EsbUJBQUE7QUN4U0Y7QUQyU0M7RUFDQyxtQkFBQTtFQUNBLGNBQUE7QUN6U0Y7QUQyU0U7RUFDQyxnQkFBQTtBQ3pTSDtBRDZTQztFQUNDLGNBQUE7QUMzU0Y7QUQ2U0U7RUFDQyxxQkFBQTtBQzNTSDtBRCtTQztFQUNDLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDN1NGO0FEK1NFO0VBQ0MsYUFBQTtBQzdTSDtBRGdURTtFQUNDLGtCQUFBO0FDOVNIXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcclxcblxcclxcbi5qZmItYWRkb25zIHtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiA1MHB4O1xcclxcblxcclxcblxcdCY6bGFzdC1jaGlsZCB7XFxyXFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMDtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0YSB7XFxyXFxuXFx0XFx0Y29sb3I6ICMwMDdjYmE7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCZfX2hlYWRlciB7XFxyXFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Jl9fbGlzdCB7XFxyXFxuXFx0XFx0ZGlzcGxheTogZ3JpZDtcXHJcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcclxcblxcdFxcdGdhcDogNDBweDtcXHJcXG5cXHJcXG5cXHRcXHRAbWVkaWEgKG1heC13aWR0aDogMTE0MHB4KSB7XFxyXFxuXFx0XFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCZfX2l0ZW0ge1xcclxcblxcdFxcdHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjNzIGVhc2Utb3V0O1xcclxcblxcdFxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuXFxyXFxuXFx0XFx0Jjpob3ZlciB7XFxyXFxuXFx0XFx0XFx0Ym94LXNoYWRvdzogMHB4IDRweCAyOHB4IHJnYmEoMTUsIDIzLCA0MiwgMC4xKTtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Ji5hY3RpdmF0ZWQge1xcclxcblxcdFxcdFxcdC5qZmItYWRkb25zX19pdGVtLWluZm8ge1xcclxcblxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Ji51cGRhdGUtYXZhbGlhYmxlIHtcXHJcXG5cXHRcXHRcXHQuamZiLWFkZG9uc19faXRlbS1uYW1lIHtcXHJcXG5cXHRcXHRcXHRcXHQudmVyc2lvbiB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogI0Q2MzM2QztcXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdC5qZmItYWRkb25zX19pdGVtLXVwZGF0ZSB7XFxyXFxuXFx0XFx0XFx0XFx0LmxhdGVzdC12ZXJzaW9uIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRjb2xvcjogd2hpdGU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogIzQ2QjQ1MDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRwYWRkaW5nOiAycHggOHB4O1xcclxcblxcdFxcdFxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Jl9faXRlbS1pbm5lciB7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdFxcdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcblxcdFxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Jl9faXRlbS10aHVtYiB7XFxyXFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcXHJcXG5cXHRcXHRsaW5lLWhlaWdodDogMDtcXHJcXG5cXHRcXHRvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHJcXG5cXHRcXHQucHJvLWJhZGdlIHtcXHJcXG5cXHRcXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0XFx0dG9wOiAxMnB4O1xcclxcblxcdFxcdFxcdGxlZnQ6IDEycHg7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdGltZyB7XFxyXFxuXFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0XFx0aGVpZ2h0OiBhdXRvO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Jl9faXRlbS1pbmZvIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0XFx0YWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxyXFxuXFx0XFx0ZmxleDogMSAxIGF1dG87XFxyXFxuXFx0XFx0cGFkZGluZzogMjBweDtcXHJcXG5cXHRcXHRib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xcclxcblxcdFxcdGJvcmRlci13aWR0aDogMCAxcHggMXB4IDFweDtcXHJcXG5cXHRcXHRib3JkZXItY29sb3I6ICNEQ0RDREQ7XFxyXFxuXFx0XFx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Jl9faXRlbS1uYW1lIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRcXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcblxcclxcblxcdFxcdC5sYWJlbCB7XFxyXFxuXFx0XFx0XFx0Zm9udC1zaXplOiAyMHB4O1xcclxcblxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFx0XFx0XFx0bGluZS1oZWlnaHQ6IDEuMjU7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC52ZXJzaW9uIHtcXHJcXG5cXHRcXHRcXHRwYWRkaW5nOiAxcHggOHB4O1xcclxcblxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG5cXHRcXHRcXHRjb2xvcjogd2hpdGU7XFxyXFxuXFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogIzQ2QjQ1MDtcXHJcXG5cXHRcXHRcXHRtYXJnaW4tbGVmdDogMTBweDtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCZfX2l0ZW0tdXBkYXRlIHtcXHJcXG5cXHRcXHRjb2xvcjogIzdiN2U4MTtcXHJcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQmX19pdGVtLWxpY2Vuc2Uge1xcclxcblxcdFxcdG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuXFx0XFx0Y29sb3I6ICM3YjdlODE7XFxyXFxuXFxyXFxuXFx0XFx0LmN4LXZ1aS1idXR0b24ge1xcclxcblxcdFxcdFxcdG1hcmdpbi1sZWZ0OiAzcHg7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQmX19pdGVtLWRlc2Mge1xcclxcblxcdFxcdGZsZXg6IDEgMSBhdXRvO1xcclxcblxcclxcblxcdFxcdGEge1xcclxcblxcdFxcdFxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCZfX2l0ZW0tYWN0aW9ucyB7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHRmbGV4LXdyYXA6IHdyYXA7XFxyXFxuXFx0XFx0bWFyZ2luLXRvcDogMjBweDtcXHJcXG5cXHJcXG5cXHRcXHQmOmVtcHR5IHtcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBub25lO1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQuY3gtdnVpLWJ1dHRvbiB7XFxyXFxuXFx0XFx0XFx0bWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcblwiLFwiLmpmYi1hZGRvbnMge1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuLmpmYi1hZGRvbnM6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG4uamZiLWFkZG9ucyBhIHtcXG4gIGNvbG9yOiAjMDA3Y2JhO1xcbn1cXG4uamZiLWFkZG9uc19faGVhZGVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi5qZmItYWRkb25zX19saXN0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgZ2FwOiA0MHB4O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTE0MHB4KSB7XFxuICAuamZiLWFkZG9uc19fbGlzdCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICB9XFxufVxcbi5qZmItYWRkb25zX19pdGVtIHtcXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcyBlYXNlLW91dDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5qZmItYWRkb25zX19pdGVtOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDBweCA0cHggMjhweCByZ2JhKDE1LCAyMywgNDIsIDAuMSk7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLmFjdGl2YXRlZCAuamZiLWFkZG9uc19faXRlbS1pbmZvIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS51cGRhdGUtYXZhbGlhYmxlIC5qZmItYWRkb25zX19pdGVtLW5hbWUgLnZlcnNpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q2MzM2QztcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0udXBkYXRlLWF2YWxpYWJsZSAuamZiLWFkZG9uc19faXRlbS11cGRhdGUgLmxhdGVzdC12ZXJzaW9uIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NkI0NTA7XFxuICBwYWRkaW5nOiAycHggOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS1pbm5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS10aHVtYiAucHJvLWJhZGdlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTJweDtcXG4gIGxlZnQ6IDEycHg7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLXRodW1iIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0taW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcXG4gIGJvcmRlci13aWR0aDogMCAxcHggMXB4IDFweDtcXG4gIGJvcmRlci1jb2xvcjogI0RDRENERDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tbmFtZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS1uYW1lIC5sYWJlbCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLW5hbWUgLnZlcnNpb24ge1xcbiAgcGFkZGluZzogMXB4IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NkI0NTA7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tdXBkYXRlIHtcXG4gIGNvbG9yOiAjN2I3ZTgxO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tbGljZW5zZSB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgY29sb3I6ICM3YjdlODE7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLWxpY2Vuc2UgLmN4LXZ1aS1idXR0b24ge1xcbiAgbWFyZ2luLWxlZnQ6IDNweDtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tZGVzYyB7XFxuICBmbGV4OiAxIDEgYXV0bztcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tZGVzYyBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tYWN0aW9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLWFjdGlvbnM6ZW1wdHkge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tYWN0aW9ucyAuY3gtdnVpLWJ1dHRvbiB7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQWRkb25zUGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWUyNDlkMGUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQWRkb25zUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0FkZG9uc1BhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0FkZG9uc1BhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxPcGVuU2VydmVyXFxcXGRvbWFpbnNcXFxcZGV2ZWxvcC5ob21lLmNvbVxcXFx3cC1jb250ZW50XFxcXHBsdWdpbnNcXFxcamV0Zm9ybWJ1aWxkZXJcXFxcYXNzZXRzXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzVlMjQ5ZDBlJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzVlMjQ5ZDBlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzVlMjQ5ZDBlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BZGRvbnNQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ZTI0OWQwZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1ZTI0OWQwZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYWRtaW4vcGFnZXMvamZiLWFkZG9ucy9BZGRvbnNQYWdlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQWRkb25JdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iNTA3NDNiNCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BZGRvbkl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BZGRvbkl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0FkZG9uSXRlbS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXE9wZW5TZXJ2ZXJcXFxcZG9tYWluc1xcXFxkZXZlbG9wLmhvbWUuY29tXFxcXHdwLWNvbnRlbnRcXFxccGx1Z2luc1xcXFxqZXRmb3JtYnVpbGRlclxcXFxhc3NldHNcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYjUwNzQzYjQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYjUwNzQzYjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYjUwNzQzYjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0FkZG9uSXRlbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YjUwNzQzYjQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYjUwNzQzYjQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFkbWluL3BhZ2VzL2pmYi1hZGRvbnMvY29tcG9uZW50cy9BZGRvbkl0ZW0udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FkZG9uc1BhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRkb25zUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRkb25JdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FkZG9uSXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiamZiLWFkZG9ucy1wYWdlIHdyYXBcIixcbiAgICAgIGNsYXNzOiB7IFwicHJvY2Nlc2luZy1zdGF0ZVwiOiBfdm0ucHJvY2Nlc2luZ1N0YXRlIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFwiaDFcIiwgeyBzdGF0aWNDbGFzczogXCJjcy12dWktdGl0bGVcIiB9LCBbXG4gICAgICAgIF92bS5fdihfdm0uX3MoXCJKZXRGb3JtQnVpbGRlciBBZGRvbnNcIikpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImpmYi1hZGRvbnMtcGFnZV9faW5uZXIgY3gtdnVpLXBhbmVsXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImpmYi1hZGRvbnMtcGFnZV9faGVhZGVyXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiamZiLWFkZG9ucy1wYWdlX19oZWFkZXItY29udHJvbHNcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImN4LXZ1aS1idXR0b25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBcImJ1dHRvbi1zdHlsZVwiOiBcImFjY2VudFwiLFxuICAgICAgICAgICAgICAgICAgICBzaXplOiBcIm1pbmlcIixcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogX3ZtLmNoZWNrVXBkYXRlc1Byb2Nlc3NlZFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY2hlY2tQbHVnaW5zVXBkYXRlIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IGF0dHJzOiB7IHNsb3Q6IFwibGFiZWxcIiB9LCBzbG90OiBcImxhYmVsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInN2Z1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbi1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveDogXCIwIDAgMTQgMTRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicGF0aFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTTExLjcwODUgMi4yOTE3MUMxMC41MDAxIDEuMDgzMzcgOC44NDE4IDAuMzMzMzc0IDcuMDAwMTMgMC4zMzMzNzRDMy4zMTY4IDAuMzMzMzc0IDAuMzQxNzk3IDMuMzE2NzEgMC4zNDE3OTcgNy4wMDAwNEMwLjM0MTc5NyAxMC42ODM0IDMuMzE2OCAxMy42NjY3IDcuMDAwMTMgMTMuNjY2N0MxMC4xMDg1IDEzLjY2NjcgMTIuNzAwMSAxMS41NDE3IDEzLjQ0MTggOC42NjY3MUgxMS43MDg1QzExLjAyNTEgMTAuNjA4NCA5LjE3NTEzIDEyIDcuMDAwMTMgMTJDNC4yNDE4IDEyIDIuMDAwMTMgOS43NTgzNyAyLjAwMDEzIDcuMDAwMDRDMi4wMDAxMyA0LjI0MTcxIDQuMjQxOCAyLjAwMDA0IDcuMDAwMTMgMi4wMDAwNEM4LjM4MzQ2IDIuMDAwMDQgOS42MTY4IDIuNTc1MDQgMTAuNTE2OCAzLjQ4MzM3TDcuODMzNDYgNi4xNjY3MUgxMy42NjY4VjAuMzMzMzc0TDExLjcwODUgMi4yOTE3MVpcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBcIiMwMDdDQkFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJDaGVjayBGb3IgVXBkYXRlc1wiKV0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJjeC12dWktYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgIV92bS5pc0xpY2Vuc2VBY3RpdmF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICA/IFwiY3gtdnVpLWJ1dHRvbi0tc3R5bGUtYWNjZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiY3gtdnVpLWJ1dHRvbi0tc3R5bGUtZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBzaXplOiBcIm1pbmlcIiB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5zaG93TGljZW5zZVBvcHVwIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IGF0dHJzOiB7IHNsb3Q6IFwibGFiZWxcIiB9LCBzbG90OiBcImxhYmVsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInN2Z1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbi1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxNlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveDogXCIwIDAgMTYgMTZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicGF0aFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTTE1LjQ5ODUgMEgxMi40ODk3QzEyLjQxNjYgMCAxMi4zNDg3IDAuMDE1NjcwOSAxMi4yODYgMC4wNDcwMTI3QzEyLjIzMzggMC4wNjc5MDczIDEyLjE4NjcgMC4xMDQ0NzMgMTIuMTQ1IDAuMTU2NzA5TDUuNzY2OSA2LjQ3MjA5QzUuNjIwNjMgNi40NDA3NCA1LjQ2MzkyIDYuNDE0NjMgNS4yOTY3NyA2LjM5MzczQzUuMTI5NjEgNi4zNzI4NCA0Ljk2NzY4IDYuMzYyMzkgNC44MTA5NyA2LjM2MjM5QzQuMTYzMjQgNi4zNjIzOSAzLjU0Njg1IDYuNDg3NzYgMi45NjE4IDYuNzM4NDlDMi4zNzY3NSA2Ljk3ODc4IDEuODU5NjEgNy4zMjM1NCAxLjQxMDM4IDcuNzcyNzdDMC45NjExNDkgOC4yMjIgMC42MTExNjYgOC43MzkxNCAwLjM2MDQzMSA5LjMyNDE5QzAuMTIwMTQ0IDkuOTA5MjQgMCAxMC41MzA5IDAgMTEuMTg5QzAgMTEuODM2OCAwLjEyMDE0NCAxMi40NTMyIDAuMzYwNDMxIDEzLjAzODJDMC42MTExNjYgMTMuNjIzMiAwLjk2MTE0OSAxNC4xNDA0IDEuNDEwMzggMTQuNTg5NkMxLjg1OTYxIDE1LjAzODkgMi4zNzY3NSAxNS4zODM2IDIuOTYxOCAxNS42MjM5QzMuNTQ2ODUgMTUuODc0NiA0LjE2MzI0IDE2IDQuODEwOTcgMTZDNS40NjkxNSAxNiA2LjA5MDc2IDE1Ljg3NDYgNi42NzU4MSAxNS42MjM5QzcuMjYwODYgMTUuMzgzNiA3Ljc3OCAxNS4wMzg5IDguMjI3MjMgMTQuNTg5NkM4LjgwMTgzIDE0LjAxNSA5LjE5ODgyIDEzLjM0NjQgOS40MTgyMiAxMi41ODM3QzkuNjQ4MDYgMTEuODIxMSA5LjY4NDYyIDExLjAzNzUgOS41Mjc5MSAxMC4yMzMxTDEwLjg5MTMgOC44Njk3NEMxMC45MzMxIDguODI3OTUgMTAuOTY0NCA4Ljc4MDkzIDEwLjk4NTMgOC43Mjg3QzExLjAxNjcgOC42NjYwMSAxMS4wMzIzIDguNTk4MTEgMTEuMDMyMyA4LjUyNDk4VjcuMDIwNTdIMTIuNTM2N0MxMi42OTM0IDcuMDIwNTcgMTIuODEzNiA2Ljk3MzU2IDEyLjg5NzIgNi44Nzk1M0MxMi45OTEyIDYuNzg1NSAxMy4wMzgyIDYuNjY1MzYgMTMuMDM4MiA2LjUxOTFWNS4wMTQ2OUgxNC41NDI2QzE0LjYxNTcgNS4wMTQ2OSAxNC42Nzg0IDUuMDA0MjQgMTQuNzMwNyA0Ljk4MzM1QzE0Ljc5MzMgNC45NTIwMSAxNC44NTA4IDQuOTEwMjIgMTQuOTAzIDQuODU3OThMMTUuOTA2IDMuODU1MDRDMTUuOTI2OSAzLjgxMzI2IDE1Ljk0NzggMy43NjYyNCAxNS45Njg3IDMuNzE0MDFDMTUuOTg5NiAzLjY1MTMyIDE2IDMuNTgzNDIgMTYgMy41MTAyOFYwLjUwMTQ2OUMxNiAwLjM1NTIwNyAxNS45NTMgMC4yMzUwNjQgMTUuODU5IDAuMTQxMDM4QzE1Ljc2NDkgMC4wNDcwMTI3IDE1LjY0NDggMCAxNS40OTg1IDBaTTQuOTY3NjggMTIuNzg3NUM0Ljc5MDA4IDEyLjk2NTEgNC41OTY4IDEzLjA5NTcgNC4zODc4NiAxMy4xNzkyQzQuMTg5MzYgMTMuMjUyNCAzLjk2NDc0IDEzLjI4ODkgMy43MTQwMSAxMy4yODg5QzMuNDYzMjcgMTMuMjg4OSAzLjIzMzQzIDEzLjI0MTkgMy4wMjQ0OSAxMy4xNDc5QzIuODI1OTkgMTMuMDUzOSAyLjYzNzk0IDEyLjkzMzcgMi40NjAzMyAxMi43ODc1QzIuMjgyNzMgMTIuNjA5OSAyLjE1MjE0IDEyLjQyMTggMi4wNjg1NiAxMi4yMjMzQzEuOTk1NDMgMTIuMDE0NCAxLjk1ODg2IDExLjc4NDUgMS45NTg4NiAxMS41MzM4QzEuOTU4ODYgMTEuMjgzMSAyLjAwNTg4IDExLjA1ODQgMi4wOTk5IDEwLjg1OTlDMi4xOTM5MyAxMC42NTEgMi4zMTQwNyAxMC40NTc3IDIuNDYwMzMgMTAuMjgwMUMyLjc4NDIgOS45NTYyNSAzLjE5MTY0IDkuNzk0MzIgMy42ODI2NiA5Ljc5NDMyQzQuMTg0MTMgOS43OTQzMiA0LjU5NjggOS45NTYyNSA0LjkyMDY3IDEwLjI4MDFDNS4wOTgyNyAxMC40NTc3IDUuMjIzNjQgMTAuNjUxIDUuMjk2NzcgMTAuODU5OUM1LjM4MDM1IDExLjA1ODQgNS40MjIxNCAxMS4yODMxIDUuNDIyMTQgMTEuNTMzOEM1LjQyMjE0IDExLjc4NDUgNS4zODAzNSAxMi4wMTQ0IDUuMjk2NzcgMTIuMjIzM0M1LjIyMzY0IDEyLjQyMTggNS4xMTM5NCAxMi42MDk5IDQuOTY3NjggMTIuNzg3NVpcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBcIiNEM0QzRDNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgIV92bS5pc0xpY2Vuc2VBY3RpdmF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbX3ZtLl92KFwiQWN0aXZhdGUgTGljZW5zZVwiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmlzTGljZW5zZUFjdGl2YXRlZFxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJEZWFjdGl2YXRlIExpY2Vuc2VcIildKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAhX3ZtLmlzTGljZW5zZUFjdGl2YXRlZFxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZ28tcHJvLWJhbm5lclwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJnby1wcm8tYmFubmVyX19zdWJ0aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiRmVhdHVyZXMgJiBJbnRlZ3JhdGlvbnMgXCIpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImdvLXByby1iYW5uZXJfX3RpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJFeHRlbmQgZnVuY3Rpb25hbGl0eSB3aXRoIFBSTyBBZGRvbnNcIilcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImN4LXZ1aS1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdvLXByby1iYW5uZXJfX2J1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvbi1zdHlsZVwiOiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IFwibWluaVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBfdm0uZ29Qcm9MaW5rLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0YWctbmFtZVwiOiBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogXCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IGF0dHJzOiB7IHNsb3Q6IFwibGFiZWxcIiB9LCBzbG90OiBcImxhYmVsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJHbyBQcm9cIildKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgMCAhPT0gT2JqZWN0LmtleXMoX3ZtLmluc3RhbGxlZEFkZG9uTGlzdCkubGVuZ3RoXG4gICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImpmYi1hZGRvbnNcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImpmYi1hZGRvbnNfX2xpc3RcIiB9LFxuICAgICAgICAgICAgICAgIF92bS5fbChfdm0uaW5zdGFsbGVkQWRkb25MaXN0LCBmdW5jdGlvbihhZGRvbkRhdGEsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJBZGRvbkl0ZW1cIiwge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImFkZG9uLWRhdGFcIjogYWRkb25EYXRhIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIDAgIT09IE9iamVjdC5rZXlzKF92bS5hdmFpbGFibGVBZGRvbkxpc3QpLmxlbmd0aFxuICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJqZmItYWRkb25zXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX20oMSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJqZmItYWRkb25zX19saXN0XCIgfSxcbiAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmF2YWlsYWJsZUFkZG9uTGlzdCwgZnVuY3Rpb24oYWRkb25EYXRhLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwiQWRkb25JdGVtXCIsIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJhZGRvbi1kYXRhXCI6IGFkZG9uRGF0YSB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJjeC12dWktcG9wdXBcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImpmYi1hZGRvbnMtcGFnZV9fbGljZW5zZS1wb3B1cFwiLFxuICAgICAgICAgIGF0dHJzOiB7IGZvb3RlcjogZmFsc2UsIFwiYm9keS13aWR0aFwiOiBcIjU0MHB4XCIgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5saWNlbnNlUG9wdXBWaXNpYmxlLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0ubGljZW5zZVBvcHVwVmlzaWJsZSA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwibGljZW5zZVBvcHVwVmlzaWJsZVwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjeC12dWktcG9wdXBfX2hlYWRlci10aXRsZVwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBzbG90OiBcInRpdGxlXCIgfSxcbiAgICAgICAgICAgICAgc2xvdDogXCJ0aXRsZVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAhX3ZtLmlzTGljZW5zZUFjdGl2YXRlZFxuICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJBY3RpdmF0ZSBMaWNlbnNlXCIpXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uaXNMaWNlbnNlQWN0aXZhdGVkXG4gICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW192bS5fdihcIkRlYWN0aXZhdGUgTGljZW5zZVwiKV0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImpmYi1hZGRvbnMtcGFnZV9fbGljZW5zZS1mb3JtXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNsb3Q6IFwiY29udGVudFwiIH0sXG4gICAgICAgICAgICAgIHNsb3Q6IFwiY29udGVudFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAhX3ZtLmlzTGljZW5zZUFjdGl2YXRlZFxuICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIFwiQWN0aXZhdGUgbGljZW5zZSBmb3IgYXV0b21hdGljIHVwZGF0ZXMgYW5kIGF3ZXNvbWUgc3VwcG9ydFwiXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLmlzTGljZW5zZUFjdGl2YXRlZFxuICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIFwiQnkgZGVhY3RpdmF0aW5nIHRoZSBsaWNlbnNlIHlvdSB3aWxsIG5vdCBiZSBhYmxlIHRvIHVwZGF0ZSB0aGUgYWRkb25zXCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImN4LXZ1aS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiamZiLWFkZG9ucy1wYWdlX19saWNlbnNlLWlucHV0XCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHNpemU6IFwiZnVsbHdpZHRoXCIsXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICBhdXRvZm9jdXM6IHRydWUsXG4gICAgICAgICAgICAgICAgICBcInByZXZlbnQtd3JhcFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiSnVzdCBwYXN0ZSBpdCBoZXJlXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmxpY2Vuc2VLZXksXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS5saWNlbnNlS2V5ID0gJCR2XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJsaWNlbnNlS2V5XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImN4LXZ1aS1idXR0b25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJqZmItYWRkb25zLXBhZ2VfX2xpY2Vuc2UtYWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBcImJ1dHRvbi1zdHlsZVwiOiBcImFjY2VudFwiLFxuICAgICAgICAgICAgICAgICAgICBzaXplOiBcIm1pbmlcIixcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogX3ZtLmxpY2Vuc2VQcm9jY2VzaW5nU3RhdGVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmxpY2Vuc2VBY3Rpb24gfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgYXR0cnM6IHsgc2xvdDogXCJsYWJlbFwiIH0sIHNsb3Q6IFwibGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICFfdm0uaXNMaWNlbnNlQWN0aXZhdGVkXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW192bS5fdihcIkFjdGl2YXRlXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uaXNMaWNlbnNlQWN0aXZhdGVkXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW192bS5fdihcIkRlYWN0aXZhdGVcIildKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImpmYi1hZGRvbnNfX2hlYWRlclwiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImN4LXZ1aS1zdWJ0aXRsZVwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiWW91ciBJbnN0YWxsZWQgQWRkb25zXCIpXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiamZiLWFkZG9uc19faGVhZGVyXCIgfSwgW1xuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiY3gtdnVpLXN1YnRpdGxlXCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCJBbGwgQXZhaWxhYmxlIEFkZG9uc1wiKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJqZmItYWRkb25zX19pdGVtXCIsXG4gICAgICBjbGFzczoge1xuICAgICAgICBhY3RpdmF0ZWQ6IF92bS5hZGRvbkRhdGEuaXNBY3RpdmF0ZWQsXG4gICAgICAgIFwidXBkYXRlLWF2YWxpYWJsZVwiOiBfdm0udXBkYXRlQWN0aW9uQXZhbGlhYmxlXG4gICAgICB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImpmYi1hZGRvbnNfX2l0ZW0taW5uZXJcIixcbiAgICAgICAgICBjbGFzczogeyBcInByb2NjZXNpbmctc3RhdGVcIjogX3ZtLnByb2NjZXNpbmdTdGF0ZSB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImpmYi1hZGRvbnNfX2l0ZW0tdGh1bWJcIiB9LCBbXG4gICAgICAgICAgICAhX3ZtLmFkZG9uRGF0YS5pc0luc3RhbGxlZFxuICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHJvLWJhZGdlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwic3ZnXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiNDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIyMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveDogXCIwIDAgNDAgMjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwicmVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI0MFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcng6IFwiNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBcIiNFRTdCMTZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJwYXRoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJNMTAuNjI1IDEwLjgzMDFWMTRIOS4xNDI1OFY1LjQ2ODc1SDEyLjQwNjJDMTMuMzU5NCA1LjQ2ODc1IDE0LjExNTIgNS43MTY4IDE0LjY3MzggNi4yMTI4OUMxNS4yMzYzIDYuNzA4OTggMTUuNTE3NiA3LjM2NTIzIDE1LjUxNzYgOC4xODE2NEMxNS41MTc2IDkuMDE3NTggMTUuMjQyMiA5LjY2Nzk3IDE0LjY5MTQgMTAuMTMyOEMxNC4xNDQ1IDEwLjU5NzcgMTMuMzc3IDEwLjgzMDEgMTIuMzg4NyAxMC44MzAxSDEwLjYyNVpNMTAuNjI1IDkuNjQwNjJIMTIuNDA2MkMxMi45MzM2IDkuNjQwNjIgMTMuMzM1OSA5LjUxNzU4IDEzLjYxMzMgOS4yNzE0OEMxMy44OTA2IDkuMDIxNDggMTQuMDI5MyA4LjY2MjExIDE0LjAyOTMgOC4xOTMzNkMxNC4wMjkzIDcuNzMyNDIgMTMuODg4NyA3LjM2NTIzIDEzLjYwNzQgNy4wOTE4QzEzLjMyNjIgNi44MTQ0NSAxMi45Mzk1IDYuNjcxODggMTIuNDQ3MyA2LjY2NDA2SDEwLjYyNVY5LjY0MDYyWk0xOS45NTMxIDEwLjcxMjlIMTguMzAwOFYxNEgxNi44MTg0VjUuNDY4NzVIMTkuODE4NEMyMC44MDI3IDUuNDY4NzUgMjEuNTYyNSA1LjY4OTQ1IDIyLjA5NzcgNi4xMzA4NkMyMi42MzI4IDYuNTcyMjcgMjIuOTAwNCA3LjIxMDk0IDIyLjkwMDQgOC4wNDY4OEMyMi45MDA0IDguNjE3MTkgMjIuNzYxNyA5LjA5NTcgMjIuNDg0NCA5LjQ4MjQyQzIyLjIxMDkgOS44NjUyMyAyMS44MjgxIDEwLjE2MDIgMjEuMzM1OSAxMC4zNjcyTDIzLjI1MiAxMy45MjM4VjE0SDIxLjY2NDFMMTkuOTUzMSAxMC43MTI5Wk0xOC4zMDA4IDkuNTIzNDRIMTkuODI0MkMyMC4zMjQyIDkuNTIzNDQgMjAuNzE0OCA5LjM5ODQ0IDIwLjk5NjEgOS4xNDg0NEMyMS4yNzczIDguODk0NTMgMjEuNDE4IDguNTQ4ODMgMjEuNDE4IDguMTExMzNDMjEuNDE4IDcuNjU0MyAyMS4yODcxIDcuMzAwNzggMjEuMDI1NCA3LjA1MDc4QzIwLjc2NzYgNi44MDA3OCAyMC4zODA5IDYuNjcxODggMTkuODY1MiA2LjY2NDA2SDE4LjMwMDhWOS41MjM0NFpNMzEuMTE1MiA5Ljk1NzAzQzMxLjExNTIgMTAuNzkzIDMwLjk3MDcgMTEuNTI3MyAzMC42ODE2IDEyLjE2MDJDMzAuMzkyNiAxMi43ODkxIDI5Ljk3ODUgMTMuMjczNCAyOS40Mzk1IDEzLjYxMzNDMjguOTA0MyAxMy45NDkyIDI4LjI4NzEgMTQuMTE3MiAyNy41ODc5IDE0LjExNzJDMjYuODk2NSAxNC4xMTcyIDI2LjI3OTMgMTMuOTQ5MiAyNS43MzYzIDEzLjYxMzNDMjUuMTk3MyAxMy4yNzM0IDI0Ljc3OTMgMTIuNzkxIDI0LjQ4MjQgMTIuMTY2QzI0LjE4OTUgMTEuNTQxIDI0LjA0MSAxMC44MjAzIDI0LjAzNzEgMTAuMDAzOVY5LjUyMzQ0QzI0LjAzNzEgOC42OTE0MSAyNC4xODM2IDcuOTU3MDMgMjQuNDc2NiA3LjMyMDMxQzI0Ljc3MzQgNi42ODM1OSAyNS4xODk1IDYuMTk3MjcgMjUuNzI0NiA1Ljg2MTMzQzI2LjI2MzcgNS41MjE0OCAyNi44ODA5IDUuMzUxNTYgMjcuNTc2MiA1LjM1MTU2QzI4LjI3MTUgNS4zNTE1NiAyOC44ODY3IDUuNTE5NTMgMjkuNDIxOSA1Ljg1NTQ3QzI5Ljk2MDkgNi4xODc1IDMwLjM3NyA2LjY2Nzk3IDMwLjY2OTkgNy4yOTY4OEMzMC45NjI5IDcuOTIxODggMzEuMTExMyA4LjY1MDM5IDMxLjExNTIgOS40ODI0MlY5Ljk1NzAzWk0yOS42MzI4IDkuNTExNzJDMjkuNjMyOCA4LjU2NjQxIDI5LjQ1MzEgNy44NDE4IDI5LjA5MzggNy4zMzc4OUMyOC43MzgzIDYuODMzOTggMjguMjMyNCA2LjU4MjAzIDI3LjU3NjIgNi41ODIwM0MyNi45MzU1IDYuNTgyMDMgMjYuNDMzNiA2LjgzMzk4IDI2LjA3MDMgNy4zMzc4OUMyNS43MTA5IDcuODM3ODkgMjUuNTI3MyA4LjU0Njg4IDI1LjUxOTUgOS40NjQ4NFY5Ljk1NzAzQzI1LjUxOTUgMTAuODk0NSAyNS43MDEyIDExLjYxOTEgMjYuMDY0NSAxMi4xMzA5QzI2LjQzMTYgMTIuNjQyNiAyNi45Mzk1IDEyLjg5ODQgMjcuNTg3OSAxMi44OTg0QzI4LjI0NDEgMTIuODk4NCAyOC43NDggMTIuNjQ4NCAyOS4wOTk2IDEyLjE0ODRDMjkuNDU1MSAxMS42NDg0IDI5LjYzMjggMTAuOTE4IDI5LjYzMjggOS45NTcwM1Y5LjUxMTcyWlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBcIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogX3ZtLmFkZG9uRGF0YS50aHVtYiwgYWx0OiBcIlwiIH0gfSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiamZiLWFkZG9uc19faXRlbS1pbmZvXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJqZmItYWRkb25zX19pdGVtLW5hbWVcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImxhYmVsXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmFkZG9uRGF0YS5uYW1lKSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInZlcnNpb25cIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uYWRkb25EYXRhLmN1cnJlbnRWZXJzaW9uKSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiamZiLWFkZG9uc19faXRlbS11cGRhdGVcIiB9LCBbXG4gICAgICAgICAgICAgICFfdm0udXBkYXRlQWN0aW9uQXZhbGlhYmxlXG4gICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCBbX3ZtLl92KFwiWW91ciBwbHVnaW4gaXMgdXAgdG8gZGF0ZVwiKV0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLnVwZGF0ZUFjdGlvbkF2YWxpYWJsZVxuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHRcXHRWZXJzaW9uIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsYXRlc3QtdmVyc2lvblwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmFkZG9uRGF0YS52ZXJzaW9uKSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgYXZhaWxhYmxlXFxuXFx0XFx0XFx0XFx0XFx0XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICFfdm0uYWN0aXZhdGVMaWNlbmNlQWN0aW9uQXZhbGlhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY3gtdnVpLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uLXN0eWxlXCI6IFwibGluay1hY2NlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCJsaW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IF92bS51cGRhdGVQbHVnaW5Qcm9jZXNzZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnVwZGF0ZVBsdWdpbiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgc2xvdDogXCJsYWJlbFwiIH0sIHNsb3Q6IFwibGFiZWxcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJVcGRhdGUgTm93XCIpXSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uYWN0aXZhdGVMaWNlbmNlQWN0aW9uQXZhbGlhYmxlXG4gICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJqZmItYWRkb25zX19pdGVtLWxpY2Vuc2VcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIkxpY2Vuc2Ugbm90IGFjdGl2YXRlZFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImN4LXZ1aS1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImJ1dHRvbi1zdHlsZVwiOiBcImxpbmstYWNjZW50XCIsIHNpemU6IFwibGlua1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmFjdGl2YXRlTGljZW5zZSB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgc2xvdDogXCJsYWJlbFwiIH0sIHNsb3Q6IFwibGFiZWxcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJBY3RpdmF0ZSBOb3dcIildKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiamZiLWFkZG9uc19faXRlbS1kZXNjXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5hZGRvbkRhdGEuZGVzYykgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogX3ZtLmxlYXJuTW9yZVVybCwgdGFyZ2V0OiBcIl9ibGFua1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIkxlYXJuIE1vcmVcIilcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImpmYi1hZGRvbnNfX2l0ZW0tYWN0aW9uc1wiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0uaW5zdGFsbEFjdGlvbkF2YWxpYWJsZVxuICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImN4LXZ1aS1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvbi1zdHlsZVwiOiBcImxpbmstYWNjZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IFwibGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBfdm0uYWN0aW9uUGx1Z2luUHJvY2Vzc2VkXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5pbnN0YWxsUGx1Z2luIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBzbG90OiBcImxhYmVsXCIgfSwgc2xvdDogXCJsYWJlbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcInNwYW5cIiwgW192bS5fdihcIkluc3RhbGwgQWRkb25cIildKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uYWN0aXZhdGVBY3Rpb25BdmFsaWFibGVcbiAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJjeC12dWktYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b24tc3R5bGVcIjogXCJsaW5rLWFjY2VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBcImxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogX3ZtLmFjdGlvblBsdWdpblByb2Nlc3NlZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uYWN0aXZhdGVQbHVnaW4gfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNsb3Q6IFwibGFiZWxcIiB9LCBzbG90OiBcImxhYmVsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwic3BhblwiLCBbX3ZtLl92KFwiQWN0aXZhdGUgQWRkb25cIildKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uZGVhY3RpdmF0ZUFjdGlvbkF2YWxpYWJsZVxuICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImN4LXZ1aS1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvbi1zdHlsZVwiOiBcImxpbmstZXJyb3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCJsaW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IF92bS5hY3Rpb25QbHVnaW5Qcm9jZXNzZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmRlYWN0aXZhdGVQbHVnaW4gfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNsb3Q6IFwibGFiZWxcIiB9LCBzbG90OiBcImxhYmVsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwic3BhblwiLCBbX3ZtLl92KFwiRGVhY3RpdmF0ZSBBZGRvblwiKV0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXVxuICAgICAgKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyLCAvKiBzZXJ2ZXIgb25seSAqL1xuICBzaGFkb3dNb2RlIC8qIHZ1ZS1jbGkgb25seSAqL1xuKSB7XG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gJ2RhdGEtdi0nICsgc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICAob3B0aW9ucy5mdW5jdGlvbmFsID8gdGhpcy5wYXJlbnQgOiB0aGlzKS4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290XG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIDogaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb25hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FkZG9uc1BhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI3MjVkZDg3YVwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FkZG9uc1BhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRkb25zUGFnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRkb25JdGVtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiZTZmYmY5NDJcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BZGRvbkl0ZW0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRkb25JdGVtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuICBNb2RpZmllZCBieSBFdmFuIFlvdSBAeXl4OTkwODAzXG4qL1xuXG5pbXBvcnQgbGlzdFRvU3R5bGVzIGZyb20gJy4vbGlzdFRvU3R5bGVzJ1xuXG52YXIgaGFzRG9jdW1lbnQgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG5cbmlmICh0eXBlb2YgREVCVUcgIT09ICd1bmRlZmluZWQnICYmIERFQlVHKSB7XG4gIGlmICghaGFzRG9jdW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ3Z1ZS1zdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudC4gJyArXG4gICAgXCJVc2UgeyB0YXJnZXQ6ICdub2RlJyB9IGluIHlvdXIgV2VicGFjayBjb25maWcgdG8gaW5kaWNhdGUgYSBzZXJ2ZXItcmVuZGVyaW5nIGVudmlyb25tZW50LlwiXG4gICkgfVxufVxuXG4vKlxudHlwZSBTdHlsZU9iamVjdCA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgcGFydHM6IEFycmF5PFN0eWxlT2JqZWN0UGFydD5cbn1cblxudHlwZSBTdHlsZU9iamVjdFBhcnQgPSB7XG4gIGNzczogc3RyaW5nO1xuICBtZWRpYTogc3RyaW5nO1xuICBzb3VyY2VNYXA6ID9zdHJpbmdcbn1cbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHsvKlxuICBbaWQ6IG51bWJlcl06IHtcbiAgICBpZDogbnVtYmVyLFxuICAgIHJlZnM6IG51bWJlcixcbiAgICBwYXJ0czogQXJyYXk8KG9iaj86IFN0eWxlT2JqZWN0UGFydCkgPT4gdm9pZD5cbiAgfVxuKi99XG5cbnZhciBoZWFkID0gaGFzRG9jdW1lbnQgJiYgKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSlcbnZhciBzaW5nbGV0b25FbGVtZW50ID0gbnVsbFxudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwXG52YXIgaXNQcm9kdWN0aW9uID0gZmFsc2VcbnZhciBub29wID0gZnVuY3Rpb24gKCkge31cbnZhciBvcHRpb25zID0gbnVsbFxudmFyIHNzcklkS2V5ID0gJ2RhdGEtdnVlLXNzci1pZCdcblxuLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4vLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG52YXIgaXNPbGRJRSA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIC9tc2llIFs2LTldXFxiLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkU3R5bGVzQ2xpZW50IChwYXJlbnRJZCwgbGlzdCwgX2lzUHJvZHVjdGlvbiwgX29wdGlvbnMpIHtcbiAgaXNQcm9kdWN0aW9uID0gX2lzUHJvZHVjdGlvblxuXG4gIG9wdGlvbnMgPSBfb3B0aW9ucyB8fCB7fVxuXG4gIHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIGxpc3QpXG4gIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG4gICAgdmFyIG1heVJlbW92ZSA9IFtdXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgICAgZG9tU3R5bGUucmVmcy0tXG4gICAgICBtYXlSZW1vdmUucHVzaChkb21TdHlsZSlcbiAgICB9XG4gICAgaWYgKG5ld0xpc3QpIHtcbiAgICAgIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbmV3TGlzdClcbiAgICAgIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzID0gW11cbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXVxuICAgICAgaWYgKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKClcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMgLyogQXJyYXk8U3R5bGVPYmplY3Q+ICovKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgZG9tU3R5bGUucmVmcysrXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pXG4gICAgICB9XG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIGlmIChkb21TdHlsZS5wYXJ0cy5sZW5ndGggPiBpdGVtLnBhcnRzLmxlbmd0aCkge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5sZW5ndGggPSBpdGVtLnBhcnRzLmxlbmd0aFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGFydHMgPSBbXVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHsgaWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0cyB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAoKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gIHN0eWxlRWxlbWVudC50eXBlID0gJ3RleHQvY3NzJ1xuICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudClcbiAgcmV0dXJuIHN0eWxlRWxlbWVudFxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICB2YXIgdXBkYXRlLCByZW1vdmVcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlWycgKyBzc3JJZEtleSArICd+PVwiJyArIG9iai5pZCArICdcIl0nKVxuXG4gIGlmIChzdHlsZUVsZW1lbnQpIHtcbiAgICBpZiAoaXNQcm9kdWN0aW9uKSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBhbmQgaW4gcHJvZHVjdGlvbiBtb2RlLlxuICAgICAgLy8gc2ltcGx5IGRvIG5vdGhpbmcuXG4gICAgICByZXR1cm4gbm9vcFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBidXQgaW4gZGV2IG1vZGUuXG4gICAgICAvLyBmb3Igc29tZSByZWFzb24gQ2hyb21lIGNhbid0IGhhbmRsZSBzb3VyY2UgbWFwIGluIHNlcnZlci1yZW5kZXJlZFxuICAgICAgLy8gc3R5bGUgdGFncyAtIHNvdXJjZSBtYXBzIGluIDxzdHlsZT4gb25seSB3b3JrcyBpZiB0aGUgc3R5bGUgdGFnIGlzXG4gICAgICAvLyBjcmVhdGVkIGFuZCBpbnNlcnRlZCBkeW5hbWljYWxseS4gU28gd2UgcmVtb3ZlIHRoZSBzZXJ2ZXIgcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlcyBhbmQgaW5qZWN0IG5ldyBvbmVzLlxuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIGlmIChpc09sZElFKSB7XG4gICAgLy8gdXNlIHNpbmdsZXRvbiBtb2RlIGZvciBJRTkuXG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKytcbiAgICBzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KCkpXG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpXG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSlcbiAgfSBlbHNlIHtcbiAgICAvLyB1c2UgbXVsdGktc3R5bGUtdGFnIG1vZGUgaW4gYWxsIG90aGVyIGNhc2VzXG4gICAgc3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KClcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KVxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICB1cGRhdGUob2JqKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG4gICAgICAgICAgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcbiAgICAgICAgICBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iailcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKClcbiAgICB9XG4gIH1cbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnRcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKVxuICB9XG59KSgpXG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3NcblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcylcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcylcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSlcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGVFbGVtZW50LCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3NcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwXG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSlcbiAgfVxuICBpZiAob3B0aW9ucy5zc3JJZCkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoc3NySWRLZXksIG9iai5pZClcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXApIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RldnRvb2xzL2RvY3MvamF2YXNjcmlwdC1kZWJ1Z2dpbmdcbiAgICAvLyB0aGlzIG1ha2VzIHNvdXJjZSBtYXBzIGluc2lkZSBzdHlsZSB0YWdzIHdvcmsgcHJvcGVybHkgaW4gQ2hyb21lXG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlVVJMPScgKyBzb3VyY2VNYXAuc291cmNlc1swXSArICcgKi8nXG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJyArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyAnICovJ1xuICB9XG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzc1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKVxuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSlcbiAgfVxufVxuIiwiLyoqXG4gKiBUcmFuc2xhdGVzIHRoZSBsaXN0IGZvcm1hdCBwcm9kdWNlZCBieSBjc3MtbG9hZGVyIGludG8gc29tZXRoaW5nXG4gKiBlYXNpZXIgdG8gbWFuaXB1bGF0ZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChwYXJlbnRJZCwgbGlzdCkge1xuICB2YXIgc3R5bGVzID0gW11cbiAgdmFyIG5ld1N0eWxlcyA9IHt9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXVxuICAgIHZhciBpZCA9IGl0ZW1bMF1cbiAgICB2YXIgY3NzID0gaXRlbVsxXVxuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl1cbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXVxuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgaWQ6IHBhcmVudElkICsgJzonICsgaSxcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9XG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0geyBpZDogaWQsIHBhcnRzOiBbcGFydF0gfSlcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpXG4gICAgfVxuICB9XG4gIHJldHVybiBzdHlsZXNcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQWRkb25zUGFnZSBmcm9tICcuL0FkZG9uc1BhZ2UnO1xyXG5cclxuY29uc3QgeyByZW5kZXJDdXJyZW50UGFnZSB9ID0gd2luZG93LkpldEZCQWN0aW9ucztcclxuXHJcbnJlbmRlckN1cnJlbnRQYWdlKCBBZGRvbnNQYWdlICk7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzSUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBZkE7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUE1Q0E7QUE4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFaQTtBQUNBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBdERBO0FBd0RBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUF4Q0E7QUEwQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBN0xBO0FBMUVBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBOUNBO0FBaURBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQVJBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQTdEQTtBQStEQTtBQS9GQTtBQTlEQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7O0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFrQkE7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWtCQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7QUN4Q0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7QTs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7O0FDNVRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7OztBQ2xPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7OztBQ25HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7O0FDL05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7OztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFFQTtBQUVBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=