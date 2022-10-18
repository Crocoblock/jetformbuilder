import initForm from './initForm';

function initElementor() {
	if ( ! window.elementorFrontend ) {
		return;
	}
	const widgets = {
		'jet-engine-booking-form.default': initForm,
		'jet-form-builder-form.default': initForm,
	};

	jQuery.each( widgets, function( widget, callback ) {
		window.elementorFrontend.hooks.addAction( 'frontend/element_ready/' + widget, callback );
	} );
}

export default initElementor;