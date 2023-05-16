import EditCaptchaContainer from './edit';
import metadata from '@blocks/captcha-container/block.json';

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
