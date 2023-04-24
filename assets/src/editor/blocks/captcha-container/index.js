import EditCaptchaContainer from './edit';
import metadata from '@blocks/captcha-container/block.json';
import variations from './variations';

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
	variations,
};

export {
	metadata,
	name,
	settings,
};
