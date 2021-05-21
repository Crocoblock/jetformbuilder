const { __ } = wp.i18n;

const label = {
	use_gateways: __( 'Enable Gateways', 'jet-form-builder' ),
	enable_test_mode: __( 'Enable Test Mode', 'jet-form-builder' ),
};

const help = {
	enable_test_mode: __(
		`This option takes precedence over the <code>jet-form-builder/gateways/paypal/sandbox-mode</code> filter. 
		As of right now, works only for PayPal payment system`,
		'jet-form-builder',
	),
	use_gateways: __(
		`Activate payment getaways for the forms. This option takes precedence over the 
		<code>jet-form-builder/allow-gateways</code> filter`,
		'jet-form-builder',
	),
};

export {
	label,
	help,
};