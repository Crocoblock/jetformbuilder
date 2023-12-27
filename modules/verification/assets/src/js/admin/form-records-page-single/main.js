const {
	      addAction,
      } = wp.hooks;

addAction(
	'jet.fb.render.page',
	'jet-form-builder/verification',
	function ( page ) {
		const [ component ] = page.$children;

		component.$store.commit(
			'scope-verification/setActionPromises',
			{
				action: 'verify',
				promise: component.promiseWrapper( ( { resolve, reject } ) => {
					component.apiFetch().then( response => {
						resolve( response.message );
					} ).catch( reject );
				} ),
			},
		);
	},
);