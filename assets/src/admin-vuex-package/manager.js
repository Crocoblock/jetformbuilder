import PaymentsPage from './components/PaymentsPage';
import EntriesTable from './components/EntriesTable';
import DetailsTableWithStore from './components/DetailsTableWithStore';
import TablePagination from './components/TablePagination';
import ChooseAction from './components/ChooseAction';
import Constants from './constants';
import ClearFiltersButton from './components/ClearFiltersButton';
import FilterMixin from './mixins/FilterMixin';
import BaseStore from './store/base-store';
import TableSeedPlugin from './store/plugins/table-seed';
import TableModulePlugin from './store/plugins/table-module';
import SingleMetaBoxesPlugin from './store/plugins/single-meta-boxes';
import PostBoxSkeleton from './components/PostBoxSkeleton';
import PostBoxGrid from './components/PostBoxGrid';
import PostBoxContainer from './components/PostBoxContainer';
import PostBoxSimple from './components/PostBoxSimple';

window.JetFBComponents = {
	...window.JetFBComponents,
	EntriesTable,
	PaymentsPage,
	DetailsTableWithStore,
	TablePagination,
	ChooseAction,
	ClearFiltersButton,
	PostBoxSkeleton,
	PostBoxGrid,
	PostBoxContainer,
	PostBoxSimple
};

window.JetFBMixins = {
	...window.JetFBMixins,
	FilterMixin,
};


window.JetFBStore = {
	BaseStore,
	TableSeedPlugin,
	TableModulePlugin,
	SingleMetaBoxesPlugin,
};

window.JetFBConst = Constants;