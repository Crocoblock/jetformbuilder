import { useSelect } from '@wordpress/data';

export const useActionCallback = ( actionType = false ) => {
	return useSelect( select => {
		return actionType
		       ? select( 'jet-forms/actions' ).getAction( actionType )?.edit
		       : select( 'jet-forms/actions' ).getCurrentEdit();
	}, [ actionType ] );
};

// backward compatibility
window.JetFBHooks                   = window.JetFBHooks ?? {};
window.JetFBHooks.useActionCallback = useActionCallback;

export default useActionCallback;