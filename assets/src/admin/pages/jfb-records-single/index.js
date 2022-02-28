import SingleRecord from './SingleRecord';

const { renderCurrentPage } = window.JetFBActions;
Vue.use( Vuex );

const store = new Vuex.Store( {
	state: {
		globalState: 0,
	}
} );

store.registerMetaBoxes();

renderCurrentPage( SingleRecord, { store } );
