import ApiInputError from './input-error';
import CxVuiCollapseMini from './components/CxVuiCollapseMini';
import GetIncoming from './mixins/GetIncoming';
import SaveTabByAjax from './mixins/SaveTabByAjax';
import ParseIncomingValueMixin from './mixins/ParseIncomingValueMixin';
import EntriesTable from './components/EntriesTable';
import DetailsTable from './components/DetailsTable';
import DetailsTableWithStore from './components/DetailsTableWithStore';
import SimpleWrapperComponent from './components/SimpleWrapperComponent';
import TablePagination from './components/TablePagination';
import i18n from './mixins/i18n';
import { renderCurrentPage } from './functions/RenderCurrentPage';
import CopyButton from './components/CopyButton';
import * as ChooseColumn from './entries-table-columns/choose';
import * as ActionsColumn from './entries-table-columns/actions';
import * as PayerColumn from './entries-table-columns/payer';
import * as TableStoreHelper from './mixins/TableStoreHelper';
import PaymentsPage from './components/PaymentsPage'

import {
	getCurrentPath,
	getSearch,
	createPath,
	addQueryArgs,
} from './functions/LocationManager';

window.JetFBActions = {
	renderCurrentPage,
	getCurrentPath,
	getSearch,
	createPath,
	addQueryArgs,
};

window.JetFBErrors = {
	ApiInputError,
};

window.JetFBComponents = {
	CxVuiCollapseMini,
	EntriesTable,
	DetailsTable,
	CopyButton,
	DetailsTableWithStore,
	ChooseColumn,
	ActionsColumn,
	PayerColumn,
	SimpleWrapperComponent,
	TablePagination,
	PaymentsPage,
};

window.JetFBMixins = {
	GetIncoming,
	SaveTabByAjax,
	i18n,
	TableStoreHelper,
	ParseIncomingValueMixin,
};