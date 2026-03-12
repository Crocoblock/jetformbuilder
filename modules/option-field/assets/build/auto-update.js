/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/auto-update/CacheManager.js":
/*!**********************************************!*\
  !*** ./frontend/auto-update/CacheManager.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

class CacheManager {
  constructor() {
    /** @type {Map<string, {options: Array, timestamp: number}>} */
    this.cache = new Map();

    /** @type {number} default TTL in seconds; 0 = disabled */
    this.defaultTimeout = 60;
  }

  /**
   * Generate cache key from generator ID, field name, and context.
   *
   * Field name is included so that two different fields using the same
   * generator and the same context don't share cached responses
   * (they may have different block_attrs, e.g. custom_item_template).
   *
   * @param {string} generatorId Generator identifier.
   * @param {Object} context     Context object with field values.
   * @param {string} fieldName   Target field name.
   *
   * @return {string} Cache key.
   */
  generateKey(generatorId, context, fieldName = '') {
    const sortedContext = Object.keys(context).sort().reduce((acc, key) => {
      acc[key] = context[key];
      return acc;
    }, {});
    return `${generatorId}:${fieldName}:${JSON.stringify(sortedContext)}`;
  }

  /**
   * Check if cached data exists and is still valid.
   *
   * @param {string} generatorId  Generator identifier.
   * @param {Object} context      Context object with field values.
   * @param {number} cacheTimeout Cache timeout in seconds (0=disabled, -1=permanent, N=seconds).
   * @param {string} fieldName    Target field name.
   *
   * @return {boolean} True if valid cache exists.
   */
  has(generatorId, context, cacheTimeout = this.defaultTimeout, fieldName = '') {
    // Cache disabled
    if (cacheTimeout === 0) {
      return false;
    }
    const key = this.generateKey(generatorId, context, fieldName);
    const cached = this.cache.get(key);
    if (!cached) {
      return false;
    }
    const age = (Date.now() - cached.timestamp) / 1000;
    if (age > cacheTimeout) {
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
   * @param {string} fieldName    Target field name.
   *
   * @return {Array|null} Cached options or null if not found/expired.
   */
  get(generatorId, context, cacheTimeout = this.defaultTimeout, fieldName = '') {
    if (!this.has(generatorId, context, cacheTimeout, fieldName)) {
      return null;
    }
    const key = this.generateKey(generatorId, context, fieldName);
    const cached = this.cache.get(key);
    return cached ? cached.options : null;
  }

  /**
   * Store options in cache.
   *
   * @param {string} generatorId Generator identifier.
   * @param {Object} context     Context object with field values.
   * @param {Array}  options     Generated options to cache.
   * @param {string} fieldName   Target field name.
   */
  set(generatorId, context, options, fieldName = '') {
    const key = this.generateKey(generatorId, context, fieldName);
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
   * @param {string} fieldName   Target field name.
   */
  clear(generatorId, context, fieldName = '') {
    const key = this.generateKey(generatorId, context, fieldName);
    this.cache.delete(key);
  }

  /**
   * Clear all cache entries for a specific field name.
   * Used when the field should show no options (e.g. requireAllFilled not met).
   *
   * @param {string} fieldName Target field name.
   */
  clearByField(fieldName) {
    const prefix = `:${fieldName}:`;
    this.cache.forEach((_value, key) => {
      if (key.includes(prefix)) {
        this.cache.delete(key);
      }
    });
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
      if ((now - value.timestamp) / 1000 > maxAge) {
        keysToDelete.push(key);
      }
    });
    keysToDelete.forEach(key => this.cache.delete(key));
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

"use strict";
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



class FieldWatcher {
  constructor() {
    this.cacheManager = new _CacheManager__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.optionsUpdater = new _OptionsUpdater__WEBPACK_IMPORTED_MODULE_1__["default"]();

    /** @type {Map<string, {unwatch: Function, dependents: string[]}>} */
    this.watchers = new Map();

    /** @type {Map<string, {element: HTMLElement, config: Object}>} */
    this.autoUpdateFields = new Map();

    /** @type {Map<string, AbortController>} */
    this.abortControllers = new Map();

    /** @type {Map<string, number>} debounce timer IDs */
    this.debounceTimers = new Map();

    /** @type {Map<string, {element: HTMLElement, handler: Function}>} */
    this.buttonListeners = new Map();
    this.debounceDelay = 300;

    /**
     * Reference counter per form: lockState.end() fires only when all
     * in-flight requests for that form finish.
     *
     * @type {Map<string, number>}
     */
    this.loadingCounts = new Map();
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
   * Build a unique field key for the autoUpdateFields map.
   *
   * For fields inside a repeater row a scoped key is built so that row 0
   * and row 1 do not overwrite each other even though both share the same
   * data-field-name attribute.
   *
   * @param {string}      fieldName   Base field name from data-field-name.
   * @param {HTMLElement} fieldElement The field element.
   *
   * @return {string} Unique field key.
   */
  buildFieldKey(fieldName, fieldElement) {
    const repeaterRow = fieldElement.closest('.jet-form-builder-repeater__row');
    return this.buildWatcherKey(fieldName, repeaterRow);
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
    const fieldKey = this.buildFieldKey(config.fieldName, fieldElement);

    // Prevent double-init: MutationObserver with subtree:true can fire
    // multiple callbacks for one repeater row insertion.
    const alreadyInitialized = fieldElement.hasAttribute('data-jfb-au-init');
    fieldElement.setAttribute('data-jfb-au-init', '1');
    config.fieldKey = fieldKey;
    this.autoUpdateFields.set(fieldKey, {
      element: fieldElement,
      config
    });
    if (config.updateOnButton) {
      this.watchButton(config.updateOnButton, fieldKey, formNode);
    }
    if (config.listenTo && Array.isArray(config.listenTo)) {
      config.listenTo.forEach(sourceFieldName => {
        this.watchField(sourceFieldName, fieldKey, formNode);
      });
    }

    // Auto-trigger initial update only when no button is configured.
    // With a button, the user controls when to fetch — no automatic update.
    // With requireAllFilled, skip if any listenTo field is empty.
    if (!alreadyInitialized && !config.updateOnButton && config.listenTo) {
      if (config.requireAllFilled) {
        const context = this.collectContext(config, formNode);
        const allFilled = config.listenTo.every(fieldName => {
          const val = context[fieldName];
          return val !== undefined && val !== null && val !== '';
        });
        if (allFilled) {
          this.debouncedUpdate(fieldKey, formNode);
        }
      } else {
        this.debouncedUpdate(fieldKey, formNode);
      }
    }
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
    let listenTo = fieldElement.dataset.listenTo || null;
    if (listenTo) {
      if (fieldElement.dataset.listenToMultiple === '1') {
        listenTo = this.parseJSON(listenTo);
        if (!Array.isArray(listenTo)) {
          listenTo = null;
        }
      } else {
        listenTo = [listenTo];
      }
    }
    return {
      generatorId,
      fieldName,
      listenTo,
      requireAllFilled: fieldElement.dataset.requireAllFilled === '1',
      updateOnButton: fieldElement.dataset.updateOnButton || null,
      cacheTimeout: parseInt(fieldElement.dataset.cacheTimeout) || 60,
      formId: parseInt(fieldElement.dataset.formId) || 0
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
      return null;
    }
  }

  /**
   * Create input wrapper from DOM element.
   * Fallback method when JetFormBuilder API doesn't work.
   *
   * @param {string}           fieldName    Field name to find.
   * @param {HTMLElement}      formNode     Form element.
   * @param {HTMLElement|null} knownElement Pre-found element (skips DOM search).
   *
   * @return {Object|null} Input wrapper object or null if not found.
   */
  createInputWrapperFromDOM(fieldName, formNode, knownElement = null) {
    let fieldElement = knownElement;
    if (!fieldElement) {
      fieldElement = formNode.querySelector(`[data-field-name="${fieldName}"]`);
    }
    if (!fieldElement) {
      fieldElement = formNode.querySelector(`[name="${fieldName}"]`);
    }
    if (!fieldElement) {
      return null;
    }
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
    return wrapper;
  }

  /**
   * Find an input element within a scope, then fall back to the full form.
   *
   * For repeater fields, the scope is the repeater row element so that
   * source fields are resolved within the same row before searching globally.
   *
   * @param {string}           fieldName   Field to find.
   * @param {HTMLElement|null} scopeElement Scope to search first (e.g. repeater row).
   * @param {HTMLElement}      formNode    Form element for global fallback.
   *
   * @return {HTMLElement|null} Found element or null.
   */
  findElementInScope(fieldName, scopeElement, formNode) {
    const roots = scopeElement ? [scopeElement, formNode] : [formNode];
    for (const root of roots) {
      let el = root.querySelector(`[data-field-name="${fieldName}"]`) || root.querySelector(`[name*="[${fieldName}]"]`);
      if (el) {
        return el;
      }
    }
    return null;
  }

  /**
   * Build a unique watcher key that includes repeater row context.
   *
   * When two rows both contain a field named "category", they must have
   * separate watchers so changes in one row don't fire updates in the other.
   *
   * @param {string}           sourceFieldName Source field name.
   * @param {HTMLElement|null} repeaterRow     Repeater row element, if any.
   *
   * @return {string} Unique watcher key.
   */
  buildWatcherKey(sourceFieldName, repeaterRow) {
    if (!repeaterRow) {
      return sourceFieldName;
    }

    // Use the repeater row's index in its parent as a stable identifier
    const parent = repeaterRow.parentElement;
    const index = parent ? Array.from(parent.children).indexOf(repeaterRow) : 0;
    const repeaterName = repeaterRow.closest('[data-repeater="1"]')?.dataset?.fieldName || 'repeater';
    return `${repeaterName}[${index}].${sourceFieldName}`;
  }

  /**
   * Watch a specific field for changes.
   *
   * When the target field lives inside a repeater row, the source field is
   * first searched within that same row. If not found there, search falls
   * back to the full form (supports global-field → repeater-field patterns).
   *
   * @param {string}      sourceFieldName Field name to watch.
   * @param {string}      targetFieldName Field name to update.
   * @param {HTMLElement} formNode        Form element.
   */
  watchField(sourceFieldName, targetFieldName, formNode) {
    const fieldData = this.autoUpdateFields.get(targetFieldName);
    const targetElement = fieldData?.element || null;
    const repeaterRow = targetElement ? targetElement.closest('.jet-form-builder-repeater__row') : null;
    const sourceElement = this.findElementInScope(sourceFieldName, repeaterRow, formNode);
    let sourceInput = null;
    if (sourceElement && window.JetFormBuilderMain?.inputData) {
      const actualName = sourceElement.getAttribute('name') || sourceFieldName;
      if (window.JetFormBuilderMain.inputData.findInput) {
        sourceInput = window.JetFormBuilderMain.inputData.findInput(actualName, formNode) || window.JetFormBuilderMain.inputData.findInput(sourceFieldName, formNode);
      }
      if (!sourceInput && window.JetFormBuilderMain.inputData.getInput) {
        sourceInput = window.JetFormBuilderMain.inputData.getInput(actualName, formNode) || window.JetFormBuilderMain.inputData.getInput(sourceFieldName, formNode);
      }
      if (!sourceInput && window.JetFormBuilderMain.inputData.getAll) {
        const allInputs = window.JetFormBuilderMain.inputData.getAll(formNode);
        if (allInputs) {
          sourceInput = allInputs.find(input => input.name === actualName) || allInputs.find(input => input.name === sourceFieldName);
        }
      }
    } else if (!sourceElement) {
      if (window.JetFormBuilderMain?.inputData?.findInput) {
        sourceInput = window.JetFormBuilderMain.inputData.findInput(sourceFieldName, formNode);
      }
      if (!sourceInput && window.JetFormBuilderMain?.inputData?.getInput) {
        sourceInput = window.JetFormBuilderMain.inputData.getInput(sourceFieldName, formNode);
      }
      if (!sourceInput && window.JetFormBuilderMain?.inputData?.getAll) {
        const allInputs = window.JetFormBuilderMain.inputData.getAll(formNode);
        if (allInputs) {
          sourceInput = allInputs.find(input => input.name === sourceFieldName);
        }
      }
    }
    if (!sourceInput) {
      const el = sourceElement || this.findElementInScope(sourceFieldName, null, formNode);
      if (el) {
        sourceInput = this.createInputWrapperFromDOM(el.getAttribute('name') || sourceFieldName, formNode, el);
      }
    }
    if (!sourceInput) {
      console.warn(`[JFB Auto-Update] Source field not found: ${sourceFieldName}`);
      return;
    }
    const watcherKey = this.buildWatcherKey(sourceFieldName, repeaterRow);
    let watcher = this.watchers.get(watcherKey);
    if (!watcher) {
      const unwatch = sourceInput.value.watch(() => {
        this.handleFieldChange(watcherKey, formNode);
      });
      watcher = {
        unwatch,
        dependents: []
      };
      this.watchers.set(watcherKey, watcher);
    }
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
    const allInputs = (_window$JetFormBuilde = window.JetFormBuilderMain?.inputData?.getAll(formNode)) !== null && _window$JetFormBuilde !== void 0 ? _window$JetFormBuilde : [];
    allInputs.forEach(input => {
      const fieldName = input.name;
      if (fieldName === targetFieldName) {
        return;
      }
      this.watchField(fieldName, targetFieldName, formNode);
    });
  }

  /**
   * Watch an action button for clicks to trigger an update.
   *
   * Action buttons (jet-forms/submit-field) are identified by their action_type,
   * which is rendered as data-type on the wrapper div. The <button> element
   * itself is found inside that wrapper.
   *
   * @param {string}      actionType     Value of action_type (e.g. "next", "prev").
   * @param {string}      targetFieldKey Key of the field to update.
   * @param {HTMLElement} formNode       Form element.
   */
  watchButton(actionType, targetFieldKey, formNode) {
    const listenerKey = `${actionType}::${targetFieldKey}`;
    if (this.buttonListeners.has(listenerKey)) {
      return;
    }
    const wrapper = formNode.querySelector(`.jet-form-builder__action-button-wrapper[data-type="${actionType}"]`);
    const buttonElement = wrapper ? wrapper.querySelector('button') : null;
    if (!buttonElement) {
      console.warn(`[JFB Auto-Update] Action button not found for type: ${actionType}`);
      return;
    }
    let isProcessing = false;
    const handler = async event => {
      // Allow one synthetic click to pass through after options are refreshed.
      if (buttonElement.dataset.jfbAuBypassClick === '1') {
        delete buttonElement.dataset.jfbAuBypassClick;
        return;
      }

      // Drop repeated clicks while update is in flight.
      if (isProcessing) {
        event.preventDefault();
        return;
      }
      event.preventDefault();
      isProcessing = true;
      try {
        await this.updateField(targetFieldKey, formNode);
      } catch (error) {
        // Safety net: never block original button action because of bad config/state.
        console.warn('[JFB Auto-Update] Pre-button update failed, continuing action:', error);
      } finally {
        isProcessing = false;
        buttonElement.dataset.jfbAuBypassClick = '1';
        buttonElement.click();
      }
    };
    buttonElement.addEventListener('click', handler);
    this.buttonListeners.set(listenerKey, {
      element: buttonElement,
      handler
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
    watcher.dependents.forEach(targetFieldName => {
      const fieldData = this.autoUpdateFields.get(targetFieldName);
      const config = fieldData?.config;

      // Skip auto-update if this field uses a button trigger.
      if (config?.updateOnButton) {
        return;
      }

      // If "Require All Fields Filled" is on and any listenTo field is now
      // empty, clear the dependent field's options immediately.
      if (config?.requireAllFilled) {
        const context = this.collectContext(config, formNode);
        const allFilled = config.listenTo.every(fieldName => {
          const val = context[fieldName];
          return val !== undefined && val !== null && val !== '';
        });
        if (!allFilled) {
          this.abortPreviousRequest(targetFieldName);
          this.cacheManager.clearByField(config.fieldName);
          this.optionsUpdater.updateOptions(fieldData.element, [], formNode);
          return;
        }
      }
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
    clearTimeout(this.debounceTimers.get(targetFieldName));
    const timer = setTimeout(() => {
      this.updateField(targetFieldName, formNode);
      this.debounceTimers.delete(targetFieldName);
    }, this.debounceDelay);
    this.debounceTimers.set(targetFieldName, timer);
  }

  /**
   * Get JFB form's lockState reactive var.
   * Blocks multi-step page transitions while any generator update is pending.
   *
   * @param {HTMLElement} formNode Form element.
   * @return {Object|null} LoadingReactiveVar or null.
   */
  getLockState(formNode) {
    var _window$JetFormBuilde2;
    const formId = formNode?.dataset?.formId;
    if (!formId || !window.JetFormBuilder?.[formId]) {
      return null;
    }
    return (_window$JetFormBuilde2 = window.JetFormBuilder[formId]?.getSubmit?.()?.lockState) !== null && _window$JetFormBuilde2 !== void 0 ? _window$JetFormBuilde2 : null;
  }

  /**
   * Increment the loading counter for a form and lock if first request.
   *
   * @param {HTMLElement} formNode Form element.
   */
  lockFormLoading(formNode) {
    var _this$loadingCounts$g;
    const formId = formNode?.dataset?.formId;
    if (!formId) {
      return;
    }
    const count = ((_this$loadingCounts$g = this.loadingCounts.get(formId)) !== null && _this$loadingCounts$g !== void 0 ? _this$loadingCounts$g : 0) + 1;
    this.loadingCounts.set(formId, count);
    if (count === 1) {
      this.getLockState(formNode)?.start();
    }
  }

  /**
   * Decrement the loading counter for a form and unlock when all requests finish.
   *
   * @param {HTMLElement} formNode Form element.
   */
  unlockFormLoading(formNode) {
    var _this$loadingCounts$g2;
    const formId = formNode?.dataset?.formId;
    if (!formId) {
      return;
    }
    const count = Math.max(0, ((_this$loadingCounts$g2 = this.loadingCounts.get(formId)) !== null && _this$loadingCounts$g2 !== void 0 ? _this$loadingCounts$g2 : 0) - 1);
    this.loadingCounts.set(formId, count);
    if (count === 0) {
      this.getLockState(formNode)?.end();
    }
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
    const context = this.collectContext(config, formNode);
    const cachedOptions = this.cacheManager.get(config.generatorId, context, config.cacheTimeout, config.fieldName);
    if (cachedOptions) {
      this.optionsUpdater.updateOptions(element, cachedOptions, formNode);
      return;
    }
    this.abortPreviousRequest(targetFieldName);
    const abortController = new AbortController();
    this.abortControllers.set(targetFieldName, abortController);
    try {
      this.optionsUpdater.setLoadingState(element, true);
      this.lockFormLoading(formNode);
      const options = await this.fetchOptions(config, context, abortController.signal);
      this.cacheManager.set(config.generatorId, context, options, config.fieldName);
      this.optionsUpdater.updateOptions(element, options, formNode);
    } catch (error) {
      if (error.name !== 'AbortError') {
        console.error('[JFB Auto-Update] Update failed:', error);
        this.optionsUpdater.setErrorState(element, error.message);
      }
    } finally {
      this.optionsUpdater.setLoadingState(element, false);
      this.unlockFormLoading(formNode);
      this.abortControllers.delete(targetFieldName);
    }
  }

  /**
   * Collect context values from form fields.
   *
   * When the target field lives inside a repeater row, source fields are
   * resolved within the same row first so each row has its own context.
   *
   * @param {Object}      config   Field configuration.
   * @param {HTMLElement} formNode Form element.
   *
   * @return {Object} Context object with field values.
   */
  collectContext(config, formNode) {
    const context = {};
    const lookupKey = config.fieldKey || config.fieldName;
    const fieldData = this.autoUpdateFields.get(lookupKey);
    const targetElement = fieldData?.element || null;
    const repeaterRow = targetElement ? targetElement.closest('.jet-form-builder-repeater__row') : null;
    if (config.listenTo && Array.isArray(config.listenTo)) {
      config.listenTo.forEach(sourceFieldName => {
        const sourceElement = this.findElementInScope(sourceFieldName, repeaterRow, formNode);
        if (sourceElement) {
          const actualName = sourceElement.getAttribute('name') || sourceFieldName;
          let input = null;
          if (window.JetFormBuilderMain?.inputData) {
            input = window.JetFormBuilderMain.inputData.findInput?.(actualName, formNode) || window.JetFormBuilderMain.inputData.findInput?.(sourceFieldName, formNode) || window.JetFormBuilderMain.inputData.getInput?.(actualName, formNode) || window.JetFormBuilderMain.inputData.getInput?.(sourceFieldName, formNode);
            if (!input && window.JetFormBuilderMain.inputData.getAll) {
              const allInputs = window.JetFormBuilderMain.inputData.getAll(formNode) || [];
              input = allInputs.find(inp => inp.name === actualName) || allInputs.find(inp => inp.name === sourceFieldName);
            }
          }
          context[sourceFieldName] = input ? input.value.current : sourceElement.value || '';
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
    this.watchers.forEach(watcher => watcher.unwatch?.());
    this.debounceTimers.forEach(timer => clearTimeout(timer));
    this.abortControllers.forEach(controller => controller.abort());
    this.buttonListeners.forEach(({
      element,
      handler
    }) => element.removeEventListener('click', handler));
    this.watchers.clear();
    this.autoUpdateFields.clear();
    this.abortControllers.clear();
    this.debounceTimers.clear();
    this.buttonListeners.clear();
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

"use strict";
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
   * @param {HTMLElement}      fieldElement Field element (select/input container).
   * @param {Array}            options      New options array.
   * @param {HTMLElement|null} formNode     Form element (needed for re-initialization).
   */
  updateOptions(fieldElement, options, formNode = null) {
    const fieldType = this.getFieldType(fieldElement);
    switch (fieldType) {
      case 'select':
        this.updateSelectOptions(fieldElement, options);
        break;
      case 'checkbox':
      case 'radio':
        this.updateChoiceOptions(fieldElement, options, fieldType, formNode);
        break;
      default:
        console.warn('[JFB Auto-Update] Unsupported field type:', fieldType);
    }
  }

  /**
   * Get field type from element.
   *
   * Reads data-field-type first (injected server-side), so detection works
   * even when the container is empty (no options rendered yet).
   *
   * @param {HTMLElement} fieldElement Field element.
   *
   * @return {string} Field type (select/checkbox/radio).
   */
  getFieldType(fieldElement) {
    if (fieldElement.tagName === 'SELECT') {
      return 'select';
    }
    const dataType = fieldElement.dataset.fieldType;
    if (dataType) {
      if (dataType === 'checkbox-field') {
        return 'checkbox';
      }
      if (dataType === 'radio-field') {
        return 'radio';
      }
      if (dataType === 'select-field') {
        return 'select';
      }
    }
    const firstInput = fieldElement.querySelector('input[type="checkbox"], input[type="radio"]');
    if (firstInput) {
      return firstInput.type;
    }
    return 'unknown';
  }

  /**
   * Update select field options.
   *
   * For Select2 autocomplete fields, we skip DOM rebuild and instead
   * clear the current selection so that Select2 AJAX fires fresh
   * (with updated context from autocomplete-bridge.js).
   *
   * @param {HTMLSelectElement} selectElement Select element.
   * @param {Array}             options       New options array.
   */
  updateSelectOptions(selectElement, options) {
    if (selectElement.classList.contains('jet-select-autocomplete')) {
      const $select = jQuery(selectElement);
      if ($select.data('select2')) {
        $select.val(null).trigger('change');
        return;
      }
    }
    const isMultiple = selectElement.multiple;
    const currentValues = isMultiple ? Array.from(selectElement.selectedOptions).map(opt => opt.value) : [selectElement.value];
    const firstOption = selectElement.options[0];
    const placeholderOption = firstOption && firstOption.value === '' ? firstOption.cloneNode(true) : null;
    selectElement.innerHTML = '';
    if (placeholderOption) {
      selectElement.appendChild(placeholderOption);
    }
    options.forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.value = option.value || option.val || '';
      optionElement.textContent = option.label || option.value || '';
      if (currentValues.includes(optionElement.value)) {
        optionElement.selected = true;
      }
      if (option.calculate) {
        optionElement.dataset.calculate = option.calculate;
      }
      selectElement.appendChild(optionElement);
    });
    selectElement.dispatchEvent(new Event('change', {
      bubbles: true
    }));
  }

  /**
   * Update checkbox/radio field options.
   *
   * containerElement is the outer .checkradio-wrap div (has data-jfb-auto-update).
   * Each option row is a child div (.checkboxes-wrap/.radio-wrap .checkradio-wrap)
   * containing a <label class="jet-form-builder__field-label for-checkbox|for-radio">
   *   <input type="checkbox|radio" ...><span>label text</span>
   * </label>.
   *
   * @param {HTMLElement}      containerElement Outer .checkradio-wrap element.
   * @param {Array}            options          New options array.
   * @param {string}           fieldType        Field type (checkbox/radio).
   * @param {HTMLElement|null} formNode         Form element (for re-initialization).
   */
  updateChoiceOptions(containerElement, options, fieldType, formNode = null) {
    // Get field name from data attribute (most reliable source)
    const fieldName = containerElement.getAttribute('data-field-name');
    if (!fieldName) {
      console.warn('[JFB Auto-Update] Could not find field name on container');
      return;
    }
    const currentValues = Array.from(containerElement.querySelectorAll(`input[type="${fieldType}"]:checked`)).map(input => input.value);

    // Preserve custom-option rows (e.g. "Add New" button)
    containerElement.querySelectorAll(':scope > .jet-form-builder__field-wrap:not(.custom-option)').forEach(row => row.remove());
    const inputName = fieldType === 'checkbox' ? `${fieldName}[]` : fieldName;
    const labelClass = fieldType === 'checkbox' ? 'for-checkbox' : 'for-radio';
    const rowClass = fieldType === 'checkbox' ? 'jet-form-builder__field-wrap checkboxes-wrap checkradio-wrap' : 'jet-form-builder__field-wrap radio-wrap checkradio-wrap';
    const customOptionRow = containerElement.querySelector(':scope > .custom-option');
    const inputClass = fieldType === 'checkbox' ? 'jet-form-builder__field checkboxes-field checkradio-field' : 'jet-form-builder__field radio-field checkradio-field';
    const fragment = document.createDocumentFragment();
    let hasCustomTemplates = false;
    options.forEach(option => {
      const value = option.value || option.val || '';
      const label = option.label || value;
      const isChecked = currentValues.includes(value);
      const inputElement = document.createElement('input');
      inputElement.type = fieldType;
      inputElement.name = inputName;
      inputElement.value = value;
      inputElement.className = inputClass;
      inputElement.setAttribute('data-field-name', fieldName);
      inputElement.checked = isChecked;
      if (option.calculate) {
        inputElement.dataset.calculate = option.calculate;
      }
      const rowElement = document.createElement('div');
      rowElement.className = rowClass;

      // JetEngine custom template HTML (pre-rendered server-side)
      if (option.html) {
        hasCustomTemplates = true;
        const templateWrapper = document.createElement('div');
        templateWrapper.innerHTML = option.html;
        while (templateWrapper.firstChild) {
          rowElement.appendChild(templateWrapper.firstChild);
        }
      }
      const spanElement = document.createElement('span');
      spanElement.textContent = label;
      const labelElement = document.createElement('label');
      labelElement.className = `jet-form-builder__field-label ${labelClass}`;
      labelElement.appendChild(inputElement);
      labelElement.appendChild(spanElement);
      rowElement.appendChild(labelElement);
      fragment.appendChild(rowElement);
    });
    if (customOptionRow) {
      containerElement.insertBefore(fragment, customOptionRow);
    } else {
      containerElement.appendChild(fragment);
    }
    if (hasCustomTemplates) {
      const $container = jQuery(containerElement);
      if (window.JetEngine && window.JetEngine.initElementsHandlers) {
        window.JetEngine.initElementsHandlers($container);
      } else if (window.JetPlugins) {
        window.JetPlugins.init($container);
      }
    }
    const reInited = this.reInitField(containerElement, formNode);
    if (!reInited) {
      const firstInput = containerElement.querySelector(`input[type="${fieldType}"]`);
      if (firstInput) {
        firstInput.dispatchEvent(new Event('change', {
          bubbles: true
        }));
      }
    }
  }

  /**
   * Re-initialize a field via JFB's standard Observable.observeInput() API.
   *
   * After DOM changes (new options with custom templates), the field's InputData
   * must be replaced so that createInput() re-evaluates and picks the correct
   * handler (e.g. DynamicCheckboxData instead of plain CheckboxData).
   * observeInput() also fires jet.fb.input.makeReactive, which lets
   * listing.options bind template clicks and --checked class toggling.
   *
   * @param {HTMLElement}      fieldElement The [data-jfb-sync] container element.
   * @param {HTMLElement|null} formNode     The form element.
   *
   * @return {boolean} True if re-initialization succeeded.
   */
  reInitField(fieldElement, formNode) {
    if (!formNode) {
      return false;
    }
    const syncNode = fieldElement.hasAttribute('data-jfb-sync') ? fieldElement : fieldElement.querySelector('[data-jfb-sync]');
    if (!syncNode) {
      return false;
    }
    const formId = formNode.dataset.formId;
    const observable = formId && window.JetFormBuilder ? window.JetFormBuilder[formId] : null;
    if (!observable || !observable.observeInput) {
      return false;
    }
    observable.observeInput(syncNode, true);
    return true;
  }

  /**
   * Get the visual wrapper for loading/error state classes.
   *
   * For select elements the wrapper is the closest .jet-form-builder__field-wrap ancestor.
   * For checkbox/radio, fieldElement IS the outer .checkradio-wrap div
   * (class jet-form-builder__fields-group), so we use it directly.
   *
   * @param {HTMLElement} fieldElement Field element (select or .checkradio-wrap div).
   *
   * @return {HTMLElement|null} Wrapper element.
   */
  getStateWrapper(fieldElement) {
    // If it's the .checkradio-wrap container itself, use it directly
    if (fieldElement.classList.contains('checkradio-wrap')) {
      return fieldElement;
    }
    return fieldElement.closest('.jet-form-builder__field-wrap') || fieldElement.parentElement;
  }

  /**
   * Set loading state for a field.
   *
   * @param {HTMLElement} fieldElement Field element.
   * @param {boolean}     isLoading    Loading state.
   */
  setLoadingState(fieldElement, isLoading) {
    const wrapper = this.getStateWrapper(fieldElement);
    if (!wrapper) {
      return;
    }
    if (isLoading) {
      wrapper.classList.add('jfb-auto-update-loading');
      if (!wrapper.querySelector('.jfb-auto-update-spinner')) {
        const spinner = document.createElement('span');
        spinner.className = 'jfb-auto-update-spinner';
        spinner.setAttribute('aria-label', 'Loading options...');
        wrapper.appendChild(spinner);
      }
    } else {
      wrapper.classList.remove('jfb-auto-update-loading');
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
    const wrapper = this.getStateWrapper(fieldElement);
    if (!wrapper) {
      return;
    }
    wrapper.classList.add('jfb-auto-update-error');
    let errorElement = wrapper.querySelector('.jfb-auto-update-error-message');
    if (!errorElement) {
      errorElement = document.createElement('div');
      errorElement.className = 'jfb-auto-update-error-message';
      wrapper.appendChild(errorElement);
    }
    errorElement.textContent = errorMessage;
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
    const wrapper = this.getStateWrapper(fieldElement);
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

/***/ "./frontend/auto-update/autocomplete-bridge.js":
/*!*****************************************************!*\
  !*** ./frontend/auto-update/autocomplete-bridge.js ***!
  \*****************************************************/
/***/ (() => {

/**
 * Autocomplete Bridge for Auto-Update Feature.
 *
 * Integrates the auto-update generator system with the Select Autocomplete addon.
 * When a select field has both autocomplete and auto-update enabled,
 * this module injects dependent field context into the AJAX data function
 * so the addon's PHP handler can use Registry::generate() with context.
 *
 * Uses the `jet.fb.select_autocomplete.options` filter provided by the addon,
 * which passes the full Select2 config (including `ajax`) along with `$field`.
 *
 * @package JetFormBuilder
 */

const {
  addFilter
} = wp.hooks;

/**
 * Parse listen-to field names from a container element.
 *
 * @param {HTMLElement} container Element with data-listen-to attribute.
 *
 * @return {Array} Array of field names.
 */
function parseListenTo(container) {
  const raw = container.dataset.listenTo;
  if (!raw) {
    return [];
  }
  if (container.dataset.listenToMultiple === '1') {
    try {
      return JSON.parse(raw);
    } catch (e) {
      return [];
    }
  }
  return [raw];
}

/**
 * Collect current values from listened form fields.
 *
 * @param {Array}       listenTo Array of field names to collect.
 * @param {HTMLElement} formNode Form element.
 *
 * @return {Object} Context object { fieldName: value }.
 */
function collectContext(listenTo, formNode) {
  const context = {};
  listenTo.forEach(fieldName => {
    const el = formNode.querySelector(`[data-field-name="${fieldName}"]`) || formNode.querySelector(`[name="${fieldName}"]`);
    if (el) {
      context[fieldName] = el.value || '';
    }
  });
  return context;
}

/**
 * Hook into the autocomplete addon's Select2 options filter.
 *
 * Injects dependent field context into the AJAX data function so the addon's
 * PHP handler (BaseAjaxHandler) receives context and can route through
 * Registry::generate() for generator fields with auto-update.
 *
 * Filter signature: applyFilters( 'jet.fb.select_autocomplete.options', select2Options, $field )
 */
addFilter('jet.fb.select_autocomplete.options', 'jet-form-builder/auto-update-context', function (select2Options, $field) {
  if (!$field) {
    return select2Options;
  }
  const fieldEl = $field[0] || $field;
  if (!fieldEl || !fieldEl.dataset || fieldEl.dataset.jfbAutoUpdate !== '1') {
    return select2Options;
  }
  if (!select2Options.ajax) {
    return select2Options;
  }
  const formNode = fieldEl.closest('form');
  if (!formNode) {
    return select2Options;
  }
  const listenTo = parseListenTo(fieldEl);
  if (!listenTo.length) {
    return select2Options;
  }

  // Wrap the original data function to inject context
  const originalDataFn = select2Options.ajax.data;
  select2Options.ajax.data = function (params) {
    const data = typeof originalDataFn === 'function' ? originalDataFn(params) : params;

    // Collect current values from dependent fields and add as context
    const context = collectContext(listenTo, formNode);
    data.context = JSON.stringify(context);
    return data;
  };
  return select2Options;
});

/***/ }),

/***/ "./frontend/auto-update/styles.pcss":
/*!******************************************!*\
  !*** ./frontend/auto-update/styles.pcss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/*!***************************************!*\
  !*** ./frontend/auto-update/index.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getWatcher: () => (/* binding */ getWatcher),
/* harmony export */   initAutoUpdate: () => (/* binding */ initAutoUpdate)
/* harmony export */ });
/* harmony import */ var _FieldWatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FieldWatcher */ "./frontend/auto-update/FieldWatcher.js");
/* harmony import */ var _autocomplete_bridge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./autocomplete-bridge */ "./frontend/auto-update/autocomplete-bridge.js");
/* harmony import */ var _autocomplete_bridge__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_autocomplete_bridge__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_pcss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.pcss */ "./frontend/auto-update/styles.pcss");
/**
 * Auto-Update Feature — main entry point.
 * Hooks into JFB form lifecycle and sets up field watchers.
 *
 * @package JetFormBuilder
 */





/** @type {FieldWatcher|null} */
let globalWatcher = null;

/**
 * @return {FieldWatcher}
 */
function getWatcher() {
  if (!globalWatcher) {
    globalWatcher = new _FieldWatcher__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }
  return globalWatcher;
}

/**
 * @param {HTMLElement|jQuery} formNode
 */
function initAutoUpdate(formNode) {
  if (!formNode) {
    return;
  }
  if (formNode instanceof jQuery) {
    formNode = formNode[0];
  }
  if (!formNode?.querySelectorAll) {
    return;
  }
  getWatcher().initForm(formNode);
}

/**
 * MutationObserver for dynamically added/removed fields (Conditional Blocks, Repeater rows).
 *
 * @param {HTMLElement|jQuery} formNode
 */
function observeDynamicFields(formNode) {
  if (!formNode || !window.MutationObserver) {
    return;
  }
  if (formNode instanceof jQuery) {
    formNode = formNode[0];
  }
  if (!formNode?.querySelectorAll) {
    return;
  }
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      mutation.removedNodes.forEach(node => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          cleanupRemovedRepeaterRow(node);
        }
      });
      mutation.addedNodes.forEach(node => {
        if (node.nodeType !== Node.ELEMENT_NODE) {
          return;
        }
        const appearedFields = [];
        if (node.hasAttribute && node.getAttribute('data-field-name')) {
          appearedFields.push(node);
        }
        if (node.querySelectorAll) {
          node.querySelectorAll('[data-field-name]').forEach(f => appearedFields.push(f));
        }
        appearedFields.forEach(fieldElement => {
          const fieldName = fieldElement.getAttribute('data-field-name');
          if (fieldElement.hasAttribute('data-jfb-auto-update')) {
            getWatcher().initField(fieldElement, formNode);
          }
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
}

/**
 * Clean up watchers and cached data for fields in a removed repeater row.
 *
 * When a repeater row is removed we must tear down any watchers that were
 * scoped to that row so they don't hold references to detached elements.
 *
 * @param {HTMLElement} removedNode The DOM node that was removed.
 */
function cleanupRemovedRepeaterRow(removedNode) {
  // Check if the removed node is itself a repeater row or contains rows
  const rows = [];
  if (removedNode.dataset?.repeaterRow === '1' || removedNode.classList?.contains('jet-form-builder-repeater__row')) {
    rows.push(removedNode);
  }
  if (removedNode.querySelectorAll) {
    const nestedRows = removedNode.querySelectorAll('.jet-form-builder-repeater__row');
    nestedRows.forEach(row => rows.push(row));
  }
  if (!rows.length) {
    return;
  }
  const watcher = getWatcher();
  rows.forEach(row => {
    // Collect field keys that belong to this row
    const keysToRemove = [];
    watcher.autoUpdateFields.forEach((fieldData, fieldKey) => {
      const element = fieldData?.element;
      if (element && row.contains(element)) {
        keysToRemove.push(fieldKey);
      }
    });
    keysToRemove.forEach(fieldKey => {
      watcher.autoUpdateFields.delete(fieldKey);
    });

    // Remove watchers scoped to this row
    const watcherKeysToRemove = [];
    watcher.watchers.forEach((watcherData, watcherKey) => {
      // Watcher key includes repeater scope — check if this row is the scope
      // by checking if any dependent field was in this row
      const hasRemovedDependents = watcherData.dependents.some(dep => keysToRemove.includes(dep));
      if (hasRemovedDependents) {
        // Remove dependents that belong to this row
        watcherData.dependents = watcherData.dependents.filter(dep => !keysToRemove.includes(dep));

        // If no more dependents, unwatch entirely
        if (!watcherData.dependents.length) {
          if (watcherData.unwatch) {
            watcherData.unwatch();
          }
          watcherKeysToRemove.push(watcherKey);
        }
      }
    });
    watcherKeysToRemove.forEach(key => {
      watcher.watchers.delete(key);
    });
  });
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

      // Re-initialize the watcher for this field
      watcher.watchField(sourceFieldName, targetFieldName, formNode);

      // Trigger debounced update if ALL source fields have values.
      // Debounced so multiple retries in the same tick collapse into one.
      if (allSourceFieldsHaveValues(config.listenTo, formNode)) {
        watcher.debouncedUpdate(targetFieldName, formNode);
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
 * Handle conditional block toggling a field's DOM presence.
 *
 * When "Remove hidden elements from page HTML" is enabled, the conditional
 * block fires a custom event. If the toggled block contains a source field
 * that our auto-update fields listen to, we trigger an update so the
 * generator re-runs with the correct context (empty for removed fields).
 *
 * When the block is shown again (result: true), MutationObserver handles
 * re-initialization via retryFailedWatchers. Here we only need to handle
 * the hide case (result: false) — trigger updates for dependents so they
 * get fresh options without the hidden field's value.
 */
function setupConditionalBlockListener() {
  document.addEventListener('jet-form-builder/conditional-block/block-toggle-hidden-dom', event => {
    const {
      block,
      result
    } = event.detail || {};
    if (!block || result) {
      return;
    }
    const watcher = getWatcher();
    if (!watcher.watchers.size) {
      return;
    }

    // Collect field names from the block being hidden
    const hiddenFieldNames = new Set();

    // The block itself might have a field-name
    if (block.dataset?.fieldName) {
      hiddenFieldNames.add(block.dataset.fieldName);
    }

    // Fields inside the block
    const innerFields = block.querySelectorAll ? block.querySelectorAll('[data-field-name]') : [];
    innerFields.forEach(field => {
      hiddenFieldNames.add(field.getAttribute('data-field-name'));
    });
    if (!hiddenFieldNames.size) {
      return;
    }

    // Find all auto-update fields that depend on any hidden field
    const targetFieldsToUpdate = new Set();
    watcher.watchers.forEach((watcherData, watcherKey) => {
      // watcherKey could be plain field name or repeater-scoped
      // Check if any hidden field name is part of the watcher key
      const matchesHidden = [...hiddenFieldNames].some(name => watcherKey === name || watcherKey.endsWith(`.${name}`));
      if (matchesHidden) {
        watcherData.dependents.forEach(dep => {
          targetFieldsToUpdate.add(dep);

          // Clear retry tracking so retryFailedWatchers fires
          // again when the source field reappears.
          [...hiddenFieldNames].forEach(name => {
            retriedWatchers.delete(`${name}:${dep}`);
          });
        });
      }
    });
    if (!targetFieldsToUpdate.size) {
      return;
    }

    // Find the form node from any remaining auto-update field
    let formNode = null;
    for (const targetKey of targetFieldsToUpdate) {
      const fieldData = watcher.autoUpdateFields.get(targetKey);
      if (fieldData?.element) {
        formNode = fieldData.element.closest('form');
        if (formNode) {
          break;
        }
      }
    }
    if (!formNode) {
      return;
    }

    // Trigger updates for all affected dependents
    targetFieldsToUpdate.forEach(targetKey => {
      watcher.debouncedUpdate(targetKey, formNode);
    });
  });
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

  // Listen for conditional block DOM toggling (global, once)
  setupConditionalBlockListener();

  // Hook into form after-init event.
  // Callback receives ( event, $scope, observable ).
  jQuery(document).on('jet-form-builder/after-init', (event, $scope) => {
    const formNode = $scope[0]?.querySelector('form.jet-form-builder');
    if (!formNode) {
      return;
    }
    initAutoUpdate(formNode);

    // Set up observer for dynamic fields (Conditional Blocks)
    observeDynamicFields(formNode);
  });
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0by11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUM3dUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUlBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7QUM1WEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBSUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3hIQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZnJvbnRlbmQvYXV0by11cGRhdGUvQ2FjaGVNYW5hZ2VyLmpzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi9mcm9udGVuZC9hdXRvLXVwZGF0ZS9GaWVsZFdhdGNoZXIuanMiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2Zyb250ZW5kL2F1dG8tdXBkYXRlL09wdGlvbnNVcGRhdGVyLmpzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi9mcm9udGVuZC9hdXRvLXVwZGF0ZS9hdXRvY29tcGxldGUtYnJpZGdlLmpzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi9mcm9udGVuZC9hdXRvLXVwZGF0ZS9zdHlsZXMucGNzcyIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZnJvbnRlbmQvYXV0by11cGRhdGUvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDYWNoZSBNYW5hZ2VyIGZvciBBdXRvLVVwZGF0ZSBGZWF0dXJlLlxuICpcbiAqIE1hbmFnZXMgaW4tbWVtb3J5IGNhY2hpbmcgb2YgZ2VuZXJhdGVkIG9wdGlvbnMgd2l0aCBjb25maWd1cmFibGUgdGltZW91dC5cbiAqIEltcGxlbWVudHMgTWFwLWJhc2VkIHN0b3JhZ2Ugd2l0aCB0aW1lc3RhbXAgdHJhY2tpbmcgZm9yIFRUTCAoVGltZSBUbyBMaXZlKS5cbiAqXG4gKiBAcGFja2FnZSBKZXRGb3JtQnVpbGRlclxuICovXG5cbmNsYXNzIENhY2hlTWFuYWdlciB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdC8qKiBAdHlwZSB7TWFwPHN0cmluZywge29wdGlvbnM6IEFycmF5LCB0aW1lc3RhbXA6IG51bWJlcn0+fSAqL1xuXHRcdHRoaXMuY2FjaGUgPSBuZXcgTWFwKCk7XG5cblx0XHQvKiogQHR5cGUge251bWJlcn0gZGVmYXVsdCBUVEwgaW4gc2Vjb25kczsgMCA9IGRpc2FibGVkICovXG5cdFx0dGhpcy5kZWZhdWx0VGltZW91dCA9IDYwO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdlbmVyYXRlIGNhY2hlIGtleSBmcm9tIGdlbmVyYXRvciBJRCwgZmllbGQgbmFtZSwgYW5kIGNvbnRleHQuXG5cdCAqXG5cdCAqIEZpZWxkIG5hbWUgaXMgaW5jbHVkZWQgc28gdGhhdCB0d28gZGlmZmVyZW50IGZpZWxkcyB1c2luZyB0aGUgc2FtZVxuXHQgKiBnZW5lcmF0b3IgYW5kIHRoZSBzYW1lIGNvbnRleHQgZG9uJ3Qgc2hhcmUgY2FjaGVkIHJlc3BvbnNlc1xuXHQgKiAodGhleSBtYXkgaGF2ZSBkaWZmZXJlbnQgYmxvY2tfYXR0cnMsIGUuZy4gY3VzdG9tX2l0ZW1fdGVtcGxhdGUpLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZ2VuZXJhdG9ySWQgR2VuZXJhdG9yIGlkZW50aWZpZXIuXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0ICAgICBDb250ZXh0IG9iamVjdCB3aXRoIGZpZWxkIHZhbHVlcy5cblx0ICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkTmFtZSAgIFRhcmdldCBmaWVsZCBuYW1lLlxuXHQgKlxuXHQgKiBAcmV0dXJuIHtzdHJpbmd9IENhY2hlIGtleS5cblx0ICovXG5cdGdlbmVyYXRlS2V5KCBnZW5lcmF0b3JJZCwgY29udGV4dCwgZmllbGROYW1lID0gJycgKSB7XG5cdFx0Y29uc3Qgc29ydGVkQ29udGV4dCA9IE9iamVjdC5rZXlzKCBjb250ZXh0ICkuc29ydCgpLnJlZHVjZSggKCBhY2MsIGtleSApID0+IHtcblx0XHRcdGFjY1sga2V5IF0gPSBjb250ZXh0WyBrZXkgXTtcblx0XHRcdHJldHVybiBhY2M7XG5cdFx0fSwge30gKTtcblxuXHRcdHJldHVybiBgJHsgZ2VuZXJhdG9ySWQgfTokeyBmaWVsZE5hbWUgfTokeyBKU09OLnN0cmluZ2lmeSggc29ydGVkQ29udGV4dCApIH1gO1xuXHR9XG5cblx0LyoqXG5cdCAqIENoZWNrIGlmIGNhY2hlZCBkYXRhIGV4aXN0cyBhbmQgaXMgc3RpbGwgdmFsaWQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBnZW5lcmF0b3JJZCAgR2VuZXJhdG9yIGlkZW50aWZpZXIuXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0ICAgICAgQ29udGV4dCBvYmplY3Qgd2l0aCBmaWVsZCB2YWx1ZXMuXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBjYWNoZVRpbWVvdXQgQ2FjaGUgdGltZW91dCBpbiBzZWNvbmRzICgwPWRpc2FibGVkLCAtMT1wZXJtYW5lbnQsIE49c2Vjb25kcykuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZE5hbWUgICAgVGFyZ2V0IGZpZWxkIG5hbWUuXG5cdCAqXG5cdCAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdmFsaWQgY2FjaGUgZXhpc3RzLlxuXHQgKi9cblx0aGFzKCBnZW5lcmF0b3JJZCwgY29udGV4dCwgY2FjaGVUaW1lb3V0ID0gdGhpcy5kZWZhdWx0VGltZW91dCwgZmllbGROYW1lID0gJycgKSB7XG5cdFx0Ly8gQ2FjaGUgZGlzYWJsZWRcblx0XHRpZiAoIGNhY2hlVGltZW91dCA9PT0gMCApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBrZXkgICAgPSB0aGlzLmdlbmVyYXRlS2V5KCBnZW5lcmF0b3JJZCwgY29udGV4dCwgZmllbGROYW1lICk7XG5cdFx0Y29uc3QgY2FjaGVkID0gdGhpcy5jYWNoZS5nZXQoIGtleSApO1xuXG5cdFx0aWYgKCAhIGNhY2hlZCApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBhZ2UgPSAoIERhdGUubm93KCkgLSBjYWNoZWQudGltZXN0YW1wICkgLyAxMDAwO1xuXG5cdFx0aWYgKCBhZ2UgPiBjYWNoZVRpbWVvdXQgKSB7XG5cdFx0XHR0aGlzLmNhY2hlLmRlbGV0ZSgga2V5ICk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGNhY2hlZCBvcHRpb25zLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZ2VuZXJhdG9ySWQgIEdlbmVyYXRvciBpZGVudGlmaWVyLlxuXHQgKiBAcGFyYW0ge09iamVjdH0gY29udGV4dCAgICAgIENvbnRleHQgb2JqZWN0IHdpdGggZmllbGQgdmFsdWVzLlxuXHQgKiBAcGFyYW0ge251bWJlcn0gY2FjaGVUaW1lb3V0IENhY2hlIHRpbWVvdXQgaW4gc2Vjb25kcy5cblx0ICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkTmFtZSAgICBUYXJnZXQgZmllbGQgbmFtZS5cblx0ICpcblx0ICogQHJldHVybiB7QXJyYXl8bnVsbH0gQ2FjaGVkIG9wdGlvbnMgb3IgbnVsbCBpZiBub3QgZm91bmQvZXhwaXJlZC5cblx0ICovXG5cdGdldCggZ2VuZXJhdG9ySWQsIGNvbnRleHQsIGNhY2hlVGltZW91dCA9IHRoaXMuZGVmYXVsdFRpbWVvdXQsIGZpZWxkTmFtZSA9ICcnICkge1xuXHRcdGlmICggISB0aGlzLmhhcyggZ2VuZXJhdG9ySWQsIGNvbnRleHQsIGNhY2hlVGltZW91dCwgZmllbGROYW1lICkgKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRjb25zdCBrZXkgPSB0aGlzLmdlbmVyYXRlS2V5KCBnZW5lcmF0b3JJZCwgY29udGV4dCwgZmllbGROYW1lICk7XG5cdFx0Y29uc3QgY2FjaGVkID0gdGhpcy5jYWNoZS5nZXQoIGtleSApO1xuXG5cdFx0cmV0dXJuIGNhY2hlZCA/IGNhY2hlZC5vcHRpb25zIDogbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBTdG9yZSBvcHRpb25zIGluIGNhY2hlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZ2VuZXJhdG9ySWQgR2VuZXJhdG9yIGlkZW50aWZpZXIuXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0ICAgICBDb250ZXh0IG9iamVjdCB3aXRoIGZpZWxkIHZhbHVlcy5cblx0ICogQHBhcmFtIHtBcnJheX0gIG9wdGlvbnMgICAgIEdlbmVyYXRlZCBvcHRpb25zIHRvIGNhY2hlLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZmllbGROYW1lICAgVGFyZ2V0IGZpZWxkIG5hbWUuXG5cdCAqL1xuXHRzZXQoIGdlbmVyYXRvcklkLCBjb250ZXh0LCBvcHRpb25zLCBmaWVsZE5hbWUgPSAnJyApIHtcblx0XHRjb25zdCBrZXkgPSB0aGlzLmdlbmVyYXRlS2V5KCBnZW5lcmF0b3JJZCwgY29udGV4dCwgZmllbGROYW1lICk7XG5cblx0XHR0aGlzLmNhY2hlLnNldCgga2V5LCB7XG5cdFx0XHRvcHRpb25zLFxuXHRcdFx0dGltZXN0YW1wOiBEYXRlLm5vdygpLFxuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDbGVhciBjYWNoZSBmb3Igc3BlY2lmaWMgZ2VuZXJhdG9yIGFuZCBjb250ZXh0LlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZ2VuZXJhdG9ySWQgR2VuZXJhdG9yIGlkZW50aWZpZXIuXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0ICAgICBDb250ZXh0IG9iamVjdCB3aXRoIGZpZWxkIHZhbHVlcy5cblx0ICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkTmFtZSAgIFRhcmdldCBmaWVsZCBuYW1lLlxuXHQgKi9cblx0Y2xlYXIoIGdlbmVyYXRvcklkLCBjb250ZXh0LCBmaWVsZE5hbWUgPSAnJyApIHtcblx0XHRjb25zdCBrZXkgPSB0aGlzLmdlbmVyYXRlS2V5KCBnZW5lcmF0b3JJZCwgY29udGV4dCwgZmllbGROYW1lICk7XG5cdFx0dGhpcy5jYWNoZS5kZWxldGUoIGtleSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIENsZWFyIGFsbCBjYWNoZSBlbnRyaWVzIGZvciBhIHNwZWNpZmljIGZpZWxkIG5hbWUuXG5cdCAqIFVzZWQgd2hlbiB0aGUgZmllbGQgc2hvdWxkIHNob3cgbm8gb3B0aW9ucyAoZS5nLiByZXF1aXJlQWxsRmlsbGVkIG5vdCBtZXQpLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZmllbGROYW1lIFRhcmdldCBmaWVsZCBuYW1lLlxuXHQgKi9cblx0Y2xlYXJCeUZpZWxkKCBmaWVsZE5hbWUgKSB7XG5cdFx0Y29uc3QgcHJlZml4ID0gYDokeyBmaWVsZE5hbWUgfTpgO1xuXHRcdHRoaXMuY2FjaGUuZm9yRWFjaCggKCBfdmFsdWUsIGtleSApID0+IHtcblx0XHRcdGlmICgga2V5LmluY2x1ZGVzKCBwcmVmaXggKSApIHtcblx0XHRcdFx0dGhpcy5jYWNoZS5kZWxldGUoIGtleSApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDbGVhciBhbGwgY2FjaGUgZW50cmllcy5cblx0ICovXG5cdGNsZWFyQWxsKCkge1xuXHRcdHRoaXMuY2FjaGUuY2xlYXIoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgY2FjaGUgc3RhdGlzdGljcy5cblx0ICpcblx0ICogQHJldHVybiB7T2JqZWN0fSBTdGF0aXN0aWNzIG9iamVjdCB3aXRoIHNpemUgYW5kIGtleXMuXG5cdCAqL1xuXHRnZXRTdGF0cygpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2l6ZTogdGhpcy5jYWNoZS5zaXplLFxuXHRcdFx0a2V5czogQXJyYXkuZnJvbSggdGhpcy5jYWNoZS5rZXlzKCkgKSxcblx0XHR9O1xuXHR9XG5cblx0LyoqXG5cdCAqIENsZWFuIGV4cGlyZWQgY2FjaGUgZW50cmllcy5cblx0ICogVXNlZnVsIGZvciBwZXJpb2RpYyBjbGVhbnVwIG9mIHN0YWxlIGRhdGEuXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBtYXhBZ2UgTWF4aW11bSBhZ2UgaW4gc2Vjb25kcyAoZGVmYXVsdDogMzYwMCA9IDEgaG91cikuXG5cdCAqL1xuXHRjbGVhbkV4cGlyZWQoIG1heEFnZSA9IDM2MDAgKSB7XG5cdFx0Y29uc3Qgbm93ICAgICAgICAgID0gRGF0ZS5ub3coKTtcblx0XHRjb25zdCBrZXlzVG9EZWxldGUgPSBbXTtcblxuXHRcdHRoaXMuY2FjaGUuZm9yRWFjaCggKCB2YWx1ZSwga2V5ICkgPT4ge1xuXHRcdFx0aWYgKCAoIG5vdyAtIHZhbHVlLnRpbWVzdGFtcCApIC8gMTAwMCA+IG1heEFnZSApIHtcblx0XHRcdFx0a2V5c1RvRGVsZXRlLnB1c2goIGtleSApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHRcdGtleXNUb0RlbGV0ZS5mb3JFYWNoKCAoIGtleSApID0+IHRoaXMuY2FjaGUuZGVsZXRlKCBrZXkgKSApO1xuXG5cdFx0cmV0dXJuIGtleXNUb0RlbGV0ZS5sZW5ndGg7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FjaGVNYW5hZ2VyO1xuIiwiLyoqXG4gKiBGaWVsZCBXYXRjaGVyIGZvciBBdXRvLVVwZGF0ZSBGZWF0dXJlLlxuICpcbiAqIFdhdGNoZXMgZm9ybSBmaWVsZCBjaGFuZ2VzIGFuZCB0cmlnZ2VycyBvcHRpb24gdXBkYXRlcyBmb3IgZGVwZW5kZW50IGZpZWxkcy5cbiAqIFVzZXMgSmV0Rm9ybUJ1aWxkZXIncyByZWFjdGl2ZSBpbnB1dC52YWx1ZS53YXRjaCgpIG1ldGhvZC5cbiAqXG4gKiBAcGFja2FnZSBKZXRGb3JtQnVpbGRlclxuICovXG5cbmltcG9ydCBDYWNoZU1hbmFnZXIgZnJvbSAnLi9DYWNoZU1hbmFnZXInO1xuaW1wb3J0IE9wdGlvbnNVcGRhdGVyIGZyb20gJy4vT3B0aW9uc1VwZGF0ZXInO1xuXG5jbGFzcyBGaWVsZFdhdGNoZXIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmNhY2hlTWFuYWdlciAgID0gbmV3IENhY2hlTWFuYWdlcigpO1xuXHRcdHRoaXMub3B0aW9uc1VwZGF0ZXIgPSBuZXcgT3B0aW9uc1VwZGF0ZXIoKTtcblxuXHRcdC8qKiBAdHlwZSB7TWFwPHN0cmluZywge3Vud2F0Y2g6IEZ1bmN0aW9uLCBkZXBlbmRlbnRzOiBzdHJpbmdbXX0+fSAqL1xuXHRcdHRoaXMud2F0Y2hlcnMgPSBuZXcgTWFwKCk7XG5cblx0XHQvKiogQHR5cGUge01hcDxzdHJpbmcsIHtlbGVtZW50OiBIVE1MRWxlbWVudCwgY29uZmlnOiBPYmplY3R9Pn0gKi9cblx0XHR0aGlzLmF1dG9VcGRhdGVGaWVsZHMgPSBuZXcgTWFwKCk7XG5cblx0XHQvKiogQHR5cGUge01hcDxzdHJpbmcsIEFib3J0Q29udHJvbGxlcj59ICovXG5cdFx0dGhpcy5hYm9ydENvbnRyb2xsZXJzID0gbmV3IE1hcCgpO1xuXG5cdFx0LyoqIEB0eXBlIHtNYXA8c3RyaW5nLCBudW1iZXI+fSBkZWJvdW5jZSB0aW1lciBJRHMgKi9cblx0XHR0aGlzLmRlYm91bmNlVGltZXJzID0gbmV3IE1hcCgpO1xuXG5cdFx0LyoqIEB0eXBlIHtNYXA8c3RyaW5nLCB7ZWxlbWVudDogSFRNTEVsZW1lbnQsIGhhbmRsZXI6IEZ1bmN0aW9ufT59ICovXG5cdFx0dGhpcy5idXR0b25MaXN0ZW5lcnMgPSBuZXcgTWFwKCk7XG5cblx0XHR0aGlzLmRlYm91bmNlRGVsYXkgPSAzMDA7XG5cblx0XHQvKipcblx0XHQgKiBSZWZlcmVuY2UgY291bnRlciBwZXIgZm9ybTogbG9ja1N0YXRlLmVuZCgpIGZpcmVzIG9ubHkgd2hlbiBhbGxcblx0XHQgKiBpbi1mbGlnaHQgcmVxdWVzdHMgZm9yIHRoYXQgZm9ybSBmaW5pc2guXG5cdFx0ICpcblx0XHQgKiBAdHlwZSB7TWFwPHN0cmluZywgbnVtYmVyPn1cblx0XHQgKi9cblx0XHR0aGlzLmxvYWRpbmdDb3VudHMgPSBuZXcgTWFwKCk7XG5cdH1cblxuXHQvKipcblx0ICogSW5pdGlhbGl6ZSBhdXRvLXVwZGF0ZSBmb3IgYWxsIGZpZWxkcyBpbiBhIGZvcm0uXG5cdCAqXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGZvcm1Ob2RlIEZvcm0gZWxlbWVudC5cblx0ICovXG5cdGluaXRGb3JtKCBmb3JtTm9kZSApIHtcblx0XHQvLyBGaW5kIGFsbCBmaWVsZHMgd2l0aCBhdXRvLXVwZGF0ZSBlbmFibGVkXG5cdFx0Y29uc3QgYXV0b1VwZGF0ZUZpZWxkcyA9IGZvcm1Ob2RlLnF1ZXJ5U2VsZWN0b3JBbGwoICdbZGF0YS1qZmItYXV0by11cGRhdGU9XCIxXCJdJyApO1xuXG5cdFx0YXV0b1VwZGF0ZUZpZWxkcy5mb3JFYWNoKCAoIGZpZWxkRWxlbWVudCApID0+IHtcblx0XHRcdHRoaXMuaW5pdEZpZWxkKCBmaWVsZEVsZW1lbnQsIGZvcm1Ob2RlICk7XG5cdFx0fSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEJ1aWxkIGEgdW5pcXVlIGZpZWxkIGtleSBmb3IgdGhlIGF1dG9VcGRhdGVGaWVsZHMgbWFwLlxuXHQgKlxuXHQgKiBGb3IgZmllbGRzIGluc2lkZSBhIHJlcGVhdGVyIHJvdyBhIHNjb3BlZCBrZXkgaXMgYnVpbHQgc28gdGhhdCByb3cgMFxuXHQgKiBhbmQgcm93IDEgZG8gbm90IG92ZXJ3cml0ZSBlYWNoIG90aGVyIGV2ZW4gdGhvdWdoIGJvdGggc2hhcmUgdGhlIHNhbWVcblx0ICogZGF0YS1maWVsZC1uYW1lIGF0dHJpYnV0ZS5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9ICAgICAgZmllbGROYW1lICAgQmFzZSBmaWVsZCBuYW1lIGZyb20gZGF0YS1maWVsZC1uYW1lLlxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBmaWVsZEVsZW1lbnQgVGhlIGZpZWxkIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEByZXR1cm4ge3N0cmluZ30gVW5pcXVlIGZpZWxkIGtleS5cblx0ICovXG5cdGJ1aWxkRmllbGRLZXkoIGZpZWxkTmFtZSwgZmllbGRFbGVtZW50ICkge1xuXHRcdGNvbnN0IHJlcGVhdGVyUm93ID0gZmllbGRFbGVtZW50LmNsb3Nlc3QoICcuamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcl9fcm93JyApO1xuXHRcdHJldHVybiB0aGlzLmJ1aWxkV2F0Y2hlcktleSggZmllbGROYW1lLCByZXBlYXRlclJvdyApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEluaXRpYWxpemUgYXV0by11cGRhdGUgZm9yIGEgc2luZ2xlIGZpZWxkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBmaWVsZEVsZW1lbnQgRmllbGQgZWxlbWVudCAoc2VsZWN0L2lucHV0KS5cblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZm9ybU5vZGUgICAgIEZvcm0gZWxlbWVudC5cblx0ICovXG5cdGluaXRGaWVsZCggZmllbGRFbGVtZW50LCBmb3JtTm9kZSApIHtcblx0XHRjb25zdCBjb25maWcgPSB0aGlzLnBhcnNlRmllbGRDb25maWcoIGZpZWxkRWxlbWVudCApO1xuXG5cdFx0aWYgKCAhIGNvbmZpZyApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBmaWVsZEtleSA9IHRoaXMuYnVpbGRGaWVsZEtleSggY29uZmlnLmZpZWxkTmFtZSwgZmllbGRFbGVtZW50ICk7XG5cblx0XHQvLyBQcmV2ZW50IGRvdWJsZS1pbml0OiBNdXRhdGlvbk9ic2VydmVyIHdpdGggc3VidHJlZTp0cnVlIGNhbiBmaXJlXG5cdFx0Ly8gbXVsdGlwbGUgY2FsbGJhY2tzIGZvciBvbmUgcmVwZWF0ZXIgcm93IGluc2VydGlvbi5cblx0XHRjb25zdCBhbHJlYWR5SW5pdGlhbGl6ZWQgPSBmaWVsZEVsZW1lbnQuaGFzQXR0cmlidXRlKCAnZGF0YS1qZmItYXUtaW5pdCcgKTtcblx0XHRmaWVsZEVsZW1lbnQuc2V0QXR0cmlidXRlKCAnZGF0YS1qZmItYXUtaW5pdCcsICcxJyApO1xuXG5cdFx0Y29uZmlnLmZpZWxkS2V5ID0gZmllbGRLZXk7XG5cblx0XHR0aGlzLmF1dG9VcGRhdGVGaWVsZHMuc2V0KCBmaWVsZEtleSwge1xuXHRcdFx0ZWxlbWVudDogZmllbGRFbGVtZW50LFxuXHRcdFx0Y29uZmlnLFxuXHRcdH0gKTtcblxuXHRcdGlmICggY29uZmlnLnVwZGF0ZU9uQnV0dG9uICkge1xuXHRcdFx0dGhpcy53YXRjaEJ1dHRvbiggY29uZmlnLnVwZGF0ZU9uQnV0dG9uLCBmaWVsZEtleSwgZm9ybU5vZGUgKTtcblx0XHR9XG5cblx0XHRpZiAoIGNvbmZpZy5saXN0ZW5UbyAmJiBBcnJheS5pc0FycmF5KCBjb25maWcubGlzdGVuVG8gKSApIHtcblx0XHRcdGNvbmZpZy5saXN0ZW5Uby5mb3JFYWNoKCAoIHNvdXJjZUZpZWxkTmFtZSApID0+IHtcblx0XHRcdFx0dGhpcy53YXRjaEZpZWxkKCBzb3VyY2VGaWVsZE5hbWUsIGZpZWxkS2V5LCBmb3JtTm9kZSApO1xuXHRcdFx0fSApO1xuXHRcdH1cblxuXHRcdC8vIEF1dG8tdHJpZ2dlciBpbml0aWFsIHVwZGF0ZSBvbmx5IHdoZW4gbm8gYnV0dG9uIGlzIGNvbmZpZ3VyZWQuXG5cdFx0Ly8gV2l0aCBhIGJ1dHRvbiwgdGhlIHVzZXIgY29udHJvbHMgd2hlbiB0byBmZXRjaCDigJQgbm8gYXV0b21hdGljIHVwZGF0ZS5cblx0XHQvLyBXaXRoIHJlcXVpcmVBbGxGaWxsZWQsIHNraXAgaWYgYW55IGxpc3RlblRvIGZpZWxkIGlzIGVtcHR5LlxuXHRcdGlmICggISBhbHJlYWR5SW5pdGlhbGl6ZWQgJiYgISBjb25maWcudXBkYXRlT25CdXR0b24gJiYgY29uZmlnLmxpc3RlblRvICkge1xuXHRcdFx0aWYgKCBjb25maWcucmVxdWlyZUFsbEZpbGxlZCApIHtcblx0XHRcdFx0Y29uc3QgY29udGV4dCAgID0gdGhpcy5jb2xsZWN0Q29udGV4dCggY29uZmlnLCBmb3JtTm9kZSApO1xuXHRcdFx0XHRjb25zdCBhbGxGaWxsZWQgPSBjb25maWcubGlzdGVuVG8uZXZlcnkoICggZmllbGROYW1lICkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IHZhbCA9IGNvbnRleHRbIGZpZWxkTmFtZSBdO1xuXHRcdFx0XHRcdHJldHVybiB2YWwgIT09IHVuZGVmaW5lZCAmJiB2YWwgIT09IG51bGwgJiYgdmFsICE9PSAnJztcblx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdGlmICggYWxsRmlsbGVkICkge1xuXHRcdFx0XHRcdHRoaXMuZGVib3VuY2VkVXBkYXRlKCBmaWVsZEtleSwgZm9ybU5vZGUgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5kZWJvdW5jZWRVcGRhdGUoIGZpZWxkS2V5LCBmb3JtTm9kZSApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBQYXJzZSBmaWVsZCBjb25maWd1cmF0aW9uIGZyb20gZGF0YSBhdHRyaWJ1dGVzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBmaWVsZEVsZW1lbnQgRmllbGQgZWxlbWVudC5cblx0ICpcblx0ICogQHJldHVybiB7T2JqZWN0fG51bGx9IENvbmZpZ3VyYXRpb24gb2JqZWN0IG9yIG51bGwgaWYgaW52YWxpZC5cblx0ICovXG5cdHBhcnNlRmllbGRDb25maWcoIGZpZWxkRWxlbWVudCApIHtcblx0XHRjb25zdCBnZW5lcmF0b3JJZCA9IGZpZWxkRWxlbWVudC5kYXRhc2V0LmdlbmVyYXRvcklkO1xuXHRcdGNvbnN0IGZpZWxkTmFtZSAgID0gZmllbGRFbGVtZW50LmRhdGFzZXQuZmllbGROYW1lO1xuXG5cdFx0aWYgKCAhIGdlbmVyYXRvcklkIHx8ICEgZmllbGROYW1lICkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0bGV0IGxpc3RlblRvID0gZmllbGRFbGVtZW50LmRhdGFzZXQubGlzdGVuVG8gfHwgbnVsbDtcblxuXHRcdGlmICggbGlzdGVuVG8gKSB7XG5cdFx0XHRpZiAoIGZpZWxkRWxlbWVudC5kYXRhc2V0Lmxpc3RlblRvTXVsdGlwbGUgPT09ICcxJyApIHtcblx0XHRcdFx0bGlzdGVuVG8gPSB0aGlzLnBhcnNlSlNPTiggbGlzdGVuVG8gKTtcblx0XHRcdFx0aWYgKCAhIEFycmF5LmlzQXJyYXkoIGxpc3RlblRvICkgKSB7XG5cdFx0XHRcdFx0bGlzdGVuVG8gPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsaXN0ZW5UbyA9IFsgbGlzdGVuVG8gXTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0Z2VuZXJhdG9ySWQsXG5cdFx0XHRmaWVsZE5hbWUsXG5cdFx0XHRsaXN0ZW5Ubyxcblx0XHRcdHJlcXVpcmVBbGxGaWxsZWQ6IGZpZWxkRWxlbWVudC5kYXRhc2V0LnJlcXVpcmVBbGxGaWxsZWQgPT09ICcxJyxcblx0XHRcdHVwZGF0ZU9uQnV0dG9uOiBmaWVsZEVsZW1lbnQuZGF0YXNldC51cGRhdGVPbkJ1dHRvbiB8fCBudWxsLFxuXHRcdFx0Y2FjaGVUaW1lb3V0OiBwYXJzZUludCggZmllbGRFbGVtZW50LmRhdGFzZXQuY2FjaGVUaW1lb3V0ICkgfHwgNjAsXG5cdFx0XHRmb3JtSWQ6IHBhcnNlSW50KCBmaWVsZEVsZW1lbnQuZGF0YXNldC5mb3JtSWQgKSB8fCAwLFxuXHRcdH07XG5cdH1cblxuXHQvKipcblx0ICogU2FmZWx5IHBhcnNlIEpTT04gc3RyaW5nLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30ganNvblN0cmluZyBKU09OIHN0cmluZy5cblx0ICpcblx0ICogQHJldHVybiB7T2JqZWN0fG51bGx9IFBhcnNlZCBvYmplY3Qgb3IgbnVsbCBpZiBpbnZhbGlkLlxuXHQgKi9cblx0cGFyc2VKU09OKCBqc29uU3RyaW5nICkge1xuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gSlNPTi5wYXJzZSgganNvblN0cmluZyApO1xuXHRcdH0gY2F0Y2ggKCBlICkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZSBpbnB1dCB3cmFwcGVyIGZyb20gRE9NIGVsZW1lbnQuXG5cdCAqIEZhbGxiYWNrIG1ldGhvZCB3aGVuIEpldEZvcm1CdWlsZGVyIEFQSSBkb2Vzbid0IHdvcmsuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgZmllbGROYW1lICAgIEZpZWxkIG5hbWUgdG8gZmluZC5cblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gICAgICBmb3JtTm9kZSAgICAgRm9ybSBlbGVtZW50LlxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fG51bGx9IGtub3duRWxlbWVudCBQcmUtZm91bmQgZWxlbWVudCAoc2tpcHMgRE9NIHNlYXJjaCkuXG5cdCAqXG5cdCAqIEByZXR1cm4ge09iamVjdHxudWxsfSBJbnB1dCB3cmFwcGVyIG9iamVjdCBvciBudWxsIGlmIG5vdCBmb3VuZC5cblx0ICovXG5cdGNyZWF0ZUlucHV0V3JhcHBlckZyb21ET00oIGZpZWxkTmFtZSwgZm9ybU5vZGUsIGtub3duRWxlbWVudCA9IG51bGwgKSB7XG5cdFx0bGV0IGZpZWxkRWxlbWVudCA9IGtub3duRWxlbWVudDtcblxuXHRcdGlmICggISBmaWVsZEVsZW1lbnQgKSB7XG5cdFx0XHRmaWVsZEVsZW1lbnQgPSBmb3JtTm9kZS5xdWVyeVNlbGVjdG9yKCBgW2RhdGEtZmllbGQtbmFtZT1cIiR7IGZpZWxkTmFtZSB9XCJdYCApO1xuXHRcdH1cblxuXHRcdGlmICggISBmaWVsZEVsZW1lbnQgKSB7XG5cdFx0XHRmaWVsZEVsZW1lbnQgPSBmb3JtTm9kZS5xdWVyeVNlbGVjdG9yKCBgW25hbWU9XCIkeyBmaWVsZE5hbWUgfVwiXWAgKTtcblx0XHR9XG5cblx0XHRpZiAoICEgZmllbGRFbGVtZW50ICkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgd3JhcHBlciA9IHtcblx0XHRcdG5hbWU6IGZpZWxkTmFtZSxcblx0XHRcdG5vZGU6IGZpZWxkRWxlbWVudCxcblx0XHRcdHZhbHVlOiB7XG5cdFx0XHRcdGN1cnJlbnQ6IGZpZWxkRWxlbWVudC52YWx1ZSB8fCAnJyxcblx0XHRcdFx0d2F0Y2hlcnM6IFtdLFxuXHRcdFx0XHR3YXRjaDogKCBjYWxsYmFjayApID0+IHtcblx0XHRcdFx0XHQvLyBBZGQgZXZlbnQgbGlzdGVuZXJcblx0XHRcdFx0XHRjb25zdCBoYW5kbGVyID0gKCkgPT4ge1xuXHRcdFx0XHRcdFx0d3JhcHBlci52YWx1ZS5jdXJyZW50ID0gZmllbGRFbGVtZW50LnZhbHVlIHx8ICcnO1xuXHRcdFx0XHRcdFx0Y2FsbGJhY2soIHdyYXBwZXIudmFsdWUuY3VycmVudCApO1xuXHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHRmaWVsZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2NoYW5nZScsIGhhbmRsZXIgKTtcblx0XHRcdFx0XHRmaWVsZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2lucHV0JywgaGFuZGxlciApO1xuXG5cdFx0XHRcdFx0Ly8gUmV0dXJuIHVud2F0Y2ggZnVuY3Rpb25cblx0XHRcdFx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0XHRcdFx0ZmllbGRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdjaGFuZ2UnLCBoYW5kbGVyICk7XG5cdFx0XHRcdFx0XHRmaWVsZEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2lucHV0JywgaGFuZGxlciApO1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH07XG5cblxuXHRcdHJldHVybiB3cmFwcGVyO1xuXHR9XG5cblx0LyoqXG5cdCAqIEZpbmQgYW4gaW5wdXQgZWxlbWVudCB3aXRoaW4gYSBzY29wZSwgdGhlbiBmYWxsIGJhY2sgdG8gdGhlIGZ1bGwgZm9ybS5cblx0ICpcblx0ICogRm9yIHJlcGVhdGVyIGZpZWxkcywgdGhlIHNjb3BlIGlzIHRoZSByZXBlYXRlciByb3cgZWxlbWVudCBzbyB0aGF0XG5cdCAqIHNvdXJjZSBmaWVsZHMgYXJlIHJlc29sdmVkIHdpdGhpbiB0aGUgc2FtZSByb3cgYmVmb3JlIHNlYXJjaGluZyBnbG9iYWxseS5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICBmaWVsZE5hbWUgICBGaWVsZCB0byBmaW5kLlxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fG51bGx9IHNjb3BlRWxlbWVudCBTY29wZSB0byBzZWFyY2ggZmlyc3QgKGUuZy4gcmVwZWF0ZXIgcm93KS5cblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gICAgICBmb3JtTm9kZSAgICBGb3JtIGVsZW1lbnQgZm9yIGdsb2JhbCBmYWxsYmFjay5cblx0ICpcblx0ICogQHJldHVybiB7SFRNTEVsZW1lbnR8bnVsbH0gRm91bmQgZWxlbWVudCBvciBudWxsLlxuXHQgKi9cblx0ZmluZEVsZW1lbnRJblNjb3BlKCBmaWVsZE5hbWUsIHNjb3BlRWxlbWVudCwgZm9ybU5vZGUgKSB7XG5cdFx0Y29uc3Qgcm9vdHMgPSBzY29wZUVsZW1lbnQgPyBbIHNjb3BlRWxlbWVudCwgZm9ybU5vZGUgXSA6IFsgZm9ybU5vZGUgXTtcblxuXHRcdGZvciAoIGNvbnN0IHJvb3Qgb2Ygcm9vdHMgKSB7XG5cdFx0XHRsZXQgZWwgPSByb290LnF1ZXJ5U2VsZWN0b3IoIGBbZGF0YS1maWVsZC1uYW1lPVwiJHsgZmllbGROYW1lIH1cIl1gIClcblx0XHRcdFx0fHwgcm9vdC5xdWVyeVNlbGVjdG9yKCBgW25hbWUqPVwiWyR7IGZpZWxkTmFtZSB9XVwiXWAgKTtcblxuXHRcdFx0aWYgKCBlbCApIHtcblx0XHRcdFx0cmV0dXJuIGVsO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEJ1aWxkIGEgdW5pcXVlIHdhdGNoZXIga2V5IHRoYXQgaW5jbHVkZXMgcmVwZWF0ZXIgcm93IGNvbnRleHQuXG5cdCAqXG5cdCAqIFdoZW4gdHdvIHJvd3MgYm90aCBjb250YWluIGEgZmllbGQgbmFtZWQgXCJjYXRlZ29yeVwiLCB0aGV5IG11c3QgaGF2ZVxuXHQgKiBzZXBhcmF0ZSB3YXRjaGVycyBzbyBjaGFuZ2VzIGluIG9uZSByb3cgZG9uJ3QgZmlyZSB1cGRhdGVzIGluIHRoZSBvdGhlci5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICBzb3VyY2VGaWVsZE5hbWUgU291cmNlIGZpZWxkIG5hbWUuXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8bnVsbH0gcmVwZWF0ZXJSb3cgICAgIFJlcGVhdGVyIHJvdyBlbGVtZW50LCBpZiBhbnkuXG5cdCAqXG5cdCAqIEByZXR1cm4ge3N0cmluZ30gVW5pcXVlIHdhdGNoZXIga2V5LlxuXHQgKi9cblx0YnVpbGRXYXRjaGVyS2V5KCBzb3VyY2VGaWVsZE5hbWUsIHJlcGVhdGVyUm93ICkge1xuXHRcdGlmICggISByZXBlYXRlclJvdyApIHtcblx0XHRcdHJldHVybiBzb3VyY2VGaWVsZE5hbWU7XG5cdFx0fVxuXG5cdFx0Ly8gVXNlIHRoZSByZXBlYXRlciByb3cncyBpbmRleCBpbiBpdHMgcGFyZW50IGFzIGEgc3RhYmxlIGlkZW50aWZpZXJcblx0XHRjb25zdCBwYXJlbnQgICAgICAgPSByZXBlYXRlclJvdy5wYXJlbnRFbGVtZW50O1xuXHRcdGNvbnN0IGluZGV4ICAgICAgICA9IHBhcmVudCA/IEFycmF5LmZyb20oIHBhcmVudC5jaGlsZHJlbiApLmluZGV4T2YoIHJlcGVhdGVyUm93ICkgOiAwO1xuXHRcdGNvbnN0IHJlcGVhdGVyTmFtZSA9IHJlcGVhdGVyUm93LmNsb3Nlc3QoICdbZGF0YS1yZXBlYXRlcj1cIjFcIl0nICk/LmRhdGFzZXQ/LmZpZWxkTmFtZSB8fCAncmVwZWF0ZXInO1xuXG5cdFx0cmV0dXJuIGAkeyByZXBlYXRlck5hbWUgfVskeyBpbmRleCB9XS4keyBzb3VyY2VGaWVsZE5hbWUgfWA7XG5cdH1cblxuXHQvKipcblx0ICogV2F0Y2ggYSBzcGVjaWZpYyBmaWVsZCBmb3IgY2hhbmdlcy5cblx0ICpcblx0ICogV2hlbiB0aGUgdGFyZ2V0IGZpZWxkIGxpdmVzIGluc2lkZSBhIHJlcGVhdGVyIHJvdywgdGhlIHNvdXJjZSBmaWVsZCBpc1xuXHQgKiBmaXJzdCBzZWFyY2hlZCB3aXRoaW4gdGhhdCBzYW1lIHJvdy4gSWYgbm90IGZvdW5kIHRoZXJlLCBzZWFyY2ggZmFsbHNcblx0ICogYmFjayB0byB0aGUgZnVsbCBmb3JtIChzdXBwb3J0cyBnbG9iYWwtZmllbGQg4oaSIHJlcGVhdGVyLWZpZWxkIHBhdHRlcm5zKS5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9ICAgICAgc291cmNlRmllbGROYW1lIEZpZWxkIG5hbWUgdG8gd2F0Y2guXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSAgICAgIHRhcmdldEZpZWxkTmFtZSBGaWVsZCBuYW1lIHRvIHVwZGF0ZS5cblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZm9ybU5vZGUgICAgICAgIEZvcm0gZWxlbWVudC5cblx0ICovXG5cdHdhdGNoRmllbGQoIHNvdXJjZUZpZWxkTmFtZSwgdGFyZ2V0RmllbGROYW1lLCBmb3JtTm9kZSApIHtcblx0XHRjb25zdCBmaWVsZERhdGEgICAgID0gdGhpcy5hdXRvVXBkYXRlRmllbGRzLmdldCggdGFyZ2V0RmllbGROYW1lICk7XG5cdFx0Y29uc3QgdGFyZ2V0RWxlbWVudCA9IGZpZWxkRGF0YT8uZWxlbWVudCB8fCBudWxsO1xuXHRcdGNvbnN0IHJlcGVhdGVyUm93ICAgPSB0YXJnZXRFbGVtZW50ID8gdGFyZ2V0RWxlbWVudC5jbG9zZXN0KCAnLmpldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXJfX3JvdycgKSA6IG51bGw7XG5cdFx0Y29uc3Qgc291cmNlRWxlbWVudCA9IHRoaXMuZmluZEVsZW1lbnRJblNjb3BlKCBzb3VyY2VGaWVsZE5hbWUsIHJlcGVhdGVyUm93LCBmb3JtTm9kZSApO1xuXG5cdFx0bGV0IHNvdXJjZUlucHV0ID0gbnVsbDtcblxuXHRcdGlmICggc291cmNlRWxlbWVudCAmJiB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJNYWluPy5pbnB1dERhdGEgKSB7XG5cdFx0XHRjb25zdCBhY3R1YWxOYW1lID0gc291cmNlRWxlbWVudC5nZXRBdHRyaWJ1dGUoICduYW1lJyApIHx8IHNvdXJjZUZpZWxkTmFtZTtcblxuXHRcdFx0aWYgKCB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJNYWluLmlucHV0RGF0YS5maW5kSW5wdXQgKSB7XG5cdFx0XHRcdHNvdXJjZUlucHV0ID0gd2luZG93LkpldEZvcm1CdWlsZGVyTWFpbi5pbnB1dERhdGEuZmluZElucHV0KCBhY3R1YWxOYW1lLCBmb3JtTm9kZSApIHx8XG5cdFx0XHRcdCAgICAgICAgICAgICAgd2luZG93LkpldEZvcm1CdWlsZGVyTWFpbi5pbnB1dERhdGEuZmluZElucHV0KCBzb3VyY2VGaWVsZE5hbWUsIGZvcm1Ob2RlICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggISBzb3VyY2VJbnB1dCAmJiB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJNYWluLmlucHV0RGF0YS5nZXRJbnB1dCApIHtcblx0XHRcdFx0c291cmNlSW5wdXQgPSB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJNYWluLmlucHV0RGF0YS5nZXRJbnB1dCggYWN0dWFsTmFtZSwgZm9ybU5vZGUgKSB8fFxuXHRcdFx0XHQgICAgICAgICAgICAgIHdpbmRvdy5KZXRGb3JtQnVpbGRlck1haW4uaW5wdXREYXRhLmdldElucHV0KCBzb3VyY2VGaWVsZE5hbWUsIGZvcm1Ob2RlICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggISBzb3VyY2VJbnB1dCAmJiB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJNYWluLmlucHV0RGF0YS5nZXRBbGwgKSB7XG5cdFx0XHRcdGNvbnN0IGFsbElucHV0cyA9IHdpbmRvdy5KZXRGb3JtQnVpbGRlck1haW4uaW5wdXREYXRhLmdldEFsbCggZm9ybU5vZGUgKTtcblx0XHRcdFx0aWYgKCBhbGxJbnB1dHMgKSB7XG5cdFx0XHRcdFx0c291cmNlSW5wdXQgPSBhbGxJbnB1dHMuZmluZCggKCBpbnB1dCApID0+IGlucHV0Lm5hbWUgPT09IGFjdHVhbE5hbWUgKSB8fFxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgYWxsSW5wdXRzLmZpbmQoICggaW5wdXQgKSA9PiBpbnB1dC5uYW1lID09PSBzb3VyY2VGaWVsZE5hbWUgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoICEgc291cmNlRWxlbWVudCApIHtcblx0XHRcdGlmICggd2luZG93LkpldEZvcm1CdWlsZGVyTWFpbj8uaW5wdXREYXRhPy5maW5kSW5wdXQgKSB7XG5cdFx0XHRcdHNvdXJjZUlucHV0ID0gd2luZG93LkpldEZvcm1CdWlsZGVyTWFpbi5pbnB1dERhdGEuZmluZElucHV0KCBzb3VyY2VGaWVsZE5hbWUsIGZvcm1Ob2RlICk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoICEgc291cmNlSW5wdXQgJiYgd2luZG93LkpldEZvcm1CdWlsZGVyTWFpbj8uaW5wdXREYXRhPy5nZXRJbnB1dCApIHtcblx0XHRcdFx0c291cmNlSW5wdXQgPSB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJNYWluLmlucHV0RGF0YS5nZXRJbnB1dCggc291cmNlRmllbGROYW1lLCBmb3JtTm9kZSApO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCAhIHNvdXJjZUlucHV0ICYmIHdpbmRvdy5KZXRGb3JtQnVpbGRlck1haW4/LmlucHV0RGF0YT8uZ2V0QWxsICkge1xuXHRcdFx0XHRjb25zdCBhbGxJbnB1dHMgPSB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJNYWluLmlucHV0RGF0YS5nZXRBbGwoIGZvcm1Ob2RlICk7XG5cdFx0XHRcdGlmICggYWxsSW5wdXRzICkge1xuXHRcdFx0XHRcdHNvdXJjZUlucHV0ID0gYWxsSW5wdXRzLmZpbmQoICggaW5wdXQgKSA9PiBpbnB1dC5uYW1lID09PSBzb3VyY2VGaWVsZE5hbWUgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICggISBzb3VyY2VJbnB1dCApIHtcblx0XHRcdGNvbnN0IGVsID0gc291cmNlRWxlbWVudCB8fCB0aGlzLmZpbmRFbGVtZW50SW5TY29wZSggc291cmNlRmllbGROYW1lLCBudWxsLCBmb3JtTm9kZSApO1xuXHRcdFx0aWYgKCBlbCApIHtcblx0XHRcdFx0c291cmNlSW5wdXQgPSB0aGlzLmNyZWF0ZUlucHV0V3JhcHBlckZyb21ET00oIGVsLmdldEF0dHJpYnV0ZSggJ25hbWUnICkgfHwgc291cmNlRmllbGROYW1lLCBmb3JtTm9kZSwgZWwgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoICEgc291cmNlSW5wdXQgKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oIGBbSkZCIEF1dG8tVXBkYXRlXSBTb3VyY2UgZmllbGQgbm90IGZvdW5kOiAkeyBzb3VyY2VGaWVsZE5hbWUgfWAgKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCB3YXRjaGVyS2V5ID0gdGhpcy5idWlsZFdhdGNoZXJLZXkoIHNvdXJjZUZpZWxkTmFtZSwgcmVwZWF0ZXJSb3cgKTtcblx0XHRsZXQgd2F0Y2hlciAgICAgID0gdGhpcy53YXRjaGVycy5nZXQoIHdhdGNoZXJLZXkgKTtcblxuXHRcdGlmICggISB3YXRjaGVyICkge1xuXHRcdFx0Y29uc3QgdW53YXRjaCA9IHNvdXJjZUlucHV0LnZhbHVlLndhdGNoKCAoKSA9PiB7XG5cdFx0XHRcdHRoaXMuaGFuZGxlRmllbGRDaGFuZ2UoIHdhdGNoZXJLZXksIGZvcm1Ob2RlICk7XG5cdFx0XHR9ICk7XG5cblx0XHRcdHdhdGNoZXIgPSB7XG5cdFx0XHRcdHVud2F0Y2gsXG5cdFx0XHRcdGRlcGVuZGVudHM6IFtdLFxuXHRcdFx0fTtcblxuXHRcdFx0dGhpcy53YXRjaGVycy5zZXQoIHdhdGNoZXJLZXksIHdhdGNoZXIgKTtcblx0XHR9XG5cblx0XHRpZiAoICEgd2F0Y2hlci5kZXBlbmRlbnRzLmluY2x1ZGVzKCB0YXJnZXRGaWVsZE5hbWUgKSApIHtcblx0XHRcdHdhdGNoZXIuZGVwZW5kZW50cy5wdXNoKCB0YXJnZXRGaWVsZE5hbWUgKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogV2F0Y2ggYWxsIGZpZWxkcyBpbiBmb3JtIGZvciBjaGFuZ2VzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gICAgICB0YXJnZXRGaWVsZE5hbWUgRmllbGQgbmFtZSB0byB1cGRhdGUuXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGZvcm1Ob2RlICAgICAgICBGb3JtIGVsZW1lbnQuXG5cdCAqL1xuXHR3YXRjaEFsbEZpZWxkcyggdGFyZ2V0RmllbGROYW1lLCBmb3JtTm9kZSApIHtcblx0XHRjb25zdCBhbGxJbnB1dHMgPSB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJNYWluPy5pbnB1dERhdGE/LmdldEFsbCggZm9ybU5vZGUgKSA/PyBbXTtcblxuXHRcdGFsbElucHV0cy5mb3JFYWNoKCAoIGlucHV0ICkgPT4ge1xuXHRcdFx0Y29uc3QgZmllbGROYW1lID0gaW5wdXQubmFtZTtcblxuXHRcdFx0aWYgKCBmaWVsZE5hbWUgPT09IHRhcmdldEZpZWxkTmFtZSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLndhdGNoRmllbGQoIGZpZWxkTmFtZSwgdGFyZ2V0RmllbGROYW1lLCBmb3JtTm9kZSApO1xuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBXYXRjaCBhbiBhY3Rpb24gYnV0dG9uIGZvciBjbGlja3MgdG8gdHJpZ2dlciBhbiB1cGRhdGUuXG5cdCAqXG5cdCAqIEFjdGlvbiBidXR0b25zIChqZXQtZm9ybXMvc3VibWl0LWZpZWxkKSBhcmUgaWRlbnRpZmllZCBieSB0aGVpciBhY3Rpb25fdHlwZSxcblx0ICogd2hpY2ggaXMgcmVuZGVyZWQgYXMgZGF0YS10eXBlIG9uIHRoZSB3cmFwcGVyIGRpdi4gVGhlIDxidXR0b24+IGVsZW1lbnRcblx0ICogaXRzZWxmIGlzIGZvdW5kIGluc2lkZSB0aGF0IHdyYXBwZXIuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSAgICAgIGFjdGlvblR5cGUgICAgIFZhbHVlIG9mIGFjdGlvbl90eXBlIChlLmcuIFwibmV4dFwiLCBcInByZXZcIikuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSAgICAgIHRhcmdldEZpZWxkS2V5IEtleSBvZiB0aGUgZmllbGQgdG8gdXBkYXRlLlxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBmb3JtTm9kZSAgICAgICBGb3JtIGVsZW1lbnQuXG5cdCAqL1xuXHR3YXRjaEJ1dHRvbiggYWN0aW9uVHlwZSwgdGFyZ2V0RmllbGRLZXksIGZvcm1Ob2RlICkge1xuXHRcdGNvbnN0IGxpc3RlbmVyS2V5ID0gYCR7IGFjdGlvblR5cGUgfTo6JHsgdGFyZ2V0RmllbGRLZXkgfWA7XG5cblx0XHRpZiAoIHRoaXMuYnV0dG9uTGlzdGVuZXJzLmhhcyggbGlzdGVuZXJLZXkgKSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCB3cmFwcGVyICAgICAgID0gZm9ybU5vZGUucXVlcnlTZWxlY3RvciggYC5qZXQtZm9ybS1idWlsZGVyX19hY3Rpb24tYnV0dG9uLXdyYXBwZXJbZGF0YS10eXBlPVwiJHsgYWN0aW9uVHlwZSB9XCJdYCApO1xuXHRcdGNvbnN0IGJ1dHRvbkVsZW1lbnQgPSB3cmFwcGVyID8gd3JhcHBlci5xdWVyeVNlbGVjdG9yKCAnYnV0dG9uJyApIDogbnVsbDtcblxuXHRcdGlmICggISBidXR0b25FbGVtZW50ICkge1xuXHRcdFx0Y29uc29sZS53YXJuKCBgW0pGQiBBdXRvLVVwZGF0ZV0gQWN0aW9uIGJ1dHRvbiBub3QgZm91bmQgZm9yIHR5cGU6ICR7IGFjdGlvblR5cGUgfWAgKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRsZXQgaXNQcm9jZXNzaW5nID0gZmFsc2U7XG5cblx0XHRjb25zdCBoYW5kbGVyID0gYXN5bmMgKCBldmVudCApID0+IHtcblx0XHRcdC8vIEFsbG93IG9uZSBzeW50aGV0aWMgY2xpY2sgdG8gcGFzcyB0aHJvdWdoIGFmdGVyIG9wdGlvbnMgYXJlIHJlZnJlc2hlZC5cblx0XHRcdGlmICggYnV0dG9uRWxlbWVudC5kYXRhc2V0LmpmYkF1QnlwYXNzQ2xpY2sgPT09ICcxJyApIHtcblx0XHRcdFx0ZGVsZXRlIGJ1dHRvbkVsZW1lbnQuZGF0YXNldC5qZmJBdUJ5cGFzc0NsaWNrO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIERyb3AgcmVwZWF0ZWQgY2xpY2tzIHdoaWxlIHVwZGF0ZSBpcyBpbiBmbGlnaHQuXG5cdFx0XHRpZiAoIGlzUHJvY2Vzc2luZyApIHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0aXNQcm9jZXNzaW5nID0gdHJ1ZTtcblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YXdhaXQgdGhpcy51cGRhdGVGaWVsZCggdGFyZ2V0RmllbGRLZXksIGZvcm1Ob2RlICk7XG5cdFx0XHR9IGNhdGNoICggZXJyb3IgKSB7XG5cdFx0XHRcdC8vIFNhZmV0eSBuZXQ6IG5ldmVyIGJsb2NrIG9yaWdpbmFsIGJ1dHRvbiBhY3Rpb24gYmVjYXVzZSBvZiBiYWQgY29uZmlnL3N0YXRlLlxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdbSkZCIEF1dG8tVXBkYXRlXSBQcmUtYnV0dG9uIHVwZGF0ZSBmYWlsZWQsIGNvbnRpbnVpbmcgYWN0aW9uOicsIGVycm9yICk7XG5cdFx0XHR9IGZpbmFsbHkge1xuXHRcdFx0XHRpc1Byb2Nlc3NpbmcgPSBmYWxzZTtcblx0XHRcdFx0YnV0dG9uRWxlbWVudC5kYXRhc2V0LmpmYkF1QnlwYXNzQ2xpY2sgPSAnMSc7XG5cdFx0XHRcdGJ1dHRvbkVsZW1lbnQuY2xpY2soKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0YnV0dG9uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBoYW5kbGVyICk7XG5cdFx0dGhpcy5idXR0b25MaXN0ZW5lcnMuc2V0KCBsaXN0ZW5lcktleSwgeyBlbGVtZW50OiBidXR0b25FbGVtZW50LCBoYW5kbGVyIH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGUgZmllbGQgY2hhbmdlIGV2ZW50LlxuXHQgKiBUcmlnZ2VycyB1cGRhdGUgZm9yIGFsbCBkZXBlbmRlbnQgZmllbGRzIHdpdGggZGVib3VuY2luZy5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9ICAgICAgc291cmNlRmllbGROYW1lIENoYW5nZWQgZmllbGQgbmFtZS5cblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZm9ybU5vZGUgICAgICAgIEZvcm0gZWxlbWVudC5cblx0ICovXG5cdGhhbmRsZUZpZWxkQ2hhbmdlKCBzb3VyY2VGaWVsZE5hbWUsIGZvcm1Ob2RlICkge1xuXHRcdGNvbnN0IHdhdGNoZXIgPSB0aGlzLndhdGNoZXJzLmdldCggc291cmNlRmllbGROYW1lICk7XG5cblx0XHRpZiAoICEgd2F0Y2hlciB8fCAhIHdhdGNoZXIuZGVwZW5kZW50cy5sZW5ndGggKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0d2F0Y2hlci5kZXBlbmRlbnRzLmZvckVhY2goICggdGFyZ2V0RmllbGROYW1lICkgPT4ge1xuXHRcdFx0Y29uc3QgZmllbGREYXRhID0gdGhpcy5hdXRvVXBkYXRlRmllbGRzLmdldCggdGFyZ2V0RmllbGROYW1lICk7XG5cdFx0XHRjb25zdCBjb25maWcgICAgPSBmaWVsZERhdGE/LmNvbmZpZztcblxuXHRcdFx0Ly8gU2tpcCBhdXRvLXVwZGF0ZSBpZiB0aGlzIGZpZWxkIHVzZXMgYSBidXR0b24gdHJpZ2dlci5cblx0XHRcdGlmICggY29uZmlnPy51cGRhdGVPbkJ1dHRvbiApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiBcIlJlcXVpcmUgQWxsIEZpZWxkcyBGaWxsZWRcIiBpcyBvbiBhbmQgYW55IGxpc3RlblRvIGZpZWxkIGlzIG5vd1xuXHRcdFx0Ly8gZW1wdHksIGNsZWFyIHRoZSBkZXBlbmRlbnQgZmllbGQncyBvcHRpb25zIGltbWVkaWF0ZWx5LlxuXHRcdFx0aWYgKCBjb25maWc/LnJlcXVpcmVBbGxGaWxsZWQgKSB7XG5cdFx0XHRcdGNvbnN0IGNvbnRleHQgICA9IHRoaXMuY29sbGVjdENvbnRleHQoIGNvbmZpZywgZm9ybU5vZGUgKTtcblx0XHRcdFx0Y29uc3QgYWxsRmlsbGVkID0gY29uZmlnLmxpc3RlblRvLmV2ZXJ5KFxuXHRcdFx0XHRcdCggZmllbGROYW1lICkgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3QgdmFsID0gY29udGV4dFsgZmllbGROYW1lIF07XG5cdFx0XHRcdFx0XHRyZXR1cm4gdmFsICE9PSB1bmRlZmluZWQgJiYgdmFsICE9PSBudWxsICYmIHZhbCAhPT0gJyc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdGlmICggISBhbGxGaWxsZWQgKSB7XG5cdFx0XHRcdFx0dGhpcy5hYm9ydFByZXZpb3VzUmVxdWVzdCggdGFyZ2V0RmllbGROYW1lICk7XG5cdFx0XHRcdFx0dGhpcy5jYWNoZU1hbmFnZXIuY2xlYXJCeUZpZWxkKCBjb25maWcuZmllbGROYW1lICk7XG5cdFx0XHRcdFx0dGhpcy5vcHRpb25zVXBkYXRlci51cGRhdGVPcHRpb25zKCBmaWVsZERhdGEuZWxlbWVudCwgW10sIGZvcm1Ob2RlICk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuZGVib3VuY2VkVXBkYXRlKCB0YXJnZXRGaWVsZE5hbWUsIGZvcm1Ob2RlICk7XG5cdFx0fSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIERlYm91bmNlZCB1cGRhdGUgZm9yIHRhcmdldCBmaWVsZC5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9ICAgICAgdGFyZ2V0RmllbGROYW1lIEZpZWxkIHRvIHVwZGF0ZS5cblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZm9ybU5vZGUgICAgICAgIEZvcm0gZWxlbWVudC5cblx0ICovXG5cdGRlYm91bmNlZFVwZGF0ZSggdGFyZ2V0RmllbGROYW1lLCBmb3JtTm9kZSApIHtcblx0XHRjbGVhclRpbWVvdXQoIHRoaXMuZGVib3VuY2VUaW1lcnMuZ2V0KCB0YXJnZXRGaWVsZE5hbWUgKSApO1xuXG5cdFx0Y29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCAoKSA9PiB7XG5cdFx0XHR0aGlzLnVwZGF0ZUZpZWxkKCB0YXJnZXRGaWVsZE5hbWUsIGZvcm1Ob2RlICk7XG5cdFx0XHR0aGlzLmRlYm91bmNlVGltZXJzLmRlbGV0ZSggdGFyZ2V0RmllbGROYW1lICk7XG5cdFx0fSwgdGhpcy5kZWJvdW5jZURlbGF5ICk7XG5cblx0XHR0aGlzLmRlYm91bmNlVGltZXJzLnNldCggdGFyZ2V0RmllbGROYW1lLCB0aW1lciApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBKRkIgZm9ybSdzIGxvY2tTdGF0ZSByZWFjdGl2ZSB2YXIuXG5cdCAqIEJsb2NrcyBtdWx0aS1zdGVwIHBhZ2UgdHJhbnNpdGlvbnMgd2hpbGUgYW55IGdlbmVyYXRvciB1cGRhdGUgaXMgcGVuZGluZy5cblx0ICpcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZm9ybU5vZGUgRm9ybSBlbGVtZW50LlxuXHQgKiBAcmV0dXJuIHtPYmplY3R8bnVsbH0gTG9hZGluZ1JlYWN0aXZlVmFyIG9yIG51bGwuXG5cdCAqL1xuXHRnZXRMb2NrU3RhdGUoIGZvcm1Ob2RlICkge1xuXHRcdGNvbnN0IGZvcm1JZCA9IGZvcm1Ob2RlPy5kYXRhc2V0Py5mb3JtSWQ7XG5cblx0XHRpZiAoICEgZm9ybUlkIHx8ICEgd2luZG93LkpldEZvcm1CdWlsZGVyPy5bIGZvcm1JZCBdICkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHdpbmRvdy5KZXRGb3JtQnVpbGRlclsgZm9ybUlkIF0/LmdldFN1Ym1pdD8uKCk/LmxvY2tTdGF0ZSA/PyBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEluY3JlbWVudCB0aGUgbG9hZGluZyBjb3VudGVyIGZvciBhIGZvcm0gYW5kIGxvY2sgaWYgZmlyc3QgcmVxdWVzdC5cblx0ICpcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZm9ybU5vZGUgRm9ybSBlbGVtZW50LlxuXHQgKi9cblx0bG9ja0Zvcm1Mb2FkaW5nKCBmb3JtTm9kZSApIHtcblx0XHRjb25zdCBmb3JtSWQgPSBmb3JtTm9kZT8uZGF0YXNldD8uZm9ybUlkO1xuXG5cdFx0aWYgKCAhIGZvcm1JZCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBjb3VudCA9ICggdGhpcy5sb2FkaW5nQ291bnRzLmdldCggZm9ybUlkICkgPz8gMCApICsgMTtcblx0XHR0aGlzLmxvYWRpbmdDb3VudHMuc2V0KCBmb3JtSWQsIGNvdW50ICk7XG5cblx0XHRpZiAoIGNvdW50ID09PSAxICkge1xuXHRcdFx0dGhpcy5nZXRMb2NrU3RhdGUoIGZvcm1Ob2RlICk/LnN0YXJ0KCk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIERlY3JlbWVudCB0aGUgbG9hZGluZyBjb3VudGVyIGZvciBhIGZvcm0gYW5kIHVubG9jayB3aGVuIGFsbCByZXF1ZXN0cyBmaW5pc2guXG5cdCAqXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGZvcm1Ob2RlIEZvcm0gZWxlbWVudC5cblx0ICovXG5cdHVubG9ja0Zvcm1Mb2FkaW5nKCBmb3JtTm9kZSApIHtcblx0XHRjb25zdCBmb3JtSWQgPSBmb3JtTm9kZT8uZGF0YXNldD8uZm9ybUlkO1xuXG5cdFx0aWYgKCAhIGZvcm1JZCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBjb3VudCA9IE1hdGgubWF4KCAwLCAoIHRoaXMubG9hZGluZ0NvdW50cy5nZXQoIGZvcm1JZCApID8/IDAgKSAtIDEgKTtcblx0XHR0aGlzLmxvYWRpbmdDb3VudHMuc2V0KCBmb3JtSWQsIGNvdW50ICk7XG5cblx0XHRpZiAoIGNvdW50ID09PSAwICkge1xuXHRcdFx0dGhpcy5nZXRMb2NrU3RhdGUoIGZvcm1Ob2RlICk/LmVuZCgpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBVcGRhdGUgb3B0aW9ucyBmb3IgYSBmaWVsZC5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9ICAgICAgdGFyZ2V0RmllbGROYW1lIEZpZWxkIHRvIHVwZGF0ZS5cblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZm9ybU5vZGUgICAgICAgIEZvcm0gZWxlbWVudC5cblx0ICovXG5cdGFzeW5jIHVwZGF0ZUZpZWxkKCB0YXJnZXRGaWVsZE5hbWUsIGZvcm1Ob2RlICkge1xuXHRcdGNvbnN0IGZpZWxkRGF0YSA9IHRoaXMuYXV0b1VwZGF0ZUZpZWxkcy5nZXQoIHRhcmdldEZpZWxkTmFtZSApO1xuXG5cdFx0aWYgKCAhIGZpZWxkRGF0YSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCB7IGVsZW1lbnQsIGNvbmZpZyB9ID0gZmllbGREYXRhO1xuXG5cdFx0Y29uc3QgY29udGV4dCA9IHRoaXMuY29sbGVjdENvbnRleHQoIGNvbmZpZywgZm9ybU5vZGUgKTtcblxuXHRcdGNvbnN0IGNhY2hlZE9wdGlvbnMgPSB0aGlzLmNhY2hlTWFuYWdlci5nZXQoXG5cdFx0XHRjb25maWcuZ2VuZXJhdG9ySWQsXG5cdFx0XHRjb250ZXh0LFxuXHRcdFx0Y29uZmlnLmNhY2hlVGltZW91dCxcblx0XHRcdGNvbmZpZy5maWVsZE5hbWVcblx0XHQpO1xuXG5cdFx0aWYgKCBjYWNoZWRPcHRpb25zICkge1xuXHRcdFx0dGhpcy5vcHRpb25zVXBkYXRlci51cGRhdGVPcHRpb25zKCBlbGVtZW50LCBjYWNoZWRPcHRpb25zLCBmb3JtTm9kZSApO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuYWJvcnRQcmV2aW91c1JlcXVlc3QoIHRhcmdldEZpZWxkTmFtZSApO1xuXG5cdFx0Y29uc3QgYWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuXHRcdHRoaXMuYWJvcnRDb250cm9sbGVycy5zZXQoIHRhcmdldEZpZWxkTmFtZSwgYWJvcnRDb250cm9sbGVyICk7XG5cblx0XHR0cnkge1xuXHRcdFx0dGhpcy5vcHRpb25zVXBkYXRlci5zZXRMb2FkaW5nU3RhdGUoIGVsZW1lbnQsIHRydWUgKTtcblx0XHRcdHRoaXMubG9ja0Zvcm1Mb2FkaW5nKCBmb3JtTm9kZSApO1xuXG5cdFx0XHRjb25zdCBvcHRpb25zID0gYXdhaXQgdGhpcy5mZXRjaE9wdGlvbnMoIGNvbmZpZywgY29udGV4dCwgYWJvcnRDb250cm9sbGVyLnNpZ25hbCApO1xuXG5cdFx0XHR0aGlzLmNhY2hlTWFuYWdlci5zZXQoIGNvbmZpZy5nZW5lcmF0b3JJZCwgY29udGV4dCwgb3B0aW9ucywgY29uZmlnLmZpZWxkTmFtZSApO1xuXHRcdFx0dGhpcy5vcHRpb25zVXBkYXRlci51cGRhdGVPcHRpb25zKCBlbGVtZW50LCBvcHRpb25zLCBmb3JtTm9kZSApO1xuXHRcdH0gY2F0Y2ggKCBlcnJvciApIHtcblx0XHRcdGlmICggZXJyb3IubmFtZSAhPT0gJ0Fib3J0RXJyb3InICkge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKCAnW0pGQiBBdXRvLVVwZGF0ZV0gVXBkYXRlIGZhaWxlZDonLCBlcnJvciApO1xuXHRcdFx0XHR0aGlzLm9wdGlvbnNVcGRhdGVyLnNldEVycm9yU3RhdGUoIGVsZW1lbnQsIGVycm9yLm1lc3NhZ2UgKTtcblx0XHRcdH1cblx0XHR9IGZpbmFsbHkge1xuXHRcdFx0dGhpcy5vcHRpb25zVXBkYXRlci5zZXRMb2FkaW5nU3RhdGUoIGVsZW1lbnQsIGZhbHNlICk7XG5cdFx0XHR0aGlzLnVubG9ja0Zvcm1Mb2FkaW5nKCBmb3JtTm9kZSApO1xuXHRcdFx0dGhpcy5hYm9ydENvbnRyb2xsZXJzLmRlbGV0ZSggdGFyZ2V0RmllbGROYW1lICk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIENvbGxlY3QgY29udGV4dCB2YWx1ZXMgZnJvbSBmb3JtIGZpZWxkcy5cblx0ICpcblx0ICogV2hlbiB0aGUgdGFyZ2V0IGZpZWxkIGxpdmVzIGluc2lkZSBhIHJlcGVhdGVyIHJvdywgc291cmNlIGZpZWxkcyBhcmVcblx0ICogcmVzb2x2ZWQgd2l0aGluIHRoZSBzYW1lIHJvdyBmaXJzdCBzbyBlYWNoIHJvdyBoYXMgaXRzIG93biBjb250ZXh0LlxuXHQgKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gICAgICBjb25maWcgICBGaWVsZCBjb25maWd1cmF0aW9uLlxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBmb3JtTm9kZSBGb3JtIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEByZXR1cm4ge09iamVjdH0gQ29udGV4dCBvYmplY3Qgd2l0aCBmaWVsZCB2YWx1ZXMuXG5cdCAqL1xuXHRjb2xsZWN0Q29udGV4dCggY29uZmlnLCBmb3JtTm9kZSApIHtcblx0XHRjb25zdCBjb250ZXh0ID0ge307XG5cblx0XHRjb25zdCBsb29rdXBLZXkgICAgID0gY29uZmlnLmZpZWxkS2V5IHx8IGNvbmZpZy5maWVsZE5hbWU7XG5cdFx0Y29uc3QgZmllbGREYXRhICAgICA9IHRoaXMuYXV0b1VwZGF0ZUZpZWxkcy5nZXQoIGxvb2t1cEtleSApO1xuXHRcdGNvbnN0IHRhcmdldEVsZW1lbnQgPSBmaWVsZERhdGE/LmVsZW1lbnQgfHwgbnVsbDtcblx0XHRjb25zdCByZXBlYXRlclJvdyAgID0gdGFyZ2V0RWxlbWVudCA/IHRhcmdldEVsZW1lbnQuY2xvc2VzdCggJy5qZXQtZm9ybS1idWlsZGVyLXJlcGVhdGVyX19yb3cnICkgOiBudWxsO1xuXG5cdFx0aWYgKCBjb25maWcubGlzdGVuVG8gJiYgQXJyYXkuaXNBcnJheSggY29uZmlnLmxpc3RlblRvICkgKSB7XG5cdFx0XHRjb25maWcubGlzdGVuVG8uZm9yRWFjaCggKCBzb3VyY2VGaWVsZE5hbWUgKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHNvdXJjZUVsZW1lbnQgPSB0aGlzLmZpbmRFbGVtZW50SW5TY29wZSggc291cmNlRmllbGROYW1lLCByZXBlYXRlclJvdywgZm9ybU5vZGUgKTtcblxuXHRcdFx0XHRpZiAoIHNvdXJjZUVsZW1lbnQgKSB7XG5cdFx0XHRcdFx0Y29uc3QgYWN0dWFsTmFtZSA9IHNvdXJjZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCAnbmFtZScgKSB8fCBzb3VyY2VGaWVsZE5hbWU7XG5cdFx0XHRcdFx0bGV0IGlucHV0ID0gbnVsbDtcblxuXHRcdFx0XHRcdGlmICggd2luZG93LkpldEZvcm1CdWlsZGVyTWFpbj8uaW5wdXREYXRhICkge1xuXHRcdFx0XHRcdFx0aW5wdXQgPSB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJNYWluLmlucHV0RGF0YS5maW5kSW5wdXQ/LiggYWN0dWFsTmFtZSwgZm9ybU5vZGUgKSB8fFxuXHRcdFx0XHRcdFx0ICAgICAgICB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJNYWluLmlucHV0RGF0YS5maW5kSW5wdXQ/Liggc291cmNlRmllbGROYW1lLCBmb3JtTm9kZSApIHx8XG5cdFx0XHRcdFx0XHQgICAgICAgIHdpbmRvdy5KZXRGb3JtQnVpbGRlck1haW4uaW5wdXREYXRhLmdldElucHV0Py4oIGFjdHVhbE5hbWUsIGZvcm1Ob2RlICkgfHxcblx0XHRcdFx0XHRcdCAgICAgICAgd2luZG93LkpldEZvcm1CdWlsZGVyTWFpbi5pbnB1dERhdGEuZ2V0SW5wdXQ/Liggc291cmNlRmllbGROYW1lLCBmb3JtTm9kZSApO1xuXG5cdFx0XHRcdFx0XHRpZiAoICEgaW5wdXQgJiYgd2luZG93LkpldEZvcm1CdWlsZGVyTWFpbi5pbnB1dERhdGEuZ2V0QWxsICkge1xuXHRcdFx0XHRcdFx0XHRjb25zdCBhbGxJbnB1dHMgPSB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJNYWluLmlucHV0RGF0YS5nZXRBbGwoIGZvcm1Ob2RlICkgfHwgW107XG5cdFx0XHRcdFx0XHRcdGlucHV0ID0gYWxsSW5wdXRzLmZpbmQoICggaW5wICkgPT4gaW5wLm5hbWUgPT09IGFjdHVhbE5hbWUgKSB8fFxuXHRcdFx0XHRcdFx0XHQgICAgICAgIGFsbElucHV0cy5maW5kKCAoIGlucCApID0+IGlucC5uYW1lID09PSBzb3VyY2VGaWVsZE5hbWUgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRjb250ZXh0WyBzb3VyY2VGaWVsZE5hbWUgXSA9IGlucHV0XG5cdFx0XHRcdFx0XHQ/IGlucHV0LnZhbHVlLmN1cnJlbnRcblx0XHRcdFx0XHRcdDogKCBzb3VyY2VFbGVtZW50LnZhbHVlIHx8ICcnICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29udGV4dDtcblx0fVxuXG5cdC8qKlxuXHQgKiBGZXRjaCBvcHRpb25zIGZyb20gUkVTVCBBUEkuXG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSAgICAgIGNvbmZpZyBGaWVsZCBjb25maWd1cmF0aW9uLlxuXHQgKiBAcGFyYW0ge09iamVjdH0gICAgICBjb250ZXh0IENvbnRleHQgdmFsdWVzLlxuXHQgKiBAcGFyYW0ge0Fib3J0U2lnbmFsfSBzaWduYWwgIEFib3J0IHNpZ25hbC5cblx0ICpcblx0ICogQHJldHVybiB7UHJvbWlzZTxBcnJheT59IEdlbmVyYXRlZCBvcHRpb25zLlxuXHQgKi9cblx0YXN5bmMgZmV0Y2hPcHRpb25zKCBjb25maWcsIGNvbnRleHQsIHNpZ25hbCApIHtcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCAnL3dwLWpzb24vamV0LWZvcm0tYnVpbGRlci92MS9nZW5lcmF0b3ItdXBkYXRlJywge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0XHR9LFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoIHtcblx0XHRcdFx0Zm9ybV9pZDogY29uZmlnLmZvcm1JZCxcblx0XHRcdFx0ZmllbGRfbmFtZTogY29uZmlnLmZpZWxkTmFtZSxcblx0XHRcdFx0Z2VuZXJhdG9yX2lkOiBjb25maWcuZ2VuZXJhdG9ySWQsXG5cdFx0XHRcdGNvbnRleHQsXG5cdFx0XHR9ICksXG5cdFx0XHRzaWduYWwsXG5cdFx0fSApO1xuXG5cdFx0aWYgKCAhIHJlc3BvbnNlLm9rICkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBgSFRUUCBlcnJvciEgc3RhdHVzOiAkeyByZXNwb25zZS5zdGF0dXMgfWAgKTtcblx0XHR9XG5cblx0XHRjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG5cdFx0aWYgKCAhIGRhdGEuc3VjY2VzcyApIHtcblx0XHRcdHRocm93IG5ldyBFcnJvciggZGF0YS5tZXNzYWdlIHx8ICdVbmtub3duIGVycm9yJyApO1xuXHRcdH1cblxuXHRcdHJldHVybiBkYXRhLm9wdGlvbnMgfHwgW107XG5cdH1cblxuXHQvKipcblx0ICogQWJvcnQgcHJldmlvdXMgcmVxdWVzdCBmb3IgYSBmaWVsZC5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkTmFtZSBGaWVsZCBuYW1lLlxuXHQgKi9cblx0YWJvcnRQcmV2aW91c1JlcXVlc3QoIGZpZWxkTmFtZSApIHtcblx0XHRjb25zdCBjb250cm9sbGVyID0gdGhpcy5hYm9ydENvbnRyb2xsZXJzLmdldCggZmllbGROYW1lICk7XG5cdFx0aWYgKCBjb250cm9sbGVyICkge1xuXHRcdFx0Y29udHJvbGxlci5hYm9ydCgpO1xuXHRcdFx0dGhpcy5hYm9ydENvbnRyb2xsZXJzLmRlbGV0ZSggZmllbGROYW1lICk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIERlc3Ryb3kgd2F0Y2hlcnMgYW5kIGNsZWFudXAuXG5cdCAqL1xuXHRkZXN0cm95KCkge1xuXHRcdHRoaXMud2F0Y2hlcnMuZm9yRWFjaCggKCB3YXRjaGVyICkgPT4gd2F0Y2hlci51bndhdGNoPy4oKSApO1xuXHRcdHRoaXMuZGVib3VuY2VUaW1lcnMuZm9yRWFjaCggKCB0aW1lciApID0+IGNsZWFyVGltZW91dCggdGltZXIgKSApO1xuXHRcdHRoaXMuYWJvcnRDb250cm9sbGVycy5mb3JFYWNoKCAoIGNvbnRyb2xsZXIgKSA9PiBjb250cm9sbGVyLmFib3J0KCkgKTtcblx0XHR0aGlzLmJ1dHRvbkxpc3RlbmVycy5mb3JFYWNoKCAoIHsgZWxlbWVudCwgaGFuZGxlciB9ICkgPT4gZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnY2xpY2snLCBoYW5kbGVyICkgKTtcblxuXHRcdHRoaXMud2F0Y2hlcnMuY2xlYXIoKTtcblx0XHR0aGlzLmF1dG9VcGRhdGVGaWVsZHMuY2xlYXIoKTtcblx0XHR0aGlzLmFib3J0Q29udHJvbGxlcnMuY2xlYXIoKTtcblx0XHR0aGlzLmRlYm91bmNlVGltZXJzLmNsZWFyKCk7XG5cdFx0dGhpcy5idXR0b25MaXN0ZW5lcnMuY2xlYXIoKTtcblx0XHR0aGlzLmNhY2hlTWFuYWdlci5jbGVhckFsbCgpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpZWxkV2F0Y2hlcjtcbiIsIi8qKlxuICogT3B0aW9ucyBVcGRhdGVyIGZvciBBdXRvLVVwZGF0ZSBGZWF0dXJlLlxuICpcbiAqIEhhbmRsZXMgRE9NIG1hbmlwdWxhdGlvbiB0byB1cGRhdGUgZmllbGQgb3B0aW9ucy5cbiAqIFN1cHBvcnRzIHNlbGVjdCwgY2hlY2tib3gsIGFuZCByYWRpbyBmaWVsZCB0eXBlcy5cbiAqXG4gKiBAcGFja2FnZSBKZXRGb3JtQnVpbGRlclxuICovXG5cbi8qKlxuICogT3B0aW9ucyBVcGRhdGVyIENsYXNzLlxuICpcbiAqIFVwZGF0ZXMgZmllbGQgb3B0aW9ucyBpbiB0aGUgRE9NIHdoaWxlIHByZXNlcnZpbmcgc2VsZWN0ZWQgdmFsdWVzLlxuICovXG5jbGFzcyBPcHRpb25zVXBkYXRlciB7XG5cdC8qKlxuXHQgKiBVcGRhdGUgb3B0aW9ucyBmb3IgYSBmaWVsZCBlbGVtZW50LlxuXHQgKlxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSAgICAgIGZpZWxkRWxlbWVudCBGaWVsZCBlbGVtZW50IChzZWxlY3QvaW5wdXQgY29udGFpbmVyKS5cblx0ICogQHBhcmFtIHtBcnJheX0gICAgICAgICAgICBvcHRpb25zICAgICAgTmV3IG9wdGlvbnMgYXJyYXkuXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8bnVsbH0gZm9ybU5vZGUgICAgIEZvcm0gZWxlbWVudCAobmVlZGVkIGZvciByZS1pbml0aWFsaXphdGlvbikuXG5cdCAqL1xuXHR1cGRhdGVPcHRpb25zKCBmaWVsZEVsZW1lbnQsIG9wdGlvbnMsIGZvcm1Ob2RlID0gbnVsbCApIHtcblx0XHRjb25zdCBmaWVsZFR5cGUgPSB0aGlzLmdldEZpZWxkVHlwZSggZmllbGRFbGVtZW50ICk7XG5cblx0XHRzd2l0Y2ggKCBmaWVsZFR5cGUgKSB7XG5cdFx0XHRjYXNlICdzZWxlY3QnOlxuXHRcdFx0XHR0aGlzLnVwZGF0ZVNlbGVjdE9wdGlvbnMoIGZpZWxkRWxlbWVudCwgb3B0aW9ucyApO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2NoZWNrYm94Jzpcblx0XHRcdGNhc2UgJ3JhZGlvJzpcblx0XHRcdFx0dGhpcy51cGRhdGVDaG9pY2VPcHRpb25zKCBmaWVsZEVsZW1lbnQsIG9wdGlvbnMsIGZpZWxkVHlwZSwgZm9ybU5vZGUgKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdbSkZCIEF1dG8tVXBkYXRlXSBVbnN1cHBvcnRlZCBmaWVsZCB0eXBlOicsIGZpZWxkVHlwZSApO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgZmllbGQgdHlwZSBmcm9tIGVsZW1lbnQuXG5cdCAqXG5cdCAqIFJlYWRzIGRhdGEtZmllbGQtdHlwZSBmaXJzdCAoaW5qZWN0ZWQgc2VydmVyLXNpZGUpLCBzbyBkZXRlY3Rpb24gd29ya3Ncblx0ICogZXZlbiB3aGVuIHRoZSBjb250YWluZXIgaXMgZW1wdHkgKG5vIG9wdGlvbnMgcmVuZGVyZWQgeWV0KS5cblx0ICpcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZmllbGRFbGVtZW50IEZpZWxkIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEByZXR1cm4ge3N0cmluZ30gRmllbGQgdHlwZSAoc2VsZWN0L2NoZWNrYm94L3JhZGlvKS5cblx0ICovXG5cdGdldEZpZWxkVHlwZSggZmllbGRFbGVtZW50ICkge1xuXHRcdGlmICggZmllbGRFbGVtZW50LnRhZ05hbWUgPT09ICdTRUxFQ1QnICkge1xuXHRcdFx0cmV0dXJuICdzZWxlY3QnO1xuXHRcdH1cblxuXHRcdGNvbnN0IGRhdGFUeXBlID0gZmllbGRFbGVtZW50LmRhdGFzZXQuZmllbGRUeXBlO1xuXHRcdGlmICggZGF0YVR5cGUgKSB7XG5cdFx0XHRpZiAoIGRhdGFUeXBlID09PSAnY2hlY2tib3gtZmllbGQnICkgeyByZXR1cm4gJ2NoZWNrYm94JzsgfVxuXHRcdFx0aWYgKCBkYXRhVHlwZSA9PT0gJ3JhZGlvLWZpZWxkJyApIHsgcmV0dXJuICdyYWRpbyc7IH1cblx0XHRcdGlmICggZGF0YVR5cGUgPT09ICdzZWxlY3QtZmllbGQnICkgeyByZXR1cm4gJ3NlbGVjdCc7IH1cblx0XHR9XG5cblx0XHRjb25zdCBmaXJzdElucHV0ID0gZmllbGRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoICdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sIGlucHV0W3R5cGU9XCJyYWRpb1wiXScgKTtcblx0XHRpZiAoIGZpcnN0SW5wdXQgKSB7XG5cdFx0XHRyZXR1cm4gZmlyc3RJbnB1dC50eXBlO1xuXHRcdH1cblxuXHRcdHJldHVybiAndW5rbm93bic7XG5cdH1cblxuXHQvKipcblx0ICogVXBkYXRlIHNlbGVjdCBmaWVsZCBvcHRpb25zLlxuXHQgKlxuXHQgKiBGb3IgU2VsZWN0MiBhdXRvY29tcGxldGUgZmllbGRzLCB3ZSBza2lwIERPTSByZWJ1aWxkIGFuZCBpbnN0ZWFkXG5cdCAqIGNsZWFyIHRoZSBjdXJyZW50IHNlbGVjdGlvbiBzbyB0aGF0IFNlbGVjdDIgQUpBWCBmaXJlcyBmcmVzaFxuXHQgKiAod2l0aCB1cGRhdGVkIGNvbnRleHQgZnJvbSBhdXRvY29tcGxldGUtYnJpZGdlLmpzKS5cblx0ICpcblx0ICogQHBhcmFtIHtIVE1MU2VsZWN0RWxlbWVudH0gc2VsZWN0RWxlbWVudCBTZWxlY3QgZWxlbWVudC5cblx0ICogQHBhcmFtIHtBcnJheX0gICAgICAgICAgICAgb3B0aW9ucyAgICAgICBOZXcgb3B0aW9ucyBhcnJheS5cblx0ICovXG5cdHVwZGF0ZVNlbGVjdE9wdGlvbnMoIHNlbGVjdEVsZW1lbnQsIG9wdGlvbnMgKSB7XG5cdFx0aWYgKCBzZWxlY3RFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggJ2pldC1zZWxlY3QtYXV0b2NvbXBsZXRlJyApICkge1xuXHRcdFx0Y29uc3QgJHNlbGVjdCA9IGpRdWVyeSggc2VsZWN0RWxlbWVudCApO1xuXG5cdFx0XHRpZiAoICRzZWxlY3QuZGF0YSggJ3NlbGVjdDInICkgKSB7XG5cdFx0XHRcdCRzZWxlY3QudmFsKCBudWxsICkudHJpZ2dlciggJ2NoYW5nZScgKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNvbnN0IGlzTXVsdGlwbGUgICAgPSBzZWxlY3RFbGVtZW50Lm11bHRpcGxlO1xuXHRcdGNvbnN0IGN1cnJlbnRWYWx1ZXMgPSBpc011bHRpcGxlXG5cdFx0XHQ/IEFycmF5LmZyb20oIHNlbGVjdEVsZW1lbnQuc2VsZWN0ZWRPcHRpb25zICkubWFwKCAoIG9wdCApID0+IG9wdC52YWx1ZSApXG5cdFx0XHQ6IFsgc2VsZWN0RWxlbWVudC52YWx1ZSBdO1xuXG5cdFx0Y29uc3QgZmlyc3RPcHRpb24gICAgICA9IHNlbGVjdEVsZW1lbnQub3B0aW9uc1sgMCBdO1xuXHRcdGNvbnN0IHBsYWNlaG9sZGVyT3B0aW9uID0gKCBmaXJzdE9wdGlvbiAmJiBmaXJzdE9wdGlvbi52YWx1ZSA9PT0gJycgKVxuXHRcdFx0PyBmaXJzdE9wdGlvbi5jbG9uZU5vZGUoIHRydWUgKVxuXHRcdFx0OiBudWxsO1xuXG5cdFx0c2VsZWN0RWxlbWVudC5pbm5lckhUTUwgPSAnJztcblxuXHRcdGlmICggcGxhY2Vob2xkZXJPcHRpb24gKSB7XG5cdFx0XHRzZWxlY3RFbGVtZW50LmFwcGVuZENoaWxkKCBwbGFjZWhvbGRlck9wdGlvbiApO1xuXHRcdH1cblxuXHRcdG9wdGlvbnMuZm9yRWFjaCggKCBvcHRpb24gKSA9PiB7XG5cdFx0XHRjb25zdCBvcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ29wdGlvbicgKTtcblx0XHRcdG9wdGlvbkVsZW1lbnQudmFsdWUgPSBvcHRpb24udmFsdWUgfHwgb3B0aW9uLnZhbCB8fCAnJztcblx0XHRcdG9wdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBvcHRpb24ubGFiZWwgfHwgb3B0aW9uLnZhbHVlIHx8ICcnO1xuXG5cdFx0XHRpZiAoIGN1cnJlbnRWYWx1ZXMuaW5jbHVkZXMoIG9wdGlvbkVsZW1lbnQudmFsdWUgKSApIHtcblx0XHRcdFx0b3B0aW9uRWxlbWVudC5zZWxlY3RlZCA9IHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggb3B0aW9uLmNhbGN1bGF0ZSApIHtcblx0XHRcdFx0b3B0aW9uRWxlbWVudC5kYXRhc2V0LmNhbGN1bGF0ZSA9IG9wdGlvbi5jYWxjdWxhdGU7XG5cdFx0XHR9XG5cblx0XHRcdHNlbGVjdEVsZW1lbnQuYXBwZW5kQ2hpbGQoIG9wdGlvbkVsZW1lbnQgKTtcblx0XHR9ICk7XG5cblx0XHRzZWxlY3RFbGVtZW50LmRpc3BhdGNoRXZlbnQoIG5ldyBFdmVudCggJ2NoYW5nZScsIHsgYnViYmxlczogdHJ1ZSB9ICkgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBVcGRhdGUgY2hlY2tib3gvcmFkaW8gZmllbGQgb3B0aW9ucy5cblx0ICpcblx0ICogY29udGFpbmVyRWxlbWVudCBpcyB0aGUgb3V0ZXIgLmNoZWNrcmFkaW8td3JhcCBkaXYgKGhhcyBkYXRhLWpmYi1hdXRvLXVwZGF0ZSkuXG5cdCAqIEVhY2ggb3B0aW9uIHJvdyBpcyBhIGNoaWxkIGRpdiAoLmNoZWNrYm94ZXMtd3JhcC8ucmFkaW8td3JhcCAuY2hlY2tyYWRpby13cmFwKVxuXHQgKiBjb250YWluaW5nIGEgPGxhYmVsIGNsYXNzPVwiamV0LWZvcm0tYnVpbGRlcl9fZmllbGQtbGFiZWwgZm9yLWNoZWNrYm94fGZvci1yYWRpb1wiPlxuXHQgKiAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3h8cmFkaW9cIiAuLi4+PHNwYW4+bGFiZWwgdGV4dDwvc3Bhbj5cblx0ICogPC9sYWJlbD4uXG5cdCAqXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9ICAgICAgY29udGFpbmVyRWxlbWVudCBPdXRlciAuY2hlY2tyYWRpby13cmFwIGVsZW1lbnQuXG5cdCAqIEBwYXJhbSB7QXJyYXl9ICAgICAgICAgICAgb3B0aW9ucyAgICAgICAgICBOZXcgb3B0aW9ucyBhcnJheS5cblx0ICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICBmaWVsZFR5cGUgICAgICAgIEZpZWxkIHR5cGUgKGNoZWNrYm94L3JhZGlvKS5cblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudHxudWxsfSBmb3JtTm9kZSAgICAgICAgIEZvcm0gZWxlbWVudCAoZm9yIHJlLWluaXRpYWxpemF0aW9uKS5cblx0ICovXG5cdHVwZGF0ZUNob2ljZU9wdGlvbnMoIGNvbnRhaW5lckVsZW1lbnQsIG9wdGlvbnMsIGZpZWxkVHlwZSwgZm9ybU5vZGUgPSBudWxsICkge1xuXHRcdC8vIEdldCBmaWVsZCBuYW1lIGZyb20gZGF0YSBhdHRyaWJ1dGUgKG1vc3QgcmVsaWFibGUgc291cmNlKVxuXHRcdGNvbnN0IGZpZWxkTmFtZSA9IGNvbnRhaW5lckVsZW1lbnQuZ2V0QXR0cmlidXRlKCAnZGF0YS1maWVsZC1uYW1lJyApO1xuXHRcdGlmICggISBmaWVsZE5hbWUgKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oICdbSkZCIEF1dG8tVXBkYXRlXSBDb3VsZCBub3QgZmluZCBmaWVsZCBuYW1lIG9uIGNvbnRhaW5lcicgKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBjdXJyZW50VmFsdWVzID0gQXJyYXkuZnJvbShcblx0XHRcdGNvbnRhaW5lckVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCggYGlucHV0W3R5cGU9XCIkeyBmaWVsZFR5cGUgfVwiXTpjaGVja2VkYCApXG5cdFx0KS5tYXAoICggaW5wdXQgKSA9PiBpbnB1dC52YWx1ZSApO1xuXG5cdFx0Ly8gUHJlc2VydmUgY3VzdG9tLW9wdGlvbiByb3dzIChlLmcuIFwiQWRkIE5ld1wiIGJ1dHRvbilcblx0XHRjb250YWluZXJFbGVtZW50XG5cdFx0XHQucXVlcnlTZWxlY3RvckFsbCggJzpzY29wZSA+IC5qZXQtZm9ybS1idWlsZGVyX19maWVsZC13cmFwOm5vdCguY3VzdG9tLW9wdGlvbiknIClcblx0XHRcdC5mb3JFYWNoKCAoIHJvdyApID0+IHJvdy5yZW1vdmUoKSApO1xuXG5cdFx0Y29uc3QgaW5wdXROYW1lICA9IGZpZWxkVHlwZSA9PT0gJ2NoZWNrYm94JyA/IGAkeyBmaWVsZE5hbWUgfVtdYCA6IGZpZWxkTmFtZTtcblx0XHRjb25zdCBsYWJlbENsYXNzID0gZmllbGRUeXBlID09PSAnY2hlY2tib3gnID8gJ2Zvci1jaGVja2JveCcgOiAnZm9yLXJhZGlvJztcblx0XHRjb25zdCByb3dDbGFzcyAgID0gZmllbGRUeXBlID09PSAnY2hlY2tib3gnXG5cdFx0XHQ/ICdqZXQtZm9ybS1idWlsZGVyX19maWVsZC13cmFwIGNoZWNrYm94ZXMtd3JhcCBjaGVja3JhZGlvLXdyYXAnXG5cdFx0XHQ6ICdqZXQtZm9ybS1idWlsZGVyX19maWVsZC13cmFwIHJhZGlvLXdyYXAgY2hlY2tyYWRpby13cmFwJztcblxuXHRcdGNvbnN0IGN1c3RvbU9wdGlvblJvdyA9IGNvbnRhaW5lckVsZW1lbnQucXVlcnlTZWxlY3RvciggJzpzY29wZSA+IC5jdXN0b20tb3B0aW9uJyApO1xuXG5cdFx0Y29uc3QgaW5wdXRDbGFzcyA9IGZpZWxkVHlwZSA9PT0gJ2NoZWNrYm94J1xuXHRcdFx0PyAnamV0LWZvcm0tYnVpbGRlcl9fZmllbGQgY2hlY2tib3hlcy1maWVsZCBjaGVja3JhZGlvLWZpZWxkJ1xuXHRcdFx0OiAnamV0LWZvcm0tYnVpbGRlcl9fZmllbGQgcmFkaW8tZmllbGQgY2hlY2tyYWRpby1maWVsZCc7XG5cblx0XHRjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblx0XHRsZXQgaGFzQ3VzdG9tVGVtcGxhdGVzID0gZmFsc2U7XG5cblx0XHRvcHRpb25zLmZvckVhY2goICggb3B0aW9uICkgPT4ge1xuXHRcdFx0Y29uc3QgdmFsdWUgICAgID0gb3B0aW9uLnZhbHVlIHx8IG9wdGlvbi52YWwgfHwgJyc7XG5cdFx0XHRjb25zdCBsYWJlbCAgICAgPSBvcHRpb24ubGFiZWwgfHwgdmFsdWU7XG5cdFx0XHRjb25zdCBpc0NoZWNrZWQgPSBjdXJyZW50VmFsdWVzLmluY2x1ZGVzKCB2YWx1ZSApO1xuXG5cdFx0XHRjb25zdCBpbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnaW5wdXQnICk7XG5cdFx0XHRpbnB1dEVsZW1lbnQudHlwZSAgPSBmaWVsZFR5cGU7XG5cdFx0XHRpbnB1dEVsZW1lbnQubmFtZSAgPSBpbnB1dE5hbWU7XG5cdFx0XHRpbnB1dEVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcblx0XHRcdGlucHV0RWxlbWVudC5jbGFzc05hbWUgPSBpbnB1dENsYXNzO1xuXHRcdFx0aW5wdXRFbGVtZW50LnNldEF0dHJpYnV0ZSggJ2RhdGEtZmllbGQtbmFtZScsIGZpZWxkTmFtZSApO1xuXHRcdFx0aW5wdXRFbGVtZW50LmNoZWNrZWQgPSBpc0NoZWNrZWQ7XG5cblx0XHRcdGlmICggb3B0aW9uLmNhbGN1bGF0ZSApIHtcblx0XHRcdFx0aW5wdXRFbGVtZW50LmRhdGFzZXQuY2FsY3VsYXRlID0gb3B0aW9uLmNhbGN1bGF0ZTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qgcm93RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XG5cdFx0XHRyb3dFbGVtZW50LmNsYXNzTmFtZSA9IHJvd0NsYXNzO1xuXG5cdFx0XHQvLyBKZXRFbmdpbmUgY3VzdG9tIHRlbXBsYXRlIEhUTUwgKHByZS1yZW5kZXJlZCBzZXJ2ZXItc2lkZSlcblx0XHRcdGlmICggb3B0aW9uLmh0bWwgKSB7XG5cdFx0XHRcdGhhc0N1c3RvbVRlbXBsYXRlcyA9IHRydWU7XG5cdFx0XHRcdGNvbnN0IHRlbXBsYXRlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XG5cdFx0XHRcdHRlbXBsYXRlV3JhcHBlci5pbm5lckhUTUwgPSBvcHRpb24uaHRtbDtcblx0XHRcdFx0d2hpbGUgKCB0ZW1wbGF0ZVdyYXBwZXIuZmlyc3RDaGlsZCApIHtcblx0XHRcdFx0XHRyb3dFbGVtZW50LmFwcGVuZENoaWxkKCB0ZW1wbGF0ZVdyYXBwZXIuZmlyc3RDaGlsZCApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHNwYW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3NwYW4nICk7XG5cdFx0XHRzcGFuRWxlbWVudC50ZXh0Q29udGVudCA9IGxhYmVsO1xuXG5cdFx0XHRjb25zdCBsYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnbGFiZWwnICk7XG5cdFx0XHRsYWJlbEVsZW1lbnQuY2xhc3NOYW1lID0gYGpldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkLWxhYmVsICR7IGxhYmVsQ2xhc3MgfWA7XG5cdFx0XHRsYWJlbEVsZW1lbnQuYXBwZW5kQ2hpbGQoIGlucHV0RWxlbWVudCApO1xuXHRcdFx0bGFiZWxFbGVtZW50LmFwcGVuZENoaWxkKCBzcGFuRWxlbWVudCApO1xuXG5cdFx0XHRyb3dFbGVtZW50LmFwcGVuZENoaWxkKCBsYWJlbEVsZW1lbnQgKTtcblxuXHRcdFx0ZnJhZ21lbnQuYXBwZW5kQ2hpbGQoIHJvd0VsZW1lbnQgKTtcblx0XHR9ICk7XG5cblx0XHRpZiAoIGN1c3RvbU9wdGlvblJvdyApIHtcblx0XHRcdGNvbnRhaW5lckVsZW1lbnQuaW5zZXJ0QmVmb3JlKCBmcmFnbWVudCwgY3VzdG9tT3B0aW9uUm93ICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQoIGZyYWdtZW50ICk7XG5cdFx0fVxuXG5cdFx0aWYgKCBoYXNDdXN0b21UZW1wbGF0ZXMgKSB7XG5cdFx0XHRjb25zdCAkY29udGFpbmVyID0galF1ZXJ5KCBjb250YWluZXJFbGVtZW50ICk7XG5cblx0XHRcdGlmICggd2luZG93LkpldEVuZ2luZSAmJiB3aW5kb3cuSmV0RW5naW5lLmluaXRFbGVtZW50c0hhbmRsZXJzICkge1xuXHRcdFx0XHR3aW5kb3cuSmV0RW5naW5lLmluaXRFbGVtZW50c0hhbmRsZXJzKCAkY29udGFpbmVyICk7XG5cdFx0XHR9IGVsc2UgaWYgKCB3aW5kb3cuSmV0UGx1Z2lucyApIHtcblx0XHRcdFx0d2luZG93LkpldFBsdWdpbnMuaW5pdCggJGNvbnRhaW5lciApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNvbnN0IHJlSW5pdGVkID0gdGhpcy5yZUluaXRGaWVsZCggY29udGFpbmVyRWxlbWVudCwgZm9ybU5vZGUgKTtcblxuXHRcdGlmICggISByZUluaXRlZCApIHtcblx0XHRcdGNvbnN0IGZpcnN0SW5wdXQgPSBjb250YWluZXJFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoIGBpbnB1dFt0eXBlPVwiJHsgZmllbGRUeXBlIH1cIl1gICk7XG5cdFx0XHRpZiAoIGZpcnN0SW5wdXQgKSB7XG5cdFx0XHRcdGZpcnN0SW5wdXQuZGlzcGF0Y2hFdmVudCggbmV3IEV2ZW50KCAnY2hhbmdlJywgeyBidWJibGVzOiB0cnVlIH0gKSApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBSZS1pbml0aWFsaXplIGEgZmllbGQgdmlhIEpGQidzIHN0YW5kYXJkIE9ic2VydmFibGUub2JzZXJ2ZUlucHV0KCkgQVBJLlxuXHQgKlxuXHQgKiBBZnRlciBET00gY2hhbmdlcyAobmV3IG9wdGlvbnMgd2l0aCBjdXN0b20gdGVtcGxhdGVzKSwgdGhlIGZpZWxkJ3MgSW5wdXREYXRhXG5cdCAqIG11c3QgYmUgcmVwbGFjZWQgc28gdGhhdCBjcmVhdGVJbnB1dCgpIHJlLWV2YWx1YXRlcyBhbmQgcGlja3MgdGhlIGNvcnJlY3Rcblx0ICogaGFuZGxlciAoZS5nLiBEeW5hbWljQ2hlY2tib3hEYXRhIGluc3RlYWQgb2YgcGxhaW4gQ2hlY2tib3hEYXRhKS5cblx0ICogb2JzZXJ2ZUlucHV0KCkgYWxzbyBmaXJlcyBqZXQuZmIuaW5wdXQubWFrZVJlYWN0aXZlLCB3aGljaCBsZXRzXG5cdCAqIGxpc3Rpbmcub3B0aW9ucyBiaW5kIHRlbXBsYXRlIGNsaWNrcyBhbmQgLS1jaGVja2VkIGNsYXNzIHRvZ2dsaW5nLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSAgICAgIGZpZWxkRWxlbWVudCBUaGUgW2RhdGEtamZiLXN5bmNdIGNvbnRhaW5lciBlbGVtZW50LlxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fG51bGx9IGZvcm1Ob2RlICAgICBUaGUgZm9ybSBlbGVtZW50LlxuXHQgKlxuXHQgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHJlLWluaXRpYWxpemF0aW9uIHN1Y2NlZWRlZC5cblx0ICovXG5cdHJlSW5pdEZpZWxkKCBmaWVsZEVsZW1lbnQsIGZvcm1Ob2RlICkge1xuXHRcdGlmICggISBmb3JtTm9kZSApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBzeW5jTm9kZSA9IGZpZWxkRWxlbWVudC5oYXNBdHRyaWJ1dGUoICdkYXRhLWpmYi1zeW5jJyApXG5cdFx0XHQ/IGZpZWxkRWxlbWVudFxuXHRcdFx0OiBmaWVsZEVsZW1lbnQucXVlcnlTZWxlY3RvciggJ1tkYXRhLWpmYi1zeW5jXScgKTtcblxuXHRcdGlmICggISBzeW5jTm9kZSApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBmb3JtSWQgICAgID0gZm9ybU5vZGUuZGF0YXNldC5mb3JtSWQ7XG5cdFx0Y29uc3Qgb2JzZXJ2YWJsZSA9IGZvcm1JZCAmJiB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXIgPyB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJbIGZvcm1JZCBdIDogbnVsbDtcblxuXHRcdGlmICggISBvYnNlcnZhYmxlIHx8ICEgb2JzZXJ2YWJsZS5vYnNlcnZlSW5wdXQgKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0b2JzZXJ2YWJsZS5vYnNlcnZlSW5wdXQoIHN5bmNOb2RlLCB0cnVlICk7XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIHZpc3VhbCB3cmFwcGVyIGZvciBsb2FkaW5nL2Vycm9yIHN0YXRlIGNsYXNzZXMuXG5cdCAqXG5cdCAqIEZvciBzZWxlY3QgZWxlbWVudHMgdGhlIHdyYXBwZXIgaXMgdGhlIGNsb3Nlc3QgLmpldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkLXdyYXAgYW5jZXN0b3IuXG5cdCAqIEZvciBjaGVja2JveC9yYWRpbywgZmllbGRFbGVtZW50IElTIHRoZSBvdXRlciAuY2hlY2tyYWRpby13cmFwIGRpdlxuXHQgKiAoY2xhc3MgamV0LWZvcm0tYnVpbGRlcl9fZmllbGRzLWdyb3VwKSwgc28gd2UgdXNlIGl0IGRpcmVjdGx5LlxuXHQgKlxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBmaWVsZEVsZW1lbnQgRmllbGQgZWxlbWVudCAoc2VsZWN0IG9yIC5jaGVja3JhZGlvLXdyYXAgZGl2KS5cblx0ICpcblx0ICogQHJldHVybiB7SFRNTEVsZW1lbnR8bnVsbH0gV3JhcHBlciBlbGVtZW50LlxuXHQgKi9cblx0Z2V0U3RhdGVXcmFwcGVyKCBmaWVsZEVsZW1lbnQgKSB7XG5cdFx0Ly8gSWYgaXQncyB0aGUgLmNoZWNrcmFkaW8td3JhcCBjb250YWluZXIgaXRzZWxmLCB1c2UgaXQgZGlyZWN0bHlcblx0XHRpZiAoIGZpZWxkRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoICdjaGVja3JhZGlvLXdyYXAnICkgKSB7XG5cdFx0XHRyZXR1cm4gZmllbGRFbGVtZW50O1xuXHRcdH1cblxuXHRcdHJldHVybiBmaWVsZEVsZW1lbnQuY2xvc2VzdCggJy5qZXQtZm9ybS1idWlsZGVyX19maWVsZC13cmFwJyApIHx8IGZpZWxkRWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXHR9XG5cblx0LyoqXG5cdCAqIFNldCBsb2FkaW5nIHN0YXRlIGZvciBhIGZpZWxkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBmaWVsZEVsZW1lbnQgRmllbGQgZWxlbWVudC5cblx0ICogQHBhcmFtIHtib29sZWFufSAgICAgaXNMb2FkaW5nICAgIExvYWRpbmcgc3RhdGUuXG5cdCAqL1xuXHRzZXRMb2FkaW5nU3RhdGUoIGZpZWxkRWxlbWVudCwgaXNMb2FkaW5nICkge1xuXHRcdGNvbnN0IHdyYXBwZXIgPSB0aGlzLmdldFN0YXRlV3JhcHBlciggZmllbGRFbGVtZW50ICk7XG5cblx0XHRpZiAoICEgd3JhcHBlciApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIGlzTG9hZGluZyApIHtcblx0XHRcdHdyYXBwZXIuY2xhc3NMaXN0LmFkZCggJ2pmYi1hdXRvLXVwZGF0ZS1sb2FkaW5nJyApO1xuXG5cdFx0XHRpZiAoICEgd3JhcHBlci5xdWVyeVNlbGVjdG9yKCAnLmpmYi1hdXRvLXVwZGF0ZS1zcGlubmVyJyApICkge1xuXHRcdFx0XHRjb25zdCBzcGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3NwYW4nICk7XG5cdFx0XHRcdHNwaW5uZXIuY2xhc3NOYW1lID0gJ2pmYi1hdXRvLXVwZGF0ZS1zcGlubmVyJztcblx0XHRcdFx0c3Bpbm5lci5zZXRBdHRyaWJ1dGUoICdhcmlhLWxhYmVsJywgJ0xvYWRpbmcgb3B0aW9ucy4uLicgKTtcblx0XHRcdFx0d3JhcHBlci5hcHBlbmRDaGlsZCggc3Bpbm5lciApO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR3cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoICdqZmItYXV0by11cGRhdGUtbG9hZGluZycgKTtcblxuXHRcdFx0Y29uc3Qgc3Bpbm5lciA9IHdyYXBwZXIucXVlcnlTZWxlY3RvciggJy5qZmItYXV0by11cGRhdGUtc3Bpbm5lcicgKTtcblx0XHRcdGlmICggc3Bpbm5lciApIHtcblx0XHRcdFx0c3Bpbm5lci5yZW1vdmUoKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogU2V0IGVycm9yIHN0YXRlIGZvciBhIGZpZWxkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBmaWVsZEVsZW1lbnQgRmllbGQgZWxlbWVudC5cblx0ICogQHBhcmFtIHtzdHJpbmd9ICAgICAgZXJyb3JNZXNzYWdlIEVycm9yIG1lc3NhZ2UuXG5cdCAqL1xuXHRzZXRFcnJvclN0YXRlKCBmaWVsZEVsZW1lbnQsIGVycm9yTWVzc2FnZSApIHtcblx0XHRjb25zdCB3cmFwcGVyID0gdGhpcy5nZXRTdGF0ZVdyYXBwZXIoIGZpZWxkRWxlbWVudCApO1xuXG5cdFx0aWYgKCAhIHdyYXBwZXIgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0d3JhcHBlci5jbGFzc0xpc3QuYWRkKCAnamZiLWF1dG8tdXBkYXRlLWVycm9yJyApO1xuXG5cdFx0bGV0IGVycm9yRWxlbWVudCA9IHdyYXBwZXIucXVlcnlTZWxlY3RvciggJy5qZmItYXV0by11cGRhdGUtZXJyb3ItbWVzc2FnZScgKTtcblxuXHRcdGlmICggISBlcnJvckVsZW1lbnQgKSB7XG5cdFx0XHRlcnJvckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xuXHRcdFx0ZXJyb3JFbGVtZW50LmNsYXNzTmFtZSA9ICdqZmItYXV0by11cGRhdGUtZXJyb3ItbWVzc2FnZSc7XG5cdFx0XHR3cmFwcGVyLmFwcGVuZENoaWxkKCBlcnJvckVsZW1lbnQgKTtcblx0XHR9XG5cblx0XHRlcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSBlcnJvck1lc3NhZ2U7XG5cblx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7XG5cdFx0XHR0aGlzLmNsZWFyRXJyb3JTdGF0ZSggZmllbGRFbGVtZW50ICk7XG5cdFx0fSwgNTAwMCApO1xuXHR9XG5cblx0LyoqXG5cdCAqIENsZWFyIGVycm9yIHN0YXRlIGZvciBhIGZpZWxkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBmaWVsZEVsZW1lbnQgRmllbGQgZWxlbWVudC5cblx0ICovXG5cdGNsZWFyRXJyb3JTdGF0ZSggZmllbGRFbGVtZW50ICkge1xuXHRcdGNvbnN0IHdyYXBwZXIgPSB0aGlzLmdldFN0YXRlV3JhcHBlciggZmllbGRFbGVtZW50ICk7XG5cblx0XHRpZiAoICEgd3JhcHBlciApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR3cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoICdqZmItYXV0by11cGRhdGUtZXJyb3InICk7XG5cblx0XHRjb25zdCBlcnJvckVsZW1lbnQgPSB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoICcuamZiLWF1dG8tdXBkYXRlLWVycm9yLW1lc3NhZ2UnICk7XG5cdFx0aWYgKCBlcnJvckVsZW1lbnQgKSB7XG5cdFx0XHRlcnJvckVsZW1lbnQucmVtb3ZlKCk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9wdGlvbnNVcGRhdGVyO1xuIiwiLyoqXG4gKiBBdXRvY29tcGxldGUgQnJpZGdlIGZvciBBdXRvLVVwZGF0ZSBGZWF0dXJlLlxuICpcbiAqIEludGVncmF0ZXMgdGhlIGF1dG8tdXBkYXRlIGdlbmVyYXRvciBzeXN0ZW0gd2l0aCB0aGUgU2VsZWN0IEF1dG9jb21wbGV0ZSBhZGRvbi5cbiAqIFdoZW4gYSBzZWxlY3QgZmllbGQgaGFzIGJvdGggYXV0b2NvbXBsZXRlIGFuZCBhdXRvLXVwZGF0ZSBlbmFibGVkLFxuICogdGhpcyBtb2R1bGUgaW5qZWN0cyBkZXBlbmRlbnQgZmllbGQgY29udGV4dCBpbnRvIHRoZSBBSkFYIGRhdGEgZnVuY3Rpb25cbiAqIHNvIHRoZSBhZGRvbidzIFBIUCBoYW5kbGVyIGNhbiB1c2UgUmVnaXN0cnk6OmdlbmVyYXRlKCkgd2l0aCBjb250ZXh0LlxuICpcbiAqIFVzZXMgdGhlIGBqZXQuZmIuc2VsZWN0X2F1dG9jb21wbGV0ZS5vcHRpb25zYCBmaWx0ZXIgcHJvdmlkZWQgYnkgdGhlIGFkZG9uLFxuICogd2hpY2ggcGFzc2VzIHRoZSBmdWxsIFNlbGVjdDIgY29uZmlnIChpbmNsdWRpbmcgYGFqYXhgKSBhbG9uZyB3aXRoIGAkZmllbGRgLlxuICpcbiAqIEBwYWNrYWdlIEpldEZvcm1CdWlsZGVyXG4gKi9cblxuY29uc3QgeyBhZGRGaWx0ZXIgfSA9IHdwLmhvb2tzO1xuXG4vKipcbiAqIFBhcnNlIGxpc3Rlbi10byBmaWVsZCBuYW1lcyBmcm9tIGEgY29udGFpbmVyIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGFpbmVyIEVsZW1lbnQgd2l0aCBkYXRhLWxpc3Rlbi10byBhdHRyaWJ1dGUuXG4gKlxuICogQHJldHVybiB7QXJyYXl9IEFycmF5IG9mIGZpZWxkIG5hbWVzLlxuICovXG5mdW5jdGlvbiBwYXJzZUxpc3RlblRvKCBjb250YWluZXIgKSB7XG5cdGNvbnN0IHJhdyA9IGNvbnRhaW5lci5kYXRhc2V0Lmxpc3RlblRvO1xuXG5cdGlmICggISByYXcgKSB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0aWYgKCBjb250YWluZXIuZGF0YXNldC5saXN0ZW5Ub011bHRpcGxlID09PSAnMScgKSB7XG5cdFx0dHJ5IHtcblx0XHRcdHJldHVybiBKU09OLnBhcnNlKCByYXcgKTtcblx0XHR9IGNhdGNoICggZSApIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gWyByYXcgXTtcbn1cblxuLyoqXG4gKiBDb2xsZWN0IGN1cnJlbnQgdmFsdWVzIGZyb20gbGlzdGVuZWQgZm9ybSBmaWVsZHMuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gICAgICAgbGlzdGVuVG8gQXJyYXkgb2YgZmllbGQgbmFtZXMgdG8gY29sbGVjdC5cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGZvcm1Ob2RlIEZvcm0gZWxlbWVudC5cbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IENvbnRleHQgb2JqZWN0IHsgZmllbGROYW1lOiB2YWx1ZSB9LlxuICovXG5mdW5jdGlvbiBjb2xsZWN0Q29udGV4dCggbGlzdGVuVG8sIGZvcm1Ob2RlICkge1xuXHRjb25zdCBjb250ZXh0ID0ge307XG5cblx0bGlzdGVuVG8uZm9yRWFjaCggKCBmaWVsZE5hbWUgKSA9PiB7XG5cdFx0Y29uc3QgZWwgPSBmb3JtTm9kZS5xdWVyeVNlbGVjdG9yKCBgW2RhdGEtZmllbGQtbmFtZT1cIiR7IGZpZWxkTmFtZSB9XCJdYCApXG5cdFx0XHR8fCBmb3JtTm9kZS5xdWVyeVNlbGVjdG9yKCBgW25hbWU9XCIkeyBmaWVsZE5hbWUgfVwiXWAgKTtcblxuXHRcdGlmICggZWwgKSB7XG5cdFx0XHRjb250ZXh0WyBmaWVsZE5hbWUgXSA9IGVsLnZhbHVlIHx8ICcnO1xuXHRcdH1cblx0fSApO1xuXG5cdHJldHVybiBjb250ZXh0O1xufVxuXG4vKipcbiAqIEhvb2sgaW50byB0aGUgYXV0b2NvbXBsZXRlIGFkZG9uJ3MgU2VsZWN0MiBvcHRpb25zIGZpbHRlci5cbiAqXG4gKiBJbmplY3RzIGRlcGVuZGVudCBmaWVsZCBjb250ZXh0IGludG8gdGhlIEFKQVggZGF0YSBmdW5jdGlvbiBzbyB0aGUgYWRkb24nc1xuICogUEhQIGhhbmRsZXIgKEJhc2VBamF4SGFuZGxlcikgcmVjZWl2ZXMgY29udGV4dCBhbmQgY2FuIHJvdXRlIHRocm91Z2hcbiAqIFJlZ2lzdHJ5OjpnZW5lcmF0ZSgpIGZvciBnZW5lcmF0b3IgZmllbGRzIHdpdGggYXV0by11cGRhdGUuXG4gKlxuICogRmlsdGVyIHNpZ25hdHVyZTogYXBwbHlGaWx0ZXJzKCAnamV0LmZiLnNlbGVjdF9hdXRvY29tcGxldGUub3B0aW9ucycsIHNlbGVjdDJPcHRpb25zLCAkZmllbGQgKVxuICovXG5hZGRGaWx0ZXIoXG5cdCdqZXQuZmIuc2VsZWN0X2F1dG9jb21wbGV0ZS5vcHRpb25zJyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvYXV0by11cGRhdGUtY29udGV4dCcsXG5cdGZ1bmN0aW9uICggc2VsZWN0Mk9wdGlvbnMsICRmaWVsZCApIHtcblx0XHRpZiAoICEgJGZpZWxkICkge1xuXHRcdFx0cmV0dXJuIHNlbGVjdDJPcHRpb25zO1xuXHRcdH1cblxuXHRcdGNvbnN0IGZpZWxkRWwgPSAkZmllbGRbIDAgXSB8fCAkZmllbGQ7XG5cblx0XHRpZiAoICEgZmllbGRFbCB8fCAhIGZpZWxkRWwuZGF0YXNldCB8fCBmaWVsZEVsLmRhdGFzZXQuamZiQXV0b1VwZGF0ZSAhPT0gJzEnICkge1xuXHRcdFx0cmV0dXJuIHNlbGVjdDJPcHRpb25zO1xuXHRcdH1cblxuXHRcdGlmICggISBzZWxlY3QyT3B0aW9ucy5hamF4ICkge1xuXHRcdFx0cmV0dXJuIHNlbGVjdDJPcHRpb25zO1xuXHRcdH1cblxuXHRcdGNvbnN0IGZvcm1Ob2RlID0gZmllbGRFbC5jbG9zZXN0KCAnZm9ybScgKTtcblxuXHRcdGlmICggISBmb3JtTm9kZSApIHtcblx0XHRcdHJldHVybiBzZWxlY3QyT3B0aW9ucztcblx0XHR9XG5cblx0XHRjb25zdCBsaXN0ZW5UbyA9IHBhcnNlTGlzdGVuVG8oIGZpZWxkRWwgKTtcblxuXHRcdGlmICggISBsaXN0ZW5Uby5sZW5ndGggKSB7XG5cdFx0XHRyZXR1cm4gc2VsZWN0Mk9wdGlvbnM7XG5cdFx0fVxuXG5cdFx0Ly8gV3JhcCB0aGUgb3JpZ2luYWwgZGF0YSBmdW5jdGlvbiB0byBpbmplY3QgY29udGV4dFxuXHRcdGNvbnN0IG9yaWdpbmFsRGF0YUZuID0gc2VsZWN0Mk9wdGlvbnMuYWpheC5kYXRhO1xuXG5cdFx0c2VsZWN0Mk9wdGlvbnMuYWpheC5kYXRhID0gZnVuY3Rpb24gKCBwYXJhbXMgKSB7XG5cdFx0XHRjb25zdCBkYXRhID0gdHlwZW9mIG9yaWdpbmFsRGF0YUZuID09PSAnZnVuY3Rpb24nXG5cdFx0XHRcdD8gb3JpZ2luYWxEYXRhRm4oIHBhcmFtcyApXG5cdFx0XHRcdDogcGFyYW1zO1xuXG5cdFx0XHQvLyBDb2xsZWN0IGN1cnJlbnQgdmFsdWVzIGZyb20gZGVwZW5kZW50IGZpZWxkcyBhbmQgYWRkIGFzIGNvbnRleHRcblx0XHRcdGNvbnN0IGNvbnRleHQgPSBjb2xsZWN0Q29udGV4dCggbGlzdGVuVG8sIGZvcm1Ob2RlICk7XG5cblx0XHRcdGRhdGEuY29udGV4dCA9IEpTT04uc3RyaW5naWZ5KCBjb250ZXh0ICk7XG5cblx0XHRcdHJldHVybiBkYXRhO1xuXHRcdH07XG5cblx0XHRyZXR1cm4gc2VsZWN0Mk9wdGlvbnM7XG5cdH1cbik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyoqXG4gKiBBdXRvLVVwZGF0ZSBGZWF0dXJlIOKAlCBtYWluIGVudHJ5IHBvaW50LlxuICogSG9va3MgaW50byBKRkIgZm9ybSBsaWZlY3ljbGUgYW5kIHNldHMgdXAgZmllbGQgd2F0Y2hlcnMuXG4gKlxuICogQHBhY2thZ2UgSmV0Rm9ybUJ1aWxkZXJcbiAqL1xuXG5pbXBvcnQgRmllbGRXYXRjaGVyIGZyb20gJy4vRmllbGRXYXRjaGVyJztcbmltcG9ydCAnLi9hdXRvY29tcGxldGUtYnJpZGdlJztcbmltcG9ydCAnLi9zdHlsZXMucGNzcyc7XG5cbi8qKiBAdHlwZSB7RmllbGRXYXRjaGVyfG51bGx9ICovXG5sZXQgZ2xvYmFsV2F0Y2hlciA9IG51bGw7XG5cbi8qKlxuICogQHJldHVybiB7RmllbGRXYXRjaGVyfVxuICovXG5mdW5jdGlvbiBnZXRXYXRjaGVyKCkge1xuXHRpZiAoICEgZ2xvYmFsV2F0Y2hlciApIHtcblx0XHRnbG9iYWxXYXRjaGVyID0gbmV3IEZpZWxkV2F0Y2hlcigpO1xuXHR9XG5cblx0cmV0dXJuIGdsb2JhbFdhdGNoZXI7XG59XG5cbi8qKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudHxqUXVlcnl9IGZvcm1Ob2RlXG4gKi9cbmZ1bmN0aW9uIGluaXRBdXRvVXBkYXRlKCBmb3JtTm9kZSApIHtcblx0aWYgKCAhIGZvcm1Ob2RlICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmICggZm9ybU5vZGUgaW5zdGFuY2VvZiBqUXVlcnkgKSB7XG5cdFx0Zm9ybU5vZGUgPSBmb3JtTm9kZVsgMCBdO1xuXHR9XG5cblx0aWYgKCAhIGZvcm1Ob2RlPy5xdWVyeVNlbGVjdG9yQWxsICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGdldFdhdGNoZXIoKS5pbml0Rm9ybSggZm9ybU5vZGUgKTtcbn1cblxuLyoqXG4gKiBNdXRhdGlvbk9ic2VydmVyIGZvciBkeW5hbWljYWxseSBhZGRlZC9yZW1vdmVkIGZpZWxkcyAoQ29uZGl0aW9uYWwgQmxvY2tzLCBSZXBlYXRlciByb3dzKS5cbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fGpRdWVyeX0gZm9ybU5vZGVcbiAqL1xuZnVuY3Rpb24gb2JzZXJ2ZUR5bmFtaWNGaWVsZHMoIGZvcm1Ob2RlICkge1xuXHRpZiAoICEgZm9ybU5vZGUgfHwgISB3aW5kb3cuTXV0YXRpb25PYnNlcnZlciApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoIGZvcm1Ob2RlIGluc3RhbmNlb2YgalF1ZXJ5ICkge1xuXHRcdGZvcm1Ob2RlID0gZm9ybU5vZGVbIDAgXTtcblx0fVxuXG5cdGlmICggISBmb3JtTm9kZT8ucXVlcnlTZWxlY3RvckFsbCApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCAoIG11dGF0aW9ucyApID0+IHtcblx0XHRtdXRhdGlvbnMuZm9yRWFjaCggKCBtdXRhdGlvbiApID0+IHtcblx0XHRcdG11dGF0aW9uLnJlbW92ZWROb2Rlcy5mb3JFYWNoKCAoIG5vZGUgKSA9PiB7XG5cdFx0XHRcdGlmICggbm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUgKSB7XG5cdFx0XHRcdFx0Y2xlYW51cFJlbW92ZWRSZXBlYXRlclJvdyggbm9kZSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cblx0XHRcdG11dGF0aW9uLmFkZGVkTm9kZXMuZm9yRWFjaCggKCBub2RlICkgPT4ge1xuXHRcdFx0XHRpZiAoIG5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFICkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IGFwcGVhcmVkRmllbGRzID0gW107XG5cblx0XHRcdFx0aWYgKCBub2RlLmhhc0F0dHJpYnV0ZSAmJiBub2RlLmdldEF0dHJpYnV0ZSggJ2RhdGEtZmllbGQtbmFtZScgKSApIHtcblx0XHRcdFx0XHRhcHBlYXJlZEZpZWxkcy5wdXNoKCBub2RlICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoIG5vZGUucXVlcnlTZWxlY3RvckFsbCApIHtcblx0XHRcdFx0XHRub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoICdbZGF0YS1maWVsZC1uYW1lXScgKS5mb3JFYWNoKCAoIGYgKSA9PiBhcHBlYXJlZEZpZWxkcy5wdXNoKCBmICkgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGFwcGVhcmVkRmllbGRzLmZvckVhY2goICggZmllbGRFbGVtZW50ICkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGZpZWxkTmFtZSA9IGZpZWxkRWxlbWVudC5nZXRBdHRyaWJ1dGUoICdkYXRhLWZpZWxkLW5hbWUnICk7XG5cblx0XHRcdFx0XHRpZiAoIGZpZWxkRWxlbWVudC5oYXNBdHRyaWJ1dGUoICdkYXRhLWpmYi1hdXRvLXVwZGF0ZScgKSApIHtcblx0XHRcdFx0XHRcdGdldFdhdGNoZXIoKS5pbml0RmllbGQoIGZpZWxkRWxlbWVudCwgZm9ybU5vZGUgKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXRyeUZhaWxlZFdhdGNoZXJzKCBmaWVsZE5hbWUsIGZvcm1Ob2RlICk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdH0gKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHQvLyBPYnNlcnZlIHRoZSBmb3JtIGZvciBjaGFuZ2VzIGluIHRoZSBET00gdHJlZVxuXHRvYnNlcnZlci5vYnNlcnZlKCBmb3JtTm9kZSwge1xuXHRcdGNoaWxkTGlzdDogdHJ1ZSxcblx0XHRzdWJ0cmVlOiB0cnVlLFxuXHR9ICk7XG5cbn1cblxuLyoqXG4gKiBDbGVhbiB1cCB3YXRjaGVycyBhbmQgY2FjaGVkIGRhdGEgZm9yIGZpZWxkcyBpbiBhIHJlbW92ZWQgcmVwZWF0ZXIgcm93LlxuICpcbiAqIFdoZW4gYSByZXBlYXRlciByb3cgaXMgcmVtb3ZlZCB3ZSBtdXN0IHRlYXIgZG93biBhbnkgd2F0Y2hlcnMgdGhhdCB3ZXJlXG4gKiBzY29wZWQgdG8gdGhhdCByb3cgc28gdGhleSBkb24ndCBob2xkIHJlZmVyZW5jZXMgdG8gZGV0YWNoZWQgZWxlbWVudHMuXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcmVtb3ZlZE5vZGUgVGhlIERPTSBub2RlIHRoYXQgd2FzIHJlbW92ZWQuXG4gKi9cbmZ1bmN0aW9uIGNsZWFudXBSZW1vdmVkUmVwZWF0ZXJSb3coIHJlbW92ZWROb2RlICkge1xuXHQvLyBDaGVjayBpZiB0aGUgcmVtb3ZlZCBub2RlIGlzIGl0c2VsZiBhIHJlcGVhdGVyIHJvdyBvciBjb250YWlucyByb3dzXG5cdGNvbnN0IHJvd3MgPSBbXTtcblxuXHRpZiAoIHJlbW92ZWROb2RlLmRhdGFzZXQ/LnJlcGVhdGVyUm93ID09PSAnMScgfHxcblx0ICAgICByZW1vdmVkTm9kZS5jbGFzc0xpc3Q/LmNvbnRhaW5zKCAnamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcl9fcm93JyApICkge1xuXHRcdHJvd3MucHVzaCggcmVtb3ZlZE5vZGUgKTtcblx0fVxuXG5cdGlmICggcmVtb3ZlZE5vZGUucXVlcnlTZWxlY3RvckFsbCApIHtcblx0XHRjb25zdCBuZXN0ZWRSb3dzID0gcmVtb3ZlZE5vZGUucXVlcnlTZWxlY3RvckFsbCggJy5qZXQtZm9ybS1idWlsZGVyLXJlcGVhdGVyX19yb3cnICk7XG5cdFx0bmVzdGVkUm93cy5mb3JFYWNoKCAoIHJvdyApID0+IHJvd3MucHVzaCggcm93ICkgKTtcblx0fVxuXG5cdGlmICggISByb3dzLmxlbmd0aCApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB3YXRjaGVyID0gZ2V0V2F0Y2hlcigpO1xuXG5cdHJvd3MuZm9yRWFjaCggKCByb3cgKSA9PiB7XG5cdFx0Ly8gQ29sbGVjdCBmaWVsZCBrZXlzIHRoYXQgYmVsb25nIHRvIHRoaXMgcm93XG5cdFx0Y29uc3Qga2V5c1RvUmVtb3ZlID0gW107XG5cblx0XHR3YXRjaGVyLmF1dG9VcGRhdGVGaWVsZHMuZm9yRWFjaCggKCBmaWVsZERhdGEsIGZpZWxkS2V5ICkgPT4ge1xuXHRcdFx0Y29uc3QgZWxlbWVudCA9IGZpZWxkRGF0YT8uZWxlbWVudDtcblx0XHRcdGlmICggZWxlbWVudCAmJiByb3cuY29udGFpbnMoIGVsZW1lbnQgKSApIHtcblx0XHRcdFx0a2V5c1RvUmVtb3ZlLnB1c2goIGZpZWxkS2V5ICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdFx0a2V5c1RvUmVtb3ZlLmZvckVhY2goICggZmllbGRLZXkgKSA9PiB7XG5cdFx0XHR3YXRjaGVyLmF1dG9VcGRhdGVGaWVsZHMuZGVsZXRlKCBmaWVsZEtleSApO1xuXHRcdH0gKTtcblxuXHRcdC8vIFJlbW92ZSB3YXRjaGVycyBzY29wZWQgdG8gdGhpcyByb3dcblx0XHRjb25zdCB3YXRjaGVyS2V5c1RvUmVtb3ZlID0gW107XG5cblx0XHR3YXRjaGVyLndhdGNoZXJzLmZvckVhY2goICggd2F0Y2hlckRhdGEsIHdhdGNoZXJLZXkgKSA9PiB7XG5cdFx0XHQvLyBXYXRjaGVyIGtleSBpbmNsdWRlcyByZXBlYXRlciBzY29wZSDigJQgY2hlY2sgaWYgdGhpcyByb3cgaXMgdGhlIHNjb3BlXG5cdFx0XHQvLyBieSBjaGVja2luZyBpZiBhbnkgZGVwZW5kZW50IGZpZWxkIHdhcyBpbiB0aGlzIHJvd1xuXHRcdFx0Y29uc3QgaGFzUmVtb3ZlZERlcGVuZGVudHMgPSB3YXRjaGVyRGF0YS5kZXBlbmRlbnRzLnNvbWUoXG5cdFx0XHRcdCggZGVwICkgPT4ga2V5c1RvUmVtb3ZlLmluY2x1ZGVzKCBkZXAgKVxuXHRcdFx0KTtcblxuXHRcdFx0aWYgKCBoYXNSZW1vdmVkRGVwZW5kZW50cyApIHtcblx0XHRcdFx0Ly8gUmVtb3ZlIGRlcGVuZGVudHMgdGhhdCBiZWxvbmcgdG8gdGhpcyByb3dcblx0XHRcdFx0d2F0Y2hlckRhdGEuZGVwZW5kZW50cyA9IHdhdGNoZXJEYXRhLmRlcGVuZGVudHMuZmlsdGVyKFxuXHRcdFx0XHRcdCggZGVwICkgPT4gISBrZXlzVG9SZW1vdmUuaW5jbHVkZXMoIGRlcCApXG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0Ly8gSWYgbm8gbW9yZSBkZXBlbmRlbnRzLCB1bndhdGNoIGVudGlyZWx5XG5cdFx0XHRcdGlmICggISB3YXRjaGVyRGF0YS5kZXBlbmRlbnRzLmxlbmd0aCApIHtcblx0XHRcdFx0XHRpZiAoIHdhdGNoZXJEYXRhLnVud2F0Y2ggKSB7XG5cdFx0XHRcdFx0XHR3YXRjaGVyRGF0YS51bndhdGNoKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHdhdGNoZXJLZXlzVG9SZW1vdmUucHVzaCggd2F0Y2hlcktleSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdFx0d2F0Y2hlcktleXNUb1JlbW92ZS5mb3JFYWNoKCAoIGtleSApID0+IHtcblx0XHRcdHdhdGNoZXIud2F0Y2hlcnMuZGVsZXRlKCBrZXkgKTtcblx0XHR9ICk7XG5cdH0gKTtcbn1cblxuLyoqXG4gKiBUcmFjayB3aGljaCB3YXRjaGVycyB3ZSBhbHJlYWR5IHJldHJpZWQgdG8gYXZvaWQgZHVwbGljYXRlcy5cbiAqIEtleTogXCJzb3VyY2VGaWVsZE5hbWU6dGFyZ2V0RmllbGROYW1lXCJcbiAqL1xuY29uc3QgcmV0cmllZFdhdGNoZXJzID0gbmV3IFNldCgpO1xuXG4vKipcbiAqIFJldHJ5IHNldHRpbmcgdXAgd2F0Y2hlcnMgZm9yIGZpZWxkcyB0aGF0IHdlcmUgd2FpdGluZyBmb3IgdGhpcyBzb3VyY2UgZmllbGQuXG4gKiBXaGVuIGEgc291cmNlIGZpZWxkIGFwcGVhcnMgKGZyb20gQ29uZGl0aW9uYWwgQmxvY2spLCBkZXBlbmRlbnQgZmllbGRzIG5lZWQgdG8gcmUtaW5pdGlhbGl6ZSB0aGVpciB3YXRjaGVycy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICBzb3VyY2VGaWVsZE5hbWUgRmllbGQgbmFtZSB0aGF0IGp1c3QgYXBwZWFyZWQuXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBmb3JtTm9kZSAgICAgICAgRm9ybSBlbGVtZW50LlxuICovXG5mdW5jdGlvbiByZXRyeUZhaWxlZFdhdGNoZXJzKCBzb3VyY2VGaWVsZE5hbWUsIGZvcm1Ob2RlICkge1xuXHRjb25zdCB3YXRjaGVyID0gZ2V0V2F0Y2hlcigpO1xuXG5cdC8vIEdldCBhbGwgYXV0by11cGRhdGUgZmllbGRzXG5cdHdhdGNoZXIuYXV0b1VwZGF0ZUZpZWxkcy5mb3JFYWNoKCAoIGZpZWxkRGF0YSwgdGFyZ2V0RmllbGROYW1lICkgPT4ge1xuXHRcdGNvbnN0IHsgY29uZmlnIH0gPSBmaWVsZERhdGE7XG5cblx0XHQvLyBDaGVjayBpZiB0aGlzIGZpZWxkIGxpc3RlbnMgdG8gdGhlIHNvdXJjZSBmaWVsZCB0aGF0IGp1c3QgYXBwZWFyZWRcblx0XHQvLyBjb25maWcubGlzdGVuVG8gaXMgbm93IGFuIGFycmF5XG5cdFx0aWYgKCBjb25maWcubGlzdGVuVG8gJiYgQXJyYXkuaXNBcnJheSggY29uZmlnLmxpc3RlblRvICkgJiYgY29uZmlnLmxpc3RlblRvLmluY2x1ZGVzKCBzb3VyY2VGaWVsZE5hbWUgKSApIHtcblx0XHRcdC8vIENyZWF0ZSB1bmlxdWUga2V5IGZvciB0aGlzIHdhdGNoZXIgcGFpclxuXHRcdFx0Y29uc3Qgd2F0Y2hlcktleSA9IGAkeyBzb3VyY2VGaWVsZE5hbWUgfTokeyB0YXJnZXRGaWVsZE5hbWUgfWA7XG5cblx0XHRcdC8vIFNraXAgaWYgd2UgYWxyZWFkeSByZXRyaWVkIHRoaXMgd2F0Y2hlclxuXHRcdFx0aWYgKCByZXRyaWVkV2F0Y2hlcnMuaGFzKCB3YXRjaGVyS2V5ICkgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gTWFyayBhcyByZXRyaWVkXG5cdFx0XHRyZXRyaWVkV2F0Y2hlcnMuYWRkKCB3YXRjaGVyS2V5ICk7XG5cblx0XHRcdFx0Ly8gUmUtaW5pdGlhbGl6ZSB0aGUgd2F0Y2hlciBmb3IgdGhpcyBmaWVsZFxuXHRcdFx0d2F0Y2hlci53YXRjaEZpZWxkKCBzb3VyY2VGaWVsZE5hbWUsIHRhcmdldEZpZWxkTmFtZSwgZm9ybU5vZGUgKTtcblxuXHRcdFx0Ly8gVHJpZ2dlciBkZWJvdW5jZWQgdXBkYXRlIGlmIEFMTCBzb3VyY2UgZmllbGRzIGhhdmUgdmFsdWVzLlxuXHRcdFx0Ly8gRGVib3VuY2VkIHNvIG11bHRpcGxlIHJldHJpZXMgaW4gdGhlIHNhbWUgdGljayBjb2xsYXBzZSBpbnRvIG9uZS5cblx0XHRcdGlmICggYWxsU291cmNlRmllbGRzSGF2ZVZhbHVlcyggY29uZmlnLmxpc3RlblRvLCBmb3JtTm9kZSApICkge1xuXHRcdFx0XHR3YXRjaGVyLmRlYm91bmNlZFVwZGF0ZSggdGFyZ2V0RmllbGROYW1lLCBmb3JtTm9kZSApO1xuXHRcdFx0fVxuXHRcdH1cblx0fSApO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGFsbCBzb3VyY2UgZmllbGRzIGhhdmUgdmFsdWVzLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9ICAgICAgIHNvdXJjZUZpZWxkTmFtZXMgQXJyYXkgb2Ygc291cmNlIGZpZWxkIG5hbWVzLlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZm9ybU5vZGUgICAgICAgICBGb3JtIGVsZW1lbnQuXG4gKlxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBhbGwgZmllbGRzIGhhdmUgdmFsdWVzLlxuICovXG5mdW5jdGlvbiBhbGxTb3VyY2VGaWVsZHNIYXZlVmFsdWVzKCBzb3VyY2VGaWVsZE5hbWVzLCBmb3JtTm9kZSApIHtcblx0cmV0dXJuIHNvdXJjZUZpZWxkTmFtZXMuZXZlcnkoICggZmllbGROYW1lICkgPT4ge1xuXHRcdGNvbnN0IGZpZWxkID0gZm9ybU5vZGUucXVlcnlTZWxlY3RvciggYFtkYXRhLWZpZWxkLW5hbWU9XCIkeyBmaWVsZE5hbWUgfVwiXWAgKSB8fFxuXHRcdCAgICAgICAgICAgICBmb3JtTm9kZS5xdWVyeVNlbGVjdG9yKCBgW25hbWU9XCIkeyBmaWVsZE5hbWUgfVwiXWAgKTtcblx0XHRyZXR1cm4gZmllbGQgJiYgZmllbGQudmFsdWU7XG5cdH0gKTtcbn1cblxuLyoqXG4gKiBIYW5kbGUgY29uZGl0aW9uYWwgYmxvY2sgdG9nZ2xpbmcgYSBmaWVsZCdzIERPTSBwcmVzZW5jZS5cbiAqXG4gKiBXaGVuIFwiUmVtb3ZlIGhpZGRlbiBlbGVtZW50cyBmcm9tIHBhZ2UgSFRNTFwiIGlzIGVuYWJsZWQsIHRoZSBjb25kaXRpb25hbFxuICogYmxvY2sgZmlyZXMgYSBjdXN0b20gZXZlbnQuIElmIHRoZSB0b2dnbGVkIGJsb2NrIGNvbnRhaW5zIGEgc291cmNlIGZpZWxkXG4gKiB0aGF0IG91ciBhdXRvLXVwZGF0ZSBmaWVsZHMgbGlzdGVuIHRvLCB3ZSB0cmlnZ2VyIGFuIHVwZGF0ZSBzbyB0aGVcbiAqIGdlbmVyYXRvciByZS1ydW5zIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dCAoZW1wdHkgZm9yIHJlbW92ZWQgZmllbGRzKS5cbiAqXG4gKiBXaGVuIHRoZSBibG9jayBpcyBzaG93biBhZ2FpbiAocmVzdWx0OiB0cnVlKSwgTXV0YXRpb25PYnNlcnZlciBoYW5kbGVzXG4gKiByZS1pbml0aWFsaXphdGlvbiB2aWEgcmV0cnlGYWlsZWRXYXRjaGVycy4gSGVyZSB3ZSBvbmx5IG5lZWQgdG8gaGFuZGxlXG4gKiB0aGUgaGlkZSBjYXNlIChyZXN1bHQ6IGZhbHNlKSDigJQgdHJpZ2dlciB1cGRhdGVzIGZvciBkZXBlbmRlbnRzIHNvIHRoZXlcbiAqIGdldCBmcmVzaCBvcHRpb25zIHdpdGhvdXQgdGhlIGhpZGRlbiBmaWVsZCdzIHZhbHVlLlxuICovXG5mdW5jdGlvbiBzZXR1cENvbmRpdGlvbmFsQmxvY2tMaXN0ZW5lcigpIHtcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHQnamV0LWZvcm0tYnVpbGRlci9jb25kaXRpb25hbC1ibG9jay9ibG9jay10b2dnbGUtaGlkZGVuLWRvbScsXG5cdFx0KCBldmVudCApID0+IHtcblx0XHRcdGNvbnN0IHsgYmxvY2ssIHJlc3VsdCB9ID0gZXZlbnQuZGV0YWlsIHx8IHt9O1xuXG5cdFx0XHRpZiAoICEgYmxvY2sgfHwgcmVzdWx0ICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHdhdGNoZXIgPSBnZXRXYXRjaGVyKCk7XG5cblx0XHRcdGlmICggISB3YXRjaGVyLndhdGNoZXJzLnNpemUgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQ29sbGVjdCBmaWVsZCBuYW1lcyBmcm9tIHRoZSBibG9jayBiZWluZyBoaWRkZW5cblx0XHRcdGNvbnN0IGhpZGRlbkZpZWxkTmFtZXMgPSBuZXcgU2V0KCk7XG5cblx0XHRcdC8vIFRoZSBibG9jayBpdHNlbGYgbWlnaHQgaGF2ZSBhIGZpZWxkLW5hbWVcblx0XHRcdGlmICggYmxvY2suZGF0YXNldD8uZmllbGROYW1lICkge1xuXHRcdFx0XHRoaWRkZW5GaWVsZE5hbWVzLmFkZCggYmxvY2suZGF0YXNldC5maWVsZE5hbWUgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRmllbGRzIGluc2lkZSB0aGUgYmxvY2tcblx0XHRcdGNvbnN0IGlubmVyRmllbGRzID0gYmxvY2sucXVlcnlTZWxlY3RvckFsbFxuXHRcdFx0XHQ/IGJsb2NrLnF1ZXJ5U2VsZWN0b3JBbGwoICdbZGF0YS1maWVsZC1uYW1lXScgKVxuXHRcdFx0XHQ6IFtdO1xuXG5cdFx0XHRpbm5lckZpZWxkcy5mb3JFYWNoKCAoIGZpZWxkICkgPT4ge1xuXHRcdFx0XHRoaWRkZW5GaWVsZE5hbWVzLmFkZCggZmllbGQuZ2V0QXR0cmlidXRlKCAnZGF0YS1maWVsZC1uYW1lJyApICk7XG5cdFx0XHR9ICk7XG5cblx0XHRcdGlmICggISBoaWRkZW5GaWVsZE5hbWVzLnNpemUgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRmluZCBhbGwgYXV0by11cGRhdGUgZmllbGRzIHRoYXQgZGVwZW5kIG9uIGFueSBoaWRkZW4gZmllbGRcblx0XHRcdGNvbnN0IHRhcmdldEZpZWxkc1RvVXBkYXRlID0gbmV3IFNldCgpO1xuXG5cdFx0XHR3YXRjaGVyLndhdGNoZXJzLmZvckVhY2goICggd2F0Y2hlckRhdGEsIHdhdGNoZXJLZXkgKSA9PiB7XG5cdFx0XHRcdC8vIHdhdGNoZXJLZXkgY291bGQgYmUgcGxhaW4gZmllbGQgbmFtZSBvciByZXBlYXRlci1zY29wZWRcblx0XHRcdFx0Ly8gQ2hlY2sgaWYgYW55IGhpZGRlbiBmaWVsZCBuYW1lIGlzIHBhcnQgb2YgdGhlIHdhdGNoZXIga2V5XG5cdFx0XHRcdGNvbnN0IG1hdGNoZXNIaWRkZW4gPSBbIC4uLmhpZGRlbkZpZWxkTmFtZXMgXS5zb21lKFxuXHRcdFx0XHRcdCggbmFtZSApID0+IHdhdGNoZXJLZXkgPT09IG5hbWUgfHwgd2F0Y2hlcktleS5lbmRzV2l0aCggYC4keyBuYW1lIH1gIClcblx0XHRcdFx0KTtcblxuXHRcdFx0XHRpZiAoIG1hdGNoZXNIaWRkZW4gKSB7XG5cdFx0XHRcdFx0d2F0Y2hlckRhdGEuZGVwZW5kZW50cy5mb3JFYWNoKCAoIGRlcCApID0+IHtcblx0XHRcdFx0XHRcdHRhcmdldEZpZWxkc1RvVXBkYXRlLmFkZCggZGVwICk7XG5cblx0XHRcdFx0XHRcdC8vIENsZWFyIHJldHJ5IHRyYWNraW5nIHNvIHJldHJ5RmFpbGVkV2F0Y2hlcnMgZmlyZXNcblx0XHRcdFx0XHRcdC8vIGFnYWluIHdoZW4gdGhlIHNvdXJjZSBmaWVsZCByZWFwcGVhcnMuXG5cdFx0XHRcdFx0XHRbIC4uLmhpZGRlbkZpZWxkTmFtZXMgXS5mb3JFYWNoKCAoIG5hbWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHJldHJpZWRXYXRjaGVycy5kZWxldGUoIGAkeyBuYW1lIH06JHsgZGVwIH1gICk7XG5cdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cblx0XHRcdGlmICggISB0YXJnZXRGaWVsZHNUb1VwZGF0ZS5zaXplICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIEZpbmQgdGhlIGZvcm0gbm9kZSBmcm9tIGFueSByZW1haW5pbmcgYXV0by11cGRhdGUgZmllbGRcblx0XHRcdGxldCBmb3JtTm9kZSA9IG51bGw7XG5cblx0XHRcdGZvciAoIGNvbnN0IHRhcmdldEtleSBvZiB0YXJnZXRGaWVsZHNUb1VwZGF0ZSApIHtcblx0XHRcdFx0Y29uc3QgZmllbGREYXRhID0gd2F0Y2hlci5hdXRvVXBkYXRlRmllbGRzLmdldCggdGFyZ2V0S2V5ICk7XG5cdFx0XHRcdGlmICggZmllbGREYXRhPy5lbGVtZW50ICkge1xuXHRcdFx0XHRcdGZvcm1Ob2RlID0gZmllbGREYXRhLmVsZW1lbnQuY2xvc2VzdCggJ2Zvcm0nICk7XG5cdFx0XHRcdFx0aWYgKCBmb3JtTm9kZSApIHtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoICEgZm9ybU5vZGUgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gVHJpZ2dlciB1cGRhdGVzIGZvciBhbGwgYWZmZWN0ZWQgZGVwZW5kZW50c1xuXHRcdFx0dGFyZ2V0RmllbGRzVG9VcGRhdGUuZm9yRWFjaCggKCB0YXJnZXRLZXkgKSA9PiB7XG5cdFx0XHRcdHdhdGNoZXIuZGVib3VuY2VkVXBkYXRlKCB0YXJnZXRLZXksIGZvcm1Ob2RlICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHQpO1xufVxuXG4vKipcbiAqIEhvb2sgaW50byBKZXRGb3JtQnVpbGRlcidzIGZvcm0gaW5pdGlhbGl6YXRpb24uXG4gKi9cbmZ1bmN0aW9uIGhvb2tJbnRvSmV0Rm9ybUJ1aWxkZXIoKSB7XG5cdC8vIFdhaXQgZm9yIEpldEZvcm1CdWlsZGVyTWFpbiB0byBiZSBhdmFpbGFibGVcblx0aWYgKCB0eXBlb2Ygd2luZG93LkpldEZvcm1CdWlsZGVyTWFpbiA9PT0gJ3VuZGVmaW5lZCcgKSB7XG5cdFx0Y29uc29sZS53YXJuKCAnW0pGQiBBdXRvLVVwZGF0ZV0gSmV0Rm9ybUJ1aWxkZXJNYWluIG5vdCBhdmFpbGFibGUsIHJldHJ5aW5nLi4uJyApO1xuXG5cdFx0Ly8gUmV0cnkgYWZ0ZXIgYSBzaG9ydCBkZWxheVxuXHRcdHNldFRpbWVvdXQoIGhvb2tJbnRvSmV0Rm9ybUJ1aWxkZXIsIDEwMCApO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIExpc3RlbiBmb3IgY29uZGl0aW9uYWwgYmxvY2sgRE9NIHRvZ2dsaW5nIChnbG9iYWwsIG9uY2UpXG5cdHNldHVwQ29uZGl0aW9uYWxCbG9ja0xpc3RlbmVyKCk7XG5cblx0Ly8gSG9vayBpbnRvIGZvcm0gYWZ0ZXItaW5pdCBldmVudC5cblx0Ly8gQ2FsbGJhY2sgcmVjZWl2ZXMgKCBldmVudCwgJHNjb3BlLCBvYnNlcnZhYmxlICkuXG5cdGpRdWVyeSggZG9jdW1lbnQgKS5vbiggJ2pldC1mb3JtLWJ1aWxkZXIvYWZ0ZXItaW5pdCcsICggZXZlbnQsICRzY29wZSApID0+IHtcblx0XHRjb25zdCBmb3JtTm9kZSA9ICRzY29wZVsgMCBdPy5xdWVyeVNlbGVjdG9yKCAnZm9ybS5qZXQtZm9ybS1idWlsZGVyJyApO1xuXG5cdFx0aWYgKCAhIGZvcm1Ob2RlICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGluaXRBdXRvVXBkYXRlKCBmb3JtTm9kZSApO1xuXG5cdFx0Ly8gU2V0IHVwIG9ic2VydmVyIGZvciBkeW5hbWljIGZpZWxkcyAoQ29uZGl0aW9uYWwgQmxvY2tzKVxuXHRcdG9ic2VydmVEeW5hbWljRmllbGRzKCBmb3JtTm9kZSApO1xuXHR9ICk7XG5cbn1cblxuLyoqXG4gKiBJbml0aWFsaXplIG9uIERPTSByZWFkeS5cbiAqL1xuaWYgKCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGluZycgKSB7XG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdET01Db250ZW50TG9hZGVkJywgaG9va0ludG9KZXRGb3JtQnVpbGRlciApO1xufSBlbHNlIHtcblx0aG9va0ludG9KZXRGb3JtQnVpbGRlcigpO1xufVxuXG4vKipcbiAqIEV4cG9zZSBBUEkgZm9yIGV4dGVybmFsIHVzZS5cbiAqL1xud2luZG93LkpGQkF1dG9VcGRhdGUgPSB7XG5cdGdldFdhdGNoZXIsXG5cdGluaXRBdXRvVXBkYXRlLFxufTtcblxuZXhwb3J0IHsgZ2V0V2F0Y2hlciwgaW5pdEF1dG9VcGRhdGUgfTtcbmV4cG9ydCBkZWZhdWx0IHsgZ2V0V2F0Y2hlciwgaW5pdEF1dG9VcGRhdGUgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==