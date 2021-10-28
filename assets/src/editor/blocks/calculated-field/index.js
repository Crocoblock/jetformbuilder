import EditCalculated from "./edit";
import metadata from "@blocks/calculated-field/block.json";

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
	title: __( 'Calculated Field', 'jet-form-builder' ),
	className: name.replace( '/', '-' ),
	description: __( 'Calculate and display your number values', 'jet-form-builder' ),
	icon: <span dangerouslySetInnerHTML={ { __html: icon } }></span>,
	edit: EditCalculated,
	useEditProps: [ 'uniqKey', 'blockName' ],
	example: {
		attributes: {
			label: 'Calculated Field',
			desc: 'Field description...',
		}
	}
};

export {
	metadata,
	name,
	settings
};
