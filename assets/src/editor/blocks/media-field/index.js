import MediaEdit from "./edit";
import metadata from "@blocks/media-field/block.json";
import { css } from '@linaria/core';

const addonNoticeClass = css`
	&.components-notice {
		margin-top: 12px;
		padding-top: 0;
		padding-bottom: 0;
	}
`;

const { __ } = wp.i18n;

const { createBlock } = wp.blocks;

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
	description: <>
		{__(
			'Gives users the opportunity to upload media files to your website, e.g., users photos or images of the product for sale.',
			'jet-form-builder'
		)}
		<wp.components.Notice
			status="info"
			isDismissible={false}
			className={addonNoticeClass}
		>
			{wp.element.createInterpolateElement(
				__(
					'Basic field for media upload to the website. For advanced use, pair the field with <addon>Drag and Drop File Upload add-on</addon>.',
					'jet-form-builder'
				),
				{
					addon: <a
						href="https://jetformbuilder.com/addons/drag-and-drop-file-upload/?utm_source=wp-admin&utm_medium=jetformbuilder&utm_campaign=freeplugin&utm_content=dinamycfiled"
						target="_blank"
						rel="noopener noreferrer"
					/>,
				}
			)}
		</wp.components.Notice>
	</>,
	edit: MediaEdit,
	useEditProps: [ 'uniqKey', 'attrHelp', 'blockName' ],
	example: {
		attributes: {
			isPreview: true,
		},
	},
	transforms: {
		to: [
			{
				type: 'block',
				blocks: [ 'jet-forms/text-field' ],
				transform: ( attributes ) => {
					return createBlock( 'jet-forms/text-field', { ...attributes } );
				},
				priority: 0,
			},
		],
		from: [
			{
				type: 'block',
				blocks: [
					'jet-forms/text-field',
				],
				transform: ( attributes ) => {
					return createBlock( name, { ...attributes } );
				},
				priority: 0,
			},
		],
	},
};

export {
	metadata,
	name,
	settings
};
