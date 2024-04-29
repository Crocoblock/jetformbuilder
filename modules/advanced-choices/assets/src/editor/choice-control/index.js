import EditChoiceCheck from './edit';
import metadata from '@blocks/choice-control/block.json';

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
		`Get the adjusting options for the Image and Choice Control block 
with "Images and Controls" layout of the Advanced Choices Field.`,
		'jet-form-builder',
	),
	edit: EditChoiceCheck,
	example: {
		attributes: {
			isPreview: true,
		},
	},
};

export {
	metadata,
	name,
	settings,
};
