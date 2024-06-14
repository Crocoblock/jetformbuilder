import InsertPostRender from './render';
import StaticInsertedPostID from './StaticInsertedPostID';
import DynamicInsertedPostID from './DynamicInsertedPostID';
import { __ } from '@wordpress/i18n';
import { customPostType } from '@wordpress/icons';

const {
	      addComputedField,
      } = JetFBActions;

addComputedField( StaticInsertedPostID );
addComputedField( DynamicInsertedPostID );

export default {
	type: 'insert_post',
	label: __( 'Insert/Update Post', 'jet-form-builder' ),
	edit: InsertPostRender,
	icon: customPostType,
	docHref: 'https://jetformbuilder.com/features/insert-update-post/',
};
