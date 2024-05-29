import CheckMarkEdit from './edit';
import metadata from '@root/block.json';

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
		`Input coordinates by pinning the needed location on the map easily. 
Save the value conveniently into the Map meta field of JetEngine.`,
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