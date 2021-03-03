import GroupBreakEdit from "./edit";
import metadata from "./block.json";

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
	title: __( 'Group Break Field' ),
	className: name.replace( '/', '-' ),
	icon: <span dangerouslySetInnerHTML={ { __html: icon } }></span>,
	edit: GroupBreakEdit,
	useEditProps: [ 'uniqKey' ],
};

export {
	metadata,
	name,
	settings
};