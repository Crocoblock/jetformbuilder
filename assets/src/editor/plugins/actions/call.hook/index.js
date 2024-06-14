import CallHookRender from './render';
import { __ } from '@wordpress/i18n';
import { code } from '@wordpress/icons';

export default {
	type: 'call_hook',
	label: __( 'Call Hook', 'jet-form-builder' ),
	edit: CallHookRender,
	icon: code,
	docHref: 'https://jetformbuilder.com/features/call-hook/'
};
