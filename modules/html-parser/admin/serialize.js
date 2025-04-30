function convertToCommentBlock( { name, attributes } ) {
	const blockAttrs = JSON.stringify( attributes );

	return `<!-- wp:${ name } ${ blockAttrs } /-->`;
}

/**
 * @param blocks {Object[]}
 */
function serialize( blocks ) {
	return blocks.map( convertToCommentBlock ).join( '\n\n' );
}

export default serialize;