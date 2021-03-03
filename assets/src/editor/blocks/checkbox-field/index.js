import CheckboxEdit from "./edit";
import metadata from "./block.json";

const { __ } = wp.i18n;

const { name, icon } = metadata;

/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */
const settings = {
	title: __( 'Checkbox Field' ),
	className: name.replace( '/', '-' ),
	icon: <span dangerouslySetInnerHTML={ { __html: icon } }></span>,
	edit: CheckboxEdit,
	useEditProps: [ 'uniqKey', 'blockName', 'attrHelp' ],
	example: {
		attributes: {
			label: 'Checkbox Field',
			field_options: [
				{ label: 'First Option', value: '' },
				{ label: 'Second Option', value: '' },
				{ label: 'Third Option', value: '' },
			]
		},
	},
};

export {
	metadata,
	name,
	settings
};