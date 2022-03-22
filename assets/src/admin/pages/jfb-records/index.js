import Records from './Records';

const {
	BaseStore,
	TableModulePlugin,
	TableSeedPlugin,
} = JetFBStore;

const {
	renderCurrentPage,
} = window.JetFBActions;

const store = new Vuex.Store( {
	...BaseStore,
	plugins: [ TableModulePlugin(), TableSeedPlugin() ],
} );

renderCurrentPage( Records, { store } );