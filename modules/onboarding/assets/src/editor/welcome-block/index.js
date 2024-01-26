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
		``,
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