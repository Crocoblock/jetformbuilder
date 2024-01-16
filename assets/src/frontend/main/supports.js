/**
 * @param node {HTMLElement}
 * @returns {boolean}
 */
function isChangeType( node ) {
	return [ 'select-one', 'range' ].includes( node.type );
}

/**
 * @param node {HTMLElement}
 * @returns {boolean}
 */
function isInputMask( node ) {
	return (
		node.classList.contains( 'jet-form-builder__masked-field' ) &&
		jQuery.fn.inputmask
	);
}

/**
 * @param node {HTMLElement}
 * @returns {boolean}
 */
function isHidden( node ) {
	return 'hidden' === node.type;
}

/**
 * @param node {HTMLElement}
 * @returns {boolean}
 */
function isRange( node ) {
	return 'range' === node.type;
}

export {
	isHidden,
	isRange,
	isChangeType,
	isInputMask,
};