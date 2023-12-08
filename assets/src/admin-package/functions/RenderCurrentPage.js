const {
	      doAction,
      } = wp.hooks;

export function renderCurrentPage( component, options = {} ) {
	const pref = 'jet-form-builder_page_';

	const page = new Vue( {
		el: '#' + (
			pref + component.name
		),
		render: h => h( component ),
		...options,
	} );

	doAction( 'jet.fb.render.page', page );
}