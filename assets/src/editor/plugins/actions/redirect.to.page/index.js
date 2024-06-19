import RedirectToPageRender from './render';
import { __ } from '@wordpress/i18n';
import { moveTo } from '@wordpress/icons';

export default {
	type: 'redirect_to_page',
	label: __( 'Redirect to Page', 'jet-form-builder' ),
	edit: RedirectToPageRender,
	icon: moveTo,
	docHref: 'https://jetformbuilder.com/features/redirect-to-page/',
	validators: [
		( { settings } ) => {
			return settings?.redirect_type
			       ? false
			       : { type: 'empty', property: 'redirect_type' };
		},
		( { settings } ) => {
			if ( 'static_page' !== settings?.redirect_type ) {
				return false;
			}
			return settings?.redirect_page
			       ? false
			       : { type: 'empty', property: 'redirect_page' };
		},
		( { settings } ) => {
			if ( 'custom_url' !== settings?.redirect_type ) {
				return false;
			}
			return settings?.redirect_url
			       ? false
			       : { type: 'empty', property: 'redirect_url' };
		},
	],
	redirectTypes: [
		{
			value: 'static_page',
			label: __( 'Static Page', 'jet-form-builder' ),
		},
		{
			value: 'custom_url',
			label: __( 'Custom URL', 'jet-form-builder' ),
		},
		{
			value: 'current_page',
			label: __( 'Current Page', 'jet-form-builder' ),
		},
		{
			value: 'inserted_post',
			label: __( 'Inserted/Updated post', 'jet-form-builder' ),
			isSupported: ( { fields } ) => (
				fields.some( ( { value } ) => 'inserted_post_id' === value )
			),
		},
	],
};
