import EditAdvancedChoice from './edit';
import metadata from '@blocks/choice/block.json';
import SaveAdvancedChoice from './save';

const { name, icon } = metadata;

const { __ } = wp.i18n;

// compatibility with WordPress <= 6.2
metadata.supports.__experimentalLayout = metadata.supports.layout;

const settings = {
	icon: <span dangerouslySetInnerHTML={ { __html: icon } }></span>,
	description: __(
		`Apply a variety of settings of the one particular choice block.`,
		'jet-form-builder',
	),
	edit: EditAdvancedChoice,
	save: SaveAdvancedChoice,
	example: {
		attributes: {
			isPreview: true,
		},
	},
};

export {
	metadata,
	name,
	settings,
};
