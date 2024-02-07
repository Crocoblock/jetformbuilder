const {
	      useSelect,
      } = wp.data;

const {
	      useBlockEditContext,
      } = wp.blockEditor;

const { get } = window._;

function useSupport( supportName ) {
	const { clientId, name } = useBlockEditContext();

	return useSelect(
		select => {
			const blockType = select( 'core/blocks' ).getBlockType( name );

			return get( blockType, [ 'supports', supportName ], false );
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[ clientId ],
	);
}

export default useSupport;