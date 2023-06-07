const {
	      useSelect,
	      useDispatch,
      } = wp.data;

function useMetaState(
	key,
	ifEmpty      = '{}',
	dependencies = undefined,
) {
	const meta = useSelect( ( select ) => {
		return select( 'core/editor' ).getEditedPostAttribute( 'meta' ) || {};
	}, dependencies );

	const { editPost } = useDispatch( 'core/editor', [ meta ] );

	const metaStateValue = JSON.parse( meta[ key ] || ifEmpty );

	const setMetaStateValue = callable => {
		let value;

		if ( 'function' === typeof callable ) {
			value = callable( metaStateValue );
		}
		else {
			value = callable;
		}

		if ( 'object' !== typeof value || null === value ) {
			value = JSON.parse( ifEmpty );
		}

		editPost( {
			meta: (
				{
					...meta,
					[ key ]: JSON.stringify( value ),
				}
			),
		} );
	};

	return [ metaStateValue, setMetaStateValue ];
}

export default useMetaState;