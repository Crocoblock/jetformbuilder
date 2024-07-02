import { useSelect, useDispatch } from '@wordpress/data';

function useMetaState(
	key,
	ifEmpty      = '{}',
	dependencies = [],
) {
	const meta = useSelect( ( select ) => {
		const rawMeta = select( 'core/editor' ).
			getEditedPostAttribute( 'meta' ) || {};

		return JSON.parse( rawMeta[ key ] || ifEmpty );
	}, dependencies );

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