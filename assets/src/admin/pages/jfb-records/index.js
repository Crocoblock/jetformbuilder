import Records from './Records';

const { TableStoreHelper: { getBaseStore } } = JetFBMixins;
const { renderCurrentPage } = window.JetFBActions;

Vue.use( Vuex );

window.jfbEventBus = window.jfbEventBus || new Vue();

const options = {
	store: new Vuex.Store( getBaseStore() ),
};

renderCurrentPage( Records, options );