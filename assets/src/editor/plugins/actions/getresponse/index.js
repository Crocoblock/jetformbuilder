import GetResponseAction from './render';
import { __ } from '@wordpress/i18n';
import icon from './icon';

export default {
	type: 'getresponse',
	label: __( 'Getresponse', 'jet-form-builder' ),
	edit: GetResponseAction,
	icon,
	docHref: 'https://jetformbuilder.com/features/getresponse/',
}
