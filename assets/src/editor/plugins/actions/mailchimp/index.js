import MailChimpRender from './render';
import { __ } from '@wordpress/i18n';
import icon from './icon';

export default {
	type: 'mailchimp',
	label: __( 'MailChimp', 'jet-form-builder' ),
	edit: MailChimpRender,
	icon,
	docHref: 'https://jetformbuilder.com/features/mailchimp/',
	category: 'communication',
};
