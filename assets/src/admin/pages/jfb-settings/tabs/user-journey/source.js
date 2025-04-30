import { __ } from '@wordpress/i18n';

const label = {
	enable_user_journey: __( 'Enable User Journey Tracking', 'jet-form-builder' ),
	storage_type: __( 'Storage Type', 'jet-form-builder' ),
	clear_after_submit: __( 'Clear Journey After Submit', 'jet-form-builder' ),
};

const help = {
	enable_user_journey: __(
		'Track user journey across the website and store it in browser storage',
		'jet-form-builder'
	),
	storage_type: __(
		'Choose where to store the user journey data',
		'jet-form-builder'
	),
	clear_after_submit: __(
		'When to clear the journey data after form submission',
		'jet-form-builder'
	),
};

export { label, help };