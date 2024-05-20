import SingleRecord from './SingleRecord';
import fieldType from './field-type-column';
import fieldName from '../columns/field-name-column';

const { addFilter } = wp.hooks;

addFilter( 'jet.fb.admin.table.form-fields', 'jet-form-builder', components => {
	components.push(
		fieldType,
		fieldName,
	);

	return components;
} );

const {
	      BaseStore,
	      SingleMetaBoxesPlugin,
	      NoticesPlugin,
      } = JetFBStore;

const { renderCurrentPage } = window.JetFBActions;

const store = new Vuex.Store( {
	...BaseStore,
	plugins: [ SingleMetaBoxesPlugin, NoticesPlugin ],
} );

renderCurrentPage( SingleRecord, { store } );
