import RadioEdit from "./edit";
import metadata from "@blocks/radio-field/block.json";

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
	title: __( 'Radio Field' ),
	className: name.replace( '/', '-' ),
	icon: <span dangerouslySetInnerHTML={ { __html: icon } }></span>,
	edit: RadioEdit,
	useEditProps: [ 'uniqKey', 'attrHelp', 'blockName' ],
	example: {
		attributes: {
			label: 'Radio Field',
			field_options: [
				{ label: 'First Option', value: '' },
				{ label: 'Second Option', value: '' },
				{ label: 'Third Option', value: '' },
			]
		},
	}
};

export {
	metadata,
	name,
	settings
};