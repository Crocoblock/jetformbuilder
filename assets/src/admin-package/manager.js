import ApiInputError from './input-error';
import CxVuiCollapseMini from './components/CxVuiCollapseMini';
import GetIncoming from './mixins/GetIncoming';
import SaveTabByAjax from './mixins/SaveTabByAjax';
import ParseIncomingValueMixin from './mixins/ParseIncomingValueMixin';
import GetColumnComponent from './mixins/GetColumnComponent';
import PromiseWrapper from './mixins/PromiseWrapper';
import DetailsTable from './components/DetailsTable';
import SimpleWrapperComponent from './components/SimpleWrapperComponent';
import i18n from './mixins/i18n';
import { renderCurrentPage } from './functions/RenderCurrentPage';
import CopyButton from './components/CopyButton';
import * as ChooseColumn from './entries-table-columns/choose';
import * as LinkTypeColumn from './entries-table-columns/link-type';
import * as ActionsColumn from './entries-table-columns/actions';
import * as PayerColumn from './entries-table-columns/payer';

import {
	getCurrentPath,
	getSearch,
	createPath,
	addQueryArgs,
} from './functions/LocationManager';
import ListComponents from './components/ListComponents';
import GetIncomingMessages from './mixins/GetIncomingMessages';
import FilterMixin from './mixins/FilterMixin';

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
	ChooseColumn,
	ActionsColumn,
	PayerColumn,
	LinkTypeColumn,
	SimpleWrapperComponent,
	ListComponents
};

window.JetFBMixins = {
	GetIncoming,
	SaveTabByAjax,
	i18n,
	ParseIncomingValueMixin,
	GetColumnComponent,
	PromiseWrapper,
	GetIncomingMessages,
	FilterMixin
};
