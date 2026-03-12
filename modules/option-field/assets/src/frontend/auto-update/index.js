/**
 * Auto-Update Feature — main entry point.
 * Hooks into JFB form lifecycle and sets up field watchers.
 *
 * @package JetFormBuilder
 */

import FieldWatcher from './FieldWatcher';
import './autocomplete-bridge';
import './styles.pcss';

/** @type {FieldWatcher|null} */
let globalWatcher = null;

/**
 * @return {FieldWatcher}
 */
function getWatcher() {
	if ( ! globalWatcher ) {
		globalWatcher = new FieldWatcher();
	}

	return globalWatcher;
}

/**
 * @param {HTMLElement|jQuery} formNode
 */
function initAutoUpdate( formNode ) {
	if ( ! formNode ) {
		return;
	}

	if ( formNode instanceof jQuery ) {
		formNode = formNode[ 0 ];
	}

	if ( ! formNode?.querySelectorAll ) {
		return;
	}

	getWatcher().initForm( formNode );
}

/**
 * MutationObserver for dynamically added/removed fields (Conditional Blocks, Repeater rows).
 *
 * @param {HTMLElement|jQuery} formNode
 */
function observeDynamicFields( formNode ) {
	if ( ! formNode || ! window.MutationObserver ) {
		return;
	}

	if ( formNode instanceof jQuery ) {
		formNode = formNode[ 0 ];
	}

	if ( ! formNode?.querySelectorAll ) {
		return;
	}

	const observer = new MutationObserver( ( mutations ) => {
		mutations.forEach( ( mutation ) => {
			mutation.removedNodes.forEach( ( node ) => {
				if ( node.nodeType === Node.ELEMENT_NODE ) {
					cleanupRemovedRepeaterRow( node );
				}
			} );

			mutation.addedNodes.forEach( ( node ) => {
				if ( node.nodeType !== Node.ELEMENT_NODE ) {
					return;
				}

				const appearedFields = [];

				if ( node.hasAttribute && node.getAttribute( 'data-field-name' ) ) {
					appearedFields.push( node );
				}

				if ( node.querySelectorAll ) {
					node.querySelectorAll( '[data-field-name]' ).forEach( ( f ) => appearedFields.push( f ) );
				}

				appearedFields.forEach( ( fieldElement ) => {
					const fieldName = fieldElement.getAttribute( 'data-field-name' );

					if ( fieldElement.hasAttribute( 'data-jfb-auto-update' ) ) {
						getWatcher().initField( fieldElement, formNode );
					}

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

}

/**
 * Clean up watchers and cached data for fields in a removed repeater row.
 *
 * When a repeater row is removed we must tear down any watchers that were
 * scoped to that row so they don't hold references to detached elements.
 *
 * @param {HTMLElement} removedNode The DOM node that was removed.
 */
function cleanupRemovedRepeaterRow( removedNode ) {
	// Check if the removed node is itself a repeater row or contains rows
	const rows = [];

	if ( removedNode.dataset?.repeaterRow === '1' ||
	     removedNode.classList?.contains( 'jet-form-builder-repeater__row' ) ) {
		rows.push( removedNode );
	}

	if ( removedNode.querySelectorAll ) {
		const nestedRows = removedNode.querySelectorAll( '.jet-form-builder-repeater__row' );
		nestedRows.forEach( ( row ) => rows.push( row ) );
	}

	if ( ! rows.length ) {
		return;
	}

	const watcher = getWatcher();

	rows.forEach( ( row ) => {
		// Collect field keys that belong to this row
		const keysToRemove = [];

		watcher.autoUpdateFields.forEach( ( fieldData, fieldKey ) => {
			const element = fieldData?.element;
			if ( element && row.contains( element ) ) {
				keysToRemove.push( fieldKey );
			}
		} );

		keysToRemove.forEach( ( fieldKey ) => {
			watcher.autoUpdateFields.delete( fieldKey );
		} );

		// Remove watchers scoped to this row
		const watcherKeysToRemove = [];

		watcher.watchers.forEach( ( watcherData, watcherKey ) => {
			// Watcher key includes repeater scope — check if this row is the scope
			// by checking if any dependent field was in this row
			const hasRemovedDependents = watcherData.dependents.some(
				( dep ) => keysToRemove.includes( dep )
			);

			if ( hasRemovedDependents ) {
				// Remove dependents that belong to this row
				watcherData.dependents = watcherData.dependents.filter(
					( dep ) => ! keysToRemove.includes( dep )
				);

				// If no more dependents, unwatch entirely
				if ( ! watcherData.dependents.length ) {
					if ( watcherData.unwatch ) {
						watcherData.unwatch();
					}
					watcherKeysToRemove.push( watcherKey );
				}
			}
		} );

		watcherKeysToRemove.forEach( ( key ) => {
			watcher.watchers.delete( key );
		} );
	} );
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

			// Re-initialize the watcher for this field
			watcher.watchField( sourceFieldName, targetFieldName, formNode );

			// Trigger debounced update if ALL source fields have values.
			// Debounced so multiple retries in the same tick collapse into one.
			if ( allSourceFieldsHaveValues( config.listenTo, formNode ) ) {
				watcher.debouncedUpdate( targetFieldName, formNode );
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
	document.addEventListener(
		'jet-form-builder/conditional-block/block-toggle-hidden-dom',
		( event ) => {
			const { block, result } = event.detail || {};

			if ( ! block || result ) {
				return;
			}

			const watcher = getWatcher();

			if ( ! watcher.watchers.size ) {
				return;
			}

			// Collect field names from the block being hidden
			const hiddenFieldNames = new Set();

			// The block itself might have a field-name
			if ( block.dataset?.fieldName ) {
				hiddenFieldNames.add( block.dataset.fieldName );
			}

			// Fields inside the block
			const innerFields = block.querySelectorAll
				? block.querySelectorAll( '[data-field-name]' )
				: [];

			innerFields.forEach( ( field ) => {
				hiddenFieldNames.add( field.getAttribute( 'data-field-name' ) );
			} );

			if ( ! hiddenFieldNames.size ) {
				return;
			}

			// Find all auto-update fields that depend on any hidden field
			const targetFieldsToUpdate = new Set();

			watcher.watchers.forEach( ( watcherData, watcherKey ) => {
				// watcherKey could be plain field name or repeater-scoped
				// Check if any hidden field name is part of the watcher key
				const matchesHidden = [ ...hiddenFieldNames ].some(
					( name ) => watcherKey === name || watcherKey.endsWith( `.${ name }` )
				);

				if ( matchesHidden ) {
					watcherData.dependents.forEach( ( dep ) => {
						targetFieldsToUpdate.add( dep );

						// Clear retry tracking so retryFailedWatchers fires
						// again when the source field reappears.
						[ ...hiddenFieldNames ].forEach( ( name ) => {
							retriedWatchers.delete( `${ name }:${ dep }` );
						} );
					} );
				}
			} );

			if ( ! targetFieldsToUpdate.size ) {
				return;
			}

			// Find the form node from any remaining auto-update field
			let formNode = null;

			for ( const targetKey of targetFieldsToUpdate ) {
				const fieldData = watcher.autoUpdateFields.get( targetKey );
				if ( fieldData?.element ) {
					formNode = fieldData.element.closest( 'form' );
					if ( formNode ) {
						break;
					}
				}
			}

			if ( ! formNode ) {
				return;
			}

			// Trigger updates for all affected dependents
			targetFieldsToUpdate.forEach( ( targetKey ) => {
				watcher.debouncedUpdate( targetKey, formNode );
			} );
		}
	);
}

/**
 * Hook into JetFormBuilder's form initialization.
 */
function hookIntoJetFormBuilder( attemptsLeft = 100 ) {
	// Wait for JetFormBuilderMain to be available
	if ( typeof window.JetFormBuilderMain === 'undefined' ) {
		if ( attemptsLeft <= 0 ) {
			console.warn( '[JFB Auto-Update] JetFormBuilderMain is not available. Auto-update was not initialized.' );
			return;
		}

		if ( attemptsLeft % 20 === 0 ) {
			console.warn( '[JFB Auto-Update] JetFormBuilderMain not available, retrying...' );
		}

		// Retry after a short delay
		setTimeout( () => hookIntoJetFormBuilder( attemptsLeft - 1 ), 100 );
		return;
	}

	// Listen for conditional block DOM toggling (global, once)
	setupConditionalBlockListener();

	// Hook into form after-init event.
	// Callback receives ( event, $scope, observable ).
	jQuery( document ).on( 'jet-form-builder/after-init', ( event, $scope ) => {
		const formNode = $scope[ 0 ]?.querySelector( 'form.jet-form-builder' );

		if ( ! formNode ) {
			return;
		}

		initAutoUpdate( formNode );

		// Set up observer for dynamic fields (Conditional Blocks)
		observeDynamicFields( formNode );
	} );

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
