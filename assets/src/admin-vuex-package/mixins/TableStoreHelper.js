const { addQueryArgs } = JetFBActions;
const { apiFetch } = wp;
const { __ } = wp.i18n;

window.jfbEventBus = window.jfbEventBus || new Vue( {} );

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
		chooseHead: '',
		idList: [],
		currentAction: '',
		actionsList: [],
		actionsPromises: {},
		initializedColumns: [],
		// for disable action buttons: filter, apply list-action & other.
		doingAction: false,
		loading: {
			page: false,
			applyButton: false,
		},
		filters: {},
	};
}

const prepareFiltersQuery = filters => {
	const query = {};

	for ( const filtersKey in filters ) {
		const filter = filters[ filtersKey ];

		query[ filtersKey ] = filter.selected;
	}

	return query;
};

export function getGetters() {
	const getters = {
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
		isCheckedHead: state => {
			return 'checked' === state.chooseHead;
		},
		getAction: state => id => {
			return state.actionsList.find( action => id === action.value );
		},
		isInitializedColumn: state => slug => {
			return state.initializedColumns.includes( slug );
		},
		getFilter: state => slug => {
			return state.filters[ slug ] ?? {};
		},
		isLoading: state => what => {
			return (
				state.loading[ what ] ?? false
			);
		},
		hasFilters: state => {
			return 0 < Object.keys( state.filters ).length;
		},
		fetchListOptions: state => endpoint => {
			const { limit, sort, currentPage: page } = state.queryState;

			return {
				...endpoint,
				url: addQueryArgs(
					{
						limit,
						sort,
						page,
						filters: prepareFiltersQuery( state.filters ),
					},
					endpoint.url,
				),
			};
		},

	};

	return {
		...getters,
		getCurrentAction: state => {
			return getters.getAction( state )( state.currentAction );
		},
		getPageOptionsFetch: state => {
			const { receive_url } = window.JetFBPageConfig;

			return getters.fetchListOptions( state )( receive_url );
		}
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
		toggleLoading( state, what ) {
			state.loading = {
				...state.loading,
				[ what ]: ! (
					state.loading[ what ] ?? false
				),
			};
		},
		/*
		 for choose column
		 */
		toggleHead( state ) {
			state.chooseHead = state.chooseHead ? '' : 'checked';
		},
		unChooseHead( state ) {
			state.chooseHead = '';
		},
		chooseHead( state ) {
			state.chooseHead = 'checked';
		},
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
		setCurrentAction( state, action ) {
			state.currentAction = action;
		},
		setActionsList( state, list ) {
			state.actionsList = JSON.parse( JSON.stringify( list ) );
		},
		/*
		 for requests
		 */
		toggleDoingAction( state ) {
			state.doingAction = ! state.doingAction;
		},
		initializeColumn( state, column ) {
			state.initializedColumns = [
				...state.initializedColumns,
				column,
			];
		},
		setActionPromises( state, { action, promise, context = 'default' } ) {
			state.actionsPromises = {
				...state.actionsPromises,
				[ action ]: {
					...(
						state.actionsPromises[ action ] ?? {}
					),
					[ context ]: promise,
				},
			};
		},
		setFilters( state, filters ) {
			state.filters = filters;
		},
		setFilter( state, { slug, props } ) {
			state.filters[ slug ] = state.filters[ slug ] ?? {};
			state.filters[ slug ] = {
				...state.filters[ slug ],
				...props,
			};
		},
		clearSelectedFilters( state, replaceMap = {} ) {
			for ( const filter in state.filters ) {
				state.filters[ filter ].selected = replaceMap[ filter ] ?? '';
			}
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
			const offset = getOffset( +pageNum, state.queryState.limit );

			const itemTo = offset + state.queryState.limit;

			commit( 'setQueryState', {
				currentPage: +pageNum,
				itemsFrom: offset + 1,
				itemsTo: itemTo > state.queryState.total ? state.queryState.total : itemTo,
			} );
		},
		updateQueryState( { commit, getters, state, dispatch }, newState ) {
			commit( 'setQueryState', newState );
			dispatch( 'setQueriedPage', state.queryState.currentPage );
		},
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
	};
}

export function getBaseStore() {
	return {
		strict: true,
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