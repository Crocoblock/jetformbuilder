function getInnerBlocks( clientId ) {
	const block = wp.data.select( 'core/block-editor' ).getBlock( clientId );
	return block ? block.innerBlocks : [];
}

export default getInnerBlocks;