import { __ } from '@wordpress/i18n';

const label = {
	callbacks: __( 'Allowed Server-Side Callbacks', 'jet-form-builder' ),
	blocked: __( 'Forms Using Blocked Functions', 'jet-form-builder' ),
};

const help = {
	callbacks: __(
		'One PHP function name per line. Only functions listed here (or shipped with JetFormBuilder) can be used as a "Server-Side callback" validation rule. Saving a form never adds a function to this list — it must be added here first. Changes here are not saved automatically — click Save when you are done editing.',
		'jet-form-builder',
	),
	blocked: __(
		'These forms use a function that is never allowed to run as a "Server-Side callback," for security reasons. It cannot be approved — edit each form and remove or replace the rule, or the field will keep failing validation. This list includes forms found during the update scan as well as any form saved since then that still uses a blocked function; a form drops off automatically once it is resaved without one.',
		'jet-form-builder',
	),
	migrationInProgress: __(
		'JetFormBuilder is scanning your existing forms and automatically restoring the custom Server-Side callback functions they already relied on. This page will update on its own once that finishes — no need to reload.',
		'jet-form-builder',
	),
};

export { label, help };
