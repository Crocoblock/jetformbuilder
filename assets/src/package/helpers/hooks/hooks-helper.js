const {
	useState,
	useEffect
} = wp.element;

const {
	useSelect,
	useDispatch,
} = wp.data;

export const useMetaState = ( key, ifEmpty = '{}' ) => {
	const meta = useSelect( ( select ) => {
		return select( 'core/editor' ).getEditedPostAttribute( 'meta' ) || {};
	} );

	const {
		editPost
	} = useDispatch( 'core/editor' );

	const [ metaStateValue, setMetaStateValue ] = useState( JSON.parse( meta[ key ] || ifEmpty ) );

	useEffect( () => {
		editPost( {
			meta: ( {
				...meta,
				[ key ]: JSON.stringify( metaStateValue )
			} )
		} );
	}, [ metaStateValue ] );

	return [ metaStateValue, setMetaStateValue ];
};

export const useActions = ( withEditPostEffect = false ) => {
	const meta = useSelect( ( select ) => {
		return select( 'core/editor' ).getEditedPostAttribute( 'meta' ) || {};
	} );

	const {
		editPost
	} = useDispatch( 'core/editor' );

	const [ actions, setActions ] = useState( JSON.parse( meta._jf_actions || '[]' ) );

	useEffect( () => {
		if ( withEditPostEffect ) {
			editPost( {
				meta: ( {
					...meta,
					_jf_actions: JSON.stringify( actions )
				} )
			} );
		}
	}, [ actions ] );

	return [ actions, setActions ];
};
const initClasses = [ 'jet-form-validate-button' ];

export const useStateValidClasses = initialValid => {
	const validClass = 'is-valid';
	const invalidClass = 'is-invalid'

	const initStateClasses = () => {
		if ( initialValid ) {
			return [ ...initClasses, validClass ];
		}
		else if ( ! initialValid ) {
			return [ ...initClasses, invalidClass ];
		}
	};

	const [ classes, setClasses ] = useState( initStateClasses() );

	const setValidClass = () => {
		setClasses( [ ...initClasses, validClass ] )
	};
	const setInvalidClass = () => {
		setClasses( [ ...initClasses, invalidClass ] )
	};
	const setLoadingClass = () => {
		setClasses( [ ...initClasses, 'loading' ] )
	};

	return [ classes.join( ' ' ), setValidClass, setInvalidClass, setLoadingClass ];
}

export const useStateLoadingClasses = () => {
	const [ classes, setClasses ] = useState( [ ...initClasses ] );

	const setLoadingClass = () => {
		setClasses( [ ...initClasses, 'loading' ] )
	};
	const clearLoadingClass = () => {
		setClasses( initClasses );
	}

	return [ classes.join( ' ' ), setLoadingClass, clearLoadingClass ];
}
