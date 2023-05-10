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