import FormBreakEdit from "./edit";
import metadata from "@blocks/form-break-field/block.json";

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
	edit: FormBreakEdit,
	useEditProps: [ 'uniqKey', 'attrHelp', 'blockName' ],
	example: {
		attributes: {
			label: 'Next Page',
		},
	},
	transforms: {
		to: [
			{
				type: 'block',
				blocks: [ 'jet-forms/text-field' ],
				transform: ( attributes ) => {
					return createBlock( 'jet-forms/text-field', { ...attributes } );
				},
				priority: 0,
			},
			{
				type: 'block',
				blocks: [ 'jet-forms/submit-field' ],
				isMatch: attributes => attributes.add_next_button,
				transform: ( attributes ) => {
					return createBlock( 'jet-forms/submit-field', {
						...attributes,
						action_type: 'next',
					} );
				},
				priority: 0,
			},
			{
				type: 'block',
				blocks: [ 'core/buttons' ],
				isMatch: attributes => attributes.add_next_button,
				transform: ( { label = '' } ) => {
					return createBlock( 'core/buttons', {}, [
						createBlock( 'core/button', { text: label } ),
					] );
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
				blocks: [ 'jet-forms/submit-field' ],
				isMatch: attributes => ( 'next' === attributes.action_type ),
				transform: ( attributes ) => {
					return createBlock( name, { ...attributes } );
				},
				priority: 0,
			},
			{
				type: 'block',
				blocks: [
					'core/buttons',
				],
				transform: ( attributes, innerBlocks ) => {
					return createBlock( name, {
						label: innerBlocks[ 0 ]?.attributes?.text || 'Next',
					} );
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