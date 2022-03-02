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
}