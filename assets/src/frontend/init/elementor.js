function initElementor() {
	const widgets = {
		'jet-engine-booking-form.default': JetFormBuilder.widgetBookingForm,
		'jet-form-builder-form.default': JetFormBuilder.widgetBookingForm,
	};

	jQuery.each( widgets, function( widget, callback ) {
		window.elementorFrontend.hooks.addAction( 'frontend/element_ready/' + widget, callback );
	} );
}

export default initElementor;