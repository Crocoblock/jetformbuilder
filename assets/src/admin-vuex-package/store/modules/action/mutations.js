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
	setActionPromises( state, { action, promise, context = 'default' } ) {
		state.actionsPromises = {
			...state.actionsPromises,
			[ action ]: {
				...(
					state.actionsPromises[ action ] ?? {}
				),
				[ context ]: promise,
			},
		};
	},
	setBeforeAction( state, { action, callback, context = 'default' } ) {
		state.beforeActions = {
			...state.beforeActions,
			[ action ]: {
				...(
					state.beforeActions[ action ] ?? {}
				),
				[ context ]: callback,
			},
		};
	},
}