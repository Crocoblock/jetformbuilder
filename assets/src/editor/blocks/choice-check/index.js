import EditChoiceCheck from './edit';
import metadata from '@blocks/choice-check/block.json';
import SaveChoiceCheck from './save';

const { name, icon } = metadata;

const settings = {
	icon: <span dangerouslySetInnerHTML={ { __html: icon } }></span>,
	edit: EditChoiceCheck,
	save: SaveChoiceCheck,
};

export {
	metadata,
	name,
	settings,
};
