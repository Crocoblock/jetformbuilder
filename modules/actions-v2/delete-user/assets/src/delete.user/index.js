import DeleteUserRender from './render';
import { __ } from '@wordpress/i18n';

const icon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
	<path d="M12 12.75c2.35 0 4.25-1.9 4.25-4.25S14.35 4.25 12 4.25 7.75 6.15 7.75 8.5s1.9 4.25 4.25 4.25Zm0-7c1.52 0 2.75 1.23 2.75 2.75S13.52 11.25 12 11.25 9.25 10.02 9.25 8.5 10.48 5.75 12 5.75ZM4.5 20.25V19c0-2.62 2.13-4.75 4.75-4.75h5.5c.86 0 1.67.23 2.36.63l-1.11 1.11c-.38-.16-.8-.24-1.25-.24h-5.5C7.46 15.75 6 17.21 6 19v1.25H4.5Zm14.03-4.78 1.06 1.06-1.97 1.97 1.97 1.97-1.06 1.06-1.97-1.97-1.97 1.97-1.06-1.06 1.97-1.97-1.97-1.97 1.06-1.06 1.97 1.97 1.97-1.97Z"/>
</svg>;

export default {
	type: 'delete_user',
	label: __( 'Delete User', 'jet-form-builder' ),
	edit: DeleteUserRender,
	icon,
	category: 'user',
	validators: [
		( { settings } ) => {
			if (
				!settings?.delete_content ||
				'trash' !== settings?.content_action
			) {
				return false;
			}

			return settings?.reassign_id
			       ? false
			       : { type: 'empty', property: 'reassign_id' };
		},
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
