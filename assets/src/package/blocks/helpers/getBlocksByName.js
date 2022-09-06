import blocksRecursiveIterator from './blocksRecursiveIterator';

function getBlocksByName( blockNames ) {
	const blocks = [];

	blocksRecursiveIterator( block => {
		if ( !blockNames.includes( block.name ) ) {
			return;
		}
		blocks.push( block );
	} );

	return blocks;
}

export default getBlocksByName;