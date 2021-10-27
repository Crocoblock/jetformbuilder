(
	function ( $ ) {
		const CaptchaHandler = function ( formID, captchaKey, actionPrefix ) {
			var script = document.querySelector( 'script#jet-form-builder-recaptcha-js' ),
				cpField = $( 'form[data-form-id="' + formID + '"]' ).find( '.captcha-token' );

			function setFormToken() {
				if ( window.JetFormBuilderToken[ formID ] ) {
					cpField.val( window.JetFormBuilderToken[ formID ] );
				} else if ( window.grecaptcha ) {
					window.grecaptcha.ready( function () {
						grecaptcha.execute(
							captchaKey,
							{
								action: actionPrefix + formID,
							},
						).then( function ( token ) {
							cpField.val( token );
							window.JetFormBuilderToken[ formID ] = token;
						} );
					} );
				}
			}

			if ( ! script ) {

				script = document.createElement( 'script' );

				script.id = 'jet-form-builder-recaptcha-js';
				script.src = 'https://www.google.com/recaptcha/api.js?render=' + captchaKey;

				const currentInput = cpField[ cpField.length - 1 ];

				currentInput.parentNode.insertBefore( script, currentInput );

				script.onload = function () {
					setFormToken();
				};

			} else {
				setFormToken();
			}
		};

		const setUpCaptcha = function () {
			for ( const formID in window.JetFormBuilderReCaptchaConfig ) {
				const current = window.JetFormBuilderReCaptchaConfig[ formID ];

				window.JetFormBuilderCaptcha( formID, current.key, current.action_prefix );
			}
		};

		const setUpMain = function () {
			window.JetFormBuilderToken = window.JetFormBuilderToken || {};

			if ( ! window.JetFormBuilderCaptcha ) {
				window.JetFormBuilderCaptcha = CaptchaHandler;
			}
			setUpCaptcha();

			$( window ).on( 'jet-popup/show-event/after-show', function () {
				setUpCaptcha();
			} );
		};

		$( setUpMain );
	}
)( jQuery );