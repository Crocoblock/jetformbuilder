/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-addons/AddonsPage.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-addons/AddonsPage.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
window.jfbEventBus = new Vue();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'jfb-addons',
  components: {
    AddonItem: _components_AddonItem_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data() {
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
  mounted: function () {
    window.jfbEventBus.$on('updateAddonData', this.updateAddonData);
    window.jfbEventBus.$on('showLicensePopup', this.showLicensePopup);
  },
  computed: {
    isLicenseMode() {
      return '' !== window.JetFBPageConfig.licenseMode ? true : false;
    },
    isLicenseActivated() {
      return 0 !== this.licenseList.length;
    },
    licenseActionType() {
      return !this.isLicenseActivated ? 'activate_license' : 'deactivate_license';
    },
    installedAddonList() {
      let installedAddonsList = {};
      for (let addonSlug in this.allAddons) {
        if (this.allAddons[addonSlug]['isInstalled']) {
          installedAddonsList[addonSlug] = this.allAddons[addonSlug];
        }
      }
      return installedAddonsList;
    },
    availableAddonList() {
      let availableAddonList = {};
      for (let addonSlug in this.allAddons) {
        if (!this.allAddons[addonSlug]['isInstalled']) {
          availableAddonList[addonSlug] = this.allAddons[addonSlug];
        }
      }
      return availableAddonList;
    },
    goProLink() {
      let pricingPageUrl = this.miscInfo.pricingPageUrl,
        utmParams = this.getUtmParamsString({
          utm_source: `plugin`,
          utm_medium: 'addons',
          utm_campaign: 'go-pro-button',
          utm_content: `license-not-activated/${this.themeInfo.authorSlug}`
        });
      return `${pricingPageUrl}?${utmParams}`;
    }
  },
  methods: {
    showLicensePopup() {
      this.licensePopupVisible = true;
    },
    updateAddonData(data) {
      let slug = data.slug,
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
    licenseAction() {
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
          nonce: window.JetFBPageConfig.nonce,
          data: {
            license: self.licenseKey,
            action: self.licenseActionType
          }
        },
        beforeSend: (jqXHR, ajaxSettings) => {
          if (null !== self.licenseAjaxAction) {
            self.licenseAjaxAction.abort();
          }
        },
        success: (responce, textStatus, jqXHR) => {
          self.licenseProccesingState = false;
          if (responce.success) {
            self.$CXNotice.add({
              message: responce.message,
              type: 'success',
              duration: 4000
            });
            let licenseData = responce.data;
            licenseData['license_key'] = self.licenseKey;
            switch (self.licenseActionType) {
              case 'activate_license':
                self.licenseList.push(licenseData);
                break;
              case 'deactivate_license':
                self.licenseList = self.licenseList.filter(licenseData => {
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
    checkPluginsUpdate: function () {
      var self = this;
      self.checkUpdatesAction = jQuery.ajax({
        type: 'POST',
        url: window.JetFBPageConfig.ajaxUrl,
        dataType: 'json',
        data: {
          action: 'jfb_license_service_action',
          nonce: window.JetFBPageConfig.nonce,
          data: {
            action: 'check-plugin-update'
          }
        },
        beforeSend: (jqXHR, ajaxSettings) => {
          if (null !== self.checkUpdatesAction) {
            self.checkUpdatesAction.abort();
          }
          self.checkUpdatesProcessed = true;
        },
        success: function (responce, textStatus, jqXHR) {
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
    addLicense(licenseData) {
      this.licenseList.push(licenseData);
      self.proccesingState = true;
      setTimeout(function () {
        window.location.reload();
      }, 3000);
    },
    removeLicense(licenceKey) {
      let removingIndex = false;
      for (let licenceIndex in this.licenseList) {
        let licenseData = this.licenseList[licenceIndex];
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
    getUtmParamsString(data = {}) {
      let utmString = false;
      if (0 === Object.keys(data).length) {
        return utmString;
      }
      utmString = Object.keys(data).map(key => {
        return [key, data[key]].map(encodeURIComponent).join('=');
      }).join('&');
      return utmString;
    }
  }
});

/***/ }),

/***/ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-addons/components/AddonItem.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-addons/components/AddonItem.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'addon-item',
  props: {
    addonData: Object
  },
  data() {
    return {
      actionPlugin: false,
      actionPluginRequest: null,
      actionPluginProcessed: false,
      updatePluginProcessed: false
    };
  },
  computed: {
    classList: function () {
      return ['jfb-addons__item', this.updateAvaliable ? 'update-avaliable' : false, this.activateAvaliable ? 'activate-avaliable' : false];
    },
    learnMoreAvaliable() {
      return !this.$parent.isLicenseActivated ? true : false;
    },
    activateLicenceActionAvaliable() {
      return !this.$parent.isLicenseActivated && this.$parent.isLicenseMode ? true : false;
    },
    installActionAvaliable() {
      return !this.addonData['isInstalled'] && this.$parent.isLicenseActivated ? true : false;
    },
    activateActionAvaliable() {
      return this.addonData['isInstalled'] && !this.addonData['isActivated'] ? true : false;
    },
    deactivateActionAvaliable() {
      return this.addonData['isInstalled'] && this.addonData['isActivated'] ? true : false;
    },
    updateAvaliable() {
      return this.addonData['updateAvaliable'] ? true : false;
    },
    isLicenseMode() {
      return this.$parent.isLicenseMode;
    },
    proccesingState() {
      return this.actionPluginProcessed || this.updatePluginProcessed;
    },
    learnMoreUrl() {
      const license = this.$parent.isLicenseActivated ? 'jetformbuilder-license' : 'license-not-activated';
      const [campaign] = this.addonData.slug.split('/');
      let demoUrl = this.addonData.demo,
        utmParams = this.$parent.getUtmParamsString({
          utm_source: `plugin`,
          utm_medium: 'addons',
          utm_campaign: campaign.replace('jet-form-builder-', ''),
          utm_content: `${license}/${this.$parent.themeInfo.authorSlug}`
        });
      return `${demoUrl}?${utmParams}`;
    }
  },
  methods: {
    activateLicense() {
      window.jfbEventBus.$emit('showLicensePopup');
    },
    installPlugin() {
      this.actionPlugin = 'install';
      this.pluginAction();
    },
    deactivatePlugin() {
      this.actionPlugin = 'deactivate';
      this.pluginAction();
    },
    activatePlugin() {
      this.actionPlugin = 'activate';
      this.pluginAction();
    },
    updatePlugin() {
      if (this.updateAvaliable) {
        this.actionPlugin = 'update';
        this.pluginAction();
      }
    },
    pluginAction: function () {
      let self = this;
      self.actionPluginRequest = jQuery.ajax({
        type: 'POST',
        url: window.JetFBPageConfig.ajaxUrl,
        dataType: 'json',
        data: {
          action: `jfb_addon_${self.actionPlugin}_action`,
          nonce: window.JetFBPageConfig.nonce,
          data: {
            plugin: self.addonData['slug']
          }
        },
        beforeSend: function (jqXHR, ajaxSettings) {
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
        success: function (responce, textStatus, jqXHR) {
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
        },
        error: function (jqXHR, textStatus, errorThrown) {
          self.$CXNotice.add({
            message: errorThrown,
            type: 'error',
            duration: 4000
          });
        },
        complete: () => this.onEndRequest()
      });
    },
    onEndRequest() {
      switch (this.actionPlugin) {
        case 'install':
        case 'activate':
        case 'deactivate':
          this.actionPluginProcessed = false;
          break;
        case 'update':
          this.updatePluginProcessed = false;
          break;
      }
    }
  }
});

/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-addons/AddonsPage.vue?vue&type=style&index=0&id=5e249d0e&lang=scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-addons/AddonsPage.vue?vue&type=style&index=0&id=5e249d0e&lang=scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.proccesing-state {
  opacity: 0.5;
  pointer-events: none;
}
.jfb-addons-page__inner {
  padding: 30px;
  height: 100%;
}
.jfb-addons-page__header {
  margin-bottom: 30px;
}
.jfb-addons-page__header-controls {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 15px;
  border-bottom: 1px solid #DCDCDD;
}
.jfb-addons-page__header-controls > .cx-vui-button {
  margin-left: 10px;
}
.jfb-addons-page .cx-vui-button {
  font-size: 13px;
  font-weight: 400;
  background-color: transparent;
}
.jfb-addons-page .cx-vui-button .button-icon {
  margin-right: 5px;
}
.jfb-addons-page .cx-vui-button--style-accent {
  color: #007cba;
  box-shadow: inset 0 0 0 1px #007cba;
}
.jfb-addons-page .cx-vui-button--style-accent:hover {
  background-color: rgba(0, 124, 186, 0.0705882353);
}
.jfb-addons-page .cx-vui-button--style-accent .button-icon path {
  fill: #007cba;
}
.jfb-addons-page .cx-vui-button--style-danger {
  color: #d6336c;
  box-shadow: inset 0 0 0 1px #d6336c;
}
.jfb-addons-page .cx-vui-button--style-danger:hover {
  background-color: rgba(214, 51, 108, 0.0705882353);
}
.jfb-addons-page .cx-vui-button--style-danger .button-icon path {
  fill: #d6336c;
}
.jfb-addons-page .cx-vui-button__content > span {
  display: flex;
  justify-content: center;
  align-items: center;
}
.jfb-addons-page .cx-vui-popup__header {
  padding-bottom: 15px;
  border-bottom: 1px solid #DCDCDD;
  margin-bottom: 30px;
}
.jfb-addons-page .cx-vui-popup__header-title {
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: #23282D;
}
.jfb-addons-page__license-form {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
}
.jfb-addons-page__license-form > span {
  margin-bottom: 10px;
}
.jfb-addons-page__license-input {
  margin-bottom: 10px;
}
.jfb-addons-page .go-pro-banner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px 0;
  border-bottom: 1px solid #DCDCDD;
}
.jfb-addons-page .go-pro-banner__subtitle {
  font-size: 18px;
  line-height: 1.25;
  font-weight: 500;
  color: #007CBA;
  margin-bottom: 5px;
}
.jfb-addons-page .go-pro-banner__title {
  font-size: 24px;
  line-height: 1.25;
  font-weight: 500;
  color: #23282D;
  margin-bottom: 20px;
}
.jfb-addons-page .go-pro-banner__button {
  color: white;
  background-color: #007CBA;
}`, "",{"version":3,"sources":["webpack://./admin/pages/jfb-addons/AddonsPage.vue","webpack://./../AddonsPage.vue"],"names":[],"mappings":"AAwaA;EACC,YAAA;EACA,oBAAA;ACvaD;AD2aC;EACC,aAAA;EACA,YAAA;ACxaF;AD2aC;EACC,mBAAA;ACzaF;AD4aC;EACC,aAAA;EACA,yBAAA;EACA,mBAAA;EACA,oBAAA;EACA,gCAAA;AC1aF;AD4aE;EACC,iBAAA;AC1aH;AD8aC;EACC,eAAA;EACA,gBAAA;EACA,6BAAA;AC5aF;AD8aE;EACC,iBAAA;AC5aH;AD+aE;EACC,cAAA;EACA,mCAAA;AC7aH;AD+aG;EACC,iDAAA;AC7aJ;ADibI;EACC,aAAA;AC/aL;ADobE;EACC,cAAA;EACA,mCAAA;AClbH;ADobG;EACC,kDAAA;AClbJ;ADsbI;EACC,aAAA;ACpbL;AD0bG;EACC,aAAA;EACA,uBAAA;EACA,mBAAA;ACxbJ;AD8bE;EACC,oBAAA;EACA,gCAAA;EACA,mBAAA;AC5bH;AD+bE;EACC,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cAAA;AC7bH;ADocC;EACC,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,oBAAA;AClcF;ADocE;EACC,mBAAA;AClcH;ADscC;EACC,mBAAA;ACpcF;ADucC;EACC,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;EACA,gCAAA;ACrcF;ADucE;EACC,eAAA;EACA,iBAAA;EACA,gBAAA;EACA,cAAA;EACA,kBAAA;ACrcH;ADwcE;EACC,eAAA;EACA,iBAAA;EACA,gBAAA;EACA,cAAA;EACA,mBAAA;ACtcH;ADycE;EACC,YAAA;EACA,yBAAA;ACvcH","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.proccesing-state {\n\topacity: 0.5;\n\tpointer-events: none;\n}\n\n.jfb-addons-page {\n\t&__inner {\n\t\tpadding: 30px;\n\t\theight: 100%;\n\t}\n\n\t&__header {\n\t\tmargin-bottom: 30px;\n\t}\n\n\t&__header-controls {\n\t\tdisplay: flex;\n\t\tjustify-content: flex-end;\n\t\talign-items: center;\n\t\tpadding-bottom: 15px;\n\t\tborder-bottom: 1px solid #DCDCDD;\n\n\t\t> .cx-vui-button {\n\t\t\tmargin-left: 10px;\n\t\t}\n\t}\n\n\t.cx-vui-button {\n\t\tfont-size: 13px;\n\t\tfont-weight: 400;\n\t\tbackground-color: transparent;\n\n\t\t.button-icon {\n\t\t\tmargin-right: 5px;\n\t\t}\n\n\t\t&--style-accent {\n\t\t\tcolor: #007cba;\n\t\t\tbox-shadow: inset 0 0 0 1px #007cba;\n\n\t\t\t&:hover {\n\t\t\t\tbackground-color: #007cba12;\n\t\t\t}\n\n\t\t\t.button-icon {\n\t\t\t\tpath {\n\t\t\t\t\tfill: #007cba;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t&--style-danger {\n\t\t\tcolor: #d6336c;\n\t\t\tbox-shadow: inset 0 0 0 1px #d6336c;\n\n\t\t\t&:hover {\n\t\t\t\tbackground-color: #d6336c12;\n\t\t\t}\n\n\t\t\t.button-icon {\n\t\t\t\tpath {\n\t\t\t\t\tfill: #d6336c;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t&__content {\n\t\t\t> span {\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: center;\n\t\t\t\talign-items: center;\n\t\t\t}\n\t\t}\n\t}\n\n\t.cx-vui-popup {\n\t\t&__header {\n\t\t\tpadding-bottom: 15px;\n\t\t\tborder-bottom: 1px solid #DCDCDD;\n\t\t\tmargin-bottom: 30px;\n\t\t}\n\n\t\t&__header-title {\n\t\t\tfont-weight: 500;\n\t\t\tfont-size: 24px;\n\t\t\tline-height: 36px;\n\t\t\tcolor: #23282D;\n\t\t}\n\t}\n\n\t&__license-popup {\n\t}\n\n\t&__license-form {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tjustify-content: flex-start;\n\t\talign-items: stretch;\n\n\t\t> span {\n\t\t\tmargin-bottom: 10px;\n\t\t}\n\t}\n\n\t&__license-input {\n\t\tmargin-bottom: 10px;\n\t}\n\n\t.go-pro-banner {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tpadding: 24px 0;\n\t\tborder-bottom: 1px solid #DCDCDD;\n\n\t\t&__subtitle {\n\t\t\tfont-size: 18px;\n\t\t\tline-height: 1.25;\n\t\t\tfont-weight: 500;\n\t\t\tcolor: #007CBA;\n\t\t\tmargin-bottom: 5px;\n\t\t}\n\n\t\t&__title {\n\t\t\tfont-size: 24px;\n\t\t\tline-height: 1.25;\n\t\t\tfont-weight: 500;\n\t\t\tcolor: #23282D;\n\t\t\tmargin-bottom: 20px;\n\t\t}\n\n\t\t&__button {\n\t\t\tcolor: white;\n\t\t\tbackground-color: #007CBA;\n\t\t}\n\t}\n}\n\n",".proccesing-state {\n  opacity: 0.5;\n  pointer-events: none;\n}\n\n.jfb-addons-page__inner {\n  padding: 30px;\n  height: 100%;\n}\n.jfb-addons-page__header {\n  margin-bottom: 30px;\n}\n.jfb-addons-page__header-controls {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  padding-bottom: 15px;\n  border-bottom: 1px solid #DCDCDD;\n}\n.jfb-addons-page__header-controls > .cx-vui-button {\n  margin-left: 10px;\n}\n.jfb-addons-page .cx-vui-button {\n  font-size: 13px;\n  font-weight: 400;\n  background-color: transparent;\n}\n.jfb-addons-page .cx-vui-button .button-icon {\n  margin-right: 5px;\n}\n.jfb-addons-page .cx-vui-button--style-accent {\n  color: #007cba;\n  box-shadow: inset 0 0 0 1px #007cba;\n}\n.jfb-addons-page .cx-vui-button--style-accent:hover {\n  background-color: rgba(0, 124, 186, 0.0705882353);\n}\n.jfb-addons-page .cx-vui-button--style-accent .button-icon path {\n  fill: #007cba;\n}\n.jfb-addons-page .cx-vui-button--style-danger {\n  color: #d6336c;\n  box-shadow: inset 0 0 0 1px #d6336c;\n}\n.jfb-addons-page .cx-vui-button--style-danger:hover {\n  background-color: rgba(214, 51, 108, 0.0705882353);\n}\n.jfb-addons-page .cx-vui-button--style-danger .button-icon path {\n  fill: #d6336c;\n}\n.jfb-addons-page .cx-vui-button__content > span {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.jfb-addons-page .cx-vui-popup__header {\n  padding-bottom: 15px;\n  border-bottom: 1px solid #DCDCDD;\n  margin-bottom: 30px;\n}\n.jfb-addons-page .cx-vui-popup__header-title {\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 36px;\n  color: #23282D;\n}\n.jfb-addons-page__license-form {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: stretch;\n}\n.jfb-addons-page__license-form > span {\n  margin-bottom: 10px;\n}\n.jfb-addons-page__license-input {\n  margin-bottom: 10px;\n}\n.jfb-addons-page .go-pro-banner {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 24px 0;\n  border-bottom: 1px solid #DCDCDD;\n}\n.jfb-addons-page .go-pro-banner__subtitle {\n  font-size: 18px;\n  line-height: 1.25;\n  font-weight: 500;\n  color: #007CBA;\n  margin-bottom: 5px;\n}\n.jfb-addons-page .go-pro-banner__title {\n  font-size: 24px;\n  line-height: 1.25;\n  font-weight: 500;\n  color: #23282D;\n  margin-bottom: 20px;\n}\n.jfb-addons-page .go-pro-banner__button {\n  color: white;\n  background-color: #007CBA;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-addons/components/AddonItem.vue?vue&type=style&index=0&id=b50743b4&lang=scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-addons/components/AddonItem.vue?vue&type=style&index=0&id=b50743b4&lang=scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.jfb-addons {
  margin-bottom: 50px;
}
.jfb-addons:last-child {
  margin-bottom: 0;
}
.jfb-addons a {
  color: #007cba;
}
.jfb-addons__header {
  margin-bottom: 20px;
}
.jfb-addons__list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
}
@media (max-width: 1140px) {
.jfb-addons__list {
    grid-template-columns: repeat(2, 1fr);
}
}
.jfb-addons__item {
  transition: box-shadow 0.3s ease-out;
  border-radius: 10px;
}
.jfb-addons__item:hover {
  box-shadow: 0px 4px 28px rgba(15, 23, 42, 0.1);
}
.jfb-addons__item.activated .jfb-addons__item-info {
  background-color: white;
}
.jfb-addons__item.update-avaliable .jfb-addons__item-name .version {
  background-color: #D6336C;
}
.jfb-addons__item.update-avaliable .jfb-addons__item-update .latest-version {
  color: white;
  background-color: #46B450;
  padding: 2px 8px;
  border-radius: 4px;
}
.jfb-addons__item-inner {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100%;
}
.jfb-addons__item-thumb {
  border-radius: 10px 10px 0 0;
  line-height: 0;
  overflow: hidden;
  position: relative;
}
.jfb-addons__item-thumb .pro-badge {
  position: absolute;
  top: 12px;
  left: 12px;
}
.jfb-addons__item-thumb img {
  width: 100%;
  height: auto;
}
.jfb-addons__item-info {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex: 1 1 auto;
  padding: 20px;
  border-radius: 0 0 10px 10px;
  border-width: 0 1px 1px 1px;
  border-color: #DCDCDD;
  border-style: solid;
  background-color: white;
}
.jfb-addons__item-name {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
}
.jfb-addons__item-name .label {
  font-size: 20px;
  font-weight: 700;
  line-height: 1.25;
}
.jfb-addons__item-name .version {
  padding: 1px 8px;
  border-radius: 4px;
  color: white;
  background-color: #46B450;
  margin-left: 10px;
}
.jfb-addons__item-update {
  color: #7b7e81;
  margin-bottom: 10px;
}
.jfb-addons__item-license {
  margin-bottom: 10px;
  color: #7b7e81;
}
.jfb-addons__item-license .cx-vui-button {
  margin-left: 3px;
}
.jfb-addons__item-desc {
  flex: 1 1 auto;
}
.jfb-addons__item-desc a {
  text-decoration: none;
}
.jfb-addons__item-actions {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
}
.jfb-addons__item-actions:empty {
  display: none;
}
.jfb-addons__item-actions .cx-vui-button {
  margin-right: 20px;
}`, "",{"version":3,"sources":["webpack://./admin/pages/jfb-addons/components/AddonItem.vue","webpack://./../AddonItem.vue"],"names":[],"mappings":"AAkTA;EACC,mBAAA;ACjTD;ADmTC;EACC,gBAAA;ACjTF;ADoTC;EACC,cAAA;AClTF;ADqTC;EACC,mBAAA;ACnTF;ADsTC;EACC,aAAA;EACA,qCAAA;EACA,SAAA;ACpTF;ADsTE;AALD;IAME,qCAAA;ACnTD;AACF;ADsTC;EACC,oCAAA;EACA,mBAAA;ACpTF;ADsTE;EACC,8CAAA;ACpTH;ADwTG;EACC,uBAAA;ACtTJ;AD4TI;EACC,yBAAA;AC1TL;AD+TI;EACC,YAAA;EACA,yBAAA;EACA,gBAAA;EACA,kBAAA;AC7TL;ADmUC;EACC,aAAA;EACA,sBAAA;EACA,oBAAA;EACA,YAAA;ACjUF;ADoUC;EACC,4BAAA;EACA,cAAA;EACA,gBAAA;EACA,kBAAA;AClUF;ADoUE;EACC,kBAAA;EACA,SAAA;EACA,UAAA;AClUH;ADqUE;EACC,WAAA;EACA,YAAA;ACnUH;ADuUC;EACC,aAAA;EACA,sBAAA;EACA,oBAAA;EACA,cAAA;EACA,aAAA;EACA,4BAAA;EACA,2BAAA;EACA,qBAAA;EACA,mBAAA;EACA,uBAAA;ACrUF;ADwUC;EACC,aAAA;EACA,8BAAA;EACA,uBAAA;EACA,mBAAA;ACtUF;ADwUE;EACC,eAAA;EACA,gBAAA;EACA,iBAAA;ACtUH;ADyUE;EACC,gBAAA;EACA,kBAAA;EACA,YAAA;EACA,yBAAA;EACA,iBAAA;ACvUH;AD2UC;EACC,cAAA;EACA,mBAAA;ACzUF;AD4UC;EACC,mBAAA;EACA,cAAA;AC1UF;AD4UE;EACC,gBAAA;AC1UH;AD8UC;EACC,cAAA;AC5UF;AD8UE;EACC,qBAAA;AC5UH;ADgVC;EACC,aAAA;EACA,2BAAA;EACA,mBAAA;EACA,eAAA;EACA,gBAAA;AC9UF;ADgVE;EACC,aAAA;AC9UH;ADiVE;EACC,kBAAA;AC/UH","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.jfb-addons {\n\tmargin-bottom: 50px;\n\n\t&:last-child {\n\t\tmargin-bottom: 0;\n\t}\n\n\ta {\n\t\tcolor: #007cba;\n\t}\n\n\t&__header {\n\t\tmargin-bottom: 20px;\n\t}\n\n\t&__list {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: repeat(4, 1fr);\n\t\tgap: 40px;\n\n\t\t@media (max-width: 1140px) {\n\t\t\tgrid-template-columns: repeat(2, 1fr);\n\t\t}\n\t}\n\n\t&__item {\n\t\ttransition: box-shadow .3s ease-out;\n\t\tborder-radius: 10px;\n\n\t\t&:hover {\n\t\t\tbox-shadow: 0px 4px 28px rgba(15, 23, 42, 0.1);\n\t\t}\n\n\t\t&.activated {\n\t\t\t.jfb-addons__item-info {\n\t\t\t\tbackground-color: white;\n\t\t\t}\n\t\t}\n\n\t\t&.update-avaliable {\n\t\t\t.jfb-addons__item-name {\n\t\t\t\t.version {\n\t\t\t\t\tbackground-color: #D6336C;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t.jfb-addons__item-update {\n\t\t\t\t.latest-version {\n\t\t\t\t\tcolor: white;\n\t\t\t\t\tbackground-color: #46B450;\n\t\t\t\t\tpadding: 2px 8px;\n\t\t\t\t\tborder-radius: 4px;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t&__item-inner {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: stretch;\n\t\theight: 100%;\n\t}\n\n\t&__item-thumb {\n\t\tborder-radius: 10px 10px 0 0;\n\t\tline-height: 0;\n\t\toverflow: hidden;\n\t\tposition: relative;\n\n\t\t.pro-badge {\n\t\t\tposition: absolute;\n\t\t\ttop: 12px;\n\t\t\tleft: 12px;\n\t\t}\n\n\t\timg {\n\t\t\twidth: 100%;\n\t\t\theight: auto;\n\t\t}\n\t}\n\n\t&__item-info {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: stretch;\n\t\tflex: 1 1 auto;\n\t\tpadding: 20px;\n\t\tborder-radius: 0 0 10px 10px;\n\t\tborder-width: 0 1px 1px 1px;\n\t\tborder-color: #DCDCDD;\n\t\tborder-style: solid;\n\t\tbackground-color: white;\n\t}\n\n\t&__item-name {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\talign-items: flex-start;\n\t\tmargin-bottom: 10px;\n\n\t\t.label {\n\t\t\tfont-size: 20px;\n\t\t\tfont-weight: 700;\n\t\t\tline-height: 1.25;\n\t\t}\n\n\t\t.version {\n\t\t\tpadding: 1px 8px;\n\t\t\tborder-radius: 4px;\n\t\t\tcolor: white;\n\t\t\tbackground-color: #46B450;\n\t\t\tmargin-left: 10px;\n\t\t}\n\t}\n\n\t&__item-update {\n\t\tcolor: #7b7e81;\n\t\tmargin-bottom: 10px;\n\t}\n\n\t&__item-license {\n\t\tmargin-bottom: 10px;\n\t\tcolor: #7b7e81;\n\n\t\t.cx-vui-button {\n\t\t\tmargin-left: 3px;\n\t\t}\n\t}\n\n\t&__item-desc {\n\t\tflex: 1 1 auto;\n\n\t\ta {\n\t\t\ttext-decoration: none;\n\t\t}\n\t}\n\n\t&__item-actions {\n\t\tdisplay: flex;\n\t\tjustify-content: flex-start;\n\t\talign-items: center;\n\t\tflex-wrap: wrap;\n\t\tmargin-top: 20px;\n\n\t\t&:empty {\n\t\t\tdisplay: none;\n\t\t}\n\n\t\t.cx-vui-button {\n\t\t\tmargin-right: 20px;\n\t\t}\n\t}\n}\n\n",".jfb-addons {\n  margin-bottom: 50px;\n}\n.jfb-addons:last-child {\n  margin-bottom: 0;\n}\n.jfb-addons a {\n  color: #007cba;\n}\n.jfb-addons__header {\n  margin-bottom: 20px;\n}\n.jfb-addons__list {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 40px;\n}\n@media (max-width: 1140px) {\n  .jfb-addons__list {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.jfb-addons__item {\n  transition: box-shadow 0.3s ease-out;\n  border-radius: 10px;\n}\n.jfb-addons__item:hover {\n  box-shadow: 0px 4px 28px rgba(15, 23, 42, 0.1);\n}\n.jfb-addons__item.activated .jfb-addons__item-info {\n  background-color: white;\n}\n.jfb-addons__item.update-avaliable .jfb-addons__item-name .version {\n  background-color: #D6336C;\n}\n.jfb-addons__item.update-avaliable .jfb-addons__item-update .latest-version {\n  color: white;\n  background-color: #46B450;\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n.jfb-addons__item-inner {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  height: 100%;\n}\n.jfb-addons__item-thumb {\n  border-radius: 10px 10px 0 0;\n  line-height: 0;\n  overflow: hidden;\n  position: relative;\n}\n.jfb-addons__item-thumb .pro-badge {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n}\n.jfb-addons__item-thumb img {\n  width: 100%;\n  height: auto;\n}\n.jfb-addons__item-info {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  flex: 1 1 auto;\n  padding: 20px;\n  border-radius: 0 0 10px 10px;\n  border-width: 0 1px 1px 1px;\n  border-color: #DCDCDD;\n  border-style: solid;\n  background-color: white;\n}\n.jfb-addons__item-name {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 10px;\n}\n.jfb-addons__item-name .label {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.25;\n}\n.jfb-addons__item-name .version {\n  padding: 1px 8px;\n  border-radius: 4px;\n  color: white;\n  background-color: #46B450;\n  margin-left: 10px;\n}\n.jfb-addons__item-update {\n  color: #7b7e81;\n  margin-bottom: 10px;\n}\n.jfb-addons__item-license {\n  margin-bottom: 10px;\n  color: #7b7e81;\n}\n.jfb-addons__item-license .cx-vui-button {\n  margin-left: 3px;\n}\n.jfb-addons__item-desc {\n  flex: 1 1 auto;\n}\n.jfb-addons__item-desc a {\n  text-decoration: none;\n}\n.jfb-addons__item-actions {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-top: 20px;\n}\n.jfb-addons__item-actions:empty {\n  display: none;\n}\n.jfb-addons__item-actions .cx-vui-button {\n  margin-right: 20px;\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _AddonsPage_vue_vue_type_template_id_5e249d0e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddonsPage.vue?vue&type=template&id=5e249d0e */ "./admin/pages/jfb-addons/AddonsPage.vue?vue&type=template&id=5e249d0e");
/* harmony import */ var _AddonsPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddonsPage.vue?vue&type=script&lang=js */ "./admin/pages/jfb-addons/AddonsPage.vue?vue&type=script&lang=js");
/* harmony import */ var _AddonsPage_vue_vue_type_style_index_0_id_5e249d0e_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddonsPage.vue?vue&type=style&index=0&id=5e249d0e&lang=scss */ "./admin/pages/jfb-addons/AddonsPage.vue?vue&type=style&index=0&id=5e249d0e&lang=scss");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AddonsPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddonsPage_vue_vue_type_template_id_5e249d0e__WEBPACK_IMPORTED_MODULE_0__.render,
  _AddonsPage_vue_vue_type_template_id_5e249d0e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
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
/* harmony import */ var _AddonItem_vue_vue_type_template_id_b50743b4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddonItem.vue?vue&type=template&id=b50743b4 */ "./admin/pages/jfb-addons/components/AddonItem.vue?vue&type=template&id=b50743b4");
/* harmony import */ var _AddonItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddonItem.vue?vue&type=script&lang=js */ "./admin/pages/jfb-addons/components/AddonItem.vue?vue&type=script&lang=js");
/* harmony import */ var _AddonItem_vue_vue_type_style_index_0_id_b50743b4_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddonItem.vue?vue&type=style&index=0&id=b50743b4&lang=scss */ "./admin/pages/jfb-addons/components/AddonItem.vue?vue&type=style&index=0&id=b50743b4&lang=scss");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AddonItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddonItem_vue_vue_type_template_id_b50743b4__WEBPACK_IMPORTED_MODULE_0__.render,
  _AddonItem_vue_vue_type_template_id_b50743b4__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
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

/***/ "./admin/pages/jfb-addons/AddonsPage.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./admin/pages/jfb-addons/AddonsPage.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonsPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddonsPage.vue?vue&type=script&lang=js */ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-addons/AddonsPage.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonsPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./admin/pages/jfb-addons/components/AddonItem.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./admin/pages/jfb-addons/components/AddonItem.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddonItem.vue?vue&type=script&lang=js */ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-addons/components/AddonItem.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./admin/pages/jfb-addons/AddonsPage.vue?vue&type=template&id=5e249d0e":
/*!*****************************************************************************!*\
  !*** ./admin/pages/jfb-addons/AddonsPage.vue?vue&type=template&id=5e249d0e ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonsPage_vue_vue_type_template_id_5e249d0e__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonsPage_vue_vue_type_template_id_5e249d0e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonsPage_vue_vue_type_template_id_5e249d0e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddonsPage.vue?vue&type=template&id=5e249d0e */ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-addons/AddonsPage.vue?vue&type=template&id=5e249d0e");


/***/ }),

/***/ "./admin/pages/jfb-addons/components/AddonItem.vue?vue&type=template&id=b50743b4":
/*!***************************************************************************************!*\
  !*** ./admin/pages/jfb-addons/components/AddonItem.vue?vue&type=template&id=b50743b4 ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonItem_vue_vue_type_template_id_b50743b4__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonItem_vue_vue_type_template_id_b50743b4__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonItem_vue_vue_type_template_id_b50743b4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddonItem.vue?vue&type=template&id=b50743b4 */ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-addons/components/AddonItem.vue?vue&type=template&id=b50743b4");


/***/ }),

/***/ "./admin/pages/jfb-addons/AddonsPage.vue?vue&type=style&index=0&id=5e249d0e&lang=scss":
/*!********************************************************************************************!*\
  !*** ./admin/pages/jfb-addons/AddonsPage.vue?vue&type=style&index=0&id=5e249d0e&lang=scss ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonsPage_vue_vue_type_style_index_0_id_5e249d0e_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader/index.js!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddonsPage.vue?vue&type=style&index=0&id=5e249d0e&lang=scss */ "../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-addons/AddonsPage.vue?vue&type=style&index=0&id=5e249d0e&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonsPage_vue_vue_type_style_index_0_id_5e249d0e_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonsPage_vue_vue_type_style_index_0_id_5e249d0e_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonsPage_vue_vue_type_style_index_0_id_5e249d0e_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonsPage_vue_vue_type_style_index_0_id_5e249d0e_lang_scss__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./admin/pages/jfb-addons/components/AddonItem.vue?vue&type=style&index=0&id=b50743b4&lang=scss":
/*!******************************************************************************************************!*\
  !*** ./admin/pages/jfb-addons/components/AddonItem.vue?vue&type=style&index=0&id=b50743b4&lang=scss ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonItem_vue_vue_type_style_index_0_id_b50743b4_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-style-loader/index.js!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddonItem.vue?vue&type=style&index=0&id=b50743b4&lang=scss */ "../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-addons/components/AddonItem.vue?vue&type=style&index=0&id=b50743b4&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonItem_vue_vue_type_style_index_0_id_b50743b4_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonItem_vue_vue_type_style_index_0_id_b50743b4_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonItem_vue_vue_type_style_index_0_id_b50743b4_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddonItem_vue_vue_type_style_index_0_id_b50743b4_lang_scss__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-addons/AddonsPage.vue?vue&type=template&id=5e249d0e":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-addons/AddonsPage.vue?vue&type=template&id=5e249d0e ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"jfb-addons-page wrap",class:{ 'proccesing-state': _vm.proccesingState }},[_c('h1',{staticClass:"cs-vui-title"},[_vm._v(_vm._s('JetFormBuilder Addons'))]),_vm._v(" "),_c('div',{staticClass:"jfb-addons-page__inner cx-vui-panel"},[_c('div',{staticClass:"jfb-addons-page__header"},[(_vm.isLicenseMode)?_c('div',{staticClass:"jfb-addons-page__header-controls"},[_c('cx-vui-button',{attrs:{"button-style":"accent","size":"mini","loading":_vm.checkUpdatesProcessed},on:{"click":_vm.checkPluginsUpdate}},[_c('span',{attrs:{"slot":"label"},slot:"label"},[_c('svg',{staticClass:"button-icon",attrs:{"width":"14","height":"14","viewBox":"0 0 14 14","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M11.7085 2.29171C10.5001 1.08337 8.8418 0.333374 7.00013 0.333374C3.3168 0.333374 0.341797 3.31671 0.341797 7.00004C0.341797 10.6834 3.3168 13.6667 7.00013 13.6667C10.1085 13.6667 12.7001 11.5417 13.4418 8.66671H11.7085C11.0251 10.6084 9.17513 12 7.00013 12C4.2418 12 2.00013 9.75837 2.00013 7.00004C2.00013 4.24171 4.2418 2.00004 7.00013 2.00004C8.38346 2.00004 9.6168 2.57504 10.5168 3.48337L7.83346 6.16671H13.6668V0.333374L11.7085 2.29171Z","fill":"#007CBA"}})]),_vm._v(" "),_c('span',[_vm._v("Check For Updates")])])]),_vm._v(" "),_c('cx-vui-button',{class:[ !_vm.isLicenseActivated ? 'cx-vui-button--style-accent' : 'cx-vui-button--style-danger' ],attrs:{"size":"mini"},on:{"click":_vm.showLicensePopup}},[_c('span',{attrs:{"slot":"label"},slot:"label"},[_c('svg',{staticClass:"button-icon",attrs:{"width":"16","height":"16","viewBox":"0 0 16 16","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M15.4985 0H12.4897C12.4166 0 12.3487 0.0156709 12.286 0.0470127C12.2338 0.0679073 12.1867 0.104473 12.145 0.156709L5.7669 6.47209C5.62063 6.44074 5.46392 6.41463 5.29677 6.39373C5.12961 6.37284 4.96768 6.36239 4.81097 6.36239C4.16324 6.36239 3.54685 6.48776 2.9618 6.73849C2.37675 6.97878 1.85961 7.32354 1.41038 7.77277C0.961149 8.222 0.611166 8.73914 0.360431 9.32419C0.120144 9.90924 0 10.5309 0 11.189C0 11.8368 0.120144 12.4532 0.360431 13.0382C0.611166 13.6232 0.961149 14.1404 1.41038 14.5896C1.85961 15.0389 2.37675 15.3836 2.9618 15.6239C3.54685 15.8746 4.16324 16 4.81097 16C5.46915 16 6.09076 15.8746 6.67581 15.6239C7.26086 15.3836 7.778 15.0389 8.22723 14.5896C8.80183 14.015 9.19882 13.3464 9.41822 12.5837C9.64806 11.8211 9.68462 11.0375 9.52791 10.2331L10.8913 8.86974C10.9331 8.82795 10.9644 8.78093 10.9853 8.7287C11.0167 8.66601 11.0323 8.59811 11.0323 8.52498V7.02057H12.5367C12.6934 7.02057 12.8136 6.97356 12.8972 6.87953C12.9912 6.7855 13.0382 6.66536 13.0382 6.5191V5.01469H14.5426C14.6157 5.01469 14.6784 5.00424 14.7307 4.98335C14.7933 4.95201 14.8508 4.91022 14.903 4.85798L15.906 3.85504C15.9269 3.81326 15.9478 3.76624 15.9687 3.71401C15.9896 3.65132 16 3.58342 16 3.51028V0.501469C16 0.355207 15.953 0.235064 15.859 0.141038C15.7649 0.0470127 15.6448 0 15.4985 0ZM4.96768 12.7875C4.79008 12.9651 4.5968 13.0957 4.38786 13.1792C4.18936 13.2524 3.96474 13.2889 3.71401 13.2889C3.46327 13.2889 3.23343 13.2419 3.02449 13.1479C2.82599 13.0539 2.63794 12.9337 2.46033 12.7875C2.28273 12.6099 2.15214 12.4218 2.06856 12.2233C1.99543 12.0144 1.95886 11.7845 1.95886 11.5338C1.95886 11.2831 2.00588 11.0584 2.0999 10.8599C2.19393 10.651 2.31407 10.4577 2.46033 10.2801C2.7842 9.95625 3.19164 9.79432 3.68266 9.79432C4.18413 9.79432 4.5968 9.95625 4.92067 10.2801C5.09827 10.4577 5.22364 10.651 5.29677 10.8599C5.38035 11.0584 5.42214 11.2831 5.42214 11.5338C5.42214 11.7845 5.38035 12.0144 5.29677 12.2233C5.22364 12.4218 5.11394 12.6099 4.96768 12.7875Z","fill":"#D3D3D3"}})]),_vm._v(" "),(!_vm.isLicenseActivated)?_c('span',[_vm._v("Activate License")]):_vm._e(),_vm._v(" "),(_vm.isLicenseActivated)?_c('span',[_vm._v("Deactivate License")]):_vm._e()])])],1):_vm._e(),_vm._v(" "),(!_vm.isLicenseActivated)?_c('div',{staticClass:"go-pro-banner"},[_c('div',{staticClass:"go-pro-banner__subtitle"},[_vm._v("Features & Integrations")]),_vm._v(" "),_c('div',{staticClass:"go-pro-banner__title"},[_vm._v("Extend functionality with PRO Addons")]),_vm._v(" "),_c('cx-vui-button',{staticClass:"go-pro-banner__button",attrs:{"button-style":"default","size":"mini","url":_vm.goProLink,"tag-name":"a","target":"_blank"}},[_c('span',{attrs:{"slot":"label"},slot:"label"},[_c('span',[_vm._v("Go Pro")])])])],1):_vm._e()]),_vm._v(" "),(0!==Object.keys(_vm.installedAddonList).length)?_c('div',{staticClass:"jfb-addons"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"jfb-addons__list"},_vm._l((_vm.installedAddonList),function(addonData,index){return _c('AddonItem',{key:index,attrs:{"addon-data":addonData}})}),1)]):_vm._e(),_vm._v(" "),(0!==Object.keys(_vm.availableAddonList).length)?_c('div',{staticClass:"jfb-addons"},[_vm._m(1),_vm._v(" "),_c('div',{staticClass:"jfb-addons__list"},_vm._l((_vm.availableAddonList),function(addonData,index){return _c('AddonItem',{key:index,attrs:{"addon-data":addonData}})}),1)]):_vm._e()]),_vm._v(" "),_c('cx-vui-popup',{staticClass:"jfb-addons-page__license-popup",attrs:{"footer":false,"body-width":"540px"},model:{value:(_vm.licensePopupVisible),callback:function ($$v) {_vm.licensePopupVisible=$$v},expression:"licensePopupVisible"}},[_c('div',{staticClass:"cx-vui-popup__header-title",attrs:{"slot":"title"},slot:"title"},[(!_vm.isLicenseActivated)?_c('span',[_vm._v("Activate License")]):_vm._e(),_vm._v(" "),(_vm.isLicenseActivated)?_c('span',[_vm._v("Deactivate License")]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"jfb-addons-page__license-form",attrs:{"slot":"content"},slot:"content"},[(!_vm.isLicenseActivated)?_c('span',[_vm._v("Activate license for automatic updates and awesome support")]):_vm._e(),_vm._v(" "),(_vm.isLicenseActivated)?_c('span',[_vm._v("By deactivating the license you will not be able to update the addons")]):_vm._e(),_vm._v(" "),_c('cx-vui-input',{staticClass:"jfb-addons-page__license-input",attrs:{"size":"fullwidth","type":"password","autofocus":true,"prevent-wrap":true,"placeholder":"Just paste it here"},model:{value:(_vm.licenseKey),callback:function ($$v) {_vm.licenseKey=$$v},expression:"licenseKey"}}),_vm._v(" "),_c('cx-vui-button',{staticClass:"jfb-addons-page__license-action",attrs:{"button-style":"accent","size":"mini","loading":_vm.licenseProccesingState},on:{"click":_vm.licenseAction}},[_c('span',{attrs:{"slot":"label"},slot:"label"},[(!_vm.isLicenseActivated)?_c('span',[_vm._v("Activate")]):_vm._e(),_vm._v(" "),(_vm.isLicenseActivated)?_c('span',[_vm._v("Deactivate")]):_vm._e()])])],1)])],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"jfb-addons__header"},[_c('span',{staticClass:"cx-vui-subtitle"},[_vm._v("Your Installed Addons")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"jfb-addons__header"},[_c('span',{staticClass:"cx-vui-subtitle"},[_vm._v("All Available Addons")])])}]
render._withStripped = true


/***/ }),

/***/ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-addons/components/AddonItem.vue?vue&type=template&id=b50743b4":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-addons/components/AddonItem.vue?vue&type=template&id=b50743b4 ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"jfb-addons__item",class:{
		'activated': _vm.addonData.isActivated,
		'update-avaliable': _vm.updateAvaliable,
	}},[_c('div',{staticClass:"jfb-addons__item-inner",class:{ 'proccesing-state': _vm.proccesingState }},[_c('div',{staticClass:"jfb-addons__item-thumb"},[(!_vm.addonData.isInstalled)?_c('div',{staticClass:"pro-badge"},[_c('svg',{attrs:{"width":"40","height":"20","viewBox":"0 0 40 20","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('rect',{attrs:{"width":"40","height":"20","rx":"4","fill":"#EE7B16"}}),_vm._v(" "),_c('path',{attrs:{"d":"M10.625 10.8301V14H9.14258V5.46875H12.4062C13.3594 5.46875 14.1152 5.7168 14.6738 6.21289C15.2363 6.70898 15.5176 7.36523 15.5176 8.18164C15.5176 9.01758 15.2422 9.66797 14.6914 10.1328C14.1445 10.5977 13.377 10.8301 12.3887 10.8301H10.625ZM10.625 9.64062H12.4062C12.9336 9.64062 13.3359 9.51758 13.6133 9.27148C13.8906 9.02148 14.0293 8.66211 14.0293 8.19336C14.0293 7.73242 13.8887 7.36523 13.6074 7.0918C13.3262 6.81445 12.9395 6.67188 12.4473 6.66406H10.625V9.64062ZM19.9531 10.7129H18.3008V14H16.8184V5.46875H19.8184C20.8027 5.46875 21.5625 5.68945 22.0977 6.13086C22.6328 6.57227 22.9004 7.21094 22.9004 8.04688C22.9004 8.61719 22.7617 9.0957 22.4844 9.48242C22.2109 9.86523 21.8281 10.1602 21.3359 10.3672L23.252 13.9238V14H21.6641L19.9531 10.7129ZM18.3008 9.52344H19.8242C20.3242 9.52344 20.7148 9.39844 20.9961 9.14844C21.2773 8.89453 21.418 8.54883 21.418 8.11133C21.418 7.6543 21.2871 7.30078 21.0254 7.05078C20.7676 6.80078 20.3809 6.67188 19.8652 6.66406H18.3008V9.52344ZM31.1152 9.95703C31.1152 10.793 30.9707 11.5273 30.6816 12.1602C30.3926 12.7891 29.9785 13.2734 29.4395 13.6133C28.9043 13.9492 28.2871 14.1172 27.5879 14.1172C26.8965 14.1172 26.2793 13.9492 25.7363 13.6133C25.1973 13.2734 24.7793 12.791 24.4824 12.166C24.1895 11.541 24.041 10.8203 24.0371 10.0039V9.52344C24.0371 8.69141 24.1836 7.95703 24.4766 7.32031C24.7734 6.68359 25.1895 6.19727 25.7246 5.86133C26.2637 5.52148 26.8809 5.35156 27.5762 5.35156C28.2715 5.35156 28.8867 5.51953 29.4219 5.85547C29.9609 6.1875 30.377 6.66797 30.6699 7.29688C30.9629 7.92188 31.1113 8.65039 31.1152 9.48242V9.95703ZM29.6328 9.51172C29.6328 8.56641 29.4531 7.8418 29.0938 7.33789C28.7383 6.83398 28.2324 6.58203 27.5762 6.58203C26.9355 6.58203 26.4336 6.83398 26.0703 7.33789C25.7109 7.83789 25.5273 8.54688 25.5195 9.46484V9.95703C25.5195 10.8945 25.7012 11.6191 26.0645 12.1309C26.4316 12.6426 26.9395 12.8984 27.5879 12.8984C28.2441 12.8984 28.748 12.6484 29.0996 12.1484C29.4551 11.6484 29.6328 10.918 29.6328 9.95703V9.51172Z","fill":"white"}})])]):_vm._e(),_vm._v(" "),_c('img',{attrs:{"src":_vm.addonData.thumb,"alt":""}})]),_vm._v(" "),_c('div',{staticClass:"jfb-addons__item-info"},[_c('div',{staticClass:"jfb-addons__item-name"},[_c('span',{staticClass:"label"},[_vm._v(_vm._s(_vm.addonData.name))]),_vm._v(" "),_c('span',{staticClass:"version"},[_vm._v(_vm._s(_vm.addonData.currentVersion))])]),_vm._v(" "),(_vm.$parent.isLicenseActivated)?_c('div',{staticClass:"jfb-addons__item-update"},[(!_vm.updateAvaliable)?_c('div',[_vm._v("Your plugin is up to date")]):_vm._e(),_vm._v(" "),(_vm.updateAvaliable)?_c('div',[_vm._v("\n\t\t\t\t\tVersion "),_c('span',{staticClass:"latest-version"},[_vm._v(_vm._s(_vm.addonData.version))]),_vm._v(" available\n\t\t\t\t\t"),(!_vm.activateLicenceActionAvaliable && _vm.isLicenseMode)?_c('cx-vui-button',{attrs:{"button-style":"link-accent","size":"link","loading":_vm.updatePluginProcessed},on:{"click":_vm.updatePlugin}},[_c('span',{attrs:{"slot":"label"},slot:"label"},[_c('span',[_vm._v("Update Now")])])]):_vm._e()],1):_vm._e()]):_vm._e(),_vm._v(" "),(_vm.activateLicenceActionAvaliable)?_c('div',{staticClass:"jfb-addons__item-license"},[_c('span',[_vm._v("License not activated")]),_vm._v(" "),_c('cx-vui-button',{attrs:{"button-style":"link-accent","size":"link"},on:{"click":_vm.activateLicense}},[_c('span',{attrs:{"slot":"label"},slot:"label"},[_c('span',[_vm._v("Activate Now")])])])],1):_vm._e(),_vm._v(" "),_c('div',{staticClass:"jfb-addons__item-desc"},[_c('span',{domProps:{"innerHTML":_vm._s(_vm.addonData.desc)}}),_vm._v(" "),_c('a',{attrs:{"href":_vm.learnMoreUrl,"target":"_blank"}},[_vm._v("Learn More")])]),_vm._v(" "),_c('div',{staticClass:"jfb-addons__item-actions"},[(_vm.installActionAvaliable)?_c('cx-vui-button',{attrs:{"button-style":"link-accent","size":"link","loading":_vm.actionPluginProcessed},on:{"click":_vm.installPlugin}},[_c('span',{attrs:{"slot":"label"},slot:"label"},[_c('span',[_vm._v("Install Addon")])])]):_vm._e(),_vm._v(" "),(_vm.activateActionAvaliable)?_c('cx-vui-button',{attrs:{"button-style":"link-accent","size":"link","loading":_vm.actionPluginProcessed},on:{"click":_vm.activatePlugin}},[_c('span',{attrs:{"slot":"label"},slot:"label"},[_c('span',[_vm._v("Activate Addon")])])]):_vm._e(),_vm._v(" "),(_vm.deactivateActionAvaliable)?_c('cx-vui-button',{attrs:{"button-style":"link-error","size":"link","loading":_vm.actionPluginProcessed},on:{"click":_vm.deactivatePlugin}},[_c('span',{attrs:{"slot":"label"},slot:"label"},[_c('span',[_vm._v("Deactivate Addon")])])]):_vm._e()],1)])])])}
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

/***/ "../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-addons/AddonsPage.vue?vue&type=style&index=0&id=5e249d0e&lang=scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-addons/AddonsPage.vue?vue&type=style&index=0&id=5e249d0e&lang=scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddonsPage.vue?vue&type=style&index=0&id=5e249d0e&lang=scss */ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-addons/AddonsPage.vue?vue&type=style&index=0&id=5e249d0e&lang=scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "../../node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("7faba992", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-addons/components/AddonItem.vue?vue&type=style&index=0&id=b50743b4&lang=scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-addons/components/AddonItem.vue?vue&type=style&index=0&id=b50743b4&lang=scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddonItem.vue?vue&type=style&index=0&id=b50743b4&lang=scss */ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-addons/components/AddonItem.vue?vue&type=style&index=0&id=b50743b4&lang=scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "../../node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("622a1284", content, false, {});
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

const {
  renderCurrentPage
} = window.JetFBActions;
renderCurrentPage(_AddonsPage__WEBPACK_IMPORTED_MODULE_0__["default"]);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4vcGFnZXMvamZiLWFkZG9ucy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMklBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3U0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNoSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBa0JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBa0JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FLQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMvRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDN05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFFQTtBQUFBO0FBQUE7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pmYi9hZG1pbi9wYWdlcy9qZmItYWRkb25zL0FkZG9uc1BhZ2UudnVlIiwid2VicGFjazovL2pmYi9hZG1pbi9wYWdlcy9qZmItYWRkb25zL2NvbXBvbmVudHMvQWRkb25JdGVtLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItYWRkb25zL0FkZG9uc1BhZ2UudnVlP2MzODEiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLWFkZG9ucy9jb21wb25lbnRzL0FkZG9uSXRlbS52dWU/Yzk5MiIsIndlYnBhY2s6Ly9qZmIvLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9qZmIvLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLWFkZG9ucy9BZGRvbnNQYWdlLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItYWRkb25zL2NvbXBvbmVudHMvQWRkb25JdGVtLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItYWRkb25zL0FkZG9uc1BhZ2UudnVlPzAxMDUiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLWFkZG9ucy9jb21wb25lbnRzL0FkZG9uSXRlbS52dWU/ZTM3NCIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItYWRkb25zL0FkZG9uc1BhZ2UudnVlP2FiNDkiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLWFkZG9ucy9jb21wb25lbnRzL0FkZG9uSXRlbS52dWU/ZjVkMCIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItYWRkb25zL0FkZG9uc1BhZ2UudnVlP2NkZDUiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLWFkZG9ucy9jb21wb25lbnRzL0FkZG9uSXRlbS52dWU/OWRiNSIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItYWRkb25zL0FkZG9uc1BhZ2UudnVlP2YzZjciLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLWFkZG9ucy9jb21wb25lbnRzL0FkZG9uSXRlbS52dWU/ZTMwMiIsIndlYnBhY2s6Ly9qZmIvLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItYWRkb25zL0FkZG9uc1BhZ2UudnVlP2RkNTIiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLWFkZG9ucy9jb21wb25lbnRzL0FkZG9uSXRlbS52dWU/ODEyMSIsIndlYnBhY2s6Ly9qZmIvLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qcyIsIndlYnBhY2s6Ly9qZmIvLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2xpc3RUb1N0eWxlcy5qcyIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLWFkZG9ucy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cdDxkaXZcblx0XHRjbGFzcz1cImpmYi1hZGRvbnMtcGFnZSB3cmFwXCJcblx0XHQ6Y2xhc3M9XCJ7ICdwcm9jY2VzaW5nLXN0YXRlJzogcHJvY2Nlc2luZ1N0YXRlIH1cIlxuXHQ+XG5cdFx0PGgxIGNsYXNzPVwiY3MtdnVpLXRpdGxlXCI+e3sgJ0pldEZvcm1CdWlsZGVyIEFkZG9ucycgfX08L2gxPlxuXHRcdDxkaXYgY2xhc3M9XCJqZmItYWRkb25zLXBhZ2VfX2lubmVyIGN4LXZ1aS1wYW5lbFwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImpmYi1hZGRvbnMtcGFnZV9faGVhZGVyXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJqZmItYWRkb25zLXBhZ2VfX2hlYWRlci1jb250cm9sc1wiIHYtaWY9XCJpc0xpY2Vuc2VNb2RlXCI+XG5cdFx0XHRcdFx0PGN4LXZ1aS1idXR0b25cblx0XHRcdFx0XHRcdGJ1dHRvbi1zdHlsZT1cImFjY2VudFwiXG5cdFx0XHRcdFx0XHRzaXplPVwibWluaVwiXG5cdFx0XHRcdFx0XHQ6bG9hZGluZz1cImNoZWNrVXBkYXRlc1Byb2Nlc3NlZFwiXG5cdFx0XHRcdFx0XHRAY2xpY2s9XCJjaGVja1BsdWdpbnNVcGRhdGVcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxzcGFuIHNsb3Q9XCJsYWJlbFwiPlxuXHRcdFx0XHRcdFx0XHQ8c3ZnIGNsYXNzPVwiYnV0dG9uLWljb25cIiB3aWR0aD1cIjE0XCIgaGVpZ2h0PVwiMTRcIiB2aWV3Qm94PVwiMCAwIDE0IDE0XCIgZmlsbD1cIm5vbmVcIlxuXHRcdFx0XHRcdFx0XHQgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aFxuXHRcdFx0XHRcdFx0XHRcdFx0ZD1cIk0xMS43MDg1IDIuMjkxNzFDMTAuNTAwMSAxLjA4MzM3IDguODQxOCAwLjMzMzM3NCA3LjAwMDEzIDAuMzMzMzc0QzMuMzE2OCAwLjMzMzM3NCAwLjM0MTc5NyAzLjMxNjcxIDAuMzQxNzk3IDcuMDAwMDRDMC4zNDE3OTcgMTAuNjgzNCAzLjMxNjggMTMuNjY2NyA3LjAwMDEzIDEzLjY2NjdDMTAuMTA4NSAxMy42NjY3IDEyLjcwMDEgMTEuNTQxNyAxMy40NDE4IDguNjY2NzFIMTEuNzA4NUMxMS4wMjUxIDEwLjYwODQgOS4xNzUxMyAxMiA3LjAwMDEzIDEyQzQuMjQxOCAxMiAyLjAwMDEzIDkuNzU4MzcgMi4wMDAxMyA3LjAwMDA0QzIuMDAwMTMgNC4yNDE3MSA0LjI0MTggMi4wMDAwNCA3LjAwMDEzIDIuMDAwMDRDOC4zODM0NiAyLjAwMDA0IDkuNjE2OCAyLjU3NTA0IDEwLjUxNjggMy40ODMzN0w3LjgzMzQ2IDYuMTY2NzFIMTMuNjY2OFYwLjMzMzM3NEwxMS43MDg1IDIuMjkxNzFaXCJcblx0XHRcdFx0XHRcdFx0XHRcdGZpbGw9XCIjMDA3Q0JBXCIvPlxuXHRcdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHRcdFx0PHNwYW4+Q2hlY2sgRm9yIFVwZGF0ZXM8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0PC9jeC12dWktYnV0dG9uPlxuXG5cdFx0XHRcdFx0PGN4LXZ1aS1idXR0b25cblx0XHRcdFx0XHRcdDpjbGFzcz1cIlsgIWlzTGljZW5zZUFjdGl2YXRlZCA/ICdjeC12dWktYnV0dG9uLS1zdHlsZS1hY2NlbnQnIDogJ2N4LXZ1aS1idXR0b24tLXN0eWxlLWRhbmdlcicgXVwiXG5cdFx0XHRcdFx0XHRzaXplPVwibWluaVwiXG5cdFx0XHRcdFx0XHRAY2xpY2s9XCJzaG93TGljZW5zZVBvcHVwXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8c3BhbiBzbG90PVwibGFiZWxcIj5cblx0XHRcdFx0XHRcdFx0PHN2ZyBjbGFzcz1cImJ1dHRvbi1pY29uXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJub25lXCJcblx0XHRcdFx0XHRcdFx0ICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGhcblx0XHRcdFx0XHRcdFx0XHRcdGQ9XCJNMTUuNDk4NSAwSDEyLjQ4OTdDMTIuNDE2NiAwIDEyLjM0ODcgMC4wMTU2NzA5IDEyLjI4NiAwLjA0NzAxMjdDMTIuMjMzOCAwLjA2NzkwNzMgMTIuMTg2NyAwLjEwNDQ3MyAxMi4xNDUgMC4xNTY3MDlMNS43NjY5IDYuNDcyMDlDNS42MjA2MyA2LjQ0MDc0IDUuNDYzOTIgNi40MTQ2MyA1LjI5Njc3IDYuMzkzNzNDNS4xMjk2MSA2LjM3Mjg0IDQuOTY3NjggNi4zNjIzOSA0LjgxMDk3IDYuMzYyMzlDNC4xNjMyNCA2LjM2MjM5IDMuNTQ2ODUgNi40ODc3NiAyLjk2MTggNi43Mzg0OUMyLjM3Njc1IDYuOTc4NzggMS44NTk2MSA3LjMyMzU0IDEuNDEwMzggNy43NzI3N0MwLjk2MTE0OSA4LjIyMiAwLjYxMTE2NiA4LjczOTE0IDAuMzYwNDMxIDkuMzI0MTlDMC4xMjAxNDQgOS45MDkyNCAwIDEwLjUzMDkgMCAxMS4xODlDMCAxMS44MzY4IDAuMTIwMTQ0IDEyLjQ1MzIgMC4zNjA0MzEgMTMuMDM4MkMwLjYxMTE2NiAxMy42MjMyIDAuOTYxMTQ5IDE0LjE0MDQgMS40MTAzOCAxNC41ODk2QzEuODU5NjEgMTUuMDM4OSAyLjM3Njc1IDE1LjM4MzYgMi45NjE4IDE1LjYyMzlDMy41NDY4NSAxNS44NzQ2IDQuMTYzMjQgMTYgNC44MTA5NyAxNkM1LjQ2OTE1IDE2IDYuMDkwNzYgMTUuODc0NiA2LjY3NTgxIDE1LjYyMzlDNy4yNjA4NiAxNS4zODM2IDcuNzc4IDE1LjAzODkgOC4yMjcyMyAxNC41ODk2QzguODAxODMgMTQuMDE1IDkuMTk4ODIgMTMuMzQ2NCA5LjQxODIyIDEyLjU4MzdDOS42NDgwNiAxMS44MjExIDkuNjg0NjIgMTEuMDM3NSA5LjUyNzkxIDEwLjIzMzFMMTAuODkxMyA4Ljg2OTc0QzEwLjkzMzEgOC44Mjc5NSAxMC45NjQ0IDguNzgwOTMgMTAuOTg1MyA4LjcyODdDMTEuMDE2NyA4LjY2NjAxIDExLjAzMjMgOC41OTgxMSAxMS4wMzIzIDguNTI0OThWNy4wMjA1N0gxMi41MzY3QzEyLjY5MzQgNy4wMjA1NyAxMi44MTM2IDYuOTczNTYgMTIuODk3MiA2Ljg3OTUzQzEyLjk5MTIgNi43ODU1IDEzLjAzODIgNi42NjUzNiAxMy4wMzgyIDYuNTE5MVY1LjAxNDY5SDE0LjU0MjZDMTQuNjE1NyA1LjAxNDY5IDE0LjY3ODQgNS4wMDQyNCAxNC43MzA3IDQuOTgzMzVDMTQuNzkzMyA0Ljk1MjAxIDE0Ljg1MDggNC45MTAyMiAxNC45MDMgNC44NTc5OEwxNS45MDYgMy44NTUwNEMxNS45MjY5IDMuODEzMjYgMTUuOTQ3OCAzLjc2NjI0IDE1Ljk2ODcgMy43MTQwMUMxNS45ODk2IDMuNjUxMzIgMTYgMy41ODM0MiAxNiAzLjUxMDI4VjAuNTAxNDY5QzE2IDAuMzU1MjA3IDE1Ljk1MyAwLjIzNTA2NCAxNS44NTkgMC4xNDEwMzhDMTUuNzY0OSAwLjA0NzAxMjcgMTUuNjQ0OCAwIDE1LjQ5ODUgMFpNNC45Njc2OCAxMi43ODc1QzQuNzkwMDggMTIuOTY1MSA0LjU5NjggMTMuMDk1NyA0LjM4Nzg2IDEzLjE3OTJDNC4xODkzNiAxMy4yNTI0IDMuOTY0NzQgMTMuMjg4OSAzLjcxNDAxIDEzLjI4ODlDMy40NjMyNyAxMy4yODg5IDMuMjMzNDMgMTMuMjQxOSAzLjAyNDQ5IDEzLjE0NzlDMi44MjU5OSAxMy4wNTM5IDIuNjM3OTQgMTIuOTMzNyAyLjQ2MDMzIDEyLjc4NzVDMi4yODI3MyAxMi42MDk5IDIuMTUyMTQgMTIuNDIxOCAyLjA2ODU2IDEyLjIyMzNDMS45OTU0MyAxMi4wMTQ0IDEuOTU4ODYgMTEuNzg0NSAxLjk1ODg2IDExLjUzMzhDMS45NTg4NiAxMS4yODMxIDIuMDA1ODggMTEuMDU4NCAyLjA5OTkgMTAuODU5OUMyLjE5MzkzIDEwLjY1MSAyLjMxNDA3IDEwLjQ1NzcgMi40NjAzMyAxMC4yODAxQzIuNzg0MiA5Ljk1NjI1IDMuMTkxNjQgOS43OTQzMiAzLjY4MjY2IDkuNzk0MzJDNC4xODQxMyA5Ljc5NDMyIDQuNTk2OCA5Ljk1NjI1IDQuOTIwNjcgMTAuMjgwMUM1LjA5ODI3IDEwLjQ1NzcgNS4yMjM2NCAxMC42NTEgNS4yOTY3NyAxMC44NTk5QzUuMzgwMzUgMTEuMDU4NCA1LjQyMjE0IDExLjI4MzEgNS40MjIxNCAxMS41MzM4QzUuNDIyMTQgMTEuNzg0NSA1LjM4MDM1IDEyLjAxNDQgNS4yOTY3NyAxMi4yMjMzQzUuMjIzNjQgMTIuNDIxOCA1LjExMzk0IDEyLjYwOTkgNC45Njc2OCAxMi43ODc1WlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRmaWxsPVwiI0QzRDNEM1wiLz5cblx0XHRcdFx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIHYtaWY9XCIhaXNMaWNlbnNlQWN0aXZhdGVkXCI+QWN0aXZhdGUgTGljZW5zZTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PHNwYW4gdi1pZj1cImlzTGljZW5zZUFjdGl2YXRlZFwiPkRlYWN0aXZhdGUgTGljZW5zZTwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHQ8L2N4LXZ1aS1idXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0Y2xhc3M9XCJnby1wcm8tYmFubmVyXCJcblx0XHRcdFx0XHR2LWlmPVwiIWlzTGljZW5zZUFjdGl2YXRlZFwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZ28tcHJvLWJhbm5lcl9fc3VidGl0bGVcIj5GZWF0dXJlcyAmIEludGVncmF0aW9uczwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJnby1wcm8tYmFubmVyX190aXRsZVwiPkV4dGVuZCBmdW5jdGlvbmFsaXR5IHdpdGggUFJPIEFkZG9uczwvZGl2PlxuXHRcdFx0XHRcdDxjeC12dWktYnV0dG9uXG5cdFx0XHRcdFx0XHRjbGFzcz1cImdvLXByby1iYW5uZXJfX2J1dHRvblwiXG5cdFx0XHRcdFx0XHRidXR0b24tc3R5bGU9XCJkZWZhdWx0XCJcblx0XHRcdFx0XHRcdHNpemU9XCJtaW5pXCJcblx0XHRcdFx0XHRcdDp1cmw9XCJnb1Byb0xpbmtcIlxuXHRcdFx0XHRcdFx0dGFnLW5hbWU9XCJhXCJcblx0XHRcdFx0XHRcdHRhcmdldD1cIl9ibGFua1wiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PHNwYW4gc2xvdD1cImxhYmVsXCI+XG5cdFx0XHRcdFx0XHRcdDxzcGFuPkdvIFBybzwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHQ8L2N4LXZ1aS1idXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXZcblx0XHRcdFx0Y2xhc3M9XCJqZmItYWRkb25zXCJcblx0XHRcdFx0di1pZj1cIjAhPT1PYmplY3Qua2V5cyhpbnN0YWxsZWRBZGRvbkxpc3QpLmxlbmd0aFwiXG5cdFx0XHQ+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJqZmItYWRkb25zX19oZWFkZXJcIj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImN4LXZ1aS1zdWJ0aXRsZVwiPllvdXIgSW5zdGFsbGVkIEFkZG9uczwvc3Bhbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJqZmItYWRkb25zX19saXN0XCI+XG5cdFx0XHRcdFx0PEFkZG9uSXRlbVxuXHRcdFx0XHRcdFx0di1mb3I9XCIoIGFkZG9uRGF0YSwgaW5kZXggKSBpbiBpbnN0YWxsZWRBZGRvbkxpc3RcIlxuXHRcdFx0XHRcdFx0OmtleT1cImluZGV4XCJcblx0XHRcdFx0XHRcdDphZGRvbi1kYXRhPVwiYWRkb25EYXRhXCJcblx0XHRcdFx0XHQ+PC9BZGRvbkl0ZW0+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXZcblx0XHRcdFx0Y2xhc3M9XCJqZmItYWRkb25zXCJcblx0XHRcdFx0di1pZj1cIjAhPT1PYmplY3Qua2V5cyhhdmFpbGFibGVBZGRvbkxpc3QpLmxlbmd0aFwiXG5cdFx0XHQ+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJqZmItYWRkb25zX19oZWFkZXJcIj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImN4LXZ1aS1zdWJ0aXRsZVwiPkFsbCBBdmFpbGFibGUgQWRkb25zPC9zcGFuPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImpmYi1hZGRvbnNfX2xpc3RcIj5cblx0XHRcdFx0XHQ8QWRkb25JdGVtXG5cdFx0XHRcdFx0XHR2LWZvcj1cIiggYWRkb25EYXRhLCBpbmRleCApIGluIGF2YWlsYWJsZUFkZG9uTGlzdFwiXG5cdFx0XHRcdFx0XHQ6a2V5PVwiaW5kZXhcIlxuXHRcdFx0XHRcdFx0OmFkZG9uLWRhdGE9XCJhZGRvbkRhdGFcIlxuXHRcdFx0XHRcdD48L0FkZG9uSXRlbT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblxuXHRcdDxjeC12dWktcG9wdXBcblx0XHRcdGNsYXNzPVwiamZiLWFkZG9ucy1wYWdlX19saWNlbnNlLXBvcHVwXCJcblx0XHRcdHYtbW9kZWw9XCJsaWNlbnNlUG9wdXBWaXNpYmxlXCJcblx0XHRcdDpmb290ZXI9XCJmYWxzZVwiXG5cdFx0XHRib2R5LXdpZHRoPVwiNTQwcHhcIlxuXHRcdD5cblx0XHRcdDxkaXYgY2xhc3M9XCJjeC12dWktcG9wdXBfX2hlYWRlci10aXRsZVwiIHNsb3Q9XCJ0aXRsZVwiPlxuXHRcdFx0XHQ8c3BhbiB2LWlmPVwiIWlzTGljZW5zZUFjdGl2YXRlZFwiPkFjdGl2YXRlIExpY2Vuc2U8L3NwYW4+XG5cdFx0XHRcdDxzcGFuIHYtaWY9XCJpc0xpY2Vuc2VBY3RpdmF0ZWRcIj5EZWFjdGl2YXRlIExpY2Vuc2U8L3NwYW4+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJqZmItYWRkb25zLXBhZ2VfX2xpY2Vuc2UtZm9ybVwiIHNsb3Q9XCJjb250ZW50XCI+XG5cdFx0XHRcdDxzcGFuIHYtaWY9XCIhaXNMaWNlbnNlQWN0aXZhdGVkXCI+QWN0aXZhdGUgbGljZW5zZSBmb3IgYXV0b21hdGljIHVwZGF0ZXMgYW5kIGF3ZXNvbWUgc3VwcG9ydDwvc3Bhbj5cblx0XHRcdFx0PHNwYW5cblx0XHRcdFx0XHR2LWlmPVwiaXNMaWNlbnNlQWN0aXZhdGVkXCI+QnkgZGVhY3RpdmF0aW5nIHRoZSBsaWNlbnNlIHlvdSB3aWxsIG5vdCBiZSBhYmxlIHRvIHVwZGF0ZSB0aGUgYWRkb25zPC9zcGFuPlxuXHRcdFx0XHQ8Y3gtdnVpLWlucHV0XG5cdFx0XHRcdFx0Y2xhc3M9XCJqZmItYWRkb25zLXBhZ2VfX2xpY2Vuc2UtaW5wdXRcIlxuXHRcdFx0XHRcdHNpemU9XCJmdWxsd2lkdGhcIlxuXHRcdFx0XHRcdHR5cGU9XCJwYXNzd29yZFwiXG5cdFx0XHRcdFx0OmF1dG9mb2N1cz1cInRydWVcIlxuXHRcdFx0XHRcdDpwcmV2ZW50LXdyYXA9XCJ0cnVlXCJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkp1c3QgcGFzdGUgaXQgaGVyZVwiXG5cdFx0XHRcdFx0di1tb2RlbD1cImxpY2Vuc2VLZXlcIlxuXHRcdFx0XHQ+PC9jeC12dWktaW5wdXQ+XG5cdFx0XHRcdDxjeC12dWktYnV0dG9uXG5cdFx0XHRcdFx0Y2xhc3M9XCJqZmItYWRkb25zLXBhZ2VfX2xpY2Vuc2UtYWN0aW9uXCJcblx0XHRcdFx0XHRidXR0b24tc3R5bGU9XCJhY2NlbnRcIlxuXHRcdFx0XHRcdHNpemU9XCJtaW5pXCJcblx0XHRcdFx0XHQ6bG9hZGluZz1cImxpY2Vuc2VQcm9jY2VzaW5nU3RhdGVcIlxuXHRcdFx0XHRcdEBjbGljaz1cImxpY2Vuc2VBY3Rpb25cIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PHNwYW4gc2xvdD1cImxhYmVsXCI+XG5cdFx0XHRcdFx0XHQ8c3BhbiB2LWlmPVwiIWlzTGljZW5zZUFjdGl2YXRlZFwiPkFjdGl2YXRlPC9zcGFuPlxuXHRcdFx0XHRcdFx0PHNwYW4gdi1pZj1cImlzTGljZW5zZUFjdGl2YXRlZFwiPkRlYWN0aXZhdGU8L3NwYW4+XG5cdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHQ8L2N4LXZ1aS1idXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2N4LXZ1aS1wb3B1cD5cblx0PC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgQWRkb25JdGVtIGZyb20gJy4vY29tcG9uZW50cy9BZGRvbkl0ZW0udnVlJztcblxuY29uc3QgeyBhcHBseUZpbHRlcnMsIGRvQWN0aW9uIH0gPSB3cC5ob29rcztcblxud2luZG93LmpmYkV2ZW50QnVzID0gbmV3IFZ1ZSgpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdG5hbWU6ICdqZmItYWRkb25zJyxcblx0Y29tcG9uZW50czoge1xuXHRcdEFkZG9uSXRlbSxcblx0fSxcblx0ZGF0YSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0YWxsQWRkb25zOiB3aW5kb3cuSmV0RkJQYWdlQ29uZmlnLmFsbEFkZG9ucyB8fCB7fSxcblx0XHRcdGxpY2Vuc2VMaXN0OiB3aW5kb3cuSmV0RkJQYWdlQ29uZmlnLmxpY2Vuc2VMaXN0IHx8IFtdLFxuXHRcdFx0bGljZW5zZUtleTogd2luZG93LkpldEZCUGFnZUNvbmZpZy5saWNlbnNlS2V5IHx8ICcnLFxuXHRcdFx0dGhlbWVJbmZvOiB3aW5kb3cuSmV0RkJQYWdlQ29uZmlnLnRoZW1lSW5mbyB8fCBmYWxzZSxcblx0XHRcdG1pc2NJbmZvOiB3aW5kb3cuSmV0RkJQYWdlQ29uZmlnLm1pc2NJbmZvIHx8IGZhbHNlLFxuXG5cdFx0XHRsaWNlbnNlQWN0aXZhdGVkOiBmYWxzZSxcblx0XHRcdGxpY2Vuc2VQb3B1cFZpc2libGU6IGZhbHNlLFxuXHRcdFx0bGljZW5zZVByb2NjZXNpbmdTdGF0ZTogZmFsc2UsXG5cdFx0XHRsaWNlbnNlQWpheEFjdGlvbjogbnVsbCxcblxuXHRcdFx0Y2hlY2tVcGRhdGVzQWN0aW9uOiBudWxsLFxuXHRcdFx0Y2hlY2tVcGRhdGVzUHJvY2Vzc2VkOiBmYWxzZSxcblxuXHRcdFx0cHJvY2Nlc2luZ1N0YXRlOiBmYWxzZSxcblx0XHR9O1xuXHR9LFxuXHRtb3VudGVkOiBmdW5jdGlvbiAoKSB7XG5cdFx0d2luZG93LmpmYkV2ZW50QnVzLiRvbiggJ3VwZGF0ZUFkZG9uRGF0YScsIHRoaXMudXBkYXRlQWRkb25EYXRhICk7XG5cdFx0d2luZG93LmpmYkV2ZW50QnVzLiRvbiggJ3Nob3dMaWNlbnNlUG9wdXAnLCB0aGlzLnNob3dMaWNlbnNlUG9wdXAgKTtcblx0fSxcblx0Y29tcHV0ZWQ6IHtcblx0XHRpc0xpY2Vuc2VNb2RlKCkge1xuXHRcdFx0cmV0dXJuICcnICE9PSB3aW5kb3cuSmV0RkJQYWdlQ29uZmlnLmxpY2Vuc2VNb2RlID8gdHJ1ZSA6IGZhbHNlO1xuXHRcdH0sXG5cblx0XHRpc0xpY2Vuc2VBY3RpdmF0ZWQoKSB7XG5cdFx0XHRyZXR1cm4gMCAhPT0gdGhpcy5saWNlbnNlTGlzdC5sZW5ndGg7XG5cdFx0fSxcblxuXHRcdGxpY2Vuc2VBY3Rpb25UeXBlKCkge1xuXHRcdFx0cmV0dXJuICF0aGlzLmlzTGljZW5zZUFjdGl2YXRlZCA/ICdhY3RpdmF0ZV9saWNlbnNlJyA6ICdkZWFjdGl2YXRlX2xpY2Vuc2UnO1xuXHRcdH0sXG5cblx0XHRpbnN0YWxsZWRBZGRvbkxpc3QoKSB7XG5cdFx0XHRsZXQgaW5zdGFsbGVkQWRkb25zTGlzdCA9IHt9O1xuXG5cdFx0XHRmb3IgKCBsZXQgYWRkb25TbHVnIGluIHRoaXMuYWxsQWRkb25zICkge1xuXG5cdFx0XHRcdGlmICggdGhpcy5hbGxBZGRvbnNbIGFkZG9uU2x1ZyBdWyAnaXNJbnN0YWxsZWQnIF0gKSB7XG5cdFx0XHRcdFx0aW5zdGFsbGVkQWRkb25zTGlzdFsgYWRkb25TbHVnIF0gPSB0aGlzLmFsbEFkZG9uc1sgYWRkb25TbHVnIF07XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGluc3RhbGxlZEFkZG9uc0xpc3Q7XG5cdFx0fSxcblxuXHRcdGF2YWlsYWJsZUFkZG9uTGlzdCgpIHtcblx0XHRcdGxldCBhdmFpbGFibGVBZGRvbkxpc3QgPSB7fTtcblxuXHRcdFx0Zm9yICggbGV0IGFkZG9uU2x1ZyBpbiB0aGlzLmFsbEFkZG9ucyApIHtcblxuXHRcdFx0XHRpZiAoICF0aGlzLmFsbEFkZG9uc1sgYWRkb25TbHVnIF1bICdpc0luc3RhbGxlZCcgXSApIHtcblx0XHRcdFx0XHRhdmFpbGFibGVBZGRvbkxpc3RbIGFkZG9uU2x1ZyBdID0gdGhpcy5hbGxBZGRvbnNbIGFkZG9uU2x1ZyBdO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBhdmFpbGFibGVBZGRvbkxpc3Q7XG5cdFx0fSxcblxuXHRcdGdvUHJvTGluaygpIHtcblx0XHRcdGxldCBwcmljaW5nUGFnZVVybCA9IHRoaXMubWlzY0luZm8ucHJpY2luZ1BhZ2VVcmwsXG5cdFx0XHQgICAgdXRtUGFyYW1zICAgICAgPSB0aGlzLmdldFV0bVBhcmFtc1N0cmluZygge1xuXHRcdFx0XHQgICAgdXRtX3NvdXJjZTogYHBsdWdpbmAsXG5cdFx0XHRcdCAgICB1dG1fbWVkaXVtOiAnYWRkb25zJyxcblx0XHRcdFx0ICAgIHV0bV9jYW1wYWlnbjogJ2dvLXByby1idXR0b24nLFxuXHRcdFx0XHQgICAgdXRtX2NvbnRlbnQ6IGBsaWNlbnNlLW5vdC1hY3RpdmF0ZWQvJHsgdGhpcy50aGVtZUluZm8uYXV0aG9yU2x1ZyB9YCxcblx0XHRcdCAgICB9ICk7XG5cblx0XHRcdHJldHVybiBgJHsgcHJpY2luZ1BhZ2VVcmwgfT8keyB1dG1QYXJhbXMgfWA7XG5cdFx0fSxcblx0fSxcblx0bWV0aG9kczoge1xuXHRcdHNob3dMaWNlbnNlUG9wdXAoKSB7XG5cdFx0XHR0aGlzLmxpY2Vuc2VQb3B1cFZpc2libGUgPSB0cnVlO1xuXHRcdH0sXG5cblx0XHR1cGRhdGVBZGRvbkRhdGEoIGRhdGEgKSB7XG5cdFx0XHRsZXQgc2x1ZyAgICAgICAgICAgID0gZGF0YS5zbHVnLFxuXHRcdFx0ICAgIGFkZG9uRGF0YSAgICAgICA9IGRhdGEuYWRkb25EYXRhLFxuXHRcdFx0ICAgIHBsdWdpbkFjdGlvbiAgICA9IGRhdGEuYWN0aW9uLFxuXHRcdFx0ICAgIHJlbG9hZEFjdGlvbk1hcCA9IFsgJ2FjdGl2YXRlJywgJ2RlYWN0aXZhdGUnLCAndXBkYXRlJyBdO1xuXG5cdFx0XHR0aGlzLmFsbEFkZG9uc1sgc2x1ZyBdID0gT2JqZWN0LmFzc2lnbigge30sIHRoaXMuYWxsQWRkb25zWyBzbHVnIF0sIGFkZG9uRGF0YSApO1xuXG5cdFx0XHRpZiAoIHJlbG9hZEFjdGlvbk1hcC5pbmNsdWRlcyggcGx1Z2luQWN0aW9uICkgKSB7XG5cdFx0XHRcdHRoaXMucHJvY2Nlc2luZ1N0YXRlID0gdHJ1ZTtcblxuXHRcdFx0XHRzZXRUaW1lb3V0KCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuXHRcdFx0XHR9LCAxMDAwICk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdGxpY2Vuc2VBY3Rpb24oKSB7XG5cdFx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0XHRcdGlmICggJycgPT09IHRoaXMubGljZW5zZUtleSApIHtcblx0XHRcdFx0c2VsZi4kQ1hOb3RpY2UuYWRkKCB7XG5cdFx0XHRcdFx0bWVzc2FnZTogJ0xpY2Vuc2Uga2V5IGlzIG1pc3NpbmcnLFxuXHRcdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHRcdFx0ZHVyYXRpb246IDQwMDAsXG5cdFx0XHRcdH0gKTtcblxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMubGljZW5zZVByb2NjZXNpbmdTdGF0ZSA9IHRydWU7XG5cblx0XHRcdHNlbGYubGljZW5zZUFqYXhBY3Rpb24gPSBqUXVlcnkuYWpheCgge1xuXHRcdFx0XHR0eXBlOiAnUE9TVCcsXG5cdFx0XHRcdHVybDogd2luZG93LkpldEZCUGFnZUNvbmZpZy5hamF4VXJsLFxuXHRcdFx0XHRkYXRhVHlwZTogJ2pzb24nLFxuXHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0YWN0aW9uOiAnamZiX2xpY2Vuc2VfYWN0aW9uJyxcblx0XHRcdFx0XHRub25jZTogd2luZG93LkpldEZCUGFnZUNvbmZpZy5ub25jZSxcblx0XHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0XHRsaWNlbnNlOiBzZWxmLmxpY2Vuc2VLZXksXG5cdFx0XHRcdFx0XHRhY3Rpb246IHNlbGYubGljZW5zZUFjdGlvblR5cGUsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdFx0YmVmb3JlU2VuZDogKCBqcVhIUiwgYWpheFNldHRpbmdzICkgPT4ge1xuXG5cdFx0XHRcdFx0aWYgKCBudWxsICE9PSBzZWxmLmxpY2Vuc2VBamF4QWN0aW9uICkge1xuXHRcdFx0XHRcdFx0c2VsZi5saWNlbnNlQWpheEFjdGlvbi5hYm9ydCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0c3VjY2VzczogKCByZXNwb25jZSwgdGV4dFN0YXR1cywganFYSFIgKSA9PiB7XG5cdFx0XHRcdFx0c2VsZi5saWNlbnNlUHJvY2Nlc2luZ1N0YXRlID0gZmFsc2U7XG5cblx0XHRcdFx0XHRpZiAoIHJlc3BvbmNlLnN1Y2Nlc3MgKSB7XG5cdFx0XHRcdFx0XHRzZWxmLiRDWE5vdGljZS5hZGQoIHtcblx0XHRcdFx0XHRcdFx0bWVzc2FnZTogcmVzcG9uY2UubWVzc2FnZSxcblx0XHRcdFx0XHRcdFx0dHlwZTogJ3N1Y2Nlc3MnLFxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogNDAwMCxcblx0XHRcdFx0XHRcdH0gKTtcblxuXHRcdFx0XHRcdFx0bGV0IGxpY2Vuc2VEYXRhID0gcmVzcG9uY2UuZGF0YTtcblxuXHRcdFx0XHRcdFx0bGljZW5zZURhdGFbICdsaWNlbnNlX2tleScgXSA9IHNlbGYubGljZW5zZUtleTtcblxuXHRcdFx0XHRcdFx0c3dpdGNoICggc2VsZi5saWNlbnNlQWN0aW9uVHlwZSApIHtcblx0XHRcdFx0XHRcdFx0Y2FzZSAnYWN0aXZhdGVfbGljZW5zZSc6XG5cblx0XHRcdFx0XHRcdFx0XHRzZWxmLmxpY2Vuc2VMaXN0LnB1c2goIGxpY2Vuc2VEYXRhICk7XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ2RlYWN0aXZhdGVfbGljZW5zZSc6XG5cblx0XHRcdFx0XHRcdFx0XHRzZWxmLmxpY2Vuc2VMaXN0ID0gc2VsZi5saWNlbnNlTGlzdC5maWx0ZXIoICggbGljZW5zZURhdGEgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gc2VsZi5saWNlbnNlS2V5ICE9PSBsaWNlbnNlRGF0YVsgJ2xpY2Vuc2Vfa2V5JyBdO1xuXHRcdFx0XHRcdFx0XHRcdH0gKTtcblxuXHRcdFx0XHRcdFx0XHRcdHNlbGYubGljZW5zZUtleSA9ICcnO1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRzZWxmLmxpY2Vuc2VQb3B1cFZpc2libGUgPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHRzZWxmLiRDWE5vdGljZS5hZGQoIHtcblx0XHRcdFx0XHRcdFx0bWVzc2FnZTogcmVzcG9uY2UubWVzc2FnZSxcblx0XHRcdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDQwMDAsXG5cdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0fSApO1xuXHRcdH0sXG5cblx0XHRjaGVja1BsdWdpbnNVcGRhdGU6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdFx0c2VsZi5jaGVja1VwZGF0ZXNBY3Rpb24gPSBqUXVlcnkuYWpheCgge1xuXHRcdFx0XHR0eXBlOiAnUE9TVCcsXG5cdFx0XHRcdHVybDogd2luZG93LkpldEZCUGFnZUNvbmZpZy5hamF4VXJsLFxuXHRcdFx0XHRkYXRhVHlwZTogJ2pzb24nLFxuXHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0YWN0aW9uOiAnamZiX2xpY2Vuc2Vfc2VydmljZV9hY3Rpb24nLFxuXHRcdFx0XHRcdG5vbmNlOiB3aW5kb3cuSmV0RkJQYWdlQ29uZmlnLm5vbmNlLFxuXHRcdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRcdGFjdGlvbjogJ2NoZWNrLXBsdWdpbi11cGRhdGUnLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGJlZm9yZVNlbmQ6ICgganFYSFIsIGFqYXhTZXR0aW5ncyApID0+IHtcblxuXHRcdFx0XHRcdGlmICggbnVsbCAhPT0gc2VsZi5jaGVja1VwZGF0ZXNBY3Rpb24gKSB7XG5cdFx0XHRcdFx0XHRzZWxmLmNoZWNrVXBkYXRlc0FjdGlvbi5hYm9ydCgpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHNlbGYuY2hlY2tVcGRhdGVzUHJvY2Vzc2VkID0gdHJ1ZTtcblx0XHRcdFx0fSxcblx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24gKCByZXNwb25jZSwgdGV4dFN0YXR1cywganFYSFIgKSB7XG5cdFx0XHRcdFx0c2VsZi5jaGVja1VwZGF0ZXNQcm9jZXNzZWQgPSBmYWxzZTtcblxuXHRcdFx0XHRcdGlmICggcmVzcG9uY2Uuc3VjY2VzcyApIHtcblx0XHRcdFx0XHRcdHNlbGYuJENYTm90aWNlLmFkZCgge1xuXHRcdFx0XHRcdFx0XHRtZXNzYWdlOiByZXNwb25jZS5tZXNzYWdlLFxuXHRcdFx0XHRcdFx0XHR0eXBlOiAnc3VjY2VzcycsXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiA0MDAwLFxuXHRcdFx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdFx0XHRzZWxmLnByb2NjZXNpbmdTdGF0ZSA9IHRydWU7XG5cblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuXHRcdFx0XHRcdFx0fSwgMTAwMCApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdHNlbGYuJENYTm90aWNlLmFkZCgge1xuXHRcdFx0XHRcdFx0XHRtZXNzYWdlOiByZXNwb25jZS5tZXNzYWdlLFxuXHRcdFx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogNDAwMCxcblx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHR9ICk7XG5cdFx0fSxcblxuXHRcdGFkZExpY2Vuc2UoIGxpY2Vuc2VEYXRhICkge1xuXHRcdFx0dGhpcy5saWNlbnNlTGlzdC5wdXNoKCBsaWNlbnNlRGF0YSApO1xuXG5cdFx0XHRzZWxmLnByb2NjZXNpbmdTdGF0ZSA9IHRydWU7XG5cblx0XHRcdHNldFRpbWVvdXQoIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuXHRcdFx0fSwgMzAwMCApO1xuXHRcdH0sXG5cblx0XHRyZW1vdmVMaWNlbnNlKCBsaWNlbmNlS2V5ICkge1xuXG5cdFx0XHRsZXQgcmVtb3ZpbmdJbmRleCA9IGZhbHNlO1xuXG5cdFx0XHRmb3IgKCBsZXQgbGljZW5jZUluZGV4IGluIHRoaXMubGljZW5zZUxpc3QgKSB7XG5cdFx0XHRcdGxldCBsaWNlbnNlRGF0YSA9IHRoaXMubGljZW5zZUxpc3RbIGxpY2VuY2VJbmRleCBdO1xuXG5cdFx0XHRcdGlmICggbGljZW5zZURhdGFbICdsaWNlbnNlS2V5JyBdID09PSBsaWNlbmNlS2V5ICkge1xuXHRcdFx0XHRcdHJlbW92aW5nSW5kZXggPSBsaWNlbmNlSW5kZXg7XG5cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIHJlbW92aW5nSW5kZXggKSB7XG5cdFx0XHRcdHRoaXMubGljZW5zZUxpc3Quc3BsaWNlKCByZW1vdmluZ0luZGV4LCAxICk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMubGljZW5zZVBvcHVwVmlzaWJsZSA9IGZhbHNlO1xuXG5cdFx0XHRzZXRUaW1lb3V0KCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcblx0XHRcdH0sIDUwMCApO1xuXHRcdH0sXG5cblx0XHRnZXRVdG1QYXJhbXNTdHJpbmcoIGRhdGEgPSB7fSApIHtcblx0XHRcdGxldCB1dG1TdHJpbmcgPSBmYWxzZTtcblxuXHRcdFx0aWYgKCAwID09PSBPYmplY3Qua2V5cyggZGF0YSApLmxlbmd0aCApIHtcblx0XHRcdFx0cmV0dXJuIHV0bVN0cmluZztcblx0XHRcdH1cblxuXHRcdFx0dXRtU3RyaW5nID0gT2JqZWN0LmtleXMoIGRhdGEgKS5tYXAoICgga2V5ICkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gWyBrZXksIGRhdGFbIGtleSBdIF0ubWFwKCBlbmNvZGVVUklDb21wb25lbnQgKS5qb2luKCAnPScgKTtcblx0XHRcdH0gKS5qb2luKCAnJicgKTtcblxuXHRcdFx0cmV0dXJuIHV0bVN0cmluZztcblx0XHR9LFxuXHR9LFxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cblxuLnByb2NjZXNpbmctc3RhdGUge1xuXHRvcGFjaXR5OiAwLjU7XG5cdHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uamZiLWFkZG9ucy1wYWdlIHtcblx0Jl9faW5uZXIge1xuXHRcdHBhZGRpbmc6IDMwcHg7XG5cdFx0aGVpZ2h0OiAxMDAlO1xuXHR9XG5cblx0Jl9faGVhZGVyIHtcblx0XHRtYXJnaW4tYm90dG9tOiAzMHB4O1xuXHR9XG5cblx0Jl9faGVhZGVyLWNvbnRyb2xzIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRwYWRkaW5nLWJvdHRvbTogMTVweDtcblx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RDRENERDtcblxuXHRcdD4gLmN4LXZ1aS1idXR0b24ge1xuXHRcdFx0bWFyZ2luLWxlZnQ6IDEwcHg7XG5cdFx0fVxuXHR9XG5cblx0LmN4LXZ1aS1idXR0b24ge1xuXHRcdGZvbnQtc2l6ZTogMTNweDtcblx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG5cdFx0LmJ1dHRvbi1pY29uIHtcblx0XHRcdG1hcmdpbi1yaWdodDogNXB4O1xuXHRcdH1cblxuXHRcdCYtLXN0eWxlLWFjY2VudCB7XG5cdFx0XHRjb2xvcjogIzAwN2NiYTtcblx0XHRcdGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjMDA3Y2JhO1xuXG5cdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzAwN2NiYTEyO1xuXHRcdFx0fVxuXG5cdFx0XHQuYnV0dG9uLWljb24ge1xuXHRcdFx0XHRwYXRoIHtcblx0XHRcdFx0XHRmaWxsOiAjMDA3Y2JhO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ji0tc3R5bGUtZGFuZ2VyIHtcblx0XHRcdGNvbG9yOiAjZDYzMzZjO1xuXHRcdFx0Ym94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICNkNjMzNmM7XG5cblx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZDYzMzZjMTI7XG5cdFx0XHR9XG5cblx0XHRcdC5idXR0b24taWNvbiB7XG5cdFx0XHRcdHBhdGgge1xuXHRcdFx0XHRcdGZpbGw6ICNkNjMzNmM7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQmX19jb250ZW50IHtcblx0XHRcdD4gc3BhbiB7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC5jeC12dWktcG9wdXAge1xuXHRcdCZfX2hlYWRlciB7XG5cdFx0XHRwYWRkaW5nLWJvdHRvbTogMTVweDtcblx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRENEQ0REO1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMzBweDtcblx0XHR9XG5cblx0XHQmX19oZWFkZXItdGl0bGUge1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdGZvbnQtc2l6ZTogMjRweDtcblx0XHRcdGxpbmUtaGVpZ2h0OiAzNnB4O1xuXHRcdFx0Y29sb3I6ICMyMzI4MkQ7XG5cdFx0fVxuXHR9XG5cblx0Jl9fbGljZW5zZS1wb3B1cCB7XG5cdH1cblxuXHQmX19saWNlbnNlLWZvcm0ge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cdFx0YWxpZ24taXRlbXM6IHN0cmV0Y2g7XG5cblx0XHQ+IHNwYW4ge1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0XHR9XG5cdH1cblxuXHQmX19saWNlbnNlLWlucHV0IHtcblx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xuXHR9XG5cblx0LmdvLXByby1iYW5uZXIge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdHBhZGRpbmc6IDI0cHggMDtcblx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RDRENERDtcblxuXHRcdCZfX3N1YnRpdGxlIHtcblx0XHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHRcdGxpbmUtaGVpZ2h0OiAxLjI1O1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdGNvbG9yOiAjMDA3Q0JBO1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogNXB4O1xuXHRcdH1cblxuXHRcdCZfX3RpdGxlIHtcblx0XHRcdGZvbnQtc2l6ZTogMjRweDtcblx0XHRcdGxpbmUtaGVpZ2h0OiAxLjI1O1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdGNvbG9yOiAjMjMyODJEO1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMjBweDtcblx0XHR9XG5cblx0XHQmX19idXR0b24ge1xuXHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzAwN0NCQTtcblx0XHR9XG5cdH1cbn1cblxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XG5cdDxkaXZcblx0XHRjbGFzcz1cImpmYi1hZGRvbnNfX2l0ZW1cIlxuXHRcdDpjbGFzcz1cIntcblx0XHRcdCdhY3RpdmF0ZWQnOiBhZGRvbkRhdGEuaXNBY3RpdmF0ZWQsXG5cdFx0XHQndXBkYXRlLWF2YWxpYWJsZSc6IHVwZGF0ZUF2YWxpYWJsZSxcblx0XHR9XCJcblx0PlxuXHRcdDxkaXZcblx0XHRcdGNsYXNzPVwiamZiLWFkZG9uc19faXRlbS1pbm5lclwiXG5cdFx0XHQ6Y2xhc3M9XCJ7ICdwcm9jY2VzaW5nLXN0YXRlJzogcHJvY2Nlc2luZ1N0YXRlIH1cIlxuXHRcdD5cblx0XHRcdDxkaXYgY2xhc3M9XCJqZmItYWRkb25zX19pdGVtLXRodW1iXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJwcm8tYmFkZ2VcIiB2LWlmPVwiIWFkZG9uRGF0YS5pc0luc3RhbGxlZFwiPlxuXHRcdFx0XHRcdDxzdmcgd2lkdGg9XCI0MFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCA0MCAyMFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuXHRcdFx0XHRcdFx0PHJlY3Qgd2lkdGg9XCI0MFwiIGhlaWdodD1cIjIwXCIgcng9XCI0XCIgZmlsbD1cIiNFRTdCMTZcIi8+XG5cdFx0XHRcdFx0XHQ8cGF0aFxuXHRcdFx0XHRcdFx0XHRkPVwiTTEwLjYyNSAxMC44MzAxVjE0SDkuMTQyNThWNS40Njg3NUgxMi40MDYyQzEzLjM1OTQgNS40Njg3NSAxNC4xMTUyIDUuNzE2OCAxNC42NzM4IDYuMjEyODlDMTUuMjM2MyA2LjcwODk4IDE1LjUxNzYgNy4zNjUyMyAxNS41MTc2IDguMTgxNjRDMTUuNTE3NiA5LjAxNzU4IDE1LjI0MjIgOS42Njc5NyAxNC42OTE0IDEwLjEzMjhDMTQuMTQ0NSAxMC41OTc3IDEzLjM3NyAxMC44MzAxIDEyLjM4ODcgMTAuODMwMUgxMC42MjVaTTEwLjYyNSA5LjY0MDYySDEyLjQwNjJDMTIuOTMzNiA5LjY0MDYyIDEzLjMzNTkgOS41MTc1OCAxMy42MTMzIDkuMjcxNDhDMTMuODkwNiA5LjAyMTQ4IDE0LjAyOTMgOC42NjIxMSAxNC4wMjkzIDguMTkzMzZDMTQuMDI5MyA3LjczMjQyIDEzLjg4ODcgNy4zNjUyMyAxMy42MDc0IDcuMDkxOEMxMy4zMjYyIDYuODE0NDUgMTIuOTM5NSA2LjY3MTg4IDEyLjQ0NzMgNi42NjQwNkgxMC42MjVWOS42NDA2MlpNMTkuOTUzMSAxMC43MTI5SDE4LjMwMDhWMTRIMTYuODE4NFY1LjQ2ODc1SDE5LjgxODRDMjAuODAyNyA1LjQ2ODc1IDIxLjU2MjUgNS42ODk0NSAyMi4wOTc3IDYuMTMwODZDMjIuNjMyOCA2LjU3MjI3IDIyLjkwMDQgNy4yMTA5NCAyMi45MDA0IDguMDQ2ODhDMjIuOTAwNCA4LjYxNzE5IDIyLjc2MTcgOS4wOTU3IDIyLjQ4NDQgOS40ODI0MkMyMi4yMTA5IDkuODY1MjMgMjEuODI4MSAxMC4xNjAyIDIxLjMzNTkgMTAuMzY3MkwyMy4yNTIgMTMuOTIzOFYxNEgyMS42NjQxTDE5Ljk1MzEgMTAuNzEyOVpNMTguMzAwOCA5LjUyMzQ0SDE5LjgyNDJDMjAuMzI0MiA5LjUyMzQ0IDIwLjcxNDggOS4zOTg0NCAyMC45OTYxIDkuMTQ4NDRDMjEuMjc3MyA4Ljg5NDUzIDIxLjQxOCA4LjU0ODgzIDIxLjQxOCA4LjExMTMzQzIxLjQxOCA3LjY1NDMgMjEuMjg3MSA3LjMwMDc4IDIxLjAyNTQgNy4wNTA3OEMyMC43Njc2IDYuODAwNzggMjAuMzgwOSA2LjY3MTg4IDE5Ljg2NTIgNi42NjQwNkgxOC4zMDA4VjkuNTIzNDRaTTMxLjExNTIgOS45NTcwM0MzMS4xMTUyIDEwLjc5MyAzMC45NzA3IDExLjUyNzMgMzAuNjgxNiAxMi4xNjAyQzMwLjM5MjYgMTIuNzg5MSAyOS45Nzg1IDEzLjI3MzQgMjkuNDM5NSAxMy42MTMzQzI4LjkwNDMgMTMuOTQ5MiAyOC4yODcxIDE0LjExNzIgMjcuNTg3OSAxNC4xMTcyQzI2Ljg5NjUgMTQuMTE3MiAyNi4yNzkzIDEzLjk0OTIgMjUuNzM2MyAxMy42MTMzQzI1LjE5NzMgMTMuMjczNCAyNC43NzkzIDEyLjc5MSAyNC40ODI0IDEyLjE2NkMyNC4xODk1IDExLjU0MSAyNC4wNDEgMTAuODIwMyAyNC4wMzcxIDEwLjAwMzlWOS41MjM0NEMyNC4wMzcxIDguNjkxNDEgMjQuMTgzNiA3Ljk1NzAzIDI0LjQ3NjYgNy4zMjAzMUMyNC43NzM0IDYuNjgzNTkgMjUuMTg5NSA2LjE5NzI3IDI1LjcyNDYgNS44NjEzM0MyNi4yNjM3IDUuNTIxNDggMjYuODgwOSA1LjM1MTU2IDI3LjU3NjIgNS4zNTE1NkMyOC4yNzE1IDUuMzUxNTYgMjguODg2NyA1LjUxOTUzIDI5LjQyMTkgNS44NTU0N0MyOS45NjA5IDYuMTg3NSAzMC4zNzcgNi42Njc5NyAzMC42Njk5IDcuMjk2ODhDMzAuOTYyOSA3LjkyMTg4IDMxLjExMTMgOC42NTAzOSAzMS4xMTUyIDkuNDgyNDJWOS45NTcwM1pNMjkuNjMyOCA5LjUxMTcyQzI5LjYzMjggOC41NjY0MSAyOS40NTMxIDcuODQxOCAyOS4wOTM4IDcuMzM3ODlDMjguNzM4MyA2LjgzMzk4IDI4LjIzMjQgNi41ODIwMyAyNy41NzYyIDYuNTgyMDNDMjYuOTM1NSA2LjU4MjAzIDI2LjQzMzYgNi44MzM5OCAyNi4wNzAzIDcuMzM3ODlDMjUuNzEwOSA3LjgzNzg5IDI1LjUyNzMgOC41NDY4OCAyNS41MTk1IDkuNDY0ODRWOS45NTcwM0MyNS41MTk1IDEwLjg5NDUgMjUuNzAxMiAxMS42MTkxIDI2LjA2NDUgMTIuMTMwOUMyNi40MzE2IDEyLjY0MjYgMjYuOTM5NSAxMi44OTg0IDI3LjU4NzkgMTIuODk4NEMyOC4yNDQxIDEyLjg5ODQgMjguNzQ4IDEyLjY0ODQgMjkuMDk5NiAxMi4xNDg0QzI5LjQ1NTEgMTEuNjQ4NCAyOS42MzI4IDEwLjkxOCAyOS42MzI4IDkuOTU3MDNWOS41MTE3MlpcIlxuXHRcdFx0XHRcdFx0XHRmaWxsPVwid2hpdGVcIi8+XG5cdFx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8aW1nIDpzcmM9XCJhZGRvbkRhdGEudGh1bWJcIiBhbHQ9XCJcIj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cImpmYi1hZGRvbnNfX2l0ZW0taW5mb1wiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiamZiLWFkZG9uc19faXRlbS1uYW1lXCI+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJsYWJlbFwiPnt7IGFkZG9uRGF0YS5uYW1lIH19PC9zcGFuPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwidmVyc2lvblwiPnt7IGFkZG9uRGF0YS5jdXJyZW50VmVyc2lvbiB9fTwvc3Bhbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRjbGFzcz1cImpmYi1hZGRvbnNfX2l0ZW0tdXBkYXRlXCJcblx0XHRcdFx0XHR2LWlmPVwiJHBhcmVudC5pc0xpY2Vuc2VBY3RpdmF0ZWRcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PGRpdiB2LWlmPVwiIXVwZGF0ZUF2YWxpYWJsZVwiPllvdXIgcGx1Z2luIGlzIHVwIHRvIGRhdGU8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IHYtaWY9XCJ1cGRhdGVBdmFsaWFibGVcIj5cblx0XHRcdFx0XHRcdFZlcnNpb24gPHNwYW4gY2xhc3M9XCJsYXRlc3QtdmVyc2lvblwiPnt7IGFkZG9uRGF0YS52ZXJzaW9uIH19PC9zcGFuPiBhdmFpbGFibGVcblx0XHRcdFx0XHRcdDxjeC12dWktYnV0dG9uXG5cdFx0XHRcdFx0XHRcdGJ1dHRvbi1zdHlsZT1cImxpbmstYWNjZW50XCJcblx0XHRcdFx0XHRcdFx0c2l6ZT1cImxpbmtcIlxuXHRcdFx0XHRcdFx0XHQ6bG9hZGluZz1cInVwZGF0ZVBsdWdpblByb2Nlc3NlZFwiXG5cdFx0XHRcdFx0XHRcdEBjbGljaz1cInVwZGF0ZVBsdWdpblwiXG5cdFx0XHRcdFx0XHRcdHYtaWY9XCIhYWN0aXZhdGVMaWNlbmNlQWN0aW9uQXZhbGlhYmxlICYmIGlzTGljZW5zZU1vZGVcIlxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBzbG90PVwibGFiZWxcIj5cblx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5VcGRhdGUgTm93PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2N4LXZ1aS1idXR0b24+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0Y2xhc3M9XCJqZmItYWRkb25zX19pdGVtLWxpY2Vuc2VcIlxuXHRcdFx0XHRcdHYtaWY9XCJhY3RpdmF0ZUxpY2VuY2VBY3Rpb25BdmFsaWFibGVcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PHNwYW4+TGljZW5zZSBub3QgYWN0aXZhdGVkPC9zcGFuPlxuXHRcdFx0XHRcdDxjeC12dWktYnV0dG9uXG5cdFx0XHRcdFx0XHRidXR0b24tc3R5bGU9XCJsaW5rLWFjY2VudFwiXG5cdFx0XHRcdFx0XHRzaXplPVwibGlua1wiXG5cdFx0XHRcdFx0XHRAY2xpY2s9XCJhY3RpdmF0ZUxpY2Vuc2VcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxzcGFuIHNsb3Q9XCJsYWJlbFwiPlxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj5BY3RpdmF0ZSBOb3c8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0PC9jeC12dWktYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdGNsYXNzPVwiamZiLWFkZG9uc19faXRlbS1kZXNjXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxzcGFuIHYtaHRtbD1cImFkZG9uRGF0YS5kZXNjXCI+PC9zcGFuPlxuXHRcdFx0XHRcdDxhIDpocmVmPVwibGVhcm5Nb3JlVXJsXCIgdGFyZ2V0PVwiX2JsYW5rXCI+TGVhcm4gTW9yZTwvYT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJqZmItYWRkb25zX19pdGVtLWFjdGlvbnNcIj5cblxuXHRcdFx0XHRcdDxjeC12dWktYnV0dG9uXG5cdFx0XHRcdFx0XHRidXR0b24tc3R5bGU9XCJsaW5rLWFjY2VudFwiXG5cdFx0XHRcdFx0XHRzaXplPVwibGlua1wiXG5cdFx0XHRcdFx0XHQ6bG9hZGluZz1cImFjdGlvblBsdWdpblByb2Nlc3NlZFwiXG5cdFx0XHRcdFx0XHR2LWlmPVwiaW5zdGFsbEFjdGlvbkF2YWxpYWJsZVwiXG5cdFx0XHRcdFx0XHRAY2xpY2s9XCJpbnN0YWxsUGx1Z2luXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8c3BhbiBzbG90PVwibGFiZWxcIj5cblx0XHRcdFx0XHRcdFx0PHNwYW4+SW5zdGFsbCBBZGRvbjwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHQ8L2N4LXZ1aS1idXR0b24+XG5cdFx0XHRcdFx0PGN4LXZ1aS1idXR0b25cblx0XHRcdFx0XHRcdGJ1dHRvbi1zdHlsZT1cImxpbmstYWNjZW50XCJcblx0XHRcdFx0XHRcdHNpemU9XCJsaW5rXCJcblx0XHRcdFx0XHRcdDpsb2FkaW5nPVwiYWN0aW9uUGx1Z2luUHJvY2Vzc2VkXCJcblx0XHRcdFx0XHRcdHYtaWY9XCJhY3RpdmF0ZUFjdGlvbkF2YWxpYWJsZVwiXG5cdFx0XHRcdFx0XHRAY2xpY2s9XCJhY3RpdmF0ZVBsdWdpblwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PHNwYW4gc2xvdD1cImxhYmVsXCI+XG5cdFx0XHRcdFx0XHRcdDxzcGFuPkFjdGl2YXRlIEFkZG9uPC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdDwvY3gtdnVpLWJ1dHRvbj5cblx0XHRcdFx0XHQ8Y3gtdnVpLWJ1dHRvblxuXHRcdFx0XHRcdFx0YnV0dG9uLXN0eWxlPVwibGluay1lcnJvclwiXG5cdFx0XHRcdFx0XHRzaXplPVwibGlua1wiXG5cdFx0XHRcdFx0XHQ6bG9hZGluZz1cImFjdGlvblBsdWdpblByb2Nlc3NlZFwiXG5cdFx0XHRcdFx0XHR2LWlmPVwiZGVhY3RpdmF0ZUFjdGlvbkF2YWxpYWJsZVwiXG5cdFx0XHRcdFx0XHRAY2xpY2s9XCJkZWFjdGl2YXRlUGx1Z2luXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8c3BhbiBzbG90PVwibGFiZWxcIj5cblx0XHRcdFx0XHRcdFx0PHNwYW4+RGVhY3RpdmF0ZSBBZGRvbjwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHQ8L2N4LXZ1aS1idXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdG5hbWU6ICdhZGRvbi1pdGVtJyxcblx0cHJvcHM6IHtcblx0XHRhZGRvbkRhdGE6IE9iamVjdCxcblx0fSxcblx0ZGF0YSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0YWN0aW9uUGx1Z2luOiBmYWxzZSxcblx0XHRcdGFjdGlvblBsdWdpblJlcXVlc3Q6IG51bGwsXG5cdFx0XHRhY3Rpb25QbHVnaW5Qcm9jZXNzZWQ6IGZhbHNlLFxuXHRcdFx0dXBkYXRlUGx1Z2luUHJvY2Vzc2VkOiBmYWxzZSxcblx0XHR9O1xuXHR9LFxuXHRjb21wdXRlZDoge1xuXHRcdGNsYXNzTGlzdDogZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIFtcblx0XHRcdFx0J2pmYi1hZGRvbnNfX2l0ZW0nLFxuXHRcdFx0XHR0aGlzLnVwZGF0ZUF2YWxpYWJsZSA/ICd1cGRhdGUtYXZhbGlhYmxlJyA6IGZhbHNlLFxuXHRcdFx0XHR0aGlzLmFjdGl2YXRlQXZhbGlhYmxlID8gJ2FjdGl2YXRlLWF2YWxpYWJsZScgOiBmYWxzZSxcblx0XHRcdF07XG5cdFx0fSxcblxuXHRcdGxlYXJuTW9yZUF2YWxpYWJsZSgpIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdCAgICAgICAhdGhpcy4kcGFyZW50LmlzTGljZW5zZUFjdGl2YXRlZFxuXHRcdFx0ICAgICAgICkgPyB0cnVlIDogZmFsc2U7XG5cdFx0fSxcblxuXHRcdGFjdGl2YXRlTGljZW5jZUFjdGlvbkF2YWxpYWJsZSgpIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdCAgICAgICAhdGhpcy4kcGFyZW50LmlzTGljZW5zZUFjdGl2YXRlZCAmJiB0aGlzLiRwYXJlbnQuaXNMaWNlbnNlTW9kZVxuXHRcdFx0ICAgICAgICkgPyB0cnVlIDogZmFsc2U7XG5cdFx0fSxcblxuXHRcdGluc3RhbGxBY3Rpb25BdmFsaWFibGUoKSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQgICAgICAgIXRoaXMuYWRkb25EYXRhWyAnaXNJbnN0YWxsZWQnIF0gJiYgdGhpcy4kcGFyZW50LmlzTGljZW5zZUFjdGl2YXRlZFxuXHRcdFx0ICAgICAgICkgPyB0cnVlIDogZmFsc2U7XG5cdFx0fSxcblxuXHRcdGFjdGl2YXRlQWN0aW9uQXZhbGlhYmxlKCkge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0ICAgICAgIHRoaXMuYWRkb25EYXRhWyAnaXNJbnN0YWxsZWQnIF0gJiYgIXRoaXMuYWRkb25EYXRhWyAnaXNBY3RpdmF0ZWQnIF1cblx0XHRcdCAgICAgICApID8gdHJ1ZSA6IGZhbHNlO1xuXHRcdH0sXG5cblx0XHRkZWFjdGl2YXRlQWN0aW9uQXZhbGlhYmxlKCkge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0ICAgICAgIHRoaXMuYWRkb25EYXRhWyAnaXNJbnN0YWxsZWQnIF0gJiYgdGhpcy5hZGRvbkRhdGFbICdpc0FjdGl2YXRlZCcgXVxuXHRcdFx0ICAgICAgICkgPyB0cnVlIDogZmFsc2U7XG5cdFx0fSxcblxuXHRcdHVwZGF0ZUF2YWxpYWJsZSgpIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdCAgICAgICB0aGlzLmFkZG9uRGF0YVsgJ3VwZGF0ZUF2YWxpYWJsZScgXVxuXHRcdFx0ICAgICAgICkgPyB0cnVlIDogZmFsc2U7XG5cdFx0fSxcblxuXHRcdGlzTGljZW5zZU1vZGUoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy4kcGFyZW50LmlzTGljZW5zZU1vZGU7XG5cdFx0fSxcblxuXHRcdHByb2NjZXNpbmdTdGF0ZSgpIHtcblx0XHRcdHJldHVybiB0aGlzLmFjdGlvblBsdWdpblByb2Nlc3NlZCB8fCB0aGlzLnVwZGF0ZVBsdWdpblByb2Nlc3NlZDtcblx0XHR9LFxuXG5cdFx0bGVhcm5Nb3JlVXJsKCkge1xuXHRcdFx0Y29uc3QgbGljZW5zZSAgICAgID0gdGhpcy4kcGFyZW50LmlzTGljZW5zZUFjdGl2YXRlZCA/ICdqZXRmb3JtYnVpbGRlci1saWNlbnNlJyA6ICdsaWNlbnNlLW5vdC1hY3RpdmF0ZWQnO1xuXHRcdFx0Y29uc3QgWyBjYW1wYWlnbiBdID0gdGhpcy5hZGRvbkRhdGEuc2x1Zy5zcGxpdCggJy8nICk7XG5cblx0XHRcdGxldCBkZW1vVXJsICAgPSB0aGlzLmFkZG9uRGF0YS5kZW1vLFxuXHRcdFx0ICAgIHV0bVBhcmFtcyA9IHRoaXMuJHBhcmVudC5nZXRVdG1QYXJhbXNTdHJpbmcoIHtcblx0XHRcdFx0ICAgIHV0bV9zb3VyY2U6IGBwbHVnaW5gLFxuXHRcdFx0XHQgICAgdXRtX21lZGl1bTogJ2FkZG9ucycsXG5cdFx0XHRcdCAgICB1dG1fY2FtcGFpZ246IGNhbXBhaWduLnJlcGxhY2UoICdqZXQtZm9ybS1idWlsZGVyLScsICcnICksXG5cdFx0XHRcdCAgICB1dG1fY29udGVudDogYCR7IGxpY2Vuc2UgfS8keyB0aGlzLiRwYXJlbnQudGhlbWVJbmZvLmF1dGhvclNsdWcgfWAsXG5cdFx0XHQgICAgfSApO1xuXG5cdFx0XHRyZXR1cm4gYCR7IGRlbW9VcmwgfT8keyB1dG1QYXJhbXMgfWA7XG5cdFx0fSxcblxuXHR9LFxuXHRtZXRob2RzOiB7XG5cblx0XHRhY3RpdmF0ZUxpY2Vuc2UoKSB7XG5cdFx0XHR3aW5kb3cuamZiRXZlbnRCdXMuJGVtaXQoICdzaG93TGljZW5zZVBvcHVwJyApO1xuXHRcdH0sXG5cblx0XHRpbnN0YWxsUGx1Z2luKCkge1xuXHRcdFx0dGhpcy5hY3Rpb25QbHVnaW4gPSAnaW5zdGFsbCc7XG5cdFx0XHR0aGlzLnBsdWdpbkFjdGlvbigpO1xuXHRcdH0sXG5cblx0XHRkZWFjdGl2YXRlUGx1Z2luKCkge1xuXHRcdFx0dGhpcy5hY3Rpb25QbHVnaW4gPSAnZGVhY3RpdmF0ZSc7XG5cdFx0XHR0aGlzLnBsdWdpbkFjdGlvbigpO1xuXHRcdH0sXG5cblx0XHRhY3RpdmF0ZVBsdWdpbigpIHtcblx0XHRcdHRoaXMuYWN0aW9uUGx1Z2luID0gJ2FjdGl2YXRlJztcblx0XHRcdHRoaXMucGx1Z2luQWN0aW9uKCk7XG5cdFx0fSxcblxuXHRcdHVwZGF0ZVBsdWdpbigpIHtcblxuXHRcdFx0aWYgKCB0aGlzLnVwZGF0ZUF2YWxpYWJsZSApIHtcblx0XHRcdFx0dGhpcy5hY3Rpb25QbHVnaW4gPSAndXBkYXRlJztcblx0XHRcdFx0dGhpcy5wbHVnaW5BY3Rpb24oKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0cGx1Z2luQWN0aW9uOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cblx0XHRcdHNlbGYuYWN0aW9uUGx1Z2luUmVxdWVzdCA9IGpRdWVyeS5hamF4KCB7XG5cdFx0XHRcdHR5cGU6ICdQT1NUJyxcblx0XHRcdFx0dXJsOiB3aW5kb3cuSmV0RkJQYWdlQ29uZmlnLmFqYXhVcmwsXG5cdFx0XHRcdGRhdGFUeXBlOiAnanNvbicsXG5cdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRhY3Rpb246IGBqZmJfYWRkb25fJHsgc2VsZi5hY3Rpb25QbHVnaW4gfV9hY3Rpb25gLFxuXHRcdFx0XHRcdG5vbmNlOiB3aW5kb3cuSmV0RkJQYWdlQ29uZmlnLm5vbmNlLFxuXHRcdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRcdHBsdWdpbjogc2VsZi5hZGRvbkRhdGFbICdzbHVnJyBdLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGJlZm9yZVNlbmQ6IGZ1bmN0aW9uICgganFYSFIsIGFqYXhTZXR0aW5ncyApIHtcblxuXHRcdFx0XHRcdGlmICggbnVsbCAhPT0gc2VsZi5hY3Rpb25QbHVnaW5SZXF1ZXN0ICkge1xuXHRcdFx0XHRcdFx0c2VsZi5hY3Rpb25QbHVnaW5SZXF1ZXN0LmFib3J0KCk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0c3dpdGNoICggc2VsZi5hY3Rpb25QbHVnaW4gKSB7XG5cdFx0XHRcdFx0XHRjYXNlICdpbnN0YWxsJzpcblx0XHRcdFx0XHRcdGNhc2UgJ2FjdGl2YXRlJzpcblx0XHRcdFx0XHRcdGNhc2UgJ2RlYWN0aXZhdGUnOlxuXHRcdFx0XHRcdFx0XHRzZWxmLmFjdGlvblBsdWdpblByb2Nlc3NlZCA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0Y2FzZSAndXBkYXRlJzpcblx0XHRcdFx0XHRcdFx0c2VsZi51cGRhdGVQbHVnaW5Qcm9jZXNzZWQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uICggcmVzcG9uY2UsIHRleHRTdGF0dXMsIGpxWEhSICkge1xuXHRcdFx0XHRcdGlmICggcmVzcG9uY2Uuc3VjY2VzcyApIHtcblx0XHRcdFx0XHRcdHNlbGYuJENYTm90aWNlLmFkZCgge1xuXHRcdFx0XHRcdFx0XHRtZXNzYWdlOiByZXNwb25jZS5tZXNzYWdlLFxuXHRcdFx0XHRcdFx0XHR0eXBlOiAnc3VjY2VzcycsXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiA0MDAwLFxuXHRcdFx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdFx0XHR3aW5kb3cuamZiRXZlbnRCdXMuJGVtaXQoICd1cGRhdGVBZGRvbkRhdGEnLCB7XG5cdFx0XHRcdFx0XHRcdHNsdWc6IHNlbGYuYWRkb25EYXRhWyAnc2x1ZycgXSxcblx0XHRcdFx0XHRcdFx0YWRkb25EYXRhOiByZXNwb25jZS5kYXRhLFxuXHRcdFx0XHRcdFx0XHRhY3Rpb246IHNlbGYuYWN0aW9uUGx1Z2luLFxuXHRcdFx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0c2VsZi4kQ1hOb3RpY2UuYWRkKCB7XG5cdFx0XHRcdFx0XHRcdG1lc3NhZ2U6IHJlc3BvbmNlLm1lc3NhZ2UsXG5cdFx0XHRcdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiA0MDAwLFxuXHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0ZXJyb3I6IGZ1bmN0aW9uICgganFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duICkge1xuXHRcdFx0XHRcdHNlbGYuJENYTm90aWNlLmFkZCgge1xuXHRcdFx0XHRcdFx0bWVzc2FnZTogZXJyb3JUaHJvd24sXG5cdFx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0XHRcdFx0ZHVyYXRpb246IDQwMDAsXG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRjb21wbGV0ZTogKCkgPT4gdGhpcy5vbkVuZFJlcXVlc3QoKSxcblx0XHRcdH0gKTtcblx0XHR9LFxuXHRcdG9uRW5kUmVxdWVzdCgpIHtcblx0XHRcdHN3aXRjaCAoIHRoaXMuYWN0aW9uUGx1Z2luICkge1xuXHRcdFx0XHRjYXNlICdpbnN0YWxsJzpcblx0XHRcdFx0Y2FzZSAnYWN0aXZhdGUnOlxuXHRcdFx0XHRjYXNlICdkZWFjdGl2YXRlJzpcblx0XHRcdFx0XHR0aGlzLmFjdGlvblBsdWdpblByb2Nlc3NlZCA9IGZhbHNlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICd1cGRhdGUnOlxuXHRcdFx0XHRcdHRoaXMudXBkYXRlUGx1Z2luUHJvY2Vzc2VkID0gZmFsc2U7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fSxcblx0fSxcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG5cbi5qZmItYWRkb25zIHtcblx0bWFyZ2luLWJvdHRvbTogNTBweDtcblxuXHQmOmxhc3QtY2hpbGQge1xuXHRcdG1hcmdpbi1ib3R0b206IDA7XG5cdH1cblxuXHRhIHtcblx0XHRjb2xvcjogIzAwN2NiYTtcblx0fVxuXG5cdCZfX2hlYWRlciB7XG5cdFx0bWFyZ2luLWJvdHRvbTogMjBweDtcblx0fVxuXG5cdCZfX2xpc3Qge1xuXHRcdGRpc3BsYXk6IGdyaWQ7XG5cdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcblx0XHRnYXA6IDQwcHg7XG5cblx0XHRAbWVkaWEgKG1heC13aWR0aDogMTE0MHB4KSB7XG5cdFx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuXHRcdH1cblx0fVxuXG5cdCZfX2l0ZW0ge1xuXHRcdHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjNzIGVhc2Utb3V0O1xuXHRcdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cblx0XHQmOmhvdmVyIHtcblx0XHRcdGJveC1zaGFkb3c6IDBweCA0cHggMjhweCByZ2JhKDE1LCAyMywgNDIsIDAuMSk7XG5cdFx0fVxuXG5cdFx0Ji5hY3RpdmF0ZWQge1xuXHRcdFx0LmpmYi1hZGRvbnNfX2l0ZW0taW5mbyB7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdCYudXBkYXRlLWF2YWxpYWJsZSB7XG5cdFx0XHQuamZiLWFkZG9uc19faXRlbS1uYW1lIHtcblx0XHRcdFx0LnZlcnNpb24ge1xuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNENjMzNkM7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LmpmYi1hZGRvbnNfX2l0ZW0tdXBkYXRlIHtcblx0XHRcdFx0LmxhdGVzdC12ZXJzaW9uIHtcblx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzQ2QjQ1MDtcblx0XHRcdFx0XHRwYWRkaW5nOiAycHggOHB4O1xuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDRweDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdCZfX2l0ZW0taW5uZXIge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRhbGlnbi1pdGVtczogc3RyZXRjaDtcblx0XHRoZWlnaHQ6IDEwMCU7XG5cdH1cblxuXHQmX19pdGVtLXRodW1iIHtcblx0XHRib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xuXHRcdGxpbmUtaGVpZ2h0OiAwO1xuXHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXG5cdFx0LnByby1iYWRnZSB7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHR0b3A6IDEycHg7XG5cdFx0XHRsZWZ0OiAxMnB4O1xuXHRcdH1cblxuXHRcdGltZyB7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdGhlaWdodDogYXV0bztcblx0XHR9XG5cdH1cblxuXHQmX19pdGVtLWluZm8ge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRhbGlnbi1pdGVtczogc3RyZXRjaDtcblx0XHRmbGV4OiAxIDEgYXV0bztcblx0XHRwYWRkaW5nOiAyMHB4O1xuXHRcdGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XG5cdFx0Ym9yZGVyLXdpZHRoOiAwIDFweCAxcHggMXB4O1xuXHRcdGJvcmRlci1jb2xvcjogI0RDRENERDtcblx0XHRib3JkZXItc3R5bGU6IHNvbGlkO1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXHR9XG5cblx0Jl9faXRlbS1uYW1lIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG5cdFx0LmxhYmVsIHtcblx0XHRcdGZvbnQtc2l6ZTogMjBweDtcblx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0XHRsaW5lLWhlaWdodDogMS4yNTtcblx0XHR9XG5cblx0XHQudmVyc2lvbiB7XG5cdFx0XHRwYWRkaW5nOiAxcHggOHB4O1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzQ2QjQ1MDtcblx0XHRcdG1hcmdpbi1sZWZ0OiAxMHB4O1xuXHRcdH1cblx0fVxuXG5cdCZfX2l0ZW0tdXBkYXRlIHtcblx0XHRjb2xvcjogIzdiN2U4MTtcblx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xuXHR9XG5cblx0Jl9faXRlbS1saWNlbnNlIHtcblx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xuXHRcdGNvbG9yOiAjN2I3ZTgxO1xuXG5cdFx0LmN4LXZ1aS1idXR0b24ge1xuXHRcdFx0bWFyZ2luLWxlZnQ6IDNweDtcblx0XHR9XG5cdH1cblxuXHQmX19pdGVtLWRlc2Mge1xuXHRcdGZsZXg6IDEgMSBhdXRvO1xuXG5cdFx0YSB7XG5cdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0fVxuXHR9XG5cblx0Jl9faXRlbS1hY3Rpb25zIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHRtYXJnaW4tdG9wOiAyMHB4O1xuXG5cdFx0JjplbXB0eSB7XG5cdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdH1cblxuXHRcdC5jeC12dWktYnV0dG9uIHtcblx0XHRcdG1hcmdpbi1yaWdodDogMjBweDtcblx0XHR9XG5cdH1cbn1cblxuPC9zdHlsZT4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnByb2NjZXNpbmctc3RhdGUge1xuICBvcGFjaXR5OiAwLjU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLmpmYi1hZGRvbnMtcGFnZV9faW5uZXIge1xuICBwYWRkaW5nOiAzMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uamZiLWFkZG9ucy1wYWdlX19oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLmpmYi1hZGRvbnMtcGFnZV9faGVhZGVyLWNvbnRyb2xzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRENEQ0REO1xufVxuLmpmYi1hZGRvbnMtcGFnZV9faGVhZGVyLWNvbnRyb2xzID4gLmN4LXZ1aS1idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5qZmItYWRkb25zLXBhZ2UgLmN4LXZ1aS1idXR0b24ge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmpmYi1hZGRvbnMtcGFnZSAuY3gtdnVpLWJ1dHRvbiAuYnV0dG9uLWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5qZmItYWRkb25zLXBhZ2UgLmN4LXZ1aS1idXR0b24tLXN0eWxlLWFjY2VudCB7XG4gIGNvbG9yOiAjMDA3Y2JhO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggIzAwN2NiYTtcbn1cbi5qZmItYWRkb25zLXBhZ2UgLmN4LXZ1aS1idXR0b24tLXN0eWxlLWFjY2VudDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTI0LCAxODYsIDAuMDcwNTg4MjM1Myk7XG59XG4uamZiLWFkZG9ucy1wYWdlIC5jeC12dWktYnV0dG9uLS1zdHlsZS1hY2NlbnQgLmJ1dHRvbi1pY29uIHBhdGgge1xuICBmaWxsOiAjMDA3Y2JhO1xufVxuLmpmYi1hZGRvbnMtcGFnZSAuY3gtdnVpLWJ1dHRvbi0tc3R5bGUtZGFuZ2VyIHtcbiAgY29sb3I6ICNkNjMzNmM7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjZDYzMzZjO1xufVxuLmpmYi1hZGRvbnMtcGFnZSAuY3gtdnVpLWJ1dHRvbi0tc3R5bGUtZGFuZ2VyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTQsIDUxLCAxMDgsIDAuMDcwNTg4MjM1Myk7XG59XG4uamZiLWFkZG9ucy1wYWdlIC5jeC12dWktYnV0dG9uLS1zdHlsZS1kYW5nZXIgLmJ1dHRvbi1pY29uIHBhdGgge1xuICBmaWxsOiAjZDYzMzZjO1xufVxuLmpmYi1hZGRvbnMtcGFnZSAuY3gtdnVpLWJ1dHRvbl9fY29udGVudCA+IHNwYW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5qZmItYWRkb25zLXBhZ2UgLmN4LXZ1aS1wb3B1cF9faGVhZGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRENEQ0REO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLmpmYi1hZGRvbnMtcGFnZSAuY3gtdnVpLXBvcHVwX19oZWFkZXItdGl0bGUge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICBjb2xvcjogIzIzMjgyRDtcbn1cbi5qZmItYWRkb25zLXBhZ2VfX2xpY2Vuc2UtZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG4uamZiLWFkZG9ucy1wYWdlX19saWNlbnNlLWZvcm0gPiBzcGFuIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5qZmItYWRkb25zLXBhZ2VfX2xpY2Vuc2UtaW5wdXQge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmpmYi1hZGRvbnMtcGFnZSAuZ28tcHJvLWJhbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyNHB4IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRENEQ0REO1xufVxuLmpmYi1hZGRvbnMtcGFnZSAuZ28tcHJvLWJhbm5lcl9fc3VidGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzAwN0NCQTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLmpmYi1hZGRvbnMtcGFnZSAuZ28tcHJvLWJhbm5lcl9fdGl0bGUge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzIzMjgyRDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5qZmItYWRkb25zLXBhZ2UgLmdvLXByby1iYW5uZXJfX2J1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN0NCQTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2FkbWluL3BhZ2VzL2pmYi1hZGRvbnMvQWRkb25zUGFnZS52dWVcIixcIndlYnBhY2s6Ly8uLy4uL0FkZG9uc1BhZ2UudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQXdhQTtFQUNDLFlBQUE7RUFDQSxvQkFBQTtBQ3ZhRDtBRDJhQztFQUNDLGFBQUE7RUFDQSxZQUFBO0FDeGFGO0FEMmFDO0VBQ0MsbUJBQUE7QUN6YUY7QUQ0YUM7RUFDQyxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0NBQUE7QUMxYUY7QUQ0YUU7RUFDQyxpQkFBQTtBQzFhSDtBRDhhQztFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0FDNWFGO0FEOGFFO0VBQ0MsaUJBQUE7QUM1YUg7QUQrYUU7RUFDQyxjQUFBO0VBQ0EsbUNBQUE7QUM3YUg7QUQrYUc7RUFDQyxpREFBQTtBQzdhSjtBRGliSTtFQUNDLGFBQUE7QUMvYUw7QURvYkU7RUFDQyxjQUFBO0VBQ0EsbUNBQUE7QUNsYkg7QURvYkc7RUFDQyxrREFBQTtBQ2xiSjtBRHNiSTtFQUNDLGFBQUE7QUNwYkw7QUQwYkc7RUFDQyxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ3hiSjtBRDhiRTtFQUNDLG9CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtBQzViSDtBRCtiRTtFQUNDLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQzdiSDtBRG9jQztFQUNDLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7QUNsY0Y7QURvY0U7RUFDQyxtQkFBQTtBQ2xjSDtBRHNjQztFQUNDLG1CQUFBO0FDcGNGO0FEdWNDO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtBQ3JjRjtBRHVjRTtFQUNDLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDcmNIO0FEd2NFO0VBQ0MsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUN0Y0g7QUR5Y0U7RUFDQyxZQUFBO0VBQ0EseUJBQUE7QUN2Y0hcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuLnByb2NjZXNpbmctc3RhdGUge1xcblxcdG9wYWNpdHk6IDAuNTtcXG5cXHRwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmpmYi1hZGRvbnMtcGFnZSB7XFxuXFx0Jl9faW5uZXIge1xcblxcdFxcdHBhZGRpbmc6IDMwcHg7XFxuXFx0XFx0aGVpZ2h0OiAxMDAlO1xcblxcdH1cXG5cXG5cXHQmX19oZWFkZXIge1xcblxcdFxcdG1hcmdpbi1ib3R0b206IDMwcHg7XFxuXFx0fVxcblxcblxcdCZfX2hlYWRlci1jb250cm9scyB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0cGFkZGluZy1ib3R0b206IDE1cHg7XFxuXFx0XFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEQ0RDREQ7XFxuXFxuXFx0XFx0PiAuY3gtdnVpLWJ1dHRvbiB7XFxuXFx0XFx0XFx0bWFyZ2luLWxlZnQ6IDEwcHg7XFxuXFx0XFx0fVxcblxcdH1cXG5cXG5cXHQuY3gtdnVpLWJ1dHRvbiB7XFxuXFx0XFx0Zm9udC1zaXplOiAxM3B4O1xcblxcdFxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFxuXFx0XFx0LmJ1dHRvbi1pY29uIHtcXG5cXHRcXHRcXHRtYXJnaW4tcmlnaHQ6IDVweDtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0Ji0tc3R5bGUtYWNjZW50IHtcXG5cXHRcXHRcXHRjb2xvcjogIzAwN2NiYTtcXG5cXHRcXHRcXHRib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggIzAwN2NiYTtcXG5cXG5cXHRcXHRcXHQmOmhvdmVyIHtcXG5cXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3Y2JhMTI7XFxuXFx0XFx0XFx0fVxcblxcblxcdFxcdFxcdC5idXR0b24taWNvbiB7XFxuXFx0XFx0XFx0XFx0cGF0aCB7XFxuXFx0XFx0XFx0XFx0XFx0ZmlsbDogIzAwN2NiYTtcXG5cXHRcXHRcXHRcXHR9XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXG5cXHRcXHQmLS1zdHlsZS1kYW5nZXIge1xcblxcdFxcdFxcdGNvbG9yOiAjZDYzMzZjO1xcblxcdFxcdFxcdGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjZDYzMzZjO1xcblxcblxcdFxcdFxcdCY6aG92ZXIge1xcblxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICNkNjMzNmMxMjtcXG5cXHRcXHRcXHR9XFxuXFxuXFx0XFx0XFx0LmJ1dHRvbi1pY29uIHtcXG5cXHRcXHRcXHRcXHRwYXRoIHtcXG5cXHRcXHRcXHRcXHRcXHRmaWxsOiAjZDYzMzZjO1xcblxcdFxcdFxcdFxcdH1cXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcblxcdFxcdCZfX2NvbnRlbnQge1xcblxcdFxcdFxcdD4gc3BhbiB7XFxuXFx0XFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRcXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFx0fVxcblxcblxcdC5jeC12dWktcG9wdXAge1xcblxcdFxcdCZfX2hlYWRlciB7XFxuXFx0XFx0XFx0cGFkZGluZy1ib3R0b206IDE1cHg7XFxuXFx0XFx0XFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEQ0RDREQ7XFxuXFx0XFx0XFx0bWFyZ2luLWJvdHRvbTogMzBweDtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0Jl9faGVhZGVyLXRpdGxlIHtcXG5cXHRcXHRcXHRmb250LXdlaWdodDogNTAwO1xcblxcdFxcdFxcdGZvbnQtc2l6ZTogMjRweDtcXG5cXHRcXHRcXHRsaW5lLWhlaWdodDogMzZweDtcXG5cXHRcXHRcXHRjb2xvcjogIzIzMjgyRDtcXG5cXHRcXHR9XFxuXFx0fVxcblxcblxcdCZfX2xpY2Vuc2UtcG9wdXAge1xcblxcdH1cXG5cXG5cXHQmX19saWNlbnNlLWZvcm0ge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuXFx0XFx0YWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuXFxuXFx0XFx0PiBzcGFuIHtcXG5cXHRcXHRcXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0Jl9fbGljZW5zZS1pbnB1dCB7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMTBweDtcXG5cXHR9XFxuXFxuXFx0LmdvLXByby1iYW5uZXIge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdHBhZGRpbmc6IDI0cHggMDtcXG5cXHRcXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RDRENERDtcXG5cXG5cXHRcXHQmX19zdWJ0aXRsZSB7XFxuXFx0XFx0XFx0Zm9udC1zaXplOiAxOHB4O1xcblxcdFxcdFxcdGxpbmUtaGVpZ2h0OiAxLjI1O1xcblxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxuXFx0XFx0XFx0Y29sb3I6ICMwMDdDQkE7XFxuXFx0XFx0XFx0bWFyZ2luLWJvdHRvbTogNXB4O1xcblxcdFxcdH1cXG5cXG5cXHRcXHQmX190aXRsZSB7XFxuXFx0XFx0XFx0Zm9udC1zaXplOiAyNHB4O1xcblxcdFxcdFxcdGxpbmUtaGVpZ2h0OiAxLjI1O1xcblxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxuXFx0XFx0XFx0Y29sb3I6ICMyMzI4MkQ7XFxuXFx0XFx0XFx0bWFyZ2luLWJvdHRvbTogMjBweDtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0Jl9fYnV0dG9uIHtcXG5cXHRcXHRcXHRjb2xvcjogd2hpdGU7XFxuXFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogIzAwN0NCQTtcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cXG5cIixcIi5wcm9jY2VzaW5nLXN0YXRlIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uamZiLWFkZG9ucy1wYWdlX19pbm5lciB7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlX19oZWFkZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZV9faGVhZGVyLWNvbnRyb2xzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEQ0RDREQ7XFxufVxcbi5qZmItYWRkb25zLXBhZ2VfX2hlYWRlci1jb250cm9scyA+IC5jeC12dWktYnV0dG9uIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlIC5jeC12dWktYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuY3gtdnVpLWJ1dHRvbiAuYnV0dG9uLWljb24ge1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmN4LXZ1aS1idXR0b24tLXN0eWxlLWFjY2VudCB7XFxuICBjb2xvcjogIzAwN2NiYTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjMDA3Y2JhO1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlIC5jeC12dWktYnV0dG9uLS1zdHlsZS1hY2NlbnQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMjQsIDE4NiwgMC4wNzA1ODgyMzUzKTtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuY3gtdnVpLWJ1dHRvbi0tc3R5bGUtYWNjZW50IC5idXR0b24taWNvbiBwYXRoIHtcXG4gIGZpbGw6ICMwMDdjYmE7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmN4LXZ1aS1idXR0b24tLXN0eWxlLWRhbmdlciB7XFxuICBjb2xvcjogI2Q2MzM2YztcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjZDYzMzZjO1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlIC5jeC12dWktYnV0dG9uLS1zdHlsZS1kYW5nZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTQsIDUxLCAxMDgsIDAuMDcwNTg4MjM1Myk7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmN4LXZ1aS1idXR0b24tLXN0eWxlLWRhbmdlciAuYnV0dG9uLWljb24gcGF0aCB7XFxuICBmaWxsOiAjZDYzMzZjO1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlIC5jeC12dWktYnV0dG9uX19jb250ZW50ID4gc3BhbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlIC5jeC12dWktcG9wdXBfX2hlYWRlciB7XFxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRENEQ0REO1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuY3gtdnVpLXBvcHVwX19oZWFkZXItdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xcbiAgY29sb3I6ICMyMzI4MkQ7XFxufVxcbi5qZmItYWRkb25zLXBhZ2VfX2xpY2Vuc2UtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlX19saWNlbnNlLWZvcm0gPiBzcGFuIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi5qZmItYWRkb25zLXBhZ2VfX2xpY2Vuc2UtaW5wdXQge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuZ28tcHJvLWJhbm5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDI0cHggMDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRENEQ0REO1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlIC5nby1wcm8tYmFubmVyX19zdWJ0aXRsZSB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBsaW5lLWhlaWdodDogMS4yNTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogIzAwN0NCQTtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuZ28tcHJvLWJhbm5lcl9fdGl0bGUge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY29sb3I6ICMyMzI4MkQ7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlIC5nby1wcm8tYmFubmVyX19idXR0b24ge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN0NCQTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuamZiLWFkZG9ucyB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG4uamZiLWFkZG9uczpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5qZmItYWRkb25zIGEge1xuICBjb2xvcjogIzAwN2NiYTtcbn1cbi5qZmItYWRkb25zX19oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmpmYi1hZGRvbnNfX2xpc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xuICBnYXA6IDQwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTE0MHB4KSB7XG4uamZiLWFkZG9uc19fbGlzdCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbn1cbn1cbi5qZmItYWRkb25zX19pdGVtIHtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzIGVhc2Utb3V0O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmpmYi1hZGRvbnNfX2l0ZW06aG92ZXIge1xuICBib3gtc2hhZG93OiAwcHggNHB4IDI4cHggcmdiYSgxNSwgMjMsIDQyLCAwLjEpO1xufVxuLmpmYi1hZGRvbnNfX2l0ZW0uYWN0aXZhdGVkIC5qZmItYWRkb25zX19pdGVtLWluZm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5qZmItYWRkb25zX19pdGVtLnVwZGF0ZS1hdmFsaWFibGUgLmpmYi1hZGRvbnNfX2l0ZW0tbmFtZSAudmVyc2lvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNENjMzNkM7XG59XG4uamZiLWFkZG9uc19faXRlbS51cGRhdGUtYXZhbGlhYmxlIC5qZmItYWRkb25zX19pdGVtLXVwZGF0ZSAubGF0ZXN0LXZlcnNpb24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NkI0NTA7XG4gIHBhZGRpbmc6IDJweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5qZmItYWRkb25zX19pdGVtLWlubmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5qZmItYWRkb25zX19pdGVtLXRodW1iIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5qZmItYWRkb25zX19pdGVtLXRodW1iIC5wcm8tYmFkZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTJweDtcbiAgbGVmdDogMTJweDtcbn1cbi5qZmItYWRkb25zX19pdGVtLXRodW1iIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG4uamZiLWFkZG9uc19faXRlbS1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xuICBib3JkZXItd2lkdGg6IDAgMXB4IDFweCAxcHg7XG4gIGJvcmRlci1jb2xvcjogI0RDRENERDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uamZiLWFkZG9uc19faXRlbS1uYW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5qZmItYWRkb25zX19pdGVtLW5hbWUgLmxhYmVsIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbn1cbi5qZmItYWRkb25zX19pdGVtLW5hbWUgLnZlcnNpb24ge1xuICBwYWRkaW5nOiAxcHggOHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ2QjQ1MDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4uamZiLWFkZG9uc19faXRlbS11cGRhdGUge1xuICBjb2xvcjogIzdiN2U4MTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5qZmItYWRkb25zX19pdGVtLWxpY2Vuc2Uge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBjb2xvcjogIzdiN2U4MTtcbn1cbi5qZmItYWRkb25zX19pdGVtLWxpY2Vuc2UgLmN4LXZ1aS1idXR0b24ge1xuICBtYXJnaW4tbGVmdDogM3B4O1xufVxuLmpmYi1hZGRvbnNfX2l0ZW0tZGVzYyB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuLmpmYi1hZGRvbnNfX2l0ZW0tZGVzYyBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmpmYi1hZGRvbnNfX2l0ZW0tYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmpmYi1hZGRvbnNfX2l0ZW0tYWN0aW9uczplbXB0eSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uamZiLWFkZG9uc19faXRlbS1hY3Rpb25zIC5jeC12dWktYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vYWRtaW4vcGFnZXMvamZiLWFkZG9ucy9jb21wb25lbnRzL0FkZG9uSXRlbS52dWVcIixcIndlYnBhY2s6Ly8uLy4uL0FkZG9uSXRlbS52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBa1RBO0VBQ0MsbUJBQUE7QUNqVEQ7QURtVEM7RUFDQyxnQkFBQTtBQ2pURjtBRG9UQztFQUNDLGNBQUE7QUNsVEY7QURxVEM7RUFDQyxtQkFBQTtBQ25URjtBRHNUQztFQUNDLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLFNBQUE7QUNwVEY7QURzVEU7QUFMRDtJQU1FLHFDQUFBO0FDblREO0FBQ0Y7QURzVEM7RUFDQyxvQ0FBQTtFQUNBLG1CQUFBO0FDcFRGO0FEc1RFO0VBQ0MsOENBQUE7QUNwVEg7QUR3VEc7RUFDQyx1QkFBQTtBQ3RUSjtBRDRUSTtFQUNDLHlCQUFBO0FDMVRMO0FEK1RJO0VBQ0MsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQzdUTDtBRG1VQztFQUNDLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQ2pVRjtBRG9VQztFQUNDLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNsVUY7QURvVUU7RUFDQyxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDbFVIO0FEcVVFO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUNuVUg7QUR1VUM7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ3JVRjtBRHdVQztFQUNDLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUN0VUY7QUR3VUU7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ3RVSDtBRHlVRTtFQUNDLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQ3ZVSDtBRDJVQztFQUNDLGNBQUE7RUFDQSxtQkFBQTtBQ3pVRjtBRDRVQztFQUNDLG1CQUFBO0VBQ0EsY0FBQTtBQzFVRjtBRDRVRTtFQUNDLGdCQUFBO0FDMVVIO0FEOFVDO0VBQ0MsY0FBQTtBQzVVRjtBRDhVRTtFQUNDLHFCQUFBO0FDNVVIO0FEZ1ZDO0VBQ0MsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUM5VUY7QURnVkU7RUFDQyxhQUFBO0FDOVVIO0FEaVZFO0VBQ0Msa0JBQUE7QUMvVUhcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuLmpmYi1hZGRvbnMge1xcblxcdG1hcmdpbi1ib3R0b206IDUwcHg7XFxuXFxuXFx0JjpsYXN0LWNoaWxkIHtcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAwO1xcblxcdH1cXG5cXG5cXHRhIHtcXG5cXHRcXHRjb2xvcjogIzAwN2NiYTtcXG5cXHR9XFxuXFxuXFx0Jl9faGVhZGVyIHtcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xcblxcdH1cXG5cXG5cXHQmX19saXN0IHtcXG5cXHRcXHRkaXNwbGF5OiBncmlkO1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuXFx0XFx0Z2FwOiA0MHB4O1xcblxcblxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiAxMTQwcHgpIHtcXG5cXHRcXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0Jl9faXRlbSB7XFxuXFx0XFx0dHJhbnNpdGlvbjogYm94LXNoYWRvdyAuM3MgZWFzZS1vdXQ7XFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXG5cXHRcXHQmOmhvdmVyIHtcXG5cXHRcXHRcXHRib3gtc2hhZG93OiAwcHggNHB4IDI4cHggcmdiYSgxNSwgMjMsIDQyLCAwLjEpO1xcblxcdFxcdH1cXG5cXG5cXHRcXHQmLmFjdGl2YXRlZCB7XFxuXFx0XFx0XFx0LmpmYi1hZGRvbnNfX2l0ZW0taW5mbyB7XFxuXFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXG5cXHRcXHQmLnVwZGF0ZS1hdmFsaWFibGUge1xcblxcdFxcdFxcdC5qZmItYWRkb25zX19pdGVtLW5hbWUge1xcblxcdFxcdFxcdFxcdC52ZXJzaW9uIHtcXG5cXHRcXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRDYzMzZDO1xcblxcdFxcdFxcdFxcdH1cXG5cXHRcXHRcXHR9XFxuXFxuXFx0XFx0XFx0LmpmYi1hZGRvbnNfX2l0ZW0tdXBkYXRlIHtcXG5cXHRcXHRcXHRcXHQubGF0ZXN0LXZlcnNpb24ge1xcblxcdFxcdFxcdFxcdFxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRcXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNDZCNDUwO1xcblxcdFxcdFxcdFxcdFxcdHBhZGRpbmc6IDJweCA4cHg7XFxuXFx0XFx0XFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcblxcdFxcdFxcdFxcdH1cXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcdH1cXG5cXG5cXHQmX19pdGVtLWlubmVyIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0YWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuXFx0XFx0aGVpZ2h0OiAxMDAlO1xcblxcdH1cXG5cXG5cXHQmX19pdGVtLXRodW1iIHtcXG5cXHRcXHRib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xcblxcdFxcdGxpbmUtaGVpZ2h0OiAwO1xcblxcdFxcdG92ZXJmbG93OiBoaWRkZW47XFxuXFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcblxcdFxcdC5wcm8tYmFkZ2Uge1xcblxcdFxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRcXHRcXHR0b3A6IDEycHg7XFxuXFx0XFx0XFx0bGVmdDogMTJweDtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0aW1nIHtcXG5cXHRcXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRcXHRoZWlnaHQ6IGF1dG87XFxuXFx0XFx0fVxcblxcdH1cXG5cXG5cXHQmX19pdGVtLWluZm8ge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRhbGlnbi1pdGVtczogc3RyZXRjaDtcXG5cXHRcXHRmbGV4OiAxIDEgYXV0bztcXG5cXHRcXHRwYWRkaW5nOiAyMHB4O1xcblxcdFxcdGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XFxuXFx0XFx0Ym9yZGVyLXdpZHRoOiAwIDFweCAxcHggMXB4O1xcblxcdFxcdGJvcmRlci1jb2xvcjogI0RDRENERDtcXG5cXHRcXHRib3JkZXItc3R5bGU6IHNvbGlkO1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcdH1cXG5cXG5cXHQmX19pdGVtLW5hbWUge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdFxcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcblxcdFxcdG1hcmdpbi1ib3R0b206IDEwcHg7XFxuXFxuXFx0XFx0LmxhYmVsIHtcXG5cXHRcXHRcXHRmb250LXNpemU6IDIwcHg7XFxuXFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRcXHRcXHRsaW5lLWhlaWdodDogMS4yNTtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0LnZlcnNpb24ge1xcblxcdFxcdFxcdHBhZGRpbmc6IDFweCA4cHg7XFxuXFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcblxcdFxcdFxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNDZCNDUwO1xcblxcdFxcdFxcdG1hcmdpbi1sZWZ0OiAxMHB4O1xcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0Jl9faXRlbS11cGRhdGUge1xcblxcdFxcdGNvbG9yOiAjN2I3ZTgxO1xcblxcdFxcdG1hcmdpbi1ib3R0b206IDEwcHg7XFxuXFx0fVxcblxcblxcdCZfX2l0ZW0tbGljZW5zZSB7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMTBweDtcXG5cXHRcXHRjb2xvcjogIzdiN2U4MTtcXG5cXG5cXHRcXHQuY3gtdnVpLWJ1dHRvbiB7XFxuXFx0XFx0XFx0bWFyZ2luLWxlZnQ6IDNweDtcXG5cXHRcXHR9XFxuXFx0fVxcblxcblxcdCZfX2l0ZW0tZGVzYyB7XFxuXFx0XFx0ZmxleDogMSAxIGF1dG87XFxuXFxuXFx0XFx0YSB7XFxuXFx0XFx0XFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0Jl9faXRlbS1hY3Rpb25zIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRcXHRtYXJnaW4tdG9wOiAyMHB4O1xcblxcblxcdFxcdCY6ZW1wdHkge1xcblxcdFxcdFxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0XFx0fVxcblxcblxcdFxcdC5jeC12dWktYnV0dG9uIHtcXG5cXHRcXHRcXHRtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXFxuXCIsXCIuamZiLWFkZG9ucyB7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG4uamZiLWFkZG9uczpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcbi5qZmItYWRkb25zIGEge1xcbiAgY29sb3I6ICMwMDdjYmE7XFxufVxcbi5qZmItYWRkb25zX19oZWFkZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLmpmYi1hZGRvbnNfX2xpc3Qge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICBnYXA6IDQwcHg7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTQwcHgpIHtcXG4gIC5qZmItYWRkb25zX19saXN0IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIH1cXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0ge1xcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzIGVhc2Utb3V0O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW06aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMHB4IDRweCAyOHB4IHJnYmEoMTUsIDIzLCA0MiwgMC4xKTtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0uYWN0aXZhdGVkIC5qZmItYWRkb25zX19pdGVtLWluZm8ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLnVwZGF0ZS1hdmFsaWFibGUgLmpmYi1hZGRvbnNfX2l0ZW0tbmFtZSAudmVyc2lvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDYzMzZDO1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS51cGRhdGUtYXZhbGlhYmxlIC5qZmItYWRkb25zX19pdGVtLXVwZGF0ZSAubGF0ZXN0LXZlcnNpb24ge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ2QjQ1MDtcXG4gIHBhZGRpbmc6IDJweCA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLWlubmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLXRodW1iIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLXRodW1iIC5wcm8tYmFkZ2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMnB4O1xcbiAgbGVmdDogMTJweDtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tdGh1bWIgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xcbiAgYm9yZGVyLXdpZHRoOiAwIDFweCAxcHggMXB4O1xcbiAgYm9yZGVyLWNvbG9yOiAjRENEQ0REO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS1uYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLW5hbWUgLmxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsaW5lLWhlaWdodDogMS4yNTtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tbmFtZSAudmVyc2lvbiB7XFxuICBwYWRkaW5nOiAxcHggOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ2QjQ1MDtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS11cGRhdGUge1xcbiAgY29sb3I6ICM3YjdlODE7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS1saWNlbnNlIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBjb2xvcjogIzdiN2U4MTtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tbGljZW5zZSAuY3gtdnVpLWJ1dHRvbiB7XFxuICBtYXJnaW4tbGVmdDogM3B4O1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS1kZXNjIHtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS1kZXNjIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS1hY3Rpb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tYWN0aW9uczplbXB0eSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS1hY3Rpb25zIC5jeC12dWktYnV0dG9uIHtcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0FkZG9uc1BhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVlMjQ5ZDBlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQWRkb25zUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vQWRkb25zUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9BZGRvbnNQYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVlMjQ5ZDBlJmxhbmc9c2Nzc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvYW5kcmV3c2hldmNoZW5rby93d3cvamV0LWVuZ2luZS93cC1jb250ZW50L3BsdWdpbnMvamV0Zm9ybWJ1aWxkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNWUyNDlkMGUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNWUyNDlkMGUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNWUyNDlkMGUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0FkZG9uc1BhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVlMjQ5ZDBlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNWUyNDlkMGUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFkbWluL3BhZ2VzL2pmYi1hZGRvbnMvQWRkb25zUGFnZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0FkZG9uSXRlbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YjUwNzQzYjRcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BZGRvbkl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0FkZG9uSXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9BZGRvbkl0ZW0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YjUwNzQzYjQmbGFuZz1zY3NzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9hbmRyZXdzaGV2Y2hlbmtvL3d3dy9qZXQtZW5naW5lL3dwLWNvbnRlbnQvcGx1Z2lucy9qZXRmb3JtYnVpbGRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdiNTA3NDNiNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdiNTA3NDNiNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdiNTA3NDNiNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQWRkb25JdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iNTA3NDNiNFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2I1MDc0M2I0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhZG1pbi9wYWdlcy9qZmItYWRkb25zL2NvbXBvbmVudHMvQWRkb25JdGVtLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRkb25zUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd5dy1pbi1qcy93ZWJwYWNrLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BZGRvbnNQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd5dy1pbi1qcy93ZWJwYWNrLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BZGRvbkl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRkb25JdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FkZG9uc1BhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVlMjQ5ZDBlXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRkb25JdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iNTA3NDNiNFwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FkZG9uc1BhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWUyNDlkMGUmbGFuZz1zY3NzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRkb25JdGVtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWI1MDc0M2I0Jmxhbmc9c2Nzc1wiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiamZiLWFkZG9ucy1wYWdlIHdyYXBcIixjbGFzczp7ICdwcm9jY2VzaW5nLXN0YXRlJzogX3ZtLnByb2NjZXNpbmdTdGF0ZSB9fSxbX2MoJ2gxJyx7c3RhdGljQ2xhc3M6XCJjcy12dWktdGl0bGVcIn0sW192bS5fdihfdm0uX3MoJ0pldEZvcm1CdWlsZGVyIEFkZG9ucycpKV0pLF92bS5fdihcIiBcIiksX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiamZiLWFkZG9ucy1wYWdlX19pbm5lciBjeC12dWktcGFuZWxcIn0sW19jKCdkaXYnLHtzdGF0aWNDbGFzczpcImpmYi1hZGRvbnMtcGFnZV9faGVhZGVyXCJ9LFsoX3ZtLmlzTGljZW5zZU1vZGUpP19jKCdkaXYnLHtzdGF0aWNDbGFzczpcImpmYi1hZGRvbnMtcGFnZV9faGVhZGVyLWNvbnRyb2xzXCJ9LFtfYygnY3gtdnVpLWJ1dHRvbicse2F0dHJzOntcImJ1dHRvbi1zdHlsZVwiOlwiYWNjZW50XCIsXCJzaXplXCI6XCJtaW5pXCIsXCJsb2FkaW5nXCI6X3ZtLmNoZWNrVXBkYXRlc1Byb2Nlc3NlZH0sb246e1wiY2xpY2tcIjpfdm0uY2hlY2tQbHVnaW5zVXBkYXRlfX0sW19jKCdzcGFuJyx7YXR0cnM6e1wic2xvdFwiOlwibGFiZWxcIn0sc2xvdDpcImxhYmVsXCJ9LFtfYygnc3ZnJyx7c3RhdGljQ2xhc3M6XCJidXR0b24taWNvblwiLGF0dHJzOntcIndpZHRoXCI6XCIxNFwiLFwiaGVpZ2h0XCI6XCIxNFwiLFwidmlld0JveFwiOlwiMCAwIDE0IDE0XCIsXCJmaWxsXCI6XCJub25lXCIsXCJ4bWxuc1wiOlwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIn19LFtfYygncGF0aCcse2F0dHJzOntcImRcIjpcIk0xMS43MDg1IDIuMjkxNzFDMTAuNTAwMSAxLjA4MzM3IDguODQxOCAwLjMzMzM3NCA3LjAwMDEzIDAuMzMzMzc0QzMuMzE2OCAwLjMzMzM3NCAwLjM0MTc5NyAzLjMxNjcxIDAuMzQxNzk3IDcuMDAwMDRDMC4zNDE3OTcgMTAuNjgzNCAzLjMxNjggMTMuNjY2NyA3LjAwMDEzIDEzLjY2NjdDMTAuMTA4NSAxMy42NjY3IDEyLjcwMDEgMTEuNTQxNyAxMy40NDE4IDguNjY2NzFIMTEuNzA4NUMxMS4wMjUxIDEwLjYwODQgOS4xNzUxMyAxMiA3LjAwMDEzIDEyQzQuMjQxOCAxMiAyLjAwMDEzIDkuNzU4MzcgMi4wMDAxMyA3LjAwMDA0QzIuMDAwMTMgNC4yNDE3MSA0LjI0MTggMi4wMDAwNCA3LjAwMDEzIDIuMDAwMDRDOC4zODM0NiAyLjAwMDA0IDkuNjE2OCAyLjU3NTA0IDEwLjUxNjggMy40ODMzN0w3LjgzMzQ2IDYuMTY2NzFIMTMuNjY2OFYwLjMzMzM3NEwxMS43MDg1IDIuMjkxNzFaXCIsXCJmaWxsXCI6XCIjMDA3Q0JBXCJ9fSldKSxfdm0uX3YoXCIgXCIpLF9jKCdzcGFuJyxbX3ZtLl92KFwiQ2hlY2sgRm9yIFVwZGF0ZXNcIildKV0pXSksX3ZtLl92KFwiIFwiKSxfYygnY3gtdnVpLWJ1dHRvbicse2NsYXNzOlsgIV92bS5pc0xpY2Vuc2VBY3RpdmF0ZWQgPyAnY3gtdnVpLWJ1dHRvbi0tc3R5bGUtYWNjZW50JyA6ICdjeC12dWktYnV0dG9uLS1zdHlsZS1kYW5nZXInIF0sYXR0cnM6e1wic2l6ZVwiOlwibWluaVwifSxvbjp7XCJjbGlja1wiOl92bS5zaG93TGljZW5zZVBvcHVwfX0sW19jKCdzcGFuJyx7YXR0cnM6e1wic2xvdFwiOlwibGFiZWxcIn0sc2xvdDpcImxhYmVsXCJ9LFtfYygnc3ZnJyx7c3RhdGljQ2xhc3M6XCJidXR0b24taWNvblwiLGF0dHJzOntcIndpZHRoXCI6XCIxNlwiLFwiaGVpZ2h0XCI6XCIxNlwiLFwidmlld0JveFwiOlwiMCAwIDE2IDE2XCIsXCJmaWxsXCI6XCJub25lXCIsXCJ4bWxuc1wiOlwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIn19LFtfYygncGF0aCcse2F0dHJzOntcImRcIjpcIk0xNS40OTg1IDBIMTIuNDg5N0MxMi40MTY2IDAgMTIuMzQ4NyAwLjAxNTY3MDkgMTIuMjg2IDAuMDQ3MDEyN0MxMi4yMzM4IDAuMDY3OTA3MyAxMi4xODY3IDAuMTA0NDczIDEyLjE0NSAwLjE1NjcwOUw1Ljc2NjkgNi40NzIwOUM1LjYyMDYzIDYuNDQwNzQgNS40NjM5MiA2LjQxNDYzIDUuMjk2NzcgNi4zOTM3M0M1LjEyOTYxIDYuMzcyODQgNC45Njc2OCA2LjM2MjM5IDQuODEwOTcgNi4zNjIzOUM0LjE2MzI0IDYuMzYyMzkgMy41NDY4NSA2LjQ4Nzc2IDIuOTYxOCA2LjczODQ5QzIuMzc2NzUgNi45Nzg3OCAxLjg1OTYxIDcuMzIzNTQgMS40MTAzOCA3Ljc3Mjc3QzAuOTYxMTQ5IDguMjIyIDAuNjExMTY2IDguNzM5MTQgMC4zNjA0MzEgOS4zMjQxOUMwLjEyMDE0NCA5LjkwOTI0IDAgMTAuNTMwOSAwIDExLjE4OUMwIDExLjgzNjggMC4xMjAxNDQgMTIuNDUzMiAwLjM2MDQzMSAxMy4wMzgyQzAuNjExMTY2IDEzLjYyMzIgMC45NjExNDkgMTQuMTQwNCAxLjQxMDM4IDE0LjU4OTZDMS44NTk2MSAxNS4wMzg5IDIuMzc2NzUgMTUuMzgzNiAyLjk2MTggMTUuNjIzOUMzLjU0Njg1IDE1Ljg3NDYgNC4xNjMyNCAxNiA0LjgxMDk3IDE2QzUuNDY5MTUgMTYgNi4wOTA3NiAxNS44NzQ2IDYuNjc1ODEgMTUuNjIzOUM3LjI2MDg2IDE1LjM4MzYgNy43NzggMTUuMDM4OSA4LjIyNzIzIDE0LjU4OTZDOC44MDE4MyAxNC4wMTUgOS4xOTg4MiAxMy4zNDY0IDkuNDE4MjIgMTIuNTgzN0M5LjY0ODA2IDExLjgyMTEgOS42ODQ2MiAxMS4wMzc1IDkuNTI3OTEgMTAuMjMzMUwxMC44OTEzIDguODY5NzRDMTAuOTMzMSA4LjgyNzk1IDEwLjk2NDQgOC43ODA5MyAxMC45ODUzIDguNzI4N0MxMS4wMTY3IDguNjY2MDEgMTEuMDMyMyA4LjU5ODExIDExLjAzMjMgOC41MjQ5OFY3LjAyMDU3SDEyLjUzNjdDMTIuNjkzNCA3LjAyMDU3IDEyLjgxMzYgNi45NzM1NiAxMi44OTcyIDYuODc5NTNDMTIuOTkxMiA2Ljc4NTUgMTMuMDM4MiA2LjY2NTM2IDEzLjAzODIgNi41MTkxVjUuMDE0NjlIMTQuNTQyNkMxNC42MTU3IDUuMDE0NjkgMTQuNjc4NCA1LjAwNDI0IDE0LjczMDcgNC45ODMzNUMxNC43OTMzIDQuOTUyMDEgMTQuODUwOCA0LjkxMDIyIDE0LjkwMyA0Ljg1Nzk4TDE1LjkwNiAzLjg1NTA0QzE1LjkyNjkgMy44MTMyNiAxNS45NDc4IDMuNzY2MjQgMTUuOTY4NyAzLjcxNDAxQzE1Ljk4OTYgMy42NTEzMiAxNiAzLjU4MzQyIDE2IDMuNTEwMjhWMC41MDE0NjlDMTYgMC4zNTUyMDcgMTUuOTUzIDAuMjM1MDY0IDE1Ljg1OSAwLjE0MTAzOEMxNS43NjQ5IDAuMDQ3MDEyNyAxNS42NDQ4IDAgMTUuNDk4NSAwWk00Ljk2NzY4IDEyLjc4NzVDNC43OTAwOCAxMi45NjUxIDQuNTk2OCAxMy4wOTU3IDQuMzg3ODYgMTMuMTc5MkM0LjE4OTM2IDEzLjI1MjQgMy45NjQ3NCAxMy4yODg5IDMuNzE0MDEgMTMuMjg4OUMzLjQ2MzI3IDEzLjI4ODkgMy4yMzM0MyAxMy4yNDE5IDMuMDI0NDkgMTMuMTQ3OUMyLjgyNTk5IDEzLjA1MzkgMi42Mzc5NCAxMi45MzM3IDIuNDYwMzMgMTIuNzg3NUMyLjI4MjczIDEyLjYwOTkgMi4xNTIxNCAxMi40MjE4IDIuMDY4NTYgMTIuMjIzM0MxLjk5NTQzIDEyLjAxNDQgMS45NTg4NiAxMS43ODQ1IDEuOTU4ODYgMTEuNTMzOEMxLjk1ODg2IDExLjI4MzEgMi4wMDU4OCAxMS4wNTg0IDIuMDk5OSAxMC44NTk5QzIuMTkzOTMgMTAuNjUxIDIuMzE0MDcgMTAuNDU3NyAyLjQ2MDMzIDEwLjI4MDFDMi43ODQyIDkuOTU2MjUgMy4xOTE2NCA5Ljc5NDMyIDMuNjgyNjYgOS43OTQzMkM0LjE4NDEzIDkuNzk0MzIgNC41OTY4IDkuOTU2MjUgNC45MjA2NyAxMC4yODAxQzUuMDk4MjcgMTAuNDU3NyA1LjIyMzY0IDEwLjY1MSA1LjI5Njc3IDEwLjg1OTlDNS4zODAzNSAxMS4wNTg0IDUuNDIyMTQgMTEuMjgzMSA1LjQyMjE0IDExLjUzMzhDNS40MjIxNCAxMS43ODQ1IDUuMzgwMzUgMTIuMDE0NCA1LjI5Njc3IDEyLjIyMzNDNS4yMjM2NCAxMi40MjE4IDUuMTEzOTQgMTIuNjA5OSA0Ljk2NzY4IDEyLjc4NzVaXCIsXCJmaWxsXCI6XCIjRDNEM0QzXCJ9fSldKSxfdm0uX3YoXCIgXCIpLCghX3ZtLmlzTGljZW5zZUFjdGl2YXRlZCk/X2MoJ3NwYW4nLFtfdm0uX3YoXCJBY3RpdmF0ZSBMaWNlbnNlXCIpXSk6X3ZtLl9lKCksX3ZtLl92KFwiIFwiKSwoX3ZtLmlzTGljZW5zZUFjdGl2YXRlZCk/X2MoJ3NwYW4nLFtfdm0uX3YoXCJEZWFjdGl2YXRlIExpY2Vuc2VcIildKTpfdm0uX2UoKV0pXSldLDEpOl92bS5fZSgpLF92bS5fdihcIiBcIiksKCFfdm0uaXNMaWNlbnNlQWN0aXZhdGVkKT9fYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJnby1wcm8tYmFubmVyXCJ9LFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJnby1wcm8tYmFubmVyX19zdWJ0aXRsZVwifSxbX3ZtLl92KFwiRmVhdHVyZXMgJiBJbnRlZ3JhdGlvbnNcIildKSxfdm0uX3YoXCIgXCIpLF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcImdvLXByby1iYW5uZXJfX3RpdGxlXCJ9LFtfdm0uX3YoXCJFeHRlbmQgZnVuY3Rpb25hbGl0eSB3aXRoIFBSTyBBZGRvbnNcIildKSxfdm0uX3YoXCIgXCIpLF9jKCdjeC12dWktYnV0dG9uJyx7c3RhdGljQ2xhc3M6XCJnby1wcm8tYmFubmVyX19idXR0b25cIixhdHRyczp7XCJidXR0b24tc3R5bGVcIjpcImRlZmF1bHRcIixcInNpemVcIjpcIm1pbmlcIixcInVybFwiOl92bS5nb1Byb0xpbmssXCJ0YWctbmFtZVwiOlwiYVwiLFwidGFyZ2V0XCI6XCJfYmxhbmtcIn19LFtfYygnc3Bhbicse2F0dHJzOntcInNsb3RcIjpcImxhYmVsXCJ9LHNsb3Q6XCJsYWJlbFwifSxbX2MoJ3NwYW4nLFtfdm0uX3YoXCJHbyBQcm9cIildKV0pXSldLDEpOl92bS5fZSgpXSksX3ZtLl92KFwiIFwiKSwoMCE9PU9iamVjdC5rZXlzKF92bS5pbnN0YWxsZWRBZGRvbkxpc3QpLmxlbmd0aCk/X2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiamZiLWFkZG9uc1wifSxbX3ZtLl9tKDApLF92bS5fdihcIiBcIiksX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiamZiLWFkZG9uc19fbGlzdFwifSxfdm0uX2woKF92bS5pbnN0YWxsZWRBZGRvbkxpc3QpLGZ1bmN0aW9uKGFkZG9uRGF0YSxpbmRleCl7cmV0dXJuIF9jKCdBZGRvbkl0ZW0nLHtrZXk6aW5kZXgsYXR0cnM6e1wiYWRkb24tZGF0YVwiOmFkZG9uRGF0YX19KX0pLDEpXSk6X3ZtLl9lKCksX3ZtLl92KFwiIFwiKSwoMCE9PU9iamVjdC5rZXlzKF92bS5hdmFpbGFibGVBZGRvbkxpc3QpLmxlbmd0aCk/X2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiamZiLWFkZG9uc1wifSxbX3ZtLl9tKDEpLF92bS5fdihcIiBcIiksX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiamZiLWFkZG9uc19fbGlzdFwifSxfdm0uX2woKF92bS5hdmFpbGFibGVBZGRvbkxpc3QpLGZ1bmN0aW9uKGFkZG9uRGF0YSxpbmRleCl7cmV0dXJuIF9jKCdBZGRvbkl0ZW0nLHtrZXk6aW5kZXgsYXR0cnM6e1wiYWRkb24tZGF0YVwiOmFkZG9uRGF0YX19KX0pLDEpXSk6X3ZtLl9lKCldKSxfdm0uX3YoXCIgXCIpLF9jKCdjeC12dWktcG9wdXAnLHtzdGF0aWNDbGFzczpcImpmYi1hZGRvbnMtcGFnZV9fbGljZW5zZS1wb3B1cFwiLGF0dHJzOntcImZvb3RlclwiOmZhbHNlLFwiYm9keS13aWR0aFwiOlwiNTQwcHhcIn0sbW9kZWw6e3ZhbHVlOihfdm0ubGljZW5zZVBvcHVwVmlzaWJsZSksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS5saWNlbnNlUG9wdXBWaXNpYmxlPSQkdn0sZXhwcmVzc2lvbjpcImxpY2Vuc2VQb3B1cFZpc2libGVcIn19LFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJjeC12dWktcG9wdXBfX2hlYWRlci10aXRsZVwiLGF0dHJzOntcInNsb3RcIjpcInRpdGxlXCJ9LHNsb3Q6XCJ0aXRsZVwifSxbKCFfdm0uaXNMaWNlbnNlQWN0aXZhdGVkKT9fYygnc3BhbicsW192bS5fdihcIkFjdGl2YXRlIExpY2Vuc2VcIildKTpfdm0uX2UoKSxfdm0uX3YoXCIgXCIpLChfdm0uaXNMaWNlbnNlQWN0aXZhdGVkKT9fYygnc3BhbicsW192bS5fdihcIkRlYWN0aXZhdGUgTGljZW5zZVwiKV0pOl92bS5fZSgpXSksX3ZtLl92KFwiIFwiKSxfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJqZmItYWRkb25zLXBhZ2VfX2xpY2Vuc2UtZm9ybVwiLGF0dHJzOntcInNsb3RcIjpcImNvbnRlbnRcIn0sc2xvdDpcImNvbnRlbnRcIn0sWyghX3ZtLmlzTGljZW5zZUFjdGl2YXRlZCk/X2MoJ3NwYW4nLFtfdm0uX3YoXCJBY3RpdmF0ZSBsaWNlbnNlIGZvciBhdXRvbWF0aWMgdXBkYXRlcyBhbmQgYXdlc29tZSBzdXBwb3J0XCIpXSk6X3ZtLl9lKCksX3ZtLl92KFwiIFwiKSwoX3ZtLmlzTGljZW5zZUFjdGl2YXRlZCk/X2MoJ3NwYW4nLFtfdm0uX3YoXCJCeSBkZWFjdGl2YXRpbmcgdGhlIGxpY2Vuc2UgeW91IHdpbGwgbm90IGJlIGFibGUgdG8gdXBkYXRlIHRoZSBhZGRvbnNcIildKTpfdm0uX2UoKSxfdm0uX3YoXCIgXCIpLF9jKCdjeC12dWktaW5wdXQnLHtzdGF0aWNDbGFzczpcImpmYi1hZGRvbnMtcGFnZV9fbGljZW5zZS1pbnB1dFwiLGF0dHJzOntcInNpemVcIjpcImZ1bGx3aWR0aFwiLFwidHlwZVwiOlwicGFzc3dvcmRcIixcImF1dG9mb2N1c1wiOnRydWUsXCJwcmV2ZW50LXdyYXBcIjp0cnVlLFwicGxhY2Vob2xkZXJcIjpcIkp1c3QgcGFzdGUgaXQgaGVyZVwifSxtb2RlbDp7dmFsdWU6KF92bS5saWNlbnNlS2V5KSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLmxpY2Vuc2VLZXk9JCR2fSxleHByZXNzaW9uOlwibGljZW5zZUtleVwifX0pLF92bS5fdihcIiBcIiksX2MoJ2N4LXZ1aS1idXR0b24nLHtzdGF0aWNDbGFzczpcImpmYi1hZGRvbnMtcGFnZV9fbGljZW5zZS1hY3Rpb25cIixhdHRyczp7XCJidXR0b24tc3R5bGVcIjpcImFjY2VudFwiLFwic2l6ZVwiOlwibWluaVwiLFwibG9hZGluZ1wiOl92bS5saWNlbnNlUHJvY2Nlc2luZ1N0YXRlfSxvbjp7XCJjbGlja1wiOl92bS5saWNlbnNlQWN0aW9ufX0sW19jKCdzcGFuJyx7YXR0cnM6e1wic2xvdFwiOlwibGFiZWxcIn0sc2xvdDpcImxhYmVsXCJ9LFsoIV92bS5pc0xpY2Vuc2VBY3RpdmF0ZWQpP19jKCdzcGFuJyxbX3ZtLl92KFwiQWN0aXZhdGVcIildKTpfdm0uX2UoKSxfdm0uX3YoXCIgXCIpLChfdm0uaXNMaWNlbnNlQWN0aXZhdGVkKT9fYygnc3BhbicsW192bS5fdihcIkRlYWN0aXZhdGVcIildKTpfdm0uX2UoKV0pXSldLDEpXSldLDEpfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcImpmYi1hZGRvbnNfX2hlYWRlclwifSxbX2MoJ3NwYW4nLHtzdGF0aWNDbGFzczpcImN4LXZ1aS1zdWJ0aXRsZVwifSxbX3ZtLl92KFwiWW91ciBJbnN0YWxsZWQgQWRkb25zXCIpXSldKX0sZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJqZmItYWRkb25zX19oZWFkZXJcIn0sW19jKCdzcGFuJyx7c3RhdGljQ2xhc3M6XCJjeC12dWktc3VidGl0bGVcIn0sW192bS5fdihcIkFsbCBBdmFpbGFibGUgQWRkb25zXCIpXSldKX1dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJqZmItYWRkb25zX19pdGVtXCIsY2xhc3M6e1xuXHRcdCdhY3RpdmF0ZWQnOiBfdm0uYWRkb25EYXRhLmlzQWN0aXZhdGVkLFxuXHRcdCd1cGRhdGUtYXZhbGlhYmxlJzogX3ZtLnVwZGF0ZUF2YWxpYWJsZSxcblx0fX0sW19jKCdkaXYnLHtzdGF0aWNDbGFzczpcImpmYi1hZGRvbnNfX2l0ZW0taW5uZXJcIixjbGFzczp7ICdwcm9jY2VzaW5nLXN0YXRlJzogX3ZtLnByb2NjZXNpbmdTdGF0ZSB9fSxbX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiamZiLWFkZG9uc19faXRlbS10aHVtYlwifSxbKCFfdm0uYWRkb25EYXRhLmlzSW5zdGFsbGVkKT9fYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJwcm8tYmFkZ2VcIn0sW19jKCdzdmcnLHthdHRyczp7XCJ3aWR0aFwiOlwiNDBcIixcImhlaWdodFwiOlwiMjBcIixcInZpZXdCb3hcIjpcIjAgMCA0MCAyMFwiLFwiZmlsbFwiOlwibm9uZVwiLFwieG1sbnNcIjpcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJ9fSxbX2MoJ3JlY3QnLHthdHRyczp7XCJ3aWR0aFwiOlwiNDBcIixcImhlaWdodFwiOlwiMjBcIixcInJ4XCI6XCI0XCIsXCJmaWxsXCI6XCIjRUU3QjE2XCJ9fSksX3ZtLl92KFwiIFwiKSxfYygncGF0aCcse2F0dHJzOntcImRcIjpcIk0xMC42MjUgMTAuODMwMVYxNEg5LjE0MjU4VjUuNDY4NzVIMTIuNDA2MkMxMy4zNTk0IDUuNDY4NzUgMTQuMTE1MiA1LjcxNjggMTQuNjczOCA2LjIxMjg5QzE1LjIzNjMgNi43MDg5OCAxNS41MTc2IDcuMzY1MjMgMTUuNTE3NiA4LjE4MTY0QzE1LjUxNzYgOS4wMTc1OCAxNS4yNDIyIDkuNjY3OTcgMTQuNjkxNCAxMC4xMzI4QzE0LjE0NDUgMTAuNTk3NyAxMy4zNzcgMTAuODMwMSAxMi4zODg3IDEwLjgzMDFIMTAuNjI1Wk0xMC42MjUgOS42NDA2MkgxMi40MDYyQzEyLjkzMzYgOS42NDA2MiAxMy4zMzU5IDkuNTE3NTggMTMuNjEzMyA5LjI3MTQ4QzEzLjg5MDYgOS4wMjE0OCAxNC4wMjkzIDguNjYyMTEgMTQuMDI5MyA4LjE5MzM2QzE0LjAyOTMgNy43MzI0MiAxMy44ODg3IDcuMzY1MjMgMTMuNjA3NCA3LjA5MThDMTMuMzI2MiA2LjgxNDQ1IDEyLjkzOTUgNi42NzE4OCAxMi40NDczIDYuNjY0MDZIMTAuNjI1VjkuNjQwNjJaTTE5Ljk1MzEgMTAuNzEyOUgxOC4zMDA4VjE0SDE2LjgxODRWNS40Njg3NUgxOS44MTg0QzIwLjgwMjcgNS40Njg3NSAyMS41NjI1IDUuNjg5NDUgMjIuMDk3NyA2LjEzMDg2QzIyLjYzMjggNi41NzIyNyAyMi45MDA0IDcuMjEwOTQgMjIuOTAwNCA4LjA0Njg4QzIyLjkwMDQgOC42MTcxOSAyMi43NjE3IDkuMDk1NyAyMi40ODQ0IDkuNDgyNDJDMjIuMjEwOSA5Ljg2NTIzIDIxLjgyODEgMTAuMTYwMiAyMS4zMzU5IDEwLjM2NzJMMjMuMjUyIDEzLjkyMzhWMTRIMjEuNjY0MUwxOS45NTMxIDEwLjcxMjlaTTE4LjMwMDggOS41MjM0NEgxOS44MjQyQzIwLjMyNDIgOS41MjM0NCAyMC43MTQ4IDkuMzk4NDQgMjAuOTk2MSA5LjE0ODQ0QzIxLjI3NzMgOC44OTQ1MyAyMS40MTggOC41NDg4MyAyMS40MTggOC4xMTEzM0MyMS40MTggNy42NTQzIDIxLjI4NzEgNy4zMDA3OCAyMS4wMjU0IDcuMDUwNzhDMjAuNzY3NiA2LjgwMDc4IDIwLjM4MDkgNi42NzE4OCAxOS44NjUyIDYuNjY0MDZIMTguMzAwOFY5LjUyMzQ0Wk0zMS4xMTUyIDkuOTU3MDNDMzEuMTE1MiAxMC43OTMgMzAuOTcwNyAxMS41MjczIDMwLjY4MTYgMTIuMTYwMkMzMC4zOTI2IDEyLjc4OTEgMjkuOTc4NSAxMy4yNzM0IDI5LjQzOTUgMTMuNjEzM0MyOC45MDQzIDEzLjk0OTIgMjguMjg3MSAxNC4xMTcyIDI3LjU4NzkgMTQuMTE3MkMyNi44OTY1IDE0LjExNzIgMjYuMjc5MyAxMy45NDkyIDI1LjczNjMgMTMuNjEzM0MyNS4xOTczIDEzLjI3MzQgMjQuNzc5MyAxMi43OTEgMjQuNDgyNCAxMi4xNjZDMjQuMTg5NSAxMS41NDEgMjQuMDQxIDEwLjgyMDMgMjQuMDM3MSAxMC4wMDM5VjkuNTIzNDRDMjQuMDM3MSA4LjY5MTQxIDI0LjE4MzYgNy45NTcwMyAyNC40NzY2IDcuMzIwMzFDMjQuNzczNCA2LjY4MzU5IDI1LjE4OTUgNi4xOTcyNyAyNS43MjQ2IDUuODYxMzNDMjYuMjYzNyA1LjUyMTQ4IDI2Ljg4MDkgNS4zNTE1NiAyNy41NzYyIDUuMzUxNTZDMjguMjcxNSA1LjM1MTU2IDI4Ljg4NjcgNS41MTk1MyAyOS40MjE5IDUuODU1NDdDMjkuOTYwOSA2LjE4NzUgMzAuMzc3IDYuNjY3OTcgMzAuNjY5OSA3LjI5Njg4QzMwLjk2MjkgNy45MjE4OCAzMS4xMTEzIDguNjUwMzkgMzEuMTE1MiA5LjQ4MjQyVjkuOTU3MDNaTTI5LjYzMjggOS41MTE3MkMyOS42MzI4IDguNTY2NDEgMjkuNDUzMSA3Ljg0MTggMjkuMDkzOCA3LjMzNzg5QzI4LjczODMgNi44MzM5OCAyOC4yMzI0IDYuNTgyMDMgMjcuNTc2MiA2LjU4MjAzQzI2LjkzNTUgNi41ODIwMyAyNi40MzM2IDYuODMzOTggMjYuMDcwMyA3LjMzNzg5QzI1LjcxMDkgNy44Mzc4OSAyNS41MjczIDguNTQ2ODggMjUuNTE5NSA5LjQ2NDg0VjkuOTU3MDNDMjUuNTE5NSAxMC44OTQ1IDI1LjcwMTIgMTEuNjE5MSAyNi4wNjQ1IDEyLjEzMDlDMjYuNDMxNiAxMi42NDI2IDI2LjkzOTUgMTIuODk4NCAyNy41ODc5IDEyLjg5ODRDMjguMjQ0MSAxMi44OTg0IDI4Ljc0OCAxMi42NDg0IDI5LjA5OTYgMTIuMTQ4NEMyOS40NTUxIDExLjY0ODQgMjkuNjMyOCAxMC45MTggMjkuNjMyOCA5Ljk1NzAzVjkuNTExNzJaXCIsXCJmaWxsXCI6XCJ3aGl0ZVwifX0pXSldKTpfdm0uX2UoKSxfdm0uX3YoXCIgXCIpLF9jKCdpbWcnLHthdHRyczp7XCJzcmNcIjpfdm0uYWRkb25EYXRhLnRodW1iLFwiYWx0XCI6XCJcIn19KV0pLF92bS5fdihcIiBcIiksX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiamZiLWFkZG9uc19faXRlbS1pbmZvXCJ9LFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJqZmItYWRkb25zX19pdGVtLW5hbWVcIn0sW19jKCdzcGFuJyx7c3RhdGljQ2xhc3M6XCJsYWJlbFwifSxbX3ZtLl92KF92bS5fcyhfdm0uYWRkb25EYXRhLm5hbWUpKV0pLF92bS5fdihcIiBcIiksX2MoJ3NwYW4nLHtzdGF0aWNDbGFzczpcInZlcnNpb25cIn0sW192bS5fdihfdm0uX3MoX3ZtLmFkZG9uRGF0YS5jdXJyZW50VmVyc2lvbikpXSldKSxfdm0uX3YoXCIgXCIpLChfdm0uJHBhcmVudC5pc0xpY2Vuc2VBY3RpdmF0ZWQpP19jKCdkaXYnLHtzdGF0aWNDbGFzczpcImpmYi1hZGRvbnNfX2l0ZW0tdXBkYXRlXCJ9LFsoIV92bS51cGRhdGVBdmFsaWFibGUpP19jKCdkaXYnLFtfdm0uX3YoXCJZb3VyIHBsdWdpbiBpcyB1cCB0byBkYXRlXCIpXSk6X3ZtLl9lKCksX3ZtLl92KFwiIFwiKSwoX3ZtLnVwZGF0ZUF2YWxpYWJsZSk/X2MoJ2RpdicsW192bS5fdihcIlxcblxcdFxcdFxcdFxcdFxcdFZlcnNpb24gXCIpLF9jKCdzcGFuJyx7c3RhdGljQ2xhc3M6XCJsYXRlc3QtdmVyc2lvblwifSxbX3ZtLl92KF92bS5fcyhfdm0uYWRkb25EYXRhLnZlcnNpb24pKV0pLF92bS5fdihcIiBhdmFpbGFibGVcXG5cXHRcXHRcXHRcXHRcXHRcIiksKCFfdm0uYWN0aXZhdGVMaWNlbmNlQWN0aW9uQXZhbGlhYmxlICYmIF92bS5pc0xpY2Vuc2VNb2RlKT9fYygnY3gtdnVpLWJ1dHRvbicse2F0dHJzOntcImJ1dHRvbi1zdHlsZVwiOlwibGluay1hY2NlbnRcIixcInNpemVcIjpcImxpbmtcIixcImxvYWRpbmdcIjpfdm0udXBkYXRlUGx1Z2luUHJvY2Vzc2VkfSxvbjp7XCJjbGlja1wiOl92bS51cGRhdGVQbHVnaW59fSxbX2MoJ3NwYW4nLHthdHRyczp7XCJzbG90XCI6XCJsYWJlbFwifSxzbG90OlwibGFiZWxcIn0sW19jKCdzcGFuJyxbX3ZtLl92KFwiVXBkYXRlIE5vd1wiKV0pXSldKTpfdm0uX2UoKV0sMSk6X3ZtLl9lKCldKTpfdm0uX2UoKSxfdm0uX3YoXCIgXCIpLChfdm0uYWN0aXZhdGVMaWNlbmNlQWN0aW9uQXZhbGlhYmxlKT9fYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJqZmItYWRkb25zX19pdGVtLWxpY2Vuc2VcIn0sW19jKCdzcGFuJyxbX3ZtLl92KFwiTGljZW5zZSBub3QgYWN0aXZhdGVkXCIpXSksX3ZtLl92KFwiIFwiKSxfYygnY3gtdnVpLWJ1dHRvbicse2F0dHJzOntcImJ1dHRvbi1zdHlsZVwiOlwibGluay1hY2NlbnRcIixcInNpemVcIjpcImxpbmtcIn0sb246e1wiY2xpY2tcIjpfdm0uYWN0aXZhdGVMaWNlbnNlfX0sW19jKCdzcGFuJyx7YXR0cnM6e1wic2xvdFwiOlwibGFiZWxcIn0sc2xvdDpcImxhYmVsXCJ9LFtfYygnc3BhbicsW192bS5fdihcIkFjdGl2YXRlIE5vd1wiKV0pXSldKV0sMSk6X3ZtLl9lKCksX3ZtLl92KFwiIFwiKSxfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJqZmItYWRkb25zX19pdGVtLWRlc2NcIn0sW19jKCdzcGFuJyx7ZG9tUHJvcHM6e1wiaW5uZXJIVE1MXCI6X3ZtLl9zKF92bS5hZGRvbkRhdGEuZGVzYyl9fSksX3ZtLl92KFwiIFwiKSxfYygnYScse2F0dHJzOntcImhyZWZcIjpfdm0ubGVhcm5Nb3JlVXJsLFwidGFyZ2V0XCI6XCJfYmxhbmtcIn19LFtfdm0uX3YoXCJMZWFybiBNb3JlXCIpXSldKSxfdm0uX3YoXCIgXCIpLF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcImpmYi1hZGRvbnNfX2l0ZW0tYWN0aW9uc1wifSxbKF92bS5pbnN0YWxsQWN0aW9uQXZhbGlhYmxlKT9fYygnY3gtdnVpLWJ1dHRvbicse2F0dHJzOntcImJ1dHRvbi1zdHlsZVwiOlwibGluay1hY2NlbnRcIixcInNpemVcIjpcImxpbmtcIixcImxvYWRpbmdcIjpfdm0uYWN0aW9uUGx1Z2luUHJvY2Vzc2VkfSxvbjp7XCJjbGlja1wiOl92bS5pbnN0YWxsUGx1Z2lufX0sW19jKCdzcGFuJyx7YXR0cnM6e1wic2xvdFwiOlwibGFiZWxcIn0sc2xvdDpcImxhYmVsXCJ9LFtfYygnc3BhbicsW192bS5fdihcIkluc3RhbGwgQWRkb25cIildKV0pXSk6X3ZtLl9lKCksX3ZtLl92KFwiIFwiKSwoX3ZtLmFjdGl2YXRlQWN0aW9uQXZhbGlhYmxlKT9fYygnY3gtdnVpLWJ1dHRvbicse2F0dHJzOntcImJ1dHRvbi1zdHlsZVwiOlwibGluay1hY2NlbnRcIixcInNpemVcIjpcImxpbmtcIixcImxvYWRpbmdcIjpfdm0uYWN0aW9uUGx1Z2luUHJvY2Vzc2VkfSxvbjp7XCJjbGlja1wiOl92bS5hY3RpdmF0ZVBsdWdpbn19LFtfYygnc3Bhbicse2F0dHJzOntcInNsb3RcIjpcImxhYmVsXCJ9LHNsb3Q6XCJsYWJlbFwifSxbX2MoJ3NwYW4nLFtfdm0uX3YoXCJBY3RpdmF0ZSBBZGRvblwiKV0pXSldKTpfdm0uX2UoKSxfdm0uX3YoXCIgXCIpLChfdm0uZGVhY3RpdmF0ZUFjdGlvbkF2YWxpYWJsZSk/X2MoJ2N4LXZ1aS1idXR0b24nLHthdHRyczp7XCJidXR0b24tc3R5bGVcIjpcImxpbmstZXJyb3JcIixcInNpemVcIjpcImxpbmtcIixcImxvYWRpbmdcIjpfdm0uYWN0aW9uUGx1Z2luUHJvY2Vzc2VkfSxvbjp7XCJjbGlja1wiOl92bS5kZWFjdGl2YXRlUGx1Z2lufX0sW19jKCdzcGFuJyx7YXR0cnM6e1wic2xvdFwiOlwibGFiZWxcIn0sc2xvdDpcImxhYmVsXCJ9LFtfYygnc3BhbicsW192bS5fdihcIkRlYWN0aXZhdGUgQWRkb25cIildKV0pXSk6X3ZtLl9lKCldLDEpXSldKV0pfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyIC8qIHNlcnZlciBvbmx5ICovLFxuICBzaGFkb3dNb2RlIC8qIHZ1ZS1jbGkgb25seSAqL1xuKSB7XG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPVxuICAgIHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7XG4gICAgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpbmplY3RTdHlsZXMuY2FsbChcbiAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAob3B0aW9ucy5mdW5jdGlvbmFsID8gdGhpcy5wYXJlbnQgOiB0aGlzKS4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9uYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24oaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZyA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaykgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FkZG9uc1BhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWUyNDlkMGUmbGFuZz1zY3NzXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjdmYWJhOTkyXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRkb25zUGFnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01ZTI0OWQwZSZsYW5nPXNjc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FkZG9uc1BhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWUyNDlkMGUmbGFuZz1zY3NzXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRkb25JdGVtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWI1MDc0M2I0Jmxhbmc9c2Nzc1wiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI2MjJhMTI4NFwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FkZG9uSXRlbS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1iNTA3NDNiNCZsYW5nPXNjc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FkZG9uSXRlbS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1iNTA3NDNiNCZsYW5nPXNjc3NcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuICBNb2RpZmllZCBieSBFdmFuIFlvdSBAeXl4OTkwODAzXG4qL1xuXG5pbXBvcnQgbGlzdFRvU3R5bGVzIGZyb20gJy4vbGlzdFRvU3R5bGVzJ1xuXG52YXIgaGFzRG9jdW1lbnQgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG5cbmlmICh0eXBlb2YgREVCVUcgIT09ICd1bmRlZmluZWQnICYmIERFQlVHKSB7XG4gIGlmICghaGFzRG9jdW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ3Z1ZS1zdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudC4gJyArXG4gICAgXCJVc2UgeyB0YXJnZXQ6ICdub2RlJyB9IGluIHlvdXIgV2VicGFjayBjb25maWcgdG8gaW5kaWNhdGUgYSBzZXJ2ZXItcmVuZGVyaW5nIGVudmlyb25tZW50LlwiXG4gICkgfVxufVxuXG4vKlxudHlwZSBTdHlsZU9iamVjdCA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgcGFydHM6IEFycmF5PFN0eWxlT2JqZWN0UGFydD5cbn1cblxudHlwZSBTdHlsZU9iamVjdFBhcnQgPSB7XG4gIGNzczogc3RyaW5nO1xuICBtZWRpYTogc3RyaW5nO1xuICBzb3VyY2VNYXA6ID9zdHJpbmdcbn1cbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHsvKlxuICBbaWQ6IG51bWJlcl06IHtcbiAgICBpZDogbnVtYmVyLFxuICAgIHJlZnM6IG51bWJlcixcbiAgICBwYXJ0czogQXJyYXk8KG9iaj86IFN0eWxlT2JqZWN0UGFydCkgPT4gdm9pZD5cbiAgfVxuKi99XG5cbnZhciBoZWFkID0gaGFzRG9jdW1lbnQgJiYgKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSlcbnZhciBzaW5nbGV0b25FbGVtZW50ID0gbnVsbFxudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwXG52YXIgaXNQcm9kdWN0aW9uID0gZmFsc2VcbnZhciBub29wID0gZnVuY3Rpb24gKCkge31cbnZhciBvcHRpb25zID0gbnVsbFxudmFyIHNzcklkS2V5ID0gJ2RhdGEtdnVlLXNzci1pZCdcblxuLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4vLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG52YXIgaXNPbGRJRSA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIC9tc2llIFs2LTldXFxiLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkU3R5bGVzQ2xpZW50IChwYXJlbnRJZCwgbGlzdCwgX2lzUHJvZHVjdGlvbiwgX29wdGlvbnMpIHtcbiAgaXNQcm9kdWN0aW9uID0gX2lzUHJvZHVjdGlvblxuXG4gIG9wdGlvbnMgPSBfb3B0aW9ucyB8fCB7fVxuXG4gIHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIGxpc3QpXG4gIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG4gICAgdmFyIG1heVJlbW92ZSA9IFtdXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgICAgZG9tU3R5bGUucmVmcy0tXG4gICAgICBtYXlSZW1vdmUucHVzaChkb21TdHlsZSlcbiAgICB9XG4gICAgaWYgKG5ld0xpc3QpIHtcbiAgICAgIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbmV3TGlzdClcbiAgICAgIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzID0gW11cbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXVxuICAgICAgaWYgKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKClcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMgLyogQXJyYXk8U3R5bGVPYmplY3Q+ICovKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgZG9tU3R5bGUucmVmcysrXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pXG4gICAgICB9XG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIGlmIChkb21TdHlsZS5wYXJ0cy5sZW5ndGggPiBpdGVtLnBhcnRzLmxlbmd0aCkge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5sZW5ndGggPSBpdGVtLnBhcnRzLmxlbmd0aFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGFydHMgPSBbXVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHsgaWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0cyB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAoKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gIHN0eWxlRWxlbWVudC50eXBlID0gJ3RleHQvY3NzJ1xuICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudClcbiAgcmV0dXJuIHN0eWxlRWxlbWVudFxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICB2YXIgdXBkYXRlLCByZW1vdmVcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlWycgKyBzc3JJZEtleSArICd+PVwiJyArIG9iai5pZCArICdcIl0nKVxuXG4gIGlmIChzdHlsZUVsZW1lbnQpIHtcbiAgICBpZiAoaXNQcm9kdWN0aW9uKSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBhbmQgaW4gcHJvZHVjdGlvbiBtb2RlLlxuICAgICAgLy8gc2ltcGx5IGRvIG5vdGhpbmcuXG4gICAgICByZXR1cm4gbm9vcFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBidXQgaW4gZGV2IG1vZGUuXG4gICAgICAvLyBmb3Igc29tZSByZWFzb24gQ2hyb21lIGNhbid0IGhhbmRsZSBzb3VyY2UgbWFwIGluIHNlcnZlci1yZW5kZXJlZFxuICAgICAgLy8gc3R5bGUgdGFncyAtIHNvdXJjZSBtYXBzIGluIDxzdHlsZT4gb25seSB3b3JrcyBpZiB0aGUgc3R5bGUgdGFnIGlzXG4gICAgICAvLyBjcmVhdGVkIGFuZCBpbnNlcnRlZCBkeW5hbWljYWxseS4gU28gd2UgcmVtb3ZlIHRoZSBzZXJ2ZXIgcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlcyBhbmQgaW5qZWN0IG5ldyBvbmVzLlxuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIGlmIChpc09sZElFKSB7XG4gICAgLy8gdXNlIHNpbmdsZXRvbiBtb2RlIGZvciBJRTkuXG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKytcbiAgICBzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KCkpXG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpXG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSlcbiAgfSBlbHNlIHtcbiAgICAvLyB1c2UgbXVsdGktc3R5bGUtdGFnIG1vZGUgaW4gYWxsIG90aGVyIGNhc2VzXG4gICAgc3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KClcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KVxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICB1cGRhdGUob2JqKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG4gICAgICAgICAgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcbiAgICAgICAgICBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iailcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKClcbiAgICB9XG4gIH1cbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnRcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKVxuICB9XG59KSgpXG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3NcblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcylcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcylcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSlcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGVFbGVtZW50LCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3NcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwXG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSlcbiAgfVxuICBpZiAob3B0aW9ucy5zc3JJZCkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoc3NySWRLZXksIG9iai5pZClcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXApIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RldnRvb2xzL2RvY3MvamF2YXNjcmlwdC1kZWJ1Z2dpbmdcbiAgICAvLyB0aGlzIG1ha2VzIHNvdXJjZSBtYXBzIGluc2lkZSBzdHlsZSB0YWdzIHdvcmsgcHJvcGVybHkgaW4gQ2hyb21lXG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlVVJMPScgKyBzb3VyY2VNYXAuc291cmNlc1swXSArICcgKi8nXG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJyArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyAnICovJ1xuICB9XG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzc1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKVxuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSlcbiAgfVxufVxuIiwiLyoqXG4gKiBUcmFuc2xhdGVzIHRoZSBsaXN0IGZvcm1hdCBwcm9kdWNlZCBieSBjc3MtbG9hZGVyIGludG8gc29tZXRoaW5nXG4gKiBlYXNpZXIgdG8gbWFuaXB1bGF0ZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChwYXJlbnRJZCwgbGlzdCkge1xuICB2YXIgc3R5bGVzID0gW11cbiAgdmFyIG5ld1N0eWxlcyA9IHt9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXVxuICAgIHZhciBpZCA9IGl0ZW1bMF1cbiAgICB2YXIgY3NzID0gaXRlbVsxXVxuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl1cbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXVxuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgaWQ6IHBhcmVudElkICsgJzonICsgaSxcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9XG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0geyBpZDogaWQsIHBhcnRzOiBbcGFydF0gfSlcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpXG4gICAgfVxuICB9XG4gIHJldHVybiBzdHlsZXNcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQWRkb25zUGFnZSBmcm9tICcuL0FkZG9uc1BhZ2UnO1xuXG5jb25zdCB7IHJlbmRlckN1cnJlbnRQYWdlIH0gPSB3aW5kb3cuSmV0RkJBY3Rpb25zO1xuXG5yZW5kZXJDdXJyZW50UGFnZSggQWRkb25zUGFnZSApOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==