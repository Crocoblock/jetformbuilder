const {
	      useBlockEditContext,
      } = wp.blockEditor;

const {
	      useSelect,
      } = wp.data;

/**
 * @since 3.1.0
 *
 * @returns {*}
 */
function useJetStyleSupports() {
	const { clientId, name } = useBlockEditContext();

	return useSelect(
		select => {
			const { supports } = select( 'core/blocks' ).getBlockType( name );

			if ( !supports.hasOwnProperty( 'jetStyle' ) ) {
				return {};
			}

			return supports.jetStyle;
		},
		[ clientId ],
	);
}

export default useJetStyleSupports;