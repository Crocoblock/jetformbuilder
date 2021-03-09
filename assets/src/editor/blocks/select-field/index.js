import SelectEdit from "./edit";
import metadata from "./block.json";

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
	title: __( 'Select Field' ),
	className: name.replace( '/', '-' ),
	icon: <span dangerouslySetInnerHTML={ { __html: icon } }></span>,
	edit: SelectEdit,
	useEditProps: [ 'uniqKey', 'attrHelp', 'blockName' ],
	example: {
		attributes: {
			label: 'Select Field',
			desc: 'Field description...',
			field_options: [
				{ label: 'Choose option...', value: '' },
			]
		}
	}
};

export {
	metadata,
	name,
	settings
};