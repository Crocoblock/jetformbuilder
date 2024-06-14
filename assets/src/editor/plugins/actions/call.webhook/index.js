import CallWebHookRender from './render';
import { __ } from '@wordpress/i18n';
import { cloud } from '@wordpress/icons';

export default {
	type: 'call_webhook',
	label: __( 'Call Webhook', 'jet-form-builder' ),
	edit: CallWebHookRender,
	icon: cloud,
	docHref: 'https://jetformbuilder.com/features/call-webhook/'
};
