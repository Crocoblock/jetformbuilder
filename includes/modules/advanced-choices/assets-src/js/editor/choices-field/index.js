import EditAdvancedChoicesField from './edit';
import metadata from '@blocks/choices-field/block.json';
import variations from './variations';
import SaveAdvancedChoicesField from './save';

const { name, icon } = metadata;

/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */
const settings = {
	icon: <span dangerouslySetInnerHTML={ { __html: icon } }></span>,
	edit: EditAdvancedChoicesField,
	save: SaveAdvancedChoicesField,
	variations,
};

export {
	metadata,
	name,
	settings,
};
