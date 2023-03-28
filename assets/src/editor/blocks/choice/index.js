import EditAdvancedChoice from './edit';
import metadata from '@blocks/choice/block.json';

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
	edit: EditAdvancedChoice,
};

export {
	metadata,
	name,
	settings,
};
