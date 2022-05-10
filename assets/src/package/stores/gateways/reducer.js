import dispatchers from './dispatchers';

const DEFAULT_STATE = {
	currentRequest: {
		id: - 1,
	},
	currentGateway: {},
	currentScenario: {},
	eventTypes: [],
};

export default function ( state = DEFAULT_STATE, action ) {
	const callback = dispatchers[ action?.type ];

	if ( callback ) {
		return callback( state, action );
	}

	return state;
}