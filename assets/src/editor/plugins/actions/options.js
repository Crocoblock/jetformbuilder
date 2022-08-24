const { Tools } = JetFBActions;

const defaultAction = {
	type: 'send_email',
	id: Tools.getRandomID(),
	settings: {},
	conditions: [],
	events: [],
	provideEvents: [],
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
	defaultActions,
	conditionSettings,
	defaultAction,
};