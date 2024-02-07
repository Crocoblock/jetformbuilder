const {
	      useBlockEditContext,
      } = wp.blockEditor;
const {
	      useSelect,
	      useDispatch,
      } = wp.data;

function useBlockAttributes( otherClientId = null ) {
	const blockProps   = useBlockEditContext();
	let { clientId } = blockProps;

	if ( otherClientId ) {
		clientId = otherClientId;
	}

	const attributes      = useSelect( select => {
		return select( 'core/block-editor' ).getBlockAttributes( clientId );
	} );
	const { updateBlock } = useDispatch( 'core/block-editor', [] );

	/**
	 * @param props {Object|Function}
	 */
	const updateAttributes = props => {
		props = 'object' === typeof props
		        ? props
		        : props( attributes );

		props = wp.data.select( 'jet-forms/fields' ).getSanitizedAttributes(
			props,
			blockProps,
		);

		updateBlock( clientId, { attributes: props } );
	};

	return [ attributes, updateAttributes ];
}

export default useBlockAttributes;