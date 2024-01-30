import WelcomeBlockEdit from './edit';
import metadata from './block.json';

const {
	      name,
	      icon,
      } = metadata;

const {
	      __,
      } = wp.i18n;

metadata.attributes.isPreview = {
	'type': 'boolean',
	'default': false,
};

const settings = {
	icon: <span dangerouslySetInnerHTML={ { __html: icon } }></span>,
	description: __(
		`Use the Welcome block to quickly fetch all pre-made Form Patterns, start building from scratch, generate via AI, save form records, etc.`,
		'jet-form-builder',
	),
	example: {
		attributes: {
			isPreview: true,
		},
	},
	edit: WelcomeBlockEdit,
};

export {
	metadata,
	name,
	settings,
};