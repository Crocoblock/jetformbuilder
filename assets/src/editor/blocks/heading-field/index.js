import HeadingEdit from './edit';
import metadata from '@blocks/heading-field/block.json';

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
		`Build a heading for the form that can’t be changed by the users. 
Add the labels and descriptions to the different parts of the form.`,
		'jet-form-builder',
	),
	edit: HeadingEdit,
	useEditProps: [ 'uniqKey', 'blockName' ],
	example: {
		attributes: {
			isPreview: true,
		},
	},
	/**
	 * @param attributes
	 * @param context {{|'accessibility'|'visual'|'list-view'}}
	 * @returns {*}
	 * @private
	 */
	__experimentalLabel: ( attributes, { context } ) => {
		if ( context !== 'list-view' ) {
			return;
		}
		return attributes.label || metadata.title;
	},
	transforms: {
		to: [
			{
				type: 'block',
				blocks: [ 'jet-forms/text-field' ],
				transform: ( attributes ) => {
					return createBlock( 'jet-forms/text-field',
						{ ...attributes } );
				},
				priority: 0,
			},
			{
				type: 'block',
				blocks: [ 'core/paragraph' ],
				transform: ( { label = '' } ) => {
					return createBlock( 'core/paragraph', { content: label } );
				},
				priority: 0,
			},
		],
		from: [
			{
				type: 'block',
				blocks: [
					'jet-forms/text-field',
				],
				transform: ( attributes ) => {
					return createBlock( name, { ...attributes } );
				},
				priority: 0,
			},
			{
				type: 'block',
				blocks: [
					'core/paragraph',
				],
				transform: ( { content = '' } ) => {
					return createBlock( name, { label: content } );
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