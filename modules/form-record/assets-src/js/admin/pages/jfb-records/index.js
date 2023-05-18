import Records from './Records';

const {
	BaseStore,
	TableModulePlugin,
	TableSeedPlugin,
	MessagesPlugin,
} = JetFBStore;

const {
	renderCurrentPage,
} = window.JetFBActions;

const store = new Vuex.Store( {
	...BaseStore,
	plugins: [ TableModulePlugin(), TableSeedPlugin(), MessagesPlugin ],
} );

renderCurrentPage( Records, { store } );