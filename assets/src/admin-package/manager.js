import ApiInputError from './input-error';
import CxVuiCollapseMini from './components/CxVuiCollapseMini';
import GetIncoming from './mixins/GetIncoming';
import SaveTabByAjax from './mixins/SaveTabByAjax';
import ParseIncomingValueMixin from './mixins/ParseIncomingValueMixin';
import PromiseWrapper from './mixins/PromiseWrapper';
import DetailsTable from './components/DetailsTable';
import SimpleWrapperComponent from './components/RowWrapper';
import i18n from './mixins/i18n';
import { renderCurrentPage } from './functions/RenderCurrentPage';
import {
	getCurrentPath,
	getSearch,
	createPath,
	addQueryArgs,
} from './functions/LocationManager';
import ListComponents from './components/ListComponents';
import CxVuiTabsPanel from './components/CxVuiTabsPanel';
import CxVuiTabs from './components/CxVuiTabs';
import LocalStorage from './functions/LocalStorage';
import ExternalLink from './components/ExternalLink';
import resolveRestUrl from './functions/resolveRestUrl';
import ColumnWrapper from './components/ColumnWrapper';

window.JetFBActions = {
	renderCurrentPage,
	getCurrentPath,
	getSearch,
	createPath,
	addQueryArgs,
	LocalStorage,
	resolveRestUrl,
};

window.JetFBErrors = {
	ApiInputError,
};

window.JetFBComponents = {
	CxVuiCollapseMini,
	DetailsTable,
	SimpleWrapperComponent,
	ListComponents,
	CxVuiTabsPanel,
	CxVuiTabs,
	ExternalLink,
	RowWrapper: SimpleWrapperComponent,
	ColumnWrapper,
};

window.JetFBMixins = {
	GetIncoming,
	SaveTabByAjax,
	i18n,
	ParseIncomingValueMixin,
	PromiseWrapper,
};
