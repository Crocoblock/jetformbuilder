
const getRandomID = () => {
	return Math.floor( Math.random() * 8999 ) + 1000;
}

const defaultActions = [ {
	type: 'send_email',
	id: getRandomID(),
	settings: {
		subject: 'New order on website',
		content: 'Hi admin!\n\nThere are new order on your website.\n\nOrder details:\n- Post ID: %post_id%'
	}
} ];

const newItemCondition = {
	execute: false,
	operator: '',
	field: '',
	default: '',
};

const conditionOperators = [
	{ label: '--', value: '' },
	{ label: 'Equal', value: 'equal' },
	{ label: 'Greater than', value: 'greater' },
	{ label: 'Less than', value: 'less' },
	{ label: 'Between', value: 'between' },
	{ label: 'In the list', value: 'one_of' },
	{ label: 'Contain text', value: 'contain' },
];

export { getRandomID, defaultActions, newItemCondition, conditionOperators };