const { __ } = wp.i18n;

export default {
	runRowAction( { state }, { action, context = 'default', payload = false } ) {
		if ( 'object' !== typeof state.actionsPromises[ action ] ) {
			return Promise.reject( __( 'Please choose your action', 'jet-form-builder' ) );
		}

		const promise = state.actionsPromises[ action ][ context ] ?? false;

		if ( false === payload ) {
			return new Promise( promise );
		}

		return new Promise( ( resolve, reject ) => promise( resolve, reject, ...payload ) );
	},
	beforeRowAction( { state }, { action, context = 'default', payload = false } ) {
		if ( 'object' !== typeof state.beforeActions[ action ] ) {
			return;
		}
		const promise = state.beforeActions[ action ][ context ] ?? false;

		if ( false === payload ) {
			promise();
			return;
		}

		promise( ...payload );
	}
}