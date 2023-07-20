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
	description: __(
		`Add a single narrow text bar to the form and gather short text 
information like names, emails, titles, etc.`,
		'jet-form-builder'
	),
	edit: TextEdit,
	useEditProps: [ 'uniqKey', 'attrHelp' ],
	example: {
		attributes: {
			isPreview: true,
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