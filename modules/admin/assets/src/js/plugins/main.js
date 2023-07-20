const pluginSlug = JetFBPluginConfig.slug;
const modalSlug  = 'modal-' + pluginSlug;

const modal          = document.querySelector( '#' + modalSlug );
const exit           = modal.querySelector( '.jet-form-builder-modal-exit' );
const closeButton    = modal.querySelector( '.button.close' );
const continueButton = modal.querySelector( '.button.continue' );

let deactivateLink = '';

modal.addEventListener( 'click', event => {
	if ( [ closeButton, exit ].includes( event.target ) ) {
		modal.classList.remove( 'open' );

		return;
	}

	if ( continueButton === event.target ) {
		window.location = deactivateLink;
	}
} );

document.querySelector( '#bulk-action-form' ).
	addEventListener( 'click', function ( event ) {
		if (
			'A' !== event.target.nodeName ||
			!event.target?.id?.includes?.( 'deactivate-' ) ||
			!event.target.closest( `tr.active[data-slug="${ pluginSlug }"]` )
		) {
			return;
		}
		event.preventDefault();
		deactivateLink = event.target.href;

		modal.style.display = 'flex';
		modal.classList.add( 'open' );
	} );