import BaseSubmit from './BaseSubmit';

function AjaxSubmit( form ) {
	BaseSubmit.call( this, form );

	this.submit        = function () {
		const $form            = jQuery( this.form.observable.rootNode );
		const { applyFilters } = wp.hooks;

		Promise.all(
			applyFilters(
				'jet.fb.submit.ajax.promises',
				this.getPromises(),
				$form,
			),
		).then(
			() => this.runSubmit(),
		).catch(
			() => this.form.toggle(),
		);
	};
	this.runSubmit     = function () {
		const { rootNode } = this.form.observable;

		const formData = new FormData( rootNode );
		formData.append(
			'_jet_engine_booking_form_id',
			this.form.getFormId(),
		);

		jQuery.ajax( {
			url: JetFormBuilderSettings.ajaxurl,
			type: 'POST',
			dataType: 'json',
			data: formData,
			cache: false,
			contentType: false,
			processData: false,
		} ).done(
			response => this.onSuccess( response ),
		).fail(
			this.onFail.bind( this ),
		);
	};
	this.onSuccess     = function ( response ) {
		this.form.toggle();

		const { rootNode } = this.form.observable;

		this.lastResponse = response;
		const $form       = jQuery( rootNode );

		switch ( response.status ) {
			case 'success':
				jQuery( document ).trigger(
					'jet-form-builder/ajax/on-success',
					[ response, $form ],
				);
				for ( const dataInput of this.form.observable.getInputs() ) {
					dataInput.onClear();
				}
				break;
		}

		if ( response.redirect ) {
			window.location = response.redirect;
		}
		else if ( response.reload ) {
			window.location.reload();
		}

		this.insertMessage( response.message );
	};
	this.onFail        = function ( jqXHR, textStatus, errorThrown ) {
		this.form.toggle();

		console.error( jqXHR.responseText, errorThrown );
	};
	this.insertMessage = function ( message ) {
		const { rootNode } = this.form.observable;

		const node = document.createElement( 'div' );
		node.classList.add( 'jet-form-builder-messages-wrap' );
		node.innerHTML = message;

		rootNode.appendChild( node );
	};
}

AjaxSubmit.prototype = Object.create( BaseSubmit.prototype );

export default AjaxSubmit;