export const options = {
	condition: {
		type: 'hide',
		field: '',
		operator: '',
		value: '',
		set_value: '',
	},
	conditionTypes: [
		{ label: '--', value: '' },
		{
			label: 'Hide this field if...',
			value: 'hide'
		},
		{
			label: 'Show this field if...',
			value: 'show'
		},
		{
			label: 'Set value for this field if...',
			value: 'set_value',
			condition: 'isSingleField',
		},
	],
	conditionOperators: [
		{ label: '--', value: '' },
		{ label: 'Equal', value: 'equal' },
		{ label: 'Greater than', value: 'greater' },
		{ label: 'Less than', value: 'less' },
		{ label: 'Between', value: 'between' },
		{ label: 'In the list', value: 'one_of' },
		{ label: 'Contain text', value: 'contain' },
	],
};