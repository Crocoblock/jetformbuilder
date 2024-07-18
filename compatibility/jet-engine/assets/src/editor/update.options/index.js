/* eslint-disable import/no-extraneous-dependencies */
import UpdateOptionsEdit from './Edit';
import { __ } from '@wordpress/i18n';
import { cog } from '@wordpress/icons';

export default {
	type: 'update_options',
	label: __( 'Update Options', 'jet-form-builder' ),
	edit: UpdateOptionsEdit,
	category: 'content',
	icon: cog,
	validators: [
		( { settings } ) => {
			return settings?.options_page ? false : { property: 'options_page' };
		},
	],
};