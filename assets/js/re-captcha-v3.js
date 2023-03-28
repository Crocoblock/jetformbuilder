(
	function ( $ ) {
		const CaptchaHandler = function (
			formID, { action_prefix, key }, resolve, reject ) {
			var script  = document.querySelector(
				'script#jet-form-builder-recaptcha-js' ),
			    cpField = $( 'form[data-form-id="' + formID + '"]' ).
				    find( '.captcha-token' );

			function setFormToken() {
				if ( window.grecaptcha ) {
					grecaptcha.execute(
						key,
						{
							action: action_prefix + formID,
						},
					).then( function ( token ) {
						cpField.val( token );
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
				false;

			if ( !current ) {
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

			if ( !window.JetFormBuilderCaptcha ) {
				window.JetFormBuilderCaptcha = CaptchaHandler;
			}

			addFilter(
				'jet.fb.submit.ajax.promises',
				'jet-form-builder-recaptcha',
				function ( promises, $form ) {
					promises.push( new Promise( ( resolve, reject ) => {
						setUpCaptcha( $form.data( 'form-id' ), resolve,
							reject );
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
						setUpCaptcha( $form.data( 'form-id' ), resolve,
							reject );
					} ) );

					return promises;
				},
			);

		};

		$( setUpMain );
	}
)( jQuery );