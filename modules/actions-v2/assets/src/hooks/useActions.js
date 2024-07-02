import { useMetaState } from 'jet-form-builder-data';

function useActions( deps = undefined ) {
	return useMetaState( '_jf_actions', '[]', deps );
}

// backward compatibility
window.JetFBHooks            = window.JetFBHooks ?? {};
window.JetFBHooks.useActions = useActions;

export default useActions;