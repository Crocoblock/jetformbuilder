function withDispatchActionLoading( dispatch ) {
	return {
		setLoading( actionId ) {
			dispatch( 'jet-forms/actions' ).setLoading( { actionId } );
		},
		setResultSuccess( actionId, response ) {
			dispatch( 'jet-forms/actions' ).setLoadingResult( {
				actionId,
				success: true,
				response,
			} );
		},
		setResultFail( actionId ) {
			dispatch( 'jet-forms/actions' ).setLoadingResult( {
				actionId,
				success: false,
				response: {},
			} );
		},
	};
}

export default withDispatchActionLoading;