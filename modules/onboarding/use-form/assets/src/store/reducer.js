import dispatchers from './dispatchers';
import { SET_ERROR, TOGGLE_EXECUTION } from './constants';

const DEFAULT_STATE = {
	builders: [],
	settings: {},
};

export default function ( state = DEFAULT_STATE, action ) {
	const callback = dispatchers[ action?.type ];

	if ( callback ) {
		return callback( state, action );
	}

	switch ( action?.type ) {
		case SET_ERROR:
			return {
				...state,
				error: action.error,
			};
		case TOGGLE_EXECUTION:
			return {
				...state,
				isExecuting: {
					...(
						state.isExecuting ?? {}
					),
					[ action.actionSlug ]: !(
						state.isExecuting?.[ action.actionSlug ] ?? false
					),
				},
			};
	}

	return state;
}