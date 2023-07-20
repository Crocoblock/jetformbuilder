import GroupBreakEdit from './edit';
import metadata from '@blocks/group-break-field/block.json';

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
		`Create a break between two fields with a horizontal line. 
Separate different form parts without dividing form on two pages.`,
		'jet-form-builder',
	),
	edit: GroupBreakEdit,
	useEditProps: [ 'uniqKey' ],
	example: {
		attributes: {
			isPreview: true,
		},
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
				blocks: [ 'core/separator' ],
				transform: ( attributes ) => {
					return createBlock( 'core/separator', {} );
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
					'core/separator',
				],
				transform: ( attributes ) => {
					return createBlock( name, {} );
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