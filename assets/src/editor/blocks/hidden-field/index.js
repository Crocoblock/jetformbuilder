import HeadingEdit from './edit';
import metadata from '@blocks/hidden-field/block.json';

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
	edit: HeadingEdit,
	useEditProps: [ 'uniqKey', 'blockName' ],
	example: {
		attributes: {
			field_value: 'post_id',
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
		],
		from: [
			{
				type: 'block',
				blocks: [
					'jet-forms/text-field',
				],
				transform: ( attributes ) => {
					/**
					 * @see https://github.com/Crocoblock/suggestions/issues/6408#issuecomment-1410778268
					 * @since 3.0.0
					 */
					if ( attributes.default?.length ||
						Object.keys( attributes.value )?.length
					) {
						attributes.field_value = '';
					}
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