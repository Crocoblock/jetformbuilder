import { __ } from '@wordpress/i18n';

const userFields = [
	{
		value: 'login',
		label: __( 'User Login', 'jet-form-builder' ),
		help: __( 'Choose the form field that will be used to get the user login. The value of this field will be stored as the user login in the database.', 'jet-form-builder' ),
		required: true,
	},
	{
		value: 'email',
		label: __( 'Email', 'jet-form-builder' ),
		help: __( 'Choose the form field that will be used to get the user email. The value of this field will be stored as the user email in the database. You can use the same field in the User Login setting if you want the login and email to be the same.', 'jet-form-builder' ),
		required: true,
	},
	{
		value: 'password',
		label: __( 'Password', 'jet-form-builder' ),
		help: __( 'Choose the form field that will be used to get the user password. The value of this field will be stored in the database in a hashed format.', 'jet-form-builder' ),
		required: true,
	},
	{
		value: 'confirm_password',
		label: __( 'Confirm Password', 'jet-form-builder' ),
		help: __( 'Choose the form field that will be used to confirm the user password. This field is required to ensure the user has entered the correct password.', 'jet-form-builder' ),
		required: true,
	},
	{
		value: 'first_name',
		label: __( 'First Name', 'jet-form-builder' ),
		help: __( '(Optional) Choose the form field that will be used to get the user\'s first name. The value of this field will be stored in the database as the First Name in the user profile.', 'jet-form-builder' ),
	},
	{
		value: 'last_name',
		label: __( 'Last Name', 'jet-form-builder' ),
		help: __( '(Optional) Choose the form field that will be used to get the user\'s last name. The value of this field will be stored in the WordPress database as the last name in the user profile.', 'jet-form-builder' ),
	},
	{
		value: 'user_url',
		label: __( 'User URL', 'jet-form-builder' ),
		help: __( '(Optional) Choose the form field that will be used to get the user’s website. The value of this field will be stored in the WordPress database as the website in the Contacts section of the user profile.', 'jet-form-builder' ),
	},
];

export default userFields;