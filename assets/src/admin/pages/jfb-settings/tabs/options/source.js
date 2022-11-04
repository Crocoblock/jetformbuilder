const { __ } = wp.i18n;

const label = {
	enable_dev_mode: __( 'Enable Dev-Mode', 'jet-form-builder' ),
	disable_next_button: __( 'Disable "Next button"', 'jet-form-builder' ),
};

const help = {
	enable_dev_mode: __(
		'With developer mode enabled, errors from the form will be saved.',
		'jet-form-builder',
	),
	disable_next_button: __(
		`If this option is enabled, the button to go to the next page 
(when using a multi-step form) will become disabled if 
there are unfilled required fields on the page.`,
		'jet-form-builder',
	),
};

export { label, help };