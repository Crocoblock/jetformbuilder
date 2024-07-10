import FormBreakStart from './edit';
import metadata from '@blocks/form-break-start/block.json';

const { name, icon = '' } = metadata;

const {
	      __,
      } = wp.i18n;

/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */
const settings = {
	icon: <span dangerouslySetInnerHTML={ { __html: icon } }></span>,
	description: __(
		`Add the Form Page Start block after the two first form fields to start the new page not from the form beginning but from the block.`,
		'jet-form-builder',
	),
	edit: FormBreakStart,
	useEditProps: [ 'uniqKey', 'attrHelp', 'blockName' ],
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