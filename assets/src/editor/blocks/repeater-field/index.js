import metadata from "./block.json";
import RepeaterEdit from "./edit";
import RepeaterSave from "./save";

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
	title: __( 'Range Field' ),
	icon: <span dangerouslySetInnerHTML={ { __html: icon } }></span>,
	edit: RepeaterEdit,
	save: RepeaterSave,
	useEditProps: [ 'uniqKey', 'attrHelp' ],
};

export { metadata, name, settings };