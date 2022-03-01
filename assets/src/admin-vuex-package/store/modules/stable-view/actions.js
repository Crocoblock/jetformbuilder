window.jfbEventBus = window.jfbEventBus || new Vue( {} );

export default {
	fetchPage( { commit, getters, dispatch, state } ) {
		commit( 'toggleLoading', 'page' );

		dispatch( 'fetch', getters.getPageOptionsFetch ).then( response => {
			commit( 'setList', response.list );
			dispatch( 'updateQueryState', {} );
		} ).finally( () => {
			commit( 'toggleLoading', 'page' );
		} );
	},
	fetchPageWithFilters( { commit, getters, dispatch, state } ) {
		commit( 'toggleLoading', 'page' );

		dispatch( 'fetch', getters.getPageOptionsFetch ).then( response => {
			dispatch( 'updateList', response );
		} ).finally( () => {
			commit( 'toggleLoading', 'page' );
		} );
	},
	updateList( { commit, getters, dispatch, state }, response ) {
		commit( 'setList', response.list );

		const newState = {
			total: +( response.total ?? state.queryState.total ),
		};

		if ( response.list.length < state.queryState.limit ) {
			newState.limit = response.list.length;
		}

		dispatch( 'updateQueryState', newState );
	},
	fetch( { commit, getters }, options ) {
		return new Promise( ( resolve, reject ) => {
			apiFetch( options ).then( resolve ).catch( error => {
				jfbEventBus.$CXNotice.add( {
					message: error.message,
					type: 'error',
					duration: 4000,
				} );

				reject( error );
			} ).finally( reject );
		} );
	},
	maybeFetchFilters( { commit, getters, dispatch, state }, endpoint ) {
		if ( getters.hasFilters || state.doingAction ) {
			return;
		}
		commit( 'toggleDoingAction' );

		apiFetch( endpoint ).then( response => {
			commit( 'setFilters', response.filters );
		} ).finally( () => {
			commit( 'toggleDoingAction' );
		} );
	},
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
	clearFiltersWithFetch( { commit, dispatch }, replaceMap ) {
		commit( 'clearSelectedFilters', replaceMap );
		dispatch( 'fetchPageWithFilters' );
	},
}