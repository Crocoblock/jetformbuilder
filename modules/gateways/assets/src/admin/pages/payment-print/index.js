import PaymentPrint from './PaymentPrint';

const {
	BaseStore,
	SingleMetaBoxesPlugin
} = JetFBStore;

const { renderCurrentPage } = window.JetFBActions;

const store = new Vuex.Store( {
	...BaseStore,
	plugins: [ SingleMetaBoxesPlugin ],
} );

renderCurrentPage( PaymentPrint, { store } );
