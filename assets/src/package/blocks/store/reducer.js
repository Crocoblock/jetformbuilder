import dispatchers from './dispatchers';

const DEFAULT_STATE = {
	hasExecuted: false,
	propsToSave: [
		'clientId',
		'name',
	],
	blocks: [],
	blockMap: {},
	executed: false,
	recentlyAdded: []
};

export default function ( state = DEFAULT_STATE, action ) {
	const callback = dispatchers[ action?.type ];

	if ( callback ) {
		return callback( state, action );
	}

	return state;
}