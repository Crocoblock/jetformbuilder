import SwitcherEdit from './edit';
import metadata from '@root/blocks/switcher/block.json';

const { __ } = wp.i18n;

const { createBlock } = wp.blocks;

const { name, icon = '' } = metadata;

metadata.attributes.isPreview = {
	'type': 'boolean',
	'default': false,
};

const settings = {
	icon: <span dangerouslySetInnerHTML={ { __html: icon } }></span>,
	description: __(
		`Click on any side of the horizontal switcher to toggle between 
'on' and 'off'. Simple and intuitive, suitable for quick interactions.`,
		'jet-form-builder',
	),
	edit: SwitcherEdit,
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
					'jet-forms/checkbox-field',
					'jet-forms/radio-field',
					'jet-forms/select-field',
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