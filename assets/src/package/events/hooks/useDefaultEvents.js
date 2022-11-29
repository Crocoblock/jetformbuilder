const { useSelect } = wp.data;

function useDefaultEvents() {
	const eventsObjects = useSelect(
		select => select( 'jet-forms/events' ).getAlwaysTypes() );
	const events        = [];

	for ( const { value } of eventsObjects ) {
		events.push( value );
	}

	return [ ...new Set( events ) ];
}

export default useDefaultEvents;