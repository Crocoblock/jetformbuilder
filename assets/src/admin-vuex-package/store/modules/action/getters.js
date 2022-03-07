const getters = {
	getAction: state => id => {
		return state.actionsList.find( action => id === action.value );
	},
	actionsList: state => {
		return state.actionsList;
	},
	currentAction: state => {
		return state.currentAction;
	},
};

export default {
	...getters,
	getCurrentAction: state => {
		return getters.getAction( state )( state.currentAction );
	},
};