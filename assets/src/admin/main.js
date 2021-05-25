import SettingsPage from "./pages/settings/SettingsPage";
import AddonsPage from "./pages/addons/AddonsPage";

( () => {
	const pref = 'jet-form-builder_page_';

	const { applyFilters } = wp.hooks;

	const pages = applyFilters( 'jet.fb.register.admin-pages', [
		SettingsPage,
		AddonsPage
	] )

	pages.forEach( PageComponent => {
		const pageName = ( pref + PageComponent.name );

		if ( window.pagenow === pageName ) {
			new Vue( {
				el: '#' + pref + PageComponent.name,
				render: h => h( PageComponent )
			} );
		}
	} )

})()
