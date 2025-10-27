import { useSelect, useDispatch } from '@wordpress/data';
import { useMemo, useRef } from '@wordpress/element';

function useMetaState(
	key,
	ifEmpty      = '{}',
	dependencies = [],
) {
	const rawMetaString = useSelect( ( select ) => {
		const rawMeta = select( 'core/editor' ).
			getEditedPostAttribute( 'meta' ) || {};

		return rawMeta[ key ] || ifEmpty;
	}, dependencies );

	const prevMetaRef       = useRef( null );
	const prevMetaStringRef = useRef( null );

	const meta = useMemo( () => {
		if ( prevMetaStringRef.current === rawMetaString ) {
			return prevMetaRef.current;
		}

		const parsedMeta = JSON.parse( rawMetaString );

		prevMetaRef.current       = parsedMeta;
		prevMetaStringRef.current = rawMetaString;

		return parsedMeta;
	}, [ rawMetaString ] );

	const { editPost } = useDispatch( 'core/editor' );

	const setMetaStateValue = callable => {
		let value = 'function' === typeof callable
		            ? callable( meta )
		            : callable;

		if ( 'object' !== typeof value || null === value ) {
			value = JSON.parse( ifEmpty );
		}

		editPost( {
			meta: (
				{
					[ key ]: JSON.stringify( value ),
				}
			),
		} );
	};

	return [ meta, setMetaStateValue ];
}

// backward compatibility
window.JetFBHooks              = window.JetFBHooks ?? {};
window.JetFBHooks.useMetaState = useMetaState;

export default useMetaState;