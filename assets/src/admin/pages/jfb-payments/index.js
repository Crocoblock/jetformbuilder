import RecurringPayments from './RecurringPayments';

Vue.use( Vuex );

const {
		  StoreHelper: {
			  getActions,
			  getGetters,
			  getMutations,
			  getBaseState,
		  },
	  } = JetFBMixins;

const { apiFetch } = wp;

window.jfbEventBus = window.jfbEventBus || new Vue();

const options = {
	store: new Vuex.Store( {
		state: {
			...getBaseState(),
		},
		getters: {
			...getGetters(),
			getColumns: state => {
				return state.columns;
			},
		},
		mutations: {
			...getMutations(),
			setColumns( state, columns ) {
				state.columns = columns;
			},
			setList( state, list ) {
				state.currentList = list;
			},
		},
		actions: {
			...getActions(),
		},
	} ),
};

const { renderCurrentPage } = window.JetFBActions;

renderCurrentPage( RecurringPayments, options );
