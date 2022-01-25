import TextEdit from './edit';
import metadata from '@blocks/text-field/block.json';

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
	edit: TextEdit,
	useEditProps: [ 'uniqKey', 'attrHelp' ],
	example: {
		attributes: {
			label: 'Text Field',
			placeholder: 'Input your text...',
			desc: 'Field description...',
		},
	},
	transforms: {
		from: [
			{
				type: 'block',
				blocks: [
					'core/paragraph',
				],
				transform: ( { content = '' } ) => {
					return createBlock( name, { label: content } );
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