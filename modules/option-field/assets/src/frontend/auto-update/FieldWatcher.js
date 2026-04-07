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
	initField( fieldElement, formNode, options = {} ) {
		const config = this.parseFieldConfig( fieldElement );

		if ( ! config ) {
			return;
		}

		const fieldKey = this.buildFieldKey( config.fieldName, fieldElement );

		// Prevent double-init: MutationObserver with subtree:true can fire
		// multiple callbacks for one repeater row insertion.
		if ( fieldElement.hasAttribute( 'data-jfb-au-init' ) ) {
			return;
		}

		fieldElement.setAttribute( 'data-jfb-au-init', '1' );

		config.fieldKey = fieldKey;

		this.autoUpdateFields.set( fieldKey, {
			element: fieldElement,
			config,
		} );

		const preservedValue = this.consumePreservedRepeaterValue( fieldKey );
		if ( preservedValue !== undefined ) {
			fieldElement.dataset.jfbAuPreservedValue = JSON.stringify( preservedValue );
		}

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
		if ( ! config.updateOnButton && config.listenTo ) {
			if ( this.shouldSkipDynamicInitRefresh( fieldElement, config, formNode, options ) ) {
				return;
			}

			if ( config.requireAllFilled ) {
				const context   = this.collectContext( config, formNode );
				const allFilled = config.listenTo.every( ( fieldName ) => {
					const val = context[ fieldName ];
					return this.isContextValueFilled( val );
				} );

				if ( allFilled ) {
					this.debouncedUpdate( fieldKey, formNode );
				} else if ( this.shouldClearOnEmptyContext( config ) ) {
					this.optionsUpdater.updateOptions( fieldElement, [], formNode );
				} else {
					this.debouncedUpdate( fieldKey, formNode );
				}
			} else {
				this.debouncedUpdate( fieldKey, formNode );
			}
		}
	}

	shouldSkipDynamicInitRefresh( fieldElement, config, formNode, options = {} ) {
		if ( ! options?.isDynamicInit ) {
			return false;
		}

		const repeaterRow = fieldElement.closest( '.jet-form-builder-repeater__row' );

		if ( ! repeaterRow || ! Array.isArray( config.listenTo ) || ! config.listenTo.length ) {
			return false;
		}

		const listensOnlyToExternalFields = config.listenTo.every( ( sourceFieldName ) => {
			return ! this.findElementInScope( sourceFieldName, repeaterRow, repeaterRow );
		} );

		if ( ! listensOnlyToExternalFields ) {
			return false;
		}

		const currentValue = this.readCurrentTargetValue( fieldElement );

		if ( ! this.isContextValueFilled( currentValue ) ) {
			return false;
		}

		const contextHash = this.serializeContext( this.collectContext( config, formNode ) );
		const contextKey  = this.buildContextMemoryKey( config );

		return this.lastContextHashes.get( contextKey ) === contextHash;
	}

	readCurrentTargetValue( fieldElement ) {
		if ( fieldElement.matches( 'select' ) ) {
			if ( fieldElement.multiple ) {
				return Array.from( fieldElement.selectedOptions ).map( ( option ) => option.value );
			}

			return fieldElement.value || '';
		}

		const nestedSelect = fieldElement.querySelector?.( 'select' );
		if ( nestedSelect ) {
			if ( nestedSelect.multiple ) {
				return Array.from( nestedSelect.selectedOptions ).map( ( option ) => option.value );
			}

			return nestedSelect.value || '';
		}

		const optionInputs = Array.from(
			fieldElement.querySelectorAll?.( 'input[type="checkbox"], input[type="radio"]' ) || []
		);

		if ( ! optionInputs.length ) {
			return '';
		}

		const checked = optionInputs.filter( ( input ) => input.checked );

		if ( ! checked.length ) {
			return '';
		}

		if ( checked.every( ( input ) => input.type === 'checkbox' ) ) {
			return checked.map( ( input ) => input.value );
		}

		return checked[ 0 ]?.value || '';
	}

	buildContextMemoryKey( config ) {
		return [
			config.formId || 0,
			config.generatorId || '',
			config.fieldName || '',
			Array.isArray( config.listenTo ) ? config.listenTo.join( '|' ) : '',
		].join( '::' );
	}

	serializeContext( context ) {
		const ordered = {};

		Object.keys( context || {} ).sort().forEach( ( key ) => {
			ordered[ key ] = context[ key ];
		} );

		return JSON.stringify( ordered );
	}

	preserveRepeaterValuesBeforeRemoval( removeButton ) {
		const removedRow = removeButton.closest( '.jet-form-builder-repeater__row' );
		const repeater   = removeButton.closest( '[data-repeater="1"]' );
		const itemsRoot  = repeater?.querySelector( '.jet-form-builder-repeater__items' ) || repeater;

		if ( ! removedRow || ! repeater || ! itemsRoot ) {
			return;
		}

		const rows = Array.from( itemsRoot.querySelectorAll( ':scope > .jet-form-builder-repeater__row' ) );
		const removedIndex = rows.indexOf( removedRow );
		const repeaterName = repeater.dataset.fieldName || 'repeater';

		if ( removedIndex < 0 ) {
			return;
		}

		this.autoUpdateFields.forEach( ( fieldData ) => {
			const element = fieldData?.element;
			const config  = fieldData?.config;
			const row     = element?.closest( '.jet-form-builder-repeater__row' );

			if ( ! element || ! config || ! row || row === removedRow || ! repeater.contains( row ) ) {
				return;
			}

			const rowIndex = rows.indexOf( row );

			if ( rowIndex < 0 ) {
				return;
			}

			const preservedValue = this.readValueFromSourceElement( element );

			if ( ! this.isContextValueFilled( preservedValue ) ) {
				return;
			}

			const nextIndex = rowIndex > removedIndex ? rowIndex - 1 : rowIndex;
			const nextKey   = `${ repeaterName }[${ nextIndex }].${ config.fieldName }`;

			this.preservedRepeaterValues.set( nextKey, preservedValue );
		} );
	}

	consumePreservedRepeaterValue( fieldKey ) {
		if ( ! this.preservedRepeaterValues.has( fieldKey ) ) {
			return undefined;
		}

		const value = this.preservedRepeaterValues.get( fieldKey );
		this.preservedRepeaterValues.delete( fieldKey );

		return value;
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
			emptyContextAction: fieldElement.dataset.emptyContextAction || 'clear',
			updateOnButton: fieldElement.dataset.updateOnButton || null,
			updateOnButtonClass: fieldElement.dataset.updateOnButtonClass || '',
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
				|| root.querySelector( `[name="${ fieldName }"]` )
				|| root.querySelector( `[name="${ fieldName }[]"]` )
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
		const forceDomWatch = sourceElement ? this.shouldUseDomWatch( sourceElement ) : false;

		let sourceInput = null;

		if ( sourceElement && ! forceDomWatch && window.JetFormBuilderMain?.inputData ) {
			const actualName = this.resolveActualName( sourceElement, sourceFieldName );

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
				sourceInput = this.createInputWrapperFromDOM( this.resolveActualName( el, sourceFieldName ), formNode, el );
			}
		}

		if ( ! sourceInput ) {
			return;
		}

		const watcherKey = this.buildWatcherKey( sourceFieldName, repeaterRow );
		let watcher      = this.watchers.get( watcherKey );

		if ( ! watcher ) {
			let unwatch;

			if ( forceDomWatch ) {
				let lastSerialized = null;
				const domHandler = ( event ) => {
					const eventTarget = event?.target;
					if ( ! eventTarget || eventTarget.nodeType !== Node.ELEMENT_NODE ) {
						return;
					}

					const run = () => {
						const liveSourceElement = this.findElementInScope( sourceFieldName, repeaterRow, formNode );
						if ( ! liveSourceElement ) {
							return;
						}

						if ( ! this.isEventFromSourceField( eventTarget, liveSourceElement ) ) {
							return;
						}

						const currentValue = this.readValueFromSourceElement( liveSourceElement );
						const serialized   = JSON.stringify( currentValue );

						if ( serialized === lastSerialized ) {
							return;
						}

						lastSerialized = serialized;

						this.handleFieldChange( watcherKey, formNode );
					};

					// "click" can fire before checked state is updated on custom controls.
					if ( event.type === 'click' ) {
						setTimeout( run, 0 );
						return;
					}

					run();
				};

				formNode.addEventListener( 'change', domHandler, true );
				formNode.addEventListener( 'input', domHandler, true );
				formNode.addEventListener( 'click', domHandler, true );

				const isAutocompleteSource = this.isAutocompleteSourceElement( sourceElement );
				const isCalculatedSource   = this.isCalculatedSourceElement( sourceElement );
				let $sourceElement         = null;
				let select2Handler         = null;
				let calculatedHandler      = null;
				let calculatedNode         = null;
				let calculatedObserver     = null;
				let calculatedNativeHandler = null;

				if ( window.jQuery && ( isAutocompleteSource || isCalculatedSource ) ) {
					const liveSourceElement = this.findElementInScope( sourceFieldName, repeaterRow, formNode );
					const sourceNode        = isAutocompleteSource
						? ( liveSourceElement?.matches( 'select' )
							? liveSourceElement
							: liveSourceElement?.querySelector( 'select' ) )
						: ( liveSourceElement?.matches( 'input.jet-form-builder__calculated-field-input' )
							? liveSourceElement
							: liveSourceElement?.querySelector( 'input.jet-form-builder__calculated-field-input' ) );

					if ( sourceNode ) {
						$sourceElement = window.jQuery( sourceNode );

						if ( isAutocompleteSource ) {
							select2Handler = () => {
								const currentValue = this.readValueFromSourceElement( sourceNode );
								const serialized   = JSON.stringify( currentValue );

								if ( serialized === lastSerialized ) {
									return;
								}

								lastSerialized = serialized;

								this.handleFieldChange( watcherKey, formNode );
							};

							$sourceElement.on( 'select2:select select2:unselect', select2Handler );
						}

						if ( isCalculatedSource ) {
							calculatedNode = sourceNode;
							calculatedHandler = () => {
								const currentValue = this.readValueFromSourceElement( sourceNode );
								const serialized   = JSON.stringify( currentValue );

								if ( serialized === lastSerialized ) {
									return;
								}

								lastSerialized = serialized;

								this.handleFieldChange( watcherKey, formNode );
							};

							$sourceElement.on( 'change', calculatedHandler );

							calculatedNativeHandler = calculatedHandler;
							sourceNode.addEventListener( 'change', calculatedNativeHandler );
							sourceNode.addEventListener( 'input', calculatedNativeHandler );

							const calculatedWrapper = sourceNode.closest( '.jet-form-builder__calculated-field' );
							const calculatedValueNode = calculatedWrapper?.querySelector( '.jet-form-builder__calculated-field-val' );

							if ( calculatedValueNode && window.MutationObserver ) {
								calculatedObserver = new MutationObserver( () => {
									calculatedHandler();
								} );

								calculatedObserver.observe( calculatedValueNode, {
									childList: true,
									characterData: true,
									subtree: true,
								} );
							}
						}
					}
				}

				unwatch = () => {
					formNode.removeEventListener( 'change', domHandler, true );
					formNode.removeEventListener( 'input', domHandler, true );
					formNode.removeEventListener( 'click', domHandler, true );

					if ( $sourceElement && select2Handler ) {
						$sourceElement.off( 'select2:select select2:unselect', select2Handler );
					}

					if ( $sourceElement && calculatedHandler ) {
						$sourceElement.off( 'change', calculatedHandler );
					}

					if ( calculatedNode && calculatedNativeHandler ) {
						calculatedNode.removeEventListener( 'change', calculatedNativeHandler );
						calculatedNode.removeEventListener( 'input', calculatedNativeHandler );
					}

					if ( calculatedObserver ) {
						calculatedObserver.disconnect();
					}
				};
			} else {
				unwatch = sourceInput.value.watch( () => {
					this.handleFieldChange( watcherKey, formNode );
				} );
			}

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
		const targetField = this.autoUpdateFields.get( targetFieldKey );
		const buttonClass = targetField?.config?.updateOnButtonClass || '';
		const listenerKey = `${ actionType }::${ buttonClass }::${ targetFieldKey }`;

		if ( this.buttonListeners.has( listenerKey ) ) {
			return;
		}

		const targetElement = targetField?.element || null;
		const targetPage    = targetElement?.closest( '.jet-form-builder-page' ) || null;
		const targetScopeSelectors = [];

		if ( targetPage ) {
			const pageNumber = parseInt( targetPage.dataset.page ) || 0;

			if ( 'next' === actionType && pageNumber > 1 ) {
				targetScopeSelectors.push(
					`.jet-form-builder-page[data-page="${ pageNumber - 1 }"] .jet-form-builder__action-button-wrapper[data-type="${ actionType }"]`
				);
			} else if ( 'prev' === actionType && pageNumber > 0 ) {
				targetScopeSelectors.push(
					`.jet-form-builder-page[data-page="${ pageNumber + 1 }"] .jet-form-builder__action-button-wrapper[data-type="${ actionType }"]`
				);
			}

			targetScopeSelectors.push(
				`.jet-form-builder-page[data-page="${ targetPage.dataset.page }"] .jet-form-builder__action-button-wrapper[data-type="${ actionType }"]`
			);
		}

		targetScopeSelectors.push(
			`.jet-form-builder__action-button-wrapper[data-type="${ actionType }"]`
		);

		const wrapper = this.findActionButtonWrapper(
			targetScopeSelectors,
			buttonClass,
			formNode
		);

		const buttonElement = wrapper ? wrapper.querySelector( 'button' ) : null;

		if ( ! buttonElement ) {
			return;
		}

		let isProcessing = false;

		const handler = async ( event ) => {
			// Ignore programmatic re-clicks triggered after pre-update.
			if ( ! event.isTrusted ) {
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
			} finally {
				isProcessing = false;
				buttonElement.click();
			}
		};

		buttonElement.addEventListener( 'click', handler );
		this.buttonListeners.set( listenerKey, { element: buttonElement, handler } );
	}

	normalizeButtonClassNames( buttonClass ) {
		return ( buttonClass || '' )
			.split( /\s+/ )
			.map( ( token ) => token.trim().replace( /^\./, '' ) )
			.filter( Boolean );
	}

	findActionButtonWrapper( selectors, buttonClass, formNode ) {
		const classNames = this.normalizeButtonClassNames( buttonClass );

		if ( classNames.length ) {
			for ( const selector of selectors ) {
				const wrappers = Array.from( formNode.querySelectorAll( selector ) );
				const exactWrapper = wrappers.find( ( currentWrapper ) => {
					const button = currentWrapper.querySelector( 'button' );

					if ( ! button ) {
						return false;
					}

					return classNames.every(
						( className ) => button.classList.contains( className )
					);
				} );

				if ( exactWrapper ) {
					return exactWrapper;
				}
			}
		}

		for ( const selector of selectors ) {
			const wrapper = formNode.querySelector( selector );

			if ( wrapper ) {
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
						return this.isContextValueFilled( val );
					}
				);

				if ( ! allFilled ) {
					if ( this.shouldClearOnEmptyContext( config ) ) {
						this.abortPreviousRequest( targetFieldName );
						// Keep cache entries so re-entering the same context can reuse TTL cache.
						this.optionsUpdater.updateOptions( fieldData.element, [], formNode );
					} else {
						this.debouncedUpdate( targetFieldName, formNode );
					}
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
		const contextKey  = this.buildContextMemoryKey( config );
		const contextHash = this.serializeContext( context );

		this.lastContextHashes.set( contextKey, contextHash );

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
					const actualName = this.resolveActualName( sourceElement, sourceFieldName );
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

					const forceDomRead = this.shouldUseDomWatch( sourceElement );

					context[ sourceFieldName ] = ( ! forceDomRead && input )
						? input.value.current
						: this.readValueFromSourceElement( sourceElement );

				}
			} );
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
	resolveActualName( sourceElement, sourceFieldName ) {
		return sourceElement.getAttribute( 'name' )
			|| sourceElement.querySelector( '[name]' )?.getAttribute( 'name' )
			|| sourceFieldName;
	}

	/**
	 * Read current value directly from a source element.
	 * Supports checkbox/radio groups rendered as wrappers.
	 *
	 * @param {HTMLElement} sourceElement Source field element.
	 *
	 * @return {string|Array}
	 */
	readValueFromSourceElement( sourceElement ) {
		const sourceName =
			sourceElement.getAttribute( 'name' )
			|| sourceElement.querySelector( '[name]' )?.getAttribute( 'name' )
			|| null;
		const root = sourceElement.closest( '.jet-form-builder-repeater__row' )
			|| sourceElement.closest( 'form' )
			|| document;

		if ( sourceName ) {
			const allNamedCheckboxes = Array.from(
				root.querySelectorAll( `input[type="checkbox"][name="${ CSS.escape( sourceName ) }"]` )
			);

			if ( allNamedCheckboxes.length ) {
				return allNamedCheckboxes
					.filter( ( node ) => node.checked )
					.map( ( node ) => node.value );
			}

			const allNamedRadios = Array.from(
				root.querySelectorAll( `input[type="radio"][name="${ CSS.escape( sourceName ) }"]` )
			);

			if ( allNamedRadios.length ) {
				const active = allNamedRadios.find( ( node ) => node.checked );
				return active ? active.value : '';
			}
		}

		const checkboxNodes = sourceElement.matches( 'input[type="checkbox"]' )
			? [ sourceElement ]
			: Array.from( sourceElement.querySelectorAll( 'input[type="checkbox"]' ) );

		if ( checkboxNodes.length ) {
			return checkboxNodes
				.filter( ( node ) => node.checked )
				.map( ( node ) => node.value );
		}

		const radioNodes = sourceElement.matches( 'input[type="radio"]' )
			? [ sourceElement ]
			: Array.from( sourceElement.querySelectorAll( 'input[type="radio"]' ) );

		if ( radioNodes.length ) {
			const active = radioNodes.find( ( node ) => node.checked );
			return active ? active.value : '';
		}

		const selectMultiple = sourceElement.matches( 'select[multiple]' )
			? sourceElement
			: sourceElement.querySelector( 'select[multiple]' );

		if ( selectMultiple ) {
			return Array.from( selectMultiple.selectedOptions ).map( ( option ) => option.value );
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
	isMultiChoiceSourceElement( sourceElement ) {
		if ( ! sourceElement ) {
			return false;
		}

		if ( sourceElement.matches( 'input[type="checkbox"], input[type="radio"], select[multiple]' ) ) {
			return true;
		}

		return Boolean(
			sourceElement.querySelector( 'input[type="checkbox"], input[type="radio"], select[multiple]' )
		);
	}

	/**
	 * Detects autocomplete select fields that should also be watched via DOM.
	 *
	 * @param {HTMLElement} sourceElement Source field element.
	 *
	 * @return {boolean}
	 */
	isAutocompleteSourceElement( sourceElement ) {
		if ( ! sourceElement ) {
			return false;
		}

		return sourceElement.matches( 'select.jet-select-autocomplete' )
			|| Boolean(
				sourceElement.querySelector( 'select.jet-select-autocomplete' )
			);
	}

	/**
	 * Detects calculated fields that trigger jQuery change instead of reactive watchers.
	 *
	 * @param {HTMLElement} sourceElement Source field element.
	 *
	 * @return {boolean}
	 */
	isCalculatedSourceElement( sourceElement ) {
		if ( ! sourceElement ) {
			return false;
		}

		return sourceElement.matches( 'input.jet-form-builder__calculated-field-input' )
			|| Boolean(
				sourceElement.querySelector( 'input.jet-form-builder__calculated-field-input' )
			)
			|| Boolean( sourceElement.closest( '.jet-form-builder__calculated-field' ) );
	}

	/**
	 * Determine if the source field should be watched/read via DOM.
	 *
	 * @param {HTMLElement} sourceElement Source field element.
	 *
	 * @return {boolean}
	 */
	shouldUseDomWatch( sourceElement ) {
		return this.isMultiChoiceSourceElement( sourceElement )
			|| this.isAutocompleteSourceElement( sourceElement )
			|| this.isCalculatedSourceElement( sourceElement );
	}

	/**
	 * Check if event target belongs to the watched source field/group.
	 *
	 * @param {Element}     eventTarget       Event target.
	 * @param {HTMLElement} liveSourceElement Source field element.
	 *
	 * @return {boolean}
	 */
	isEventFromSourceField( eventTarget, liveSourceElement ) {
		if ( liveSourceElement.contains( eventTarget ) || liveSourceElement === eventTarget ) {
			return true;
		}

		const eventName = this.resolveEventTargetName( eventTarget, liveSourceElement.closest( 'form' ) || document );
		const sourceName =
			liveSourceElement.getAttribute( 'name' )
			|| liveSourceElement.querySelector( '[name]' )?.getAttribute( 'name' )
			|| null;

		return Boolean( eventName && sourceName && eventName === sourceName );
	}

	/**
	 * Resolve source field name from any event target (input, wrapper, label).
	 *
	 * @param {Element}      eventTarget Event target.
	 * @param {HTMLElement|Document} root Root node for label[for] lookup.
	 *
	 * @return {string|null}
	 */
	resolveEventTargetName( eventTarget, root ) {
		if ( ! eventTarget ) {
			return null;
		}

		if ( eventTarget.getAttribute && eventTarget.getAttribute( 'name' ) ) {
			return eventTarget.getAttribute( 'name' );
		}

		const control = eventTarget.closest?.( 'input, select, textarea' );
		if ( control?.getAttribute( 'name' ) ) {
			return control.getAttribute( 'name' );
		}

		const label = eventTarget.closest?.( 'label' );
		if ( ! label ) {
			return null;
		}

		const nestedControl = label.querySelector( 'input, select, textarea' );
		if ( nestedControl?.getAttribute( 'name' ) ) {
			return nestedControl.getAttribute( 'name' );
		}

		const forId = label.getAttribute( 'for' );
		if ( ! forId ) {
			return null;
		}

		const linkedControl = root.querySelector( `#${ CSS.escape( forId ) }` );
		return linkedControl?.getAttribute( 'name' ) || null;
	}

	/**
	 * Check whether a context value should be treated as "filled".
	 *
	 * @param {*} value Context value.
	 *
	 * @return {boolean}
	 */
	isContextValueFilled( value ) {
		if ( Array.isArray( value ) ) {
			return value.some( ( item ) => item !== undefined && item !== null && item !== '' );
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
	shouldClearOnEmptyContext( config ) {
		if ( Array.isArray( config?.listenTo ) && config.listenTo.length > 1 ) {
			return true;
		}

		return ( config?.emptyContextAction || 'clear' ) === 'clear';
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
		const previewNonce = new URLSearchParams( window.location.search ).get( 'jfb_preview_nonce' ) || '';
		const headers      = {
			'Content-Type': 'application/json',
		};

		if ( window.wpApiSettings?.nonce ) {
			headers[ 'X-WP-Nonce' ] = window.wpApiSettings.nonce;
		}

		const response = await fetch( this.getUpdateEndpoint(), {
			method: 'POST',
			headers,
			body: JSON.stringify( {
				form_id: config.formId,
				field_name: config.fieldName,
				generator_id: config.generatorId,
				context,
				preview_nonce: previewNonce,
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
