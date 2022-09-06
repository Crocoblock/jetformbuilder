const {
	      useBlockProps,
      } = wp.blockEditor;
const {
	      useSelect,
	      useDispatch,
      } = wp.data;

function useBlockAttributes() {
	const blockProps = useBlockProps();
	const clientId   = blockProps[ 'data-block' ];

	const attributes      = useSelect( select => {
		return select( 'core/block-editor' ).getBlockAttributes( clientId );
	} );
	const { updateBlock } = useDispatch( 'core/block-editor', [] );

	const updateAttributes = props => {
		if ( 'object' === typeof props ) {
			updateBlock( clientId, { attributes: props } );

			return;
		}

		updateBlock( clientId, {
			attributes: props( attributes ),
		} );
	};

	return [ attributes, updateAttributes ];
}

export default useBlockAttributes;