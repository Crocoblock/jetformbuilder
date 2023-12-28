const {
	      addAction,
      } = wp.hooks;

const { apiFetch } = wp;

addAction(
	'jet.fb.render.page',
	'jet-form-builder/verification',
	function ( page ) {
		const {
			      getters,
			      commit,
		      } = page.$store;

		jfbEventBus.$on( 'verification-verify', () => {
			commit( 'scope-verification/actions/toggleLoading' );
			commit( 'toggleDoingAction', null, { root: true } );

			apiFetch( {
				...getters[ 'scope-verification/actions/current' ].endpoint,
				data: {
					...getters[ 'scope-verification/actions/current' ].payload,
				},
			} ).then( response => {
				jfbEventBus.$CXNotice.add( {
					message: response.message,
					type: 'success',
					duration: 4000,
				} );
			} ).catch( error => {
				jfbEventBus.$CXNotice.add( {
					message: error.message,
					type: 'error',
					duration: 4000,
				} );
			} ).finally( () => {
				commit( 'scope-verification/actions/toggleLoading' );
				commit( 'toggleDoingAction', null, { root: true } );
			} );
		} );
	},
);