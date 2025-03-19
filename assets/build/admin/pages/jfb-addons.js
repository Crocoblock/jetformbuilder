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
}`, "",{"version":3,"sources":["webpack://./admin/pages/jfb-addons/AddonsPage.vue","webpack://./../AddonsPage.vue"],"names":[],"mappings":"AAwaA;EACC,YAAA;EACA,oBAAA;ACvaD;AD2aC;EACC,aAAA;EACA,YAAA;ACxaF;AD2aC;EACC,mBAAA;ACzaF;AD4aC;EACC,aAAA;EACA,yBAAA;EACA,mBAAA;EACA,oBAAA;EACA,gCAAA;AC1aF;AD4aE;EACC,iBAAA;AC1aH;AD8aC;EACC,eAAA;EACA,gBAAA;EACA,6BAAA;AC5aF;AD8aE;EACC,iBAAA;AC5aH;AD+aE;EACC,cAAA;EACA,mCAAA;AC7aH;AD+aG;EACC,iDAAA;AC7aJ;ADibI;EACC,aAAA;AC/aL;ADobE;EACC,cAAA;EACA,mCAAA;AClbH;ADobG;EACC,kDAAA;AClbJ;ADsbI;EACC,aAAA;ACpbL;AD0bG;EACC,aAAA;EACA,uBAAA;EACA,mBAAA;ACxbJ;AD8bE;EACC,oBAAA;EACA,gCAAA;EACA,mBAAA;AC5bH;AD+bE;EACC,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cAAA;AC7bH;ADocC;EACC,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,oBAAA;AClcF;ADocE;EACC,mBAAA;AClcH;ADscC;EACC,mBAAA;ACpcF;ADucC;EACC,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;EACA,gCAAA;ACrcF;ADucE;EACC,eAAA;EACA,iBAAA;EACA,gBAAA;EACA,cAAA;EACA,kBAAA;ACrcH;ADwcE;EACC,eAAA;EACA,iBAAA;EACA,gBAAA;EACA,cAAA;EACA,mBAAA;ACtcH;ADycE;EACC,YAAA;EACA,yBAAA;ACvcH","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n\r\n.proccesing-state {\r\n\topacity: 0.5;\r\n\tpointer-events: none;\r\n}\r\n\r\n.jfb-addons-page {\r\n\t&__inner {\r\n\t\tpadding: 30px;\r\n\t\theight: 100%;\r\n\t}\r\n\r\n\t&__header {\r\n\t\tmargin-bottom: 30px;\r\n\t}\r\n\r\n\t&__header-controls {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: flex-end;\r\n\t\talign-items: center;\r\n\t\tpadding-bottom: 15px;\r\n\t\tborder-bottom: 1px solid #DCDCDD;\r\n\r\n\t\t> .cx-vui-button {\r\n\t\t\tmargin-left: 10px;\r\n\t\t}\r\n\t}\r\n\r\n\t.cx-vui-button {\r\n\t\tfont-size: 13px;\r\n\t\tfont-weight: 400;\r\n\t\tbackground-color: transparent;\r\n\r\n\t\t.button-icon {\r\n\t\t\tmargin-right: 5px;\r\n\t\t}\r\n\r\n\t\t&--style-accent {\r\n\t\t\tcolor: #007cba;\r\n\t\t\tbox-shadow: inset 0 0 0 1px #007cba;\r\n\r\n\t\t\t&:hover {\r\n\t\t\t\tbackground-color: #007cba12;\r\n\t\t\t}\r\n\r\n\t\t\t.button-icon {\r\n\t\t\t\tpath {\r\n\t\t\t\t\tfill: #007cba;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t&--style-danger {\r\n\t\t\tcolor: #d6336c;\r\n\t\t\tbox-shadow: inset 0 0 0 1px #d6336c;\r\n\r\n\t\t\t&:hover {\r\n\t\t\t\tbackground-color: #d6336c12;\r\n\t\t\t}\r\n\r\n\t\t\t.button-icon {\r\n\t\t\t\tpath {\r\n\t\t\t\t\tfill: #d6336c;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t&__content {\r\n\t\t\t> span {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\tjustify-content: center;\r\n\t\t\t\talign-items: center;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t.cx-vui-popup {\r\n\t\t&__header {\r\n\t\t\tpadding-bottom: 15px;\r\n\t\t\tborder-bottom: 1px solid #DCDCDD;\r\n\t\t\tmargin-bottom: 30px;\r\n\t\t}\r\n\r\n\t\t&__header-title {\r\n\t\t\tfont-weight: 500;\r\n\t\t\tfont-size: 24px;\r\n\t\t\tline-height: 36px;\r\n\t\t\tcolor: #23282D;\r\n\t\t}\r\n\t}\r\n\r\n\t&__license-popup {\r\n\t}\r\n\r\n\t&__license-form {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tjustify-content: flex-start;\r\n\t\talign-items: stretch;\r\n\r\n\t\t> span {\r\n\t\t\tmargin-bottom: 10px;\r\n\t\t}\r\n\t}\r\n\r\n\t&__license-input {\r\n\t\tmargin-bottom: 10px;\r\n\t}\r\n\r\n\t.go-pro-banner {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tjustify-content: center;\r\n\t\talign-items: center;\r\n\t\tpadding: 24px 0;\r\n\t\tborder-bottom: 1px solid #DCDCDD;\r\n\r\n\t\t&__subtitle {\r\n\t\t\tfont-size: 18px;\r\n\t\t\tline-height: 1.25;\r\n\t\t\tfont-weight: 500;\r\n\t\t\tcolor: #007CBA;\r\n\t\t\tmargin-bottom: 5px;\r\n\t\t}\r\n\r\n\t\t&__title {\r\n\t\t\tfont-size: 24px;\r\n\t\t\tline-height: 1.25;\r\n\t\t\tfont-weight: 500;\r\n\t\t\tcolor: #23282D;\r\n\t\t\tmargin-bottom: 20px;\r\n\t\t}\r\n\r\n\t\t&__button {\r\n\t\t\tcolor: white;\r\n\t\t\tbackground-color: #007CBA;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n",".proccesing-state {\n  opacity: 0.5;\n  pointer-events: none;\n}\n\n.jfb-addons-page__inner {\n  padding: 30px;\n  height: 100%;\n}\n.jfb-addons-page__header {\n  margin-bottom: 30px;\n}\n.jfb-addons-page__header-controls {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  padding-bottom: 15px;\n  border-bottom: 1px solid #DCDCDD;\n}\n.jfb-addons-page__header-controls > .cx-vui-button {\n  margin-left: 10px;\n}\n.jfb-addons-page .cx-vui-button {\n  font-size: 13px;\n  font-weight: 400;\n  background-color: transparent;\n}\n.jfb-addons-page .cx-vui-button .button-icon {\n  margin-right: 5px;\n}\n.jfb-addons-page .cx-vui-button--style-accent {\n  color: #007cba;\n  box-shadow: inset 0 0 0 1px #007cba;\n}\n.jfb-addons-page .cx-vui-button--style-accent:hover {\n  background-color: rgba(0, 124, 186, 0.0705882353);\n}\n.jfb-addons-page .cx-vui-button--style-accent .button-icon path {\n  fill: #007cba;\n}\n.jfb-addons-page .cx-vui-button--style-danger {\n  color: #d6336c;\n  box-shadow: inset 0 0 0 1px #d6336c;\n}\n.jfb-addons-page .cx-vui-button--style-danger:hover {\n  background-color: rgba(214, 51, 108, 0.0705882353);\n}\n.jfb-addons-page .cx-vui-button--style-danger .button-icon path {\n  fill: #d6336c;\n}\n.jfb-addons-page .cx-vui-button__content > span {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.jfb-addons-page .cx-vui-popup__header {\n  padding-bottom: 15px;\n  border-bottom: 1px solid #DCDCDD;\n  margin-bottom: 30px;\n}\n.jfb-addons-page .cx-vui-popup__header-title {\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 36px;\n  color: #23282D;\n}\n.jfb-addons-page__license-form {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: stretch;\n}\n.jfb-addons-page__license-form > span {\n  margin-bottom: 10px;\n}\n.jfb-addons-page__license-input {\n  margin-bottom: 10px;\n}\n.jfb-addons-page .go-pro-banner {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 24px 0;\n  border-bottom: 1px solid #DCDCDD;\n}\n.jfb-addons-page .go-pro-banner__subtitle {\n  font-size: 18px;\n  line-height: 1.25;\n  font-weight: 500;\n  color: #007CBA;\n  margin-bottom: 5px;\n}\n.jfb-addons-page .go-pro-banner__title {\n  font-size: 24px;\n  line-height: 1.25;\n  font-weight: 500;\n  color: #23282D;\n  margin-bottom: 20px;\n}\n.jfb-addons-page .go-pro-banner__button {\n  color: white;\n  background-color: #007CBA;\n}"],"sourceRoot":""}]);
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
}`, "",{"version":3,"sources":["webpack://./admin/pages/jfb-addons/components/AddonItem.vue","webpack://./../AddonItem.vue"],"names":[],"mappings":"AAkTA;EACC,mBAAA;ACjTD;ADmTC;EACC,gBAAA;ACjTF;ADoTC;EACC,cAAA;AClTF;ADqTC;EACC,mBAAA;ACnTF;ADsTC;EACC,aAAA;EACA,qCAAA;EACA,SAAA;ACpTF;ADsTE;AALD;IAME,qCAAA;ACnTD;AACF;ADsTC;EACC,oCAAA;EACA,mBAAA;ACpTF;ADsTE;EACC,8CAAA;ACpTH;ADwTG;EACC,uBAAA;ACtTJ;AD4TI;EACC,yBAAA;AC1TL;AD+TI;EACC,YAAA;EACA,yBAAA;EACA,gBAAA;EACA,kBAAA;AC7TL;ADmUC;EACC,aAAA;EACA,sBAAA;EACA,oBAAA;EACA,YAAA;ACjUF;ADoUC;EACC,4BAAA;EACA,cAAA;EACA,gBAAA;EACA,kBAAA;AClUF;ADoUE;EACC,kBAAA;EACA,SAAA;EACA,UAAA;AClUH;ADqUE;EACC,WAAA;EACA,YAAA;ACnUH;ADuUC;EACC,aAAA;EACA,sBAAA;EACA,oBAAA;EACA,cAAA;EACA,aAAA;EACA,4BAAA;EACA,2BAAA;EACA,qBAAA;EACA,mBAAA;EACA,uBAAA;ACrUF;ADwUC;EACC,aAAA;EACA,8BAAA;EACA,uBAAA;EACA,mBAAA;ACtUF;ADwUE;EACC,eAAA;EACA,gBAAA;EACA,iBAAA;ACtUH;ADyUE;EACC,gBAAA;EACA,kBAAA;EACA,YAAA;EACA,yBAAA;EACA,iBAAA;ACvUH;AD2UC;EACC,cAAA;EACA,mBAAA;ACzUF;AD4UC;EACC,mBAAA;EACA,cAAA;AC1UF;AD4UE;EACC,gBAAA;AC1UH;AD8UC;EACC,cAAA;AC5UF;AD8UE;EACC,qBAAA;AC5UH;ADgVC;EACC,aAAA;EACA,2BAAA;EACA,mBAAA;EACA,eAAA;EACA,gBAAA;AC9UF;ADgVE;EACC,aAAA;AC9UH;ADiVE;EACC,kBAAA;AC/UH","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n\r\n.jfb-addons {\r\n\tmargin-bottom: 50px;\r\n\r\n\t&:last-child {\r\n\t\tmargin-bottom: 0;\r\n\t}\r\n\r\n\ta {\r\n\t\tcolor: #007cba;\r\n\t}\r\n\r\n\t&__header {\r\n\t\tmargin-bottom: 20px;\r\n\t}\r\n\r\n\t&__list {\r\n\t\tdisplay: grid;\r\n\t\tgrid-template-columns: repeat(4, 1fr);\r\n\t\tgap: 40px;\r\n\r\n\t\t@media (max-width: 1140px) {\r\n\t\t\tgrid-template-columns: repeat(2, 1fr);\r\n\t\t}\r\n\t}\r\n\r\n\t&__item {\r\n\t\ttransition: box-shadow .3s ease-out;\r\n\t\tborder-radius: 10px;\r\n\r\n\t\t&:hover {\r\n\t\t\tbox-shadow: 0px 4px 28px rgba(15, 23, 42, 0.1);\r\n\t\t}\r\n\r\n\t\t&.activated {\r\n\t\t\t.jfb-addons__item-info {\r\n\t\t\t\tbackground-color: white;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t&.update-avaliable {\r\n\t\t\t.jfb-addons__item-name {\r\n\t\t\t\t.version {\r\n\t\t\t\t\tbackground-color: #D6336C;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t.jfb-addons__item-update {\r\n\t\t\t\t.latest-version {\r\n\t\t\t\t\tcolor: white;\r\n\t\t\t\t\tbackground-color: #46B450;\r\n\t\t\t\t\tpadding: 2px 8px;\r\n\t\t\t\t\tborder-radius: 4px;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t&__item-inner {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\talign-items: stretch;\r\n\t\theight: 100%;\r\n\t}\r\n\r\n\t&__item-thumb {\r\n\t\tborder-radius: 10px 10px 0 0;\r\n\t\tline-height: 0;\r\n\t\toverflow: hidden;\r\n\t\tposition: relative;\r\n\r\n\t\t.pro-badge {\r\n\t\t\tposition: absolute;\r\n\t\t\ttop: 12px;\r\n\t\t\tleft: 12px;\r\n\t\t}\r\n\r\n\t\timg {\r\n\t\t\twidth: 100%;\r\n\t\t\theight: auto;\r\n\t\t}\r\n\t}\r\n\r\n\t&__item-info {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\talign-items: stretch;\r\n\t\tflex: 1 1 auto;\r\n\t\tpadding: 20px;\r\n\t\tborder-radius: 0 0 10px 10px;\r\n\t\tborder-width: 0 1px 1px 1px;\r\n\t\tborder-color: #DCDCDD;\r\n\t\tborder-style: solid;\r\n\t\tbackground-color: white;\r\n\t}\r\n\r\n\t&__item-name {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t\talign-items: flex-start;\r\n\t\tmargin-bottom: 10px;\r\n\r\n\t\t.label {\r\n\t\t\tfont-size: 20px;\r\n\t\t\tfont-weight: 700;\r\n\t\t\tline-height: 1.25;\r\n\t\t}\r\n\r\n\t\t.version {\r\n\t\t\tpadding: 1px 8px;\r\n\t\t\tborder-radius: 4px;\r\n\t\t\tcolor: white;\r\n\t\t\tbackground-color: #46B450;\r\n\t\t\tmargin-left: 10px;\r\n\t\t}\r\n\t}\r\n\r\n\t&__item-update {\r\n\t\tcolor: #7b7e81;\r\n\t\tmargin-bottom: 10px;\r\n\t}\r\n\r\n\t&__item-license {\r\n\t\tmargin-bottom: 10px;\r\n\t\tcolor: #7b7e81;\r\n\r\n\t\t.cx-vui-button {\r\n\t\t\tmargin-left: 3px;\r\n\t\t}\r\n\t}\r\n\r\n\t&__item-desc {\r\n\t\tflex: 1 1 auto;\r\n\r\n\t\ta {\r\n\t\t\ttext-decoration: none;\r\n\t\t}\r\n\t}\r\n\r\n\t&__item-actions {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: flex-start;\r\n\t\talign-items: center;\r\n\t\tflex-wrap: wrap;\r\n\t\tmargin-top: 20px;\r\n\r\n\t\t&:empty {\r\n\t\t\tdisplay: none;\r\n\t\t}\r\n\r\n\t\t.cx-vui-button {\r\n\t\t\tmargin-right: 20px;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n",".jfb-addons {\n  margin-bottom: 50px;\n}\n.jfb-addons:last-child {\n  margin-bottom: 0;\n}\n.jfb-addons a {\n  color: #007cba;\n}\n.jfb-addons__header {\n  margin-bottom: 20px;\n}\n.jfb-addons__list {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 40px;\n}\n@media (max-width: 1140px) {\n  .jfb-addons__list {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.jfb-addons__item {\n  transition: box-shadow 0.3s ease-out;\n  border-radius: 10px;\n}\n.jfb-addons__item:hover {\n  box-shadow: 0px 4px 28px rgba(15, 23, 42, 0.1);\n}\n.jfb-addons__item.activated .jfb-addons__item-info {\n  background-color: white;\n}\n.jfb-addons__item.update-avaliable .jfb-addons__item-name .version {\n  background-color: #D6336C;\n}\n.jfb-addons__item.update-avaliable .jfb-addons__item-update .latest-version {\n  color: white;\n  background-color: #46B450;\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n.jfb-addons__item-inner {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  height: 100%;\n}\n.jfb-addons__item-thumb {\n  border-radius: 10px 10px 0 0;\n  line-height: 0;\n  overflow: hidden;\n  position: relative;\n}\n.jfb-addons__item-thumb .pro-badge {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n}\n.jfb-addons__item-thumb img {\n  width: 100%;\n  height: auto;\n}\n.jfb-addons__item-info {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  flex: 1 1 auto;\n  padding: 20px;\n  border-radius: 0 0 10px 10px;\n  border-width: 0 1px 1px 1px;\n  border-color: #DCDCDD;\n  border-style: solid;\n  background-color: white;\n}\n.jfb-addons__item-name {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 10px;\n}\n.jfb-addons__item-name .label {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.25;\n}\n.jfb-addons__item-name .version {\n  padding: 1px 8px;\n  border-radius: 4px;\n  color: white;\n  background-color: #46B450;\n  margin-left: 10px;\n}\n.jfb-addons__item-update {\n  color: #7b7e81;\n  margin-bottom: 10px;\n}\n.jfb-addons__item-license {\n  margin-bottom: 10px;\n  color: #7b7e81;\n}\n.jfb-addons__item-license .cx-vui-button {\n  margin-left: 3px;\n}\n.jfb-addons__item-desc {\n  flex: 1 1 auto;\n}\n.jfb-addons__item-desc a {\n  text-decoration: none;\n}\n.jfb-addons__item-actions {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-top: 20px;\n}\n.jfb-addons__item-actions:empty {\n  display: none;\n}\n.jfb-addons__item-actions .cx-vui-button {\n  margin-right: 20px;\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4vcGFnZXMvamZiLWFkZG9ucy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMklBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3U0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNoSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMvRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDN05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBa0JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FHQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBa0JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUdBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFFQTtBQUFBO0FBQUE7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pmYi9hZG1pbi9wYWdlcy9qZmItYWRkb25zL0FkZG9uc1BhZ2UudnVlIiwid2VicGFjazovL2pmYi9hZG1pbi9wYWdlcy9qZmItYWRkb25zL2NvbXBvbmVudHMvQWRkb25JdGVtLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItYWRkb25zL0FkZG9uc1BhZ2UudnVlP2MzODEiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLWFkZG9ucy9jb21wb25lbnRzL0FkZG9uSXRlbS52dWU/Yzk5MiIsIndlYnBhY2s6Ly9qZmIvLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9qZmIvLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLWFkZG9ucy9BZGRvbnNQYWdlLnZ1ZT9mM2Y3Iiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1hZGRvbnMvY29tcG9uZW50cy9BZGRvbkl0ZW0udnVlP2UzMDIiLCJ3ZWJwYWNrOi8vamZiLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLWFkZG9ucy9BZGRvbnNQYWdlLnZ1ZT9kZDUyIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1hZGRvbnMvY29tcG9uZW50cy9BZGRvbkl0ZW0udnVlPzgxMjEiLCJ3ZWJwYWNrOi8vamZiLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanMiLCJ3ZWJwYWNrOi8vamZiLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9saXN0VG9TdHlsZXMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLWFkZG9ucy9BZGRvbnNQYWdlLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItYWRkb25zL0FkZG9uc1BhZ2UudnVlPzAxMDUiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLWFkZG9ucy9BZGRvbnNQYWdlLnZ1ZT9jZGQ1Iiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1hZGRvbnMvQWRkb25zUGFnZS52dWU/YWI0OSIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItYWRkb25zL2NvbXBvbmVudHMvQWRkb25JdGVtLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItYWRkb25zL2NvbXBvbmVudHMvQWRkb25JdGVtLnZ1ZT9lMzc0Iiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1hZGRvbnMvY29tcG9uZW50cy9BZGRvbkl0ZW0udnVlPzlkYjUiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLWFkZG9ucy9jb21wb25lbnRzL0FkZG9uSXRlbS52dWU/ZjVkMCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLWFkZG9ucy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PGRpdlxyXG5cdFx0Y2xhc3M9XCJqZmItYWRkb25zLXBhZ2Ugd3JhcFwiXHJcblx0XHQ6Y2xhc3M9XCJ7ICdwcm9jY2VzaW5nLXN0YXRlJzogcHJvY2Nlc2luZ1N0YXRlIH1cIlxyXG5cdD5cclxuXHRcdDxoMSBjbGFzcz1cImNzLXZ1aS10aXRsZVwiPnt7ICdKZXRGb3JtQnVpbGRlciBBZGRvbnMnIH19PC9oMT5cclxuXHRcdDxkaXYgY2xhc3M9XCJqZmItYWRkb25zLXBhZ2VfX2lubmVyIGN4LXZ1aS1wYW5lbFwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiamZiLWFkZG9ucy1wYWdlX19oZWFkZXJcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiamZiLWFkZG9ucy1wYWdlX19oZWFkZXItY29udHJvbHNcIiB2LWlmPVwiaXNMaWNlbnNlTW9kZVwiPlxyXG5cdFx0XHRcdFx0PGN4LXZ1aS1idXR0b25cclxuXHRcdFx0XHRcdFx0YnV0dG9uLXN0eWxlPVwiYWNjZW50XCJcclxuXHRcdFx0XHRcdFx0c2l6ZT1cIm1pbmlcIlxyXG5cdFx0XHRcdFx0XHQ6bG9hZGluZz1cImNoZWNrVXBkYXRlc1Byb2Nlc3NlZFwiXHJcblx0XHRcdFx0XHRcdEBjbGljaz1cImNoZWNrUGx1Z2luc1VwZGF0ZVwiXHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxzcGFuIHNsb3Q9XCJsYWJlbFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxzdmcgY2xhc3M9XCJidXR0b24taWNvblwiIHdpZHRoPVwiMTRcIiBoZWlnaHQ9XCIxNFwiIHZpZXdCb3g9XCIwIDAgMTQgMTRcIiBmaWxsPVwibm9uZVwiXHJcblx0XHRcdFx0XHRcdFx0ICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cGF0aFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkPVwiTTExLjcwODUgMi4yOTE3MUMxMC41MDAxIDEuMDgzMzcgOC44NDE4IDAuMzMzMzc0IDcuMDAwMTMgMC4zMzMzNzRDMy4zMTY4IDAuMzMzMzc0IDAuMzQxNzk3IDMuMzE2NzEgMC4zNDE3OTcgNy4wMDAwNEMwLjM0MTc5NyAxMC42ODM0IDMuMzE2OCAxMy42NjY3IDcuMDAwMTMgMTMuNjY2N0MxMC4xMDg1IDEzLjY2NjcgMTIuNzAwMSAxMS41NDE3IDEzLjQ0MTggOC42NjY3MUgxMS43MDg1QzExLjAyNTEgMTAuNjA4NCA5LjE3NTEzIDEyIDcuMDAwMTMgMTJDNC4yNDE4IDEyIDIuMDAwMTMgOS43NTgzNyAyLjAwMDEzIDcuMDAwMDRDMi4wMDAxMyA0LjI0MTcxIDQuMjQxOCAyLjAwMDA0IDcuMDAwMTMgMi4wMDAwNEM4LjM4MzQ2IDIuMDAwMDQgOS42MTY4IDIuNTc1MDQgMTAuNTE2OCAzLjQ4MzM3TDcuODMzNDYgNi4xNjY3MUgxMy42NjY4VjAuMzMzMzc0TDExLjcwODUgMi4yOTE3MVpcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRmaWxsPVwiIzAwN0NCQVwiLz5cclxuXHRcdFx0XHRcdFx0XHQ8L3N2Zz5cclxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj5DaGVjayBGb3IgVXBkYXRlczwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9jeC12dWktYnV0dG9uPlxyXG5cclxuXHRcdFx0XHRcdDxjeC12dWktYnV0dG9uXHJcblx0XHRcdFx0XHRcdDpjbGFzcz1cIlsgIWlzTGljZW5zZUFjdGl2YXRlZCA/ICdjeC12dWktYnV0dG9uLS1zdHlsZS1hY2NlbnQnIDogJ2N4LXZ1aS1idXR0b24tLXN0eWxlLWRhbmdlcicgXVwiXHJcblx0XHRcdFx0XHRcdHNpemU9XCJtaW5pXCJcclxuXHRcdFx0XHRcdFx0QGNsaWNrPVwic2hvd0xpY2Vuc2VQb3B1cFwiXHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxzcGFuIHNsb3Q9XCJsYWJlbFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxzdmcgY2xhc3M9XCJidXR0b24taWNvblwiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwibm9uZVwiXHJcblx0XHRcdFx0XHRcdFx0ICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cGF0aFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkPVwiTTE1LjQ5ODUgMEgxMi40ODk3QzEyLjQxNjYgMCAxMi4zNDg3IDAuMDE1NjcwOSAxMi4yODYgMC4wNDcwMTI3QzEyLjIzMzggMC4wNjc5MDczIDEyLjE4NjcgMC4xMDQ0NzMgMTIuMTQ1IDAuMTU2NzA5TDUuNzY2OSA2LjQ3MjA5QzUuNjIwNjMgNi40NDA3NCA1LjQ2MzkyIDYuNDE0NjMgNS4yOTY3NyA2LjM5MzczQzUuMTI5NjEgNi4zNzI4NCA0Ljk2NzY4IDYuMzYyMzkgNC44MTA5NyA2LjM2MjM5QzQuMTYzMjQgNi4zNjIzOSAzLjU0Njg1IDYuNDg3NzYgMi45NjE4IDYuNzM4NDlDMi4zNzY3NSA2Ljk3ODc4IDEuODU5NjEgNy4zMjM1NCAxLjQxMDM4IDcuNzcyNzdDMC45NjExNDkgOC4yMjIgMC42MTExNjYgOC43MzkxNCAwLjM2MDQzMSA5LjMyNDE5QzAuMTIwMTQ0IDkuOTA5MjQgMCAxMC41MzA5IDAgMTEuMTg5QzAgMTEuODM2OCAwLjEyMDE0NCAxMi40NTMyIDAuMzYwNDMxIDEzLjAzODJDMC42MTExNjYgMTMuNjIzMiAwLjk2MTE0OSAxNC4xNDA0IDEuNDEwMzggMTQuNTg5NkMxLjg1OTYxIDE1LjAzODkgMi4zNzY3NSAxNS4zODM2IDIuOTYxOCAxNS42MjM5QzMuNTQ2ODUgMTUuODc0NiA0LjE2MzI0IDE2IDQuODEwOTcgMTZDNS40NjkxNSAxNiA2LjA5MDc2IDE1Ljg3NDYgNi42NzU4MSAxNS42MjM5QzcuMjYwODYgMTUuMzgzNiA3Ljc3OCAxNS4wMzg5IDguMjI3MjMgMTQuNTg5NkM4LjgwMTgzIDE0LjAxNSA5LjE5ODgyIDEzLjM0NjQgOS40MTgyMiAxMi41ODM3QzkuNjQ4MDYgMTEuODIxMSA5LjY4NDYyIDExLjAzNzUgOS41Mjc5MSAxMC4yMzMxTDEwLjg5MTMgOC44Njk3NEMxMC45MzMxIDguODI3OTUgMTAuOTY0NCA4Ljc4MDkzIDEwLjk4NTMgOC43Mjg3QzExLjAxNjcgOC42NjYwMSAxMS4wMzIzIDguNTk4MTEgMTEuMDMyMyA4LjUyNDk4VjcuMDIwNTdIMTIuNTM2N0MxMi42OTM0IDcuMDIwNTcgMTIuODEzNiA2Ljk3MzU2IDEyLjg5NzIgNi44Nzk1M0MxMi45OTEyIDYuNzg1NSAxMy4wMzgyIDYuNjY1MzYgMTMuMDM4MiA2LjUxOTFWNS4wMTQ2OUgxNC41NDI2QzE0LjYxNTcgNS4wMTQ2OSAxNC42Nzg0IDUuMDA0MjQgMTQuNzMwNyA0Ljk4MzM1QzE0Ljc5MzMgNC45NTIwMSAxNC44NTA4IDQuOTEwMjIgMTQuOTAzIDQuODU3OThMMTUuOTA2IDMuODU1MDRDMTUuOTI2OSAzLjgxMzI2IDE1Ljk0NzggMy43NjYyNCAxNS45Njg3IDMuNzE0MDFDMTUuOTg5NiAzLjY1MTMyIDE2IDMuNTgzNDIgMTYgMy41MTAyOFYwLjUwMTQ2OUMxNiAwLjM1NTIwNyAxNS45NTMgMC4yMzUwNjQgMTUuODU5IDAuMTQxMDM4QzE1Ljc2NDkgMC4wNDcwMTI3IDE1LjY0NDggMCAxNS40OTg1IDBaTTQuOTY3NjggMTIuNzg3NUM0Ljc5MDA4IDEyLjk2NTEgNC41OTY4IDEzLjA5NTcgNC4zODc4NiAxMy4xNzkyQzQuMTg5MzYgMTMuMjUyNCAzLjk2NDc0IDEzLjI4ODkgMy43MTQwMSAxMy4yODg5QzMuNDYzMjcgMTMuMjg4OSAzLjIzMzQzIDEzLjI0MTkgMy4wMjQ0OSAxMy4xNDc5QzIuODI1OTkgMTMuMDUzOSAyLjYzNzk0IDEyLjkzMzcgMi40NjAzMyAxMi43ODc1QzIuMjgyNzMgMTIuNjA5OSAyLjE1MjE0IDEyLjQyMTggMi4wNjg1NiAxMi4yMjMzQzEuOTk1NDMgMTIuMDE0NCAxLjk1ODg2IDExLjc4NDUgMS45NTg4NiAxMS41MzM4QzEuOTU4ODYgMTEuMjgzMSAyLjAwNTg4IDExLjA1ODQgMi4wOTk5IDEwLjg1OTlDMi4xOTM5MyAxMC42NTEgMi4zMTQwNyAxMC40NTc3IDIuNDYwMzMgMTAuMjgwMUMyLjc4NDIgOS45NTYyNSAzLjE5MTY0IDkuNzk0MzIgMy42ODI2NiA5Ljc5NDMyQzQuMTg0MTMgOS43OTQzMiA0LjU5NjggOS45NTYyNSA0LjkyMDY3IDEwLjI4MDFDNS4wOTgyNyAxMC40NTc3IDUuMjIzNjQgMTAuNjUxIDUuMjk2NzcgMTAuODU5OUM1LjM4MDM1IDExLjA1ODQgNS40MjIxNCAxMS4yODMxIDUuNDIyMTQgMTEuNTMzOEM1LjQyMjE0IDExLjc4NDUgNS4zODAzNSAxMi4wMTQ0IDUuMjk2NzcgMTIuMjIzM0M1LjIyMzY0IDEyLjQyMTggNS4xMTM5NCAxMi42MDk5IDQuOTY3NjggMTIuNzg3NVpcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRmaWxsPVwiI0QzRDNEM1wiLz5cclxuXHRcdFx0XHRcdFx0XHQ8L3N2Zz5cclxuXHRcdFx0XHRcdFx0XHQ8c3BhbiB2LWlmPVwiIWlzTGljZW5zZUFjdGl2YXRlZFwiPkFjdGl2YXRlIExpY2Vuc2U8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gdi1pZj1cImlzTGljZW5zZUFjdGl2YXRlZFwiPkRlYWN0aXZhdGUgTGljZW5zZTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9jeC12dWktYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdGNsYXNzPVwiZ28tcHJvLWJhbm5lclwiXHJcblx0XHRcdFx0XHR2LWlmPVwiIWlzTGljZW5zZUFjdGl2YXRlZFwiXHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImdvLXByby1iYW5uZXJfX3N1YnRpdGxlXCI+RmVhdHVyZXMgJiBJbnRlZ3JhdGlvbnM8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJnby1wcm8tYmFubmVyX190aXRsZVwiPkV4dGVuZCBmdW5jdGlvbmFsaXR5IHdpdGggUFJPIEFkZG9uczwvZGl2PlxyXG5cdFx0XHRcdFx0PGN4LXZ1aS1idXR0b25cclxuXHRcdFx0XHRcdFx0Y2xhc3M9XCJnby1wcm8tYmFubmVyX19idXR0b25cIlxyXG5cdFx0XHRcdFx0XHRidXR0b24tc3R5bGU9XCJkZWZhdWx0XCJcclxuXHRcdFx0XHRcdFx0c2l6ZT1cIm1pbmlcIlxyXG5cdFx0XHRcdFx0XHQ6dXJsPVwiZ29Qcm9MaW5rXCJcclxuXHRcdFx0XHRcdFx0dGFnLW5hbWU9XCJhXCJcclxuXHRcdFx0XHRcdFx0dGFyZ2V0PVwiX2JsYW5rXCJcclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PHNwYW4gc2xvdD1cImxhYmVsXCI+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4+R28gUHJvPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHQ8L2N4LXZ1aS1idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PGRpdlxyXG5cdFx0XHRcdGNsYXNzPVwiamZiLWFkZG9uc1wiXHJcblx0XHRcdFx0di1pZj1cIjAhPT1PYmplY3Qua2V5cyhpbnN0YWxsZWRBZGRvbkxpc3QpLmxlbmd0aFwiXHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiamZiLWFkZG9uc19faGVhZGVyXCI+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImN4LXZ1aS1zdWJ0aXRsZVwiPllvdXIgSW5zdGFsbGVkIEFkZG9uczwvc3Bhbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiamZiLWFkZG9uc19fbGlzdFwiPlxyXG5cdFx0XHRcdFx0PEFkZG9uSXRlbVxyXG5cdFx0XHRcdFx0XHR2LWZvcj1cIiggYWRkb25EYXRhLCBpbmRleCApIGluIGluc3RhbGxlZEFkZG9uTGlzdFwiXHJcblx0XHRcdFx0XHRcdDprZXk9XCJpbmRleFwiXHJcblx0XHRcdFx0XHRcdDphZGRvbi1kYXRhPVwiYWRkb25EYXRhXCJcclxuXHRcdFx0XHRcdD48L0FkZG9uSXRlbT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8ZGl2XHJcblx0XHRcdFx0Y2xhc3M9XCJqZmItYWRkb25zXCJcclxuXHRcdFx0XHR2LWlmPVwiMCE9PU9iamVjdC5rZXlzKGF2YWlsYWJsZUFkZG9uTGlzdCkubGVuZ3RoXCJcclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJqZmItYWRkb25zX19oZWFkZXJcIj5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiY3gtdnVpLXN1YnRpdGxlXCI+QWxsIEF2YWlsYWJsZSBBZGRvbnM8L3NwYW4+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImpmYi1hZGRvbnNfX2xpc3RcIj5cclxuXHRcdFx0XHRcdDxBZGRvbkl0ZW1cclxuXHRcdFx0XHRcdFx0di1mb3I9XCIoIGFkZG9uRGF0YSwgaW5kZXggKSBpbiBhdmFpbGFibGVBZGRvbkxpc3RcIlxyXG5cdFx0XHRcdFx0XHQ6a2V5PVwiaW5kZXhcIlxyXG5cdFx0XHRcdFx0XHQ6YWRkb24tZGF0YT1cImFkZG9uRGF0YVwiXHJcblx0XHRcdFx0XHQ+PC9BZGRvbkl0ZW0+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblxyXG5cdFx0PGN4LXZ1aS1wb3B1cFxyXG5cdFx0XHRjbGFzcz1cImpmYi1hZGRvbnMtcGFnZV9fbGljZW5zZS1wb3B1cFwiXHJcblx0XHRcdHYtbW9kZWw9XCJsaWNlbnNlUG9wdXBWaXNpYmxlXCJcclxuXHRcdFx0OmZvb3Rlcj1cImZhbHNlXCJcclxuXHRcdFx0Ym9keS13aWR0aD1cIjU0MHB4XCJcclxuXHRcdD5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImN4LXZ1aS1wb3B1cF9faGVhZGVyLXRpdGxlXCIgc2xvdD1cInRpdGxlXCI+XHJcblx0XHRcdFx0PHNwYW4gdi1pZj1cIiFpc0xpY2Vuc2VBY3RpdmF0ZWRcIj5BY3RpdmF0ZSBMaWNlbnNlPC9zcGFuPlxyXG5cdFx0XHRcdDxzcGFuIHYtaWY9XCJpc0xpY2Vuc2VBY3RpdmF0ZWRcIj5EZWFjdGl2YXRlIExpY2Vuc2U8L3NwYW4+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiamZiLWFkZG9ucy1wYWdlX19saWNlbnNlLWZvcm1cIiBzbG90PVwiY29udGVudFwiPlxyXG5cdFx0XHRcdDxzcGFuIHYtaWY9XCIhaXNMaWNlbnNlQWN0aXZhdGVkXCI+QWN0aXZhdGUgbGljZW5zZSBmb3IgYXV0b21hdGljIHVwZGF0ZXMgYW5kIGF3ZXNvbWUgc3VwcG9ydDwvc3Bhbj5cclxuXHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0di1pZj1cImlzTGljZW5zZUFjdGl2YXRlZFwiPkJ5IGRlYWN0aXZhdGluZyB0aGUgbGljZW5zZSB5b3Ugd2lsbCBub3QgYmUgYWJsZSB0byB1cGRhdGUgdGhlIGFkZG9uczwvc3Bhbj5cclxuXHRcdFx0XHQ8Y3gtdnVpLWlucHV0XHJcblx0XHRcdFx0XHRjbGFzcz1cImpmYi1hZGRvbnMtcGFnZV9fbGljZW5zZS1pbnB1dFwiXHJcblx0XHRcdFx0XHRzaXplPVwiZnVsbHdpZHRoXCJcclxuXHRcdFx0XHRcdHR5cGU9XCJwYXNzd29yZFwiXHJcblx0XHRcdFx0XHQ6YXV0b2ZvY3VzPVwidHJ1ZVwiXHJcblx0XHRcdFx0XHQ6cHJldmVudC13cmFwPVwidHJ1ZVwiXHJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkp1c3QgcGFzdGUgaXQgaGVyZVwiXHJcblx0XHRcdFx0XHR2LW1vZGVsPVwibGljZW5zZUtleVwiXHJcblx0XHRcdFx0PjwvY3gtdnVpLWlucHV0PlxyXG5cdFx0XHRcdDxjeC12dWktYnV0dG9uXHJcblx0XHRcdFx0XHRjbGFzcz1cImpmYi1hZGRvbnMtcGFnZV9fbGljZW5zZS1hY3Rpb25cIlxyXG5cdFx0XHRcdFx0YnV0dG9uLXN0eWxlPVwiYWNjZW50XCJcclxuXHRcdFx0XHRcdHNpemU9XCJtaW5pXCJcclxuXHRcdFx0XHRcdDpsb2FkaW5nPVwibGljZW5zZVByb2NjZXNpbmdTdGF0ZVwiXHJcblx0XHRcdFx0XHRAY2xpY2s9XCJsaWNlbnNlQWN0aW9uXCJcclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8c3BhbiBzbG90PVwibGFiZWxcIj5cclxuXHRcdFx0XHRcdFx0PHNwYW4gdi1pZj1cIiFpc0xpY2Vuc2VBY3RpdmF0ZWRcIj5BY3RpdmF0ZTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PHNwYW4gdi1pZj1cImlzTGljZW5zZUFjdGl2YXRlZFwiPkRlYWN0aXZhdGU8L3NwYW4+XHJcblx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0PC9jeC12dWktYnV0dG9uPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvY3gtdnVpLXBvcHVwPlxyXG5cdDwvZGl2PlxyXG5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBBZGRvbkl0ZW0gZnJvbSAnLi9jb21wb25lbnRzL0FkZG9uSXRlbS52dWUnO1xyXG5cclxuY29uc3QgeyBhcHBseUZpbHRlcnMsIGRvQWN0aW9uIH0gPSB3cC5ob29rcztcclxuXHJcbndpbmRvdy5qZmJFdmVudEJ1cyA9IG5ldyBWdWUoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRuYW1lOiAnamZiLWFkZG9ucycsXHJcblx0Y29tcG9uZW50czoge1xyXG5cdFx0QWRkb25JdGVtLFxyXG5cdH0sXHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGFsbEFkZG9uczogd2luZG93LkpldEZCUGFnZUNvbmZpZy5hbGxBZGRvbnMgfHwge30sXHJcblx0XHRcdGxpY2Vuc2VMaXN0OiB3aW5kb3cuSmV0RkJQYWdlQ29uZmlnLmxpY2Vuc2VMaXN0IHx8IFtdLFxyXG5cdFx0XHRsaWNlbnNlS2V5OiB3aW5kb3cuSmV0RkJQYWdlQ29uZmlnLmxpY2Vuc2VLZXkgfHwgJycsXHJcblx0XHRcdHRoZW1lSW5mbzogd2luZG93LkpldEZCUGFnZUNvbmZpZy50aGVtZUluZm8gfHwgZmFsc2UsXHJcblx0XHRcdG1pc2NJbmZvOiB3aW5kb3cuSmV0RkJQYWdlQ29uZmlnLm1pc2NJbmZvIHx8IGZhbHNlLFxyXG5cclxuXHRcdFx0bGljZW5zZUFjdGl2YXRlZDogZmFsc2UsXHJcblx0XHRcdGxpY2Vuc2VQb3B1cFZpc2libGU6IGZhbHNlLFxyXG5cdFx0XHRsaWNlbnNlUHJvY2Nlc2luZ1N0YXRlOiBmYWxzZSxcclxuXHRcdFx0bGljZW5zZUFqYXhBY3Rpb246IG51bGwsXHJcblxyXG5cdFx0XHRjaGVja1VwZGF0ZXNBY3Rpb246IG51bGwsXHJcblx0XHRcdGNoZWNrVXBkYXRlc1Byb2Nlc3NlZDogZmFsc2UsXHJcblxyXG5cdFx0XHRwcm9jY2VzaW5nU3RhdGU6IGZhbHNlLFxyXG5cdFx0fTtcclxuXHR9LFxyXG5cdG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcclxuXHRcdHdpbmRvdy5qZmJFdmVudEJ1cy4kb24oICd1cGRhdGVBZGRvbkRhdGEnLCB0aGlzLnVwZGF0ZUFkZG9uRGF0YSApO1xyXG5cdFx0d2luZG93LmpmYkV2ZW50QnVzLiRvbiggJ3Nob3dMaWNlbnNlUG9wdXAnLCB0aGlzLnNob3dMaWNlbnNlUG9wdXAgKTtcclxuXHR9LFxyXG5cdGNvbXB1dGVkOiB7XHJcblx0XHRpc0xpY2Vuc2VNb2RlKCkge1xyXG5cdFx0XHRyZXR1cm4gJycgIT09IHdpbmRvdy5KZXRGQlBhZ2VDb25maWcubGljZW5zZU1vZGUgPyB0cnVlIDogZmFsc2U7XHJcblx0XHR9LFxyXG5cclxuXHRcdGlzTGljZW5zZUFjdGl2YXRlZCgpIHtcclxuXHRcdFx0cmV0dXJuIDAgIT09IHRoaXMubGljZW5zZUxpc3QubGVuZ3RoO1xyXG5cdFx0fSxcclxuXHJcblx0XHRsaWNlbnNlQWN0aW9uVHlwZSgpIHtcclxuXHRcdFx0cmV0dXJuICF0aGlzLmlzTGljZW5zZUFjdGl2YXRlZCA/ICdhY3RpdmF0ZV9saWNlbnNlJyA6ICdkZWFjdGl2YXRlX2xpY2Vuc2UnO1xyXG5cdFx0fSxcclxuXHJcblx0XHRpbnN0YWxsZWRBZGRvbkxpc3QoKSB7XHJcblx0XHRcdGxldCBpbnN0YWxsZWRBZGRvbnNMaXN0ID0ge307XHJcblxyXG5cdFx0XHRmb3IgKCBsZXQgYWRkb25TbHVnIGluIHRoaXMuYWxsQWRkb25zICkge1xyXG5cclxuXHRcdFx0XHRpZiAoIHRoaXMuYWxsQWRkb25zWyBhZGRvblNsdWcgXVsgJ2lzSW5zdGFsbGVkJyBdICkge1xyXG5cdFx0XHRcdFx0aW5zdGFsbGVkQWRkb25zTGlzdFsgYWRkb25TbHVnIF0gPSB0aGlzLmFsbEFkZG9uc1sgYWRkb25TbHVnIF07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gaW5zdGFsbGVkQWRkb25zTGlzdDtcclxuXHRcdH0sXHJcblxyXG5cdFx0YXZhaWxhYmxlQWRkb25MaXN0KCkge1xyXG5cdFx0XHRsZXQgYXZhaWxhYmxlQWRkb25MaXN0ID0ge307XHJcblxyXG5cdFx0XHRmb3IgKCBsZXQgYWRkb25TbHVnIGluIHRoaXMuYWxsQWRkb25zICkge1xyXG5cclxuXHRcdFx0XHRpZiAoICF0aGlzLmFsbEFkZG9uc1sgYWRkb25TbHVnIF1bICdpc0luc3RhbGxlZCcgXSApIHtcclxuXHRcdFx0XHRcdGF2YWlsYWJsZUFkZG9uTGlzdFsgYWRkb25TbHVnIF0gPSB0aGlzLmFsbEFkZG9uc1sgYWRkb25TbHVnIF07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gYXZhaWxhYmxlQWRkb25MaXN0O1xyXG5cdFx0fSxcclxuXHJcblx0XHRnb1Byb0xpbmsoKSB7XHJcblx0XHRcdGxldCBwcmljaW5nUGFnZVVybCA9IHRoaXMubWlzY0luZm8ucHJpY2luZ1BhZ2VVcmwsXHJcblx0XHRcdCAgICB1dG1QYXJhbXMgICAgICA9IHRoaXMuZ2V0VXRtUGFyYW1zU3RyaW5nKCB7XHJcblx0XHRcdFx0ICAgIHV0bV9zb3VyY2U6IGBwbHVnaW5gLFxyXG5cdFx0XHRcdCAgICB1dG1fbWVkaXVtOiAnYWRkb25zJyxcclxuXHRcdFx0XHQgICAgdXRtX2NhbXBhaWduOiAnZ28tcHJvLWJ1dHRvbicsXHJcblx0XHRcdFx0ICAgIHV0bV9jb250ZW50OiBgbGljZW5zZS1ub3QtYWN0aXZhdGVkLyR7IHRoaXMudGhlbWVJbmZvLmF1dGhvclNsdWcgfWAsXHJcblx0XHRcdCAgICB9ICk7XHJcblxyXG5cdFx0XHRyZXR1cm4gYCR7IHByaWNpbmdQYWdlVXJsIH0/JHsgdXRtUGFyYW1zIH1gO1xyXG5cdFx0fSxcclxuXHR9LFxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdHNob3dMaWNlbnNlUG9wdXAoKSB7XHJcblx0XHRcdHRoaXMubGljZW5zZVBvcHVwVmlzaWJsZSA9IHRydWU7XHJcblx0XHR9LFxyXG5cclxuXHRcdHVwZGF0ZUFkZG9uRGF0YSggZGF0YSApIHtcclxuXHRcdFx0bGV0IHNsdWcgICAgICAgICAgICA9IGRhdGEuc2x1ZyxcclxuXHRcdFx0ICAgIGFkZG9uRGF0YSAgICAgICA9IGRhdGEuYWRkb25EYXRhLFxyXG5cdFx0XHQgICAgcGx1Z2luQWN0aW9uICAgID0gZGF0YS5hY3Rpb24sXHJcblx0XHRcdCAgICByZWxvYWRBY3Rpb25NYXAgPSBbICdhY3RpdmF0ZScsICdkZWFjdGl2YXRlJywgJ3VwZGF0ZScgXTtcclxuXHJcblx0XHRcdHRoaXMuYWxsQWRkb25zWyBzbHVnIF0gPSBPYmplY3QuYXNzaWduKCB7fSwgdGhpcy5hbGxBZGRvbnNbIHNsdWcgXSwgYWRkb25EYXRhICk7XHJcblxyXG5cdFx0XHRpZiAoIHJlbG9hZEFjdGlvbk1hcC5pbmNsdWRlcyggcGx1Z2luQWN0aW9uICkgKSB7XHJcblx0XHRcdFx0dGhpcy5wcm9jY2VzaW5nU3RhdGUgPSB0cnVlO1xyXG5cclxuXHRcdFx0XHRzZXRUaW1lb3V0KCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcblx0XHRcdFx0fSwgMTAwMCApO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdGxpY2Vuc2VBY3Rpb24oKSB7XHJcblx0XHRcdHZhciBzZWxmID0gdGhpcztcclxuXHJcblx0XHRcdGlmICggJycgPT09IHRoaXMubGljZW5zZUtleSApIHtcclxuXHRcdFx0XHRzZWxmLiRDWE5vdGljZS5hZGQoIHtcclxuXHRcdFx0XHRcdG1lc3NhZ2U6ICdMaWNlbnNlIGtleSBpcyBtaXNzaW5nJyxcclxuXHRcdFx0XHRcdHR5cGU6ICdlcnJvcicsXHJcblx0XHRcdFx0XHRkdXJhdGlvbjogNDAwMCxcclxuXHRcdFx0XHR9ICk7XHJcblxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5saWNlbnNlUHJvY2Nlc2luZ1N0YXRlID0gdHJ1ZTtcclxuXHJcblx0XHRcdHNlbGYubGljZW5zZUFqYXhBY3Rpb24gPSBqUXVlcnkuYWpheCgge1xyXG5cdFx0XHRcdHR5cGU6ICdQT1NUJyxcclxuXHRcdFx0XHR1cmw6IHdpbmRvdy5KZXRGQlBhZ2VDb25maWcuYWpheFVybCxcclxuXHRcdFx0XHRkYXRhVHlwZTogJ2pzb24nLFxyXG5cdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdGFjdGlvbjogJ2pmYl9saWNlbnNlX2FjdGlvbicsXHJcblx0XHRcdFx0XHRub25jZTogd2luZG93LkpldEZCUGFnZUNvbmZpZy5ub25jZSxcclxuXHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0bGljZW5zZTogc2VsZi5saWNlbnNlS2V5LFxyXG5cdFx0XHRcdFx0XHRhY3Rpb246IHNlbGYubGljZW5zZUFjdGlvblR5cGUsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0YmVmb3JlU2VuZDogKCBqcVhIUiwgYWpheFNldHRpbmdzICkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdGlmICggbnVsbCAhPT0gc2VsZi5saWNlbnNlQWpheEFjdGlvbiApIHtcclxuXHRcdFx0XHRcdFx0c2VsZi5saWNlbnNlQWpheEFjdGlvbi5hYm9ydCgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c3VjY2VzczogKCByZXNwb25jZSwgdGV4dFN0YXR1cywganFYSFIgKSA9PiB7XHJcblx0XHRcdFx0XHRzZWxmLmxpY2Vuc2VQcm9jY2VzaW5nU3RhdGUgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0XHRpZiAoIHJlc3BvbmNlLnN1Y2Nlc3MgKSB7XHJcblx0XHRcdFx0XHRcdHNlbGYuJENYTm90aWNlLmFkZCgge1xyXG5cdFx0XHRcdFx0XHRcdG1lc3NhZ2U6IHJlc3BvbmNlLm1lc3NhZ2UsXHJcblx0XHRcdFx0XHRcdFx0dHlwZTogJ3N1Y2Nlc3MnLFxyXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiA0MDAwLFxyXG5cdFx0XHRcdFx0XHR9ICk7XHJcblxyXG5cdFx0XHRcdFx0XHRsZXQgbGljZW5zZURhdGEgPSByZXNwb25jZS5kYXRhO1xyXG5cclxuXHRcdFx0XHRcdFx0bGljZW5zZURhdGFbICdsaWNlbnNlX2tleScgXSA9IHNlbGYubGljZW5zZUtleTtcclxuXHJcblx0XHRcdFx0XHRcdHN3aXRjaCAoIHNlbGYubGljZW5zZUFjdGlvblR5cGUgKSB7XHJcblx0XHRcdFx0XHRcdFx0Y2FzZSAnYWN0aXZhdGVfbGljZW5zZSc6XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0c2VsZi5saWNlbnNlTGlzdC5wdXNoKCBsaWNlbnNlRGF0YSApO1xyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0Y2FzZSAnZGVhY3RpdmF0ZV9saWNlbnNlJzpcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRzZWxmLmxpY2Vuc2VMaXN0ID0gc2VsZi5saWNlbnNlTGlzdC5maWx0ZXIoICggbGljZW5zZURhdGEgKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBzZWxmLmxpY2Vuc2VLZXkgIT09IGxpY2Vuc2VEYXRhWyAnbGljZW5zZV9rZXknIF07XHJcblx0XHRcdFx0XHRcdFx0XHR9ICk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0c2VsZi5saWNlbnNlS2V5ID0gJyc7XHJcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0c2VsZi5saWNlbnNlUG9wdXBWaXNpYmxlID0gZmFsc2U7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdFx0c2VsZi4kQ1hOb3RpY2UuYWRkKCB7XHJcblx0XHRcdFx0XHRcdFx0bWVzc2FnZTogcmVzcG9uY2UubWVzc2FnZSxcclxuXHRcdFx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxyXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiA0MDAwLFxyXG5cdFx0XHRcdFx0XHR9ICk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSApO1xyXG5cdFx0fSxcclxuXHJcblx0XHRjaGVja1BsdWdpbnNVcGRhdGU6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuXHRcdFx0c2VsZi5jaGVja1VwZGF0ZXNBY3Rpb24gPSBqUXVlcnkuYWpheCgge1xyXG5cdFx0XHRcdHR5cGU6ICdQT1NUJyxcclxuXHRcdFx0XHR1cmw6IHdpbmRvdy5KZXRGQlBhZ2VDb25maWcuYWpheFVybCxcclxuXHRcdFx0XHRkYXRhVHlwZTogJ2pzb24nLFxyXG5cdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdGFjdGlvbjogJ2pmYl9saWNlbnNlX3NlcnZpY2VfYWN0aW9uJyxcclxuXHRcdFx0XHRcdG5vbmNlOiB3aW5kb3cuSmV0RkJQYWdlQ29uZmlnLm5vbmNlLFxyXG5cdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRhY3Rpb246ICdjaGVjay1wbHVnaW4tdXBkYXRlJyxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRiZWZvcmVTZW5kOiAoIGpxWEhSLCBhamF4U2V0dGluZ3MgKSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBudWxsICE9PSBzZWxmLmNoZWNrVXBkYXRlc0FjdGlvbiApIHtcclxuXHRcdFx0XHRcdFx0c2VsZi5jaGVja1VwZGF0ZXNBY3Rpb24uYWJvcnQoKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRzZWxmLmNoZWNrVXBkYXRlc1Byb2Nlc3NlZCA9IHRydWU7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbiAoIHJlc3BvbmNlLCB0ZXh0U3RhdHVzLCBqcVhIUiApIHtcclxuXHRcdFx0XHRcdHNlbGYuY2hlY2tVcGRhdGVzUHJvY2Vzc2VkID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCByZXNwb25jZS5zdWNjZXNzICkge1xyXG5cdFx0XHRcdFx0XHRzZWxmLiRDWE5vdGljZS5hZGQoIHtcclxuXHRcdFx0XHRcdFx0XHRtZXNzYWdlOiByZXNwb25jZS5tZXNzYWdlLFxyXG5cdFx0XHRcdFx0XHRcdHR5cGU6ICdzdWNjZXNzJyxcclxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogNDAwMCxcclxuXHRcdFx0XHRcdFx0fSApO1xyXG5cclxuXHRcdFx0XHRcdFx0c2VsZi5wcm9jY2VzaW5nU3RhdGUgPSB0cnVlO1xyXG5cclxuXHRcdFx0XHRcdFx0c2V0VGltZW91dCggZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuXHRcdFx0XHRcdFx0fSwgMTAwMCApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdHNlbGYuJENYTm90aWNlLmFkZCgge1xyXG5cdFx0XHRcdFx0XHRcdG1lc3NhZ2U6IHJlc3BvbmNlLm1lc3NhZ2UsXHJcblx0XHRcdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcclxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogNDAwMCxcclxuXHRcdFx0XHRcdFx0fSApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0gKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0YWRkTGljZW5zZSggbGljZW5zZURhdGEgKSB7XHJcblx0XHRcdHRoaXMubGljZW5zZUxpc3QucHVzaCggbGljZW5zZURhdGEgKTtcclxuXHJcblx0XHRcdHNlbGYucHJvY2Nlc2luZ1N0YXRlID0gdHJ1ZTtcclxuXHJcblx0XHRcdHNldFRpbWVvdXQoIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcblx0XHRcdH0sIDMwMDAgKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0cmVtb3ZlTGljZW5zZSggbGljZW5jZUtleSApIHtcclxuXHJcblx0XHRcdGxldCByZW1vdmluZ0luZGV4ID0gZmFsc2U7XHJcblxyXG5cdFx0XHRmb3IgKCBsZXQgbGljZW5jZUluZGV4IGluIHRoaXMubGljZW5zZUxpc3QgKSB7XHJcblx0XHRcdFx0bGV0IGxpY2Vuc2VEYXRhID0gdGhpcy5saWNlbnNlTGlzdFsgbGljZW5jZUluZGV4IF07XHJcblxyXG5cdFx0XHRcdGlmICggbGljZW5zZURhdGFbICdsaWNlbnNlS2V5JyBdID09PSBsaWNlbmNlS2V5ICkge1xyXG5cdFx0XHRcdFx0cmVtb3ZpbmdJbmRleCA9IGxpY2VuY2VJbmRleDtcclxuXHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggcmVtb3ZpbmdJbmRleCApIHtcclxuXHRcdFx0XHR0aGlzLmxpY2Vuc2VMaXN0LnNwbGljZSggcmVtb3ZpbmdJbmRleCwgMSApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLmxpY2Vuc2VQb3B1cFZpc2libGUgPSBmYWxzZTtcclxuXHJcblx0XHRcdHNldFRpbWVvdXQoIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcblx0XHRcdH0sIDUwMCApO1xyXG5cdFx0fSxcclxuXHJcblx0XHRnZXRVdG1QYXJhbXNTdHJpbmcoIGRhdGEgPSB7fSApIHtcclxuXHRcdFx0bGV0IHV0bVN0cmluZyA9IGZhbHNlO1xyXG5cclxuXHRcdFx0aWYgKCAwID09PSBPYmplY3Qua2V5cyggZGF0YSApLmxlbmd0aCApIHtcclxuXHRcdFx0XHRyZXR1cm4gdXRtU3RyaW5nO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR1dG1TdHJpbmcgPSBPYmplY3Qua2V5cyggZGF0YSApLm1hcCggKCBrZXkgKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIFsga2V5LCBkYXRhWyBrZXkgXSBdLm1hcCggZW5jb2RlVVJJQ29tcG9uZW50ICkuam9pbiggJz0nICk7XHJcblx0XHRcdH0gKS5qb2luKCAnJicgKTtcclxuXHJcblx0XHRcdHJldHVybiB1dG1TdHJpbmc7XHJcblx0XHR9LFxyXG5cdH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XHJcblxyXG4ucHJvY2Nlc2luZy1zdGF0ZSB7XHJcblx0b3BhY2l0eTogMC41O1xyXG5cdHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4uamZiLWFkZG9ucy1wYWdlIHtcclxuXHQmX19pbm5lciB7XHJcblx0XHRwYWRkaW5nOiAzMHB4O1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdH1cclxuXHJcblx0Jl9faGVhZGVyIHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblx0fVxyXG5cclxuXHQmX19oZWFkZXItY29udHJvbHMge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDE1cHg7XHJcblx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RDRENERDtcclxuXHJcblx0XHQ+IC5jeC12dWktYnV0dG9uIHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDEwcHg7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQuY3gtdnVpLWJ1dHRvbiB7XHJcblx0XHRmb250LXNpemU6IDEzcHg7XHJcblx0XHRmb250LXdlaWdodDogNDAwO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblxyXG5cdFx0LmJ1dHRvbi1pY29uIHtcclxuXHRcdFx0bWFyZ2luLXJpZ2h0OiA1cHg7XHJcblx0XHR9XHJcblxyXG5cdFx0Ji0tc3R5bGUtYWNjZW50IHtcclxuXHRcdFx0Y29sb3I6ICMwMDdjYmE7XHJcblx0XHRcdGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjMDA3Y2JhO1xyXG5cclxuXHRcdFx0Jjpob3ZlciB7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzAwN2NiYTEyO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQuYnV0dG9uLWljb24ge1xyXG5cdFx0XHRcdHBhdGgge1xyXG5cdFx0XHRcdFx0ZmlsbDogIzAwN2NiYTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQmLS1zdHlsZS1kYW5nZXIge1xyXG5cdFx0XHRjb2xvcjogI2Q2MzM2YztcclxuXHRcdFx0Ym94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICNkNjMzNmM7XHJcblxyXG5cdFx0XHQmOmhvdmVyIHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZDYzMzZjMTI7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5idXR0b24taWNvbiB7XHJcblx0XHRcdFx0cGF0aCB7XHJcblx0XHRcdFx0XHRmaWxsOiAjZDYzMzZjO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdCZfX2NvbnRlbnQge1xyXG5cdFx0XHQ+IHNwYW4ge1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LmN4LXZ1aS1wb3B1cCB7XHJcblx0XHQmX19oZWFkZXIge1xyXG5cdFx0XHRwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuXHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEQ0RDREQ7XHJcblx0XHRcdG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0Jl9faGVhZGVyLXRpdGxlIHtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0Zm9udC1zaXplOiAyNHB4O1xyXG5cdFx0XHRsaW5lLWhlaWdodDogMzZweDtcclxuXHRcdFx0Y29sb3I6ICMyMzI4MkQ7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQmX19saWNlbnNlLXBvcHVwIHtcclxuXHR9XHJcblxyXG5cdCZfX2xpY2Vuc2UtZm9ybSB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHRcdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG5cclxuXHRcdD4gc3BhbiB7XHJcblx0XHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQmX19saWNlbnNlLWlucHV0IHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0fVxyXG5cclxuXHQuZ28tcHJvLWJhbm5lciB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHBhZGRpbmc6IDI0cHggMDtcclxuXHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRENEQ0REO1xyXG5cclxuXHRcdCZfX3N1YnRpdGxlIHtcclxuXHRcdFx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdFx0XHRsaW5lLWhlaWdodDogMS4yNTtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0Y29sb3I6ICMwMDdDQkE7XHJcblx0XHRcdG1hcmdpbi1ib3R0b206IDVweDtcclxuXHRcdH1cclxuXHJcblx0XHQmX190aXRsZSB7XHJcblx0XHRcdGZvbnQtc2l6ZTogMjRweDtcclxuXHRcdFx0bGluZS1oZWlnaHQ6IDEuMjU7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRcdGNvbG9yOiAjMjMyODJEO1xyXG5cdFx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdCZfX2J1dHRvbiB7XHJcblx0XHRcdGNvbG9yOiB3aGl0ZTtcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzAwN0NCQTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG5cdDxkaXZcclxuXHRcdGNsYXNzPVwiamZiLWFkZG9uc19faXRlbVwiXHJcblx0XHQ6Y2xhc3M9XCJ7XHJcblx0XHRcdCdhY3RpdmF0ZWQnOiBhZGRvbkRhdGEuaXNBY3RpdmF0ZWQsXHJcblx0XHRcdCd1cGRhdGUtYXZhbGlhYmxlJzogdXBkYXRlQXZhbGlhYmxlLFxyXG5cdFx0fVwiXHJcblx0PlxyXG5cdFx0PGRpdlxyXG5cdFx0XHRjbGFzcz1cImpmYi1hZGRvbnNfX2l0ZW0taW5uZXJcIlxyXG5cdFx0XHQ6Y2xhc3M9XCJ7ICdwcm9jY2VzaW5nLXN0YXRlJzogcHJvY2Nlc2luZ1N0YXRlIH1cIlxyXG5cdFx0PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiamZiLWFkZG9uc19faXRlbS10aHVtYlwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJwcm8tYmFkZ2VcIiB2LWlmPVwiIWFkZG9uRGF0YS5pc0luc3RhbGxlZFwiPlxyXG5cdFx0XHRcdFx0PHN2ZyB3aWR0aD1cIjQwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDQwIDIwXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcblx0XHRcdFx0XHRcdDxyZWN0IHdpZHRoPVwiNDBcIiBoZWlnaHQ9XCIyMFwiIHJ4PVwiNFwiIGZpbGw9XCIjRUU3QjE2XCIvPlxyXG5cdFx0XHRcdFx0XHQ8cGF0aFxyXG5cdFx0XHRcdFx0XHRcdGQ9XCJNMTAuNjI1IDEwLjgzMDFWMTRIOS4xNDI1OFY1LjQ2ODc1SDEyLjQwNjJDMTMuMzU5NCA1LjQ2ODc1IDE0LjExNTIgNS43MTY4IDE0LjY3MzggNi4yMTI4OUMxNS4yMzYzIDYuNzA4OTggMTUuNTE3NiA3LjM2NTIzIDE1LjUxNzYgOC4xODE2NEMxNS41MTc2IDkuMDE3NTggMTUuMjQyMiA5LjY2Nzk3IDE0LjY5MTQgMTAuMTMyOEMxNC4xNDQ1IDEwLjU5NzcgMTMuMzc3IDEwLjgzMDEgMTIuMzg4NyAxMC44MzAxSDEwLjYyNVpNMTAuNjI1IDkuNjQwNjJIMTIuNDA2MkMxMi45MzM2IDkuNjQwNjIgMTMuMzM1OSA5LjUxNzU4IDEzLjYxMzMgOS4yNzE0OEMxMy44OTA2IDkuMDIxNDggMTQuMDI5MyA4LjY2MjExIDE0LjAyOTMgOC4xOTMzNkMxNC4wMjkzIDcuNzMyNDIgMTMuODg4NyA3LjM2NTIzIDEzLjYwNzQgNy4wOTE4QzEzLjMyNjIgNi44MTQ0NSAxMi45Mzk1IDYuNjcxODggMTIuNDQ3MyA2LjY2NDA2SDEwLjYyNVY5LjY0MDYyWk0xOS45NTMxIDEwLjcxMjlIMTguMzAwOFYxNEgxNi44MTg0VjUuNDY4NzVIMTkuODE4NEMyMC44MDI3IDUuNDY4NzUgMjEuNTYyNSA1LjY4OTQ1IDIyLjA5NzcgNi4xMzA4NkMyMi42MzI4IDYuNTcyMjcgMjIuOTAwNCA3LjIxMDk0IDIyLjkwMDQgOC4wNDY4OEMyMi45MDA0IDguNjE3MTkgMjIuNzYxNyA5LjA5NTcgMjIuNDg0NCA5LjQ4MjQyQzIyLjIxMDkgOS44NjUyMyAyMS44MjgxIDEwLjE2MDIgMjEuMzM1OSAxMC4zNjcyTDIzLjI1MiAxMy45MjM4VjE0SDIxLjY2NDFMMTkuOTUzMSAxMC43MTI5Wk0xOC4zMDA4IDkuNTIzNDRIMTkuODI0MkMyMC4zMjQyIDkuNTIzNDQgMjAuNzE0OCA5LjM5ODQ0IDIwLjk5NjEgOS4xNDg0NEMyMS4yNzczIDguODk0NTMgMjEuNDE4IDguNTQ4ODMgMjEuNDE4IDguMTExMzNDMjEuNDE4IDcuNjU0MyAyMS4yODcxIDcuMzAwNzggMjEuMDI1NCA3LjA1MDc4QzIwLjc2NzYgNi44MDA3OCAyMC4zODA5IDYuNjcxODggMTkuODY1MiA2LjY2NDA2SDE4LjMwMDhWOS41MjM0NFpNMzEuMTE1MiA5Ljk1NzAzQzMxLjExNTIgMTAuNzkzIDMwLjk3MDcgMTEuNTI3MyAzMC42ODE2IDEyLjE2MDJDMzAuMzkyNiAxMi43ODkxIDI5Ljk3ODUgMTMuMjczNCAyOS40Mzk1IDEzLjYxMzNDMjguOTA0MyAxMy45NDkyIDI4LjI4NzEgMTQuMTE3MiAyNy41ODc5IDE0LjExNzJDMjYuODk2NSAxNC4xMTcyIDI2LjI3OTMgMTMuOTQ5MiAyNS43MzYzIDEzLjYxMzNDMjUuMTk3MyAxMy4yNzM0IDI0Ljc3OTMgMTIuNzkxIDI0LjQ4MjQgMTIuMTY2QzI0LjE4OTUgMTEuNTQxIDI0LjA0MSAxMC44MjAzIDI0LjAzNzEgMTAuMDAzOVY5LjUyMzQ0QzI0LjAzNzEgOC42OTE0MSAyNC4xODM2IDcuOTU3MDMgMjQuNDc2NiA3LjMyMDMxQzI0Ljc3MzQgNi42ODM1OSAyNS4xODk1IDYuMTk3MjcgMjUuNzI0NiA1Ljg2MTMzQzI2LjI2MzcgNS41MjE0OCAyNi44ODA5IDUuMzUxNTYgMjcuNTc2MiA1LjM1MTU2QzI4LjI3MTUgNS4zNTE1NiAyOC44ODY3IDUuNTE5NTMgMjkuNDIxOSA1Ljg1NTQ3QzI5Ljk2MDkgNi4xODc1IDMwLjM3NyA2LjY2Nzk3IDMwLjY2OTkgNy4yOTY4OEMzMC45NjI5IDcuOTIxODggMzEuMTExMyA4LjY1MDM5IDMxLjExNTIgOS40ODI0MlY5Ljk1NzAzWk0yOS42MzI4IDkuNTExNzJDMjkuNjMyOCA4LjU2NjQxIDI5LjQ1MzEgNy44NDE4IDI5LjA5MzggNy4zMzc4OUMyOC43MzgzIDYuODMzOTggMjguMjMyNCA2LjU4MjAzIDI3LjU3NjIgNi41ODIwM0MyNi45MzU1IDYuNTgyMDMgMjYuNDMzNiA2LjgzMzk4IDI2LjA3MDMgNy4zMzc4OUMyNS43MTA5IDcuODM3ODkgMjUuNTI3MyA4LjU0Njg4IDI1LjUxOTUgOS40NjQ4NFY5Ljk1NzAzQzI1LjUxOTUgMTAuODk0NSAyNS43MDEyIDExLjYxOTEgMjYuMDY0NSAxMi4xMzA5QzI2LjQzMTYgMTIuNjQyNiAyNi45Mzk1IDEyLjg5ODQgMjcuNTg3OSAxMi44OTg0QzI4LjI0NDEgMTIuODk4NCAyOC43NDggMTIuNjQ4NCAyOS4wOTk2IDEyLjE0ODRDMjkuNDU1MSAxMS42NDg0IDI5LjYzMjggMTAuOTE4IDI5LjYzMjggOS45NTcwM1Y5LjUxMTcyWlwiXHJcblx0XHRcdFx0XHRcdFx0ZmlsbD1cIndoaXRlXCIvPlxyXG5cdFx0XHRcdFx0PC9zdmc+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGltZyA6c3JjPVwiYWRkb25EYXRhLnRodW1iXCIgYWx0PVwiXCI+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiamZiLWFkZG9uc19faXRlbS1pbmZvXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImpmYi1hZGRvbnNfX2l0ZW0tbmFtZVwiPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJsYWJlbFwiPnt7IGFkZG9uRGF0YS5uYW1lIH19PC9zcGFuPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJ2ZXJzaW9uXCI+e3sgYWRkb25EYXRhLmN1cnJlbnRWZXJzaW9uIH19PC9zcGFuPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdGNsYXNzPVwiamZiLWFkZG9uc19faXRlbS11cGRhdGVcIlxyXG5cdFx0XHRcdFx0di1pZj1cIiRwYXJlbnQuaXNMaWNlbnNlQWN0aXZhdGVkXCJcclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8ZGl2IHYtaWY9XCIhdXBkYXRlQXZhbGlhYmxlXCI+WW91ciBwbHVnaW4gaXMgdXAgdG8gZGF0ZTwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiB2LWlmPVwidXBkYXRlQXZhbGlhYmxlXCI+XHJcblx0XHRcdFx0XHRcdFZlcnNpb24gPHNwYW4gY2xhc3M9XCJsYXRlc3QtdmVyc2lvblwiPnt7IGFkZG9uRGF0YS52ZXJzaW9uIH19PC9zcGFuPiBhdmFpbGFibGVcclxuXHRcdFx0XHRcdFx0PGN4LXZ1aS1idXR0b25cclxuXHRcdFx0XHRcdFx0XHRidXR0b24tc3R5bGU9XCJsaW5rLWFjY2VudFwiXHJcblx0XHRcdFx0XHRcdFx0c2l6ZT1cImxpbmtcIlxyXG5cdFx0XHRcdFx0XHRcdDpsb2FkaW5nPVwidXBkYXRlUGx1Z2luUHJvY2Vzc2VkXCJcclxuXHRcdFx0XHRcdFx0XHRAY2xpY2s9XCJ1cGRhdGVQbHVnaW5cIlxyXG5cdFx0XHRcdFx0XHRcdHYtaWY9XCIhYWN0aXZhdGVMaWNlbmNlQWN0aW9uQXZhbGlhYmxlICYmIGlzTGljZW5zZU1vZGVcIlxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gc2xvdD1cImxhYmVsXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5VcGRhdGUgTm93PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9jeC12dWktYnV0dG9uPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0Y2xhc3M9XCJqZmItYWRkb25zX19pdGVtLWxpY2Vuc2VcIlxyXG5cdFx0XHRcdFx0di1pZj1cImFjdGl2YXRlTGljZW5jZUFjdGlvbkF2YWxpYWJsZVwiXHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PHNwYW4+TGljZW5zZSBub3QgYWN0aXZhdGVkPC9zcGFuPlxyXG5cdFx0XHRcdFx0PGN4LXZ1aS1idXR0b25cclxuXHRcdFx0XHRcdFx0YnV0dG9uLXN0eWxlPVwibGluay1hY2NlbnRcIlxyXG5cdFx0XHRcdFx0XHRzaXplPVwibGlua1wiXHJcblx0XHRcdFx0XHRcdEBjbGljaz1cImFjdGl2YXRlTGljZW5zZVwiXHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxzcGFuIHNsb3Q9XCJsYWJlbFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuPkFjdGl2YXRlIE5vdzwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9jeC12dWktYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdGNsYXNzPVwiamZiLWFkZG9uc19faXRlbS1kZXNjXCJcclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8c3BhbiB2LWh0bWw9XCJhZGRvbkRhdGEuZGVzY1wiPjwvc3Bhbj5cclxuXHRcdFx0XHRcdDxhIDpocmVmPVwibGVhcm5Nb3JlVXJsXCIgdGFyZ2V0PVwiX2JsYW5rXCI+TGVhcm4gTW9yZTwvYT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiamZiLWFkZG9uc19faXRlbS1hY3Rpb25zXCI+XHJcblxyXG5cdFx0XHRcdFx0PGN4LXZ1aS1idXR0b25cclxuXHRcdFx0XHRcdFx0YnV0dG9uLXN0eWxlPVwibGluay1hY2NlbnRcIlxyXG5cdFx0XHRcdFx0XHRzaXplPVwibGlua1wiXHJcblx0XHRcdFx0XHRcdDpsb2FkaW5nPVwiYWN0aW9uUGx1Z2luUHJvY2Vzc2VkXCJcclxuXHRcdFx0XHRcdFx0di1pZj1cImluc3RhbGxBY3Rpb25BdmFsaWFibGVcIlxyXG5cdFx0XHRcdFx0XHRAY2xpY2s9XCJpbnN0YWxsUGx1Z2luXCJcclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PHNwYW4gc2xvdD1cImxhYmVsXCI+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4+SW5zdGFsbCBBZGRvbjwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9jeC12dWktYnV0dG9uPlxyXG5cdFx0XHRcdFx0PGN4LXZ1aS1idXR0b25cclxuXHRcdFx0XHRcdFx0YnV0dG9uLXN0eWxlPVwibGluay1hY2NlbnRcIlxyXG5cdFx0XHRcdFx0XHRzaXplPVwibGlua1wiXHJcblx0XHRcdFx0XHRcdDpsb2FkaW5nPVwiYWN0aW9uUGx1Z2luUHJvY2Vzc2VkXCJcclxuXHRcdFx0XHRcdFx0di1pZj1cImFjdGl2YXRlQWN0aW9uQXZhbGlhYmxlXCJcclxuXHRcdFx0XHRcdFx0QGNsaWNrPVwiYWN0aXZhdGVQbHVnaW5cIlxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBzbG90PVwibGFiZWxcIj5cclxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj5BY3RpdmF0ZSBBZGRvbjwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9jeC12dWktYnV0dG9uPlxyXG5cdFx0XHRcdFx0PGN4LXZ1aS1idXR0b25cclxuXHRcdFx0XHRcdFx0YnV0dG9uLXN0eWxlPVwibGluay1lcnJvclwiXHJcblx0XHRcdFx0XHRcdHNpemU9XCJsaW5rXCJcclxuXHRcdFx0XHRcdFx0OmxvYWRpbmc9XCJhY3Rpb25QbHVnaW5Qcm9jZXNzZWRcIlxyXG5cdFx0XHRcdFx0XHR2LWlmPVwiZGVhY3RpdmF0ZUFjdGlvbkF2YWxpYWJsZVwiXHJcblx0XHRcdFx0XHRcdEBjbGljaz1cImRlYWN0aXZhdGVQbHVnaW5cIlxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBzbG90PVwibGFiZWxcIj5cclxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj5EZWFjdGl2YXRlIEFkZG9uPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHQ8L2N4LXZ1aS1idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblxyXG5cdDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRuYW1lOiAnYWRkb24taXRlbScsXHJcblx0cHJvcHM6IHtcclxuXHRcdGFkZG9uRGF0YTogT2JqZWN0LFxyXG5cdH0sXHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGFjdGlvblBsdWdpbjogZmFsc2UsXHJcblx0XHRcdGFjdGlvblBsdWdpblJlcXVlc3Q6IG51bGwsXHJcblx0XHRcdGFjdGlvblBsdWdpblByb2Nlc3NlZDogZmFsc2UsXHJcblx0XHRcdHVwZGF0ZVBsdWdpblByb2Nlc3NlZDogZmFsc2UsXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0Y29tcHV0ZWQ6IHtcclxuXHRcdGNsYXNzTGlzdDogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gW1xyXG5cdFx0XHRcdCdqZmItYWRkb25zX19pdGVtJyxcclxuXHRcdFx0XHR0aGlzLnVwZGF0ZUF2YWxpYWJsZSA/ICd1cGRhdGUtYXZhbGlhYmxlJyA6IGZhbHNlLFxyXG5cdFx0XHRcdHRoaXMuYWN0aXZhdGVBdmFsaWFibGUgPyAnYWN0aXZhdGUtYXZhbGlhYmxlJyA6IGZhbHNlLFxyXG5cdFx0XHRdO1xyXG5cdFx0fSxcclxuXHJcblx0XHRsZWFybk1vcmVBdmFsaWFibGUoKSB7XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0ICAgICAgICF0aGlzLiRwYXJlbnQuaXNMaWNlbnNlQWN0aXZhdGVkXHJcblx0XHRcdCAgICAgICApID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdFx0fSxcclxuXHJcblx0XHRhY3RpdmF0ZUxpY2VuY2VBY3Rpb25BdmFsaWFibGUoKSB7XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0ICAgICAgICF0aGlzLiRwYXJlbnQuaXNMaWNlbnNlQWN0aXZhdGVkICYmIHRoaXMuJHBhcmVudC5pc0xpY2Vuc2VNb2RlXHJcblx0XHRcdCAgICAgICApID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdFx0fSxcclxuXHJcblx0XHRpbnN0YWxsQWN0aW9uQXZhbGlhYmxlKCkge1xyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdCAgICAgICAhdGhpcy5hZGRvbkRhdGFbICdpc0luc3RhbGxlZCcgXSAmJiB0aGlzLiRwYXJlbnQuaXNMaWNlbnNlQWN0aXZhdGVkXHJcblx0XHRcdCAgICAgICApID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdFx0fSxcclxuXHJcblx0XHRhY3RpdmF0ZUFjdGlvbkF2YWxpYWJsZSgpIHtcclxuXHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHQgICAgICAgdGhpcy5hZGRvbkRhdGFbICdpc0luc3RhbGxlZCcgXSAmJiAhdGhpcy5hZGRvbkRhdGFbICdpc0FjdGl2YXRlZCcgXVxyXG5cdFx0XHQgICAgICAgKSA/IHRydWUgOiBmYWxzZTtcclxuXHRcdH0sXHJcblxyXG5cdFx0ZGVhY3RpdmF0ZUFjdGlvbkF2YWxpYWJsZSgpIHtcclxuXHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHQgICAgICAgdGhpcy5hZGRvbkRhdGFbICdpc0luc3RhbGxlZCcgXSAmJiB0aGlzLmFkZG9uRGF0YVsgJ2lzQWN0aXZhdGVkJyBdXHJcblx0XHRcdCAgICAgICApID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdFx0fSxcclxuXHJcblx0XHR1cGRhdGVBdmFsaWFibGUoKSB7XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0ICAgICAgIHRoaXMuYWRkb25EYXRhWyAndXBkYXRlQXZhbGlhYmxlJyBdXHJcblx0XHRcdCAgICAgICApID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdFx0fSxcclxuXHJcblx0XHRpc0xpY2Vuc2VNb2RlKCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy4kcGFyZW50LmlzTGljZW5zZU1vZGU7XHJcblx0XHR9LFxyXG5cclxuXHRcdHByb2NjZXNpbmdTdGF0ZSgpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuYWN0aW9uUGx1Z2luUHJvY2Vzc2VkIHx8IHRoaXMudXBkYXRlUGx1Z2luUHJvY2Vzc2VkO1xyXG5cdFx0fSxcclxuXHJcblx0XHRsZWFybk1vcmVVcmwoKSB7XHJcblx0XHRcdGNvbnN0IGxpY2Vuc2UgICAgICA9IHRoaXMuJHBhcmVudC5pc0xpY2Vuc2VBY3RpdmF0ZWQgPyAnamV0Zm9ybWJ1aWxkZXItbGljZW5zZScgOiAnbGljZW5zZS1ub3QtYWN0aXZhdGVkJztcclxuXHRcdFx0Y29uc3QgWyBjYW1wYWlnbiBdID0gdGhpcy5hZGRvbkRhdGEuc2x1Zy5zcGxpdCggJy8nICk7XHJcblxyXG5cdFx0XHRsZXQgZGVtb1VybCAgID0gdGhpcy5hZGRvbkRhdGEuZGVtbyxcclxuXHRcdFx0ICAgIHV0bVBhcmFtcyA9IHRoaXMuJHBhcmVudC5nZXRVdG1QYXJhbXNTdHJpbmcoIHtcclxuXHRcdFx0XHQgICAgdXRtX3NvdXJjZTogYHBsdWdpbmAsXHJcblx0XHRcdFx0ICAgIHV0bV9tZWRpdW06ICdhZGRvbnMnLFxyXG5cdFx0XHRcdCAgICB1dG1fY2FtcGFpZ246IGNhbXBhaWduLnJlcGxhY2UoICdqZXQtZm9ybS1idWlsZGVyLScsICcnICksXHJcblx0XHRcdFx0ICAgIHV0bV9jb250ZW50OiBgJHsgbGljZW5zZSB9LyR7IHRoaXMuJHBhcmVudC50aGVtZUluZm8uYXV0aG9yU2x1ZyB9YCxcclxuXHRcdFx0ICAgIH0gKTtcclxuXHJcblx0XHRcdHJldHVybiBgJHsgZGVtb1VybCB9PyR7IHV0bVBhcmFtcyB9YDtcclxuXHRcdH0sXHJcblxyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cclxuXHRcdGFjdGl2YXRlTGljZW5zZSgpIHtcclxuXHRcdFx0d2luZG93LmpmYkV2ZW50QnVzLiRlbWl0KCAnc2hvd0xpY2Vuc2VQb3B1cCcgKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0aW5zdGFsbFBsdWdpbigpIHtcclxuXHRcdFx0dGhpcy5hY3Rpb25QbHVnaW4gPSAnaW5zdGFsbCc7XHJcblx0XHRcdHRoaXMucGx1Z2luQWN0aW9uKCk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGRlYWN0aXZhdGVQbHVnaW4oKSB7XHJcblx0XHRcdHRoaXMuYWN0aW9uUGx1Z2luID0gJ2RlYWN0aXZhdGUnO1xyXG5cdFx0XHR0aGlzLnBsdWdpbkFjdGlvbigpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRhY3RpdmF0ZVBsdWdpbigpIHtcclxuXHRcdFx0dGhpcy5hY3Rpb25QbHVnaW4gPSAnYWN0aXZhdGUnO1xyXG5cdFx0XHR0aGlzLnBsdWdpbkFjdGlvbigpO1xyXG5cdFx0fSxcclxuXHJcblx0XHR1cGRhdGVQbHVnaW4oKSB7XHJcblxyXG5cdFx0XHRpZiAoIHRoaXMudXBkYXRlQXZhbGlhYmxlICkge1xyXG5cdFx0XHRcdHRoaXMuYWN0aW9uUGx1Z2luID0gJ3VwZGF0ZSc7XHJcblx0XHRcdFx0dGhpcy5wbHVnaW5BY3Rpb24oKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHRwbHVnaW5BY3Rpb246IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0bGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuXHRcdFx0c2VsZi5hY3Rpb25QbHVnaW5SZXF1ZXN0ID0galF1ZXJ5LmFqYXgoIHtcclxuXHRcdFx0XHR0eXBlOiAnUE9TVCcsXHJcblx0XHRcdFx0dXJsOiB3aW5kb3cuSmV0RkJQYWdlQ29uZmlnLmFqYXhVcmwsXHJcblx0XHRcdFx0ZGF0YVR5cGU6ICdqc29uJyxcclxuXHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRhY3Rpb246IGBqZmJfYWRkb25fJHsgc2VsZi5hY3Rpb25QbHVnaW4gfV9hY3Rpb25gLFxyXG5cdFx0XHRcdFx0bm9uY2U6IHdpbmRvdy5KZXRGQlBhZ2VDb25maWcubm9uY2UsXHJcblx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdHBsdWdpbjogc2VsZi5hZGRvbkRhdGFbICdzbHVnJyBdLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGJlZm9yZVNlbmQ6IGZ1bmN0aW9uICgganFYSFIsIGFqYXhTZXR0aW5ncyApIHtcclxuXHJcblx0XHRcdFx0XHRpZiAoIG51bGwgIT09IHNlbGYuYWN0aW9uUGx1Z2luUmVxdWVzdCApIHtcclxuXHRcdFx0XHRcdFx0c2VsZi5hY3Rpb25QbHVnaW5SZXF1ZXN0LmFib3J0KCk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0c3dpdGNoICggc2VsZi5hY3Rpb25QbHVnaW4gKSB7XHJcblx0XHRcdFx0XHRcdGNhc2UgJ2luc3RhbGwnOlxyXG5cdFx0XHRcdFx0XHRjYXNlICdhY3RpdmF0ZSc6XHJcblx0XHRcdFx0XHRcdGNhc2UgJ2RlYWN0aXZhdGUnOlxyXG5cdFx0XHRcdFx0XHRcdHNlbGYuYWN0aW9uUGx1Z2luUHJvY2Vzc2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0Y2FzZSAndXBkYXRlJzpcclxuXHRcdFx0XHRcdFx0XHRzZWxmLnVwZGF0ZVBsdWdpblByb2Nlc3NlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbiAoIHJlc3BvbmNlLCB0ZXh0U3RhdHVzLCBqcVhIUiApIHtcclxuXHRcdFx0XHRcdGlmICggcmVzcG9uY2Uuc3VjY2VzcyApIHtcclxuXHRcdFx0XHRcdFx0c2VsZi4kQ1hOb3RpY2UuYWRkKCB7XHJcblx0XHRcdFx0XHRcdFx0bWVzc2FnZTogcmVzcG9uY2UubWVzc2FnZSxcclxuXHRcdFx0XHRcdFx0XHR0eXBlOiAnc3VjY2VzcycsXHJcblx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDQwMDAsXHJcblx0XHRcdFx0XHRcdH0gKTtcclxuXHJcblx0XHRcdFx0XHRcdHdpbmRvdy5qZmJFdmVudEJ1cy4kZW1pdCggJ3VwZGF0ZUFkZG9uRGF0YScsIHtcclxuXHRcdFx0XHRcdFx0XHRzbHVnOiBzZWxmLmFkZG9uRGF0YVsgJ3NsdWcnIF0sXHJcblx0XHRcdFx0XHRcdFx0YWRkb25EYXRhOiByZXNwb25jZS5kYXRhLFxyXG5cdFx0XHRcdFx0XHRcdGFjdGlvbjogc2VsZi5hY3Rpb25QbHVnaW4sXHJcblx0XHRcdFx0XHRcdH0gKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdFx0c2VsZi4kQ1hOb3RpY2UuYWRkKCB7XHJcblx0XHRcdFx0XHRcdFx0bWVzc2FnZTogcmVzcG9uY2UubWVzc2FnZSxcclxuXHRcdFx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxyXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiA0MDAwLFxyXG5cdFx0XHRcdFx0XHR9ICk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRlcnJvcjogZnVuY3Rpb24gKCBqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24gKSB7XHJcblx0XHRcdFx0XHRzZWxmLiRDWE5vdGljZS5hZGQoIHtcclxuXHRcdFx0XHRcdFx0bWVzc2FnZTogZXJyb3JUaHJvd24sXHJcblx0XHRcdFx0XHRcdHR5cGU6ICdlcnJvcicsXHJcblx0XHRcdFx0XHRcdGR1cmF0aW9uOiA0MDAwLFxyXG5cdFx0XHRcdFx0fSApO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Y29tcGxldGU6ICgpID0+IHRoaXMub25FbmRSZXF1ZXN0KCksXHJcblx0XHRcdH0gKTtcclxuXHRcdH0sXHJcblx0XHRvbkVuZFJlcXVlc3QoKSB7XHJcblx0XHRcdHN3aXRjaCAoIHRoaXMuYWN0aW9uUGx1Z2luICkge1xyXG5cdFx0XHRcdGNhc2UgJ2luc3RhbGwnOlxyXG5cdFx0XHRcdGNhc2UgJ2FjdGl2YXRlJzpcclxuXHRcdFx0XHRjYXNlICdkZWFjdGl2YXRlJzpcclxuXHRcdFx0XHRcdHRoaXMuYWN0aW9uUGx1Z2luUHJvY2Vzc2VkID0gZmFsc2U7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlICd1cGRhdGUnOlxyXG5cdFx0XHRcdFx0dGhpcy51cGRhdGVQbHVnaW5Qcm9jZXNzZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XHJcblxyXG4uamZiLWFkZG9ucyB7XHJcblx0bWFyZ2luLWJvdHRvbTogNTBweDtcclxuXHJcblx0JjpsYXN0LWNoaWxkIHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDA7XHJcblx0fVxyXG5cclxuXHRhIHtcclxuXHRcdGNvbG9yOiAjMDA3Y2JhO1xyXG5cdH1cclxuXHJcblx0Jl9faGVhZGVyIHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblx0fVxyXG5cclxuXHQmX19saXN0IHtcclxuXHRcdGRpc3BsYXk6IGdyaWQ7XHJcblx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xyXG5cdFx0Z2FwOiA0MHB4O1xyXG5cclxuXHRcdEBtZWRpYSAobWF4LXdpZHRoOiAxMTQwcHgpIHtcclxuXHRcdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdCZfX2l0ZW0ge1xyXG5cdFx0dHJhbnNpdGlvbjogYm94LXNoYWRvdyAuM3MgZWFzZS1vdXQ7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxuXHRcdCY6aG92ZXIge1xyXG5cdFx0XHRib3gtc2hhZG93OiAwcHggNHB4IDI4cHggcmdiYSgxNSwgMjMsIDQyLCAwLjEpO1xyXG5cdFx0fVxyXG5cclxuXHRcdCYuYWN0aXZhdGVkIHtcclxuXHRcdFx0LmpmYi1hZGRvbnNfX2l0ZW0taW5mbyB7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQmLnVwZGF0ZS1hdmFsaWFibGUge1xyXG5cdFx0XHQuamZiLWFkZG9uc19faXRlbS1uYW1lIHtcclxuXHRcdFx0XHQudmVyc2lvbiB7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRDYzMzZDO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LmpmYi1hZGRvbnNfX2l0ZW0tdXBkYXRlIHtcclxuXHRcdFx0XHQubGF0ZXN0LXZlcnNpb24ge1xyXG5cdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzQ2QjQ1MDtcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDJweCA4cHg7XHJcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQmX19pdGVtLWlubmVyIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0YWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0fVxyXG5cclxuXHQmX19pdGVtLXRodW1iIHtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XHJcblx0XHRsaW5lLWhlaWdodDogMDtcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG5cdFx0LnByby1iYWRnZSB7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0dG9wOiAxMnB4O1xyXG5cdFx0XHRsZWZ0OiAxMnB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdGltZyB7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRoZWlnaHQ6IGF1dG87XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQmX19pdGVtLWluZm8ge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuXHRcdGZsZXg6IDEgMSBhdXRvO1xyXG5cdFx0cGFkZGluZzogMjBweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XHJcblx0XHRib3JkZXItd2lkdGg6IDAgMXB4IDFweCAxcHg7XHJcblx0XHRib3JkZXItY29sb3I6ICNEQ0RDREQ7XHJcblx0XHRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblx0fVxyXG5cclxuXHQmX19pdGVtLW5hbWUge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcblx0XHQubGFiZWwge1xyXG5cdFx0XHRmb250LXNpemU6IDIwcHg7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0XHRcdGxpbmUtaGVpZ2h0OiAxLjI1O1xyXG5cdFx0fVxyXG5cclxuXHRcdC52ZXJzaW9uIHtcclxuXHRcdFx0cGFkZGluZzogMXB4IDhweDtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdFx0XHRjb2xvcjogd2hpdGU7XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICM0NkI0NTA7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Jl9faXRlbS11cGRhdGUge1xyXG5cdFx0Y29sb3I6ICM3YjdlODE7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cdH1cclxuXHJcblx0Jl9faXRlbS1saWNlbnNlIHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0XHRjb2xvcjogIzdiN2U4MTtcclxuXHJcblx0XHQuY3gtdnVpLWJ1dHRvbiB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAzcHg7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQmX19pdGVtLWRlc2Mge1xyXG5cdFx0ZmxleDogMSAxIGF1dG87XHJcblxyXG5cdFx0YSB7XHJcblx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdCZfX2l0ZW0tYWN0aW9ucyB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGZsZXgtd3JhcDogd3JhcDtcclxuXHRcdG1hcmdpbi10b3A6IDIwcHg7XHJcblxyXG5cdFx0JjplbXB0eSB7XHJcblx0XHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0XHR9XHJcblxyXG5cdFx0LmN4LXZ1aS1idXR0b24ge1xyXG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG48L3N0eWxlPiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAucHJvY2Nlc2luZy1zdGF0ZSB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uamZiLWFkZG9ucy1wYWdlX19pbm5lciB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5qZmItYWRkb25zLXBhZ2VfX2hlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4uamZiLWFkZG9ucy1wYWdlX19oZWFkZXItY29udHJvbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEQ0RDREQ7XG59XG4uamZiLWFkZG9ucy1wYWdlX19oZWFkZXItY29udHJvbHMgPiAuY3gtdnVpLWJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLmpmYi1hZGRvbnMtcGFnZSAuY3gtdnVpLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uamZiLWFkZG9ucy1wYWdlIC5jeC12dWktYnV0dG9uIC5idXR0b24taWNvbiB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLmpmYi1hZGRvbnMtcGFnZSAuY3gtdnVpLWJ1dHRvbi0tc3R5bGUtYWNjZW50IHtcbiAgY29sb3I6ICMwMDdjYmE7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjMDA3Y2JhO1xufVxuLmpmYi1hZGRvbnMtcGFnZSAuY3gtdnVpLWJ1dHRvbi0tc3R5bGUtYWNjZW50OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMjQsIDE4NiwgMC4wNzA1ODgyMzUzKTtcbn1cbi5qZmItYWRkb25zLXBhZ2UgLmN4LXZ1aS1idXR0b24tLXN0eWxlLWFjY2VudCAuYnV0dG9uLWljb24gcGF0aCB7XG4gIGZpbGw6ICMwMDdjYmE7XG59XG4uamZiLWFkZG9ucy1wYWdlIC5jeC12dWktYnV0dG9uLS1zdHlsZS1kYW5nZXIge1xuICBjb2xvcjogI2Q2MzM2YztcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICNkNjMzNmM7XG59XG4uamZiLWFkZG9ucy1wYWdlIC5jeC12dWktYnV0dG9uLS1zdHlsZS1kYW5nZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxNCwgNTEsIDEwOCwgMC4wNzA1ODgyMzUzKTtcbn1cbi5qZmItYWRkb25zLXBhZ2UgLmN4LXZ1aS1idXR0b24tLXN0eWxlLWRhbmdlciAuYnV0dG9uLWljb24gcGF0aCB7XG4gIGZpbGw6ICNkNjMzNmM7XG59XG4uamZiLWFkZG9ucy1wYWdlIC5jeC12dWktYnV0dG9uX19jb250ZW50ID4gc3BhbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmpmYi1hZGRvbnMtcGFnZSAuY3gtdnVpLXBvcHVwX19oZWFkZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEQ0RDREQ7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4uamZiLWFkZG9ucy1wYWdlIC5jeC12dWktcG9wdXBfX2hlYWRlci10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gIGNvbG9yOiAjMjMyODJEO1xufVxuLmpmYi1hZGRvbnMtcGFnZV9fbGljZW5zZS1mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbn1cbi5qZmItYWRkb25zLXBhZ2VfX2xpY2Vuc2UtZm9ybSA+IHNwYW4ge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmpmYi1hZGRvbnMtcGFnZV9fbGljZW5zZS1pbnB1dCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uamZiLWFkZG9ucy1wYWdlIC5nby1wcm8tYmFubmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDI0cHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEQ0RDREQ7XG59XG4uamZiLWFkZG9ucy1wYWdlIC5nby1wcm8tYmFubmVyX19zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMDA3Q0JBO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4uamZiLWFkZG9ucy1wYWdlIC5nby1wcm8tYmFubmVyX190aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMjMyODJEO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmpmYi1hZGRvbnMtcGFnZSAuZ28tcHJvLWJhbm5lcl9fYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3Q0JBO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vYWRtaW4vcGFnZXMvamZiLWFkZG9ucy9BZGRvbnNQYWdlLnZ1ZVwiLFwid2VicGFjazovLy4vLi4vQWRkb25zUGFnZS52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBd2FBO0VBQ0MsWUFBQTtFQUNBLG9CQUFBO0FDdmFEO0FEMmFDO0VBQ0MsYUFBQTtFQUNBLFlBQUE7QUN4YUY7QUQyYUM7RUFDQyxtQkFBQTtBQ3phRjtBRDRhQztFQUNDLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQ0FBQTtBQzFhRjtBRDRhRTtFQUNDLGlCQUFBO0FDMWFIO0FEOGFDO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7QUM1YUY7QUQ4YUU7RUFDQyxpQkFBQTtBQzVhSDtBRCthRTtFQUNDLGNBQUE7RUFDQSxtQ0FBQTtBQzdhSDtBRCthRztFQUNDLGlEQUFBO0FDN2FKO0FEaWJJO0VBQ0MsYUFBQTtBQy9hTDtBRG9iRTtFQUNDLGNBQUE7RUFDQSxtQ0FBQTtBQ2xiSDtBRG9iRztFQUNDLGtEQUFBO0FDbGJKO0FEc2JJO0VBQ0MsYUFBQTtBQ3BiTDtBRDBiRztFQUNDLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDeGJKO0FEOGJFO0VBQ0Msb0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0FDNWJIO0FEK2JFO0VBQ0MsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDN2JIO0FEb2NDO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtBQ2xjRjtBRG9jRTtFQUNDLG1CQUFBO0FDbGNIO0FEc2NDO0VBQ0MsbUJBQUE7QUNwY0Y7QUR1Y0M7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FDcmNGO0FEdWNFO0VBQ0MsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNyY0g7QUR3Y0U7RUFDQyxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ3RjSDtBRHljRTtFQUNDLFlBQUE7RUFDQSx5QkFBQTtBQ3ZjSFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXHJcXG5cXHJcXG4ucHJvY2Nlc2luZy1zdGF0ZSB7XFxyXFxuXFx0b3BhY2l0eTogMC41O1xcclxcblxcdHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uamZiLWFkZG9ucy1wYWdlIHtcXHJcXG5cXHQmX19pbm5lciB7XFxyXFxuXFx0XFx0cGFkZGluZzogMzBweDtcXHJcXG5cXHRcXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCZfX2hlYWRlciB7XFxyXFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMzBweDtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Jl9faGVhZGVyLWNvbnRyb2xzIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHRwYWRkaW5nLWJvdHRvbTogMTVweDtcXHJcXG5cXHRcXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RDRENERDtcXHJcXG5cXHJcXG5cXHRcXHQ+IC5jeC12dWktYnV0dG9uIHtcXHJcXG5cXHRcXHRcXHRtYXJnaW4tbGVmdDogMTBweDtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5jeC12dWktYnV0dG9uIHtcXHJcXG5cXHRcXHRmb250LXNpemU6IDEzcHg7XFxyXFxuXFx0XFx0Zm9udC13ZWlnaHQ6IDQwMDtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG5cXHJcXG5cXHRcXHQuYnV0dG9uLWljb24ge1xcclxcblxcdFxcdFxcdG1hcmdpbi1yaWdodDogNXB4O1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQmLS1zdHlsZS1hY2NlbnQge1xcclxcblxcdFxcdFxcdGNvbG9yOiAjMDA3Y2JhO1xcclxcblxcdFxcdFxcdGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjMDA3Y2JhO1xcclxcblxcclxcblxcdFxcdFxcdCY6aG92ZXIge1xcclxcblxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICMwMDdjYmExMjtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0LmJ1dHRvbi1pY29uIHtcXHJcXG5cXHRcXHRcXHRcXHRwYXRoIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRmaWxsOiAjMDA3Y2JhO1xcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdCYtLXN0eWxlLWRhbmdlciB7XFxyXFxuXFx0XFx0XFx0Y29sb3I6ICNkNjMzNmM7XFxyXFxuXFx0XFx0XFx0Ym94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICNkNjMzNmM7XFxyXFxuXFxyXFxuXFx0XFx0XFx0Jjpob3ZlciB7XFxyXFxuXFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogI2Q2MzM2YzEyO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHQuYnV0dG9uLWljb24ge1xcclxcblxcdFxcdFxcdFxcdHBhdGgge1xcclxcblxcdFxcdFxcdFxcdFxcdGZpbGw6ICNkNjMzNmM7XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Jl9fY29udGVudCB7XFxyXFxuXFx0XFx0XFx0PiBzcGFuIHtcXHJcXG5cXHRcXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdFxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LmN4LXZ1aS1wb3B1cCB7XFxyXFxuXFx0XFx0Jl9faGVhZGVyIHtcXHJcXG5cXHRcXHRcXHRwYWRkaW5nLWJvdHRvbTogMTVweDtcXHJcXG5cXHRcXHRcXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RDRENERDtcXHJcXG5cXHRcXHRcXHRtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQmX19oZWFkZXItdGl0bGUge1xcclxcblxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuXFx0XFx0XFx0Zm9udC1zaXplOiAyNHB4O1xcclxcblxcdFxcdFxcdGxpbmUtaGVpZ2h0OiAzNnB4O1xcclxcblxcdFxcdFxcdGNvbG9yOiAjMjMyODJEO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Jl9fbGljZW5zZS1wb3B1cCB7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCZfX2xpY2Vuc2UtZm9ybSB7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdFxcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG5cXHRcXHRhbGlnbi1pdGVtczogc3RyZXRjaDtcXHJcXG5cXHJcXG5cXHRcXHQ+IHNwYW4ge1xcclxcblxcdFxcdFxcdG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQmX19saWNlbnNlLWlucHV0IHtcXHJcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQuZ28tcHJvLWJhbm5lciB7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0cGFkZGluZzogMjRweCAwO1xcclxcblxcdFxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRENEQ0REO1xcclxcblxcclxcblxcdFxcdCZfX3N1YnRpdGxlIHtcXHJcXG5cXHRcXHRcXHRmb250LXNpemU6IDE4cHg7XFxyXFxuXFx0XFx0XFx0bGluZS1oZWlnaHQ6IDEuMjU7XFxyXFxuXFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDUwMDtcXHJcXG5cXHRcXHRcXHRjb2xvcjogIzAwN0NCQTtcXHJcXG5cXHRcXHRcXHRtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdCZfX3RpdGxlIHtcXHJcXG5cXHRcXHRcXHRmb250LXNpemU6IDI0cHg7XFxyXFxuXFx0XFx0XFx0bGluZS1oZWlnaHQ6IDEuMjU7XFxyXFxuXFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDUwMDtcXHJcXG5cXHRcXHRcXHRjb2xvcjogIzIzMjgyRDtcXHJcXG5cXHRcXHRcXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQmX19idXR0b24ge1xcclxcblxcdFxcdFxcdGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3Q0JBO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcblwiLFwiLnByb2NjZXNpbmctc3RhdGUge1xcbiAgb3BhY2l0eTogMC41O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5qZmItYWRkb25zLXBhZ2VfX2lubmVyIHtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5qZmItYWRkb25zLXBhZ2VfX2hlYWRlciB7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlX19oZWFkZXItY29udHJvbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RDRENERDtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZV9faGVhZGVyLWNvbnRyb2xzID4gLmN4LXZ1aS1idXR0b24ge1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmN4LXZ1aS1idXR0b24ge1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlIC5jeC12dWktYnV0dG9uIC5idXR0b24taWNvbiB7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuY3gtdnVpLWJ1dHRvbi0tc3R5bGUtYWNjZW50IHtcXG4gIGNvbG9yOiAjMDA3Y2JhO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICMwMDdjYmE7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmN4LXZ1aS1idXR0b24tLXN0eWxlLWFjY2VudDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEyNCwgMTg2LCAwLjA3MDU4ODIzNTMpO1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlIC5jeC12dWktYnV0dG9uLS1zdHlsZS1hY2NlbnQgLmJ1dHRvbi1pY29uIHBhdGgge1xcbiAgZmlsbDogIzAwN2NiYTtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuY3gtdnVpLWJ1dHRvbi0tc3R5bGUtZGFuZ2VyIHtcXG4gIGNvbG9yOiAjZDYzMzZjO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICNkNjMzNmM7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmN4LXZ1aS1idXR0b24tLXN0eWxlLWRhbmdlcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxNCwgNTEsIDEwOCwgMC4wNzA1ODgyMzUzKTtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZSAuY3gtdnVpLWJ1dHRvbi0tc3R5bGUtZGFuZ2VyIC5idXR0b24taWNvbiBwYXRoIHtcXG4gIGZpbGw6ICNkNjMzNmM7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmN4LXZ1aS1idXR0b25fX2NvbnRlbnQgPiBzcGFuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmN4LXZ1aS1wb3B1cF9faGVhZGVyIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEQ0RDREQ7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlIC5jeC12dWktcG9wdXBfX2hlYWRlci10aXRsZSB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XFxuICBjb2xvcjogIzIzMjgyRDtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZV9fbGljZW5zZS1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxufVxcbi5qZmItYWRkb25zLXBhZ2VfX2xpY2Vuc2UtZm9ybSA+IHNwYW4ge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLmpmYi1hZGRvbnMtcGFnZV9fbGljZW5zZS1pbnB1dCB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlIC5nby1wcm8tYmFubmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMjRweCAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEQ0RDREQ7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmdvLXByby1iYW5uZXJfX3N1YnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiAjMDA3Q0JBO1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG4uamZiLWFkZG9ucy1wYWdlIC5nby1wcm8tYmFubmVyX190aXRsZSB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBsaW5lLWhlaWdodDogMS4yNTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogIzIzMjgyRDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi5qZmItYWRkb25zLXBhZ2UgLmdvLXByby1iYW5uZXJfX2J1dHRvbiB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3Q0JBO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5qZmItYWRkb25zIHtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cbi5qZmItYWRkb25zOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLmpmYi1hZGRvbnMgYSB7XG4gIGNvbG9yOiAjMDA3Y2JhO1xufVxuLmpmYi1hZGRvbnNfX2hlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uamZiLWFkZG9uc19fbGlzdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gIGdhcDogNDBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTQwcHgpIHtcbi5qZmItYWRkb25zX19saXN0IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xufVxufVxuLmpmYi1hZGRvbnNfX2l0ZW0ge1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3MgZWFzZS1vdXQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uamZiLWFkZG9uc19faXRlbTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggMjhweCByZ2JhKDE1LCAyMywgNDIsIDAuMSk7XG59XG4uamZiLWFkZG9uc19faXRlbS5hY3RpdmF0ZWQgLmpmYi1hZGRvbnNfX2l0ZW0taW5mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLmpmYi1hZGRvbnNfX2l0ZW0udXBkYXRlLWF2YWxpYWJsZSAuamZiLWFkZG9uc19faXRlbS1uYW1lIC52ZXJzaW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q2MzM2Qztcbn1cbi5qZmItYWRkb25zX19pdGVtLnVwZGF0ZS1hdmFsaWFibGUgLmpmYi1hZGRvbnNfX2l0ZW0tdXBkYXRlIC5sYXRlc3QtdmVyc2lvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ2QjQ1MDtcbiAgcGFkZGluZzogMnB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmpmYi1hZGRvbnNfX2l0ZW0taW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmpmYi1hZGRvbnNfX2l0ZW0tdGh1bWIge1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xuICBsaW5lLWhlaWdodDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmpmYi1hZGRvbnNfX2l0ZW0tdGh1bWIgLnByby1iYWRnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMnB4O1xuICBsZWZ0OiAxMnB4O1xufVxuLmpmYi1hZGRvbnNfX2l0ZW0tdGh1bWIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cbi5qZmItYWRkb25zX19pdGVtLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgZmxleDogMSAxIGF1dG87XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XG4gIGJvcmRlci13aWR0aDogMCAxcHggMXB4IDFweDtcbiAgYm9yZGVyLWNvbG9yOiAjRENEQ0REO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5qZmItYWRkb25zX19pdGVtLW5hbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmpmYi1hZGRvbnNfX2l0ZW0tbmFtZSAubGFiZWwge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xufVxuLmpmYi1hZGRvbnNfX2l0ZW0tbmFtZSAudmVyc2lvbiB7XG4gIHBhZGRpbmc6IDFweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDZCNDUwO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5qZmItYWRkb25zX19pdGVtLXVwZGF0ZSB7XG4gIGNvbG9yOiAjN2I3ZTgxO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmpmYi1hZGRvbnNfX2l0ZW0tbGljZW5zZSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGNvbG9yOiAjN2I3ZTgxO1xufVxuLmpmYi1hZGRvbnNfX2l0ZW0tbGljZW5zZSAuY3gtdnVpLWJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG59XG4uamZiLWFkZG9uc19faXRlbS1kZXNjIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG4uamZiLWFkZG9uc19faXRlbS1kZXNjIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uamZiLWFkZG9uc19faXRlbS1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uamZiLWFkZG9uc19faXRlbS1hY3Rpb25zOmVtcHR5IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5qZmItYWRkb25zX19pdGVtLWFjdGlvbnMgLmN4LXZ1aS1idXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9hZG1pbi9wYWdlcy9qZmItYWRkb25zL2NvbXBvbmVudHMvQWRkb25JdGVtLnZ1ZVwiLFwid2VicGFjazovLy4vLi4vQWRkb25JdGVtLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFrVEE7RUFDQyxtQkFBQTtBQ2pURDtBRG1UQztFQUNDLGdCQUFBO0FDalRGO0FEb1RDO0VBQ0MsY0FBQTtBQ2xURjtBRHFUQztFQUNDLG1CQUFBO0FDblRGO0FEc1RDO0VBQ0MsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsU0FBQTtBQ3BURjtBRHNURTtBQUxEO0lBTUUscUNBQUE7QUNuVEQ7QUFDRjtBRHNUQztFQUNDLG9DQUFBO0VBQ0EsbUJBQUE7QUNwVEY7QURzVEU7RUFDQyw4Q0FBQTtBQ3BUSDtBRHdURztFQUNDLHVCQUFBO0FDdFRKO0FENFRJO0VBQ0MseUJBQUE7QUMxVEw7QUQrVEk7RUFDQyxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDN1RMO0FEbVVDO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FDalVGO0FEb1VDO0VBQ0MsNEJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ2xVRjtBRG9VRTtFQUNDLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNsVUg7QURxVUU7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBQ25VSDtBRHVVQztFQUNDLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDclVGO0FEd1VDO0VBQ0MsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ3RVRjtBRHdVRTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDdFVIO0FEeVVFO0VBQ0MsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FDdlVIO0FEMlVDO0VBQ0MsY0FBQTtFQUNBLG1CQUFBO0FDelVGO0FENFVDO0VBQ0MsbUJBQUE7RUFDQSxjQUFBO0FDMVVGO0FENFVFO0VBQ0MsZ0JBQUE7QUMxVUg7QUQ4VUM7RUFDQyxjQUFBO0FDNVVGO0FEOFVFO0VBQ0MscUJBQUE7QUM1VUg7QURnVkM7RUFDQyxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQzlVRjtBRGdWRTtFQUNDLGFBQUE7QUM5VUg7QURpVkU7RUFDQyxrQkFBQTtBQy9VSFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXHJcXG5cXHJcXG4uamZiLWFkZG9ucyB7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogNTBweDtcXHJcXG5cXHJcXG5cXHQmOmxhc3QtY2hpbGQge1xcclxcblxcdFxcdG1hcmdpbi1ib3R0b206IDA7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdGEge1xcclxcblxcdFxcdGNvbG9yOiAjMDA3Y2JhO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQmX19oZWFkZXIge1xcclxcblxcdFxcdG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCZfX2xpc3Qge1xcclxcblxcdFxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXHJcXG5cXHRcXHRnYXA6IDQwcHg7XFxyXFxuXFxyXFxuXFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6IDExNDBweCkge1xcclxcblxcdFxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQmX19pdGVtIHtcXHJcXG5cXHRcXHR0cmFuc2l0aW9uOiBib3gtc2hhZG93IC4zcyBlYXNlLW91dDtcXHJcXG5cXHRcXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcblxcclxcblxcdFxcdCY6aG92ZXIge1xcclxcblxcdFxcdFxcdGJveC1zaGFkb3c6IDBweCA0cHggMjhweCByZ2JhKDE1LCAyMywgNDIsIDAuMSk7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdCYuYWN0aXZhdGVkIHtcXHJcXG5cXHRcXHRcXHQuamZiLWFkZG9uc19faXRlbS1pbmZvIHtcXHJcXG5cXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdCYudXBkYXRlLWF2YWxpYWJsZSB7XFxyXFxuXFx0XFx0XFx0LmpmYi1hZGRvbnNfX2l0ZW0tbmFtZSB7XFxyXFxuXFx0XFx0XFx0XFx0LnZlcnNpb24ge1xcclxcblxcdFxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICNENjMzNkM7XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHQuamZiLWFkZG9uc19faXRlbS11cGRhdGUge1xcclxcblxcdFxcdFxcdFxcdC5sYXRlc3QtdmVyc2lvbiB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0Y29sb3I6IHdoaXRlO1xcclxcblxcdFxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICM0NkI0NTA7XFxyXFxuXFx0XFx0XFx0XFx0XFx0cGFkZGluZzogMnB4IDhweDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCZfX2l0ZW0taW5uZXIge1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRcXHRhbGlnbi1pdGVtczogc3RyZXRjaDtcXHJcXG5cXHRcXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCZfX2l0ZW0tdGh1bWIge1xcclxcblxcdFxcdGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XFxyXFxuXFx0XFx0bGluZS1oZWlnaHQ6IDA7XFxyXFxuXFx0XFx0b3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuXFx0XFx0LnByby1iYWRnZSB7XFxyXFxuXFx0XFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdFxcdFxcdHRvcDogMTJweDtcXHJcXG5cXHRcXHRcXHRsZWZ0OiAxMnB4O1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRpbWcge1xcclxcblxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdFxcdGhlaWdodDogYXV0bztcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCZfX2l0ZW0taW5mbyB7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdFxcdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcblxcdFxcdGZsZXg6IDEgMSBhdXRvO1xcclxcblxcdFxcdHBhZGRpbmc6IDIwcHg7XFxyXFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcXHJcXG5cXHRcXHRib3JkZXItd2lkdGg6IDAgMXB4IDFweCAxcHg7XFxyXFxuXFx0XFx0Ym9yZGVyLWNvbG9yOiAjRENEQ0REO1xcclxcblxcdFxcdGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCZfX2l0ZW0tbmFtZSB7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0XFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG5cXHJcXG5cXHRcXHQubGFiZWwge1xcclxcblxcdFxcdFxcdGZvbnQtc2l6ZTogMjBweDtcXHJcXG5cXHRcXHRcXHRmb250LXdlaWdodDogNzAwO1xcclxcblxcdFxcdFxcdGxpbmUtaGVpZ2h0OiAxLjI1O1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQudmVyc2lvbiB7XFxyXFxuXFx0XFx0XFx0cGFkZGluZzogMXB4IDhweDtcXHJcXG5cXHRcXHRcXHRib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuXFx0XFx0XFx0Y29sb3I6IHdoaXRlO1xcclxcblxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICM0NkI0NTA7XFxyXFxuXFx0XFx0XFx0bWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQmX19pdGVtLXVwZGF0ZSB7XFxyXFxuXFx0XFx0Y29sb3I6ICM3YjdlODE7XFxyXFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Jl9faXRlbS1saWNlbnNlIHtcXHJcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcblxcdFxcdGNvbG9yOiAjN2I3ZTgxO1xcclxcblxcclxcblxcdFxcdC5jeC12dWktYnV0dG9uIHtcXHJcXG5cXHRcXHRcXHRtYXJnaW4tbGVmdDogM3B4O1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Jl9faXRlbS1kZXNjIHtcXHJcXG5cXHRcXHRmbGV4OiAxIDEgYXV0bztcXHJcXG5cXHJcXG5cXHRcXHRhIHtcXHJcXG5cXHRcXHRcXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQmX19pdGVtLWFjdGlvbnMge1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0ZmxleC13cmFwOiB3cmFwO1xcclxcblxcdFxcdG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuXFxyXFxuXFx0XFx0JjplbXB0eSB7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0LmN4LXZ1aS1idXR0b24ge1xcclxcblxcdFxcdFxcdG1hcmdpbi1yaWdodDogMjBweDtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5cIixcIi5qZmItYWRkb25zIHtcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcbi5qZmItYWRkb25zOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuLmpmYi1hZGRvbnMgYSB7XFxuICBjb2xvcjogIzAwN2NiYTtcXG59XFxuLmpmYi1hZGRvbnNfX2hlYWRlciB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4uamZiLWFkZG9uc19fbGlzdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gIGdhcDogNDBweDtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDExNDBweCkge1xcbiAgLmpmYi1hZGRvbnNfX2xpc3Qge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgfVxcbn1cXG4uamZiLWFkZG9uc19faXRlbSB7XFxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3MgZWFzZS1vdXQ7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4uamZiLWFkZG9uc19faXRlbTpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwcHggNHB4IDI4cHggcmdiYSgxNSwgMjMsIDQyLCAwLjEpO1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS5hY3RpdmF0ZWQgLmpmYi1hZGRvbnNfX2l0ZW0taW5mbyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0udXBkYXRlLWF2YWxpYWJsZSAuamZiLWFkZG9uc19faXRlbS1uYW1lIC52ZXJzaW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNENjMzNkM7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLnVwZGF0ZS1hdmFsaWFibGUgLmpmYi1hZGRvbnNfX2l0ZW0tdXBkYXRlIC5sYXRlc3QtdmVyc2lvbiB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDZCNDUwO1xcbiAgcGFkZGluZzogMnB4IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0taW5uZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tdGh1bWIge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tdGh1bWIgLnByby1iYWRnZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEycHg7XFxuICBsZWZ0OiAxMnB4O1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS10aHVtYiBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcbi5qZmItYWRkb25zX19pdGVtLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XFxuICBib3JkZXItd2lkdGg6IDAgMXB4IDFweCAxcHg7XFxuICBib3JkZXItY29sb3I6ICNEQ0RDREQ7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLW5hbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLmpmYi1hZGRvbnNfX2l0ZW0tbmFtZSAubGFiZWwge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS1uYW1lIC52ZXJzaW9uIHtcXG4gIHBhZGRpbmc6IDFweCA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDZCNDUwO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLXVwZGF0ZSB7XFxuICBjb2xvcjogIzdiN2U4MTtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLWxpY2Vuc2Uge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGNvbG9yOiAjN2I3ZTgxO1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS1saWNlbnNlIC5jeC12dWktYnV0dG9uIHtcXG4gIG1hcmdpbi1sZWZ0OiAzcHg7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLWRlc2Mge1xcbiAgZmxleDogMSAxIGF1dG87XFxufVxcbi5qZmItYWRkb25zX19pdGVtLWRlc2MgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLWFjdGlvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG4uamZiLWFkZG9uc19faXRlbS1hY3Rpb25zOmVtcHR5IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5qZmItYWRkb25zX19pdGVtLWFjdGlvbnMgLmN4LXZ1aS1idXR0b24ge1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcImpmYi1hZGRvbnMtcGFnZSB3cmFwXCIsY2xhc3M6eyAncHJvY2Nlc2luZy1zdGF0ZSc6IF92bS5wcm9jY2VzaW5nU3RhdGUgfX0sW19jKCdoMScse3N0YXRpY0NsYXNzOlwiY3MtdnVpLXRpdGxlXCJ9LFtfdm0uX3YoX3ZtLl9zKCdKZXRGb3JtQnVpbGRlciBBZGRvbnMnKSldKSxfdm0uX3YoXCIgXCIpLF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcImpmYi1hZGRvbnMtcGFnZV9faW5uZXIgY3gtdnVpLXBhbmVsXCJ9LFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJqZmItYWRkb25zLXBhZ2VfX2hlYWRlclwifSxbKF92bS5pc0xpY2Vuc2VNb2RlKT9fYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJqZmItYWRkb25zLXBhZ2VfX2hlYWRlci1jb250cm9sc1wifSxbX2MoJ2N4LXZ1aS1idXR0b24nLHthdHRyczp7XCJidXR0b24tc3R5bGVcIjpcImFjY2VudFwiLFwic2l6ZVwiOlwibWluaVwiLFwibG9hZGluZ1wiOl92bS5jaGVja1VwZGF0ZXNQcm9jZXNzZWR9LG9uOntcImNsaWNrXCI6X3ZtLmNoZWNrUGx1Z2luc1VwZGF0ZX19LFtfYygnc3Bhbicse2F0dHJzOntcInNsb3RcIjpcImxhYmVsXCJ9LHNsb3Q6XCJsYWJlbFwifSxbX2MoJ3N2Zycse3N0YXRpY0NsYXNzOlwiYnV0dG9uLWljb25cIixhdHRyczp7XCJ3aWR0aFwiOlwiMTRcIixcImhlaWdodFwiOlwiMTRcIixcInZpZXdCb3hcIjpcIjAgMCAxNCAxNFwiLFwiZmlsbFwiOlwibm9uZVwiLFwieG1sbnNcIjpcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJ9fSxbX2MoJ3BhdGgnLHthdHRyczp7XCJkXCI6XCJNMTEuNzA4NSAyLjI5MTcxQzEwLjUwMDEgMS4wODMzNyA4Ljg0MTggMC4zMzMzNzQgNy4wMDAxMyAwLjMzMzM3NEMzLjMxNjggMC4zMzMzNzQgMC4zNDE3OTcgMy4zMTY3MSAwLjM0MTc5NyA3LjAwMDA0QzAuMzQxNzk3IDEwLjY4MzQgMy4zMTY4IDEzLjY2NjcgNy4wMDAxMyAxMy42NjY3QzEwLjEwODUgMTMuNjY2NyAxMi43MDAxIDExLjU0MTcgMTMuNDQxOCA4LjY2NjcxSDExLjcwODVDMTEuMDI1MSAxMC42MDg0IDkuMTc1MTMgMTIgNy4wMDAxMyAxMkM0LjI0MTggMTIgMi4wMDAxMyA5Ljc1ODM3IDIuMDAwMTMgNy4wMDAwNEMyLjAwMDEzIDQuMjQxNzEgNC4yNDE4IDIuMDAwMDQgNy4wMDAxMyAyLjAwMDA0QzguMzgzNDYgMi4wMDAwNCA5LjYxNjggMi41NzUwNCAxMC41MTY4IDMuNDgzMzdMNy44MzM0NiA2LjE2NjcxSDEzLjY2NjhWMC4zMzMzNzRMMTEuNzA4NSAyLjI5MTcxWlwiLFwiZmlsbFwiOlwiIzAwN0NCQVwifX0pXSksX3ZtLl92KFwiIFwiKSxfYygnc3BhbicsW192bS5fdihcIkNoZWNrIEZvciBVcGRhdGVzXCIpXSldKV0pLF92bS5fdihcIiBcIiksX2MoJ2N4LXZ1aS1idXR0b24nLHtjbGFzczpbICFfdm0uaXNMaWNlbnNlQWN0aXZhdGVkID8gJ2N4LXZ1aS1idXR0b24tLXN0eWxlLWFjY2VudCcgOiAnY3gtdnVpLWJ1dHRvbi0tc3R5bGUtZGFuZ2VyJyBdLGF0dHJzOntcInNpemVcIjpcIm1pbmlcIn0sb246e1wiY2xpY2tcIjpfdm0uc2hvd0xpY2Vuc2VQb3B1cH19LFtfYygnc3Bhbicse2F0dHJzOntcInNsb3RcIjpcImxhYmVsXCJ9LHNsb3Q6XCJsYWJlbFwifSxbX2MoJ3N2Zycse3N0YXRpY0NsYXNzOlwiYnV0dG9uLWljb25cIixhdHRyczp7XCJ3aWR0aFwiOlwiMTZcIixcImhlaWdodFwiOlwiMTZcIixcInZpZXdCb3hcIjpcIjAgMCAxNiAxNlwiLFwiZmlsbFwiOlwibm9uZVwiLFwieG1sbnNcIjpcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJ9fSxbX2MoJ3BhdGgnLHthdHRyczp7XCJkXCI6XCJNMTUuNDk4NSAwSDEyLjQ4OTdDMTIuNDE2NiAwIDEyLjM0ODcgMC4wMTU2NzA5IDEyLjI4NiAwLjA0NzAxMjdDMTIuMjMzOCAwLjA2NzkwNzMgMTIuMTg2NyAwLjEwNDQ3MyAxMi4xNDUgMC4xNTY3MDlMNS43NjY5IDYuNDcyMDlDNS42MjA2MyA2LjQ0MDc0IDUuNDYzOTIgNi40MTQ2MyA1LjI5Njc3IDYuMzkzNzNDNS4xMjk2MSA2LjM3Mjg0IDQuOTY3NjggNi4zNjIzOSA0LjgxMDk3IDYuMzYyMzlDNC4xNjMyNCA2LjM2MjM5IDMuNTQ2ODUgNi40ODc3NiAyLjk2MTggNi43Mzg0OUMyLjM3Njc1IDYuOTc4NzggMS44NTk2MSA3LjMyMzU0IDEuNDEwMzggNy43NzI3N0MwLjk2MTE0OSA4LjIyMiAwLjYxMTE2NiA4LjczOTE0IDAuMzYwNDMxIDkuMzI0MTlDMC4xMjAxNDQgOS45MDkyNCAwIDEwLjUzMDkgMCAxMS4xODlDMCAxMS44MzY4IDAuMTIwMTQ0IDEyLjQ1MzIgMC4zNjA0MzEgMTMuMDM4MkMwLjYxMTE2NiAxMy42MjMyIDAuOTYxMTQ5IDE0LjE0MDQgMS40MTAzOCAxNC41ODk2QzEuODU5NjEgMTUuMDM4OSAyLjM3Njc1IDE1LjM4MzYgMi45NjE4IDE1LjYyMzlDMy41NDY4NSAxNS44NzQ2IDQuMTYzMjQgMTYgNC44MTA5NyAxNkM1LjQ2OTE1IDE2IDYuMDkwNzYgMTUuODc0NiA2LjY3NTgxIDE1LjYyMzlDNy4yNjA4NiAxNS4zODM2IDcuNzc4IDE1LjAzODkgOC4yMjcyMyAxNC41ODk2QzguODAxODMgMTQuMDE1IDkuMTk4ODIgMTMuMzQ2NCA5LjQxODIyIDEyLjU4MzdDOS42NDgwNiAxMS44MjExIDkuNjg0NjIgMTEuMDM3NSA5LjUyNzkxIDEwLjIzMzFMMTAuODkxMyA4Ljg2OTc0QzEwLjkzMzEgOC44Mjc5NSAxMC45NjQ0IDguNzgwOTMgMTAuOTg1MyA4LjcyODdDMTEuMDE2NyA4LjY2NjAxIDExLjAzMjMgOC41OTgxMSAxMS4wMzIzIDguNTI0OThWNy4wMjA1N0gxMi41MzY3QzEyLjY5MzQgNy4wMjA1NyAxMi44MTM2IDYuOTczNTYgMTIuODk3MiA2Ljg3OTUzQzEyLjk5MTIgNi43ODU1IDEzLjAzODIgNi42NjUzNiAxMy4wMzgyIDYuNTE5MVY1LjAxNDY5SDE0LjU0MjZDMTQuNjE1NyA1LjAxNDY5IDE0LjY3ODQgNS4wMDQyNCAxNC43MzA3IDQuOTgzMzVDMTQuNzkzMyA0Ljk1MjAxIDE0Ljg1MDggNC45MTAyMiAxNC45MDMgNC44NTc5OEwxNS45MDYgMy44NTUwNEMxNS45MjY5IDMuODEzMjYgMTUuOTQ3OCAzLjc2NjI0IDE1Ljk2ODcgMy43MTQwMUMxNS45ODk2IDMuNjUxMzIgMTYgMy41ODM0MiAxNiAzLjUxMDI4VjAuNTAxNDY5QzE2IDAuMzU1MjA3IDE1Ljk1MyAwLjIzNTA2NCAxNS44NTkgMC4xNDEwMzhDMTUuNzY0OSAwLjA0NzAxMjcgMTUuNjQ0OCAwIDE1LjQ5ODUgMFpNNC45Njc2OCAxMi43ODc1QzQuNzkwMDggMTIuOTY1MSA0LjU5NjggMTMuMDk1NyA0LjM4Nzg2IDEzLjE3OTJDNC4xODkzNiAxMy4yNTI0IDMuOTY0NzQgMTMuMjg4OSAzLjcxNDAxIDEzLjI4ODlDMy40NjMyNyAxMy4yODg5IDMuMjMzNDMgMTMuMjQxOSAzLjAyNDQ5IDEzLjE0NzlDMi44MjU5OSAxMy4wNTM5IDIuNjM3OTQgMTIuOTMzNyAyLjQ2MDMzIDEyLjc4NzVDMi4yODI3MyAxMi42MDk5IDIuMTUyMTQgMTIuNDIxOCAyLjA2ODU2IDEyLjIyMzNDMS45OTU0MyAxMi4wMTQ0IDEuOTU4ODYgMTEuNzg0NSAxLjk1ODg2IDExLjUzMzhDMS45NTg4NiAxMS4yODMxIDIuMDA1ODggMTEuMDU4NCAyLjA5OTkgMTAuODU5OUMyLjE5MzkzIDEwLjY1MSAyLjMxNDA3IDEwLjQ1NzcgMi40NjAzMyAxMC4yODAxQzIuNzg0MiA5Ljk1NjI1IDMuMTkxNjQgOS43OTQzMiAzLjY4MjY2IDkuNzk0MzJDNC4xODQxMyA5Ljc5NDMyIDQuNTk2OCA5Ljk1NjI1IDQuOTIwNjcgMTAuMjgwMUM1LjA5ODI3IDEwLjQ1NzcgNS4yMjM2NCAxMC42NTEgNS4yOTY3NyAxMC44NTk5QzUuMzgwMzUgMTEuMDU4NCA1LjQyMjE0IDExLjI4MzEgNS40MjIxNCAxMS41MzM4QzUuNDIyMTQgMTEuNzg0NSA1LjM4MDM1IDEyLjAxNDQgNS4yOTY3NyAxMi4yMjMzQzUuMjIzNjQgMTIuNDIxOCA1LjExMzk0IDEyLjYwOTkgNC45Njc2OCAxMi43ODc1WlwiLFwiZmlsbFwiOlwiI0QzRDNEM1wifX0pXSksX3ZtLl92KFwiIFwiKSwoIV92bS5pc0xpY2Vuc2VBY3RpdmF0ZWQpP19jKCdzcGFuJyxbX3ZtLl92KFwiQWN0aXZhdGUgTGljZW5zZVwiKV0pOl92bS5fZSgpLF92bS5fdihcIiBcIiksKF92bS5pc0xpY2Vuc2VBY3RpdmF0ZWQpP19jKCdzcGFuJyxbX3ZtLl92KFwiRGVhY3RpdmF0ZSBMaWNlbnNlXCIpXSk6X3ZtLl9lKCldKV0pXSwxKTpfdm0uX2UoKSxfdm0uX3YoXCIgXCIpLCghX3ZtLmlzTGljZW5zZUFjdGl2YXRlZCk/X2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiZ28tcHJvLWJhbm5lclwifSxbX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiZ28tcHJvLWJhbm5lcl9fc3VidGl0bGVcIn0sW192bS5fdihcIkZlYXR1cmVzICYgSW50ZWdyYXRpb25zXCIpXSksX3ZtLl92KFwiIFwiKSxfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJnby1wcm8tYmFubmVyX190aXRsZVwifSxbX3ZtLl92KFwiRXh0ZW5kIGZ1bmN0aW9uYWxpdHkgd2l0aCBQUk8gQWRkb25zXCIpXSksX3ZtLl92KFwiIFwiKSxfYygnY3gtdnVpLWJ1dHRvbicse3N0YXRpY0NsYXNzOlwiZ28tcHJvLWJhbm5lcl9fYnV0dG9uXCIsYXR0cnM6e1wiYnV0dG9uLXN0eWxlXCI6XCJkZWZhdWx0XCIsXCJzaXplXCI6XCJtaW5pXCIsXCJ1cmxcIjpfdm0uZ29Qcm9MaW5rLFwidGFnLW5hbWVcIjpcImFcIixcInRhcmdldFwiOlwiX2JsYW5rXCJ9fSxbX2MoJ3NwYW4nLHthdHRyczp7XCJzbG90XCI6XCJsYWJlbFwifSxzbG90OlwibGFiZWxcIn0sW19jKCdzcGFuJyxbX3ZtLl92KFwiR28gUHJvXCIpXSldKV0pXSwxKTpfdm0uX2UoKV0pLF92bS5fdihcIiBcIiksKDAhPT1PYmplY3Qua2V5cyhfdm0uaW5zdGFsbGVkQWRkb25MaXN0KS5sZW5ndGgpP19jKCdkaXYnLHtzdGF0aWNDbGFzczpcImpmYi1hZGRvbnNcIn0sW192bS5fbSgwKSxfdm0uX3YoXCIgXCIpLF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcImpmYi1hZGRvbnNfX2xpc3RcIn0sX3ZtLl9sKChfdm0uaW5zdGFsbGVkQWRkb25MaXN0KSxmdW5jdGlvbihhZGRvbkRhdGEsaW5kZXgpe3JldHVybiBfYygnQWRkb25JdGVtJyx7a2V5OmluZGV4LGF0dHJzOntcImFkZG9uLWRhdGFcIjphZGRvbkRhdGF9fSl9KSwxKV0pOl92bS5fZSgpLF92bS5fdihcIiBcIiksKDAhPT1PYmplY3Qua2V5cyhfdm0uYXZhaWxhYmxlQWRkb25MaXN0KS5sZW5ndGgpP19jKCdkaXYnLHtzdGF0aWNDbGFzczpcImpmYi1hZGRvbnNcIn0sW192bS5fbSgxKSxfdm0uX3YoXCIgXCIpLF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcImpmYi1hZGRvbnNfX2xpc3RcIn0sX3ZtLl9sKChfdm0uYXZhaWxhYmxlQWRkb25MaXN0KSxmdW5jdGlvbihhZGRvbkRhdGEsaW5kZXgpe3JldHVybiBfYygnQWRkb25JdGVtJyx7a2V5OmluZGV4LGF0dHJzOntcImFkZG9uLWRhdGFcIjphZGRvbkRhdGF9fSl9KSwxKV0pOl92bS5fZSgpXSksX3ZtLl92KFwiIFwiKSxfYygnY3gtdnVpLXBvcHVwJyx7c3RhdGljQ2xhc3M6XCJqZmItYWRkb25zLXBhZ2VfX2xpY2Vuc2UtcG9wdXBcIixhdHRyczp7XCJmb290ZXJcIjpmYWxzZSxcImJvZHktd2lkdGhcIjpcIjU0MHB4XCJ9LG1vZGVsOnt2YWx1ZTooX3ZtLmxpY2Vuc2VQb3B1cFZpc2libGUpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0ubGljZW5zZVBvcHVwVmlzaWJsZT0kJHZ9LGV4cHJlc3Npb246XCJsaWNlbnNlUG9wdXBWaXNpYmxlXCJ9fSxbX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiY3gtdnVpLXBvcHVwX19oZWFkZXItdGl0bGVcIixhdHRyczp7XCJzbG90XCI6XCJ0aXRsZVwifSxzbG90OlwidGl0bGVcIn0sWyghX3ZtLmlzTGljZW5zZUFjdGl2YXRlZCk/X2MoJ3NwYW4nLFtfdm0uX3YoXCJBY3RpdmF0ZSBMaWNlbnNlXCIpXSk6X3ZtLl9lKCksX3ZtLl92KFwiIFwiKSwoX3ZtLmlzTGljZW5zZUFjdGl2YXRlZCk/X2MoJ3NwYW4nLFtfdm0uX3YoXCJEZWFjdGl2YXRlIExpY2Vuc2VcIildKTpfdm0uX2UoKV0pLF92bS5fdihcIiBcIiksX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiamZiLWFkZG9ucy1wYWdlX19saWNlbnNlLWZvcm1cIixhdHRyczp7XCJzbG90XCI6XCJjb250ZW50XCJ9LHNsb3Q6XCJjb250ZW50XCJ9LFsoIV92bS5pc0xpY2Vuc2VBY3RpdmF0ZWQpP19jKCdzcGFuJyxbX3ZtLl92KFwiQWN0aXZhdGUgbGljZW5zZSBmb3IgYXV0b21hdGljIHVwZGF0ZXMgYW5kIGF3ZXNvbWUgc3VwcG9ydFwiKV0pOl92bS5fZSgpLF92bS5fdihcIiBcIiksKF92bS5pc0xpY2Vuc2VBY3RpdmF0ZWQpP19jKCdzcGFuJyxbX3ZtLl92KFwiQnkgZGVhY3RpdmF0aW5nIHRoZSBsaWNlbnNlIHlvdSB3aWxsIG5vdCBiZSBhYmxlIHRvIHVwZGF0ZSB0aGUgYWRkb25zXCIpXSk6X3ZtLl9lKCksX3ZtLl92KFwiIFwiKSxfYygnY3gtdnVpLWlucHV0Jyx7c3RhdGljQ2xhc3M6XCJqZmItYWRkb25zLXBhZ2VfX2xpY2Vuc2UtaW5wdXRcIixhdHRyczp7XCJzaXplXCI6XCJmdWxsd2lkdGhcIixcInR5cGVcIjpcInBhc3N3b3JkXCIsXCJhdXRvZm9jdXNcIjp0cnVlLFwicHJldmVudC13cmFwXCI6dHJ1ZSxcInBsYWNlaG9sZGVyXCI6XCJKdXN0IHBhc3RlIGl0IGhlcmVcIn0sbW9kZWw6e3ZhbHVlOihfdm0ubGljZW5zZUtleSksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS5saWNlbnNlS2V5PSQkdn0sZXhwcmVzc2lvbjpcImxpY2Vuc2VLZXlcIn19KSxfdm0uX3YoXCIgXCIpLF9jKCdjeC12dWktYnV0dG9uJyx7c3RhdGljQ2xhc3M6XCJqZmItYWRkb25zLXBhZ2VfX2xpY2Vuc2UtYWN0aW9uXCIsYXR0cnM6e1wiYnV0dG9uLXN0eWxlXCI6XCJhY2NlbnRcIixcInNpemVcIjpcIm1pbmlcIixcImxvYWRpbmdcIjpfdm0ubGljZW5zZVByb2NjZXNpbmdTdGF0ZX0sb246e1wiY2xpY2tcIjpfdm0ubGljZW5zZUFjdGlvbn19LFtfYygnc3Bhbicse2F0dHJzOntcInNsb3RcIjpcImxhYmVsXCJ9LHNsb3Q6XCJsYWJlbFwifSxbKCFfdm0uaXNMaWNlbnNlQWN0aXZhdGVkKT9fYygnc3BhbicsW192bS5fdihcIkFjdGl2YXRlXCIpXSk6X3ZtLl9lKCksX3ZtLl92KFwiIFwiKSwoX3ZtLmlzTGljZW5zZUFjdGl2YXRlZCk/X2MoJ3NwYW4nLFtfdm0uX3YoXCJEZWFjdGl2YXRlXCIpXSk6X3ZtLl9lKCldKV0pXSwxKV0pXSwxKX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJqZmItYWRkb25zX19oZWFkZXJcIn0sW19jKCdzcGFuJyx7c3RhdGljQ2xhc3M6XCJjeC12dWktc3VidGl0bGVcIn0sW192bS5fdihcIllvdXIgSW5zdGFsbGVkIEFkZG9uc1wiKV0pXSl9LGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiamZiLWFkZG9uc19faGVhZGVyXCJ9LFtfYygnc3Bhbicse3N0YXRpY0NsYXNzOlwiY3gtdnVpLXN1YnRpdGxlXCJ9LFtfdm0uX3YoXCJBbGwgQXZhaWxhYmxlIEFkZG9uc1wiKV0pXSl9XVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiamZiLWFkZG9uc19faXRlbVwiLGNsYXNzOntcblx0XHQnYWN0aXZhdGVkJzogX3ZtLmFkZG9uRGF0YS5pc0FjdGl2YXRlZCxcblx0XHQndXBkYXRlLWF2YWxpYWJsZSc6IF92bS51cGRhdGVBdmFsaWFibGUsXG5cdH19LFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJqZmItYWRkb25zX19pdGVtLWlubmVyXCIsY2xhc3M6eyAncHJvY2Nlc2luZy1zdGF0ZSc6IF92bS5wcm9jY2VzaW5nU3RhdGUgfX0sW19jKCdkaXYnLHtzdGF0aWNDbGFzczpcImpmYi1hZGRvbnNfX2l0ZW0tdGh1bWJcIn0sWyghX3ZtLmFkZG9uRGF0YS5pc0luc3RhbGxlZCk/X2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwicHJvLWJhZGdlXCJ9LFtfYygnc3ZnJyx7YXR0cnM6e1wid2lkdGhcIjpcIjQwXCIsXCJoZWlnaHRcIjpcIjIwXCIsXCJ2aWV3Qm94XCI6XCIwIDAgNDAgMjBcIixcImZpbGxcIjpcIm5vbmVcIixcInhtbG5zXCI6XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wifX0sW19jKCdyZWN0Jyx7YXR0cnM6e1wid2lkdGhcIjpcIjQwXCIsXCJoZWlnaHRcIjpcIjIwXCIsXCJyeFwiOlwiNFwiLFwiZmlsbFwiOlwiI0VFN0IxNlwifX0pLF92bS5fdihcIiBcIiksX2MoJ3BhdGgnLHthdHRyczp7XCJkXCI6XCJNMTAuNjI1IDEwLjgzMDFWMTRIOS4xNDI1OFY1LjQ2ODc1SDEyLjQwNjJDMTMuMzU5NCA1LjQ2ODc1IDE0LjExNTIgNS43MTY4IDE0LjY3MzggNi4yMTI4OUMxNS4yMzYzIDYuNzA4OTggMTUuNTE3NiA3LjM2NTIzIDE1LjUxNzYgOC4xODE2NEMxNS41MTc2IDkuMDE3NTggMTUuMjQyMiA5LjY2Nzk3IDE0LjY5MTQgMTAuMTMyOEMxNC4xNDQ1IDEwLjU5NzcgMTMuMzc3IDEwLjgzMDEgMTIuMzg4NyAxMC44MzAxSDEwLjYyNVpNMTAuNjI1IDkuNjQwNjJIMTIuNDA2MkMxMi45MzM2IDkuNjQwNjIgMTMuMzM1OSA5LjUxNzU4IDEzLjYxMzMgOS4yNzE0OEMxMy44OTA2IDkuMDIxNDggMTQuMDI5MyA4LjY2MjExIDE0LjAyOTMgOC4xOTMzNkMxNC4wMjkzIDcuNzMyNDIgMTMuODg4NyA3LjM2NTIzIDEzLjYwNzQgNy4wOTE4QzEzLjMyNjIgNi44MTQ0NSAxMi45Mzk1IDYuNjcxODggMTIuNDQ3MyA2LjY2NDA2SDEwLjYyNVY5LjY0MDYyWk0xOS45NTMxIDEwLjcxMjlIMTguMzAwOFYxNEgxNi44MTg0VjUuNDY4NzVIMTkuODE4NEMyMC44MDI3IDUuNDY4NzUgMjEuNTYyNSA1LjY4OTQ1IDIyLjA5NzcgNi4xMzA4NkMyMi42MzI4IDYuNTcyMjcgMjIuOTAwNCA3LjIxMDk0IDIyLjkwMDQgOC4wNDY4OEMyMi45MDA0IDguNjE3MTkgMjIuNzYxNyA5LjA5NTcgMjIuNDg0NCA5LjQ4MjQyQzIyLjIxMDkgOS44NjUyMyAyMS44MjgxIDEwLjE2MDIgMjEuMzM1OSAxMC4zNjcyTDIzLjI1MiAxMy45MjM4VjE0SDIxLjY2NDFMMTkuOTUzMSAxMC43MTI5Wk0xOC4zMDA4IDkuNTIzNDRIMTkuODI0MkMyMC4zMjQyIDkuNTIzNDQgMjAuNzE0OCA5LjM5ODQ0IDIwLjk5NjEgOS4xNDg0NEMyMS4yNzczIDguODk0NTMgMjEuNDE4IDguNTQ4ODMgMjEuNDE4IDguMTExMzNDMjEuNDE4IDcuNjU0MyAyMS4yODcxIDcuMzAwNzggMjEuMDI1NCA3LjA1MDc4QzIwLjc2NzYgNi44MDA3OCAyMC4zODA5IDYuNjcxODggMTkuODY1MiA2LjY2NDA2SDE4LjMwMDhWOS41MjM0NFpNMzEuMTE1MiA5Ljk1NzAzQzMxLjExNTIgMTAuNzkzIDMwLjk3MDcgMTEuNTI3MyAzMC42ODE2IDEyLjE2MDJDMzAuMzkyNiAxMi43ODkxIDI5Ljk3ODUgMTMuMjczNCAyOS40Mzk1IDEzLjYxMzNDMjguOTA0MyAxMy45NDkyIDI4LjI4NzEgMTQuMTE3MiAyNy41ODc5IDE0LjExNzJDMjYuODk2NSAxNC4xMTcyIDI2LjI3OTMgMTMuOTQ5MiAyNS43MzYzIDEzLjYxMzNDMjUuMTk3MyAxMy4yNzM0IDI0Ljc3OTMgMTIuNzkxIDI0LjQ4MjQgMTIuMTY2QzI0LjE4OTUgMTEuNTQxIDI0LjA0MSAxMC44MjAzIDI0LjAzNzEgMTAuMDAzOVY5LjUyMzQ0QzI0LjAzNzEgOC42OTE0MSAyNC4xODM2IDcuOTU3MDMgMjQuNDc2NiA3LjMyMDMxQzI0Ljc3MzQgNi42ODM1OSAyNS4xODk1IDYuMTk3MjcgMjUuNzI0NiA1Ljg2MTMzQzI2LjI2MzcgNS41MjE0OCAyNi44ODA5IDUuMzUxNTYgMjcuNTc2MiA1LjM1MTU2QzI4LjI3MTUgNS4zNTE1NiAyOC44ODY3IDUuNTE5NTMgMjkuNDIxOSA1Ljg1NTQ3QzI5Ljk2MDkgNi4xODc1IDMwLjM3NyA2LjY2Nzk3IDMwLjY2OTkgNy4yOTY4OEMzMC45NjI5IDcuOTIxODggMzEuMTExMyA4LjY1MDM5IDMxLjExNTIgOS40ODI0MlY5Ljk1NzAzWk0yOS42MzI4IDkuNTExNzJDMjkuNjMyOCA4LjU2NjQxIDI5LjQ1MzEgNy44NDE4IDI5LjA5MzggNy4zMzc4OUMyOC43MzgzIDYuODMzOTggMjguMjMyNCA2LjU4MjAzIDI3LjU3NjIgNi41ODIwM0MyNi45MzU1IDYuNTgyMDMgMjYuNDMzNiA2LjgzMzk4IDI2LjA3MDMgNy4zMzc4OUMyNS43MTA5IDcuODM3ODkgMjUuNTI3MyA4LjU0Njg4IDI1LjUxOTUgOS40NjQ4NFY5Ljk1NzAzQzI1LjUxOTUgMTAuODk0NSAyNS43MDEyIDExLjYxOTEgMjYuMDY0NSAxMi4xMzA5QzI2LjQzMTYgMTIuNjQyNiAyNi45Mzk1IDEyLjg5ODQgMjcuNTg3OSAxMi44OTg0QzI4LjI0NDEgMTIuODk4NCAyOC43NDggMTIuNjQ4NCAyOS4wOTk2IDEyLjE0ODRDMjkuNDU1MSAxMS42NDg0IDI5LjYzMjggMTAuOTE4IDI5LjYzMjggOS45NTcwM1Y5LjUxMTcyWlwiLFwiZmlsbFwiOlwid2hpdGVcIn19KV0pXSk6X3ZtLl9lKCksX3ZtLl92KFwiIFwiKSxfYygnaW1nJyx7YXR0cnM6e1wic3JjXCI6X3ZtLmFkZG9uRGF0YS50aHVtYixcImFsdFwiOlwiXCJ9fSldKSxfdm0uX3YoXCIgXCIpLF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcImpmYi1hZGRvbnNfX2l0ZW0taW5mb1wifSxbX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiamZiLWFkZG9uc19faXRlbS1uYW1lXCJ9LFtfYygnc3Bhbicse3N0YXRpY0NsYXNzOlwibGFiZWxcIn0sW192bS5fdihfdm0uX3MoX3ZtLmFkZG9uRGF0YS5uYW1lKSldKSxfdm0uX3YoXCIgXCIpLF9jKCdzcGFuJyx7c3RhdGljQ2xhc3M6XCJ2ZXJzaW9uXCJ9LFtfdm0uX3YoX3ZtLl9zKF92bS5hZGRvbkRhdGEuY3VycmVudFZlcnNpb24pKV0pXSksX3ZtLl92KFwiIFwiKSwoX3ZtLiRwYXJlbnQuaXNMaWNlbnNlQWN0aXZhdGVkKT9fYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJqZmItYWRkb25zX19pdGVtLXVwZGF0ZVwifSxbKCFfdm0udXBkYXRlQXZhbGlhYmxlKT9fYygnZGl2JyxbX3ZtLl92KFwiWW91ciBwbHVnaW4gaXMgdXAgdG8gZGF0ZVwiKV0pOl92bS5fZSgpLF92bS5fdihcIiBcIiksKF92bS51cGRhdGVBdmFsaWFibGUpP19jKCdkaXYnLFtfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHRcXHRWZXJzaW9uIFwiKSxfYygnc3Bhbicse3N0YXRpY0NsYXNzOlwibGF0ZXN0LXZlcnNpb25cIn0sW192bS5fdihfdm0uX3MoX3ZtLmFkZG9uRGF0YS52ZXJzaW9uKSldKSxfdm0uX3YoXCIgYXZhaWxhYmxlXFxuXFx0XFx0XFx0XFx0XFx0XCIpLCghX3ZtLmFjdGl2YXRlTGljZW5jZUFjdGlvbkF2YWxpYWJsZSAmJiBfdm0uaXNMaWNlbnNlTW9kZSk/X2MoJ2N4LXZ1aS1idXR0b24nLHthdHRyczp7XCJidXR0b24tc3R5bGVcIjpcImxpbmstYWNjZW50XCIsXCJzaXplXCI6XCJsaW5rXCIsXCJsb2FkaW5nXCI6X3ZtLnVwZGF0ZVBsdWdpblByb2Nlc3NlZH0sb246e1wiY2xpY2tcIjpfdm0udXBkYXRlUGx1Z2lufX0sW19jKCdzcGFuJyx7YXR0cnM6e1wic2xvdFwiOlwibGFiZWxcIn0sc2xvdDpcImxhYmVsXCJ9LFtfYygnc3BhbicsW192bS5fdihcIlVwZGF0ZSBOb3dcIildKV0pXSk6X3ZtLl9lKCldLDEpOl92bS5fZSgpXSk6X3ZtLl9lKCksX3ZtLl92KFwiIFwiKSwoX3ZtLmFjdGl2YXRlTGljZW5jZUFjdGlvbkF2YWxpYWJsZSk/X2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiamZiLWFkZG9uc19faXRlbS1saWNlbnNlXCJ9LFtfYygnc3BhbicsW192bS5fdihcIkxpY2Vuc2Ugbm90IGFjdGl2YXRlZFwiKV0pLF92bS5fdihcIiBcIiksX2MoJ2N4LXZ1aS1idXR0b24nLHthdHRyczp7XCJidXR0b24tc3R5bGVcIjpcImxpbmstYWNjZW50XCIsXCJzaXplXCI6XCJsaW5rXCJ9LG9uOntcImNsaWNrXCI6X3ZtLmFjdGl2YXRlTGljZW5zZX19LFtfYygnc3Bhbicse2F0dHJzOntcInNsb3RcIjpcImxhYmVsXCJ9LHNsb3Q6XCJsYWJlbFwifSxbX2MoJ3NwYW4nLFtfdm0uX3YoXCJBY3RpdmF0ZSBOb3dcIildKV0pXSldLDEpOl92bS5fZSgpLF92bS5fdihcIiBcIiksX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiamZiLWFkZG9uc19faXRlbS1kZXNjXCJ9LFtfYygnc3Bhbicse2RvbVByb3BzOntcImlubmVySFRNTFwiOl92bS5fcyhfdm0uYWRkb25EYXRhLmRlc2MpfX0pLF92bS5fdihcIiBcIiksX2MoJ2EnLHthdHRyczp7XCJocmVmXCI6X3ZtLmxlYXJuTW9yZVVybCxcInRhcmdldFwiOlwiX2JsYW5rXCJ9fSxbX3ZtLl92KFwiTGVhcm4gTW9yZVwiKV0pXSksX3ZtLl92KFwiIFwiKSxfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJqZmItYWRkb25zX19pdGVtLWFjdGlvbnNcIn0sWyhfdm0uaW5zdGFsbEFjdGlvbkF2YWxpYWJsZSk/X2MoJ2N4LXZ1aS1idXR0b24nLHthdHRyczp7XCJidXR0b24tc3R5bGVcIjpcImxpbmstYWNjZW50XCIsXCJzaXplXCI6XCJsaW5rXCIsXCJsb2FkaW5nXCI6X3ZtLmFjdGlvblBsdWdpblByb2Nlc3NlZH0sb246e1wiY2xpY2tcIjpfdm0uaW5zdGFsbFBsdWdpbn19LFtfYygnc3Bhbicse2F0dHJzOntcInNsb3RcIjpcImxhYmVsXCJ9LHNsb3Q6XCJsYWJlbFwifSxbX2MoJ3NwYW4nLFtfdm0uX3YoXCJJbnN0YWxsIEFkZG9uXCIpXSldKV0pOl92bS5fZSgpLF92bS5fdihcIiBcIiksKF92bS5hY3RpdmF0ZUFjdGlvbkF2YWxpYWJsZSk/X2MoJ2N4LXZ1aS1idXR0b24nLHthdHRyczp7XCJidXR0b24tc3R5bGVcIjpcImxpbmstYWNjZW50XCIsXCJzaXplXCI6XCJsaW5rXCIsXCJsb2FkaW5nXCI6X3ZtLmFjdGlvblBsdWdpblByb2Nlc3NlZH0sb246e1wiY2xpY2tcIjpfdm0uYWN0aXZhdGVQbHVnaW59fSxbX2MoJ3NwYW4nLHthdHRyczp7XCJzbG90XCI6XCJsYWJlbFwifSxzbG90OlwibGFiZWxcIn0sW19jKCdzcGFuJyxbX3ZtLl92KFwiQWN0aXZhdGUgQWRkb25cIildKV0pXSk6X3ZtLl9lKCksX3ZtLl92KFwiIFwiKSwoX3ZtLmRlYWN0aXZhdGVBY3Rpb25BdmFsaWFibGUpP19jKCdjeC12dWktYnV0dG9uJyx7YXR0cnM6e1wiYnV0dG9uLXN0eWxlXCI6XCJsaW5rLWVycm9yXCIsXCJzaXplXCI6XCJsaW5rXCIsXCJsb2FkaW5nXCI6X3ZtLmFjdGlvblBsdWdpblByb2Nlc3NlZH0sb246e1wiY2xpY2tcIjpfdm0uZGVhY3RpdmF0ZVBsdWdpbn19LFtfYygnc3Bhbicse2F0dHJzOntcInNsb3RcIjpcImxhYmVsXCJ9LHNsb3Q6XCJsYWJlbFwifSxbX2MoJ3NwYW4nLFtfdm0uX3YoXCJEZWFjdGl2YXRlIEFkZG9uXCIpXSldKV0pOl92bS5fZSgpXSwxKV0pXSldKX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciAvKiBzZXJ2ZXIgb25seSAqLyxcbiAgc2hhZG93TW9kZSAvKiB2dWUtY2xpIG9ubHkgKi9cbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID1cbiAgICB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJyA/IHNjcmlwdEV4cG9ydHMub3B0aW9ucyA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikge1xuICAgIC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwoXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgKG9wdGlvbnMuZnVuY3Rpb25hbCA/IHRoaXMucGFyZW50IDogdGhpcykuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvbmFsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmcgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BZGRvbnNQYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVlMjQ5ZDBlJmxhbmc9c2Nzc1wiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI3ZmFiYTk5MlwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FkZG9uc1BhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWUyNDlkMGUmbGFuZz1zY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BZGRvbnNQYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVlMjQ5ZDBlJmxhbmc9c2Nzc1wiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FkZG9uSXRlbS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1iNTA3NDNiNCZsYW5nPXNjc3NcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNjIyYTEyODRcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BZGRvbkl0ZW0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YjUwNzQzYjQmbGFuZz1zY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BZGRvbkl0ZW0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YjUwNzQzYjQmbGFuZz1zY3NzXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiAgTW9kaWZpZWQgYnkgRXZhbiBZb3UgQHl5eDk5MDgwM1xuKi9cblxuaW1wb3J0IGxpc3RUb1N0eWxlcyBmcm9tICcuL2xpc3RUb1N0eWxlcydcblxudmFyIGhhc0RvY3VtZW50ID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuXG5pZiAodHlwZW9mIERFQlVHICE9PSAndW5kZWZpbmVkJyAmJiBERUJVRykge1xuICBpZiAoIWhhc0RvY3VtZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICd2dWUtc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQuICcgK1xuICAgIFwiVXNlIHsgdGFyZ2V0OiAnbm9kZScgfSBpbiB5b3VyIFdlYnBhY2sgY29uZmlnIHRvIGluZGljYXRlIGEgc2VydmVyLXJlbmRlcmluZyBlbnZpcm9ubWVudC5cIlxuICApIH1cbn1cblxuLypcbnR5cGUgU3R5bGVPYmplY3QgPSB7XG4gIGlkOiBudW1iZXI7XG4gIHBhcnRzOiBBcnJheTxTdHlsZU9iamVjdFBhcnQ+XG59XG5cbnR5cGUgU3R5bGVPYmplY3RQYXJ0ID0ge1xuICBjc3M6IHN0cmluZztcbiAgbWVkaWE6IHN0cmluZztcbiAgc291cmNlTWFwOiA/c3RyaW5nXG59XG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7LypcbiAgW2lkOiBudW1iZXJdOiB7XG4gICAgaWQ6IG51bWJlcixcbiAgICByZWZzOiBudW1iZXIsXG4gICAgcGFydHM6IEFycmF5PChvYmo/OiBTdHlsZU9iamVjdFBhcnQpID0+IHZvaWQ+XG4gIH1cbiovfVxuXG52YXIgaGVhZCA9IGhhc0RvY3VtZW50ICYmIChkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0pXG52YXIgc2luZ2xldG9uRWxlbWVudCA9IG51bGxcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMFxudmFyIGlzUHJvZHVjdGlvbiA9IGZhbHNlXG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHt9XG52YXIgb3B0aW9ucyA9IG51bGxcbnZhciBzc3JJZEtleSA9ICdkYXRhLXZ1ZS1zc3ItaWQnXG5cbi8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxudmFyIGlzT2xkSUUgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAvbXNpZSBbNi05XVxcYi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFN0eWxlc0NsaWVudCAocGFyZW50SWQsIGxpc3QsIF9pc1Byb2R1Y3Rpb24sIF9vcHRpb25zKSB7XG4gIGlzUHJvZHVjdGlvbiA9IF9pc1Byb2R1Y3Rpb25cblxuICBvcHRpb25zID0gX29wdGlvbnMgfHwge31cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBsaXN0KVxuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuICAgIHZhciBtYXlSZW1vdmUgPSBbXVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICAgIGRvbVN0eWxlLnJlZnMtLVxuICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpXG4gICAgfVxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIG5ld0xpc3QpXG4gICAgICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlcyA9IFtdXG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV1cbiAgICAgIGlmIChkb21TdHlsZS5yZWZzID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXSgpXG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzIC8qIEFycmF5PFN0eWxlT2JqZWN0PiAqLykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgIGRvbVN0eWxlLnJlZnMrK1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKVxuICAgICAgfVxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBpZiAoZG9tU3R5bGUucGFydHMubGVuZ3RoID4gaXRlbS5wYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMubGVuZ3RoID0gaXRlbS5wYXJ0cy5sZW5ndGhcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW11cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7IGlkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHMgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKCkge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICBzdHlsZUVsZW1lbnQudHlwZSA9ICd0ZXh0L2NzcydcbiAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpXG4gIHJldHVybiBzdHlsZUVsZW1lbnRcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgdmFyIHVwZGF0ZSwgcmVtb3ZlXG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdHlsZVsnICsgc3NySWRLZXkgKyAnfj1cIicgKyBvYmouaWQgKyAnXCJdJylcblxuICBpZiAoc3R5bGVFbGVtZW50KSB7XG4gICAgaWYgKGlzUHJvZHVjdGlvbikge1xuICAgICAgLy8gaGFzIFNTUiBzdHlsZXMgYW5kIGluIHByb2R1Y3Rpb24gbW9kZS5cbiAgICAgIC8vIHNpbXBseSBkbyBub3RoaW5nLlxuICAgICAgcmV0dXJuIG5vb3BcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaGFzIFNTUiBzdHlsZXMgYnV0IGluIGRldiBtb2RlLlxuICAgICAgLy8gZm9yIHNvbWUgcmVhc29uIENocm9tZSBjYW4ndCBoYW5kbGUgc291cmNlIG1hcCBpbiBzZXJ2ZXItcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlIHRhZ3MgLSBzb3VyY2UgbWFwcyBpbiA8c3R5bGU+IG9ubHkgd29ya3MgaWYgdGhlIHN0eWxlIHRhZyBpc1xuICAgICAgLy8gY3JlYXRlZCBhbmQgaW5zZXJ0ZWQgZHluYW1pY2FsbHkuIFNvIHdlIHJlbW92ZSB0aGUgc2VydmVyIHJlbmRlcmVkXG4gICAgICAvLyBzdHlsZXMgYW5kIGluamVjdCBuZXcgb25lcy5cbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICBpZiAoaXNPbGRJRSkge1xuICAgIC8vIHVzZSBzaW5nbGV0b24gbW9kZSBmb3IgSUU5LlxuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrXG4gICAgc3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpKVxuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKVxuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpXG4gIH0gZWxzZSB7XG4gICAgLy8gdXNlIG11bHRpLXN0eWxlLXRhZyBtb2RlIGluIGFsbCBvdGhlciBjYXNlc1xuICAgIHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpXG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudClcbiAgICByZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKG9iailcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuICAgICAgICAgIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG4gICAgICAgICAgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpXG4gICAgfVxuICB9XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXVxuXG4gIHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJylcbiAgfVxufSkoKVxuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzXG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpXG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpXG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2Rlc1xuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSlcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlRWxlbWVudCwgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzXG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcFxuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpXG4gIH1cbiAgaWYgKG9wdGlvbnMuc3NySWQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKHNzcklkS2V5LCBvYmouaWQpXG4gIH1cblxuICBpZiAoc291cmNlTWFwKSB7XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kZXZ0b29scy9kb2NzL2phdmFzY3JpcHQtZGVidWdnaW5nXG4gICAgLy8gdGhpcyBtYWtlcyBzb3VyY2UgbWFwcyBpbnNpZGUgc3R5bGUgdGFncyB3b3JrIHByb3Blcmx5IGluIENocm9tZVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZVVSTD0nICsgc291cmNlTWFwLnNvdXJjZXNbMF0gKyAnICovJ1xuICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LCcgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgJyAqLydcbiAgfVxuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3NcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZClcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpXG4gIH1cbn1cbiIsIi8qKlxuICogVHJhbnNsYXRlcyB0aGUgbGlzdCBmb3JtYXQgcHJvZHVjZWQgYnkgY3NzLWxvYWRlciBpbnRvIHNvbWV0aGluZ1xuICogZWFzaWVyIHRvIG1hbmlwdWxhdGUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAocGFyZW50SWQsIGxpc3QpIHtcbiAgdmFyIHN0eWxlcyA9IFtdXG4gIHZhciBuZXdTdHlsZXMgPSB7fVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV1cbiAgICB2YXIgaWQgPSBpdGVtWzBdXG4gICAgdmFyIGNzcyA9IGl0ZW1bMV1cbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdXG4gICAgdmFyIHNvdXJjZU1hcCA9IGl0ZW1bM11cbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGlkOiBwYXJlbnRJZCArICc6JyArIGksXG4gICAgICBjc3M6IGNzcyxcbiAgICAgIG1lZGlhOiBtZWRpYSxcbiAgICAgIHNvdXJjZU1hcDogc291cmNlTWFwXG4gICAgfVxuICAgIGlmICghbmV3U3R5bGVzW2lkXSkge1xuICAgICAgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHsgaWQ6IGlkLCBwYXJ0czogW3BhcnRdIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KVxuICAgIH1cbiAgfVxuICByZXR1cm4gc3R5bGVzXG59XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0FkZG9uc1BhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVlMjQ5ZDBlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQWRkb25zUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vQWRkb25zUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9BZGRvbnNQYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVlMjQ5ZDBlJmxhbmc9c2Nzc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJFOlxcXFxPcGVuU2VydmVyXFxcXGRvbWFpbnNcXFxcY3JvY28ueXVya28uZm10XFxcXHdwLWNvbnRlbnRcXFxccGx1Z2luc1xcXFxqZXRmb3JtYnVpbGRlclxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1ZTI0OWQwZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1ZTI0OWQwZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1ZTI0OWQwZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQWRkb25zUGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWUyNDlkMGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1ZTI0OWQwZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYWRtaW4vcGFnZXMvamZiLWFkZG9ucy9BZGRvbnNQYWdlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRkb25zUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd5dy1pbi1qcy93ZWJwYWNrLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BZGRvbnNQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FkZG9uc1BhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWUyNDlkMGUmbGFuZz1zY3NzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRkb25zUGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWUyNDlkMGVcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQWRkb25JdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iNTA3NDNiNFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0FkZG9uSXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vQWRkb25JdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0FkZG9uSXRlbS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1iNTA3NDNiNCZsYW5nPXNjc3NcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRTpcXFxcT3BlblNlcnZlclxcXFxkb21haW5zXFxcXGNyb2NvLnl1cmtvLmZtdFxcXFx3cC1jb250ZW50XFxcXHBsdWdpbnNcXFxcamV0Zm9ybWJ1aWxkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYjUwNzQzYjQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYjUwNzQzYjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYjUwNzQzYjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0FkZG9uSXRlbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YjUwNzQzYjRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdiNTA3NDNiNCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYWRtaW4vcGFnZXMvamZiLWFkZG9ucy9jb21wb25lbnRzL0FkZG9uSXRlbS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FkZG9uSXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd5dy1pbi1qcy93ZWJwYWNrLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BZGRvbkl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRkb25JdGVtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWI1MDc0M2I0Jmxhbmc9c2Nzc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FkZG9uSXRlbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YjUwNzQzYjRcIiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQWRkb25zUGFnZSBmcm9tICcuL0FkZG9uc1BhZ2UnO1xyXG5cclxuY29uc3QgeyByZW5kZXJDdXJyZW50UGFnZSB9ID0gd2luZG93LkpldEZCQWN0aW9ucztcclxuXHJcbnJlbmRlckN1cnJlbnRQYWdlKCBBZGRvbnNQYWdlICk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9