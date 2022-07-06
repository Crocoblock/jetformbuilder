const {
	useBlockProps,
} = wp.blockEditor;

const {
	useSelect,
	useDispatch,
} = wp.data;

function useUniqKey() {
	const blockProps = useBlockProps();

	return slug => (
		slug + '-' + blockProps[ 'data-block' ]
	);
}

function useBlockAttributes() {
	const [ clientId, attributes ] = useSelect( select => {
		const clientId = select( 'core/block-editor' ).getSelectedBlockClientId();

		return [ clientId, select( 'core/block-editor' ).getBlockAttributes( clientId ) ];
	} );
	const { updateBlock } = useDispatch( 'core/block-editor', [] );

	const updateAttributes = props => {
		if ( 'object' === typeof props ) {
			updateBlock( clientId, { attributes: props } );
		}

		updateBlock( clientId, {
			attributes: props( attributes ),
		} );
	};

	return [ attributes, updateAttributes ];
}

export { useUniqKey, useBlockAttributes };