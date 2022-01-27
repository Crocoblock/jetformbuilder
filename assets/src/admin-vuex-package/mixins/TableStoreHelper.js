const { addQueryArgs } = JetFBActions;
const { apiFetch } = wp;

window.jfbEventBus = window.jfbEventBus || new Vue();

const getOffset = ( page, limit ) => {
	return 1 !== page ? (
		(
			page - 1
		) * limit
	) : 0;
};

export function getBaseState() {
	return {
		// for pagination
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
		// for choose column
		checked: [],
		idList: [],
	};
}

export function getGetters() {
	return {
		/*
		 for pagination
		 */
		offset: state => {
			return getOffset( state.queryState.currentPage, state.queryState.limit );
		},
		getColumns: state => {
			return state.columns;
		},
		/*
		 for choose column
		 */
		isChecked: state => id => {
			return state.checked.includes( id );
		},
	};
}

export function getActions() {
	return {
		/*
		 for choose column
		 */
		changeChecked( { commit }, { id, active } ) {
			if ( active ) {
				commit( 'addChecked', { id } );
			} else {
				commit( 'removeChecked', { id } );
			}
		},
		/*
		 for pagination
		 */
		setQueriedPage( { commit, getters, state }, pageNum ) {
			const offset = getOffset( + pageNum, state.queryState.limit );

			const itemTo = offset + state.queryState.limit;

			commit( 'setQueryState', {
				currentPage: + pageNum,
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

			dispatch( 'fetch', options ).then( response => {
				commit( 'setList', response.list );
				dispatch( 'setQueriedPage', page );
			} ).finally( () => {
				commit( 'toggleLoadingPage' );
			} );
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
		/*
		 for pagination
		 */
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
		/*
		 for choose column
		 */
		addToStore( state, { id } ) {
			state.idList.push( id );
		},
		addChecked( state, { id } ) {
			state.checked.push( id );
		},
		removeAll( state ) {
			state.checked = [];
		},
		activeAll( state ) {
			state.checked = [ ...state.idList ];
		},
		removeChecked( state, { id } ) {
			state.checked = state.checked.filter( checked => (
				checked !== id
			) );
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