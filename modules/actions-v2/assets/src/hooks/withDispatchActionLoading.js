import { STORE_NAME } from '../store';

function withDispatchActionLoading( dispatch ) {
	return {
		setLoading( actionId ) {
			dispatch( STORE_NAME ).setLoading( { id: actionId } );
		},
		setResultSuccess( actionId, response ) {
			dispatch( STORE_NAME ).setLoadingResult( {
				id: actionId,
				success: true,
				response,
			} );
		},
		setResultFail( actionId ) {
			dispatch( STORE_NAME ).setLoadingResult( {
				id: actionId,
				success: false,
				response: {},
			} );
		},
	};
}

// backward compatibility
window.JetFBHooks                           = window.JetFBHooks ?? {};
window.JetFBHooks.withDispatchActionLoading = withDispatchActionLoading;

export default withDispatchActionLoading;