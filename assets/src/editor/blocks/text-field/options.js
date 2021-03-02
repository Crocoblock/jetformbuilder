const { __ } = wp.i18n;

const fieldTypesList = [
	{
		value: 'text',
		label: __( 'Text' )
	},
	{
		value: 'email',
		label: __( 'Email' )
	},
	{
		value: 'url',
		label: __( 'Url' )
	},
	{
		value: 'tel',
		label: __( 'Tel' )
	},
	{
		value: 'password',
		label: __( 'Password' )
	},
];

const maskTypesList = [
	{
		value: '',
		label: __( 'Default' )
	},
	{
		value: 'datetime',
		label: __( 'Datetime' )
	},
];

const maskVisibilitiesList = [
	{
		value: 'always',
		label: __( 'Always' )
	},
	{
		value: 'hover',
		label: __( 'Hover' )
	},
	{
		value: 'focus',
		label: __( 'Focus' )
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