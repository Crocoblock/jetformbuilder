import RecordPrint from './RecordPrint';
import fieldName from '../columns/field-name-column';

const { addFilter } = wp.hooks;

addFilter(
	'jet.fb.admin.table.form-fields',
	'jet-form-builder/record-print',
	components => {
		components.push(
			fieldName,
		);

		return components;
	},
);

const {
	      BaseStore,
	      SingleMetaBoxesPlugin,
      } = JetFBStore;

const { renderCurrentPage } = window.JetFBActions;

const store = new Vuex.Store( {
	...BaseStore,
	plugins: [ SingleMetaBoxesPlugin ],
} );

renderCurrentPage( RecordPrint, { store } );
