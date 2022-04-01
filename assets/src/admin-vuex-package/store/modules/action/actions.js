
export default {
	runRowAction( { commit, getters } ) {
		commit( 'toggleDoingAction', null, { root: true } );
		commit( 'toggleLoading', 'page' );

		getters.getActionPromise.finally( () => {
			commit( 'toggleLoading', 'page' );
			commit( 'toggleDoingAction', null, { root: true } );
		} );
	},
	beforeRowAction( { state } ) {
		const { action, context, payload = false } = state.currentProcess;

		if ( 'object' !== typeof state.beforeActions[ action ] ) {
			return;
		}
		const promise = state.beforeActions[ action ][ context ] ?? false;

		if ( false === payload ) {
			promise();

			throw new Error();
		}

		promise( ...payload );

		throw new Error();
	},
};