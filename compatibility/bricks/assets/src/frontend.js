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

			const $scope = jQuery( container );

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

			// Mark as initialized to prevent double initialization
			container.dataset.jfbInitialized = 'true';

			initFormManually( $scope );
		} );
	}

	/**
	 * Manually initialize a form using Observable pattern
	 *
	 * @param {jQuery} $scope - jQuery scope containing the form
	 */
	function initFormManually( $scope ) {
		const form = $scope[0]?.querySelector( 'form.jet-form-builder' ) || $scope[0];

		if ( !form || !form.classList.contains('jet-form-builder') ) {
			return;
		}

		// Check if Observable is available
		if (typeof window.JetFormBuilderAbstract === 'undefined' || 
			typeof window.JetFormBuilderAbstract.Observable === 'undefined') {

			return;
		}

		const Observable = window.JetFormBuilderAbstract.Observable;
		const formId     = form.dataset?.formId;

		if ( !formId ) {
			return;
		}

		try {
			// Initialize Observable
			window.JetFormBuilder = window.JetFormBuilder || {};
			const observable = new Observable();
			window.JetFormBuilder[formId] = observable;

			// Trigger init event
			jQuery( document ).trigger( 'jet-form-builder/init', [$scope, observable] );

			// Start observing the form
			observable.observe( form );

			// Trigger after-init event
			jQuery( document ).trigger('jet-form-builder/after-init', [$scope, observable]);
		} catch ( error ) {
			// Silently fail
		}
	}

	// Listen for Bricks AJAX popup loaded event
	document.addEventListener( 'bricks/ajax/popup/loaded', function( event ) {
		const popupElement = event.detail?.popupElement;

		if ( popupElement ) {
			//waitAndInit(popupElement);
			initFormsInScope( popupElement );
		}
	} );
} ) ();
