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
		const rawMeta = select( 'core/editor' ).getEditedPostAttribute( 'meta' ) || {};

		return JSON.parse( rawMeta[ key ] || ifEmpty );
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, dependencies );

	const { editPost } = useDispatch( 'core/editor' );

	const setMetaStateValue = callable => {
		let value;

		if ( 'function' === typeof callable ) {
			value = callable( meta );
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

	return [ meta, setMetaStateValue ];
}

export default useMetaState;