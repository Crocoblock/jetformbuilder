const {
	      useBlockEditContext,
      } = wp.blockEditor;
const {
	      useSelect,
	      useDispatch,
	      select,
      } = wp.data;

function useBlockAttributes() {
	const blockProps   = useBlockEditContext();
	const { clientId } = blockProps;

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

		props = select( 'jet-forms/fields' ).getSanitizedAttributes(
			props,
			blockProps,
		);

		updateBlock( clientId, { attributes: props } );
	};

	return [ attributes, updateAttributes ];
}

export default useBlockAttributes;