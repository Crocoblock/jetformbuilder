/**
 * Auto-Update Feature Initialization.
 *
 * Main entry point for the auto-update feature.
 * Integrates with JetFormBuilder's form initialization hooks.
 *
 * @package JetFormBuilder
 */

import FieldWatcher from './FieldWatcher';
import './styles.pcss';

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
	if ( ! globalWatcher ) {
		globalWatcher = new FieldWatcher();
	}

	return globalWatcher;
}

/**
 * Initialize auto-update for a form.
 * Called by JetFormBuilder when a form is rendered.
 *
 * @param {HTMLElement|jQuery} formNode Form element (can be jQuery object or DOM element).
 */
function initAutoUpdate( formNode ) {
	if ( ! formNode ) {
		return;
	}

	// Convert jQuery object to DOM element if needed
	if ( formNode instanceof jQuery ) {
		formNode = formNode[ 0 ];
	}

	// Ensure we have a valid DOM element
	if ( ! formNode || ! formNode.querySelectorAll ) {
		console.error( '[JFB Auto-Update] Invalid formNode:', formNode );
		return;
	}

	const watcher = getWatcher();
	watcher.initForm( formNode );
}

/**
 * Initialize MutationObserver to watch for dynamically added fields.
 * This handles Conditional Blocks that show/hide fields dynamically.
 *
 * @param {HTMLElement|jQuery} formNode Form element to observe (can be jQuery object or DOM element).
 */
function observeDynamicFields( formNode ) {
	if ( ! formNode || ! window.MutationObserver ) {
		return;
	}

	// Convert jQuery object to DOM element if needed
	if ( formNode instanceof jQuery ) {
		formNode = formNode[ 0 ];
	}

	// Ensure we have a valid DOM element
	if ( ! formNode || ! formNode.querySelectorAll ) {
		console.error( '[JFB Auto-Update] Invalid formNode for observer:', formNode );
		return;
	}

	const observer = new MutationObserver( ( mutations ) => {
		mutations.forEach( ( mutation ) => {
			// Check added nodes for auto-update fields
			mutation.addedNodes.forEach( ( node ) => {
				// Skip non-element nodes (text nodes, comments, etc.)
				if ( node.nodeType !== Node.ELEMENT_NODE ) {
					return;
				}

				// Collect all fields that appeared (both auto-update and regular fields)
				const appearedFields = [];

				// Check if the added node itself is a field
				if ( node.hasAttribute && node.getAttribute( 'data-field-name' ) ) {
					appearedFields.push( node );
				}

				// Check if the added node contains fields
				if ( node.querySelectorAll ) {
					const nestedFields = node.querySelectorAll( '[data-field-name]' );
					nestedFields.forEach( ( field ) => appearedFields.push( field ) );
				}

				// Process appeared fields
				appearedFields.forEach( ( fieldElement ) => {
					const fieldName = fieldElement.getAttribute( 'data-field-name' );

					// If it's an auto-update field, initialize it
					if ( fieldElement.hasAttribute( 'data-jfb-auto-update' ) ) {
						console.log( '[JFB Auto-Update] Dynamically added auto-update field:', fieldName );
						const watcher = getWatcher();
						watcher.initField( fieldElement, formNode );

						// Trigger update immediately if it's a dependent field that just appeared
						triggerUpdateForNewField( fieldElement, formNode );
					}

					// Check if any existing auto-update fields were waiting for this field
					// (This handles the case where source field appears after dependent field was initialized)
					retryFailedWatchers( fieldName, formNode );
				} );
			} );
		} );
	} );

	// Observe the form for changes in the DOM tree
	observer.observe( formNode, {
		childList: true,
		subtree: true,
	} );

	console.log( '[JFB Auto-Update] MutationObserver initialized for form' );
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
function retryFailedWatchers( sourceFieldName, formNode ) {
	const watcher = getWatcher();

	// Get all auto-update fields
	watcher.autoUpdateFields.forEach( ( fieldData, targetFieldName ) => {
		const { config } = fieldData;

		// Check if this field listens to the source field that just appeared
		// config.listenTo is now an array
		if ( config.listenTo && Array.isArray( config.listenTo ) && config.listenTo.includes( sourceFieldName ) ) {
			// Create unique key for this watcher pair
			const watcherKey = `${ sourceFieldName }:${ targetFieldName }`;

			// Skip if we already retried this watcher
			if ( retriedWatchers.has( watcherKey ) ) {
				return;
			}

			// Mark as retried
			retriedWatchers.add( watcherKey );

			console.log( `[JFB Auto-Update] Retrying watcher for field "${ targetFieldName }" (source "${ sourceFieldName }" appeared)` );

			// Re-initialize the watcher for this field
			watcher.watchField( sourceFieldName, targetFieldName, formNode );

			// Trigger update if ALL source fields have values
			if ( allSourceFieldsHaveValues( config.listenTo, formNode ) ) {
				console.log( `[JFB Auto-Update] All source fields have values, triggering update for "${ targetFieldName }"` );
				watcher.updateField( targetFieldName, formNode );
			}
		}
	} );
}

/**
 * Check if all source fields have values.
 *
 * @param {Array}       sourceFieldNames Array of source field names.
 * @param {HTMLElement} formNode         Form element.
 *
 * @return {boolean} True if all fields have values.
 */
function allSourceFieldsHaveValues( sourceFieldNames, formNode ) {
	return sourceFieldNames.every( ( fieldName ) => {
		const field = formNode.querySelector( `[data-field-name="${ fieldName }"]` ) ||
		             formNode.querySelector( `[name="${ fieldName }"]` );
		return field && field.value;
	} );
}

/**
 * Trigger update for a newly appeared field.
 * If the field listens to another field, check if that field has a value and trigger update.
 *
 * @param {HTMLElement} fieldElement Field element.
 * @param {HTMLElement} formNode     Form element.
 */
function triggerUpdateForNewField( fieldElement, formNode ) {
	const listenTo = fieldElement.getAttribute( 'data-listen-to' );
	const isMultiple = fieldElement.hasAttribute( 'data-listen-to-multiple' );

	if ( ! listenTo ) {
		return;
	}

	// Parse listen_to (can be string or JSON array)
	let sourceFieldNames;
	if ( isMultiple ) {
		try {
			sourceFieldNames = JSON.parse( listenTo );
		} catch ( e ) {
			console.error( '[JFB Auto-Update] Failed to parse listen_to:', e );
			return;
		}
	} else {
		sourceFieldNames = [ listenTo ];
	}

	// Check if ALL source fields have values
	const allHaveValues = sourceFieldNames.every( ( fieldName ) => {
		const sourceField = formNode.querySelector( `[data-field-name="${ fieldName }"]` ) ||
		                   formNode.querySelector( `[name="${ fieldName }"]` );
		return sourceField && sourceField.value;
	} );

	if ( ! allHaveValues ) {
		return;
	}

	const fieldName = fieldElement.getAttribute( 'data-field-name' );
	console.log( `[JFB Auto-Update] Triggering update for newly appeared field: ${ fieldName }` );

	// Get watcher and trigger update manually
	const watcher = getWatcher();

	// Trigger update immediately (no debounce for initial appearance)
	// Use the field name, not config object
	watcher.updateField( fieldName, formNode );
}

/**
 * Hook into JetFormBuilder's form initialization.
 */
function hookIntoJetFormBuilder() {
	// Wait for JetFormBuilderMain to be available
	if ( typeof window.JetFormBuilderMain === 'undefined' ) {
		console.warn( '[JFB Auto-Update] JetFormBuilderMain not available, retrying...' );

		// Retry after a short delay
		setTimeout( hookIntoJetFormBuilder, 100 );
		return;
	}

	// Hook into form init event
	// JetFormBuilder triggers this when form is ready
	jQuery( document ).on( 'jet-form-builder/init', ( event, formNode ) => {
		// Delay initialization to ensure all inputs are registered
		setTimeout( () => {
			initAutoUpdate( formNode );

			// Set up observer for dynamic fields (Conditional Blocks)
			observeDynamicFields( formNode );
		}, 100 );
	} );

	// Also init for any already-rendered forms
	const existingForms = document.querySelectorAll( '.jet-form-builder' );
	existingForms.forEach( ( formNode ) => {
		// Delay initialization to ensure all inputs are registered
		setTimeout( () => {
			initAutoUpdate( formNode );

			// Set up observer for dynamic fields (Conditional Blocks)
			observeDynamicFields( formNode );
		}, 100 );
	} );

	console.log( '[JFB Auto-Update] Initialization complete' );
}

/**
 * Initialize on DOM ready.
 */
if ( document.readyState === 'loading' ) {
	document.addEventListener( 'DOMContentLoaded', hookIntoJetFormBuilder );
} else {
	hookIntoJetFormBuilder();
}

/**
 * Expose API for external use.
 */
window.JFBAutoUpdate = {
	getWatcher,
	initAutoUpdate,
};

export { getWatcher, initAutoUpdate };
export default { getWatcher, initAutoUpdate };
