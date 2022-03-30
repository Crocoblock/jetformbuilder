import SingleRecord from './SingleRecord';
import fieldType from './field-type-column';

const { addFilter } = wp.hooks;

addFilter( 'jet.fb.admin.table.form-fields', 'jet-form-builder', components => {
	components.push( fieldType );

	return components;
} );

const {
	BaseStore,
	SingleMetaBoxesPlugin,
} = JetFBStore;

const { renderCurrentPage } = window.JetFBActions;

const store = new Vuex.Store( {
	...BaseStore,
	plugins: [ SingleMetaBoxesPlugin ],
} );

renderCurrentPage( SingleRecord, { store } );
