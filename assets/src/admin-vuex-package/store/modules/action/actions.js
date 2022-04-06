import Constants from '../../../constants';

export default {
	beforeRunFetch( { getters, rootGetters } ) {
		if ( Constants.CHOOSE_ACTION !== getters.processContext ) {
			return;
		}
		const label = rootGetters['messages/label'];

		if ( ! getters.getChecked.length ) {
			throw new Error( label( 'empty_checked' ) );
		}

		if ( ! getters.getCurrentAction?.endpoint ) {
			throw new Error( label( 'empty_action' ) );
		}
	},
	runRowAction( { commit, getters } ) {
		commit( 'toggleDoingAction', null, { root: true } );
		commit( 'toggleLoading', 'page' );

		const onFinish = () => {
			commit( 'toggleLoading', 'page' );
			commit( 'toggleDoingAction', null, { root: true } );
			commit( 'clearProcess' );
		};

		try {
			getters.getActionPromise().finally( onFinish );
		} catch ( error ) {
			onFinish();
		}
	},
	beforeRowAction( { state } ) {
		const { action, payload = [] } = state.currentProcess;

		if ( 'function' !== typeof state.beforeActions[ action ] ) {
			return;
		}

		const promise = state.beforeActions[ action ] ?? false;

		promise( ...payload );

		throw new Error();
	},
};