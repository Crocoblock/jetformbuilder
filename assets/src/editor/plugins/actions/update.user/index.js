import UpdateUserRender from './render';
import { __ } from '@wordpress/i18n';
import { commentAuthorAvatar } from '@wordpress/icons';

export default {
	type: 'update_user',
	label: __( 'Update User', 'jet-form-builder' ),
	edit: UpdateUserRender,
	icon: commentAuthorAvatar,
	docHref: 'https://jetformbuilder.com/features/update-user/',
	category: 'user',
};
