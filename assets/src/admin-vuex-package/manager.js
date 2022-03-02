import PaymentsPage from './components/PaymentsPage';
import EntriesTable from './components/EntriesTable';
import DetailsTableWithStore from './components/DetailsTableWithStore';
import TablePagination from './components/TablePagination';
import ChooseAction from './components/ChooseAction';
import Constants from './constants';
import ClearFiltersButton from './components/ClearFiltersButton';
import FilterMixin from './mixins/FilterMixin';
import BaseStore from './store/base-store';
import TableSeedPlugin from './plugins/table-seed-plugin';
import TableModulePlugin from './plugins/table-module-plugin';

window.JetFBComponents = {
	...window.JetFBComponents,
	EntriesTable,
	PaymentsPage,
	DetailsTableWithStore,
	TablePagination,
	ChooseAction,
	ClearFiltersButton,
};

window.JetFBMixins = {
	...window.JetFBMixins,
	FilterMixin,
};


window.JetFBStore = {
	BaseStore,
	TableSeedPlugin,
	TableModulePlugin,
};

window.JetFBConst = Constants;