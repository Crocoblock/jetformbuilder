import dispatchers from './dispatchers';

const DEFAULT_STATE = {
	blocks: [],
	blockMap: {},
	executed: false,
	recentlyAdded: [],
	sanitizers: {
		name: [
			name => name.replace( /[^\w\-]/gi, '' ),
			name => name === 'children' ? '_' + name : name,
		],
	},
};

export default function ( state = DEFAULT_STATE, action ) {
	const callback = dispatchers[ action?.type ];

	if ( callback ) {
		return callback( state, action );
	}

	return state;
}