/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/auto-update/CacheManager.js":
/*!**********************************************!*\
  !*** ./frontend/auto-update/CacheManager.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Cache Manager for Auto-Update Feature.
 *
 * Manages in-memory caching of generated options with configurable timeout.
 * Implements Map-based storage with timestamp tracking for TTL (Time To Live).
 *
 * @package JetFormBuilder
 */

/**
 * Cache Manager Class.
 *
 * Stores generated options with keys based on generator ID and context values.
 * Supports cache timeout configuration per field.
 */
class CacheManager {
  constructor() {
    /**
     * Cache storage.
     * Key format: "generatorId:contextHash"
     * Value: { options: Array, timestamp: Number }
     *
     * @type {Map<string, Object>}
     */
    this.cache = new Map();

    /**
     * Default cache timeout in seconds.
     * 0 = disabled, -1 = permanent, N = seconds
     *
     * @type {number}
     */
    this.defaultTimeout = 60;
  }

  /**
   * Generate cache key from generator ID and context.
   *
   * @param {string} generatorId Generator identifier.
   * @param {Object} context     Context object with field values.
   *
   * @return {string} Cache key.
   */
  generateKey(generatorId, context) {
    // Sort context keys for consistent hashing
    const sortedContext = Object.keys(context).sort().reduce((acc, key) => {
      acc[key] = context[key];
      return acc;
    }, {});
    const contextString = JSON.stringify(sortedContext);
    return `${generatorId}:${contextString}`;
  }

  /**
   * Check if cached data exists and is still valid.
   *
   * @param {string} generatorId  Generator identifier.
   * @param {Object} context      Context object with field values.
   * @param {number} cacheTimeout Cache timeout in seconds (0=disabled, -1=permanent, N=seconds).
   *
   * @return {boolean} True if valid cache exists.
   */
  has(generatorId, context, cacheTimeout = this.defaultTimeout) {
    // Cache disabled
    if (cacheTimeout === 0) {
      return false;
    }
    const key = this.generateKey(generatorId, context);
    const cached = this.cache.get(key);
    if (!cached) {
      return false;
    }

    // Permanent cache
    if (cacheTimeout === -1) {
      return true;
    }

    // Check if cache is expired
    const now = Date.now();
    const age = (now - cached.timestamp) / 1000; // Convert to seconds

    if (age > cacheTimeout) {
      // Cache expired, remove it
      this.cache.delete(key);
      return false;
    }
    return true;
  }

  /**
   * Get cached options.
   *
   * @param {string} generatorId  Generator identifier.
   * @param {Object} context      Context object with field values.
   * @param {number} cacheTimeout Cache timeout in seconds.
   *
   * @return {Array|null} Cached options or null if not found/expired.
   */
  get(generatorId, context, cacheTimeout = this.defaultTimeout) {
    if (!this.has(generatorId, context, cacheTimeout)) {
      return null;
    }
    const key = this.generateKey(generatorId, context);
    const cached = this.cache.get(key);
    return cached ? cached.options : null;
  }

  /**
   * Store options in cache.
   *
   * @param {string} generatorId Generator identifier.
   * @param {Object} context     Context object with field values.
   * @param {Array}  options     Generated options to cache.
   */
  set(generatorId, context, options) {
    const key = this.generateKey(generatorId, context);
    this.cache.set(key, {
      options,
      timestamp: Date.now()
    });
  }

  /**
   * Clear cache for specific generator and context.
   *
   * @param {string} generatorId Generator identifier.
   * @param {Object} context     Context object with field values.
   */
  clear(generatorId, context) {
    const key = this.generateKey(generatorId, context);
    this.cache.delete(key);
  }

  /**
   * Clear all cache entries.
   */
  clearAll() {
    this.cache.clear();
  }

  /**
   * Get cache statistics.
   *
   * @return {Object} Statistics object with size and keys.
   */
  getStats() {
    return {
      size: this.cache.size,
      keys: Array.from(this.cache.keys())
    };
  }

  /**
   * Clean expired cache entries.
   * Useful for periodic cleanup of stale data.
   *
   * @param {number} maxAge Maximum age in seconds (default: 3600 = 1 hour).
   */
  cleanExpired(maxAge = 3600) {
    const now = Date.now();
    const keysToDelete = [];
    this.cache.forEach((value, key) => {
      const age = (now - value.timestamp) / 1000;
      if (age > maxAge) {
        keysToDelete.push(key);
      }
    });
    keysToDelete.forEach(key => {
      this.cache.delete(key);
    });
    return keysToDelete.length;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CacheManager);

/***/ }),

/***/ "./frontend/auto-update/FieldWatcher.js":
/*!**********************************************!*\
  !*** ./frontend/auto-update/FieldWatcher.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CacheManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CacheManager */ "./frontend/auto-update/CacheManager.js");
/* harmony import */ var _OptionsUpdater__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OptionsUpdater */ "./frontend/auto-update/OptionsUpdater.js");
/**
 * Field Watcher for Auto-Update Feature.
 *
 * Watches form field changes and triggers option updates for dependent fields.
 * Uses JetFormBuilder's reactive input.value.watch() method.
 *
 * @package JetFormBuilder
 */




/**
 * Field Watcher Class.
 *
 * Manages watching field changes and coordinating updates.
 */
class FieldWatcher {
  constructor() {
    /**
     * Cache manager instance.
     *
     * @type {CacheManager}
     */
    this.cacheManager = new _CacheManager__WEBPACK_IMPORTED_MODULE_0__["default"]();

    /**
     * Options updater instance.
     *
     * @type {OptionsUpdater}
     */
    this.optionsUpdater = new _OptionsUpdater__WEBPACK_IMPORTED_MODULE_1__["default"]();

    /**
     * Map of watchers by field name.
     * Key: field name, Value: { unwatch: Function, dependents: Array }
     *
     * @type {Map<string, Object>}
     */
    this.watchers = new Map();

    /**
     * Map of auto-update fields by field name.
     * Key: field name, Value: { element, config }
     *
     * @type {Map<string, Object>}
     */
    this.autoUpdateFields = new Map();

    /**
     * Abort controllers for pending requests.
     * Key: field name, Value: AbortController
     *
     * @type {Map<string, AbortController>}
     */
    this.abortControllers = new Map();

    /**
     * Debounce timers.
     * Key: field name, Value: timeout ID
     *
     * @type {Map<string, number>}
     */
    this.debounceTimers = new Map();

    /**
     * Debounce delay in milliseconds.
     *
     * @type {number}
     */
    this.debounceDelay = 300;
  }

  /**
   * Initialize auto-update for all fields in a form.
   *
   * @param {HTMLElement} formNode Form element.
   */
  initForm(formNode) {
    // Find all fields with auto-update enabled
    const autoUpdateFields = formNode.querySelectorAll('[data-jfb-auto-update="1"]');
    autoUpdateFields.forEach(fieldElement => {
      this.initField(fieldElement, formNode);
    });
  }

  /**
   * Initialize auto-update for a single field.
   *
   * @param {HTMLElement} fieldElement Field element (select/input).
   * @param {HTMLElement} formNode     Form element.
   */
  initField(fieldElement, formNode) {
    const config = this.parseFieldConfig(fieldElement);
    if (!config) {
      return;
    }

    // Store field configuration
    this.autoUpdateFields.set(config.fieldName, {
      element: fieldElement,
      config
    });

    // Setup watchers based on configuration
    if (config.listenTo && Array.isArray(config.listenTo)) {
      // Watch each source field
      config.listenTo.forEach(sourceFieldName => {
        this.watchField(sourceFieldName, config.fieldName, formNode);
      });
    }
    if (config.listenAll) {
      this.watchAllFields(config.fieldName, formNode);
    }

    // Trigger initial update on page load if field has listeners
    if (config.listenTo || config.listenAll) {
      setTimeout(() => {
        this.updateField(config.fieldName, formNode);
      }, 50);
    }

    // TODO: Handle button triggers (generator_update_on_button)
  }

  /**
   * Parse field configuration from data attributes.
   *
   * @param {HTMLElement} fieldElement Field element.
   *
   * @return {Object|null} Configuration object or null if invalid.
   */
  parseFieldConfig(fieldElement) {
    const generatorId = fieldElement.dataset.generatorId;
    const fieldName = fieldElement.dataset.fieldName;
    if (!generatorId || !fieldName) {
      return null;
    }

    // Parse listenTo - can be string (single field) or array (multiple fields)
    let listenTo = fieldElement.dataset.listenTo || null;
    if (listenTo) {
      // Check if it's multiple fields (JSON array)
      const isMultiple = fieldElement.dataset.listenToMultiple === '1';
      if (isMultiple) {
        // Parse JSON array
        listenTo = this.parseJSON(listenTo);

        // Validate it's an array
        if (!Array.isArray(listenTo)) {
          console.error('[JFB Auto-Update] Expected array for multiple listen fields, got:', listenTo);
          listenTo = null;
        }
      } else {
        // Single field: normalize to array for consistent handling
        listenTo = [listenTo];
      }
    }
    return {
      generatorId,
      fieldName,
      listenTo,
      // Now always an array or null
      listenAll: fieldElement.dataset.listenAll === '1',
      updateOnButton: fieldElement.dataset.updateOnButton || null,
      cacheTimeout: parseInt(fieldElement.dataset.cacheTimeout) || 60,
      formId: parseInt(fieldElement.dataset.formId) || 0,
      blockAttrs: this.parseJSON(fieldElement.dataset.blockAttrs)
    };
  }

  /**
   * Safely parse JSON string.
   *
   * @param {string} jsonString JSON string.
   *
   * @return {Object|null} Parsed object or null if invalid.
   */
  parseJSON(jsonString) {
    try {
      return JSON.parse(jsonString);
    } catch (e) {
      console.error('[JFB Auto-Update] Invalid JSON:', e);
      return null;
    }
  }

  /**
   * Create input wrapper from DOM element.
   * Fallback method when JetFormBuilder API doesn't work.
   *
   * @param {string}      fieldName Field name to find.
   * @param {HTMLElement} formNode  Form element.
   *
   * @return {Object|null} Input wrapper object or null if not found.
   */
  createInputWrapperFromDOM(fieldName, formNode) {
    // Try to find field by data-field-name attribute
    let fieldElement = formNode.querySelector(`[data-field-name="${fieldName}"]`);

    // Fallback: try by name attribute
    if (!fieldElement) {
      fieldElement = formNode.querySelector(`[name="${fieldName}"]`);
    }
    if (!fieldElement) {
      return null;
    }

    // Create a reactive wrapper similar to JetFormBuilder's input structure
    const wrapper = {
      name: fieldName,
      node: fieldElement,
      value: {
        current: fieldElement.value || '',
        watchers: [],
        watch: callback => {
          // Add event listener
          const handler = () => {
            wrapper.value.current = fieldElement.value || '';
            callback(wrapper.value.current);
          };
          fieldElement.addEventListener('change', handler);
          fieldElement.addEventListener('input', handler);

          // Return unwatch function
          return () => {
            fieldElement.removeEventListener('change', handler);
            fieldElement.removeEventListener('input', handler);
          };
        }
      }
    };
    console.log(`[JFB Auto-Update] Created DOM wrapper for field: ${fieldName}`);
    return wrapper;
  }

  /**
   * Watch a specific field for changes.
   *
   * @param {string}      sourceFieldName Field name to watch.
   * @param {string}      targetFieldName Field name to update.
   * @param {HTMLElement} formNode        Form element.
   */
  watchField(sourceFieldName, targetFieldName, formNode) {
    // Try to find input using JetFormBuilder's API
    let sourceInput = null;

    // Method 1: Try findInput (for regular fields)
    if (window.JetFormBuilderMain?.inputData?.findInput) {
      sourceInput = window.JetFormBuilderMain.inputData.findInput(sourceFieldName, formNode);
    }

    // Method 2: If not found, try getInput (alternative API)
    if (!sourceInput && window.JetFormBuilderMain?.inputData?.getInput) {
      sourceInput = window.JetFormBuilderMain.inputData.getInput(sourceFieldName, formNode);
    }

    // Method 3: If still not found, search all inputs
    if (!sourceInput && window.JetFormBuilderMain?.inputData?.getAll) {
      const allInputs = window.JetFormBuilderMain.inputData.getAll(formNode);
      if (allInputs) {
        sourceInput = allInputs.find(input => input.name === sourceFieldName);
      }
    }

    // Method 4: Fallback - find DOM element and create wrapper
    if (!sourceInput) {
      sourceInput = this.createInputWrapperFromDOM(sourceFieldName, formNode);
    }
    if (!sourceInput) {
      console.warn(`[JFB Auto-Update] Source field not found: ${sourceFieldName}`, 'Tried all methods including DOM search');
      return;
    }

    // Get or create watcher for this source field
    let watcher = this.watchers.get(sourceFieldName);
    if (!watcher) {
      // Create new watcher
      const unwatch = sourceInput.value.watch(() => {
        this.handleFieldChange(sourceFieldName, formNode);
      });
      watcher = {
        unwatch,
        dependents: []
      };
      this.watchers.set(sourceFieldName, watcher);
    }

    // Add target field to dependents if not already present
    if (!watcher.dependents.includes(targetFieldName)) {
      watcher.dependents.push(targetFieldName);
    }
  }

  /**
   * Watch all fields in form for changes.
   *
   * @param {string}      targetFieldName Field name to update.
   * @param {HTMLElement} formNode        Form element.
   */
  watchAllFields(targetFieldName, formNode) {
    var _window$JetFormBuilde;
    // Get all form inputs
    const allInputs = (_window$JetFormBuilde = window.JetFormBuilderMain?.inputData?.getAll(formNode)) !== null && _window$JetFormBuilde !== void 0 ? _window$JetFormBuilde : [];
    allInputs.forEach(input => {
      const fieldName = input.name;

      // Don't watch the target field itself
      if (fieldName === targetFieldName) {
        return;
      }
      this.watchField(fieldName, targetFieldName, formNode);
    });
  }

  /**
   * Handle field change event.
   * Triggers update for all dependent fields with debouncing.
   *
   * @param {string}      sourceFieldName Changed field name.
   * @param {HTMLElement} formNode        Form element.
   */
  handleFieldChange(sourceFieldName, formNode) {
    const watcher = this.watchers.get(sourceFieldName);
    if (!watcher || !watcher.dependents.length) {
      return;
    }

    // Update each dependent field with debouncing
    watcher.dependents.forEach(targetFieldName => {
      this.debouncedUpdate(targetFieldName, formNode);
    });
  }

  /**
   * Debounced update for target field.
   *
   * @param {string}      targetFieldName Field to update.
   * @param {HTMLElement} formNode        Form element.
   */
  debouncedUpdate(targetFieldName, formNode) {
    // Clear existing timer
    const existingTimer = this.debounceTimers.get(targetFieldName);
    if (existingTimer) {
      clearTimeout(existingTimer);
    }

    // Set new timer
    const timer = setTimeout(() => {
      this.updateField(targetFieldName, formNode);
      this.debounceTimers.delete(targetFieldName);
    }, this.debounceDelay);
    this.debounceTimers.set(targetFieldName, timer);
  }

  /**
   * Update options for a field.
   *
   * @param {string}      targetFieldName Field to update.
   * @param {HTMLElement} formNode        Form element.
   */
  async updateField(targetFieldName, formNode) {
    const fieldData = this.autoUpdateFields.get(targetFieldName);
    if (!fieldData) {
      return;
    }
    const {
      element,
      config
    } = fieldData;

    // Collect context from all listened fields
    const context = this.collectContext(config, formNode);

    // Check cache first
    const cachedOptions = this.cacheManager.get(config.generatorId, context, config.cacheTimeout);
    if (cachedOptions) {
      this.optionsUpdater.updateOptions(element, cachedOptions);
      return;
    }

    // Abort previous request if still pending
    this.abortPreviousRequest(targetFieldName);

    // Create new abort controller
    const abortController = new AbortController();
    this.abortControllers.set(targetFieldName, abortController);
    try {
      // Show loading state
      this.optionsUpdater.setLoadingState(element, true);

      // Fetch new options
      const options = await this.fetchOptions(config, context, abortController.signal);

      // Cache the response
      this.cacheManager.set(config.generatorId, context, options);

      // Update DOM
      this.optionsUpdater.updateOptions(element, options);
    } catch (error) {
      if (error.name !== 'AbortError') {
        console.error('[JFB Auto-Update] Update failed:', error);
        this.optionsUpdater.setErrorState(element, error.message);
      }
    } finally {
      this.optionsUpdater.setLoadingState(element, false);
      this.abortControllers.delete(targetFieldName);
    }
  }

  /**
   * Collect context values from form fields.
   *
   * @param {Object}      config   Field configuration.
   * @param {HTMLElement} formNode Form element.
   *
   * @return {Object} Context object with field values.
   */
  collectContext(config, formNode) {
    const context = {};

    // Collect values from all source fields (listenTo is now an array)
    if (config.listenTo && Array.isArray(config.listenTo)) {
      config.listenTo.forEach(sourceFieldName => {
        // Try to find input using JetFormBuilder API
        let input = window.JetFormBuilderMain?.inputData?.findInput(sourceFieldName, formNode);

        // Fallback to getInput
        if (!input && window.JetFormBuilderMain?.inputData?.getInput) {
          input = window.JetFormBuilderMain.inputData.getInput(sourceFieldName, formNode);
        }

        // Fallback to search all inputs
        if (!input && window.JetFormBuilderMain?.inputData?.getAll) {
          const allInputs = window.JetFormBuilderMain.inputData.getAll(formNode);
          if (allInputs) {
            input = allInputs.find(inp => inp.name === sourceFieldName);
          }
        }

        // Final fallback: get value directly from DOM
        if (!input) {
          const fieldElement = formNode.querySelector(`[data-field-name="${sourceFieldName}"]`) || formNode.querySelector(`[name="${sourceFieldName}"]`);
          if (fieldElement) {
            context[sourceFieldName] = fieldElement.value || '';
          } else {
            console.warn(`[JFB Auto-Update] Could not find field for context: ${sourceFieldName}`);
          }
        } else {
          context[sourceFieldName] = input.value.current;
        }
      });
    }
    if (config.listenAll) {
      var _window$JetFormBuilde2;
      const allInputs = (_window$JetFormBuilde2 = window.JetFormBuilderMain?.inputData?.getAll(formNode)) !== null && _window$JetFormBuilde2 !== void 0 ? _window$JetFormBuilde2 : [];
      allInputs.forEach(input => {
        if (input.name !== config.fieldName) {
          context[input.name] = input.value.current;
        }
      });
    }
    return context;
  }

  /**
   * Fetch options from REST API.
   *
   * @param {Object}      config Field configuration.
   * @param {Object}      context Context values.
   * @param {AbortSignal} signal  Abort signal.
   *
   * @return {Promise<Array>} Generated options.
   */
  async fetchOptions(config, context, signal) {
    const response = await fetch('/wp-json/jet-form-builder/v1/generator-update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        form_id: config.formId,
        field_name: config.fieldName,
        generator_id: config.generatorId,
        block_attrs: config.blockAttrs,
        context
      }),
      signal
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    if (!data.success) {
      throw new Error(data.message || 'Unknown error');
    }
    return data.options || [];
  }

  /**
   * Abort previous request for a field.
   *
   * @param {string} fieldName Field name.
   */
  abortPreviousRequest(fieldName) {
    const controller = this.abortControllers.get(fieldName);
    if (controller) {
      controller.abort();
      this.abortControllers.delete(fieldName);
    }
  }

  /**
   * Destroy watchers and cleanup.
   */
  destroy() {
    // Unwatch all fields
    this.watchers.forEach(watcher => {
      if (watcher.unwatch) {
        watcher.unwatch();
      }
    });

    // Clear timers
    this.debounceTimers.forEach(timer => {
      clearTimeout(timer);
    });

    // Abort pending requests
    this.abortControllers.forEach(controller => {
      controller.abort();
    });

    // Clear all maps
    this.watchers.clear();
    this.autoUpdateFields.clear();
    this.abortControllers.clear();
    this.debounceTimers.clear();
    this.cacheManager.clearAll();
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FieldWatcher);

/***/ }),

/***/ "./frontend/auto-update/OptionsUpdater.js":
/*!************************************************!*\
  !*** ./frontend/auto-update/OptionsUpdater.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Options Updater for Auto-Update Feature.
 *
 * Handles DOM manipulation to update field options.
 * Supports select, checkbox, and radio field types.
 *
 * @package JetFormBuilder
 */

/**
 * Options Updater Class.
 *
 * Updates field options in the DOM while preserving selected values.
 */
class OptionsUpdater {
  /**
   * Update options for a field element.
   *
   * @param {HTMLElement} fieldElement Field element (select/input container).
   * @param {Array}       options      New options array.
   */
  updateOptions(fieldElement, options) {
    const fieldType = this.getFieldType(fieldElement);
    switch (fieldType) {
      case 'select':
        this.updateSelectOptions(fieldElement, options);
        break;
      case 'checkbox':
      case 'radio':
        this.updateChoiceOptions(fieldElement, options, fieldType);
        break;
      default:
        console.warn('[JFB Auto-Update] Unsupported field type:', fieldType);
    }
  }

  /**
   * Get field type from element.
   *
   * @param {HTMLElement} fieldElement Field element.
   *
   * @return {string} Field type (select/checkbox/radio).
   */
  getFieldType(fieldElement) {
    if (fieldElement.tagName === 'SELECT') {
      return 'select';
    }

    // For checkbox/radio, element might be the wrapper
    const firstInput = fieldElement.querySelector('input[type="checkbox"], input[type="radio"]');
    if (firstInput) {
      return firstInput.type;
    }
    return 'unknown';
  }

  /**
   * Update select field options.
   *
   * @param {HTMLSelectElement} selectElement Select element.
   * @param {Array}             options       New options array.
   */
  updateSelectOptions(selectElement, options) {
    // Store current value
    const currentValue = selectElement.value;
    const isMultiple = selectElement.multiple;
    const currentValues = isMultiple ? Array.from(selectElement.selectedOptions).map(opt => opt.value) : [currentValue];

    // Store placeholder option if exists
    let placeholderOption = null;
    const firstOption = selectElement.options[0];
    if (firstOption && firstOption.value === '') {
      placeholderOption = firstOption.cloneNode(true);
    }

    // Clear existing options
    selectElement.innerHTML = '';

    // Restore placeholder
    if (placeholderOption) {
      selectElement.appendChild(placeholderOption);
    }

    // Add new options
    options.forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.value = option.value || option.val || '';
      optionElement.textContent = option.label || option.value || '';

      // Restore selection if value matches
      if (currentValues.includes(optionElement.value)) {
        optionElement.selected = true;
      }

      // Add calculate attribute if present
      if (option.calculate) {
        optionElement.dataset.calculate = option.calculate;
      }
      selectElement.appendChild(optionElement);
    });

    // Trigger change event for reactive updates
    selectElement.dispatchEvent(new Event('change', {
      bubbles: true
    }));
  }

  /**
   * Update checkbox/radio field options.
   *
   * @param {HTMLElement} containerElement Container element.
   * @param {Array}       options          New options array.
   * @param {string}      fieldType        Field type (checkbox/radio).
   */
  updateChoiceOptions(containerElement, options, fieldType) {
    // Find the wrapper that contains all options
    const wrapper = containerElement.closest('.jet-form-builder__field-wrap') || containerElement.querySelector('.jet-form-builder__field-wrap');
    if (!wrapper) {
      console.warn('[JFB Auto-Update] Could not find field wrapper');
      return;
    }

    // Get field name from first input
    const firstInput = wrapper.querySelector(`input[type="${fieldType}"]`);
    if (!firstInput) {
      return;
    }
    const fieldName = firstInput.name.replace('[]', ''); // Remove array suffix for checkboxes

    // Store current values
    const currentValues = Array.from(wrapper.querySelectorAll(`input[type="${fieldType}"]:checked`)).map(input => input.value);

    // Find the options container
    const optionsContainer = wrapper.querySelector('.checkboxes-wrap, .radioboxes-wrap') || wrapper;

    // Clear existing options (but preserve any non-option elements)
    const labels = optionsContainer.querySelectorAll('label');
    labels.forEach(label => label.remove());

    // Create new options
    options.forEach((option, index) => {
      const value = option.value || option.val || '';
      const label = option.label || value;
      const inputId = `${fieldName}_${index}_${Date.now()}`;

      // Create label element
      const labelElement = document.createElement('label');
      labelElement.className = 'jet-form-builder__field-label';
      labelElement.setAttribute('for', inputId);

      // Create input element
      const inputElement = document.createElement('input');
      inputElement.type = fieldType;
      inputElement.name = fieldType === 'checkbox' ? `${fieldName}[]` : fieldName;
      inputElement.value = value;
      inputElement.id = inputId;
      inputElement.className = 'jet-form-builder__field';

      // Restore checked state
      if (currentValues.includes(value)) {
        inputElement.checked = true;
      }

      // Add calculate attribute if present
      if (option.calculate) {
        inputElement.dataset.calculate = option.calculate;
      }

      // Create span for custom styling
      const spanElement = document.createElement('span');
      spanElement.className = 'jet-form-builder__field-wrap';

      // Assemble elements
      spanElement.appendChild(inputElement);
      labelElement.appendChild(spanElement);
      const textNode = document.createTextNode(` ${label}`);
      labelElement.appendChild(textNode);
      optionsContainer.appendChild(labelElement);

      // Trigger change event if checked
      if (inputElement.checked) {
        inputElement.dispatchEvent(new Event('change', {
          bubbles: true
        }));
      }
    });
  }

  /**
   * Set loading state for a field.
   *
   * @param {HTMLElement} fieldElement Field element.
   * @param {boolean}     isLoading    Loading state.
   */
  setLoadingState(fieldElement, isLoading) {
    const wrapper = fieldElement.closest('.jet-form-builder__field-wrap') || fieldElement.parentElement;
    if (!wrapper) {
      return;
    }
    if (isLoading) {
      wrapper.classList.add('jfb-auto-update-loading');
      fieldElement.disabled = true;

      // Add loading indicator if doesn't exist
      if (!wrapper.querySelector('.jfb-auto-update-spinner')) {
        const spinner = document.createElement('span');
        spinner.className = 'jfb-auto-update-spinner';
        spinner.setAttribute('aria-label', 'Loading options...');
        wrapper.appendChild(spinner);
      }
    } else {
      wrapper.classList.remove('jfb-auto-update-loading');
      fieldElement.disabled = false;

      // Remove loading indicator
      const spinner = wrapper.querySelector('.jfb-auto-update-spinner');
      if (spinner) {
        spinner.remove();
      }
    }
  }

  /**
   * Set error state for a field.
   *
   * @param {HTMLElement} fieldElement Field element.
   * @param {string}      errorMessage Error message.
   */
  setErrorState(fieldElement, errorMessage) {
    const wrapper = fieldElement.closest('.jet-form-builder__field-wrap') || fieldElement.parentElement;
    if (!wrapper) {
      return;
    }
    wrapper.classList.add('jfb-auto-update-error');

    // Add error message if doesn't exist
    let errorElement = wrapper.querySelector('.jfb-auto-update-error-message');
    if (!errorElement) {
      errorElement = document.createElement('div');
      errorElement.className = 'jfb-auto-update-error-message';
      wrapper.appendChild(errorElement);
    }
    errorElement.textContent = errorMessage;

    // Auto-remove error after 5 seconds
    setTimeout(() => {
      this.clearErrorState(fieldElement);
    }, 5000);
  }

  /**
   * Clear error state for a field.
   *
   * @param {HTMLElement} fieldElement Field element.
   */
  clearErrorState(fieldElement) {
    const wrapper = fieldElement.closest('.jet-form-builder__field-wrap') || fieldElement.parentElement;
    if (!wrapper) {
      return;
    }
    wrapper.classList.remove('jfb-auto-update-error');
    const errorElement = wrapper.querySelector('.jfb-auto-update-error-message');
    if (errorElement) {
      errorElement.remove();
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OptionsUpdater);

/***/ }),

/***/ "./frontend/auto-update/index.js":
/*!***************************************!*\
  !*** ./frontend/auto-update/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getWatcher: () => (/* binding */ getWatcher),
/* harmony export */   initAutoUpdate: () => (/* binding */ initAutoUpdate)
/* harmony export */ });
/* harmony import */ var _FieldWatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FieldWatcher */ "./frontend/auto-update/FieldWatcher.js");
/* harmony import */ var _styles_pcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.pcss */ "./frontend/auto-update/styles.pcss");
/**
 * Auto-Update Feature Initialization.
 *
 * Main entry point for the auto-update feature.
 * Integrates with JetFormBuilder's form initialization hooks.
 *
 * @package JetFormBuilder
 */




/**
 * Global field watcher instance.
 * Shared across all forms for centralized management.
 *
 * @type {FieldWatcher|null}
 */
let globalWatcher = null;

/**
 * Get or create global field watcher instance.
 *
 * @return {FieldWatcher} Field watcher instance.
 */
function getWatcher() {
  if (!globalWatcher) {
    globalWatcher = new _FieldWatcher__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }
  return globalWatcher;
}

/**
 * Initialize auto-update for a form.
 * Called by JetFormBuilder when a form is rendered.
 *
 * @param {HTMLElement|jQuery} formNode Form element (can be jQuery object or DOM element).
 */
function initAutoUpdate(formNode) {
  if (!formNode) {
    return;
  }

  // Convert jQuery object to DOM element if needed
  if (formNode instanceof jQuery) {
    formNode = formNode[0];
  }

  // Ensure we have a valid DOM element
  if (!formNode || !formNode.querySelectorAll) {
    console.error('[JFB Auto-Update] Invalid formNode:', formNode);
    return;
  }
  const watcher = getWatcher();
  watcher.initForm(formNode);
}

/**
 * Initialize MutationObserver to watch for dynamically added fields.
 * This handles Conditional Blocks that show/hide fields dynamically.
 *
 * @param {HTMLElement|jQuery} formNode Form element to observe (can be jQuery object or DOM element).
 */
function observeDynamicFields(formNode) {
  if (!formNode || !window.MutationObserver) {
    return;
  }

  // Convert jQuery object to DOM element if needed
  if (formNode instanceof jQuery) {
    formNode = formNode[0];
  }

  // Ensure we have a valid DOM element
  if (!formNode || !formNode.querySelectorAll) {
    console.error('[JFB Auto-Update] Invalid formNode for observer:', formNode);
    return;
  }
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      // Check added nodes for auto-update fields
      mutation.addedNodes.forEach(node => {
        // Skip non-element nodes (text nodes, comments, etc.)
        if (node.nodeType !== Node.ELEMENT_NODE) {
          return;
        }

        // Collect all fields that appeared (both auto-update and regular fields)
        const appearedFields = [];

        // Check if the added node itself is a field
        if (node.hasAttribute && node.getAttribute('data-field-name')) {
          appearedFields.push(node);
        }

        // Check if the added node contains fields
        if (node.querySelectorAll) {
          const nestedFields = node.querySelectorAll('[data-field-name]');
          nestedFields.forEach(field => appearedFields.push(field));
        }

        // Process appeared fields
        appearedFields.forEach(fieldElement => {
          const fieldName = fieldElement.getAttribute('data-field-name');

          // If it's an auto-update field, initialize it
          if (fieldElement.hasAttribute('data-jfb-auto-update')) {
            console.log('[JFB Auto-Update] Dynamically added auto-update field:', fieldName);
            const watcher = getWatcher();
            watcher.initField(fieldElement, formNode);

            // Trigger update immediately if it's a dependent field that just appeared
            triggerUpdateForNewField(fieldElement, formNode);
          }

          // Check if any existing auto-update fields were waiting for this field
          // (This handles the case where source field appears after dependent field was initialized)
          retryFailedWatchers(fieldName, formNode);
        });
      });
    });
  });

  // Observe the form for changes in the DOM tree
  observer.observe(formNode, {
    childList: true,
    subtree: true
  });
  console.log('[JFB Auto-Update] MutationObserver initialized for form');
}

/**
 * Track which watchers we already retried to avoid duplicates.
 * Key: "sourceFieldName:targetFieldName"
 */
const retriedWatchers = new Set();

/**
 * Retry setting up watchers for fields that were waiting for this source field.
 * When a source field appears (from Conditional Block), dependent fields need to re-initialize their watchers.
 *
 * @param {string}      sourceFieldName Field name that just appeared.
 * @param {HTMLElement} formNode        Form element.
 */
function retryFailedWatchers(sourceFieldName, formNode) {
  const watcher = getWatcher();

  // Get all auto-update fields
  watcher.autoUpdateFields.forEach((fieldData, targetFieldName) => {
    const {
      config
    } = fieldData;

    // Check if this field listens to the source field that just appeared
    // config.listenTo is now an array
    if (config.listenTo && Array.isArray(config.listenTo) && config.listenTo.includes(sourceFieldName)) {
      // Create unique key for this watcher pair
      const watcherKey = `${sourceFieldName}:${targetFieldName}`;

      // Skip if we already retried this watcher
      if (retriedWatchers.has(watcherKey)) {
        return;
      }

      // Mark as retried
      retriedWatchers.add(watcherKey);
      console.log(`[JFB Auto-Update] Retrying watcher for field "${targetFieldName}" (source "${sourceFieldName}" appeared)`);

      // Re-initialize the watcher for this field
      watcher.watchField(sourceFieldName, targetFieldName, formNode);

      // Trigger update if ALL source fields have values
      if (allSourceFieldsHaveValues(config.listenTo, formNode)) {
        console.log(`[JFB Auto-Update] All source fields have values, triggering update for "${targetFieldName}"`);
        watcher.updateField(targetFieldName, formNode);
      }
    }
  });
}

/**
 * Check if all source fields have values.
 *
 * @param {Array}       sourceFieldNames Array of source field names.
 * @param {HTMLElement} formNode         Form element.
 *
 * @return {boolean} True if all fields have values.
 */
function allSourceFieldsHaveValues(sourceFieldNames, formNode) {
  return sourceFieldNames.every(fieldName => {
    const field = formNode.querySelector(`[data-field-name="${fieldName}"]`) || formNode.querySelector(`[name="${fieldName}"]`);
    return field && field.value;
  });
}

/**
 * Trigger update for a newly appeared field.
 * If the field listens to another field, check if that field has a value and trigger update.
 *
 * @param {HTMLElement} fieldElement Field element.
 * @param {HTMLElement} formNode     Form element.
 */
function triggerUpdateForNewField(fieldElement, formNode) {
  const listenTo = fieldElement.getAttribute('data-listen-to');
  const isMultiple = fieldElement.hasAttribute('data-listen-to-multiple');
  if (!listenTo) {
    return;
  }

  // Parse listen_to (can be string or JSON array)
  let sourceFieldNames;
  if (isMultiple) {
    try {
      sourceFieldNames = JSON.parse(listenTo);
    } catch (e) {
      console.error('[JFB Auto-Update] Failed to parse listen_to:', e);
      return;
    }
  } else {
    sourceFieldNames = [listenTo];
  }

  // Check if ALL source fields have values
  const allHaveValues = sourceFieldNames.every(fieldName => {
    const sourceField = formNode.querySelector(`[data-field-name="${fieldName}"]`) || formNode.querySelector(`[name="${fieldName}"]`);
    return sourceField && sourceField.value;
  });
  if (!allHaveValues) {
    return;
  }
  const fieldName = fieldElement.getAttribute('data-field-name');
  console.log(`[JFB Auto-Update] Triggering update for newly appeared field: ${fieldName}`);

  // Get watcher and trigger update manually
  const watcher = getWatcher();

  // Trigger update immediately (no debounce for initial appearance)
  // Use the field name, not config object
  watcher.updateField(fieldName, formNode);
}

/**
 * Hook into JetFormBuilder's form initialization.
 */
function hookIntoJetFormBuilder() {
  // Wait for JetFormBuilderMain to be available
  if (typeof window.JetFormBuilderMain === 'undefined') {
    console.warn('[JFB Auto-Update] JetFormBuilderMain not available, retrying...');

    // Retry after a short delay
    setTimeout(hookIntoJetFormBuilder, 100);
    return;
  }

  // Hook into form init event
  // JetFormBuilder triggers this when form is ready
  jQuery(document).on('jet-form-builder/init', (event, formNode) => {
    // Delay initialization to ensure all inputs are registered
    setTimeout(() => {
      initAutoUpdate(formNode);

      // Set up observer for dynamic fields (Conditional Blocks)
      observeDynamicFields(formNode);
    }, 100);
  });

  // Also init for any already-rendered forms
  const existingForms = document.querySelectorAll('.jet-form-builder');
  existingForms.forEach(formNode => {
    // Delay initialization to ensure all inputs are registered
    setTimeout(() => {
      initAutoUpdate(formNode);

      // Set up observer for dynamic fields (Conditional Blocks)
      observeDynamicFields(formNode);
    }, 100);
  });
  console.log('[JFB Auto-Update] Initialization complete');
}

/**
 * Initialize on DOM ready.
 */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', hookIntoJetFormBuilder);
} else {
  hookIntoJetFormBuilder();
}

/**
 * Expose API for external use.
 */
window.JFBAutoUpdate = {
  getWatcher,
  initAutoUpdate
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getWatcher,
  initAutoUpdate
});

/***/ }),

/***/ "./frontend/auto-update/styles.pcss":
/*!******************************************!*\
  !*** ./frontend/auto-update/styles.pcss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/blocks/select/input.js":
/*!*****************************************!*\
  !*** ./frontend/blocks/select/input.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  InputData,
  ReactiveHook
} = JetFormBuilderAbstract;
function MultiSelectData() {
  InputData.call(this);
  function sanitizeValue(value) {
    if (Array.isArray(value)) {
      if (value.length === 1 && value[0] && value[0].includes(',')) {
        value = value[0].split(',');
      }
      return value;
    }
    return [value].filter(Boolean);
  }
  this.isSupported = function (node) {
    return 'select-multiple' === node?.type;
  };
  this.addListeners = function () {
    this.sanitize(value => Array.isArray(value) ? value : [value]);

    /**
     * convert string to array for setting dynamic multi value
     *
     * @see https://github.com/Crocoblock/issues-tracker/issues/8509
     */
    this.sanitize(sanitizeValue);
    const [node] = this.nodes;
    node.addEventListener('change', () => this.setValue());
    node.addEventListener('blur', () => this.reportOnBlur());
    this.enterKey = new ReactiveHook();
    node.addEventListener('keydown', this.handleEnterKey.bind(this));
  };
  this.setValue = function () {
    this.value.current = this.getActiveValue();
  };
  this.getActiveValue = function () {
    const [node] = this.nodes;
    return Array.from(node.options).filter(item => item.selected).map(item => item.value);
  };
  this.onClear = function () {
    this.silenceSet([]);
  };
}
MultiSelectData.prototype = Object.create(InputData.prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MultiSelectData);

/***/ }),

/***/ "./frontend/blocks/select/main.pcss":
/*!******************************************!*\
  !*** ./frontend/blocks/select/main.pcss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/blocks/select/signal.js":
/*!******************************************!*\
  !*** ./frontend/blocks/select/signal.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  BaseSignal
} = JetFormBuilderAbstract;
function SignalSelect() {
  BaseSignal.call(this);
  this.isSupported = function (node, inputData) {
    return ['select-multiple', 'select-one'].includes(node?.type);
  };
  this.runSignal = function () {
    const [node] = this.input.nodes;
    const isMultiple = 'select-one' !== node?.type;
    const {
      value
    } = this.input;
    for (const option of node.options) {
      var _option$dataset$calcu;
      option.selected = isMultiple ? value.current?.includes(option.value) : option.value === value.current;
      if (!option.selected) {
        continue;
      }
      this.input.calcValue = 0;
      this.input.calcValue += parseFloat((_option$dataset$calcu = option.dataset?.calculate) !== null && _option$dataset$calcu !== void 0 ? _option$dataset$calcu : option.value);
    }
    this.triggerJQuery(node);
  };
}
SignalSelect.prototype = Object.create(BaseSignal.prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignalSelect);

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
/******/ 			// no module.id needed
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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!****************************************!*\
  !*** ./frontend/blocks/select/main.js ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ "./frontend/blocks/select/input.js");
/* harmony import */ var _signal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signal */ "./frontend/blocks/select/signal.js");
/* harmony import */ var _main_pcss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.pcss */ "./frontend/blocks/select/main.pcss");
/* harmony import */ var _auto_update__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auto-update */ "./frontend/auto-update/index.js");




// Import auto-update feature

const {
  addFilter
} = JetPlugins.hooks;
window.JetFormBuilderAbstract = {
  ...window.JetFormBuilderAbstract,
  MultiSelectData: _input__WEBPACK_IMPORTED_MODULE_0__["default"],
  SignalSelect: _signal__WEBPACK_IMPORTED_MODULE_1__["default"]
};
addFilter('jet.fb.inputs', 'jet-form-builder/select-field', function (inputs) {
  inputs = [_input__WEBPACK_IMPORTED_MODULE_0__["default"], ...inputs];
  return inputs;
});
addFilter('jet.fb.signals', 'jet-form-builder/select-field', function (signals) {
  signals = [_signal__WEBPACK_IMPORTED_MODULE_1__["default"], ...signals];
  return signals;
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQzNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQzdqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7O0FBSUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaFNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7OztBQ25UQTs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7QUM3REE7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFFQTtBQUNBO0FBR0E7QUFJQTtBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZnJvbnRlbmQvYXV0by11cGRhdGUvQ2FjaGVNYW5hZ2VyLmpzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi9mcm9udGVuZC9hdXRvLXVwZGF0ZS9GaWVsZFdhdGNoZXIuanMiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2Zyb250ZW5kL2F1dG8tdXBkYXRlL09wdGlvbnNVcGRhdGVyLmpzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi9mcm9udGVuZC9hdXRvLXVwZGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZnJvbnRlbmQvYXV0by11cGRhdGUvc3R5bGVzLnBjc3MiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2Zyb250ZW5kL2Jsb2Nrcy9zZWxlY3QvaW5wdXQuanMiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2Zyb250ZW5kL2Jsb2Nrcy9zZWxlY3QvbWFpbi5wY3NzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi9mcm9udGVuZC9ibG9ja3Mvc2VsZWN0L3NpZ25hbC5qcyIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2Zyb250ZW5kL2Jsb2Nrcy9zZWxlY3QvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENhY2hlIE1hbmFnZXIgZm9yIEF1dG8tVXBkYXRlIEZlYXR1cmUuXG4gKlxuICogTWFuYWdlcyBpbi1tZW1vcnkgY2FjaGluZyBvZiBnZW5lcmF0ZWQgb3B0aW9ucyB3aXRoIGNvbmZpZ3VyYWJsZSB0aW1lb3V0LlxuICogSW1wbGVtZW50cyBNYXAtYmFzZWQgc3RvcmFnZSB3aXRoIHRpbWVzdGFtcCB0cmFja2luZyBmb3IgVFRMIChUaW1lIFRvIExpdmUpLlxuICpcbiAqIEBwYWNrYWdlIEpldEZvcm1CdWlsZGVyXG4gKi9cblxuLyoqXG4gKiBDYWNoZSBNYW5hZ2VyIENsYXNzLlxuICpcbiAqIFN0b3JlcyBnZW5lcmF0ZWQgb3B0aW9ucyB3aXRoIGtleXMgYmFzZWQgb24gZ2VuZXJhdG9yIElEIGFuZCBjb250ZXh0IHZhbHVlcy5cbiAqIFN1cHBvcnRzIGNhY2hlIHRpbWVvdXQgY29uZmlndXJhdGlvbiBwZXIgZmllbGQuXG4gKi9cbmNsYXNzIENhY2hlTWFuYWdlciB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdC8qKlxuXHRcdCAqIENhY2hlIHN0b3JhZ2UuXG5cdFx0ICogS2V5IGZvcm1hdDogXCJnZW5lcmF0b3JJZDpjb250ZXh0SGFzaFwiXG5cdFx0ICogVmFsdWU6IHsgb3B0aW9uczogQXJyYXksIHRpbWVzdGFtcDogTnVtYmVyIH1cblx0XHQgKlxuXHRcdCAqIEB0eXBlIHtNYXA8c3RyaW5nLCBPYmplY3Q+fVxuXHRcdCAqL1xuXHRcdHRoaXMuY2FjaGUgPSBuZXcgTWFwKCk7XG5cblx0XHQvKipcblx0XHQgKiBEZWZhdWx0IGNhY2hlIHRpbWVvdXQgaW4gc2Vjb25kcy5cblx0XHQgKiAwID0gZGlzYWJsZWQsIC0xID0gcGVybWFuZW50LCBOID0gc2Vjb25kc1xuXHRcdCAqXG5cdFx0ICogQHR5cGUge251bWJlcn1cblx0XHQgKi9cblx0XHR0aGlzLmRlZmF1bHRUaW1lb3V0ID0gNjA7XG5cdH1cblxuXHQvKipcblx0ICogR2VuZXJhdGUgY2FjaGUga2V5IGZyb20gZ2VuZXJhdG9yIElEIGFuZCBjb250ZXh0LlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZ2VuZXJhdG9ySWQgR2VuZXJhdG9yIGlkZW50aWZpZXIuXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0ICAgICBDb250ZXh0IG9iamVjdCB3aXRoIGZpZWxkIHZhbHVlcy5cblx0ICpcblx0ICogQHJldHVybiB7c3RyaW5nfSBDYWNoZSBrZXkuXG5cdCAqL1xuXHRnZW5lcmF0ZUtleSggZ2VuZXJhdG9ySWQsIGNvbnRleHQgKSB7XG5cdFx0Ly8gU29ydCBjb250ZXh0IGtleXMgZm9yIGNvbnNpc3RlbnQgaGFzaGluZ1xuXHRcdGNvbnN0IHNvcnRlZENvbnRleHQgPSBPYmplY3Qua2V5cyggY29udGV4dCApXG5cdFx0XHQuc29ydCgpXG5cdFx0XHQucmVkdWNlKCAoIGFjYywga2V5ICkgPT4ge1xuXHRcdFx0XHRhY2NbIGtleSBdID0gY29udGV4dFsga2V5IF07XG5cdFx0XHRcdHJldHVybiBhY2M7XG5cdFx0XHR9LCB7fSApO1xuXG5cdFx0Y29uc3QgY29udGV4dFN0cmluZyA9IEpTT04uc3RyaW5naWZ5KCBzb3J0ZWRDb250ZXh0ICk7XG5cdFx0cmV0dXJuIGAkeyBnZW5lcmF0b3JJZCB9OiR7IGNvbnRleHRTdHJpbmcgfWA7XG5cdH1cblxuXHQvKipcblx0ICogQ2hlY2sgaWYgY2FjaGVkIGRhdGEgZXhpc3RzIGFuZCBpcyBzdGlsbCB2YWxpZC5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGdlbmVyYXRvcklkICBHZW5lcmF0b3IgaWRlbnRpZmllci5cblx0ICogQHBhcmFtIHtPYmplY3R9IGNvbnRleHQgICAgICBDb250ZXh0IG9iamVjdCB3aXRoIGZpZWxkIHZhbHVlcy5cblx0ICogQHBhcmFtIHtudW1iZXJ9IGNhY2hlVGltZW91dCBDYWNoZSB0aW1lb3V0IGluIHNlY29uZHMgKDA9ZGlzYWJsZWQsIC0xPXBlcm1hbmVudCwgTj1zZWNvbmRzKS5cblx0ICpcblx0ICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWxpZCBjYWNoZSBleGlzdHMuXG5cdCAqL1xuXHRoYXMoIGdlbmVyYXRvcklkLCBjb250ZXh0LCBjYWNoZVRpbWVvdXQgPSB0aGlzLmRlZmF1bHRUaW1lb3V0ICkge1xuXHRcdC8vIENhY2hlIGRpc2FibGVkXG5cdFx0aWYgKCBjYWNoZVRpbWVvdXQgPT09IDAgKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3Qga2V5ID0gdGhpcy5nZW5lcmF0ZUtleSggZ2VuZXJhdG9ySWQsIGNvbnRleHQgKTtcblx0XHRjb25zdCBjYWNoZWQgPSB0aGlzLmNhY2hlLmdldCgga2V5ICk7XG5cblx0XHRpZiAoICEgY2FjaGVkICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIFBlcm1hbmVudCBjYWNoZVxuXHRcdGlmICggY2FjaGVUaW1lb3V0ID09PSAtMSApIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIENoZWNrIGlmIGNhY2hlIGlzIGV4cGlyZWRcblx0XHRjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuXHRcdGNvbnN0IGFnZSA9ICggbm93IC0gY2FjaGVkLnRpbWVzdGFtcCApIC8gMTAwMDsgLy8gQ29udmVydCB0byBzZWNvbmRzXG5cblx0XHRpZiAoIGFnZSA+IGNhY2hlVGltZW91dCApIHtcblx0XHRcdC8vIENhY2hlIGV4cGlyZWQsIHJlbW92ZSBpdFxuXHRcdFx0dGhpcy5jYWNoZS5kZWxldGUoIGtleSApO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBjYWNoZWQgb3B0aW9ucy5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGdlbmVyYXRvcklkICBHZW5lcmF0b3IgaWRlbnRpZmllci5cblx0ICogQHBhcmFtIHtPYmplY3R9IGNvbnRleHQgICAgICBDb250ZXh0IG9iamVjdCB3aXRoIGZpZWxkIHZhbHVlcy5cblx0ICogQHBhcmFtIHtudW1iZXJ9IGNhY2hlVGltZW91dCBDYWNoZSB0aW1lb3V0IGluIHNlY29uZHMuXG5cdCAqXG5cdCAqIEByZXR1cm4ge0FycmF5fG51bGx9IENhY2hlZCBvcHRpb25zIG9yIG51bGwgaWYgbm90IGZvdW5kL2V4cGlyZWQuXG5cdCAqL1xuXHRnZXQoIGdlbmVyYXRvcklkLCBjb250ZXh0LCBjYWNoZVRpbWVvdXQgPSB0aGlzLmRlZmF1bHRUaW1lb3V0ICkge1xuXHRcdGlmICggISB0aGlzLmhhcyggZ2VuZXJhdG9ySWQsIGNvbnRleHQsIGNhY2hlVGltZW91dCApICkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0Y29uc3Qga2V5ID0gdGhpcy5nZW5lcmF0ZUtleSggZ2VuZXJhdG9ySWQsIGNvbnRleHQgKTtcblx0XHRjb25zdCBjYWNoZWQgPSB0aGlzLmNhY2hlLmdldCgga2V5ICk7XG5cblx0XHRyZXR1cm4gY2FjaGVkID8gY2FjaGVkLm9wdGlvbnMgOiBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIFN0b3JlIG9wdGlvbnMgaW4gY2FjaGUuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBnZW5lcmF0b3JJZCBHZW5lcmF0b3IgaWRlbnRpZmllci5cblx0ICogQHBhcmFtIHtPYmplY3R9IGNvbnRleHQgICAgIENvbnRleHQgb2JqZWN0IHdpdGggZmllbGQgdmFsdWVzLlxuXHQgKiBAcGFyYW0ge0FycmF5fSAgb3B0aW9ucyAgICAgR2VuZXJhdGVkIG9wdGlvbnMgdG8gY2FjaGUuXG5cdCAqL1xuXHRzZXQoIGdlbmVyYXRvcklkLCBjb250ZXh0LCBvcHRpb25zICkge1xuXHRcdGNvbnN0IGtleSA9IHRoaXMuZ2VuZXJhdGVLZXkoIGdlbmVyYXRvcklkLCBjb250ZXh0ICk7XG5cblx0XHR0aGlzLmNhY2hlLnNldCgga2V5LCB7XG5cdFx0XHRvcHRpb25zLFxuXHRcdFx0dGltZXN0YW1wOiBEYXRlLm5vdygpLFxuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDbGVhciBjYWNoZSBmb3Igc3BlY2lmaWMgZ2VuZXJhdG9yIGFuZCBjb250ZXh0LlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZ2VuZXJhdG9ySWQgR2VuZXJhdG9yIGlkZW50aWZpZXIuXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0ICAgICBDb250ZXh0IG9iamVjdCB3aXRoIGZpZWxkIHZhbHVlcy5cblx0ICovXG5cdGNsZWFyKCBnZW5lcmF0b3JJZCwgY29udGV4dCApIHtcblx0XHRjb25zdCBrZXkgPSB0aGlzLmdlbmVyYXRlS2V5KCBnZW5lcmF0b3JJZCwgY29udGV4dCApO1xuXHRcdHRoaXMuY2FjaGUuZGVsZXRlKCBrZXkgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDbGVhciBhbGwgY2FjaGUgZW50cmllcy5cblx0ICovXG5cdGNsZWFyQWxsKCkge1xuXHRcdHRoaXMuY2FjaGUuY2xlYXIoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgY2FjaGUgc3RhdGlzdGljcy5cblx0ICpcblx0ICogQHJldHVybiB7T2JqZWN0fSBTdGF0aXN0aWNzIG9iamVjdCB3aXRoIHNpemUgYW5kIGtleXMuXG5cdCAqL1xuXHRnZXRTdGF0cygpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2l6ZTogdGhpcy5jYWNoZS5zaXplLFxuXHRcdFx0a2V5czogQXJyYXkuZnJvbSggdGhpcy5jYWNoZS5rZXlzKCkgKSxcblx0XHR9O1xuXHR9XG5cblx0LyoqXG5cdCAqIENsZWFuIGV4cGlyZWQgY2FjaGUgZW50cmllcy5cblx0ICogVXNlZnVsIGZvciBwZXJpb2RpYyBjbGVhbnVwIG9mIHN0YWxlIGRhdGEuXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBtYXhBZ2UgTWF4aW11bSBhZ2UgaW4gc2Vjb25kcyAoZGVmYXVsdDogMzYwMCA9IDEgaG91cikuXG5cdCAqL1xuXHRjbGVhbkV4cGlyZWQoIG1heEFnZSA9IDM2MDAgKSB7XG5cdFx0Y29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcblx0XHRjb25zdCBrZXlzVG9EZWxldGUgPSBbXTtcblxuXHRcdHRoaXMuY2FjaGUuZm9yRWFjaCggKCB2YWx1ZSwga2V5ICkgPT4ge1xuXHRcdFx0Y29uc3QgYWdlID0gKCBub3cgLSB2YWx1ZS50aW1lc3RhbXAgKSAvIDEwMDA7XG5cdFx0XHRpZiAoIGFnZSA+IG1heEFnZSApIHtcblx0XHRcdFx0a2V5c1RvRGVsZXRlLnB1c2goIGtleSApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHRcdGtleXNUb0RlbGV0ZS5mb3JFYWNoKCAoIGtleSApID0+IHtcblx0XHRcdHRoaXMuY2FjaGUuZGVsZXRlKCBrZXkgKTtcblx0XHR9ICk7XG5cblx0XHRyZXR1cm4ga2V5c1RvRGVsZXRlLmxlbmd0aDtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYWNoZU1hbmFnZXI7XG4iLCIvKipcbiAqIEZpZWxkIFdhdGNoZXIgZm9yIEF1dG8tVXBkYXRlIEZlYXR1cmUuXG4gKlxuICogV2F0Y2hlcyBmb3JtIGZpZWxkIGNoYW5nZXMgYW5kIHRyaWdnZXJzIG9wdGlvbiB1cGRhdGVzIGZvciBkZXBlbmRlbnQgZmllbGRzLlxuICogVXNlcyBKZXRGb3JtQnVpbGRlcidzIHJlYWN0aXZlIGlucHV0LnZhbHVlLndhdGNoKCkgbWV0aG9kLlxuICpcbiAqIEBwYWNrYWdlIEpldEZvcm1CdWlsZGVyXG4gKi9cblxuaW1wb3J0IENhY2hlTWFuYWdlciBmcm9tICcuL0NhY2hlTWFuYWdlcic7XG5pbXBvcnQgT3B0aW9uc1VwZGF0ZXIgZnJvbSAnLi9PcHRpb25zVXBkYXRlcic7XG5cbi8qKlxuICogRmllbGQgV2F0Y2hlciBDbGFzcy5cbiAqXG4gKiBNYW5hZ2VzIHdhdGNoaW5nIGZpZWxkIGNoYW5nZXMgYW5kIGNvb3JkaW5hdGluZyB1cGRhdGVzLlxuICovXG5jbGFzcyBGaWVsZFdhdGNoZXIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHQvKipcblx0XHQgKiBDYWNoZSBtYW5hZ2VyIGluc3RhbmNlLlxuXHRcdCAqXG5cdFx0ICogQHR5cGUge0NhY2hlTWFuYWdlcn1cblx0XHQgKi9cblx0XHR0aGlzLmNhY2hlTWFuYWdlciA9IG5ldyBDYWNoZU1hbmFnZXIoKTtcblxuXHRcdC8qKlxuXHRcdCAqIE9wdGlvbnMgdXBkYXRlciBpbnN0YW5jZS5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIHtPcHRpb25zVXBkYXRlcn1cblx0XHQgKi9cblx0XHR0aGlzLm9wdGlvbnNVcGRhdGVyID0gbmV3IE9wdGlvbnNVcGRhdGVyKCk7XG5cblx0XHQvKipcblx0XHQgKiBNYXAgb2Ygd2F0Y2hlcnMgYnkgZmllbGQgbmFtZS5cblx0XHQgKiBLZXk6IGZpZWxkIG5hbWUsIFZhbHVlOiB7IHVud2F0Y2g6IEZ1bmN0aW9uLCBkZXBlbmRlbnRzOiBBcnJheSB9XG5cdFx0ICpcblx0XHQgKiBAdHlwZSB7TWFwPHN0cmluZywgT2JqZWN0Pn1cblx0XHQgKi9cblx0XHR0aGlzLndhdGNoZXJzID0gbmV3IE1hcCgpO1xuXG5cdFx0LyoqXG5cdFx0ICogTWFwIG9mIGF1dG8tdXBkYXRlIGZpZWxkcyBieSBmaWVsZCBuYW1lLlxuXHRcdCAqIEtleTogZmllbGQgbmFtZSwgVmFsdWU6IHsgZWxlbWVudCwgY29uZmlnIH1cblx0XHQgKlxuXHRcdCAqIEB0eXBlIHtNYXA8c3RyaW5nLCBPYmplY3Q+fVxuXHRcdCAqL1xuXHRcdHRoaXMuYXV0b1VwZGF0ZUZpZWxkcyA9IG5ldyBNYXAoKTtcblxuXHRcdC8qKlxuXHRcdCAqIEFib3J0IGNvbnRyb2xsZXJzIGZvciBwZW5kaW5nIHJlcXVlc3RzLlxuXHRcdCAqIEtleTogZmllbGQgbmFtZSwgVmFsdWU6IEFib3J0Q29udHJvbGxlclxuXHRcdCAqXG5cdFx0ICogQHR5cGUge01hcDxzdHJpbmcsIEFib3J0Q29udHJvbGxlcj59XG5cdFx0ICovXG5cdFx0dGhpcy5hYm9ydENvbnRyb2xsZXJzID0gbmV3IE1hcCgpO1xuXG5cdFx0LyoqXG5cdFx0ICogRGVib3VuY2UgdGltZXJzLlxuXHRcdCAqIEtleTogZmllbGQgbmFtZSwgVmFsdWU6IHRpbWVvdXQgSURcblx0XHQgKlxuXHRcdCAqIEB0eXBlIHtNYXA8c3RyaW5nLCBudW1iZXI+fVxuXHRcdCAqL1xuXHRcdHRoaXMuZGVib3VuY2VUaW1lcnMgPSBuZXcgTWFwKCk7XG5cblx0XHQvKipcblx0XHQgKiBEZWJvdW5jZSBkZWxheSBpbiBtaWxsaXNlY29uZHMuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSB7bnVtYmVyfVxuXHRcdCAqL1xuXHRcdHRoaXMuZGVib3VuY2VEZWxheSA9IDMwMDtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbml0aWFsaXplIGF1dG8tdXBkYXRlIGZvciBhbGwgZmllbGRzIGluIGEgZm9ybS5cblx0ICpcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZm9ybU5vZGUgRm9ybSBlbGVtZW50LlxuXHQgKi9cblx0aW5pdEZvcm0oIGZvcm1Ob2RlICkge1xuXHRcdC8vIEZpbmQgYWxsIGZpZWxkcyB3aXRoIGF1dG8tdXBkYXRlIGVuYWJsZWRcblx0XHRjb25zdCBhdXRvVXBkYXRlRmllbGRzID0gZm9ybU5vZGUucXVlcnlTZWxlY3RvckFsbCggJ1tkYXRhLWpmYi1hdXRvLXVwZGF0ZT1cIjFcIl0nICk7XG5cblx0XHRhdXRvVXBkYXRlRmllbGRzLmZvckVhY2goICggZmllbGRFbGVtZW50ICkgPT4ge1xuXHRcdFx0dGhpcy5pbml0RmllbGQoIGZpZWxkRWxlbWVudCwgZm9ybU5vZGUgKTtcblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0ICogSW5pdGlhbGl6ZSBhdXRvLXVwZGF0ZSBmb3IgYSBzaW5nbGUgZmllbGQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGZpZWxkRWxlbWVudCBGaWVsZCBlbGVtZW50IChzZWxlY3QvaW5wdXQpLlxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBmb3JtTm9kZSAgICAgRm9ybSBlbGVtZW50LlxuXHQgKi9cblx0aW5pdEZpZWxkKCBmaWVsZEVsZW1lbnQsIGZvcm1Ob2RlICkge1xuXHRcdGNvbnN0IGNvbmZpZyA9IHRoaXMucGFyc2VGaWVsZENvbmZpZyggZmllbGRFbGVtZW50ICk7XG5cblx0XHRpZiAoICEgY29uZmlnICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIFN0b3JlIGZpZWxkIGNvbmZpZ3VyYXRpb25cblx0XHR0aGlzLmF1dG9VcGRhdGVGaWVsZHMuc2V0KCBjb25maWcuZmllbGROYW1lLCB7XG5cdFx0XHRlbGVtZW50OiBmaWVsZEVsZW1lbnQsXG5cdFx0XHRjb25maWcsXG5cdFx0fSApO1xuXG5cdFx0Ly8gU2V0dXAgd2F0Y2hlcnMgYmFzZWQgb24gY29uZmlndXJhdGlvblxuXHRcdGlmICggY29uZmlnLmxpc3RlblRvICYmIEFycmF5LmlzQXJyYXkoIGNvbmZpZy5saXN0ZW5UbyApICkge1xuXHRcdFx0Ly8gV2F0Y2ggZWFjaCBzb3VyY2UgZmllbGRcblx0XHRcdGNvbmZpZy5saXN0ZW5Uby5mb3JFYWNoKCAoIHNvdXJjZUZpZWxkTmFtZSApID0+IHtcblx0XHRcdFx0dGhpcy53YXRjaEZpZWxkKCBzb3VyY2VGaWVsZE5hbWUsIGNvbmZpZy5maWVsZE5hbWUsIGZvcm1Ob2RlICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdFx0aWYgKCBjb25maWcubGlzdGVuQWxsICkge1xuXHRcdFx0dGhpcy53YXRjaEFsbEZpZWxkcyggY29uZmlnLmZpZWxkTmFtZSwgZm9ybU5vZGUgKTtcblx0XHR9XG5cblx0XHQvLyBUcmlnZ2VyIGluaXRpYWwgdXBkYXRlIG9uIHBhZ2UgbG9hZCBpZiBmaWVsZCBoYXMgbGlzdGVuZXJzXG5cdFx0aWYgKCBjb25maWcubGlzdGVuVG8gfHwgY29uZmlnLmxpc3RlbkFsbCApIHtcblx0XHRcdHNldFRpbWVvdXQoICgpID0+IHtcblx0XHRcdFx0dGhpcy51cGRhdGVGaWVsZCggY29uZmlnLmZpZWxkTmFtZSwgZm9ybU5vZGUgKTtcblx0XHRcdH0sIDUwICk7XG5cdFx0fVxuXG5cdFx0Ly8gVE9ETzogSGFuZGxlIGJ1dHRvbiB0cmlnZ2VycyAoZ2VuZXJhdG9yX3VwZGF0ZV9vbl9idXR0b24pXG5cdH1cblxuXHQvKipcblx0ICogUGFyc2UgZmllbGQgY29uZmlndXJhdGlvbiBmcm9tIGRhdGEgYXR0cmlidXRlcy5cblx0ICpcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZmllbGRFbGVtZW50IEZpZWxkIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEByZXR1cm4ge09iamVjdHxudWxsfSBDb25maWd1cmF0aW9uIG9iamVjdCBvciBudWxsIGlmIGludmFsaWQuXG5cdCAqL1xuXHRwYXJzZUZpZWxkQ29uZmlnKCBmaWVsZEVsZW1lbnQgKSB7XG5cdFx0Y29uc3QgZ2VuZXJhdG9ySWQgPSBmaWVsZEVsZW1lbnQuZGF0YXNldC5nZW5lcmF0b3JJZDtcblx0XHRjb25zdCBmaWVsZE5hbWUgPSBmaWVsZEVsZW1lbnQuZGF0YXNldC5maWVsZE5hbWU7XG5cblx0XHRpZiAoICEgZ2VuZXJhdG9ySWQgfHwgISBmaWVsZE5hbWUgKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHQvLyBQYXJzZSBsaXN0ZW5UbyAtIGNhbiBiZSBzdHJpbmcgKHNpbmdsZSBmaWVsZCkgb3IgYXJyYXkgKG11bHRpcGxlIGZpZWxkcylcblx0XHRsZXQgbGlzdGVuVG8gPSBmaWVsZEVsZW1lbnQuZGF0YXNldC5saXN0ZW5UbyB8fCBudWxsO1xuXG5cdFx0aWYgKCBsaXN0ZW5UbyApIHtcblx0XHRcdC8vIENoZWNrIGlmIGl0J3MgbXVsdGlwbGUgZmllbGRzIChKU09OIGFycmF5KVxuXHRcdFx0Y29uc3QgaXNNdWx0aXBsZSA9IGZpZWxkRWxlbWVudC5kYXRhc2V0Lmxpc3RlblRvTXVsdGlwbGUgPT09ICcxJztcblxuXHRcdFx0aWYgKCBpc011bHRpcGxlICkge1xuXHRcdFx0XHQvLyBQYXJzZSBKU09OIGFycmF5XG5cdFx0XHRcdGxpc3RlblRvID0gdGhpcy5wYXJzZUpTT04oIGxpc3RlblRvICk7XG5cblx0XHRcdFx0Ly8gVmFsaWRhdGUgaXQncyBhbiBhcnJheVxuXHRcdFx0XHRpZiAoICEgQXJyYXkuaXNBcnJheSggbGlzdGVuVG8gKSApIHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKCAnW0pGQiBBdXRvLVVwZGF0ZV0gRXhwZWN0ZWQgYXJyYXkgZm9yIG11bHRpcGxlIGxpc3RlbiBmaWVsZHMsIGdvdDonLCBsaXN0ZW5UbyApO1xuXHRcdFx0XHRcdGxpc3RlblRvID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gU2luZ2xlIGZpZWxkOiBub3JtYWxpemUgdG8gYXJyYXkgZm9yIGNvbnNpc3RlbnQgaGFuZGxpbmdcblx0XHRcdFx0bGlzdGVuVG8gPSBbIGxpc3RlblRvIF07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGdlbmVyYXRvcklkLFxuXHRcdFx0ZmllbGROYW1lLFxuXHRcdFx0bGlzdGVuVG8sIC8vIE5vdyBhbHdheXMgYW4gYXJyYXkgb3IgbnVsbFxuXHRcdFx0bGlzdGVuQWxsOiBmaWVsZEVsZW1lbnQuZGF0YXNldC5saXN0ZW5BbGwgPT09ICcxJyxcblx0XHRcdHVwZGF0ZU9uQnV0dG9uOiBmaWVsZEVsZW1lbnQuZGF0YXNldC51cGRhdGVPbkJ1dHRvbiB8fCBudWxsLFxuXHRcdFx0Y2FjaGVUaW1lb3V0OiBwYXJzZUludCggZmllbGRFbGVtZW50LmRhdGFzZXQuY2FjaGVUaW1lb3V0ICkgfHwgNjAsXG5cdFx0XHRmb3JtSWQ6IHBhcnNlSW50KCBmaWVsZEVsZW1lbnQuZGF0YXNldC5mb3JtSWQgKSB8fCAwLFxuXHRcdFx0YmxvY2tBdHRyczogdGhpcy5wYXJzZUpTT04oIGZpZWxkRWxlbWVudC5kYXRhc2V0LmJsb2NrQXR0cnMgKSxcblx0XHR9O1xuXHR9XG5cblx0LyoqXG5cdCAqIFNhZmVseSBwYXJzZSBKU09OIHN0cmluZy5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGpzb25TdHJpbmcgSlNPTiBzdHJpbmcuXG5cdCAqXG5cdCAqIEByZXR1cm4ge09iamVjdHxudWxsfSBQYXJzZWQgb2JqZWN0IG9yIG51bGwgaWYgaW52YWxpZC5cblx0ICovXG5cdHBhcnNlSlNPTigganNvblN0cmluZyApIHtcblx0XHR0cnkge1xuXHRcdFx0cmV0dXJuIEpTT04ucGFyc2UoIGpzb25TdHJpbmcgKTtcblx0XHR9IGNhdGNoICggZSApIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoICdbSkZCIEF1dG8tVXBkYXRlXSBJbnZhbGlkIEpTT046JywgZSApO1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZSBpbnB1dCB3cmFwcGVyIGZyb20gRE9NIGVsZW1lbnQuXG5cdCAqIEZhbGxiYWNrIG1ldGhvZCB3aGVuIEpldEZvcm1CdWlsZGVyIEFQSSBkb2Vzbid0IHdvcmsuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSAgICAgIGZpZWxkTmFtZSBGaWVsZCBuYW1lIHRvIGZpbmQuXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGZvcm1Ob2RlICBGb3JtIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEByZXR1cm4ge09iamVjdHxudWxsfSBJbnB1dCB3cmFwcGVyIG9iamVjdCBvciBudWxsIGlmIG5vdCBmb3VuZC5cblx0ICovXG5cdGNyZWF0ZUlucHV0V3JhcHBlckZyb21ET00oIGZpZWxkTmFtZSwgZm9ybU5vZGUgKSB7XG5cdFx0Ly8gVHJ5IHRvIGZpbmQgZmllbGQgYnkgZGF0YS1maWVsZC1uYW1lIGF0dHJpYnV0ZVxuXHRcdGxldCBmaWVsZEVsZW1lbnQgPSBmb3JtTm9kZS5xdWVyeVNlbGVjdG9yKCBgW2RhdGEtZmllbGQtbmFtZT1cIiR7IGZpZWxkTmFtZSB9XCJdYCApO1xuXG5cdFx0Ly8gRmFsbGJhY2s6IHRyeSBieSBuYW1lIGF0dHJpYnV0ZVxuXHRcdGlmICggISBmaWVsZEVsZW1lbnQgKSB7XG5cdFx0XHRmaWVsZEVsZW1lbnQgPSBmb3JtTm9kZS5xdWVyeVNlbGVjdG9yKCBgW25hbWU9XCIkeyBmaWVsZE5hbWUgfVwiXWAgKTtcblx0XHR9XG5cblx0XHRpZiAoICEgZmllbGRFbGVtZW50ICkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0Ly8gQ3JlYXRlIGEgcmVhY3RpdmUgd3JhcHBlciBzaW1pbGFyIHRvIEpldEZvcm1CdWlsZGVyJ3MgaW5wdXQgc3RydWN0dXJlXG5cdFx0Y29uc3Qgd3JhcHBlciA9IHtcblx0XHRcdG5hbWU6IGZpZWxkTmFtZSxcblx0XHRcdG5vZGU6IGZpZWxkRWxlbWVudCxcblx0XHRcdHZhbHVlOiB7XG5cdFx0XHRcdGN1cnJlbnQ6IGZpZWxkRWxlbWVudC52YWx1ZSB8fCAnJyxcblx0XHRcdFx0d2F0Y2hlcnM6IFtdLFxuXHRcdFx0XHR3YXRjaDogKCBjYWxsYmFjayApID0+IHtcblx0XHRcdFx0XHQvLyBBZGQgZXZlbnQgbGlzdGVuZXJcblx0XHRcdFx0XHRjb25zdCBoYW5kbGVyID0gKCkgPT4ge1xuXHRcdFx0XHRcdFx0d3JhcHBlci52YWx1ZS5jdXJyZW50ID0gZmllbGRFbGVtZW50LnZhbHVlIHx8ICcnO1xuXHRcdFx0XHRcdFx0Y2FsbGJhY2soIHdyYXBwZXIudmFsdWUuY3VycmVudCApO1xuXHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHRmaWVsZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2NoYW5nZScsIGhhbmRsZXIgKTtcblx0XHRcdFx0XHRmaWVsZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2lucHV0JywgaGFuZGxlciApO1xuXG5cdFx0XHRcdFx0Ly8gUmV0dXJuIHVud2F0Y2ggZnVuY3Rpb25cblx0XHRcdFx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0XHRcdFx0ZmllbGRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdjaGFuZ2UnLCBoYW5kbGVyICk7XG5cdFx0XHRcdFx0XHRmaWVsZEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2lucHV0JywgaGFuZGxlciApO1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH07XG5cblx0XHRjb25zb2xlLmxvZyggYFtKRkIgQXV0by1VcGRhdGVdIENyZWF0ZWQgRE9NIHdyYXBwZXIgZm9yIGZpZWxkOiAkeyBmaWVsZE5hbWUgfWAgKTtcblxuXHRcdHJldHVybiB3cmFwcGVyO1xuXHR9XG5cblx0LyoqXG5cdCAqIFdhdGNoIGEgc3BlY2lmaWMgZmllbGQgZm9yIGNoYW5nZXMuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSAgICAgIHNvdXJjZUZpZWxkTmFtZSBGaWVsZCBuYW1lIHRvIHdhdGNoLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gICAgICB0YXJnZXRGaWVsZE5hbWUgRmllbGQgbmFtZSB0byB1cGRhdGUuXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGZvcm1Ob2RlICAgICAgICBGb3JtIGVsZW1lbnQuXG5cdCAqL1xuXHR3YXRjaEZpZWxkKCBzb3VyY2VGaWVsZE5hbWUsIHRhcmdldEZpZWxkTmFtZSwgZm9ybU5vZGUgKSB7XG5cdFx0Ly8gVHJ5IHRvIGZpbmQgaW5wdXQgdXNpbmcgSmV0Rm9ybUJ1aWxkZXIncyBBUElcblx0XHRsZXQgc291cmNlSW5wdXQgPSBudWxsO1xuXG5cdFx0Ly8gTWV0aG9kIDE6IFRyeSBmaW5kSW5wdXQgKGZvciByZWd1bGFyIGZpZWxkcylcblx0XHRpZiAoIHdpbmRvdy5KZXRGb3JtQnVpbGRlck1haW4/LmlucHV0RGF0YT8uZmluZElucHV0ICkge1xuXHRcdFx0c291cmNlSW5wdXQgPSB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJNYWluLmlucHV0RGF0YS5maW5kSW5wdXQoIHNvdXJjZUZpZWxkTmFtZSwgZm9ybU5vZGUgKTtcblx0XHR9XG5cblx0XHQvLyBNZXRob2QgMjogSWYgbm90IGZvdW5kLCB0cnkgZ2V0SW5wdXQgKGFsdGVybmF0aXZlIEFQSSlcblx0XHRpZiAoICEgc291cmNlSW5wdXQgJiYgd2luZG93LkpldEZvcm1CdWlsZGVyTWFpbj8uaW5wdXREYXRhPy5nZXRJbnB1dCApIHtcblx0XHRcdHNvdXJjZUlucHV0ID0gd2luZG93LkpldEZvcm1CdWlsZGVyTWFpbi5pbnB1dERhdGEuZ2V0SW5wdXQoIHNvdXJjZUZpZWxkTmFtZSwgZm9ybU5vZGUgKTtcblx0XHR9XG5cblx0XHQvLyBNZXRob2QgMzogSWYgc3RpbGwgbm90IGZvdW5kLCBzZWFyY2ggYWxsIGlucHV0c1xuXHRcdGlmICggISBzb3VyY2VJbnB1dCAmJiB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJNYWluPy5pbnB1dERhdGE/LmdldEFsbCApIHtcblx0XHRcdGNvbnN0IGFsbElucHV0cyA9IHdpbmRvdy5KZXRGb3JtQnVpbGRlck1haW4uaW5wdXREYXRhLmdldEFsbCggZm9ybU5vZGUgKTtcblx0XHRcdGlmICggYWxsSW5wdXRzICkge1xuXHRcdFx0XHRzb3VyY2VJbnB1dCA9IGFsbElucHV0cy5maW5kKCAoIGlucHV0ICkgPT4gaW5wdXQubmFtZSA9PT0gc291cmNlRmllbGROYW1lICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gTWV0aG9kIDQ6IEZhbGxiYWNrIC0gZmluZCBET00gZWxlbWVudCBhbmQgY3JlYXRlIHdyYXBwZXJcblx0XHRpZiAoICEgc291cmNlSW5wdXQgKSB7XG5cdFx0XHRzb3VyY2VJbnB1dCA9IHRoaXMuY3JlYXRlSW5wdXRXcmFwcGVyRnJvbURPTSggc291cmNlRmllbGROYW1lLCBmb3JtTm9kZSApO1xuXHRcdH1cblxuXHRcdGlmICggISBzb3VyY2VJbnB1dCApIHtcblx0XHRcdGNvbnNvbGUud2Fybihcblx0XHRcdFx0YFtKRkIgQXV0by1VcGRhdGVdIFNvdXJjZSBmaWVsZCBub3QgZm91bmQ6ICR7IHNvdXJjZUZpZWxkTmFtZSB9YCxcblx0XHRcdFx0J1RyaWVkIGFsbCBtZXRob2RzIGluY2x1ZGluZyBET00gc2VhcmNoJ1xuXHRcdFx0KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBHZXQgb3IgY3JlYXRlIHdhdGNoZXIgZm9yIHRoaXMgc291cmNlIGZpZWxkXG5cdFx0bGV0IHdhdGNoZXIgPSB0aGlzLndhdGNoZXJzLmdldCggc291cmNlRmllbGROYW1lICk7XG5cblx0XHRpZiAoICEgd2F0Y2hlciApIHtcblx0XHRcdC8vIENyZWF0ZSBuZXcgd2F0Y2hlclxuXHRcdFx0Y29uc3QgdW53YXRjaCA9IHNvdXJjZUlucHV0LnZhbHVlLndhdGNoKCAoKSA9PiB7XG5cdFx0XHRcdHRoaXMuaGFuZGxlRmllbGRDaGFuZ2UoIHNvdXJjZUZpZWxkTmFtZSwgZm9ybU5vZGUgKTtcblx0XHRcdH0gKTtcblxuXHRcdFx0d2F0Y2hlciA9IHtcblx0XHRcdFx0dW53YXRjaCxcblx0XHRcdFx0ZGVwZW5kZW50czogW10sXG5cdFx0XHR9O1xuXG5cdFx0XHR0aGlzLndhdGNoZXJzLnNldCggc291cmNlRmllbGROYW1lLCB3YXRjaGVyICk7XG5cdFx0fVxuXG5cdFx0Ly8gQWRkIHRhcmdldCBmaWVsZCB0byBkZXBlbmRlbnRzIGlmIG5vdCBhbHJlYWR5IHByZXNlbnRcblx0XHRpZiAoICEgd2F0Y2hlci5kZXBlbmRlbnRzLmluY2x1ZGVzKCB0YXJnZXRGaWVsZE5hbWUgKSApIHtcblx0XHRcdHdhdGNoZXIuZGVwZW5kZW50cy5wdXNoKCB0YXJnZXRGaWVsZE5hbWUgKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogV2F0Y2ggYWxsIGZpZWxkcyBpbiBmb3JtIGZvciBjaGFuZ2VzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gICAgICB0YXJnZXRGaWVsZE5hbWUgRmllbGQgbmFtZSB0byB1cGRhdGUuXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGZvcm1Ob2RlICAgICAgICBGb3JtIGVsZW1lbnQuXG5cdCAqL1xuXHR3YXRjaEFsbEZpZWxkcyggdGFyZ2V0RmllbGROYW1lLCBmb3JtTm9kZSApIHtcblx0XHQvLyBHZXQgYWxsIGZvcm0gaW5wdXRzXG5cdFx0Y29uc3QgYWxsSW5wdXRzID0gd2luZG93LkpldEZvcm1CdWlsZGVyTWFpbj8uaW5wdXREYXRhPy5nZXRBbGwoIGZvcm1Ob2RlICkgPz8gW107XG5cblx0XHRhbGxJbnB1dHMuZm9yRWFjaCggKCBpbnB1dCApID0+IHtcblx0XHRcdGNvbnN0IGZpZWxkTmFtZSA9IGlucHV0Lm5hbWU7XG5cblx0XHRcdC8vIERvbid0IHdhdGNoIHRoZSB0YXJnZXQgZmllbGQgaXRzZWxmXG5cdFx0XHRpZiAoIGZpZWxkTmFtZSA9PT0gdGFyZ2V0RmllbGROYW1lICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMud2F0Y2hGaWVsZCggZmllbGROYW1lLCB0YXJnZXRGaWVsZE5hbWUsIGZvcm1Ob2RlICk7XG5cdFx0fSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZSBmaWVsZCBjaGFuZ2UgZXZlbnQuXG5cdCAqIFRyaWdnZXJzIHVwZGF0ZSBmb3IgYWxsIGRlcGVuZGVudCBmaWVsZHMgd2l0aCBkZWJvdW5jaW5nLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gICAgICBzb3VyY2VGaWVsZE5hbWUgQ2hhbmdlZCBmaWVsZCBuYW1lLlxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBmb3JtTm9kZSAgICAgICAgRm9ybSBlbGVtZW50LlxuXHQgKi9cblx0aGFuZGxlRmllbGRDaGFuZ2UoIHNvdXJjZUZpZWxkTmFtZSwgZm9ybU5vZGUgKSB7XG5cdFx0Y29uc3Qgd2F0Y2hlciA9IHRoaXMud2F0Y2hlcnMuZ2V0KCBzb3VyY2VGaWVsZE5hbWUgKTtcblxuXHRcdGlmICggISB3YXRjaGVyIHx8ICEgd2F0Y2hlci5kZXBlbmRlbnRzLmxlbmd0aCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBVcGRhdGUgZWFjaCBkZXBlbmRlbnQgZmllbGQgd2l0aCBkZWJvdW5jaW5nXG5cdFx0d2F0Y2hlci5kZXBlbmRlbnRzLmZvckVhY2goICggdGFyZ2V0RmllbGROYW1lICkgPT4ge1xuXHRcdFx0dGhpcy5kZWJvdW5jZWRVcGRhdGUoIHRhcmdldEZpZWxkTmFtZSwgZm9ybU5vZGUgKTtcblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0ICogRGVib3VuY2VkIHVwZGF0ZSBmb3IgdGFyZ2V0IGZpZWxkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gICAgICB0YXJnZXRGaWVsZE5hbWUgRmllbGQgdG8gdXBkYXRlLlxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBmb3JtTm9kZSAgICAgICAgRm9ybSBlbGVtZW50LlxuXHQgKi9cblx0ZGVib3VuY2VkVXBkYXRlKCB0YXJnZXRGaWVsZE5hbWUsIGZvcm1Ob2RlICkge1xuXHRcdC8vIENsZWFyIGV4aXN0aW5nIHRpbWVyXG5cdFx0Y29uc3QgZXhpc3RpbmdUaW1lciA9IHRoaXMuZGVib3VuY2VUaW1lcnMuZ2V0KCB0YXJnZXRGaWVsZE5hbWUgKTtcblx0XHRpZiAoIGV4aXN0aW5nVGltZXIgKSB7XG5cdFx0XHRjbGVhclRpbWVvdXQoIGV4aXN0aW5nVGltZXIgKTtcblx0XHR9XG5cblx0XHQvLyBTZXQgbmV3IHRpbWVyXG5cdFx0Y29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCAoKSA9PiB7XG5cdFx0XHR0aGlzLnVwZGF0ZUZpZWxkKCB0YXJnZXRGaWVsZE5hbWUsIGZvcm1Ob2RlICk7XG5cdFx0XHR0aGlzLmRlYm91bmNlVGltZXJzLmRlbGV0ZSggdGFyZ2V0RmllbGROYW1lICk7XG5cdFx0fSwgdGhpcy5kZWJvdW5jZURlbGF5ICk7XG5cblx0XHR0aGlzLmRlYm91bmNlVGltZXJzLnNldCggdGFyZ2V0RmllbGROYW1lLCB0aW1lciApO1xuXHR9XG5cblx0LyoqXG5cdCAqIFVwZGF0ZSBvcHRpb25zIGZvciBhIGZpZWxkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gICAgICB0YXJnZXRGaWVsZE5hbWUgRmllbGQgdG8gdXBkYXRlLlxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBmb3JtTm9kZSAgICAgICAgRm9ybSBlbGVtZW50LlxuXHQgKi9cblx0YXN5bmMgdXBkYXRlRmllbGQoIHRhcmdldEZpZWxkTmFtZSwgZm9ybU5vZGUgKSB7XG5cdFx0Y29uc3QgZmllbGREYXRhID0gdGhpcy5hdXRvVXBkYXRlRmllbGRzLmdldCggdGFyZ2V0RmllbGROYW1lICk7XG5cblx0XHRpZiAoICEgZmllbGREYXRhICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHsgZWxlbWVudCwgY29uZmlnIH0gPSBmaWVsZERhdGE7XG5cblx0XHQvLyBDb2xsZWN0IGNvbnRleHQgZnJvbSBhbGwgbGlzdGVuZWQgZmllbGRzXG5cdFx0Y29uc3QgY29udGV4dCA9IHRoaXMuY29sbGVjdENvbnRleHQoIGNvbmZpZywgZm9ybU5vZGUgKTtcblxuXHRcdC8vIENoZWNrIGNhY2hlIGZpcnN0XG5cdFx0Y29uc3QgY2FjaGVkT3B0aW9ucyA9IHRoaXMuY2FjaGVNYW5hZ2VyLmdldChcblx0XHRcdGNvbmZpZy5nZW5lcmF0b3JJZCxcblx0XHRcdGNvbnRleHQsXG5cdFx0XHRjb25maWcuY2FjaGVUaW1lb3V0XG5cdFx0KTtcblxuXHRcdGlmICggY2FjaGVkT3B0aW9ucyApIHtcblx0XHRcdHRoaXMub3B0aW9uc1VwZGF0ZXIudXBkYXRlT3B0aW9ucyggZWxlbWVudCwgY2FjaGVkT3B0aW9ucyApO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIEFib3J0IHByZXZpb3VzIHJlcXVlc3QgaWYgc3RpbGwgcGVuZGluZ1xuXHRcdHRoaXMuYWJvcnRQcmV2aW91c1JlcXVlc3QoIHRhcmdldEZpZWxkTmFtZSApO1xuXG5cdFx0Ly8gQ3JlYXRlIG5ldyBhYm9ydCBjb250cm9sbGVyXG5cdFx0Y29uc3QgYWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuXHRcdHRoaXMuYWJvcnRDb250cm9sbGVycy5zZXQoIHRhcmdldEZpZWxkTmFtZSwgYWJvcnRDb250cm9sbGVyICk7XG5cblx0XHR0cnkge1xuXHRcdFx0Ly8gU2hvdyBsb2FkaW5nIHN0YXRlXG5cdFx0XHR0aGlzLm9wdGlvbnNVcGRhdGVyLnNldExvYWRpbmdTdGF0ZSggZWxlbWVudCwgdHJ1ZSApO1xuXG5cdFx0XHQvLyBGZXRjaCBuZXcgb3B0aW9uc1xuXHRcdFx0Y29uc3Qgb3B0aW9ucyA9IGF3YWl0IHRoaXMuZmV0Y2hPcHRpb25zKCBjb25maWcsIGNvbnRleHQsIGFib3J0Q29udHJvbGxlci5zaWduYWwgKTtcblxuXHRcdFx0Ly8gQ2FjaGUgdGhlIHJlc3BvbnNlXG5cdFx0XHR0aGlzLmNhY2hlTWFuYWdlci5zZXQoIGNvbmZpZy5nZW5lcmF0b3JJZCwgY29udGV4dCwgb3B0aW9ucyApO1xuXG5cdFx0XHQvLyBVcGRhdGUgRE9NXG5cdFx0XHR0aGlzLm9wdGlvbnNVcGRhdGVyLnVwZGF0ZU9wdGlvbnMoIGVsZW1lbnQsIG9wdGlvbnMgKTtcblx0XHR9IGNhdGNoICggZXJyb3IgKSB7XG5cdFx0XHRpZiAoIGVycm9yLm5hbWUgIT09ICdBYm9ydEVycm9yJyApIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvciggJ1tKRkIgQXV0by1VcGRhdGVdIFVwZGF0ZSBmYWlsZWQ6JywgZXJyb3IgKTtcblx0XHRcdFx0dGhpcy5vcHRpb25zVXBkYXRlci5zZXRFcnJvclN0YXRlKCBlbGVtZW50LCBlcnJvci5tZXNzYWdlICk7XG5cdFx0XHR9XG5cdFx0fSBmaW5hbGx5IHtcblx0XHRcdHRoaXMub3B0aW9uc1VwZGF0ZXIuc2V0TG9hZGluZ1N0YXRlKCBlbGVtZW50LCBmYWxzZSApO1xuXHRcdFx0dGhpcy5hYm9ydENvbnRyb2xsZXJzLmRlbGV0ZSggdGFyZ2V0RmllbGROYW1lICk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIENvbGxlY3QgY29udGV4dCB2YWx1ZXMgZnJvbSBmb3JtIGZpZWxkcy5cblx0ICpcblx0ICogQHBhcmFtIHtPYmplY3R9ICAgICAgY29uZmlnICAgRmllbGQgY29uZmlndXJhdGlvbi5cblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZm9ybU5vZGUgRm9ybSBlbGVtZW50LlxuXHQgKlxuXHQgKiBAcmV0dXJuIHtPYmplY3R9IENvbnRleHQgb2JqZWN0IHdpdGggZmllbGQgdmFsdWVzLlxuXHQgKi9cblx0Y29sbGVjdENvbnRleHQoIGNvbmZpZywgZm9ybU5vZGUgKSB7XG5cdFx0Y29uc3QgY29udGV4dCA9IHt9O1xuXG5cdFx0Ly8gQ29sbGVjdCB2YWx1ZXMgZnJvbSBhbGwgc291cmNlIGZpZWxkcyAobGlzdGVuVG8gaXMgbm93IGFuIGFycmF5KVxuXHRcdGlmICggY29uZmlnLmxpc3RlblRvICYmIEFycmF5LmlzQXJyYXkoIGNvbmZpZy5saXN0ZW5UbyApICkge1xuXHRcdFx0Y29uZmlnLmxpc3RlblRvLmZvckVhY2goICggc291cmNlRmllbGROYW1lICkgPT4ge1xuXHRcdFx0XHQvLyBUcnkgdG8gZmluZCBpbnB1dCB1c2luZyBKZXRGb3JtQnVpbGRlciBBUElcblx0XHRcdFx0bGV0IGlucHV0ID0gd2luZG93LkpldEZvcm1CdWlsZGVyTWFpbj8uaW5wdXREYXRhPy5maW5kSW5wdXQoIHNvdXJjZUZpZWxkTmFtZSwgZm9ybU5vZGUgKTtcblxuXHRcdFx0XHQvLyBGYWxsYmFjayB0byBnZXRJbnB1dFxuXHRcdFx0XHRpZiAoICEgaW5wdXQgJiYgd2luZG93LkpldEZvcm1CdWlsZGVyTWFpbj8uaW5wdXREYXRhPy5nZXRJbnB1dCApIHtcblx0XHRcdFx0XHRpbnB1dCA9IHdpbmRvdy5KZXRGb3JtQnVpbGRlck1haW4uaW5wdXREYXRhLmdldElucHV0KCBzb3VyY2VGaWVsZE5hbWUsIGZvcm1Ob2RlICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBGYWxsYmFjayB0byBzZWFyY2ggYWxsIGlucHV0c1xuXHRcdFx0XHRpZiAoICEgaW5wdXQgJiYgd2luZG93LkpldEZvcm1CdWlsZGVyTWFpbj8uaW5wdXREYXRhPy5nZXRBbGwgKSB7XG5cdFx0XHRcdFx0Y29uc3QgYWxsSW5wdXRzID0gd2luZG93LkpldEZvcm1CdWlsZGVyTWFpbi5pbnB1dERhdGEuZ2V0QWxsKCBmb3JtTm9kZSApO1xuXHRcdFx0XHRcdGlmICggYWxsSW5wdXRzICkge1xuXHRcdFx0XHRcdFx0aW5wdXQgPSBhbGxJbnB1dHMuZmluZCggKCBpbnAgKSA9PiBpbnAubmFtZSA9PT0gc291cmNlRmllbGROYW1lICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gRmluYWwgZmFsbGJhY2s6IGdldCB2YWx1ZSBkaXJlY3RseSBmcm9tIERPTVxuXHRcdFx0XHRpZiAoICEgaW5wdXQgKSB7XG5cdFx0XHRcdFx0Y29uc3QgZmllbGRFbGVtZW50ID0gZm9ybU5vZGUucXVlcnlTZWxlY3RvciggYFtkYXRhLWZpZWxkLW5hbWU9XCIkeyBzb3VyY2VGaWVsZE5hbWUgfVwiXWAgKSB8fFxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgIGZvcm1Ob2RlLnF1ZXJ5U2VsZWN0b3IoIGBbbmFtZT1cIiR7IHNvdXJjZUZpZWxkTmFtZSB9XCJdYCApO1xuXHRcdFx0XHRcdGlmICggZmllbGRFbGVtZW50ICkge1xuXHRcdFx0XHRcdFx0Y29udGV4dFsgc291cmNlRmllbGROYW1lIF0gPSBmaWVsZEVsZW1lbnQudmFsdWUgfHwgJyc7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUud2FybiggYFtKRkIgQXV0by1VcGRhdGVdIENvdWxkIG5vdCBmaW5kIGZpZWxkIGZvciBjb250ZXh0OiAkeyBzb3VyY2VGaWVsZE5hbWUgfWAgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y29udGV4dFsgc291cmNlRmllbGROYW1lIF0gPSBpbnB1dC52YWx1ZS5jdXJyZW50O1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdFx0aWYgKCBjb25maWcubGlzdGVuQWxsICkge1xuXHRcdFx0Y29uc3QgYWxsSW5wdXRzID0gd2luZG93LkpldEZvcm1CdWlsZGVyTWFpbj8uaW5wdXREYXRhPy5nZXRBbGwoIGZvcm1Ob2RlICkgPz8gW107XG5cdFx0XHRhbGxJbnB1dHMuZm9yRWFjaCggKCBpbnB1dCApID0+IHtcblx0XHRcdFx0aWYgKCBpbnB1dC5uYW1lICE9PSBjb25maWcuZmllbGROYW1lICkge1xuXHRcdFx0XHRcdGNvbnRleHRbIGlucHV0Lm5hbWUgXSA9IGlucHV0LnZhbHVlLmN1cnJlbnQ7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29udGV4dDtcblx0fVxuXG5cdC8qKlxuXHQgKiBGZXRjaCBvcHRpb25zIGZyb20gUkVTVCBBUEkuXG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSAgICAgIGNvbmZpZyBGaWVsZCBjb25maWd1cmF0aW9uLlxuXHQgKiBAcGFyYW0ge09iamVjdH0gICAgICBjb250ZXh0IENvbnRleHQgdmFsdWVzLlxuXHQgKiBAcGFyYW0ge0Fib3J0U2lnbmFsfSBzaWduYWwgIEFib3J0IHNpZ25hbC5cblx0ICpcblx0ICogQHJldHVybiB7UHJvbWlzZTxBcnJheT59IEdlbmVyYXRlZCBvcHRpb25zLlxuXHQgKi9cblx0YXN5bmMgZmV0Y2hPcHRpb25zKCBjb25maWcsIGNvbnRleHQsIHNpZ25hbCApIHtcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCAnL3dwLWpzb24vamV0LWZvcm0tYnVpbGRlci92MS9nZW5lcmF0b3ItdXBkYXRlJywge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0XHR9LFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoIHtcblx0XHRcdFx0Zm9ybV9pZDogY29uZmlnLmZvcm1JZCxcblx0XHRcdFx0ZmllbGRfbmFtZTogY29uZmlnLmZpZWxkTmFtZSxcblx0XHRcdFx0Z2VuZXJhdG9yX2lkOiBjb25maWcuZ2VuZXJhdG9ySWQsXG5cdFx0XHRcdGJsb2NrX2F0dHJzOiBjb25maWcuYmxvY2tBdHRycyxcblx0XHRcdFx0Y29udGV4dCxcblx0XHRcdH0gKSxcblx0XHRcdHNpZ25hbCxcblx0XHR9ICk7XG5cblx0XHRpZiAoICEgcmVzcG9uc2Uub2sgKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIGBIVFRQIGVycm9yISBzdGF0dXM6ICR7IHJlc3BvbnNlLnN0YXR1cyB9YCApO1xuXHRcdH1cblxuXHRcdGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cblx0XHRpZiAoICEgZGF0YS5zdWNjZXNzICkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBkYXRhLm1lc3NhZ2UgfHwgJ1Vua25vd24gZXJyb3InICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRhdGEub3B0aW9ucyB8fCBbXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBBYm9ydCBwcmV2aW91cyByZXF1ZXN0IGZvciBhIGZpZWxkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZmllbGROYW1lIEZpZWxkIG5hbWUuXG5cdCAqL1xuXHRhYm9ydFByZXZpb3VzUmVxdWVzdCggZmllbGROYW1lICkge1xuXHRcdGNvbnN0IGNvbnRyb2xsZXIgPSB0aGlzLmFib3J0Q29udHJvbGxlcnMuZ2V0KCBmaWVsZE5hbWUgKTtcblx0XHRpZiAoIGNvbnRyb2xsZXIgKSB7XG5cdFx0XHRjb250cm9sbGVyLmFib3J0KCk7XG5cdFx0XHR0aGlzLmFib3J0Q29udHJvbGxlcnMuZGVsZXRlKCBmaWVsZE5hbWUgKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogRGVzdHJveSB3YXRjaGVycyBhbmQgY2xlYW51cC5cblx0ICovXG5cdGRlc3Ryb3koKSB7XG5cdFx0Ly8gVW53YXRjaCBhbGwgZmllbGRzXG5cdFx0dGhpcy53YXRjaGVycy5mb3JFYWNoKCAoIHdhdGNoZXIgKSA9PiB7XG5cdFx0XHRpZiAoIHdhdGNoZXIudW53YXRjaCApIHtcblx0XHRcdFx0d2F0Y2hlci51bndhdGNoKCk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdFx0Ly8gQ2xlYXIgdGltZXJzXG5cdFx0dGhpcy5kZWJvdW5jZVRpbWVycy5mb3JFYWNoKCAoIHRpbWVyICkgPT4ge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KCB0aW1lciApO1xuXHRcdH0gKTtcblxuXHRcdC8vIEFib3J0IHBlbmRpbmcgcmVxdWVzdHNcblx0XHR0aGlzLmFib3J0Q29udHJvbGxlcnMuZm9yRWFjaCggKCBjb250cm9sbGVyICkgPT4ge1xuXHRcdFx0Y29udHJvbGxlci5hYm9ydCgpO1xuXHRcdH0gKTtcblxuXHRcdC8vIENsZWFyIGFsbCBtYXBzXG5cdFx0dGhpcy53YXRjaGVycy5jbGVhcigpO1xuXHRcdHRoaXMuYXV0b1VwZGF0ZUZpZWxkcy5jbGVhcigpO1xuXHRcdHRoaXMuYWJvcnRDb250cm9sbGVycy5jbGVhcigpO1xuXHRcdHRoaXMuZGVib3VuY2VUaW1lcnMuY2xlYXIoKTtcblx0XHR0aGlzLmNhY2hlTWFuYWdlci5jbGVhckFsbCgpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpZWxkV2F0Y2hlcjtcbiIsIi8qKlxuICogT3B0aW9ucyBVcGRhdGVyIGZvciBBdXRvLVVwZGF0ZSBGZWF0dXJlLlxuICpcbiAqIEhhbmRsZXMgRE9NIG1hbmlwdWxhdGlvbiB0byB1cGRhdGUgZmllbGQgb3B0aW9ucy5cbiAqIFN1cHBvcnRzIHNlbGVjdCwgY2hlY2tib3gsIGFuZCByYWRpbyBmaWVsZCB0eXBlcy5cbiAqXG4gKiBAcGFja2FnZSBKZXRGb3JtQnVpbGRlclxuICovXG5cbi8qKlxuICogT3B0aW9ucyBVcGRhdGVyIENsYXNzLlxuICpcbiAqIFVwZGF0ZXMgZmllbGQgb3B0aW9ucyBpbiB0aGUgRE9NIHdoaWxlIHByZXNlcnZpbmcgc2VsZWN0ZWQgdmFsdWVzLlxuICovXG5jbGFzcyBPcHRpb25zVXBkYXRlciB7XG5cdC8qKlxuXHQgKiBVcGRhdGUgb3B0aW9ucyBmb3IgYSBmaWVsZCBlbGVtZW50LlxuXHQgKlxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBmaWVsZEVsZW1lbnQgRmllbGQgZWxlbWVudCAoc2VsZWN0L2lucHV0IGNvbnRhaW5lcikuXG5cdCAqIEBwYXJhbSB7QXJyYXl9ICAgICAgIG9wdGlvbnMgICAgICBOZXcgb3B0aW9ucyBhcnJheS5cblx0ICovXG5cdHVwZGF0ZU9wdGlvbnMoIGZpZWxkRWxlbWVudCwgb3B0aW9ucyApIHtcblx0XHRjb25zdCBmaWVsZFR5cGUgPSB0aGlzLmdldEZpZWxkVHlwZSggZmllbGRFbGVtZW50ICk7XG5cblx0XHRzd2l0Y2ggKCBmaWVsZFR5cGUgKSB7XG5cdFx0XHRjYXNlICdzZWxlY3QnOlxuXHRcdFx0XHR0aGlzLnVwZGF0ZVNlbGVjdE9wdGlvbnMoIGZpZWxkRWxlbWVudCwgb3B0aW9ucyApO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2NoZWNrYm94Jzpcblx0XHRcdGNhc2UgJ3JhZGlvJzpcblx0XHRcdFx0dGhpcy51cGRhdGVDaG9pY2VPcHRpb25zKCBmaWVsZEVsZW1lbnQsIG9wdGlvbnMsIGZpZWxkVHlwZSApO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1tKRkIgQXV0by1VcGRhdGVdIFVuc3VwcG9ydGVkIGZpZWxkIHR5cGU6JywgZmllbGRUeXBlICk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBmaWVsZCB0eXBlIGZyb20gZWxlbWVudC5cblx0ICpcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZmllbGRFbGVtZW50IEZpZWxkIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEByZXR1cm4ge3N0cmluZ30gRmllbGQgdHlwZSAoc2VsZWN0L2NoZWNrYm94L3JhZGlvKS5cblx0ICovXG5cdGdldEZpZWxkVHlwZSggZmllbGRFbGVtZW50ICkge1xuXHRcdGlmICggZmllbGRFbGVtZW50LnRhZ05hbWUgPT09ICdTRUxFQ1QnICkge1xuXHRcdFx0cmV0dXJuICdzZWxlY3QnO1xuXHRcdH1cblxuXHRcdC8vIEZvciBjaGVja2JveC9yYWRpbywgZWxlbWVudCBtaWdodCBiZSB0aGUgd3JhcHBlclxuXHRcdGNvbnN0IGZpcnN0SW5wdXQgPSBmaWVsZEVsZW1lbnQucXVlcnlTZWxlY3RvciggJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXSwgaW5wdXRbdHlwZT1cInJhZGlvXCJdJyApO1xuXHRcdGlmICggZmlyc3RJbnB1dCApIHtcblx0XHRcdHJldHVybiBmaXJzdElucHV0LnR5cGU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICd1bmtub3duJztcblx0fVxuXG5cdC8qKlxuXHQgKiBVcGRhdGUgc2VsZWN0IGZpZWxkIG9wdGlvbnMuXG5cdCAqXG5cdCAqIEBwYXJhbSB7SFRNTFNlbGVjdEVsZW1lbnR9IHNlbGVjdEVsZW1lbnQgU2VsZWN0IGVsZW1lbnQuXG5cdCAqIEBwYXJhbSB7QXJyYXl9ICAgICAgICAgICAgIG9wdGlvbnMgICAgICAgTmV3IG9wdGlvbnMgYXJyYXkuXG5cdCAqL1xuXHR1cGRhdGVTZWxlY3RPcHRpb25zKCBzZWxlY3RFbGVtZW50LCBvcHRpb25zICkge1xuXHRcdC8vIFN0b3JlIGN1cnJlbnQgdmFsdWVcblx0XHRjb25zdCBjdXJyZW50VmFsdWUgPSBzZWxlY3RFbGVtZW50LnZhbHVlO1xuXHRcdGNvbnN0IGlzTXVsdGlwbGUgPSBzZWxlY3RFbGVtZW50Lm11bHRpcGxlO1xuXHRcdGNvbnN0IGN1cnJlbnRWYWx1ZXMgPSBpc011bHRpcGxlXG5cdFx0XHQ/IEFycmF5LmZyb20oIHNlbGVjdEVsZW1lbnQuc2VsZWN0ZWRPcHRpb25zICkubWFwKCAoIG9wdCApID0+IG9wdC52YWx1ZSApXG5cdFx0XHQ6IFsgY3VycmVudFZhbHVlIF07XG5cblx0XHQvLyBTdG9yZSBwbGFjZWhvbGRlciBvcHRpb24gaWYgZXhpc3RzXG5cdFx0bGV0IHBsYWNlaG9sZGVyT3B0aW9uID0gbnVsbDtcblx0XHRjb25zdCBmaXJzdE9wdGlvbiA9IHNlbGVjdEVsZW1lbnQub3B0aW9uc1sgMCBdO1xuXHRcdGlmICggZmlyc3RPcHRpb24gJiYgZmlyc3RPcHRpb24udmFsdWUgPT09ICcnICkge1xuXHRcdFx0cGxhY2Vob2xkZXJPcHRpb24gPSBmaXJzdE9wdGlvbi5jbG9uZU5vZGUoIHRydWUgKTtcblx0XHR9XG5cblx0XHQvLyBDbGVhciBleGlzdGluZyBvcHRpb25zXG5cdFx0c2VsZWN0RWxlbWVudC5pbm5lckhUTUwgPSAnJztcblxuXHRcdC8vIFJlc3RvcmUgcGxhY2Vob2xkZXJcblx0XHRpZiAoIHBsYWNlaG9sZGVyT3B0aW9uICkge1xuXHRcdFx0c2VsZWN0RWxlbWVudC5hcHBlbmRDaGlsZCggcGxhY2Vob2xkZXJPcHRpb24gKTtcblx0XHR9XG5cblx0XHQvLyBBZGQgbmV3IG9wdGlvbnNcblx0XHRvcHRpb25zLmZvckVhY2goICggb3B0aW9uICkgPT4ge1xuXHRcdFx0Y29uc3Qgb3B0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdvcHRpb24nICk7XG5cdFx0XHRvcHRpb25FbGVtZW50LnZhbHVlID0gb3B0aW9uLnZhbHVlIHx8IG9wdGlvbi52YWwgfHwgJyc7XG5cdFx0XHRvcHRpb25FbGVtZW50LnRleHRDb250ZW50ID0gb3B0aW9uLmxhYmVsIHx8IG9wdGlvbi52YWx1ZSB8fCAnJztcblxuXHRcdFx0Ly8gUmVzdG9yZSBzZWxlY3Rpb24gaWYgdmFsdWUgbWF0Y2hlc1xuXHRcdFx0aWYgKCBjdXJyZW50VmFsdWVzLmluY2x1ZGVzKCBvcHRpb25FbGVtZW50LnZhbHVlICkgKSB7XG5cdFx0XHRcdG9wdGlvbkVsZW1lbnQuc2VsZWN0ZWQgPSB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBZGQgY2FsY3VsYXRlIGF0dHJpYnV0ZSBpZiBwcmVzZW50XG5cdFx0XHRpZiAoIG9wdGlvbi5jYWxjdWxhdGUgKSB7XG5cdFx0XHRcdG9wdGlvbkVsZW1lbnQuZGF0YXNldC5jYWxjdWxhdGUgPSBvcHRpb24uY2FsY3VsYXRlO1xuXHRcdFx0fVxuXG5cdFx0XHRzZWxlY3RFbGVtZW50LmFwcGVuZENoaWxkKCBvcHRpb25FbGVtZW50ICk7XG5cdFx0fSApO1xuXG5cdFx0Ly8gVHJpZ2dlciBjaGFuZ2UgZXZlbnQgZm9yIHJlYWN0aXZlIHVwZGF0ZXNcblx0XHRzZWxlY3RFbGVtZW50LmRpc3BhdGNoRXZlbnQoIG5ldyBFdmVudCggJ2NoYW5nZScsIHsgYnViYmxlczogdHJ1ZSB9ICkgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBVcGRhdGUgY2hlY2tib3gvcmFkaW8gZmllbGQgb3B0aW9ucy5cblx0ICpcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGFpbmVyRWxlbWVudCBDb250YWluZXIgZWxlbWVudC5cblx0ICogQHBhcmFtIHtBcnJheX0gICAgICAgb3B0aW9ucyAgICAgICAgICBOZXcgb3B0aW9ucyBhcnJheS5cblx0ICogQHBhcmFtIHtzdHJpbmd9ICAgICAgZmllbGRUeXBlICAgICAgICBGaWVsZCB0eXBlIChjaGVja2JveC9yYWRpbykuXG5cdCAqL1xuXHR1cGRhdGVDaG9pY2VPcHRpb25zKCBjb250YWluZXJFbGVtZW50LCBvcHRpb25zLCBmaWVsZFR5cGUgKSB7XG5cdFx0Ly8gRmluZCB0aGUgd3JhcHBlciB0aGF0IGNvbnRhaW5zIGFsbCBvcHRpb25zXG5cdFx0Y29uc3Qgd3JhcHBlciA9IGNvbnRhaW5lckVsZW1lbnQuY2xvc2VzdCggJy5qZXQtZm9ybS1idWlsZGVyX19maWVsZC13cmFwJyApIHx8XG5cdFx0ICAgICAgICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQucXVlcnlTZWxlY3RvciggJy5qZXQtZm9ybS1idWlsZGVyX19maWVsZC13cmFwJyApO1xuXG5cdFx0aWYgKCAhIHdyYXBwZXIgKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oICdbSkZCIEF1dG8tVXBkYXRlXSBDb3VsZCBub3QgZmluZCBmaWVsZCB3cmFwcGVyJyApO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIEdldCBmaWVsZCBuYW1lIGZyb20gZmlyc3QgaW5wdXRcblx0XHRjb25zdCBmaXJzdElucHV0ID0gd3JhcHBlci5xdWVyeVNlbGVjdG9yKCBgaW5wdXRbdHlwZT1cIiR7IGZpZWxkVHlwZSB9XCJdYCApO1xuXHRcdGlmICggISBmaXJzdElucHV0ICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGZpZWxkTmFtZSA9IGZpcnN0SW5wdXQubmFtZS5yZXBsYWNlKCAnW10nLCAnJyApOyAvLyBSZW1vdmUgYXJyYXkgc3VmZml4IGZvciBjaGVja2JveGVzXG5cblx0XHQvLyBTdG9yZSBjdXJyZW50IHZhbHVlc1xuXHRcdGNvbnN0IGN1cnJlbnRWYWx1ZXMgPSBBcnJheS5mcm9tKFxuXHRcdFx0d3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCBgaW5wdXRbdHlwZT1cIiR7IGZpZWxkVHlwZSB9XCJdOmNoZWNrZWRgIClcblx0XHQpLm1hcCggKCBpbnB1dCApID0+IGlucHV0LnZhbHVlICk7XG5cblx0XHQvLyBGaW5kIHRoZSBvcHRpb25zIGNvbnRhaW5lclxuXHRcdGNvbnN0IG9wdGlvbnNDb250YWluZXIgPSB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoICcuY2hlY2tib3hlcy13cmFwLCAucmFkaW9ib3hlcy13cmFwJyApIHx8IHdyYXBwZXI7XG5cblx0XHQvLyBDbGVhciBleGlzdGluZyBvcHRpb25zIChidXQgcHJlc2VydmUgYW55IG5vbi1vcHRpb24gZWxlbWVudHMpXG5cdFx0Y29uc3QgbGFiZWxzID0gb3B0aW9uc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCAnbGFiZWwnICk7XG5cdFx0bGFiZWxzLmZvckVhY2goICggbGFiZWwgKSA9PiBsYWJlbC5yZW1vdmUoKSApO1xuXG5cdFx0Ly8gQ3JlYXRlIG5ldyBvcHRpb25zXG5cdFx0b3B0aW9ucy5mb3JFYWNoKCAoIG9wdGlvbiwgaW5kZXggKSA9PiB7XG5cdFx0XHRjb25zdCB2YWx1ZSA9IG9wdGlvbi52YWx1ZSB8fCBvcHRpb24udmFsIHx8ICcnO1xuXHRcdFx0Y29uc3QgbGFiZWwgPSBvcHRpb24ubGFiZWwgfHwgdmFsdWU7XG5cdFx0XHRjb25zdCBpbnB1dElkID0gYCR7IGZpZWxkTmFtZSB9XyR7IGluZGV4IH1fJHsgRGF0ZS5ub3coKSB9YDtcblxuXHRcdFx0Ly8gQ3JlYXRlIGxhYmVsIGVsZW1lbnRcblx0XHRcdGNvbnN0IGxhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdsYWJlbCcgKTtcblx0XHRcdGxhYmVsRWxlbWVudC5jbGFzc05hbWUgPSAnamV0LWZvcm0tYnVpbGRlcl9fZmllbGQtbGFiZWwnO1xuXHRcdFx0bGFiZWxFbGVtZW50LnNldEF0dHJpYnV0ZSggJ2ZvcicsIGlucHV0SWQgKTtcblxuXHRcdFx0Ly8gQ3JlYXRlIGlucHV0IGVsZW1lbnRcblx0XHRcdGNvbnN0IGlucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdpbnB1dCcgKTtcblx0XHRcdGlucHV0RWxlbWVudC50eXBlID0gZmllbGRUeXBlO1xuXHRcdFx0aW5wdXRFbGVtZW50Lm5hbWUgPSBmaWVsZFR5cGUgPT09ICdjaGVja2JveCcgPyBgJHsgZmllbGROYW1lIH1bXWAgOiBmaWVsZE5hbWU7XG5cdFx0XHRpbnB1dEVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcblx0XHRcdGlucHV0RWxlbWVudC5pZCA9IGlucHV0SWQ7XG5cdFx0XHRpbnB1dEVsZW1lbnQuY2xhc3NOYW1lID0gJ2pldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkJztcblxuXHRcdFx0Ly8gUmVzdG9yZSBjaGVja2VkIHN0YXRlXG5cdFx0XHRpZiAoIGN1cnJlbnRWYWx1ZXMuaW5jbHVkZXMoIHZhbHVlICkgKSB7XG5cdFx0XHRcdGlucHV0RWxlbWVudC5jaGVja2VkID0gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQWRkIGNhbGN1bGF0ZSBhdHRyaWJ1dGUgaWYgcHJlc2VudFxuXHRcdFx0aWYgKCBvcHRpb24uY2FsY3VsYXRlICkge1xuXHRcdFx0XHRpbnB1dEVsZW1lbnQuZGF0YXNldC5jYWxjdWxhdGUgPSBvcHRpb24uY2FsY3VsYXRlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBDcmVhdGUgc3BhbiBmb3IgY3VzdG9tIHN0eWxpbmdcblx0XHRcdGNvbnN0IHNwYW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3NwYW4nICk7XG5cdFx0XHRzcGFuRWxlbWVudC5jbGFzc05hbWUgPSAnamV0LWZvcm0tYnVpbGRlcl9fZmllbGQtd3JhcCc7XG5cblx0XHRcdC8vIEFzc2VtYmxlIGVsZW1lbnRzXG5cdFx0XHRzcGFuRWxlbWVudC5hcHBlbmRDaGlsZCggaW5wdXRFbGVtZW50ICk7XG5cdFx0XHRsYWJlbEVsZW1lbnQuYXBwZW5kQ2hpbGQoIHNwYW5FbGVtZW50ICk7XG5cblx0XHRcdGNvbnN0IHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoIGAgJHsgbGFiZWwgfWAgKTtcblx0XHRcdGxhYmVsRWxlbWVudC5hcHBlbmRDaGlsZCggdGV4dE5vZGUgKTtcblxuXHRcdFx0b3B0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZCggbGFiZWxFbGVtZW50ICk7XG5cblx0XHRcdC8vIFRyaWdnZXIgY2hhbmdlIGV2ZW50IGlmIGNoZWNrZWRcblx0XHRcdGlmICggaW5wdXRFbGVtZW50LmNoZWNrZWQgKSB7XG5cdFx0XHRcdGlucHV0RWxlbWVudC5kaXNwYXRjaEV2ZW50KCBuZXcgRXZlbnQoICdjaGFuZ2UnLCB7IGJ1YmJsZXM6IHRydWUgfSApICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNldCBsb2FkaW5nIHN0YXRlIGZvciBhIGZpZWxkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBmaWVsZEVsZW1lbnQgRmllbGQgZWxlbWVudC5cblx0ICogQHBhcmFtIHtib29sZWFufSAgICAgaXNMb2FkaW5nICAgIExvYWRpbmcgc3RhdGUuXG5cdCAqL1xuXHRzZXRMb2FkaW5nU3RhdGUoIGZpZWxkRWxlbWVudCwgaXNMb2FkaW5nICkge1xuXHRcdGNvbnN0IHdyYXBwZXIgPSBmaWVsZEVsZW1lbnQuY2xvc2VzdCggJy5qZXQtZm9ybS1idWlsZGVyX19maWVsZC13cmFwJyApIHx8XG5cdFx0ICAgICAgICAgICAgICAgIGZpZWxkRWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXG5cdFx0aWYgKCAhIHdyYXBwZXIgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCBpc0xvYWRpbmcgKSB7XG5cdFx0XHR3cmFwcGVyLmNsYXNzTGlzdC5hZGQoICdqZmItYXV0by11cGRhdGUtbG9hZGluZycgKTtcblx0XHRcdGZpZWxkRWxlbWVudC5kaXNhYmxlZCA9IHRydWU7XG5cblx0XHRcdC8vIEFkZCBsb2FkaW5nIGluZGljYXRvciBpZiBkb2Vzbid0IGV4aXN0XG5cdFx0XHRpZiAoICEgd3JhcHBlci5xdWVyeVNlbGVjdG9yKCAnLmpmYi1hdXRvLXVwZGF0ZS1zcGlubmVyJyApICkge1xuXHRcdFx0XHRjb25zdCBzcGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3NwYW4nICk7XG5cdFx0XHRcdHNwaW5uZXIuY2xhc3NOYW1lID0gJ2pmYi1hdXRvLXVwZGF0ZS1zcGlubmVyJztcblx0XHRcdFx0c3Bpbm5lci5zZXRBdHRyaWJ1dGUoICdhcmlhLWxhYmVsJywgJ0xvYWRpbmcgb3B0aW9ucy4uLicgKTtcblx0XHRcdFx0d3JhcHBlci5hcHBlbmRDaGlsZCggc3Bpbm5lciApO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR3cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoICdqZmItYXV0by11cGRhdGUtbG9hZGluZycgKTtcblx0XHRcdGZpZWxkRWxlbWVudC5kaXNhYmxlZCA9IGZhbHNlO1xuXG5cdFx0XHQvLyBSZW1vdmUgbG9hZGluZyBpbmRpY2F0b3Jcblx0XHRcdGNvbnN0IHNwaW5uZXIgPSB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoICcuamZiLWF1dG8tdXBkYXRlLXNwaW5uZXInICk7XG5cdFx0XHRpZiAoIHNwaW5uZXIgKSB7XG5cdFx0XHRcdHNwaW5uZXIucmVtb3ZlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFNldCBlcnJvciBzdGF0ZSBmb3IgYSBmaWVsZC5cblx0ICpcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZmllbGRFbGVtZW50IEZpZWxkIGVsZW1lbnQuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSAgICAgIGVycm9yTWVzc2FnZSBFcnJvciBtZXNzYWdlLlxuXHQgKi9cblx0c2V0RXJyb3JTdGF0ZSggZmllbGRFbGVtZW50LCBlcnJvck1lc3NhZ2UgKSB7XG5cdFx0Y29uc3Qgd3JhcHBlciA9IGZpZWxkRWxlbWVudC5jbG9zZXN0KCAnLmpldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkLXdyYXAnICkgfHxcblx0XHQgICAgICAgICAgICAgICAgZmllbGRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cblx0XHRpZiAoICEgd3JhcHBlciApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR3cmFwcGVyLmNsYXNzTGlzdC5hZGQoICdqZmItYXV0by11cGRhdGUtZXJyb3InICk7XG5cblx0XHQvLyBBZGQgZXJyb3IgbWVzc2FnZSBpZiBkb2Vzbid0IGV4aXN0XG5cdFx0bGV0IGVycm9yRWxlbWVudCA9IHdyYXBwZXIucXVlcnlTZWxlY3RvciggJy5qZmItYXV0by11cGRhdGUtZXJyb3ItbWVzc2FnZScgKTtcblxuXHRcdGlmICggISBlcnJvckVsZW1lbnQgKSB7XG5cdFx0XHRlcnJvckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xuXHRcdFx0ZXJyb3JFbGVtZW50LmNsYXNzTmFtZSA9ICdqZmItYXV0by11cGRhdGUtZXJyb3ItbWVzc2FnZSc7XG5cdFx0XHR3cmFwcGVyLmFwcGVuZENoaWxkKCBlcnJvckVsZW1lbnQgKTtcblx0XHR9XG5cblx0XHRlcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSBlcnJvck1lc3NhZ2U7XG5cblx0XHQvLyBBdXRvLXJlbW92ZSBlcnJvciBhZnRlciA1IHNlY29uZHNcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7XG5cdFx0XHR0aGlzLmNsZWFyRXJyb3JTdGF0ZSggZmllbGRFbGVtZW50ICk7XG5cdFx0fSwgNTAwMCApO1xuXHR9XG5cblx0LyoqXG5cdCAqIENsZWFyIGVycm9yIHN0YXRlIGZvciBhIGZpZWxkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBmaWVsZEVsZW1lbnQgRmllbGQgZWxlbWVudC5cblx0ICovXG5cdGNsZWFyRXJyb3JTdGF0ZSggZmllbGRFbGVtZW50ICkge1xuXHRcdGNvbnN0IHdyYXBwZXIgPSBmaWVsZEVsZW1lbnQuY2xvc2VzdCggJy5qZXQtZm9ybS1idWlsZGVyX19maWVsZC13cmFwJyApIHx8XG5cdFx0ICAgICAgICAgICAgICAgIGZpZWxkRWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXG5cdFx0aWYgKCAhIHdyYXBwZXIgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0d3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCAnamZiLWF1dG8tdXBkYXRlLWVycm9yJyApO1xuXG5cdFx0Y29uc3QgZXJyb3JFbGVtZW50ID0gd3JhcHBlci5xdWVyeVNlbGVjdG9yKCAnLmpmYi1hdXRvLXVwZGF0ZS1lcnJvci1tZXNzYWdlJyApO1xuXHRcdGlmICggZXJyb3JFbGVtZW50ICkge1xuXHRcdFx0ZXJyb3JFbGVtZW50LnJlbW92ZSgpO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBPcHRpb25zVXBkYXRlcjtcbiIsIi8qKlxuICogQXV0by1VcGRhdGUgRmVhdHVyZSBJbml0aWFsaXphdGlvbi5cbiAqXG4gKiBNYWluIGVudHJ5IHBvaW50IGZvciB0aGUgYXV0by11cGRhdGUgZmVhdHVyZS5cbiAqIEludGVncmF0ZXMgd2l0aCBKZXRGb3JtQnVpbGRlcidzIGZvcm0gaW5pdGlhbGl6YXRpb24gaG9va3MuXG4gKlxuICogQHBhY2thZ2UgSmV0Rm9ybUJ1aWxkZXJcbiAqL1xuXG5pbXBvcnQgRmllbGRXYXRjaGVyIGZyb20gJy4vRmllbGRXYXRjaGVyJztcbmltcG9ydCAnLi9zdHlsZXMucGNzcyc7XG5cbi8qKlxuICogR2xvYmFsIGZpZWxkIHdhdGNoZXIgaW5zdGFuY2UuXG4gKiBTaGFyZWQgYWNyb3NzIGFsbCBmb3JtcyBmb3IgY2VudHJhbGl6ZWQgbWFuYWdlbWVudC5cbiAqXG4gKiBAdHlwZSB7RmllbGRXYXRjaGVyfG51bGx9XG4gKi9cbmxldCBnbG9iYWxXYXRjaGVyID0gbnVsbDtcblxuLyoqXG4gKiBHZXQgb3IgY3JlYXRlIGdsb2JhbCBmaWVsZCB3YXRjaGVyIGluc3RhbmNlLlxuICpcbiAqIEByZXR1cm4ge0ZpZWxkV2F0Y2hlcn0gRmllbGQgd2F0Y2hlciBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gZ2V0V2F0Y2hlcigpIHtcblx0aWYgKCAhIGdsb2JhbFdhdGNoZXIgKSB7XG5cdFx0Z2xvYmFsV2F0Y2hlciA9IG5ldyBGaWVsZFdhdGNoZXIoKTtcblx0fVxuXG5cdHJldHVybiBnbG9iYWxXYXRjaGVyO1xufVxuXG4vKipcbiAqIEluaXRpYWxpemUgYXV0by11cGRhdGUgZm9yIGEgZm9ybS5cbiAqIENhbGxlZCBieSBKZXRGb3JtQnVpbGRlciB3aGVuIGEgZm9ybSBpcyByZW5kZXJlZC5cbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fGpRdWVyeX0gZm9ybU5vZGUgRm9ybSBlbGVtZW50IChjYW4gYmUgalF1ZXJ5IG9iamVjdCBvciBET00gZWxlbWVudCkuXG4gKi9cbmZ1bmN0aW9uIGluaXRBdXRvVXBkYXRlKCBmb3JtTm9kZSApIHtcblx0aWYgKCAhIGZvcm1Ob2RlICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIENvbnZlcnQgalF1ZXJ5IG9iamVjdCB0byBET00gZWxlbWVudCBpZiBuZWVkZWRcblx0aWYgKCBmb3JtTm9kZSBpbnN0YW5jZW9mIGpRdWVyeSApIHtcblx0XHRmb3JtTm9kZSA9IGZvcm1Ob2RlWyAwIF07XG5cdH1cblxuXHQvLyBFbnN1cmUgd2UgaGF2ZSBhIHZhbGlkIERPTSBlbGVtZW50XG5cdGlmICggISBmb3JtTm9kZSB8fCAhIGZvcm1Ob2RlLnF1ZXJ5U2VsZWN0b3JBbGwgKSB7XG5cdFx0Y29uc29sZS5lcnJvciggJ1tKRkIgQXV0by1VcGRhdGVdIEludmFsaWQgZm9ybU5vZGU6JywgZm9ybU5vZGUgKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB3YXRjaGVyID0gZ2V0V2F0Y2hlcigpO1xuXHR3YXRjaGVyLmluaXRGb3JtKCBmb3JtTm9kZSApO1xufVxuXG4vKipcbiAqIEluaXRpYWxpemUgTXV0YXRpb25PYnNlcnZlciB0byB3YXRjaCBmb3IgZHluYW1pY2FsbHkgYWRkZWQgZmllbGRzLlxuICogVGhpcyBoYW5kbGVzIENvbmRpdGlvbmFsIEJsb2NrcyB0aGF0IHNob3cvaGlkZSBmaWVsZHMgZHluYW1pY2FsbHkuXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudHxqUXVlcnl9IGZvcm1Ob2RlIEZvcm0gZWxlbWVudCB0byBvYnNlcnZlIChjYW4gYmUgalF1ZXJ5IG9iamVjdCBvciBET00gZWxlbWVudCkuXG4gKi9cbmZ1bmN0aW9uIG9ic2VydmVEeW5hbWljRmllbGRzKCBmb3JtTm9kZSApIHtcblx0aWYgKCAhIGZvcm1Ob2RlIHx8ICEgd2luZG93Lk11dGF0aW9uT2JzZXJ2ZXIgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gQ29udmVydCBqUXVlcnkgb2JqZWN0IHRvIERPTSBlbGVtZW50IGlmIG5lZWRlZFxuXHRpZiAoIGZvcm1Ob2RlIGluc3RhbmNlb2YgalF1ZXJ5ICkge1xuXHRcdGZvcm1Ob2RlID0gZm9ybU5vZGVbIDAgXTtcblx0fVxuXG5cdC8vIEVuc3VyZSB3ZSBoYXZlIGEgdmFsaWQgRE9NIGVsZW1lbnRcblx0aWYgKCAhIGZvcm1Ob2RlIHx8ICEgZm9ybU5vZGUucXVlcnlTZWxlY3RvckFsbCApIHtcblx0XHRjb25zb2xlLmVycm9yKCAnW0pGQiBBdXRvLVVwZGF0ZV0gSW52YWxpZCBmb3JtTm9kZSBmb3Igb2JzZXJ2ZXI6JywgZm9ybU5vZGUgKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCAoIG11dGF0aW9ucyApID0+IHtcblx0XHRtdXRhdGlvbnMuZm9yRWFjaCggKCBtdXRhdGlvbiApID0+IHtcblx0XHRcdC8vIENoZWNrIGFkZGVkIG5vZGVzIGZvciBhdXRvLXVwZGF0ZSBmaWVsZHNcblx0XHRcdG11dGF0aW9uLmFkZGVkTm9kZXMuZm9yRWFjaCggKCBub2RlICkgPT4ge1xuXHRcdFx0XHQvLyBTa2lwIG5vbi1lbGVtZW50IG5vZGVzICh0ZXh0IG5vZGVzLCBjb21tZW50cywgZXRjLilcblx0XHRcdFx0aWYgKCBub2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSApIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBDb2xsZWN0IGFsbCBmaWVsZHMgdGhhdCBhcHBlYXJlZCAoYm90aCBhdXRvLXVwZGF0ZSBhbmQgcmVndWxhciBmaWVsZHMpXG5cdFx0XHRcdGNvbnN0IGFwcGVhcmVkRmllbGRzID0gW107XG5cblx0XHRcdFx0Ly8gQ2hlY2sgaWYgdGhlIGFkZGVkIG5vZGUgaXRzZWxmIGlzIGEgZmllbGRcblx0XHRcdFx0aWYgKCBub2RlLmhhc0F0dHJpYnV0ZSAmJiBub2RlLmdldEF0dHJpYnV0ZSggJ2RhdGEtZmllbGQtbmFtZScgKSApIHtcblx0XHRcdFx0XHRhcHBlYXJlZEZpZWxkcy5wdXNoKCBub2RlICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBDaGVjayBpZiB0aGUgYWRkZWQgbm9kZSBjb250YWlucyBmaWVsZHNcblx0XHRcdFx0aWYgKCBub2RlLnF1ZXJ5U2VsZWN0b3JBbGwgKSB7XG5cdFx0XHRcdFx0Y29uc3QgbmVzdGVkRmllbGRzID0gbm9kZS5xdWVyeVNlbGVjdG9yQWxsKCAnW2RhdGEtZmllbGQtbmFtZV0nICk7XG5cdFx0XHRcdFx0bmVzdGVkRmllbGRzLmZvckVhY2goICggZmllbGQgKSA9PiBhcHBlYXJlZEZpZWxkcy5wdXNoKCBmaWVsZCApICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBQcm9jZXNzIGFwcGVhcmVkIGZpZWxkc1xuXHRcdFx0XHRhcHBlYXJlZEZpZWxkcy5mb3JFYWNoKCAoIGZpZWxkRWxlbWVudCApID0+IHtcblx0XHRcdFx0XHRjb25zdCBmaWVsZE5hbWUgPSBmaWVsZEVsZW1lbnQuZ2V0QXR0cmlidXRlKCAnZGF0YS1maWVsZC1uYW1lJyApO1xuXG5cdFx0XHRcdFx0Ly8gSWYgaXQncyBhbiBhdXRvLXVwZGF0ZSBmaWVsZCwgaW5pdGlhbGl6ZSBpdFxuXHRcdFx0XHRcdGlmICggZmllbGRFbGVtZW50Lmhhc0F0dHJpYnV0ZSggJ2RhdGEtamZiLWF1dG8tdXBkYXRlJyApICkge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coICdbSkZCIEF1dG8tVXBkYXRlXSBEeW5hbWljYWxseSBhZGRlZCBhdXRvLXVwZGF0ZSBmaWVsZDonLCBmaWVsZE5hbWUgKTtcblx0XHRcdFx0XHRcdGNvbnN0IHdhdGNoZXIgPSBnZXRXYXRjaGVyKCk7XG5cdFx0XHRcdFx0XHR3YXRjaGVyLmluaXRGaWVsZCggZmllbGRFbGVtZW50LCBmb3JtTm9kZSApO1xuXG5cdFx0XHRcdFx0XHQvLyBUcmlnZ2VyIHVwZGF0ZSBpbW1lZGlhdGVseSBpZiBpdCdzIGEgZGVwZW5kZW50IGZpZWxkIHRoYXQganVzdCBhcHBlYXJlZFxuXHRcdFx0XHRcdFx0dHJpZ2dlclVwZGF0ZUZvck5ld0ZpZWxkKCBmaWVsZEVsZW1lbnQsIGZvcm1Ob2RlICk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gQ2hlY2sgaWYgYW55IGV4aXN0aW5nIGF1dG8tdXBkYXRlIGZpZWxkcyB3ZXJlIHdhaXRpbmcgZm9yIHRoaXMgZmllbGRcblx0XHRcdFx0XHQvLyAoVGhpcyBoYW5kbGVzIHRoZSBjYXNlIHdoZXJlIHNvdXJjZSBmaWVsZCBhcHBlYXJzIGFmdGVyIGRlcGVuZGVudCBmaWVsZCB3YXMgaW5pdGlhbGl6ZWQpXG5cdFx0XHRcdFx0cmV0cnlGYWlsZWRXYXRjaGVycyggZmllbGROYW1lLCBmb3JtTm9kZSApO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0Ly8gT2JzZXJ2ZSB0aGUgZm9ybSBmb3IgY2hhbmdlcyBpbiB0aGUgRE9NIHRyZWVcblx0b2JzZXJ2ZXIub2JzZXJ2ZSggZm9ybU5vZGUsIHtcblx0XHRjaGlsZExpc3Q6IHRydWUsXG5cdFx0c3VidHJlZTogdHJ1ZSxcblx0fSApO1xuXG5cdGNvbnNvbGUubG9nKCAnW0pGQiBBdXRvLVVwZGF0ZV0gTXV0YXRpb25PYnNlcnZlciBpbml0aWFsaXplZCBmb3IgZm9ybScgKTtcbn1cblxuLyoqXG4gKiBUcmFjayB3aGljaCB3YXRjaGVycyB3ZSBhbHJlYWR5IHJldHJpZWQgdG8gYXZvaWQgZHVwbGljYXRlcy5cbiAqIEtleTogXCJzb3VyY2VGaWVsZE5hbWU6dGFyZ2V0RmllbGROYW1lXCJcbiAqL1xuY29uc3QgcmV0cmllZFdhdGNoZXJzID0gbmV3IFNldCgpO1xuXG4vKipcbiAqIFJldHJ5IHNldHRpbmcgdXAgd2F0Y2hlcnMgZm9yIGZpZWxkcyB0aGF0IHdlcmUgd2FpdGluZyBmb3IgdGhpcyBzb3VyY2UgZmllbGQuXG4gKiBXaGVuIGEgc291cmNlIGZpZWxkIGFwcGVhcnMgKGZyb20gQ29uZGl0aW9uYWwgQmxvY2spLCBkZXBlbmRlbnQgZmllbGRzIG5lZWQgdG8gcmUtaW5pdGlhbGl6ZSB0aGVpciB3YXRjaGVycy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICBzb3VyY2VGaWVsZE5hbWUgRmllbGQgbmFtZSB0aGF0IGp1c3QgYXBwZWFyZWQuXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBmb3JtTm9kZSAgICAgICAgRm9ybSBlbGVtZW50LlxuICovXG5mdW5jdGlvbiByZXRyeUZhaWxlZFdhdGNoZXJzKCBzb3VyY2VGaWVsZE5hbWUsIGZvcm1Ob2RlICkge1xuXHRjb25zdCB3YXRjaGVyID0gZ2V0V2F0Y2hlcigpO1xuXG5cdC8vIEdldCBhbGwgYXV0by11cGRhdGUgZmllbGRzXG5cdHdhdGNoZXIuYXV0b1VwZGF0ZUZpZWxkcy5mb3JFYWNoKCAoIGZpZWxkRGF0YSwgdGFyZ2V0RmllbGROYW1lICkgPT4ge1xuXHRcdGNvbnN0IHsgY29uZmlnIH0gPSBmaWVsZERhdGE7XG5cblx0XHQvLyBDaGVjayBpZiB0aGlzIGZpZWxkIGxpc3RlbnMgdG8gdGhlIHNvdXJjZSBmaWVsZCB0aGF0IGp1c3QgYXBwZWFyZWRcblx0XHQvLyBjb25maWcubGlzdGVuVG8gaXMgbm93IGFuIGFycmF5XG5cdFx0aWYgKCBjb25maWcubGlzdGVuVG8gJiYgQXJyYXkuaXNBcnJheSggY29uZmlnLmxpc3RlblRvICkgJiYgY29uZmlnLmxpc3RlblRvLmluY2x1ZGVzKCBzb3VyY2VGaWVsZE5hbWUgKSApIHtcblx0XHRcdC8vIENyZWF0ZSB1bmlxdWUga2V5IGZvciB0aGlzIHdhdGNoZXIgcGFpclxuXHRcdFx0Y29uc3Qgd2F0Y2hlcktleSA9IGAkeyBzb3VyY2VGaWVsZE5hbWUgfTokeyB0YXJnZXRGaWVsZE5hbWUgfWA7XG5cblx0XHRcdC8vIFNraXAgaWYgd2UgYWxyZWFkeSByZXRyaWVkIHRoaXMgd2F0Y2hlclxuXHRcdFx0aWYgKCByZXRyaWVkV2F0Y2hlcnMuaGFzKCB3YXRjaGVyS2V5ICkgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gTWFyayBhcyByZXRyaWVkXG5cdFx0XHRyZXRyaWVkV2F0Y2hlcnMuYWRkKCB3YXRjaGVyS2V5ICk7XG5cblx0XHRcdGNvbnNvbGUubG9nKCBgW0pGQiBBdXRvLVVwZGF0ZV0gUmV0cnlpbmcgd2F0Y2hlciBmb3IgZmllbGQgXCIkeyB0YXJnZXRGaWVsZE5hbWUgfVwiIChzb3VyY2UgXCIkeyBzb3VyY2VGaWVsZE5hbWUgfVwiIGFwcGVhcmVkKWAgKTtcblxuXHRcdFx0Ly8gUmUtaW5pdGlhbGl6ZSB0aGUgd2F0Y2hlciBmb3IgdGhpcyBmaWVsZFxuXHRcdFx0d2F0Y2hlci53YXRjaEZpZWxkKCBzb3VyY2VGaWVsZE5hbWUsIHRhcmdldEZpZWxkTmFtZSwgZm9ybU5vZGUgKTtcblxuXHRcdFx0Ly8gVHJpZ2dlciB1cGRhdGUgaWYgQUxMIHNvdXJjZSBmaWVsZHMgaGF2ZSB2YWx1ZXNcblx0XHRcdGlmICggYWxsU291cmNlRmllbGRzSGF2ZVZhbHVlcyggY29uZmlnLmxpc3RlblRvLCBmb3JtTm9kZSApICkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyggYFtKRkIgQXV0by1VcGRhdGVdIEFsbCBzb3VyY2UgZmllbGRzIGhhdmUgdmFsdWVzLCB0cmlnZ2VyaW5nIHVwZGF0ZSBmb3IgXCIkeyB0YXJnZXRGaWVsZE5hbWUgfVwiYCApO1xuXHRcdFx0XHR3YXRjaGVyLnVwZGF0ZUZpZWxkKCB0YXJnZXRGaWVsZE5hbWUsIGZvcm1Ob2RlICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9ICk7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYWxsIHNvdXJjZSBmaWVsZHMgaGF2ZSB2YWx1ZXMuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gICAgICAgc291cmNlRmllbGROYW1lcyBBcnJheSBvZiBzb3VyY2UgZmllbGQgbmFtZXMuXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBmb3JtTm9kZSAgICAgICAgIEZvcm0gZWxlbWVudC5cbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGFsbCBmaWVsZHMgaGF2ZSB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIGFsbFNvdXJjZUZpZWxkc0hhdmVWYWx1ZXMoIHNvdXJjZUZpZWxkTmFtZXMsIGZvcm1Ob2RlICkge1xuXHRyZXR1cm4gc291cmNlRmllbGROYW1lcy5ldmVyeSggKCBmaWVsZE5hbWUgKSA9PiB7XG5cdFx0Y29uc3QgZmllbGQgPSBmb3JtTm9kZS5xdWVyeVNlbGVjdG9yKCBgW2RhdGEtZmllbGQtbmFtZT1cIiR7IGZpZWxkTmFtZSB9XCJdYCApIHx8XG5cdFx0ICAgICAgICAgICAgIGZvcm1Ob2RlLnF1ZXJ5U2VsZWN0b3IoIGBbbmFtZT1cIiR7IGZpZWxkTmFtZSB9XCJdYCApO1xuXHRcdHJldHVybiBmaWVsZCAmJiBmaWVsZC52YWx1ZTtcblx0fSApO1xufVxuXG4vKipcbiAqIFRyaWdnZXIgdXBkYXRlIGZvciBhIG5ld2x5IGFwcGVhcmVkIGZpZWxkLlxuICogSWYgdGhlIGZpZWxkIGxpc3RlbnMgdG8gYW5vdGhlciBmaWVsZCwgY2hlY2sgaWYgdGhhdCBmaWVsZCBoYXMgYSB2YWx1ZSBhbmQgdHJpZ2dlciB1cGRhdGUuXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZmllbGRFbGVtZW50IEZpZWxkIGVsZW1lbnQuXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBmb3JtTm9kZSAgICAgRm9ybSBlbGVtZW50LlxuICovXG5mdW5jdGlvbiB0cmlnZ2VyVXBkYXRlRm9yTmV3RmllbGQoIGZpZWxkRWxlbWVudCwgZm9ybU5vZGUgKSB7XG5cdGNvbnN0IGxpc3RlblRvID0gZmllbGRFbGVtZW50LmdldEF0dHJpYnV0ZSggJ2RhdGEtbGlzdGVuLXRvJyApO1xuXHRjb25zdCBpc011bHRpcGxlID0gZmllbGRFbGVtZW50Lmhhc0F0dHJpYnV0ZSggJ2RhdGEtbGlzdGVuLXRvLW11bHRpcGxlJyApO1xuXG5cdGlmICggISBsaXN0ZW5UbyApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBQYXJzZSBsaXN0ZW5fdG8gKGNhbiBiZSBzdHJpbmcgb3IgSlNPTiBhcnJheSlcblx0bGV0IHNvdXJjZUZpZWxkTmFtZXM7XG5cdGlmICggaXNNdWx0aXBsZSApIHtcblx0XHR0cnkge1xuXHRcdFx0c291cmNlRmllbGROYW1lcyA9IEpTT04ucGFyc2UoIGxpc3RlblRvICk7XG5cdFx0fSBjYXRjaCAoIGUgKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKCAnW0pGQiBBdXRvLVVwZGF0ZV0gRmFpbGVkIHRvIHBhcnNlIGxpc3Rlbl90bzonLCBlICk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHNvdXJjZUZpZWxkTmFtZXMgPSBbIGxpc3RlblRvIF07XG5cdH1cblxuXHQvLyBDaGVjayBpZiBBTEwgc291cmNlIGZpZWxkcyBoYXZlIHZhbHVlc1xuXHRjb25zdCBhbGxIYXZlVmFsdWVzID0gc291cmNlRmllbGROYW1lcy5ldmVyeSggKCBmaWVsZE5hbWUgKSA9PiB7XG5cdFx0Y29uc3Qgc291cmNlRmllbGQgPSBmb3JtTm9kZS5xdWVyeVNlbGVjdG9yKCBgW2RhdGEtZmllbGQtbmFtZT1cIiR7IGZpZWxkTmFtZSB9XCJdYCApIHx8XG5cdFx0ICAgICAgICAgICAgICAgICAgIGZvcm1Ob2RlLnF1ZXJ5U2VsZWN0b3IoIGBbbmFtZT1cIiR7IGZpZWxkTmFtZSB9XCJdYCApO1xuXHRcdHJldHVybiBzb3VyY2VGaWVsZCAmJiBzb3VyY2VGaWVsZC52YWx1ZTtcblx0fSApO1xuXG5cdGlmICggISBhbGxIYXZlVmFsdWVzICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGZpZWxkTmFtZSA9IGZpZWxkRWxlbWVudC5nZXRBdHRyaWJ1dGUoICdkYXRhLWZpZWxkLW5hbWUnICk7XG5cdGNvbnNvbGUubG9nKCBgW0pGQiBBdXRvLVVwZGF0ZV0gVHJpZ2dlcmluZyB1cGRhdGUgZm9yIG5ld2x5IGFwcGVhcmVkIGZpZWxkOiAkeyBmaWVsZE5hbWUgfWAgKTtcblxuXHQvLyBHZXQgd2F0Y2hlciBhbmQgdHJpZ2dlciB1cGRhdGUgbWFudWFsbHlcblx0Y29uc3Qgd2F0Y2hlciA9IGdldFdhdGNoZXIoKTtcblxuXHQvLyBUcmlnZ2VyIHVwZGF0ZSBpbW1lZGlhdGVseSAobm8gZGVib3VuY2UgZm9yIGluaXRpYWwgYXBwZWFyYW5jZSlcblx0Ly8gVXNlIHRoZSBmaWVsZCBuYW1lLCBub3QgY29uZmlnIG9iamVjdFxuXHR3YXRjaGVyLnVwZGF0ZUZpZWxkKCBmaWVsZE5hbWUsIGZvcm1Ob2RlICk7XG59XG5cbi8qKlxuICogSG9vayBpbnRvIEpldEZvcm1CdWlsZGVyJ3MgZm9ybSBpbml0aWFsaXphdGlvbi5cbiAqL1xuZnVuY3Rpb24gaG9va0ludG9KZXRGb3JtQnVpbGRlcigpIHtcblx0Ly8gV2FpdCBmb3IgSmV0Rm9ybUJ1aWxkZXJNYWluIHRvIGJlIGF2YWlsYWJsZVxuXHRpZiAoIHR5cGVvZiB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJNYWluID09PSAndW5kZWZpbmVkJyApIHtcblx0XHRjb25zb2xlLndhcm4oICdbSkZCIEF1dG8tVXBkYXRlXSBKZXRGb3JtQnVpbGRlck1haW4gbm90IGF2YWlsYWJsZSwgcmV0cnlpbmcuLi4nICk7XG5cblx0XHQvLyBSZXRyeSBhZnRlciBhIHNob3J0IGRlbGF5XG5cdFx0c2V0VGltZW91dCggaG9va0ludG9KZXRGb3JtQnVpbGRlciwgMTAwICk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gSG9vayBpbnRvIGZvcm0gaW5pdCBldmVudFxuXHQvLyBKZXRGb3JtQnVpbGRlciB0cmlnZ2VycyB0aGlzIHdoZW4gZm9ybSBpcyByZWFkeVxuXHRqUXVlcnkoIGRvY3VtZW50ICkub24oICdqZXQtZm9ybS1idWlsZGVyL2luaXQnLCAoIGV2ZW50LCBmb3JtTm9kZSApID0+IHtcblx0XHQvLyBEZWxheSBpbml0aWFsaXphdGlvbiB0byBlbnN1cmUgYWxsIGlucHV0cyBhcmUgcmVnaXN0ZXJlZFxuXHRcdHNldFRpbWVvdXQoICgpID0+IHtcblx0XHRcdGluaXRBdXRvVXBkYXRlKCBmb3JtTm9kZSApO1xuXG5cdFx0XHQvLyBTZXQgdXAgb2JzZXJ2ZXIgZm9yIGR5bmFtaWMgZmllbGRzIChDb25kaXRpb25hbCBCbG9ja3MpXG5cdFx0XHRvYnNlcnZlRHluYW1pY0ZpZWxkcyggZm9ybU5vZGUgKTtcblx0XHR9LCAxMDAgKTtcblx0fSApO1xuXG5cdC8vIEFsc28gaW5pdCBmb3IgYW55IGFscmVhZHktcmVuZGVyZWQgZm9ybXNcblx0Y29uc3QgZXhpc3RpbmdGb3JtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICcuamV0LWZvcm0tYnVpbGRlcicgKTtcblx0ZXhpc3RpbmdGb3Jtcy5mb3JFYWNoKCAoIGZvcm1Ob2RlICkgPT4ge1xuXHRcdC8vIERlbGF5IGluaXRpYWxpemF0aW9uIHRvIGVuc3VyZSBhbGwgaW5wdXRzIGFyZSByZWdpc3RlcmVkXG5cdFx0c2V0VGltZW91dCggKCkgPT4ge1xuXHRcdFx0aW5pdEF1dG9VcGRhdGUoIGZvcm1Ob2RlICk7XG5cblx0XHRcdC8vIFNldCB1cCBvYnNlcnZlciBmb3IgZHluYW1pYyBmaWVsZHMgKENvbmRpdGlvbmFsIEJsb2Nrcylcblx0XHRcdG9ic2VydmVEeW5hbWljRmllbGRzKCBmb3JtTm9kZSApO1xuXHRcdH0sIDEwMCApO1xuXHR9ICk7XG5cblx0Y29uc29sZS5sb2coICdbSkZCIEF1dG8tVXBkYXRlXSBJbml0aWFsaXphdGlvbiBjb21wbGV0ZScgKTtcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplIG9uIERPTSByZWFkeS5cbiAqL1xuaWYgKCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGluZycgKSB7XG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdET01Db250ZW50TG9hZGVkJywgaG9va0ludG9KZXRGb3JtQnVpbGRlciApO1xufSBlbHNlIHtcblx0aG9va0ludG9KZXRGb3JtQnVpbGRlcigpO1xufVxuXG4vKipcbiAqIEV4cG9zZSBBUEkgZm9yIGV4dGVybmFsIHVzZS5cbiAqL1xud2luZG93LkpGQkF1dG9VcGRhdGUgPSB7XG5cdGdldFdhdGNoZXIsXG5cdGluaXRBdXRvVXBkYXRlLFxufTtcblxuZXhwb3J0IHsgZ2V0V2F0Y2hlciwgaW5pdEF1dG9VcGRhdGUgfTtcbmV4cG9ydCBkZWZhdWx0IHsgZ2V0V2F0Y2hlciwgaW5pdEF1dG9VcGRhdGUgfTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImNvbnN0IHtcblx0ICAgICAgSW5wdXREYXRhLFxuXHQgICAgICBSZWFjdGl2ZUhvb2ssXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcblxuZnVuY3Rpb24gTXVsdGlTZWxlY3REYXRhKCkge1xuXHRJbnB1dERhdGEuY2FsbCggdGhpcyApO1xuXG5cdGZ1bmN0aW9uIHNhbml0aXplVmFsdWUoIHZhbHVlICkge1xuXHRcdGlmICggQXJyYXkuaXNBcnJheSggdmFsdWUgKSApIHtcblxuXHRcdFx0aWYgKCB2YWx1ZS5sZW5ndGggPT09IDEgJiYgdmFsdWVbMF0gJiYgdmFsdWVbMF0uaW5jbHVkZXMoJywnKSApIHtcblx0XHRcdFx0dmFsdWUgPSB2YWx1ZVswXS5zcGxpdCgnLCcpXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFsgdmFsdWUgXS5maWx0ZXIoXG5cdFx0XHRCb29sZWFuLFxuXHRcdCk7XG5cdH1cblxuXHR0aGlzLmlzU3VwcG9ydGVkICAgID0gZnVuY3Rpb24gKCBub2RlICkge1xuXHRcdHJldHVybiAnc2VsZWN0LW11bHRpcGxlJyA9PT0gbm9kZT8udHlwZTtcblx0fTtcblx0dGhpcy5hZGRMaXN0ZW5lcnMgICA9IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLnNhbml0aXplKCB2YWx1ZSA9PiBBcnJheS5pc0FycmF5KCB2YWx1ZSApID8gdmFsdWUgOiBbIHZhbHVlIF0gKTtcblxuXHRcdC8qKlxuXHRcdCAqIGNvbnZlcnQgc3RyaW5nIHRvIGFycmF5IGZvciBzZXR0aW5nIGR5bmFtaWMgbXVsdGkgdmFsdWVcblx0XHQgKlxuXHRcdCAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL0Nyb2NvYmxvY2svaXNzdWVzLXRyYWNrZXIvaXNzdWVzLzg1MDlcblx0XHQgKi9cblx0XHR0aGlzLnNhbml0aXplKCBzYW5pdGl6ZVZhbHVlICk7XG5cblx0XHRjb25zdCBbIG5vZGUgXSA9IHRoaXMubm9kZXM7XG5cblx0XHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoICdjaGFuZ2UnLCAoKSA9PiB0aGlzLnNldFZhbHVlKCkgKTtcblx0XHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoICdibHVyJywgKCkgPT4gdGhpcy5yZXBvcnRPbkJsdXIoKSApO1xuXG5cdFx0dGhpcy5lbnRlcktleSA9IG5ldyBSZWFjdGl2ZUhvb2soKTtcblx0XHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgdGhpcy5oYW5kbGVFbnRlcktleS5iaW5kKCB0aGlzICkgKTtcblx0fTtcblx0dGhpcy5zZXRWYWx1ZSAgICAgICA9IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLnZhbHVlLmN1cnJlbnQgPSB0aGlzLmdldEFjdGl2ZVZhbHVlKCk7XG5cdH07XG5cdHRoaXMuZ2V0QWN0aXZlVmFsdWUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgWyBub2RlIF0gPSB0aGlzLm5vZGVzO1xuXG5cdFx0cmV0dXJuIEFycmF5LmZyb20oIG5vZGUub3B0aW9ucyApLlxuXHRcdFx0ZmlsdGVyKCBpdGVtID0+IGl0ZW0uc2VsZWN0ZWQgKS5cblx0XHRcdG1hcCggaXRlbSA9PiBpdGVtLnZhbHVlICk7XG5cdH07XG5cblx0dGhpcy5vbkNsZWFyID0gZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMuc2lsZW5jZVNldCggW10gKTtcblx0fTtcbn1cblxuTXVsdGlTZWxlY3REYXRhLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIElucHV0RGF0YS5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgTXVsdGlTZWxlY3REYXRhOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImNvbnN0IHtcblx0ICAgICAgQmFzZVNpZ25hbCxcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckFic3RyYWN0O1xuXG5mdW5jdGlvbiBTaWduYWxTZWxlY3QoKSB7XG5cdEJhc2VTaWduYWwuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUsIGlucHV0RGF0YSApIHtcblx0XHRyZXR1cm4gWyAnc2VsZWN0LW11bHRpcGxlJywgJ3NlbGVjdC1vbmUnIF0uaW5jbHVkZXMoIG5vZGU/LnR5cGUgKTtcblx0fTtcblx0dGhpcy5ydW5TaWduYWwgICA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBbIG5vZGUgXSAgID0gdGhpcy5pbnB1dC5ub2Rlcztcblx0XHRjb25zdCBpc011bHRpcGxlID0gJ3NlbGVjdC1vbmUnICE9PSBub2RlPy50eXBlO1xuXHRcdGNvbnN0IHsgdmFsdWUgfSAgPSB0aGlzLmlucHV0O1xuXG5cdFx0Zm9yICggY29uc3Qgb3B0aW9uIG9mIG5vZGUub3B0aW9ucyApIHtcblx0XHRcdG9wdGlvbi5zZWxlY3RlZCA9IGlzTXVsdGlwbGVcblx0XHRcdCAgICAgICAgICAgICAgICAgID8gdmFsdWUuY3VycmVudD8uaW5jbHVkZXMoIG9wdGlvbi52YWx1ZSApXG5cdFx0XHQgICAgICAgICAgICAgICAgICA6IG9wdGlvbi52YWx1ZSA9PT0gdmFsdWUuY3VycmVudDtcblxuXHRcdFx0aWYgKCAhb3B0aW9uLnNlbGVjdGVkICkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5pbnB1dC5jYWxjVmFsdWUgPSAwO1xuXG5cdFx0XHR0aGlzLmlucHV0LmNhbGNWYWx1ZSArPSBwYXJzZUZsb2F0KFxuXHRcdFx0XHRvcHRpb24uZGF0YXNldD8uY2FsY3VsYXRlID8/IG9wdGlvbi52YWx1ZSxcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0dGhpcy50cmlnZ2VySlF1ZXJ5KCBub2RlICk7XG5cdH07XG59XG5cblNpZ25hbFNlbGVjdC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlU2lnbmFsLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBTaWduYWxTZWxlY3Q7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgTXVsdGlTZWxlY3REYXRhIGZyb20gJy4vaW5wdXQnO1xuaW1wb3J0IFNpZ25hbFNlbGVjdCBmcm9tICcuL3NpZ25hbCc7XG5pbXBvcnQgJy4vbWFpbi5wY3NzJztcblxuLy8gSW1wb3J0IGF1dG8tdXBkYXRlIGZlYXR1cmVcbmltcG9ydCAnLi4vLi4vYXV0by11cGRhdGUnO1xuXG5jb25zdCB7IGFkZEZpbHRlciB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxud2luZG93LkpldEZvcm1CdWlsZGVyQWJzdHJhY3QgPSB7XG5cdC4uLndpbmRvdy5KZXRGb3JtQnVpbGRlckFic3RyYWN0LFxuXHRNdWx0aVNlbGVjdERhdGEsXG5cdFNpZ25hbFNlbGVjdCxcbn07XG5cbmFkZEZpbHRlcihcblx0J2pldC5mYi5pbnB1dHMnLFxuXHQnamV0LWZvcm0tYnVpbGRlci9zZWxlY3QtZmllbGQnLFxuXHRmdW5jdGlvbiAoIGlucHV0cyApIHtcblx0XHRpbnB1dHMgPSBbIE11bHRpU2VsZWN0RGF0YSwgLi4uaW5wdXRzIF07XG5cblx0XHRyZXR1cm4gaW5wdXRzO1xuXHR9LFxuKTtcblxuYWRkRmlsdGVyKFxuXHQnamV0LmZiLnNpZ25hbHMnLFxuXHQnamV0LWZvcm0tYnVpbGRlci9zZWxlY3QtZmllbGQnLFxuXHRmdW5jdGlvbiAoIHNpZ25hbHMgKSB7XG5cdFx0c2lnbmFscyA9IFsgU2lnbmFsU2VsZWN0LCAuLi5zaWduYWxzIF07XG5cblx0XHRyZXR1cm4gc2lnbmFscztcblx0fSxcbik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9