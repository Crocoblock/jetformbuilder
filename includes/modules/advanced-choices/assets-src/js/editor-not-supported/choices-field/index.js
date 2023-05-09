import EditAdvancedChoicesField from './edit';
import metadata from '@blocks/choices-field/block.json';

const { name, icon } = metadata;

const settings = {
	icon: <span dangerouslySetInnerHTML={ { __html: icon } }></span>,
	edit: EditAdvancedChoicesField,
};

export {
	metadata,
	name,
	settings,
};
