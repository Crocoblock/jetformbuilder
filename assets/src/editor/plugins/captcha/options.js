const { __ } = wp.i18n;

const labels = {
	enabled: __( 'Enable reCAPTCHA v3 form verification', 'jet-form-builder' ),
	key: __( 'Site Key:', 'jet-form-builder' ),
	secret: __( 'Secret Key:', 'jet-form-builder' ),
	use_global: __( 'Use Global Settings', 'jet-form-builder' ),
	threshold: __( 'Score Threshold', 'jet-form-builder' ),
};

const help = {
	threshold: __(
		`It should be a value between 0 and 1, default 0.5 
(1.0 is very likely a good interaction, 0.0 is very likely a bot).`,
		'jet-form-builder',
	),
};

export { labels, help };