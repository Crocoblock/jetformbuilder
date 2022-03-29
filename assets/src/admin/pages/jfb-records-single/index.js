import SingleRecord from './SingleRecord';
import fieldType from './field-type-column';
import fieldValue from './field-value';

const { addFilter } = wp.hooks;

addFilter( 'jet.fb.admin.table.form-fields', 'jet-form-builder', components => {
	components.push( fieldType, fieldValue );

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
