/**
 * @param node {HTMLElement}
 * @returns {boolean}
 */
function isRepeater( node ) {
	return 1 === +node.dataset.repeater;
}

export { isRepeater };