import EditAdvancedChoicesField from './edit';
import metadata from '@blocks/choices-field/block.json';
import variations from './variations';
import SaveAdvancedChoicesField from './save';
import transforms from './transforms';

const {
	      name,
	      icon,
      } = metadata;

const settings = {
	icon: <span dangerouslySetInnerHTML={ { __html: icon } }></span>,
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
