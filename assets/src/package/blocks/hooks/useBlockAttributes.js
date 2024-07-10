import { useBlockEditContext } from '@wordpress/block-editor';
import { useSelect, useDispatch, select } from '@wordpress/data';

function useBlockAttributes( otherClientId = null ) {
	const blockProps = useBlockEditContext();
	let { clientId } = blockProps;

	if ( otherClientId ) {
		clientId = otherClientId;
	}

	const attributes      = useSelect( selectStore => (
		selectStore( 'core/block-editor' ).getBlockAttributes( clientId )
	), [ clientId ] );
	const { updateBlock } = useDispatch( 'core/block-editor' );

	/**
	 * @param props {Object|Function}
	 */
	const updateAttributes = props => {
		props = 'object' === typeof props
		        ? props
		        : props( attributes );

		props = select( 'jet-forms/fields' ).getSanitizedAttributes(
			props,
			blockProps,
		);

		updateBlock( clientId, { attributes: props } );
	};

	return [ attributes, updateAttributes ];
}

export default useBlockAttributes;