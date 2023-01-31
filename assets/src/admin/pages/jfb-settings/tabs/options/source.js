const { __ } = wp.i18n;

const label = {
	enable_dev_mode: __( 'Enable Dev-Mode', 'jet-form-builder' ),
	disable_next_button: __( 'Disable "Next" button', 'jet-form-builder' ),
	clear_on_uninstall: __(
		'Clear data on uninstall plugin',
		'jet-form-builder',
	),
	scroll_on_next: __(
		'Scroll to top on switch page',
		'jet-form-builder',
	),
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
	clear_on_uninstall: __(
		`If this option is active, when the plugin is deleted, 
all custom sql-tables, all options and files will also be deleted. 
In particular, those that were uploaded using Media Field.`,
		'jet-form-builder',
	),
	scroll_on_next: __(
		`Automatic scrolling to the top of the form when 
switching between form pages.`,
		'jet-form-builder',
	),
};

export { label, help };