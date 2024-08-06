import CheckMarkEdit from './edit';
import metadata from '@blockJson';

const { __ } = wp.i18n;

const { createBlock } = wp.blocks;

const { name, icon = '' } = metadata;

metadata.attributes.isPreview = {
	type: 'boolean',
	default: false,
};

const settings = {
	...metadata,
	icon: <span dangerouslySetInnerHTML={ { __html: icon } }></span>,
	description: __(
		'A block for custom Listing Item templates. Set custom icons for the block\'s default and checked modes.',
		'jet-form-builder',
	),
	edit: CheckMarkEdit,
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
		],
	},
};

export {
	name,
	settings,
};