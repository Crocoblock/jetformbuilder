/**
 * @param node {Element}
 */
function isChoicesField( node ) {
	return node?.classList?.contains( 'jet-form-builder-choice' );
}

/**
 * @param node {Element}
 * @returns {HTMLElement}
 */
function getWrapper( node ) {
	return node.closest(
		'.jet-form-builder-choice--item',
	);
}

export { isChoicesField, getWrapper };