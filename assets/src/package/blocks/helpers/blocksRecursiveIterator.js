const { select } = wp.data;

const loopBlocks = ( current ) => {
	const {	getBlock } = select( 'core/block-editor' );

	const { innerBlocks } = current;

	current = {
		...current,
		...getBlock( current.clientId ),
	}

	if ( innerBlocks?.length ) {
		current.innerBlocks = innerBlocks.map(loopBlocks);
	}

	return current;
};

const getBlocks = () => {
	const {
		      getBlocks,
		      __unstableGetClientIdsTree: getTree,
	      } = select( 'core/block-editor' );

	if ( 'function' !== typeof getTree ) {
		return getBlocks();
	}

	return getTree().map( loopBlocks );
};

function blocksRecursiveIterator ( blockParserFunc ) {
	const blocksRecursiveIterator = ( blocks ) => {

		blocks = blocks || getBlocks();

		blocks.map( block => {
			blockParserFunc( block );

			if ( block.innerBlocks.length ) {
				blocksRecursiveIterator( block.innerBlocks );
			}
		} );
	};

	blocksRecursiveIterator();
}

export default blocksRecursiveIterator;