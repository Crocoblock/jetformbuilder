export function renderCurrentPage( component, options = {} ) {
	const pref = 'jet-form-builder_page_';

	new Vue( {
		el: '#' + ( pref + component.name ),
		render: h => h( component ),
		...options,
	} );
}