import EditCalculated from "./edit";
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
	title: __( 'Calculated Field' ),
	description: __( 'Calculate and display your number values' ),
	icon: <span dangerouslySetInnerHTML={ { __html: icon } }></span>,
	edit: EditCalculated,
	useEditProps: [ 'uniqKey', 'blockName' ],
};

export { metadata, name, settings };
