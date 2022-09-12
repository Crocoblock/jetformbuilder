/**
 * @param node {HTMLElement}
 * @returns {boolean}
 */
function isCalculated( node ) {
	return !!(
		node.parentElement.dataset?.formula?.length ?? ''
	);
}

export { isCalculated };