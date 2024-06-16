import RegisterUserRender from './render';
import { __ } from '@wordpress/i18n';
import { commentAuthorAvatar } from '@wordpress/icons';

export default {
	type: 'register_user',
	label: __( 'Register User', 'jet-form-builder' ),
	edit: RegisterUserRender,
	icon: commentAuthorAvatar,
	docHref: 'https://jetformbuilder.com/features/register-user/',
	category: 'user',
}
