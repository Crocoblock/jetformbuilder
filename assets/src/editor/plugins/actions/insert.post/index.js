import InsertPostRender from './render';
import StaticInsertedPostID from './StaticInsertedPostID';
import DynamicInsertedPostID from './DynamicInsertedPostID';
import { __ } from '@wordpress/i18n';

const {
	      addComputedField,
      } = JetFBActions;

addComputedField( StaticInsertedPostID );
addComputedField( DynamicInsertedPostID );

export default {
	type: 'insert_post',
	label: __( 'Insert/Update Post', 'jet-form-builder' ),
	edit: InsertPostRender,
	icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
		<rect x="0" fill="none" width="20" height="20"/>
		<g>
			<path
				d="M17 7V4h-2V2h-3v1H3v15h11V9h1V7h2zm-1-2v1h-2v2h-1V6h-2V5h2V3h1v2h2z"/>
		</g>
	</svg>,
	docHref: 'https://jetformbuilder.com/features/insert-update-post/',
	category: 'content',
};
