function withSelectActionLoading( select ) {
	const loadingState = select( 'jet-forms/actions' ).getCurrentLoading();

	return { loadingState };
}

export default withSelectActionLoading;