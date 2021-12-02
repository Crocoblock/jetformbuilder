import PaypalEntries from './PaypalEntries';

Vue.use( Vuex );

const options = {
	store: new Vuex.Store( {
		state: {
			currentPopupData: {},
			columns: {},
			currentList: [],
			queryState: {
				currentPage: 0,
				extreme_id: 0,
				limit: 25,
				sort: 'DESC',
			},
		},
		getters: {
			getCurrent: state => {
				return state.currentPopupData;
			},
			getColumns: state => {
				return state.columns;
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
		},
	} ),
};

const { renderCurrentPage } = window.JetFBActions;

renderCurrentPage( PaypalEntries, options );
