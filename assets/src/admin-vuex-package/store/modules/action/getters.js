const { __ } = wp.i18n;

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
	getActionPromise: state => {
		const { action, context, payload = false } = state.currentProcess;

		if ( 'object' !== typeof state.actionsPromises[ action ] ) {
			return Promise.reject( __( 'Please choose your action', 'jet-form-builder' ) );
		}

		const promise = state.actionsPromises[ action ][ context ] ?? false;

		if ( false === payload ) {
			return new Promise( promise );
		}

		return new Promise( ( resolve, reject ) => promise( resolve, reject, ...payload ) );
	},
};

export default {
	...getters,
	getCurrentAction: state => {
		return getters.getAction( state )( state.currentAction );
	},
};