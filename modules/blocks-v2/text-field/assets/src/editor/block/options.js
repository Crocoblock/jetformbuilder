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

const autocompleteValuesList = [
	{ value: 'on', label: __('On', 'jet-form-builder') },
	{ value: 'custom', label: __('Custom', 'jet-form-builder') },

	{ value: 'name', label: __('Name', 'jet-form-builder') },
	{ value: 'honorific-prefix', label: __('Honorific prefix', 'jet-form-builder') },
	{ value: 'given-name', label: __('Given name', 'jet-form-builder') },
	{ value: 'additional-name', label: __('Additional name', 'jet-form-builder') },
	{ value: 'family-name', label: __('Family name', 'jet-form-builder') },
	{ value: 'honorific-suffix', label: __('Honorific suffix', 'jet-form-builder') },
	{ value: 'nickname', label: __('Nickname', 'jet-form-builder') },
	{ value: 'username', label: __('Username', 'jet-form-builder') },
	{ value: 'new-password', label: __('New password', 'jet-form-builder') },
	{ value: 'current-password', label: __('Current password', 'jet-form-builder') },
	{ value: 'one-time-code', label: __('One-time code', 'jet-form-builder') },

	{ value: 'organization-title', label: __('Organization title', 'jet-form-builder') },
	{ value: 'organization', label: __('Organization', 'jet-form-builder') },

	{ value: 'street-address', label: __('Street address', 'jet-form-builder') },
	{ value: 'address-line1', label: __('Address line 1', 'jet-form-builder') },
	{ value: 'address-line2', label: __('Address line 2', 'jet-form-builder') },
	{ value: 'address-line3', label: __('Address line 3', 'jet-form-builder') },
	{ value: 'address-level4', label: __('Address level 4', 'jet-form-builder') },
	{ value: 'address-level3', label: __('Address level 3', 'jet-form-builder') },
	{ value: 'address-level2', label: __('Address level 2', 'jet-form-builder') },
	{ value: 'address-level1', label: __('Address level 1', 'jet-form-builder') },
	{ value: 'country', label: __('Country', 'jet-form-builder') },
	{ value: 'country-name', label: __('Country name', 'jet-form-builder') },
	{ value: 'postal-code', label: __('Postal code', 'jet-form-builder') },

	{ value: 'cc-name', label: __('Cardholder name', 'jet-form-builder') },
	{ value: 'cc-given-name', label: __('Cardholder given name', 'jet-form-builder') },
	{ value: 'cc-additional-name', label: __('Cardholder additional name', 'jet-form-builder') },
	{ value: 'cc-family-name', label: __('Cardholder family name', 'jet-form-builder') },
	{ value: 'cc-number', label: __('Card number', 'jet-form-builder') },
	{ value: 'cc-exp', label: __('Card expiration', 'jet-form-builder') },
	{ value: 'cc-exp-month', label: __('Card expiration month', 'jet-form-builder') },
	{ value: 'cc-exp-year', label: __('Card expiration year', 'jet-form-builder') },
	{ value: 'cc-csc', label: __('Card security code', 'jet-form-builder') },
	{ value: 'cc-type', label: __('Card type', 'jet-form-builder') },

	{ value: 'transaction-currency', label: __('Transaction currency', 'jet-form-builder') },
	{ value: 'transaction-amount', label: __('Transaction amount', 'jet-form-builder') },

	{ value: 'language', label: __('Language', 'jet-form-builder') },

	{ value: 'bday', label: __('Birthday', 'jet-form-builder') },
	{ value: 'bday-day', label: __('Birthday day', 'jet-form-builder') },
	{ value: 'bday-month', label: __('Birthday month', 'jet-form-builder') },
	{ value: 'bday-year', label: __('Birthday year', 'jet-form-builder') },

	{ value: 'sex', label: __('Sex', 'jet-form-builder') },
	{ value: 'url', label: __('URL', 'jet-form-builder') },
	{ value: 'photo', label: __('Photo', 'jet-form-builder') },
];

export {
	fieldTypesList,
	maskTypesList,
	maskPlaceholdersList,
	maskVisibilitiesList,
	autocompleteValuesList
};