export function renderCurrentPage( component, options = {} ) {
	const pref = 'jet-form-builder_page_';

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
}