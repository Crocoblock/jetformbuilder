const {
	      useBlockProps,
      } = wp.blockEditor;
const {
	      useSelect,
      } = wp.data;

function useIsHasAttribute( attrName ) {
	const blockProps = useBlockProps();
	const type       = blockProps[ 'data-type' ];

	return useSelect(
		select => {
			const block = select( 'core/blocks' ).getBlockType( type );

			return !!block.attributes[ attrName ];
		},
		[ type ],
	);
}

export default useIsHasAttribute;