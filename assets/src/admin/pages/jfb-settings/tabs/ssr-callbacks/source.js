import { __ } from '@wordpress/i18n';

const label = {
	callbacks: __( 'Allowed Server-Side Callbacks', 'jet-form-builder' ),
	blocked: __( 'Forms Using Blocked Functions', 'jet-form-builder' ),
};

const help = {
	callbacks: __(
		'Enter custom PHP function names here (one per line) to allow them in your forms. Built-in functions are already allowed. Always click "Save" to apply changes.',
		'jet-form-builder',
	),
	blocked: __(
		'These forms use unsafe validation rules that are strictly blocked. To fix them, edit the form and change or remove the Server-Side callback function. The form will automatically disappear from this list once saved.',
		'jet-form-builder',
	),
	migrationInProgress: __(
		'JetFormBuilder is scanning your existing forms and automatically restoring the custom Server-Side callback functions they already relied on. This page will update on its own once that finishes — no need to reload.',
		'jet-form-builder',
	),
};

export { label, help };
