import HeadingEdit from "./edit";
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
	title: __( 'Heading Field' ),
	className: name.replace( '/', '-' ),
	icon: <span dangerouslySetInnerHTML={ { __html: icon } }></span>,
	edit: HeadingEdit,
	useEditProps: [ 'uniqKey' ],
	example: {
		attributes: {
			label: 'Heading Field',
			description: 'Field description...',
		}
	}
};

export {
	metadata,
	name,
	settings
};