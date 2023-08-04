import EditAdvancedChoicesField from './edit';
import metadata from '@blocks/choices-field/block.json';
import variations from './variations';
import SaveAdvancedChoicesField from './save';
import transforms from './transforms';

const {
	      name,
	      icon,
      } = metadata;

const {
	      __,
      } = wp.i18n;

// compatibility with WordPress <= 6.2
metadata.supports.__experimentalLayout = metadata.supports.layout;

const settings = {
	icon: <span dangerouslySetInnerHTML={ { __html: icon } }></span>,
	description: __(
		`Turn any block, text, images, or other objects into the object 
for selection with this block.`,
		'jet-form-builder',
	),
	edit: EditAdvancedChoicesField,
	save: SaveAdvancedChoicesField,
	example: {
		attributes: {
			isPreview: true,
		},
	},
	variations,
	transforms,
};

export {
	metadata,
	name,
	settings,
};
