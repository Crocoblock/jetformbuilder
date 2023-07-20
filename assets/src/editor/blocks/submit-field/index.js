import ActionButtonEdit from './edit';
import metadata from '@blocks/submit-field/block.json';

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
		`Add the button by clicking which users can submit the form, proceed 
to any form part, or change the render state (switch login to sign-up form).`,
		'jet-form-builder'
	),
	edit: ActionButtonEdit,
	useEditProps: [ 'uniqKey', 'blockName', 'attrHelp' ],
	example: {
		attributes: {
			isPreview: true,
		},
	},
	/**
	 * @param attributes
	 * @param context {{|'accessibility'|'visual'|'list-view'}}
	 * @returns {*}
	 * @private
	 */
	__experimentalLabel: ( { action_type }, { context } ) => {
		if ( context !== 'list-view' ) {
			return;
		}
		const action = JetFormActionButton.actions.find(
			( { value } ) => value === action_type,
		);

		return action?.label || JetFormActionButton.actions[ 0 ].label;
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
					'core/buttons',
				],
				transform: ( attributes, innerBlocks ) => {
					return createBlock( name, {
						label: innerBlocks[ 0 ]?.attributes?.text || '',
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