const {
	      useSelect,
      } = wp.data;

export const useActionCallback = ( actionType = false ) => {
	return useSelect( select => {
		return actionType
		       ? select( 'jet-forms/actions' ).getCallback( actionType )
		       : select( 'jet-forms/actions' ).getCurrentCallback();
	}, [ actionType ] );
};

export default useActionCallback;