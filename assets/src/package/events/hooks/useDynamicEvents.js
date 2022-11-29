const {
	      useSelect,
      } = wp.data;

function useDynamicEvents() {
	return useSelect(
		select => select( 'jet-forms/events' ).getDynamicTypes().map(
			( { value } ) => value,
		),
	);
}

export default useDynamicEvents;