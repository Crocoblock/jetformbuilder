import Progressbar from './edit';
import metadata from '@blocks/progress-bar/block.json';

const { __ } = wp.i18n;

const { name, icon = '' } = metadata;

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
		`Use the Progress Bar block to add the navigation and show users on what page they are now and how many pages are left to finish the form.`,
		'jet-form-builder',
	),
	edit: Progressbar,
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