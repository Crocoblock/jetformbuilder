import './addons-tabs';
import SettingsPage from './SettingsPage';

const { renderCurrentPage } = window.JetFBActions;
const { NoticesPlugin } = JetFBStore;

const store = new Vuex.Store( {
	plugins: [ NoticesPlugin ]
} )

renderCurrentPage( SettingsPage, { store } );