(
	function ( $ ) {
		'use strict';

		window.JetFBReactive = {};

		function onInitForm( event, scope ) {
			const form = scope[ 0 ].querySelector( 'form' );
			const current = {};
			JetFBReactive[ form.dataset.formId ] = current;

			for ( const formElement of form.querySelectorAll( '[data-jfb-sync]' ) ) {
				const name = formElement.dataset.jfbSync;

				if ( name in current && ! Array.isArray( current[ name ] ) ) {
					current[name] = [ current[ name ] ];
				}

				if ( Array.isArray( current[ name ] ) ) {
					current[name].push( formElement.value );
				} else {
					current[name] = formElement.value;
				}
			}
		}

		$( document ).on( 'jet-form-builder/init', onInitForm );
	}
)( jQuery );