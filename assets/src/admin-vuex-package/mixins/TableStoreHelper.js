const { addQueryArgs } = JetFBActions;
const { apiFetch } = wp;

window.jfbEventBus = window.jfbEventBus || new Vue();

const getOffset = ( page, limit ) => {
	return 1 !== page ? ( ( page - 1 ) * limit ) : 0;
}

export function getGetters() {
	return {
		offset: state => {
			return getOffset( state.queryState.currentPage, state.queryState.limit );
		},
		getColumns: state => {
			return state.columns;
		},
	};
}

export function getBaseState() {
	return {
		columns: {},
		currentList: [],
		loadingPage: false,
		queryState: {
			currentPage: 1,
			extreme_id: 0,
			limit: 25,
			sort: 'DESC',
			total: 0,
			itemsFrom: 0,
			itemsTo: 0,
		},
	};
}

export function getActions() {
	return {
		setQueriedPage( { commit, getters, state }, pageNum ) {
			const offset = getOffset( +pageNum, state.queryState.limit );

			const itemTo = offset + state.queryState.limit;

			commit( 'setQueryState', {
				currentPage: +pageNum,
				itemsFrom: offset + 1,
				itemsTo: itemTo > state.queryState.total ? state.queryState.total : itemTo,
			} );
		},
		fetchPage( { commit, getters, dispatch, state }, endpoint ) {
			const { limit, sort, currentPage: page } = state.queryState;

			const options = {
				...endpoint,
				url: addQueryArgs(
					{ limit, sort, page },
					endpoint.url,
				),
			};

			commit( 'toggleLoadingPage' );

			dispatch( 'fetch', options )
				.then( response => {
					commit( 'setList', response.list );
					dispatch( 'setQueriedPage', page );
				} )
				.finally( () => {
					commit( 'toggleLoadingPage' );
				} )
		},
		fetch( { commit, getters }, options ) {
			return new Promise( ( resolve, reject ) => {
				apiFetch( options ).then( response => {
					resolve( response );
				} ).catch( error => {
					jfbEventBus.$CXNotice.add( {
						message: error.message,
						type: 'error',
						duration: 4000,
					} );

					reject( error );
				} ).finally( reject );
			} );
		},
	};
}

export function getMutations() {
	return {
		setList( state, list ) {
			state.currentList = list;
		},
		setQueryState( state, newState ) {
			state.queryState = {
				...state.queryState,
				...newState,
			};
		},
		setColumns( state, columns ) {
			state.columns = columns;
		},
		toggleLoadingPage( state ) {
			state.loadingPage = ! state.loadingPage;
		},
	};
}

export function getBaseStore() {
	return {
		state: {
			...getBaseState(),
		},
		getters: {
			...getGetters(),
		},
		mutations: {
			...getMutations(),
		},
		actions: {
			...getActions(),
		},
	};
}