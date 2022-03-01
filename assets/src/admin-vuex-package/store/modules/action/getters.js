const getters = {
	getAction: state => id => {
		return state.actionsList.find( action => id === action.value );
	},
};

export default {
	...getters,
	getCurrentAction: state => {
		return getters.getAction( state )( state.currentAction );
	},
};