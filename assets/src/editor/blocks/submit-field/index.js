import SubmitEdit from "./edit";
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
	title: __( 'Submit Field' ),
	className: name.replace( '/', '-' ),
	icon: <span dangerouslySetInnerHTML={ { __html: icon } }></span>,
	edit: SubmitEdit,
	useEditProps: [ 'uniqKey' ],
	example: {
		attributes: {
			label: 'Submit'
		}
	}
};

export {
	metadata,
	name,
	settings
};