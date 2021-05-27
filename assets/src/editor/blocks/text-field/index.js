import TextEdit from "./edit";
import metadata from "@blocks/text-field/block.json";

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
	title: __( 'Text Field' ),
	className: name.replace( '/', '-' ),
	icon: <span dangerouslySetInnerHTML={ { __html: icon } }></span>,
	edit: TextEdit,
	useEditProps: [ 'uniqKey', 'attrHelp' ],
	example: {
		attributes: {
			label: 'Text Field',
			placeholder: 'Input your text...',
			desc: 'Field description...'
		}
	}
};

export {
	metadata,
	name,
	settings
};