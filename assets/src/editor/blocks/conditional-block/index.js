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
 */
const settings = {
	title: __( 'Conditional Block' ),
	icon: <span dangerouslySetInnerHTML={ { __html: icon } }></span>,
	edit: ConditionalBlockEdit,
	save: ConditionalSave,
	useBase: false,
	useEditProps: [ 'uniqKey', 'getFormFields' ],
};

export { metadata, name, settings };