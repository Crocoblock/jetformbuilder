import ConditionalBlockEdit from "./edit";
import metadata from "./block.json";
import ConditionalSave from "./save";

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
	title: __( 'Conditional Block' ),
	icon: <span dangerouslySetInnerHTML={ { __html: icon } }></span>,
	edit: ConditionalBlockEdit,
	save: ConditionalSave,
	useEditProps: [ 'uniqKey' ],
};

export {
	metadata,
	name,
	settings
};