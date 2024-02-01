const { Tools } = JetFBActions;

const {
	      __,
      } = wp.i18n;

const userAccess = Tools.withPlaceholder( [
	{
		value: 'all',
		label: __( 'Any registered user', 'jet-form-builder' ),
	},
	{
		value: 'upload_files',
		label: __( 'Any user, who allowed to upload files', 'jet-form-builder' ),
	},
	{
		value: 'edit_posts',
		label: __( 'Any user, who allowed to edit posts', 'jet-form-builder' ),
	},
	{
		value: 'any_user',
		label: __( 'Any user ( incl. Guest )', 'jet-form-builder' ),
	},
] );

const valueFormats = Tools.withPlaceholder( [
	{
		'value': 'id',
		'label': __( 'Attachment ID', 'jet-form-builder' ),
	},
	{
		'value': 'url',
		'label': __( 'Attachment URL', 'jet-form-builder' ),
	},
	{
		'value': 'both',
		'label': __( 'Array with attachment ID and URL', 'jet-form-builder' ),
	},
] );

export {
	userAccess,
	valueFormats,
};