import SaveRecordRender from './render';
import { __ } from '@wordpress/i18n';
import icon from './icon';

export default {
	type: 'save_record',
	label: __( 'Save Form Record', 'jet-form-builder' ),
	edit: SaveRecordRender,
	icon,
	docHref: 'https://jetformbuilder.com/features/how-to-use-save-form-record-action/',
};

