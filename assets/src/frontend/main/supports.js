/**
 * @param  node {HTMLElement}
 * @return {boolean}
 */
function isChangeType( node ) {
	return [ 'select-one', 'range' ].includes( node.type );
}

/**
 * @param  node {HTMLElement}
 * @return {boolean}
 */
function isHidden( node ) {
	return 'hidden' === node.type;
}

/**
 * @param  node {HTMLElement}
 * @return {boolean}
 */
function isRange( node ) {
	return 'range' === node.type;
}

export {
	isHidden,
	isRange,
	isChangeType,
};