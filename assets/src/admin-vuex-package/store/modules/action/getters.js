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
		let { action,  payload = [] } = state.currentProcess;

		if ( 'function' !== typeof state.actionsPromises[ action ] ) {
			throw new Error( __( 'Please choose your action', 'jet-form-builder' ) );
		}
		const promise = state.actionsPromises[ action ] ?? false;

		return () => new Promise( ( resolve, reject ) => promise( resolve, reject, ...payload ) )
	},
	processContext: state => {
		return state.currentProcess.context;
	},
	currentProcess: state => {
		return state.currentProcess;
	},
};

export default {
	...getters,
	getCurrentAction: state => {
		return getters.getAction( state )( state.currentAction );
	},
};