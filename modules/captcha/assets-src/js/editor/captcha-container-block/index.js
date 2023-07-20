import EditCaptchaContainer from './edit';
import metadata from '@blocks/captcha-container/block.json';

const {
	      name,
	      icon,
      } = metadata;

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
		`Insert the captcha for your form. Determine its location yourself 
using the block, as is added before the submit button by default.`,
		'jet-form-builder',
	),
	edit: EditCaptchaContainer,
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
