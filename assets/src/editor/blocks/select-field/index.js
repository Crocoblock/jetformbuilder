import SelectEdit from "./edit";
import metadata from "@blocks/select-field/block.json";

const { __ } = wp.i18n;

const { createBlock } = wp.blocks;

const { name, icon = '' } = metadata;

/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */
const description = 'Try more options with Hierarchical Select addon';

const settings = {
	icon: <span dangerouslySetInnerHTML={ { __html: icon } }></span>,
	description,
	edit: SelectEdit,
	useEditProps: [ 'uniqKey', 'attrHelp', 'blockName' ],
	example: {
		attributes: {
			label: 'Select Field',
			desc: 'Field description...',
			field_options: [
				{ label: 'Choose option...', value: '' },
			]
		}
	},
	transforms: {
		to: [
			{
				type: 'block',
				blocks: [ 'jet-forms/text-field' ],
				transform: ( attributes ) => {
					return createBlock( 'jet-forms/text-field', { ...attributes } );
				},
				priority: 0,
			},
		],
		from: [
			{
				type: 'block',
				blocks: [
					'jet-forms/checkbox-field',
					'jet-forms/radio-field',
					'jet-forms/text-field',
				],
				transform: ( attributes ) => {
					return createBlock( name, { ...attributes } );
				},
				priority: 0,
			},
		],
	},
};

export {
	metadata,
	name,
	settings
};