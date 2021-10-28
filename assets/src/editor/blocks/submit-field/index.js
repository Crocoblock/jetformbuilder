import ActionButtonEdit from "./edit";
import metadata from "@blocks/submit-field/block.json";

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
	title: __( 'Action Button', 'jet-form-builder' ),
	icon: <span dangerouslySetInnerHTML={ { __html: icon } }></span>,
	edit: ActionButtonEdit,
	useEditProps: [ 'uniqKey', 'blockName', 'attrHelp' ],
	example: {
		attributes: {
			label: 'Action Button'
		}
	}
};

export {
	metadata,
	name,
	settings
};