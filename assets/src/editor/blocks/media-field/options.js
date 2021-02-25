import Tools from "../../helpers/tools";

const userAccess = Tools.withPlaceholder( [
	{
		value: "all",
		label: "Any registered user"
	},
	{
		value: "upload_files",
		label: "Any user, who allowed to upload files"
	},
	{
		value: "edit_posts",
		label: "Any user, who allowed to edit posts"
	},
	{
		value: "any_user",
		label: "Any user ( incl. Guest )"
	}
] );

const valueFormats = Tools.withPlaceholder( [
	{
		"value": "id",
		"label": "Attachment ID"
	},
	{
		"value": "url",
		"label": "Attachment URL"
	},
	{
		"value": "both",
		"label": "Array with attachment ID and URL"
	}
] );

const mimeTypes = wp.data.select( 'core/block-editor' ).getSettings().allowedMimeTypes;

export { userAccess, valueFormats, mimeTypes };