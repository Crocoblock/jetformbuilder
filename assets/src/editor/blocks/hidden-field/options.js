const { Tools } = JetFBActions;

const { __ } = wp.i18n;

const hiddenValues = Tools.withPlaceholder( [
	{
		value: 'post_id',
		label: __( 'Current Post ID', 'jet-form-builder' )
	},
	{
		value: 'post_title',
		label: __( 'Current Post Title', 'jet-form-builder' )
	},
	{
		value: 'post_url',
		label: __( 'Current Post/Page URL', 'jet-form-builder' )
	},
	{
		value: 'post_meta',
		label: __( 'Current Post Meta', 'jet-form-builder' )
	},
	{
		value: 'user_id',
		label: __( 'Current User ID', 'jet-form-builder' )
	},
	{
		value: 'user_email',
		label: __( 'Current User Email', 'jet-form-builder' )
	},
	{
		value: 'user_name',
		label: __( 'Current User Name', 'jet-form-builder' )
	},
	{
		value: 'user_meta',
		label: __( 'Current User Meta', 'jet-form-builder' )
	},
	{
		value: 'author_id',
		label: __( 'Current Post Author ID', 'jet-form-builder' )
	},
	{
		value: 'author_email',
		label: __( 'Current Post Author Email', 'jet-form-builder' )
	},
	{
		value: 'author_name',
		label: __( 'Current Post Author Name', 'jet-form-builder' )
	},
	{
		value: 'query_var',
		label: __( 'URL Query Variable', 'jet-form-builder' )
	},
	{
		value: 'current_date',
		label: __( 'Current Date', 'jet-form-builder' )
	},
	{
		value: 'manual_input',
		label: __( 'Manual Input', 'jet-form-builder' )
	},
] );

export { hiddenValues };