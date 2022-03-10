import SinglePayment from './SinglePayment';

const {
	BaseStore,
	SingleMetaBoxesPlugin,
} = JetFBStore;

const { renderCurrentPage } = window.JetFBActions;

Vue.use( Vuex );

const store = new Vuex.Store( {
	...BaseStore,
	plugins: [ SingleMetaBoxesPlugin ],
} );

renderCurrentPage( SinglePayment, { store } );
