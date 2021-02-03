const {
	useState,
	useEffect
} = wp.element;

const {
	useSelect,
	useDispatch,
} = wp.data;


export const useActions = ( withEditPostEffect = false ) => {
	const meta = useSelect( ( select ) => {
		return select( 'core/editor' ).getEditedPostAttribute( 'meta' ) || {};
	} );

	const {
		editPost
	} = useDispatch( 'core/editor' );

	const [actions, setActions] = useState( JSON.parse( meta._jf_actions || '[]' ) );

	useEffect( () => {
		if ( withEditPostEffect ) {
			editPost( {
				meta: ( {
					...meta,
					_jf_actions: JSON.stringify( actions )
				} )
			} );
		}
	}, [actions] );

	return [actions, setActions];
};