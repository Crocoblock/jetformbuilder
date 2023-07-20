import CheckboxEdit from './edit';
import metadata from '@blocks/checkbox-field/block.json';

const { __ } = wp.i18n;

const { createBlock } = wp.blocks;

const { name, icon } = metadata;

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
		`Make a list of options for the users to choose several variants 
with a multi-optional field. Allow to pick as many variants as the visitor needs.`,
		'jet-form-builder',
	),
	edit: CheckboxEdit,
	useEditProps: [ 'uniqKey', 'blockName', 'attrHelp' ],
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
					'jet-forms/radio-field',
					'jet-forms/select-field',
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
	metadata,
	name,
	settings,
};