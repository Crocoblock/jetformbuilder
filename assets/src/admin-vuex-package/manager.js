import PaymentsPage from './components/PaymentsPage'
import EntriesStoreTable from './components/EntriesStoreTable';
import DetailsTableWithStore from './components/DetailsTableWithStore';
import TablePagination from './components/TablePagination';
import * as TableStoreHelper from './mixins/TableStoreHelper';

window.JetFBComponents = {
	...window.JetFBComponents,
	PaymentsPage,
	EntriesStoreTable,
	DetailsTableWithStore,
	TablePagination,
};

window.JetFBMixins = {
	...window.JetFBMixins,
	TableStoreHelper
}