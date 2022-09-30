const { __ } = wp.i18n;

const label = {
	enable_dev_mode: __( 'Enable Dev-Mode', 'jet-form-builder' ),
};

const help = {
	enable_dev_mode: __(
		'With developer mode enabled, errors from the form will be saved.',
		'jet-form-builder',
	),
};

export { label, help };