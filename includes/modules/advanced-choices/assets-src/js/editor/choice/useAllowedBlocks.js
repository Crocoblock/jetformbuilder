const {
	      useSelect,
      } = wp.data;

const SPECIFIC_INCLUDE = [
	'jet-forms/choice-control',
];

function useAllowedBlocks() {
	return useSelect(
		select => {
			const allowedBlocks = [];
			const blockTypes    = select( 'core/blocks' ).getBlockTypes();

			for ( const blockType of blockTypes ) {
				if (
					blockType.name && (
						SPECIFIC_INCLUDE.includes( blockType.name ) ||
						!blockType.name.includes( 'jet-forms/' )
					)
				) {
					allowedBlocks.push( blockType.name );
				}
			}

			return allowedBlocks;
		},
		[],
	);
}

export default useAllowedBlocks;