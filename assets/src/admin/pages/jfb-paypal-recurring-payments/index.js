import RecurringPayments from './RecurringPayments';

Vue.use( Vuex );

const options = {
	store: new Vuex.Store( {
		state: {
			columns: {},
		},
		getters: {
			getColumns: state => {
				return state.columns;
			}
		},
		mutations: {
			setColumns( state, columns ) {
				state.columns = columns;
			},

		},
		actions: {
		},
	} ),
};

const { renderCurrentPage } = window.JetFBActions;

renderCurrentPage( RecurringPayments, options );
