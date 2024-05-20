import Records from './Records';
import ExportEntriesPlugin from './store/plugins/ExportEntriesPlugin';

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
	plugins: [
		TableModulePlugin(),
		TableSeedPlugin(),
		MessagesPlugin,
		ExportEntriesPlugin,
	],
} );

renderCurrentPage( Records, { store } );