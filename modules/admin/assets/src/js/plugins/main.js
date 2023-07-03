const pluginSlug = JetFBPluginConfig.slug;
const modalSlug  = 'modal-' + pluginSlug;

const modal          = document.querySelector( '#' + modalSlug );
const closeButton    = modal.querySelector( '.button.close' );
const continueButton = modal.querySelector( '.button.continue' );

let deactivateLink = '';

modal.addEventListener( 'click', event => {
	if ( closeButton === event.target ) {
		modal.close();

		return;
	}

	if ( continueButton === event.target ) {
		window.location = deactivateLink;

		return;
	}

	// close by click on backdrop

	let rect = event.target.getBoundingClientRect();

	if ( rect.left > event.clientX ||
		rect.right < event.clientX ||
		rect.top > event.clientY ||
		rect.bottom < event.clientY
	) {
		modal.close();
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
		modal.showModal();
	} );