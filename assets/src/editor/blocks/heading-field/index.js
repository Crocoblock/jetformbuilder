import HeadingEdit from "./edit";
import metadata from "@blocks/heading-field/block.json";

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
	title: __( 'Heading Field' ),
	className: name.replace( '/', '-' ),
	icon: <span dangerouslySetInnerHTML={ { __html: icon } }></span>,
	edit: HeadingEdit,
	useEditProps: [ 'uniqKey', 'blockName' ],
	example: {
		attributes: {
			label: 'Heading Field',
			desc: 'Field description...',
		}
	}
};

export {
	metadata,
	name,
	settings
};