const { __ } = wp.i18n;

const label = {
	enable_dev_mode: __( 'Enable Dev-Mode', 'jet-form-builder' ),
	disable_next_button: __( 'Disable "Next" button', 'jet-form-builder' ),
};

const help = {
	enable_dev_mode: __(
		'With developer mode enabled, errors from the form will be saved.',
		'jet-form-builder',
	),
	disable_next_button: __(
		`If this option is active, the Next button in a multi-step 
form won't become clickable until all the required fields are completed.`,
		'jet-form-builder',
	),
};

export { label, help };