const { __ } = wp.i18n;

const label = {
	use_gateways: __( 'Use Gateways', 'jet-form-builder' ),
	enable_test_mode: __( 'Enable Test Mode', 'jet-form-builder' ),
};

const help = {
	enable_test_mode: __(
		'This option takes precedence over the <code>jet-form-builder/gateways/paypal/sandbox-mode</code> filter',
		'jet-form-builder',
	),
	use_gateways: __(
		'This option takes precedence over the <code>jet-form-builder/allow-gateways</code> filter',
		'jet-form-builder',
	),
};

export {
	label,
	help,
};