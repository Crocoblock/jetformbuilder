/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/field/PhoneFieldData.js"
/*!******************************************!*\
  !*** ./frontend/field/PhoneFieldData.js ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _i18n_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./i18n-loader */ "./frontend/field/i18n-loader.js");

const {
  InputData
} = window.JetFormBuilderAbstract;

/**
 * International Phone Field Data Handler
 *
 * Handles intl-tel-input initialization, validation, and data processing
 */
function PhoneFieldData() {
  InputData.call(this);
  this.itiInstance = null;
  this.isInitialized = false;

  /**
   * Check if this handler supports the field
   * @param node
   */
  this.isSupported = function (node) {
    const supported = node.classList.contains('phone-field');
    return supported;
  };
  this.setNode = function (node) {
    InputData.prototype.setNode.call(this, node);
    this.initIntlTelInput();
  };

  /**
   * Initialize intl-tel-input on the field
   * Loads translations asynchronously before initialization
   */
  this.initIntlTelInput = async function () {
    const node = this.nodes[0];
    if (!node) {
      return;
    }
    if (this.isInitialized) {
      return;
    }
    const wrapper = this.getWrapperNode();
    const input = wrapper.querySelector('input.phone-field-intl');

    // Get configuration from data attributes
    const defaultCountry = node.dataset.defaultCountry || 'auto';
    const preferredCountries = this.parseCountryList(node.dataset.preferredCountries);
    const onlyCountries = this.parseCountryList(node.dataset.onlyCountries);
    const excludeCountries = this.parseCountryList(node.dataset.excludeCountries);
    const separateDialCode = node.dataset.separateDialCode || false;
    const ipinfoToken = node.dataset.ipinfoToken || '';
    // Determine initial country
    let initialCountry = defaultCountry;
    if (initialCountry === 'auto') {
      initialCountry = this.detectCountryByIP(ipinfoToken) || this.detectCountryByLanguage() || 'us';
    }

    // Load localized country names (async)
    const i18n = await this.getLocalizedCountryNames();

    // Build config object, only include arrays if they have items
    const config = {
      initialCountry,
      separateDialCode: separateDialCode === '1',
      strictMode: true,
      nationalMode: true,
      formatAsYouType: true,
      formatOnDisplay: true,
      autoPlaceholder: 'aggressive',
      validationNumberTypes: ['MOBILE', 'FIXED_LINE', 'FIXED_LINE_OR_MOBILE']
    };

    // Only add arrays if they have items
    if (preferredCountries.length) {
      config.countryOrder = preferredCountries;
    }
    if (onlyCountries.length) {
      config.onlyCountries = onlyCountries;
    }
    if (excludeCountries.length) {
      config.excludeCountries = excludeCountries;
    }
    if (Object.keys(i18n).length) {
      config.i18n = i18n;
    }

    // Initialize intl-tel-input
    this.itiInstance = window.intlTelInput(input, config);
    this.itiInstance.setNumber(node.value);
    this.isInitialized = true;
  };
  this.normalizeIfInternational = function (input) {
    const value = input.value.trim();
    if (!value) {
      return;
    }
    if ('+' === value[0]) {
      this.itiInstance.setNumber(value);
      this.setValue();
    }
  };

  /**
   * Parse comma-separated country list
   * @param str
   */
  this.parseCountryList = function (str) {
    if (!str) {
      return [];
    }
    return str.split(',').map(c => c.trim().toLowerCase()).filter(c => c);
  };

  /**
   * Detect country by IP using ipinfo.io
   * @param token
   */
  this.detectCountryByIP = function (token) {
    // Use cached value if available
    const cached = sessionStorage.getItem('jfb_detected_country');
    if (cached) {
      return cached;
    }
    const url = token ? `https://api.ipinfo.io/lite/me?token=${token}` : 'https://ipinfo.io/json';
    fetch(url).then(response => response.json()).then(data => {
      if (data.country) {
        const country = data.country.toLowerCase();
        sessionStorage.setItem('jfb_detected_country', country);

        // Update field if still in auto mode
        if (this.itiInstance) {
          this.itiInstance.setCountry(country);
        }
      }
    }).catch(() => {});
    return null;
  };

  /**
   * Detect country by browser language
   */
  this.detectCountryByLanguage = function () {
    const lang = navigator.language || navigator.userLanguage;
    if (!lang) {
      return null;
    }

    // Extract country code from language (e.g., en-US -> us)
    const parts = lang.split('-');
    if (parts.length > 1) {
      return parts[1].toLowerCase();
    }

    // Language to country mapping
    const langToCountry = {
      'en': 'us',
      'ru': 'ru',
      'uk': 'ua',
      'de': 'de',
      'fr': 'fr',
      'es': 'es',
      'it': 'it',
      'pl': 'pl',
      'pt': 'br',
      'ja': 'jp',
      'ko': 'kr',
      'zh': 'cn',
      'ar': 'sa',
      'he': 'il',
      'hi': 'in'
    };
    return langToCountry[parts[0].toLowerCase()] || null;
  };

  /**
   * Get localized country names
   *
   * Priority order:
   * 1. Custom WordPress translations (via wp_localize_script and filters)
   * 2. intl-tel-input library translations (loaded dynamically)
   * 3. intl-tel-input built-in English names (fallback)
   */
  this.getLocalizedCountryNames = async function () {
    // Get translations provided by WordPress (via wp_localize_script)
    const wpTranslations = typeof window.jfbPhoneFieldI18n !== 'undefined' ? window.jfbPhoneFieldI18n : {};

    // Load intl-tel-input library translations based on WordPress locale
    let libraryTranslations = {};
    try {
      libraryTranslations = await (0,_i18n_loader__WEBPACK_IMPORTED_MODULE_0__.loadCurrentLocaleTranslations)();
    } catch {}

    // Merge translations: WordPress overrides library translations
    const mergedTranslations = {
      ...libraryTranslations,
      ...wpTranslations
    };
    return mergedTranslations;
  };

  /**
   * Add event listeners
   */
  this.addListeners = function () {
    InputData.prototype.addListeners.call(this);
    const node = this.nodes[0]; // Main field (phone)
    if (!node) {
      return;
    }
    const wrapper = this.getWrapperNode();
    const input = wrapper.querySelector('input.phone-field-intl'); // intl-tel-input field

    if (!input) {
      return;
    }

    // Add form submit listener to validate before submission
    const form = node.closest('form');
    if (form) {
      form.addEventListener('submit', () => {
        this.normalizeIfInternational(input);
        this.syncFromIntlInput(input, node);

        // Validate and show error before submit
        this.validateAndShowError();
      }, true); // Use capture phase to run before JetFormBuilder
    }

    // Listen for country change
    input.addEventListener('countrychange', () => {
      this.syncFromIntlInput(input, node);
      if (wrapper.classList.contains('field-has-error')) {
        this.validateAndShowError();
      }
    });

    // Listen for input
    input.addEventListener('input', () => {
      this.normalizeIfInternational(input);
      this.syncFromIntlInput(input, node);
      // Clear error while typing
      if (input.value.trim()) {
        this.clearError();
      }
    });
    input.addEventListener('change', () => {
      this.normalizeIfInternational(input);
      this.syncFromIntlInput(input, node);
    });

    // Listen for blur (validate on blur)
    input.addEventListener('blur', () => {
      setTimeout(() => {
        this.normalizeIfInternational(input);
        this.syncFromIntlInput(input, node);
        this.validateAndShowError();
      }, 0);
    });
  };

  /**
   * Sync value from intl-tel-input field to main field
   * @param intlInput
   * @param mainField
   */
  // eslint-disable-next-line no-unused-vars
  this.syncFromIntlInput = function (intlInput, mainField) {
    if (!this.itiInstance) {
      return;
    }

    // Determine save format from data attribute
    const saveFormat = mainField.dataset.saveFormat || 'e164';
    let formattedNumber;

    // Get formatted number based on save format
    switch (saveFormat) {
      case 'international':
        formattedNumber = this.itiInstance.getNumber(window.intlTelInput.utils.numberFormat.INTERNATIONAL);
        break;
      case 'e164':
      default:
        formattedNumber = this.itiInstance.getNumber(); // E.164 is default
        break;
    }

    // Update main field value (this is what gets submitted)
    mainField.value = formattedNumber || '';

    // Update JetFormBuilder's internal tracking
    this.calcValue = formattedNumber || '';
    this.value.current = formattedNumber || '';
  };

  /**
   * Show error message under the phone field
   * @param message
   */
  this.showError = function (message) {
    const wrapper = this.getWrapperNode();
    if (!wrapper) {
      return;
    }

    // Remove existing error first
    this.clearError();

    // Add error class to wrapper
    wrapper.classList.add('field-has-error');

    // Create error element
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message jet-form-builder__error';
    errorDiv.textContent = message;

    // Find where to insert error
    const colEnd = wrapper.querySelector('.jet-form-builder-col__end');
    if (colEnd) {
      colEnd.appendChild(errorDiv);
    } else {
      wrapper.appendChild(errorDiv);
    }

    // Mark intl input as invalid
    const intlInput = wrapper.querySelector('input.phone-field-intl');
    if (intlInput) {
      intlInput.classList.add('invalid');
      intlInput.setAttribute('aria-invalid', 'true');
    }
  };

  /**
   * Clear error message
   */
  this.clearError = function () {
    const wrapper = this.getWrapperNode();
    if (!wrapper) {
      return;
    }

    // Remove error class
    wrapper.classList.remove('field-has-error');

    // Remove error message
    const errorDiv = wrapper.querySelector('.error-message');
    if (errorDiv) {
      errorDiv.remove();
    }

    // Remove invalid class from intl input
    const intlInput = wrapper.querySelector('input.phone-field-intl');
    if (intlInput) {
      intlInput.classList.remove('invalid');
      intlInput.removeAttribute('aria-invalid');
    }
  };

  /**
   * Get validation message from data-attributes or fallback
   * @param type
   */
  this.getValidationMessage = function (type) {
    const mainField = this.nodes[0];

    // Get custom message from block settings (data-attributes)
    if (type === 'required' && mainField.dataset.validationMessageRequired) {
      return mainField.dataset.validationMessageRequired;
    }
    if (type === 'invalid' && mainField.dataset.validationMessageInvalid) {
      return mainField.dataset.validationMessageInvalid;
    }

    // Fallback to default messages
    return type === 'required' ? 'This field is required' : 'Please enter a valid phone number';
  };

  /**
   * Validate phone number and show error if invalid
   */
  this.validateAndShowError = function () {
    const wrapper = this.getWrapperNode();
    const intlInput = wrapper?.querySelector('input.phone-field-intl');
    const mainField = this.nodes[0];
    if (!intlInput) {
      return true;
    }
    const value = intlInput.value.trim();

    // Check if field is required and empty
    if (mainField.hasAttribute('required') && !value) {
      this.showError(this.getValidationMessage('required'));
      return false;
    }

    // If field is not empty, validate phone number
    if (value && this.itiInstance) {
      const isValid = this.itiInstance.isValidNumber();
      if (!isValid) {
        this.showError(this.getValidationMessage('invalid'));
        return false;
      }
    }

    // Clear error if valid
    this.clearError();
    return true;
  };

  /**
   * Override getReportingNode to show errors under intl-tel-input field
   * Used by BrowserReporting
   */
  this.getReportingNode = function () {
    const wrapper = this.getWrapperNode();
    const intlInput = wrapper?.querySelector('input.phone-field-intl');

    // Return intl input if found, otherwise return main node
    return intlInput || this.nodes[0];
  };

  /**
   * Override getWrapperNode to ensure correct wrapper is returned
   */
  this.getWrapperNode = function () {
    const node = this.nodes[0];
    if (!node) {
      return null;
    }

    // Find the .jet-form-builder-row wrapper
    const wrapper = node.closest('.jet-form-builder-row');
    return wrapper;
  };

  /**
   * Override setValue to get value from intl-tel-input
   */
  PhoneFieldData.prototype.setValue = function () {
    const node = this.nodes[0]; // Main field
    if (!node) {
      return '';
    }
    if (!this.itiInstance) {
      // If intl-tel-input not initialized yet, use node value
      this.calcValue = node.value;
      this.value.current = node.value;
      return node.value;
    }

    // Determine save format from data attribute
    const saveFormat = node.dataset.saveFormat || 'e164';
    let fieldValue;

    // Get formatted number based on save format
    switch (saveFormat) {
      case 'international':
        fieldValue = this.itiInstance.getNumber(window.intlTelInputUtils.numberFormat.INTERNATIONAL);
        break;
      case 'e164':
      default:
        fieldValue = this.itiInstance.getNumber(); // E.164 is default
        break;
    }
    node.value = fieldValue || '';
    this.calcValue = fieldValue || '';
    this.value.current = fieldValue || '';
    return fieldValue;
  };
}

// Set up prototype chain
PhoneFieldData.prototype = Object.create(InputData.prototype);
PhoneFieldData.prototype.constructor = PhoneFieldData;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PhoneFieldData);

/***/ },

/***/ "./frontend/field/i18n-loader.js"
/*!***************************************!*\
  !*** ./frontend/field/i18n-loader.js ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getPageLocale: () => (/* binding */ getPageLocale),
/* harmony export */   getSiteLocale: () => (/* binding */ getSiteLocale),
/* harmony export */   loadCurrentLocaleTranslations: () => (/* binding */ loadCurrentLocaleTranslations),
/* harmony export */   loadIntlTelInputLocale: () => (/* binding */ loadIntlTelInputLocale),
/* harmony export */   normalizeLocale: () => (/* binding */ normalizeLocale),
/* harmony export */   resolveCurrentLocale: () => (/* binding */ resolveCurrentLocale),
/* harmony export */   resolveIntlLocale: () => (/* binding */ resolveIntlLocale)
/* harmony export */ });
/**
 * i18n Loader for intl-tel-input translations (side-effect imports)
 *
 * This module uses side-effect imports as recommended by intl-tel-input authors.
 * Each locale import registers itself in the global intlTelInputGlobals object.
 */

/**
 * Map normalized locale codes to intl-tel-input i18n folder names.
 */
const localeMap = {
  ar: 'ar',
  bg: 'bg',
  bn: 'bn',
  bs: 'bs',
  ca: 'ca',
  cs: 'cs',
  da: 'da',
  de: 'de',
  el: 'el',
  en: 'en',
  es: 'es',
  fa: 'fa',
  fi: 'fi',
  fr: 'fr',
  hi: 'hi',
  hr: 'hr',
  hu: 'hu',
  id: 'id',
  it: 'it',
  ja: 'ja',
  ko: 'ko',
  mr: 'mr',
  nl: 'nl',
  no: 'no',
  pl: 'pl',
  pt: 'pt',
  ro: 'ro',
  ru: 'ru',
  sk: 'sk',
  sv: 'sv',
  te: 'te',
  th: 'th',
  tr: 'tr',
  uk: 'uk',
  ur: 'ur',
  vi: 'vi',
  zh: 'zh'
};

/**
 * Dynamic import loaders for each supported locale
 * These are side-effect imports that register translations globally
 * Note: English is built-in to intl-tel-input, so no loader needed
 */
const loaders = {
  uk: () => __webpack_require__.e(/*! import() | phone-i18n-uk */ "phone-i18n-uk").then(__webpack_require__.bind(__webpack_require__, /*! ../../../lib/intl-tel-input/i18n/uk */ "../lib/intl-tel-input/i18n/uk/index.js")),
  ru: () => __webpack_require__.e(/*! import() | phone-i18n-ru */ "phone-i18n-ru").then(__webpack_require__.bind(__webpack_require__, /*! ../../../lib/intl-tel-input/i18n/ru */ "../lib/intl-tel-input/i18n/ru/index.js")),
  de: () => __webpack_require__.e(/*! import() | phone-i18n-de */ "phone-i18n-de").then(__webpack_require__.bind(__webpack_require__, /*! ../../../lib/intl-tel-input/i18n/de */ "../lib/intl-tel-input/i18n/de/index.js")),
  fr: () => __webpack_require__.e(/*! import() | phone-i18n-fr */ "phone-i18n-fr").then(__webpack_require__.bind(__webpack_require__, /*! ../../../lib/intl-tel-input/i18n/fr */ "../lib/intl-tel-input/i18n/fr/index.js")),
  es: () => __webpack_require__.e(/*! import() | phone-i18n-es */ "phone-i18n-es").then(__webpack_require__.bind(__webpack_require__, /*! ../../../lib/intl-tel-input/i18n/es */ "../lib/intl-tel-input/i18n/es/index.js")),
  it: () => __webpack_require__.e(/*! import() | phone-i18n-it */ "phone-i18n-it").then(__webpack_require__.bind(__webpack_require__, /*! ../../../lib/intl-tel-input/i18n/it */ "../lib/intl-tel-input/i18n/it/index.js")),
  pl: () => __webpack_require__.e(/*! import() | phone-i18n-pl */ "phone-i18n-pl").then(__webpack_require__.bind(__webpack_require__, /*! ../../../lib/intl-tel-input/i18n/pl */ "../lib/intl-tel-input/i18n/pl/index.js")),
  pt: () => __webpack_require__.e(/*! import() | phone-i18n-pt */ "phone-i18n-pt").then(__webpack_require__.bind(__webpack_require__, /*! ../../../lib/intl-tel-input/i18n/pt */ "../lib/intl-tel-input/i18n/pt/index.js")),
  nl: () => __webpack_require__.e(/*! import() | phone-i18n-nl */ "phone-i18n-nl").then(__webpack_require__.bind(__webpack_require__, /*! ../../../lib/intl-tel-input/i18n/nl */ "../lib/intl-tel-input/i18n/nl/index.js")),
  ja: () => __webpack_require__.e(/*! import() | phone-i18n-ja */ "phone-i18n-ja").then(__webpack_require__.bind(__webpack_require__, /*! ../../../lib/intl-tel-input/i18n/ja */ "../lib/intl-tel-input/i18n/ja/index.js")),
  zh: () => __webpack_require__.e(/*! import() | phone-i18n-zh */ "phone-i18n-zh").then(__webpack_require__.bind(__webpack_require__, /*! ../../../lib/intl-tel-input/i18n/zh */ "../lib/intl-tel-input/i18n/zh/index.js")),
  ko: () => __webpack_require__.e(/*! import() | phone-i18n-ko */ "phone-i18n-ko").then(__webpack_require__.bind(__webpack_require__, /*! ../../../lib/intl-tel-input/i18n/ko */ "../lib/intl-tel-input/i18n/ko/index.js")),
  ar: () => __webpack_require__.e(/*! import() | phone-i18n-ar */ "phone-i18n-ar").then(__webpack_require__.bind(__webpack_require__, /*! ../../../lib/intl-tel-input/i18n/ar */ "../lib/intl-tel-input/i18n/ar/index.js")),
  tr: () => __webpack_require__.e(/*! import() | phone-i18n-tr */ "phone-i18n-tr").then(__webpack_require__.bind(__webpack_require__, /*! ../../../lib/intl-tel-input/i18n/tr */ "../lib/intl-tel-input/i18n/tr/index.js")),
  sv: () => __webpack_require__.e(/*! import() | phone-i18n-sv */ "phone-i18n-sv").then(__webpack_require__.bind(__webpack_require__, /*! ../../../lib/intl-tel-input/i18n/sv */ "../lib/intl-tel-input/i18n/sv/index.js")),
  da: () => __webpack_require__.e(/*! import() | phone-i18n-da */ "phone-i18n-da").then(__webpack_require__.bind(__webpack_require__, /*! ../../../lib/intl-tel-input/i18n/da */ "../lib/intl-tel-input/i18n/da/index.js")),
  fi: () => __webpack_require__.e(/*! import() | phone-i18n-fi */ "phone-i18n-fi").then(__webpack_require__.bind(__webpack_require__, /*! ../../../lib/intl-tel-input/i18n/fi */ "../lib/intl-tel-input/i18n/fi/index.js")),
  no: () => __webpack_require__.e(/*! import() | phone-i18n-no */ "phone-i18n-no").then(__webpack_require__.bind(__webpack_require__, /*! ../../../lib/intl-tel-input/i18n/no */ "../lib/intl-tel-input/i18n/no/index.js")),
  cs: () => __webpack_require__.e(/*! import() | phone-i18n-cs */ "phone-i18n-cs").then(__webpack_require__.bind(__webpack_require__, /*! ../../../lib/intl-tel-input/i18n/cs */ "../lib/intl-tel-input/i18n/cs/index.js")),
  hu: () => __webpack_require__.e(/*! import() | phone-i18n-hu */ "phone-i18n-hu").then(__webpack_require__.bind(__webpack_require__, /*! ../../../lib/intl-tel-input/i18n/hu */ "../lib/intl-tel-input/i18n/hu/index.js")),
  ro: () => __webpack_require__.e(/*! import() | phone-i18n-ro */ "phone-i18n-ro").then(__webpack_require__.bind(__webpack_require__, /*! ../../../lib/intl-tel-input/i18n/ro */ "../lib/intl-tel-input/i18n/ro/index.js")),
  bg: () => __webpack_require__.e(/*! import() | phone-i18n-bg */ "phone-i18n-bg").then(__webpack_require__.bind(__webpack_require__, /*! ../../../lib/intl-tel-input/i18n/bg */ "../lib/intl-tel-input/i18n/bg/index.js")),
  hr: () => __webpack_require__.e(/*! import() | phone-i18n-hr */ "phone-i18n-hr").then(__webpack_require__.bind(__webpack_require__, /*! ../../../lib/intl-tel-input/i18n/hr */ "../lib/intl-tel-input/i18n/hr/index.js")),
  sk: () => __webpack_require__.e(/*! import() | phone-i18n-sk */ "phone-i18n-sk").then(__webpack_require__.bind(__webpack_require__, /*! ../../../lib/intl-tel-input/i18n/sk */ "../lib/intl-tel-input/i18n/sk/index.js")),
  el: () => __webpack_require__.e(/*! import() | phone-i18n-el */ "phone-i18n-el").then(__webpack_require__.bind(__webpack_require__, /*! ../../../lib/intl-tel-input/i18n/el */ "../lib/intl-tel-input/i18n/el/index.js")),
  th: () => __webpack_require__.e(/*! import() | phone-i18n-th */ "phone-i18n-th").then(__webpack_require__.bind(__webpack_require__, /*! ../../../lib/intl-tel-input/i18n/th */ "../lib/intl-tel-input/i18n/th/index.js")),
  vi: () => __webpack_require__.e(/*! import() | phone-i18n-vi */ "phone-i18n-vi").then(__webpack_require__.bind(__webpack_require__, /*! ../../../lib/intl-tel-input/i18n/vi */ "../lib/intl-tel-input/i18n/vi/index.js")),
  id: () => __webpack_require__.e(/*! import() | phone-i18n-id */ "phone-i18n-id").then(__webpack_require__.bind(__webpack_require__, /*! ../../../lib/intl-tel-input/i18n/id */ "../lib/intl-tel-input/i18n/id/index.js")),
  hi: () => __webpack_require__.e(/*! import() | phone-i18n-hi */ "phone-i18n-hi").then(__webpack_require__.bind(__webpack_require__, /*! ../../../lib/intl-tel-input/i18n/hi */ "../lib/intl-tel-input/i18n/hi/index.js")),
  bn: () => __webpack_require__.e(/*! import() | phone-i18n-bn */ "phone-i18n-bn").then(__webpack_require__.bind(__webpack_require__, /*! ../../../lib/intl-tel-input/i18n/bn */ "../lib/intl-tel-input/i18n/bn/index.js")),
  ur: () => __webpack_require__.e(/*! import() | phone-i18n-ur */ "phone-i18n-ur").then(__webpack_require__.bind(__webpack_require__, /*! ../../../lib/intl-tel-input/i18n/ur */ "../lib/intl-tel-input/i18n/ur/index.js")),
  fa: () => __webpack_require__.e(/*! import() | phone-i18n-fa */ "phone-i18n-fa").then(__webpack_require__.bind(__webpack_require__, /*! ../../../lib/intl-tel-input/i18n/fa */ "../lib/intl-tel-input/i18n/fa/index.js")),
  mr: () => __webpack_require__.e(/*! import() | phone-i18n-mr */ "phone-i18n-mr").then(__webpack_require__.bind(__webpack_require__, /*! ../../../lib/intl-tel-input/i18n/mr */ "../lib/intl-tel-input/i18n/mr/index.js")),
  te: () => __webpack_require__.e(/*! import() | phone-i18n-te */ "phone-i18n-te").then(__webpack_require__.bind(__webpack_require__, /*! ../../../lib/intl-tel-input/i18n/te */ "../lib/intl-tel-input/i18n/te/index.js")),
  bs: () => __webpack_require__.e(/*! import() | phone-i18n-bs */ "phone-i18n-bs").then(__webpack_require__.bind(__webpack_require__, /*! ../../../lib/intl-tel-input/i18n/bs */ "../lib/intl-tel-input/i18n/bs/index.js")),
  ca: () => __webpack_require__.e(/*! import() | phone-i18n-ca */ "phone-i18n-ca").then(__webpack_require__.bind(__webpack_require__, /*! ../../../lib/intl-tel-input/i18n/ca */ "../lib/intl-tel-input/i18n/ca/index.js"))
};

/**
 * Cache for loaded translation modules
 */
const translationCache = {};
const getWindowLocaleContext = () => {
  return typeof window.jfbPhoneFieldLocaleContext === 'object' && window.jfbPhoneFieldLocaleContext !== null ? window.jfbPhoneFieldLocaleContext : {};
};
const getFirstNormalizedLocale = (candidates = []) => {
  for (const locale of candidates) {
    const normalizedLocale = normalizeLocale(locale);
    if (normalizedLocale) {
      return normalizedLocale;
    }
  }
  return '';
};
function normalizeLocale(locale) {
  if (!locale || 'string' !== typeof locale) {
    return '';
  }
  const sanitized = locale.trim().replace(/-/g, '_');
  if (!sanitized) {
    return '';
  }
  const [language = '', region = ''] = sanitized.split('_');
  if (!language) {
    return '';
  }
  return region ? `${language.toLowerCase()}_${region.toUpperCase()}` : language.toLowerCase();
}
function resolveIntlLocale(locale) {
  const normalizedLocale = normalizeLocale(locale);
  if (!normalizedLocale) {
    return 'en';
  }
  const [language] = normalizedLocale.split('_');
  return localeMap[normalizedLocale] || localeMap[language] || 'en';
}

/**
 * Load translations for intl-tel-input (ESM import approach)
 *
 * @param {string} wpLocale - WordPress locale (e.g., 'uk', 'de_DE')
 * @return {Promise<Object>} - Promise that resolves to translations object
 */
async function loadIntlTelInputLocale(wpLocale) {
  const locale = resolveIntlLocale(wpLocale);

  // English is built-in to intl-tel-input, no need to load
  if (locale === 'en') {
    return {};
  }

  // Check cache first
  if (translationCache[locale]) {
    return translationCache[locale];
  }

  // Get loader for this locale
  const loader = loaders[locale];
  if (!loader) {
    // No loader found, return empty (will use English default)
    return {};
  }
  try {
    // Execute import and get the module
    const module = await loader();

    // Extract translations from the module
    // module.default contains merged translations (countries + interface)
    const translations = module.default || {};

    // Cache the result
    translationCache[locale] = translations;
    return translations;
  } catch {
    return {};
  }
}

/**
 * Get WordPress locale from document or global variable
 *
 * @return {string} WordPress locale code
 */
function getPageLocale() {
  const localeContext = getWindowLocaleContext();
  return getFirstNormalizedLocale([localeContext.pageLocale, localeContext.pageLang, document.documentElement?.lang, localeContext.siteLocale, localeContext.siteLang]);
}
function getSiteLocale() {
  const localeContext = getWindowLocaleContext();
  return getFirstNormalizedLocale([localeContext.siteLocale, localeContext.siteLang]);
}
function resolveCurrentLocale() {
  return getPageLocale() || 'en';
}

/**
 * Load translations based on current WordPress locale
 *
 * @return {Promise<Object>} Country translations
 */
async function loadCurrentLocaleTranslations() {
  const locale = resolveCurrentLocale();
  return await loadIntlTelInputLocale(locale);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  loadIntlTelInputLocale,
  loadCurrentLocaleTranslations,
  getPageLocale,
  getSiteLocale,
  resolveCurrentLocale,
  resolveIntlLocale,
  normalizeLocale,
  localeMap
});

/***/ },

/***/ "./frontend/restrictions/PhoneRestriction.js"
/*!***************************************************!*\
  !*** ./frontend/restrictions/PhoneRestriction.js ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let {
  AdvancedRestriction,
  Restriction
} = window.JetFormBuilderAbstract || {};

// Fallback if AdvancedRestriction is not available
AdvancedRestriction = AdvancedRestriction || Restriction;

/**
 * Phone Number Validation Restriction
 */
function PhoneRestriction() {
  AdvancedRestriction.call(this);
  this.type = 'phone_validation';
}
PhoneRestriction.prototype = Object.create(AdvancedRestriction.prototype);

/**
 * Only apply this restriction if field is a phone field
 */
PhoneRestriction.prototype.isSupported = function (node) {
  const isPhoneField = node.classList.contains('phone-field');
  return isPhoneField;
};

/**
 * Validate phone number using intl-tel-input
 */
PhoneRestriction.prototype.validate = function () {
  const input = this.reporting.input;
  const wrapper = input.getWrapperNode();
  const intlInput = wrapper?.querySelector('input.phone-field-intl');

  // If itiInstance is not ready yet, skip validation (return true)
  if (!input.itiInstance) {
    return true;
  }

  // If intl input field is empty, let required restriction handle it
  if (!intlInput || !intlInput.value.trim()) {
    return true;
  }

  // Validate using intl-tel-input
  const isValid = input.itiInstance.isValidNumber();
  return isValid;
};

/**
 * Return validation error message
 */
PhoneRestriction.prototype.getRawMessage = function () {
  // Try to get custom message from field configuration
  const customMessage = this.getMessageBySlug?.('phone_invalid');
  if (customMessage) {
    return customMessage;
  }

  // Default message
  return 'Please enter a valid phone number';
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PhoneRestriction);

/***/ },

/***/ "./frontend/field/style.scss"
/*!***********************************!*\
  !*** ./frontend/field/style.scss ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			// no module.id needed
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames not based on template
/******/ 			if ({"phone-i18n-uk":1,"phone-i18n-ru":1,"phone-i18n-de":1,"phone-i18n-fr":1,"phone-i18n-es":1,"phone-i18n-it":1,"phone-i18n-pl":1,"phone-i18n-pt":1,"phone-i18n-nl":1,"phone-i18n-ja":1,"phone-i18n-zh":1,"phone-i18n-ko":1,"phone-i18n-ar":1,"phone-i18n-tr":1,"phone-i18n-sv":1,"phone-i18n-da":1,"phone-i18n-fi":1,"phone-i18n-no":1,"phone-i18n-cs":1,"phone-i18n-hu":1,"phone-i18n-ro":1,"phone-i18n-bg":1,"phone-i18n-hr":1,"phone-i18n-sk":1,"phone-i18n-el":1,"phone-i18n-th":1,"phone-i18n-vi":1,"phone-i18n-id":1,"phone-i18n-hi":1,"phone-i18n-bn":1,"phone-i18n-ur":1,"phone-i18n-fa":1,"phone-i18n-mr":1,"phone-i18n-te":1,"phone-i18n-bs":1,"phone-i18n-ca":1}[chunkId]) return "frontend/i18n/" + chunkId + ".js";
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		// data-webpack is not used as build has no uniqueName
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 		
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"frontend/field": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*********************************!*\
  !*** ./frontend/field/index.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PhoneFieldData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PhoneFieldData */ "./frontend/field/PhoneFieldData.js");
/* harmony import */ var _restrictions_PhoneRestriction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../restrictions/PhoneRestriction */ "./frontend/restrictions/PhoneRestriction.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./frontend/field/style.scss");




// Use JetPlugins hooks (same as other JetFormBuilder fields)
const {
  addFilter
} = JetPlugins.hooks;

// Register input handler
addFilter('jet.fb.inputs', 'jet-form-builder/phone-field', function (inputs) {
  inputs.push(_PhoneFieldData__WEBPACK_IMPORTED_MODULE_0__["default"]);
  return inputs;
}, 10);

// Register phone validation restriction
const addRestriction = restrictions => {
  restrictions.push(_restrictions_PhoneRestriction__WEBPACK_IMPORTED_MODULE_1__["default"]);
  return restrictions;
};

// Add to both default and advanced restrictions
addFilter('jet.fb.restrictions.default', 'jet-form-builder/phone-field', addRestriction);
addFilter('jet.fb.restrictions', 'jet-form-builder/phone-field', addRestriction);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvZmllbGQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUdBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeGhCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFPQTtBQUVBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3RQQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7OztBQ25FQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDckZBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTs7QUFHQTtBQUNBO0FBSUE7QUFDQTtBQUNBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQU1BIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLXBob25lLWZpZWxkLy4vZnJvbnRlbmQvZmllbGQvUGhvbmVGaWVsZERhdGEuanMiLCJ3ZWJwYWNrOi8vamZiLXBob25lLWZpZWxkLy4vZnJvbnRlbmQvZmllbGQvaTE4bi1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vamZiLXBob25lLWZpZWxkLy4vZnJvbnRlbmQvcmVzdHJpY3Rpb25zL1Bob25lUmVzdHJpY3Rpb24uanMiLCJ3ZWJwYWNrOi8vamZiLXBob25lLWZpZWxkLy4vZnJvbnRlbmQvZmllbGQvc3R5bGUuc2Nzcz80ZTAxIiwid2VicGFjazovL2pmYi1waG9uZS1maWVsZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmItcGhvbmUtZmllbGQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pmYi1waG9uZS1maWVsZC93ZWJwYWNrL3J1bnRpbWUvZW5zdXJlIGNodW5rIiwid2VicGFjazovL2pmYi1waG9uZS1maWVsZC93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vamZiLXBob25lLWZpZWxkL3dlYnBhY2svcnVudGltZS9nZXQgbWluaS1jc3MgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vamZiLXBob25lLWZpZWxkL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vamZiLXBob25lLWZpZWxkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamZiLXBob25lLWZpZWxkL3dlYnBhY2svcnVudGltZS9sb2FkIHNjcmlwdCIsIndlYnBhY2s6Ly9qZmItcGhvbmUtZmllbGQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmItcGhvbmUtZmllbGQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vamZiLXBob25lLWZpZWxkL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2pmYi1waG9uZS1maWVsZC8uL2Zyb250ZW5kL2ZpZWxkL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdGxvYWRDdXJyZW50TG9jYWxlVHJhbnNsYXRpb25zLFxufSBmcm9tICcuL2kxOG4tbG9hZGVyJztcblxuY29uc3Qge1xuXHRJbnB1dERhdGEsXG59ID0gd2luZG93LkpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XG5cbi8qKlxuICogSW50ZXJuYXRpb25hbCBQaG9uZSBGaWVsZCBEYXRhIEhhbmRsZXJcbiAqXG4gKiBIYW5kbGVzIGludGwtdGVsLWlucHV0IGluaXRpYWxpemF0aW9uLCB2YWxpZGF0aW9uLCBhbmQgZGF0YSBwcm9jZXNzaW5nXG4gKi9cbmZ1bmN0aW9uIFBob25lRmllbGREYXRhKCkge1xuXHRJbnB1dERhdGEuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuaXRpSW5zdGFuY2UgICA9IG51bGw7XG5cdHRoaXMuaXNJbml0aWFsaXplZCA9IGZhbHNlO1xuXG5cdC8qKlxuXHQgKiBDaGVjayBpZiB0aGlzIGhhbmRsZXIgc3VwcG9ydHMgdGhlIGZpZWxkXG5cdCAqIEBwYXJhbSBub2RlXG5cdCAqL1xuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlICkge1xuXHRcdGNvbnN0IHN1cHBvcnRlZCA9IG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCAncGhvbmUtZmllbGQnICk7XG5cblx0XHRyZXR1cm4gc3VwcG9ydGVkO1xuXHR9O1xuXG5cdHRoaXMuc2V0Tm9kZSA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0XHRJbnB1dERhdGEucHJvdG90eXBlLnNldE5vZGUuY2FsbCggdGhpcywgbm9kZSApO1xuXG5cdFx0dGhpcy5pbml0SW50bFRlbElucHV0KCk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEluaXRpYWxpemUgaW50bC10ZWwtaW5wdXQgb24gdGhlIGZpZWxkXG5cdCAqIExvYWRzIHRyYW5zbGF0aW9ucyBhc3luY2hyb25vdXNseSBiZWZvcmUgaW5pdGlhbGl6YXRpb25cblx0ICovXG5cdHRoaXMuaW5pdEludGxUZWxJbnB1dCA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBub2RlID0gdGhpcy5ub2Rlc1sgMCBdO1xuXHRcdGlmICggISBub2RlICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoIHRoaXMuaXNJbml0aWFsaXplZCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCB3cmFwcGVyID0gdGhpcy5nZXRXcmFwcGVyTm9kZSgpO1xuXHRcdGNvbnN0IGlucHV0ICAgPSB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0LnBob25lLWZpZWxkLWludGwnKTtcblxuXG5cdFx0Ly8gR2V0IGNvbmZpZ3VyYXRpb24gZnJvbSBkYXRhIGF0dHJpYnV0ZXNcblx0XHRjb25zdCBkZWZhdWx0Q291bnRyeSAgICAgPSBub2RlLmRhdGFzZXQuZGVmYXVsdENvdW50cnkgfHwgJ2F1dG8nO1xuXHRcdGNvbnN0IHByZWZlcnJlZENvdW50cmllcyA9IHRoaXMucGFyc2VDb3VudHJ5TGlzdCggbm9kZS5kYXRhc2V0LnByZWZlcnJlZENvdW50cmllcyApO1xuXHRcdGNvbnN0IG9ubHlDb3VudHJpZXMgICAgICA9IHRoaXMucGFyc2VDb3VudHJ5TGlzdCggbm9kZS5kYXRhc2V0Lm9ubHlDb3VudHJpZXMgKTtcblx0XHRjb25zdCBleGNsdWRlQ291bnRyaWVzICAgPSB0aGlzLnBhcnNlQ291bnRyeUxpc3QoIG5vZGUuZGF0YXNldC5leGNsdWRlQ291bnRyaWVzICk7XG5cdFx0Y29uc3Qgc2VwYXJhdGVEaWFsQ29kZSAgID0gbm9kZS5kYXRhc2V0LnNlcGFyYXRlRGlhbENvZGUgfHwgZmFsc2U7XG5cdFx0Y29uc3QgaXBpbmZvVG9rZW4gICAgICAgID0gbm9kZS5kYXRhc2V0LmlwaW5mb1Rva2VuIHx8ICcnO1xuXHRcdC8vIERldGVybWluZSBpbml0aWFsIGNvdW50cnlcblx0XHRsZXQgaW5pdGlhbENvdW50cnkgPSBkZWZhdWx0Q291bnRyeTtcblxuXHRcdGlmICggaW5pdGlhbENvdW50cnkgPT09ICdhdXRvJyApIHtcblx0XHRcdGluaXRpYWxDb3VudHJ5ID0gdGhpcy5kZXRlY3RDb3VudHJ5QnlJUCggaXBpbmZvVG9rZW4gKSB8fFxuXHRcdFx0XHR0aGlzLmRldGVjdENvdW50cnlCeUxhbmd1YWdlKCkgfHxcblx0XHRcdFx0J3VzJztcblx0XHR9XG5cblx0XHQvLyBMb2FkIGxvY2FsaXplZCBjb3VudHJ5IG5hbWVzIChhc3luYylcblx0XHRjb25zdCBpMThuID0gYXdhaXQgdGhpcy5nZXRMb2NhbGl6ZWRDb3VudHJ5TmFtZXMoKTtcblxuXHRcdC8vIEJ1aWxkIGNvbmZpZyBvYmplY3QsIG9ubHkgaW5jbHVkZSBhcnJheXMgaWYgdGhleSBoYXZlIGl0ZW1zXG5cdFx0Y29uc3QgY29uZmlnID0ge1xuXHRcdFx0aW5pdGlhbENvdW50cnksXG5cdFx0XHRzZXBhcmF0ZURpYWxDb2RlOiBzZXBhcmF0ZURpYWxDb2RlID09PSAnMScsXG5cdFx0XHRzdHJpY3RNb2RlOiB0cnVlLFxuXHRcdFx0bmF0aW9uYWxNb2RlOiB0cnVlLFxuXHRcdFx0Zm9ybWF0QXNZb3VUeXBlOiB0cnVlLFxuXHRcdFx0Zm9ybWF0T25EaXNwbGF5OiB0cnVlLFxuXHRcdFx0YXV0b1BsYWNlaG9sZGVyOiAnYWdncmVzc2l2ZScsXG5cdFx0XHR2YWxpZGF0aW9uTnVtYmVyVHlwZXM6IFtcblx0XHRcdFx0J01PQklMRScsXG5cdFx0XHRcdCdGSVhFRF9MSU5FJyxcblx0XHRcdFx0J0ZJWEVEX0xJTkVfT1JfTU9CSUxFJyxcblx0XHRcdF0sXG5cdFx0fTtcblxuXHRcdC8vIE9ubHkgYWRkIGFycmF5cyBpZiB0aGV5IGhhdmUgaXRlbXNcblx0XHRpZiAoIHByZWZlcnJlZENvdW50cmllcy5sZW5ndGggKSB7XG5cdFx0XHRjb25maWcuY291bnRyeU9yZGVyID0gcHJlZmVycmVkQ291bnRyaWVzO1xuXHRcdH1cblx0XHRpZiAoIG9ubHlDb3VudHJpZXMubGVuZ3RoICkge1xuXHRcdFx0Y29uZmlnLm9ubHlDb3VudHJpZXMgPSBvbmx5Q291bnRyaWVzO1xuXHRcdH1cblx0XHRpZiAoIGV4Y2x1ZGVDb3VudHJpZXMubGVuZ3RoICkge1xuXHRcdFx0Y29uZmlnLmV4Y2x1ZGVDb3VudHJpZXMgPSBleGNsdWRlQ291bnRyaWVzO1xuXHRcdH1cblx0XHRpZiAoIE9iamVjdC5rZXlzKCBpMThuICkubGVuZ3RoICkge1xuXHRcdFx0Y29uZmlnLmkxOG4gPSBpMThuO1xuXHRcdH1cblxuXHRcdC8vIEluaXRpYWxpemUgaW50bC10ZWwtaW5wdXRcblx0XHR0aGlzLml0aUluc3RhbmNlID0gd2luZG93LmludGxUZWxJbnB1dCggaW5wdXQsIGNvbmZpZyApO1xuXG5cdFx0dGhpcy5pdGlJbnN0YW5jZS5zZXROdW1iZXIoIG5vZGUudmFsdWUgKTtcblxuXHRcdHRoaXMuaXNJbml0aWFsaXplZCA9IHRydWU7XG5cblx0fTtcblxuXHR0aGlzLm5vcm1hbGl6ZUlmSW50ZXJuYXRpb25hbCA9IGZ1bmN0aW9uKCBpbnB1dCApIHtcblx0XHRjb25zdCB2YWx1ZSA9IGlucHV0LnZhbHVlLnRyaW0oKTtcblxuXHRcdGlmICggIXZhbHVlICkgeyByZXR1cm47IH1cblx0XHRpZiAoICcrJyA9PT0gdmFsdWVbIDAgXSApIHtcblx0XHRcdHRoaXMuaXRpSW5zdGFuY2Uuc2V0TnVtYmVyKCB2YWx1ZSApO1xuXG5cdFx0XHR0aGlzLnNldFZhbHVlKCk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFBhcnNlIGNvbW1hLXNlcGFyYXRlZCBjb3VudHJ5IGxpc3Rcblx0ICogQHBhcmFtIHN0clxuXHQgKi9cblx0dGhpcy5wYXJzZUNvdW50cnlMaXN0ID0gZnVuY3Rpb24gKCBzdHIgKSB7XG5cdFx0aWYgKCAhIHN0ciApIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cdFx0cmV0dXJuIHN0ci5zcGxpdCggJywnICkubWFwKCBjID0+IGMudHJpbSgpLnRvTG93ZXJDYXNlKCkgKS5maWx0ZXIoIGMgPT4gYyApO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBEZXRlY3QgY291bnRyeSBieSBJUCB1c2luZyBpcGluZm8uaW9cblx0ICogQHBhcmFtIHRva2VuXG5cdCAqL1xuXHR0aGlzLmRldGVjdENvdW50cnlCeUlQID0gZnVuY3Rpb24gKCB0b2tlbiApIHtcblx0XHQvLyBVc2UgY2FjaGVkIHZhbHVlIGlmIGF2YWlsYWJsZVxuXHRcdGNvbnN0IGNhY2hlZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oICdqZmJfZGV0ZWN0ZWRfY291bnRyeScgKTtcblxuXHRcdGlmICggY2FjaGVkICkge1xuXHRcdFx0cmV0dXJuIGNhY2hlZDtcblx0XHR9XG5cblx0XHRjb25zdCB1cmwgPSB0b2tlblxuXHRcdFx0PyBgaHR0cHM6Ly9hcGkuaXBpbmZvLmlvL2xpdGUvbWU/dG9rZW49JHsgdG9rZW4gfWBcblx0XHRcdDogJ2h0dHBzOi8vaXBpbmZvLmlvL2pzb24nO1xuXG5cdFx0ZmV0Y2goIHVybCApXG5cdFx0XHQudGhlbiggcmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpIClcblx0XHRcdC50aGVuKCBkYXRhID0+IHtcblx0XHRcdFx0aWYgKCBkYXRhLmNvdW50cnkgKSB7XG5cblx0XHRcdFx0XHRjb25zdCBjb3VudHJ5ID0gZGF0YS5jb3VudHJ5LnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdFx0c2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSggJ2pmYl9kZXRlY3RlZF9jb3VudHJ5JywgY291bnRyeSApO1xuXG5cdFx0XHRcdFx0Ly8gVXBkYXRlIGZpZWxkIGlmIHN0aWxsIGluIGF1dG8gbW9kZVxuXHRcdFx0XHRcdGlmICggdGhpcy5pdGlJbnN0YW5jZSApIHtcblx0XHRcdFx0XHRcdHRoaXMuaXRpSW5zdGFuY2Uuc2V0Q291bnRyeSggY291bnRyeSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSApXG5cdFx0XHQuY2F0Y2goICgpID0+IHtcblx0XHRcdH0gKTtcblxuXHRcdHJldHVybiBudWxsO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBEZXRlY3QgY291bnRyeSBieSBicm93c2VyIGxhbmd1YWdlXG5cdCAqL1xuXHR0aGlzLmRldGVjdENvdW50cnlCeUxhbmd1YWdlID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IGxhbmcgPSBuYXZpZ2F0b3IubGFuZ3VhZ2UgfHwgbmF2aWdhdG9yLnVzZXJMYW5ndWFnZTtcblx0XHRpZiAoICEgbGFuZyApIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdC8vIEV4dHJhY3QgY291bnRyeSBjb2RlIGZyb20gbGFuZ3VhZ2UgKGUuZy4sIGVuLVVTIC0+IHVzKVxuXHRcdGNvbnN0IHBhcnRzID0gbGFuZy5zcGxpdCggJy0nICk7XG5cdFx0aWYgKCBwYXJ0cy5sZW5ndGggPiAxICkge1xuXHRcdFx0cmV0dXJuIHBhcnRzWyAxIF0udG9Mb3dlckNhc2UoKTtcblx0XHR9XG5cblx0XHQvLyBMYW5ndWFnZSB0byBjb3VudHJ5IG1hcHBpbmdcblx0XHRjb25zdCBsYW5nVG9Db3VudHJ5ID0ge1xuXHRcdFx0J2VuJzogJ3VzJyxcblx0XHRcdCdydSc6ICdydScsXG5cdFx0XHQndWsnOiAndWEnLFxuXHRcdFx0J2RlJzogJ2RlJyxcblx0XHRcdCdmcic6ICdmcicsXG5cdFx0XHQnZXMnOiAnZXMnLFxuXHRcdFx0J2l0JzogJ2l0Jyxcblx0XHRcdCdwbCc6ICdwbCcsXG5cdFx0XHQncHQnOiAnYnInLFxuXHRcdFx0J2phJzogJ2pwJyxcblx0XHRcdCdrbyc6ICdrcicsXG5cdFx0XHQnemgnOiAnY24nLFxuXHRcdFx0J2FyJzogJ3NhJyxcblx0XHRcdCdoZSc6ICdpbCcsXG5cdFx0XHQnaGknOiAnaW4nLFxuXHRcdH07XG5cblx0XHRyZXR1cm4gbGFuZ1RvQ291bnRyeVsgcGFydHNbIDAgXS50b0xvd2VyQ2FzZSgpIF0gfHwgbnVsbDtcblx0fTtcblxuXHQvKipcblx0ICogR2V0IGxvY2FsaXplZCBjb3VudHJ5IG5hbWVzXG5cdCAqXG5cdCAqIFByaW9yaXR5IG9yZGVyOlxuXHQgKiAxLiBDdXN0b20gV29yZFByZXNzIHRyYW5zbGF0aW9ucyAodmlhIHdwX2xvY2FsaXplX3NjcmlwdCBhbmQgZmlsdGVycylcblx0ICogMi4gaW50bC10ZWwtaW5wdXQgbGlicmFyeSB0cmFuc2xhdGlvbnMgKGxvYWRlZCBkeW5hbWljYWxseSlcblx0ICogMy4gaW50bC10ZWwtaW5wdXQgYnVpbHQtaW4gRW5nbGlzaCBuYW1lcyAoZmFsbGJhY2spXG5cdCAqL1xuXHR0aGlzLmdldExvY2FsaXplZENvdW50cnlOYW1lcyA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcblxuXHRcdC8vIEdldCB0cmFuc2xhdGlvbnMgcHJvdmlkZWQgYnkgV29yZFByZXNzICh2aWEgd3BfbG9jYWxpemVfc2NyaXB0KVxuXHRcdGNvbnN0IHdwVHJhbnNsYXRpb25zID0gdHlwZW9mIHdpbmRvdy5qZmJQaG9uZUZpZWxkSTE4biAhPT0gJ3VuZGVmaW5lZCdcblx0XHRcdD8gd2luZG93LmpmYlBob25lRmllbGRJMThuXG5cdFx0XHQ6IHt9O1xuXG5cblx0XHQvLyBMb2FkIGludGwtdGVsLWlucHV0IGxpYnJhcnkgdHJhbnNsYXRpb25zIGJhc2VkIG9uIFdvcmRQcmVzcyBsb2NhbGVcblx0XHRsZXQgbGlicmFyeVRyYW5zbGF0aW9ucyA9IHt9O1xuXHRcdHRyeSB7XG5cdFx0XHRsaWJyYXJ5VHJhbnNsYXRpb25zID0gYXdhaXQgbG9hZEN1cnJlbnRMb2NhbGVUcmFuc2xhdGlvbnMoKTtcblx0XHR9IGNhdGNoIHtcblx0XHR9XG5cblx0XHQvLyBNZXJnZSB0cmFuc2xhdGlvbnM6IFdvcmRQcmVzcyBvdmVycmlkZXMgbGlicmFyeSB0cmFuc2xhdGlvbnNcblx0XHRjb25zdCBtZXJnZWRUcmFuc2xhdGlvbnMgPSB7XG5cdFx0XHQuLi5saWJyYXJ5VHJhbnNsYXRpb25zLFxuXHRcdFx0Li4ud3BUcmFuc2xhdGlvbnMsXG5cdFx0fTtcblxuXHRcdHJldHVybiBtZXJnZWRUcmFuc2xhdGlvbnM7XG5cdH07XG5cblx0LyoqXG5cdCAqIEFkZCBldmVudCBsaXN0ZW5lcnNcblx0ICovXG5cdHRoaXMuYWRkTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuXHRcdElucHV0RGF0YS5wcm90b3R5cGUuYWRkTGlzdGVuZXJzLmNhbGwoIHRoaXMgKTtcblxuXHRcdGNvbnN0IG5vZGUgPSB0aGlzLm5vZGVzWyAwIF07IC8vIE1haW4gZmllbGQgKHBob25lKVxuXHRcdGlmICggISBub2RlICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHdyYXBwZXIgPSB0aGlzLmdldFdyYXBwZXJOb2RlKCk7XG5cdFx0Y29uc3QgaW5wdXQgICA9IHdyYXBwZXIucXVlcnlTZWxlY3RvcignaW5wdXQucGhvbmUtZmllbGQtaW50bCcpOyAvLyBpbnRsLXRlbC1pbnB1dCBmaWVsZFxuXG5cdFx0aWYgKCAhIGlucHV0ICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIEFkZCBmb3JtIHN1Ym1pdCBsaXN0ZW5lciB0byB2YWxpZGF0ZSBiZWZvcmUgc3VibWlzc2lvblxuXHRcdGNvbnN0IGZvcm0gPSBub2RlLmNsb3Nlc3QoJ2Zvcm0nKTtcblx0XHRpZiAoIGZvcm0gKSB7XG5cdFx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsICgpID0+IHtcblx0XHRcdFx0dGhpcy5ub3JtYWxpemVJZkludGVybmF0aW9uYWwoIGlucHV0ICk7XG5cdFx0XHRcdHRoaXMuc3luY0Zyb21JbnRsSW5wdXQoIGlucHV0LCBub2RlICk7XG5cblx0XHRcdFx0Ly8gVmFsaWRhdGUgYW5kIHNob3cgZXJyb3IgYmVmb3JlIHN1Ym1pdFxuXHRcdFx0XHR0aGlzLnZhbGlkYXRlQW5kU2hvd0Vycm9yKCk7XG5cdFx0XHR9LCB0cnVlKTsgLy8gVXNlIGNhcHR1cmUgcGhhc2UgdG8gcnVuIGJlZm9yZSBKZXRGb3JtQnVpbGRlclxuXHRcdH1cblxuXHRcdC8vIExpc3RlbiBmb3IgY291bnRyeSBjaGFuZ2Vcblx0XHRpbnB1dC5hZGRFdmVudExpc3RlbmVyKCAnY291bnRyeWNoYW5nZScsICgpID0+IHtcblx0XHRcdHRoaXMuc3luY0Zyb21JbnRsSW5wdXQoIGlucHV0LCBub2RlICk7XG5cblx0XHRcdGlmICggd3JhcHBlci5jbGFzc0xpc3QuY29udGFpbnMoICdmaWVsZC1oYXMtZXJyb3InICkgKSB7XG5cdFx0XHRcdHRoaXMudmFsaWRhdGVBbmRTaG93RXJyb3IoKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cblx0XHQvLyBMaXN0ZW4gZm9yIGlucHV0XG5cdFx0aW5wdXQuYWRkRXZlbnRMaXN0ZW5lciggJ2lucHV0JywgKCkgPT4ge1xuXHRcdFx0dGhpcy5ub3JtYWxpemVJZkludGVybmF0aW9uYWwoIGlucHV0ICk7XG5cdFx0XHR0aGlzLnN5bmNGcm9tSW50bElucHV0KCBpbnB1dCwgbm9kZSApO1xuXHRcdFx0Ly8gQ2xlYXIgZXJyb3Igd2hpbGUgdHlwaW5nXG5cdFx0XHRpZiAoIGlucHV0LnZhbHVlLnRyaW0oKSApIHtcblx0XHRcdFx0dGhpcy5jbGVhckVycm9yKCk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdFx0aW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5ub3JtYWxpemVJZkludGVybmF0aW9uYWwoIGlucHV0ICk7XG5cdFx0XHR0aGlzLnN5bmNGcm9tSW50bElucHV0KCBpbnB1dCwgbm9kZSApO1xuXHRcdH0pO1xuXG5cdFx0Ly8gTGlzdGVuIGZvciBibHVyICh2YWxpZGF0ZSBvbiBibHVyKVxuXHRcdGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoICdibHVyJywgKCkgPT4ge1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHRoaXMubm9ybWFsaXplSWZJbnRlcm5hdGlvbmFsKCBpbnB1dCApO1xuXHRcdFx0XHR0aGlzLnN5bmNGcm9tSW50bElucHV0KCBpbnB1dCwgbm9kZSApO1xuXHRcdFx0XHR0aGlzLnZhbGlkYXRlQW5kU2hvd0Vycm9yKCk7XG5cdFx0XHR9LCAwKTtcblx0XHR9ICk7XG5cdH07XG5cblx0LyoqXG5cdCAqIFN5bmMgdmFsdWUgZnJvbSBpbnRsLXRlbC1pbnB1dCBmaWVsZCB0byBtYWluIGZpZWxkXG5cdCAqIEBwYXJhbSBpbnRsSW5wdXRcblx0ICogQHBhcmFtIG1haW5GaWVsZFxuXHQgKi9cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5cdHRoaXMuc3luY0Zyb21JbnRsSW5wdXQgPSBmdW5jdGlvbiAoIGludGxJbnB1dCwgbWFpbkZpZWxkICkge1xuXHRcdGlmICggISB0aGlzLml0aUluc3RhbmNlICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIERldGVybWluZSBzYXZlIGZvcm1hdCBmcm9tIGRhdGEgYXR0cmlidXRlXG5cdFx0Y29uc3Qgc2F2ZUZvcm1hdCA9IG1haW5GaWVsZC5kYXRhc2V0LnNhdmVGb3JtYXQgfHwgJ2UxNjQnO1xuXG5cdFx0bGV0IGZvcm1hdHRlZE51bWJlcjtcblxuXHRcdC8vIEdldCBmb3JtYXR0ZWQgbnVtYmVyIGJhc2VkIG9uIHNhdmUgZm9ybWF0XG5cdFx0c3dpdGNoICggc2F2ZUZvcm1hdCApIHtcblx0XHRcdGNhc2UgJ2ludGVybmF0aW9uYWwnOlxuXHRcdFx0XHRmb3JtYXR0ZWROdW1iZXIgPSB0aGlzLml0aUluc3RhbmNlLmdldE51bWJlciggd2luZG93LmludGxUZWxJbnB1dC51dGlscy5udW1iZXJGb3JtYXQuSU5URVJOQVRJT05BTCApO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2UxNjQnOlxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0Zm9ybWF0dGVkTnVtYmVyID0gdGhpcy5pdGlJbnN0YW5jZS5nZXROdW1iZXIoKTsgLy8gRS4xNjQgaXMgZGVmYXVsdFxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHQvLyBVcGRhdGUgbWFpbiBmaWVsZCB2YWx1ZSAodGhpcyBpcyB3aGF0IGdldHMgc3VibWl0dGVkKVxuXHRcdG1haW5GaWVsZC52YWx1ZSA9IGZvcm1hdHRlZE51bWJlciB8fCAnJztcblxuXHRcdC8vIFVwZGF0ZSBKZXRGb3JtQnVpbGRlcidzIGludGVybmFsIHRyYWNraW5nXG5cdFx0dGhpcy5jYWxjVmFsdWUgICAgID0gZm9ybWF0dGVkTnVtYmVyIHx8ICcnO1xuXHRcdHRoaXMudmFsdWUuY3VycmVudCA9IGZvcm1hdHRlZE51bWJlciB8fCAnJztcblx0fTtcblxuXHQvKipcblx0ICogU2hvdyBlcnJvciBtZXNzYWdlIHVuZGVyIHRoZSBwaG9uZSBmaWVsZFxuXHQgKiBAcGFyYW0gbWVzc2FnZVxuXHQgKi9cblx0dGhpcy5zaG93RXJyb3IgPSBmdW5jdGlvbiAoIG1lc3NhZ2UgKSB7XG5cdFx0Y29uc3Qgd3JhcHBlciA9IHRoaXMuZ2V0V3JhcHBlck5vZGUoKTtcblxuXHRcdGlmICggISB3cmFwcGVyICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIFJlbW92ZSBleGlzdGluZyBlcnJvciBmaXJzdFxuXHRcdHRoaXMuY2xlYXJFcnJvcigpO1xuXG5cdFx0Ly8gQWRkIGVycm9yIGNsYXNzIHRvIHdyYXBwZXJcblx0XHR3cmFwcGVyLmNsYXNzTGlzdC5hZGQoICdmaWVsZC1oYXMtZXJyb3InICk7XG5cblx0XHQvLyBDcmVhdGUgZXJyb3IgZWxlbWVudFxuXHRcdGNvbnN0IGVycm9yRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcblxuXHRcdGVycm9yRGl2LmNsYXNzTmFtZSAgID0gJ2Vycm9yLW1lc3NhZ2UgamV0LWZvcm0tYnVpbGRlcl9fZXJyb3InO1xuXHRcdGVycm9yRGl2LnRleHRDb250ZW50ID0gbWVzc2FnZTtcblxuXHRcdC8vIEZpbmQgd2hlcmUgdG8gaW5zZXJ0IGVycm9yXG5cdFx0Y29uc3QgY29sRW5kID0gd3JhcHBlci5xdWVyeVNlbGVjdG9yKCAnLmpldC1mb3JtLWJ1aWxkZXItY29sX19lbmQnICk7XG5cdFx0aWYgKCBjb2xFbmQgKSB7XG5cdFx0XHRjb2xFbmQuYXBwZW5kQ2hpbGQoIGVycm9yRGl2ICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHdyYXBwZXIuYXBwZW5kQ2hpbGQoIGVycm9yRGl2ICk7XG5cdFx0fVxuXG5cdFx0Ly8gTWFyayBpbnRsIGlucHV0IGFzIGludmFsaWRcblx0XHRjb25zdCBpbnRsSW5wdXQgPSB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoICdpbnB1dC5waG9uZS1maWVsZC1pbnRsJyApO1xuXHRcdGlmICggaW50bElucHV0ICkge1xuXHRcdFx0aW50bElucHV0LmNsYXNzTGlzdC5hZGQoICdpbnZhbGlkJyApO1xuXHRcdFx0aW50bElucHV0LnNldEF0dHJpYnV0ZSggJ2FyaWEtaW52YWxpZCcsICd0cnVlJyApO1xuXHRcdH1cblxuXHR9O1xuXG5cdC8qKlxuXHQgKiBDbGVhciBlcnJvciBtZXNzYWdlXG5cdCAqL1xuXHR0aGlzLmNsZWFyRXJyb3IgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3Qgd3JhcHBlciA9IHRoaXMuZ2V0V3JhcHBlck5vZGUoKTtcblx0XHRpZiAoICEgd3JhcHBlciApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBSZW1vdmUgZXJyb3IgY2xhc3Ncblx0XHR3cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoICdmaWVsZC1oYXMtZXJyb3InICk7XG5cblx0XHQvLyBSZW1vdmUgZXJyb3IgbWVzc2FnZVxuXHRcdGNvbnN0IGVycm9yRGl2ID0gd3JhcHBlci5xdWVyeVNlbGVjdG9yKCAnLmVycm9yLW1lc3NhZ2UnICk7XG5cdFx0aWYgKCBlcnJvckRpdiApIHtcblx0XHRcdGVycm9yRGl2LnJlbW92ZSgpO1xuXHRcdH1cblxuXHRcdC8vIFJlbW92ZSBpbnZhbGlkIGNsYXNzIGZyb20gaW50bCBpbnB1dFxuXHRcdGNvbnN0IGludGxJbnB1dCA9IHdyYXBwZXIucXVlcnlTZWxlY3RvciggJ2lucHV0LnBob25lLWZpZWxkLWludGwnICk7XG5cdFx0aWYgKCBpbnRsSW5wdXQgKSB7XG5cdFx0XHRpbnRsSW5wdXQuY2xhc3NMaXN0LnJlbW92ZSggJ2ludmFsaWQnICk7XG5cdFx0XHRpbnRsSW5wdXQucmVtb3ZlQXR0cmlidXRlKCAnYXJpYS1pbnZhbGlkJyApO1xuXHRcdH1cblxuXHR9O1xuXG5cdC8qKlxuXHQgKiBHZXQgdmFsaWRhdGlvbiBtZXNzYWdlIGZyb20gZGF0YS1hdHRyaWJ1dGVzIG9yIGZhbGxiYWNrXG5cdCAqIEBwYXJhbSB0eXBlXG5cdCAqL1xuXHR0aGlzLmdldFZhbGlkYXRpb25NZXNzYWdlID0gZnVuY3Rpb24gKCB0eXBlICkge1xuXHRcdGNvbnN0IG1haW5GaWVsZCA9IHRoaXMubm9kZXNbIDAgXTtcblxuXHRcdC8vIEdldCBjdXN0b20gbWVzc2FnZSBmcm9tIGJsb2NrIHNldHRpbmdzIChkYXRhLWF0dHJpYnV0ZXMpXG5cdFx0aWYgKCB0eXBlID09PSAncmVxdWlyZWQnICYmIG1haW5GaWVsZC5kYXRhc2V0LnZhbGlkYXRpb25NZXNzYWdlUmVxdWlyZWQgKSB7XG5cdFx0XHRyZXR1cm4gbWFpbkZpZWxkLmRhdGFzZXQudmFsaWRhdGlvbk1lc3NhZ2VSZXF1aXJlZDtcblx0XHR9XG5cdFx0aWYgKCB0eXBlID09PSAnaW52YWxpZCcgJiYgbWFpbkZpZWxkLmRhdGFzZXQudmFsaWRhdGlvbk1lc3NhZ2VJbnZhbGlkICkge1xuXHRcdFx0cmV0dXJuIG1haW5GaWVsZC5kYXRhc2V0LnZhbGlkYXRpb25NZXNzYWdlSW52YWxpZDtcblx0XHR9XG5cblx0XHQvLyBGYWxsYmFjayB0byBkZWZhdWx0IG1lc3NhZ2VzXG5cdFx0cmV0dXJuIHR5cGUgPT09ICdyZXF1aXJlZCdcblx0XHRcdD8gJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnXG5cdFx0XHQ6ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBwaG9uZSBudW1iZXInO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBWYWxpZGF0ZSBwaG9uZSBudW1iZXIgYW5kIHNob3cgZXJyb3IgaWYgaW52YWxpZFxuXHQgKi9cblx0dGhpcy52YWxpZGF0ZUFuZFNob3dFcnJvciA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCB3cmFwcGVyICAgPSB0aGlzLmdldFdyYXBwZXJOb2RlKCk7XG5cdFx0Y29uc3QgaW50bElucHV0ID0gd3JhcHBlcj8ucXVlcnlTZWxlY3RvciggJ2lucHV0LnBob25lLWZpZWxkLWludGwnICk7XG5cdFx0Y29uc3QgbWFpbkZpZWxkID0gdGhpcy5ub2Rlc1sgMCBdO1xuXG5cdFx0aWYgKCAhIGludGxJbnB1dCApIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHZhbHVlID0gaW50bElucHV0LnZhbHVlLnRyaW0oKTtcblxuXHRcdC8vIENoZWNrIGlmIGZpZWxkIGlzIHJlcXVpcmVkIGFuZCBlbXB0eVxuXHRcdGlmICggbWFpbkZpZWxkLmhhc0F0dHJpYnV0ZSggJ3JlcXVpcmVkJyApICYmICEgdmFsdWUgKSB7XG5cdFx0XHR0aGlzLnNob3dFcnJvciggdGhpcy5nZXRWYWxpZGF0aW9uTWVzc2FnZSggJ3JlcXVpcmVkJyApICk7XG5cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBJZiBmaWVsZCBpcyBub3QgZW1wdHksIHZhbGlkYXRlIHBob25lIG51bWJlclxuXHRcdGlmICggdmFsdWUgJiYgdGhpcy5pdGlJbnN0YW5jZSApIHtcblx0XHRcdGNvbnN0IGlzVmFsaWQgPSB0aGlzLml0aUluc3RhbmNlLmlzVmFsaWROdW1iZXIoKTtcblxuXHRcdFx0aWYgKCAhIGlzVmFsaWQgKSB7XG5cdFx0XHRcdHRoaXMuc2hvd0Vycm9yKCB0aGlzLmdldFZhbGlkYXRpb25NZXNzYWdlKCAnaW52YWxpZCcgKSApO1xuXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBDbGVhciBlcnJvciBpZiB2YWxpZFxuXHRcdHRoaXMuY2xlYXJFcnJvcigpO1xuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH07XG5cblx0LyoqXG5cdCAqIE92ZXJyaWRlIGdldFJlcG9ydGluZ05vZGUgdG8gc2hvdyBlcnJvcnMgdW5kZXIgaW50bC10ZWwtaW5wdXQgZmllbGRcblx0ICogVXNlZCBieSBCcm93c2VyUmVwb3J0aW5nXG5cdCAqL1xuXHR0aGlzLmdldFJlcG9ydGluZ05vZGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3Qgd3JhcHBlciAgID0gdGhpcy5nZXRXcmFwcGVyTm9kZSgpO1xuXHRcdGNvbnN0IGludGxJbnB1dCA9IHdyYXBwZXI/LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0LnBob25lLWZpZWxkLWludGwnKTtcblxuXHRcdC8vIFJldHVybiBpbnRsIGlucHV0IGlmIGZvdW5kLCBvdGhlcndpc2UgcmV0dXJuIG1haW4gbm9kZVxuXHRcdHJldHVybiBpbnRsSW5wdXQgfHwgdGhpcy5ub2Rlc1sgMCBdO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBPdmVycmlkZSBnZXRXcmFwcGVyTm9kZSB0byBlbnN1cmUgY29ycmVjdCB3cmFwcGVyIGlzIHJldHVybmVkXG5cdCAqL1xuXHR0aGlzLmdldFdyYXBwZXJOb2RlID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IG5vZGUgPSB0aGlzLm5vZGVzWyAwIF07XG5cdFx0aWYgKCAhIG5vZGUgKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHQvLyBGaW5kIHRoZSAuamV0LWZvcm0tYnVpbGRlci1yb3cgd3JhcHBlclxuXHRcdGNvbnN0IHdyYXBwZXIgPSBub2RlLmNsb3Nlc3QoICcuamV0LWZvcm0tYnVpbGRlci1yb3cnICk7XG5cblx0XHRyZXR1cm4gd3JhcHBlcjtcblx0fTtcblxuXHQvKipcblx0ICogT3ZlcnJpZGUgc2V0VmFsdWUgdG8gZ2V0IHZhbHVlIGZyb20gaW50bC10ZWwtaW5wdXRcblx0ICovXG5cdFBob25lRmllbGREYXRhLnByb3RvdHlwZS5zZXRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBub2RlID0gdGhpcy5ub2Rlc1sgMCBdOyAvLyBNYWluIGZpZWxkXG5cdFx0aWYgKCAhIG5vZGUgKSB7XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fVxuXG5cdFx0aWYgKCAhIHRoaXMuaXRpSW5zdGFuY2UgKSB7XG5cdFx0XHQvLyBJZiBpbnRsLXRlbC1pbnB1dCBub3QgaW5pdGlhbGl6ZWQgeWV0LCB1c2Ugbm9kZSB2YWx1ZVxuXHRcdFx0dGhpcy5jYWxjVmFsdWUgICAgID0gbm9kZS52YWx1ZTtcblx0XHRcdHRoaXMudmFsdWUuY3VycmVudCA9IG5vZGUudmFsdWU7XG5cdFx0XHRyZXR1cm4gbm9kZS52YWx1ZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlcm1pbmUgc2F2ZSBmb3JtYXQgZnJvbSBkYXRhIGF0dHJpYnV0ZVxuXHRcdGNvbnN0IHNhdmVGb3JtYXQgPSBub2RlLmRhdGFzZXQuc2F2ZUZvcm1hdCB8fCAnZTE2NCc7XG5cblx0XHRsZXQgZmllbGRWYWx1ZTtcblxuXHRcdC8vIEdldCBmb3JtYXR0ZWQgbnVtYmVyIGJhc2VkIG9uIHNhdmUgZm9ybWF0XG5cdFx0c3dpdGNoICggc2F2ZUZvcm1hdCApIHtcblx0XHRcdGNhc2UgJ2ludGVybmF0aW9uYWwnOlxuXHRcdFx0XHRmaWVsZFZhbHVlID0gdGhpcy5pdGlJbnN0YW5jZS5nZXROdW1iZXIoIHdpbmRvdy5pbnRsVGVsSW5wdXRVdGlscy5udW1iZXJGb3JtYXQuSU5URVJOQVRJT05BTCApO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2UxNjQnOlxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0ZmllbGRWYWx1ZSA9IHRoaXMuaXRpSW5zdGFuY2UuZ2V0TnVtYmVyKCk7IC8vIEUuMTY0IGlzIGRlZmF1bHRcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cblx0XHRub2RlLnZhbHVlID0gZmllbGRWYWx1ZSB8fCAnJztcblxuXHRcdHRoaXMuY2FsY1ZhbHVlICAgICA9IGZpZWxkVmFsdWUgfHwgJyc7XG5cdFx0dGhpcy52YWx1ZS5jdXJyZW50ID0gZmllbGRWYWx1ZSB8fCAnJztcblxuXHRcdHJldHVybiBmaWVsZFZhbHVlO1xuXHR9O1xuXG59XG5cbi8vIFNldCB1cCBwcm90b3R5cGUgY2hhaW5cblBob25lRmllbGREYXRhLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIElucHV0RGF0YS5wcm90b3R5cGUgKTtcblBob25lRmllbGREYXRhLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFBob25lRmllbGREYXRhO1xuXG5leHBvcnQgZGVmYXVsdCBQaG9uZUZpZWxkRGF0YTtcbiIsIi8qKlxuICogaTE4biBMb2FkZXIgZm9yIGludGwtdGVsLWlucHV0IHRyYW5zbGF0aW9ucyAoc2lkZS1lZmZlY3QgaW1wb3J0cylcbiAqXG4gKiBUaGlzIG1vZHVsZSB1c2VzIHNpZGUtZWZmZWN0IGltcG9ydHMgYXMgcmVjb21tZW5kZWQgYnkgaW50bC10ZWwtaW5wdXQgYXV0aG9ycy5cbiAqIEVhY2ggbG9jYWxlIGltcG9ydCByZWdpc3RlcnMgaXRzZWxmIGluIHRoZSBnbG9iYWwgaW50bFRlbElucHV0R2xvYmFscyBvYmplY3QuXG4gKi9cblxuLyoqXG4gKiBNYXAgbm9ybWFsaXplZCBsb2NhbGUgY29kZXMgdG8gaW50bC10ZWwtaW5wdXQgaTE4biBmb2xkZXIgbmFtZXMuXG4gKi9cbmNvbnN0IGxvY2FsZU1hcCA9IHtcblx0YXI6ICdhcicsXG5cdGJnOiAnYmcnLFxuXHRibjogJ2JuJyxcblx0YnM6ICdicycsXG5cdGNhOiAnY2EnLFxuXHRjczogJ2NzJyxcblx0ZGE6ICdkYScsXG5cdGRlOiAnZGUnLFxuXHRlbDogJ2VsJyxcblx0ZW46ICdlbicsXG5cdGVzOiAnZXMnLFxuXHRmYTogJ2ZhJyxcblx0Zmk6ICdmaScsXG5cdGZyOiAnZnInLFxuXHRoaTogJ2hpJyxcblx0aHI6ICdocicsXG5cdGh1OiAnaHUnLFxuXHRpZDogJ2lkJyxcblx0aXQ6ICdpdCcsXG5cdGphOiAnamEnLFxuXHRrbzogJ2tvJyxcblx0bXI6ICdtcicsXG5cdG5sOiAnbmwnLFxuXHRubzogJ25vJyxcblx0cGw6ICdwbCcsXG5cdHB0OiAncHQnLFxuXHRybzogJ3JvJyxcblx0cnU6ICdydScsXG5cdHNrOiAnc2snLFxuXHRzdjogJ3N2Jyxcblx0dGU6ICd0ZScsXG5cdHRoOiAndGgnLFxuXHR0cjogJ3RyJyxcblx0dWs6ICd1aycsXG5cdHVyOiAndXInLFxuXHR2aTogJ3ZpJyxcblx0emg6ICd6aCcsXG59O1xuXG4vKipcbiAqIER5bmFtaWMgaW1wb3J0IGxvYWRlcnMgZm9yIGVhY2ggc3VwcG9ydGVkIGxvY2FsZVxuICogVGhlc2UgYXJlIHNpZGUtZWZmZWN0IGltcG9ydHMgdGhhdCByZWdpc3RlciB0cmFuc2xhdGlvbnMgZ2xvYmFsbHlcbiAqIE5vdGU6IEVuZ2xpc2ggaXMgYnVpbHQtaW4gdG8gaW50bC10ZWwtaW5wdXQsIHNvIG5vIGxvYWRlciBuZWVkZWRcbiAqL1xuY29uc3QgbG9hZGVycyA9IHtcblx0dWs6ICgpID0+IGltcG9ydCggLyogd2VicGFja0NodW5rTmFtZTogXCJwaG9uZS1pMThuLXVrXCIgKi8gJy4uLy4uLy4uL2xpYi9pbnRsLXRlbC1pbnB1dC9pMThuL3VrJyApLFxuXHRydTogKCkgPT4gaW1wb3J0KCAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBob25lLWkxOG4tcnVcIiAqLyAnLi4vLi4vLi4vbGliL2ludGwtdGVsLWlucHV0L2kxOG4vcnUnICksXG5cdGRlOiAoKSA9PiBpbXBvcnQoIC8qIHdlYnBhY2tDaHVua05hbWU6IFwicGhvbmUtaTE4bi1kZVwiICovICcuLi8uLi8uLi9saWIvaW50bC10ZWwtaW5wdXQvaTE4bi9kZScgKSxcblx0ZnI6ICgpID0+IGltcG9ydCggLyogd2VicGFja0NodW5rTmFtZTogXCJwaG9uZS1pMThuLWZyXCIgKi8gJy4uLy4uLy4uL2xpYi9pbnRsLXRlbC1pbnB1dC9pMThuL2ZyJyApLFxuXHRlczogKCkgPT4gaW1wb3J0KCAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBob25lLWkxOG4tZXNcIiAqLyAnLi4vLi4vLi4vbGliL2ludGwtdGVsLWlucHV0L2kxOG4vZXMnICksXG5cdGl0OiAoKSA9PiBpbXBvcnQoIC8qIHdlYnBhY2tDaHVua05hbWU6IFwicGhvbmUtaTE4bi1pdFwiICovICcuLi8uLi8uLi9saWIvaW50bC10ZWwtaW5wdXQvaTE4bi9pdCcgKSxcblx0cGw6ICgpID0+IGltcG9ydCggLyogd2VicGFja0NodW5rTmFtZTogXCJwaG9uZS1pMThuLXBsXCIgKi8gJy4uLy4uLy4uL2xpYi9pbnRsLXRlbC1pbnB1dC9pMThuL3BsJyApLFxuXHRwdDogKCkgPT4gaW1wb3J0KCAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBob25lLWkxOG4tcHRcIiAqLyAnLi4vLi4vLi4vbGliL2ludGwtdGVsLWlucHV0L2kxOG4vcHQnICksXG5cdG5sOiAoKSA9PiBpbXBvcnQoIC8qIHdlYnBhY2tDaHVua05hbWU6IFwicGhvbmUtaTE4bi1ubFwiICovICcuLi8uLi8uLi9saWIvaW50bC10ZWwtaW5wdXQvaTE4bi9ubCcgKSxcblx0amE6ICgpID0+IGltcG9ydCggLyogd2VicGFja0NodW5rTmFtZTogXCJwaG9uZS1pMThuLWphXCIgKi8gJy4uLy4uLy4uL2xpYi9pbnRsLXRlbC1pbnB1dC9pMThuL2phJyApLFxuXHR6aDogKCkgPT4gaW1wb3J0KCAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBob25lLWkxOG4temhcIiAqLyAnLi4vLi4vLi4vbGliL2ludGwtdGVsLWlucHV0L2kxOG4vemgnICksXG5cdGtvOiAoKSA9PiBpbXBvcnQoIC8qIHdlYnBhY2tDaHVua05hbWU6IFwicGhvbmUtaTE4bi1rb1wiICovICcuLi8uLi8uLi9saWIvaW50bC10ZWwtaW5wdXQvaTE4bi9rbycgKSxcblx0YXI6ICgpID0+IGltcG9ydCggLyogd2VicGFja0NodW5rTmFtZTogXCJwaG9uZS1pMThuLWFyXCIgKi8gJy4uLy4uLy4uL2xpYi9pbnRsLXRlbC1pbnB1dC9pMThuL2FyJyApLFxuXHR0cjogKCkgPT4gaW1wb3J0KCAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBob25lLWkxOG4tdHJcIiAqLyAnLi4vLi4vLi4vbGliL2ludGwtdGVsLWlucHV0L2kxOG4vdHInICksXG5cdHN2OiAoKSA9PiBpbXBvcnQoIC8qIHdlYnBhY2tDaHVua05hbWU6IFwicGhvbmUtaTE4bi1zdlwiICovICcuLi8uLi8uLi9saWIvaW50bC10ZWwtaW5wdXQvaTE4bi9zdicgKSxcblx0ZGE6ICgpID0+IGltcG9ydCggLyogd2VicGFja0NodW5rTmFtZTogXCJwaG9uZS1pMThuLWRhXCIgKi8gJy4uLy4uLy4uL2xpYi9pbnRsLXRlbC1pbnB1dC9pMThuL2RhJyApLFxuXHRmaTogKCkgPT4gaW1wb3J0KCAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBob25lLWkxOG4tZmlcIiAqLyAnLi4vLi4vLi4vbGliL2ludGwtdGVsLWlucHV0L2kxOG4vZmknICksXG5cdG5vOiAoKSA9PiBpbXBvcnQoIC8qIHdlYnBhY2tDaHVua05hbWU6IFwicGhvbmUtaTE4bi1ub1wiICovICcuLi8uLi8uLi9saWIvaW50bC10ZWwtaW5wdXQvaTE4bi9ubycgKSxcblx0Y3M6ICgpID0+IGltcG9ydCggLyogd2VicGFja0NodW5rTmFtZTogXCJwaG9uZS1pMThuLWNzXCIgKi8gJy4uLy4uLy4uL2xpYi9pbnRsLXRlbC1pbnB1dC9pMThuL2NzJyApLFxuXHRodTogKCkgPT4gaW1wb3J0KCAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBob25lLWkxOG4taHVcIiAqLyAnLi4vLi4vLi4vbGliL2ludGwtdGVsLWlucHV0L2kxOG4vaHUnICksXG5cdHJvOiAoKSA9PiBpbXBvcnQoIC8qIHdlYnBhY2tDaHVua05hbWU6IFwicGhvbmUtaTE4bi1yb1wiICovICcuLi8uLi8uLi9saWIvaW50bC10ZWwtaW5wdXQvaTE4bi9ybycgKSxcblx0Ymc6ICgpID0+IGltcG9ydCggLyogd2VicGFja0NodW5rTmFtZTogXCJwaG9uZS1pMThuLWJnXCIgKi8gJy4uLy4uLy4uL2xpYi9pbnRsLXRlbC1pbnB1dC9pMThuL2JnJyApLFxuXHRocjogKCkgPT4gaW1wb3J0KCAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBob25lLWkxOG4taHJcIiAqLyAnLi4vLi4vLi4vbGliL2ludGwtdGVsLWlucHV0L2kxOG4vaHInICksXG5cdHNrOiAoKSA9PiBpbXBvcnQoIC8qIHdlYnBhY2tDaHVua05hbWU6IFwicGhvbmUtaTE4bi1za1wiICovICcuLi8uLi8uLi9saWIvaW50bC10ZWwtaW5wdXQvaTE4bi9zaycgKSxcblx0ZWw6ICgpID0+IGltcG9ydCggLyogd2VicGFja0NodW5rTmFtZTogXCJwaG9uZS1pMThuLWVsXCIgKi8gJy4uLy4uLy4uL2xpYi9pbnRsLXRlbC1pbnB1dC9pMThuL2VsJyApLFxuXHR0aDogKCkgPT4gaW1wb3J0KCAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBob25lLWkxOG4tdGhcIiAqLyAnLi4vLi4vLi4vbGliL2ludGwtdGVsLWlucHV0L2kxOG4vdGgnICksXG5cdHZpOiAoKSA9PiBpbXBvcnQoIC8qIHdlYnBhY2tDaHVua05hbWU6IFwicGhvbmUtaTE4bi12aVwiICovICcuLi8uLi8uLi9saWIvaW50bC10ZWwtaW5wdXQvaTE4bi92aScgKSxcblx0aWQ6ICgpID0+IGltcG9ydCggLyogd2VicGFja0NodW5rTmFtZTogXCJwaG9uZS1pMThuLWlkXCIgKi8gJy4uLy4uLy4uL2xpYi9pbnRsLXRlbC1pbnB1dC9pMThuL2lkJyApLFxuXHRoaTogKCkgPT4gaW1wb3J0KCAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBob25lLWkxOG4taGlcIiAqLyAnLi4vLi4vLi4vbGliL2ludGwtdGVsLWlucHV0L2kxOG4vaGknICksXG5cdGJuOiAoKSA9PiBpbXBvcnQoIC8qIHdlYnBhY2tDaHVua05hbWU6IFwicGhvbmUtaTE4bi1iblwiICovICcuLi8uLi8uLi9saWIvaW50bC10ZWwtaW5wdXQvaTE4bi9ibicgKSxcblx0dXI6ICgpID0+IGltcG9ydCggLyogd2VicGFja0NodW5rTmFtZTogXCJwaG9uZS1pMThuLXVyXCIgKi8gJy4uLy4uLy4uL2xpYi9pbnRsLXRlbC1pbnB1dC9pMThuL3VyJyApLFxuXHRmYTogKCkgPT4gaW1wb3J0KCAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBob25lLWkxOG4tZmFcIiAqLyAnLi4vLi4vLi4vbGliL2ludGwtdGVsLWlucHV0L2kxOG4vZmEnICksXG5cdG1yOiAoKSA9PiBpbXBvcnQoIC8qIHdlYnBhY2tDaHVua05hbWU6IFwicGhvbmUtaTE4bi1tclwiICovICcuLi8uLi8uLi9saWIvaW50bC10ZWwtaW5wdXQvaTE4bi9tcicgKSxcblx0dGU6ICgpID0+IGltcG9ydCggLyogd2VicGFja0NodW5rTmFtZTogXCJwaG9uZS1pMThuLXRlXCIgKi8gJy4uLy4uLy4uL2xpYi9pbnRsLXRlbC1pbnB1dC9pMThuL3RlJyApLFxuXHRiczogKCkgPT4gaW1wb3J0KCAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBob25lLWkxOG4tYnNcIiAqLyAnLi4vLi4vLi4vbGliL2ludGwtdGVsLWlucHV0L2kxOG4vYnMnICksXG5cdGNhOiAoKSA9PiBpbXBvcnQoIC8qIHdlYnBhY2tDaHVua05hbWU6IFwicGhvbmUtaTE4bi1jYVwiICovICcuLi8uLi8uLi9saWIvaW50bC10ZWwtaW5wdXQvaTE4bi9jYScgKSxcbn07XG5cbi8qKlxuICogQ2FjaGUgZm9yIGxvYWRlZCB0cmFuc2xhdGlvbiBtb2R1bGVzXG4gKi9cbmNvbnN0IHRyYW5zbGF0aW9uQ2FjaGUgPSB7fTtcblxuY29uc3QgZ2V0V2luZG93TG9jYWxlQ29udGV4dCA9ICgpID0+IHtcblx0cmV0dXJuIHR5cGVvZiB3aW5kb3cuamZiUGhvbmVGaWVsZExvY2FsZUNvbnRleHQgPT09ICdvYmplY3QnICYmXG5cdFx0d2luZG93LmpmYlBob25lRmllbGRMb2NhbGVDb250ZXh0ICE9PSBudWxsXG5cdFx0PyB3aW5kb3cuamZiUGhvbmVGaWVsZExvY2FsZUNvbnRleHRcblx0XHQ6IHt9O1xufTtcblxuY29uc3QgZ2V0Rmlyc3ROb3JtYWxpemVkTG9jYWxlID0gKCBjYW5kaWRhdGVzID0gW10gKSA9PiB7XG5cdGZvciAoIGNvbnN0IGxvY2FsZSBvZiBjYW5kaWRhdGVzICkge1xuXHRcdGNvbnN0IG5vcm1hbGl6ZWRMb2NhbGUgPSBub3JtYWxpemVMb2NhbGUoIGxvY2FsZSApO1xuXG5cdFx0aWYgKCBub3JtYWxpemVkTG9jYWxlICkge1xuXHRcdFx0cmV0dXJuIG5vcm1hbGl6ZWRMb2NhbGU7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuICcnO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUxvY2FsZSggbG9jYWxlICkge1xuXHRpZiAoICEgbG9jYWxlIHx8ICdzdHJpbmcnICE9PSB0eXBlb2YgbG9jYWxlICkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdGNvbnN0IHNhbml0aXplZCA9IGxvY2FsZS50cmltKCkucmVwbGFjZSggLy0vZywgJ18nICk7XG5cblx0aWYgKCAhIHNhbml0aXplZCApIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRjb25zdCBbIGxhbmd1YWdlID0gJycsIHJlZ2lvbiA9ICcnIF0gPSBzYW5pdGl6ZWQuc3BsaXQoICdfJyApO1xuXG5cdGlmICggISBsYW5ndWFnZSApIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRyZXR1cm4gcmVnaW9uXG5cdFx0PyBgJHsgbGFuZ3VhZ2UudG9Mb3dlckNhc2UoKSB9XyR7IHJlZ2lvbi50b1VwcGVyQ2FzZSgpIH1gXG5cdFx0OiBsYW5ndWFnZS50b0xvd2VyQ2FzZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUludGxMb2NhbGUoIGxvY2FsZSApIHtcblx0Y29uc3Qgbm9ybWFsaXplZExvY2FsZSA9IG5vcm1hbGl6ZUxvY2FsZSggbG9jYWxlICk7XG5cblx0aWYgKCAhIG5vcm1hbGl6ZWRMb2NhbGUgKSB7XG5cdFx0cmV0dXJuICdlbic7XG5cdH1cblxuXHRjb25zdCBbIGxhbmd1YWdlIF0gPSBub3JtYWxpemVkTG9jYWxlLnNwbGl0KCAnXycgKTtcblxuXHRyZXR1cm4gbG9jYWxlTWFwWyBub3JtYWxpemVkTG9jYWxlIF0gfHwgbG9jYWxlTWFwWyBsYW5ndWFnZSBdIHx8ICdlbic7XG59XG5cbi8qKlxuICogTG9hZCB0cmFuc2xhdGlvbnMgZm9yIGludGwtdGVsLWlucHV0IChFU00gaW1wb3J0IGFwcHJvYWNoKVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB3cExvY2FsZSAtIFdvcmRQcmVzcyBsb2NhbGUgKGUuZy4sICd1aycsICdkZV9ERScpXG4gKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdD59IC0gUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRyYW5zbGF0aW9ucyBvYmplY3RcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRJbnRsVGVsSW5wdXRMb2NhbGUoIHdwTG9jYWxlICkge1xuXHRjb25zdCBsb2NhbGUgPSByZXNvbHZlSW50bExvY2FsZSggd3BMb2NhbGUgKTtcblxuXHQvLyBFbmdsaXNoIGlzIGJ1aWx0LWluIHRvIGludGwtdGVsLWlucHV0LCBubyBuZWVkIHRvIGxvYWRcblx0aWYgKCBsb2NhbGUgPT09ICdlbicgKSB7XG5cdFx0cmV0dXJuIHt9O1xuXHR9XG5cblx0Ly8gQ2hlY2sgY2FjaGUgZmlyc3Rcblx0aWYgKCB0cmFuc2xhdGlvbkNhY2hlWyBsb2NhbGUgXSApIHtcblx0XHRyZXR1cm4gdHJhbnNsYXRpb25DYWNoZVsgbG9jYWxlIF07XG5cdH1cblxuXHQvLyBHZXQgbG9hZGVyIGZvciB0aGlzIGxvY2FsZVxuXHRjb25zdCBsb2FkZXIgPSBsb2FkZXJzWyBsb2NhbGUgXTtcblxuXHRpZiAoICEgbG9hZGVyICkge1xuXHRcdC8vIE5vIGxvYWRlciBmb3VuZCwgcmV0dXJuIGVtcHR5ICh3aWxsIHVzZSBFbmdsaXNoIGRlZmF1bHQpXG5cdFx0cmV0dXJuIHt9O1xuXHR9XG5cblx0dHJ5IHtcblx0XHQvLyBFeGVjdXRlIGltcG9ydCBhbmQgZ2V0IHRoZSBtb2R1bGVcblx0XHRjb25zdCBtb2R1bGUgPSBhd2FpdCBsb2FkZXIoKTtcblxuXHRcdC8vIEV4dHJhY3QgdHJhbnNsYXRpb25zIGZyb20gdGhlIG1vZHVsZVxuXHRcdC8vIG1vZHVsZS5kZWZhdWx0IGNvbnRhaW5zIG1lcmdlZCB0cmFuc2xhdGlvbnMgKGNvdW50cmllcyArIGludGVyZmFjZSlcblx0XHRjb25zdCB0cmFuc2xhdGlvbnMgPSBtb2R1bGUuZGVmYXVsdCB8fCB7fTtcblxuXHRcdC8vIENhY2hlIHRoZSByZXN1bHRcblx0XHR0cmFuc2xhdGlvbkNhY2hlWyBsb2NhbGUgXSA9IHRyYW5zbGF0aW9ucztcblxuXHRcdHJldHVybiB0cmFuc2xhdGlvbnM7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiB7fTtcblx0fVxufVxuXG4vKipcbiAqIEdldCBXb3JkUHJlc3MgbG9jYWxlIGZyb20gZG9jdW1lbnQgb3IgZ2xvYmFsIHZhcmlhYmxlXG4gKlxuICogQHJldHVybiB7c3RyaW5nfSBXb3JkUHJlc3MgbG9jYWxlIGNvZGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFBhZ2VMb2NhbGUoKSB7XG5cdGNvbnN0IGxvY2FsZUNvbnRleHQgPSBnZXRXaW5kb3dMb2NhbGVDb250ZXh0KCk7XG5cblx0cmV0dXJuIGdldEZpcnN0Tm9ybWFsaXplZExvY2FsZSggW1xuXHRcdGxvY2FsZUNvbnRleHQucGFnZUxvY2FsZSxcblx0XHRsb2NhbGVDb250ZXh0LnBhZ2VMYW5nLFxuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudD8ubGFuZyxcblx0XHRsb2NhbGVDb250ZXh0LnNpdGVMb2NhbGUsXG5cdFx0bG9jYWxlQ29udGV4dC5zaXRlTGFuZyxcblx0XSApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2l0ZUxvY2FsZSgpIHtcblx0Y29uc3QgbG9jYWxlQ29udGV4dCA9IGdldFdpbmRvd0xvY2FsZUNvbnRleHQoKTtcblxuXHRyZXR1cm4gZ2V0Rmlyc3ROb3JtYWxpemVkTG9jYWxlKCBbXG5cdFx0bG9jYWxlQ29udGV4dC5zaXRlTG9jYWxlLFxuXHRcdGxvY2FsZUNvbnRleHQuc2l0ZUxhbmcsXG5cdF0gKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVDdXJyZW50TG9jYWxlKCkge1xuXHRyZXR1cm4gZ2V0UGFnZUxvY2FsZSgpIHx8ICdlbic7XG59XG5cbi8qKlxuICogTG9hZCB0cmFuc2xhdGlvbnMgYmFzZWQgb24gY3VycmVudCBXb3JkUHJlc3MgbG9jYWxlXG4gKlxuICogQHJldHVybiB7UHJvbWlzZTxPYmplY3Q+fSBDb3VudHJ5IHRyYW5zbGF0aW9uc1xuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEN1cnJlbnRMb2NhbGVUcmFuc2xhdGlvbnMoKSB7XG5cdGNvbnN0IGxvY2FsZSA9IHJlc29sdmVDdXJyZW50TG9jYWxlKCk7XG5cblx0cmV0dXJuIGF3YWl0IGxvYWRJbnRsVGVsSW5wdXRMb2NhbGUoIGxvY2FsZSApO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGxvYWRJbnRsVGVsSW5wdXRMb2NhbGUsXG5cdGxvYWRDdXJyZW50TG9jYWxlVHJhbnNsYXRpb25zLFxuXHRnZXRQYWdlTG9jYWxlLFxuXHRnZXRTaXRlTG9jYWxlLFxuXHRyZXNvbHZlQ3VycmVudExvY2FsZSxcblx0cmVzb2x2ZUludGxMb2NhbGUsXG5cdG5vcm1hbGl6ZUxvY2FsZSxcblx0bG9jYWxlTWFwLFxufTtcbiIsImxldCB7XG5cdFx0QWR2YW5jZWRSZXN0cmljdGlvbixcblx0XHRSZXN0cmljdGlvbixcbiAgICB9ID0gd2luZG93LkpldEZvcm1CdWlsZGVyQWJzdHJhY3QgfHwge307XG5cbi8vIEZhbGxiYWNrIGlmIEFkdmFuY2VkUmVzdHJpY3Rpb24gaXMgbm90IGF2YWlsYWJsZVxuQWR2YW5jZWRSZXN0cmljdGlvbiA9IEFkdmFuY2VkUmVzdHJpY3Rpb24gfHwgUmVzdHJpY3Rpb247XG5cbi8qKlxuICogUGhvbmUgTnVtYmVyIFZhbGlkYXRpb24gUmVzdHJpY3Rpb25cbiAqL1xuZnVuY3Rpb24gUGhvbmVSZXN0cmljdGlvbigpIHtcblx0QWR2YW5jZWRSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy50eXBlID0gJ3Bob25lX3ZhbGlkYXRpb24nO1xufVxuXG5QaG9uZVJlc3RyaWN0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEFkdmFuY2VkUmVzdHJpY3Rpb24ucHJvdG90eXBlICk7XG5cbi8qKlxuICogT25seSBhcHBseSB0aGlzIHJlc3RyaWN0aW9uIGlmIGZpZWxkIGlzIGEgcGhvbmUgZmllbGRcbiAqL1xuUGhvbmVSZXN0cmljdGlvbi5wcm90b3R5cGUuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cdGNvbnN0IGlzUGhvbmVGaWVsZCA9IG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCAncGhvbmUtZmllbGQnICk7XG5cblx0cmV0dXJuIGlzUGhvbmVGaWVsZDtcbn07XG5cbi8qKlxuICogVmFsaWRhdGUgcGhvbmUgbnVtYmVyIHVzaW5nIGludGwtdGVsLWlucHV0XG4gKi9cblBob25lUmVzdHJpY3Rpb24ucHJvdG90eXBlLnZhbGlkYXRlID0gZnVuY3Rpb24gKCkge1xuXHRjb25zdCBpbnB1dCAgICAgPSB0aGlzLnJlcG9ydGluZy5pbnB1dDtcblx0Y29uc3Qgd3JhcHBlciAgID0gaW5wdXQuZ2V0V3JhcHBlck5vZGUoKTtcblx0Y29uc3QgaW50bElucHV0ID0gd3JhcHBlcj8ucXVlcnlTZWxlY3RvcignaW5wdXQucGhvbmUtZmllbGQtaW50bCcpO1xuXG5cdC8vIElmIGl0aUluc3RhbmNlIGlzIG5vdCByZWFkeSB5ZXQsIHNraXAgdmFsaWRhdGlvbiAocmV0dXJuIHRydWUpXG5cdGlmICggISBpbnB1dC5pdGlJbnN0YW5jZSApIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdC8vIElmIGludGwgaW5wdXQgZmllbGQgaXMgZW1wdHksIGxldCByZXF1aXJlZCByZXN0cmljdGlvbiBoYW5kbGUgaXRcblx0aWYgKCAhIGludGxJbnB1dCB8fCAhIGludGxJbnB1dC52YWx1ZS50cmltKCkgKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHQvLyBWYWxpZGF0ZSB1c2luZyBpbnRsLXRlbC1pbnB1dFxuXHRjb25zdCBpc1ZhbGlkID0gaW5wdXQuaXRpSW5zdGFuY2UuaXNWYWxpZE51bWJlcigpO1xuXG5cdHJldHVybiBpc1ZhbGlkO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gdmFsaWRhdGlvbiBlcnJvciBtZXNzYWdlXG4gKi9cblBob25lUmVzdHJpY3Rpb24ucHJvdG90eXBlLmdldFJhd01lc3NhZ2UgPSBmdW5jdGlvbiAoKSB7XG5cdC8vIFRyeSB0byBnZXQgY3VzdG9tIG1lc3NhZ2UgZnJvbSBmaWVsZCBjb25maWd1cmF0aW9uXG5cdGNvbnN0IGN1c3RvbU1lc3NhZ2UgPSB0aGlzLmdldE1lc3NhZ2VCeVNsdWc/LiggJ3Bob25lX2ludmFsaWQnICk7XG5cblx0aWYgKCBjdXN0b21NZXNzYWdlICkge1xuXHRcdHJldHVybiBjdXN0b21NZXNzYWdlO1xuXHR9XG5cblx0Ly8gRGVmYXVsdCBtZXNzYWdlXG5cdHJldHVybiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgcGhvbmUgbnVtYmVyJztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBob25lUmVzdHJpY3Rpb247XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0ZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5mID0ge307XG4vLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4vLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uZSA9IChjaHVua0lkKSA9PiB7XG5cdHJldHVybiBQcm9taXNlLmFsbChPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmYpLnJlZHVjZSgocHJvbWlzZXMsIGtleSkgPT4ge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZltrZXldKGNodW5rSWQsIHByb21pc2VzKTtcblx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdH0sIFtdKSk7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFzeW5jIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy51ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIG5vdCBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRpZiAoe1wicGhvbmUtaTE4bi11a1wiOjEsXCJwaG9uZS1pMThuLXJ1XCI6MSxcInBob25lLWkxOG4tZGVcIjoxLFwicGhvbmUtaTE4bi1mclwiOjEsXCJwaG9uZS1pMThuLWVzXCI6MSxcInBob25lLWkxOG4taXRcIjoxLFwicGhvbmUtaTE4bi1wbFwiOjEsXCJwaG9uZS1pMThuLXB0XCI6MSxcInBob25lLWkxOG4tbmxcIjoxLFwicGhvbmUtaTE4bi1qYVwiOjEsXCJwaG9uZS1pMThuLXpoXCI6MSxcInBob25lLWkxOG4ta29cIjoxLFwicGhvbmUtaTE4bi1hclwiOjEsXCJwaG9uZS1pMThuLXRyXCI6MSxcInBob25lLWkxOG4tc3ZcIjoxLFwicGhvbmUtaTE4bi1kYVwiOjEsXCJwaG9uZS1pMThuLWZpXCI6MSxcInBob25lLWkxOG4tbm9cIjoxLFwicGhvbmUtaTE4bi1jc1wiOjEsXCJwaG9uZS1pMThuLWh1XCI6MSxcInBob25lLWkxOG4tcm9cIjoxLFwicGhvbmUtaTE4bi1iZ1wiOjEsXCJwaG9uZS1pMThuLWhyXCI6MSxcInBob25lLWkxOG4tc2tcIjoxLFwicGhvbmUtaTE4bi1lbFwiOjEsXCJwaG9uZS1pMThuLXRoXCI6MSxcInBob25lLWkxOG4tdmlcIjoxLFwicGhvbmUtaTE4bi1pZFwiOjEsXCJwaG9uZS1pMThuLWhpXCI6MSxcInBob25lLWkxOG4tYm5cIjoxLFwicGhvbmUtaTE4bi11clwiOjEsXCJwaG9uZS1pMThuLWZhXCI6MSxcInBob25lLWkxOG4tbXJcIjoxLFwicGhvbmUtaTE4bi10ZVwiOjEsXCJwaG9uZS1pMThuLWJzXCI6MSxcInBob25lLWkxOG4tY2FcIjoxfVtjaHVua0lkXSkgcmV0dXJuIFwiZnJvbnRlbmQvaTE4bi9cIiArIGNodW5rSWQgKyBcIi5qc1wiO1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIHVuZGVmaW5lZDtcbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYXN5bmMgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm1pbmlDc3NGID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiB1bmRlZmluZWQ7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBpblByb2dyZXNzID0ge307XG4vLyBkYXRhLXdlYnBhY2sgaXMgbm90IHVzZWQgYXMgYnVpbGQgaGFzIG5vIHVuaXF1ZU5hbWVcbi8vIGxvYWRTY3JpcHQgZnVuY3Rpb24gdG8gbG9hZCBhIHNjcmlwdCB2aWEgc2NyaXB0IHRhZ1xuX193ZWJwYWNrX3JlcXVpcmVfXy5sID0gKHVybCwgZG9uZSwga2V5LCBjaHVua0lkKSA9PiB7XG5cdGlmKGluUHJvZ3Jlc3NbdXJsXSkgeyBpblByb2dyZXNzW3VybF0ucHVzaChkb25lKTsgcmV0dXJuOyB9XG5cdHZhciBzY3JpcHQsIG5lZWRBdHRhY2g7XG5cdGlmKGtleSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc2NyaXB0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHMgPSBzY3JpcHRzW2ldO1xuXHRcdFx0aWYocy5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgPT0gdXJsKSB7IHNjcmlwdCA9IHM7IGJyZWFrOyB9XG5cdFx0fVxuXHR9XG5cdGlmKCFzY3JpcHQpIHtcblx0XHRuZWVkQXR0YWNoID0gdHJ1ZTtcblx0XHRzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuXHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04Jztcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuXHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuXHRcdH1cblxuXG5cdFx0c2NyaXB0LnNyYyA9IHVybDtcblx0fVxuXHRpblByb2dyZXNzW3VybF0gPSBbZG9uZV07XG5cdHZhciBvblNjcmlwdENvbXBsZXRlID0gKHByZXYsIGV2ZW50KSA9PiB7XG5cdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdHZhciBkb25lRm5zID0gaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdGRlbGV0ZSBpblByb2dyZXNzW3VybF07XG5cdFx0c2NyaXB0LnBhcmVudE5vZGUgJiYgc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcblx0XHRkb25lRm5zICYmIGRvbmVGbnMuZm9yRWFjaCgoZm4pID0+IChmbihldmVudCkpKTtcblx0XHRpZihwcmV2KSByZXR1cm4gcHJldihldmVudCk7XG5cdH1cblx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCB1bmRlZmluZWQsIHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KSwgMTIwMDAwKTtcblx0c2NyaXB0Lm9uZXJyb3IgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9uZXJyb3IpO1xuXHRzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmxvYWQpO1xuXHRuZWVkQXR0YWNoICYmIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn07IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC9eYmxvYjovLCBcIlwiKS5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmwgKyBcIi4uL1wiOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImZyb250ZW5kL2ZpZWxkXCI6IDBcbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uZi5qID0gKGNodW5rSWQsIHByb21pc2VzKSA9PiB7XG5cdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSA/IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA6IHVuZGVmaW5lZDtcblx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cblx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG5cdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYodHJ1ZSkgeyAvLyBhbGwgY2h1bmtzIGhhdmUgSlNcblx0XHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG5cdFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiAoaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF0pKTtcblx0XHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG5cdFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuXHRcdFx0XHRcdHZhciB1cmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLnUoY2h1bmtJZCk7XG5cdFx0XHRcdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuXHRcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuXHRcdFx0XHRcdHZhciBsb2FkaW5nRW5kZWQgPSAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpKSB7XG5cdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG5cdFx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhWzFdKGVycm9yKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5sKHVybCwgbG9hZGluZ0VuZGVkLCBcImNodW5rLVwiICsgY2h1bmtJZCwgY2h1bmtJZCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG59O1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rXCJdID0gc2VsZltcIndlYnBhY2tDaHVua1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiaW1wb3J0IFBob25lRmllbGREYXRhIGZyb20gJy4vUGhvbmVGaWVsZERhdGEnO1xuaW1wb3J0IFBob25lUmVzdHJpY3Rpb24gZnJvbSAnLi4vcmVzdHJpY3Rpb25zL1Bob25lUmVzdHJpY3Rpb24nO1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuXG4vLyBVc2UgSmV0UGx1Z2lucyBob29rcyAoc2FtZSBhcyBvdGhlciBKZXRGb3JtQnVpbGRlciBmaWVsZHMpXG5jb25zdCB7IGFkZEZpbHRlciB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxuXG4vLyBSZWdpc3RlciBpbnB1dCBoYW5kbGVyXG5hZGRGaWx0ZXIoXG5cdCdqZXQuZmIuaW5wdXRzJyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvcGhvbmUtZmllbGQnLFxuXHRmdW5jdGlvbiAoIGlucHV0cyApIHtcblx0XHRpbnB1dHMucHVzaCggUGhvbmVGaWVsZERhdGEgKTtcblx0XHRyZXR1cm4gaW5wdXRzO1xuXHR9LFxuXHQxMFxuKTtcblxuLy8gUmVnaXN0ZXIgcGhvbmUgdmFsaWRhdGlvbiByZXN0cmljdGlvblxuY29uc3QgYWRkUmVzdHJpY3Rpb24gPSAoIHJlc3RyaWN0aW9ucyApID0+IHtcblx0cmVzdHJpY3Rpb25zLnB1c2goIFBob25lUmVzdHJpY3Rpb24gKTtcblx0cmV0dXJuIHJlc3RyaWN0aW9ucztcbn07XG5cbi8vIEFkZCB0byBib3RoIGRlZmF1bHQgYW5kIGFkdmFuY2VkIHJlc3RyaWN0aW9uc1xuYWRkRmlsdGVyKFxuXHQnamV0LmZiLnJlc3RyaWN0aW9ucy5kZWZhdWx0Jyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvcGhvbmUtZmllbGQnLFxuXHRhZGRSZXN0cmljdGlvbixcbik7XG5cbmFkZEZpbHRlcihcblx0J2pldC5mYi5yZXN0cmljdGlvbnMnLFxuXHQnamV0LWZvcm0tYnVpbGRlci9waG9uZS1maWVsZCcsXG5cdGFkZFJlc3RyaWN0aW9uLFxuKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=