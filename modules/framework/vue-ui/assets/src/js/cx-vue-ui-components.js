import ComponentWrapper from './components/layout/component-wrapper';
import Title from './components/layout/title';
import Collapse from './components/layout/collapse';
import Button from './components/layout/button';
import Repeater from './components/layout/repeater';
import RepeaterItem from './components/layout/repeater-item';
import Popup from './components/layout/popup';
import ListTable from './components/layout/list-table';
import ListTableItem from './components/layout/list-table-item';
import ListTableHeading from './components/layout/list-table-heading';
import Tabs from './components/layout/tabs';
import TabsPanel from './components/layout/tabs-panel';
import Pagination from './components/layout/pagination';
import CXNotice from './components/layout/notice';

import Input from './components/form/input';
import Textarea from './components/form/textarea';
import Time from './components/form/time';
import Switcher from './components/form/switcher';
import Iconpicker from './components/form/iconpicker';
import SelectPlain from './components/form/select';
import FilterableSelect from './components/form/f-select';
import Checkbox from './components/form/checkbox';
import Radio from './components/form/radio';
import Colorpicker from './components/form/colorpicker';
import WpMedia from './components/form/wp-media';
import Dimensions from './components/form/dimensions';
import { clickOutsideDirective as clickOutside } from './utils/v-click-outside';

import './../scss/cx-vue-ui.scss';

const cxVueUiClass = class{
	constructor() {
		this.components = {
			ComponentWrapper,
			Title,
			Collapse,
			Button,
			Repeater,
			RepeaterItem,
			Popup,
			ListTable,
			ListTableItem,
			ListTableHeading,
			Tabs,
			TabsPanel,
			Pagination,
			Input,
			Textarea,
			Time,
			Switcher,
			Iconpicker,
			SelectPlain,
			FilterableSelect,
			Checkbox,
			Radio,
			Colorpicker,
			WpMedia,
			Dimensions,
		};

		this.extensions = {
			CXNotice
		};

		this.instanceVersion = false;
	}

	registerGlobalComponents( instance ) {
		this.instanceVersion = instance.version;

		for ( let component in this.components ) {
			const _component =  this.components[ component ];
			instance.component( _component.name, _component );
		}
	}

	registerGlobalExtensions( ) {
		for ( let extension in this.extensions ) {
			const _extensions =  this.extensions[ extension ];

			Vue.prototype['$'+ extension] = _extensions;
		}
	}
}

window.cxVueUi = new cxVueUiClass();
window.JetVueUIClickOutside = clickOutside;

