/**
 * @param  node {HTMLElement}
 * @return {boolean}
 */
function isRepeater( node ) {
	return 1 === +node.dataset.repeater;
}

export { isRepeater };