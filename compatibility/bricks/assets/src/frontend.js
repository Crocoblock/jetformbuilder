/**
 * Initialize jetForm forms in Bricks AJAX popup
 *
 * @since 3.5.6
 */

( function() {
	'use strict';

	/**
	 * Initialize forms in a given scope using JetPlugins system
	 *
	 * @param {HTMLElement|Document} scope - The scope to search for forms
	 */
	function initFormsInScope( scope ) {
		// Wait for jQuery and JetPlugins to be available
		if ( typeof jQuery === 'undefined' || typeof window.JetPlugins === 'undefined' ) {
			return;
		}

		if ( 1 != scope.dataset.popupAjax ) {
			return;
		}

		// Find all jetForm block containers in the scope
		const blockContainers = scope.querySelectorAll ? scope.querySelectorAll( '[data-block-name="jet-forms/form-block"], .wp-block-jet-forms-form-block, form.jet-form-builder' ) : [];

		if ( blockContainers.length === 0 ) {
			return;
		}

		// Initialize each block using JetPlugins system
		blockContainers.forEach( function( container ) {

			// Skip if already processed
			if ( container.dataset.jfbInitialized === 'true' ) {
				return;
			}

			// Find form element
			const form = container.querySelector( 'form.jet-form-builder' ) || 
			             ( container.tagName === 'FORM' && container.classList.contains( 'jet-form-builder' ) ? container : null );

			// Check if form is inside AJAX popup
			if ( form ) {
				const popup = form.closest( '.brx-popup[data-popup-ajax]' );
				if ( popup ) {
					// Fix action attribute if it points to Bricks endpoint
					if ( form.action && form.action.includes( 'bricks/v1/load_popup_content' ) ) {
						// Get the current page URL (where popup was opened from)
						const currentPageUrl   = window.location.origin + window.location.pathname;
						const currentPageQuery = window.location.search;

						// Set action to current page URL so reload submit works correctly
						form.action = currentPageUrl + currentPageQuery;
					}
				}
			}

			jQuery( () => JetPlugins.init() );

			// Mark as initialized to prevent double initialization
			container.dataset.jfbInitialized = 'true';
		} );
	}

	// Listen for Bricks AJAX popup loaded event
	document.addEventListener( 'bricks/ajax/popup/loaded', function( event ) {
		const popupElement = event.detail?.popupElement;

		if ( popupElement ) {
			initFormsInScope( popupElement );
		}
	} );
} ) ();
