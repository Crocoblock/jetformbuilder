import EditCalculated from './edit';
import metadata from '@blocks/calculated-field/block.json';

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
		`Pull out the values from the form fields and meta fields and 
use them to calculate the formula of any complexity you've set before.`,
		'jet-form-builder',
	),
	edit: EditCalculated,
	useEditProps: [ 'uniqKey', 'blockName' ],
	example: {
		attributes: {
			isPreview: true,
		},
	},
	transforms: {
		to: [
			{
				type: 'block',
				blocks: [ 'jet-forms/number-field' ],
				transform: ( attributes ) => {
					return createBlock( 'jet-forms/number-field',
						{ ...attributes } );
				},
				priority: 0,
			},
		],
		from: [
			{
				type: 'block',
				blocks: [
					'jet-forms/number-field',
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
