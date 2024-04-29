import apiFetch from '@wordpress/api-fetch';
import { addAction } from '@wordpress/hooks';

const duration = 4000;

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
					duration,
				} );

			} ).catch( error => {
				jfbEventBus.$CXNotice.add( {
					message: error.message,
					type: 'error',
					duration,
				} );
			} ).finally( () => {
				commit( 'scope-verification/actions/toggleLoading' );
				commit( 'toggleDoingAction', null, { root: true } );

				setTimeout(
					() => document.location.reload(),
					duration,
				);
			} );
		} );
	},
);