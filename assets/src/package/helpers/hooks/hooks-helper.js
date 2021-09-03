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

export const useSuccessNotice = ( text, options = {} ) => {
	const [ hasCopied, setHasCopied ] = useState( false );
	const noticeStore = useDispatch( wp.notices.store );

	useEffect( () => {
		if ( hasCopied ) {
			noticeStore.createWarningNotice( text, { type: 'snackbar', ...options } );
		}
	}, [ hasCopied ] );

	return setHasCopied;
};

export const getRequestFields = actions => {
	const requestFields = [];

	for ( const action of actions ) {
		const {
				  [ action.type ]: current = {},
			  } = action.settings;

		if ( ! current.requestFields ) {
			continue;
		}

		for ( const requestField of current.requestFields ) {
			const index = requestFields.findIndex( field => field.value === requestField.name );

			if ( -1 !== index ) {
				continue;
			}

			requestFields.push( {
				from: action.type,
				id: action.id,
				label: requestField.name,
				value: requestField.name,
				name: requestField.name,
				help: requestField.help,
			} )
		}
	}

	return requestFields;
};

export const useRequestFields = ( options = {} ) => {
	const meta = useSelect( ( select ) => {
		return select( 'core/editor' ).getEditedPostAttribute( 'meta' ) || {};
	} );
	const actions = JSON.parse( meta._jf_actions || '[]' );

	return getRequestFields( actions );
};

export const withRequestFields = select => {
	const meta = select( 'core/editor' ).getEditedPostAttribute( 'meta' ) || {};
	const actions = JSON.parse( meta._jf_actions || '[]' );
	const currentAction = select( 'jet-forms/actions' ).getCurrentAction();

	actions.splice( currentAction.index );

	return { requestFields: getRequestFields( actions ) };
};
