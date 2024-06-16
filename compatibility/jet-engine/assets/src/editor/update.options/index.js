import UpdateOptionsRender from './edit';
import { __ } from '@wordpress/i18n';

export default {
	type: 'update_options',
	label: __( 'Update Options', 'jet-form-builder' ),
	edit: UpdateOptionsRender,
	category: 'content',
};