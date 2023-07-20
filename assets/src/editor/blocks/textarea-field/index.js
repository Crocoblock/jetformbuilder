import TextareaEdit from "./edit";
import metadata from "@blocks/textarea-field/block.json";

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
const settings = {
	icon: <span dangerouslySetInnerHTML={ { __html: icon } }></span>,
	description: __(
		`Give the user enough space to type in a bigger piece of text. 
Add a text area where the data can be placed in several lines.`,
		'jet-form-builder'
	),
	edit: TextareaEdit,
	useEditProps: [ 'uniqKey', 'attrHelp' ],
	example: {
		attributes: {
			isPreview: true,
		},
	},
	transforms: {
		to: [
			{
				type: 'block',
				blocks: [
					'jet-forms/text-field',
				],
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
					'jet-forms/text-field',
					'jet-forms/wysiwyg-field',
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