import Title from './components/layout/title';
import Collapse from './components/layout/collapse';
import ComponentWrapper from './components/layout/component-wrapper';
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

import './../scss/cx-vue-ui.scss';

Vue.component( Title.name, Title );
Vue.component( Collapse.name, Collapse );
Vue.component( ComponentWrapper.name, ComponentWrapper );
Vue.component( Button.name, Button );
Vue.component( Repeater.name, Repeater );
Vue.component( RepeaterItem.name, RepeaterItem );
Vue.component( Popup.name, Popup );
Vue.component( ListTable.name, ListTable );
Vue.component( ListTableItem.name, ListTableItem );
Vue.component( ListTableHeading.name, ListTableHeading );
Vue.component( Tabs.name, Tabs );
Vue.component( TabsPanel.name, TabsPanel );
Vue.component( Pagination.name, Pagination );

Vue.component( Input.name, Input );
Vue.component( Time.name, Time );
Vue.component( Textarea.name, Textarea );
Vue.component( Switcher.name, Switcher );
Vue.component( Iconpicker.name, Iconpicker );
Vue.component( SelectPlain.name, SelectPlain );
Vue.component( FilterableSelect.name, FilterableSelect );
Vue.component( Checkbox.name, Checkbox );
Vue.component( Radio.name, Radio );
Vue.component( Colorpicker.name, Colorpicker );
Vue.component( WpMedia.name, WpMedia );
Vue.component( Dimensions.name, Dimensions );

Vue.prototype.$CXNotice = CXNotice;
