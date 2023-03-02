const { __ } = wp.i18n;

const label = {
	key: __( 'Site Key', 'jet-form-builder' ),
	secret: __( 'Secret Key', 'jet-form-builder' ),
	threshold: __( 'Score Threshold', 'jet-form-builder' ),
};

const help = {
	apiPref: __( 'Register reCAPTCHA v3 keys' ),
	apiLinkLabel: __( 'here' ),
	apiLink: 'https://www.google.com/recaptcha/admin/create'
};

export { label, help };