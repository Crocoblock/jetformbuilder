import PaymentsPage from './components/PaymentsPage';
import EntriesTable from './components/EntriesTable';
import EntriesStoreTable from './components/EntriesStoreTable';
import DetailsTableWithStore from './components/DetailsTableWithStore';
import TablePagination from './components/TablePagination';
import ChooseAction from './components/ChooseAction';
import * as TableStoreHelper from './mixins/TableStoreHelper';
import TableViewMixin from './mixins/TableViewMixin';

window.JetFBComponents = {
	...window.JetFBComponents,
	EntriesTable,
	PaymentsPage,
	EntriesStoreTable,
	DetailsTableWithStore,
	TablePagination,
	ChooseAction,
};

window.JetFBMixins = {
	...window.JetFBMixins,
	TableStoreHelper,
	TableViewMixin,
};