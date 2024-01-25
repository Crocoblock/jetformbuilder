
function getCalculatedWrapper( node ) {
	return node.closest( '.jet-form-builder__calculated-field' );
}

/**
 * @param  node {HTMLElement}
 * @return {boolean}
 */
function isCalculated( node ) {
	return !!(
		getCalculatedWrapper( node )?.dataset?.formula?.length ?? ''
	);
}

export { isCalculated, getCalculatedWrapper };