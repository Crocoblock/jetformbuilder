const { __ } = wp.i18n;

const label = {
	key: __( 'Site Key', 'jet-form-builder' ),
	secret: __( 'Secret Key', 'jet-form-builder' ),
	threshold: __( 'Score Threshold', 'jet-form-builder' ),
};

const help = {
	threshold: __(
		`It should be a value between 0 and 1, default 0.5 (1.0 is very likely a good interaction, 0.0 is very likely a bot).`,
		'jet-form-builder'
	),
	apiPref: __( 'Register reCAPTCHA v3 keys', 'jet-form-builder' ),
	apiLinkLabel: __( 'here', 'jet-form-builder' ),
	apiLink: 'https://www.google.com/recaptcha/admin/create'
};

export { label, help };