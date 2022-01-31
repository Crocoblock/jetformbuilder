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
		currentAction: '',
		actionsList: [],
		actionsPromises: {},
		actionsResponseCallbacks: {},
		initializedColumns: [],
		// for disable action buttons: filter, apply list-action & other.
		doingAction: false,
		filters: {}
	};
}

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
		getAction: state => id => {
			return state.actionsList.find( action => id === action.value );
		},
		isInitializedColumn: state => slug => {
			return state.initializedColumns.includes( slug );
		}
	};

	return {
		...getters,
		getCurrentAction: state => {
			return getters.getAction( state )( state.currentAction );
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
				column
			];
		},
		addActionPromise( state, { action, promise } ) {
			state.actionsPromises = {
				...state.actionsPromises,
				[ action ]: [
					...(
						state.actionsPromises[ action ] ?? []
					),
					promise,
				],
			};
		},
		addActionResponseCallback( state, { action, thenCallback, catchCallback = false } ) {
			if ( ! state.actionsResponseCallbacks[ action ] ) {
				state.actionsResponseCallbacks[ action ] = {
					thenCallbacks: [],
					catchCallbacks: [],
				};
			}
			state.actionsResponseCallbacks[ action ] = {
				...state.actionsResponseCallbacks[ action ],
				thenCallbacks: [
					...(
						state.actionsResponseCallbacks[ action ]?.thenCallbacks ?? []
					),
					thenCallback,
				],
			};

			if ( catchCallback === false ) {
				return;
			}

			state.actionsResponseCallbacks[ action ] = {
				...state.actionsResponseCallbacks[ action ],
				catchCallbacks: [
					...(
						state.actionsResponseCallbacks[ action ]?.catchCallbacks ?? []
					),
					catchCallback,
				],
			};
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