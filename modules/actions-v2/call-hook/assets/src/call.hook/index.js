import CallHookRender from './render';
import { __ } from '@wordpress/i18n';
// eslint-disable-next-line import/no-extraneous-dependencies
import { code } from '@wordpress/icons';

export default {
	type: 'call_hook',
	label: __( 'Call Hook', 'jet-form-builder' ),
	edit: CallHookRender,
	icon: code,
	docHref: 'https://jetformbuilder.com/features/call-hook/',
	category: 'advanced',
	validators: [
		( { settings } ) => settings?.hook_name
		                    ? false
		                    : { type: 'empty', property: 'hook_name' },
	],
};
