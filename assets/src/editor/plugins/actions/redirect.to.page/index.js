import RedirectToPageRender from './render';
import { __ } from '@wordpress/i18n';
import { moveTo } from '@wordpress/icons';

export default {
	type: 'redirect_to_page',
	label: __( 'Redirect to Page', 'jet-form-builder' ),
	edit: RedirectToPageRender,
	icon: moveTo,
	docHref: 'https://jetformbuilder.com/features/redirect-to-page/'
}
