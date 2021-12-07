import PaypalEntries from './PaypalEntries';

Vue.use( Vuex );

const options = {
	store: new Vuex.Store( {
		state: {
			currentPopupData: {},
			columns: {},
			currentList: [],
			actions: {},
			queryState: {
				currentPage: 0,
				extreme_id: 0,
				limit: 25,
				sort: 'DESC',
			},
			fetchedSubscriptions: {}
		},
		getters: {
			getCurrent: state => {
				return state.currentPopupData;
			},
			getColumns: state => {
				return state.columns;
			},
			getSubscription: state => id => {
				return state.fetchedSubscriptions[ id ] || {};
			},
			currentSubscription: ( state, getters ) => {
				const id = state.currentPopupData?.record_id?.value;

				return getters.getSubscription( id );
			},
			getList: state => {
				return state.currentList;
			},
			getActions: state => {
				return state.actions;
			},
		},
		mutations: {
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
			setCurrent( state, current ) {
				state.currentPopupData = current;
			},
			clearCurrent( state ) {
				state.currentPopupData = {};
			},
			saveSubscription( state, subDetails ) {
				state.fetchedSubscriptions[ subDetails?.sub_id ] = subDetails;
			},
			setActions( state, actions ) {
				state.actions = actions;
			}
		},
	} ),
};

const { renderCurrentPage } = window.JetFBActions;

renderCurrentPage( PaypalEntries, options );
