(
	function ( $ ) {
		const CaptchaHandler = function (
			formID, { key }, resolve, reject ) {
			var script  = document.querySelector(
				'script#jet-form-builder-recaptcha-js' ),
			    cpField = $( 'form[data-form-id="' + formID + '"]' ).
				    find( '.captcha-token' );

			function setFormToken() {
				if ( window.JetFormBuilderToken[ formID ] ) {
					cpField.val( window.JetFormBuilderToken[ formID ] );
					resolve();
				}
				else if ( window.grecaptcha ) {
					grecaptcha.execute(
						key,
						{
							action: 'jet_form_builder_captcha__' + formID,
						},
					).then( function ( token ) {
						cpField.val( token );
						window.JetFormBuilderToken[ formID ] = token;
						resolve();
					} );
				}
				else {
					reject();
				}
			}

			if ( !script ) {

				script = document.createElement( 'script' );

				script.id  = 'jet-form-builder-recaptcha-js';
				script.src = 'https://www.google.com/recaptcha/api.js?render=' +
					key;

				const currentInput = cpField[ cpField.length - 1 ];

				currentInput.parentNode.insertBefore( script, currentInput );

				setFormToken();

			}
			else {
				setFormToken();
			}
		};

		const setUpCaptcha = function ( formID, resolve, reject ) {
			const current = window.JetFormBuilderReCaptchaConfig[ formID ] ||
				{};

			if ( !Object.values( current )?.length ) {
				return resolve();
			}

			window.JetFormBuilderCaptcha( formID, current, resolve, reject );
		};

		const setUpMain = function () {
			let addFilter;

			if ( window.JetFormBuilderAbstract ) {
				addFilter = window.JetPlugins.hooks.addFilter;
			}
			else {
				addFilter = wp.hooks.addFilter;
			}

			window.JetFormBuilderToken = window.JetFormBuilderToken || {};

			if ( !window.JetFormBuilderCaptcha ) {
				window.JetFormBuilderCaptcha = CaptchaHandler;
			}

			addFilter(
				'jet.fb.submit.ajax.promises',
				'jet-form-builder-recaptcha',
				function ( promises, $form ) {
					promises.push( new Promise( ( resolve, reject ) => {
						setUpCaptcha(
							$form.data( 'form-id' ),
							resolve,
							reject,
						);
					} ) );

					return promises;
				},
			);

			addFilter(
				'jet.fb.submit.reload.promises',
				'jet-form-builder-recaptcha',
				function ( promises, event ) {
					const $form = $( event.target );

					promises.push( new Promise( ( resolve, reject ) => {
						setUpCaptcha(
							$form.data( 'form-id' ),
							resolve,
							reject,
						);
					} ) );

					return promises;
				},
			);

		};

		$( setUpMain );
	}
)( jQuery );