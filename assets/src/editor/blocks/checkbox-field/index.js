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
	icon: <span dangerouslySetInnerHTML={ { __html: icon } }></span>,
	edit: CheckboxEdit,
	useEditProps: [ 'uniqKey', 'blockName' ],
};

export { metadata, name, settings };