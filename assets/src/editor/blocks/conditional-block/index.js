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
 *  - attrHelp
 */
const settings = {
	title: __( 'Conditional Block' ),
	className: name.replace( '/', '-' ),
	icon: <span dangerouslySetInnerHTML={ { __html: icon } }></span>,
	edit: ConditionalBlockEdit,
	save: ConditionalSave,
	useEditProps: [ 'uniqKey' ],
	example: {
		innerBlocks: [
			{
				name: 'jet-forms/text-field',
				attributes: {
					label: 'Title'
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
	},
};

export {
	metadata,
	name,
	settings
};