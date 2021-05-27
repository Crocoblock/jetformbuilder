import TimeEdit from "./edit";
import metadata from "@blocks/time-field/block.json";

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
	title: __( 'Time Field' ),
	className: name.replace( '/', '-' ),
	icon: <span dangerouslySetInnerHTML={ { __html: icon } }></span>,
	edit: TimeEdit,
	useEditProps: [ 'uniqKey', 'attrHelp' ],
	example: {
		attributes: {
			label: 'Time Field',
			desc: 'Field description...'
		}
	}
};

export {
	metadata,
	name,
	settings
};