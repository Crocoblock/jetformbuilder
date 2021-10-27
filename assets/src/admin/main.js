import * as settings from './pages/settings';
import * as addons from './pages/addons';
import * as paypalEntries from './pages/paypal-entries';

(
	() => {
		const pref = 'jet-form-builder_page_';

		const { applyFilters } = wp.hooks;

		const pages = applyFilters( 'jet.fb.register.admin-pages', [
			settings,
			addons,
			paypalEntries,
		] );


		pages.forEach( ( { component, options = {} } ) => {
			const pageName = (
				pref + component.name
			);

			if ( window.pagenow !== pageName ) {
				return false;
			}

			new Vue( {
				el: '#' + pageName,
				render: h => h( component ),
				...options,
			} );
		} );

	}
)();
