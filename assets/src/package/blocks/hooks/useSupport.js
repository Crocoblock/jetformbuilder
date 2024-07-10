const {
	      useSelect,
      } = wp.data;

const {
	      useBlockEditContext,
      } = wp.blockEditor;

const { get } = window._;

function useSupport( supportName ) {
	const { name } = useBlockEditContext();

	return useSelect(
		select => {
			const blockType = select( 'core/blocks' ).getBlockType( name );

			return get( blockType, [ 'supports', supportName ], false );
		},
		[ name, supportName ],
	);
}

export default useSupport;