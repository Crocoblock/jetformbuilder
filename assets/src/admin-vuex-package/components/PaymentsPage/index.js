import Payments from './Payments';
import * as TableStoreHelper from '../../mixins/TableStoreHelper';

const {
		  getActions,
		  getGetters,
		  getMutations,
		  getBaseState,
	  } = TableStoreHelper;

Vue.use( Vuex );

window.jfbEventBus = window.jfbEventBus || new Vue();

const options = {
	store: {
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
	},
};

export default { Payments, options };