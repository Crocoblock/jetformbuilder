import ActionButtonEdit from './edit';
import metadata from '@blocks/submit-field/block.json';

// action button types variations
import './submit/main';
import './update/main';
import './next.page/main';
import './prev.page/main';
import './change.render.state/main';

const { createBlock, getBlockVariations } = wp.blocks;

const { name, icon = '' } = metadata;

metadata.attributes.isPreview = {
	'type': 'boolean',
	'default': false,
};

const getActionButtonPurposeLabel = (attributes) => {
	const variations = getBlockVariations?.(name) ?? [];
	const variation = variations.find(({ attributes: variationAttributes = {} }) => (
		variationAttributes.action_type === attributes.action_type
	));
	return variation?.title || metadata.title;
};

const getActionButtonListViewLabel = (attributes) => {
	const purpose = getActionButtonPurposeLabel(attributes);
	const label = attributes.label?.trim?.() || '';
	if (label && label !== purpose) {
		return `${purpose} (${label})`;
	}
	return purpose || label || metadata.title;
};

const settings = {
	icon: <span dangerouslySetInnerHTML={ { __html: icon } }></span>,
	edit: ActionButtonEdit,
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
	__experimentalLabel: (attributes, { context }) => {
		if (context !== 'list-view') {
			return;
		}
		return getActionButtonListViewLabel(attributes);
	},
};

export {
	metadata,
	name,
	settings,
};
