import DeleteUserRender from './render';
import { __ } from '@wordpress/i18n';
// eslint-disable-next-line import/no-extraneous-dependencies
import { commentAuthorAvatar } from '@wordpress/icons';

export default {
	type: 'delete_user',
	label: __( 'Delete User', 'jet-form-builder' ),
	edit: DeleteUserRender,
	icon: commentAuthorAvatar,
	category: 'user',
	validators: [
		( { settings } ) => {
			if ( 'field' !== settings?.target_user ) {
				return false;
			}

			return settings?.user_id_field
			       ? false
			       : { type: 'empty', property: 'user_id_field' };
		},
		( { settings } ) => {
			if ( !settings?.delete_content ) {
				return false;
			}

			return settings?.post_types?.length
			       ? false
			       : { type: 'empty', property: 'post_types' };
		},
		( { settings, source } ) => {
			if ( !settings?.delete_cct || !source?.cctTypes?.length ) {
				return false;
			}

			return settings?.cct_types?.length
			       ? false
			       : { type: 'empty', property: 'cct_types' };
		},
	],
};
