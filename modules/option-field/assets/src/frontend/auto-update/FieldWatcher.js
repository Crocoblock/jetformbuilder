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
		this.cacheManager = new CacheManager();

		/**
		 * Options updater instance.
		 *
		 * @type {OptionsUpdater}
		 */
		this.optionsUpdater = new OptionsUpdater();

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
	initForm( formNode ) {
		// Find all fields with auto-update enabled
		const autoUpdateFields = formNode.querySelectorAll( '[data-jfb-auto-update="1"]' );

		autoUpdateFields.forEach( ( fieldElement ) => {
			this.initField( fieldElement, formNode );
		} );
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

		// Store field configuration
		this.autoUpdateFields.set( config.fieldName, {
			element: fieldElement,
			config,
		} );

		// Setup watchers based on configuration
		if ( config.listenTo && Array.isArray( config.listenTo ) ) {
			// Watch each source field
			config.listenTo.forEach( ( sourceFieldName ) => {
				this.watchField( sourceFieldName, config.fieldName, formNode );
			} );
		}

		if ( config.listenAll ) {
			this.watchAllFields( config.fieldName, formNode );
		}

		// Trigger initial update on page load if field has listeners
		if ( config.listenTo || config.listenAll ) {
			setTimeout( () => {
				this.updateField( config.fieldName, formNode );
			}, 50 );
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
	parseFieldConfig( fieldElement ) {
		const generatorId = fieldElement.dataset.generatorId;
		const fieldName = fieldElement.dataset.fieldName;

		if ( ! generatorId || ! fieldName ) {
			return null;
		}

		// Parse listenTo - can be string (single field) or array (multiple fields)
		let listenTo = fieldElement.dataset.listenTo || null;

		if ( listenTo ) {
			// Check if it's multiple fields (JSON array)
			const isMultiple = fieldElement.dataset.listenToMultiple === '1';

			if ( isMultiple ) {
				// Parse JSON array
				listenTo = this.parseJSON( listenTo );

				// Validate it's an array
				if ( ! Array.isArray( listenTo ) ) {
					console.error( '[JFB Auto-Update] Expected array for multiple listen fields, got:', listenTo );
					listenTo = null;
				}
			} else {
				// Single field: normalize to array for consistent handling
				listenTo = [ listenTo ];
			}
		}

		return {
			generatorId,
			fieldName,
			listenTo, // Now always an array or null
			listenAll: fieldElement.dataset.listenAll === '1',
			updateOnButton: fieldElement.dataset.updateOnButton || null,
			cacheTimeout: parseInt( fieldElement.dataset.cacheTimeout ) || 60,
			formId: parseInt( fieldElement.dataset.formId ) || 0,
			blockAttrs: this.parseJSON( fieldElement.dataset.blockAttrs ),
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
			console.error( '[JFB Auto-Update] Invalid JSON:', e );
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
	createInputWrapperFromDOM( fieldName, formNode ) {
		// Try to find field by data-field-name attribute
		let fieldElement = formNode.querySelector( `[data-field-name="${ fieldName }"]` );

		// Fallback: try by name attribute
		if ( ! fieldElement ) {
			fieldElement = formNode.querySelector( `[name="${ fieldName }"]` );
		}

		if ( ! fieldElement ) {
			return null;
		}

		// Create a reactive wrapper similar to JetFormBuilder's input structure
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

		console.log( `[JFB Auto-Update] Created DOM wrapper for field: ${ fieldName }` );

		return wrapper;
	}

	/**
	 * Watch a specific field for changes.
	 *
	 * @param {string}      sourceFieldName Field name to watch.
	 * @param {string}      targetFieldName Field name to update.
	 * @param {HTMLElement} formNode        Form element.
	 */
	watchField( sourceFieldName, targetFieldName, formNode ) {
		// Try to find input using JetFormBuilder's API
		let sourceInput = null;

		// Method 1: Try findInput (for regular fields)
		if ( window.JetFormBuilderMain?.inputData?.findInput ) {
			sourceInput = window.JetFormBuilderMain.inputData.findInput( sourceFieldName, formNode );
		}

		// Method 2: If not found, try getInput (alternative API)
		if ( ! sourceInput && window.JetFormBuilderMain?.inputData?.getInput ) {
			sourceInput = window.JetFormBuilderMain.inputData.getInput( sourceFieldName, formNode );
		}

		// Method 3: If still not found, search all inputs
		if ( ! sourceInput && window.JetFormBuilderMain?.inputData?.getAll ) {
			const allInputs = window.JetFormBuilderMain.inputData.getAll( formNode );
			if ( allInputs ) {
				sourceInput = allInputs.find( ( input ) => input.name === sourceFieldName );
			}
		}

		// Method 4: Fallback - find DOM element and create wrapper
		if ( ! sourceInput ) {
			sourceInput = this.createInputWrapperFromDOM( sourceFieldName, formNode );
		}

		if ( ! sourceInput ) {
			console.warn(
				`[JFB Auto-Update] Source field not found: ${ sourceFieldName }`,
				'Tried all methods including DOM search'
			);
			return;
		}

		// Get or create watcher for this source field
		let watcher = this.watchers.get( sourceFieldName );

		if ( ! watcher ) {
			// Create new watcher
			const unwatch = sourceInput.value.watch( () => {
				this.handleFieldChange( sourceFieldName, formNode );
			} );

			watcher = {
				unwatch,
				dependents: [],
			};

			this.watchers.set( sourceFieldName, watcher );
		}

		// Add target field to dependents if not already present
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
		// Get all form inputs
		const allInputs = window.JetFormBuilderMain?.inputData?.getAll( formNode ) ?? [];

		allInputs.forEach( ( input ) => {
			const fieldName = input.name;

			// Don't watch the target field itself
			if ( fieldName === targetFieldName ) {
				return;
			}

			this.watchField( fieldName, targetFieldName, formNode );
		} );
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

		// Update each dependent field with debouncing
		watcher.dependents.forEach( ( targetFieldName ) => {
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
		// Clear existing timer
		const existingTimer = this.debounceTimers.get( targetFieldName );
		if ( existingTimer ) {
			clearTimeout( existingTimer );
		}

		// Set new timer
		const timer = setTimeout( () => {
			this.updateField( targetFieldName, formNode );
			this.debounceTimers.delete( targetFieldName );
		}, this.debounceDelay );

		this.debounceTimers.set( targetFieldName, timer );
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

		// Collect context from all listened fields
		const context = this.collectContext( config, formNode );

		// Check cache first
		const cachedOptions = this.cacheManager.get(
			config.generatorId,
			context,
			config.cacheTimeout
		);

		if ( cachedOptions ) {
			this.optionsUpdater.updateOptions( element, cachedOptions );
			return;
		}

		// Abort previous request if still pending
		this.abortPreviousRequest( targetFieldName );

		// Create new abort controller
		const abortController = new AbortController();
		this.abortControllers.set( targetFieldName, abortController );

		try {
			// Show loading state
			this.optionsUpdater.setLoadingState( element, true );

			// Fetch new options
			const options = await this.fetchOptions( config, context, abortController.signal );

			// Cache the response
			this.cacheManager.set( config.generatorId, context, options );

			// Update DOM
			this.optionsUpdater.updateOptions( element, options );
		} catch ( error ) {
			if ( error.name !== 'AbortError' ) {
				console.error( '[JFB Auto-Update] Update failed:', error );
				this.optionsUpdater.setErrorState( element, error.message );
			}
		} finally {
			this.optionsUpdater.setLoadingState( element, false );
			this.abortControllers.delete( targetFieldName );
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
	collectContext( config, formNode ) {
		const context = {};

		// Collect values from all source fields (listenTo is now an array)
		if ( config.listenTo && Array.isArray( config.listenTo ) ) {
			config.listenTo.forEach( ( sourceFieldName ) => {
				// Try to find input using JetFormBuilder API
				let input = window.JetFormBuilderMain?.inputData?.findInput( sourceFieldName, formNode );

				// Fallback to getInput
				if ( ! input && window.JetFormBuilderMain?.inputData?.getInput ) {
					input = window.JetFormBuilderMain.inputData.getInput( sourceFieldName, formNode );
				}

				// Fallback to search all inputs
				if ( ! input && window.JetFormBuilderMain?.inputData?.getAll ) {
					const allInputs = window.JetFormBuilderMain.inputData.getAll( formNode );
					if ( allInputs ) {
						input = allInputs.find( ( inp ) => inp.name === sourceFieldName );
					}
				}

				// Final fallback: get value directly from DOM
				if ( ! input ) {
					const fieldElement = formNode.querySelector( `[data-field-name="${ sourceFieldName }"]` ) ||
					                     formNode.querySelector( `[name="${ sourceFieldName }"]` );
					if ( fieldElement ) {
						context[ sourceFieldName ] = fieldElement.value || '';
					} else {
						console.warn( `[JFB Auto-Update] Could not find field for context: ${ sourceFieldName }` );
					}
				} else {
					context[ sourceFieldName ] = input.value.current;
				}
			} );
		}

		if ( config.listenAll ) {
			const allInputs = window.JetFormBuilderMain?.inputData?.getAll( formNode ) ?? [];
			allInputs.forEach( ( input ) => {
				if ( input.name !== config.fieldName ) {
					context[ input.name ] = input.value.current;
				}
			} );
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
	async fetchOptions( config, context, signal ) {
		const response = await fetch( '/wp-json/jet-form-builder/v1/generator-update', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify( {
				form_id: config.formId,
				field_name: config.fieldName,
				generator_id: config.generatorId,
				block_attrs: config.blockAttrs,
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
		// Unwatch all fields
		this.watchers.forEach( ( watcher ) => {
			if ( watcher.unwatch ) {
				watcher.unwatch();
			}
		} );

		// Clear timers
		this.debounceTimers.forEach( ( timer ) => {
			clearTimeout( timer );
		} );

		// Abort pending requests
		this.abortControllers.forEach( ( controller ) => {
			controller.abort();
		} );

		// Clear all maps
		this.watchers.clear();
		this.autoUpdateFields.clear();
		this.abortControllers.clear();
		this.debounceTimers.clear();
		this.cacheManager.clearAll();
	}
}

export default FieldWatcher;
