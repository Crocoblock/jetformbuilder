import RadioEdit from "./edit";
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
	title: __( 'Radio Field' ),
	icon: <span dangerouslySetInnerHTML={ { __html: icon } }></span>,
	edit: RadioEdit,
	useEditProps: [ 'uniqKey', 'attrHelp', 'blockName' ],
};

export { metadata, name, settings };