import { __ } from '@wordpress/i18n';

const userFields = [
	{
		value: 'login',
		label: __( 'User Login', 'jet-form-builder' ),
		required: true,
	},
	{
		value: 'email',
		label: __( 'Email', 'jet-form-builder' ),
		required: true,
	},
	{
		value: 'password',
		label: __( 'Password', 'jet-form-builder' ),
		required: true,
	},
	{
		value: 'confirm_password',
		label: __( 'Confirm Password', 'jet-form-builder' ),
		required: true,
	},
	{
		value: 'first_name',
		label: __( 'First Name', 'jet-form-builder' ),
	},
	{
		value: 'last_name',
		label: __( 'Last Name', 'jet-form-builder' ),
	},
	{
		value: 'user_url',
		label: __( 'User URL', 'jet-form-builder' ),
	},
];

export default userFields;