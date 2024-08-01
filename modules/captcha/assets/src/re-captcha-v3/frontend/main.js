(
	function ( $ ) {
		const CaptchaHandler = function ( formNode, { key }, resolve ) {
			let script         = document.querySelector(
				'script#jet-form-builder-recaptcha-js',
			);
			const captchaField = formNode.querySelector(
				'[name="_captcha_token"]',
			);
			const formID       = +formNode.dataset.formId;

			function setFormToken() {
				if ( window.grecaptcha ) {
					window.grecaptcha.execute(
						key,
						{
							action: 'jet_form_builder_captcha__' + formID,
						},
					).then( function ( token ) {
						captchaField.value = token;
						resolve();
					} );
				}
				else {
					resolve();
				}
			}

			if ( !script ) {

				script = document.createElement( 'script' );

				script.id  = 'jet-form-builder-recaptcha-js';
				script.src = 'https://www.google.com/recaptcha/api.js?render=' +
					key;

				captchaField.parentNode.insertBefore( script, captchaField );

				setFormToken();

			}
			else {
				setFormToken();
			}
		};

		const setUpCaptcha = function ( formNode, resolve, reject ) {
			const formID  = +formNode.dataset.formId;
			const current = window.JetFormBuilderCaptchaConfig?.[ formID ] ||
				{};

			if ( !Object.values( current )?.length ) {
				return resolve();
			}

			window.JetFormBuilderCaptcha( formNode, current, resolve, reject );
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
						setUpCaptcha(
							$form[ 0 ],
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

					promises.push( new Promise( ( resolve, reject ) => {
						setUpCaptcha(
							event.target,
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