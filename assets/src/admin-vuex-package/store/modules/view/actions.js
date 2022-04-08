window.jfbEventBus = window.jfbEventBus || new Vue( {} );
const { apiFetch } = wp;

const getActionFromRecord = ( record, slug ) => {
	return record.actions.value.find( action => slug === action.value )
};

const apiOptions = getters => {
	const { action, payload } = getters.currentProcess;
	const [ checked ] = payload;

	let actionEndpoint = getters.getAction( action );

	if ( ! actionEndpoint ) {
		const record = payload[2] ?? {};

		actionEndpoint = getActionFromRecord( record, action )
	}

	const options = getters.fetchListOptions( actionEndpoint?.endpoint );

	return {
		...options,
		...getters.apiOptions,
		data: {
			checked,
			...getters.apiData,
		},
	};
};

export default {
	fetchPage( { commit, getters, dispatch } ) {
		commit( 'toggleLoading', 'page' );

		dispatch( 'fetch', getters.getPageOptionsFetch ).then( response => {
			commit( 'setList', response.list );
			dispatch( 'updateQueryState' );

			// clear checked rows
			commit( 'unChooseHead' );
			commit( 'setChecked', [] );
		} ).finally( () => {
			commit( 'toggleLoading', 'page' );
		} );
	},
	fetchPageWithFilters( { commit, getters, dispatch, state } ) {
		commit( 'toggleLoading', 'page' );

		dispatch( 'fetch', getters.getPageOptionsFetch ).then( response => {
			dispatch( 'updateList', response );
			jfbEventBus.reactiveCounter ++;
		} ).finally( () => {
			commit( 'toggleLoading', 'page' );
		} );
	},
	updateList( { commit, getters, dispatch, state }, response ) {
		commit( 'setList', response.list );
		commit( 'setTotal', response.total ?? state.queryState.total );

		if ( response.list.length < getters.getLimit ) {
			commit( 'setLimit', response.list.length );
		}
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
	apiFetch( { getters, dispatch } ) {
		dispatch( 'beforeRunFetch' );

		return apiFetch( apiOptions( getters ) );
	},
	maybeFetchFilters( props, endpoint ) {
		const { commit, getters, rootGetters } = props;

		if ( getters.hasFilters || rootGetters.isDoing ) {
			return;
		}

		commit( 'toggleDoingAction', null, { root: true } );

		apiFetch( endpoint ).then( response => {
			commit( 'setFilters', response.filters );
			jfbEventBus.reactiveCounter ++;
		} ).finally( () => {
			commit( 'toggleDoingAction', null, { root: true } );
		} );
	},
	activeAll( { commit, getters } ) {
		const idsList = getters.list.map( row => (
			row?.choose?.value
		) );

		commit( 'setChecked', idsList );
	},
	clearFiltersWithFetch( { commit, dispatch }, replaceMap ) {
		commit( 'clearSelectedFilters', replaceMap );
		dispatch( 'fetchPageWithFilters' );
	},
};