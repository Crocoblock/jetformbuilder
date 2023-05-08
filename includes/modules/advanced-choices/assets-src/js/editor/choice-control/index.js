import EditChoiceCheck from './edit';
import metadata from '@blocks/choice-control/block.json';

const { name, icon } = metadata;

const settings = {
	icon: <span dangerouslySetInnerHTML={ { __html: icon } }></span>,
	edit: EditChoiceCheck,
};

export {
	metadata,
	name,
	settings,
};
