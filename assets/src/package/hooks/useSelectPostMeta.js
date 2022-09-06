const {
	      useSelect,
      } = wp.data;

function useSelectPostMeta( name ) {
	const allMeta = useSelect(
		select => select( 'core/editor' ).getEditedPostAttribute( 'meta' ) || {},
	);

	return JSON.parse( allMeta[ name ] || '{}' );
}

export default useSelectPostMeta;