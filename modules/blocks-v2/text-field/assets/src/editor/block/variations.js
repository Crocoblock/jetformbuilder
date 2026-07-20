import { __ } from '@wordpress/i18n';

const variations = [
	{
		name: 'email',
		title: __('Email', 'jet-form-builder'),
		description: __('Text field for email address.', 'jet-form-builder'),
		attributes: {
			field_type: 'email',
			name: 'email',
			label: __('Email', 'jet-form-builder'),
		},
		isActive: ['field_type', 'name'],
	},
	{
		name: 'password',
		title: __('Password', 'jet-form-builder'),
		description: __('Text field for password.', 'jet-form-builder'),
		attributes: {
			field_type: 'password',
			name: 'password',
			label: __('Password', 'jet-form-builder'),
		},
		isActive: ['field_type', 'name'],
	},
	{
		name: 'url',
		title: __('URL', 'jet-form-builder'),
		description: __('Text field for URL.', 'jet-form-builder'),
		attributes: {
			field_type: 'url',
			name: 'url',
			label: __('URL', 'jet-form-builder'),
		},
		isActive: ['field_type', 'name'],
	},
	{
		name: 'first-name',
		title: __('First Name', 'jet-form-builder'),
		description: __('Text field for first name.', 'jet-form-builder'),
		attributes: {
			name: 'first_name',
			label: __('First Name', 'jet-form-builder'),
		},
		isActive: ['name'],
	},
	{
		name: 'last-name',
		title: __('Last Name', 'jet-form-builder'),
		description: __('Text field for last name.', 'jet-form-builder'),
		attributes: {
			name: 'last_name',
			label: __('Last Name', 'jet-form-builder'),
		},
		isActive: ['name'], 
	},
];

export default variations;