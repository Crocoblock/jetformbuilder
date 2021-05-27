import NumberEdit from "./edit";
import metadata from "@blocks/number-field/block.json";

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
	title: __( 'Number Field' ),
	className: name.replace( '/', '-' ),
	icon: <span dangerouslySetInnerHTML={ { __html: icon } }></span>,
	edit: NumberEdit,
	useEditProps: [ 'uniqKey' ],
	example: {
		attributes: {
			label: 'Number Field',
			desc: 'Field description...',
			placeholder: 'Input your number...'
		}
	}
};

export {
	metadata,
	name,
	settings
};