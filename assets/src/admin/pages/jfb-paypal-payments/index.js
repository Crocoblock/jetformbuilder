import RecurringPayments from './RecurringPayments';
import {
	getBaseState,
	getGetters,
	getMutations,
	getActions,
} from '../../paypal/StoreHelper';

Vue.use( Vuex );

const {
		  getSearch,
		  createPath,
		  addQueryArgs,
	  } = window.JetFBActions;

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
