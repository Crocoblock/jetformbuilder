/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/auto-update/CacheManager.js"
/*!**********************************************!*\
  !*** ./frontend/auto-update/CacheManager.js ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
   * @param {number} cacheTimeout Cache timeout in seconds (0=disabled, N=seconds).
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

/***/ },

/***/ "./frontend/auto-update/FieldWatcher.js"
/*!**********************************************!*\
  !*** ./frontend/auto-update/FieldWatcher.js ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

    /** @type {Map<string, string>} */
    this.lastContextHashes = new Map();

    /** @type {Map<string, string|Array>} */
    this.preservedRepeaterValues = new Map();
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
  initField(fieldElement, formNode, options = {}) {
    const config = this.parseFieldConfig(fieldElement);
    if (!config) {
      return;
    }
    const fieldKey = this.buildFieldKey(config.fieldName, fieldElement);

    // Prevent double-init: MutationObserver with subtree:true can fire
    // multiple callbacks for one repeater row insertion.
    if (fieldElement.hasAttribute('data-jfb-au-init')) {
      return;
    }
    fieldElement.setAttribute('data-jfb-au-init', '1');
    config.fieldKey = fieldKey;
    this.autoUpdateFields.set(fieldKey, {
      element: fieldElement,
      config
    });
    const preservedValue = this.consumePreservedRepeaterValue(fieldKey);
    if (preservedValue !== undefined) {
      fieldElement.dataset.jfbAuPreservedValue = JSON.stringify(preservedValue);
    }
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
    if (!config.updateOnButton && config.listenTo) {
      if (this.shouldSkipDynamicInitRefresh(fieldElement, config, formNode, options)) {
        return;
      }
      if (config.requireAllFilled) {
        const context = this.collectContext(config, formNode);
        const allFilled = config.listenTo.every(fieldName => {
          const val = context[fieldName];
          return this.isContextValueFilled(val);
        });
        if (allFilled) {
          this.debouncedUpdate(fieldKey, formNode);
        } else if (this.shouldClearOnEmptyContext(config)) {
          this.optionsUpdater.updateOptions(fieldElement, [], formNode);
        } else {
          this.debouncedUpdate(fieldKey, formNode);
        }
      } else {
        this.debouncedUpdate(fieldKey, formNode);
      }
    }
  }
  shouldSkipDynamicInitRefresh(fieldElement, config, formNode, options = {}) {
    if (!options?.isDynamicInit) {
      return false;
    }
    const repeaterRow = fieldElement.closest('.jet-form-builder-repeater__row');
    if (!repeaterRow || !Array.isArray(config.listenTo) || !config.listenTo.length) {
      return false;
    }
    const listensOnlyToExternalFields = config.listenTo.every(sourceFieldName => {
      return !this.findElementInScope(sourceFieldName, repeaterRow, repeaterRow);
    });
    if (!listensOnlyToExternalFields) {
      return false;
    }
    const currentValue = this.readCurrentTargetValue(fieldElement);
    if (!this.isContextValueFilled(currentValue)) {
      return false;
    }
    const contextHash = this.serializeContext(this.collectContext(config, formNode));
    const contextKey = this.buildContextMemoryKey(config);
    return this.lastContextHashes.get(contextKey) === contextHash;
  }
  readCurrentTargetValue(fieldElement) {
    if (fieldElement.matches('select')) {
      if (fieldElement.multiple) {
        return Array.from(fieldElement.selectedOptions).map(option => option.value);
      }
      return fieldElement.value || '';
    }
    const nestedSelect = fieldElement.querySelector?.('select');
    if (nestedSelect) {
      if (nestedSelect.multiple) {
        return Array.from(nestedSelect.selectedOptions).map(option => option.value);
      }
      return nestedSelect.value || '';
    }
    const optionInputs = Array.from(fieldElement.querySelectorAll?.('input[type="checkbox"], input[type="radio"]') || []);
    if (!optionInputs.length) {
      return '';
    }
    const checked = optionInputs.filter(input => input.checked);
    if (!checked.length) {
      return '';
    }
    if (checked.every(input => input.type === 'checkbox')) {
      return checked.map(input => input.value);
    }
    return checked[0]?.value || '';
  }
  buildContextMemoryKey(config) {
    return [config.formId || 0, config.generatorId || '', config.fieldName || '', Array.isArray(config.listenTo) ? config.listenTo.join('|') : ''].join('::');
  }
  serializeContext(context) {
    const ordered = {};
    Object.keys(context || {}).sort().forEach(key => {
      ordered[key] = context[key];
    });
    return JSON.stringify(ordered);
  }
  preserveRepeaterValuesBeforeRemoval(removeButton) {
    const removedRow = removeButton.closest('.jet-form-builder-repeater__row');
    const repeater = removeButton.closest('[data-repeater="1"]');
    const itemsRoot = repeater?.querySelector('.jet-form-builder-repeater__items') || repeater;
    if (!removedRow || !repeater || !itemsRoot) {
      return;
    }
    const rows = Array.from(itemsRoot.querySelectorAll(':scope > .jet-form-builder-repeater__row'));
    const removedIndex = rows.indexOf(removedRow);
    const repeaterName = repeater.dataset.fieldName || 'repeater';
    if (removedIndex < 0) {
      return;
    }
    this.autoUpdateFields.forEach(fieldData => {
      const element = fieldData?.element;
      const config = fieldData?.config;
      const row = element?.closest('.jet-form-builder-repeater__row');
      if (!element || !config || !row || row === removedRow || !repeater.contains(row)) {
        return;
      }
      const rowIndex = rows.indexOf(row);
      if (rowIndex < 0) {
        return;
      }
      const preservedValue = this.readValueFromSourceElement(element);
      if (!this.isContextValueFilled(preservedValue)) {
        return;
      }
      const nextIndex = rowIndex > removedIndex ? rowIndex - 1 : rowIndex;
      const nextKey = `${repeaterName}[${nextIndex}].${config.fieldName}`;
      this.preservedRepeaterValues.set(nextKey, preservedValue);
    });
  }
  consumePreservedRepeaterValue(fieldKey) {
    if (!this.preservedRepeaterValues.has(fieldKey)) {
      return undefined;
    }
    const value = this.preservedRepeaterValues.get(fieldKey);
    this.preservedRepeaterValues.delete(fieldKey);
    return value;
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
      emptyContextAction: fieldElement.dataset.emptyContextAction || 'clear',
      updateOnButton: fieldElement.dataset.updateOnButton || null,
      updateOnButtonClass: fieldElement.dataset.updateOnButtonClass || '',
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
      let el = root.querySelector(`[data-field-name="${fieldName}"]`) || root.querySelector(`[name="${fieldName}"]`) || root.querySelector(`[name="${fieldName}[]"]`) || root.querySelector(`[name*="[${fieldName}]"]`);
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
    const forceDomWatch = sourceElement ? this.shouldUseDomWatch(sourceElement) : false;
    let sourceInput = null;
    if (sourceElement && !forceDomWatch && window.JetFormBuilderMain?.inputData) {
      const actualName = this.resolveActualName(sourceElement, sourceFieldName);
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
        sourceInput = this.createInputWrapperFromDOM(this.resolveActualName(el, sourceFieldName), formNode, el);
      }
    }
    if (!sourceInput) {
      return;
    }
    const watcherKey = this.buildWatcherKey(sourceFieldName, repeaterRow);
    let watcher = this.watchers.get(watcherKey);
    if (!watcher) {
      let unwatch;
      if (forceDomWatch) {
        let lastSerialized = null;
        const domHandler = event => {
          const eventTarget = event?.target;
          if (!eventTarget || eventTarget.nodeType !== Node.ELEMENT_NODE) {
            return;
          }
          const run = () => {
            const liveSourceElement = this.findElementInScope(sourceFieldName, repeaterRow, formNode);
            if (!liveSourceElement) {
              return;
            }
            if (!this.isEventFromSourceField(eventTarget, liveSourceElement)) {
              return;
            }
            const currentValue = this.readValueFromSourceElement(liveSourceElement);
            const serialized = JSON.stringify(currentValue);
            if (serialized === lastSerialized) {
              return;
            }
            lastSerialized = serialized;
            this.handleFieldChange(watcherKey, formNode);
          };

          // "click" can fire before checked state is updated on custom controls.
          if (event.type === 'click') {
            setTimeout(run, 0);
            return;
          }
          run();
        };
        formNode.addEventListener('change', domHandler, true);
        formNode.addEventListener('input', domHandler, true);
        formNode.addEventListener('click', domHandler, true);
        const isAutocompleteSource = this.isAutocompleteSourceElement(sourceElement);
        const isCalculatedSource = this.isCalculatedSourceElement(sourceElement);
        let $sourceElement = null;
        let select2Handler = null;
        let calculatedHandler = null;
        let calculatedNode = null;
        let calculatedObserver = null;
        let calculatedNativeHandler = null;
        if (window.jQuery && (isAutocompleteSource || isCalculatedSource)) {
          const liveSourceElement = this.findElementInScope(sourceFieldName, repeaterRow, formNode);
          const sourceNode = isAutocompleteSource ? liveSourceElement?.matches('select') ? liveSourceElement : liveSourceElement?.querySelector('select') : liveSourceElement?.matches('input.jet-form-builder__calculated-field-input') ? liveSourceElement : liveSourceElement?.querySelector('input.jet-form-builder__calculated-field-input');
          if (sourceNode) {
            $sourceElement = window.jQuery(sourceNode);
            if (isAutocompleteSource) {
              select2Handler = () => {
                const currentValue = this.readValueFromSourceElement(sourceNode);
                const serialized = JSON.stringify(currentValue);
                if (serialized === lastSerialized) {
                  return;
                }
                lastSerialized = serialized;
                this.handleFieldChange(watcherKey, formNode);
              };
              $sourceElement.on('select2:select select2:unselect', select2Handler);
            }
            if (isCalculatedSource) {
              calculatedNode = sourceNode;
              calculatedHandler = () => {
                const currentValue = this.readValueFromSourceElement(sourceNode);
                const serialized = JSON.stringify(currentValue);
                if (serialized === lastSerialized) {
                  return;
                }
                lastSerialized = serialized;
                this.handleFieldChange(watcherKey, formNode);
              };
              $sourceElement.on('change', calculatedHandler);
              calculatedNativeHandler = calculatedHandler;
              sourceNode.addEventListener('change', calculatedNativeHandler);
              sourceNode.addEventListener('input', calculatedNativeHandler);
              const calculatedWrapper = sourceNode.closest('.jet-form-builder__calculated-field');
              const calculatedValueNode = calculatedWrapper?.querySelector('.jet-form-builder__calculated-field-val');
              if (calculatedValueNode && window.MutationObserver) {
                calculatedObserver = new MutationObserver(() => {
                  calculatedHandler();
                });
                calculatedObserver.observe(calculatedValueNode, {
                  childList: true,
                  characterData: true,
                  subtree: true
                });
              }
            }
          }
        }
        unwatch = () => {
          formNode.removeEventListener('change', domHandler, true);
          formNode.removeEventListener('input', domHandler, true);
          formNode.removeEventListener('click', domHandler, true);
          if ($sourceElement && select2Handler) {
            $sourceElement.off('select2:select select2:unselect', select2Handler);
          }
          if ($sourceElement && calculatedHandler) {
            $sourceElement.off('change', calculatedHandler);
          }
          if (calculatedNode && calculatedNativeHandler) {
            calculatedNode.removeEventListener('change', calculatedNativeHandler);
            calculatedNode.removeEventListener('input', calculatedNativeHandler);
          }
          if (calculatedObserver) {
            calculatedObserver.disconnect();
          }
        };
      } else {
        unwatch = sourceInput.value.watch(() => {
          this.handleFieldChange(watcherKey, formNode);
        });
      }
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
    const targetField = this.autoUpdateFields.get(targetFieldKey);
    const buttonClass = targetField?.config?.updateOnButtonClass || '';
    const listenerKey = `${actionType}::${buttonClass}::${targetFieldKey}`;
    if (this.buttonListeners.has(listenerKey)) {
      return;
    }
    const targetElement = targetField?.element || null;
    const targetPage = targetElement?.closest('.jet-form-builder-page') || null;
    const targetScopeSelectors = [];
    if (targetPage) {
      const pageNumber = parseInt(targetPage.dataset.page) || 0;
      if ('next' === actionType && pageNumber > 1) {
        targetScopeSelectors.push(`.jet-form-builder-page[data-page="${pageNumber - 1}"] .jet-form-builder__action-button-wrapper[data-type="${actionType}"]`);
      } else if ('prev' === actionType && pageNumber > 0) {
        targetScopeSelectors.push(`.jet-form-builder-page[data-page="${pageNumber + 1}"] .jet-form-builder__action-button-wrapper[data-type="${actionType}"]`);
      }
      targetScopeSelectors.push(`.jet-form-builder-page[data-page="${targetPage.dataset.page}"] .jet-form-builder__action-button-wrapper[data-type="${actionType}"]`);
    }
    targetScopeSelectors.push(`.jet-form-builder__action-button-wrapper[data-type="${actionType}"]`);
    const wrapper = this.findActionButtonWrapper(targetScopeSelectors, buttonClass, formNode);
    const buttonElement = wrapper ? wrapper.querySelector('button') : null;
    if (!buttonElement) {
      return;
    }
    let isProcessing = false;
    const handler = async event => {
      // Ignore programmatic re-clicks triggered after pre-update.
      if (!event.isTrusted) {
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
      } finally {
        isProcessing = false;
        buttonElement.click();
      }
    };
    buttonElement.addEventListener('click', handler);
    this.buttonListeners.set(listenerKey, {
      element: buttonElement,
      handler
    });
  }
  normalizeButtonClassNames(buttonClass) {
    return (buttonClass || '').split(/\s+/).map(token => token.trim().replace(/^\./, '')).filter(Boolean);
  }
  findActionButtonWrapper(selectors, buttonClass, formNode) {
    const classNames = this.normalizeButtonClassNames(buttonClass);
    if (classNames.length) {
      for (const selector of selectors) {
        const wrappers = Array.from(formNode.querySelectorAll(selector));
        const exactWrapper = wrappers.find(currentWrapper => {
          const button = currentWrapper.querySelector('button');
          if (!button) {
            return false;
          }
          return classNames.every(className => button.classList.contains(className));
        });
        if (exactWrapper) {
          return exactWrapper;
        }
      }
    }
    for (const selector of selectors) {
      const wrapper = formNode.querySelector(selector);
      if (wrapper) {
        return wrapper;
      }
    }
    return null;
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
          return this.isContextValueFilled(val);
        });
        if (!allFilled) {
          if (this.shouldClearOnEmptyContext(config)) {
            this.abortPreviousRequest(targetFieldName);
            // Keep cache entries so re-entering the same context can reuse TTL cache.
            this.optionsUpdater.updateOptions(fieldData.element, [], formNode);
          } else {
            this.debouncedUpdate(targetFieldName, formNode);
          }
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
    const contextKey = this.buildContextMemoryKey(config);
    const contextHash = this.serializeContext(context);
    this.lastContextHashes.set(contextKey, contextHash);
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
          const actualName = this.resolveActualName(sourceElement, sourceFieldName);
          let input = null;
          if (window.JetFormBuilderMain?.inputData) {
            input = window.JetFormBuilderMain.inputData.findInput?.(actualName, formNode) || window.JetFormBuilderMain.inputData.findInput?.(sourceFieldName, formNode) || window.JetFormBuilderMain.inputData.getInput?.(actualName, formNode) || window.JetFormBuilderMain.inputData.getInput?.(sourceFieldName, formNode);
            if (!input && window.JetFormBuilderMain.inputData.getAll) {
              const allInputs = window.JetFormBuilderMain.inputData.getAll(formNode) || [];
              input = allInputs.find(inp => inp.name === actualName) || allInputs.find(inp => inp.name === sourceFieldName);
            }
          }
          const forceDomRead = this.shouldUseDomWatch(sourceElement);
          context[sourceFieldName] = !forceDomRead && input ? input.value.current : this.readValueFromSourceElement(sourceElement);
        }
      });
    }
    return context;
  }

  /**
   * Resolve field name to use with JetFormBuilder inputData lookup.
   *
   * Wrapper elements (checkbox/radio groups) don't have "name" attribute,
   * so we read it from the first nested input.
   *
   * @param {HTMLElement} sourceElement    Source field element or wrapper.
   * @param {string}      sourceFieldName  Fallback field name.
   *
   * @return {string}
   */
  resolveActualName(sourceElement, sourceFieldName) {
    return sourceElement.getAttribute('name') || sourceElement.querySelector('[name]')?.getAttribute('name') || sourceFieldName;
  }

  /**
   * Read current value directly from a source element.
   * Supports checkbox/radio groups rendered as wrappers.
   *
   * @param {HTMLElement} sourceElement Source field element.
   *
   * @return {string|Array}
   */
  readValueFromSourceElement(sourceElement) {
    const sourceName = sourceElement.getAttribute('name') || sourceElement.querySelector('[name]')?.getAttribute('name') || null;
    const root = sourceElement.closest('.jet-form-builder-repeater__row') || sourceElement.closest('form') || document;
    if (sourceName) {
      const allNamedCheckboxes = Array.from(root.querySelectorAll(`input[type="checkbox"][name="${CSS.escape(sourceName)}"]`));
      if (allNamedCheckboxes.length) {
        return allNamedCheckboxes.filter(node => node.checked).map(node => node.value);
      }
      const allNamedRadios = Array.from(root.querySelectorAll(`input[type="radio"][name="${CSS.escape(sourceName)}"]`));
      if (allNamedRadios.length) {
        const active = allNamedRadios.find(node => node.checked);
        return active ? active.value : '';
      }
    }
    const checkboxNodes = sourceElement.matches('input[type="checkbox"]') ? [sourceElement] : Array.from(sourceElement.querySelectorAll('input[type="checkbox"]'));
    if (checkboxNodes.length) {
      return checkboxNodes.filter(node => node.checked).map(node => node.value);
    }
    const radioNodes = sourceElement.matches('input[type="radio"]') ? [sourceElement] : Array.from(sourceElement.querySelectorAll('input[type="radio"]'));
    if (radioNodes.length) {
      const active = radioNodes.find(node => node.checked);
      return active ? active.value : '';
    }
    const selectMultiple = sourceElement.matches('select[multiple]') ? sourceElement : sourceElement.querySelector('select[multiple]');
    if (selectMultiple) {
      return Array.from(selectMultiple.selectedOptions).map(option => option.value);
    }
    return sourceElement.value || '';
  }

  /**
   * Detects field wrappers/elements that should be read/watched via DOM only.
   *
   * @param {HTMLElement} sourceElement Source field element.
   *
   * @return {boolean}
   */
  isMultiChoiceSourceElement(sourceElement) {
    if (!sourceElement) {
      return false;
    }
    if (sourceElement.matches('input[type="checkbox"], input[type="radio"], select[multiple]')) {
      return true;
    }
    return Boolean(sourceElement.querySelector('input[type="checkbox"], input[type="radio"], select[multiple]'));
  }

  /**
   * Detects autocomplete select fields that should also be watched via DOM.
   *
   * @param {HTMLElement} sourceElement Source field element.
   *
   * @return {boolean}
   */
  isAutocompleteSourceElement(sourceElement) {
    if (!sourceElement) {
      return false;
    }
    return sourceElement.matches('select.jet-select-autocomplete') || Boolean(sourceElement.querySelector('select.jet-select-autocomplete'));
  }

  /**
   * Detects calculated fields that trigger jQuery change instead of reactive watchers.
   *
   * @param {HTMLElement} sourceElement Source field element.
   *
   * @return {boolean}
   */
  isCalculatedSourceElement(sourceElement) {
    if (!sourceElement) {
      return false;
    }
    return sourceElement.matches('input.jet-form-builder__calculated-field-input') || Boolean(sourceElement.querySelector('input.jet-form-builder__calculated-field-input')) || Boolean(sourceElement.closest('.jet-form-builder__calculated-field'));
  }

  /**
   * Determine if the source field should be watched/read via DOM.
   *
   * @param {HTMLElement} sourceElement Source field element.
   *
   * @return {boolean}
   */
  shouldUseDomWatch(sourceElement) {
    return this.isMultiChoiceSourceElement(sourceElement) || this.isAutocompleteSourceElement(sourceElement) || this.isCalculatedSourceElement(sourceElement);
  }

  /**
   * Check if event target belongs to the watched source field/group.
   *
   * @param {Element}     eventTarget       Event target.
   * @param {HTMLElement} liveSourceElement Source field element.
   *
   * @return {boolean}
   */
  isEventFromSourceField(eventTarget, liveSourceElement) {
    if (liveSourceElement.contains(eventTarget) || liveSourceElement === eventTarget) {
      return true;
    }
    const eventName = this.resolveEventTargetName(eventTarget, liveSourceElement.closest('form') || document);
    const sourceName = liveSourceElement.getAttribute('name') || liveSourceElement.querySelector('[name]')?.getAttribute('name') || null;
    return Boolean(eventName && sourceName && eventName === sourceName);
  }

  /**
   * Resolve source field name from any event target (input, wrapper, label).
   *
   * @param {Element}      eventTarget Event target.
   * @param {HTMLElement|Document} root Root node for label[for] lookup.
   *
   * @return {string|null}
   */
  resolveEventTargetName(eventTarget, root) {
    if (!eventTarget) {
      return null;
    }
    if (eventTarget.getAttribute && eventTarget.getAttribute('name')) {
      return eventTarget.getAttribute('name');
    }
    const control = eventTarget.closest?.('input, select, textarea');
    if (control?.getAttribute('name')) {
      return control.getAttribute('name');
    }
    const label = eventTarget.closest?.('label');
    if (!label) {
      return null;
    }
    const nestedControl = label.querySelector('input, select, textarea');
    if (nestedControl?.getAttribute('name')) {
      return nestedControl.getAttribute('name');
    }
    const forId = label.getAttribute('for');
    if (!forId) {
      return null;
    }
    const linkedControl = root.querySelector(`#${CSS.escape(forId)}`);
    return linkedControl?.getAttribute('name') || null;
  }

  /**
   * Check whether a context value should be treated as "filled".
   *
   * @param {*} value Context value.
   *
   * @return {boolean}
   */
  isContextValueFilled(value) {
    if (Array.isArray(value)) {
      return value.some(item => item !== undefined && item !== null && item !== '');
    }
    return value !== undefined && value !== null && value !== '';
  }

  /**
   * Whether the dependent field should be cleared immediately when a required
   * trigger field is empty.
   *
   * Multi-field mode keeps strict "Wait for All Fields" semantics. Generator
   * fallback policy is applied only to single trigger-field scenarios.
   *
   * @param {Object} config Field configuration.
   *
   * @return {boolean}
   */
  shouldClearOnEmptyContext(config) {
    if (Array.isArray(config?.listenTo) && config.listenTo.length > 1) {
      return true;
    }
    return (config?.emptyContextAction || 'clear') === 'clear';
  }

  /**
   * Resolve REST endpoint URL for generator updates.
   *
   * Priority:
   * 1) Localized module config (supports custom prefix/subdirectory)
   * 2) wpApiSettings.root (if available)
   * 3) Legacy fallback
   *
   * @return {string}
   */
  getUpdateEndpoint() {
    const localized = window.JFBOptionFieldAutoUpdate?.endpoint;
    if (localized) {
      return localized;
    }
    const apiRoot = window.wpApiSettings?.root;
    if (apiRoot) {
      return `${apiRoot.replace(/\/+$/, '')}/jet-form-builder/v1/generator-update`;
    }
    return '/wp-json/jet-form-builder/v1/generator-update';
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
    const previewNonce = new URLSearchParams(window.location.search).get('jfb_preview_nonce') || '';
    const headers = {
      'Content-Type': 'application/json'
    };
    if (window.wpApiSettings?.nonce) {
      headers['X-WP-Nonce'] = window.wpApiSettings.nonce;
    }
    const response = await fetch(this.getUpdateEndpoint(), {
      method: 'POST',
      headers,
      body: JSON.stringify({
        form_id: config.formId,
        field_name: config.fieldName,
        generator_id: config.generatorId,
        context,
        preview_nonce: previewNonce
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

/***/ },

/***/ "./frontend/auto-update/OptionsUpdater.js"
/*!************************************************!*\
  !*** ./frontend/auto-update/OptionsUpdater.js ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
        this.updateSelectOptions(fieldElement, options, formNode);
        break;
      case 'checkbox':
      case 'radio':
        this.updateChoiceOptions(fieldElement, options, fieldType, formNode);
        break;
      default:
        break;
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
  updateSelectOptions(selectElement, options, formNode = null) {
    const isAutocompleteSelect = selectElement.classList.contains('jet-select-autocomplete');
    const isAjaxAutocomplete = isAutocompleteSelect && selectElement.hasAttribute('data-ajax--url');
    const $select = isAutocompleteSelect ? jQuery(selectElement) : null;
    const hasSelect2 = Boolean($select?.data('select2'));
    if (isAjaxAutocomplete) {
      if (hasSelect2) {
        $select.val(null).trigger('change');
        return;
      }
    }
    const isMultiple = selectElement.multiple;
    let currentValues = isMultiple ? Array.from(selectElement.selectedOptions).map(opt => opt.value) : [selectElement.value];
    if (!currentValues.some(Boolean)) {
      const storedValue = this.getStoredFieldValue(selectElement, 'select', formNode);
      currentValues = this.normalizeValues(storedValue);
    }
    const hadSelection = currentValues.some(Boolean);
    const nextValues = [];
    let fallbackValue = '';
    const firstOption = selectElement.options[0];
    const hasPlaceholderOption = Boolean(firstOption && firstOption.value === '' && (firstOption.disabled || firstOption.textContent.trim() !== ''));
    const placeholderOption = hasPlaceholderOption ? firstOption.cloneNode(true) : null;
    selectElement.innerHTML = '';
    if (placeholderOption) {
      selectElement.appendChild(placeholderOption);
    }
    options.forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.value = option.value || option.val || '';
      optionElement.textContent = option.label || option.value || '';
      if (!fallbackValue && optionElement.value !== '') {
        fallbackValue = optionElement.value;
      }
      if (currentValues.includes(optionElement.value)) {
        optionElement.selected = true;
        nextValues.push(optionElement.value);
      }
      if (option.calculate) {
        optionElement.dataset.calculate = option.calculate;
      }
      selectElement.appendChild(optionElement);
    });
    const hasMatchingSelection = nextValues.length > 0;
    if (isMultiple) {
      Array.from(selectElement.options).forEach(option => {
        option.selected = nextValues.includes(option.value);
      });
    } else if (hasMatchingSelection) {
      selectElement.value = nextValues[0];
    } else if (!placeholderOption && selectElement.options.length) {
      selectElement.selectedIndex = 0;
      if (selectElement.options[0]) {
        selectElement.options[0].selected = true;
      }
      if (fallbackValue) {
        selectElement.value = fallbackValue;
      }
    } else if (placeholderOption) {
      selectElement.value = '';
    } else {
      selectElement.selectedIndex = -1;
    }
    if (isAutocompleteSelect && hasSelect2) {
      $select.select2('destroy');
      const select2Options = wp.hooks.applyFilters('jet.fb.select_autocomplete.options', {
        dropdownParent: $select.parent(),
        width: '100%'
      }, $select);
      $select.select2(select2Options);
      if (isMultiple) {
        $select.val(nextValues).trigger('change');
      } else if (hasMatchingSelection) {
        $select.val(nextValues[0]).trigger('change');
      } else if (!placeholderOption && selectElement.options.length) {
        const nextValue = fallbackValue || selectElement.options[0].value;
        Array.from(selectElement.options).forEach(option => {
          option.selected = option.value === nextValue;
        });
        selectElement.value = nextValue;
        $select.val(nextValue).trigger('change');
      } else {
        $select.val(null).trigger('change');
      }
    }
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
      return;
    }
    let currentValues = Array.from(containerElement.querySelectorAll(`input[type="${fieldType}"]:checked`)).map(input => input.value);
    if (!currentValues.length) {
      const storedValue = this.getStoredFieldValue(containerElement, fieldType, formNode);
      currentValues = this.normalizeValues(storedValue);
    }

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
  normalizeValues(value) {
    if (Array.isArray(value)) {
      return value.filter(item => item !== undefined && item !== null && item !== '').map(String);
    }
    if (value === undefined || value === null || value === '') {
      return [];
    }
    return [String(value)];
  }
  getPreservedFieldValue(fieldElement) {
    const raw = fieldElement?.dataset?.jfbAuPreservedValue;
    if (!raw) {
      return null;
    }
    delete fieldElement.dataset.jfbAuPreservedValue;
    try {
      return JSON.parse(raw);
    } catch (e) {
      return raw;
    }
  }
  getStoredFieldValue(fieldElement, fieldType, formNode) {
    var _input$value$current;
    const preservedValue = this.getPreservedFieldValue(fieldElement);
    if (preservedValue !== null) {
      return preservedValue;
    }
    if (!formNode || !window.JetFormBuilderMain?.inputData) {
      return null;
    }
    const fieldName = fieldElement.getAttribute('data-field-name') || '';
    const actualName = this.resolveActualInputName(fieldElement, fieldType) || fieldName;
    let input = window.JetFormBuilderMain.inputData.findInput?.(actualName, formNode) || window.JetFormBuilderMain.inputData.getInput?.(actualName, formNode);
    if (!input && fieldName) {
      input = window.JetFormBuilderMain.inputData.findInput?.(fieldName, formNode) || window.JetFormBuilderMain.inputData.getInput?.(fieldName, formNode);
    }
    if (!input && window.JetFormBuilderMain.inputData.getAll) {
      const allInputs = window.JetFormBuilderMain.inputData.getAll(formNode) || [];
      input = allInputs.find(current => current.name === actualName) || allInputs.find(current => current.name === fieldName) || allInputs.find(current => fieldName && (current.name?.endsWith(`[${fieldName}]`) || current.name?.endsWith(`[${fieldName}][]`)));
    }
    return (_input$value$current = input?.value?.current) !== null && _input$value$current !== void 0 ? _input$value$current : null;
  }
  resolveActualInputName(fieldElement, fieldType) {
    if (fieldType === 'select') {
      return fieldElement.getAttribute('name') || fieldElement.dataset.fieldName || '';
    }
    const firstInput = fieldElement.querySelector(`input[type="${fieldType}"]`);
    return firstInput?.getAttribute('name') || fieldElement.dataset.fieldName || '';
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

    // Root Observable.observeInput() intentionally skips fields inside repeater
    // rows, because they belong to row-scoped observables. Calling it here would
    // return undefined and crash on input.makeReactive(). For repeater targets,
    // fall back to DOM update + synthetic change event below.
    if (fieldElement.closest('.jet-form-builder-repeater__row')) {
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

/***/ },

/***/ "./frontend/auto-update/autocomplete-bridge.js"
/*!*****************************************************!*\
  !*** ./frontend/auto-update/autocomplete-bridge.js ***!
  \*****************************************************/
() {

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
    const el = formNode.querySelector(`[data-field-name="${fieldName}"]`) || formNode.querySelector(`[name="${fieldName}"]`) || formNode.querySelector(`[name="${fieldName}[]"]`) || formNode.querySelector(`[name*="[${fieldName}]"]`);
    if (!el) {
      return;
    }
    const actualName = el.getAttribute('name') || el.querySelector('[name]')?.getAttribute('name') || fieldName;
    let input = null;
    if (window.JetFormBuilderMain?.inputData) {
      input = window.JetFormBuilderMain.inputData.findInput?.(actualName, formNode) || window.JetFormBuilderMain.inputData.findInput?.(fieldName, formNode) || window.JetFormBuilderMain.inputData.getInput?.(actualName, formNode) || window.JetFormBuilderMain.inputData.getInput?.(fieldName, formNode);
      if (!input && window.JetFormBuilderMain.inputData.getAll) {
        const allInputs = window.JetFormBuilderMain.inputData.getAll(formNode) || [];
        input = allInputs.find(current => current.name === actualName) || allInputs.find(current => current.name === fieldName);
      }
    }
    if (input) {
      context[fieldName] = input.value.current;
      return;
    }
    const selectMultiple = el.matches('select[multiple]') ? el : el.querySelector('select[multiple]');
    if (selectMultiple) {
      context[fieldName] = Array.from(selectMultiple.selectedOptions).map(option => option.value);
      return;
    }
    context[fieldName] = el.value || '';
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

/***/ },

/***/ "./frontend/auto-update/styles.pcss"
/*!******************************************!*\
  !*** ./frontend/auto-update/styles.pcss ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

  // Multi-step forms can fire after-init more than once for the same form.
  // Avoid stacking multiple observers on one form instance.
  if (formNode.hasAttribute('data-jfb-au-observed')) {
    return;
  }
  formNode.setAttribute('data-jfb-au-observed', '1');
  formNode.addEventListener('click', event => {
    const removeButton = event.target?.closest?.('.jet-form-builder-repeater__remove');
    if (!removeButton) {
      return;
    }
    getWatcher().preserveRepeaterValuesBeforeRemoval(removeButton, formNode);
  }, true);
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
            getWatcher().initField(fieldElement, formNode, {
              isDynamicInit: true
            });
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
function hookIntoJetFormBuilder(attemptsLeft = 100) {
  // Wait for JetFormBuilderMain to be available
  if (typeof window.JetFormBuilderMain === 'undefined') {
    if (attemptsLeft <= 0) {
      console.warn('[JFB Auto-Update] JetFormBuilderMain is not available. Auto-update was not initialized.');
      return;
    }
    if (attemptsLeft % 20 === 0) {
      console.warn('[JFB Auto-Update] JetFormBuilderMain not available, retrying...');
    }

    // Retry after a short delay
    setTimeout(() => hookIntoJetFormBuilder(attemptsLeft - 1), 100);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0by11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUVBO0FBR0E7QUFFQTtBQUlBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBSUE7QUFDQTtBQUlBO0FBQ0E7QUFHQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUdBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBS0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUMxNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQVFBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFRQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7OztBQ25pQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDOUpBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZnJvbnRlbmQvYXV0by11cGRhdGUvQ2FjaGVNYW5hZ2VyLmpzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi9mcm9udGVuZC9hdXRvLXVwZGF0ZS9GaWVsZFdhdGNoZXIuanMiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2Zyb250ZW5kL2F1dG8tdXBkYXRlL09wdGlvbnNVcGRhdGVyLmpzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi9mcm9udGVuZC9hdXRvLXVwZGF0ZS9hdXRvY29tcGxldGUtYnJpZGdlLmpzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi9mcm9udGVuZC9hdXRvLXVwZGF0ZS9zdHlsZXMucGNzcz8zNDY0Iiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi9mcm9udGVuZC9hdXRvLXVwZGF0ZS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENhY2hlIE1hbmFnZXIgZm9yIEF1dG8tVXBkYXRlIEZlYXR1cmUuXG4gKlxuICogTWFuYWdlcyBpbi1tZW1vcnkgY2FjaGluZyBvZiBnZW5lcmF0ZWQgb3B0aW9ucyB3aXRoIGNvbmZpZ3VyYWJsZSB0aW1lb3V0LlxuICogSW1wbGVtZW50cyBNYXAtYmFzZWQgc3RvcmFnZSB3aXRoIHRpbWVzdGFtcCB0cmFja2luZyBmb3IgVFRMIChUaW1lIFRvIExpdmUpLlxuICpcbiAqIEBwYWNrYWdlIEpldEZvcm1CdWlsZGVyXG4gKi9cblxuY2xhc3MgQ2FjaGVNYW5hZ2VyIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0LyoqIEB0eXBlIHtNYXA8c3RyaW5nLCB7b3B0aW9uczogQXJyYXksIHRpbWVzdGFtcDogbnVtYmVyfT59ICovXG5cdFx0dGhpcy5jYWNoZSA9IG5ldyBNYXAoKTtcblxuXHRcdC8qKiBAdHlwZSB7bnVtYmVyfSBkZWZhdWx0IFRUTCBpbiBzZWNvbmRzOyAwID0gZGlzYWJsZWQgKi9cblx0XHR0aGlzLmRlZmF1bHRUaW1lb3V0ID0gNjA7XG5cdH1cblxuXHQvKipcblx0ICogR2VuZXJhdGUgY2FjaGUga2V5IGZyb20gZ2VuZXJhdG9yIElELCBmaWVsZCBuYW1lLCBhbmQgY29udGV4dC5cblx0ICpcblx0ICogRmllbGQgbmFtZSBpcyBpbmNsdWRlZCBzbyB0aGF0IHR3byBkaWZmZXJlbnQgZmllbGRzIHVzaW5nIHRoZSBzYW1lXG5cdCAqIGdlbmVyYXRvciBhbmQgdGhlIHNhbWUgY29udGV4dCBkb24ndCBzaGFyZSBjYWNoZWQgcmVzcG9uc2VzXG5cdCAqICh0aGV5IG1heSBoYXZlIGRpZmZlcmVudCBibG9ja19hdHRycywgZS5nLiBjdXN0b21faXRlbV90ZW1wbGF0ZSkuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBnZW5lcmF0b3JJZCBHZW5lcmF0b3IgaWRlbnRpZmllci5cblx0ICogQHBhcmFtIHtPYmplY3R9IGNvbnRleHQgICAgIENvbnRleHQgb2JqZWN0IHdpdGggZmllbGQgdmFsdWVzLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZmllbGROYW1lICAgVGFyZ2V0IGZpZWxkIG5hbWUuXG5cdCAqXG5cdCAqIEByZXR1cm4ge3N0cmluZ30gQ2FjaGUga2V5LlxuXHQgKi9cblx0Z2VuZXJhdGVLZXkoIGdlbmVyYXRvcklkLCBjb250ZXh0LCBmaWVsZE5hbWUgPSAnJyApIHtcblx0XHRjb25zdCBzb3J0ZWRDb250ZXh0ID0gT2JqZWN0LmtleXMoIGNvbnRleHQgKS5zb3J0KCkucmVkdWNlKCAoIGFjYywga2V5ICkgPT4ge1xuXHRcdFx0YWNjWyBrZXkgXSA9IGNvbnRleHRbIGtleSBdO1xuXHRcdFx0cmV0dXJuIGFjYztcblx0XHR9LCB7fSApO1xuXG5cdFx0cmV0dXJuIGAkeyBnZW5lcmF0b3JJZCB9OiR7IGZpZWxkTmFtZSB9OiR7IEpTT04uc3RyaW5naWZ5KCBzb3J0ZWRDb250ZXh0ICkgfWA7XG5cdH1cblxuXHQvKipcblx0ICogQ2hlY2sgaWYgY2FjaGVkIGRhdGEgZXhpc3RzIGFuZCBpcyBzdGlsbCB2YWxpZC5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGdlbmVyYXRvcklkICBHZW5lcmF0b3IgaWRlbnRpZmllci5cblx0ICogQHBhcmFtIHtPYmplY3R9IGNvbnRleHQgICAgICBDb250ZXh0IG9iamVjdCB3aXRoIGZpZWxkIHZhbHVlcy5cblx0ICogQHBhcmFtIHtudW1iZXJ9IGNhY2hlVGltZW91dCBDYWNoZSB0aW1lb3V0IGluIHNlY29uZHMgKDA9ZGlzYWJsZWQsIE49c2Vjb25kcykuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZE5hbWUgICAgVGFyZ2V0IGZpZWxkIG5hbWUuXG5cdCAqXG5cdCAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdmFsaWQgY2FjaGUgZXhpc3RzLlxuXHQgKi9cblx0aGFzKCBnZW5lcmF0b3JJZCwgY29udGV4dCwgY2FjaGVUaW1lb3V0ID0gdGhpcy5kZWZhdWx0VGltZW91dCwgZmllbGROYW1lID0gJycgKSB7XG5cdFx0Ly8gQ2FjaGUgZGlzYWJsZWRcblx0XHRpZiAoIGNhY2hlVGltZW91dCA9PT0gMCApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBrZXkgICAgPSB0aGlzLmdlbmVyYXRlS2V5KCBnZW5lcmF0b3JJZCwgY29udGV4dCwgZmllbGROYW1lICk7XG5cdFx0Y29uc3QgY2FjaGVkID0gdGhpcy5jYWNoZS5nZXQoIGtleSApO1xuXG5cdFx0aWYgKCAhIGNhY2hlZCApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBhZ2UgPSAoIERhdGUubm93KCkgLSBjYWNoZWQudGltZXN0YW1wICkgLyAxMDAwO1xuXG5cdFx0aWYgKCBhZ2UgPiBjYWNoZVRpbWVvdXQgKSB7XG5cdFx0XHR0aGlzLmNhY2hlLmRlbGV0ZSgga2V5ICk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGNhY2hlZCBvcHRpb25zLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZ2VuZXJhdG9ySWQgIEdlbmVyYXRvciBpZGVudGlmaWVyLlxuXHQgKiBAcGFyYW0ge09iamVjdH0gY29udGV4dCAgICAgIENvbnRleHQgb2JqZWN0IHdpdGggZmllbGQgdmFsdWVzLlxuXHQgKiBAcGFyYW0ge251bWJlcn0gY2FjaGVUaW1lb3V0IENhY2hlIHRpbWVvdXQgaW4gc2Vjb25kcy5cblx0ICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkTmFtZSAgICBUYXJnZXQgZmllbGQgbmFtZS5cblx0ICpcblx0ICogQHJldHVybiB7QXJyYXl8bnVsbH0gQ2FjaGVkIG9wdGlvbnMgb3IgbnVsbCBpZiBub3QgZm91bmQvZXhwaXJlZC5cblx0ICovXG5cdGdldCggZ2VuZXJhdG9ySWQsIGNvbnRleHQsIGNhY2hlVGltZW91dCA9IHRoaXMuZGVmYXVsdFRpbWVvdXQsIGZpZWxkTmFtZSA9ICcnICkge1xuXHRcdGlmICggISB0aGlzLmhhcyggZ2VuZXJhdG9ySWQsIGNvbnRleHQsIGNhY2hlVGltZW91dCwgZmllbGROYW1lICkgKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRjb25zdCBrZXkgPSB0aGlzLmdlbmVyYXRlS2V5KCBnZW5lcmF0b3JJZCwgY29udGV4dCwgZmllbGROYW1lICk7XG5cdFx0Y29uc3QgY2FjaGVkID0gdGhpcy5jYWNoZS5nZXQoIGtleSApO1xuXG5cdFx0cmV0dXJuIGNhY2hlZCA/IGNhY2hlZC5vcHRpb25zIDogbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBTdG9yZSBvcHRpb25zIGluIGNhY2hlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZ2VuZXJhdG9ySWQgR2VuZXJhdG9yIGlkZW50aWZpZXIuXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0ICAgICBDb250ZXh0IG9iamVjdCB3aXRoIGZpZWxkIHZhbHVlcy5cblx0ICogQHBhcmFtIHtBcnJheX0gIG9wdGlvbnMgICAgIEdlbmVyYXRlZCBvcHRpb25zIHRvIGNhY2hlLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZmllbGROYW1lICAgVGFyZ2V0IGZpZWxkIG5hbWUuXG5cdCAqL1xuXHRzZXQoIGdlbmVyYXRvcklkLCBjb250ZXh0LCBvcHRpb25zLCBmaWVsZE5hbWUgPSAnJyApIHtcblx0XHRjb25zdCBrZXkgPSB0aGlzLmdlbmVyYXRlS2V5KCBnZW5lcmF0b3JJZCwgY29udGV4dCwgZmllbGROYW1lICk7XG5cblx0XHR0aGlzLmNhY2hlLnNldCgga2V5LCB7XG5cdFx0XHRvcHRpb25zLFxuXHRcdFx0dGltZXN0YW1wOiBEYXRlLm5vdygpLFxuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDbGVhciBjYWNoZSBmb3Igc3BlY2lmaWMgZ2VuZXJhdG9yIGFuZCBjb250ZXh0LlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZ2VuZXJhdG9ySWQgR2VuZXJhdG9yIGlkZW50aWZpZXIuXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0ICAgICBDb250ZXh0IG9iamVjdCB3aXRoIGZpZWxkIHZhbHVlcy5cblx0ICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkTmFtZSAgIFRhcmdldCBmaWVsZCBuYW1lLlxuXHQgKi9cblx0Y2xlYXIoIGdlbmVyYXRvcklkLCBjb250ZXh0LCBmaWVsZE5hbWUgPSAnJyApIHtcblx0XHRjb25zdCBrZXkgPSB0aGlzLmdlbmVyYXRlS2V5KCBnZW5lcmF0b3JJZCwgY29udGV4dCwgZmllbGROYW1lICk7XG5cdFx0dGhpcy5jYWNoZS5kZWxldGUoIGtleSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIENsZWFyIGFsbCBjYWNoZSBlbnRyaWVzIGZvciBhIHNwZWNpZmljIGZpZWxkIG5hbWUuXG5cdCAqIFVzZWQgd2hlbiB0aGUgZmllbGQgc2hvdWxkIHNob3cgbm8gb3B0aW9ucyAoZS5nLiByZXF1aXJlQWxsRmlsbGVkIG5vdCBtZXQpLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZmllbGROYW1lIFRhcmdldCBmaWVsZCBuYW1lLlxuXHQgKi9cblx0Y2xlYXJCeUZpZWxkKCBmaWVsZE5hbWUgKSB7XG5cdFx0Y29uc3QgcHJlZml4ID0gYDokeyBmaWVsZE5hbWUgfTpgO1xuXHRcdHRoaXMuY2FjaGUuZm9yRWFjaCggKCBfdmFsdWUsIGtleSApID0+IHtcblx0XHRcdGlmICgga2V5LmluY2x1ZGVzKCBwcmVmaXggKSApIHtcblx0XHRcdFx0dGhpcy5jYWNoZS5kZWxldGUoIGtleSApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDbGVhciBhbGwgY2FjaGUgZW50cmllcy5cblx0ICovXG5cdGNsZWFyQWxsKCkge1xuXHRcdHRoaXMuY2FjaGUuY2xlYXIoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgY2FjaGUgc3RhdGlzdGljcy5cblx0ICpcblx0ICogQHJldHVybiB7T2JqZWN0fSBTdGF0aXN0aWNzIG9iamVjdCB3aXRoIHNpemUgYW5kIGtleXMuXG5cdCAqL1xuXHRnZXRTdGF0cygpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2l6ZTogdGhpcy5jYWNoZS5zaXplLFxuXHRcdFx0a2V5czogQXJyYXkuZnJvbSggdGhpcy5jYWNoZS5rZXlzKCkgKSxcblx0XHR9O1xuXHR9XG5cblx0LyoqXG5cdCAqIENsZWFuIGV4cGlyZWQgY2FjaGUgZW50cmllcy5cblx0ICogVXNlZnVsIGZvciBwZXJpb2RpYyBjbGVhbnVwIG9mIHN0YWxlIGRhdGEuXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBtYXhBZ2UgTWF4aW11bSBhZ2UgaW4gc2Vjb25kcyAoZGVmYXVsdDogMzYwMCA9IDEgaG91cikuXG5cdCAqL1xuXHRjbGVhbkV4cGlyZWQoIG1heEFnZSA9IDM2MDAgKSB7XG5cdFx0Y29uc3Qgbm93ICAgICAgICAgID0gRGF0ZS5ub3coKTtcblx0XHRjb25zdCBrZXlzVG9EZWxldGUgPSBbXTtcblxuXHRcdHRoaXMuY2FjaGUuZm9yRWFjaCggKCB2YWx1ZSwga2V5ICkgPT4ge1xuXHRcdFx0aWYgKCAoIG5vdyAtIHZhbHVlLnRpbWVzdGFtcCApIC8gMTAwMCA+IG1heEFnZSApIHtcblx0XHRcdFx0a2V5c1RvRGVsZXRlLnB1c2goIGtleSApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHRcdGtleXNUb0RlbGV0ZS5mb3JFYWNoKCAoIGtleSApID0+IHRoaXMuY2FjaGUuZGVsZXRlKCBrZXkgKSApO1xuXG5cdFx0cmV0dXJuIGtleXNUb0RlbGV0ZS5sZW5ndGg7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FjaGVNYW5hZ2VyO1xuIiwiLyoqXG4gKiBGaWVsZCBXYXRjaGVyIGZvciBBdXRvLVVwZGF0ZSBGZWF0dXJlLlxuICpcbiAqIFdhdGNoZXMgZm9ybSBmaWVsZCBjaGFuZ2VzIGFuZCB0cmlnZ2VycyBvcHRpb24gdXBkYXRlcyBmb3IgZGVwZW5kZW50IGZpZWxkcy5cbiAqIFVzZXMgSmV0Rm9ybUJ1aWxkZXIncyByZWFjdGl2ZSBpbnB1dC52YWx1ZS53YXRjaCgpIG1ldGhvZC5cbiAqXG4gKiBAcGFja2FnZSBKZXRGb3JtQnVpbGRlclxuICovXG5cbmltcG9ydCBDYWNoZU1hbmFnZXIgZnJvbSAnLi9DYWNoZU1hbmFnZXInO1xuaW1wb3J0IE9wdGlvbnNVcGRhdGVyIGZyb20gJy4vT3B0aW9uc1VwZGF0ZXInO1xuXG5jbGFzcyBGaWVsZFdhdGNoZXIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmNhY2hlTWFuYWdlciAgID0gbmV3IENhY2hlTWFuYWdlcigpO1xuXHRcdHRoaXMub3B0aW9uc1VwZGF0ZXIgPSBuZXcgT3B0aW9uc1VwZGF0ZXIoKTtcblxuXHRcdC8qKiBAdHlwZSB7TWFwPHN0cmluZywge3Vud2F0Y2g6IEZ1bmN0aW9uLCBkZXBlbmRlbnRzOiBzdHJpbmdbXX0+fSAqL1xuXHRcdHRoaXMud2F0Y2hlcnMgPSBuZXcgTWFwKCk7XG5cblx0XHQvKiogQHR5cGUge01hcDxzdHJpbmcsIHtlbGVtZW50OiBIVE1MRWxlbWVudCwgY29uZmlnOiBPYmplY3R9Pn0gKi9cblx0XHR0aGlzLmF1dG9VcGRhdGVGaWVsZHMgPSBuZXcgTWFwKCk7XG5cblx0XHQvKiogQHR5cGUge01hcDxzdHJpbmcsIEFib3J0Q29udHJvbGxlcj59ICovXG5cdFx0dGhpcy5hYm9ydENvbnRyb2xsZXJzID0gbmV3IE1hcCgpO1xuXG5cdFx0LyoqIEB0eXBlIHtNYXA8c3RyaW5nLCBudW1iZXI+fSBkZWJvdW5jZSB0aW1lciBJRHMgKi9cblx0XHR0aGlzLmRlYm91bmNlVGltZXJzID0gbmV3IE1hcCgpO1xuXG5cdFx0LyoqIEB0eXBlIHtNYXA8c3RyaW5nLCB7ZWxlbWVudDogSFRNTEVsZW1lbnQsIGhhbmRsZXI6IEZ1bmN0aW9ufT59ICovXG5cdFx0dGhpcy5idXR0b25MaXN0ZW5lcnMgPSBuZXcgTWFwKCk7XG5cblx0XHQvKiogQHR5cGUge01hcDxzdHJpbmcsIHN0cmluZz59ICovXG5cdFx0dGhpcy5sYXN0Q29udGV4dEhhc2hlcyA9IG5ldyBNYXAoKTtcblxuXHRcdC8qKiBAdHlwZSB7TWFwPHN0cmluZywgc3RyaW5nfEFycmF5Pn0gKi9cblx0XHR0aGlzLnByZXNlcnZlZFJlcGVhdGVyVmFsdWVzID0gbmV3IE1hcCgpO1xuXG5cdFx0dGhpcy5kZWJvdW5jZURlbGF5ID0gMzAwO1xuXG5cdFx0LyoqXG5cdFx0ICogUmVmZXJlbmNlIGNvdW50ZXIgcGVyIGZvcm06IGxvY2tTdGF0ZS5lbmQoKSBmaXJlcyBvbmx5IHdoZW4gYWxsXG5cdFx0ICogaW4tZmxpZ2h0IHJlcXVlc3RzIGZvciB0aGF0IGZvcm0gZmluaXNoLlxuXHRcdCAqXG5cdFx0ICogQHR5cGUge01hcDxzdHJpbmcsIG51bWJlcj59XG5cdFx0ICovXG5cdFx0dGhpcy5sb2FkaW5nQ291bnRzID0gbmV3IE1hcCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEluaXRpYWxpemUgYXV0by11cGRhdGUgZm9yIGFsbCBmaWVsZHMgaW4gYSBmb3JtLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBmb3JtTm9kZSBGb3JtIGVsZW1lbnQuXG5cdCAqL1xuXHRpbml0Rm9ybSggZm9ybU5vZGUgKSB7XG5cdFx0Ly8gRmluZCBhbGwgZmllbGRzIHdpdGggYXV0by11cGRhdGUgZW5hYmxlZFxuXHRcdGNvbnN0IGF1dG9VcGRhdGVGaWVsZHMgPSBmb3JtTm9kZS5xdWVyeVNlbGVjdG9yQWxsKCAnW2RhdGEtamZiLWF1dG8tdXBkYXRlPVwiMVwiXScgKTtcblxuXHRcdGF1dG9VcGRhdGVGaWVsZHMuZm9yRWFjaCggKCBmaWVsZEVsZW1lbnQgKSA9PiB7XG5cdFx0XHR0aGlzLmluaXRGaWVsZCggZmllbGRFbGVtZW50LCBmb3JtTm9kZSApO1xuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBCdWlsZCBhIHVuaXF1ZSBmaWVsZCBrZXkgZm9yIHRoZSBhdXRvVXBkYXRlRmllbGRzIG1hcC5cblx0ICpcblx0ICogRm9yIGZpZWxkcyBpbnNpZGUgYSByZXBlYXRlciByb3cgYSBzY29wZWQga2V5IGlzIGJ1aWx0IHNvIHRoYXQgcm93IDBcblx0ICogYW5kIHJvdyAxIGRvIG5vdCBvdmVyd3JpdGUgZWFjaCBvdGhlciBldmVuIHRob3VnaCBib3RoIHNoYXJlIHRoZSBzYW1lXG5cdCAqIGRhdGEtZmllbGQtbmFtZSBhdHRyaWJ1dGUuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSAgICAgIGZpZWxkTmFtZSAgIEJhc2UgZmllbGQgbmFtZSBmcm9tIGRhdGEtZmllbGQtbmFtZS5cblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZmllbGRFbGVtZW50IFRoZSBmaWVsZCBlbGVtZW50LlxuXHQgKlxuXHQgKiBAcmV0dXJuIHtzdHJpbmd9IFVuaXF1ZSBmaWVsZCBrZXkuXG5cdCAqL1xuXHRidWlsZEZpZWxkS2V5KCBmaWVsZE5hbWUsIGZpZWxkRWxlbWVudCApIHtcblx0XHRjb25zdCByZXBlYXRlclJvdyA9IGZpZWxkRWxlbWVudC5jbG9zZXN0KCAnLmpldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXJfX3JvdycgKTtcblx0XHRyZXR1cm4gdGhpcy5idWlsZFdhdGNoZXJLZXkoIGZpZWxkTmFtZSwgcmVwZWF0ZXJSb3cgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbml0aWFsaXplIGF1dG8tdXBkYXRlIGZvciBhIHNpbmdsZSBmaWVsZC5cblx0ICpcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZmllbGRFbGVtZW50IEZpZWxkIGVsZW1lbnQgKHNlbGVjdC9pbnB1dCkuXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGZvcm1Ob2RlICAgICBGb3JtIGVsZW1lbnQuXG5cdCAqL1xuXHRpbml0RmllbGQoIGZpZWxkRWxlbWVudCwgZm9ybU5vZGUsIG9wdGlvbnMgPSB7fSApIHtcblx0XHRjb25zdCBjb25maWcgPSB0aGlzLnBhcnNlRmllbGRDb25maWcoIGZpZWxkRWxlbWVudCApO1xuXG5cdFx0aWYgKCAhIGNvbmZpZyApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBmaWVsZEtleSA9IHRoaXMuYnVpbGRGaWVsZEtleSggY29uZmlnLmZpZWxkTmFtZSwgZmllbGRFbGVtZW50ICk7XG5cblx0XHQvLyBQcmV2ZW50IGRvdWJsZS1pbml0OiBNdXRhdGlvbk9ic2VydmVyIHdpdGggc3VidHJlZTp0cnVlIGNhbiBmaXJlXG5cdFx0Ly8gbXVsdGlwbGUgY2FsbGJhY2tzIGZvciBvbmUgcmVwZWF0ZXIgcm93IGluc2VydGlvbi5cblx0XHRpZiAoIGZpZWxkRWxlbWVudC5oYXNBdHRyaWJ1dGUoICdkYXRhLWpmYi1hdS1pbml0JyApICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGZpZWxkRWxlbWVudC5zZXRBdHRyaWJ1dGUoICdkYXRhLWpmYi1hdS1pbml0JywgJzEnICk7XG5cblx0XHRjb25maWcuZmllbGRLZXkgPSBmaWVsZEtleTtcblxuXHRcdHRoaXMuYXV0b1VwZGF0ZUZpZWxkcy5zZXQoIGZpZWxkS2V5LCB7XG5cdFx0XHRlbGVtZW50OiBmaWVsZEVsZW1lbnQsXG5cdFx0XHRjb25maWcsXG5cdFx0fSApO1xuXG5cdFx0Y29uc3QgcHJlc2VydmVkVmFsdWUgPSB0aGlzLmNvbnN1bWVQcmVzZXJ2ZWRSZXBlYXRlclZhbHVlKCBmaWVsZEtleSApO1xuXHRcdGlmICggcHJlc2VydmVkVmFsdWUgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdGZpZWxkRWxlbWVudC5kYXRhc2V0LmpmYkF1UHJlc2VydmVkVmFsdWUgPSBKU09OLnN0cmluZ2lmeSggcHJlc2VydmVkVmFsdWUgKTtcblx0XHR9XG5cblx0XHRpZiAoIGNvbmZpZy51cGRhdGVPbkJ1dHRvbiApIHtcblx0XHRcdHRoaXMud2F0Y2hCdXR0b24oIGNvbmZpZy51cGRhdGVPbkJ1dHRvbiwgZmllbGRLZXksIGZvcm1Ob2RlICk7XG5cdFx0fVxuXG5cdFx0aWYgKCBjb25maWcubGlzdGVuVG8gJiYgQXJyYXkuaXNBcnJheSggY29uZmlnLmxpc3RlblRvICkgKSB7XG5cdFx0XHRjb25maWcubGlzdGVuVG8uZm9yRWFjaCggKCBzb3VyY2VGaWVsZE5hbWUgKSA9PiB7XG5cdFx0XHRcdHRoaXMud2F0Y2hGaWVsZCggc291cmNlRmllbGROYW1lLCBmaWVsZEtleSwgZm9ybU5vZGUgKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHQvLyBBdXRvLXRyaWdnZXIgaW5pdGlhbCB1cGRhdGUgb25seSB3aGVuIG5vIGJ1dHRvbiBpcyBjb25maWd1cmVkLlxuXHRcdC8vIFdpdGggYSBidXR0b24sIHRoZSB1c2VyIGNvbnRyb2xzIHdoZW4gdG8gZmV0Y2gg4oCUIG5vIGF1dG9tYXRpYyB1cGRhdGUuXG5cdFx0Ly8gV2l0aCByZXF1aXJlQWxsRmlsbGVkLCBza2lwIGlmIGFueSBsaXN0ZW5UbyBmaWVsZCBpcyBlbXB0eS5cblx0XHRpZiAoICEgY29uZmlnLnVwZGF0ZU9uQnV0dG9uICYmIGNvbmZpZy5saXN0ZW5UbyApIHtcblx0XHRcdGlmICggdGhpcy5zaG91bGRTa2lwRHluYW1pY0luaXRSZWZyZXNoKCBmaWVsZEVsZW1lbnQsIGNvbmZpZywgZm9ybU5vZGUsIG9wdGlvbnMgKSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIGNvbmZpZy5yZXF1aXJlQWxsRmlsbGVkICkge1xuXHRcdFx0XHRjb25zdCBjb250ZXh0ICAgPSB0aGlzLmNvbGxlY3RDb250ZXh0KCBjb25maWcsIGZvcm1Ob2RlICk7XG5cdFx0XHRcdGNvbnN0IGFsbEZpbGxlZCA9IGNvbmZpZy5saXN0ZW5Uby5ldmVyeSggKCBmaWVsZE5hbWUgKSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgdmFsID0gY29udGV4dFsgZmllbGROYW1lIF07XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuaXNDb250ZXh0VmFsdWVGaWxsZWQoIHZhbCApO1xuXHRcdFx0XHR9ICk7XG5cblx0XHRcdFx0aWYgKCBhbGxGaWxsZWQgKSB7XG5cdFx0XHRcdFx0dGhpcy5kZWJvdW5jZWRVcGRhdGUoIGZpZWxkS2V5LCBmb3JtTm9kZSApO1xuXHRcdFx0XHR9IGVsc2UgaWYgKCB0aGlzLnNob3VsZENsZWFyT25FbXB0eUNvbnRleHQoIGNvbmZpZyApICkge1xuXHRcdFx0XHRcdHRoaXMub3B0aW9uc1VwZGF0ZXIudXBkYXRlT3B0aW9ucyggZmllbGRFbGVtZW50LCBbXSwgZm9ybU5vZGUgKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLmRlYm91bmNlZFVwZGF0ZSggZmllbGRLZXksIGZvcm1Ob2RlICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuZGVib3VuY2VkVXBkYXRlKCBmaWVsZEtleSwgZm9ybU5vZGUgKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRzaG91bGRTa2lwRHluYW1pY0luaXRSZWZyZXNoKCBmaWVsZEVsZW1lbnQsIGNvbmZpZywgZm9ybU5vZGUsIG9wdGlvbnMgPSB7fSApIHtcblx0XHRpZiAoICEgb3B0aW9ucz8uaXNEeW5hbWljSW5pdCApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCByZXBlYXRlclJvdyA9IGZpZWxkRWxlbWVudC5jbG9zZXN0KCAnLmpldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXJfX3JvdycgKTtcblxuXHRcdGlmICggISByZXBlYXRlclJvdyB8fCAhIEFycmF5LmlzQXJyYXkoIGNvbmZpZy5saXN0ZW5UbyApIHx8ICEgY29uZmlnLmxpc3RlblRvLmxlbmd0aCApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBsaXN0ZW5zT25seVRvRXh0ZXJuYWxGaWVsZHMgPSBjb25maWcubGlzdGVuVG8uZXZlcnkoICggc291cmNlRmllbGROYW1lICkgPT4ge1xuXHRcdFx0cmV0dXJuICEgdGhpcy5maW5kRWxlbWVudEluU2NvcGUoIHNvdXJjZUZpZWxkTmFtZSwgcmVwZWF0ZXJSb3csIHJlcGVhdGVyUm93ICk7XG5cdFx0fSApO1xuXG5cdFx0aWYgKCAhIGxpc3RlbnNPbmx5VG9FeHRlcm5hbEZpZWxkcyApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBjdXJyZW50VmFsdWUgPSB0aGlzLnJlYWRDdXJyZW50VGFyZ2V0VmFsdWUoIGZpZWxkRWxlbWVudCApO1xuXG5cdFx0aWYgKCAhIHRoaXMuaXNDb250ZXh0VmFsdWVGaWxsZWQoIGN1cnJlbnRWYWx1ZSApICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNvbnRleHRIYXNoID0gdGhpcy5zZXJpYWxpemVDb250ZXh0KCB0aGlzLmNvbGxlY3RDb250ZXh0KCBjb25maWcsIGZvcm1Ob2RlICkgKTtcblx0XHRjb25zdCBjb250ZXh0S2V5ICA9IHRoaXMuYnVpbGRDb250ZXh0TWVtb3J5S2V5KCBjb25maWcgKTtcblxuXHRcdHJldHVybiB0aGlzLmxhc3RDb250ZXh0SGFzaGVzLmdldCggY29udGV4dEtleSApID09PSBjb250ZXh0SGFzaDtcblx0fVxuXG5cdHJlYWRDdXJyZW50VGFyZ2V0VmFsdWUoIGZpZWxkRWxlbWVudCApIHtcblx0XHRpZiAoIGZpZWxkRWxlbWVudC5tYXRjaGVzKCAnc2VsZWN0JyApICkge1xuXHRcdFx0aWYgKCBmaWVsZEVsZW1lbnQubXVsdGlwbGUgKSB7XG5cdFx0XHRcdHJldHVybiBBcnJheS5mcm9tKCBmaWVsZEVsZW1lbnQuc2VsZWN0ZWRPcHRpb25zICkubWFwKCAoIG9wdGlvbiApID0+IG9wdGlvbi52YWx1ZSApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZmllbGRFbGVtZW50LnZhbHVlIHx8ICcnO1xuXHRcdH1cblxuXHRcdGNvbnN0IG5lc3RlZFNlbGVjdCA9IGZpZWxkRWxlbWVudC5xdWVyeVNlbGVjdG9yPy4oICdzZWxlY3QnICk7XG5cdFx0aWYgKCBuZXN0ZWRTZWxlY3QgKSB7XG5cdFx0XHRpZiAoIG5lc3RlZFNlbGVjdC5tdWx0aXBsZSApIHtcblx0XHRcdFx0cmV0dXJuIEFycmF5LmZyb20oIG5lc3RlZFNlbGVjdC5zZWxlY3RlZE9wdGlvbnMgKS5tYXAoICggb3B0aW9uICkgPT4gb3B0aW9uLnZhbHVlICk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBuZXN0ZWRTZWxlY3QudmFsdWUgfHwgJyc7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgb3B0aW9uSW5wdXRzID0gQXJyYXkuZnJvbShcblx0XHRcdGZpZWxkRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsPy4oICdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sIGlucHV0W3R5cGU9XCJyYWRpb1wiXScgKSB8fCBbXVxuXHRcdCk7XG5cblx0XHRpZiAoICEgb3B0aW9uSW5wdXRzLmxlbmd0aCApIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cblx0XHRjb25zdCBjaGVja2VkID0gb3B0aW9uSW5wdXRzLmZpbHRlciggKCBpbnB1dCApID0+IGlucHV0LmNoZWNrZWQgKTtcblxuXHRcdGlmICggISBjaGVja2VkLmxlbmd0aCApIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cblx0XHRpZiAoIGNoZWNrZWQuZXZlcnkoICggaW5wdXQgKSA9PiBpbnB1dC50eXBlID09PSAnY2hlY2tib3gnICkgKSB7XG5cdFx0XHRyZXR1cm4gY2hlY2tlZC5tYXAoICggaW5wdXQgKSA9PiBpbnB1dC52YWx1ZSApO1xuXHRcdH1cblxuXHRcdHJldHVybiBjaGVja2VkWyAwIF0/LnZhbHVlIHx8ICcnO1xuXHR9XG5cblx0YnVpbGRDb250ZXh0TWVtb3J5S2V5KCBjb25maWcgKSB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdGNvbmZpZy5mb3JtSWQgfHwgMCxcblx0XHRcdGNvbmZpZy5nZW5lcmF0b3JJZCB8fCAnJyxcblx0XHRcdGNvbmZpZy5maWVsZE5hbWUgfHwgJycsXG5cdFx0XHRBcnJheS5pc0FycmF5KCBjb25maWcubGlzdGVuVG8gKSA/IGNvbmZpZy5saXN0ZW5Uby5qb2luKCAnfCcgKSA6ICcnLFxuXHRcdF0uam9pbiggJzo6JyApO1xuXHR9XG5cblx0c2VyaWFsaXplQ29udGV4dCggY29udGV4dCApIHtcblx0XHRjb25zdCBvcmRlcmVkID0ge307XG5cblx0XHRPYmplY3Qua2V5cyggY29udGV4dCB8fCB7fSApLnNvcnQoKS5mb3JFYWNoKCAoIGtleSApID0+IHtcblx0XHRcdG9yZGVyZWRbIGtleSBdID0gY29udGV4dFsga2V5IF07XG5cdFx0fSApO1xuXG5cdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KCBvcmRlcmVkICk7XG5cdH1cblxuXHRwcmVzZXJ2ZVJlcGVhdGVyVmFsdWVzQmVmb3JlUmVtb3ZhbCggcmVtb3ZlQnV0dG9uICkge1xuXHRcdGNvbnN0IHJlbW92ZWRSb3cgPSByZW1vdmVCdXR0b24uY2xvc2VzdCggJy5qZXQtZm9ybS1idWlsZGVyLXJlcGVhdGVyX19yb3cnICk7XG5cdFx0Y29uc3QgcmVwZWF0ZXIgICA9IHJlbW92ZUJ1dHRvbi5jbG9zZXN0KCAnW2RhdGEtcmVwZWF0ZXI9XCIxXCJdJyApO1xuXHRcdGNvbnN0IGl0ZW1zUm9vdCAgPSByZXBlYXRlcj8ucXVlcnlTZWxlY3RvciggJy5qZXQtZm9ybS1idWlsZGVyLXJlcGVhdGVyX19pdGVtcycgKSB8fCByZXBlYXRlcjtcblxuXHRcdGlmICggISByZW1vdmVkUm93IHx8ICEgcmVwZWF0ZXIgfHwgISBpdGVtc1Jvb3QgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3Qgcm93cyA9IEFycmF5LmZyb20oIGl0ZW1zUm9vdC5xdWVyeVNlbGVjdG9yQWxsKCAnOnNjb3BlID4gLmpldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXJfX3JvdycgKSApO1xuXHRcdGNvbnN0IHJlbW92ZWRJbmRleCA9IHJvd3MuaW5kZXhPZiggcmVtb3ZlZFJvdyApO1xuXHRcdGNvbnN0IHJlcGVhdGVyTmFtZSA9IHJlcGVhdGVyLmRhdGFzZXQuZmllbGROYW1lIHx8ICdyZXBlYXRlcic7XG5cblx0XHRpZiAoIHJlbW92ZWRJbmRleCA8IDAgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5hdXRvVXBkYXRlRmllbGRzLmZvckVhY2goICggZmllbGREYXRhICkgPT4ge1xuXHRcdFx0Y29uc3QgZWxlbWVudCA9IGZpZWxkRGF0YT8uZWxlbWVudDtcblx0XHRcdGNvbnN0IGNvbmZpZyAgPSBmaWVsZERhdGE/LmNvbmZpZztcblx0XHRcdGNvbnN0IHJvdyAgICAgPSBlbGVtZW50Py5jbG9zZXN0KCAnLmpldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXJfX3JvdycgKTtcblxuXHRcdFx0aWYgKCAhIGVsZW1lbnQgfHwgISBjb25maWcgfHwgISByb3cgfHwgcm93ID09PSByZW1vdmVkUm93IHx8ICEgcmVwZWF0ZXIuY29udGFpbnMoIHJvdyApICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHJvd0luZGV4ID0gcm93cy5pbmRleE9mKCByb3cgKTtcblxuXHRcdFx0aWYgKCByb3dJbmRleCA8IDAgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgcHJlc2VydmVkVmFsdWUgPSB0aGlzLnJlYWRWYWx1ZUZyb21Tb3VyY2VFbGVtZW50KCBlbGVtZW50ICk7XG5cblx0XHRcdGlmICggISB0aGlzLmlzQ29udGV4dFZhbHVlRmlsbGVkKCBwcmVzZXJ2ZWRWYWx1ZSApICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IG5leHRJbmRleCA9IHJvd0luZGV4ID4gcmVtb3ZlZEluZGV4ID8gcm93SW5kZXggLSAxIDogcm93SW5kZXg7XG5cdFx0XHRjb25zdCBuZXh0S2V5ICAgPSBgJHsgcmVwZWF0ZXJOYW1lIH1bJHsgbmV4dEluZGV4IH1dLiR7IGNvbmZpZy5maWVsZE5hbWUgfWA7XG5cblx0XHRcdHRoaXMucHJlc2VydmVkUmVwZWF0ZXJWYWx1ZXMuc2V0KCBuZXh0S2V5LCBwcmVzZXJ2ZWRWYWx1ZSApO1xuXHRcdH0gKTtcblx0fVxuXG5cdGNvbnN1bWVQcmVzZXJ2ZWRSZXBlYXRlclZhbHVlKCBmaWVsZEtleSApIHtcblx0XHRpZiAoICEgdGhpcy5wcmVzZXJ2ZWRSZXBlYXRlclZhbHVlcy5oYXMoIGZpZWxkS2V5ICkgKSB7XG5cdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHRcdH1cblxuXHRcdGNvbnN0IHZhbHVlID0gdGhpcy5wcmVzZXJ2ZWRSZXBlYXRlclZhbHVlcy5nZXQoIGZpZWxkS2V5ICk7XG5cdFx0dGhpcy5wcmVzZXJ2ZWRSZXBlYXRlclZhbHVlcy5kZWxldGUoIGZpZWxkS2V5ICk7XG5cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHQvKipcblx0ICogUGFyc2UgZmllbGQgY29uZmlndXJhdGlvbiBmcm9tIGRhdGEgYXR0cmlidXRlcy5cblx0ICpcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZmllbGRFbGVtZW50IEZpZWxkIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEByZXR1cm4ge09iamVjdHxudWxsfSBDb25maWd1cmF0aW9uIG9iamVjdCBvciBudWxsIGlmIGludmFsaWQuXG5cdCAqL1xuXHRwYXJzZUZpZWxkQ29uZmlnKCBmaWVsZEVsZW1lbnQgKSB7XG5cdFx0Y29uc3QgZ2VuZXJhdG9ySWQgPSBmaWVsZEVsZW1lbnQuZGF0YXNldC5nZW5lcmF0b3JJZDtcblx0XHRjb25zdCBmaWVsZE5hbWUgICA9IGZpZWxkRWxlbWVudC5kYXRhc2V0LmZpZWxkTmFtZTtcblxuXHRcdGlmICggISBnZW5lcmF0b3JJZCB8fCAhIGZpZWxkTmFtZSApIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdGxldCBsaXN0ZW5UbyA9IGZpZWxkRWxlbWVudC5kYXRhc2V0Lmxpc3RlblRvIHx8IG51bGw7XG5cblx0XHRpZiAoIGxpc3RlblRvICkge1xuXHRcdFx0aWYgKCBmaWVsZEVsZW1lbnQuZGF0YXNldC5saXN0ZW5Ub011bHRpcGxlID09PSAnMScgKSB7XG5cdFx0XHRcdGxpc3RlblRvID0gdGhpcy5wYXJzZUpTT04oIGxpc3RlblRvICk7XG5cdFx0XHRcdGlmICggISBBcnJheS5pc0FycmF5KCBsaXN0ZW5UbyApICkge1xuXHRcdFx0XHRcdGxpc3RlblRvID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bGlzdGVuVG8gPSBbIGxpc3RlblRvIF07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGdlbmVyYXRvcklkLFxuXHRcdFx0ZmllbGROYW1lLFxuXHRcdFx0bGlzdGVuVG8sXG5cdFx0XHRyZXF1aXJlQWxsRmlsbGVkOiBmaWVsZEVsZW1lbnQuZGF0YXNldC5yZXF1aXJlQWxsRmlsbGVkID09PSAnMScsXG5cdFx0XHRlbXB0eUNvbnRleHRBY3Rpb246IGZpZWxkRWxlbWVudC5kYXRhc2V0LmVtcHR5Q29udGV4dEFjdGlvbiB8fCAnY2xlYXInLFxuXHRcdFx0dXBkYXRlT25CdXR0b246IGZpZWxkRWxlbWVudC5kYXRhc2V0LnVwZGF0ZU9uQnV0dG9uIHx8IG51bGwsXG5cdFx0XHR1cGRhdGVPbkJ1dHRvbkNsYXNzOiBmaWVsZEVsZW1lbnQuZGF0YXNldC51cGRhdGVPbkJ1dHRvbkNsYXNzIHx8ICcnLFxuXHRcdFx0Y2FjaGVUaW1lb3V0OiBwYXJzZUludCggZmllbGRFbGVtZW50LmRhdGFzZXQuY2FjaGVUaW1lb3V0ICkgfHwgNjAsXG5cdFx0XHRmb3JtSWQ6IHBhcnNlSW50KCBmaWVsZEVsZW1lbnQuZGF0YXNldC5mb3JtSWQgKSB8fCAwLFxuXHRcdH07XG5cdH1cblxuXHQvKipcblx0ICogU2FmZWx5IHBhcnNlIEpTT04gc3RyaW5nLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30ganNvblN0cmluZyBKU09OIHN0cmluZy5cblx0ICpcblx0ICogQHJldHVybiB7T2JqZWN0fG51bGx9IFBhcnNlZCBvYmplY3Qgb3IgbnVsbCBpZiBpbnZhbGlkLlxuXHQgKi9cblx0cGFyc2VKU09OKCBqc29uU3RyaW5nICkge1xuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gSlNPTi5wYXJzZSgganNvblN0cmluZyApO1xuXHRcdH0gY2F0Y2ggKCBlICkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZSBpbnB1dCB3cmFwcGVyIGZyb20gRE9NIGVsZW1lbnQuXG5cdCAqIEZhbGxiYWNrIG1ldGhvZCB3aGVuIEpldEZvcm1CdWlsZGVyIEFQSSBkb2Vzbid0IHdvcmsuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgZmllbGROYW1lICAgIEZpZWxkIG5hbWUgdG8gZmluZC5cblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gICAgICBmb3JtTm9kZSAgICAgRm9ybSBlbGVtZW50LlxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fG51bGx9IGtub3duRWxlbWVudCBQcmUtZm91bmQgZWxlbWVudCAoc2tpcHMgRE9NIHNlYXJjaCkuXG5cdCAqXG5cdCAqIEByZXR1cm4ge09iamVjdHxudWxsfSBJbnB1dCB3cmFwcGVyIG9iamVjdCBvciBudWxsIGlmIG5vdCBmb3VuZC5cblx0ICovXG5cdGNyZWF0ZUlucHV0V3JhcHBlckZyb21ET00oIGZpZWxkTmFtZSwgZm9ybU5vZGUsIGtub3duRWxlbWVudCA9IG51bGwgKSB7XG5cdFx0bGV0IGZpZWxkRWxlbWVudCA9IGtub3duRWxlbWVudDtcblxuXHRcdGlmICggISBmaWVsZEVsZW1lbnQgKSB7XG5cdFx0XHRmaWVsZEVsZW1lbnQgPSBmb3JtTm9kZS5xdWVyeVNlbGVjdG9yKCBgW2RhdGEtZmllbGQtbmFtZT1cIiR7IGZpZWxkTmFtZSB9XCJdYCApO1xuXHRcdH1cblxuXHRcdGlmICggISBmaWVsZEVsZW1lbnQgKSB7XG5cdFx0XHRmaWVsZEVsZW1lbnQgPSBmb3JtTm9kZS5xdWVyeVNlbGVjdG9yKCBgW25hbWU9XCIkeyBmaWVsZE5hbWUgfVwiXWAgKTtcblx0XHR9XG5cblx0XHRpZiAoICEgZmllbGRFbGVtZW50ICkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgd3JhcHBlciA9IHtcblx0XHRcdG5hbWU6IGZpZWxkTmFtZSxcblx0XHRcdG5vZGU6IGZpZWxkRWxlbWVudCxcblx0XHRcdHZhbHVlOiB7XG5cdFx0XHRcdGN1cnJlbnQ6IGZpZWxkRWxlbWVudC52YWx1ZSB8fCAnJyxcblx0XHRcdFx0d2F0Y2hlcnM6IFtdLFxuXHRcdFx0XHR3YXRjaDogKCBjYWxsYmFjayApID0+IHtcblx0XHRcdFx0XHQvLyBBZGQgZXZlbnQgbGlzdGVuZXJcblx0XHRcdFx0XHRjb25zdCBoYW5kbGVyID0gKCkgPT4ge1xuXHRcdFx0XHRcdFx0d3JhcHBlci52YWx1ZS5jdXJyZW50ID0gZmllbGRFbGVtZW50LnZhbHVlIHx8ICcnO1xuXHRcdFx0XHRcdFx0Y2FsbGJhY2soIHdyYXBwZXIudmFsdWUuY3VycmVudCApO1xuXHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHRmaWVsZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2NoYW5nZScsIGhhbmRsZXIgKTtcblx0XHRcdFx0XHRmaWVsZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2lucHV0JywgaGFuZGxlciApO1xuXG5cdFx0XHRcdFx0Ly8gUmV0dXJuIHVud2F0Y2ggZnVuY3Rpb25cblx0XHRcdFx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0XHRcdFx0ZmllbGRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdjaGFuZ2UnLCBoYW5kbGVyICk7XG5cdFx0XHRcdFx0XHRmaWVsZEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2lucHV0JywgaGFuZGxlciApO1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH07XG5cblxuXHRcdHJldHVybiB3cmFwcGVyO1xuXHR9XG5cblx0LyoqXG5cdCAqIEZpbmQgYW4gaW5wdXQgZWxlbWVudCB3aXRoaW4gYSBzY29wZSwgdGhlbiBmYWxsIGJhY2sgdG8gdGhlIGZ1bGwgZm9ybS5cblx0ICpcblx0ICogRm9yIHJlcGVhdGVyIGZpZWxkcywgdGhlIHNjb3BlIGlzIHRoZSByZXBlYXRlciByb3cgZWxlbWVudCBzbyB0aGF0XG5cdCAqIHNvdXJjZSBmaWVsZHMgYXJlIHJlc29sdmVkIHdpdGhpbiB0aGUgc2FtZSByb3cgYmVmb3JlIHNlYXJjaGluZyBnbG9iYWxseS5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICBmaWVsZE5hbWUgICBGaWVsZCB0byBmaW5kLlxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fG51bGx9IHNjb3BlRWxlbWVudCBTY29wZSB0byBzZWFyY2ggZmlyc3QgKGUuZy4gcmVwZWF0ZXIgcm93KS5cblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gICAgICBmb3JtTm9kZSAgICBGb3JtIGVsZW1lbnQgZm9yIGdsb2JhbCBmYWxsYmFjay5cblx0ICpcblx0ICogQHJldHVybiB7SFRNTEVsZW1lbnR8bnVsbH0gRm91bmQgZWxlbWVudCBvciBudWxsLlxuXHQgKi9cblx0ZmluZEVsZW1lbnRJblNjb3BlKCBmaWVsZE5hbWUsIHNjb3BlRWxlbWVudCwgZm9ybU5vZGUgKSB7XG5cdFx0Y29uc3Qgcm9vdHMgPSBzY29wZUVsZW1lbnQgPyBbIHNjb3BlRWxlbWVudCwgZm9ybU5vZGUgXSA6IFsgZm9ybU5vZGUgXTtcblxuXHRcdGZvciAoIGNvbnN0IHJvb3Qgb2Ygcm9vdHMgKSB7XG5cdFx0XHRsZXQgZWwgPSByb290LnF1ZXJ5U2VsZWN0b3IoIGBbZGF0YS1maWVsZC1uYW1lPVwiJHsgZmllbGROYW1lIH1cIl1gIClcblx0XHRcdFx0fHwgcm9vdC5xdWVyeVNlbGVjdG9yKCBgW25hbWU9XCIkeyBmaWVsZE5hbWUgfVwiXWAgKVxuXHRcdFx0XHR8fCByb290LnF1ZXJ5U2VsZWN0b3IoIGBbbmFtZT1cIiR7IGZpZWxkTmFtZSB9W11cIl1gIClcblx0XHRcdFx0fHwgcm9vdC5xdWVyeVNlbGVjdG9yKCBgW25hbWUqPVwiWyR7IGZpZWxkTmFtZSB9XVwiXWAgKTtcblxuXHRcdFx0aWYgKCBlbCApIHtcblx0XHRcdFx0cmV0dXJuIGVsO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEJ1aWxkIGEgdW5pcXVlIHdhdGNoZXIga2V5IHRoYXQgaW5jbHVkZXMgcmVwZWF0ZXIgcm93IGNvbnRleHQuXG5cdCAqXG5cdCAqIFdoZW4gdHdvIHJvd3MgYm90aCBjb250YWluIGEgZmllbGQgbmFtZWQgXCJjYXRlZ29yeVwiLCB0aGV5IG11c3QgaGF2ZVxuXHQgKiBzZXBhcmF0ZSB3YXRjaGVycyBzbyBjaGFuZ2VzIGluIG9uZSByb3cgZG9uJ3QgZmlyZSB1cGRhdGVzIGluIHRoZSBvdGhlci5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICBzb3VyY2VGaWVsZE5hbWUgU291cmNlIGZpZWxkIG5hbWUuXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8bnVsbH0gcmVwZWF0ZXJSb3cgICAgIFJlcGVhdGVyIHJvdyBlbGVtZW50LCBpZiBhbnkuXG5cdCAqXG5cdCAqIEByZXR1cm4ge3N0cmluZ30gVW5pcXVlIHdhdGNoZXIga2V5LlxuXHQgKi9cblx0YnVpbGRXYXRjaGVyS2V5KCBzb3VyY2VGaWVsZE5hbWUsIHJlcGVhdGVyUm93ICkge1xuXHRcdGlmICggISByZXBlYXRlclJvdyApIHtcblx0XHRcdHJldHVybiBzb3VyY2VGaWVsZE5hbWU7XG5cdFx0fVxuXG5cdFx0Ly8gVXNlIHRoZSByZXBlYXRlciByb3cncyBpbmRleCBpbiBpdHMgcGFyZW50IGFzIGEgc3RhYmxlIGlkZW50aWZpZXJcblx0XHRjb25zdCBwYXJlbnQgICAgICAgPSByZXBlYXRlclJvdy5wYXJlbnRFbGVtZW50O1xuXHRcdGNvbnN0IGluZGV4ICAgICAgICA9IHBhcmVudCA/IEFycmF5LmZyb20oIHBhcmVudC5jaGlsZHJlbiApLmluZGV4T2YoIHJlcGVhdGVyUm93ICkgOiAwO1xuXHRcdGNvbnN0IHJlcGVhdGVyTmFtZSA9IHJlcGVhdGVyUm93LmNsb3Nlc3QoICdbZGF0YS1yZXBlYXRlcj1cIjFcIl0nICk/LmRhdGFzZXQ/LmZpZWxkTmFtZSB8fCAncmVwZWF0ZXInO1xuXG5cdFx0cmV0dXJuIGAkeyByZXBlYXRlck5hbWUgfVskeyBpbmRleCB9XS4keyBzb3VyY2VGaWVsZE5hbWUgfWA7XG5cdH1cblxuXHQvKipcblx0ICogV2F0Y2ggYSBzcGVjaWZpYyBmaWVsZCBmb3IgY2hhbmdlcy5cblx0ICpcblx0ICogV2hlbiB0aGUgdGFyZ2V0IGZpZWxkIGxpdmVzIGluc2lkZSBhIHJlcGVhdGVyIHJvdywgdGhlIHNvdXJjZSBmaWVsZCBpc1xuXHQgKiBmaXJzdCBzZWFyY2hlZCB3aXRoaW4gdGhhdCBzYW1lIHJvdy4gSWYgbm90IGZvdW5kIHRoZXJlLCBzZWFyY2ggZmFsbHNcblx0ICogYmFjayB0byB0aGUgZnVsbCBmb3JtIChzdXBwb3J0cyBnbG9iYWwtZmllbGQg4oaSIHJlcGVhdGVyLWZpZWxkIHBhdHRlcm5zKS5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9ICAgICAgc291cmNlRmllbGROYW1lIEZpZWxkIG5hbWUgdG8gd2F0Y2guXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSAgICAgIHRhcmdldEZpZWxkTmFtZSBGaWVsZCBuYW1lIHRvIHVwZGF0ZS5cblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZm9ybU5vZGUgICAgICAgIEZvcm0gZWxlbWVudC5cblx0ICovXG5cdHdhdGNoRmllbGQoIHNvdXJjZUZpZWxkTmFtZSwgdGFyZ2V0RmllbGROYW1lLCBmb3JtTm9kZSApIHtcblx0XHRjb25zdCBmaWVsZERhdGEgICAgID0gdGhpcy5hdXRvVXBkYXRlRmllbGRzLmdldCggdGFyZ2V0RmllbGROYW1lICk7XG5cdFx0Y29uc3QgdGFyZ2V0RWxlbWVudCA9IGZpZWxkRGF0YT8uZWxlbWVudCB8fCBudWxsO1xuXHRcdGNvbnN0IHJlcGVhdGVyUm93ICAgPSB0YXJnZXRFbGVtZW50ID8gdGFyZ2V0RWxlbWVudC5jbG9zZXN0KCAnLmpldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXJfX3JvdycgKSA6IG51bGw7XG5cdFx0Y29uc3Qgc291cmNlRWxlbWVudCA9IHRoaXMuZmluZEVsZW1lbnRJblNjb3BlKCBzb3VyY2VGaWVsZE5hbWUsIHJlcGVhdGVyUm93LCBmb3JtTm9kZSApO1xuXHRcdGNvbnN0IGZvcmNlRG9tV2F0Y2ggPSBzb3VyY2VFbGVtZW50ID8gdGhpcy5zaG91bGRVc2VEb21XYXRjaCggc291cmNlRWxlbWVudCApIDogZmFsc2U7XG5cblx0XHRsZXQgc291cmNlSW5wdXQgPSBudWxsO1xuXG5cdFx0aWYgKCBzb3VyY2VFbGVtZW50ICYmICEgZm9yY2VEb21XYXRjaCAmJiB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJNYWluPy5pbnB1dERhdGEgKSB7XG5cdFx0XHRjb25zdCBhY3R1YWxOYW1lID0gdGhpcy5yZXNvbHZlQWN0dWFsTmFtZSggc291cmNlRWxlbWVudCwgc291cmNlRmllbGROYW1lICk7XG5cblx0XHRcdGlmICggd2luZG93LkpldEZvcm1CdWlsZGVyTWFpbi5pbnB1dERhdGEuZmluZElucHV0ICkge1xuXHRcdFx0XHRzb3VyY2VJbnB1dCA9IHdpbmRvdy5KZXRGb3JtQnVpbGRlck1haW4uaW5wdXREYXRhLmZpbmRJbnB1dCggYWN0dWFsTmFtZSwgZm9ybU5vZGUgKSB8fFxuXHRcdFx0XHQgICAgICAgICAgICAgIHdpbmRvdy5KZXRGb3JtQnVpbGRlck1haW4uaW5wdXREYXRhLmZpbmRJbnB1dCggc291cmNlRmllbGROYW1lLCBmb3JtTm9kZSApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoICEgc291cmNlSW5wdXQgJiYgd2luZG93LkpldEZvcm1CdWlsZGVyTWFpbi5pbnB1dERhdGEuZ2V0SW5wdXQgKSB7XG5cdFx0XHRcdHNvdXJjZUlucHV0ID0gd2luZG93LkpldEZvcm1CdWlsZGVyTWFpbi5pbnB1dERhdGEuZ2V0SW5wdXQoIGFjdHVhbE5hbWUsIGZvcm1Ob2RlICkgfHxcblx0XHRcdFx0ICAgICAgICAgICAgICB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJNYWluLmlucHV0RGF0YS5nZXRJbnB1dCggc291cmNlRmllbGROYW1lLCBmb3JtTm9kZSApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoICEgc291cmNlSW5wdXQgJiYgd2luZG93LkpldEZvcm1CdWlsZGVyTWFpbi5pbnB1dERhdGEuZ2V0QWxsICkge1xuXHRcdFx0XHRjb25zdCBhbGxJbnB1dHMgPSB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJNYWluLmlucHV0RGF0YS5nZXRBbGwoIGZvcm1Ob2RlICk7XG5cdFx0XHRcdGlmICggYWxsSW5wdXRzICkge1xuXHRcdFx0XHRcdHNvdXJjZUlucHV0ID0gYWxsSW5wdXRzLmZpbmQoICggaW5wdXQgKSA9PiBpbnB1dC5uYW1lID09PSBhY3R1YWxOYW1lICkgfHxcblx0XHRcdFx0XHQgICAgICAgICAgICAgIGFsbElucHV0cy5maW5kKCAoIGlucHV0ICkgPT4gaW5wdXQubmFtZSA9PT0gc291cmNlRmllbGROYW1lICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKCAhIHNvdXJjZUVsZW1lbnQgKSB7XG5cdFx0XHRpZiAoIHdpbmRvdy5KZXRGb3JtQnVpbGRlck1haW4/LmlucHV0RGF0YT8uZmluZElucHV0ICkge1xuXHRcdFx0XHRzb3VyY2VJbnB1dCA9IHdpbmRvdy5KZXRGb3JtQnVpbGRlck1haW4uaW5wdXREYXRhLmZpbmRJbnB1dCggc291cmNlRmllbGROYW1lLCBmb3JtTm9kZSApO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCAhIHNvdXJjZUlucHV0ICYmIHdpbmRvdy5KZXRGb3JtQnVpbGRlck1haW4/LmlucHV0RGF0YT8uZ2V0SW5wdXQgKSB7XG5cdFx0XHRcdHNvdXJjZUlucHV0ID0gd2luZG93LkpldEZvcm1CdWlsZGVyTWFpbi5pbnB1dERhdGEuZ2V0SW5wdXQoIHNvdXJjZUZpZWxkTmFtZSwgZm9ybU5vZGUgKTtcblx0XHRcdH1cblx0XHRcdGlmICggISBzb3VyY2VJbnB1dCAmJiB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJNYWluPy5pbnB1dERhdGE/LmdldEFsbCApIHtcblx0XHRcdFx0Y29uc3QgYWxsSW5wdXRzID0gd2luZG93LkpldEZvcm1CdWlsZGVyTWFpbi5pbnB1dERhdGEuZ2V0QWxsKCBmb3JtTm9kZSApO1xuXHRcdFx0XHRpZiAoIGFsbElucHV0cyApIHtcblx0XHRcdFx0XHRzb3VyY2VJbnB1dCA9IGFsbElucHV0cy5maW5kKCAoIGlucHV0ICkgPT4gaW5wdXQubmFtZSA9PT0gc291cmNlRmllbGROYW1lICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoICEgc291cmNlSW5wdXQgKSB7XG5cdFx0XHRjb25zdCBlbCA9IHNvdXJjZUVsZW1lbnQgfHwgdGhpcy5maW5kRWxlbWVudEluU2NvcGUoIHNvdXJjZUZpZWxkTmFtZSwgbnVsbCwgZm9ybU5vZGUgKTtcblx0XHRcdGlmICggZWwgKSB7XG5cdFx0XHRcdHNvdXJjZUlucHV0ID0gdGhpcy5jcmVhdGVJbnB1dFdyYXBwZXJGcm9tRE9NKCB0aGlzLnJlc29sdmVBY3R1YWxOYW1lKCBlbCwgc291cmNlRmllbGROYW1lICksIGZvcm1Ob2RlLCBlbCApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICggISBzb3VyY2VJbnB1dCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCB3YXRjaGVyS2V5ID0gdGhpcy5idWlsZFdhdGNoZXJLZXkoIHNvdXJjZUZpZWxkTmFtZSwgcmVwZWF0ZXJSb3cgKTtcblx0XHRsZXQgd2F0Y2hlciAgICAgID0gdGhpcy53YXRjaGVycy5nZXQoIHdhdGNoZXJLZXkgKTtcblxuXHRcdGlmICggISB3YXRjaGVyICkge1xuXHRcdFx0bGV0IHVud2F0Y2g7XG5cblx0XHRcdGlmICggZm9yY2VEb21XYXRjaCApIHtcblx0XHRcdFx0bGV0IGxhc3RTZXJpYWxpemVkID0gbnVsbDtcblx0XHRcdFx0Y29uc3QgZG9tSGFuZGxlciA9ICggZXZlbnQgKSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgZXZlbnRUYXJnZXQgPSBldmVudD8udGFyZ2V0O1xuXHRcdFx0XHRcdGlmICggISBldmVudFRhcmdldCB8fCBldmVudFRhcmdldC5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y29uc3QgcnVuID0gKCkgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3QgbGl2ZVNvdXJjZUVsZW1lbnQgPSB0aGlzLmZpbmRFbGVtZW50SW5TY29wZSggc291cmNlRmllbGROYW1lLCByZXBlYXRlclJvdywgZm9ybU5vZGUgKTtcblx0XHRcdFx0XHRcdGlmICggISBsaXZlU291cmNlRWxlbWVudCApIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpZiAoICEgdGhpcy5pc0V2ZW50RnJvbVNvdXJjZUZpZWxkKCBldmVudFRhcmdldCwgbGl2ZVNvdXJjZUVsZW1lbnQgKSApIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRjb25zdCBjdXJyZW50VmFsdWUgPSB0aGlzLnJlYWRWYWx1ZUZyb21Tb3VyY2VFbGVtZW50KCBsaXZlU291cmNlRWxlbWVudCApO1xuXHRcdFx0XHRcdFx0Y29uc3Qgc2VyaWFsaXplZCAgID0gSlNPTi5zdHJpbmdpZnkoIGN1cnJlbnRWYWx1ZSApO1xuXG5cdFx0XHRcdFx0XHRpZiAoIHNlcmlhbGl6ZWQgPT09IGxhc3RTZXJpYWxpemVkICkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGxhc3RTZXJpYWxpemVkID0gc2VyaWFsaXplZDtcblxuXHRcdFx0XHRcdFx0dGhpcy5oYW5kbGVGaWVsZENoYW5nZSggd2F0Y2hlcktleSwgZm9ybU5vZGUgKTtcblx0XHRcdFx0XHR9O1xuXG5cdFx0XHRcdFx0Ly8gXCJjbGlja1wiIGNhbiBmaXJlIGJlZm9yZSBjaGVja2VkIHN0YXRlIGlzIHVwZGF0ZWQgb24gY3VzdG9tIGNvbnRyb2xzLlxuXHRcdFx0XHRcdGlmICggZXZlbnQudHlwZSA9PT0gJ2NsaWNrJyApIHtcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoIHJ1biwgMCApO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJ1bigpO1xuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdGZvcm1Ob2RlLmFkZEV2ZW50TGlzdGVuZXIoICdjaGFuZ2UnLCBkb21IYW5kbGVyLCB0cnVlICk7XG5cdFx0XHRcdGZvcm1Ob2RlLmFkZEV2ZW50TGlzdGVuZXIoICdpbnB1dCcsIGRvbUhhbmRsZXIsIHRydWUgKTtcblx0XHRcdFx0Zm9ybU5vZGUuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgZG9tSGFuZGxlciwgdHJ1ZSApO1xuXG5cdFx0XHRcdGNvbnN0IGlzQXV0b2NvbXBsZXRlU291cmNlID0gdGhpcy5pc0F1dG9jb21wbGV0ZVNvdXJjZUVsZW1lbnQoIHNvdXJjZUVsZW1lbnQgKTtcblx0XHRcdFx0Y29uc3QgaXNDYWxjdWxhdGVkU291cmNlICAgPSB0aGlzLmlzQ2FsY3VsYXRlZFNvdXJjZUVsZW1lbnQoIHNvdXJjZUVsZW1lbnQgKTtcblx0XHRcdFx0bGV0ICRzb3VyY2VFbGVtZW50ICAgICAgICAgPSBudWxsO1xuXHRcdFx0XHRsZXQgc2VsZWN0MkhhbmRsZXIgICAgICAgICA9IG51bGw7XG5cdFx0XHRcdGxldCBjYWxjdWxhdGVkSGFuZGxlciAgICAgID0gbnVsbDtcblx0XHRcdFx0bGV0IGNhbGN1bGF0ZWROb2RlICAgICAgICAgPSBudWxsO1xuXHRcdFx0XHRsZXQgY2FsY3VsYXRlZE9ic2VydmVyICAgICA9IG51bGw7XG5cdFx0XHRcdGxldCBjYWxjdWxhdGVkTmF0aXZlSGFuZGxlciA9IG51bGw7XG5cblx0XHRcdFx0aWYgKCB3aW5kb3cualF1ZXJ5ICYmICggaXNBdXRvY29tcGxldGVTb3VyY2UgfHwgaXNDYWxjdWxhdGVkU291cmNlICkgKSB7XG5cdFx0XHRcdFx0Y29uc3QgbGl2ZVNvdXJjZUVsZW1lbnQgPSB0aGlzLmZpbmRFbGVtZW50SW5TY29wZSggc291cmNlRmllbGROYW1lLCByZXBlYXRlclJvdywgZm9ybU5vZGUgKTtcblx0XHRcdFx0XHRjb25zdCBzb3VyY2VOb2RlICAgICAgICA9IGlzQXV0b2NvbXBsZXRlU291cmNlXG5cdFx0XHRcdFx0XHQ/ICggbGl2ZVNvdXJjZUVsZW1lbnQ/Lm1hdGNoZXMoICdzZWxlY3QnIClcblx0XHRcdFx0XHRcdFx0PyBsaXZlU291cmNlRWxlbWVudFxuXHRcdFx0XHRcdFx0XHQ6IGxpdmVTb3VyY2VFbGVtZW50Py5xdWVyeVNlbGVjdG9yKCAnc2VsZWN0JyApIClcblx0XHRcdFx0XHRcdDogKCBsaXZlU291cmNlRWxlbWVudD8ubWF0Y2hlcyggJ2lucHV0LmpldC1mb3JtLWJ1aWxkZXJfX2NhbGN1bGF0ZWQtZmllbGQtaW5wdXQnIClcblx0XHRcdFx0XHRcdFx0PyBsaXZlU291cmNlRWxlbWVudFxuXHRcdFx0XHRcdFx0XHQ6IGxpdmVTb3VyY2VFbGVtZW50Py5xdWVyeVNlbGVjdG9yKCAnaW5wdXQuamV0LWZvcm0tYnVpbGRlcl9fY2FsY3VsYXRlZC1maWVsZC1pbnB1dCcgKSApO1xuXG5cdFx0XHRcdFx0aWYgKCBzb3VyY2VOb2RlICkge1xuXHRcdFx0XHRcdFx0JHNvdXJjZUVsZW1lbnQgPSB3aW5kb3cualF1ZXJ5KCBzb3VyY2VOb2RlICk7XG5cblx0XHRcdFx0XHRcdGlmICggaXNBdXRvY29tcGxldGVTb3VyY2UgKSB7XG5cdFx0XHRcdFx0XHRcdHNlbGVjdDJIYW5kbGVyID0gKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRoaXMucmVhZFZhbHVlRnJvbVNvdXJjZUVsZW1lbnQoIHNvdXJjZU5vZGUgKTtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCBzZXJpYWxpemVkICAgPSBKU09OLnN0cmluZ2lmeSggY3VycmVudFZhbHVlICk7XG5cblx0XHRcdFx0XHRcdFx0XHRpZiAoIHNlcmlhbGl6ZWQgPT09IGxhc3RTZXJpYWxpemVkICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGxhc3RTZXJpYWxpemVkID0gc2VyaWFsaXplZDtcblxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuaGFuZGxlRmllbGRDaGFuZ2UoIHdhdGNoZXJLZXksIGZvcm1Ob2RlICk7XG5cdFx0XHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHRcdFx0JHNvdXJjZUVsZW1lbnQub24oICdzZWxlY3QyOnNlbGVjdCBzZWxlY3QyOnVuc2VsZWN0Jywgc2VsZWN0MkhhbmRsZXIgKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aWYgKCBpc0NhbGN1bGF0ZWRTb3VyY2UgKSB7XG5cdFx0XHRcdFx0XHRcdGNhbGN1bGF0ZWROb2RlID0gc291cmNlTm9kZTtcblx0XHRcdFx0XHRcdFx0Y2FsY3VsYXRlZEhhbmRsZXIgPSAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgY3VycmVudFZhbHVlID0gdGhpcy5yZWFkVmFsdWVGcm9tU291cmNlRWxlbWVudCggc291cmNlTm9kZSApO1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHNlcmlhbGl6ZWQgICA9IEpTT04uc3RyaW5naWZ5KCBjdXJyZW50VmFsdWUgKTtcblxuXHRcdFx0XHRcdFx0XHRcdGlmICggc2VyaWFsaXplZCA9PT0gbGFzdFNlcmlhbGl6ZWQgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0bGFzdFNlcmlhbGl6ZWQgPSBzZXJpYWxpemVkO1xuXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5oYW5kbGVGaWVsZENoYW5nZSggd2F0Y2hlcktleSwgZm9ybU5vZGUgKTtcblx0XHRcdFx0XHRcdFx0fTtcblxuXHRcdFx0XHRcdFx0XHQkc291cmNlRWxlbWVudC5vbiggJ2NoYW5nZScsIGNhbGN1bGF0ZWRIYW5kbGVyICk7XG5cblx0XHRcdFx0XHRcdFx0Y2FsY3VsYXRlZE5hdGl2ZUhhbmRsZXIgPSBjYWxjdWxhdGVkSGFuZGxlcjtcblx0XHRcdFx0XHRcdFx0c291cmNlTm9kZS5hZGRFdmVudExpc3RlbmVyKCAnY2hhbmdlJywgY2FsY3VsYXRlZE5hdGl2ZUhhbmRsZXIgKTtcblx0XHRcdFx0XHRcdFx0c291cmNlTm9kZS5hZGRFdmVudExpc3RlbmVyKCAnaW5wdXQnLCBjYWxjdWxhdGVkTmF0aXZlSGFuZGxlciApO1xuXG5cdFx0XHRcdFx0XHRcdGNvbnN0IGNhbGN1bGF0ZWRXcmFwcGVyID0gc291cmNlTm9kZS5jbG9zZXN0KCAnLmpldC1mb3JtLWJ1aWxkZXJfX2NhbGN1bGF0ZWQtZmllbGQnICk7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IGNhbGN1bGF0ZWRWYWx1ZU5vZGUgPSBjYWxjdWxhdGVkV3JhcHBlcj8ucXVlcnlTZWxlY3RvciggJy5qZXQtZm9ybS1idWlsZGVyX19jYWxjdWxhdGVkLWZpZWxkLXZhbCcgKTtcblxuXHRcdFx0XHRcdFx0XHRpZiAoIGNhbGN1bGF0ZWRWYWx1ZU5vZGUgJiYgd2luZG93Lk11dGF0aW9uT2JzZXJ2ZXIgKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y2FsY3VsYXRlZE9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoICgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGNhbGN1bGF0ZWRIYW5kbGVyKCk7XG5cdFx0XHRcdFx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdFx0XHRcdFx0Y2FsY3VsYXRlZE9ic2VydmVyLm9ic2VydmUoIGNhbGN1bGF0ZWRWYWx1ZU5vZGUsIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNoaWxkTGlzdDogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0XHRcdGNoYXJhY3RlckRhdGE6IHRydWUsXG5cdFx0XHRcdFx0XHRcdFx0XHRzdWJ0cmVlOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHVud2F0Y2ggPSAoKSA9PiB7XG5cdFx0XHRcdFx0Zm9ybU5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2NoYW5nZScsIGRvbUhhbmRsZXIsIHRydWUgKTtcblx0XHRcdFx0XHRmb3JtTm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCAnaW5wdXQnLCBkb21IYW5kbGVyLCB0cnVlICk7XG5cdFx0XHRcdFx0Zm9ybU5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgZG9tSGFuZGxlciwgdHJ1ZSApO1xuXG5cdFx0XHRcdFx0aWYgKCAkc291cmNlRWxlbWVudCAmJiBzZWxlY3QySGFuZGxlciApIHtcblx0XHRcdFx0XHRcdCRzb3VyY2VFbGVtZW50Lm9mZiggJ3NlbGVjdDI6c2VsZWN0IHNlbGVjdDI6dW5zZWxlY3QnLCBzZWxlY3QySGFuZGxlciApO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICggJHNvdXJjZUVsZW1lbnQgJiYgY2FsY3VsYXRlZEhhbmRsZXIgKSB7XG5cdFx0XHRcdFx0XHQkc291cmNlRWxlbWVudC5vZmYoICdjaGFuZ2UnLCBjYWxjdWxhdGVkSGFuZGxlciApO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICggY2FsY3VsYXRlZE5vZGUgJiYgY2FsY3VsYXRlZE5hdGl2ZUhhbmRsZXIgKSB7XG5cdFx0XHRcdFx0XHRjYWxjdWxhdGVkTm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCAnY2hhbmdlJywgY2FsY3VsYXRlZE5hdGl2ZUhhbmRsZXIgKTtcblx0XHRcdFx0XHRcdGNhbGN1bGF0ZWROb2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdpbnB1dCcsIGNhbGN1bGF0ZWROYXRpdmVIYW5kbGVyICk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKCBjYWxjdWxhdGVkT2JzZXJ2ZXIgKSB7XG5cdFx0XHRcdFx0XHRjYWxjdWxhdGVkT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHVud2F0Y2ggPSBzb3VyY2VJbnB1dC52YWx1ZS53YXRjaCggKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuaGFuZGxlRmllbGRDaGFuZ2UoIHdhdGNoZXJLZXksIGZvcm1Ob2RlICk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdH1cblxuXHRcdFx0d2F0Y2hlciA9IHtcblx0XHRcdFx0dW53YXRjaCxcblx0XHRcdFx0ZGVwZW5kZW50czogW10sXG5cdFx0XHR9O1xuXG5cdFx0XHR0aGlzLndhdGNoZXJzLnNldCggd2F0Y2hlcktleSwgd2F0Y2hlciApO1xuXHRcdH1cblxuXHRcdGlmICggISB3YXRjaGVyLmRlcGVuZGVudHMuaW5jbHVkZXMoIHRhcmdldEZpZWxkTmFtZSApICkge1xuXHRcdFx0d2F0Y2hlci5kZXBlbmRlbnRzLnB1c2goIHRhcmdldEZpZWxkTmFtZSApO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBXYXRjaCBhbGwgZmllbGRzIGluIGZvcm0gZm9yIGNoYW5nZXMuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSAgICAgIHRhcmdldEZpZWxkTmFtZSBGaWVsZCBuYW1lIHRvIHVwZGF0ZS5cblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZm9ybU5vZGUgICAgICAgIEZvcm0gZWxlbWVudC5cblx0ICovXG5cdHdhdGNoQWxsRmllbGRzKCB0YXJnZXRGaWVsZE5hbWUsIGZvcm1Ob2RlICkge1xuXHRcdGNvbnN0IGFsbElucHV0cyA9IHdpbmRvdy5KZXRGb3JtQnVpbGRlck1haW4/LmlucHV0RGF0YT8uZ2V0QWxsKCBmb3JtTm9kZSApID8/IFtdO1xuXG5cdFx0YWxsSW5wdXRzLmZvckVhY2goICggaW5wdXQgKSA9PiB7XG5cdFx0XHRjb25zdCBmaWVsZE5hbWUgPSBpbnB1dC5uYW1lO1xuXG5cdFx0XHRpZiAoIGZpZWxkTmFtZSA9PT0gdGFyZ2V0RmllbGROYW1lICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMud2F0Y2hGaWVsZCggZmllbGROYW1lLCB0YXJnZXRGaWVsZE5hbWUsIGZvcm1Ob2RlICk7XG5cdFx0fSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIFdhdGNoIGFuIGFjdGlvbiBidXR0b24gZm9yIGNsaWNrcyB0byB0cmlnZ2VyIGFuIHVwZGF0ZS5cblx0ICpcblx0ICogQWN0aW9uIGJ1dHRvbnMgKGpldC1mb3Jtcy9zdWJtaXQtZmllbGQpIGFyZSBpZGVudGlmaWVkIGJ5IHRoZWlyIGFjdGlvbl90eXBlLFxuXHQgKiB3aGljaCBpcyByZW5kZXJlZCBhcyBkYXRhLXR5cGUgb24gdGhlIHdyYXBwZXIgZGl2LiBUaGUgPGJ1dHRvbj4gZWxlbWVudFxuXHQgKiBpdHNlbGYgaXMgZm91bmQgaW5zaWRlIHRoYXQgd3JhcHBlci5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9ICAgICAgYWN0aW9uVHlwZSAgICAgVmFsdWUgb2YgYWN0aW9uX3R5cGUgKGUuZy4gXCJuZXh0XCIsIFwicHJldlwiKS5cblx0ICogQHBhcmFtIHtzdHJpbmd9ICAgICAgdGFyZ2V0RmllbGRLZXkgS2V5IG9mIHRoZSBmaWVsZCB0byB1cGRhdGUuXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGZvcm1Ob2RlICAgICAgIEZvcm0gZWxlbWVudC5cblx0ICovXG5cdHdhdGNoQnV0dG9uKCBhY3Rpb25UeXBlLCB0YXJnZXRGaWVsZEtleSwgZm9ybU5vZGUgKSB7XG5cdFx0Y29uc3QgdGFyZ2V0RmllbGQgPSB0aGlzLmF1dG9VcGRhdGVGaWVsZHMuZ2V0KCB0YXJnZXRGaWVsZEtleSApO1xuXHRcdGNvbnN0IGJ1dHRvbkNsYXNzID0gdGFyZ2V0RmllbGQ/LmNvbmZpZz8udXBkYXRlT25CdXR0b25DbGFzcyB8fCAnJztcblx0XHRjb25zdCBsaXN0ZW5lcktleSA9IGAkeyBhY3Rpb25UeXBlIH06OiR7IGJ1dHRvbkNsYXNzIH06OiR7IHRhcmdldEZpZWxkS2V5IH1gO1xuXG5cdFx0aWYgKCB0aGlzLmJ1dHRvbkxpc3RlbmVycy5oYXMoIGxpc3RlbmVyS2V5ICkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgdGFyZ2V0RWxlbWVudCA9IHRhcmdldEZpZWxkPy5lbGVtZW50IHx8IG51bGw7XG5cdFx0Y29uc3QgdGFyZ2V0UGFnZSAgICA9IHRhcmdldEVsZW1lbnQ/LmNsb3Nlc3QoICcuamV0LWZvcm0tYnVpbGRlci1wYWdlJyApIHx8IG51bGw7XG5cdFx0Y29uc3QgdGFyZ2V0U2NvcGVTZWxlY3RvcnMgPSBbXTtcblxuXHRcdGlmICggdGFyZ2V0UGFnZSApIHtcblx0XHRcdGNvbnN0IHBhZ2VOdW1iZXIgPSBwYXJzZUludCggdGFyZ2V0UGFnZS5kYXRhc2V0LnBhZ2UgKSB8fCAwO1xuXG5cdFx0XHRpZiAoICduZXh0JyA9PT0gYWN0aW9uVHlwZSAmJiBwYWdlTnVtYmVyID4gMSApIHtcblx0XHRcdFx0dGFyZ2V0U2NvcGVTZWxlY3RvcnMucHVzaChcblx0XHRcdFx0XHRgLmpldC1mb3JtLWJ1aWxkZXItcGFnZVtkYXRhLXBhZ2U9XCIkeyBwYWdlTnVtYmVyIC0gMSB9XCJdIC5qZXQtZm9ybS1idWlsZGVyX19hY3Rpb24tYnV0dG9uLXdyYXBwZXJbZGF0YS10eXBlPVwiJHsgYWN0aW9uVHlwZSB9XCJdYFxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIGlmICggJ3ByZXYnID09PSBhY3Rpb25UeXBlICYmIHBhZ2VOdW1iZXIgPiAwICkge1xuXHRcdFx0XHR0YXJnZXRTY29wZVNlbGVjdG9ycy5wdXNoKFxuXHRcdFx0XHRcdGAuamV0LWZvcm0tYnVpbGRlci1wYWdlW2RhdGEtcGFnZT1cIiR7IHBhZ2VOdW1iZXIgKyAxIH1cIl0gLmpldC1mb3JtLWJ1aWxkZXJfX2FjdGlvbi1idXR0b24td3JhcHBlcltkYXRhLXR5cGU9XCIkeyBhY3Rpb25UeXBlIH1cIl1gXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdHRhcmdldFNjb3BlU2VsZWN0b3JzLnB1c2goXG5cdFx0XHRcdGAuamV0LWZvcm0tYnVpbGRlci1wYWdlW2RhdGEtcGFnZT1cIiR7IHRhcmdldFBhZ2UuZGF0YXNldC5wYWdlIH1cIl0gLmpldC1mb3JtLWJ1aWxkZXJfX2FjdGlvbi1idXR0b24td3JhcHBlcltkYXRhLXR5cGU9XCIkeyBhY3Rpb25UeXBlIH1cIl1gXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHRhcmdldFNjb3BlU2VsZWN0b3JzLnB1c2goXG5cdFx0XHRgLmpldC1mb3JtLWJ1aWxkZXJfX2FjdGlvbi1idXR0b24td3JhcHBlcltkYXRhLXR5cGU9XCIkeyBhY3Rpb25UeXBlIH1cIl1gXG5cdFx0KTtcblxuXHRcdGNvbnN0IHdyYXBwZXIgPSB0aGlzLmZpbmRBY3Rpb25CdXR0b25XcmFwcGVyKFxuXHRcdFx0dGFyZ2V0U2NvcGVTZWxlY3RvcnMsXG5cdFx0XHRidXR0b25DbGFzcyxcblx0XHRcdGZvcm1Ob2RlXG5cdFx0KTtcblxuXHRcdGNvbnN0IGJ1dHRvbkVsZW1lbnQgPSB3cmFwcGVyID8gd3JhcHBlci5xdWVyeVNlbGVjdG9yKCAnYnV0dG9uJyApIDogbnVsbDtcblxuXHRcdGlmICggISBidXR0b25FbGVtZW50ICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGxldCBpc1Byb2Nlc3NpbmcgPSBmYWxzZTtcblxuXHRcdGNvbnN0IGhhbmRsZXIgPSBhc3luYyAoIGV2ZW50ICkgPT4ge1xuXHRcdFx0Ly8gSWdub3JlIHByb2dyYW1tYXRpYyByZS1jbGlja3MgdHJpZ2dlcmVkIGFmdGVyIHByZS11cGRhdGUuXG5cdFx0XHRpZiAoICEgZXZlbnQuaXNUcnVzdGVkICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIERyb3AgcmVwZWF0ZWQgY2xpY2tzIHdoaWxlIHVwZGF0ZSBpcyBpbiBmbGlnaHQuXG5cdFx0XHRpZiAoIGlzUHJvY2Vzc2luZyApIHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0aXNQcm9jZXNzaW5nID0gdHJ1ZTtcblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YXdhaXQgdGhpcy51cGRhdGVGaWVsZCggdGFyZ2V0RmllbGRLZXksIGZvcm1Ob2RlICk7XG5cdFx0XHR9IGNhdGNoICggZXJyb3IgKSB7XG5cdFx0XHRcdC8vIFNhZmV0eSBuZXQ6IG5ldmVyIGJsb2NrIG9yaWdpbmFsIGJ1dHRvbiBhY3Rpb24gYmVjYXVzZSBvZiBiYWQgY29uZmlnL3N0YXRlLlxuXHRcdFx0fSBmaW5hbGx5IHtcblx0XHRcdFx0aXNQcm9jZXNzaW5nID0gZmFsc2U7XG5cdFx0XHRcdGJ1dHRvbkVsZW1lbnQuY2xpY2soKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0YnV0dG9uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBoYW5kbGVyICk7XG5cdFx0dGhpcy5idXR0b25MaXN0ZW5lcnMuc2V0KCBsaXN0ZW5lcktleSwgeyBlbGVtZW50OiBidXR0b25FbGVtZW50LCBoYW5kbGVyIH0gKTtcblx0fVxuXG5cdG5vcm1hbGl6ZUJ1dHRvbkNsYXNzTmFtZXMoIGJ1dHRvbkNsYXNzICkge1xuXHRcdHJldHVybiAoIGJ1dHRvbkNsYXNzIHx8ICcnIClcblx0XHRcdC5zcGxpdCggL1xccysvIClcblx0XHRcdC5tYXAoICggdG9rZW4gKSA9PiB0b2tlbi50cmltKCkucmVwbGFjZSggL15cXC4vLCAnJyApIClcblx0XHRcdC5maWx0ZXIoIEJvb2xlYW4gKTtcblx0fVxuXG5cdGZpbmRBY3Rpb25CdXR0b25XcmFwcGVyKCBzZWxlY3RvcnMsIGJ1dHRvbkNsYXNzLCBmb3JtTm9kZSApIHtcblx0XHRjb25zdCBjbGFzc05hbWVzID0gdGhpcy5ub3JtYWxpemVCdXR0b25DbGFzc05hbWVzKCBidXR0b25DbGFzcyApO1xuXG5cdFx0aWYgKCBjbGFzc05hbWVzLmxlbmd0aCApIHtcblx0XHRcdGZvciAoIGNvbnN0IHNlbGVjdG9yIG9mIHNlbGVjdG9ycyApIHtcblx0XHRcdFx0Y29uc3Qgd3JhcHBlcnMgPSBBcnJheS5mcm9tKCBmb3JtTm9kZS5xdWVyeVNlbGVjdG9yQWxsKCBzZWxlY3RvciApICk7XG5cdFx0XHRcdGNvbnN0IGV4YWN0V3JhcHBlciA9IHdyYXBwZXJzLmZpbmQoICggY3VycmVudFdyYXBwZXIgKSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgYnV0dG9uID0gY3VycmVudFdyYXBwZXIucXVlcnlTZWxlY3RvciggJ2J1dHRvbicgKTtcblxuXHRcdFx0XHRcdGlmICggISBidXR0b24gKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmV0dXJuIGNsYXNzTmFtZXMuZXZlcnkoXG5cdFx0XHRcdFx0XHQoIGNsYXNzTmFtZSApID0+IGJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoIGNsYXNzTmFtZSApXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdGlmICggZXhhY3RXcmFwcGVyICkge1xuXHRcdFx0XHRcdHJldHVybiBleGFjdFdyYXBwZXI7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRmb3IgKCBjb25zdCBzZWxlY3RvciBvZiBzZWxlY3RvcnMgKSB7XG5cdFx0XHRjb25zdCB3cmFwcGVyID0gZm9ybU5vZGUucXVlcnlTZWxlY3Rvciggc2VsZWN0b3IgKTtcblxuXHRcdFx0aWYgKCB3cmFwcGVyICkge1xuXHRcdFx0XHRyZXR1cm4gd3JhcHBlcjtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGUgZmllbGQgY2hhbmdlIGV2ZW50LlxuXHQgKiBUcmlnZ2VycyB1cGRhdGUgZm9yIGFsbCBkZXBlbmRlbnQgZmllbGRzIHdpdGggZGVib3VuY2luZy5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9ICAgICAgc291cmNlRmllbGROYW1lIENoYW5nZWQgZmllbGQgbmFtZS5cblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZm9ybU5vZGUgICAgICAgIEZvcm0gZWxlbWVudC5cblx0ICovXG5cdGhhbmRsZUZpZWxkQ2hhbmdlKCBzb3VyY2VGaWVsZE5hbWUsIGZvcm1Ob2RlICkge1xuXHRcdGNvbnN0IHdhdGNoZXIgPSB0aGlzLndhdGNoZXJzLmdldCggc291cmNlRmllbGROYW1lICk7XG5cblx0XHRpZiAoICEgd2F0Y2hlciB8fCAhIHdhdGNoZXIuZGVwZW5kZW50cy5sZW5ndGggKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0d2F0Y2hlci5kZXBlbmRlbnRzLmZvckVhY2goICggdGFyZ2V0RmllbGROYW1lICkgPT4ge1xuXHRcdFx0Y29uc3QgZmllbGREYXRhID0gdGhpcy5hdXRvVXBkYXRlRmllbGRzLmdldCggdGFyZ2V0RmllbGROYW1lICk7XG5cdFx0XHRjb25zdCBjb25maWcgICAgPSBmaWVsZERhdGE/LmNvbmZpZztcblxuXHRcdFx0Ly8gU2tpcCBhdXRvLXVwZGF0ZSBpZiB0aGlzIGZpZWxkIHVzZXMgYSBidXR0b24gdHJpZ2dlci5cblx0XHRcdGlmICggY29uZmlnPy51cGRhdGVPbkJ1dHRvbiApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiBcIlJlcXVpcmUgQWxsIEZpZWxkcyBGaWxsZWRcIiBpcyBvbiBhbmQgYW55IGxpc3RlblRvIGZpZWxkIGlzIG5vd1xuXHRcdFx0Ly8gZW1wdHksIGNsZWFyIHRoZSBkZXBlbmRlbnQgZmllbGQncyBvcHRpb25zIGltbWVkaWF0ZWx5LlxuXHRcdFx0aWYgKCBjb25maWc/LnJlcXVpcmVBbGxGaWxsZWQgKSB7XG5cdFx0XHRcdGNvbnN0IGNvbnRleHQgICA9IHRoaXMuY29sbGVjdENvbnRleHQoIGNvbmZpZywgZm9ybU5vZGUgKTtcblx0XHRcdFx0Y29uc3QgYWxsRmlsbGVkID0gY29uZmlnLmxpc3RlblRvLmV2ZXJ5KFxuXHRcdFx0XHRcdCggZmllbGROYW1lICkgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3QgdmFsID0gY29udGV4dFsgZmllbGROYW1lIF07XG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5pc0NvbnRleHRWYWx1ZUZpbGxlZCggdmFsICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdGlmICggISBhbGxGaWxsZWQgKSB7XG5cdFx0XHRcdFx0aWYgKCB0aGlzLnNob3VsZENsZWFyT25FbXB0eUNvbnRleHQoIGNvbmZpZyApICkge1xuXHRcdFx0XHRcdFx0dGhpcy5hYm9ydFByZXZpb3VzUmVxdWVzdCggdGFyZ2V0RmllbGROYW1lICk7XG5cdFx0XHRcdFx0XHQvLyBLZWVwIGNhY2hlIGVudHJpZXMgc28gcmUtZW50ZXJpbmcgdGhlIHNhbWUgY29udGV4dCBjYW4gcmV1c2UgVFRMIGNhY2hlLlxuXHRcdFx0XHRcdFx0dGhpcy5vcHRpb25zVXBkYXRlci51cGRhdGVPcHRpb25zKCBmaWVsZERhdGEuZWxlbWVudCwgW10sIGZvcm1Ob2RlICk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMuZGVib3VuY2VkVXBkYXRlKCB0YXJnZXRGaWVsZE5hbWUsIGZvcm1Ob2RlICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmRlYm91bmNlZFVwZGF0ZSggdGFyZ2V0RmllbGROYW1lLCBmb3JtTm9kZSApO1xuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBEZWJvdW5jZWQgdXBkYXRlIGZvciB0YXJnZXQgZmllbGQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSAgICAgIHRhcmdldEZpZWxkTmFtZSBGaWVsZCB0byB1cGRhdGUuXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGZvcm1Ob2RlICAgICAgICBGb3JtIGVsZW1lbnQuXG5cdCAqL1xuXHRkZWJvdW5jZWRVcGRhdGUoIHRhcmdldEZpZWxkTmFtZSwgZm9ybU5vZGUgKSB7XG5cdFx0Y2xlYXJUaW1lb3V0KCB0aGlzLmRlYm91bmNlVGltZXJzLmdldCggdGFyZ2V0RmllbGROYW1lICkgKTtcblxuXHRcdGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCggKCkgPT4ge1xuXHRcdFx0dGhpcy51cGRhdGVGaWVsZCggdGFyZ2V0RmllbGROYW1lLCBmb3JtTm9kZSApO1xuXHRcdFx0dGhpcy5kZWJvdW5jZVRpbWVycy5kZWxldGUoIHRhcmdldEZpZWxkTmFtZSApO1xuXHRcdH0sIHRoaXMuZGVib3VuY2VEZWxheSApO1xuXG5cdFx0dGhpcy5kZWJvdW5jZVRpbWVycy5zZXQoIHRhcmdldEZpZWxkTmFtZSwgdGltZXIgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgSkZCIGZvcm0ncyBsb2NrU3RhdGUgcmVhY3RpdmUgdmFyLlxuXHQgKiBCbG9ja3MgbXVsdGktc3RlcCBwYWdlIHRyYW5zaXRpb25zIHdoaWxlIGFueSBnZW5lcmF0b3IgdXBkYXRlIGlzIHBlbmRpbmcuXG5cdCAqXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGZvcm1Ob2RlIEZvcm0gZWxlbWVudC5cblx0ICogQHJldHVybiB7T2JqZWN0fG51bGx9IExvYWRpbmdSZWFjdGl2ZVZhciBvciBudWxsLlxuXHQgKi9cblx0Z2V0TG9ja1N0YXRlKCBmb3JtTm9kZSApIHtcblx0XHRjb25zdCBmb3JtSWQgPSBmb3JtTm9kZT8uZGF0YXNldD8uZm9ybUlkO1xuXG5cdFx0aWYgKCAhIGZvcm1JZCB8fCAhIHdpbmRvdy5KZXRGb3JtQnVpbGRlcj8uWyBmb3JtSWQgXSApIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdHJldHVybiB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJbIGZvcm1JZCBdPy5nZXRTdWJtaXQ/LigpPy5sb2NrU3RhdGUgPz8gbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbmNyZW1lbnQgdGhlIGxvYWRpbmcgY291bnRlciBmb3IgYSBmb3JtIGFuZCBsb2NrIGlmIGZpcnN0IHJlcXVlc3QuXG5cdCAqXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGZvcm1Ob2RlIEZvcm0gZWxlbWVudC5cblx0ICovXG5cdGxvY2tGb3JtTG9hZGluZyggZm9ybU5vZGUgKSB7XG5cdFx0Y29uc3QgZm9ybUlkID0gZm9ybU5vZGU/LmRhdGFzZXQ/LmZvcm1JZDtcblxuXHRcdGlmICggISBmb3JtSWQgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgY291bnQgPSAoIHRoaXMubG9hZGluZ0NvdW50cy5nZXQoIGZvcm1JZCApID8/IDAgKSArIDE7XG5cdFx0dGhpcy5sb2FkaW5nQ291bnRzLnNldCggZm9ybUlkLCBjb3VudCApO1xuXG5cdFx0aWYgKCBjb3VudCA9PT0gMSApIHtcblx0XHRcdHRoaXMuZ2V0TG9ja1N0YXRlKCBmb3JtTm9kZSApPy5zdGFydCgpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBEZWNyZW1lbnQgdGhlIGxvYWRpbmcgY291bnRlciBmb3IgYSBmb3JtIGFuZCB1bmxvY2sgd2hlbiBhbGwgcmVxdWVzdHMgZmluaXNoLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBmb3JtTm9kZSBGb3JtIGVsZW1lbnQuXG5cdCAqL1xuXHR1bmxvY2tGb3JtTG9hZGluZyggZm9ybU5vZGUgKSB7XG5cdFx0Y29uc3QgZm9ybUlkID0gZm9ybU5vZGU/LmRhdGFzZXQ/LmZvcm1JZDtcblxuXHRcdGlmICggISBmb3JtSWQgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgY291bnQgPSBNYXRoLm1heCggMCwgKCB0aGlzLmxvYWRpbmdDb3VudHMuZ2V0KCBmb3JtSWQgKSA/PyAwICkgLSAxICk7XG5cdFx0dGhpcy5sb2FkaW5nQ291bnRzLnNldCggZm9ybUlkLCBjb3VudCApO1xuXG5cdFx0aWYgKCBjb3VudCA9PT0gMCApIHtcblx0XHRcdHRoaXMuZ2V0TG9ja1N0YXRlKCBmb3JtTm9kZSApPy5lbmQoKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogVXBkYXRlIG9wdGlvbnMgZm9yIGEgZmllbGQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSAgICAgIHRhcmdldEZpZWxkTmFtZSBGaWVsZCB0byB1cGRhdGUuXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGZvcm1Ob2RlICAgICAgICBGb3JtIGVsZW1lbnQuXG5cdCAqL1xuXHRhc3luYyB1cGRhdGVGaWVsZCggdGFyZ2V0RmllbGROYW1lLCBmb3JtTm9kZSApIHtcblx0XHRjb25zdCBmaWVsZERhdGEgPSB0aGlzLmF1dG9VcGRhdGVGaWVsZHMuZ2V0KCB0YXJnZXRGaWVsZE5hbWUgKTtcblxuXHRcdGlmICggISBmaWVsZERhdGEgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgeyBlbGVtZW50LCBjb25maWcgfSA9IGZpZWxkRGF0YTtcblxuXHRcdGNvbnN0IGNvbnRleHQgPSB0aGlzLmNvbGxlY3RDb250ZXh0KCBjb25maWcsIGZvcm1Ob2RlICk7XG5cdFx0Y29uc3QgY29udGV4dEtleSAgPSB0aGlzLmJ1aWxkQ29udGV4dE1lbW9yeUtleSggY29uZmlnICk7XG5cdFx0Y29uc3QgY29udGV4dEhhc2ggPSB0aGlzLnNlcmlhbGl6ZUNvbnRleHQoIGNvbnRleHQgKTtcblxuXHRcdHRoaXMubGFzdENvbnRleHRIYXNoZXMuc2V0KCBjb250ZXh0S2V5LCBjb250ZXh0SGFzaCApO1xuXG5cdFx0Y29uc3QgY2FjaGVkT3B0aW9ucyA9IHRoaXMuY2FjaGVNYW5hZ2VyLmdldChcblx0XHRcdGNvbmZpZy5nZW5lcmF0b3JJZCxcblx0XHRcdGNvbnRleHQsXG5cdFx0XHRjb25maWcuY2FjaGVUaW1lb3V0LFxuXHRcdFx0Y29uZmlnLmZpZWxkTmFtZVxuXHRcdCk7XG5cblx0XHRpZiAoIGNhY2hlZE9wdGlvbnMgKSB7XG5cdFx0XHR0aGlzLm9wdGlvbnNVcGRhdGVyLnVwZGF0ZU9wdGlvbnMoIGVsZW1lbnQsIGNhY2hlZE9wdGlvbnMsIGZvcm1Ob2RlICk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5hYm9ydFByZXZpb3VzUmVxdWVzdCggdGFyZ2V0RmllbGROYW1lICk7XG5cblx0XHRjb25zdCBhYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG5cdFx0dGhpcy5hYm9ydENvbnRyb2xsZXJzLnNldCggdGFyZ2V0RmllbGROYW1lLCBhYm9ydENvbnRyb2xsZXIgKTtcblxuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLm9wdGlvbnNVcGRhdGVyLnNldExvYWRpbmdTdGF0ZSggZWxlbWVudCwgdHJ1ZSApO1xuXHRcdFx0dGhpcy5sb2NrRm9ybUxvYWRpbmcoIGZvcm1Ob2RlICk7XG5cblx0XHRcdGNvbnN0IG9wdGlvbnMgPSBhd2FpdCB0aGlzLmZldGNoT3B0aW9ucyggY29uZmlnLCBjb250ZXh0LCBhYm9ydENvbnRyb2xsZXIuc2lnbmFsICk7XG5cblx0XHRcdHRoaXMuY2FjaGVNYW5hZ2VyLnNldCggY29uZmlnLmdlbmVyYXRvcklkLCBjb250ZXh0LCBvcHRpb25zLCBjb25maWcuZmllbGROYW1lICk7XG5cdFx0XHR0aGlzLm9wdGlvbnNVcGRhdGVyLnVwZGF0ZU9wdGlvbnMoIGVsZW1lbnQsIG9wdGlvbnMsIGZvcm1Ob2RlICk7XG5cdFx0fSBjYXRjaCAoIGVycm9yICkge1xuXHRcdFx0aWYgKCBlcnJvci5uYW1lICE9PSAnQWJvcnRFcnJvcicgKSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoICdbSkZCIEF1dG8tVXBkYXRlXSBVcGRhdGUgZmFpbGVkOicsIGVycm9yICk7XG5cdFx0XHRcdHRoaXMub3B0aW9uc1VwZGF0ZXIuc2V0RXJyb3JTdGF0ZSggZWxlbWVudCwgZXJyb3IubWVzc2FnZSApO1xuXHRcdFx0fVxuXHRcdH0gZmluYWxseSB7XG5cdFx0XHR0aGlzLm9wdGlvbnNVcGRhdGVyLnNldExvYWRpbmdTdGF0ZSggZWxlbWVudCwgZmFsc2UgKTtcblx0XHRcdHRoaXMudW5sb2NrRm9ybUxvYWRpbmcoIGZvcm1Ob2RlICk7XG5cdFx0XHR0aGlzLmFib3J0Q29udHJvbGxlcnMuZGVsZXRlKCB0YXJnZXRGaWVsZE5hbWUgKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQ29sbGVjdCBjb250ZXh0IHZhbHVlcyBmcm9tIGZvcm0gZmllbGRzLlxuXHQgKlxuXHQgKiBXaGVuIHRoZSB0YXJnZXQgZmllbGQgbGl2ZXMgaW5zaWRlIGEgcmVwZWF0ZXIgcm93LCBzb3VyY2UgZmllbGRzIGFyZVxuXHQgKiByZXNvbHZlZCB3aXRoaW4gdGhlIHNhbWUgcm93IGZpcnN0IHNvIGVhY2ggcm93IGhhcyBpdHMgb3duIGNvbnRleHQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSAgICAgIGNvbmZpZyAgIEZpZWxkIGNvbmZpZ3VyYXRpb24uXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGZvcm1Ob2RlIEZvcm0gZWxlbWVudC5cblx0ICpcblx0ICogQHJldHVybiB7T2JqZWN0fSBDb250ZXh0IG9iamVjdCB3aXRoIGZpZWxkIHZhbHVlcy5cblx0ICovXG5cdGNvbGxlY3RDb250ZXh0KCBjb25maWcsIGZvcm1Ob2RlICkge1xuXHRcdGNvbnN0IGNvbnRleHQgPSB7fTtcblxuXHRcdGNvbnN0IGxvb2t1cEtleSAgICAgPSBjb25maWcuZmllbGRLZXkgfHwgY29uZmlnLmZpZWxkTmFtZTtcblx0XHRjb25zdCBmaWVsZERhdGEgICAgID0gdGhpcy5hdXRvVXBkYXRlRmllbGRzLmdldCggbG9va3VwS2V5ICk7XG5cdFx0Y29uc3QgdGFyZ2V0RWxlbWVudCA9IGZpZWxkRGF0YT8uZWxlbWVudCB8fCBudWxsO1xuXHRcdGNvbnN0IHJlcGVhdGVyUm93ICAgPSB0YXJnZXRFbGVtZW50ID8gdGFyZ2V0RWxlbWVudC5jbG9zZXN0KCAnLmpldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXJfX3JvdycgKSA6IG51bGw7XG5cblx0XHRpZiAoIGNvbmZpZy5saXN0ZW5UbyAmJiBBcnJheS5pc0FycmF5KCBjb25maWcubGlzdGVuVG8gKSApIHtcblx0XHRcdGNvbmZpZy5saXN0ZW5Uby5mb3JFYWNoKCAoIHNvdXJjZUZpZWxkTmFtZSApID0+IHtcblx0XHRcdFx0Y29uc3Qgc291cmNlRWxlbWVudCA9IHRoaXMuZmluZEVsZW1lbnRJblNjb3BlKCBzb3VyY2VGaWVsZE5hbWUsIHJlcGVhdGVyUm93LCBmb3JtTm9kZSApO1xuXG5cdFx0XHRcdGlmICggc291cmNlRWxlbWVudCApIHtcblx0XHRcdFx0XHRjb25zdCBhY3R1YWxOYW1lID0gdGhpcy5yZXNvbHZlQWN0dWFsTmFtZSggc291cmNlRWxlbWVudCwgc291cmNlRmllbGROYW1lICk7XG5cdFx0XHRcdFx0bGV0IGlucHV0ID0gbnVsbDtcblxuXHRcdFx0XHRcdGlmICggd2luZG93LkpldEZvcm1CdWlsZGVyTWFpbj8uaW5wdXREYXRhICkge1xuXHRcdFx0XHRcdFx0aW5wdXQgPSB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJNYWluLmlucHV0RGF0YS5maW5kSW5wdXQ/LiggYWN0dWFsTmFtZSwgZm9ybU5vZGUgKSB8fFxuXHRcdFx0XHRcdFx0ICAgICAgICB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJNYWluLmlucHV0RGF0YS5maW5kSW5wdXQ/Liggc291cmNlRmllbGROYW1lLCBmb3JtTm9kZSApIHx8XG5cdFx0XHRcdFx0XHQgICAgICAgIHdpbmRvdy5KZXRGb3JtQnVpbGRlck1haW4uaW5wdXREYXRhLmdldElucHV0Py4oIGFjdHVhbE5hbWUsIGZvcm1Ob2RlICkgfHxcblx0XHRcdFx0XHRcdCAgICAgICAgd2luZG93LkpldEZvcm1CdWlsZGVyTWFpbi5pbnB1dERhdGEuZ2V0SW5wdXQ/Liggc291cmNlRmllbGROYW1lLCBmb3JtTm9kZSApO1xuXG5cdFx0XHRcdFx0XHRpZiAoICEgaW5wdXQgJiYgd2luZG93LkpldEZvcm1CdWlsZGVyTWFpbi5pbnB1dERhdGEuZ2V0QWxsICkge1xuXHRcdFx0XHRcdFx0XHRjb25zdCBhbGxJbnB1dHMgPSB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJNYWluLmlucHV0RGF0YS5nZXRBbGwoIGZvcm1Ob2RlICkgfHwgW107XG5cdFx0XHRcdFx0XHRcdGlucHV0ID0gYWxsSW5wdXRzLmZpbmQoICggaW5wICkgPT4gaW5wLm5hbWUgPT09IGFjdHVhbE5hbWUgKSB8fFxuXHRcdFx0XHRcdFx0XHQgICAgICAgIGFsbElucHV0cy5maW5kKCAoIGlucCApID0+IGlucC5uYW1lID09PSBzb3VyY2VGaWVsZE5hbWUgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRjb25zdCBmb3JjZURvbVJlYWQgPSB0aGlzLnNob3VsZFVzZURvbVdhdGNoKCBzb3VyY2VFbGVtZW50ICk7XG5cblx0XHRcdFx0XHRjb250ZXh0WyBzb3VyY2VGaWVsZE5hbWUgXSA9ICggISBmb3JjZURvbVJlYWQgJiYgaW5wdXQgKVxuXHRcdFx0XHRcdFx0PyBpbnB1dC52YWx1ZS5jdXJyZW50XG5cdFx0XHRcdFx0XHQ6IHRoaXMucmVhZFZhbHVlRnJvbVNvdXJjZUVsZW1lbnQoIHNvdXJjZUVsZW1lbnQgKTtcblxuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbnRleHQ7XG5cdH1cblxuXHQvKipcblx0ICogUmVzb2x2ZSBmaWVsZCBuYW1lIHRvIHVzZSB3aXRoIEpldEZvcm1CdWlsZGVyIGlucHV0RGF0YSBsb29rdXAuXG5cdCAqXG5cdCAqIFdyYXBwZXIgZWxlbWVudHMgKGNoZWNrYm94L3JhZGlvIGdyb3VwcykgZG9uJ3QgaGF2ZSBcIm5hbWVcIiBhdHRyaWJ1dGUsXG5cdCAqIHNvIHdlIHJlYWQgaXQgZnJvbSB0aGUgZmlyc3QgbmVzdGVkIGlucHV0LlxuXHQgKlxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBzb3VyY2VFbGVtZW50ICAgIFNvdXJjZSBmaWVsZCBlbGVtZW50IG9yIHdyYXBwZXIuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSAgICAgIHNvdXJjZUZpZWxkTmFtZSAgRmFsbGJhY2sgZmllbGQgbmFtZS5cblx0ICpcblx0ICogQHJldHVybiB7c3RyaW5nfVxuXHQgKi9cblx0cmVzb2x2ZUFjdHVhbE5hbWUoIHNvdXJjZUVsZW1lbnQsIHNvdXJjZUZpZWxkTmFtZSApIHtcblx0XHRyZXR1cm4gc291cmNlRWxlbWVudC5nZXRBdHRyaWJ1dGUoICduYW1lJyApXG5cdFx0XHR8fCBzb3VyY2VFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoICdbbmFtZV0nICk/LmdldEF0dHJpYnV0ZSggJ25hbWUnIClcblx0XHRcdHx8IHNvdXJjZUZpZWxkTmFtZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZWFkIGN1cnJlbnQgdmFsdWUgZGlyZWN0bHkgZnJvbSBhIHNvdXJjZSBlbGVtZW50LlxuXHQgKiBTdXBwb3J0cyBjaGVja2JveC9yYWRpbyBncm91cHMgcmVuZGVyZWQgYXMgd3JhcHBlcnMuXG5cdCAqXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHNvdXJjZUVsZW1lbnQgU291cmNlIGZpZWxkIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEByZXR1cm4ge3N0cmluZ3xBcnJheX1cblx0ICovXG5cdHJlYWRWYWx1ZUZyb21Tb3VyY2VFbGVtZW50KCBzb3VyY2VFbGVtZW50ICkge1xuXHRcdGNvbnN0IHNvdXJjZU5hbWUgPVxuXHRcdFx0c291cmNlRWxlbWVudC5nZXRBdHRyaWJ1dGUoICduYW1lJyApXG5cdFx0XHR8fCBzb3VyY2VFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoICdbbmFtZV0nICk/LmdldEF0dHJpYnV0ZSggJ25hbWUnIClcblx0XHRcdHx8IG51bGw7XG5cdFx0Y29uc3Qgcm9vdCA9IHNvdXJjZUVsZW1lbnQuY2xvc2VzdCggJy5qZXQtZm9ybS1idWlsZGVyLXJlcGVhdGVyX19yb3cnIClcblx0XHRcdHx8IHNvdXJjZUVsZW1lbnQuY2xvc2VzdCggJ2Zvcm0nIClcblx0XHRcdHx8IGRvY3VtZW50O1xuXG5cdFx0aWYgKCBzb3VyY2VOYW1lICkge1xuXHRcdFx0Y29uc3QgYWxsTmFtZWRDaGVja2JveGVzID0gQXJyYXkuZnJvbShcblx0XHRcdFx0cm9vdC5xdWVyeVNlbGVjdG9yQWxsKCBgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdW25hbWU9XCIkeyBDU1MuZXNjYXBlKCBzb3VyY2VOYW1lICkgfVwiXWAgKVxuXHRcdFx0KTtcblxuXHRcdFx0aWYgKCBhbGxOYW1lZENoZWNrYm94ZXMubGVuZ3RoICkge1xuXHRcdFx0XHRyZXR1cm4gYWxsTmFtZWRDaGVja2JveGVzXG5cdFx0XHRcdFx0LmZpbHRlciggKCBub2RlICkgPT4gbm9kZS5jaGVja2VkIClcblx0XHRcdFx0XHQubWFwKCAoIG5vZGUgKSA9PiBub2RlLnZhbHVlICk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGFsbE5hbWVkUmFkaW9zID0gQXJyYXkuZnJvbShcblx0XHRcdFx0cm9vdC5xdWVyeVNlbGVjdG9yQWxsKCBgaW5wdXRbdHlwZT1cInJhZGlvXCJdW25hbWU9XCIkeyBDU1MuZXNjYXBlKCBzb3VyY2VOYW1lICkgfVwiXWAgKVxuXHRcdFx0KTtcblxuXHRcdFx0aWYgKCBhbGxOYW1lZFJhZGlvcy5sZW5ndGggKSB7XG5cdFx0XHRcdGNvbnN0IGFjdGl2ZSA9IGFsbE5hbWVkUmFkaW9zLmZpbmQoICggbm9kZSApID0+IG5vZGUuY2hlY2tlZCApO1xuXHRcdFx0XHRyZXR1cm4gYWN0aXZlID8gYWN0aXZlLnZhbHVlIDogJyc7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29uc3QgY2hlY2tib3hOb2RlcyA9IHNvdXJjZUVsZW1lbnQubWF0Y2hlcyggJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScgKVxuXHRcdFx0PyBbIHNvdXJjZUVsZW1lbnQgXVxuXHRcdFx0OiBBcnJheS5mcm9tKCBzb3VyY2VFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nICkgKTtcblxuXHRcdGlmICggY2hlY2tib3hOb2Rlcy5sZW5ndGggKSB7XG5cdFx0XHRyZXR1cm4gY2hlY2tib3hOb2Rlc1xuXHRcdFx0XHQuZmlsdGVyKCAoIG5vZGUgKSA9PiBub2RlLmNoZWNrZWQgKVxuXHRcdFx0XHQubWFwKCAoIG5vZGUgKSA9PiBub2RlLnZhbHVlICk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgcmFkaW9Ob2RlcyA9IHNvdXJjZUVsZW1lbnQubWF0Y2hlcyggJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScgKVxuXHRcdFx0PyBbIHNvdXJjZUVsZW1lbnQgXVxuXHRcdFx0OiBBcnJheS5mcm9tKCBzb3VyY2VFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICdpbnB1dFt0eXBlPVwicmFkaW9cIl0nICkgKTtcblxuXHRcdGlmICggcmFkaW9Ob2Rlcy5sZW5ndGggKSB7XG5cdFx0XHRjb25zdCBhY3RpdmUgPSByYWRpb05vZGVzLmZpbmQoICggbm9kZSApID0+IG5vZGUuY2hlY2tlZCApO1xuXHRcdFx0cmV0dXJuIGFjdGl2ZSA/IGFjdGl2ZS52YWx1ZSA6ICcnO1xuXHRcdH1cblxuXHRcdGNvbnN0IHNlbGVjdE11bHRpcGxlID0gc291cmNlRWxlbWVudC5tYXRjaGVzKCAnc2VsZWN0W211bHRpcGxlXScgKVxuXHRcdFx0PyBzb3VyY2VFbGVtZW50XG5cdFx0XHQ6IHNvdXJjZUVsZW1lbnQucXVlcnlTZWxlY3RvciggJ3NlbGVjdFttdWx0aXBsZV0nICk7XG5cblx0XHRpZiAoIHNlbGVjdE11bHRpcGxlICkge1xuXHRcdFx0cmV0dXJuIEFycmF5LmZyb20oIHNlbGVjdE11bHRpcGxlLnNlbGVjdGVkT3B0aW9ucyApLm1hcCggKCBvcHRpb24gKSA9PiBvcHRpb24udmFsdWUgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc291cmNlRWxlbWVudC52YWx1ZSB8fCAnJztcblx0fVxuXG5cdC8qKlxuXHQgKiBEZXRlY3RzIGZpZWxkIHdyYXBwZXJzL2VsZW1lbnRzIHRoYXQgc2hvdWxkIGJlIHJlYWQvd2F0Y2hlZCB2aWEgRE9NIG9ubHkuXG5cdCAqXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHNvdXJjZUVsZW1lbnQgU291cmNlIGZpZWxkIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEByZXR1cm4ge2Jvb2xlYW59XG5cdCAqL1xuXHRpc011bHRpQ2hvaWNlU291cmNlRWxlbWVudCggc291cmNlRWxlbWVudCApIHtcblx0XHRpZiAoICEgc291cmNlRWxlbWVudCApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAoIHNvdXJjZUVsZW1lbnQubWF0Y2hlcyggJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXSwgaW5wdXRbdHlwZT1cInJhZGlvXCJdLCBzZWxlY3RbbXVsdGlwbGVdJyApICkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIEJvb2xlYW4oXG5cdFx0XHRzb3VyY2VFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoICdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sIGlucHV0W3R5cGU9XCJyYWRpb1wiXSwgc2VsZWN0W211bHRpcGxlXScgKVxuXHRcdCk7XG5cdH1cblxuXHQvKipcblx0ICogRGV0ZWN0cyBhdXRvY29tcGxldGUgc2VsZWN0IGZpZWxkcyB0aGF0IHNob3VsZCBhbHNvIGJlIHdhdGNoZWQgdmlhIERPTS5cblx0ICpcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gc291cmNlRWxlbWVudCBTb3VyY2UgZmllbGQgZWxlbWVudC5cblx0ICpcblx0ICogQHJldHVybiB7Ym9vbGVhbn1cblx0ICovXG5cdGlzQXV0b2NvbXBsZXRlU291cmNlRWxlbWVudCggc291cmNlRWxlbWVudCApIHtcblx0XHRpZiAoICEgc291cmNlRWxlbWVudCApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc291cmNlRWxlbWVudC5tYXRjaGVzKCAnc2VsZWN0LmpldC1zZWxlY3QtYXV0b2NvbXBsZXRlJyApXG5cdFx0XHR8fCBCb29sZWFuKFxuXHRcdFx0XHRzb3VyY2VFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoICdzZWxlY3QuamV0LXNlbGVjdC1hdXRvY29tcGxldGUnIClcblx0XHRcdCk7XG5cdH1cblxuXHQvKipcblx0ICogRGV0ZWN0cyBjYWxjdWxhdGVkIGZpZWxkcyB0aGF0IHRyaWdnZXIgalF1ZXJ5IGNoYW5nZSBpbnN0ZWFkIG9mIHJlYWN0aXZlIHdhdGNoZXJzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBzb3VyY2VFbGVtZW50IFNvdXJjZSBmaWVsZCBlbGVtZW50LlxuXHQgKlxuXHQgKiBAcmV0dXJuIHtib29sZWFufVxuXHQgKi9cblx0aXNDYWxjdWxhdGVkU291cmNlRWxlbWVudCggc291cmNlRWxlbWVudCApIHtcblx0XHRpZiAoICEgc291cmNlRWxlbWVudCApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc291cmNlRWxlbWVudC5tYXRjaGVzKCAnaW5wdXQuamV0LWZvcm0tYnVpbGRlcl9fY2FsY3VsYXRlZC1maWVsZC1pbnB1dCcgKVxuXHRcdFx0fHwgQm9vbGVhbihcblx0XHRcdFx0c291cmNlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCAnaW5wdXQuamV0LWZvcm0tYnVpbGRlcl9fY2FsY3VsYXRlZC1maWVsZC1pbnB1dCcgKVxuXHRcdFx0KVxuXHRcdFx0fHwgQm9vbGVhbiggc291cmNlRWxlbWVudC5jbG9zZXN0KCAnLmpldC1mb3JtLWJ1aWxkZXJfX2NhbGN1bGF0ZWQtZmllbGQnICkgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBEZXRlcm1pbmUgaWYgdGhlIHNvdXJjZSBmaWVsZCBzaG91bGQgYmUgd2F0Y2hlZC9yZWFkIHZpYSBET00uXG5cdCAqXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHNvdXJjZUVsZW1lbnQgU291cmNlIGZpZWxkIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEByZXR1cm4ge2Jvb2xlYW59XG5cdCAqL1xuXHRzaG91bGRVc2VEb21XYXRjaCggc291cmNlRWxlbWVudCApIHtcblx0XHRyZXR1cm4gdGhpcy5pc011bHRpQ2hvaWNlU291cmNlRWxlbWVudCggc291cmNlRWxlbWVudCApXG5cdFx0XHR8fCB0aGlzLmlzQXV0b2NvbXBsZXRlU291cmNlRWxlbWVudCggc291cmNlRWxlbWVudCApXG5cdFx0XHR8fCB0aGlzLmlzQ2FsY3VsYXRlZFNvdXJjZUVsZW1lbnQoIHNvdXJjZUVsZW1lbnQgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVjayBpZiBldmVudCB0YXJnZXQgYmVsb25ncyB0byB0aGUgd2F0Y2hlZCBzb3VyY2UgZmllbGQvZ3JvdXAuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RWxlbWVudH0gICAgIGV2ZW50VGFyZ2V0ICAgICAgIEV2ZW50IHRhcmdldC5cblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gbGl2ZVNvdXJjZUVsZW1lbnQgU291cmNlIGZpZWxkIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEByZXR1cm4ge2Jvb2xlYW59XG5cdCAqL1xuXHRpc0V2ZW50RnJvbVNvdXJjZUZpZWxkKCBldmVudFRhcmdldCwgbGl2ZVNvdXJjZUVsZW1lbnQgKSB7XG5cdFx0aWYgKCBsaXZlU291cmNlRWxlbWVudC5jb250YWlucyggZXZlbnRUYXJnZXQgKSB8fCBsaXZlU291cmNlRWxlbWVudCA9PT0gZXZlbnRUYXJnZXQgKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRjb25zdCBldmVudE5hbWUgPSB0aGlzLnJlc29sdmVFdmVudFRhcmdldE5hbWUoIGV2ZW50VGFyZ2V0LCBsaXZlU291cmNlRWxlbWVudC5jbG9zZXN0KCAnZm9ybScgKSB8fCBkb2N1bWVudCApO1xuXHRcdGNvbnN0IHNvdXJjZU5hbWUgPVxuXHRcdFx0bGl2ZVNvdXJjZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCAnbmFtZScgKVxuXHRcdFx0fHwgbGl2ZVNvdXJjZUVsZW1lbnQucXVlcnlTZWxlY3RvciggJ1tuYW1lXScgKT8uZ2V0QXR0cmlidXRlKCAnbmFtZScgKVxuXHRcdFx0fHwgbnVsbDtcblxuXHRcdHJldHVybiBCb29sZWFuKCBldmVudE5hbWUgJiYgc291cmNlTmFtZSAmJiBldmVudE5hbWUgPT09IHNvdXJjZU5hbWUgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXNvbHZlIHNvdXJjZSBmaWVsZCBuYW1lIGZyb20gYW55IGV2ZW50IHRhcmdldCAoaW5wdXQsIHdyYXBwZXIsIGxhYmVsKS5cblx0ICpcblx0ICogQHBhcmFtIHtFbGVtZW50fSAgICAgIGV2ZW50VGFyZ2V0IEV2ZW50IHRhcmdldC5cblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudHxEb2N1bWVudH0gcm9vdCBSb290IG5vZGUgZm9yIGxhYmVsW2Zvcl0gbG9va3VwLlxuXHQgKlxuXHQgKiBAcmV0dXJuIHtzdHJpbmd8bnVsbH1cblx0ICovXG5cdHJlc29sdmVFdmVudFRhcmdldE5hbWUoIGV2ZW50VGFyZ2V0LCByb290ICkge1xuXHRcdGlmICggISBldmVudFRhcmdldCApIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdGlmICggZXZlbnRUYXJnZXQuZ2V0QXR0cmlidXRlICYmIGV2ZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSggJ25hbWUnICkgKSB7XG5cdFx0XHRyZXR1cm4gZXZlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCAnbmFtZScgKTtcblx0XHR9XG5cblx0XHRjb25zdCBjb250cm9sID0gZXZlbnRUYXJnZXQuY2xvc2VzdD8uKCAnaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEnICk7XG5cdFx0aWYgKCBjb250cm9sPy5nZXRBdHRyaWJ1dGUoICduYW1lJyApICkge1xuXHRcdFx0cmV0dXJuIGNvbnRyb2wuZ2V0QXR0cmlidXRlKCAnbmFtZScgKTtcblx0XHR9XG5cblx0XHRjb25zdCBsYWJlbCA9IGV2ZW50VGFyZ2V0LmNsb3Nlc3Q/LiggJ2xhYmVsJyApO1xuXHRcdGlmICggISBsYWJlbCApIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdGNvbnN0IG5lc3RlZENvbnRyb2wgPSBsYWJlbC5xdWVyeVNlbGVjdG9yKCAnaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEnICk7XG5cdFx0aWYgKCBuZXN0ZWRDb250cm9sPy5nZXRBdHRyaWJ1dGUoICduYW1lJyApICkge1xuXHRcdFx0cmV0dXJuIG5lc3RlZENvbnRyb2wuZ2V0QXR0cmlidXRlKCAnbmFtZScgKTtcblx0XHR9XG5cblx0XHRjb25zdCBmb3JJZCA9IGxhYmVsLmdldEF0dHJpYnV0ZSggJ2ZvcicgKTtcblx0XHRpZiAoICEgZm9ySWQgKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRjb25zdCBsaW5rZWRDb250cm9sID0gcm9vdC5xdWVyeVNlbGVjdG9yKCBgIyR7IENTUy5lc2NhcGUoIGZvcklkICkgfWAgKTtcblx0XHRyZXR1cm4gbGlua2VkQ29udHJvbD8uZ2V0QXR0cmlidXRlKCAnbmFtZScgKSB8fCBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIENoZWNrIHdoZXRoZXIgYSBjb250ZXh0IHZhbHVlIHNob3VsZCBiZSB0cmVhdGVkIGFzIFwiZmlsbGVkXCIuXG5cdCAqXG5cdCAqIEBwYXJhbSB7Kn0gdmFsdWUgQ29udGV4dCB2YWx1ZS5cblx0ICpcblx0ICogQHJldHVybiB7Ym9vbGVhbn1cblx0ICovXG5cdGlzQ29udGV4dFZhbHVlRmlsbGVkKCB2YWx1ZSApIHtcblx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIHZhbHVlICkgKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWUuc29tZSggKCBpdGVtICkgPT4gaXRlbSAhPT0gdW5kZWZpbmVkICYmIGl0ZW0gIT09IG51bGwgJiYgaXRlbSAhPT0gJycgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gJyc7XG5cdH1cblxuXHQvKipcblx0ICogV2hldGhlciB0aGUgZGVwZW5kZW50IGZpZWxkIHNob3VsZCBiZSBjbGVhcmVkIGltbWVkaWF0ZWx5IHdoZW4gYSByZXF1aXJlZFxuXHQgKiB0cmlnZ2VyIGZpZWxkIGlzIGVtcHR5LlxuXHQgKlxuXHQgKiBNdWx0aS1maWVsZCBtb2RlIGtlZXBzIHN0cmljdCBcIldhaXQgZm9yIEFsbCBGaWVsZHNcIiBzZW1hbnRpY3MuIEdlbmVyYXRvclxuXHQgKiBmYWxsYmFjayBwb2xpY3kgaXMgYXBwbGllZCBvbmx5IHRvIHNpbmdsZSB0cmlnZ2VyLWZpZWxkIHNjZW5hcmlvcy5cblx0ICpcblx0ICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBGaWVsZCBjb25maWd1cmF0aW9uLlxuXHQgKlxuXHQgKiBAcmV0dXJuIHtib29sZWFufVxuXHQgKi9cblx0c2hvdWxkQ2xlYXJPbkVtcHR5Q29udGV4dCggY29uZmlnICkge1xuXHRcdGlmICggQXJyYXkuaXNBcnJheSggY29uZmlnPy5saXN0ZW5UbyApICYmIGNvbmZpZy5saXN0ZW5Uby5sZW5ndGggPiAxICkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICggY29uZmlnPy5lbXB0eUNvbnRleHRBY3Rpb24gfHwgJ2NsZWFyJyApID09PSAnY2xlYXInO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlc29sdmUgUkVTVCBlbmRwb2ludCBVUkwgZm9yIGdlbmVyYXRvciB1cGRhdGVzLlxuXHQgKlxuXHQgKiBQcmlvcml0eTpcblx0ICogMSkgTG9jYWxpemVkIG1vZHVsZSBjb25maWcgKHN1cHBvcnRzIGN1c3RvbSBwcmVmaXgvc3ViZGlyZWN0b3J5KVxuXHQgKiAyKSB3cEFwaVNldHRpbmdzLnJvb3QgKGlmIGF2YWlsYWJsZSlcblx0ICogMykgTGVnYWN5IGZhbGxiYWNrXG5cdCAqXG5cdCAqIEByZXR1cm4ge3N0cmluZ31cblx0ICovXG5cdGdldFVwZGF0ZUVuZHBvaW50KCkge1xuXHRcdGNvbnN0IGxvY2FsaXplZCA9IHdpbmRvdy5KRkJPcHRpb25GaWVsZEF1dG9VcGRhdGU/LmVuZHBvaW50O1xuXHRcdGlmICggbG9jYWxpemVkICkge1xuXHRcdFx0cmV0dXJuIGxvY2FsaXplZDtcblx0XHR9XG5cblx0XHRjb25zdCBhcGlSb290ID0gd2luZG93LndwQXBpU2V0dGluZ3M/LnJvb3Q7XG5cdFx0aWYgKCBhcGlSb290ICkge1xuXHRcdFx0cmV0dXJuIGAkeyBhcGlSb290LnJlcGxhY2UoIC9cXC8rJC8sICcnICkgfS9qZXQtZm9ybS1idWlsZGVyL3YxL2dlbmVyYXRvci11cGRhdGVgO1xuXHRcdH1cblxuXHRcdHJldHVybiAnL3dwLWpzb24vamV0LWZvcm0tYnVpbGRlci92MS9nZW5lcmF0b3ItdXBkYXRlJztcblx0fVxuXG5cdC8qKlxuXHQgKiBGZXRjaCBvcHRpb25zIGZyb20gUkVTVCBBUEkuXG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSAgICAgIGNvbmZpZyBGaWVsZCBjb25maWd1cmF0aW9uLlxuXHQgKiBAcGFyYW0ge09iamVjdH0gICAgICBjb250ZXh0IENvbnRleHQgdmFsdWVzLlxuXHQgKiBAcGFyYW0ge0Fib3J0U2lnbmFsfSBzaWduYWwgIEFib3J0IHNpZ25hbC5cblx0ICpcblx0ICogQHJldHVybiB7UHJvbWlzZTxBcnJheT59IEdlbmVyYXRlZCBvcHRpb25zLlxuXHQgKi9cblx0YXN5bmMgZmV0Y2hPcHRpb25zKCBjb25maWcsIGNvbnRleHQsIHNpZ25hbCApIHtcblx0XHRjb25zdCBwcmV2aWV3Tm9uY2UgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCB3aW5kb3cubG9jYXRpb24uc2VhcmNoICkuZ2V0KCAnamZiX3ByZXZpZXdfbm9uY2UnICkgfHwgJyc7XG5cdFx0Y29uc3QgaGVhZGVycyAgICAgID0ge1xuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcblx0XHR9O1xuXG5cdFx0aWYgKCB3aW5kb3cud3BBcGlTZXR0aW5ncz8ubm9uY2UgKSB7XG5cdFx0XHRoZWFkZXJzWyAnWC1XUC1Ob25jZScgXSA9IHdpbmRvdy53cEFwaVNldHRpbmdzLm5vbmNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goIHRoaXMuZ2V0VXBkYXRlRW5kcG9pbnQoKSwge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRoZWFkZXJzLFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoIHtcblx0XHRcdFx0Zm9ybV9pZDogY29uZmlnLmZvcm1JZCxcblx0XHRcdFx0ZmllbGRfbmFtZTogY29uZmlnLmZpZWxkTmFtZSxcblx0XHRcdFx0Z2VuZXJhdG9yX2lkOiBjb25maWcuZ2VuZXJhdG9ySWQsXG5cdFx0XHRcdGNvbnRleHQsXG5cdFx0XHRcdHByZXZpZXdfbm9uY2U6IHByZXZpZXdOb25jZSxcblx0XHRcdH0gKSxcblx0XHRcdHNpZ25hbCxcblx0XHR9ICk7XG5cblx0XHRpZiAoICEgcmVzcG9uc2Uub2sgKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIGBIVFRQIGVycm9yISBzdGF0dXM6ICR7IHJlc3BvbnNlLnN0YXR1cyB9YCApO1xuXHRcdH1cblxuXHRcdGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cblx0XHRpZiAoICEgZGF0YS5zdWNjZXNzICkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBkYXRhLm1lc3NhZ2UgfHwgJ1Vua25vd24gZXJyb3InICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRhdGEub3B0aW9ucyB8fCBbXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBBYm9ydCBwcmV2aW91cyByZXF1ZXN0IGZvciBhIGZpZWxkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZmllbGROYW1lIEZpZWxkIG5hbWUuXG5cdCAqL1xuXHRhYm9ydFByZXZpb3VzUmVxdWVzdCggZmllbGROYW1lICkge1xuXHRcdGNvbnN0IGNvbnRyb2xsZXIgPSB0aGlzLmFib3J0Q29udHJvbGxlcnMuZ2V0KCBmaWVsZE5hbWUgKTtcblx0XHRpZiAoIGNvbnRyb2xsZXIgKSB7XG5cdFx0XHRjb250cm9sbGVyLmFib3J0KCk7XG5cdFx0XHR0aGlzLmFib3J0Q29udHJvbGxlcnMuZGVsZXRlKCBmaWVsZE5hbWUgKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogRGVzdHJveSB3YXRjaGVycyBhbmQgY2xlYW51cC5cblx0ICovXG5cdGRlc3Ryb3koKSB7XG5cdFx0dGhpcy53YXRjaGVycy5mb3JFYWNoKCAoIHdhdGNoZXIgKSA9PiB3YXRjaGVyLnVud2F0Y2g/LigpICk7XG5cdFx0dGhpcy5kZWJvdW5jZVRpbWVycy5mb3JFYWNoKCAoIHRpbWVyICkgPT4gY2xlYXJUaW1lb3V0KCB0aW1lciApICk7XG5cdFx0dGhpcy5hYm9ydENvbnRyb2xsZXJzLmZvckVhY2goICggY29udHJvbGxlciApID0+IGNvbnRyb2xsZXIuYWJvcnQoKSApO1xuXHRcdHRoaXMuYnV0dG9uTGlzdGVuZXJzLmZvckVhY2goICggeyBlbGVtZW50LCBoYW5kbGVyIH0gKSA9PiBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdjbGljaycsIGhhbmRsZXIgKSApO1xuXG5cdFx0dGhpcy53YXRjaGVycy5jbGVhcigpO1xuXHRcdHRoaXMuYXV0b1VwZGF0ZUZpZWxkcy5jbGVhcigpO1xuXHRcdHRoaXMuYWJvcnRDb250cm9sbGVycy5jbGVhcigpO1xuXHRcdHRoaXMuZGVib3VuY2VUaW1lcnMuY2xlYXIoKTtcblx0XHR0aGlzLmJ1dHRvbkxpc3RlbmVycy5jbGVhcigpO1xuXHRcdHRoaXMuY2FjaGVNYW5hZ2VyLmNsZWFyQWxsKCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmllbGRXYXRjaGVyO1xuIiwiLyoqXG4gKiBPcHRpb25zIFVwZGF0ZXIgZm9yIEF1dG8tVXBkYXRlIEZlYXR1cmUuXG4gKlxuICogSGFuZGxlcyBET00gbWFuaXB1bGF0aW9uIHRvIHVwZGF0ZSBmaWVsZCBvcHRpb25zLlxuICogU3VwcG9ydHMgc2VsZWN0LCBjaGVja2JveCwgYW5kIHJhZGlvIGZpZWxkIHR5cGVzLlxuICpcbiAqIEBwYWNrYWdlIEpldEZvcm1CdWlsZGVyXG4gKi9cblxuLyoqXG4gKiBPcHRpb25zIFVwZGF0ZXIgQ2xhc3MuXG4gKlxuICogVXBkYXRlcyBmaWVsZCBvcHRpb25zIGluIHRoZSBET00gd2hpbGUgcHJlc2VydmluZyBzZWxlY3RlZCB2YWx1ZXMuXG4gKi9cbmNsYXNzIE9wdGlvbnNVcGRhdGVyIHtcblx0LyoqXG5cdCAqIFVwZGF0ZSBvcHRpb25zIGZvciBhIGZpZWxkIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9ICAgICAgZmllbGRFbGVtZW50IEZpZWxkIGVsZW1lbnQgKHNlbGVjdC9pbnB1dCBjb250YWluZXIpLlxuXHQgKiBAcGFyYW0ge0FycmF5fSAgICAgICAgICAgIG9wdGlvbnMgICAgICBOZXcgb3B0aW9ucyBhcnJheS5cblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudHxudWxsfSBmb3JtTm9kZSAgICAgRm9ybSBlbGVtZW50IChuZWVkZWQgZm9yIHJlLWluaXRpYWxpemF0aW9uKS5cblx0ICovXG5cdHVwZGF0ZU9wdGlvbnMoIGZpZWxkRWxlbWVudCwgb3B0aW9ucywgZm9ybU5vZGUgPSBudWxsICkge1xuXHRcdGNvbnN0IGZpZWxkVHlwZSA9IHRoaXMuZ2V0RmllbGRUeXBlKCBmaWVsZEVsZW1lbnQgKTtcblxuXHRcdHN3aXRjaCAoIGZpZWxkVHlwZSApIHtcblx0XHRcdGNhc2UgJ3NlbGVjdCc6XG5cdFx0XHRcdHRoaXMudXBkYXRlU2VsZWN0T3B0aW9ucyggZmllbGRFbGVtZW50LCBvcHRpb25zLCBmb3JtTm9kZSApO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2NoZWNrYm94Jzpcblx0XHRcdGNhc2UgJ3JhZGlvJzpcblx0XHRcdFx0dGhpcy51cGRhdGVDaG9pY2VPcHRpb25zKCBmaWVsZEVsZW1lbnQsIG9wdGlvbnMsIGZpZWxkVHlwZSwgZm9ybU5vZGUgKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGZpZWxkIHR5cGUgZnJvbSBlbGVtZW50LlxuXHQgKlxuXHQgKiBSZWFkcyBkYXRhLWZpZWxkLXR5cGUgZmlyc3QgKGluamVjdGVkIHNlcnZlci1zaWRlKSwgc28gZGV0ZWN0aW9uIHdvcmtzXG5cdCAqIGV2ZW4gd2hlbiB0aGUgY29udGFpbmVyIGlzIGVtcHR5IChubyBvcHRpb25zIHJlbmRlcmVkIHlldCkuXG5cdCAqXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGZpZWxkRWxlbWVudCBGaWVsZCBlbGVtZW50LlxuXHQgKlxuXHQgKiBAcmV0dXJuIHtzdHJpbmd9IEZpZWxkIHR5cGUgKHNlbGVjdC9jaGVja2JveC9yYWRpbykuXG5cdCAqL1xuXHRnZXRGaWVsZFR5cGUoIGZpZWxkRWxlbWVudCApIHtcblx0XHRpZiAoIGZpZWxkRWxlbWVudC50YWdOYW1lID09PSAnU0VMRUNUJyApIHtcblx0XHRcdHJldHVybiAnc2VsZWN0Jztcblx0XHR9XG5cblx0XHRjb25zdCBkYXRhVHlwZSA9IGZpZWxkRWxlbWVudC5kYXRhc2V0LmZpZWxkVHlwZTtcblx0XHRpZiAoIGRhdGFUeXBlICkge1xuXHRcdFx0aWYgKCBkYXRhVHlwZSA9PT0gJ2NoZWNrYm94LWZpZWxkJyApIHsgcmV0dXJuICdjaGVja2JveCc7IH1cblx0XHRcdGlmICggZGF0YVR5cGUgPT09ICdyYWRpby1maWVsZCcgKSB7IHJldHVybiAncmFkaW8nOyB9XG5cdFx0XHRpZiAoIGRhdGFUeXBlID09PSAnc2VsZWN0LWZpZWxkJyApIHsgcmV0dXJuICdzZWxlY3QnOyB9XG5cdFx0fVxuXG5cdFx0Y29uc3QgZmlyc3RJbnB1dCA9IGZpZWxkRWxlbWVudC5xdWVyeVNlbGVjdG9yKCAnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLCBpbnB1dFt0eXBlPVwicmFkaW9cIl0nICk7XG5cdFx0aWYgKCBmaXJzdElucHV0ICkge1xuXHRcdFx0cmV0dXJuIGZpcnN0SW5wdXQudHlwZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gJ3Vua25vd24nO1xuXHR9XG5cblx0LyoqXG5cdCAqIFVwZGF0ZSBzZWxlY3QgZmllbGQgb3B0aW9ucy5cblx0ICpcblx0ICogRm9yIFNlbGVjdDIgYXV0b2NvbXBsZXRlIGZpZWxkcywgd2Ugc2tpcCBET00gcmVidWlsZCBhbmQgaW5zdGVhZFxuXHQgKiBjbGVhciB0aGUgY3VycmVudCBzZWxlY3Rpb24gc28gdGhhdCBTZWxlY3QyIEFKQVggZmlyZXMgZnJlc2hcblx0ICogKHdpdGggdXBkYXRlZCBjb250ZXh0IGZyb20gYXV0b2NvbXBsZXRlLWJyaWRnZS5qcykuXG5cdCAqXG5cdCAqIEBwYXJhbSB7SFRNTFNlbGVjdEVsZW1lbnR9IHNlbGVjdEVsZW1lbnQgU2VsZWN0IGVsZW1lbnQuXG5cdCAqIEBwYXJhbSB7QXJyYXl9ICAgICAgICAgICAgIG9wdGlvbnMgICAgICAgTmV3IG9wdGlvbnMgYXJyYXkuXG5cdCAqL1xuXHR1cGRhdGVTZWxlY3RPcHRpb25zKCBzZWxlY3RFbGVtZW50LCBvcHRpb25zLCBmb3JtTm9kZSA9IG51bGwgKSB7XG5cdFx0Y29uc3QgaXNBdXRvY29tcGxldGVTZWxlY3QgPSBzZWxlY3RFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggJ2pldC1zZWxlY3QtYXV0b2NvbXBsZXRlJyApO1xuXHRcdGNvbnN0IGlzQWpheEF1dG9jb21wbGV0ZSAgID0gaXNBdXRvY29tcGxldGVTZWxlY3QgJiYgc2VsZWN0RWxlbWVudC5oYXNBdHRyaWJ1dGUoICdkYXRhLWFqYXgtLXVybCcgKTtcblx0XHRjb25zdCAkc2VsZWN0ICAgICAgICAgICAgICA9IGlzQXV0b2NvbXBsZXRlU2VsZWN0ID8galF1ZXJ5KCBzZWxlY3RFbGVtZW50ICkgOiBudWxsO1xuXHRcdGNvbnN0IGhhc1NlbGVjdDIgICAgICAgICAgID0gQm9vbGVhbiggJHNlbGVjdD8uZGF0YSggJ3NlbGVjdDInICkgKTtcblxuXHRcdGlmIChcblx0XHRcdGlzQWpheEF1dG9jb21wbGV0ZVxuXHRcdCkge1xuXHRcdFx0aWYgKCBoYXNTZWxlY3QyICkge1xuXHRcdFx0XHQkc2VsZWN0LnZhbCggbnVsbCApLnRyaWdnZXIoICdjaGFuZ2UnICk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjb25zdCBpc011bHRpcGxlICAgID0gc2VsZWN0RWxlbWVudC5tdWx0aXBsZTtcblx0XHRsZXQgY3VycmVudFZhbHVlcyA9IGlzTXVsdGlwbGVcblx0XHRcdD8gQXJyYXkuZnJvbSggc2VsZWN0RWxlbWVudC5zZWxlY3RlZE9wdGlvbnMgKS5tYXAoICggb3B0ICkgPT4gb3B0LnZhbHVlIClcblx0XHRcdDogWyBzZWxlY3RFbGVtZW50LnZhbHVlIF07XG5cblx0XHRpZiAoICEgY3VycmVudFZhbHVlcy5zb21lKCBCb29sZWFuICkgKSB7XG5cdFx0XHRjb25zdCBzdG9yZWRWYWx1ZSA9IHRoaXMuZ2V0U3RvcmVkRmllbGRWYWx1ZSggc2VsZWN0RWxlbWVudCwgJ3NlbGVjdCcsIGZvcm1Ob2RlICk7XG5cdFx0XHRjdXJyZW50VmFsdWVzID0gdGhpcy5ub3JtYWxpemVWYWx1ZXMoIHN0b3JlZFZhbHVlICk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaGFkU2VsZWN0aW9uICA9IGN1cnJlbnRWYWx1ZXMuc29tZSggQm9vbGVhbiApO1xuXHRcdGNvbnN0IG5leHRWYWx1ZXMgICAgPSBbXTtcblx0XHRsZXQgZmFsbGJhY2tWYWx1ZSAgID0gJyc7XG5cblx0XHRjb25zdCBmaXJzdE9wdGlvbiA9IHNlbGVjdEVsZW1lbnQub3B0aW9uc1sgMCBdO1xuXHRcdGNvbnN0IGhhc1BsYWNlaG9sZGVyT3B0aW9uID0gQm9vbGVhbihcblx0XHRcdGZpcnN0T3B0aW9uXG5cdFx0XHQmJiBmaXJzdE9wdGlvbi52YWx1ZSA9PT0gJydcblx0XHRcdCYmIChcblx0XHRcdFx0Zmlyc3RPcHRpb24uZGlzYWJsZWRcblx0XHRcdFx0fHwgZmlyc3RPcHRpb24udGV4dENvbnRlbnQudHJpbSgpICE9PSAnJ1xuXHRcdFx0KVxuXHRcdCk7XG5cdFx0Y29uc3QgcGxhY2Vob2xkZXJPcHRpb24gPSBoYXNQbGFjZWhvbGRlck9wdGlvblxuXHRcdFx0PyBmaXJzdE9wdGlvbi5jbG9uZU5vZGUoIHRydWUgKVxuXHRcdFx0OiBudWxsO1xuXG5cdFx0c2VsZWN0RWxlbWVudC5pbm5lckhUTUwgPSAnJztcblxuXHRcdGlmICggcGxhY2Vob2xkZXJPcHRpb24gKSB7XG5cdFx0XHRzZWxlY3RFbGVtZW50LmFwcGVuZENoaWxkKCBwbGFjZWhvbGRlck9wdGlvbiApO1xuXHRcdH1cblxuXHRcdG9wdGlvbnMuZm9yRWFjaCggKCBvcHRpb24gKSA9PiB7XG5cdFx0XHRjb25zdCBvcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ29wdGlvbicgKTtcblx0XHRcdG9wdGlvbkVsZW1lbnQudmFsdWUgPSBvcHRpb24udmFsdWUgfHwgb3B0aW9uLnZhbCB8fCAnJztcblx0XHRcdG9wdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBvcHRpb24ubGFiZWwgfHwgb3B0aW9uLnZhbHVlIHx8ICcnO1xuXG5cdFx0XHRpZiAoICEgZmFsbGJhY2tWYWx1ZSAmJiBvcHRpb25FbGVtZW50LnZhbHVlICE9PSAnJyApIHtcblx0XHRcdFx0ZmFsbGJhY2tWYWx1ZSA9IG9wdGlvbkVsZW1lbnQudmFsdWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggY3VycmVudFZhbHVlcy5pbmNsdWRlcyggb3B0aW9uRWxlbWVudC52YWx1ZSApICkge1xuXHRcdFx0XHRvcHRpb25FbGVtZW50LnNlbGVjdGVkID0gdHJ1ZTtcblx0XHRcdFx0bmV4dFZhbHVlcy5wdXNoKCBvcHRpb25FbGVtZW50LnZhbHVlICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggb3B0aW9uLmNhbGN1bGF0ZSApIHtcblx0XHRcdFx0b3B0aW9uRWxlbWVudC5kYXRhc2V0LmNhbGN1bGF0ZSA9IG9wdGlvbi5jYWxjdWxhdGU7XG5cdFx0XHR9XG5cblx0XHRcdHNlbGVjdEVsZW1lbnQuYXBwZW5kQ2hpbGQoIG9wdGlvbkVsZW1lbnQgKTtcblx0XHR9ICk7XG5cblx0XHRjb25zdCBoYXNNYXRjaGluZ1NlbGVjdGlvbiA9IG5leHRWYWx1ZXMubGVuZ3RoID4gMDtcblx0XHRpZiAoIGlzTXVsdGlwbGUgKSB7XG5cdFx0XHRBcnJheS5mcm9tKCBzZWxlY3RFbGVtZW50Lm9wdGlvbnMgKS5mb3JFYWNoKCAoIG9wdGlvbiApID0+IHtcblx0XHRcdFx0b3B0aW9uLnNlbGVjdGVkID0gbmV4dFZhbHVlcy5pbmNsdWRlcyggb3B0aW9uLnZhbHVlICk7XG5cdFx0XHR9ICk7XG5cdFx0fSBlbHNlIGlmICggaGFzTWF0Y2hpbmdTZWxlY3Rpb24gKSB7XG5cdFx0XHRzZWxlY3RFbGVtZW50LnZhbHVlID0gbmV4dFZhbHVlc1sgMCBdO1xuXHRcdH0gZWxzZSBpZiAoICEgcGxhY2Vob2xkZXJPcHRpb24gJiYgc2VsZWN0RWxlbWVudC5vcHRpb25zLmxlbmd0aCApIHtcblx0XHRcdHNlbGVjdEVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9IDA7XG5cdFx0XHRpZiAoIHNlbGVjdEVsZW1lbnQub3B0aW9uc1sgMCBdICkge1xuXHRcdFx0XHRzZWxlY3RFbGVtZW50Lm9wdGlvbnNbIDAgXS5zZWxlY3RlZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIGZhbGxiYWNrVmFsdWUgKSB7XG5cdFx0XHRcdHNlbGVjdEVsZW1lbnQudmFsdWUgPSBmYWxsYmFja1ZhbHVlO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoIHBsYWNlaG9sZGVyT3B0aW9uICkge1xuXHRcdFx0c2VsZWN0RWxlbWVudC52YWx1ZSA9ICcnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzZWxlY3RFbGVtZW50LnNlbGVjdGVkSW5kZXggPSAtMTtcblx0XHR9XG5cblx0XHRpZiAoIGlzQXV0b2NvbXBsZXRlU2VsZWN0ICYmIGhhc1NlbGVjdDIgKSB7XG5cdFx0XHQkc2VsZWN0LnNlbGVjdDIoICdkZXN0cm95JyApO1xuXG5cdFx0XHRjb25zdCBzZWxlY3QyT3B0aW9ucyA9IHdwLmhvb2tzLmFwcGx5RmlsdGVycyhcblx0XHRcdFx0J2pldC5mYi5zZWxlY3RfYXV0b2NvbXBsZXRlLm9wdGlvbnMnLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0ZHJvcGRvd25QYXJlbnQ6ICRzZWxlY3QucGFyZW50KCksXG5cdFx0XHRcdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0JHNlbGVjdFxuXHRcdFx0KTtcblxuXHRcdFx0JHNlbGVjdC5zZWxlY3QyKCBzZWxlY3QyT3B0aW9ucyApO1xuXG5cdFx0XHRpZiAoIGlzTXVsdGlwbGUgKSB7XG5cdFx0XHRcdCRzZWxlY3QudmFsKCBuZXh0VmFsdWVzICkudHJpZ2dlciggJ2NoYW5nZScgKTtcblx0XHRcdH0gZWxzZSBpZiAoIGhhc01hdGNoaW5nU2VsZWN0aW9uICkge1xuXHRcdFx0XHQkc2VsZWN0LnZhbCggbmV4dFZhbHVlc1sgMCBdICkudHJpZ2dlciggJ2NoYW5nZScgKTtcblx0XHRcdH0gZWxzZSBpZiAoICEgcGxhY2Vob2xkZXJPcHRpb24gJiYgc2VsZWN0RWxlbWVudC5vcHRpb25zLmxlbmd0aCApIHtcblx0XHRcdFx0Y29uc3QgbmV4dFZhbHVlID0gZmFsbGJhY2tWYWx1ZSB8fCBzZWxlY3RFbGVtZW50Lm9wdGlvbnNbIDAgXS52YWx1ZTtcblxuXHRcdFx0XHRBcnJheS5mcm9tKCBzZWxlY3RFbGVtZW50Lm9wdGlvbnMgKS5mb3JFYWNoKCAoIG9wdGlvbiApID0+IHtcblx0XHRcdFx0XHRvcHRpb24uc2VsZWN0ZWQgPSBvcHRpb24udmFsdWUgPT09IG5leHRWYWx1ZTtcblx0XHRcdFx0fSApO1xuXHRcdFx0XHRzZWxlY3RFbGVtZW50LnZhbHVlID0gbmV4dFZhbHVlO1xuXG5cdFx0XHRcdCRzZWxlY3QudmFsKCBuZXh0VmFsdWUgKS50cmlnZ2VyKCAnY2hhbmdlJyApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JHNlbGVjdC52YWwoIG51bGwgKS50cmlnZ2VyKCAnY2hhbmdlJyApO1xuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0c2VsZWN0RWxlbWVudC5kaXNwYXRjaEV2ZW50KCBuZXcgRXZlbnQoICdjaGFuZ2UnLCB7IGJ1YmJsZXM6IHRydWUgfSApICk7XG5cdH1cblxuXHQvKipcblx0ICogVXBkYXRlIGNoZWNrYm94L3JhZGlvIGZpZWxkIG9wdGlvbnMuXG5cdCAqXG5cdCAqIGNvbnRhaW5lckVsZW1lbnQgaXMgdGhlIG91dGVyIC5jaGVja3JhZGlvLXdyYXAgZGl2IChoYXMgZGF0YS1qZmItYXV0by11cGRhdGUpLlxuXHQgKiBFYWNoIG9wdGlvbiByb3cgaXMgYSBjaGlsZCBkaXYgKC5jaGVja2JveGVzLXdyYXAvLnJhZGlvLXdyYXAgLmNoZWNrcmFkaW8td3JhcClcblx0ICogY29udGFpbmluZyBhIDxsYWJlbCBjbGFzcz1cImpldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkLWxhYmVsIGZvci1jaGVja2JveHxmb3ItcmFkaW9cIj5cblx0ICogICA8aW5wdXQgdHlwZT1cImNoZWNrYm94fHJhZGlvXCIgLi4uPjxzcGFuPmxhYmVsIHRleHQ8L3NwYW4+XG5cdCAqIDwvbGFiZWw+LlxuXHQgKlxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSAgICAgIGNvbnRhaW5lckVsZW1lbnQgT3V0ZXIgLmNoZWNrcmFkaW8td3JhcCBlbGVtZW50LlxuXHQgKiBAcGFyYW0ge0FycmF5fSAgICAgICAgICAgIG9wdGlvbnMgICAgICAgICAgTmV3IG9wdGlvbnMgYXJyYXkuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgZmllbGRUeXBlICAgICAgICBGaWVsZCB0eXBlIChjaGVja2JveC9yYWRpbykuXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8bnVsbH0gZm9ybU5vZGUgICAgICAgICBGb3JtIGVsZW1lbnQgKGZvciByZS1pbml0aWFsaXphdGlvbikuXG5cdCAqL1xuXHR1cGRhdGVDaG9pY2VPcHRpb25zKCBjb250YWluZXJFbGVtZW50LCBvcHRpb25zLCBmaWVsZFR5cGUsIGZvcm1Ob2RlID0gbnVsbCApIHtcblx0XHQvLyBHZXQgZmllbGQgbmFtZSBmcm9tIGRhdGEgYXR0cmlidXRlIChtb3N0IHJlbGlhYmxlIHNvdXJjZSlcblx0XHRjb25zdCBmaWVsZE5hbWUgPSBjb250YWluZXJFbGVtZW50LmdldEF0dHJpYnV0ZSggJ2RhdGEtZmllbGQtbmFtZScgKTtcblx0XHRpZiAoICEgZmllbGROYW1lICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGxldCBjdXJyZW50VmFsdWVzID0gQXJyYXkuZnJvbShcblx0XHRcdGNvbnRhaW5lckVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCggYGlucHV0W3R5cGU9XCIkeyBmaWVsZFR5cGUgfVwiXTpjaGVja2VkYCApXG5cdFx0KS5tYXAoICggaW5wdXQgKSA9PiBpbnB1dC52YWx1ZSApO1xuXG5cdFx0aWYgKCAhIGN1cnJlbnRWYWx1ZXMubGVuZ3RoICkge1xuXHRcdFx0Y29uc3Qgc3RvcmVkVmFsdWUgPSB0aGlzLmdldFN0b3JlZEZpZWxkVmFsdWUoIGNvbnRhaW5lckVsZW1lbnQsIGZpZWxkVHlwZSwgZm9ybU5vZGUgKTtcblx0XHRcdGN1cnJlbnRWYWx1ZXMgPSB0aGlzLm5vcm1hbGl6ZVZhbHVlcyggc3RvcmVkVmFsdWUgKTtcblx0XHR9XG5cblx0XHQvLyBQcmVzZXJ2ZSBjdXN0b20tb3B0aW9uIHJvd3MgKGUuZy4gXCJBZGQgTmV3XCIgYnV0dG9uKVxuXHRcdGNvbnRhaW5lckVsZW1lbnRcblx0XHRcdC5xdWVyeVNlbGVjdG9yQWxsKCAnOnNjb3BlID4gLmpldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkLXdyYXA6bm90KC5jdXN0b20tb3B0aW9uKScgKVxuXHRcdFx0LmZvckVhY2goICggcm93ICkgPT4gcm93LnJlbW92ZSgpICk7XG5cblx0XHRjb25zdCBpbnB1dE5hbWUgID0gZmllbGRUeXBlID09PSAnY2hlY2tib3gnID8gYCR7IGZpZWxkTmFtZSB9W11gIDogZmllbGROYW1lO1xuXHRcdGNvbnN0IGxhYmVsQ2xhc3MgPSBmaWVsZFR5cGUgPT09ICdjaGVja2JveCcgPyAnZm9yLWNoZWNrYm94JyA6ICdmb3ItcmFkaW8nO1xuXHRcdGNvbnN0IHJvd0NsYXNzICAgPSBmaWVsZFR5cGUgPT09ICdjaGVja2JveCdcblx0XHRcdD8gJ2pldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkLXdyYXAgY2hlY2tib3hlcy13cmFwIGNoZWNrcmFkaW8td3JhcCdcblx0XHRcdDogJ2pldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkLXdyYXAgcmFkaW8td3JhcCBjaGVja3JhZGlvLXdyYXAnO1xuXG5cdFx0Y29uc3QgY3VzdG9tT3B0aW9uUm93ID0gY29udGFpbmVyRWxlbWVudC5xdWVyeVNlbGVjdG9yKCAnOnNjb3BlID4gLmN1c3RvbS1vcHRpb24nICk7XG5cblx0XHRjb25zdCBpbnB1dENsYXNzID0gZmllbGRUeXBlID09PSAnY2hlY2tib3gnXG5cdFx0XHQ/ICdqZXQtZm9ybS1idWlsZGVyX19maWVsZCBjaGVja2JveGVzLWZpZWxkIGNoZWNrcmFkaW8tZmllbGQnXG5cdFx0XHQ6ICdqZXQtZm9ybS1idWlsZGVyX19maWVsZCByYWRpby1maWVsZCBjaGVja3JhZGlvLWZpZWxkJztcblxuXHRcdGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXHRcdGxldCBoYXNDdXN0b21UZW1wbGF0ZXMgPSBmYWxzZTtcblxuXHRcdG9wdGlvbnMuZm9yRWFjaCggKCBvcHRpb24gKSA9PiB7XG5cdFx0XHRjb25zdCB2YWx1ZSAgICAgPSBvcHRpb24udmFsdWUgfHwgb3B0aW9uLnZhbCB8fCAnJztcblx0XHRcdGNvbnN0IGxhYmVsICAgICA9IG9wdGlvbi5sYWJlbCB8fCB2YWx1ZTtcblx0XHRcdGNvbnN0IGlzQ2hlY2tlZCA9IGN1cnJlbnRWYWx1ZXMuaW5jbHVkZXMoIHZhbHVlICk7XG5cblx0XHRcdGNvbnN0IGlucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdpbnB1dCcgKTtcblx0XHRcdGlucHV0RWxlbWVudC50eXBlICA9IGZpZWxkVHlwZTtcblx0XHRcdGlucHV0RWxlbWVudC5uYW1lICA9IGlucHV0TmFtZTtcblx0XHRcdGlucHV0RWxlbWVudC52YWx1ZSA9IHZhbHVlO1xuXHRcdFx0aW5wdXRFbGVtZW50LmNsYXNzTmFtZSA9IGlucHV0Q2xhc3M7XG5cdFx0XHRpbnB1dEVsZW1lbnQuc2V0QXR0cmlidXRlKCAnZGF0YS1maWVsZC1uYW1lJywgZmllbGROYW1lICk7XG5cdFx0XHRpbnB1dEVsZW1lbnQuY2hlY2tlZCA9IGlzQ2hlY2tlZDtcblxuXHRcdFx0aWYgKCBvcHRpb24uY2FsY3VsYXRlICkge1xuXHRcdFx0XHRpbnB1dEVsZW1lbnQuZGF0YXNldC5jYWxjdWxhdGUgPSBvcHRpb24uY2FsY3VsYXRlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCByb3dFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcblx0XHRcdHJvd0VsZW1lbnQuY2xhc3NOYW1lID0gcm93Q2xhc3M7XG5cblx0XHRcdC8vIEpldEVuZ2luZSBjdXN0b20gdGVtcGxhdGUgSFRNTCAocHJlLXJlbmRlcmVkIHNlcnZlci1zaWRlKVxuXHRcdFx0aWYgKCBvcHRpb24uaHRtbCApIHtcblx0XHRcdFx0aGFzQ3VzdG9tVGVtcGxhdGVzID0gdHJ1ZTtcblx0XHRcdFx0Y29uc3QgdGVtcGxhdGVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcblx0XHRcdFx0dGVtcGxhdGVXcmFwcGVyLmlubmVySFRNTCA9IG9wdGlvbi5odG1sO1xuXHRcdFx0XHR3aGlsZSAoIHRlbXBsYXRlV3JhcHBlci5maXJzdENoaWxkICkge1xuXHRcdFx0XHRcdHJvd0VsZW1lbnQuYXBwZW5kQ2hpbGQoIHRlbXBsYXRlV3JhcHBlci5maXJzdENoaWxkICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qgc3BhbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnc3BhbicgKTtcblx0XHRcdHNwYW5FbGVtZW50LnRleHRDb250ZW50ID0gbGFiZWw7XG5cblx0XHRcdGNvbnN0IGxhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdsYWJlbCcgKTtcblx0XHRcdGxhYmVsRWxlbWVudC5jbGFzc05hbWUgPSBgamV0LWZvcm0tYnVpbGRlcl9fZmllbGQtbGFiZWwgJHsgbGFiZWxDbGFzcyB9YDtcblx0XHRcdGxhYmVsRWxlbWVudC5hcHBlbmRDaGlsZCggaW5wdXRFbGVtZW50ICk7XG5cdFx0XHRsYWJlbEVsZW1lbnQuYXBwZW5kQ2hpbGQoIHNwYW5FbGVtZW50ICk7XG5cblx0XHRcdHJvd0VsZW1lbnQuYXBwZW5kQ2hpbGQoIGxhYmVsRWxlbWVudCApO1xuXG5cdFx0XHRmcmFnbWVudC5hcHBlbmRDaGlsZCggcm93RWxlbWVudCApO1xuXHRcdH0gKTtcblxuXHRcdGlmICggY3VzdG9tT3B0aW9uUm93ICkge1xuXHRcdFx0Y29udGFpbmVyRWxlbWVudC5pbnNlcnRCZWZvcmUoIGZyYWdtZW50LCBjdXN0b21PcHRpb25Sb3cgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZCggZnJhZ21lbnQgKTtcblx0XHR9XG5cblx0XHRpZiAoIGhhc0N1c3RvbVRlbXBsYXRlcyApIHtcblx0XHRcdGNvbnN0ICRjb250YWluZXIgPSBqUXVlcnkoIGNvbnRhaW5lckVsZW1lbnQgKTtcblxuXHRcdFx0aWYgKCB3aW5kb3cuSmV0RW5naW5lICYmIHdpbmRvdy5KZXRFbmdpbmUuaW5pdEVsZW1lbnRzSGFuZGxlcnMgKSB7XG5cdFx0XHRcdHdpbmRvdy5KZXRFbmdpbmUuaW5pdEVsZW1lbnRzSGFuZGxlcnMoICRjb250YWluZXIgKTtcblx0XHRcdH0gZWxzZSBpZiAoIHdpbmRvdy5KZXRQbHVnaW5zICkge1xuXHRcdFx0XHR3aW5kb3cuSmV0UGx1Z2lucy5pbml0KCAkY29udGFpbmVyICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29uc3QgcmVJbml0ZWQgPSB0aGlzLnJlSW5pdEZpZWxkKCBjb250YWluZXJFbGVtZW50LCBmb3JtTm9kZSApO1xuXG5cdFx0aWYgKCAhIHJlSW5pdGVkICkge1xuXHRcdFx0Y29uc3QgZmlyc3RJbnB1dCA9IGNvbnRhaW5lckVsZW1lbnQucXVlcnlTZWxlY3RvciggYGlucHV0W3R5cGU9XCIkeyBmaWVsZFR5cGUgfVwiXWAgKTtcblx0XHRcdGlmICggZmlyc3RJbnB1dCApIHtcblx0XHRcdFx0Zmlyc3RJbnB1dC5kaXNwYXRjaEV2ZW50KCBuZXcgRXZlbnQoICdjaGFuZ2UnLCB7IGJ1YmJsZXM6IHRydWUgfSApICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0bm9ybWFsaXplVmFsdWVzKCB2YWx1ZSApIHtcblx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIHZhbHVlICkgKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWUuZmlsdGVyKCAoIGl0ZW0gKSA9PiBpdGVtICE9PSB1bmRlZmluZWQgJiYgaXRlbSAhPT0gbnVsbCAmJiBpdGVtICE9PSAnJyApLm1hcCggU3RyaW5nICk7XG5cdFx0fVxuXG5cdFx0aWYgKCB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSAnJyApIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gWyBTdHJpbmcoIHZhbHVlICkgXTtcblx0fVxuXG5cdGdldFByZXNlcnZlZEZpZWxkVmFsdWUoIGZpZWxkRWxlbWVudCApIHtcblx0XHRjb25zdCByYXcgPSBmaWVsZEVsZW1lbnQ/LmRhdGFzZXQ/LmpmYkF1UHJlc2VydmVkVmFsdWU7XG5cblx0XHRpZiAoICEgcmF3ICkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0ZGVsZXRlIGZpZWxkRWxlbWVudC5kYXRhc2V0LmpmYkF1UHJlc2VydmVkVmFsdWU7XG5cblx0XHR0cnkge1xuXHRcdFx0cmV0dXJuIEpTT04ucGFyc2UoIHJhdyApO1xuXHRcdH0gY2F0Y2ggKCBlICkge1xuXHRcdFx0cmV0dXJuIHJhdztcblx0XHR9XG5cdH1cblxuXHRnZXRTdG9yZWRGaWVsZFZhbHVlKCBmaWVsZEVsZW1lbnQsIGZpZWxkVHlwZSwgZm9ybU5vZGUgKSB7XG5cdFx0Y29uc3QgcHJlc2VydmVkVmFsdWUgPSB0aGlzLmdldFByZXNlcnZlZEZpZWxkVmFsdWUoIGZpZWxkRWxlbWVudCApO1xuXG5cdFx0aWYgKCBwcmVzZXJ2ZWRWYWx1ZSAhPT0gbnVsbCApIHtcblx0XHRcdHJldHVybiBwcmVzZXJ2ZWRWYWx1ZTtcblx0XHR9XG5cblx0XHRpZiAoICEgZm9ybU5vZGUgfHwgISB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJNYWluPy5pbnB1dERhdGEgKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRjb25zdCBmaWVsZE5hbWUgPSBmaWVsZEVsZW1lbnQuZ2V0QXR0cmlidXRlKCAnZGF0YS1maWVsZC1uYW1lJyApIHx8ICcnO1xuXHRcdGNvbnN0IGFjdHVhbE5hbWUgPSB0aGlzLnJlc29sdmVBY3R1YWxJbnB1dE5hbWUoIGZpZWxkRWxlbWVudCwgZmllbGRUeXBlICkgfHwgZmllbGROYW1lO1xuXG5cdFx0bGV0IGlucHV0ID0gd2luZG93LkpldEZvcm1CdWlsZGVyTWFpbi5pbnB1dERhdGEuZmluZElucHV0Py4oIGFjdHVhbE5hbWUsIGZvcm1Ob2RlICkgfHxcblx0XHRcdHdpbmRvdy5KZXRGb3JtQnVpbGRlck1haW4uaW5wdXREYXRhLmdldElucHV0Py4oIGFjdHVhbE5hbWUsIGZvcm1Ob2RlICk7XG5cblx0XHRpZiAoICEgaW5wdXQgJiYgZmllbGROYW1lICkge1xuXHRcdFx0aW5wdXQgPSB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJNYWluLmlucHV0RGF0YS5maW5kSW5wdXQ/LiggZmllbGROYW1lLCBmb3JtTm9kZSApIHx8XG5cdFx0XHRcdHdpbmRvdy5KZXRGb3JtQnVpbGRlck1haW4uaW5wdXREYXRhLmdldElucHV0Py4oIGZpZWxkTmFtZSwgZm9ybU5vZGUgKTtcblx0XHR9XG5cblx0XHRpZiAoICEgaW5wdXQgJiYgd2luZG93LkpldEZvcm1CdWlsZGVyTWFpbi5pbnB1dERhdGEuZ2V0QWxsICkge1xuXHRcdFx0Y29uc3QgYWxsSW5wdXRzID0gd2luZG93LkpldEZvcm1CdWlsZGVyTWFpbi5pbnB1dERhdGEuZ2V0QWxsKCBmb3JtTm9kZSApIHx8IFtdO1xuXHRcdFx0aW5wdXQgPSBhbGxJbnB1dHMuZmluZCggKCBjdXJyZW50ICkgPT4gY3VycmVudC5uYW1lID09PSBhY3R1YWxOYW1lIClcblx0XHRcdFx0fHwgYWxsSW5wdXRzLmZpbmQoICggY3VycmVudCApID0+IGN1cnJlbnQubmFtZSA9PT0gZmllbGROYW1lIClcblx0XHRcdFx0fHwgYWxsSW5wdXRzLmZpbmQoXG5cdFx0XHRcdFx0KCBjdXJyZW50ICkgPT4gZmllbGROYW1lICYmIChcblx0XHRcdFx0XHRcdGN1cnJlbnQubmFtZT8uZW5kc1dpdGgoIGBbJHsgZmllbGROYW1lIH1dYCApXG5cdFx0XHRcdFx0XHR8fCBjdXJyZW50Lm5hbWU/LmVuZHNXaXRoKCBgWyR7IGZpZWxkTmFtZSB9XVtdYCApXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHQpO1xuXHRcdH1cblxuXHRcdHJldHVybiBpbnB1dD8udmFsdWU/LmN1cnJlbnQgPz8gbnVsbDtcblx0fVxuXG5cdHJlc29sdmVBY3R1YWxJbnB1dE5hbWUoIGZpZWxkRWxlbWVudCwgZmllbGRUeXBlICkge1xuXHRcdGlmICggZmllbGRUeXBlID09PSAnc2VsZWN0JyApIHtcblx0XHRcdHJldHVybiBmaWVsZEVsZW1lbnQuZ2V0QXR0cmlidXRlKCAnbmFtZScgKSB8fCBmaWVsZEVsZW1lbnQuZGF0YXNldC5maWVsZE5hbWUgfHwgJyc7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZmlyc3RJbnB1dCA9IGZpZWxkRWxlbWVudC5xdWVyeVNlbGVjdG9yKCBgaW5wdXRbdHlwZT1cIiR7IGZpZWxkVHlwZSB9XCJdYCApO1xuXHRcdHJldHVybiBmaXJzdElucHV0Py5nZXRBdHRyaWJ1dGUoICduYW1lJyApIHx8IGZpZWxkRWxlbWVudC5kYXRhc2V0LmZpZWxkTmFtZSB8fCAnJztcblx0fVxuXG5cdC8qKlxuXHQgKiBSZS1pbml0aWFsaXplIGEgZmllbGQgdmlhIEpGQidzIHN0YW5kYXJkIE9ic2VydmFibGUub2JzZXJ2ZUlucHV0KCkgQVBJLlxuXHQgKlxuXHQgKiBBZnRlciBET00gY2hhbmdlcyAobmV3IG9wdGlvbnMgd2l0aCBjdXN0b20gdGVtcGxhdGVzKSwgdGhlIGZpZWxkJ3MgSW5wdXREYXRhXG5cdCAqIG11c3QgYmUgcmVwbGFjZWQgc28gdGhhdCBjcmVhdGVJbnB1dCgpIHJlLWV2YWx1YXRlcyBhbmQgcGlja3MgdGhlIGNvcnJlY3Rcblx0ICogaGFuZGxlciAoZS5nLiBEeW5hbWljQ2hlY2tib3hEYXRhIGluc3RlYWQgb2YgcGxhaW4gQ2hlY2tib3hEYXRhKS5cblx0ICogb2JzZXJ2ZUlucHV0KCkgYWxzbyBmaXJlcyBqZXQuZmIuaW5wdXQubWFrZVJlYWN0aXZlLCB3aGljaCBsZXRzXG5cdCAqIGxpc3Rpbmcub3B0aW9ucyBiaW5kIHRlbXBsYXRlIGNsaWNrcyBhbmQgLS1jaGVja2VkIGNsYXNzIHRvZ2dsaW5nLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSAgICAgIGZpZWxkRWxlbWVudCBUaGUgW2RhdGEtamZiLXN5bmNdIGNvbnRhaW5lciBlbGVtZW50LlxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fG51bGx9IGZvcm1Ob2RlICAgICBUaGUgZm9ybSBlbGVtZW50LlxuXHQgKlxuXHQgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHJlLWluaXRpYWxpemF0aW9uIHN1Y2NlZWRlZC5cblx0ICovXG5cdHJlSW5pdEZpZWxkKCBmaWVsZEVsZW1lbnQsIGZvcm1Ob2RlICkge1xuXHRcdGlmICggISBmb3JtTm9kZSApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBSb290IE9ic2VydmFibGUub2JzZXJ2ZUlucHV0KCkgaW50ZW50aW9uYWxseSBza2lwcyBmaWVsZHMgaW5zaWRlIHJlcGVhdGVyXG5cdFx0Ly8gcm93cywgYmVjYXVzZSB0aGV5IGJlbG9uZyB0byByb3ctc2NvcGVkIG9ic2VydmFibGVzLiBDYWxsaW5nIGl0IGhlcmUgd291bGRcblx0XHQvLyByZXR1cm4gdW5kZWZpbmVkIGFuZCBjcmFzaCBvbiBpbnB1dC5tYWtlUmVhY3RpdmUoKS4gRm9yIHJlcGVhdGVyIHRhcmdldHMsXG5cdFx0Ly8gZmFsbCBiYWNrIHRvIERPTSB1cGRhdGUgKyBzeW50aGV0aWMgY2hhbmdlIGV2ZW50IGJlbG93LlxuXHRcdGlmICggZmllbGRFbGVtZW50LmNsb3Nlc3QoICcuamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcl9fcm93JyApICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHN5bmNOb2RlID0gZmllbGRFbGVtZW50Lmhhc0F0dHJpYnV0ZSggJ2RhdGEtamZiLXN5bmMnIClcblx0XHRcdD8gZmllbGRFbGVtZW50XG5cdFx0XHQ6IGZpZWxkRWxlbWVudC5xdWVyeVNlbGVjdG9yKCAnW2RhdGEtamZiLXN5bmNdJyApO1xuXG5cdFx0aWYgKCAhIHN5bmNOb2RlICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGZvcm1JZCAgICAgPSBmb3JtTm9kZS5kYXRhc2V0LmZvcm1JZDtcblx0XHRjb25zdCBvYnNlcnZhYmxlID0gZm9ybUlkICYmIHdpbmRvdy5KZXRGb3JtQnVpbGRlciA/IHdpbmRvdy5KZXRGb3JtQnVpbGRlclsgZm9ybUlkIF0gOiBudWxsO1xuXG5cdFx0aWYgKCAhIG9ic2VydmFibGUgfHwgISBvYnNlcnZhYmxlLm9ic2VydmVJbnB1dCApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRvYnNlcnZhYmxlLm9ic2VydmVJbnB1dCggc3luY05vZGUsIHRydWUgKTtcblxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgdmlzdWFsIHdyYXBwZXIgZm9yIGxvYWRpbmcvZXJyb3Igc3RhdGUgY2xhc3Nlcy5cblx0ICpcblx0ICogRm9yIHNlbGVjdCBlbGVtZW50cyB0aGUgd3JhcHBlciBpcyB0aGUgY2xvc2VzdCAuamV0LWZvcm0tYnVpbGRlcl9fZmllbGQtd3JhcCBhbmNlc3Rvci5cblx0ICogRm9yIGNoZWNrYm94L3JhZGlvLCBmaWVsZEVsZW1lbnQgSVMgdGhlIG91dGVyIC5jaGVja3JhZGlvLXdyYXAgZGl2XG5cdCAqIChjbGFzcyBqZXQtZm9ybS1idWlsZGVyX19maWVsZHMtZ3JvdXApLCBzbyB3ZSB1c2UgaXQgZGlyZWN0bHkuXG5cdCAqXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGZpZWxkRWxlbWVudCBGaWVsZCBlbGVtZW50IChzZWxlY3Qgb3IgLmNoZWNrcmFkaW8td3JhcCBkaXYpLlxuXHQgKlxuXHQgKiBAcmV0dXJuIHtIVE1MRWxlbWVudHxudWxsfSBXcmFwcGVyIGVsZW1lbnQuXG5cdCAqL1xuXHRnZXRTdGF0ZVdyYXBwZXIoIGZpZWxkRWxlbWVudCApIHtcblx0XHQvLyBJZiBpdCdzIHRoZSAuY2hlY2tyYWRpby13cmFwIGNvbnRhaW5lciBpdHNlbGYsIHVzZSBpdCBkaXJlY3RseVxuXHRcdGlmICggZmllbGRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggJ2NoZWNrcmFkaW8td3JhcCcgKSApIHtcblx0XHRcdHJldHVybiBmaWVsZEVsZW1lbnQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZpZWxkRWxlbWVudC5jbG9zZXN0KCAnLmpldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkLXdyYXAnICkgfHwgZmllbGRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cdH1cblxuXHQvKipcblx0ICogU2V0IGxvYWRpbmcgc3RhdGUgZm9yIGEgZmllbGQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGZpZWxkRWxlbWVudCBGaWVsZCBlbGVtZW50LlxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59ICAgICBpc0xvYWRpbmcgICAgTG9hZGluZyBzdGF0ZS5cblx0ICovXG5cdHNldExvYWRpbmdTdGF0ZSggZmllbGRFbGVtZW50LCBpc0xvYWRpbmcgKSB7XG5cdFx0Y29uc3Qgd3JhcHBlciA9IHRoaXMuZ2V0U3RhdGVXcmFwcGVyKCBmaWVsZEVsZW1lbnQgKTtcblxuXHRcdGlmICggISB3cmFwcGVyICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICggaXNMb2FkaW5nICkge1xuXHRcdFx0d3JhcHBlci5jbGFzc0xpc3QuYWRkKCAnamZiLWF1dG8tdXBkYXRlLWxvYWRpbmcnICk7XG5cblx0XHRcdGlmICggISB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoICcuamZiLWF1dG8tdXBkYXRlLXNwaW5uZXInICkgKSB7XG5cdFx0XHRcdGNvbnN0IHNwaW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnc3BhbicgKTtcblx0XHRcdFx0c3Bpbm5lci5jbGFzc05hbWUgPSAnamZiLWF1dG8tdXBkYXRlLXNwaW5uZXInO1xuXHRcdFx0XHRzcGlubmVyLnNldEF0dHJpYnV0ZSggJ2FyaWEtbGFiZWwnLCAnTG9hZGluZyBvcHRpb25zLi4uJyApO1xuXHRcdFx0XHR3cmFwcGVyLmFwcGVuZENoaWxkKCBzcGlubmVyICk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSggJ2pmYi1hdXRvLXVwZGF0ZS1sb2FkaW5nJyApO1xuXG5cdFx0XHRjb25zdCBzcGlubmVyID0gd3JhcHBlci5xdWVyeVNlbGVjdG9yKCAnLmpmYi1hdXRvLXVwZGF0ZS1zcGlubmVyJyApO1xuXHRcdFx0aWYgKCBzcGlubmVyICkge1xuXHRcdFx0XHRzcGlubmVyLnJlbW92ZSgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBTZXQgZXJyb3Igc3RhdGUgZm9yIGEgZmllbGQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGZpZWxkRWxlbWVudCBGaWVsZCBlbGVtZW50LlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gICAgICBlcnJvck1lc3NhZ2UgRXJyb3IgbWVzc2FnZS5cblx0ICovXG5cdHNldEVycm9yU3RhdGUoIGZpZWxkRWxlbWVudCwgZXJyb3JNZXNzYWdlICkge1xuXHRcdGNvbnN0IHdyYXBwZXIgPSB0aGlzLmdldFN0YXRlV3JhcHBlciggZmllbGRFbGVtZW50ICk7XG5cblx0XHRpZiAoICEgd3JhcHBlciApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR3cmFwcGVyLmNsYXNzTGlzdC5hZGQoICdqZmItYXV0by11cGRhdGUtZXJyb3InICk7XG5cblx0XHRsZXQgZXJyb3JFbGVtZW50ID0gd3JhcHBlci5xdWVyeVNlbGVjdG9yKCAnLmpmYi1hdXRvLXVwZGF0ZS1lcnJvci1tZXNzYWdlJyApO1xuXG5cdFx0aWYgKCAhIGVycm9yRWxlbWVudCApIHtcblx0XHRcdGVycm9yRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XG5cdFx0XHRlcnJvckVsZW1lbnQuY2xhc3NOYW1lID0gJ2pmYi1hdXRvLXVwZGF0ZS1lcnJvci1tZXNzYWdlJztcblx0XHRcdHdyYXBwZXIuYXBwZW5kQ2hpbGQoIGVycm9yRWxlbWVudCApO1xuXHRcdH1cblxuXHRcdGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IGVycm9yTWVzc2FnZTtcblxuXHRcdHNldFRpbWVvdXQoICgpID0+IHtcblx0XHRcdHRoaXMuY2xlYXJFcnJvclN0YXRlKCBmaWVsZEVsZW1lbnQgKTtcblx0XHR9LCA1MDAwICk7XG5cdH1cblxuXHQvKipcblx0ICogQ2xlYXIgZXJyb3Igc3RhdGUgZm9yIGEgZmllbGQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGZpZWxkRWxlbWVudCBGaWVsZCBlbGVtZW50LlxuXHQgKi9cblx0Y2xlYXJFcnJvclN0YXRlKCBmaWVsZEVsZW1lbnQgKSB7XG5cdFx0Y29uc3Qgd3JhcHBlciA9IHRoaXMuZ2V0U3RhdGVXcmFwcGVyKCBmaWVsZEVsZW1lbnQgKTtcblxuXHRcdGlmICggISB3cmFwcGVyICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSggJ2pmYi1hdXRvLXVwZGF0ZS1lcnJvcicgKTtcblxuXHRcdGNvbnN0IGVycm9yRWxlbWVudCA9IHdyYXBwZXIucXVlcnlTZWxlY3RvciggJy5qZmItYXV0by11cGRhdGUtZXJyb3ItbWVzc2FnZScgKTtcblx0XHRpZiAoIGVycm9yRWxlbWVudCApIHtcblx0XHRcdGVycm9yRWxlbWVudC5yZW1vdmUoKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT3B0aW9uc1VwZGF0ZXI7XG4iLCIvKipcbiAqIEF1dG9jb21wbGV0ZSBCcmlkZ2UgZm9yIEF1dG8tVXBkYXRlIEZlYXR1cmUuXG4gKlxuICogSW50ZWdyYXRlcyB0aGUgYXV0by11cGRhdGUgZ2VuZXJhdG9yIHN5c3RlbSB3aXRoIHRoZSBTZWxlY3QgQXV0b2NvbXBsZXRlIGFkZG9uLlxuICogV2hlbiBhIHNlbGVjdCBmaWVsZCBoYXMgYm90aCBhdXRvY29tcGxldGUgYW5kIGF1dG8tdXBkYXRlIGVuYWJsZWQsXG4gKiB0aGlzIG1vZHVsZSBpbmplY3RzIGRlcGVuZGVudCBmaWVsZCBjb250ZXh0IGludG8gdGhlIEFKQVggZGF0YSBmdW5jdGlvblxuICogc28gdGhlIGFkZG9uJ3MgUEhQIGhhbmRsZXIgY2FuIHVzZSBSZWdpc3RyeTo6Z2VuZXJhdGUoKSB3aXRoIGNvbnRleHQuXG4gKlxuICogVXNlcyB0aGUgYGpldC5mYi5zZWxlY3RfYXV0b2NvbXBsZXRlLm9wdGlvbnNgIGZpbHRlciBwcm92aWRlZCBieSB0aGUgYWRkb24sXG4gKiB3aGljaCBwYXNzZXMgdGhlIGZ1bGwgU2VsZWN0MiBjb25maWcgKGluY2x1ZGluZyBgYWpheGApIGFsb25nIHdpdGggYCRmaWVsZGAuXG4gKlxuICogQHBhY2thZ2UgSmV0Rm9ybUJ1aWxkZXJcbiAqL1xuXG5jb25zdCB7IGFkZEZpbHRlciB9ID0gd3AuaG9va3M7XG5cbi8qKlxuICogUGFyc2UgbGlzdGVuLXRvIGZpZWxkIG5hbWVzIGZyb20gYSBjb250YWluZXIgZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250YWluZXIgRWxlbWVudCB3aXRoIGRhdGEtbGlzdGVuLXRvIGF0dHJpYnV0ZS5cbiAqXG4gKiBAcmV0dXJuIHtBcnJheX0gQXJyYXkgb2YgZmllbGQgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlTGlzdGVuVG8oIGNvbnRhaW5lciApIHtcblx0Y29uc3QgcmF3ID0gY29udGFpbmVyLmRhdGFzZXQubGlzdGVuVG87XG5cblx0aWYgKCAhIHJhdyApIHtcblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHRpZiAoIGNvbnRhaW5lci5kYXRhc2V0Lmxpc3RlblRvTXVsdGlwbGUgPT09ICcxJyApIHtcblx0XHR0cnkge1xuXHRcdFx0cmV0dXJuIEpTT04ucGFyc2UoIHJhdyApO1xuXHRcdH0gY2F0Y2ggKCBlICkge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBbIHJhdyBdO1xufVxuXG4vKipcbiAqIENvbGxlY3QgY3VycmVudCB2YWx1ZXMgZnJvbSBsaXN0ZW5lZCBmb3JtIGZpZWxkcy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSAgICAgICBsaXN0ZW5UbyBBcnJheSBvZiBmaWVsZCBuYW1lcyB0byBjb2xsZWN0LlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZm9ybU5vZGUgRm9ybSBlbGVtZW50LlxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gQ29udGV4dCBvYmplY3QgeyBmaWVsZE5hbWU6IHZhbHVlIH0uXG4gKi9cbmZ1bmN0aW9uIGNvbGxlY3RDb250ZXh0KCBsaXN0ZW5UbywgZm9ybU5vZGUgKSB7XG5cdGNvbnN0IGNvbnRleHQgPSB7fTtcblxuXHRsaXN0ZW5Uby5mb3JFYWNoKCAoIGZpZWxkTmFtZSApID0+IHtcblx0XHRjb25zdCBlbCA9IGZvcm1Ob2RlLnF1ZXJ5U2VsZWN0b3IoIGBbZGF0YS1maWVsZC1uYW1lPVwiJHsgZmllbGROYW1lIH1cIl1gIClcblx0XHRcdHx8IGZvcm1Ob2RlLnF1ZXJ5U2VsZWN0b3IoIGBbbmFtZT1cIiR7IGZpZWxkTmFtZSB9XCJdYCApXG5cdFx0XHR8fCBmb3JtTm9kZS5xdWVyeVNlbGVjdG9yKCBgW25hbWU9XCIkeyBmaWVsZE5hbWUgfVtdXCJdYCApXG5cdFx0XHR8fCBmb3JtTm9kZS5xdWVyeVNlbGVjdG9yKCBgW25hbWUqPVwiWyR7IGZpZWxkTmFtZSB9XVwiXWAgKTtcblxuXHRcdGlmICggISBlbCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBhY3R1YWxOYW1lID0gZWwuZ2V0QXR0cmlidXRlKCAnbmFtZScgKVxuXHRcdFx0fHwgZWwucXVlcnlTZWxlY3RvciggJ1tuYW1lXScgKT8uZ2V0QXR0cmlidXRlKCAnbmFtZScgKVxuXHRcdFx0fHwgZmllbGROYW1lO1xuXG5cdFx0bGV0IGlucHV0ID0gbnVsbDtcblxuXHRcdGlmICggd2luZG93LkpldEZvcm1CdWlsZGVyTWFpbj8uaW5wdXREYXRhICkge1xuXHRcdFx0aW5wdXQgPSB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJNYWluLmlucHV0RGF0YS5maW5kSW5wdXQ/LiggYWN0dWFsTmFtZSwgZm9ybU5vZGUgKVxuXHRcdFx0XHR8fCB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJNYWluLmlucHV0RGF0YS5maW5kSW5wdXQ/LiggZmllbGROYW1lLCBmb3JtTm9kZSApXG5cdFx0XHRcdHx8IHdpbmRvdy5KZXRGb3JtQnVpbGRlck1haW4uaW5wdXREYXRhLmdldElucHV0Py4oIGFjdHVhbE5hbWUsIGZvcm1Ob2RlIClcblx0XHRcdFx0fHwgd2luZG93LkpldEZvcm1CdWlsZGVyTWFpbi5pbnB1dERhdGEuZ2V0SW5wdXQ/LiggZmllbGROYW1lLCBmb3JtTm9kZSApO1xuXG5cdFx0XHRpZiAoICEgaW5wdXQgJiYgd2luZG93LkpldEZvcm1CdWlsZGVyTWFpbi5pbnB1dERhdGEuZ2V0QWxsICkge1xuXHRcdFx0XHRjb25zdCBhbGxJbnB1dHMgPSB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJNYWluLmlucHV0RGF0YS5nZXRBbGwoIGZvcm1Ob2RlICkgfHwgW107XG5cdFx0XHRcdGlucHV0ID0gYWxsSW5wdXRzLmZpbmQoICggY3VycmVudCApID0+IGN1cnJlbnQubmFtZSA9PT0gYWN0dWFsTmFtZSApXG5cdFx0XHRcdFx0fHwgYWxsSW5wdXRzLmZpbmQoICggY3VycmVudCApID0+IGN1cnJlbnQubmFtZSA9PT0gZmllbGROYW1lICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKCBpbnB1dCApIHtcblx0XHRcdGNvbnRleHRbIGZpZWxkTmFtZSBdID0gaW5wdXQudmFsdWUuY3VycmVudDtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBzZWxlY3RNdWx0aXBsZSA9IGVsLm1hdGNoZXMoICdzZWxlY3RbbXVsdGlwbGVdJyApXG5cdFx0XHQ/IGVsXG5cdFx0XHQ6IGVsLnF1ZXJ5U2VsZWN0b3IoICdzZWxlY3RbbXVsdGlwbGVdJyApO1xuXG5cdFx0aWYgKCBzZWxlY3RNdWx0aXBsZSApIHtcblx0XHRcdGNvbnRleHRbIGZpZWxkTmFtZSBdID0gQXJyYXkuZnJvbSggc2VsZWN0TXVsdGlwbGUuc2VsZWN0ZWRPcHRpb25zICkubWFwKFxuXHRcdFx0XHQoIG9wdGlvbiApID0+IG9wdGlvbi52YWx1ZVxuXHRcdFx0KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb250ZXh0WyBmaWVsZE5hbWUgXSA9IGVsLnZhbHVlIHx8ICcnO1xuXHR9ICk7XG5cblx0cmV0dXJuIGNvbnRleHQ7XG59XG5cbi8qKlxuICogSG9vayBpbnRvIHRoZSBhdXRvY29tcGxldGUgYWRkb24ncyBTZWxlY3QyIG9wdGlvbnMgZmlsdGVyLlxuICpcbiAqIEluamVjdHMgZGVwZW5kZW50IGZpZWxkIGNvbnRleHQgaW50byB0aGUgQUpBWCBkYXRhIGZ1bmN0aW9uIHNvIHRoZSBhZGRvbidzXG4gKiBQSFAgaGFuZGxlciAoQmFzZUFqYXhIYW5kbGVyKSByZWNlaXZlcyBjb250ZXh0IGFuZCBjYW4gcm91dGUgdGhyb3VnaFxuICogUmVnaXN0cnk6OmdlbmVyYXRlKCkgZm9yIGdlbmVyYXRvciBmaWVsZHMgd2l0aCBhdXRvLXVwZGF0ZS5cbiAqXG4gKiBGaWx0ZXIgc2lnbmF0dXJlOiBhcHBseUZpbHRlcnMoICdqZXQuZmIuc2VsZWN0X2F1dG9jb21wbGV0ZS5vcHRpb25zJywgc2VsZWN0Mk9wdGlvbnMsICRmaWVsZCApXG4gKi9cbmFkZEZpbHRlcihcblx0J2pldC5mYi5zZWxlY3RfYXV0b2NvbXBsZXRlLm9wdGlvbnMnLFxuXHQnamV0LWZvcm0tYnVpbGRlci9hdXRvLXVwZGF0ZS1jb250ZXh0Jyxcblx0ZnVuY3Rpb24gKCBzZWxlY3QyT3B0aW9ucywgJGZpZWxkICkge1xuXHRcdGlmICggISAkZmllbGQgKSB7XG5cdFx0XHRyZXR1cm4gc2VsZWN0Mk9wdGlvbnM7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZmllbGRFbCA9ICRmaWVsZFsgMCBdIHx8ICRmaWVsZDtcblxuXHRcdGlmICggISBmaWVsZEVsIHx8ICEgZmllbGRFbC5kYXRhc2V0IHx8IGZpZWxkRWwuZGF0YXNldC5qZmJBdXRvVXBkYXRlICE9PSAnMScgKSB7XG5cdFx0XHRyZXR1cm4gc2VsZWN0Mk9wdGlvbnM7XG5cdFx0fVxuXG5cdFx0aWYgKCAhIHNlbGVjdDJPcHRpb25zLmFqYXggKSB7XG5cdFx0XHRyZXR1cm4gc2VsZWN0Mk9wdGlvbnM7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZm9ybU5vZGUgPSBmaWVsZEVsLmNsb3Nlc3QoICdmb3JtJyApO1xuXG5cdFx0aWYgKCAhIGZvcm1Ob2RlICkge1xuXHRcdFx0cmV0dXJuIHNlbGVjdDJPcHRpb25zO1xuXHRcdH1cblxuXHRcdGNvbnN0IGxpc3RlblRvID0gcGFyc2VMaXN0ZW5UbyggZmllbGRFbCApO1xuXG5cdFx0aWYgKCAhIGxpc3RlblRvLmxlbmd0aCApIHtcblx0XHRcdHJldHVybiBzZWxlY3QyT3B0aW9ucztcblx0XHR9XG5cblx0XHQvLyBXcmFwIHRoZSBvcmlnaW5hbCBkYXRhIGZ1bmN0aW9uIHRvIGluamVjdCBjb250ZXh0XG5cdFx0Y29uc3Qgb3JpZ2luYWxEYXRhRm4gPSBzZWxlY3QyT3B0aW9ucy5hamF4LmRhdGE7XG5cblx0XHRzZWxlY3QyT3B0aW9ucy5hamF4LmRhdGEgPSBmdW5jdGlvbiAoIHBhcmFtcyApIHtcblx0XHRcdGNvbnN0IGRhdGEgPSB0eXBlb2Ygb3JpZ2luYWxEYXRhRm4gPT09ICdmdW5jdGlvbidcblx0XHRcdFx0PyBvcmlnaW5hbERhdGFGbiggcGFyYW1zIClcblx0XHRcdFx0OiBwYXJhbXM7XG5cblx0XHRcdC8vIENvbGxlY3QgY3VycmVudCB2YWx1ZXMgZnJvbSBkZXBlbmRlbnQgZmllbGRzIGFuZCBhZGQgYXMgY29udGV4dFxuXHRcdFx0Y29uc3QgY29udGV4dCA9IGNvbGxlY3RDb250ZXh0KCBsaXN0ZW5UbywgZm9ybU5vZGUgKTtcblx0XHRcdGRhdGEuY29udGV4dCA9IEpTT04uc3RyaW5naWZ5KCBjb250ZXh0ICk7XG5cblx0XHRcdHJldHVybiBkYXRhO1xuXHRcdH07XG5cblx0XHRyZXR1cm4gc2VsZWN0Mk9wdGlvbnM7XG5cdH1cbik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0ZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKipcbiAqIEF1dG8tVXBkYXRlIEZlYXR1cmUg4oCUIG1haW4gZW50cnkgcG9pbnQuXG4gKiBIb29rcyBpbnRvIEpGQiBmb3JtIGxpZmVjeWNsZSBhbmQgc2V0cyB1cCBmaWVsZCB3YXRjaGVycy5cbiAqXG4gKiBAcGFja2FnZSBKZXRGb3JtQnVpbGRlclxuICovXG5cbmltcG9ydCBGaWVsZFdhdGNoZXIgZnJvbSAnLi9GaWVsZFdhdGNoZXInO1xuaW1wb3J0ICcuL2F1dG9jb21wbGV0ZS1icmlkZ2UnO1xuaW1wb3J0ICcuL3N0eWxlcy5wY3NzJztcblxuLyoqIEB0eXBlIHtGaWVsZFdhdGNoZXJ8bnVsbH0gKi9cbmxldCBnbG9iYWxXYXRjaGVyID0gbnVsbDtcblxuLyoqXG4gKiBAcmV0dXJuIHtGaWVsZFdhdGNoZXJ9XG4gKi9cbmZ1bmN0aW9uIGdldFdhdGNoZXIoKSB7XG5cdGlmICggISBnbG9iYWxXYXRjaGVyICkge1xuXHRcdGdsb2JhbFdhdGNoZXIgPSBuZXcgRmllbGRXYXRjaGVyKCk7XG5cdH1cblxuXHRyZXR1cm4gZ2xvYmFsV2F0Y2hlcjtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fGpRdWVyeX0gZm9ybU5vZGVcbiAqL1xuZnVuY3Rpb24gaW5pdEF1dG9VcGRhdGUoIGZvcm1Ob2RlICkge1xuXHRpZiAoICEgZm9ybU5vZGUgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKCBmb3JtTm9kZSBpbnN0YW5jZW9mIGpRdWVyeSApIHtcblx0XHRmb3JtTm9kZSA9IGZvcm1Ob2RlWyAwIF07XG5cdH1cblxuXHRpZiAoICEgZm9ybU5vZGU/LnF1ZXJ5U2VsZWN0b3JBbGwgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Z2V0V2F0Y2hlcigpLmluaXRGb3JtKCBmb3JtTm9kZSApO1xufVxuXG4vKipcbiAqIE11dGF0aW9uT2JzZXJ2ZXIgZm9yIGR5bmFtaWNhbGx5IGFkZGVkL3JlbW92ZWQgZmllbGRzIChDb25kaXRpb25hbCBCbG9ja3MsIFJlcGVhdGVyIHJvd3MpLlxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8alF1ZXJ5fSBmb3JtTm9kZVxuICovXG5mdW5jdGlvbiBvYnNlcnZlRHluYW1pY0ZpZWxkcyggZm9ybU5vZGUgKSB7XG5cdGlmICggISBmb3JtTm9kZSB8fCAhIHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmICggZm9ybU5vZGUgaW5zdGFuY2VvZiBqUXVlcnkgKSB7XG5cdFx0Zm9ybU5vZGUgPSBmb3JtTm9kZVsgMCBdO1xuXHR9XG5cblx0aWYgKCAhIGZvcm1Ob2RlPy5xdWVyeVNlbGVjdG9yQWxsICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIE11bHRpLXN0ZXAgZm9ybXMgY2FuIGZpcmUgYWZ0ZXItaW5pdCBtb3JlIHRoYW4gb25jZSBmb3IgdGhlIHNhbWUgZm9ybS5cblx0Ly8gQXZvaWQgc3RhY2tpbmcgbXVsdGlwbGUgb2JzZXJ2ZXJzIG9uIG9uZSBmb3JtIGluc3RhbmNlLlxuXHRpZiAoIGZvcm1Ob2RlLmhhc0F0dHJpYnV0ZSggJ2RhdGEtamZiLWF1LW9ic2VydmVkJyApICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGZvcm1Ob2RlLnNldEF0dHJpYnV0ZSggJ2RhdGEtamZiLWF1LW9ic2VydmVkJywgJzEnICk7XG5cblx0Zm9ybU5vZGUuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCBldmVudCApID0+IHtcblx0XHRjb25zdCByZW1vdmVCdXR0b24gPSBldmVudC50YXJnZXQ/LmNsb3Nlc3Q/LiggJy5qZXQtZm9ybS1idWlsZGVyLXJlcGVhdGVyX19yZW1vdmUnICk7XG5cblx0XHRpZiAoICEgcmVtb3ZlQnV0dG9uICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGdldFdhdGNoZXIoKS5wcmVzZXJ2ZVJlcGVhdGVyVmFsdWVzQmVmb3JlUmVtb3ZhbCggcmVtb3ZlQnV0dG9uLCBmb3JtTm9kZSApO1xuXHR9LCB0cnVlICk7XG5cblx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlciggKCBtdXRhdGlvbnMgKSA9PiB7XG5cdFx0bXV0YXRpb25zLmZvckVhY2goICggbXV0YXRpb24gKSA9PiB7XG5cdFx0XHRtdXRhdGlvbi5yZW1vdmVkTm9kZXMuZm9yRWFjaCggKCBub2RlICkgPT4ge1xuXHRcdFx0XHRpZiAoIG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFICkge1xuXHRcdFx0XHRcdGNsZWFudXBSZW1vdmVkUmVwZWF0ZXJSb3coIG5vZGUgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXG5cdFx0XHRtdXRhdGlvbi5hZGRlZE5vZGVzLmZvckVhY2goICggbm9kZSApID0+IHtcblx0XHRcdFx0aWYgKCBub2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSApIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCBhcHBlYXJlZEZpZWxkcyA9IFtdO1xuXG5cdFx0XHRcdGlmICggbm9kZS5oYXNBdHRyaWJ1dGUgJiYgbm9kZS5nZXRBdHRyaWJ1dGUoICdkYXRhLWZpZWxkLW5hbWUnICkgKSB7XG5cdFx0XHRcdFx0YXBwZWFyZWRGaWVsZHMucHVzaCggbm9kZSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCBub2RlLnF1ZXJ5U2VsZWN0b3JBbGwgKSB7XG5cdFx0XHRcdFx0bm9kZS5xdWVyeVNlbGVjdG9yQWxsKCAnW2RhdGEtZmllbGQtbmFtZV0nICkuZm9yRWFjaCggKCBmICkgPT4gYXBwZWFyZWRGaWVsZHMucHVzaCggZiApICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRhcHBlYXJlZEZpZWxkcy5mb3JFYWNoKCAoIGZpZWxkRWxlbWVudCApID0+IHtcblx0XHRcdFx0XHRjb25zdCBmaWVsZE5hbWUgPSBmaWVsZEVsZW1lbnQuZ2V0QXR0cmlidXRlKCAnZGF0YS1maWVsZC1uYW1lJyApO1xuXG5cdFx0XHRcdFx0aWYgKCBmaWVsZEVsZW1lbnQuaGFzQXR0cmlidXRlKCAnZGF0YS1qZmItYXV0by11cGRhdGUnICkgKSB7XG5cdFx0XHRcdFx0XHRnZXRXYXRjaGVyKCkuaW5pdEZpZWxkKCBmaWVsZEVsZW1lbnQsIGZvcm1Ob2RlLCB7XG5cdFx0XHRcdFx0XHRcdGlzRHluYW1pY0luaXQ6IHRydWUsXG5cdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmV0cnlGYWlsZWRXYXRjaGVycyggZmllbGROYW1lLCBmb3JtTm9kZSApO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0Ly8gT2JzZXJ2ZSB0aGUgZm9ybSBmb3IgY2hhbmdlcyBpbiB0aGUgRE9NIHRyZWVcblx0b2JzZXJ2ZXIub2JzZXJ2ZSggZm9ybU5vZGUsIHtcblx0XHRjaGlsZExpc3Q6IHRydWUsXG5cdFx0c3VidHJlZTogdHJ1ZSxcblx0fSApO1xuXG59XG5cbi8qKlxuICogQ2xlYW4gdXAgd2F0Y2hlcnMgYW5kIGNhY2hlZCBkYXRhIGZvciBmaWVsZHMgaW4gYSByZW1vdmVkIHJlcGVhdGVyIHJvdy5cbiAqXG4gKiBXaGVuIGEgcmVwZWF0ZXIgcm93IGlzIHJlbW92ZWQgd2UgbXVzdCB0ZWFyIGRvd24gYW55IHdhdGNoZXJzIHRoYXQgd2VyZVxuICogc2NvcGVkIHRvIHRoYXQgcm93IHNvIHRoZXkgZG9uJ3QgaG9sZCByZWZlcmVuY2VzIHRvIGRldGFjaGVkIGVsZW1lbnRzLlxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHJlbW92ZWROb2RlIFRoZSBET00gbm9kZSB0aGF0IHdhcyByZW1vdmVkLlxuICovXG5mdW5jdGlvbiBjbGVhbnVwUmVtb3ZlZFJlcGVhdGVyUm93KCByZW1vdmVkTm9kZSApIHtcblx0Ly8gQ2hlY2sgaWYgdGhlIHJlbW92ZWQgbm9kZSBpcyBpdHNlbGYgYSByZXBlYXRlciByb3cgb3IgY29udGFpbnMgcm93c1xuXHRjb25zdCByb3dzID0gW107XG5cblx0aWYgKCByZW1vdmVkTm9kZS5kYXRhc2V0Py5yZXBlYXRlclJvdyA9PT0gJzEnIHx8XG5cdCAgICAgcmVtb3ZlZE5vZGUuY2xhc3NMaXN0Py5jb250YWlucyggJ2pldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXJfX3JvdycgKSApIHtcblx0XHRyb3dzLnB1c2goIHJlbW92ZWROb2RlICk7XG5cdH1cblxuXHRpZiAoIHJlbW92ZWROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwgKSB7XG5cdFx0Y29uc3QgbmVzdGVkUm93cyA9IHJlbW92ZWROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoICcuamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcl9fcm93JyApO1xuXHRcdG5lc3RlZFJvd3MuZm9yRWFjaCggKCByb3cgKSA9PiByb3dzLnB1c2goIHJvdyApICk7XG5cdH1cblxuXHRpZiAoICEgcm93cy5sZW5ndGggKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qgd2F0Y2hlciA9IGdldFdhdGNoZXIoKTtcblxuXHRyb3dzLmZvckVhY2goICggcm93ICkgPT4ge1xuXHRcdC8vIENvbGxlY3QgZmllbGQga2V5cyB0aGF0IGJlbG9uZyB0byB0aGlzIHJvd1xuXHRcdGNvbnN0IGtleXNUb1JlbW92ZSA9IFtdO1xuXG5cdFx0d2F0Y2hlci5hdXRvVXBkYXRlRmllbGRzLmZvckVhY2goICggZmllbGREYXRhLCBmaWVsZEtleSApID0+IHtcblx0XHRcdGNvbnN0IGVsZW1lbnQgPSBmaWVsZERhdGE/LmVsZW1lbnQ7XG5cdFx0XHRpZiAoIGVsZW1lbnQgJiYgcm93LmNvbnRhaW5zKCBlbGVtZW50ICkgKSB7XG5cdFx0XHRcdGtleXNUb1JlbW92ZS5wdXNoKCBmaWVsZEtleSApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHRcdGtleXNUb1JlbW92ZS5mb3JFYWNoKCAoIGZpZWxkS2V5ICkgPT4ge1xuXHRcdFx0d2F0Y2hlci5hdXRvVXBkYXRlRmllbGRzLmRlbGV0ZSggZmllbGRLZXkgKTtcblx0XHR9ICk7XG5cblx0XHQvLyBSZW1vdmUgd2F0Y2hlcnMgc2NvcGVkIHRvIHRoaXMgcm93XG5cdFx0Y29uc3Qgd2F0Y2hlcktleXNUb1JlbW92ZSA9IFtdO1xuXG5cdFx0d2F0Y2hlci53YXRjaGVycy5mb3JFYWNoKCAoIHdhdGNoZXJEYXRhLCB3YXRjaGVyS2V5ICkgPT4ge1xuXHRcdFx0Ly8gV2F0Y2hlciBrZXkgaW5jbHVkZXMgcmVwZWF0ZXIgc2NvcGUg4oCUIGNoZWNrIGlmIHRoaXMgcm93IGlzIHRoZSBzY29wZVxuXHRcdFx0Ly8gYnkgY2hlY2tpbmcgaWYgYW55IGRlcGVuZGVudCBmaWVsZCB3YXMgaW4gdGhpcyByb3dcblx0XHRcdGNvbnN0IGhhc1JlbW92ZWREZXBlbmRlbnRzID0gd2F0Y2hlckRhdGEuZGVwZW5kZW50cy5zb21lKFxuXHRcdFx0XHQoIGRlcCApID0+IGtleXNUb1JlbW92ZS5pbmNsdWRlcyggZGVwIClcblx0XHRcdCk7XG5cblx0XHRcdGlmICggaGFzUmVtb3ZlZERlcGVuZGVudHMgKSB7XG5cdFx0XHRcdC8vIFJlbW92ZSBkZXBlbmRlbnRzIHRoYXQgYmVsb25nIHRvIHRoaXMgcm93XG5cdFx0XHRcdHdhdGNoZXJEYXRhLmRlcGVuZGVudHMgPSB3YXRjaGVyRGF0YS5kZXBlbmRlbnRzLmZpbHRlcihcblx0XHRcdFx0XHQoIGRlcCApID0+ICEga2V5c1RvUmVtb3ZlLmluY2x1ZGVzKCBkZXAgKVxuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdC8vIElmIG5vIG1vcmUgZGVwZW5kZW50cywgdW53YXRjaCBlbnRpcmVseVxuXHRcdFx0XHRpZiAoICEgd2F0Y2hlckRhdGEuZGVwZW5kZW50cy5sZW5ndGggKSB7XG5cdFx0XHRcdFx0aWYgKCB3YXRjaGVyRGF0YS51bndhdGNoICkge1xuXHRcdFx0XHRcdFx0d2F0Y2hlckRhdGEudW53YXRjaCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR3YXRjaGVyS2V5c1RvUmVtb3ZlLnB1c2goIHdhdGNoZXJLZXkgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHRcdHdhdGNoZXJLZXlzVG9SZW1vdmUuZm9yRWFjaCggKCBrZXkgKSA9PiB7XG5cdFx0XHR3YXRjaGVyLndhdGNoZXJzLmRlbGV0ZSgga2V5ICk7XG5cdFx0fSApO1xuXHR9ICk7XG59XG5cbi8qKlxuICogVHJhY2sgd2hpY2ggd2F0Y2hlcnMgd2UgYWxyZWFkeSByZXRyaWVkIHRvIGF2b2lkIGR1cGxpY2F0ZXMuXG4gKiBLZXk6IFwic291cmNlRmllbGROYW1lOnRhcmdldEZpZWxkTmFtZVwiXG4gKi9cbmNvbnN0IHJldHJpZWRXYXRjaGVycyA9IG5ldyBTZXQoKTtcblxuLyoqXG4gKiBSZXRyeSBzZXR0aW5nIHVwIHdhdGNoZXJzIGZvciBmaWVsZHMgdGhhdCB3ZXJlIHdhaXRpbmcgZm9yIHRoaXMgc291cmNlIGZpZWxkLlxuICogV2hlbiBhIHNvdXJjZSBmaWVsZCBhcHBlYXJzIChmcm9tIENvbmRpdGlvbmFsIEJsb2NrKSwgZGVwZW5kZW50IGZpZWxkcyBuZWVkIHRvIHJlLWluaXRpYWxpemUgdGhlaXIgd2F0Y2hlcnMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgc291cmNlRmllbGROYW1lIEZpZWxkIG5hbWUgdGhhdCBqdXN0IGFwcGVhcmVkLlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZm9ybU5vZGUgICAgICAgIEZvcm0gZWxlbWVudC5cbiAqL1xuZnVuY3Rpb24gcmV0cnlGYWlsZWRXYXRjaGVycyggc291cmNlRmllbGROYW1lLCBmb3JtTm9kZSApIHtcblx0Y29uc3Qgd2F0Y2hlciA9IGdldFdhdGNoZXIoKTtcblxuXHQvLyBHZXQgYWxsIGF1dG8tdXBkYXRlIGZpZWxkc1xuXHR3YXRjaGVyLmF1dG9VcGRhdGVGaWVsZHMuZm9yRWFjaCggKCBmaWVsZERhdGEsIHRhcmdldEZpZWxkTmFtZSApID0+IHtcblx0XHRjb25zdCB7IGNvbmZpZyB9ID0gZmllbGREYXRhO1xuXG5cdFx0Ly8gQ2hlY2sgaWYgdGhpcyBmaWVsZCBsaXN0ZW5zIHRvIHRoZSBzb3VyY2UgZmllbGQgdGhhdCBqdXN0IGFwcGVhcmVkXG5cdFx0Ly8gY29uZmlnLmxpc3RlblRvIGlzIG5vdyBhbiBhcnJheVxuXHRcdGlmICggY29uZmlnLmxpc3RlblRvICYmIEFycmF5LmlzQXJyYXkoIGNvbmZpZy5saXN0ZW5UbyApICYmIGNvbmZpZy5saXN0ZW5Uby5pbmNsdWRlcyggc291cmNlRmllbGROYW1lICkgKSB7XG5cdFx0XHQvLyBDcmVhdGUgdW5pcXVlIGtleSBmb3IgdGhpcyB3YXRjaGVyIHBhaXJcblx0XHRcdGNvbnN0IHdhdGNoZXJLZXkgPSBgJHsgc291cmNlRmllbGROYW1lIH06JHsgdGFyZ2V0RmllbGROYW1lIH1gO1xuXG5cdFx0XHQvLyBTa2lwIGlmIHdlIGFscmVhZHkgcmV0cmllZCB0aGlzIHdhdGNoZXJcblx0XHRcdGlmICggcmV0cmllZFdhdGNoZXJzLmhhcyggd2F0Y2hlcktleSApICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIE1hcmsgYXMgcmV0cmllZFxuXHRcdFx0cmV0cmllZFdhdGNoZXJzLmFkZCggd2F0Y2hlcktleSApO1xuXG5cdFx0XHQvLyBSZS1pbml0aWFsaXplIHRoZSB3YXRjaGVyIGZvciB0aGlzIGZpZWxkXG5cdFx0XHR3YXRjaGVyLndhdGNoRmllbGQoIHNvdXJjZUZpZWxkTmFtZSwgdGFyZ2V0RmllbGROYW1lLCBmb3JtTm9kZSApO1xuXG5cdFx0XHQvLyBUcmlnZ2VyIGRlYm91bmNlZCB1cGRhdGUgaWYgQUxMIHNvdXJjZSBmaWVsZHMgaGF2ZSB2YWx1ZXMuXG5cdFx0XHQvLyBEZWJvdW5jZWQgc28gbXVsdGlwbGUgcmV0cmllcyBpbiB0aGUgc2FtZSB0aWNrIGNvbGxhcHNlIGludG8gb25lLlxuXHRcdFx0aWYgKCBhbGxTb3VyY2VGaWVsZHNIYXZlVmFsdWVzKCBjb25maWcubGlzdGVuVG8sIGZvcm1Ob2RlICkgKSB7XG5cdFx0XHRcdHdhdGNoZXIuZGVib3VuY2VkVXBkYXRlKCB0YXJnZXRGaWVsZE5hbWUsIGZvcm1Ob2RlICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9ICk7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYWxsIHNvdXJjZSBmaWVsZHMgaGF2ZSB2YWx1ZXMuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gICAgICAgc291cmNlRmllbGROYW1lcyBBcnJheSBvZiBzb3VyY2UgZmllbGQgbmFtZXMuXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBmb3JtTm9kZSAgICAgICAgIEZvcm0gZWxlbWVudC5cbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGFsbCBmaWVsZHMgaGF2ZSB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIGFsbFNvdXJjZUZpZWxkc0hhdmVWYWx1ZXMoIHNvdXJjZUZpZWxkTmFtZXMsIGZvcm1Ob2RlICkge1xuXHRyZXR1cm4gc291cmNlRmllbGROYW1lcy5ldmVyeSggKCBmaWVsZE5hbWUgKSA9PiB7XG5cdFx0Y29uc3QgZmllbGQgPSBmb3JtTm9kZS5xdWVyeVNlbGVjdG9yKCBgW2RhdGEtZmllbGQtbmFtZT1cIiR7IGZpZWxkTmFtZSB9XCJdYCApIHx8XG5cdFx0ICAgICAgICAgICAgIGZvcm1Ob2RlLnF1ZXJ5U2VsZWN0b3IoIGBbbmFtZT1cIiR7IGZpZWxkTmFtZSB9XCJdYCApO1xuXHRcdHJldHVybiBmaWVsZCAmJiBmaWVsZC52YWx1ZTtcblx0fSApO1xufVxuXG4vKipcbiAqIEhhbmRsZSBjb25kaXRpb25hbCBibG9jayB0b2dnbGluZyBhIGZpZWxkJ3MgRE9NIHByZXNlbmNlLlxuICpcbiAqIFdoZW4gXCJSZW1vdmUgaGlkZGVuIGVsZW1lbnRzIGZyb20gcGFnZSBIVE1MXCIgaXMgZW5hYmxlZCwgdGhlIGNvbmRpdGlvbmFsXG4gKiBibG9jayBmaXJlcyBhIGN1c3RvbSBldmVudC4gSWYgdGhlIHRvZ2dsZWQgYmxvY2sgY29udGFpbnMgYSBzb3VyY2UgZmllbGRcbiAqIHRoYXQgb3VyIGF1dG8tdXBkYXRlIGZpZWxkcyBsaXN0ZW4gdG8sIHdlIHRyaWdnZXIgYW4gdXBkYXRlIHNvIHRoZVxuICogZ2VuZXJhdG9yIHJlLXJ1bnMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0IChlbXB0eSBmb3IgcmVtb3ZlZCBmaWVsZHMpLlxuICpcbiAqIFdoZW4gdGhlIGJsb2NrIGlzIHNob3duIGFnYWluIChyZXN1bHQ6IHRydWUpLCBNdXRhdGlvbk9ic2VydmVyIGhhbmRsZXNcbiAqIHJlLWluaXRpYWxpemF0aW9uIHZpYSByZXRyeUZhaWxlZFdhdGNoZXJzLiBIZXJlIHdlIG9ubHkgbmVlZCB0byBoYW5kbGVcbiAqIHRoZSBoaWRlIGNhc2UgKHJlc3VsdDogZmFsc2UpIOKAlCB0cmlnZ2VyIHVwZGF0ZXMgZm9yIGRlcGVuZGVudHMgc28gdGhleVxuICogZ2V0IGZyZXNoIG9wdGlvbnMgd2l0aG91dCB0aGUgaGlkZGVuIGZpZWxkJ3MgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHNldHVwQ29uZGl0aW9uYWxCbG9ja0xpc3RlbmVyKCkge1xuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuXHRcdCdqZXQtZm9ybS1idWlsZGVyL2NvbmRpdGlvbmFsLWJsb2NrL2Jsb2NrLXRvZ2dsZS1oaWRkZW4tZG9tJyxcblx0XHQoIGV2ZW50ICkgPT4ge1xuXHRcdFx0Y29uc3QgeyBibG9jaywgcmVzdWx0IH0gPSBldmVudC5kZXRhaWwgfHwge307XG5cblx0XHRcdGlmICggISBibG9jayB8fCByZXN1bHQgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qgd2F0Y2hlciA9IGdldFdhdGNoZXIoKTtcblxuXHRcdFx0aWYgKCAhIHdhdGNoZXIud2F0Y2hlcnMuc2l6ZSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBDb2xsZWN0IGZpZWxkIG5hbWVzIGZyb20gdGhlIGJsb2NrIGJlaW5nIGhpZGRlblxuXHRcdFx0Y29uc3QgaGlkZGVuRmllbGROYW1lcyA9IG5ldyBTZXQoKTtcblxuXHRcdFx0Ly8gVGhlIGJsb2NrIGl0c2VsZiBtaWdodCBoYXZlIGEgZmllbGQtbmFtZVxuXHRcdFx0aWYgKCBibG9jay5kYXRhc2V0Py5maWVsZE5hbWUgKSB7XG5cdFx0XHRcdGhpZGRlbkZpZWxkTmFtZXMuYWRkKCBibG9jay5kYXRhc2V0LmZpZWxkTmFtZSApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBGaWVsZHMgaW5zaWRlIHRoZSBibG9ja1xuXHRcdFx0Y29uc3QgaW5uZXJGaWVsZHMgPSBibG9jay5xdWVyeVNlbGVjdG9yQWxsXG5cdFx0XHRcdD8gYmxvY2sucXVlcnlTZWxlY3RvckFsbCggJ1tkYXRhLWZpZWxkLW5hbWVdJyApXG5cdFx0XHRcdDogW107XG5cblx0XHRcdGlubmVyRmllbGRzLmZvckVhY2goICggZmllbGQgKSA9PiB7XG5cdFx0XHRcdGhpZGRlbkZpZWxkTmFtZXMuYWRkKCBmaWVsZC5nZXRBdHRyaWJ1dGUoICdkYXRhLWZpZWxkLW5hbWUnICkgKTtcblx0XHRcdH0gKTtcblxuXHRcdFx0aWYgKCAhIGhpZGRlbkZpZWxkTmFtZXMuc2l6ZSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBGaW5kIGFsbCBhdXRvLXVwZGF0ZSBmaWVsZHMgdGhhdCBkZXBlbmQgb24gYW55IGhpZGRlbiBmaWVsZFxuXHRcdFx0Y29uc3QgdGFyZ2V0RmllbGRzVG9VcGRhdGUgPSBuZXcgU2V0KCk7XG5cblx0XHRcdHdhdGNoZXIud2F0Y2hlcnMuZm9yRWFjaCggKCB3YXRjaGVyRGF0YSwgd2F0Y2hlcktleSApID0+IHtcblx0XHRcdFx0Ly8gd2F0Y2hlcktleSBjb3VsZCBiZSBwbGFpbiBmaWVsZCBuYW1lIG9yIHJlcGVhdGVyLXNjb3BlZFxuXHRcdFx0XHQvLyBDaGVjayBpZiBhbnkgaGlkZGVuIGZpZWxkIG5hbWUgaXMgcGFydCBvZiB0aGUgd2F0Y2hlciBrZXlcblx0XHRcdFx0Y29uc3QgbWF0Y2hlc0hpZGRlbiA9IFsgLi4uaGlkZGVuRmllbGROYW1lcyBdLnNvbWUoXG5cdFx0XHRcdFx0KCBuYW1lICkgPT4gd2F0Y2hlcktleSA9PT0gbmFtZSB8fCB3YXRjaGVyS2V5LmVuZHNXaXRoKCBgLiR7IG5hbWUgfWAgKVxuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdGlmICggbWF0Y2hlc0hpZGRlbiApIHtcblx0XHRcdFx0XHR3YXRjaGVyRGF0YS5kZXBlbmRlbnRzLmZvckVhY2goICggZGVwICkgPT4ge1xuXHRcdFx0XHRcdFx0dGFyZ2V0RmllbGRzVG9VcGRhdGUuYWRkKCBkZXAgKTtcblxuXHRcdFx0XHRcdFx0Ly8gQ2xlYXIgcmV0cnkgdHJhY2tpbmcgc28gcmV0cnlGYWlsZWRXYXRjaGVycyBmaXJlc1xuXHRcdFx0XHRcdFx0Ly8gYWdhaW4gd2hlbiB0aGUgc291cmNlIGZpZWxkIHJlYXBwZWFycy5cblx0XHRcdFx0XHRcdFsgLi4uaGlkZGVuRmllbGROYW1lcyBdLmZvckVhY2goICggbmFtZSApID0+IHtcblx0XHRcdFx0XHRcdFx0cmV0cmllZFdhdGNoZXJzLmRlbGV0ZSggYCR7IG5hbWUgfTokeyBkZXAgfWAgKTtcblx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblxuXHRcdFx0aWYgKCAhIHRhcmdldEZpZWxkc1RvVXBkYXRlLnNpemUgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRmluZCB0aGUgZm9ybSBub2RlIGZyb20gYW55IHJlbWFpbmluZyBhdXRvLXVwZGF0ZSBmaWVsZFxuXHRcdFx0bGV0IGZvcm1Ob2RlID0gbnVsbDtcblxuXHRcdFx0Zm9yICggY29uc3QgdGFyZ2V0S2V5IG9mIHRhcmdldEZpZWxkc1RvVXBkYXRlICkge1xuXHRcdFx0XHRjb25zdCBmaWVsZERhdGEgPSB3YXRjaGVyLmF1dG9VcGRhdGVGaWVsZHMuZ2V0KCB0YXJnZXRLZXkgKTtcblx0XHRcdFx0aWYgKCBmaWVsZERhdGE/LmVsZW1lbnQgKSB7XG5cdFx0XHRcdFx0Zm9ybU5vZGUgPSBmaWVsZERhdGEuZWxlbWVudC5jbG9zZXN0KCAnZm9ybScgKTtcblx0XHRcdFx0XHRpZiAoIGZvcm1Ob2RlICkge1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICggISBmb3JtTm9kZSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBUcmlnZ2VyIHVwZGF0ZXMgZm9yIGFsbCBhZmZlY3RlZCBkZXBlbmRlbnRzXG5cdFx0XHR0YXJnZXRGaWVsZHNUb1VwZGF0ZS5mb3JFYWNoKCAoIHRhcmdldEtleSApID0+IHtcblx0XHRcdFx0d2F0Y2hlci5kZWJvdW5jZWRVcGRhdGUoIHRhcmdldEtleSwgZm9ybU5vZGUgKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cdCk7XG59XG5cbi8qKlxuICogSG9vayBpbnRvIEpldEZvcm1CdWlsZGVyJ3MgZm9ybSBpbml0aWFsaXphdGlvbi5cbiAqL1xuZnVuY3Rpb24gaG9va0ludG9KZXRGb3JtQnVpbGRlciggYXR0ZW1wdHNMZWZ0ID0gMTAwICkge1xuXHQvLyBXYWl0IGZvciBKZXRGb3JtQnVpbGRlck1haW4gdG8gYmUgYXZhaWxhYmxlXG5cdGlmICggdHlwZW9mIHdpbmRvdy5KZXRGb3JtQnVpbGRlck1haW4gPT09ICd1bmRlZmluZWQnICkge1xuXHRcdGlmICggYXR0ZW1wdHNMZWZ0IDw9IDAgKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oICdbSkZCIEF1dG8tVXBkYXRlXSBKZXRGb3JtQnVpbGRlck1haW4gaXMgbm90IGF2YWlsYWJsZS4gQXV0by11cGRhdGUgd2FzIG5vdCBpbml0aWFsaXplZC4nICk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCBhdHRlbXB0c0xlZnQgJSAyMCA9PT0gMCApIHtcblx0XHRcdGNvbnNvbGUud2FybiggJ1tKRkIgQXV0by1VcGRhdGVdIEpldEZvcm1CdWlsZGVyTWFpbiBub3QgYXZhaWxhYmxlLCByZXRyeWluZy4uLicgKTtcblx0XHR9XG5cblx0XHQvLyBSZXRyeSBhZnRlciBhIHNob3J0IGRlbGF5XG5cdFx0c2V0VGltZW91dCggKCkgPT4gaG9va0ludG9KZXRGb3JtQnVpbGRlciggYXR0ZW1wdHNMZWZ0IC0gMSApLCAxMDAgKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBMaXN0ZW4gZm9yIGNvbmRpdGlvbmFsIGJsb2NrIERPTSB0b2dnbGluZyAoZ2xvYmFsLCBvbmNlKVxuXHRzZXR1cENvbmRpdGlvbmFsQmxvY2tMaXN0ZW5lcigpO1xuXG5cdC8vIEhvb2sgaW50byBmb3JtIGFmdGVyLWluaXQgZXZlbnQuXG5cdC8vIENhbGxiYWNrIHJlY2VpdmVzICggZXZlbnQsICRzY29wZSwgb2JzZXJ2YWJsZSApLlxuXHRqUXVlcnkoIGRvY3VtZW50ICkub24oICdqZXQtZm9ybS1idWlsZGVyL2FmdGVyLWluaXQnLCAoIGV2ZW50LCAkc2NvcGUgKSA9PiB7XG5cdFx0Y29uc3QgZm9ybU5vZGUgPSAkc2NvcGVbIDAgXT8ucXVlcnlTZWxlY3RvciggJ2Zvcm0uamV0LWZvcm0tYnVpbGRlcicgKTtcblxuXHRcdGlmICggISBmb3JtTm9kZSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpbml0QXV0b1VwZGF0ZSggZm9ybU5vZGUgKTtcblxuXHRcdC8vIFNldCB1cCBvYnNlcnZlciBmb3IgZHluYW1pYyBmaWVsZHMgKENvbmRpdGlvbmFsIEJsb2Nrcylcblx0XHRvYnNlcnZlRHluYW1pY0ZpZWxkcyggZm9ybU5vZGUgKTtcblx0fSApO1xuXG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBvbiBET00gcmVhZHkuXG4gKi9cbmlmICggZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnICkge1xuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnRE9NQ29udGVudExvYWRlZCcsIGhvb2tJbnRvSmV0Rm9ybUJ1aWxkZXIgKTtcbn0gZWxzZSB7XG5cdGhvb2tJbnRvSmV0Rm9ybUJ1aWxkZXIoKTtcbn1cblxuLyoqXG4gKiBFeHBvc2UgQVBJIGZvciBleHRlcm5hbCB1c2UuXG4gKi9cbndpbmRvdy5KRkJBdXRvVXBkYXRlID0ge1xuXHRnZXRXYXRjaGVyLFxuXHRpbml0QXV0b1VwZGF0ZSxcbn07XG5cbmV4cG9ydCB7IGdldFdhdGNoZXIsIGluaXRBdXRvVXBkYXRlIH07XG5leHBvcnQgZGVmYXVsdCB7IGdldFdhdGNoZXIsIGluaXRBdXRvVXBkYXRlIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
