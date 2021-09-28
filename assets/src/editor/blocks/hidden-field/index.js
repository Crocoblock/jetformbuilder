import HeadingEdit from "./edit";
import metadata from "@blocks/hidden-field/block.json";

const { __ } = wp.i18n;

const { name, icon = '' } = metadata;

/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */
const settings = {
	title: __( 'Hidden Field', 'jet-form-builder' ),
	className: name.replace( '/', '-' ),
	icon: <span dangerouslySetInnerHTML={ { __html: icon } }></span>,
	edit: HeadingEdit,
	useEditProps: [ 'uniqKey', 'blockName' ],
	example: {
		attributes: {
			field_value: 'post_id'
		}
	}
};

export {
	metadata,
	name,
	settings
};