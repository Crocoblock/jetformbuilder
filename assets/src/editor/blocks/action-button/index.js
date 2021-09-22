import ActionButton from "./edit";
import metadata from "@blocks/action-button/block.json";

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
	edit: ActionButton,
	useEditProps: [ 'uniqKey', 'attrHelp', 'blockName' ],
	example: {
		attributes: {
			label: 'Next Page'
		}
	}
};

export {
	metadata,
	name,
	settings
};