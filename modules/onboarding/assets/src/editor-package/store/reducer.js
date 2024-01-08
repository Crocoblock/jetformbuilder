import dispatchers from './dispatchers';

const DEFAULT_STATE = {
	types: [],
	settings: {
		saveRecord: false,
	},
};

export default function ( state = DEFAULT_STATE, action ) {
	const callback = dispatchers[ action?.type ];

	if ( callback ) {
		return callback( state, action );
	}

	return state;
}