import PaymentsComponent from './PaymentsComponent';
import BaseStore from '../../store/base-store';

Vue.use( Vuex );

const store = new Vuex.Store( {
	...BaseStore,
} );

export default { PaymentsComponent, options: { store } };