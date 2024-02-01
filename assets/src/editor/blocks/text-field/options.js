const { __ } = wp.i18n;

const fieldTypesList = [
	{
		value: 'text',
		label: __( 'Text', 'jet-form-builder' )
	},
	{
		value: 'email',
		label: __( 'Email', 'jet-form-builder' )
	},
	{
		value: 'url',
		label: __( 'Url', 'jet-form-builder' )
	},
	{
		value: 'tel',
		label: __( 'Tel', 'jet-form-builder' )
	},
	{
		value: 'password',
		label: __( 'Password', 'jet-form-builder' )
	},
];

const maskTypesList = [
	{
		value: '',
		label: __( 'Default', 'jet-form-builder' )
	},
	{
		value: 'datetime',
		label: __( 'Datetime', 'jet-form-builder' )
	},
];

const maskVisibilitiesList = [
	{
		value: 'always',
		label: __( 'Always', 'jet-form-builder' )
	},
	{
		value: 'hover',
		label: __( 'Hover', 'jet-form-builder' )
	},
	{
		value: 'focus',
		label: __( 'Focus', 'jet-form-builder' )
	},
];

const maskPlaceholdersList = [
	{
		value: '_',
		label: '_'
	},
	{
		value: '-',
		label: '-'
	},
	{
		value: '*',
		label: '*'
	},
	{
		value: '•',
		label: '•'
	},
];

export {
	fieldTypesList,
	maskTypesList,
	maskPlaceholdersList,
	maskVisibilitiesList
};