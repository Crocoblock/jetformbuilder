import Records from './Records';

const { TableStoreHelper: { getBaseStore } } = JetFBMixins;
const { renderCurrentPage } = window.JetFBActions;
Vue.use( Vuex );

window.jfbEventBus = window.jfbEventBus || new Vue();

const store = getBaseStore();

const options = {
	store: new Vuex.Store( {
		...store,
	} ),
};

renderCurrentPage( Records, options );