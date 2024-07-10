/* eslint-disable import/no-extraneous-dependencies */
import RegisterUserRender from './Render';
import { __ } from '@wordpress/i18n';
import { commentAuthorAvatar } from '@wordpress/icons';
import userFields from './userFields';

export default {
	type: 'register_user',
	label: __( 'Register User', 'jet-form-builder' ),
	edit: RegisterUserRender,
	icon: commentAuthorAvatar,
	docHref: 'https://jetformbuilder.com/features/register-user/',
	category: 'user',
	validators: [
		( { settings } ) => {
			if ( !settings.allow_register ) {
				return false;
			}

			return settings?.role_can_register
			       ? false
			       : { type: 'empty', property: 'role_can_register' };
		},
		( { settings } ) => {
			const errors = [];

			for ( const field of userFields ) {
				if ( !field.required ) {
					continue;
				}
				const fieldValue = settings?.fields_map?.[ field.value ];

				if ( !fieldValue ) {
					errors.push(
						{ type: 'empty', property: 'field_' + field.value },
					);
				}
			}

			return errors;
		},
	],
};
