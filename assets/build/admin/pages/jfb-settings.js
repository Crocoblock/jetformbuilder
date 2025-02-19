/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./admin/pages/jfb-settings/addons-tabs.js":
/*!*************************************************!*\
  !*** ./admin/pages/jfb-settings/addons-tabs.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./admin/pages/jfb-settings/captcha/friendlyCaptcha/index.js":
/*!*******************************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/friendlyCaptcha/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./admin/pages/jfb-settings/captcha/friendlyCaptcha/source.js":
/*!********************************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/friendlyCaptcha/source.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

/***/ "./admin/pages/jfb-settings/captcha/google/index.js":
/*!**********************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/google/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./admin/pages/jfb-settings/captcha/google/source.js":
/*!***********************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/google/source.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

/***/ "./admin/pages/jfb-settings/captcha/hCaptcha/index.js":
/*!************************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/hCaptcha/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./admin/pages/jfb-settings/captcha/hCaptcha/source.js":
/*!*************************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/hCaptcha/source.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

/***/ "./admin/pages/jfb-settings/captcha/turnstile/index.js":
/*!*************************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/turnstile/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./admin/pages/jfb-settings/captcha/turnstile/source.js":
/*!**************************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/turnstile/source.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

/***/ "./admin/pages/jfb-settings/gateways/paypal/index.js":
/*!***********************************************************!*\
  !*** ./admin/pages/jfb-settings/gateways/paypal/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

/***/ "./admin/pages/jfb-settings/gateways/paypal/source.js":
/*!************************************************************!*\
  !*** ./admin/pages/jfb-settings/gateways/paypal/source.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

/***/ "./admin/pages/jfb-settings/proAddons/addressAutocomplete.js":
/*!*******************************************************************!*\
  !*** ./admin/pages/jfb-settings/proAddons/addressAutocomplete.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./admin/pages/jfb-settings/proAddons/convertkit.js":
/*!**********************************************************!*\
  !*** ./admin/pages/jfb-settings/proAddons/convertkit.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./admin/pages/jfb-settings/proAddons/hubspot.js":
/*!*******************************************************!*\
  !*** ./admin/pages/jfb-settings/proAddons/hubspot.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./admin/pages/jfb-settings/proAddons/mailerlite.js":
/*!**********************************************************!*\
  !*** ./admin/pages/jfb-settings/proAddons/mailerlite.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./admin/pages/jfb-settings/proAddons/moosend.js":
/*!*******************************************************!*\
  !*** ./admin/pages/jfb-settings/proAddons/moosend.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./admin/pages/jfb-settings/proGateways/stripe.js":
/*!********************************************************!*\
  !*** ./admin/pages/jfb-settings/proGateways/stripe.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./admin/pages/jfb-settings/tabs/captcha/index.js":
/*!********************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/captcha/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

/***/ "./admin/pages/jfb-settings/tabs/getresponse/index.js":
/*!************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/getresponse/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

/***/ "./admin/pages/jfb-settings/tabs/getresponse/source.js":
/*!*************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/getresponse/source.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

/***/ "./admin/pages/jfb-settings/tabs/mailchimp/index.js":
/*!**********************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/mailchimp/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

/***/ "./admin/pages/jfb-settings/tabs/mailchimp/source.js":
/*!***********************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/mailchimp/source.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

/***/ "./admin/pages/jfb-settings/tabs/options/index.js":
/*!********************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/options/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

/***/ "./admin/pages/jfb-settings/tabs/options/source.js":
/*!*********************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/options/source.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  auto_focus: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Automatic focus', 'jet-form-builder')
};
const help = {
  enable_dev_mode: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('With developer mode enabled, errors from the form will be saved.', 'jet-form-builder'),
  disable_next_button: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(`If this option is active, the Next button in a multi-step form won't become clickable until all the required fields are completed.`, 'jet-form-builder'),
  clear_on_uninstall: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(`If this option is active, when the plugin is deleted, all custom sql-tables, all options and files will also be deleted. In particular, those that were uploaded using Media Field.`, 'jet-form-builder'),
  scroll_on_next: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(`Automatic scrolling to the top of the form when switching between form pages.`, 'jet-form-builder'),
  auto_focus: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(`Indicates invalid field and prevents the user from going to the next page or submitting the form unless filled.`, 'jet-form-builder')
};


/***/ }),

/***/ "./admin/pages/jfb-settings/tabs/payments-gateways/index.js":
/*!******************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/payments-gateways/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

/***/ "./admin/pages/jfb-settings/tabs/payments-gateways/source.js":
/*!*******************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/payments-gateways/source.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

/***/ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/IsPROIcon.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/IsPROIcon.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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

/***/ }),

/***/ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/SettingsPage.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/SettingsPage.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _sidebar_SettingsSideBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar/SettingsSideBar */ "./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
const settingTabs = applyFilters('jet.fb.register.settings-page.tabs', [_tabs_options__WEBPACK_IMPORTED_MODULE_4__, _tabs_payments_gateways__WEBPACK_IMPORTED_MODULE_3__, _tabs_captcha__WEBPACK_IMPORTED_MODULE_0__, _tabs_mailchimp__WEBPACK_IMPORTED_MODULE_1__, _tabs_getresponse__WEBPACK_IMPORTED_MODULE_2__]);
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
    SettingsSideBar: _sidebar_SettingsSideBar__WEBPACK_IMPORTED_MODULE_5__["default"],
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

/***/ }),

/***/ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/friendlyCaptcha/friendlyCaptcha.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/friendlyCaptcha/friendlyCaptcha.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/google/reCAPTCHAv3.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/google/reCAPTCHAv3.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/hCaptcha/hCaptcha.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/hCaptcha/hCaptcha.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/turnstile/turnstile.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/turnstile/turnstile.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/gateways/paypal/PaypalTab.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/gateways/paypal/PaypalTab.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************************************/
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

const {
  SideBarBoxes
} = JetFBComponents;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'SettingsSideBar',
  components: {
    SideBarBoxes
  }
});

/***/ }),

/***/ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/captcha/CaptchaTab.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/captcha/CaptchaTab.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/getresponse/GetResponseTab.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/getresponse/GetResponseTab.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/mailchimp/MailChimpTab.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/mailchimp/MailChimpTab.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/options/OptionsTab.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/options/OptionsTab.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
      if ('options-tab' !== slug) {
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

/***/ }),

/***/ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/payments-gateways/PaymentsGateways.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/payments-gateways/PaymentsGateways.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/SettingsPage.vue?vue&type=style&index=0&id=4b43500e&lang=scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/SettingsPage.vue?vue&type=style&index=0&id=4b43500e&lang=scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.jfb-content {
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  margin-top: 1em;
}
.jfb-content-main {
  flex: 1;
}`, "",{"version":3,"sources":["webpack://./admin/pages/jfb-settings/SettingsPage.vue","webpack://./../SettingsPage.vue"],"names":[],"mappings":"AAkKA;EACC,aAAA;EACA,eAAA;EACA,QAAA;EACA,eAAA;ACjKD;ADmKC;EACC,OAAA;ACjKF","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.jfb-content {\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n\tgap: 2em;\r\n\tmargin-top: 1em;\r\n\r\n\t&-main {\r\n\t\tflex: 1;\r\n\t}\r\n}\r\n",".jfb-content {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 2em;\n  margin-top: 1em;\n}\n.jfb-content-main {\n  flex: 1;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue?vue&type=style&index=0&id=4254b64c&lang=scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue?vue&type=style&index=0&id=4254b64c&lang=scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
}`, "",{"version":3,"sources":["webpack://./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue","webpack://./../SettingsSideBar.vue"],"names":[],"mappings":"AA+EC;EACC,kBAAA;AC9EF;ADiFC;EACC,WAAA;AC/EF;ADiFE;AAHD;IAIE,UAAA;AC9ED;AACF;ADgFE;EACC,aAAA;EACA,sBAAA;EACA,gBAAA;EACA,6BAAA;EACA,iBAAA;AC9EH;ADiFE;EACC,aAAA;EACA,2BAAA;EACA,mBAAA;AC/EH;ADiFG;EACC,gBAAA;AC/EJ;ADkFG;EACC,aAAA;EACA,2BAAA;EACA,mBAAA;EACA,eAAA;EACA,iBAAA;EACA,cAAA;EACA,qBAAA;AChFJ;ADkFI;EACC,cAAA;EACA,0BAAA;AChFL;ADmFI;EACC,kBAAA;ACjFL","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n\r\n.jet-form-builder-page {\r\n\r\n\t&__banner.useful {\r\n\t\tpadding: 20px 30px;\r\n\t}\r\n\r\n\t&__panel.help {\r\n\t\twidth: 100%;\r\n\r\n\t\t@media (max-width: 1140px) {\r\n\t\t\twidth: calc(100% / 2);\r\n\t\t}\r\n\r\n\t\t.jet-form-builder-page__panel-content {\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: column;\r\n\t\t\tmargin-top: 12px;\r\n\t\t\tborder-top: 1px solid #DCDCDD;\r\n\t\t\tpadding-top: 23px;\r\n\t\t}\r\n\r\n\t\t.help-center-link {\r\n\t\t\tdisplay: flex;\r\n\t\t\tjustify-content: flex-start;\r\n\t\t\tmargin-bottom: 22px;\r\n\r\n\t\t\t&:last-child {\r\n\t\t\t\tmargin-bottom: 0;\r\n\t\t\t}\r\n\r\n\t\t\ta {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\tjustify-content: flex-start;\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tfont-size: 14px;\r\n\t\t\t\tline-height: 18px;\r\n\t\t\t\tcolor: #007CBA;\r\n\t\t\t\ttext-decoration: none;\r\n\r\n\t\t\t\t&:hover {\r\n\t\t\t\t\tcolor: #066EA2;\r\n\t\t\t\t\ttext-decoration: underline;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.help-center-link-icon {\r\n\t\t\t\t\tmargin-right: 28px;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n",".jet-form-builder-page__banner.useful {\n  padding: 20px 30px;\n}\n.jet-form-builder-page__panel.help {\n  width: 100%;\n}\n@media (max-width: 1140px) {\n  .jet-form-builder-page__panel.help {\n    width: 50%;\n  }\n}\n.jet-form-builder-page__panel.help .jet-form-builder-page__panel-content {\n  display: flex;\n  flex-direction: column;\n  margin-top: 12px;\n  border-top: 1px solid #DCDCDD;\n  padding-top: 23px;\n}\n.jet-form-builder-page__panel.help .help-center-link {\n  display: flex;\n  justify-content: flex-start;\n  margin-bottom: 22px;\n}\n.jet-form-builder-page__panel.help .help-center-link:last-child {\n  margin-bottom: 0;\n}\n.jet-form-builder-page__panel.help .help-center-link a {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  font-size: 14px;\n  line-height: 18px;\n  color: #007CBA;\n  text-decoration: none;\n}\n.jet-form-builder-page__panel.help .help-center-link a:hover {\n  color: #066EA2;\n  text-decoration: underline;\n}\n.jet-form-builder-page__panel.help .help-center-link a .help-center-link-icon {\n  margin-right: 28px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/IsPROIcon.vue?vue&type=style&index=0&id=14baa230&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/IsPROIcon.vue?vue&type=style&index=0&id=14baa230&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
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
`, "",{"version":3,"sources":["webpack://./../admin/pages/jfb-settings/IsPROIcon.vue"],"names":[],"mappings":";AAoBA;CACA,yBAAA;CACA,oBAAA;CACA,yBAAA;CACA,kBAAA;CACA,YAAA;CACA,eAAA;CACA,kBAAA;CACA,gBAAA;CACA,iBAAA;CACA,iBAAA;CACA,gBAAA;AACA","sourcesContent":["<template>\r\n\t<span>{{ __( 'Pro', 'jet-form-builder' ) }}</span>\r\n</template>\r\n\r\n<script>\r\nconst { i18n } = JetFBMixins;\r\n\r\nexport default {\r\n\tname: 'IsPROIcon',\r\n\tmixins: [ i18n ],\r\n\tprops: {\r\n\t\tisActive: {\r\n\t\t\ttype: Boolean,\r\n\t\t\tdefault: false,\r\n\t\t},\r\n\t},\r\n};\r\n</script>\r\n\r\n<style scoped>\r\nspan {\r\n\tbackground-color: #007CBA;\r\n\tpadding: 0.1em 0.3em;\r\n\ttext-transform: uppercase;\r\n\tborder-radius: 3px;\r\n\tcolor: white;\r\n\tfont-size: 12px;\r\n\tfont-style: normal;\r\n\tfont-weight: 700;\r\n\tline-height: 16px;\r\n\tletter-spacing: 0;\r\n\ttext-align: left;\r\n}\r\n</style>"],"sourceRoot":""}]);
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

/***/ "./admin/pages/jfb-settings/IsPROIcon.vue":
/*!************************************************!*\
  !*** ./admin/pages/jfb-settings/IsPROIcon.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
if (false) { var api; }
component.options.__file = "admin/pages/jfb-settings/IsPROIcon.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./admin/pages/jfb-settings/SettingsPage.vue":
/*!***************************************************!*\
  !*** ./admin/pages/jfb-settings/SettingsPage.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
if (false) { var api; }
component.options.__file = "admin/pages/jfb-settings/SettingsPage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./admin/pages/jfb-settings/captcha/friendlyCaptcha/friendlyCaptcha.vue":
/*!******************************************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/friendlyCaptcha/friendlyCaptcha.vue ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
if (false) { var api; }
component.options.__file = "admin/pages/jfb-settings/captcha/friendlyCaptcha/friendlyCaptcha.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./admin/pages/jfb-settings/captcha/google/reCAPTCHAv3.vue":
/*!*****************************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/google/reCAPTCHAv3.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
if (false) { var api; }
component.options.__file = "admin/pages/jfb-settings/captcha/google/reCAPTCHAv3.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./admin/pages/jfb-settings/captcha/hCaptcha/hCaptcha.vue":
/*!****************************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/hCaptcha/hCaptcha.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
if (false) { var api; }
component.options.__file = "admin/pages/jfb-settings/captcha/hCaptcha/hCaptcha.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./admin/pages/jfb-settings/captcha/turnstile/turnstile.vue":
/*!******************************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/turnstile/turnstile.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
if (false) { var api; }
component.options.__file = "admin/pages/jfb-settings/captcha/turnstile/turnstile.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./admin/pages/jfb-settings/gateways/paypal/PaypalTab.vue":
/*!****************************************************************!*\
  !*** ./admin/pages/jfb-settings/gateways/paypal/PaypalTab.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
if (false) { var api; }
component.options.__file = "admin/pages/jfb-settings/gateways/paypal/PaypalTab.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue":
/*!**************************************************************!*\
  !*** ./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
if (false) { var api; }
component.options.__file = "admin/pages/jfb-settings/sidebar/SettingsSideBar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./admin/pages/jfb-settings/tabs/captcha/CaptchaTab.vue":
/*!**************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/captcha/CaptchaTab.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
if (false) { var api; }
component.options.__file = "admin/pages/jfb-settings/tabs/captcha/CaptchaTab.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./admin/pages/jfb-settings/tabs/getresponse/GetResponseTab.vue":
/*!**********************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/getresponse/GetResponseTab.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
if (false) { var api; }
component.options.__file = "admin/pages/jfb-settings/tabs/getresponse/GetResponseTab.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./admin/pages/jfb-settings/tabs/mailchimp/MailChimpTab.vue":
/*!******************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/mailchimp/MailChimpTab.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
if (false) { var api; }
component.options.__file = "admin/pages/jfb-settings/tabs/mailchimp/MailChimpTab.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./admin/pages/jfb-settings/tabs/options/OptionsTab.vue":
/*!**************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/options/OptionsTab.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _OptionsTab_vue_vue_type_template_id_9dc42de6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OptionsTab.vue?vue&type=template&id=9dc42de6 */ "./admin/pages/jfb-settings/tabs/options/OptionsTab.vue?vue&type=template&id=9dc42de6");
/* harmony import */ var _OptionsTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OptionsTab.vue?vue&type=script&lang=js */ "./admin/pages/jfb-settings/tabs/options/OptionsTab.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OptionsTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _OptionsTab_vue_vue_type_template_id_9dc42de6__WEBPACK_IMPORTED_MODULE_0__.render,
  _OptionsTab_vue_vue_type_template_id_9dc42de6__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "admin/pages/jfb-settings/tabs/options/OptionsTab.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./admin/pages/jfb-settings/tabs/payments-gateways/PaymentsGateways.vue":
/*!******************************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/payments-gateways/PaymentsGateways.vue ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
if (false) { var api; }
component.options.__file = "admin/pages/jfb-settings/tabs/payments-gateways/PaymentsGateways.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./admin/pages/jfb-settings/IsPROIcon.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./admin/pages/jfb-settings/IsPROIcon.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_IsPROIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IsPROIcon.vue?vue&type=script&lang=js */ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/IsPROIcon.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_IsPROIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./admin/pages/jfb-settings/SettingsPage.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./admin/pages/jfb-settings/SettingsPage.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SettingsPage.vue?vue&type=script&lang=js */ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/SettingsPage.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./admin/pages/jfb-settings/captcha/friendlyCaptcha/friendlyCaptcha.vue?vue&type=script&lang=js":
/*!******************************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/friendlyCaptcha/friendlyCaptcha.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_friendlyCaptcha_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./friendlyCaptcha.vue?vue&type=script&lang=js */ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/friendlyCaptcha/friendlyCaptcha.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_friendlyCaptcha_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./admin/pages/jfb-settings/captcha/google/reCAPTCHAv3.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/google/reCAPTCHAv3.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_reCAPTCHAv3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./reCAPTCHAv3.vue?vue&type=script&lang=js */ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/google/reCAPTCHAv3.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_reCAPTCHAv3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./admin/pages/jfb-settings/captcha/hCaptcha/hCaptcha.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/hCaptcha/hCaptcha.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_hCaptcha_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./hCaptcha.vue?vue&type=script&lang=js */ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/hCaptcha/hCaptcha.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_hCaptcha_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./admin/pages/jfb-settings/captcha/turnstile/turnstile.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/turnstile/turnstile.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_turnstile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./turnstile.vue?vue&type=script&lang=js */ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/turnstile/turnstile.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_turnstile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./admin/pages/jfb-settings/gateways/paypal/PaypalTab.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/gateways/paypal/PaypalTab.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PaypalTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PaypalTab.vue?vue&type=script&lang=js */ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/gateways/paypal/PaypalTab.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PaypalTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsSideBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SettingsSideBar.vue?vue&type=script&lang=js */ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsSideBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./admin/pages/jfb-settings/tabs/captcha/CaptchaTab.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/captcha/CaptchaTab.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CaptchaTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CaptchaTab.vue?vue&type=script&lang=js */ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/captcha/CaptchaTab.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CaptchaTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./admin/pages/jfb-settings/tabs/getresponse/GetResponseTab.vue?vue&type=script&lang=js":
/*!**********************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/getresponse/GetResponseTab.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GetResponseTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GetResponseTab.vue?vue&type=script&lang=js */ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/getresponse/GetResponseTab.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GetResponseTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./admin/pages/jfb-settings/tabs/mailchimp/MailChimpTab.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/mailchimp/MailChimpTab.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MailChimpTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MailChimpTab.vue?vue&type=script&lang=js */ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/mailchimp/MailChimpTab.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MailChimpTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./admin/pages/jfb-settings/tabs/options/OptionsTab.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/options/OptionsTab.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionsTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OptionsTab.vue?vue&type=script&lang=js */ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/options/OptionsTab.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionsTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./admin/pages/jfb-settings/tabs/payments-gateways/PaymentsGateways.vue?vue&type=script&lang=js":
/*!******************************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/payments-gateways/PaymentsGateways.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentsGateways_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PaymentsGateways.vue?vue&type=script&lang=js */ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/payments-gateways/PaymentsGateways.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentsGateways_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./admin/pages/jfb-settings/IsPROIcon.vue?vue&type=template&id=14baa230&scoped=true":
/*!******************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/IsPROIcon.vue?vue&type=template&id=14baa230&scoped=true ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IsPROIcon_vue_vue_type_template_id_14baa230_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IsPROIcon_vue_vue_type_template_id_14baa230_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IsPROIcon_vue_vue_type_template_id_14baa230_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IsPROIcon.vue?vue&type=template&id=14baa230&scoped=true */ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/IsPROIcon.vue?vue&type=template&id=14baa230&scoped=true");


/***/ }),

/***/ "./admin/pages/jfb-settings/SettingsPage.vue?vue&type=template&id=4b43500e":
/*!*********************************************************************************!*\
  !*** ./admin/pages/jfb-settings/SettingsPage.vue?vue&type=template&id=4b43500e ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsPage_vue_vue_type_template_id_4b43500e__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsPage_vue_vue_type_template_id_4b43500e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsPage_vue_vue_type_template_id_4b43500e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SettingsPage.vue?vue&type=template&id=4b43500e */ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/SettingsPage.vue?vue&type=template&id=4b43500e");


/***/ }),

/***/ "./admin/pages/jfb-settings/captcha/friendlyCaptcha/friendlyCaptcha.vue?vue&type=template&id=054f030e":
/*!************************************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/friendlyCaptcha/friendlyCaptcha.vue?vue&type=template&id=054f030e ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_friendlyCaptcha_vue_vue_type_template_id_054f030e__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_friendlyCaptcha_vue_vue_type_template_id_054f030e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_friendlyCaptcha_vue_vue_type_template_id_054f030e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./friendlyCaptcha.vue?vue&type=template&id=054f030e */ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/friendlyCaptcha/friendlyCaptcha.vue?vue&type=template&id=054f030e");


/***/ }),

/***/ "./admin/pages/jfb-settings/captcha/google/reCAPTCHAv3.vue?vue&type=template&id=638ceb7f":
/*!***********************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/google/reCAPTCHAv3.vue?vue&type=template&id=638ceb7f ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reCAPTCHAv3_vue_vue_type_template_id_638ceb7f__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reCAPTCHAv3_vue_vue_type_template_id_638ceb7f__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reCAPTCHAv3_vue_vue_type_template_id_638ceb7f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./reCAPTCHAv3.vue?vue&type=template&id=638ceb7f */ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/google/reCAPTCHAv3.vue?vue&type=template&id=638ceb7f");


/***/ }),

/***/ "./admin/pages/jfb-settings/captcha/hCaptcha/hCaptcha.vue?vue&type=template&id=34567fa4":
/*!**********************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/hCaptcha/hCaptcha.vue?vue&type=template&id=34567fa4 ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_hCaptcha_vue_vue_type_template_id_34567fa4__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_hCaptcha_vue_vue_type_template_id_34567fa4__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_hCaptcha_vue_vue_type_template_id_34567fa4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./hCaptcha.vue?vue&type=template&id=34567fa4 */ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/hCaptcha/hCaptcha.vue?vue&type=template&id=34567fa4");


/***/ }),

/***/ "./admin/pages/jfb-settings/captcha/turnstile/turnstile.vue?vue&type=template&id=5a9ffa38":
/*!************************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/turnstile/turnstile.vue?vue&type=template&id=5a9ffa38 ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_turnstile_vue_vue_type_template_id_5a9ffa38__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_turnstile_vue_vue_type_template_id_5a9ffa38__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_turnstile_vue_vue_type_template_id_5a9ffa38__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./turnstile.vue?vue&type=template&id=5a9ffa38 */ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/turnstile/turnstile.vue?vue&type=template&id=5a9ffa38");


/***/ }),

/***/ "./admin/pages/jfb-settings/gateways/paypal/PaypalTab.vue?vue&type=template&id=8eff804c":
/*!**********************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/gateways/paypal/PaypalTab.vue?vue&type=template&id=8eff804c ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaypalTab_vue_vue_type_template_id_8eff804c__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaypalTab_vue_vue_type_template_id_8eff804c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaypalTab_vue_vue_type_template_id_8eff804c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PaypalTab.vue?vue&type=template&id=8eff804c */ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/gateways/paypal/PaypalTab.vue?vue&type=template&id=8eff804c");


/***/ }),

/***/ "./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue?vue&type=template&id=4254b64c":
/*!********************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue?vue&type=template&id=4254b64c ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsSideBar_vue_vue_type_template_id_4254b64c__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsSideBar_vue_vue_type_template_id_4254b64c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsSideBar_vue_vue_type_template_id_4254b64c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SettingsSideBar.vue?vue&type=template&id=4254b64c */ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue?vue&type=template&id=4254b64c");


/***/ }),

/***/ "./admin/pages/jfb-settings/tabs/captcha/CaptchaTab.vue?vue&type=template&id=62b36e55":
/*!********************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/captcha/CaptchaTab.vue?vue&type=template&id=62b36e55 ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CaptchaTab_vue_vue_type_template_id_62b36e55__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CaptchaTab_vue_vue_type_template_id_62b36e55__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CaptchaTab_vue_vue_type_template_id_62b36e55__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CaptchaTab.vue?vue&type=template&id=62b36e55 */ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/captcha/CaptchaTab.vue?vue&type=template&id=62b36e55");


/***/ }),

/***/ "./admin/pages/jfb-settings/tabs/getresponse/GetResponseTab.vue?vue&type=template&id=054dbebb":
/*!****************************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/getresponse/GetResponseTab.vue?vue&type=template&id=054dbebb ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GetResponseTab_vue_vue_type_template_id_054dbebb__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GetResponseTab_vue_vue_type_template_id_054dbebb__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GetResponseTab_vue_vue_type_template_id_054dbebb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GetResponseTab.vue?vue&type=template&id=054dbebb */ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/getresponse/GetResponseTab.vue?vue&type=template&id=054dbebb");


/***/ }),

/***/ "./admin/pages/jfb-settings/tabs/mailchimp/MailChimpTab.vue?vue&type=template&id=783c3dc9":
/*!************************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/mailchimp/MailChimpTab.vue?vue&type=template&id=783c3dc9 ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MailChimpTab_vue_vue_type_template_id_783c3dc9__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MailChimpTab_vue_vue_type_template_id_783c3dc9__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MailChimpTab_vue_vue_type_template_id_783c3dc9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MailChimpTab.vue?vue&type=template&id=783c3dc9 */ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/mailchimp/MailChimpTab.vue?vue&type=template&id=783c3dc9");


/***/ }),

/***/ "./admin/pages/jfb-settings/tabs/options/OptionsTab.vue?vue&type=template&id=9dc42de6":
/*!********************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/options/OptionsTab.vue?vue&type=template&id=9dc42de6 ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionsTab_vue_vue_type_template_id_9dc42de6__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionsTab_vue_vue_type_template_id_9dc42de6__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionsTab_vue_vue_type_template_id_9dc42de6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OptionsTab.vue?vue&type=template&id=9dc42de6 */ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/options/OptionsTab.vue?vue&type=template&id=9dc42de6");


/***/ }),

/***/ "./admin/pages/jfb-settings/tabs/payments-gateways/PaymentsGateways.vue?vue&type=template&id=676966a1":
/*!************************************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/payments-gateways/PaymentsGateways.vue?vue&type=template&id=676966a1 ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentsGateways_vue_vue_type_template_id_676966a1__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentsGateways_vue_vue_type_template_id_676966a1__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentsGateways_vue_vue_type_template_id_676966a1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PaymentsGateways.vue?vue&type=template&id=676966a1 */ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/payments-gateways/PaymentsGateways.vue?vue&type=template&id=676966a1");


/***/ }),

/***/ "./admin/pages/jfb-settings/SettingsPage.vue?vue&type=style&index=0&id=4b43500e&lang=scss":
/*!************************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/SettingsPage.vue?vue&type=style&index=0&id=4b43500e&lang=scss ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsPage_vue_vue_type_style_index_0_id_4b43500e_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader/index.js!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SettingsPage.vue?vue&type=style&index=0&id=4b43500e&lang=scss */ "../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/SettingsPage.vue?vue&type=style&index=0&id=4b43500e&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsPage_vue_vue_type_style_index_0_id_4b43500e_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsPage_vue_vue_type_style_index_0_id_4b43500e_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsPage_vue_vue_type_style_index_0_id_4b43500e_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsPage_vue_vue_type_style_index_0_id_4b43500e_lang_scss__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue?vue&type=style&index=0&id=4254b64c&lang=scss":
/*!***********************************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue?vue&type=style&index=0&id=4254b64c&lang=scss ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsSideBar_vue_vue_type_style_index_0_id_4254b64c_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-style-loader/index.js!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SettingsSideBar.vue?vue&type=style&index=0&id=4254b64c&lang=scss */ "../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue?vue&type=style&index=0&id=4254b64c&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsSideBar_vue_vue_type_style_index_0_id_4254b64c_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsSideBar_vue_vue_type_style_index_0_id_4254b64c_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsSideBar_vue_vue_type_style_index_0_id_4254b64c_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsSideBar_vue_vue_type_style_index_0_id_4254b64c_lang_scss__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./admin/pages/jfb-settings/IsPROIcon.vue?vue&type=style&index=0&id=14baa230&scoped=true&lang=css":
/*!********************************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/IsPROIcon.vue?vue&type=style&index=0&id=14baa230&scoped=true&lang=css ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_IsPROIcon_vue_vue_type_style_index_0_id_14baa230_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader/index.js!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IsPROIcon.vue?vue&type=style&index=0&id=14baa230&scoped=true&lang=css */ "../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/IsPROIcon.vue?vue&type=style&index=0&id=14baa230&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_IsPROIcon_vue_vue_type_style_index_0_id_14baa230_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_IsPROIcon_vue_vue_type_style_index_0_id_14baa230_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_IsPROIcon_vue_vue_type_style_index_0_id_14baa230_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_IsPROIcon_vue_vue_type_style_index_0_id_14baa230_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/IsPROIcon.vue?vue&type=template&id=14baa230&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/IsPROIcon.vue?vue&type=template&id=14baa230&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',[_vm._v(_vm._s(_vm.__( 'Pro', 'jet-form-builder' )))])}
var staticRenderFns = []
render._withStripped = true


/***/ }),

/***/ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/SettingsPage.vue?vue&type=template&id=4b43500e":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/SettingsPage.vue?vue&type=template&id=4b43500e ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

/***/ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/friendlyCaptcha/friendlyCaptcha.vue?vue&type=template&id=054f030e":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/friendlyCaptcha/friendlyCaptcha.vue?vue&type=template&id=054f030e ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

/***/ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/google/reCAPTCHAv3.vue?vue&type=template&id=638ceb7f":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/google/reCAPTCHAv3.vue?vue&type=template&id=638ceb7f ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('cx-vui-input',{attrs:{"label":_vm.label.key,"wrapper-css":[ 'equalwidth' ],"size":'fullwidth'},model:{value:(_vm.storage.key),callback:function ($$v) {_vm.$set(_vm.storage, "key", $$v)},expression:"storage.key"}}),_vm._v(" "),_c('cx-vui-input',{attrs:{"label":_vm.label.secret,"wrapper-css":[ 'equalwidth' ],"size":'fullwidth'},model:{value:(_vm.storage.secret),callback:function ($$v) {_vm.$set(_vm.storage, "secret", $$v)},expression:"storage.secret"}}),_vm._v(" "),_c('cx-vui-input',{attrs:{"type":"number","min":0,"max":1,"step":0.1,"label":_vm.label.threshold,"description":_vm.help.threshold,"wrapper-css":[ 'equalwidth' ],"size":'fullwidth'},model:{value:(_vm.storage.threshold),callback:function ($$v) {_vm.$set(_vm.storage, "threshold", $$v)},expression:"storage.threshold"}}),_vm._v(" "),_c('p',{staticClass:"fb-description"},[_vm._v(_vm._s(_vm.help.apiPref)+" "),_c('a',{attrs:{"href":_vm.help.apiLink,"target":"_blank"}},[_vm._v(_vm._s(_vm.help.apiLinkLabel))])])],1)}
var staticRenderFns = []
render._withStripped = true


/***/ }),

/***/ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/hCaptcha/hCaptcha.vue?vue&type=template&id=34567fa4":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/hCaptcha/hCaptcha.vue?vue&type=template&id=34567fa4 ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

/***/ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/turnstile/turnstile.vue?vue&type=template&id=5a9ffa38":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/turnstile/turnstile.vue?vue&type=template&id=5a9ffa38 ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

/***/ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/gateways/paypal/PaypalTab.vue?vue&type=template&id=8eff804c":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/gateways/paypal/PaypalTab.vue?vue&type=template&id=8eff804c ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('cx-vui-input',{attrs:{"label":_vm.label.client_id,"wrapper-css":[ 'equalwidth' ],"size":'fullwidth'},model:{value:(_vm.storage.client_id),callback:function ($$v) {_vm.$set(_vm.storage, "client_id", $$v)},expression:"storage.client_id"}}),_vm._v(" "),_c('cx-vui-input',{attrs:{"label":_vm.label.secret,"wrapper-css":[ 'equalwidth' ],"size":'fullwidth'},model:{value:(_vm.storage.secret),callback:function ($$v) {_vm.$set(_vm.storage, "secret", $$v)},expression:"storage.secret"}})],1)}
var staticRenderFns = []
render._withStripped = true


/***/ }),

/***/ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue?vue&type=template&id=4254b64c":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue?vue&type=template&id=4254b64c ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('SideBarBoxes',{scopedSlots:_vm._u([{key:"icon-help",fn:function(){return [_c('svg',{attrs:{"width":"14","height":"21","viewBox":"0 0 14 21","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M5.25 21H8.75V17.5H5.25V21ZM7 0C3.1325 0 0 3.1325 0 7H3.5C3.5 5.075 5.075 3.5 7 3.5C8.925 3.5 10.5 5.075 10.5 7C10.5 10.5 5.25 10.0625 5.25 15.75H8.75C8.75 11.8125 14 11.375 14 7C14 3.1325 10.8675 0 7 0Z","fill":"#7B7E81"}})])]},proxy:true},{key:"content-help",fn:function(box){return [_c('div',{staticClass:"help-center-link"},[_c('a',{attrs:{"href":box.link_knowledge,"target":"_blank"}},[_c('div',{staticClass:"help-center-link-icon"},[_c('svg',{attrs:{"width":"14","height":"16","viewBox":"0 0 14 16","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M13.458 11.2552L13.458 1.4115C13.458 1.03064 13.1357 0.708374 12.7549 0.708374L3.14551 0.708374C1.59277 0.708374 0.333008 1.96814 0.333008 3.52087L0.333008 12.8959C0.333008 14.4486 1.59277 15.7084 3.14551 15.7084L12.7549 15.7084C13.1357 15.7084 13.458 15.4154 13.458 15.0052L13.458 14.5365C13.458 14.3314 13.3408 14.1263 13.1943 14.0092C13.0479 13.5404 13.0479 12.2513 13.1943 11.8119C13.3408 11.6947 13.458 11.4896 13.458 11.2552ZM4.08301 4.63416C4.08301 4.54626 4.1416 4.45837 4.25879 4.45837L10.4697 4.45837C10.5576 4.45837 10.6455 4.54626 10.6455 4.63416L10.6455 5.22009C10.6455 5.33728 10.5576 5.39587 10.4697 5.39587L4.25879 5.39587C4.1416 5.39587 4.08301 5.33728 4.08301 5.22009L4.08301 4.63416ZM4.08301 6.50916C4.08301 6.42127 4.1416 6.33337 4.25879 6.33337L10.4697 6.33337C10.5576 6.33337 10.6455 6.42127 10.6455 6.50916L10.6455 7.09509C10.6455 7.21228 10.5576 7.27087 10.4697 7.27087L4.25879 7.27087C4.1416 7.27087 4.08301 7.21228 4.08301 7.09509L4.08301 6.50916ZM11.4951 13.8334L3.14551 13.8334C2.61816 13.8334 2.20801 13.4232 2.20801 12.8959C2.20801 12.3978 2.61816 11.9584 3.14551 11.9584L11.4951 11.9584C11.4365 12.4857 11.4365 13.3353 11.4951 13.8334Z","fill":"#007CBA"}})])]),_vm._v(" "),_c('div',{staticClass:"help-center-link-label"},[_vm._v(_vm._s(box.label_knowledge))])])]),_vm._v(" "),_c('div',{staticClass:"help-center-link"},[_c('a',{attrs:{"href":box.link_community,"target":"_blank"}},[_c('div',{staticClass:"help-center-link-icon"},[_c('svg',{attrs:{"width":"16","height":"16","viewBox":"0 0 16 16","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M15.5913 8.04564C15.5913 3.87728 12.214 0.5 8.04564 0.5C3.87728 0.5 0.5 3.87728 0.5 8.04564C0.5 11.8185 3.23834 14.9523 6.85903 15.5L6.85903 10.2363L4.94219 10.2363L4.94219 8.04564L6.85903 8.04564L6.85903 6.40264C6.85903 4.51623 7.98479 3.45132 9.68864 3.45132C10.5406 3.45132 11.3925 3.60345 11.3925 3.60345L11.3925 5.45943L10.4493 5.45943C9.50609 5.45943 9.20183 6.03753 9.20183 6.64604L9.20183 8.04564L11.3012 8.04564L10.9665 10.2363L9.20183 10.2363L9.20183 15.5C12.8225 14.9523 15.5913 11.8185 15.5913 8.04564Z","fill":"#007CBA"}})])]),_vm._v(" "),_c('div',{staticClass:"help-center-link-label"},[_vm._v(_vm._s(box.label_community))])])]),_vm._v(" "),_c('div',{staticClass:"help-center-link"},[_c('a',{attrs:{"href":box.link_support,"target":"_blank"}},[_c('div',{staticClass:"help-center-link-icon"},[_c('svg',{attrs:{"width":"15","height":"18","viewBox":"0 0 15 18","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M7.58333 0.666687C3.675 0.666687 0.5 3.84169 0.5 7.75002C0.5 11.6584 3.675 14.8334 7.58333 14.8334H8V17.3334C12.05 15.3834 14.6667 11.5 14.6667 7.75002C14.6667 3.84169 11.4917 0.666687 7.58333 0.666687ZM8.41667 12.75H6.75V11.0834H8.41667V12.75ZM8.41667 9.83335H6.75C6.75 7.12502 9.25 7.33335 9.25 5.66669C9.25 4.75002 8.5 4.00002 7.58333 4.00002C6.66667 4.00002 5.91667 4.75002 5.91667 5.66669H4.25C4.25 3.82502 5.74167 2.33335 7.58333 2.33335C9.425 2.33335 10.9167 3.82502 10.9167 5.66669C10.9167 7.75002 8.41667 7.95835 8.41667 9.83335Z","fill":"#007CBA"}})])]),_vm._v(" "),_c('div',{staticClass:"help-center-link-label"},[_vm._v(_vm._s(box.label_support))])])]),_vm._v(" "),_c('div',{staticClass:"help-center-link"},[_c('a',{attrs:{"href":box.link_git,"target":"_blank"}},[_c('div',{staticClass:"help-center-link-icon"},[_c('svg',{attrs:{"width":"16","height":"16","viewBox":"0 0 16 16","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M7.976 0C5.86071 0.000265156 3.83214 0.840676 2.33641 2.33641C0.840676 3.83214 0.000265156 5.86071 0 7.976C0 11.498 2.3 14.483 5.431 15.56C5.823 15.609 5.969 15.364 5.969 15.168V13.798C3.768 14.288 3.279 12.722 3.279 12.722C2.936 11.792 2.398 11.547 2.398 11.547C1.664 11.058 2.446 11.058 2.446 11.058C3.229 11.107 3.67 11.89 3.67 11.89C4.404 13.113 5.529 12.77 5.97 12.575C6.018 12.037 6.263 11.695 6.459 11.499C4.697 11.303 2.838 10.618 2.838 7.535C2.838 6.655 3.131 5.969 3.67 5.382C3.62 5.235 3.327 4.404 3.768 3.327C3.768 3.327 4.453 3.131 5.969 4.159C6.605 3.963 7.291 3.914 7.976 3.914C8.661 3.914 9.346 4.012 9.982 4.159C11.499 3.132 12.184 3.327 12.184 3.327C12.624 4.404 12.33 5.235 12.281 5.431C12.8199 6.01808 13.1171 6.7871 13.113 7.584C13.113 10.667 11.253 11.303 9.493 11.499C9.786 11.743 10.031 12.232 10.031 12.966V15.168C10.031 15.364 10.177 15.608 10.569 15.56C12.155 15.0248 13.5327 14.0046 14.5073 12.6436C15.4818 11.2827 16.004 9.64989 16 7.976C15.951 3.572 12.38 0 7.976 0Z","fill":"#007CBA"}})])]),_vm._v(" "),_c('div',{staticClass:"help-center-link-label"},[_vm._v(_vm._s(box.label_git))])])])]}}])})}
var staticRenderFns = []
render._withStripped = true


/***/ }),

/***/ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/captcha/CaptchaTab.vue?vue&type=template&id=62b36e55":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/captcha/CaptchaTab.vue?vue&type=template&id=62b36e55 ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._l((_vm.captcha),function(tab,index){return _c('CxVuiCollapseMini',{key:tab.component.name,attrs:{"with-panel":"","icon":tab.icon,"label":_vm.getTabTitle( tab ),"disabled":tab.disabled,"initial-active":_vm.isActive( tab.component.name )},on:{"change":function($event){return _vm.onChangeActive( $event, tab.component.name )}}},[_c('keep-alive',[_c(tab.component,{ref:"captcha",refInFor:true,tag:"component",attrs:{"incoming":_vm.getIncomingCaptcha( tab.component.name )}})],1),_vm._v(" "),_c('cx-vui-button',{attrs:{"button-style":"accent","loading":_vm.loadingGateways[ tab.component.name ]},on:{"click":function($event){return _vm.onSaveGateway( index, tab.component.name )}}},[_c('span',{attrs:{"slot":"label"},slot:"label"},[_vm._v("Save")])])],1)}),1)}
var staticRenderFns = []
render._withStripped = true


/***/ }),

/***/ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/getresponse/GetResponseTab.vue?vue&type=template&id=054dbebb":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/getresponse/GetResponseTab.vue?vue&type=template&id=054dbebb ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('cx-vui-input',{attrs:{"label":_vm.label.api_key,"wrapper-css":[ 'equalwidth' ],"description":((_vm.help.apiPref) + " <a href=\"" + (_vm.help.apiLink) + "\" target=\"_blank\">" + (_vm.help.apiLinkLabel) + "</a>"),"size":'fullwidth'},model:{value:(_vm.api_key),callback:function ($$v) {_vm.api_key=$$v},expression:"api_key"}})}
var staticRenderFns = []
render._withStripped = true


/***/ }),

/***/ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/mailchimp/MailChimpTab.vue?vue&type=template&id=783c3dc9":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/mailchimp/MailChimpTab.vue?vue&type=template&id=783c3dc9 ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('cx-vui-input',{attrs:{"label":_vm.label.api_key,"wrapper-css":[ 'equalwidth' ],"description":((_vm.help.apiPref) + " <a href=\"" + (_vm.help.apiLink) + "\" target=\"_blank\">" + (_vm.help.apiLinkLabel) + "</a>"),"size":'fullwidth'},model:{value:(_vm.api_key),callback:function ($$v) {_vm.api_key=$$v},expression:"api_key"}})}
var staticRenderFns = []
render._withStripped = true


/***/ }),

/***/ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/options/OptionsTab.vue?vue&type=template&id=9dc42de6":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/options/OptionsTab.vue?vue&type=template&id=9dc42de6 ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('cx-vui-switcher',{attrs:{"name":"enable_dev_mode","wrapper-css":[ 'equalwidth' ],"label":_vm.loading.enable_dev_mode ? ((_vm.label.enable_dev_mode) + " (loading...)") : _vm.label.enable_dev_mode,"description":_vm.help.enable_dev_mode,"value":_vm.storage.hasOwnProperty( 'enable_dev_mode' ) ? _vm.storage.enable_dev_mode : false,"disabled":_vm.isLoading},on:{"input":function($event){return _vm.changeVal( 'enable_dev_mode', $event )}}}),_vm._v(" "),_c('cx-vui-switcher',{attrs:{"name":"clear_on_uninstall","wrapper-css":[ 'equalwidth' ],"label":_vm.loading.clear_on_uninstall ? ((_vm.label.clear_on_uninstall) + " (loading...)") : _vm.label.clear_on_uninstall,"description":_vm.help.clear_on_uninstall,"value":_vm.storage.hasOwnProperty( 'clear_on_uninstall' ) ? _vm.storage.clear_on_uninstall : false,"disabled":_vm.isLoading},on:{"input":function($event){return _vm.changeVal( 'clear_on_uninstall', $event )}}}),_vm._v(" "),_c('cx-vui-component-wrapper',{attrs:{"label":_vm.__( 'Form Accessibility', 'jet-form-builder' ),"wrapper-css":[ 'equalwidth' ]}}),_vm._v(" "),_c('div',{staticClass:"cx-vui-inner-panel"},[_c('cx-vui-switcher',{attrs:{"name":"disable_next_button","wrapper-css":[ 'equalwidth' ],"label":_vm.loading.disable_next_button ? ((_vm.label.disable_next_button) + " (loading...)") : _vm.label.disable_next_button,"description":_vm.help.disable_next_button,"value":_vm.storage.hasOwnProperty( 'disable_next_button' ) ? _vm.storage.disable_next_button : true,"disabled":_vm.isLoading},on:{"input":function($event){return _vm.changeVal( 'disable_next_button', $event )}}}),_vm._v(" "),_c('cx-vui-switcher',{attrs:{"name":"scroll_on_next","wrapper-css":[ 'equalwidth' ],"label":_vm.loading.scroll_on_next ? ((_vm.label.scroll_on_next) + " (loading...)") : _vm.label.scroll_on_next,"description":_vm.help.scroll_on_next,"value":_vm.storage.hasOwnProperty( 'scroll_on_next' ) ? _vm.storage.scroll_on_next : false,"disabled":_vm.isLoading},on:{"input":function($event){return _vm.changeVal( 'scroll_on_next', $event )}}}),_vm._v(" "),_c('cx-vui-switcher',{attrs:{"name":"auto_focus","wrapper-css":[ 'equalwidth' ],"label":_vm.loading.auto_focus ? ((_vm.label.auto_focus) + " (loading...)") : _vm.label.auto_focus,"description":_vm.help.auto_focus,"value":_vm.storage.hasOwnProperty( 'auto_focus' ) ? _vm.storage.auto_focus : false,"disabled":_vm.isLoading},on:{"input":function($event){return _vm.changeVal( 'auto_focus', $event )}}})],1)],1)}
var staticRenderFns = []
render._withStripped = true


/***/ }),

/***/ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/payments-gateways/PaymentsGateways.vue?vue&type=template&id=676966a1":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/payments-gateways/PaymentsGateways.vue?vue&type=template&id=676966a1 ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('cx-vui-switcher',{attrs:{"name":"use_gateways","wrapper-css":[ 'equalwidth' ],"label":_vm.label.use_gateways,"description":_vm.help.use_gateways,"value":_vm.storage.use_gateways},on:{"input":function($event){return _vm.changeVal( 'use_gateways', $event )}}}),_vm._v(" "),(_vm.storage.use_gateways)?_c('cx-vui-switcher',{attrs:{"name":"enable_test_mode","wrapper-css":[ 'equalwidth' ],"description":_vm.help.enable_test_mode,"label":_vm.label.enable_test_mode,"value":_vm.storage.enable_test_mode},on:{"input":function($event){return _vm.changeVal( 'enable_test_mode', $event )}}}):_vm._e(),_vm._v(" "),(_vm.storage.use_gateways)?[_c('div',{staticClass:"cx-vui-inner-panel"},_vm._l((_vm.gateways),function(tab,index){return _c('CxVuiCollapseMini',{key:tab.component.name,attrs:{"with-panel":"","icon":tab.icon,"label":tab.title,"disabled":tab.disabled,"initial-active":_vm.isActive( tab.component.name )},on:{"change":function($event){return _vm.onChangeActive( $event, tab.component.name )}}},[_c('keep-alive',[_c(tab.component,{ref:"gateways",refInFor:true,tag:"component",attrs:{"incoming":_vm.getIncoming( tab.component.name )}})],1),_vm._v(" "),_c('cx-vui-button',{attrs:{"button-style":"accent","loading":_vm.loadingGateways[ tab.component.name ]},on:{"click":function($event){return _vm.onSaveGateway( index, tab.component.name )}}},[_c('span',{attrs:{"slot":"label"},slot:"label"},[_vm._v("Save")])])],1)}),1)]:_vm._e()],2)}
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

/***/ "../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/SettingsPage.vue?vue&type=style&index=0&id=4b43500e&lang=scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/SettingsPage.vue?vue&type=style&index=0&id=4b43500e&lang=scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
if(false) {}

/***/ }),

/***/ "../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue?vue&type=style&index=0&id=4254b64c&lang=scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue?vue&type=style&index=0&id=4254b64c&lang=scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
if(false) {}

/***/ }),

/***/ "../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/IsPROIcon.vue?vue&type=style&index=0&id=14baa230&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/IsPROIcon.vue?vue&type=style&index=0&id=14baa230&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFRQTtBQUlBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4REE7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUlBO0FBSUE7QUFFQTtBQUNBO0FBSUE7QUFJQTtBQUlBO0FBSUE7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQVFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEhBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2REE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5REE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNpQkE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQU9BO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuS0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNlQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1REE7QUFJQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUlBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNwRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFrQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFrQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFrQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFrQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFrQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFrQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFrQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFrQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFrQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFrQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFrQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFrQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFrQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FpQkFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDL0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzdOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzFCQTs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL2FkZG9ucy10YWJzLmpzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL2ZyaWVuZGx5Q2FwdGNoYS9pbmRleC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvY2FwdGNoYS9mcmllbmRseUNhcHRjaGEvc291cmNlLmpzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL2dvb2dsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvY2FwdGNoYS9nb29nbGUvc291cmNlLmpzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL2hDYXB0Y2hhL2luZGV4LmpzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL2hDYXB0Y2hhL3NvdXJjZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvY2FwdGNoYS90dXJuc3RpbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL2NhcHRjaGEvdHVybnN0aWxlL3NvdXJjZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvZ2F0ZXdheXMvcGF5cGFsL2luZGV4LmpzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9nYXRld2F5cy9wYXlwYWwvc291cmNlLmpzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9wcm9BZGRvbnMvYWRkcmVzc0F1dG9jb21wbGV0ZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvcHJvQWRkb25zL2NvbnZlcnRraXQuanMiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3Byb0FkZG9ucy9odWJzcG90LmpzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9wcm9BZGRvbnMvbWFpbGVybGl0ZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvcHJvQWRkb25zL21vb3NlbmQuanMiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3Byb0dhdGV3YXlzL3N0cmlwZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9jYXB0Y2hhL2luZGV4LmpzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL2dldHJlc3BvbnNlL2luZGV4LmpzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL2dldHJlc3BvbnNlL3NvdXJjZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9tYWlsY2hpbXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvbWFpbGNoaW1wL3NvdXJjZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9vcHRpb25zL2luZGV4LmpzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL29wdGlvbnMvc291cmNlLmpzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL3BheW1lbnRzLWdhdGV3YXlzL2luZGV4LmpzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL3BheW1lbnRzLWdhdGV3YXlzL3NvdXJjZS5qcyIsIndlYnBhY2s6Ly9qZmIvYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL0lzUFJPSWNvbi52dWUiLCJ3ZWJwYWNrOi8vamZiL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9TZXR0aW5nc1BhZ2UudnVlIiwid2VicGFjazovL2pmYi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvY2FwdGNoYS9mcmllbmRseUNhcHRjaGEvZnJpZW5kbHlDYXB0Y2hhLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL2NhcHRjaGEvZ29vZ2xlL3JlQ0FQVENIQXYzLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL2NhcHRjaGEvaENhcHRjaGEvaENhcHRjaGEudnVlIiwid2VicGFjazovL2pmYi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvY2FwdGNoYS90dXJuc3RpbGUvdHVybnN0aWxlLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL2dhdGV3YXlzL3BheXBhbC9QYXlwYWxUYWIudnVlIiwid2VicGFjazovL2pmYi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3Mvc2lkZWJhci9TZXR0aW5nc1NpZGVCYXIudnVlIiwid2VicGFjazovL2pmYi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9jYXB0Y2hhL0NhcHRjaGFUYWIudnVlIiwid2VicGFjazovL2pmYi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9nZXRyZXNwb25zZS9HZXRSZXNwb25zZVRhYi52dWUiLCJ3ZWJwYWNrOi8vamZiL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL21haWxjaGltcC9NYWlsQ2hpbXBUYWIudnVlIiwid2VicGFjazovL2pmYi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9vcHRpb25zL09wdGlvbnNUYWIudnVlIiwid2VicGFjazovL2pmYi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9wYXltZW50cy1nYXRld2F5cy9QYXltZW50c0dhdGV3YXlzLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvU2V0dGluZ3NQYWdlLnZ1ZT8xYTQyIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9zaWRlYmFyL1NldHRpbmdzU2lkZUJhci52dWU/Mzc0MSIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvSXNQUk9JY29uLnZ1ZT8wZTkxIiwid2VicGFjazovL2pmYi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2pmYi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvSXNQUk9JY29uLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvU2V0dGluZ3NQYWdlLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvY2FwdGNoYS9mcmllbmRseUNhcHRjaGEvZnJpZW5kbHlDYXB0Y2hhLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvY2FwdGNoYS9nb29nbGUvcmVDQVBUQ0hBdjMudnVlIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL2hDYXB0Y2hhL2hDYXB0Y2hhLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvY2FwdGNoYS90dXJuc3RpbGUvdHVybnN0aWxlLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvZ2F0ZXdheXMvcGF5cGFsL1BheXBhbFRhYi52dWUiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3NpZGViYXIvU2V0dGluZ3NTaWRlQmFyLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9jYXB0Y2hhL0NhcHRjaGFUYWIudnVlIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL2dldHJlc3BvbnNlL0dldFJlc3BvbnNlVGFiLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9tYWlsY2hpbXAvTWFpbENoaW1wVGFiLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9vcHRpb25zL09wdGlvbnNUYWIudnVlIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL3BheW1lbnRzLWdhdGV3YXlzL1BheW1lbnRzR2F0ZXdheXMudnVlIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9Jc1BST0ljb24udnVlPzJjZjQiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL1NldHRpbmdzUGFnZS52dWU/MWFkMyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvY2FwdGNoYS9mcmllbmRseUNhcHRjaGEvZnJpZW5kbHlDYXB0Y2hhLnZ1ZT84OTkyIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL2dvb2dsZS9yZUNBUFRDSEF2My52dWU/MDljMiIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvY2FwdGNoYS9oQ2FwdGNoYS9oQ2FwdGNoYS52dWU/ZjFhMyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvY2FwdGNoYS90dXJuc3RpbGUvdHVybnN0aWxlLnZ1ZT83YWFlIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9nYXRld2F5cy9wYXlwYWwvUGF5cGFsVGFiLnZ1ZT8yNTNiIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9zaWRlYmFyL1NldHRpbmdzU2lkZUJhci52dWU/Mjk2NCIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9jYXB0Y2hhL0NhcHRjaGFUYWIudnVlP2RmNjAiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvZ2V0cmVzcG9uc2UvR2V0UmVzcG9uc2VUYWIudnVlP2Q0N2MiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvbWFpbGNoaW1wL01haWxDaGltcFRhYi52dWU/NTJjZCIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9vcHRpb25zL09wdGlvbnNUYWIudnVlP2FhYTAiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvcGF5bWVudHMtZ2F0ZXdheXMvUGF5bWVudHNHYXRld2F5cy52dWU/ZDlmMCIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvSXNQUk9JY29uLnZ1ZT9kZGU0Iiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9TZXR0aW5nc1BhZ2UudnVlPzEwYWEiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL2NhcHRjaGEvZnJpZW5kbHlDYXB0Y2hhL2ZyaWVuZGx5Q2FwdGNoYS52dWU/ZTBhOSIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvY2FwdGNoYS9nb29nbGUvcmVDQVBUQ0hBdjMudnVlPzBmYjUiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL2NhcHRjaGEvaENhcHRjaGEvaENhcHRjaGEudnVlP2MwZGQiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL2NhcHRjaGEvdHVybnN0aWxlL3R1cm5zdGlsZS52dWU/NDBkNSIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvZ2F0ZXdheXMvcGF5cGFsL1BheXBhbFRhYi52dWU/NTZiYiIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3Mvc2lkZWJhci9TZXR0aW5nc1NpZGVCYXIudnVlP2MwN2MiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvY2FwdGNoYS9DYXB0Y2hhVGFiLnZ1ZT83ODM1Iiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL2dldHJlc3BvbnNlL0dldFJlc3BvbnNlVGFiLnZ1ZT9kZDBjIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL21haWxjaGltcC9NYWlsQ2hpbXBUYWIudnVlP2EzOTIiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvb3B0aW9ucy9PcHRpb25zVGFiLnZ1ZT81YzdhIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL3BheW1lbnRzLWdhdGV3YXlzL1BheW1lbnRzR2F0ZXdheXMudnVlP2MwZTciLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL1NldHRpbmdzUGFnZS52dWU/MGVjYSIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3Mvc2lkZWJhci9TZXR0aW5nc1NpZGVCYXIudnVlP2RjNGMiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL0lzUFJPSWNvbi52dWU/ZWExNCIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvSXNQUk9JY29uLnZ1ZT9kYmU0Iiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9TZXR0aW5nc1BhZ2UudnVlP2Q3MjAiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL2NhcHRjaGEvZnJpZW5kbHlDYXB0Y2hhL2ZyaWVuZGx5Q2FwdGNoYS52dWU/ODY3NyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvY2FwdGNoYS9nb29nbGUvcmVDQVBUQ0hBdjMudnVlPzI4MjgiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL2NhcHRjaGEvaENhcHRjaGEvaENhcHRjaGEudnVlP2NiMTQiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL2NhcHRjaGEvdHVybnN0aWxlL3R1cm5zdGlsZS52dWU/MWY5YyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvZ2F0ZXdheXMvcGF5cGFsL1BheXBhbFRhYi52dWU/YTIwMiIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3Mvc2lkZWJhci9TZXR0aW5nc1NpZGVCYXIudnVlPzc5M2YiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvY2FwdGNoYS9DYXB0Y2hhVGFiLnZ1ZT8wNTM3Iiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL2dldHJlc3BvbnNlL0dldFJlc3BvbnNlVGFiLnZ1ZT9hYTFjIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL21haWxjaGltcC9NYWlsQ2hpbXBUYWIudnVlP2MwM2IiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvb3B0aW9ucy9PcHRpb25zVGFiLnZ1ZT9kNGJiIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL3BheW1lbnRzLWdhdGV3YXlzL1BheW1lbnRzR2F0ZXdheXMudnVlPzcwNjQiLCJ3ZWJwYWNrOi8vamZiLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL1NldHRpbmdzUGFnZS52dWU/NjgyNSIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3Mvc2lkZWJhci9TZXR0aW5nc1NpZGVCYXIudnVlP2MyYTAiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL0lzUFJPSWNvbi52dWU/MjUzZSIsIndlYnBhY2s6Ly9qZmIvLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qcyIsIndlYnBhY2s6Ly9qZmIvLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2xpc3RUb1N0eWxlcy5qcyIsIndlYnBhY2s6Ly9qZmIvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJpMThuXCJdIiwid2VicGFjazovL2pmYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGh1YnNwb3QgZnJvbSAnLi9wcm9BZGRvbnMvaHVic3BvdCc7XHJcbmltcG9ydCBhZGRyZXNzQXV0b2NvbXBsZXRlIGZyb20gJy4vcHJvQWRkb25zL2FkZHJlc3NBdXRvY29tcGxldGUnO1xyXG5pbXBvcnQgY29udmVydGtpdCBmcm9tICcuL3Byb0FkZG9ucy9jb252ZXJ0a2l0JztcclxuaW1wb3J0IG1haWxlcmxpdGUgZnJvbSAnLi9wcm9BZGRvbnMvbWFpbGVybGl0ZSc7XHJcbmltcG9ydCBtb29zZW5kIGZyb20gJy4vcHJvQWRkb25zL21vb3NlbmQnO1xyXG5pbXBvcnQgc3RyaXBlIGZyb20gJy4vcHJvR2F0ZXdheXMvc3RyaXBlJztcclxuXHJcbmNvbnN0IHsgYWRkRmlsdGVyIH0gPSB3cC5ob29rcztcclxuXHJcbmNvbnN0IGFkZG9ucyA9IFtcclxuXHRhZGRyZXNzQXV0b2NvbXBsZXRlLFxyXG5cdGh1YnNwb3QsXHJcblx0Y29udmVydGtpdCxcclxuXHRtYWlsZXJsaXRlLFxyXG5cdG1vb3NlbmQsXHJcbl07XHJcblxyXG5jb25zdCBnYXRld2F5cyA9IFtcclxuXHRzdHJpcGVcclxuXTtcclxuXHJcbmNvbnN0IGdldE1vZHVsZXNOYW1lcyA9IG1vZHVsZXMgPT4gbW9kdWxlcy5tYXAoIGl0ZW0gPT4gKFxyXG5cdGl0ZW0uY29tcG9uZW50Lm5hbWVcclxuKSApO1xyXG5cclxuXHJcbmNvbnN0IHJ1biA9ICgpID0+IHtcclxuXHRhZGRGaWx0ZXIoICdqZXQuZmIucmVnaXN0ZXIuc2V0dGluZ3MtcGFnZS50YWJzJywgJ2pldC1mb3JtLWJ1aWxkZXInLCBtb2R1bGVzID0+IHtcclxuXHRcdGNvbnN0IG5hbWVzID0gZ2V0TW9kdWxlc05hbWVzKCBtb2R1bGVzICk7XHJcblxyXG5cdFx0Zm9yICggY29uc3QgYWRkb24gb2YgYWRkb25zICkge1xyXG5cdFx0XHRpZiAoIG5hbWVzLmluY2x1ZGVzKCBhZGRvbi5jb21wb25lbnQubmFtZSApICkge1xyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdG1vZHVsZXMucHVzaCggYWRkb24gKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gbW9kdWxlcztcclxuXHR9LCAxMDAwICk7XHJcblxyXG5cdGFkZEZpbHRlciggJ2pldC5mYi5yZWdpc3Rlci5nYXRld2F5cycsICdqZXQtZm9ybS1idWlsZGVyJywgbW9kdWxlcyA9PiB7XHJcblx0XHRjb25zdCBuYW1lcyA9IGdldE1vZHVsZXNOYW1lcyggbW9kdWxlcyApO1xyXG5cclxuXHRcdGZvciAoIGNvbnN0IGdhdGV3YXkgb2YgZ2F0ZXdheXMgKSB7XHJcblx0XHRcdGlmICggbmFtZXMuaW5jbHVkZXMoIGdhdGV3YXkuY29tcG9uZW50Lm5hbWUgKSApIHtcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRtb2R1bGVzLnB1c2goIGdhdGV3YXkgKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gbW9kdWxlcztcclxuXHR9LCAxMDAwICk7XHJcbn07XHJcblxyXG5pZiAoICEgd2luZG93Py5KZXRGQlBhZ2VDb25maWc/LmlzX2FjdGl2ZSApIHtcclxuXHRydW4oKTtcclxufVxyXG5cclxuIiwiaW1wb3J0IFRhYiBmcm9tICcuL2ZyaWVuZGx5Q2FwdGNoYS52dWUnO1xyXG5cclxuY29uc3QgY29tcG9uZW50ID0gVGFiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdGNvbXBvbmVudCxcclxufSIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCBsYWJlbCA9IHtcclxuXHRrZXk6IF9fKCAnU2l0ZSBLZXknLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxuXHRzZWNyZXQ6IF9fKCAnU2VjcmV0IEtleScsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG59O1xyXG5cclxuZXhwb3J0IHsgbGFiZWwgfTsiLCJpbXBvcnQgVGFiIGZyb20gJy4vcmVDQVBUQ0hBdjMudnVlJztcclxuXHJcbmNvbnN0IGNvbXBvbmVudCA9IFRhYjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRjb21wb25lbnQsXHJcbn0iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgbGFiZWwgPSB7XHJcblx0a2V5OiBfXyggJ1NpdGUgS2V5JywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcblx0c2VjcmV0OiBfXyggJ1NlY3JldCBLZXknLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxuXHR0aHJlc2hvbGQ6IF9fKCAnU2NvcmUgVGhyZXNob2xkJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcbn07XHJcblxyXG5jb25zdCBoZWxwID0ge1xyXG5cdHRocmVzaG9sZDogX18oXHJcblx0XHRgSXQgc2hvdWxkIGJlIGEgdmFsdWUgYmV0d2VlbiAwIGFuZCAxLCBkZWZhdWx0IDAuNSAoMS4wIGlzIHZlcnkgbGlrZWx5IGEgZ29vZCBpbnRlcmFjdGlvbiwgMC4wIGlzIHZlcnkgbGlrZWx5IGEgYm90KS5gLFxyXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInXHJcblx0KSxcclxuXHRhcGlQcmVmOiBfXyggJ1JlZ2lzdGVyIHJlQ0FQVENIQSB2MyBrZXlzJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcblx0YXBpTGlua0xhYmVsOiBfXyggJ2hlcmUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxuXHRhcGlMaW5rOiAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9yZWNhcHRjaGEvYWRtaW4vY3JlYXRlJ1xyXG59O1xyXG5cclxuZXhwb3J0IHsgbGFiZWwsIGhlbHAgfTsiLCJpbXBvcnQgVGFiIGZyb20gJy4vaENhcHRjaGEudnVlJztcclxuXHJcbmNvbnN0IGNvbXBvbmVudCA9IFRhYjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRjb21wb25lbnQsXHJcbn0iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgbGFiZWwgPSB7XHJcblx0a2V5OiBfXyggJ1NpdGUgS2V5JywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcblx0c2VjcmV0OiBfXyggJ1NlY3JldCBLZXknLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxufTtcclxuXHJcblxyXG5leHBvcnQgeyBsYWJlbCB9OyIsImltcG9ydCBUYWIgZnJvbSAnLi90dXJuc3RpbGUudnVlJztcclxuXHJcbmNvbnN0IGNvbXBvbmVudCA9IFRhYjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRjb21wb25lbnQsXHJcbn0iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgbGFiZWwgPSB7XHJcblx0a2V5OiBfXyggJ1NpdGUgS2V5JywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcblx0c2VjcmV0OiBfXyggJ1NlY3JldCBLZXknLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxufTtcclxuXHJcblxyXG5leHBvcnQgeyBsYWJlbCB9OyIsImltcG9ydCBUYWIgZnJvbSAnLi9QYXlwYWxUYWIudnVlJztcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB0aXRsZSA9IF9fKCAnUGF5UGFsIEdhdGV3YXkgQVBJJywgJ2pldC1mb3JtLWJ1aWxkZXInICk7XHJcbmNvbnN0IGNvbXBvbmVudCA9IFRhYjtcclxuXHJcbmV4cG9ydCB7XHJcblx0dGl0bGUsXHJcblx0Y29tcG9uZW50LFxyXG59IiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IGxhYmVsID0ge1xyXG5cdGNsaWVudF9pZDogX18oICdDbGllbnQgSUQnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxuXHRzZWNyZXQ6IF9fKCAnU2VjcmV0IEtleScsICdqZXQtZm9ybS1idWlsZGVyJyApXHJcbn07XHJcblxyXG5jb25zdCBoZWxwID0ge307XHJcblxyXG5leHBvcnQgeyBsYWJlbCwgaGVscCB9OyIsImltcG9ydCBJc1BST0ljb24gZnJvbSAnLi4vSXNQUk9JY29uJztcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0dGl0bGU6IF9fKCAnQWRkcmVzcyBBdXRvY29tcGxldGUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxuXHRjb21wb25lbnQ6IHtcclxuXHRcdG5hbWU6ICdqZmItYWRkcmVzcy10YWInLFxyXG5cdH0sXHJcblx0ZGlzYWJsZWQ6IHRydWUsXHJcblx0aWNvbjogSXNQUk9JY29uLFxyXG59OyIsImltcG9ydCBJc1BST0ljb24gZnJvbSAnLi4vSXNQUk9JY29uJztcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0dGl0bGU6IF9fKCAnQ29udmVydEtpdCBBUEknLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxuXHRjb21wb25lbnQ6IHtcclxuXHRcdG5hbWU6ICdjb252ZXJ0LWtpdC10YWInLFxyXG5cdH0sXHJcblx0ZGlzYWJsZWQ6IHRydWUsXHJcblx0aWNvbjogSXNQUk9JY29uLFxyXG59OyIsImltcG9ydCBJc1BST0ljb24gZnJvbSAnLi4vSXNQUk9JY29uJztcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0dGl0bGU6IF9fKCAnSHViU3BvdCBBUEknLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxuXHRjb21wb25lbnQ6IHtcclxuXHRcdG5hbWU6ICdodWJzcG90JyxcclxuXHR9LFxyXG5cdGRpc2FibGVkOiB0cnVlLFxyXG5cdGljb246IElzUFJPSWNvbixcclxufTsiLCJpbXBvcnQgSXNQUk9JY29uIGZyb20gJy4uL0lzUFJPSWNvbic7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdHRpdGxlOiBfXyggJ01haWxlckxpdGUgQVBJJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcblx0Y29tcG9uZW50OiB7XHJcblx0XHRuYW1lOiAnbWFpbGVyLWxpdGUtdGFiJyxcclxuXHR9LFxyXG5cdGRpc2FibGVkOiB0cnVlLFxyXG5cdGljb246IElzUFJPSWNvbixcclxufTsiLCJpbXBvcnQgSXNQUk9JY29uIGZyb20gJy4uL0lzUFJPSWNvbic7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdHRpdGxlOiBfXyggJ01vb3NlbmQgQVBJJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcblx0Y29tcG9uZW50OiB7XHJcblx0XHRuYW1lOiAnbW9vc2VuZCcsXHJcblx0fSxcclxuXHRkaXNhYmxlZDogdHJ1ZSxcclxuXHRpY29uOiBJc1BST0ljb24sXHJcbn07IiwiaW1wb3J0IElzUFJPSWNvbiBmcm9tICcuLi9Jc1BST0ljb24nO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHR0aXRsZTogX18oICdTdHJpcGUgR2F0ZXdheSBBUEknLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxuXHRjb21wb25lbnQ6IHtcclxuXHRcdG5hbWU6ICdzdHJpcGUnXHJcblx0fSxcclxuXHRkaXNhYmxlZDogdHJ1ZSxcclxuXHRpY29uOiBJc1BST0ljb24sXHJcbn0iLCJpbXBvcnQgQ2FwdGNoYVRhYiBmcm9tICcuL0NhcHRjaGFUYWIudnVlJztcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB0aXRsZSAgICAgICAgID0gX18oICdDYXB0Y2hhIFNldHRpbmdzJywgJ2pldC1mb3JtLWJ1aWxkZXInICk7XHJcbmNvbnN0IGNvbXBvbmVudCAgICAgPSBDYXB0Y2hhVGFiO1xyXG5jb25zdCBkaXNwbGF5QnV0dG9uID0gZmFsc2U7XHJcblxyXG5leHBvcnQge1xyXG5cdHRpdGxlLFxyXG5cdGNvbXBvbmVudCxcclxuXHRkaXNwbGF5QnV0dG9uLFxyXG59OyIsImltcG9ydCBHZXRSZXNwb25zZVRhYiBmcm9tICcuL0dldFJlc3BvbnNlVGFiLnZ1ZSc7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgdGl0bGUgPSBfXyggJ0dldFJlc3BvbnNlIEFQSScsICdqZXQtZm9ybS1idWlsZGVyJyApO1xyXG5jb25zdCBjb21wb25lbnQgPSBHZXRSZXNwb25zZVRhYjtcclxuXHJcbmV4cG9ydCB7XHJcblx0dGl0bGUsXHJcblx0Y29tcG9uZW50XHJcbn0iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgbGFiZWwgPSB7XHJcblx0YXBpX2tleTogX18oICdBUEkgS2V5JywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcbn07XHJcblxyXG5jb25zdCBoZWxwID0ge1xyXG5cdGFwaVByZWY6IF9fKCAnSG93IHRvIG9idGFpbiB5b3VyIEdldFJlc3BvbnNlIEFQSSBLZXk/IE1vcmUgaW5mbycsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdGFwaUxpbmtMYWJlbDogX18oICdoZXJlJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcblx0YXBpTGluazogJ2h0dHBzOi8vYXBwLmdldHJlc3BvbnNlLmNvbS9hcGknXHJcbn07XHJcblxyXG5leHBvcnQgeyBsYWJlbCwgaGVscCB9OyIsImltcG9ydCBNYWlsQ2hpbXBUYWIgZnJvbSAnLi9NYWlsQ2hpbXBUYWIudnVlJztcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB0aXRsZSA9IF9fKCAnTWFpbENoaW1wIEFQSScsICdqZXQtZm9ybS1idWlsZGVyJyApO1xyXG5jb25zdCBjb21wb25lbnQgPSBNYWlsQ2hpbXBUYWI7XHJcblxyXG5leHBvcnQge1xyXG5cdHRpdGxlLFxyXG5cdGNvbXBvbmVudFxyXG59IiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IGxhYmVsID0ge1xyXG5cdGFwaV9rZXk6IF9fKCAnQVBJIEtleScsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG59O1xyXG5cclxuY29uc3QgaGVscCA9IHtcclxuXHRhcGlQcmVmOiBfXyggJ0hvdyB0byBvYnRhaW4geW91ciBNYWlsQ2hpbXAgQVBJIEtleT8gTW9yZSBpbmZvJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcblx0YXBpTGlua0xhYmVsOiBfXyggJ2hlcmUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxuXHRhcGlMaW5rOiAnaHR0cHM6Ly9tYWlsY2hpbXAuY29tL2hlbHAvYWJvdXQtYXBpLWtleXMvJ1xyXG59O1xyXG5cclxuZXhwb3J0IHsgbGFiZWwsIGhlbHAgfTsiLCJpbXBvcnQgT3B0aW9uc1RhYiBmcm9tICcuL09wdGlvbnNUYWIudnVlJztcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB0aXRsZSAgICAgICAgID0gX18oICdPcHRpb25zJywgJ2pldC1mb3JtLWJ1aWxkZXInICk7XHJcbmNvbnN0IGNvbXBvbmVudCAgICAgPSBPcHRpb25zVGFiO1xyXG5jb25zdCBkaXNwbGF5QnV0dG9uID0gZmFsc2U7XHJcblxyXG5leHBvcnQge1xyXG5cdHRpdGxlLFxyXG5cdGNvbXBvbmVudCxcclxuXHRkaXNwbGF5QnV0dG9uLFxyXG59OyIsImltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcclxuXHJcbmNvbnN0IGxhYmVsID0ge1xyXG5cdGVuYWJsZV9kZXZfbW9kZTogX18oICdFbmFibGUgRGV2LU1vZGUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxuXHRkaXNhYmxlX25leHRfYnV0dG9uOiBfXyggJ0Rpc2FibGUgXCJOZXh0XCIgYnV0dG9uJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcblx0Y2xlYXJfb25fdW5pbnN0YWxsOiBfXyhcclxuXHRcdCdDbGVhciBwbHVnaW4gZGF0YSBhZnRlciB0aGUgdW5pbnN0YWxsJyxcclxuXHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcclxuXHQpLFxyXG5cdHNjcm9sbF9vbl9uZXh0OiBfXyhcclxuXHRcdCdTY3JvbGwgdG8gdGhlIHRvcCBvbiBwYWdlIGNoYW5nZScsXHJcblx0XHQnamV0LWZvcm0tYnVpbGRlcicsXHJcblx0KSxcclxuXHRhdXRvX2ZvY3VzOiBfXyhcclxuXHRcdCdBdXRvbWF0aWMgZm9jdXMnLFxyXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxyXG5cdCksXHJcbn07XHJcblxyXG5jb25zdCBoZWxwID0ge1xyXG5cdGVuYWJsZV9kZXZfbW9kZTogX18oXHJcblx0XHQnV2l0aCBkZXZlbG9wZXIgbW9kZSBlbmFibGVkLCBlcnJvcnMgZnJvbSB0aGUgZm9ybSB3aWxsIGJlIHNhdmVkLicsXHJcblx0XHQnamV0LWZvcm0tYnVpbGRlcicsXHJcblx0KSxcclxuXHRkaXNhYmxlX25leHRfYnV0dG9uOiBfXyhcclxuXHRcdGBJZiB0aGlzIG9wdGlvbiBpcyBhY3RpdmUsIHRoZSBOZXh0IGJ1dHRvbiBpbiBhIG11bHRpLXN0ZXAgZm9ybSB3b24ndCBiZWNvbWUgY2xpY2thYmxlIHVudGlsIGFsbCB0aGUgcmVxdWlyZWQgZmllbGRzIGFyZSBjb21wbGV0ZWQuYCxcclxuXHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcclxuXHQpLFxyXG5cdGNsZWFyX29uX3VuaW5zdGFsbDogX18oXHJcblx0XHRgSWYgdGhpcyBvcHRpb24gaXMgYWN0aXZlLCB3aGVuIHRoZSBwbHVnaW4gaXMgZGVsZXRlZCwgYWxsIGN1c3RvbSBzcWwtdGFibGVzLCBhbGwgb3B0aW9ucyBhbmQgZmlsZXMgd2lsbCBhbHNvIGJlIGRlbGV0ZWQuIEluIHBhcnRpY3VsYXIsIHRob3NlIHRoYXQgd2VyZSB1cGxvYWRlZCB1c2luZyBNZWRpYSBGaWVsZC5gLFxyXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxyXG5cdCksXHJcblx0c2Nyb2xsX29uX25leHQ6IF9fKFxyXG5cdFx0YEF1dG9tYXRpYyBzY3JvbGxpbmcgdG8gdGhlIHRvcCBvZiB0aGUgZm9ybSB3aGVuIHN3aXRjaGluZyBiZXR3ZWVuIGZvcm0gcGFnZXMuYCxcclxuXHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcclxuXHQpLFxyXG5cdGF1dG9fZm9jdXM6IF9fKFxyXG5cdFx0YEluZGljYXRlcyBpbnZhbGlkIGZpZWxkIGFuZCBwcmV2ZW50cyB0aGUgdXNlciBmcm9tIGdvaW5nIHRvIHRoZSBuZXh0IHBhZ2Ugb3Igc3VibWl0dGluZyB0aGUgZm9ybSB1bmxlc3MgZmlsbGVkLmAsXHJcblx0XHQnamV0LWZvcm0tYnVpbGRlcicsXHJcblx0KSxcclxufTtcclxuXHJcbmV4cG9ydCB7IGxhYmVsLCBoZWxwIH07IiwiaW1wb3J0IFRhYiBmcm9tICcuL1BheW1lbnRzR2F0ZXdheXMudnVlJztcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB0aXRsZSA9IF9fKCAnUGF5bWVudHMgR2F0ZXdheXMnLCAnamV0LWZvcm0tYnVpbGRlcicgKTtcclxuY29uc3QgY29tcG9uZW50ID0gVGFiO1xyXG5jb25zdCBkaXNwbGF5QnV0dG9uID0gZmFsc2U7XHJcblxyXG5leHBvcnQge1xyXG5cdHRpdGxlLFxyXG5cdGNvbXBvbmVudCxcclxuXHRkaXNwbGF5QnV0dG9uXHJcbn0iLCJpbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XHJcblxyXG5jb25zdCBsYWJlbCA9IHtcclxuXHR1c2VfZ2F0ZXdheXM6IF9fKCAnRW5hYmxlIEdhdGV3YXlzJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcblx0ZW5hYmxlX3Rlc3RfbW9kZTogX18oICdFbmFibGUgVGVzdCBNb2RlJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcbn07XHJcblxyXG5jb25zdCBoZWxwID0ge1xyXG5cdGVuYWJsZV90ZXN0X21vZGU6IF9fKFxyXG5cdFx0YFRoaXMgb3B0aW9uIHRha2VzIHByZWNlZGVuY2Ugb3ZlciB0aGUgPGNvZGU+amV0LWZvcm0tYnVpbGRlci9nYXRld2F5cy9wYXlwYWwvc2FuZGJveC1tb2RlPC9jb2RlPiBmaWx0ZXIuIEFzIG9mIHJpZ2h0IG5vdywgd29ya3Mgb25seSBmb3IgUGF5UGFsIHBheW1lbnQgc3lzdGVtYCxcclxuXHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcclxuXHQpLFxyXG5cdHVzZV9nYXRld2F5czogX18oXHJcblx0XHRgQWN0aXZhdGUgcGF5bWVudCBnYXRld2F5cyBmb3IgdGhlIGZvcm1zLiBUaGlzIG9wdGlvbiB0YWtlcyBwcmVjZWRlbmNlIG92ZXIgdGhlIDxjb2RlPmpldC1mb3JtLWJ1aWxkZXIvYWxsb3ctZ2F0ZXdheXM8L2NvZGU+IGZpbHRlcmAsXHJcblx0XHQnamV0LWZvcm0tYnVpbGRlcicsXHJcblx0KSxcclxufTtcclxuXHJcbmV4cG9ydCB7XHJcblx0bGFiZWwsXHJcblx0aGVscCxcclxufTsiLCI8dGVtcGxhdGU+XHJcblx0PHNwYW4+e3sgX18oICdQcm8nLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9fTwvc3Bhbj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmNvbnN0IHsgaTE4biB9ID0gSmV0RkJNaXhpbnM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0bmFtZTogJ0lzUFJPSWNvbicsXHJcblx0bWl4aW5zOiBbIGkxOG4gXSxcclxuXHRwcm9wczoge1xyXG5cdFx0aXNBY3RpdmU6IHtcclxuXHRcdFx0dHlwZTogQm9vbGVhbixcclxuXHRcdFx0ZGVmYXVsdDogZmFsc2UsXHJcblx0XHR9LFxyXG5cdH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuc3BhbiB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwN0NCQTtcclxuXHRwYWRkaW5nOiAwLjFlbSAwLjNlbTtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdGJvcmRlci1yYWRpdXM6IDNweDtcclxuXHRjb2xvcjogd2hpdGU7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuXHRmb250LXdlaWdodDogNzAwO1xyXG5cdGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG5cdGxldHRlci1zcGFjaW5nOiAwO1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcblx0PEZvcm1CdWlsZGVyUGFnZVxyXG5cdFx0OnRpdGxlPVwiX18oICdKZXRGb3JtQnVpbGRlciBTZXR0aW5ncycsICdqZXQtZm9ybS1idWlsZGVyJyApXCJcclxuXHQ+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiamZiLWNvbnRlbnRcIj5cclxuXHRcdFx0PEFsZXJ0c0xpc3QvPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiamZiLWNvbnRlbnQtbWFpblwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjeC12dWktcGFuZWxcIj5cclxuXHRcdFx0XHRcdDxDeFZ1aVRhYnNcclxuXHRcdFx0XHRcdFx0OmluLXBhbmVsPVwiZmFsc2VcIlxyXG5cdFx0XHRcdFx0XHQ6dmFsdWU9XCJhY3RpdmVUYWJTbHVnXCJcclxuXHRcdFx0XHRcdFx0bGF5b3V0PVwidmVydGljYWxcIlxyXG5cdFx0XHRcdFx0XHRAaW5wdXQ9XCJvbkNoYW5nZUFjdGl2ZVRhYlwiXHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxDeFZ1aVRhYnNQYW5lbFxyXG5cdFx0XHRcdFx0XHRcdHYtZm9yPVwiKCB7IGRpc3BsYXlCdXR0b24gPSB0cnVlLCAuLi50YWIgfSwgaW5kZXggKSBpbiB0YWJzXCJcclxuXHRcdFx0XHRcdFx0XHQ6bmFtZT1cInRhYi5jb21wb25lbnQubmFtZVwiXHJcblx0XHRcdFx0XHRcdFx0OmxhYmVsPVwidGFiLnRpdGxlXCJcclxuXHRcdFx0XHRcdFx0XHQ6a2V5PVwidGFiLmNvbXBvbmVudC5uYW1lXCJcclxuXHRcdFx0XHRcdFx0XHQ6ZGlzYWJsZWQ9XCJ0YWIuZGlzYWJsZWRcIlxyXG5cdFx0XHRcdFx0XHRcdDppY29uPVwidGFiLmljb25cIlxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0PHRlbXBsYXRlICNkZWZhdWx0IHYtaWY9XCJ0YWIuY29tcG9uZW50LnJlbmRlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGtlZXAtYWxpdmU+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxjb21wb25lbnRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2LWJpbmQ6aXM9XCJ0YWIuY29tcG9uZW50XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ6aW5jb21pbmc9XCJnZXRJbmNvbWluZyggdGFiLmNvbXBvbmVudC5uYW1lIClcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDppbm5lci1zbHVncz1cImFjdGl2ZVRhYklubmVyU2x1Z3MgfHwgW11cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJlZj1cInRhYkNvbXBvbmVudHNcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9rZWVwLWFsaXZlPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGN4LXZ1aS1idXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0di1pZj1cImRpc3BsYXlCdXR0b25cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRidXR0b24tc3R5bGU9XCJhY2NlbnRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ6bG9hZGluZz1cImxvYWRpbmdUYWJbIHRhYi5jb21wb25lbnQubmFtZSBdXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0QGNsaWNrPVwib25TYXZlVGFiKCBpbmRleCwgdGFiLmNvbXBvbmVudC5uYW1lIClcIlxyXG5cdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGVtcGxhdGUgI2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPlNhdmU8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdGVtcGxhdGU+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2N4LXZ1aS1idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0PC90ZW1wbGF0ZT5cclxuXHRcdFx0XHRcdFx0PC9DeFZ1aVRhYnNQYW5lbD5cclxuXHRcdFx0XHRcdDwvQ3hWdWlUYWJzPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PFNldHRpbmdzU2lkZUJhci8+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L0Zvcm1CdWlsZGVyUGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCAqIGFzIGNhcHRjaGEgZnJvbSAnLi90YWJzL2NhcHRjaGEnO1xyXG5pbXBvcnQgKiBhcyBtYWlsY2hpbXAgZnJvbSAnLi90YWJzL21haWxjaGltcCc7XHJcbmltcG9ydCAqIGFzIGdldFJlc3BvbnNlIGZyb20gJy4vdGFicy9nZXRyZXNwb25zZSc7XHJcbmltcG9ydCAqIGFzIHBheW1lbnRHYXRld2F5cyBmcm9tICcuL3RhYnMvcGF5bWVudHMtZ2F0ZXdheXMnO1xyXG5pbXBvcnQgKiBhcyBvcHRpb25zIGZyb20gJy4vdGFicy9vcHRpb25zJztcclxuaW1wb3J0IFNldHRpbmdzU2lkZUJhciBmcm9tICcuL3NpZGViYXIvU2V0dGluZ3NTaWRlQmFyJztcclxuXHJcbmNvbnN0IHsgYXBwbHlGaWx0ZXJzLCBkb0FjdGlvbiB9ID0gd3AuaG9va3M7XHJcblxyXG5jb25zdCB7XHJcblx0U2F2ZVRhYkJ5QWpheCxcclxuXHRHZXRJbmNvbWluZyxcclxuXHRpMThuLFxyXG59ID0gd2luZG93LkpldEZCTWl4aW5zO1xyXG5cclxuY29uc3Qge1xyXG5cdEN4VnVpVGFic1BhbmVsLFxyXG5cdEN4VnVpVGFicyxcclxuXHRBbGVydHNMaXN0LFxyXG5cdEZvcm1CdWlsZGVyUGFnZSxcclxufSA9IEpldEZCQ29tcG9uZW50cztcclxuXHJcbndpbmRvdy5qZmJFdmVudEJ1cyA9IHdpbmRvdy5qZmJFdmVudEJ1cyB8fCBuZXcgVnVlKCB7fSApO1xyXG5cclxuY29uc3Qgc2V0dGluZ1RhYnMgPSBhcHBseUZpbHRlcnMoICdqZXQuZmIucmVnaXN0ZXIuc2V0dGluZ3MtcGFnZS50YWJzJywgW1xyXG5cdG9wdGlvbnMsXHJcblx0cGF5bWVudEdhdGV3YXlzLFxyXG5cdGNhcHRjaGEsXHJcblx0bWFpbGNoaW1wLFxyXG5cdGdldFJlc3BvbnNlLFxyXG5dICk7XHJcblxyXG5jb25zdCBjaGFuZ2VIYXNoID0gaGFzaCA9PiB7XHJcblx0d2luZG93LmxvY2F0aW9uLmhhc2ggPSAnIycgKyBoYXNoO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0QWN0aXZlVGFiID0gKCkgPT4ge1xyXG5cdGNvbnN0IGZpcnN0ID0gc2V0dGluZ1RhYnNbIDAgXS5jb21wb25lbnQubmFtZTtcclxuXHJcblx0aWYgKCAhIHdpbmRvdy5sb2NhdGlvbi5oYXNoICkge1xyXG5cdFx0Y2hhbmdlSGFzaCggZmlyc3QgKTtcclxuXHJcblx0XHRyZXR1cm4gWyBmaXJzdCBdO1xyXG5cdH1cclxuXHRsZXQgWyBoYXNoLCAuLi5vdGhlcnMgXSA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoICcjJywgJycgKS5zcGxpdCggJ19fJyApO1xyXG5cdGxldCB0YWIgPSBzZXR0aW5nVGFicy5maW5kKCB0YWIgPT4gdGFiPy5jb21wb25lbnQ/Lm5hbWUgPT09IGhhc2ggKTtcclxuXHJcblx0aWYgKCAhIHRhYiApIHtcclxuXHRcdGNoYW5nZUhhc2goIGZpcnN0ICk7XHJcblxyXG5cdFx0cmV0dXJuIFsgZmlyc3QgXTtcclxuXHR9XHJcblx0Y2hhbmdlSGFzaCggWyB0YWIuY29tcG9uZW50Lm5hbWUsIC4uLm90aGVycyBdLmpvaW4oICdfXycgKSApO1xyXG5cclxuXHRyZXR1cm4gWyB0YWIuY29tcG9uZW50Lm5hbWUsIG90aGVycyBdO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdG5hbWU6ICdqZmItc2V0dGluZ3MnLFxyXG5cdGNvbXBvbmVudHM6IHtcclxuXHRcdEFsZXJ0c0xpc3QsXHJcblx0XHRDeFZ1aVRhYnNQYW5lbCxcclxuXHRcdEN4VnVpVGFicyxcclxuXHRcdFNldHRpbmdzU2lkZUJhcixcclxuXHRcdEZvcm1CdWlsZGVyUGFnZSxcclxuXHR9LFxyXG5cdGRhdGEoKSB7XHJcblx0XHRjb25zdCBbIHRhYlNsdWcsIG90aGVycyBdID0gZ2V0QWN0aXZlVGFiKCk7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRhY3RpdmVUYWJTbHVnOiB0YWJTbHVnLFxyXG5cdFx0XHRhY3RpdmVUYWJJbm5lclNsdWdzOiBvdGhlcnMsXHJcblx0XHRcdHRhYnM6IHNldHRpbmdUYWJzLFxyXG5cdFx0XHRsb2FkaW5nVGFiOiB7fSxcclxuXHRcdFx0aXNBY3RpdmVQcm86IGZhbHNlLFxyXG5cdFx0fTtcclxuXHR9LFxyXG5cdG1peGluczogWyBTYXZlVGFiQnlBamF4LCBHZXRJbmNvbWluZywgaTE4biBdLFxyXG5cdGNyZWF0ZWQoKSB7XHJcblx0XHR0aGlzLmlzQWN0aXZlUHJvID0gdGhpcy5nZXRJbmNvbWluZyggJ2lzX2FjdGl2ZScgKTtcclxuXHJcblx0XHRqZmJFdmVudEJ1cy4kb24oICdyZXF1ZXN0LXN0YXRlJywgcHJvcHMgPT4ge1xyXG5cdFx0XHRjb25zdCB7IHN0YXRlLCBzbHVnIH0gPSBwcm9wcztcclxuXHRcdFx0dGhpcy4kc2V0KCB0aGlzLmxvYWRpbmdUYWIsIHNsdWcsIHN0YXRlID09PSAnYmVnaW4nICk7XHJcblx0XHR9ICk7XHJcblx0XHRqZmJFdmVudEJ1cy4kb24oICdhbGVydC1jbGljay10aGFua3MnLCAoIHsgc2VsZiB9ICkgPT4ge1xyXG5cdFx0XHRzZWxmLmNsb3NlQWxlcnQoKTtcclxuXHRcdH0gKTtcclxuXHRcdGpmYkV2ZW50QnVzLiRvbiggJ2FsZXJ0LWNsaWNrLWNoZWNrJywgKCB7IHNlbGYgfSApID0+IHtcclxuXHRcdFx0c2VsZi5jbG9zZUFsZXJ0KCk7XHJcblx0XHR9ICk7XHJcblx0fSxcclxuXHRtZXRob2RzOiB7XHJcblx0XHRvbkNoYW5nZUFjdGl2ZVRhYiggYWN0aXZlVGFiICkge1xyXG5cdFx0XHRjb25zdCBjdXJyZW50VXJsID0gbmV3IFVSTCggZG9jdW1lbnQuVVJMICk7XHJcblx0XHRcdGN1cnJlbnRVcmwuaGFzaCA9ICcjJyArIGFjdGl2ZVRhYjtcclxuXHJcblx0XHRcdGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBjdXJyZW50VXJsLmhyZWY7XHJcblxyXG5cdFx0XHRqZmJFdmVudEJ1cy4kZW1pdCggJ2NoYW5nZS10YWInLCB7IHNsdWc6IGFjdGl2ZVRhYiB9ICk7XHJcblx0XHR9LFxyXG5cdFx0b25TYXZlVGFiKCBpbmRleFRhYiwgdGFiU2x1ZyApIHtcclxuXHRcdFx0Y29uc3QgY3VycmVudFRhYiA9IHRoaXMuJHJlZnMudGFiQ29tcG9uZW50c1sgaW5kZXhUYWIgXTtcclxuXHJcblx0XHRcdHRoaXMuc2F2ZUJ5QWpheCggY3VycmVudFRhYiwgdGFiU2x1ZyApO1xyXG5cdFx0fSxcclxuXHR9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG4uamZiLWNvbnRlbnQge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdGdhcDogMmVtO1xyXG5cdG1hcmdpbi10b3A6IDFlbTtcclxuXHJcblx0Ji1tYWluIHtcclxuXHRcdGZsZXg6IDE7XHJcblx0fVxyXG59XHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG5cdDxzZWN0aW9uPlxyXG5cdFx0PFNpbXBsZVdyYXBwZXJDb21wb25lbnQgZWxlbWVudC1pZD1cImZyaWVuZGx5X2tleVwiPlxyXG5cdFx0XHQ8dGVtcGxhdGUgI2xhYmVsPnt7IGxhYmVsLmtleSB9fTwvdGVtcGxhdGU+XHJcblx0XHRcdDx0ZW1wbGF0ZSAjZGVzY3JpcHRpb24+XHJcblx0XHRcdFx0PHAgY2xhc3M9XCJmYi1kZXNjcmlwdGlvblwiPlxyXG5cdFx0XHRcdFx0e3sgX18oXHJcblx0XHRcdFx0XHQnSXQgY2FuIGJlIGZvdW5kIG9uIHRoZSBwYWdlIGxpc3RpbmcgeW91ciBBcHBsaWNhdGlvbnMuIE9yIGZvbGxvdyB0aGlzJyxcclxuXHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcclxuXHRcdFx0XHQpICsgJyAnIH19XHJcblx0XHRcdFx0XHQ8RXh0ZXJuYWxMaW5rIGhyZWY9XCJodHRwczovL2RvY3MuZnJpZW5kbHljYXB0Y2hhLmNvbS8jL2luc3RhbGxhdGlvbj9pZD1fMS1nZW5lcmF0aW5nLWEtc2l0ZWtleVwiPlxyXG5cdFx0XHRcdFx0XHR7eyBfXyggJ2d1aWRlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfX1cclxuXHRcdFx0XHRcdDwvRXh0ZXJuYWxMaW5rPlxyXG5cdFx0XHRcdDwvcD5cclxuXHRcdFx0PC90ZW1wbGF0ZT5cclxuXHRcdFx0PHRlbXBsYXRlICNkZWZhdWx0PlxyXG5cdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0aWQ9XCJmcmllbmRseV9rZXlcIlxyXG5cdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0Y2xhc3M9XCJjeC12dWktaW5wdXQgc2l6ZS1mdWxsd2lkdGhcIlxyXG5cdFx0XHRcdFx0di1tb2RlbD1cInN0b3JhZ2Uua2V5XCJcclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L3RlbXBsYXRlPlxyXG5cdFx0PC9TaW1wbGVXcmFwcGVyQ29tcG9uZW50PlxyXG5cdFx0PGN4LXZ1aS1pbnB1dFxyXG5cdFx0XHRlbGVtZW50LWlkPVwiZnJpZW5kbHlfc2VjcmV0XCJcclxuXHRcdFx0OmxhYmVsPVwibGFiZWwuc2VjcmV0XCJcclxuXHRcdFx0OmRlc2NyaXB0aW9uPVwiX18oXHJcblx0XHRcdFx0J0l0IGNhbiBiZSBmb3VuZCBvbiB0aGUgcGFnZSBsaXN0aW5nIHlvdXIgQVBJIGtleXMuJyxcclxuXHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXHJcblx0XHRcdClcIlxyXG5cdFx0XHQ6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJyBdXCJcclxuXHRcdFx0OnNpemU9XCInZnVsbHdpZHRoJ1wiXHJcblx0XHRcdHYtbW9kZWw9XCJzdG9yYWdlLnNlY3JldFwiXHJcblx0XHQ+PC9jeC12dWktaW5wdXQ+XHJcblx0PC9zZWN0aW9uPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHJcbmltcG9ydCB7XHJcblx0bGFiZWwsXHJcbn0gZnJvbSAnLi9zb3VyY2UnO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIFNpbXBsZVdyYXBwZXJDb21wb25lbnQsXHJcblx0ICAgICAgRXh0ZXJuYWxMaW5rLFxyXG4gICAgICB9ID0gSmV0RkJDb21wb25lbnRzO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIGkxOG4sXHJcbiAgICAgIH0gPSBKZXRGQk1peGlucztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRuYW1lOiAnZnJpZW5kbHknLFxyXG5cdGNvbXBvbmVudHM6IHtcclxuXHRcdFNpbXBsZVdyYXBwZXJDb21wb25lbnQsXHJcblx0XHRFeHRlcm5hbExpbmssXHJcblx0fSxcclxuXHRtaXhpbnM6IFsgaTE4biBdLFxyXG5cdHByb3BzOiB7XHJcblx0XHRpbmNvbWluZzoge1xyXG5cdFx0XHR0eXBlOiBbIE9iamVjdCwgQXJyYXkgXSxcclxuXHRcdFx0ZGVmYXVsdCgpIHtcclxuXHRcdFx0XHRyZXR1cm4ge307XHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGxhYmVsLFxyXG5cdFx0XHRzdG9yYWdlOiB7fSxcclxuXHRcdH07XHJcblx0fSxcclxuXHRjcmVhdGVkKCkge1xyXG5cdFx0aWYgKCAhT2JqZWN0LmtleXMoIHRoaXMuaW5jb21pbmcgKT8ubGVuZ3RoICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHR0aGlzLnN0b3JhZ2UgPSBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggdGhpcy5pbmNvbWluZyApICk7XHJcblx0fSxcclxuXHRtZXRob2RzOiB7XHJcblx0XHRnZXRSZXF1ZXN0T25TYXZlKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGRhdGE6IHsgLi4udGhpcy5zdG9yYWdlIH0sXHJcblx0XHRcdH07XHJcblx0XHR9LFxyXG5cdH0sXHJcbn07XHJcblxyXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XHJcblx0PHNlY3Rpb24+XHJcblx0XHQ8Y3gtdnVpLWlucHV0XHJcblx0XHRcdDpsYWJlbD1cImxhYmVsLmtleVwiXHJcblx0XHRcdDp3cmFwcGVyLWNzcz1cIlsgJ2VxdWFsd2lkdGgnIF1cIlxyXG5cdFx0XHQ6c2l6ZT1cIidmdWxsd2lkdGgnXCJcclxuXHRcdFx0di1tb2RlbD1cInN0b3JhZ2Uua2V5XCJcclxuXHRcdD48L2N4LXZ1aS1pbnB1dD5cclxuXHRcdDxjeC12dWktaW5wdXRcclxuXHRcdFx0OmxhYmVsPVwibGFiZWwuc2VjcmV0XCJcclxuXHRcdFx0OndyYXBwZXItY3NzPVwiWyAnZXF1YWx3aWR0aCcgXVwiXHJcblx0XHRcdDpzaXplPVwiJ2Z1bGx3aWR0aCdcIlxyXG5cdFx0XHR2LW1vZGVsPVwic3RvcmFnZS5zZWNyZXRcIlxyXG5cdFx0PjwvY3gtdnVpLWlucHV0PlxyXG5cdFx0PGN4LXZ1aS1pbnB1dFxyXG5cdFx0XHR0eXBlPVwibnVtYmVyXCJcclxuXHRcdFx0Om1pbj1cIjBcIlxyXG5cdFx0XHQ6bWF4PVwiMVwiXHJcblx0XHRcdDpzdGVwPVwiMC4xXCJcclxuXHRcdFx0OmxhYmVsPVwibGFiZWwudGhyZXNob2xkXCJcclxuXHRcdFx0OmRlc2NyaXB0aW9uPVwiaGVscC50aHJlc2hvbGRcIlxyXG5cdFx0XHQ6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJyBdXCJcclxuXHRcdFx0OnNpemU9XCInZnVsbHdpZHRoJ1wiXHJcblx0XHRcdHYtbW9kZWw9XCJzdG9yYWdlLnRocmVzaG9sZFwiXHJcblx0XHQ+PC9jeC12dWktaW5wdXQ+XHJcblx0XHQ8cCBjbGFzcz1cImZiLWRlc2NyaXB0aW9uXCI+e3sgaGVscC5hcGlQcmVmIH19IDxhIDpocmVmPVwiaGVscC5hcGlMaW5rXCIgdGFyZ2V0PVwiX2JsYW5rXCI+e3sgaGVscC5hcGlMaW5rTGFiZWwgfX08L2E+XHJcblx0XHQ8L3A+XHJcblx0PC9zZWN0aW9uPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHJcbmltcG9ydCB7XHJcblx0aGVscCxcclxuXHRsYWJlbCxcclxufSBmcm9tIFwiLi9zb3VyY2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRuYW1lOiAnZ29vZ2xlJyxcclxuXHRwcm9wczoge1xyXG5cdFx0aW5jb21pbmc6IHtcclxuXHRcdFx0dHlwZTogWyBPYmplY3QsIEFycmF5IF0sXHJcblx0XHRcdGRlZmF1bHQoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHt9O1xyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdGRhdGEoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRsYWJlbCwgaGVscCxcclxuXHRcdFx0c3RvcmFnZToge30sXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0Y3JlYXRlZCgpIHtcclxuXHRcdGlmICggIU9iamVjdC5rZXlzKCB0aGlzLmluY29taW5nICk/Lmxlbmd0aCApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5zdG9yYWdlID0gSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIHRoaXMuaW5jb21pbmcgKSApO1xyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0Z2V0UmVxdWVzdE9uU2F2ZSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRkYXRhOiB7IC4uLnRoaXMuc3RvcmFnZSB9LFxyXG5cdFx0XHR9O1xyXG5cdFx0fSxcclxuXHR9LFxyXG59XHJcblxyXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XHJcblx0PHNlY3Rpb24+XHJcblx0XHQ8U2ltcGxlV3JhcHBlckNvbXBvbmVudCBlbGVtZW50LWlkPVwiaGNhcHRjaGFfa2V5XCI+XHJcblx0XHRcdDx0ZW1wbGF0ZSAjbGFiZWw+e3sgbGFiZWwua2V5IH19PC90ZW1wbGF0ZT5cclxuXHRcdFx0PHRlbXBsYXRlICNkZXNjcmlwdGlvbj5cclxuXHRcdFx0XHQ8cCBjbGFzcz1cImZiLWRlc2NyaXB0aW9uXCI+XHJcblx0XHRcdFx0XHR7eyBfXyhcclxuXHRcdFx0XHRcdCdZb3UgY2FuIGZpbmQgaXQgb24gdGhpcyBwYWdlIGluIHRoZSBmaXJzdCBjb2x1bW4gb2YgU2l0ZWtleS4nLFxyXG5cdFx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxyXG5cdFx0XHRcdCkgKyAnICcgfX1cclxuXHRcdFx0XHRcdDxFeHRlcm5hbExpbmsgaHJlZj1cImh0dHBzOi8vZGFzaGJvYXJkLmhjYXB0Y2hhLmNvbS9zaXRlc1wiPlxyXG5cdFx0XHRcdFx0XHR7eyBfXyggJ0dvIHRvIHRoZSBkYXNoYm9hcmQgb2Ygc2l0ZXMnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9fVxyXG5cdFx0XHRcdFx0PC9FeHRlcm5hbExpbms+XHJcblx0XHRcdFx0PC9wPlxyXG5cdFx0XHQ8L3RlbXBsYXRlPlxyXG5cdFx0XHQ8dGVtcGxhdGUgI2RlZmF1bHQ+XHJcblx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRpZD1cImhjYXB0Y2hhX2tleVwiXHJcblx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRjbGFzcz1cImN4LXZ1aS1pbnB1dCBzaXplLWZ1bGx3aWR0aFwiXHJcblx0XHRcdFx0XHR2LW1vZGVsPVwic3RvcmFnZS5rZXlcIlxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvdGVtcGxhdGU+XHJcblx0XHQ8L1NpbXBsZVdyYXBwZXJDb21wb25lbnQ+XHJcblx0XHQ8U2ltcGxlV3JhcHBlckNvbXBvbmVudCBlbGVtZW50LWlkPVwiaGNhcHRjaGFfc2VjcmV0XCI+XHJcblx0XHRcdDx0ZW1wbGF0ZSAjbGFiZWw+e3sgbGFiZWwuc2VjcmV0IH19PC90ZW1wbGF0ZT5cclxuXHRcdFx0PHRlbXBsYXRlICNkZXNjcmlwdGlvbj5cclxuXHRcdFx0XHQ8cCBjbGFzcz1cImZiLWRlc2NyaXB0aW9uXCI+XHJcblx0XHRcdFx0XHR7eyBfXyhcclxuXHRcdFx0XHRcdGBZb3UgY2FuIGZpbmQgaXQgb24gdGhlIHNldHRpbmdzIHBhZ2UsXHJcbnRoaXMgd2lsbCBiZSB0aGUgZmlyc3QgZmllbGQuYCxcclxuXHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcclxuXHRcdFx0XHQpICsgJyAnIH19XHJcblx0XHRcdFx0XHQ8RXh0ZXJuYWxMaW5rIGhyZWY9XCJodHRwczovL2Rhc2hib2FyZC5oY2FwdGNoYS5jb20vc2V0dGluZ3NcIj5cclxuXHRcdFx0XHRcdFx0e3sgX18oICdHbyB0byB0aGUgU2V0dGluZ3MgcGFnZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH19XHJcblx0XHRcdFx0XHQ8L0V4dGVybmFsTGluaz5cclxuXHRcdFx0XHQ8L3A+XHJcblx0XHRcdDwvdGVtcGxhdGU+XHJcblx0XHRcdDx0ZW1wbGF0ZSAjZGVmYXVsdD5cclxuXHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdGlkPVwiaGNhcHRjaGFfc2VjcmV0XCJcclxuXHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdGNsYXNzPVwiY3gtdnVpLWlucHV0IHNpemUtZnVsbHdpZHRoXCJcclxuXHRcdFx0XHRcdHYtbW9kZWw9XCJzdG9yYWdlLnNlY3JldFwiXHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC90ZW1wbGF0ZT5cclxuXHRcdDwvU2ltcGxlV3JhcHBlckNvbXBvbmVudD5cclxuXHQ8L3NlY3Rpb24+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cclxuaW1wb3J0IHtcclxuXHRsYWJlbCxcclxufSBmcm9tICcuL3NvdXJjZSc7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgU2ltcGxlV3JhcHBlckNvbXBvbmVudCxcclxuXHQgICAgICBFeHRlcm5hbExpbmssXHJcbiAgICAgIH0gPSBKZXRGQkNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgaTE4bixcclxuICAgICAgfSA9IEpldEZCTWl4aW5zO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdG5hbWU6ICdoY2FwdGNoYScsXHJcblx0Y29tcG9uZW50czoge1xyXG5cdFx0U2ltcGxlV3JhcHBlckNvbXBvbmVudCxcclxuXHRcdEV4dGVybmFsTGluayxcclxuXHR9LFxyXG5cdG1peGluczogWyBpMThuIF0sXHJcblx0cHJvcHM6IHtcclxuXHRcdGluY29taW5nOiB7XHJcblx0XHRcdHR5cGU6IFsgT2JqZWN0LCBBcnJheSBdLFxyXG5cdFx0XHRkZWZhdWx0KCkge1xyXG5cdFx0XHRcdHJldHVybiB7fTtcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0fSxcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bGFiZWwsXHJcblx0XHRcdHN0b3JhZ2U6IHt9LFxyXG5cdFx0fTtcclxuXHR9LFxyXG5cdGNyZWF0ZWQoKSB7XHJcblx0XHRpZiAoICFPYmplY3Qua2V5cyggdGhpcy5pbmNvbWluZyApPy5sZW5ndGggKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHRoaXMuc3RvcmFnZSA9IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCB0aGlzLmluY29taW5nICkgKTtcclxuXHR9LFxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdGdldFJlcXVlc3RPblNhdmUoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0ZGF0YTogeyAuLi50aGlzLnN0b3JhZ2UgfSxcclxuXHRcdFx0fTtcclxuXHRcdH0sXHJcblx0fSxcclxufTtcclxuXHJcbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cclxuXHQ8c2VjdGlvbj5cclxuXHRcdDxjeC12dWktaW5wdXRcclxuXHRcdFx0ZWxlbWVudC1pZD1cInR1cm5zdGlsZV9rZXlcIlxyXG5cdFx0XHQ6bGFiZWw9XCJsYWJlbC5rZXlcIlxyXG5cdFx0XHQ6ZGVzY3JpcHRpb249XCJfXyhcclxuXHRcdFx0XHQnUmVhZCB0aGUgaGludCB0byB0aGUgU2VjcmV0IEtleSBmaWVsZCcsXHJcblx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxyXG5cdFx0XHQpXCJcclxuXHRcdFx0OndyYXBwZXItY3NzPVwiWyAnZXF1YWx3aWR0aCcgXVwiXHJcblx0XHRcdDpzaXplPVwiJ2Z1bGx3aWR0aCdcIlxyXG5cdFx0XHR2LW1vZGVsPVwic3RvcmFnZS5rZXlcIlxyXG5cdFx0PjwvY3gtdnVpLWlucHV0PlxyXG5cdFx0PGN4LXZ1aS1pbnB1dFxyXG5cdFx0XHRlbGVtZW50LWlkPVwidHVybnN0aWxlX3NlY3JldFwiXHJcblx0XHRcdDpsYWJlbD1cImxhYmVsLnNlY3JldFwiXHJcblx0XHRcdDpkZXNjcmlwdGlvbj1cIl9fKFxyXG5cdFx0XHRcdCdZb3UgY2FuIGZpbmQgYm90aCBrZXlzIG9uIHlvdXIgVHVybnN0aWxlIFNpdGUgc2V0dGluZ3MgcGFnZScsXHJcblx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxyXG5cdFx0XHQpXCJcclxuXHRcdFx0OndyYXBwZXItY3NzPVwiWyAnZXF1YWx3aWR0aCcgXVwiXHJcblx0XHRcdDpzaXplPVwiJ2Z1bGx3aWR0aCdcIlxyXG5cdFx0XHR2LW1vZGVsPVwic3RvcmFnZS5zZWNyZXRcIlxyXG5cdFx0PjwvY3gtdnVpLWlucHV0PlxyXG5cdFx0PHAgY2xhc3M9XCJmYi1kZXNjcmlwdGlvblwiPlxyXG5cdFx0XHR7eyBfXyggJ0RpZG5cXCd0IGZpbmQgaXQ/IEhlcmUgaXMnLCAnamV0LWZvcm0tYnVpbGRlcicgKSArICcgJyB9fVxyXG5cdFx0XHQ8RXh0ZXJuYWxMaW5rXHJcblx0XHRcdFx0aHJlZj1cImh0dHBzOi8vZGV2ZWxvcGVycy5jbG91ZGZsYXJlLmNvbS90dXJuc3RpbGUvZ2V0LXN0YXJ0ZWQvI2dldC1hLXNpdGVrZXktYW5kLXNlY3JldC1rZXlcIlxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0e3sgX18oICdhIG1vcmUgZGV0YWlsZWQgZGVzY3JpcHRpb24nLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9fVxyXG5cdFx0XHQ8L0V4dGVybmFsTGluaz5cclxuXHRcdDwvcD5cclxuXHQ8L3NlY3Rpb24+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cclxuaW1wb3J0IHtcclxuXHRsYWJlbCxcclxufSBmcm9tICcuL3NvdXJjZSc7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgaTE4bixcclxuICAgICAgfSA9IEpldEZCTWl4aW5zO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIEV4dGVybmFsTGluayxcclxuICAgICAgfSA9IEpldEZCQ29tcG9uZW50cztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRuYW1lOiAndHVybnN0aWxlJyxcclxuXHRtaXhpbnM6IFtcclxuXHRcdGkxOG4sXHJcblx0XSxcclxuXHRjb21wb25lbnRzOiB7XHJcblx0XHRFeHRlcm5hbExpbmssXHJcblx0fSxcclxuXHRwcm9wczoge1xyXG5cdFx0aW5jb21pbmc6IHtcclxuXHRcdFx0dHlwZTogWyBPYmplY3QsIEFycmF5IF0sXHJcblx0XHRcdGRlZmF1bHQoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHt9O1xyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdGRhdGEoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRsYWJlbCxcclxuXHRcdFx0c3RvcmFnZToge30sXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0Y3JlYXRlZCgpIHtcclxuXHRcdGlmICggIU9iamVjdC5rZXlzKCB0aGlzLmluY29taW5nICk/Lmxlbmd0aCApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5zdG9yYWdlID0gSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIHRoaXMuaW5jb21pbmcgKSApO1xyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0Z2V0UmVxdWVzdE9uU2F2ZSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRkYXRhOiB7IC4uLnRoaXMuc3RvcmFnZSB9LFxyXG5cdFx0XHR9O1xyXG5cdFx0fSxcclxuXHR9LFxyXG59O1xyXG5cclxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxyXG5cdDxzZWN0aW9uPlxyXG5cdFx0PGN4LXZ1aS1pbnB1dFxyXG5cdFx0XHQ6bGFiZWw9XCJsYWJlbC5jbGllbnRfaWRcIlxyXG5cdFx0XHQ6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJyBdXCJcclxuXHRcdFx0OnNpemU9XCInZnVsbHdpZHRoJ1wiXHJcblx0XHRcdHYtbW9kZWw9XCJzdG9yYWdlLmNsaWVudF9pZFwiXHJcblx0XHQ+PC9jeC12dWktaW5wdXQ+XHJcblx0XHQ8Y3gtdnVpLWlucHV0XHJcblx0XHRcdDpsYWJlbD1cImxhYmVsLnNlY3JldFwiXHJcblx0XHRcdDp3cmFwcGVyLWNzcz1cIlsgJ2VxdWFsd2lkdGgnIF1cIlxyXG5cdFx0XHQ6c2l6ZT1cIidmdWxsd2lkdGgnXCJcclxuXHRcdFx0di1tb2RlbD1cInN0b3JhZ2Uuc2VjcmV0XCJcclxuXHRcdD48L2N4LXZ1aS1pbnB1dD5cclxuXHQ8L3NlY3Rpb24+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cclxuaW1wb3J0IHtcclxuXHRoZWxwLFxyXG5cdGxhYmVsLFxyXG59IGZyb20gXCIuL3NvdXJjZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdG5hbWU6ICdwYXlwYWwnLFxyXG5cdHByb3BzOiB7XHJcblx0XHRpbmNvbWluZzoge1xyXG5cdFx0XHR0eXBlOiBPYmplY3QsXHJcblx0XHRcdGRlZmF1bHQoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHt9O1xyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdGRhdGEoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRsYWJlbCwgaGVscCxcclxuXHRcdFx0c3RvcmFnZToge30sXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0Y3JlYXRlZCgpIHtcclxuXHRcdHRoaXMuc3RvcmFnZSA9IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCB0aGlzLmluY29taW5nICkgKTtcclxuXHR9LFxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdGdldFJlcXVlc3RPblNhdmUoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0ZGF0YTogeyAuLi50aGlzLnN0b3JhZ2UgfSxcclxuXHRcdFx0fTtcclxuXHRcdH0sXHJcblx0fSxcclxufVxyXG5cclxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxyXG5cdDxTaWRlQmFyQm94ZXM+XHJcblx0XHQ8dGVtcGxhdGUgI2ljb24taGVscD5cclxuXHRcdFx0PHN2ZyB3aWR0aD1cIjE0XCIgaGVpZ2h0PVwiMjFcIiB2aWV3Qm94PVwiMCAwIDE0IDIxXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcblx0XHRcdFx0PHBhdGhcclxuXHRcdFx0XHRcdGQ9XCJNNS4yNSAyMUg4Ljc1VjE3LjVINS4yNVYyMVpNNyAwQzMuMTMyNSAwIDAgMy4xMzI1IDAgN0gzLjVDMy41IDUuMDc1IDUuMDc1IDMuNSA3IDMuNUM4LjkyNSAzLjUgMTAuNSA1LjA3NSAxMC41IDdDMTAuNSAxMC41IDUuMjUgMTAuMDYyNSA1LjI1IDE1Ljc1SDguNzVDOC43NSAxMS44MTI1IDE0IDExLjM3NSAxNCA3QzE0IDMuMTMyNSAxMC44Njc1IDAgNyAwWlwiXHJcblx0XHRcdFx0XHRmaWxsPVwiIzdCN0U4MVwiPjwvcGF0aD5cclxuXHRcdFx0PC9zdmc+XHJcblx0XHQ8L3RlbXBsYXRlPlxyXG5cdFx0PHRlbXBsYXRlICNjb250ZW50LWhlbHA9XCJib3hcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImhlbHAtY2VudGVyLWxpbmtcIj5cclxuXHRcdFx0XHQ8YSA6aHJlZj1cImJveC5saW5rX2tub3dsZWRnZVwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImhlbHAtY2VudGVyLWxpbmstaWNvblwiPlxyXG5cdFx0XHRcdFx0XHQ8c3ZnIHdpZHRoPVwiMTRcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMTQgMTZcIiBmaWxsPVwibm9uZVwiXHJcblx0XHRcdFx0XHRcdFx0IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuXHRcdFx0XHRcdFx0XHQ8cGF0aFxyXG5cdFx0XHRcdFx0XHRcdFx0ZD1cIk0xMy40NTggMTEuMjU1MkwxMy40NTggMS40MTE1QzEzLjQ1OCAxLjAzMDY0IDEzLjEzNTcgMC43MDgzNzQgMTIuNzU0OSAwLjcwODM3NEwzLjE0NTUxIDAuNzA4Mzc0QzEuNTkyNzcgMC43MDgzNzQgMC4zMzMwMDggMS45NjgxNCAwLjMzMzAwOCAzLjUyMDg3TDAuMzMzMDA4IDEyLjg5NTlDMC4zMzMwMDggMTQuNDQ4NiAxLjU5Mjc3IDE1LjcwODQgMy4xNDU1MSAxNS43MDg0TDEyLjc1NDkgMTUuNzA4NEMxMy4xMzU3IDE1LjcwODQgMTMuNDU4IDE1LjQxNTQgMTMuNDU4IDE1LjAwNTJMMTMuNDU4IDE0LjUzNjVDMTMuNDU4IDE0LjMzMTQgMTMuMzQwOCAxNC4xMjYzIDEzLjE5NDMgMTQuMDA5MkMxMy4wNDc5IDEzLjU0MDQgMTMuMDQ3OSAxMi4yNTEzIDEzLjE5NDMgMTEuODExOUMxMy4zNDA4IDExLjY5NDcgMTMuNDU4IDExLjQ4OTYgMTMuNDU4IDExLjI1NTJaTTQuMDgzMDEgNC42MzQxNkM0LjA4MzAxIDQuNTQ2MjYgNC4xNDE2IDQuNDU4MzcgNC4yNTg3OSA0LjQ1ODM3TDEwLjQ2OTcgNC40NTgzN0MxMC41NTc2IDQuNDU4MzcgMTAuNjQ1NSA0LjU0NjI2IDEwLjY0NTUgNC42MzQxNkwxMC42NDU1IDUuMjIwMDlDMTAuNjQ1NSA1LjMzNzI4IDEwLjU1NzYgNS4zOTU4NyAxMC40Njk3IDUuMzk1ODdMNC4yNTg3OSA1LjM5NTg3QzQuMTQxNiA1LjM5NTg3IDQuMDgzMDEgNS4zMzcyOCA0LjA4MzAxIDUuMjIwMDlMNC4wODMwMSA0LjYzNDE2Wk00LjA4MzAxIDYuNTA5MTZDNC4wODMwMSA2LjQyMTI3IDQuMTQxNiA2LjMzMzM3IDQuMjU4NzkgNi4zMzMzN0wxMC40Njk3IDYuMzMzMzdDMTAuNTU3NiA2LjMzMzM3IDEwLjY0NTUgNi40MjEyNyAxMC42NDU1IDYuNTA5MTZMMTAuNjQ1NSA3LjA5NTA5QzEwLjY0NTUgNy4yMTIyOCAxMC41NTc2IDcuMjcwODcgMTAuNDY5NyA3LjI3MDg3TDQuMjU4NzkgNy4yNzA4N0M0LjE0MTYgNy4yNzA4NyA0LjA4MzAxIDcuMjEyMjggNC4wODMwMSA3LjA5NTA5TDQuMDgzMDEgNi41MDkxNlpNMTEuNDk1MSAxMy44MzM0TDMuMTQ1NTEgMTMuODMzNEMyLjYxODE2IDEzLjgzMzQgMi4yMDgwMSAxMy40MjMyIDIuMjA4MDEgMTIuODk1OUMyLjIwODAxIDEyLjM5NzggMi42MTgxNiAxMS45NTg0IDMuMTQ1NTEgMTEuOTU4NEwxMS40OTUxIDExLjk1ODRDMTEuNDM2NSAxMi40ODU3IDExLjQzNjUgMTMuMzM1MyAxMS40OTUxIDEzLjgzMzRaXCJcclxuXHRcdFx0XHRcdFx0XHRcdGZpbGw9XCIjMDA3Q0JBXCI+PC9wYXRoPlxyXG5cdFx0XHRcdFx0XHQ8L3N2Zz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImhlbHAtY2VudGVyLWxpbmstbGFiZWxcIj57eyBib3gubGFiZWxfa25vd2xlZGdlIH19PC9kaXY+XHJcblx0XHRcdFx0PC9hPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImhlbHAtY2VudGVyLWxpbmtcIj5cclxuXHRcdFx0XHQ8YSA6aHJlZj1cImJveC5saW5rX2NvbW11bml0eVwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImhlbHAtY2VudGVyLWxpbmstaWNvblwiPlxyXG5cdFx0XHRcdFx0XHQ8c3ZnIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwibm9uZVwiXHJcblx0XHRcdFx0XHRcdFx0IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuXHRcdFx0XHRcdFx0XHQ8cGF0aFxyXG5cdFx0XHRcdFx0XHRcdFx0ZD1cIk0xNS41OTEzIDguMDQ1NjRDMTUuNTkxMyAzLjg3NzI4IDEyLjIxNCAwLjUgOC4wNDU2NCAwLjVDMy44NzcyOCAwLjUgMC41IDMuODc3MjggMC41IDguMDQ1NjRDMC41IDExLjgxODUgMy4yMzgzNCAxNC45NTIzIDYuODU5MDMgMTUuNUw2Ljg1OTAzIDEwLjIzNjNMNC45NDIxOSAxMC4yMzYzTDQuOTQyMTkgOC4wNDU2NEw2Ljg1OTAzIDguMDQ1NjRMNi44NTkwMyA2LjQwMjY0QzYuODU5MDMgNC41MTYyMyA3Ljk4NDc5IDMuNDUxMzIgOS42ODg2NCAzLjQ1MTMyQzEwLjU0MDYgMy40NTEzMiAxMS4zOTI1IDMuNjAzNDUgMTEuMzkyNSAzLjYwMzQ1TDExLjM5MjUgNS40NTk0M0wxMC40NDkzIDUuNDU5NDNDOS41MDYwOSA1LjQ1OTQzIDkuMjAxODMgNi4wMzc1MyA5LjIwMTgzIDYuNjQ2MDRMOS4yMDE4MyA4LjA0NTY0TDExLjMwMTIgOC4wNDU2NEwxMC45NjY1IDEwLjIzNjNMOS4yMDE4MyAxMC4yMzYzTDkuMjAxODMgMTUuNUMxMi44MjI1IDE0Ljk1MjMgMTUuNTkxMyAxMS44MTg1IDE1LjU5MTMgOC4wNDU2NFpcIlxyXG5cdFx0XHRcdFx0XHRcdFx0ZmlsbD1cIiMwMDdDQkFcIj48L3BhdGg+XHJcblx0XHRcdFx0XHRcdDwvc3ZnPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaGVscC1jZW50ZXItbGluay1sYWJlbFwiPnt7IGJveC5sYWJlbF9jb21tdW5pdHkgfX08L2Rpdj5cclxuXHRcdFx0XHQ8L2E+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiaGVscC1jZW50ZXItbGlua1wiPlxyXG5cdFx0XHRcdDxhIDpocmVmPVwiYm94Lmxpbmtfc3VwcG9ydFwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImhlbHAtY2VudGVyLWxpbmstaWNvblwiPlxyXG5cdFx0XHRcdFx0XHQ8c3ZnIHdpZHRoPVwiMTVcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMTUgMThcIiBmaWxsPVwibm9uZVwiXHJcblx0XHRcdFx0XHRcdFx0IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuXHRcdFx0XHRcdFx0XHQ8cGF0aFxyXG5cdFx0XHRcdFx0XHRcdFx0ZD1cIk03LjU4MzMzIDAuNjY2Njg3QzMuNjc1IDAuNjY2Njg3IDAuNSAzLjg0MTY5IDAuNSA3Ljc1MDAyQzAuNSAxMS42NTg0IDMuNjc1IDE0LjgzMzQgNy41ODMzMyAxNC44MzM0SDhWMTcuMzMzNEMxMi4wNSAxNS4zODM0IDE0LjY2NjcgMTEuNSAxNC42NjY3IDcuNzUwMDJDMTQuNjY2NyAzLjg0MTY5IDExLjQ5MTcgMC42NjY2ODcgNy41ODMzMyAwLjY2NjY4N1pNOC40MTY2NyAxMi43NUg2Ljc1VjExLjA4MzRIOC40MTY2N1YxMi43NVpNOC40MTY2NyA5LjgzMzM1SDYuNzVDNi43NSA3LjEyNTAyIDkuMjUgNy4zMzMzNSA5LjI1IDUuNjY2NjlDOS4yNSA0Ljc1MDAyIDguNSA0LjAwMDAyIDcuNTgzMzMgNC4wMDAwMkM2LjY2NjY3IDQuMDAwMDIgNS45MTY2NyA0Ljc1MDAyIDUuOTE2NjcgNS42NjY2OUg0LjI1QzQuMjUgMy44MjUwMiA1Ljc0MTY3IDIuMzMzMzUgNy41ODMzMyAyLjMzMzM1QzkuNDI1IDIuMzMzMzUgMTAuOTE2NyAzLjgyNTAyIDEwLjkxNjcgNS42NjY2OUMxMC45MTY3IDcuNzUwMDIgOC40MTY2NyA3Ljk1ODM1IDguNDE2NjcgOS44MzMzNVpcIlxyXG5cdFx0XHRcdFx0XHRcdFx0ZmlsbD1cIiMwMDdDQkFcIj48L3BhdGg+XHJcblx0XHRcdFx0XHRcdDwvc3ZnPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaGVscC1jZW50ZXItbGluay1sYWJlbFwiPnt7IGJveC5sYWJlbF9zdXBwb3J0IH19PC9kaXY+XHJcblx0XHRcdFx0PC9hPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImhlbHAtY2VudGVyLWxpbmtcIj5cclxuXHRcdFx0XHQ8YSA6aHJlZj1cImJveC5saW5rX2dpdFwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImhlbHAtY2VudGVyLWxpbmstaWNvblwiPlxyXG5cdFx0XHRcdFx0XHQ8c3ZnIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwibm9uZVwiXHJcblx0XHRcdFx0XHRcdFx0IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiXHJcblx0XHRcdFx0XHRcdFx0XHQgIGQ9XCJNNy45NzYgMEM1Ljg2MDcxIDAuMDAwMjY1MTU2IDMuODMyMTQgMC44NDA2NzYgMi4zMzY0MSAyLjMzNjQxQzAuODQwNjc2IDMuODMyMTQgMC4wMDAyNjUxNTYgNS44NjA3MSAwIDcuOTc2QzAgMTEuNDk4IDIuMyAxNC40ODMgNS40MzEgMTUuNTZDNS44MjMgMTUuNjA5IDUuOTY5IDE1LjM2NCA1Ljk2OSAxNS4xNjhWMTMuNzk4QzMuNzY4IDE0LjI4OCAzLjI3OSAxMi43MjIgMy4yNzkgMTIuNzIyQzIuOTM2IDExLjc5MiAyLjM5OCAxMS41NDcgMi4zOTggMTEuNTQ3QzEuNjY0IDExLjA1OCAyLjQ0NiAxMS4wNTggMi40NDYgMTEuMDU4QzMuMjI5IDExLjEwNyAzLjY3IDExLjg5IDMuNjcgMTEuODlDNC40MDQgMTMuMTEzIDUuNTI5IDEyLjc3IDUuOTcgMTIuNTc1QzYuMDE4IDEyLjAzNyA2LjI2MyAxMS42OTUgNi40NTkgMTEuNDk5QzQuNjk3IDExLjMwMyAyLjgzOCAxMC42MTggMi44MzggNy41MzVDMi44MzggNi42NTUgMy4xMzEgNS45NjkgMy42NyA1LjM4MkMzLjYyIDUuMjM1IDMuMzI3IDQuNDA0IDMuNzY4IDMuMzI3QzMuNzY4IDMuMzI3IDQuNDUzIDMuMTMxIDUuOTY5IDQuMTU5QzYuNjA1IDMuOTYzIDcuMjkxIDMuOTE0IDcuOTc2IDMuOTE0QzguNjYxIDMuOTE0IDkuMzQ2IDQuMDEyIDkuOTgyIDQuMTU5QzExLjQ5OSAzLjEzMiAxMi4xODQgMy4zMjcgMTIuMTg0IDMuMzI3QzEyLjYyNCA0LjQwNCAxMi4zMyA1LjIzNSAxMi4yODEgNS40MzFDMTIuODE5OSA2LjAxODA4IDEzLjExNzEgNi43ODcxIDEzLjExMyA3LjU4NEMxMy4xMTMgMTAuNjY3IDExLjI1MyAxMS4zMDMgOS40OTMgMTEuNDk5QzkuNzg2IDExLjc0MyAxMC4wMzEgMTIuMjMyIDEwLjAzMSAxMi45NjZWMTUuMTY4QzEwLjAzMSAxNS4zNjQgMTAuMTc3IDE1LjYwOCAxMC41NjkgMTUuNTZDMTIuMTU1IDE1LjAyNDggMTMuNTMyNyAxNC4wMDQ2IDE0LjUwNzMgMTIuNjQzNkMxNS40ODE4IDExLjI4MjcgMTYuMDA0IDkuNjQ5ODkgMTYgNy45NzZDMTUuOTUxIDMuNTcyIDEyLjM4IDAgNy45NzYgMFpcIlxyXG5cdFx0XHRcdFx0XHRcdFx0ICBmaWxsPVwiIzAwN0NCQVwiPjwvcGF0aD5cclxuXHRcdFx0XHRcdFx0PC9zdmc+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJoZWxwLWNlbnRlci1saW5rLWxhYmVsXCI+e3sgYm94LmxhYmVsX2dpdCB9fTwvZGl2PlxyXG5cdFx0XHRcdDwvYT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L3RlbXBsYXRlPlxyXG5cdDwvU2lkZUJhckJveGVzPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuY29uc3QgeyBTaWRlQmFyQm94ZXMgfSA9IEpldEZCQ29tcG9uZW50cztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRuYW1lOiAnU2V0dGluZ3NTaWRlQmFyJyxcclxuXHRjb21wb25lbnRzOiB7IFNpZGVCYXJCb3hlcyB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG5cclxuLmpldC1mb3JtLWJ1aWxkZXItcGFnZSB7XHJcblxyXG5cdCZfX2Jhbm5lci51c2VmdWwge1xyXG5cdFx0cGFkZGluZzogMjBweCAzMHB4O1xyXG5cdH1cclxuXHJcblx0Jl9fcGFuZWwuaGVscCB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHJcblx0XHRAbWVkaWEgKG1heC13aWR0aDogMTE0MHB4KSB7XHJcblx0XHRcdHdpZHRoOiBjYWxjKDEwMCUgLyAyKTtcclxuXHRcdH1cclxuXHJcblx0XHQuamV0LWZvcm0tYnVpbGRlci1wYWdlX19wYW5lbC1jb250ZW50IHtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdFx0bWFyZ2luLXRvcDogMTJweDtcclxuXHRcdFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNEQ0RDREQ7XHJcblx0XHRcdHBhZGRpbmctdG9wOiAyM3B4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5oZWxwLWNlbnRlci1saW5rIHtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cdFx0XHRtYXJnaW4tYm90dG9tOiAyMnB4O1xyXG5cclxuXHRcdFx0JjpsYXN0LWNoaWxkIHtcclxuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRhIHtcclxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0XHRsaW5lLWhlaWdodDogMThweDtcclxuXHRcdFx0XHRjb2xvcjogIzAwN0NCQTtcclxuXHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG5cdFx0XHRcdCY6aG92ZXIge1xyXG5cdFx0XHRcdFx0Y29sb3I6ICMwNjZFQTI7XHJcblx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5oZWxwLWNlbnRlci1saW5rLWljb24ge1xyXG5cdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAyOHB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcblx0PGRpdj5cclxuXHRcdDxDeFZ1aUNvbGxhcHNlTWluaVxyXG5cdFx0XHR3aXRoLXBhbmVsXHJcblx0XHRcdHYtZm9yPVwiKCB0YWIsIGluZGV4ICkgaW4gY2FwdGNoYVwiXHJcblx0XHRcdDppY29uPVwidGFiLmljb25cIlxyXG5cdFx0XHQ6bGFiZWw9XCJnZXRUYWJUaXRsZSggdGFiIClcIlxyXG5cdFx0XHQ6a2V5PVwidGFiLmNvbXBvbmVudC5uYW1lXCJcclxuXHRcdFx0OmRpc2FibGVkPVwidGFiLmRpc2FibGVkXCJcclxuXHRcdFx0OmluaXRpYWwtYWN0aXZlPVwiaXNBY3RpdmUoIHRhYi5jb21wb25lbnQubmFtZSApXCJcclxuXHRcdFx0QGNoYW5nZT1cIm9uQ2hhbmdlQWN0aXZlKCAkZXZlbnQsIHRhYi5jb21wb25lbnQubmFtZSApXCJcclxuXHRcdD5cclxuXHRcdFx0PGtlZXAtYWxpdmU+XHJcblx0XHRcdFx0PGNvbXBvbmVudFxyXG5cdFx0XHRcdFx0di1iaW5kOmlzPVwidGFiLmNvbXBvbmVudFwiXHJcblx0XHRcdFx0XHRyZWY9XCJjYXB0Y2hhXCJcclxuXHRcdFx0XHRcdDppbmNvbWluZz1cImdldEluY29taW5nQ2FwdGNoYSggdGFiLmNvbXBvbmVudC5uYW1lIClcIlxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwva2VlcC1hbGl2ZT5cclxuXHRcdFx0PGN4LXZ1aS1idXR0b25cclxuXHRcdFx0XHRidXR0b24tc3R5bGU9XCJhY2NlbnRcIlxyXG5cdFx0XHRcdDpsb2FkaW5nPVwibG9hZGluZ0dhdGV3YXlzWyB0YWIuY29tcG9uZW50Lm5hbWUgXVwiXHJcblx0XHRcdFx0QGNsaWNrPVwib25TYXZlR2F0ZXdheSggaW5kZXgsIHRhYi5jb21wb25lbnQubmFtZSApXCJcclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxzcGFuIHNsb3Q9XCJsYWJlbFwiPlNhdmU8L3NwYW4+XHJcblx0XHRcdDwvY3gtdnVpLWJ1dHRvbj5cclxuXHRcdDwvQ3hWdWlDb2xsYXBzZU1pbmk+XHJcblx0PC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cclxuaW1wb3J0IHJlQ0FQVENIQXYzIGZyb20gJy4uLy4uL2NhcHRjaGEvZ29vZ2xlJztcclxuaW1wb3J0IGhDYXB0Y2hhIGZyb20gJy4uLy4uL2NhcHRjaGEvaENhcHRjaGEnO1xyXG5pbXBvcnQgZnJpZW5kbHlDYXB0Y2hhIGZyb20gJy4uLy4uL2NhcHRjaGEvZnJpZW5kbHlDYXB0Y2hhJztcclxuaW1wb3J0IHR1cm5zdGlsZSBmcm9tICcuLi8uLi9jYXB0Y2hhL3R1cm5zdGlsZSc7XHJcblxyXG5jb25zdCB7IGFwcGx5RmlsdGVycyB9ID0gd3AuaG9va3M7XHJcblxyXG5jb25zdCB7IFNhdmVUYWJCeUFqYXgsIEdldEluY29taW5nIH0gPSB3aW5kb3cuSmV0RkJNaXhpbnM7XHJcbmNvbnN0IHsgQ3hWdWlDb2xsYXBzZU1pbmkgfSAgICAgICAgICA9IHdpbmRvdy5KZXRGQkNvbXBvbmVudHM7XHJcblxyXG53aW5kb3cuamZiRXZlbnRCdXMgPSB3aW5kb3cuamZiRXZlbnRCdXMgfHwgbmV3IFZ1ZSgge30gKTtcclxuXHJcbmNvbnN0IGNhcHRjaGFUYWJzID0gYXBwbHlGaWx0ZXJzKCAnamV0LmZiLnJlZ2lzdGVyLmNhcHRjaGEnLCBbXHJcblx0cmVDQVBUQ0hBdjMsXHJcblx0aENhcHRjaGEsXHJcblx0ZnJpZW5kbHlDYXB0Y2hhLFxyXG5cdHR1cm5zdGlsZSxcclxuXSApO1xyXG5cclxubGV0IHJlcXVlc3RGdW5jID0gKCkgPT4ge1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdG5hbWU6ICdjYXB0Y2hhLXRhYicsXHJcblx0cHJvcHM6IHtcclxuXHRcdGluY29taW5nOiB7XHJcblx0XHRcdHR5cGU6IE9iamVjdCxcclxuXHRcdFx0ZGVmYXVsdDoge30sXHJcblx0XHR9LFxyXG5cdFx0aW5uZXJTbHVnczogQXJyYXksXHJcblx0fSxcclxuXHRjb21wb25lbnRzOiB7IEN4VnVpQ29sbGFwc2VNaW5pIH0sXHJcblx0bWl4aW5zOiBbIFNhdmVUYWJCeUFqYXggXSxcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0Y2FwdGNoYTogY2FwdGNoYVRhYnMsXHJcblx0XHRcdHN0b3JhZ2U6IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCB0aGlzLmluY29taW5nICkgKSxcclxuXHRcdFx0c2V0dGluZ3M6IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KFxyXG5cdFx0XHRcdHdpbmRvdy5KZXRGQlBhZ2VDb25maWdbICdjYXB0Y2hhLXRhYi1jb25maWcnIF0sXHJcblx0XHRcdCkgKSxcclxuXHRcdFx0YWN0aXZlR2F0ZXdheXNUYWJzOiBbXSxcclxuXHRcdFx0bG9hZGluZ0dhdGV3YXlzOiB7fSxcclxuXHRcdH07XHJcblx0fSxcclxuXHRjcmVhdGVkKCkge1xyXG5cdFx0amZiRXZlbnRCdXMuJG9uKCAncmVxdWVzdC1zdGF0ZScsIHByb3BzID0+IHtcclxuXHRcdFx0Y29uc3QgeyBzdGF0ZSwgc2x1ZyB9ID0gcHJvcHM7XHJcblx0XHRcdHRoaXMuJHNldCggdGhpcy5sb2FkaW5nR2F0ZXdheXMsIHNsdWcsIHN0YXRlID09PSAnYmVnaW4nICk7XHJcblx0XHR9ICk7XHJcblxyXG5cdFx0amZiRXZlbnRCdXMuJG9uKCAnY2hhbmdlLXRhYicsIChcclxuXHRcdFx0ZnVuY3Rpb24gKCB7IHNsdWcgfSApIHtcclxuXHRcdFx0XHRpZiAoIHNsdWcgIT09IHRoaXMuJG9wdGlvbnMubmFtZSApIHtcclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyMnICsgWyB0aGlzLiRvcHRpb25zLm5hbWUsIC4uLnRoaXMuYWN0aXZlR2F0ZXdheXNUYWJzIF0uam9pbiggJ19fJyApO1xyXG5cdFx0XHR9XHJcblx0XHQpLmJpbmQoIHRoaXMgKSApO1xyXG5cclxuXHRcdHRoaXMuYWN0aXZlR2F0ZXdheXNUYWJzID0gdGhpcy5pbm5lclNsdWdzO1xyXG5cclxuXHRcdHJlcXVlc3RGdW5jID0gXy5kZWJvdW5jZSggKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnNhdmVCeUFqYXgoIHRoaXMsIHRoaXMuJG9wdGlvbnMubmFtZSApO1xyXG5cdFx0fSwgMTAwMCApO1xyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0Z2V0SW5jb21pbmdDYXB0Y2hhKCBzbHVnICkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5pbmNvbWluZz8uWyBzbHVnIF0gPz8ge307XHJcblx0XHR9LFxyXG5cdFx0Z2V0VGFiVGl0bGUoIHRhYiApIHtcclxuXHRcdFx0Y29uc3QgeyB0aXRsZSB9ID0gdGFiO1xyXG5cclxuXHRcdFx0aWYgKCB0aXRsZT8ubGVuZ3RoICkge1xyXG5cdFx0XHRcdHJldHVybiB0aXRsZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Y29uc3QgeyBuYW1lIH0gPSB0YWIuY29tcG9uZW50O1xyXG5cdFx0XHRjb25zdCBpdGVtICAgICA9IHRoaXMuc2V0dGluZ3MuZmluZCggKCB7IHZhbHVlIH0gKSA9PiB2YWx1ZSA9PT0gbmFtZSApO1xyXG5cclxuXHRcdFx0cmV0dXJuIGl0ZW0/LmxhYmVsIHx8ICdVbmRlZmluZWQgY2FwdGNoYSB0aXRsZSc7XHJcblx0XHR9LFxyXG5cdFx0b25DaGFuZ2VBY3RpdmUoIGlzQWN0aXZlLCB0YWJOYW1lICkge1xyXG5cdFx0XHRsZXQgWyBoYXNoLCAuLi5vdGhlcnMgXSA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoICcjJywgJycgKS5zcGxpdCggJ19fJyApO1xyXG5cclxuXHRcdFx0aWYgKCAhaXNBY3RpdmUgKSB7XHJcblx0XHRcdFx0b3RoZXJzID0gb3RoZXJzLmZpbHRlciggZ2F0ZXdheVRhYiA9PiAoXHJcblx0XHRcdFx0XHR0YWJOYW1lICE9PSBnYXRld2F5VGFiIHx8IGlzQWN0aXZlXHJcblx0XHRcdFx0KSApO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdG90aGVycy5wdXNoKCB0YWJOYW1lICk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5jaGFuZ2VHYXRld2F5c1RhYnMoIG90aGVycyApO1xyXG5cclxuXHRcdFx0d2luZG93LmxvY2F0aW9uLmhhc2ggPSBbIHRoaXMuJG9wdGlvbnMubmFtZSwgLi4ub3RoZXJzIF0uam9pbiggJ19fJyApO1xyXG5cdFx0fSxcclxuXHRcdGNoYW5nZUdhdGV3YXlzVGFicyggdGFicyApIHtcclxuXHRcdFx0dGhpcy5hY3RpdmVHYXRld2F5c1RhYnMgPSB0YWJzO1xyXG5cdFx0fSxcclxuXHRcdGlzQWN0aXZlKCB0YWJOYW1lICkge1xyXG5cdFx0XHRyZXR1cm4gQm9vbGVhbiggdGhpcy5hY3RpdmVHYXRld2F5c1RhYnM/LmluY2x1ZGVzKCB0YWJOYW1lICkgKTtcclxuXHRcdH0sXHJcblx0XHRjaGFuZ2VWYWwoIG5hbWUsIHZhbHVlICkge1xyXG5cdFx0XHR0aGlzLiRzZXQoIHRoaXMuc3RvcmFnZSwgbmFtZSwgdmFsdWUgKTtcclxuXHJcblx0XHRcdHJlcXVlc3RGdW5jKCk7XHJcblx0XHR9LFxyXG5cdFx0b25TYXZlR2F0ZXdheSggaW5kZXhUYWIsIHRhYlNsdWcgKSB7XHJcblx0XHRcdGNvbnN0IGN1cnJlbnQgPSB0aGlzLiRyZWZzLmNhcHRjaGFbIGluZGV4VGFiIF07XHJcblxyXG5cdFx0XHR0aGlzLnNhdmVCeUFqYXgoIGN1cnJlbnQsIHRhYlNsdWcgKTtcclxuXHRcdH0sXHJcblx0XHRnZXRBamF4T2JqZWN0KCBjdXJyZW50VGFiLCB0YWJTbHVnICkge1xyXG5cdFx0XHRjb25zdCBhamF4UmVxdWVzdCA9IHtcclxuXHRcdFx0XHR1cmw6IHdpbmRvdy5hamF4dXJsLFxyXG5cdFx0XHRcdHR5cGU6ICdQT1NUJyxcclxuXHRcdFx0XHRkYXRhVHlwZTogJ2pzb24nLFxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0Y29uc3QgY3VycmVudCA9IGN1cnJlbnRUYWIuZ2V0UmVxdWVzdE9uU2F2ZSgpO1xyXG5cclxuXHRcdFx0YWpheFJlcXVlc3QuZGF0YSA9IHtcclxuXHRcdFx0XHRhY3Rpb246IGBqZXRfZmJfc2F2ZV90YWJfXyR7IHRoaXMuJG9wdGlvbnMubmFtZSB9YCxcclxuXHRcdFx0XHQuLi4oXHJcblx0XHRcdFx0XHR0YWJTbHVnID09PSB0aGlzLiRvcHRpb25zLm5hbWUgPyBjdXJyZW50LmRhdGEgOiB7XHJcblx0XHRcdFx0XHRcdFsgdGFiU2x1ZyBdOiBjdXJyZW50LmRhdGEsXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0KSxcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdGlmICggd2luZG93Py5KZXRGQlBhZ2VDb25maWdQYWNrYWdlPy5ub25jZSApIHtcclxuXHRcdFx0XHRhamF4UmVxdWVzdC5kYXRhLl9ub25jZSA9IHdpbmRvdy5KZXRGQlBhZ2VDb25maWdQYWNrYWdlLm5vbmNlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gYWpheFJlcXVlc3Q7XHJcblx0XHR9LFxyXG5cdFx0Z2V0UmVxdWVzdE9uU2F2ZSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRkYXRhOiB7IC4uLnRoaXMuc3RvcmFnZSB9LFxyXG5cdFx0XHR9O1xyXG5cdFx0fSxcclxuXHR9LFxyXG59O1xyXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XHJcblx0PGN4LXZ1aS1pbnB1dFxyXG5cdFx0OmxhYmVsPVwibGFiZWwuYXBpX2tleVwiXHJcblx0XHQ6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJyBdXCJcclxuXHRcdDpkZXNjcmlwdGlvbj0nYCR7IGhlbHAuYXBpUHJlZiB9IDxhIGhyZWY9XCIkeyBoZWxwLmFwaUxpbmsgfVwiIHRhcmdldD1cIl9ibGFua1wiPiR7IGhlbHAuYXBpTGlua0xhYmVsIH08L2E+YCdcclxuXHRcdDpzaXplPVwiJ2Z1bGx3aWR0aCdcIlxyXG5cdFx0di1tb2RlbD1cImFwaV9rZXlcIlxyXG5cdC8+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cclxuaW1wb3J0IHtcclxuXHRoZWxwLFxyXG5cdGxhYmVsXHJcbn0gZnJvbSBcIi4vc291cmNlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0bmFtZTogJ2dldC1yZXNwb25zZS10YWInLFxyXG5cdHByb3BzOiB7XHJcblx0XHRpbmNvbWluZzoge1xyXG5cdFx0XHR0eXBlOiBPYmplY3QsXHJcblx0XHRcdGRlZmF1bHQ6IHt9LFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdGRhdGEoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRsYWJlbCwgaGVscCxcclxuXHRcdFx0YXBpX2tleTogJycsXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0Y3JlYXRlZCgpIHtcclxuXHRcdHRoaXMuYXBpX2tleSA9IHRoaXMuaW5jb21pbmcuYXBpX2tleSB8fCAnJ1xyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0Z2V0UmVxdWVzdE9uU2F2ZSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRhcGlfa2V5OiB0aGlzLmFwaV9rZXksXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxyXG5cdDxjeC12dWktaW5wdXRcclxuXHRcdDpsYWJlbD1cImxhYmVsLmFwaV9rZXlcIlxyXG5cdFx0OndyYXBwZXItY3NzPVwiWyAnZXF1YWx3aWR0aCcgXVwiXHJcblx0XHQ6ZGVzY3JpcHRpb249J2AkeyBoZWxwLmFwaVByZWYgfSA8YSBocmVmPVwiJHsgaGVscC5hcGlMaW5rIH1cIiB0YXJnZXQ9XCJfYmxhbmtcIj4keyBoZWxwLmFwaUxpbmtMYWJlbCB9PC9hPmAnXHJcblx0XHQ6c2l6ZT1cIidmdWxsd2lkdGgnXCJcclxuXHRcdHYtbW9kZWw9XCJhcGlfa2V5XCJcclxuXHQvPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHJcbmltcG9ydCB7XHJcblx0aGVscCxcclxuXHRsYWJlbFxyXG59IGZyb20gXCIuL3NvdXJjZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdG5hbWU6ICdtYWlsY2hpbXAtdGFiJyxcclxuXHRwcm9wczoge1xyXG5cdFx0aW5jb21pbmc6IHtcclxuXHRcdFx0dHlwZTogT2JqZWN0LFxyXG5cdFx0XHRkZWZhdWx0OiB7fSxcclxuXHRcdH0sXHJcblx0fSxcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bGFiZWwsIGhlbHAsXHJcblx0XHRcdGFwaV9rZXk6ICcnLFxyXG5cdFx0fTtcclxuXHR9LFxyXG5cdGNyZWF0ZWQoKSB7XHJcblx0XHR0aGlzLmFwaV9rZXkgPSB0aGlzLmluY29taW5nLmFwaV9rZXkgfHwgJydcclxuXHR9LFxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdGdldFJlcXVlc3RPblNhdmUoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0YXBpX2tleTogdGhpcy5hcGlfa2V5LFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cclxuXHQ8ZGl2PlxyXG5cdFx0PGN4LXZ1aS1zd2l0Y2hlclxyXG5cdFx0XHRuYW1lPVwiZW5hYmxlX2Rldl9tb2RlXCJcclxuXHRcdFx0OndyYXBwZXItY3NzPVwiWyAnZXF1YWx3aWR0aCcgXVwiXHJcblx0XHRcdDpsYWJlbD1cImxvYWRpbmcuZW5hYmxlX2Rldl9tb2RlID8gYCR7bGFiZWwuZW5hYmxlX2Rldl9tb2RlfSAobG9hZGluZy4uLilgIDogbGFiZWwuZW5hYmxlX2Rldl9tb2RlXCJcclxuXHRcdFx0OmRlc2NyaXB0aW9uPVwiaGVscC5lbmFibGVfZGV2X21vZGVcIlxyXG5cdFx0XHQ6dmFsdWU9XCJzdG9yYWdlLmhhc093blByb3BlcnR5KCAnZW5hYmxlX2Rldl9tb2RlJyApID8gc3RvcmFnZS5lbmFibGVfZGV2X21vZGUgOiBmYWxzZVwiXHJcblx0XHRcdDpkaXNhYmxlZD1cImlzTG9hZGluZ1wiXHJcblx0XHRcdEBpbnB1dD1cImNoYW5nZVZhbCggJ2VuYWJsZV9kZXZfbW9kZScsICRldmVudCApXCJcclxuXHRcdD48L2N4LXZ1aS1zd2l0Y2hlcj5cclxuXHRcdDxjeC12dWktc3dpdGNoZXJcclxuXHRcdFx0bmFtZT1cImNsZWFyX29uX3VuaW5zdGFsbFwiXHJcblx0XHRcdDp3cmFwcGVyLWNzcz1cIlsgJ2VxdWFsd2lkdGgnIF1cIlxyXG5cdFx0XHQ6bGFiZWw9XCJsb2FkaW5nLmNsZWFyX29uX3VuaW5zdGFsbCA/IGAke2xhYmVsLmNsZWFyX29uX3VuaW5zdGFsbH0gKGxvYWRpbmcuLi4pYCA6IGxhYmVsLmNsZWFyX29uX3VuaW5zdGFsbFwiXHJcblx0XHRcdDpkZXNjcmlwdGlvbj1cImhlbHAuY2xlYXJfb25fdW5pbnN0YWxsXCJcclxuXHRcdFx0OnZhbHVlPVwic3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSggJ2NsZWFyX29uX3VuaW5zdGFsbCcgKSA/IHN0b3JhZ2UuY2xlYXJfb25fdW5pbnN0YWxsIDogZmFsc2VcIlxyXG5cdFx0XHQ6ZGlzYWJsZWQ9XCJpc0xvYWRpbmdcIlxyXG5cdFx0XHRAaW5wdXQ9XCJjaGFuZ2VWYWwoICdjbGVhcl9vbl91bmluc3RhbGwnLCAkZXZlbnQgKVwiXHJcblx0XHQ+PC9jeC12dWktc3dpdGNoZXI+XHJcblx0XHQ8Y3gtdnVpLWNvbXBvbmVudC13cmFwcGVyXHJcblx0XHRcdDpsYWJlbD1cIl9fKCAnRm9ybSBBY2Nlc3NpYmlsaXR5JywgJ2pldC1mb3JtLWJ1aWxkZXInIClcIlxyXG5cdFx0XHQ6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJyBdXCJcclxuXHRcdC8+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiY3gtdnVpLWlubmVyLXBhbmVsXCI+XHJcblx0XHRcdDxjeC12dWktc3dpdGNoZXJcclxuXHRcdFx0XHRuYW1lPVwiZGlzYWJsZV9uZXh0X2J1dHRvblwiXHJcblx0XHRcdFx0OndyYXBwZXItY3NzPVwiWyAnZXF1YWx3aWR0aCcgXVwiXHJcblx0XHRcdFx0OmxhYmVsPVwibG9hZGluZy5kaXNhYmxlX25leHRfYnV0dG9uID8gYCR7bGFiZWwuZGlzYWJsZV9uZXh0X2J1dHRvbn0gKGxvYWRpbmcuLi4pYCA6IGxhYmVsLmRpc2FibGVfbmV4dF9idXR0b25cIlxyXG5cdFx0XHRcdDpkZXNjcmlwdGlvbj1cImhlbHAuZGlzYWJsZV9uZXh0X2J1dHRvblwiXHJcblx0XHRcdFx0OnZhbHVlPVwic3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSggJ2Rpc2FibGVfbmV4dF9idXR0b24nICkgPyBzdG9yYWdlLmRpc2FibGVfbmV4dF9idXR0b24gOiB0cnVlXCJcclxuXHRcdFx0XHQ6ZGlzYWJsZWQ9XCJpc0xvYWRpbmdcIlxyXG5cdFx0XHRcdEBpbnB1dD1cImNoYW5nZVZhbCggJ2Rpc2FibGVfbmV4dF9idXR0b24nLCAkZXZlbnQgKVwiXHJcblx0XHRcdD48L2N4LXZ1aS1zd2l0Y2hlcj5cclxuXHRcdFx0PGN4LXZ1aS1zd2l0Y2hlclxyXG5cdFx0XHRcdG5hbWU9XCJzY3JvbGxfb25fbmV4dFwiXHJcblx0XHRcdFx0OndyYXBwZXItY3NzPVwiWyAnZXF1YWx3aWR0aCcgXVwiXHJcblx0XHRcdFx0OmxhYmVsPVwibG9hZGluZy5zY3JvbGxfb25fbmV4dCA/IGAke2xhYmVsLnNjcm9sbF9vbl9uZXh0fSAobG9hZGluZy4uLilgIDogbGFiZWwuc2Nyb2xsX29uX25leHRcIlxyXG5cdFx0XHRcdDpkZXNjcmlwdGlvbj1cImhlbHAuc2Nyb2xsX29uX25leHRcIlxyXG5cdFx0XHRcdDp2YWx1ZT1cInN0b3JhZ2UuaGFzT3duUHJvcGVydHkoICdzY3JvbGxfb25fbmV4dCcgKSA/IHN0b3JhZ2Uuc2Nyb2xsX29uX25leHQgOiBmYWxzZVwiXHJcblx0XHRcdFx0OmRpc2FibGVkPVwiaXNMb2FkaW5nXCJcclxuXHRcdFx0XHRAaW5wdXQ9XCJjaGFuZ2VWYWwoICdzY3JvbGxfb25fbmV4dCcsICRldmVudCApXCJcclxuXHRcdFx0PjwvY3gtdnVpLXN3aXRjaGVyPlxyXG5cdFx0XHQ8Y3gtdnVpLXN3aXRjaGVyXHJcblx0XHRcdFx0bmFtZT1cImF1dG9fZm9jdXNcIlxyXG5cdFx0XHRcdDp3cmFwcGVyLWNzcz1cIlsgJ2VxdWFsd2lkdGgnIF1cIlxyXG5cdFx0XHRcdDpsYWJlbD1cImxvYWRpbmcuYXV0b19mb2N1cyA/IGAke2xhYmVsLmF1dG9fZm9jdXN9IChsb2FkaW5nLi4uKWAgOiBsYWJlbC5hdXRvX2ZvY3VzXCJcclxuXHRcdFx0XHQ6ZGVzY3JpcHRpb249XCJoZWxwLmF1dG9fZm9jdXNcIlxyXG5cdFx0XHRcdDp2YWx1ZT1cInN0b3JhZ2UuaGFzT3duUHJvcGVydHkoICdhdXRvX2ZvY3VzJyApID8gc3RvcmFnZS5hdXRvX2ZvY3VzIDogZmFsc2VcIlxyXG5cdFx0XHRcdDpkaXNhYmxlZD1cImlzTG9hZGluZ1wiXHJcblx0XHRcdFx0QGlucHV0PVwiY2hhbmdlVmFsKCAnYXV0b19mb2N1cycsICRldmVudCApXCJcclxuXHRcdFx0PjwvY3gtdnVpLXN3aXRjaGVyPlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cclxuaW1wb3J0IHtcclxuXHRoZWxwLFxyXG5cdGxhYmVsLFxyXG59IGZyb20gJy4vc291cmNlJztcclxuXHJcbmNvbnN0IHsgU2F2ZVRhYkJ5QWpheCwgaTE4biB9ID0gd2luZG93LkpldEZCTWl4aW5zO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdG5hbWU6ICdvcHRpb25zLXRhYicsXHJcblx0cHJvcHM6IHtcclxuXHRcdGluY29taW5nOiB7XHJcblx0XHRcdHR5cGU6IE9iamVjdCxcclxuXHRcdFx0ZGVmYXVsdDoge30sXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0bWl4aW5zOiBbIFNhdmVUYWJCeUFqYXgsIGkxOG4gXSxcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bGFiZWwsIGhlbHAsXHJcblx0XHRcdHN0b3JhZ2U6IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCB0aGlzLmluY29taW5nICkgKSxcclxuXHRcdFx0aXNMb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0bG9hZGluZzoge30sXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0Y3JlYXRlZCgpIHtcclxuXHRcdGpmYkV2ZW50QnVzLiRvbiggJ3JlcXVlc3Qtc3RhdGUnLCB0aGlzLm9uQ2hhbmdlU3RhdGUuYmluZCggdGhpcyApICk7XHJcblx0fSxcclxuXHRtZXRob2RzOiB7XHJcblx0XHRnZXRSZXF1ZXN0T25TYXZlKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGRhdGE6IHsgLi4udGhpcy5zdG9yYWdlIH0sXHJcblx0XHRcdH07XHJcblx0XHR9LFxyXG5cdFx0b25DaGFuZ2VTdGF0ZSggeyBzdGF0ZSwgc2x1ZyB9ICkge1xyXG5cdFx0XHRpZiAoICdvcHRpb25zLXRhYicgIT09IHNsdWcgKSB7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoICdlbmQnID09PSBzdGF0ZSApIHtcclxuXHRcdFx0XHR0aGlzLmxvYWRpbmcgPSB7fTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy4kc2V0KCB0aGlzLCAnaXNMb2FkaW5nJywgc3RhdGUgPT09ICdiZWdpbicgKTtcclxuXHRcdH0sXHJcblx0XHRjaGFuZ2VWYWwoIG5hbWUsIHZhbHVlICkge1xyXG5cdFx0XHRpZiAoIHRoaXMuaXNMb2FkaW5nICkge1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLiRzZXQoIHRoaXMuc3RvcmFnZSwgbmFtZSwgdmFsdWUgKTtcclxuXHRcdFx0dGhpcy4kc2V0KCB0aGlzLmxvYWRpbmcsIG5hbWUsIHRydWUgKTtcclxuXHJcblx0XHRcdHRoaXMuc2F2ZUJ5QWpheCggdGhpcywgdGhpcy4kb3B0aW9ucy5uYW1lICk7XHJcblx0XHR9LFxyXG5cdH0sXHJcbn07XHJcblxyXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XHJcblx0PHNlY3Rpb24+XHJcblx0XHQ8Y3gtdnVpLXN3aXRjaGVyXHJcblx0XHRcdG5hbWU9XCJ1c2VfZ2F0ZXdheXNcIlxyXG5cdFx0XHQ6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJyBdXCJcclxuXHRcdFx0OmxhYmVsPVwibGFiZWwudXNlX2dhdGV3YXlzXCJcclxuXHRcdFx0OmRlc2NyaXB0aW9uPVwiaGVscC51c2VfZ2F0ZXdheXNcIlxyXG5cdFx0XHQ6dmFsdWU9XCJzdG9yYWdlLnVzZV9nYXRld2F5c1wiXHJcblx0XHRcdEBpbnB1dD1cImNoYW5nZVZhbCggJ3VzZV9nYXRld2F5cycsICRldmVudCApXCJcclxuXHRcdD48L2N4LXZ1aS1zd2l0Y2hlcj5cclxuXHRcdDxjeC12dWktc3dpdGNoZXJcclxuXHRcdFx0di1pZj1cInN0b3JhZ2UudXNlX2dhdGV3YXlzXCJcclxuXHRcdFx0bmFtZT1cImVuYWJsZV90ZXN0X21vZGVcIlxyXG5cdFx0XHQ6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJyBdXCJcclxuXHRcdFx0OmRlc2NyaXB0aW9uPVwiaGVscC5lbmFibGVfdGVzdF9tb2RlXCJcclxuXHRcdFx0OmxhYmVsPVwibGFiZWwuZW5hYmxlX3Rlc3RfbW9kZVwiXHJcblx0XHRcdDp2YWx1ZT1cInN0b3JhZ2UuZW5hYmxlX3Rlc3RfbW9kZVwiXHJcblx0XHRcdEBpbnB1dD1cImNoYW5nZVZhbCggJ2VuYWJsZV90ZXN0X21vZGUnLCAkZXZlbnQgKVwiXHJcblx0XHQ+PC9jeC12dWktc3dpdGNoZXI+XHJcblx0XHQ8dGVtcGxhdGUgdi1pZj1cInN0b3JhZ2UudXNlX2dhdGV3YXlzXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjeC12dWktaW5uZXItcGFuZWxcIj5cclxuXHRcdFx0XHQ8Q3hWdWlDb2xsYXBzZU1pbmlcclxuXHRcdFx0XHRcdHdpdGgtcGFuZWxcclxuXHRcdFx0XHRcdHYtZm9yPVwiKCB0YWIsIGluZGV4ICkgaW4gZ2F0ZXdheXNcIlxyXG5cdFx0XHRcdFx0Omljb249XCJ0YWIuaWNvblwiXHJcblx0XHRcdFx0XHQ6bGFiZWw9XCJ0YWIudGl0bGVcIlxyXG5cdFx0XHRcdFx0OmtleT1cInRhYi5jb21wb25lbnQubmFtZVwiXHJcblx0XHRcdFx0XHQ6ZGlzYWJsZWQ9XCJ0YWIuZGlzYWJsZWRcIlxyXG5cdFx0XHRcdFx0OmluaXRpYWwtYWN0aXZlPVwiaXNBY3RpdmUoIHRhYi5jb21wb25lbnQubmFtZSApXCJcclxuXHRcdFx0XHRcdEBjaGFuZ2U9XCJvbkNoYW5nZUFjdGl2ZSggJGV2ZW50LCB0YWIuY29tcG9uZW50Lm5hbWUgKVwiXHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PGtlZXAtYWxpdmU+XHJcblx0XHRcdFx0XHRcdDxjb21wb25lbnRcclxuXHRcdFx0XHRcdFx0XHR2LWJpbmQ6aXM9XCJ0YWIuY29tcG9uZW50XCJcclxuXHRcdFx0XHRcdFx0XHRyZWY9XCJnYXRld2F5c1wiXHJcblx0XHRcdFx0XHRcdFx0OmluY29taW5nPVwiZ2V0SW5jb21pbmcoIHRhYi5jb21wb25lbnQubmFtZSApXCJcclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwva2VlcC1hbGl2ZT5cclxuXHRcdFx0XHRcdDxjeC12dWktYnV0dG9uXHJcblx0XHRcdFx0XHRcdGJ1dHRvbi1zdHlsZT1cImFjY2VudFwiXHJcblx0XHRcdFx0XHRcdDpsb2FkaW5nPVwibG9hZGluZ0dhdGV3YXlzWyB0YWIuY29tcG9uZW50Lm5hbWUgXVwiXHJcblx0XHRcdFx0XHRcdEBjbGljaz1cIm9uU2F2ZUdhdGV3YXkoIGluZGV4LCB0YWIuY29tcG9uZW50Lm5hbWUgKVwiXHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxzcGFuIHNsb3Q9XCJsYWJlbFwiPlNhdmU8L3NwYW4+XHJcblx0XHRcdFx0XHQ8L2N4LXZ1aS1idXR0b24+XHJcblx0XHRcdFx0PC9DeFZ1aUNvbGxhcHNlTWluaT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L3RlbXBsYXRlPlxyXG5cdDwvc2VjdGlvbj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCB7XHJcblx0aGVscCxcclxuXHRsYWJlbCxcclxufSBmcm9tIFwiLi9zb3VyY2VcIjtcclxuaW1wb3J0ICogYXMgcGF5cGFsIGZyb20gJy4uLy4uL2dhdGV3YXlzL3BheXBhbCc7XHJcblxyXG5jb25zdCB7IGFwcGx5RmlsdGVycyB9ID0gd3AuaG9va3M7XHJcblxyXG5jb25zdCB7IFNhdmVUYWJCeUFqYXgsIEdldEluY29taW5nIH0gPSB3aW5kb3cuSmV0RkJNaXhpbnM7XHJcbmNvbnN0IHsgQ3hWdWlDb2xsYXBzZU1pbmkgfSA9IHdpbmRvdy5KZXRGQkNvbXBvbmVudHM7XHJcblxyXG53aW5kb3cuamZiRXZlbnRCdXMgPSB3aW5kb3cuamZiRXZlbnRCdXMgfHwgbmV3IFZ1ZSgge30gKTtcclxuXHJcbmNvbnN0IGdhdGV3YXlzVGFicyA9IGFwcGx5RmlsdGVycyggJ2pldC5mYi5yZWdpc3Rlci5nYXRld2F5cycsIFtcclxuXHRwYXlwYWwsXHJcbl0gKTtcclxuXHJcbmxldCByZXF1ZXN0RnVuYyA9ICgpID0+IHtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRuYW1lOiAncGF5bWVudHMtZ2F0ZXdheXMnLFxyXG5cdHByb3BzOiB7XHJcblx0XHRpbmNvbWluZzoge1xyXG5cdFx0XHR0eXBlOiBPYmplY3QsXHJcblx0XHRcdGRlZmF1bHQoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHt9O1xyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdGlubmVyU2x1Z3M6IEFycmF5LFxyXG5cdH0sXHJcblx0Y29tcG9uZW50czogeyBDeFZ1aUNvbGxhcHNlTWluaSB9LFxyXG5cdG1peGluczogWyBTYXZlVGFiQnlBamF4LCBHZXRJbmNvbWluZyBdLFxyXG5cdGRhdGEoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRsYWJlbCwgaGVscCxcclxuXHRcdFx0c3RvcmFnZTogSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIHRoaXMuaW5jb21pbmcgKSApLFxyXG5cdFx0XHRnYXRld2F5czogZ2F0ZXdheXNUYWJzLFxyXG5cdFx0XHRsb2FkaW5nR2F0ZXdheXM6IHt9LFxyXG5cdFx0XHRhY3RpdmVHYXRld2F5c1RhYnM6IFtdLFxyXG5cdFx0fTtcclxuXHR9LFxyXG5cdGNyZWF0ZWQoKSB7XHJcblx0XHRqZmJFdmVudEJ1cy4kb24oICdyZXF1ZXN0LXN0YXRlJywgcHJvcHMgPT4ge1xyXG5cdFx0XHRjb25zdCB7IHN0YXRlLCBzbHVnIH0gPSBwcm9wcztcclxuXHRcdFx0dGhpcy4kc2V0KCB0aGlzLmxvYWRpbmdHYXRld2F5cywgc2x1Zywgc3RhdGUgPT09ICdiZWdpbicgKTtcclxuXHRcdH0gKTtcclxuXHJcblxyXG5cdFx0amZiRXZlbnRCdXMuJG9uKCAnY2hhbmdlLXRhYicsICggZnVuY3Rpb24oIHsgc2x1ZyB9ICkge1xyXG5cdFx0XHRpZiAoIHNsdWcgIT09IHRoaXMuJG9wdGlvbnMubmFtZSApIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyMnICsgWyB0aGlzLiRvcHRpb25zLm5hbWUsIC4uLnRoaXMuYWN0aXZlR2F0ZXdheXNUYWJzIF0uam9pbiggJ19fJyApO1xyXG5cdFx0fSApLmJpbmQoIHRoaXMgKSApO1xyXG5cclxuXHRcdHRoaXMuYWN0aXZlR2F0ZXdheXNUYWJzID0gdGhpcy5pbm5lclNsdWdzO1xyXG5cclxuXHRcdHJlcXVlc3RGdW5jID0gXy5kZWJvdW5jZSggKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnNhdmVCeUFqYXgoIHRoaXMsIHRoaXMuJG9wdGlvbnMubmFtZSApXHJcblx0XHR9LCAxMDAwICk7XHJcblx0fSxcclxuXHRtZXRob2RzOiB7XHJcblx0XHRvbkNoYW5nZUFjdGl2ZSggaXNBY3RpdmUsIHRhYk5hbWUgKSB7XHJcblx0XHRcdGxldCBbIGhhc2gsIC4uLm90aGVycyBdID0gd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSggJyMnLCAnJyApLnNwbGl0KCAnX18nICk7XHJcblxyXG5cdFx0XHRpZiAoICEgaXNBY3RpdmUgKSB7XHJcblx0XHRcdFx0b3RoZXJzID0gb3RoZXJzLmZpbHRlciggZ2F0ZXdheVRhYiA9PiAoIHRhYk5hbWUgIT09IGdhdGV3YXlUYWIgfHwgaXNBY3RpdmUgKSApO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdG90aGVycy5wdXNoKCB0YWJOYW1lICk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5jaGFuZ2VHYXRld2F5c1RhYnMoIG90aGVycyApO1xyXG5cclxuXHRcdFx0d2luZG93LmxvY2F0aW9uLmhhc2ggPSBbIHRoaXMuJG9wdGlvbnMubmFtZSwgLi4ub3RoZXJzIF0uam9pbiggJ19fJyApO1xyXG5cdFx0fSxcclxuXHRcdGNoYW5nZUdhdGV3YXlzVGFicyggdGFicyApIHtcclxuXHRcdFx0dGhpcy5hY3RpdmVHYXRld2F5c1RhYnMgPSB0YWJzO1xyXG5cdFx0fSxcclxuXHRcdGlzQWN0aXZlKCB0YWJOYW1lICkge1xyXG5cdFx0XHRyZXR1cm4gQm9vbGVhbiggdGhpcy5hY3RpdmVHYXRld2F5c1RhYnMubGVuZ3RoICYmIHRoaXMuYWN0aXZlR2F0ZXdheXNUYWJzLmluY2x1ZGVzKCB0YWJOYW1lICkgKTtcclxuXHRcdH0sXHJcblx0XHRjaGFuZ2VWYWwoIG5hbWUsIHZhbHVlICkge1xyXG5cdFx0XHR0aGlzLiRzZXQoIHRoaXMuc3RvcmFnZSwgbmFtZSwgdmFsdWUgKTtcclxuXHJcblx0XHRcdHJlcXVlc3RGdW5jKCk7XHJcblx0XHR9LFxyXG5cdFx0b25TYXZlR2F0ZXdheSggaW5kZXhUYWIsIHRhYlNsdWcgKSB7XHJcblx0XHRcdGNvbnN0IGN1cnJlbnQgPSB0aGlzLiRyZWZzLmdhdGV3YXlzWyBpbmRleFRhYiBdO1xyXG5cclxuXHRcdFx0dGhpcy5zYXZlQnlBamF4KCBjdXJyZW50LCB0YWJTbHVnICk7XHJcblx0XHR9LFxyXG5cdFx0Z2V0UmVxdWVzdE9uU2F2ZSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRkYXRhOiB7IC4uLnRoaXMuc3RvcmFnZSB9LFxyXG5cdFx0XHR9O1xyXG5cdFx0fSxcclxuXHR9LFxyXG59XHJcblxyXG48L3NjcmlwdD4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmpmYi1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDJlbTtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuLmpmYi1jb250ZW50LW1haW4ge1xuICBmbGV4OiAxO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL1NldHRpbmdzUGFnZS52dWVcIixcIndlYnBhY2s6Ly8uLy4uL1NldHRpbmdzUGFnZS52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBa0tBO0VBQ0MsYUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtBQ2pLRDtBRG1LQztFQUNDLE9BQUE7QUNqS0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxyXFxuLmpmYi1jb250ZW50IHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtd3JhcDogd3JhcDtcXHJcXG5cXHRnYXA6IDJlbTtcXHJcXG5cXHRtYXJnaW4tdG9wOiAxZW07XFxyXFxuXFxyXFxuXFx0Ji1tYWluIHtcXHJcXG5cXHRcXHRmbGV4OiAxO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXCIsXCIuamZiLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogMmVtO1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbn1cXG4uamZiLWNvbnRlbnQtbWFpbiB7XFxuICBmbGV4OiAxO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5qZXQtZm9ybS1idWlsZGVyLXBhZ2VfX2Jhbm5lci51c2VmdWwge1xuICBwYWRkaW5nOiAyMHB4IDMwcHg7XG59XG4uamV0LWZvcm0tYnVpbGRlci1wYWdlX19wYW5lbC5oZWxwIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTE0MHB4KSB7XG4uamV0LWZvcm0tYnVpbGRlci1wYWdlX19wYW5lbC5oZWxwIHtcbiAgICB3aWR0aDogNTAlO1xufVxufVxuLmpldC1mb3JtLWJ1aWxkZXItcGFnZV9fcGFuZWwuaGVscCAuamV0LWZvcm0tYnVpbGRlci1wYWdlX19wYW5lbC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNEQ0RDREQ7XG4gIHBhZGRpbmctdG9wOiAyM3B4O1xufVxuLmpldC1mb3JtLWJ1aWxkZXItcGFnZV9fcGFuZWwuaGVscCAuaGVscC1jZW50ZXItbGluayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgbWFyZ2luLWJvdHRvbTogMjJweDtcbn1cbi5qZXQtZm9ybS1idWlsZGVyLXBhZ2VfX3BhbmVsLmhlbHAgLmhlbHAtY2VudGVyLWxpbms6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uamV0LWZvcm0tYnVpbGRlci1wYWdlX19wYW5lbC5oZWxwIC5oZWxwLWNlbnRlci1saW5rIGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGNvbG9yOiAjMDA3Q0JBO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uamV0LWZvcm0tYnVpbGRlci1wYWdlX19wYW5lbC5oZWxwIC5oZWxwLWNlbnRlci1saW5rIGE6aG92ZXIge1xuICBjb2xvcjogIzA2NkVBMjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4uamV0LWZvcm0tYnVpbGRlci1wYWdlX19wYW5lbC5oZWxwIC5oZWxwLWNlbnRlci1saW5rIGEgLmhlbHAtY2VudGVyLWxpbmstaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogMjhweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9zaWRlYmFyL1NldHRpbmdzU2lkZUJhci52dWVcIixcIndlYnBhY2s6Ly8uLy4uL1NldHRpbmdzU2lkZUJhci52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBK0VDO0VBQ0Msa0JBQUE7QUM5RUY7QURpRkM7RUFDQyxXQUFBO0FDL0VGO0FEaUZFO0FBSEQ7SUFJRSxVQUFBO0FDOUVEO0FBQ0Y7QURnRkU7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7QUM5RUg7QURpRkU7RUFDQyxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQy9FSDtBRGlGRztFQUNDLGdCQUFBO0FDL0VKO0FEa0ZHO0VBQ0MsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUNoRko7QURrRkk7RUFDQyxjQUFBO0VBQ0EsMEJBQUE7QUNoRkw7QURtRkk7RUFDQyxrQkFBQTtBQ2pGTFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXHJcXG5cXHJcXG4uamV0LWZvcm0tYnVpbGRlci1wYWdlIHtcXHJcXG5cXHJcXG5cXHQmX19iYW5uZXIudXNlZnVsIHtcXHJcXG5cXHRcXHRwYWRkaW5nOiAyMHB4IDMwcHg7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCZfX3BhbmVsLmhlbHAge1xcclxcblxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcclxcblxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiAxMTQwcHgpIHtcXHJcXG5cXHRcXHRcXHR3aWR0aDogY2FsYygxMDAlIC8gMik7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC5qZXQtZm9ybS1idWlsZGVyLXBhZ2VfX3BhbmVsLWNvbnRlbnQge1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRcXHRcXHRtYXJnaW4tdG9wOiAxMnB4O1xcclxcblxcdFxcdFxcdGJvcmRlci10b3A6IDFweCBzb2xpZCAjRENEQ0REO1xcclxcblxcdFxcdFxcdHBhZGRpbmctdG9wOiAyM3B4O1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQuaGVscC1jZW50ZXItbGluayB7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuXFx0XFx0XFx0bWFyZ2luLWJvdHRvbTogMjJweDtcXHJcXG5cXHJcXG5cXHRcXHRcXHQmOmxhc3QtY2hpbGQge1xcclxcblxcdFxcdFxcdFxcdG1hcmdpbi1ib3R0b206IDA7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdGEge1xcclxcblxcdFxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcblxcdFxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0XFx0Zm9udC1zaXplOiAxNHB4O1xcclxcblxcdFxcdFxcdFxcdGxpbmUtaGVpZ2h0OiAxOHB4O1xcclxcblxcdFxcdFxcdFxcdGNvbG9yOiAjMDA3Q0JBO1xcclxcblxcdFxcdFxcdFxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHQmOmhvdmVyIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRjb2xvcjogIzA2NkVBMjtcXHJcXG5cXHRcXHRcXHRcXHRcXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0LmhlbHAtY2VudGVyLWxpbmstaWNvbiB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0bWFyZ2luLXJpZ2h0OiAyOHB4O1xcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuXCIsXCIuamV0LWZvcm0tYnVpbGRlci1wYWdlX19iYW5uZXIudXNlZnVsIHtcXG4gIHBhZGRpbmc6IDIwcHggMzBweDtcXG59XFxuLmpldC1mb3JtLWJ1aWxkZXItcGFnZV9fcGFuZWwuaGVscCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDExNDBweCkge1xcbiAgLmpldC1mb3JtLWJ1aWxkZXItcGFnZV9fcGFuZWwuaGVscCB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICB9XFxufVxcbi5qZXQtZm9ybS1idWlsZGVyLXBhZ2VfX3BhbmVsLmhlbHAgLmpldC1mb3JtLWJ1aWxkZXItcGFnZV9fcGFuZWwtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbi10b3A6IDEycHg7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI0RDRENERDtcXG4gIHBhZGRpbmctdG9wOiAyM3B4O1xcbn1cXG4uamV0LWZvcm0tYnVpbGRlci1wYWdlX19wYW5lbC5oZWxwIC5oZWxwLWNlbnRlci1saW5rIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBtYXJnaW4tYm90dG9tOiAyMnB4O1xcbn1cXG4uamV0LWZvcm0tYnVpbGRlci1wYWdlX19wYW5lbC5oZWxwIC5oZWxwLWNlbnRlci1saW5rOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuLmpldC1mb3JtLWJ1aWxkZXItcGFnZV9fcGFuZWwuaGVscCAuaGVscC1jZW50ZXItbGluayBhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxuICBjb2xvcjogIzAwN0NCQTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLmpldC1mb3JtLWJ1aWxkZXItcGFnZV9fcGFuZWwuaGVscCAuaGVscC1jZW50ZXItbGluayBhOmhvdmVyIHtcXG4gIGNvbG9yOiAjMDY2RUEyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcbi5qZXQtZm9ybS1idWlsZGVyLXBhZ2VfX3BhbmVsLmhlbHAgLmhlbHAtY2VudGVyLWxpbmsgYSAuaGVscC1jZW50ZXItbGluay1pY29uIHtcXG4gIG1hcmdpbi1yaWdodDogMjhweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBcbnNwYW5bZGF0YS12LTE0YmFhMjMwXSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwN0NCQTtcclxuXHRwYWRkaW5nOiAwLjFlbSAwLjNlbTtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdGJvcmRlci1yYWRpdXM6IDNweDtcclxuXHRjb2xvcjogd2hpdGU7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuXHRmb250LXdlaWdodDogNzAwO1xyXG5cdGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG5cdGxldHRlci1zcGFjaW5nOiAwO1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vLi4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL0lzUFJPSWNvbi52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQW9CQTtDQUNBLHlCQUFBO0NBQ0Esb0JBQUE7Q0FDQSx5QkFBQTtDQUNBLGtCQUFBO0NBQ0EsWUFBQTtDQUNBLGVBQUE7Q0FDQSxrQkFBQTtDQUNBLGdCQUFBO0NBQ0EsaUJBQUE7Q0FDQSxpQkFBQTtDQUNBLGdCQUFBO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcblxcdDxzcGFuPnt7IF9fKCAnUHJvJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfX08L3NwYW4+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG48c2NyaXB0PlxcclxcbmNvbnN0IHsgaTE4biB9ID0gSmV0RkJNaXhpbnM7XFxyXFxuXFxyXFxuZXhwb3J0IGRlZmF1bHQge1xcclxcblxcdG5hbWU6ICdJc1BST0ljb24nLFxcclxcblxcdG1peGluczogWyBpMThuIF0sXFxyXFxuXFx0cHJvcHM6IHtcXHJcXG5cXHRcXHRpc0FjdGl2ZToge1xcclxcblxcdFxcdFxcdHR5cGU6IEJvb2xlYW4sXFxyXFxuXFx0XFx0XFx0ZGVmYXVsdDogZmFsc2UsXFxyXFxuXFx0XFx0fSxcXHJcXG5cXHR9LFxcclxcbn07XFxyXFxuPC9zY3JpcHQ+XFxyXFxuXFxyXFxuPHN0eWxlIHNjb3BlZD5cXHJcXG5zcGFuIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3Q0JBO1xcclxcblxcdHBhZGRpbmc6IDAuMWVtIDAuM2VtO1xcclxcblxcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogM3B4O1xcclxcblxcdGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHRmb250LXNpemU6IDEycHg7XFxyXFxuXFx0Zm9udC1zdHlsZTogbm9ybWFsO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDE2cHg7XFxyXFxuXFx0bGV0dGVyLXNwYWNpbmc6IDA7XFxyXFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSXNQUk9JY29uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNGJhYTIzMCZzY29wZWQ9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0lzUFJPSWNvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vSXNQUk9JY29uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0lzUFJPSWNvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xNGJhYTIzMCZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIxNGJhYTIzMFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkU6XFxcXE9wZW5TZXJ2ZXJcXFxcZG9tYWluc1xcXFxjcm9jby55dXJrby5mbXRcXFxcd3AtY29udGVudFxcXFxwbHVnaW5zXFxcXGpldGZvcm1idWlsZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzE0YmFhMjMwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzE0YmFhMjMwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzE0YmFhMjMwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Jc1BST0ljb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE0YmFhMjMwJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMTRiYWEyMzAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9Jc1BST0ljb24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9TZXR0aW5nc1BhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRiNDM1MDBlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2V0dGluZ3NQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9TZXR0aW5nc1BhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vU2V0dGluZ3NQYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTRiNDM1MDBlJmxhbmc9c2Nzc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJFOlxcXFxPcGVuU2VydmVyXFxcXGRvbWFpbnNcXFxcY3JvY28ueXVya28uZm10XFxcXHdwLWNvbnRlbnRcXFxccGx1Z2luc1xcXFxqZXRmb3JtYnVpbGRlclxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0YjQzNTAwZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0YjQzNTAwZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0YjQzNTAwZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU2V0dGluZ3NQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YjQzNTAwZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzRiNDM1MDBlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvU2V0dGluZ3NQYWdlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vZnJpZW5kbHlDYXB0Y2hhLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNTRmMDMwZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2ZyaWVuZGx5Q2FwdGNoYS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vZnJpZW5kbHlDYXB0Y2hhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJFOlxcXFxPcGVuU2VydmVyXFxcXGRvbWFpbnNcXFxcY3JvY28ueXVya28uZm10XFxcXHdwLWNvbnRlbnRcXFxccGx1Z2luc1xcXFxqZXRmb3JtYnVpbGRlclxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwNTRmMDMwZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwNTRmMDMwZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwNTRmMDMwZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vZnJpZW5kbHlDYXB0Y2hhLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNTRmMDMwZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzA1NGYwMzBlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvY2FwdGNoYS9mcmllbmRseUNhcHRjaGEvZnJpZW5kbHlDYXB0Y2hhLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vcmVDQVBUQ0hBdjMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYzOGNlYjdmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vcmVDQVBUQ0hBdjMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL3JlQ0FQVENIQXYzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJFOlxcXFxPcGVuU2VydmVyXFxcXGRvbWFpbnNcXFxcY3JvY28ueXVya28uZm10XFxcXHdwLWNvbnRlbnRcXFxccGx1Z2luc1xcXFxqZXRmb3JtYnVpbGRlclxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2MzhjZWI3ZicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2MzhjZWI3ZicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2MzhjZWI3ZicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vcmVDQVBUQ0hBdjMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYzOGNlYjdmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjM4Y2ViN2YnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL2dvb2dsZS9yZUNBUFRDSEF2My52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2hDYXB0Y2hhLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNDU2N2ZhNFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2hDYXB0Y2hhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9oQ2FwdGNoYS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRTpcXFxcT3BlblNlcnZlclxcXFxkb21haW5zXFxcXGNyb2NvLnl1cmtvLmZtdFxcXFx3cC1jb250ZW50XFxcXHBsdWdpbnNcXFxcamV0Zm9ybWJ1aWxkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMzQ1NjdmYTQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMzQ1NjdmYTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMzQ1NjdmYTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2hDYXB0Y2hhLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNDU2N2ZhNFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzM0NTY3ZmE0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvY2FwdGNoYS9oQ2FwdGNoYS9oQ2FwdGNoYS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3R1cm5zdGlsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWE5ZmZhMzhcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi90dXJuc3RpbGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL3R1cm5zdGlsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRTpcXFxcT3BlblNlcnZlclxcXFxkb21haW5zXFxcXGNyb2NvLnl1cmtvLmZtdFxcXFx3cC1jb250ZW50XFxcXHBsdWdpbnNcXFxcamV0Zm9ybWJ1aWxkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNWE5ZmZhMzgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNWE5ZmZhMzgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNWE5ZmZhMzgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3R1cm5zdGlsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWE5ZmZhMzhcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1YTlmZmEzOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL2NhcHRjaGEvdHVybnN0aWxlL3R1cm5zdGlsZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1BheXBhbFRhYi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OGVmZjgwNGNcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9QYXlwYWxUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1BheXBhbFRhYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRTpcXFxcT3BlblNlcnZlclxcXFxkb21haW5zXFxcXGNyb2NvLnl1cmtvLmZtdFxcXFx3cC1jb250ZW50XFxcXHBsdWdpbnNcXFxcamV0Zm9ybWJ1aWxkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnOGVmZjgwNGMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnOGVmZjgwNGMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnOGVmZjgwNGMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1BheXBhbFRhYi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OGVmZjgwNGNcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc4ZWZmODA0YycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL2dhdGV3YXlzL3BheXBhbC9QYXlwYWxUYWIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9TZXR0aW5nc1NpZGVCYXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQyNTRiNjRjXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2V0dGluZ3NTaWRlQmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9TZXR0aW5nc1NpZGVCYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vU2V0dGluZ3NTaWRlQmFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQyNTRiNjRjJmxhbmc9c2Nzc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJFOlxcXFxPcGVuU2VydmVyXFxcXGRvbWFpbnNcXFxcY3JvY28ueXVya28uZm10XFxcXHdwLWNvbnRlbnRcXFxccGx1Z2luc1xcXFxqZXRmb3JtYnVpbGRlclxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0MjU0YjY0YycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0MjU0YjY0YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0MjU0YjY0YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU2V0dGluZ3NTaWRlQmFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MjU0YjY0Y1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzQyNTRiNjRjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhZG1pbi9wYWdlcy9qZmItc2V0dGluZ3Mvc2lkZWJhci9TZXR0aW5nc1NpZGVCYXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9DYXB0Y2hhVGFiLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MmIzNmU1NVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0NhcHRjaGFUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0NhcHRjaGFUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkU6XFxcXE9wZW5TZXJ2ZXJcXFxcZG9tYWluc1xcXFxjcm9jby55dXJrby5mbXRcXFxcd3AtY29udGVudFxcXFxwbHVnaW5zXFxcXGpldGZvcm1idWlsZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzYyYjM2ZTU1JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzYyYjM2ZTU1JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzYyYjM2ZTU1JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9DYXB0Y2hhVGFiLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MmIzNmU1NVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzYyYjM2ZTU1Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9jYXB0Y2hhL0NhcHRjaGFUYWIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9HZXRSZXNwb25zZVRhYi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDU0ZGJlYmJcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9HZXRSZXNwb25zZVRhYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vR2V0UmVzcG9uc2VUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkU6XFxcXE9wZW5TZXJ2ZXJcXFxcZG9tYWluc1xcXFxjcm9jby55dXJrby5mbXRcXFxcd3AtY29udGVudFxcXFxwbHVnaW5zXFxcXGpldGZvcm1idWlsZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzA1NGRiZWJiJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzA1NGRiZWJiJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzA1NGRiZWJiJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9HZXRSZXNwb25zZVRhYi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDU0ZGJlYmJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwNTRkYmViYicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvZ2V0cmVzcG9uc2UvR2V0UmVzcG9uc2VUYWIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9NYWlsQ2hpbXBUYWIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc4M2MzZGM5XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTWFpbENoaW1wVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9NYWlsQ2hpbXBUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkU6XFxcXE9wZW5TZXJ2ZXJcXFxcZG9tYWluc1xcXFxjcm9jby55dXJrby5mbXRcXFxcd3AtY29udGVudFxcXFxwbHVnaW5zXFxcXGpldGZvcm1idWlsZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzc4M2MzZGM5JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzc4M2MzZGM5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzc4M2MzZGM5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9NYWlsQ2hpbXBUYWIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc4M2MzZGM5XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNzgzYzNkYzknLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL21haWxjaGltcC9NYWlsQ2hpbXBUYWIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9PcHRpb25zVGFiLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05ZGM0MmRlNlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL09wdGlvbnNUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL09wdGlvbnNUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkU6XFxcXE9wZW5TZXJ2ZXJcXFxcZG9tYWluc1xcXFxjcm9jby55dXJrby5mbXRcXFxcd3AtY29udGVudFxcXFxwbHVnaW5zXFxcXGpldGZvcm1idWlsZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzlkYzQyZGU2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzlkYzQyZGU2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzlkYzQyZGU2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9PcHRpb25zVGFiLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05ZGM0MmRlNlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzlkYzQyZGU2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9vcHRpb25zL09wdGlvbnNUYWIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9QYXltZW50c0dhdGV3YXlzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NzY5NjZhMVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1BheW1lbnRzR2F0ZXdheXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1BheW1lbnRzR2F0ZXdheXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkU6XFxcXE9wZW5TZXJ2ZXJcXFxcZG9tYWluc1xcXFxjcm9jby55dXJrby5mbXRcXFxcd3AtY29udGVudFxcXFxwbHVnaW5zXFxcXGpldGZvcm1idWlsZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzY3Njk2NmExJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzY3Njk2NmExJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzY3Njk2NmExJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9QYXltZW50c0dhdGV3YXlzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NzY5NjZhMVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzY3Njk2NmExJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9wYXltZW50cy1nYXRld2F5cy9QYXltZW50c0dhdGV3YXlzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSXNQUk9JY29uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0lzUFJPSWNvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2V0dGluZ3NQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NldHRpbmdzUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZnJpZW5kbHlDYXB0Y2hhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZyaWVuZGx5Q2FwdGNoYS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcmVDQVBUQ0hBdjMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcmVDQVBUQ0hBdjMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hDYXB0Y2hhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hDYXB0Y2hhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd5dy1pbi1qcy93ZWJwYWNrLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90dXJuc3RpbGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdHVybnN0aWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd5dy1pbi1qcy93ZWJwYWNrLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYXlwYWxUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGF5cGFsVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd5dy1pbi1qcy93ZWJwYWNrLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZXR0aW5nc1NpZGVCYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2V0dGluZ3NTaWRlQmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd5dy1pbi1qcy93ZWJwYWNrLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DYXB0Y2hhVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NhcHRjaGFUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dldFJlc3BvbnNlVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dldFJlc3BvbnNlVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd5dy1pbi1qcy93ZWJwYWNrLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NYWlsQ2hpbXBUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWFpbENoaW1wVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd5dy1pbi1qcy93ZWJwYWNrLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9PcHRpb25zVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL09wdGlvbnNUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BheW1lbnRzR2F0ZXdheXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGF5bWVudHNHYXRld2F5cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Jc1BST0ljb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE0YmFhMjMwJnNjb3BlZD10cnVlXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2V0dGluZ3NQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YjQzNTAwZVwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZyaWVuZGx5Q2FwdGNoYS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDU0ZjAzMGVcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yZUNBUFRDSEF2My52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjM4Y2ViN2ZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9oQ2FwdGNoYS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzQ1NjdmYTRcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90dXJuc3RpbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVhOWZmYTM4XCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGF5cGFsVGFiLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04ZWZmODA0Y1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NldHRpbmdzU2lkZUJhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDI1NGI2NGNcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DYXB0Y2hhVGFiLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MmIzNmU1NVwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dldFJlc3BvbnNlVGFiLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNTRkYmViYlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01haWxDaGltcFRhYi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzgzYzNkYzlcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9PcHRpb25zVGFiLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05ZGM0MmRlNlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BheW1lbnRzR2F0ZXdheXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY3Njk2NmExXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2V0dGluZ3NQYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTRiNDM1MDBlJmxhbmc9c2Nzc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NldHRpbmdzU2lkZUJhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00MjU0YjY0YyZsYW5nPXNjc3NcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0lzUFJPSWNvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xNGJhYTIzMCZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ3NwYW4nLFtfdm0uX3YoX3ZtLl9zKF92bS5fXyggJ1BybycsICdqZXQtZm9ybS1idWlsZGVyJyApKSldKX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiZnVuY3Rpb24gb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgKG9iaiwgZXhjbHVkZSkgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGsgaW4gb2JqKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaykgJiYgZXhjbHVkZS5pbmRleE9mKGspID09PSAtMSkgdGFyZ2V0W2tdID0gb2JqW2tdOyByZXR1cm4gdGFyZ2V0OyB9XG52YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnRm9ybUJ1aWxkZXJQYWdlJyx7YXR0cnM6e1widGl0bGVcIjpfdm0uX18oICdKZXRGb3JtQnVpbGRlciBTZXR0aW5ncycsICdqZXQtZm9ybS1idWlsZGVyJyApfX0sW19jKCdkaXYnLHtzdGF0aWNDbGFzczpcImpmYi1jb250ZW50XCJ9LFtfYygnQWxlcnRzTGlzdCcpLF92bS5fdihcIiBcIiksX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiamZiLWNvbnRlbnQtbWFpblwifSxbX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiY3gtdnVpLXBhbmVsXCJ9LFtfYygnQ3hWdWlUYWJzJyx7YXR0cnM6e1wiaW4tcGFuZWxcIjpmYWxzZSxcInZhbHVlXCI6X3ZtLmFjdGl2ZVRhYlNsdWcsXCJsYXlvdXRcIjpcInZlcnRpY2FsXCJ9LG9uOntcImlucHV0XCI6X3ZtLm9uQ2hhbmdlQWN0aXZlVGFifX0sX3ZtLl9sKChfdm0udGFicyksZnVuY3Rpb24ocmVmLGluZGV4KXtcbnZhciBkaXNwbGF5QnV0dG9uID0gcmVmLmRpc3BsYXlCdXR0b247IGlmICggZGlzcGxheUJ1dHRvbiA9PT0gdm9pZCAwICkgZGlzcGxheUJ1dHRvbiA9IHRydWU7XG52YXIgcmVzdCA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKCByZWYsIFtcImRpc3BsYXlCdXR0b25cIl0gKTtcbnZhciB0YWIgPSByZXN0O1xucmV0dXJuIF9jKCdDeFZ1aVRhYnNQYW5lbCcse2tleTp0YWIuY29tcG9uZW50Lm5hbWUsYXR0cnM6e1wibmFtZVwiOnRhYi5jb21wb25lbnQubmFtZSxcImxhYmVsXCI6dGFiLnRpdGxlLFwiZGlzYWJsZWRcIjp0YWIuZGlzYWJsZWQsXCJpY29uXCI6dGFiLmljb259LHNjb3BlZFNsb3RzOl92bS5fdShbKHRhYi5jb21wb25lbnQucmVuZGVyKT97a2V5OlwiZGVmYXVsdFwiLGZuOmZ1bmN0aW9uKCl7cmV0dXJuIFtfYygna2VlcC1hbGl2ZScsW19jKHRhYi5jb21wb25lbnQse3JlZjpcInRhYkNvbXBvbmVudHNcIixyZWZJbkZvcjp0cnVlLHRhZzpcImNvbXBvbmVudFwiLGF0dHJzOntcImluY29taW5nXCI6X3ZtLmdldEluY29taW5nKCB0YWIuY29tcG9uZW50Lm5hbWUgKSxcImlubmVyLXNsdWdzXCI6X3ZtLmFjdGl2ZVRhYklubmVyU2x1Z3MgfHwgW119fSldLDEpLF92bS5fdihcIiBcIiksKGRpc3BsYXlCdXR0b24pP19jKCdjeC12dWktYnV0dG9uJyx7YXR0cnM6e1wiYnV0dG9uLXN0eWxlXCI6XCJhY2NlbnRcIixcImxvYWRpbmdcIjpfdm0ubG9hZGluZ1RhYlsgdGFiLmNvbXBvbmVudC5uYW1lIF19LG9uOntcImNsaWNrXCI6ZnVuY3Rpb24oJGV2ZW50KXtyZXR1cm4gX3ZtLm9uU2F2ZVRhYiggaW5kZXgsIHRhYi5jb21wb25lbnQubmFtZSApfX0sc2NvcGVkU2xvdHM6X3ZtLl91KFt7a2V5OlwibGFiZWxcIixmbjpmdW5jdGlvbigpe3JldHVybiBbX2MoJ3NwYW4nLFtfdm0uX3YoXCJTYXZlXCIpXSldfSxwcm94eTp0cnVlfV0sbnVsbCx0cnVlKX0pOl92bS5fZSgpXX0scHJveHk6dHJ1ZX06bnVsbF0sbnVsbCx0cnVlKX0pfSksMSldLDEpXSksX3ZtLl92KFwiIFwiKSxfYygnU2V0dGluZ3NTaWRlQmFyJyldLDEpXSl9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdzZWN0aW9uJyxbX2MoJ1NpbXBsZVdyYXBwZXJDb21wb25lbnQnLHthdHRyczp7XCJlbGVtZW50LWlkXCI6XCJmcmllbmRseV9rZXlcIn0sc2NvcGVkU2xvdHM6X3ZtLl91KFt7a2V5OlwibGFiZWxcIixmbjpmdW5jdGlvbigpe3JldHVybiBbX3ZtLl92KF92bS5fcyhfdm0ubGFiZWwua2V5KSldfSxwcm94eTp0cnVlfSx7a2V5OlwiZGVzY3JpcHRpb25cIixmbjpmdW5jdGlvbigpe3JldHVybiBbX2MoJ3AnLHtzdGF0aWNDbGFzczpcImZiLWRlc2NyaXB0aW9uXCJ9LFtfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHRcIitfdm0uX3MoX3ZtLl9fKFxuXHRcdFx0XHQnSXQgY2FuIGJlIGZvdW5kIG9uIHRoZSBwYWdlIGxpc3RpbmcgeW91ciBBcHBsaWNhdGlvbnMuIE9yIGZvbGxvdyB0aGlzJyxcblx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInXG5cdFx0XHQpICsgJyAnKStcIlxcblxcdFxcdFxcdFxcdFwiKSxfYygnRXh0ZXJuYWxMaW5rJyx7YXR0cnM6e1wiaHJlZlwiOlwiaHR0cHM6Ly9kb2NzLmZyaWVuZGx5Y2FwdGNoYS5jb20vIy9pbnN0YWxsYXRpb24/aWQ9XzEtZ2VuZXJhdGluZy1hLXNpdGVrZXlcIn19LFtfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHRcXHRcIitfdm0uX3MoX3ZtLl9fKCAnZ3VpZGUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSkrXCJcXG5cXHRcXHRcXHRcXHRcIildKV0sMSldfSxwcm94eTp0cnVlfSx7a2V5OlwiZGVmYXVsdFwiLGZuOmZ1bmN0aW9uKCl7cmV0dXJuIFtfYygnaW5wdXQnLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTooX3ZtLnN0b3JhZ2Uua2V5KSxleHByZXNzaW9uOlwic3RvcmFnZS5rZXlcIn1dLHN0YXRpY0NsYXNzOlwiY3gtdnVpLWlucHV0IHNpemUtZnVsbHdpZHRoXCIsYXR0cnM6e1wiaWRcIjpcImZyaWVuZGx5X2tleVwiLFwidHlwZVwiOlwidGV4dFwifSxkb21Qcm9wczp7XCJ2YWx1ZVwiOihfdm0uc3RvcmFnZS5rZXkpfSxvbjp7XCJpbnB1dFwiOmZ1bmN0aW9uKCRldmVudCl7aWYoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpeyByZXR1cm47IH1fdm0uJHNldChfdm0uc3RvcmFnZSwgXCJrZXlcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSl9fX0pXX0scHJveHk6dHJ1ZX1dKX0pLF92bS5fdihcIiBcIiksX2MoJ2N4LXZ1aS1pbnB1dCcse2F0dHJzOntcImVsZW1lbnQtaWRcIjpcImZyaWVuZGx5X3NlY3JldFwiLFwibGFiZWxcIjpfdm0ubGFiZWwuc2VjcmV0LFwiZGVzY3JpcHRpb25cIjpfdm0uX18oXG5cdFx0XHQnSXQgY2FuIGJlIGZvdW5kIG9uIHRoZSBwYWdlIGxpc3RpbmcgeW91ciBBUEkga2V5cy4nLFxuXHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInXG5cdFx0KSxcIndyYXBwZXItY3NzXCI6WyAnZXF1YWx3aWR0aCcgXSxcInNpemVcIjonZnVsbHdpZHRoJ30sbW9kZWw6e3ZhbHVlOihfdm0uc3RvcmFnZS5zZWNyZXQpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uJHNldChfdm0uc3RvcmFnZSwgXCJzZWNyZXRcIiwgJCR2KX0sZXhwcmVzc2lvbjpcInN0b3JhZ2Uuc2VjcmV0XCJ9fSldLDEpfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnc2VjdGlvbicsW19jKCdjeC12dWktaW5wdXQnLHthdHRyczp7XCJsYWJlbFwiOl92bS5sYWJlbC5rZXksXCJ3cmFwcGVyLWNzc1wiOlsgJ2VxdWFsd2lkdGgnIF0sXCJzaXplXCI6J2Z1bGx3aWR0aCd9LG1vZGVsOnt2YWx1ZTooX3ZtLnN0b3JhZ2Uua2V5KSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLiRzZXQoX3ZtLnN0b3JhZ2UsIFwia2V5XCIsICQkdil9LGV4cHJlc3Npb246XCJzdG9yYWdlLmtleVwifX0pLF92bS5fdihcIiBcIiksX2MoJ2N4LXZ1aS1pbnB1dCcse2F0dHJzOntcImxhYmVsXCI6X3ZtLmxhYmVsLnNlY3JldCxcIndyYXBwZXItY3NzXCI6WyAnZXF1YWx3aWR0aCcgXSxcInNpemVcIjonZnVsbHdpZHRoJ30sbW9kZWw6e3ZhbHVlOihfdm0uc3RvcmFnZS5zZWNyZXQpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uJHNldChfdm0uc3RvcmFnZSwgXCJzZWNyZXRcIiwgJCR2KX0sZXhwcmVzc2lvbjpcInN0b3JhZ2Uuc2VjcmV0XCJ9fSksX3ZtLl92KFwiIFwiKSxfYygnY3gtdnVpLWlucHV0Jyx7YXR0cnM6e1widHlwZVwiOlwibnVtYmVyXCIsXCJtaW5cIjowLFwibWF4XCI6MSxcInN0ZXBcIjowLjEsXCJsYWJlbFwiOl92bS5sYWJlbC50aHJlc2hvbGQsXCJkZXNjcmlwdGlvblwiOl92bS5oZWxwLnRocmVzaG9sZCxcIndyYXBwZXItY3NzXCI6WyAnZXF1YWx3aWR0aCcgXSxcInNpemVcIjonZnVsbHdpZHRoJ30sbW9kZWw6e3ZhbHVlOihfdm0uc3RvcmFnZS50aHJlc2hvbGQpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uJHNldChfdm0uc3RvcmFnZSwgXCJ0aHJlc2hvbGRcIiwgJCR2KX0sZXhwcmVzc2lvbjpcInN0b3JhZ2UudGhyZXNob2xkXCJ9fSksX3ZtLl92KFwiIFwiKSxfYygncCcse3N0YXRpY0NsYXNzOlwiZmItZGVzY3JpcHRpb25cIn0sW192bS5fdihfdm0uX3MoX3ZtLmhlbHAuYXBpUHJlZikrXCIgXCIpLF9jKCdhJyx7YXR0cnM6e1wiaHJlZlwiOl92bS5oZWxwLmFwaUxpbmssXCJ0YXJnZXRcIjpcIl9ibGFua1wifX0sW192bS5fdihfdm0uX3MoX3ZtLmhlbHAuYXBpTGlua0xhYmVsKSldKV0pXSwxKX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ3NlY3Rpb24nLFtfYygnU2ltcGxlV3JhcHBlckNvbXBvbmVudCcse2F0dHJzOntcImVsZW1lbnQtaWRcIjpcImhjYXB0Y2hhX2tleVwifSxzY29wZWRTbG90czpfdm0uX3UoW3trZXk6XCJsYWJlbFwiLGZuOmZ1bmN0aW9uKCl7cmV0dXJuIFtfdm0uX3YoX3ZtLl9zKF92bS5sYWJlbC5rZXkpKV19LHByb3h5OnRydWV9LHtrZXk6XCJkZXNjcmlwdGlvblwiLGZuOmZ1bmN0aW9uKCl7cmV0dXJuIFtfYygncCcse3N0YXRpY0NsYXNzOlwiZmItZGVzY3JpcHRpb25cIn0sW192bS5fdihcIlxcblxcdFxcdFxcdFxcdFxcdFwiK192bS5fcyhfdm0uX18oXG5cdFx0XHRcdFx0J1lvdSBjYW4gZmluZCBpdCBvbiB0aGlzIHBhZ2UgaW4gdGhlIGZpcnN0IGNvbHVtbiBvZiBTaXRla2V5LicsXG5cdFx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInXG5cdFx0XHRcdCkgKyAnICcpK1wiXFxuXFx0XFx0XFx0XFx0XFx0XCIpLF9jKCdFeHRlcm5hbExpbmsnLHthdHRyczp7XCJocmVmXCI6XCJodHRwczovL2Rhc2hib2FyZC5oY2FwdGNoYS5jb20vc2l0ZXNcIn19LFtfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcIitfdm0uX3MoX3ZtLl9fKCAnR28gdG8gdGhlIGRhc2hib2FyZCBvZiBzaXRlcycsICdqZXQtZm9ybS1idWlsZGVyJyApKStcIlxcblxcdFxcdFxcdFxcdFxcdFwiKV0pXSwxKV19LHByb3h5OnRydWV9LHtrZXk6XCJkZWZhdWx0XCIsZm46ZnVuY3Rpb24oKXtyZXR1cm4gW19jKCdpbnB1dCcse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOihfdm0uc3RvcmFnZS5rZXkpLGV4cHJlc3Npb246XCJzdG9yYWdlLmtleVwifV0sc3RhdGljQ2xhc3M6XCJjeC12dWktaW5wdXQgc2l6ZS1mdWxsd2lkdGhcIixhdHRyczp7XCJpZFwiOlwiaGNhcHRjaGFfa2V5XCIsXCJ0eXBlXCI6XCJ0ZXh0XCJ9LGRvbVByb3BzOntcInZhbHVlXCI6KF92bS5zdG9yYWdlLmtleSl9LG9uOntcImlucHV0XCI6ZnVuY3Rpb24oJGV2ZW50KXtpZigkZXZlbnQudGFyZ2V0LmNvbXBvc2luZyl7IHJldHVybjsgfV92bS4kc2V0KF92bS5zdG9yYWdlLCBcImtleVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKX19fSldfSxwcm94eTp0cnVlfV0pfSksX3ZtLl92KFwiIFwiKSxfYygnU2ltcGxlV3JhcHBlckNvbXBvbmVudCcse2F0dHJzOntcImVsZW1lbnQtaWRcIjpcImhjYXB0Y2hhX3NlY3JldFwifSxzY29wZWRTbG90czpfdm0uX3UoW3trZXk6XCJsYWJlbFwiLGZuOmZ1bmN0aW9uKCl7cmV0dXJuIFtfdm0uX3YoX3ZtLl9zKF92bS5sYWJlbC5zZWNyZXQpKV19LHByb3h5OnRydWV9LHtrZXk6XCJkZXNjcmlwdGlvblwiLGZuOmZ1bmN0aW9uKCl7cmV0dXJuIFtfYygncCcse3N0YXRpY0NsYXNzOlwiZmItZGVzY3JpcHRpb25cIn0sW192bS5fdihcIlxcblxcdFxcdFxcdFxcdFxcdFwiK192bS5fcyhfdm0uX18oXG5cdFx0XHRcdFx0XCJZb3UgY2FuIGZpbmQgaXQgb24gdGhlIHNldHRpbmdzIHBhZ2UsXFxudGhpcyB3aWxsIGJlIHRoZSBmaXJzdCBmaWVsZC5cIixcblx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcidcblx0XHRcdFx0KSArICcgJykrXCJcXG5cXHRcXHRcXHRcXHRcXHRcIiksX2MoJ0V4dGVybmFsTGluaycse2F0dHJzOntcImhyZWZcIjpcImh0dHBzOi8vZGFzaGJvYXJkLmhjYXB0Y2hhLmNvbS9zZXR0aW5nc1wifX0sW192bS5fdihcIlxcblxcdFxcdFxcdFxcdFxcdFxcdFwiK192bS5fcyhfdm0uX18oICdHbyB0byB0aGUgU2V0dGluZ3MgcGFnZScsICdqZXQtZm9ybS1idWlsZGVyJyApKStcIlxcblxcdFxcdFxcdFxcdFxcdFwiKV0pXSwxKV19LHByb3h5OnRydWV9LHtrZXk6XCJkZWZhdWx0XCIsZm46ZnVuY3Rpb24oKXtyZXR1cm4gW19jKCdpbnB1dCcse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOihfdm0uc3RvcmFnZS5zZWNyZXQpLGV4cHJlc3Npb246XCJzdG9yYWdlLnNlY3JldFwifV0sc3RhdGljQ2xhc3M6XCJjeC12dWktaW5wdXQgc2l6ZS1mdWxsd2lkdGhcIixhdHRyczp7XCJpZFwiOlwiaGNhcHRjaGFfc2VjcmV0XCIsXCJ0eXBlXCI6XCJ0ZXh0XCJ9LGRvbVByb3BzOntcInZhbHVlXCI6KF92bS5zdG9yYWdlLnNlY3JldCl9LG9uOntcImlucHV0XCI6ZnVuY3Rpb24oJGV2ZW50KXtpZigkZXZlbnQudGFyZ2V0LmNvbXBvc2luZyl7IHJldHVybjsgfV92bS4kc2V0KF92bS5zdG9yYWdlLCBcInNlY3JldFwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKX19fSldfSxwcm94eTp0cnVlfV0pfSldLDEpfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnc2VjdGlvbicsW19jKCdjeC12dWktaW5wdXQnLHthdHRyczp7XCJlbGVtZW50LWlkXCI6XCJ0dXJuc3RpbGVfa2V5XCIsXCJsYWJlbFwiOl92bS5sYWJlbC5rZXksXCJkZXNjcmlwdGlvblwiOl92bS5fXyhcblx0XHRcdCdSZWFkIHRoZSBoaW50IHRvIHRoZSBTZWNyZXQgS2V5IGZpZWxkJyxcblx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJ1xuXHRcdCksXCJ3cmFwcGVyLWNzc1wiOlsgJ2VxdWFsd2lkdGgnIF0sXCJzaXplXCI6J2Z1bGx3aWR0aCd9LG1vZGVsOnt2YWx1ZTooX3ZtLnN0b3JhZ2Uua2V5KSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLiRzZXQoX3ZtLnN0b3JhZ2UsIFwia2V5XCIsICQkdil9LGV4cHJlc3Npb246XCJzdG9yYWdlLmtleVwifX0pLF92bS5fdihcIiBcIiksX2MoJ2N4LXZ1aS1pbnB1dCcse2F0dHJzOntcImVsZW1lbnQtaWRcIjpcInR1cm5zdGlsZV9zZWNyZXRcIixcImxhYmVsXCI6X3ZtLmxhYmVsLnNlY3JldCxcImRlc2NyaXB0aW9uXCI6X3ZtLl9fKFxuXHRcdFx0J1lvdSBjYW4gZmluZCBib3RoIGtleXMgb24geW91ciBUdXJuc3RpbGUgU2l0ZSBzZXR0aW5ncyBwYWdlJyxcblx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJ1xuXHRcdCksXCJ3cmFwcGVyLWNzc1wiOlsgJ2VxdWFsd2lkdGgnIF0sXCJzaXplXCI6J2Z1bGx3aWR0aCd9LG1vZGVsOnt2YWx1ZTooX3ZtLnN0b3JhZ2Uuc2VjcmV0KSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLiRzZXQoX3ZtLnN0b3JhZ2UsIFwic2VjcmV0XCIsICQkdil9LGV4cHJlc3Npb246XCJzdG9yYWdlLnNlY3JldFwifX0pLF92bS5fdihcIiBcIiksX2MoJ3AnLHtzdGF0aWNDbGFzczpcImZiLWRlc2NyaXB0aW9uXCJ9LFtfdm0uX3YoXCJcXG5cXHRcXHRcIitfdm0uX3MoX3ZtLl9fKCAnRGlkblxcJ3QgZmluZCBpdD8gSGVyZSBpcycsICdqZXQtZm9ybS1idWlsZGVyJyApICsgJyAnKStcIlxcblxcdFxcdFwiKSxfYygnRXh0ZXJuYWxMaW5rJyx7YXR0cnM6e1wiaHJlZlwiOlwiaHR0cHM6Ly9kZXZlbG9wZXJzLmNsb3VkZmxhcmUuY29tL3R1cm5zdGlsZS9nZXQtc3RhcnRlZC8jZ2V0LWEtc2l0ZWtleS1hbmQtc2VjcmV0LWtleVwifX0sW192bS5fdihcIlxcblxcdFxcdFxcdFwiK192bS5fcyhfdm0uX18oICdhIG1vcmUgZGV0YWlsZWQgZGVzY3JpcHRpb24nLCAnamV0LWZvcm0tYnVpbGRlcicgKSkrXCJcXG5cXHRcXHRcIildKV0sMSldLDEpfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnc2VjdGlvbicsW19jKCdjeC12dWktaW5wdXQnLHthdHRyczp7XCJsYWJlbFwiOl92bS5sYWJlbC5jbGllbnRfaWQsXCJ3cmFwcGVyLWNzc1wiOlsgJ2VxdWFsd2lkdGgnIF0sXCJzaXplXCI6J2Z1bGx3aWR0aCd9LG1vZGVsOnt2YWx1ZTooX3ZtLnN0b3JhZ2UuY2xpZW50X2lkKSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLiRzZXQoX3ZtLnN0b3JhZ2UsIFwiY2xpZW50X2lkXCIsICQkdil9LGV4cHJlc3Npb246XCJzdG9yYWdlLmNsaWVudF9pZFwifX0pLF92bS5fdihcIiBcIiksX2MoJ2N4LXZ1aS1pbnB1dCcse2F0dHJzOntcImxhYmVsXCI6X3ZtLmxhYmVsLnNlY3JldCxcIndyYXBwZXItY3NzXCI6WyAnZXF1YWx3aWR0aCcgXSxcInNpemVcIjonZnVsbHdpZHRoJ30sbW9kZWw6e3ZhbHVlOihfdm0uc3RvcmFnZS5zZWNyZXQpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uJHNldChfdm0uc3RvcmFnZSwgXCJzZWNyZXRcIiwgJCR2KX0sZXhwcmVzc2lvbjpcInN0b3JhZ2Uuc2VjcmV0XCJ9fSldLDEpfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnU2lkZUJhckJveGVzJyx7c2NvcGVkU2xvdHM6X3ZtLl91KFt7a2V5OlwiaWNvbi1oZWxwXCIsZm46ZnVuY3Rpb24oKXtyZXR1cm4gW19jKCdzdmcnLHthdHRyczp7XCJ3aWR0aFwiOlwiMTRcIixcImhlaWdodFwiOlwiMjFcIixcInZpZXdCb3hcIjpcIjAgMCAxNCAyMVwiLFwiZmlsbFwiOlwibm9uZVwiLFwieG1sbnNcIjpcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJ9fSxbX2MoJ3BhdGgnLHthdHRyczp7XCJkXCI6XCJNNS4yNSAyMUg4Ljc1VjE3LjVINS4yNVYyMVpNNyAwQzMuMTMyNSAwIDAgMy4xMzI1IDAgN0gzLjVDMy41IDUuMDc1IDUuMDc1IDMuNSA3IDMuNUM4LjkyNSAzLjUgMTAuNSA1LjA3NSAxMC41IDdDMTAuNSAxMC41IDUuMjUgMTAuMDYyNSA1LjI1IDE1Ljc1SDguNzVDOC43NSAxMS44MTI1IDE0IDExLjM3NSAxNCA3QzE0IDMuMTMyNSAxMC44Njc1IDAgNyAwWlwiLFwiZmlsbFwiOlwiIzdCN0U4MVwifX0pXSldfSxwcm94eTp0cnVlfSx7a2V5OlwiY29udGVudC1oZWxwXCIsZm46ZnVuY3Rpb24oYm94KXtyZXR1cm4gW19jKCdkaXYnLHtzdGF0aWNDbGFzczpcImhlbHAtY2VudGVyLWxpbmtcIn0sW19jKCdhJyx7YXR0cnM6e1wiaHJlZlwiOmJveC5saW5rX2tub3dsZWRnZSxcInRhcmdldFwiOlwiX2JsYW5rXCJ9fSxbX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiaGVscC1jZW50ZXItbGluay1pY29uXCJ9LFtfYygnc3ZnJyx7YXR0cnM6e1wid2lkdGhcIjpcIjE0XCIsXCJoZWlnaHRcIjpcIjE2XCIsXCJ2aWV3Qm94XCI6XCIwIDAgMTQgMTZcIixcImZpbGxcIjpcIm5vbmVcIixcInhtbG5zXCI6XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wifX0sW19jKCdwYXRoJyx7YXR0cnM6e1wiZFwiOlwiTTEzLjQ1OCAxMS4yNTUyTDEzLjQ1OCAxLjQxMTVDMTMuNDU4IDEuMDMwNjQgMTMuMTM1NyAwLjcwODM3NCAxMi43NTQ5IDAuNzA4Mzc0TDMuMTQ1NTEgMC43MDgzNzRDMS41OTI3NyAwLjcwODM3NCAwLjMzMzAwOCAxLjk2ODE0IDAuMzMzMDA4IDMuNTIwODdMMC4zMzMwMDggMTIuODk1OUMwLjMzMzAwOCAxNC40NDg2IDEuNTkyNzcgMTUuNzA4NCAzLjE0NTUxIDE1LjcwODRMMTIuNzU0OSAxNS43MDg0QzEzLjEzNTcgMTUuNzA4NCAxMy40NTggMTUuNDE1NCAxMy40NTggMTUuMDA1MkwxMy40NTggMTQuNTM2NUMxMy40NTggMTQuMzMxNCAxMy4zNDA4IDE0LjEyNjMgMTMuMTk0MyAxNC4wMDkyQzEzLjA0NzkgMTMuNTQwNCAxMy4wNDc5IDEyLjI1MTMgMTMuMTk0MyAxMS44MTE5QzEzLjM0MDggMTEuNjk0NyAxMy40NTggMTEuNDg5NiAxMy40NTggMTEuMjU1MlpNNC4wODMwMSA0LjYzNDE2QzQuMDgzMDEgNC41NDYyNiA0LjE0MTYgNC40NTgzNyA0LjI1ODc5IDQuNDU4MzdMMTAuNDY5NyA0LjQ1ODM3QzEwLjU1NzYgNC40NTgzNyAxMC42NDU1IDQuNTQ2MjYgMTAuNjQ1NSA0LjYzNDE2TDEwLjY0NTUgNS4yMjAwOUMxMC42NDU1IDUuMzM3MjggMTAuNTU3NiA1LjM5NTg3IDEwLjQ2OTcgNS4zOTU4N0w0LjI1ODc5IDUuMzk1ODdDNC4xNDE2IDUuMzk1ODcgNC4wODMwMSA1LjMzNzI4IDQuMDgzMDEgNS4yMjAwOUw0LjA4MzAxIDQuNjM0MTZaTTQuMDgzMDEgNi41MDkxNkM0LjA4MzAxIDYuNDIxMjcgNC4xNDE2IDYuMzMzMzcgNC4yNTg3OSA2LjMzMzM3TDEwLjQ2OTcgNi4zMzMzN0MxMC41NTc2IDYuMzMzMzcgMTAuNjQ1NSA2LjQyMTI3IDEwLjY0NTUgNi41MDkxNkwxMC42NDU1IDcuMDk1MDlDMTAuNjQ1NSA3LjIxMjI4IDEwLjU1NzYgNy4yNzA4NyAxMC40Njk3IDcuMjcwODdMNC4yNTg3OSA3LjI3MDg3QzQuMTQxNiA3LjI3MDg3IDQuMDgzMDEgNy4yMTIyOCA0LjA4MzAxIDcuMDk1MDlMNC4wODMwMSA2LjUwOTE2Wk0xMS40OTUxIDEzLjgzMzRMMy4xNDU1MSAxMy44MzM0QzIuNjE4MTYgMTMuODMzNCAyLjIwODAxIDEzLjQyMzIgMi4yMDgwMSAxMi44OTU5QzIuMjA4MDEgMTIuMzk3OCAyLjYxODE2IDExLjk1ODQgMy4xNDU1MSAxMS45NTg0TDExLjQ5NTEgMTEuOTU4NEMxMS40MzY1IDEyLjQ4NTcgMTEuNDM2NSAxMy4zMzUzIDExLjQ5NTEgMTMuODMzNFpcIixcImZpbGxcIjpcIiMwMDdDQkFcIn19KV0pXSksX3ZtLl92KFwiIFwiKSxfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJoZWxwLWNlbnRlci1saW5rLWxhYmVsXCJ9LFtfdm0uX3YoX3ZtLl9zKGJveC5sYWJlbF9rbm93bGVkZ2UpKV0pXSldKSxfdm0uX3YoXCIgXCIpLF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcImhlbHAtY2VudGVyLWxpbmtcIn0sW19jKCdhJyx7YXR0cnM6e1wiaHJlZlwiOmJveC5saW5rX2NvbW11bml0eSxcInRhcmdldFwiOlwiX2JsYW5rXCJ9fSxbX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiaGVscC1jZW50ZXItbGluay1pY29uXCJ9LFtfYygnc3ZnJyx7YXR0cnM6e1wid2lkdGhcIjpcIjE2XCIsXCJoZWlnaHRcIjpcIjE2XCIsXCJ2aWV3Qm94XCI6XCIwIDAgMTYgMTZcIixcImZpbGxcIjpcIm5vbmVcIixcInhtbG5zXCI6XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wifX0sW19jKCdwYXRoJyx7YXR0cnM6e1wiZFwiOlwiTTE1LjU5MTMgOC4wNDU2NEMxNS41OTEzIDMuODc3MjggMTIuMjE0IDAuNSA4LjA0NTY0IDAuNUMzLjg3NzI4IDAuNSAwLjUgMy44NzcyOCAwLjUgOC4wNDU2NEMwLjUgMTEuODE4NSAzLjIzODM0IDE0Ljk1MjMgNi44NTkwMyAxNS41TDYuODU5MDMgMTAuMjM2M0w0Ljk0MjE5IDEwLjIzNjNMNC45NDIxOSA4LjA0NTY0TDYuODU5MDMgOC4wNDU2NEw2Ljg1OTAzIDYuNDAyNjRDNi44NTkwMyA0LjUxNjIzIDcuOTg0NzkgMy40NTEzMiA5LjY4ODY0IDMuNDUxMzJDMTAuNTQwNiAzLjQ1MTMyIDExLjM5MjUgMy42MDM0NSAxMS4zOTI1IDMuNjAzNDVMMTEuMzkyNSA1LjQ1OTQzTDEwLjQ0OTMgNS40NTk0M0M5LjUwNjA5IDUuNDU5NDMgOS4yMDE4MyA2LjAzNzUzIDkuMjAxODMgNi42NDYwNEw5LjIwMTgzIDguMDQ1NjRMMTEuMzAxMiA4LjA0NTY0TDEwLjk2NjUgMTAuMjM2M0w5LjIwMTgzIDEwLjIzNjNMOS4yMDE4MyAxNS41QzEyLjgyMjUgMTQuOTUyMyAxNS41OTEzIDExLjgxODUgMTUuNTkxMyA4LjA0NTY0WlwiLFwiZmlsbFwiOlwiIzAwN0NCQVwifX0pXSldKSxfdm0uX3YoXCIgXCIpLF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcImhlbHAtY2VudGVyLWxpbmstbGFiZWxcIn0sW192bS5fdihfdm0uX3MoYm94LmxhYmVsX2NvbW11bml0eSkpXSldKV0pLF92bS5fdihcIiBcIiksX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiaGVscC1jZW50ZXItbGlua1wifSxbX2MoJ2EnLHthdHRyczp7XCJocmVmXCI6Ym94Lmxpbmtfc3VwcG9ydCxcInRhcmdldFwiOlwiX2JsYW5rXCJ9fSxbX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiaGVscC1jZW50ZXItbGluay1pY29uXCJ9LFtfYygnc3ZnJyx7YXR0cnM6e1wid2lkdGhcIjpcIjE1XCIsXCJoZWlnaHRcIjpcIjE4XCIsXCJ2aWV3Qm94XCI6XCIwIDAgMTUgMThcIixcImZpbGxcIjpcIm5vbmVcIixcInhtbG5zXCI6XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wifX0sW19jKCdwYXRoJyx7YXR0cnM6e1wiZFwiOlwiTTcuNTgzMzMgMC42NjY2ODdDMy42NzUgMC42NjY2ODcgMC41IDMuODQxNjkgMC41IDcuNzUwMDJDMC41IDExLjY1ODQgMy42NzUgMTQuODMzNCA3LjU4MzMzIDE0LjgzMzRIOFYxNy4zMzM0QzEyLjA1IDE1LjM4MzQgMTQuNjY2NyAxMS41IDE0LjY2NjcgNy43NTAwMkMxNC42NjY3IDMuODQxNjkgMTEuNDkxNyAwLjY2NjY4NyA3LjU4MzMzIDAuNjY2Njg3Wk04LjQxNjY3IDEyLjc1SDYuNzVWMTEuMDgzNEg4LjQxNjY3VjEyLjc1Wk04LjQxNjY3IDkuODMzMzVINi43NUM2Ljc1IDcuMTI1MDIgOS4yNSA3LjMzMzM1IDkuMjUgNS42NjY2OUM5LjI1IDQuNzUwMDIgOC41IDQuMDAwMDIgNy41ODMzMyA0LjAwMDAyQzYuNjY2NjcgNC4wMDAwMiA1LjkxNjY3IDQuNzUwMDIgNS45MTY2NyA1LjY2NjY5SDQuMjVDNC4yNSAzLjgyNTAyIDUuNzQxNjcgMi4zMzMzNSA3LjU4MzMzIDIuMzMzMzVDOS40MjUgMi4zMzMzNSAxMC45MTY3IDMuODI1MDIgMTAuOTE2NyA1LjY2NjY5QzEwLjkxNjcgNy43NTAwMiA4LjQxNjY3IDcuOTU4MzUgOC40MTY2NyA5LjgzMzM1WlwiLFwiZmlsbFwiOlwiIzAwN0NCQVwifX0pXSldKSxfdm0uX3YoXCIgXCIpLF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcImhlbHAtY2VudGVyLWxpbmstbGFiZWxcIn0sW192bS5fdihfdm0uX3MoYm94LmxhYmVsX3N1cHBvcnQpKV0pXSldKSxfdm0uX3YoXCIgXCIpLF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcImhlbHAtY2VudGVyLWxpbmtcIn0sW19jKCdhJyx7YXR0cnM6e1wiaHJlZlwiOmJveC5saW5rX2dpdCxcInRhcmdldFwiOlwiX2JsYW5rXCJ9fSxbX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiaGVscC1jZW50ZXItbGluay1pY29uXCJ9LFtfYygnc3ZnJyx7YXR0cnM6e1wid2lkdGhcIjpcIjE2XCIsXCJoZWlnaHRcIjpcIjE2XCIsXCJ2aWV3Qm94XCI6XCIwIDAgMTYgMTZcIixcImZpbGxcIjpcIm5vbmVcIixcInhtbG5zXCI6XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wifX0sW19jKCdwYXRoJyx7YXR0cnM6e1wiZmlsbC1ydWxlXCI6XCJldmVub2RkXCIsXCJjbGlwLXJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk03Ljk3NiAwQzUuODYwNzEgMC4wMDAyNjUxNTYgMy44MzIxNCAwLjg0MDY3NiAyLjMzNjQxIDIuMzM2NDFDMC44NDA2NzYgMy44MzIxNCAwLjAwMDI2NTE1NiA1Ljg2MDcxIDAgNy45NzZDMCAxMS40OTggMi4zIDE0LjQ4MyA1LjQzMSAxNS41NkM1LjgyMyAxNS42MDkgNS45NjkgMTUuMzY0IDUuOTY5IDE1LjE2OFYxMy43OThDMy43NjggMTQuMjg4IDMuMjc5IDEyLjcyMiAzLjI3OSAxMi43MjJDMi45MzYgMTEuNzkyIDIuMzk4IDExLjU0NyAyLjM5OCAxMS41NDdDMS42NjQgMTEuMDU4IDIuNDQ2IDExLjA1OCAyLjQ0NiAxMS4wNThDMy4yMjkgMTEuMTA3IDMuNjcgMTEuODkgMy42NyAxMS44OUM0LjQwNCAxMy4xMTMgNS41MjkgMTIuNzcgNS45NyAxMi41NzVDNi4wMTggMTIuMDM3IDYuMjYzIDExLjY5NSA2LjQ1OSAxMS40OTlDNC42OTcgMTEuMzAzIDIuODM4IDEwLjYxOCAyLjgzOCA3LjUzNUMyLjgzOCA2LjY1NSAzLjEzMSA1Ljk2OSAzLjY3IDUuMzgyQzMuNjIgNS4yMzUgMy4zMjcgNC40MDQgMy43NjggMy4zMjdDMy43NjggMy4zMjcgNC40NTMgMy4xMzEgNS45NjkgNC4xNTlDNi42MDUgMy45NjMgNy4yOTEgMy45MTQgNy45NzYgMy45MTRDOC42NjEgMy45MTQgOS4zNDYgNC4wMTIgOS45ODIgNC4xNTlDMTEuNDk5IDMuMTMyIDEyLjE4NCAzLjMyNyAxMi4xODQgMy4zMjdDMTIuNjI0IDQuNDA0IDEyLjMzIDUuMjM1IDEyLjI4MSA1LjQzMUMxMi44MTk5IDYuMDE4MDggMTMuMTE3MSA2Ljc4NzEgMTMuMTEzIDcuNTg0QzEzLjExMyAxMC42NjcgMTEuMjUzIDExLjMwMyA5LjQ5MyAxMS40OTlDOS43ODYgMTEuNzQzIDEwLjAzMSAxMi4yMzIgMTAuMDMxIDEyLjk2NlYxNS4xNjhDMTAuMDMxIDE1LjM2NCAxMC4xNzcgMTUuNjA4IDEwLjU2OSAxNS41NkMxMi4xNTUgMTUuMDI0OCAxMy41MzI3IDE0LjAwNDYgMTQuNTA3MyAxMi42NDM2QzE1LjQ4MTggMTEuMjgyNyAxNi4wMDQgOS42NDk4OSAxNiA3Ljk3NkMxNS45NTEgMy41NzIgMTIuMzggMCA3Ljk3NiAwWlwiLFwiZmlsbFwiOlwiIzAwN0NCQVwifX0pXSldKSxfdm0uX3YoXCIgXCIpLF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcImhlbHAtY2VudGVyLWxpbmstbGFiZWxcIn0sW192bS5fdihfdm0uX3MoYm94LmxhYmVsX2dpdCkpXSldKV0pXX19XSl9KX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ2RpdicsX3ZtLl9sKChfdm0uY2FwdGNoYSksZnVuY3Rpb24odGFiLGluZGV4KXtyZXR1cm4gX2MoJ0N4VnVpQ29sbGFwc2VNaW5pJyx7a2V5OnRhYi5jb21wb25lbnQubmFtZSxhdHRyczp7XCJ3aXRoLXBhbmVsXCI6XCJcIixcImljb25cIjp0YWIuaWNvbixcImxhYmVsXCI6X3ZtLmdldFRhYlRpdGxlKCB0YWIgKSxcImRpc2FibGVkXCI6dGFiLmRpc2FibGVkLFwiaW5pdGlhbC1hY3RpdmVcIjpfdm0uaXNBY3RpdmUoIHRhYi5jb21wb25lbnQubmFtZSApfSxvbjp7XCJjaGFuZ2VcIjpmdW5jdGlvbigkZXZlbnQpe3JldHVybiBfdm0ub25DaGFuZ2VBY3RpdmUoICRldmVudCwgdGFiLmNvbXBvbmVudC5uYW1lICl9fX0sW19jKCdrZWVwLWFsaXZlJyxbX2ModGFiLmNvbXBvbmVudCx7cmVmOlwiY2FwdGNoYVwiLHJlZkluRm9yOnRydWUsdGFnOlwiY29tcG9uZW50XCIsYXR0cnM6e1wiaW5jb21pbmdcIjpfdm0uZ2V0SW5jb21pbmdDYXB0Y2hhKCB0YWIuY29tcG9uZW50Lm5hbWUgKX19KV0sMSksX3ZtLl92KFwiIFwiKSxfYygnY3gtdnVpLWJ1dHRvbicse2F0dHJzOntcImJ1dHRvbi1zdHlsZVwiOlwiYWNjZW50XCIsXCJsb2FkaW5nXCI6X3ZtLmxvYWRpbmdHYXRld2F5c1sgdGFiLmNvbXBvbmVudC5uYW1lIF19LG9uOntcImNsaWNrXCI6ZnVuY3Rpb24oJGV2ZW50KXtyZXR1cm4gX3ZtLm9uU2F2ZUdhdGV3YXkoIGluZGV4LCB0YWIuY29tcG9uZW50Lm5hbWUgKX19fSxbX2MoJ3NwYW4nLHthdHRyczp7XCJzbG90XCI6XCJsYWJlbFwifSxzbG90OlwibGFiZWxcIn0sW192bS5fdihcIlNhdmVcIildKV0pXSwxKX0pLDEpfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnY3gtdnVpLWlucHV0Jyx7YXR0cnM6e1wibGFiZWxcIjpfdm0ubGFiZWwuYXBpX2tleSxcIndyYXBwZXItY3NzXCI6WyAnZXF1YWx3aWR0aCcgXSxcImRlc2NyaXB0aW9uXCI6KChfdm0uaGVscC5hcGlQcmVmKSArIFwiIDxhIGhyZWY9XFxcIlwiICsgKF92bS5oZWxwLmFwaUxpbmspICsgXCJcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj5cIiArIChfdm0uaGVscC5hcGlMaW5rTGFiZWwpICsgXCI8L2E+XCIpLFwic2l6ZVwiOidmdWxsd2lkdGgnfSxtb2RlbDp7dmFsdWU6KF92bS5hcGlfa2V5KSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLmFwaV9rZXk9JCR2fSxleHByZXNzaW9uOlwiYXBpX2tleVwifX0pfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnY3gtdnVpLWlucHV0Jyx7YXR0cnM6e1wibGFiZWxcIjpfdm0ubGFiZWwuYXBpX2tleSxcIndyYXBwZXItY3NzXCI6WyAnZXF1YWx3aWR0aCcgXSxcImRlc2NyaXB0aW9uXCI6KChfdm0uaGVscC5hcGlQcmVmKSArIFwiIDxhIGhyZWY9XFxcIlwiICsgKF92bS5oZWxwLmFwaUxpbmspICsgXCJcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj5cIiArIChfdm0uaGVscC5hcGlMaW5rTGFiZWwpICsgXCI8L2E+XCIpLFwic2l6ZVwiOidmdWxsd2lkdGgnfSxtb2RlbDp7dmFsdWU6KF92bS5hcGlfa2V5KSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLmFwaV9rZXk9JCR2fSxleHByZXNzaW9uOlwiYXBpX2tleVwifX0pfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnZGl2JyxbX2MoJ2N4LXZ1aS1zd2l0Y2hlcicse2F0dHJzOntcIm5hbWVcIjpcImVuYWJsZV9kZXZfbW9kZVwiLFwid3JhcHBlci1jc3NcIjpbICdlcXVhbHdpZHRoJyBdLFwibGFiZWxcIjpfdm0ubG9hZGluZy5lbmFibGVfZGV2X21vZGUgPyAoKF92bS5sYWJlbC5lbmFibGVfZGV2X21vZGUpICsgXCIgKGxvYWRpbmcuLi4pXCIpIDogX3ZtLmxhYmVsLmVuYWJsZV9kZXZfbW9kZSxcImRlc2NyaXB0aW9uXCI6X3ZtLmhlbHAuZW5hYmxlX2Rldl9tb2RlLFwidmFsdWVcIjpfdm0uc3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSggJ2VuYWJsZV9kZXZfbW9kZScgKSA/IF92bS5zdG9yYWdlLmVuYWJsZV9kZXZfbW9kZSA6IGZhbHNlLFwiZGlzYWJsZWRcIjpfdm0uaXNMb2FkaW5nfSxvbjp7XCJpbnB1dFwiOmZ1bmN0aW9uKCRldmVudCl7cmV0dXJuIF92bS5jaGFuZ2VWYWwoICdlbmFibGVfZGV2X21vZGUnLCAkZXZlbnQgKX19fSksX3ZtLl92KFwiIFwiKSxfYygnY3gtdnVpLXN3aXRjaGVyJyx7YXR0cnM6e1wibmFtZVwiOlwiY2xlYXJfb25fdW5pbnN0YWxsXCIsXCJ3cmFwcGVyLWNzc1wiOlsgJ2VxdWFsd2lkdGgnIF0sXCJsYWJlbFwiOl92bS5sb2FkaW5nLmNsZWFyX29uX3VuaW5zdGFsbCA/ICgoX3ZtLmxhYmVsLmNsZWFyX29uX3VuaW5zdGFsbCkgKyBcIiAobG9hZGluZy4uLilcIikgOiBfdm0ubGFiZWwuY2xlYXJfb25fdW5pbnN0YWxsLFwiZGVzY3JpcHRpb25cIjpfdm0uaGVscC5jbGVhcl9vbl91bmluc3RhbGwsXCJ2YWx1ZVwiOl92bS5zdG9yYWdlLmhhc093blByb3BlcnR5KCAnY2xlYXJfb25fdW5pbnN0YWxsJyApID8gX3ZtLnN0b3JhZ2UuY2xlYXJfb25fdW5pbnN0YWxsIDogZmFsc2UsXCJkaXNhYmxlZFwiOl92bS5pc0xvYWRpbmd9LG9uOntcImlucHV0XCI6ZnVuY3Rpb24oJGV2ZW50KXtyZXR1cm4gX3ZtLmNoYW5nZVZhbCggJ2NsZWFyX29uX3VuaW5zdGFsbCcsICRldmVudCApfX19KSxfdm0uX3YoXCIgXCIpLF9jKCdjeC12dWktY29tcG9uZW50LXdyYXBwZXInLHthdHRyczp7XCJsYWJlbFwiOl92bS5fXyggJ0Zvcm0gQWNjZXNzaWJpbGl0eScsICdqZXQtZm9ybS1idWlsZGVyJyApLFwid3JhcHBlci1jc3NcIjpbICdlcXVhbHdpZHRoJyBdfX0pLF92bS5fdihcIiBcIiksX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiY3gtdnVpLWlubmVyLXBhbmVsXCJ9LFtfYygnY3gtdnVpLXN3aXRjaGVyJyx7YXR0cnM6e1wibmFtZVwiOlwiZGlzYWJsZV9uZXh0X2J1dHRvblwiLFwid3JhcHBlci1jc3NcIjpbICdlcXVhbHdpZHRoJyBdLFwibGFiZWxcIjpfdm0ubG9hZGluZy5kaXNhYmxlX25leHRfYnV0dG9uID8gKChfdm0ubGFiZWwuZGlzYWJsZV9uZXh0X2J1dHRvbikgKyBcIiAobG9hZGluZy4uLilcIikgOiBfdm0ubGFiZWwuZGlzYWJsZV9uZXh0X2J1dHRvbixcImRlc2NyaXB0aW9uXCI6X3ZtLmhlbHAuZGlzYWJsZV9uZXh0X2J1dHRvbixcInZhbHVlXCI6X3ZtLnN0b3JhZ2UuaGFzT3duUHJvcGVydHkoICdkaXNhYmxlX25leHRfYnV0dG9uJyApID8gX3ZtLnN0b3JhZ2UuZGlzYWJsZV9uZXh0X2J1dHRvbiA6IHRydWUsXCJkaXNhYmxlZFwiOl92bS5pc0xvYWRpbmd9LG9uOntcImlucHV0XCI6ZnVuY3Rpb24oJGV2ZW50KXtyZXR1cm4gX3ZtLmNoYW5nZVZhbCggJ2Rpc2FibGVfbmV4dF9idXR0b24nLCAkZXZlbnQgKX19fSksX3ZtLl92KFwiIFwiKSxfYygnY3gtdnVpLXN3aXRjaGVyJyx7YXR0cnM6e1wibmFtZVwiOlwic2Nyb2xsX29uX25leHRcIixcIndyYXBwZXItY3NzXCI6WyAnZXF1YWx3aWR0aCcgXSxcImxhYmVsXCI6X3ZtLmxvYWRpbmcuc2Nyb2xsX29uX25leHQgPyAoKF92bS5sYWJlbC5zY3JvbGxfb25fbmV4dCkgKyBcIiAobG9hZGluZy4uLilcIikgOiBfdm0ubGFiZWwuc2Nyb2xsX29uX25leHQsXCJkZXNjcmlwdGlvblwiOl92bS5oZWxwLnNjcm9sbF9vbl9uZXh0LFwidmFsdWVcIjpfdm0uc3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSggJ3Njcm9sbF9vbl9uZXh0JyApID8gX3ZtLnN0b3JhZ2Uuc2Nyb2xsX29uX25leHQgOiBmYWxzZSxcImRpc2FibGVkXCI6X3ZtLmlzTG9hZGluZ30sb246e1wiaW5wdXRcIjpmdW5jdGlvbigkZXZlbnQpe3JldHVybiBfdm0uY2hhbmdlVmFsKCAnc2Nyb2xsX29uX25leHQnLCAkZXZlbnQgKX19fSksX3ZtLl92KFwiIFwiKSxfYygnY3gtdnVpLXN3aXRjaGVyJyx7YXR0cnM6e1wibmFtZVwiOlwiYXV0b19mb2N1c1wiLFwid3JhcHBlci1jc3NcIjpbICdlcXVhbHdpZHRoJyBdLFwibGFiZWxcIjpfdm0ubG9hZGluZy5hdXRvX2ZvY3VzID8gKChfdm0ubGFiZWwuYXV0b19mb2N1cykgKyBcIiAobG9hZGluZy4uLilcIikgOiBfdm0ubGFiZWwuYXV0b19mb2N1cyxcImRlc2NyaXB0aW9uXCI6X3ZtLmhlbHAuYXV0b19mb2N1cyxcInZhbHVlXCI6X3ZtLnN0b3JhZ2UuaGFzT3duUHJvcGVydHkoICdhdXRvX2ZvY3VzJyApID8gX3ZtLnN0b3JhZ2UuYXV0b19mb2N1cyA6IGZhbHNlLFwiZGlzYWJsZWRcIjpfdm0uaXNMb2FkaW5nfSxvbjp7XCJpbnB1dFwiOmZ1bmN0aW9uKCRldmVudCl7cmV0dXJuIF92bS5jaGFuZ2VWYWwoICdhdXRvX2ZvY3VzJywgJGV2ZW50ICl9fX0pXSwxKV0sMSl9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdzZWN0aW9uJyxbX2MoJ2N4LXZ1aS1zd2l0Y2hlcicse2F0dHJzOntcIm5hbWVcIjpcInVzZV9nYXRld2F5c1wiLFwid3JhcHBlci1jc3NcIjpbICdlcXVhbHdpZHRoJyBdLFwibGFiZWxcIjpfdm0ubGFiZWwudXNlX2dhdGV3YXlzLFwiZGVzY3JpcHRpb25cIjpfdm0uaGVscC51c2VfZ2F0ZXdheXMsXCJ2YWx1ZVwiOl92bS5zdG9yYWdlLnVzZV9nYXRld2F5c30sb246e1wiaW5wdXRcIjpmdW5jdGlvbigkZXZlbnQpe3JldHVybiBfdm0uY2hhbmdlVmFsKCAndXNlX2dhdGV3YXlzJywgJGV2ZW50ICl9fX0pLF92bS5fdihcIiBcIiksKF92bS5zdG9yYWdlLnVzZV9nYXRld2F5cyk/X2MoJ2N4LXZ1aS1zd2l0Y2hlcicse2F0dHJzOntcIm5hbWVcIjpcImVuYWJsZV90ZXN0X21vZGVcIixcIndyYXBwZXItY3NzXCI6WyAnZXF1YWx3aWR0aCcgXSxcImRlc2NyaXB0aW9uXCI6X3ZtLmhlbHAuZW5hYmxlX3Rlc3RfbW9kZSxcImxhYmVsXCI6X3ZtLmxhYmVsLmVuYWJsZV90ZXN0X21vZGUsXCJ2YWx1ZVwiOl92bS5zdG9yYWdlLmVuYWJsZV90ZXN0X21vZGV9LG9uOntcImlucHV0XCI6ZnVuY3Rpb24oJGV2ZW50KXtyZXR1cm4gX3ZtLmNoYW5nZVZhbCggJ2VuYWJsZV90ZXN0X21vZGUnLCAkZXZlbnQgKX19fSk6X3ZtLl9lKCksX3ZtLl92KFwiIFwiKSwoX3ZtLnN0b3JhZ2UudXNlX2dhdGV3YXlzKT9bX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiY3gtdnVpLWlubmVyLXBhbmVsXCJ9LF92bS5fbCgoX3ZtLmdhdGV3YXlzKSxmdW5jdGlvbih0YWIsaW5kZXgpe3JldHVybiBfYygnQ3hWdWlDb2xsYXBzZU1pbmknLHtrZXk6dGFiLmNvbXBvbmVudC5uYW1lLGF0dHJzOntcIndpdGgtcGFuZWxcIjpcIlwiLFwiaWNvblwiOnRhYi5pY29uLFwibGFiZWxcIjp0YWIudGl0bGUsXCJkaXNhYmxlZFwiOnRhYi5kaXNhYmxlZCxcImluaXRpYWwtYWN0aXZlXCI6X3ZtLmlzQWN0aXZlKCB0YWIuY29tcG9uZW50Lm5hbWUgKX0sb246e1wiY2hhbmdlXCI6ZnVuY3Rpb24oJGV2ZW50KXtyZXR1cm4gX3ZtLm9uQ2hhbmdlQWN0aXZlKCAkZXZlbnQsIHRhYi5jb21wb25lbnQubmFtZSApfX19LFtfYygna2VlcC1hbGl2ZScsW19jKHRhYi5jb21wb25lbnQse3JlZjpcImdhdGV3YXlzXCIscmVmSW5Gb3I6dHJ1ZSx0YWc6XCJjb21wb25lbnRcIixhdHRyczp7XCJpbmNvbWluZ1wiOl92bS5nZXRJbmNvbWluZyggdGFiLmNvbXBvbmVudC5uYW1lICl9fSldLDEpLF92bS5fdihcIiBcIiksX2MoJ2N4LXZ1aS1idXR0b24nLHthdHRyczp7XCJidXR0b24tc3R5bGVcIjpcImFjY2VudFwiLFwibG9hZGluZ1wiOl92bS5sb2FkaW5nR2F0ZXdheXNbIHRhYi5jb21wb25lbnQubmFtZSBdfSxvbjp7XCJjbGlja1wiOmZ1bmN0aW9uKCRldmVudCl7cmV0dXJuIF92bS5vblNhdmVHYXRld2F5KCBpbmRleCwgdGFiLmNvbXBvbmVudC5uYW1lICl9fX0sW19jKCdzcGFuJyx7YXR0cnM6e1wic2xvdFwiOlwibGFiZWxcIn0sc2xvdDpcImxhYmVsXCJ9LFtfdm0uX3YoXCJTYXZlXCIpXSldKV0sMSl9KSwxKV06X3ZtLl9lKCldLDIpfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyIC8qIHNlcnZlciBvbmx5ICovLFxuICBzaGFkb3dNb2RlIC8qIHZ1ZS1jbGkgb25seSAqL1xuKSB7XG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPVxuICAgIHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7XG4gICAgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpbmplY3RTdHlsZXMuY2FsbChcbiAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAob3B0aW9ucy5mdW5jdGlvbmFsID8gdGhpcy5wYXJlbnQgOiB0aGlzKS4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9uYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24oaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZyA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaykgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NldHRpbmdzUGFnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00YjQzNTAwZSZsYW5nPXNjc3NcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiN2ZlMDg1ZjdcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZXR0aW5nc1BhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NGI0MzUwMGUmbGFuZz1zY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZXR0aW5nc1BhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NGI0MzUwMGUmbGFuZz1zY3NzXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2V0dGluZ3NTaWRlQmFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQyNTRiNjRjJmxhbmc9c2Nzc1wiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI1ODAxNGExMVwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NldHRpbmdzU2lkZUJhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00MjU0YjY0YyZsYW5nPXNjc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NldHRpbmdzU2lkZUJhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00MjU0YjY0YyZsYW5nPXNjc3NcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0lzUFJPSWNvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xNGJhYTIzMCZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCJiNzEwZWNkOFwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSXNQUk9JY29uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE0YmFhMjMwJnNjb3BlZD10cnVlJmxhbmc9Y3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0lzUFJPSWNvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xNGJhYTIzMCZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4gIE1vZGlmaWVkIGJ5IEV2YW4gWW91IEB5eXg5OTA4MDNcbiovXG5cbmltcG9ydCBsaXN0VG9TdHlsZXMgZnJvbSAnLi9saXN0VG9TdHlsZXMnXG5cbnZhciBoYXNEb2N1bWVudCA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcblxuaWYgKHR5cGVvZiBERUJVRyAhPT0gJ3VuZGVmaW5lZCcgJiYgREVCVUcpIHtcbiAgaWYgKCFoYXNEb2N1bWVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAndnVlLXN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50LiAnICtcbiAgICBcIlVzZSB7IHRhcmdldDogJ25vZGUnIH0gaW4geW91ciBXZWJwYWNrIGNvbmZpZyB0byBpbmRpY2F0ZSBhIHNlcnZlci1yZW5kZXJpbmcgZW52aXJvbm1lbnQuXCJcbiAgKSB9XG59XG5cbi8qXG50eXBlIFN0eWxlT2JqZWN0ID0ge1xuICBpZDogbnVtYmVyO1xuICBwYXJ0czogQXJyYXk8U3R5bGVPYmplY3RQYXJ0PlxufVxuXG50eXBlIFN0eWxlT2JqZWN0UGFydCA9IHtcbiAgY3NzOiBzdHJpbmc7XG4gIG1lZGlhOiBzdHJpbmc7XG4gIHNvdXJjZU1hcDogP3N0cmluZ1xufVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0gey8qXG4gIFtpZDogbnVtYmVyXToge1xuICAgIGlkOiBudW1iZXIsXG4gICAgcmVmczogbnVtYmVyLFxuICAgIHBhcnRzOiBBcnJheTwob2JqPzogU3R5bGVPYmplY3RQYXJ0KSA9PiB2b2lkPlxuICB9XG4qL31cblxudmFyIGhlYWQgPSBoYXNEb2N1bWVudCAmJiAoZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdKVxudmFyIHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsXG52YXIgc2luZ2xldG9uQ291bnRlciA9IDBcbnZhciBpc1Byb2R1Y3Rpb24gPSBmYWxzZVxudmFyIG5vb3AgPSBmdW5jdGlvbiAoKSB7fVxudmFyIG9wdGlvbnMgPSBudWxsXG52YXIgc3NySWRLZXkgPSAnZGF0YS12dWUtc3NyLWlkJ1xuXG4vLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbi8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcbnZhciBpc09sZElFID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgL21zaWUgWzYtOV1cXGIvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRTdHlsZXNDbGllbnQgKHBhcmVudElkLCBsaXN0LCBfaXNQcm9kdWN0aW9uLCBfb3B0aW9ucykge1xuICBpc1Byb2R1Y3Rpb24gPSBfaXNQcm9kdWN0aW9uXG5cbiAgb3B0aW9ucyA9IF9vcHRpb25zIHx8IHt9XG5cbiAgdmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbGlzdClcbiAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcbiAgICB2YXIgbWF5UmVtb3ZlID0gW11cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdXG4gICAgICBkb21TdHlsZS5yZWZzLS1cbiAgICAgIG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKVxuICAgIH1cbiAgICBpZiAobmV3TGlzdCkge1xuICAgICAgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBuZXdMaXN0KVxuICAgICAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXMgPSBbXVxuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldXG4gICAgICBpZiAoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgZG9tU3R5bGUucGFydHNbal0oKVxuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcyAvKiBBcnJheTxTdHlsZU9iamVjdD4gKi8pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdXG4gICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICBkb21TdHlsZS5yZWZzKytcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSlcbiAgICAgIH1cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgaWYgKGRvbVN0eWxlLnBhcnRzLmxlbmd0aCA+IGl0ZW0ucGFydHMubGVuZ3RoKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLmxlbmd0aCA9IGl0ZW0ucGFydHMubGVuZ3RoXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwYXJ0cyA9IFtdXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgcGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIHN0eWxlc0luRG9tW2l0ZW0uaWRdID0geyBpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50ICgpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcbiAgc3R5bGVFbGVtZW50LnR5cGUgPSAndGV4dC9jc3MnXG4gIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KVxuICByZXR1cm4gc3R5bGVFbGVtZW50XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gIHZhciB1cGRhdGUsIHJlbW92ZVxuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3R5bGVbJyArIHNzcklkS2V5ICsgJ349XCInICsgb2JqLmlkICsgJ1wiXScpXG5cbiAgaWYgKHN0eWxlRWxlbWVudCkge1xuICAgIGlmIChpc1Byb2R1Y3Rpb24pIHtcbiAgICAgIC8vIGhhcyBTU1Igc3R5bGVzIGFuZCBpbiBwcm9kdWN0aW9uIG1vZGUuXG4gICAgICAvLyBzaW1wbHkgZG8gbm90aGluZy5cbiAgICAgIHJldHVybiBub29wXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGhhcyBTU1Igc3R5bGVzIGJ1dCBpbiBkZXYgbW9kZS5cbiAgICAgIC8vIGZvciBzb21lIHJlYXNvbiBDaHJvbWUgY2FuJ3QgaGFuZGxlIHNvdXJjZSBtYXAgaW4gc2VydmVyLXJlbmRlcmVkXG4gICAgICAvLyBzdHlsZSB0YWdzIC0gc291cmNlIG1hcHMgaW4gPHN0eWxlPiBvbmx5IHdvcmtzIGlmIHRoZSBzdHlsZSB0YWcgaXNcbiAgICAgIC8vIGNyZWF0ZWQgYW5kIGluc2VydGVkIGR5bmFtaWNhbGx5LiBTbyB3ZSByZW1vdmUgdGhlIHNlcnZlciByZW5kZXJlZFxuICAgICAgLy8gc3R5bGVzIGFuZCBpbmplY3QgbmV3IG9uZXMuXG4gICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgaWYgKGlzT2xkSUUpIHtcbiAgICAvLyB1c2Ugc2luZ2xldG9uIG1vZGUgZm9yIElFOS5cbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrK1xuICAgIHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQoKSlcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSlcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKVxuICB9IGVsc2Uge1xuICAgIC8vIHVzZSBtdWx0aS1zdHlsZS10YWcgbW9kZSBpbiBhbGwgb3RoZXIgY2FzZXNcbiAgICBzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQoKVxuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZShvYmopXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcbiAgICAgICAgICBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuICAgICAgICAgIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKVxuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKVxuICAgIH1cbiAgfVxufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgdGV4dFN0b3JlID0gW11cblxuICByZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudFxuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpXG4gIH1cbn0pKClcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzc1xuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKVxuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKVxuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXNcbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSlcbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZUVsZW1lbnQsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzc1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWFcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXBcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKVxuICB9XG4gIGlmIChvcHRpb25zLnNzcklkKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShzc3JJZEtleSwgb2JqLmlkKVxuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZGV2dG9vbHMvZG9jcy9qYXZhc2NyaXB0LWRlYnVnZ2luZ1xuICAgIC8vIHRoaXMgbWFrZXMgc291cmNlIG1hcHMgaW5zaWRlIHN0eWxlIHRhZ3Mgd29yayBwcm9wZXJseSBpbiBDaHJvbWVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VVUkw9JyArIHNvdXJjZU1hcC5zb3VyY2VzWzBdICsgJyAqLydcbiAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwnICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArICcgKi8nXG4gIH1cblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzXG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpXG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKVxuICB9XG59XG4iLCIvKipcbiAqIFRyYW5zbGF0ZXMgdGhlIGxpc3QgZm9ybWF0IHByb2R1Y2VkIGJ5IGNzcy1sb2FkZXIgaW50byBzb21ldGhpbmdcbiAqIGVhc2llciB0byBtYW5pcHVsYXRlLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaXN0VG9TdHlsZXMgKHBhcmVudElkLCBsaXN0KSB7XG4gIHZhciBzdHlsZXMgPSBbXVxuICB2YXIgbmV3U3R5bGVzID0ge31cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldXG4gICAgdmFyIGlkID0gaXRlbVswXVxuICAgIHZhciBjc3MgPSBpdGVtWzFdXG4gICAgdmFyIG1lZGlhID0gaXRlbVsyXVxuICAgIHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdXG4gICAgdmFyIHBhcnQgPSB7XG4gICAgICBpZDogcGFyZW50SWQgKyAnOicgKyBpLFxuICAgICAgY3NzOiBjc3MsXG4gICAgICBtZWRpYTogbWVkaWEsXG4gICAgICBzb3VyY2VNYXA6IHNvdXJjZU1hcFxuICAgIH1cbiAgICBpZiAoIW5ld1N0eWxlc1tpZF0pIHtcbiAgICAgIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7IGlkOiBpZCwgcGFydHM6IFtwYXJ0XSB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0eWxlc1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImkxOG5cIl07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9hZGRvbnMtdGFicyc7XHJcbmltcG9ydCBTZXR0aW5nc1BhZ2UgZnJvbSAnLi9TZXR0aW5nc1BhZ2UnO1xyXG5cclxuY29uc3QgeyByZW5kZXJDdXJyZW50UGFnZSB9ID0gd2luZG93LkpldEZCQWN0aW9ucztcclxuY29uc3QgeyBOb3RpY2VzUGx1Z2luIH0gPSBKZXRGQlN0b3JlO1xyXG5cclxuY29uc3Qgc3RvcmUgPSBuZXcgVnVleC5TdG9yZSgge1xyXG5cdHBsdWdpbnM6IFsgTm90aWNlc1BsdWdpbiBdXHJcbn0gKVxyXG5cclxucmVuZGVyQ3VycmVudFBhZ2UoIFNldHRpbmdzUGFnZSwgeyBzdG9yZSB9ICk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9