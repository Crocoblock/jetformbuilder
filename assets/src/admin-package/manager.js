import ApiInputError from './input-error';
import CxVuiCollapseMini from './components/CxVuiCollapseMini';
import GetIncoming from './mixins/GetIncoming';
import SaveTabByAjax from './mixins/SaveTabByAjax';
import EntriesTable from './components/EntriesTable';
import DetailsTable from './components/DetailsTable';
import DetailsTableWithStore from './components/DetailsTableWithStore';
import SimpleWrapperComponent from './components/SimpleWrapperComponent';
import i18n from './mixins/i18n';
import { renderCurrentPage } from './functions/RenderCurrentPage';
import CopyButton from './components/CopyButton';
import * as ChooseColumn from './entries-table-columns/choose';
import { getCurrentPath, getSearch, createPath, addQueryArgs } from './functions/LocationManager';

window.JetFBActions = {
	renderCurrentPage,
	getCurrentPath,
	getSearch,
	createPath,
	addQueryArgs
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
	SimpleWrapperComponent,
};

window.JetFBMixins = {
	GetIncoming,
	SaveTabByAjax,
	i18n,
};