import DateEdit from "./edit";
import metadata from "@blocks/date-field/block.json";

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
	title: __( 'Date Field' ),
	className: name.replace( '/', '-' ),
	icon: <span dangerouslySetInnerHTML={ { __html: icon } }></span>,
	edit: DateEdit,
	useEditProps: [ 'uniqKey', 'attrHelp', 'blockName' ],
	example: {
		attributes: {
			label: 'Date Field',
			desc: 'Field description...',
		}
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
		],
		from: [
			{
				type: 'block',
				blocks: [
					'jet-forms/text-field',
					'jet-forms/time-field',
					'jet-forms/datetime-field'
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
	settings
};