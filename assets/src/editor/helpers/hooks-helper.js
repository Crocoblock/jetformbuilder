import { saveGlobalComponent } from "../components/manager";

const {
	useState,
	useEffect
} = wp.element;

const {
	useSelect,
	useDispatch,
} = wp.data;

const {
	createHooks
} = wp.hooks;

export const jfbHooks = createHooks();

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

export const useStateClasses = initialValid => {
	const validClass = 'is-valid';
	const invalidClass = 'is-invalid'
	const initClasses = [ 'jet-form-validate-button' ];

	const initStateClasses = () => {
		if ( initialValid ) {
			return [ ...initClasses, validClass ];
		} else if( ! initialValid ) {
			return [ ...initClasses, invalidClass ];
		}
	};

	const [ classes, setClasses ] = useState( initStateClasses() );

	const setValidClass = () => { setClasses( [ ...initClasses, validClass ] ) };
	const setInvalidClass = () => { setClasses( [ ...initClasses, invalidClass ] ) };
	const setLoadingClass = () => { setClasses( [ ...initClasses, 'loading' ] ) };

	return [ classes.join( ' ' ), setValidClass, setInvalidClass, setLoadingClass ];
}


saveGlobalComponent( 'JetFBHooks', { useActions, useStateClasses } );
