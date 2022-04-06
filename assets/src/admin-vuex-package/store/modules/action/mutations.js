export default {
	setCurrentAction( state, action ) {
		state.currentAction = action;
	},
	setActionsList( state, list ) {
		state.actionsList = JSON.parse( JSON.stringify( list || [] ) );
	},
	/*
	 for requests
	 */
	setActionPromises( state, { action, promise } ) {
		state.actionsPromises = {
			...state.actionsPromises,
			[ action ]: promise,
		};
	},
	setBeforeAction( state, { action, callback } ) {
		state.beforeActions = {
			...state.beforeActions,
			[ action ]: callback,
		};
	},
	setProcess( state, process ) {
		state.currentProcess = process;
	},
	clearProcess( state ) {
		state.currentProcess = {};
	}
};