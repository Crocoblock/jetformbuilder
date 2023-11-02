const {
	      useBlockEditContext,
      } = wp.blockEditor;

const {
	      useSelect,
      } = wp.data;

/**
 * Get root-level blocks without current block
 *
 * @returns {Object[]}
 */
function useAnotherBlocks() {
	const context = useBlockEditContext();

	return useSelect(
		select => {
			if ( !context.isSelected ) {
				return [];
			}

			return select( 'core/block-editor' ).getBlocks().filter(
				block => block.clientId !== context.clientId,
			);
		},
		[ context.isSelected, context.clientId ],
	);
}

export default useAnotherBlocks;