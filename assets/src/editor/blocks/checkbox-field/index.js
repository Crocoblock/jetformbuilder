import CheckboxEdit from "./edit";
import metadata from "@blocks/checkbox-field/block.json";

const { __ } = wp.i18n;

const { createBlock } = wp.blocks;

const { name, icon } = metadata;

/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */
const settings = {
	title: __( 'Checkbox Field', 'jet-form-builder' ),
	className: name.replace( '/', '-' ),
	icon: <span dangerouslySetInnerHTML={ { __html: icon } }></span>,
	edit: CheckboxEdit,
	useEditProps: [ 'uniqKey', 'blockName', 'attrHelp' ],
	example: {
		attributes: {
			label: 'Checkbox Field',
			desc: 'Field description...',
			field_options: [
				{ label: 'First Option', value: '' },
				{ label: 'Second Option', value: '' },
				{ label: 'Third Option', value: '' },
			]
		},
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
					'jet-forms/radio-field',
					'jet-forms/select-field',
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