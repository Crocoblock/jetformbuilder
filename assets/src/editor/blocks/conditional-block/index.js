import ConditionalBlockEdit from './edit';
import metadata from '@blocks/conditional-block/block.json';
import ConditionalSave from './save';
import v3 from './deprecations/v3';

const { __, sprintf } = wp.i18n;

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
	icon: <span dangerouslySetInnerHTML={ { __html: icon } }></span>,
	edit: ConditionalBlockEdit,
	save: ConditionalSave,
	useEditProps: [ 'uniqKey' ],
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
		const funcObject = wp.data.select( 'jet-forms/block-conditions' ).
			getFunction(
				attributes?.func_type,
			);

		const funcLabel       = funcObject?.label;
		const conditionsCount = attributes?.conditions?.reduce(
			( prev, current ) => current?.or_operator ? prev : prev + 1,
			0,
		) ?? 0;

		return sprintf(
			__( '%s %d condition(s)', 'jet-form-builder' ),
			funcLabel,
			conditionsCount,
		);
	},
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

					return createBlock( name, {},
						createBlocksFromInnerBlocksTemplate(
							innerBlocksTemplate ) );
				},
				priority: 0,
			},
		],
	},
	deprecated: [ v3 ],
};

export {
	metadata,
	name,
	settings,
};