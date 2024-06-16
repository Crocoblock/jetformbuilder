import SendEmailRender from './render';
import { __ } from '@wordpress/i18n';
import { inbox } from '@wordpress/icons';

export default {
	type: 'send_email',
	label: __( 'Send Email', 'jet-form-builder' ),
	edit: SendEmailRender,
	icon: inbox,
	docHref: 'https://jetformbuilder.com/features/send-email/',
	category: 'communication',
};
