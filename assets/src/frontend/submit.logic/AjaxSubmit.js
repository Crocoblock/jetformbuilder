import BaseSubmit from './BaseSubmit';

class AjaxSubmit extends BaseSubmit {

	submit() {
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
	}

	runSubmit() {
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
	}

	onSuccess( response ) {
		this.form.toggle();

		this.lastResponse = response;
		const $form       = jQuery( this.form.observable.rootNode );

		switch ( response.status ) {
			case 'validation_failed':
				this.insertErrors( response.fields );
				break;
			case 'success':
				jQuery( document ).trigger(
					'jet-form-builder/ajax/on-success',
					[ response, $form ],
				);
				break;
		}

		if ( response.redirect ) {
			window.location = response.redirect;
		}
		else if ( response.reload ) {
			window.location.reload();
		}
	}

	onFail( jqXHR, textStatus, errorThrown ) {
		this.form.toggle();

		console.error( jqXHR.responseText, errorThrown );
	}

	insertErrors( fields ) {
		for ( const [ fieldName, fieldData ] of Object.entries( fields ) ) {
			const input = this.form.observable.getInput( fieldName );

			if ( !input ) {
				continue;
			}

			input.insertError( fieldData.message );
		}
	}
}

export default AjaxSubmit;