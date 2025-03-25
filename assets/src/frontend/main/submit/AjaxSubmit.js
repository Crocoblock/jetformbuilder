import BaseSubmit from './BaseSubmit';
import ReactiveVar from '../reactive/ReactiveVar';
import { isSuccessStatus } from './functions';

// eslint-disable-next-line max-lines-per-function
function AjaxSubmit( form ) {
	BaseSubmit.call( this, form );

	this.status = new ReactiveVar();
	this.status.make();

	this.submit        = function () {
		const $form            = jQuery( this.form.observable.rootNode );
		const { applyFilters } = JetPlugins.hooks;

		Promise.all(
			applyFilters(
				'jet.fb.submit.ajax.promises',
				this.getPromises(),
				$form,
			),
		).then(
			callbacks => this.runSubmit( callbacks ),
		).catch(
			() => this.form.toggle(),
		);
	};
	this.runSubmit     = function ( callbacks ) {
		const { rootNode } = this.form.observable;

		const formData = new FormData( rootNode );
		formData.append(
			'_jet_engine_booking_form_id',
			this.form.getFormId(),
		);

		// disable watchers
		this.status.silence();

		this.status.current = null;

		// enable watchers
		this.status.silence();

		jQuery.ajax( {
			url: JetFormBuilderSettings.ajaxurl,
			type: 'POST',
			dataType: 'json',
			data: formData,
			cache: false,
			contentType: false,
			processData: false,
		} ).done(
			response => {
				this.onSuccess( response );
				const $form = jQuery( rootNode );

				callbacks.forEach( cb => {
					if ( 'function' === typeof cb ) {
						cb.call( $form, response );
					}
				} );
			},
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
				break;
		}
		/**
		 * Run status watchers
		 */
		this.status.current = response.status;

		if ( response.redirect ) {
			if ( response.open_in_new_tab ) {
				window.open( response.redirect, '_blank' );
			} else {
				window.location = response.redirect;
			}
		}
		else if ( response.reload ) {
			window.location.reload();
		}

		this.insertMessage( response.message );
	};
	this.onFail        = function ( jqXHR, textStatus, errorThrown ) {
		this.form.toggle();
		this.status.current = false;

		const { rootNode } = this.form.observable;
		const $form        = jQuery( rootNode );

		jQuery( document ).trigger(
			'jet-form-builder/ajax/on-fail',
			[ jqXHR, textStatus, errorThrown, $form ]
		);

		// eslint-disable-next-line no-console
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
/**
 * @type {ReactiveVar}
 */
AjaxSubmit.prototype.status = null;

AjaxSubmit.prototype.watchReset = function ( callable ) {
	const { rootNode } = this.form.observable;

	if ( !rootNode.dataset?.clear ) {
		return;
	}

	this.watchSuccess( callable );
};

AjaxSubmit.prototype.watchSuccess = function ( callable ) {
	const status = this.status;

	status.watch( () => {
		if ( isSuccessStatus( status.current ) ) {
			callable();
		}
	} );
};

AjaxSubmit.prototype.watchFail = function ( callable ) {
	const status = this.status;

	status.watch( () => {
		if ( !isSuccessStatus( status.current ) ) {
			callable();
		}
	} );
};

export default AjaxSubmit;