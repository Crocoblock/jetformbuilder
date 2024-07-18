import { __ } from '@wordpress/i18n';

export const emailOptions = [
	{
		value: '',
		label: '--',
	},
	{
		value: 'admin',
		label: __( 'Admin email', 'jet-form-builder' ),
	},
	{
		value: 'form',
		label: __( 'Email from submitted form field', 'jet-form-builder' ),
	},
	{
		value: 'custom',
		label: __( 'Custom email', 'jet-form-builder' ),
	},
];

export const formatOptions = [
	{
		value: '',
		label: '--',
	},
	{
		value: 'text/plain',
		label: __( 'Plain text', 'jet-form-builder' ),
	},
	{
		value: 'text/html',
		label: __( 'HTML', 'jet-form-builder' ),
	},
];

export const contentTypeHelp = {
	'text/plain': __(
		'Sends the email as plain text without any formatting.',
		'jet-form-builder',
	),
	'text/html': __(
		'Sends the email with HTML formatting, allowing for rich text, images, and other multimedia elements',
		'jet-form-builder',
	),
};

export const emailOptionsHelp = {
	admin: __(
		'Sends the email to the admin email address configured in General Settings.',
		'jet-form-builder',
	),
	custom: __(
		'Sends the email to a custom address specified in the Email Address field below.',
		'jet-form-builder',
	),
	form: __(
		'Uses the email address provided by the user in the form.',
		'jet-form-builder',
	),
};

export const replyToHelp = {
	form: __(
		'Uses the email address provided by the user in the form.',
		'jet-form-builder',
	),
	custom: __(
		'Manually set a custom reply-to email address.',
		'jet-form-builder',
	),
};