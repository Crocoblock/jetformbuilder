const getRandomID = () => {
	return Math.floor( Math.random() * 8999 ) + 1000;
};

const defaultAction = {
	type: 'send_email',
	id: getRandomID(),
	settings: {},
};

const defaultActions = [
	{
		...JSON.parse( JSON.stringify( defaultAction ) ),
		settings: {
			send_email: {
				subject: 'New order on website',
				content: 'Hi admin!\n\nThere are new order on your website.\n\nOrder details:\n- Post ID: %post_id%',
			},
		},
	},
];

const conditionSettings = window.JetFormEditorData.actionConditionSettings;

export {
	getRandomID,
	defaultActions,
	conditionSettings,
	defaultAction,
};