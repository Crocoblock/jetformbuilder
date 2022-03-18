import ApiInputError from './input-error';
import CxVuiCollapseMini from './components/CxVuiCollapseMini';
import GetIncoming from './mixins/GetIncoming';
import SaveTabByAjax from './mixins/SaveTabByAjax';
import ParseIncomingValueMixin from './mixins/ParseIncomingValueMixin';
import PromiseWrapper from './mixins/PromiseWrapper';
import DetailsTable from './components/DetailsTable';
import SimpleWrapperComponent from './components/SimpleWrapperComponent';
import i18n from './mixins/i18n';
import { renderCurrentPage } from './functions/RenderCurrentPage';
import CopyButton from './components/CopyButton';
import {
	getCurrentPath,
	getSearch,
	createPath,
	addQueryArgs,
} from './functions/LocationManager';
import ListComponents from './components/ListComponents';
import GetIncomingMessages from './mixins/GetIncomingMessages';
import CxVuiTabsPanel from './components/CxVuiTabsPanel';
import CxVuiTabs from './components/CxVuiTabs';

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
	DetailsTable,
	CopyButton,
	SimpleWrapperComponent,
	ListComponents,
	CxVuiTabsPanel,
	CxVuiTabs,
};

window.JetFBMixins = {
	GetIncoming,
	SaveTabByAjax,
	i18n,
	ParseIncomingValueMixin,
	PromiseWrapper,
	GetIncomingMessages,
};
