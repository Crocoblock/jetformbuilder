const { Tools } = JetFBActions;

const { __ } = wp.i18n;

const hiddenValues = Tools.withPlaceholder( [
	{
		value: 'post_id',
		label: __( 'Current Post ID' )
	},
	{
		value: 'post_title',
		label: __( 'Current Post Title' )
	},
	{
		value: 'post_url',
		label: __( 'Current Post/Page URL' )
	},
	{
		value: 'post_meta',
		label: __( 'Current Post Meta' )
	},
	{
		value: 'user_id',
		label: __( 'Current User ID' )
	},
	{
		value: 'user_email',
		label: __( 'Current User Email' )
	},
	{
		value: 'user_name',
		label: __( 'Current User Name' )
	},
	{
		value: 'user_meta',
		label: __( 'Current User Meta' )
	},
	{
		value: 'author_id',
		label: __( 'Current Post Author ID' )
	},
	{
		value: 'author_email',
		label: __( 'Current Post Author Email' )
	},
	{
		value: 'author_name',
		label: __( 'Current Post Author Name' )
	},
	{
		value: 'query_var',
		label: __( 'URL Query Variable' )
	},
	{
		value: 'current_date',
		label: __( 'Current Date' )
	},
	{
		value: 'manual_input',
		label: __( 'Manual Input' )
	},
] );

export { hiddenValues };