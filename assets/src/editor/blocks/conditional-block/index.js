import ConditionalBlockEdit from './edit';
import metadata from '@blocks/conditional-block/block.json';
import ConditionalSave from './save';

const { __ } = wp.i18n;

const { createBlock, createBlocksFromInnerBlocksTemplate } = wp.blocks;

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
					label: 'Title',
				},
			},
			{
				name: 'jet-forms/radio-field',
				attributes: {
					label: 'Item Radio',
					field_options: [
						{ label: 'First Option', value: '' },
						{ label: 'Second Option', value: '' },
						{ label: 'Third Option', value: '' },
					],
				},
			},
		],
	},
	transforms: {
		from: [
			{
				type: 'block',
				blocks: [ '*' ],
				isMultiBlock: true,
				__experimentalConvert: blocks => {
					const innerBlocksTemplate = blocks.map( ( {
						name,
						attributes,
						innerBlocks,
					} ) => [ name, { ...attributes }, innerBlocks ] );

					return createBlock( name, {}, createBlocksFromInnerBlocksTemplate( innerBlocksTemplate ) );
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