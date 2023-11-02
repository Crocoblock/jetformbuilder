import WelcomeBlockEdit from './edit';
import metadata from './block.json';

const {
	      name,
	      icon,
      } = metadata;

const {
	      __,
      } = wp.i18n;

const settings = {
	icon: <span dangerouslySetInnerHTML={ { __html: icon } }></span>,
	description: __(
		``,
		'jet-form-builder',
	),
	edit: WelcomeBlockEdit,
};

export {
	metadata,
	name,
	settings,
};