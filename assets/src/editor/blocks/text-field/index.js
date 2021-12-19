import TextEdit from './edit';
import metadata from '@blocks/text-field/block.json';

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
	title: __( 'Text Field', 'jet-form-builder' ),
	icon: <span dangerouslySetInnerHTML={ { __html: icon } }></span>,
	edit: TextEdit,
	useEditProps: [ 'uniqKey', 'attrHelp' ],
	example: {
		attributes: {
			label: 'Text Field',
			placeholder: 'Input your text...',
			desc: 'Field description...',
		},
	},
	transforms: {
		to: [
			{
				type: 'block',
				blocks: [ 'jet-forms/textarea-field' ],
				transform: ( attributes ) => {
					return createBlock( 'jet-forms/textarea-field', { ...attributes } );
				},
				priority: 0,
			},
			{
				type: 'block',
				blocks: [ 'jet-forms/number-field' ],
				transform: ( attributes ) => {
					return createBlock( 'jet-forms/number-field', { ...attributes } );
				},
				priority: 0,
			},
			{
				type: 'block',
				blocks: [ 'jet-forms/wysiwyg-field' ],
				transform: ( attributes ) => {
					return createBlock( 'jet-forms/wysiwyg-field', { ...attributes } );
				},
				priority: 0,
			},
		],
		from: [
			{
				type: 'block',
				blocks: [
					'jet-forms/textarea-field',
					'jet-forms/number-field',
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
	settings,
};