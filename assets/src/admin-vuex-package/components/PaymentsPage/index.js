import PaymentsComponent from './PaymentsComponent';
import * as TableStoreHelper from '../../mixins/TableStoreHelper';

const {
		  getBaseStore,
	  } = TableStoreHelper;

Vue.use( Vuex );

window.jfbEventBus = window.jfbEventBus || new Vue( {} );

const options = {
	store: getBaseStore(),
};

export default { PaymentsComponent, options };