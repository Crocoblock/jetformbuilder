import TextareaEdit from "./edit";
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
	title: __( 'Textarea Field' ),
	icon: <span dangerouslySetInnerHTML={ { __html: icon } }></span>,
	edit: TextareaEdit,
	useEditProps: [ 'uniqKey', 'attrHelp' ],
};

export {
	metadata,
	name,
	settings
};