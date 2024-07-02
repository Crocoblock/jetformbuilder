import { STORE_NAME } from '../store';

function withSelectActionLoading( select ) {
	const loadingState = select( STORE_NAME ).getCurrentLoading();

	return { loadingState };
}

// backward compatibility
window.JetFBHooks                         = window.JetFBHooks ?? {};
window.JetFBHooks.withSelectActionLoading = withSelectActionLoading;

export default withSelectActionLoading;