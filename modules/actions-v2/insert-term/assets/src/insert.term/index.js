import InsertTermRender from './render';
import { __ } from '@wordpress/i18n';

export default {
	type: 'insert_term',
	label: __( 'Insert/Update Term', 'jet-form-builder' ),
	edit: InsertTermRender,
	icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
		<rect x="0" fill="none" width="20" height="20"/>
		<g>
			<path
				d="M17 7V4h-2V2h-3v1H3v15h11V9h1V7h2zm-1-2v1h-2v2h-1V6h-2V5h2V3h1v2h2z"/>
		</g>
	</svg>,
	category: 'content',
	validators: [
		( { settings } ) => {
			return settings?.taxonomy
			       ? false
			       : { type: 'empty', property: 'taxonomy' };
		},
	],
};
