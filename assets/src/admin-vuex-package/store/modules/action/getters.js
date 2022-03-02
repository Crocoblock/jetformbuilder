const getters = {
	getAction: state => id => {
		return state.actionsList.find( action => id === action.value );
	},
	isDoing: state => {
		return state.doingAction;
	}
};

export default {
	...getters,
	getCurrentAction: state => {
		return getters.getAction( state )( state.currentAction );
	},
};