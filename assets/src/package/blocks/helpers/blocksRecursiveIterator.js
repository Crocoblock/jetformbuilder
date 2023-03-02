const { select } = wp.data;

function blocksRecursiveIterator( blockParserFunc ) {
	const blocksRecursiveIterator = ( blocks, parent = null ) => {

		blocks = blocks || select( 'core/block-editor' ).getBlocks();

		blocks.map( block => {
			blockParserFunc( block, parent );

			if ( block.innerBlocks.length ) {
				const currentParent = 'jet-forms/repeater-field' === block.name
				                      ? block
				                      : parent;

				blocksRecursiveIterator(
					block.innerBlocks,
					currentParent,
				);
			}
		} );
	};

	blocksRecursiveIterator();
}

export default blocksRecursiveIterator;