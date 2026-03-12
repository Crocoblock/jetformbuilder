/**
 * Field Watcher for Auto-Update Feature.
 *
 * Watches form field changes and triggers option updates for dependent fields.
 * Uses JetFormBuilder's reactive input.value.watch() method.
 *
 * @package JetFormBuilder
 */

import CacheManager from './CacheManager';
import OptionsUpdater from './OptionsUpdater';

class FieldWatcher {
	constructor() {
		this.cacheManager   = new CacheManager();
		this.optionsUpdater = new OptionsUpdater();

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
	initForm( formNode ) {
		// Find all fields with auto-update enabled
		const autoUpdateFields = formNode.querySelectorAll( '[data-jfb-auto-update="1"]' );

		autoUpdateFields.forEach( ( fieldElement ) => {
			this.initField( fieldElement, formNode );
		} );
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
	buildFieldKey( fieldName, fieldElement ) {
		const repeaterRow = fieldElement.closest( '.jet-form-builder-repeater__row' );
		return this.buildWatcherKey( fieldName, repeaterRow );
	}

	/**
	 * Initialize auto-update for a single field.
	 *
	 * @param {HTMLElement} fieldElement Field element (select/input).
	 * @param {HTMLElement} formNode     Form element.
	 */
	initField( fieldElement, formNode ) {
		const config = this.parseFieldConfig( fieldElement );

		if ( ! config ) {
			return;
		}

		const fieldKey = this.buildFieldKey( config.fieldName, fieldElement );

		// Prevent double-init: MutationObserver with subtree:true can fire
		// multiple callbacks for one repeater row insertion.
		const alreadyInitialized = fieldElement.hasAttribute( 'data-jfb-au-init' );
		fieldElement.setAttribute( 'data-jfb-au-init', '1' );

		config.fieldKey = fieldKey;

		this.autoUpdateFields.set( fieldKey, {
			element: fieldElement,
			config,
		} );

		if ( config.updateOnButton ) {
			this.watchButton( config.updateOnButton, fieldKey, formNode );
		}

		if ( config.listenTo && Array.isArray( config.listenTo ) ) {
			config.listenTo.forEach( ( sourceFieldName ) => {
				this.watchField( sourceFieldName, fieldKey, formNode );
			} );
		}

		// Auto-trigger initial update only when no button is configured.
		// With a button, the user controls when to fetch — no automatic update.
		// With requireAllFilled, skip if any listenTo field is empty.
		if ( ! alreadyInitialized && ! config.updateOnButton && config.listenTo ) {
			if ( config.requireAllFilled ) {
				const context   = this.collectContext( config, formNode );
				const allFilled = config.listenTo.every( ( fieldName ) => {
					const val = context[ fieldName ];
					return val !== undefined && val !== null && val !== '';
				} );

				if ( allFilled ) {
					this.debouncedUpdate( fieldKey, formNode );
				}
			} else {
				this.debouncedUpdate( fieldKey, formNode );
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
	parseFieldConfig( fieldElement ) {
		const generatorId = fieldElement.dataset.generatorId;
		const fieldName   = fieldElement.dataset.fieldName;

		if ( ! generatorId || ! fieldName ) {
			return null;
		}

		let listenTo = fieldElement.dataset.listenTo || null;

		if ( listenTo ) {
			if ( fieldElement.dataset.listenToMultiple === '1' ) {
				listenTo = this.parseJSON( listenTo );
				if ( ! Array.isArray( listenTo ) ) {
					listenTo = null;
				}
			} else {
				listenTo = [ listenTo ];
			}
		}

		return {
			generatorId,
			fieldName,
			listenTo,
			requireAllFilled: fieldElement.dataset.requireAllFilled === '1',
			updateOnButton: fieldElement.dataset.updateOnButton || null,
			cacheTimeout: parseInt( fieldElement.dataset.cacheTimeout ) || 60,
			formId: parseInt( fieldElement.dataset.formId ) || 0,
		};
	}

	/**
	 * Safely parse JSON string.
	 *
	 * @param {string} jsonString JSON string.
	 *
	 * @return {Object|null} Parsed object or null if invalid.
	 */
	parseJSON( jsonString ) {
		try {
			return JSON.parse( jsonString );
		} catch ( e ) {
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
	createInputWrapperFromDOM( fieldName, formNode, knownElement = null ) {
		let fieldElement = knownElement;

		if ( ! fieldElement ) {
			fieldElement = formNode.querySelector( `[data-field-name="${ fieldName }"]` );
		}

		if ( ! fieldElement ) {
			fieldElement = formNode.querySelector( `[name="${ fieldName }"]` );
		}

		if ( ! fieldElement ) {
			return null;
		}

		const wrapper = {
			name: fieldName,
			node: fieldElement,
			value: {
				current: fieldElement.value || '',
				watchers: [],
				watch: ( callback ) => {
					// Add event listener
					const handler = () => {
						wrapper.value.current = fieldElement.value || '';
						callback( wrapper.value.current );
					};

					fieldElement.addEventListener( 'change', handler );
					fieldElement.addEventListener( 'input', handler );

					// Return unwatch function
					return () => {
						fieldElement.removeEventListener( 'change', handler );
						fieldElement.removeEventListener( 'input', handler );
					};
				},
			},
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
	findElementInScope( fieldName, scopeElement, formNode ) {
		const roots = scopeElement ? [ scopeElement, formNode ] : [ formNode ];

		for ( const root of roots ) {
			let el = root.querySelector( `[data-field-name="${ fieldName }"]` )
				|| root.querySelector( `[name*="[${ fieldName }]"]` );

			if ( el ) {
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
	buildWatcherKey( sourceFieldName, repeaterRow ) {
		if ( ! repeaterRow ) {
			return sourceFieldName;
		}

		// Use the repeater row's index in its parent as a stable identifier
		const parent       = repeaterRow.parentElement;
		const index        = parent ? Array.from( parent.children ).indexOf( repeaterRow ) : 0;
		const repeaterName = repeaterRow.closest( '[data-repeater="1"]' )?.dataset?.fieldName || 'repeater';

		return `${ repeaterName }[${ index }].${ sourceFieldName }`;
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
	watchField( sourceFieldName, targetFieldName, formNode ) {
		const fieldData     = this.autoUpdateFields.get( targetFieldName );
		const targetElement = fieldData?.element || null;
		const repeaterRow   = targetElement ? targetElement.closest( '.jet-form-builder-repeater__row' ) : null;
		const sourceElement = this.findElementInScope( sourceFieldName, repeaterRow, formNode );

		let sourceInput = null;

		if ( sourceElement && window.JetFormBuilderMain?.inputData ) {
			const actualName = sourceElement.getAttribute( 'name' ) || sourceFieldName;

			if ( window.JetFormBuilderMain.inputData.findInput ) {
				sourceInput = window.JetFormBuilderMain.inputData.findInput( actualName, formNode ) ||
				              window.JetFormBuilderMain.inputData.findInput( sourceFieldName, formNode );
			}

			if ( ! sourceInput && window.JetFormBuilderMain.inputData.getInput ) {
				sourceInput = window.JetFormBuilderMain.inputData.getInput( actualName, formNode ) ||
				              window.JetFormBuilderMain.inputData.getInput( sourceFieldName, formNode );
			}

			if ( ! sourceInput && window.JetFormBuilderMain.inputData.getAll ) {
				const allInputs = window.JetFormBuilderMain.inputData.getAll( formNode );
				if ( allInputs ) {
					sourceInput = allInputs.find( ( input ) => input.name === actualName ) ||
					              allInputs.find( ( input ) => input.name === sourceFieldName );
				}
			}
		} else if ( ! sourceElement ) {
			if ( window.JetFormBuilderMain?.inputData?.findInput ) {
				sourceInput = window.JetFormBuilderMain.inputData.findInput( sourceFieldName, formNode );
			}
			if ( ! sourceInput && window.JetFormBuilderMain?.inputData?.getInput ) {
				sourceInput = window.JetFormBuilderMain.inputData.getInput( sourceFieldName, formNode );
			}
			if ( ! sourceInput && window.JetFormBuilderMain?.inputData?.getAll ) {
				const allInputs = window.JetFormBuilderMain.inputData.getAll( formNode );
				if ( allInputs ) {
					sourceInput = allInputs.find( ( input ) => input.name === sourceFieldName );
				}
			}
		}

		if ( ! sourceInput ) {
			const el = sourceElement || this.findElementInScope( sourceFieldName, null, formNode );
			if ( el ) {
				sourceInput = this.createInputWrapperFromDOM( el.getAttribute( 'name' ) || sourceFieldName, formNode, el );
			}
		}

		if ( ! sourceInput ) {
			console.warn( `[JFB Auto-Update] Source field not found: ${ sourceFieldName }` );
			return;
		}

		const watcherKey = this.buildWatcherKey( sourceFieldName, repeaterRow );
		let watcher      = this.watchers.get( watcherKey );

		if ( ! watcher ) {
			const unwatch = sourceInput.value.watch( () => {
				this.handleFieldChange( watcherKey, formNode );
			} );

			watcher = {
				unwatch,
				dependents: [],
			};

			this.watchers.set( watcherKey, watcher );
		}

		if ( ! watcher.dependents.includes( targetFieldName ) ) {
			watcher.dependents.push( targetFieldName );
		}
	}

	/**
	 * Watch all fields in form for changes.
	 *
	 * @param {string}      targetFieldName Field name to update.
	 * @param {HTMLElement} formNode        Form element.
	 */
	watchAllFields( targetFieldName, formNode ) {
		const allInputs = window.JetFormBuilderMain?.inputData?.getAll( formNode ) ?? [];

		allInputs.forEach( ( input ) => {
			const fieldName = input.name;

			if ( fieldName === targetFieldName ) {
				return;
			}

			this.watchField( fieldName, targetFieldName, formNode );
		} );
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
	watchButton( actionType, targetFieldKey, formNode ) {
		const listenerKey = `${ actionType }::${ targetFieldKey }`;

		if ( this.buttonListeners.has( listenerKey ) ) {
			return;
		}

		const wrapper       = formNode.querySelector( `.jet-form-builder__action-button-wrapper[data-type="${ actionType }"]` );
		const buttonElement = wrapper ? wrapper.querySelector( 'button' ) : null;

		if ( ! buttonElement ) {
			console.warn( `[JFB Auto-Update] Action button not found for type: ${ actionType }` );
			return;
		}

		let isProcessing = false;

		const handler = async ( event ) => {
			// Allow one synthetic click to pass through after options are refreshed.
			if ( buttonElement.dataset.jfbAuBypassClick === '1' ) {
				delete buttonElement.dataset.jfbAuBypassClick;
				return;
			}

			// Drop repeated clicks while update is in flight.
			if ( isProcessing ) {
				event.preventDefault();
				return;
			}

			event.preventDefault();
			isProcessing = true;

			try {
				await this.updateField( targetFieldKey, formNode );
			} catch ( error ) {
				// Safety net: never block original button action because of bad config/state.
				console.warn( '[JFB Auto-Update] Pre-button update failed, continuing action:', error );
			} finally {
				isProcessing = false;
				buttonElement.dataset.jfbAuBypassClick = '1';
				buttonElement.click();
			}
		};

		buttonElement.addEventListener( 'click', handler );
		this.buttonListeners.set( listenerKey, { element: buttonElement, handler } );
	}

	/**
	 * Handle field change event.
	 * Triggers update for all dependent fields with debouncing.
	 *
	 * @param {string}      sourceFieldName Changed field name.
	 * @param {HTMLElement} formNode        Form element.
	 */
	handleFieldChange( sourceFieldName, formNode ) {
		const watcher = this.watchers.get( sourceFieldName );

		if ( ! watcher || ! watcher.dependents.length ) {
			return;
		}

		watcher.dependents.forEach( ( targetFieldName ) => {
			const fieldData = this.autoUpdateFields.get( targetFieldName );
			const config    = fieldData?.config;

			// Skip auto-update if this field uses a button trigger.
			if ( config?.updateOnButton ) {
				return;
			}

			// If "Require All Fields Filled" is on and any listenTo field is now
			// empty, clear the dependent field's options immediately.
			if ( config?.requireAllFilled ) {
				const context   = this.collectContext( config, formNode );
				const allFilled = config.listenTo.every(
					( fieldName ) => {
						const val = context[ fieldName ];
						return val !== undefined && val !== null && val !== '';
					}
				);

				if ( ! allFilled ) {
					this.abortPreviousRequest( targetFieldName );
					this.cacheManager.clearByField( config.fieldName );
					this.optionsUpdater.updateOptions( fieldData.element, [], formNode );
					return;
				}
			}

			this.debouncedUpdate( targetFieldName, formNode );
		} );
	}

	/**
	 * Debounced update for target field.
	 *
	 * @param {string}      targetFieldName Field to update.
	 * @param {HTMLElement} formNode        Form element.
	 */
	debouncedUpdate( targetFieldName, formNode ) {
		clearTimeout( this.debounceTimers.get( targetFieldName ) );

		const timer = setTimeout( () => {
			this.updateField( targetFieldName, formNode );
			this.debounceTimers.delete( targetFieldName );
		}, this.debounceDelay );

		this.debounceTimers.set( targetFieldName, timer );
	}

	/**
	 * Get JFB form's lockState reactive var.
	 * Blocks multi-step page transitions while any generator update is pending.
	 *
	 * @param {HTMLElement} formNode Form element.
	 * @return {Object|null} LoadingReactiveVar or null.
	 */
	getLockState( formNode ) {
		const formId = formNode?.dataset?.formId;

		if ( ! formId || ! window.JetFormBuilder?.[ formId ] ) {
			return null;
		}

		return window.JetFormBuilder[ formId ]?.getSubmit?.()?.lockState ?? null;
	}

	/**
	 * Increment the loading counter for a form and lock if first request.
	 *
	 * @param {HTMLElement} formNode Form element.
	 */
	lockFormLoading( formNode ) {
		const formId = formNode?.dataset?.formId;

		if ( ! formId ) {
			return;
		}

		const count = ( this.loadingCounts.get( formId ) ?? 0 ) + 1;
		this.loadingCounts.set( formId, count );

		if ( count === 1 ) {
			this.getLockState( formNode )?.start();
		}
	}

	/**
	 * Decrement the loading counter for a form and unlock when all requests finish.
	 *
	 * @param {HTMLElement} formNode Form element.
	 */
	unlockFormLoading( formNode ) {
		const formId = formNode?.dataset?.formId;

		if ( ! formId ) {
			return;
		}

		const count = Math.max( 0, ( this.loadingCounts.get( formId ) ?? 0 ) - 1 );
		this.loadingCounts.set( formId, count );

		if ( count === 0 ) {
			this.getLockState( formNode )?.end();
		}
	}

	/**
	 * Update options for a field.
	 *
	 * @param {string}      targetFieldName Field to update.
	 * @param {HTMLElement} formNode        Form element.
	 */
	async updateField( targetFieldName, formNode ) {
		const fieldData = this.autoUpdateFields.get( targetFieldName );

		if ( ! fieldData ) {
			return;
		}

		const { element, config } = fieldData;

		const context = this.collectContext( config, formNode );

		const cachedOptions = this.cacheManager.get(
			config.generatorId,
			context,
			config.cacheTimeout,
			config.fieldName
		);

		if ( cachedOptions ) {
			this.optionsUpdater.updateOptions( element, cachedOptions, formNode );
			return;
		}

		this.abortPreviousRequest( targetFieldName );

		const abortController = new AbortController();
		this.abortControllers.set( targetFieldName, abortController );

		try {
			this.optionsUpdater.setLoadingState( element, true );
			this.lockFormLoading( formNode );

			const options = await this.fetchOptions( config, context, abortController.signal );

			this.cacheManager.set( config.generatorId, context, options, config.fieldName );
			this.optionsUpdater.updateOptions( element, options, formNode );
		} catch ( error ) {
			if ( error.name !== 'AbortError' ) {
				console.error( '[JFB Auto-Update] Update failed:', error );
				this.optionsUpdater.setErrorState( element, error.message );
			}
		} finally {
			this.optionsUpdater.setLoadingState( element, false );
			this.unlockFormLoading( formNode );
			this.abortControllers.delete( targetFieldName );
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
	collectContext( config, formNode ) {
		const context = {};

		const lookupKey     = config.fieldKey || config.fieldName;
		const fieldData     = this.autoUpdateFields.get( lookupKey );
		const targetElement = fieldData?.element || null;
		const repeaterRow   = targetElement ? targetElement.closest( '.jet-form-builder-repeater__row' ) : null;

		if ( config.listenTo && Array.isArray( config.listenTo ) ) {
			config.listenTo.forEach( ( sourceFieldName ) => {
				const sourceElement = this.findElementInScope( sourceFieldName, repeaterRow, formNode );

				if ( sourceElement ) {
					const actualName = sourceElement.getAttribute( 'name' ) || sourceFieldName;
					let input = null;

					if ( window.JetFormBuilderMain?.inputData ) {
						input = window.JetFormBuilderMain.inputData.findInput?.( actualName, formNode ) ||
						        window.JetFormBuilderMain.inputData.findInput?.( sourceFieldName, formNode ) ||
						        window.JetFormBuilderMain.inputData.getInput?.( actualName, formNode ) ||
						        window.JetFormBuilderMain.inputData.getInput?.( sourceFieldName, formNode );

						if ( ! input && window.JetFormBuilderMain.inputData.getAll ) {
							const allInputs = window.JetFormBuilderMain.inputData.getAll( formNode ) || [];
							input = allInputs.find( ( inp ) => inp.name === actualName ) ||
							        allInputs.find( ( inp ) => inp.name === sourceFieldName );
						}
					}

					context[ sourceFieldName ] = input
						? input.value.current
						: ( sourceElement.value || '' );
				}
			} );
		}

		return context;
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
		if ( localized ) {
			return localized;
		}

		const apiRoot = window.wpApiSettings?.root;
		if ( apiRoot ) {
			return `${ apiRoot.replace( /\/+$/, '' ) }/jet-form-builder/v1/generator-update`;
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
	async fetchOptions( config, context, signal ) {
		const response = await fetch( this.getUpdateEndpoint(), {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify( {
				form_id: config.formId,
				field_name: config.fieldName,
				generator_id: config.generatorId,
				context,
			} ),
			signal,
		} );

		if ( ! response.ok ) {
			throw new Error( `HTTP error! status: ${ response.status }` );
		}

		const data = await response.json();

		if ( ! data.success ) {
			throw new Error( data.message || 'Unknown error' );
		}

		return data.options || [];
	}

	/**
	 * Abort previous request for a field.
	 *
	 * @param {string} fieldName Field name.
	 */
	abortPreviousRequest( fieldName ) {
		const controller = this.abortControllers.get( fieldName );
		if ( controller ) {
			controller.abort();
			this.abortControllers.delete( fieldName );
		}
	}

	/**
	 * Destroy watchers and cleanup.
	 */
	destroy() {
		this.watchers.forEach( ( watcher ) => watcher.unwatch?.() );
		this.debounceTimers.forEach( ( timer ) => clearTimeout( timer ) );
		this.abortControllers.forEach( ( controller ) => controller.abort() );
		this.buttonListeners.forEach( ( { element, handler } ) => element.removeEventListener( 'click', handler ) );

		this.watchers.clear();
		this.autoUpdateFields.clear();
		this.abortControllers.clear();
		this.debounceTimers.clear();
		this.buttonListeners.clear();
		this.cacheManager.clearAll();
	}
}

export default FieldWatcher;
