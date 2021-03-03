import metadata from "./block.json";
import RepeaterEdit from "./edit";
import RepeaterSave from "./save";

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
	title: __( 'Range Field' ),
	className: name.replace( '/', '-' ),
	icon: <span dangerouslySetInnerHTML={ { __html: icon } }></span>,
	edit: RepeaterEdit,
	save: RepeaterSave,
	useEditProps: [ 'uniqKey', 'attrHelp' ],
	example: {
		attributes: {
			label: 'Multiple fields',
			description: 'Field description...',
		},
		innerBlocks: [
			{
				name: 'jet-forms/text-field',
				attributes: {
					label: 'Item Title'
				}
			},
			{
				name: 'jet-forms/radio-field',
				attributes: {
					label: 'Item Radio',
					field_options: [
						{ label: 'First Option', value: '' },
						{ label: 'Second Option', value: '' },
						{ label: 'Third Option', value: '' },
					]
				}
			}
		]
	}
};

export {
	metadata,
	name,
	settings
};