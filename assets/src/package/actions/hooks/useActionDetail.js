const {
	      useSelect,
      } = wp.data;


export const useActionDetail = ( actionType = false ) => {
	return useSelect( select => {
		return actionType
		       ? select( 'jet-forms/actions' ).getDetail( actionType )
		       : select( 'jet-forms/actions' ).getCurrentDetail();
	}, [ actionType ] );
};

export default useActionDetail;