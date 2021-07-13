const { createReduxStore, register } = wp.data;

const DEFAULT_STATE = {
	currentAction: {},
};

const actions = {
	setCurrentAction( item ) {
		return {
			type: 'SET_CURRENT_ACTION',
			item,
		};
	},
};

const selectors = {
	getCurrentAction( state ) {
		return state.currentAction;
	},
};

register( createReduxStore( 'jet-forms/actions', {
	reducer( state = DEFAULT_STATE, action ) {
		switch ( action.type ) {
			case 'SET_CURRENT_ACTION':
				return {
					...state,
					currentAction: action.item,
				};
		}
		return state;
	},
	actions,
	selectors,
} ) );