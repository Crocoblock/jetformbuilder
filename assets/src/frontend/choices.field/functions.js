/**
 * @param node {Element}
 */
function isChoicesField( node ) {
	return node?.classList?.contains( 'jet-form-builder-choice' );
}

export { isChoicesField };