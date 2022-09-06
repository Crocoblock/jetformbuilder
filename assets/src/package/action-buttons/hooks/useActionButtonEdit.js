const {
	      useSelect,
      } = wp.data;

function useActionButtonEdit( actionType ) {
	return useSelect(
		select => select( 'jet-forms/action-buttons' ).getButtonEdit( actionType ),
		[ actionType ],
	);
}

export default useActionButtonEdit;