/**
 * @param node {HTMLElement}
 * @returns {boolean}
 */
function isChangeType( node ) {
	return [ 'select', 'range' ].includes( node.type );
}

/**
 * @param node {HTMLElement}
 * @returns {boolean}
 */
function isCheckbox( node ) {
	return 'checkbox' === node.type;
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
function isMultiSelect( node ) {
	return 'select-multiple' === node.type;
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
function isRadio( node ) {
	return 'radio' === node.type;
}

/**
 * @param node {HTMLElement}
 * @returns {boolean}
 */
function isRange( node ) {
	return 'range' === node.type;
}

/**
 * @param node {HTMLElement}
 * @returns {boolean}
 */
function isWysiwyg( node ) {
	return node.classList.contains( 'wysiwyg-field' );
}

export {
	isRadio,
	isWysiwyg,
	isHidden,
	isRange,
	isCheckbox,
	isMultiSelect,
	isChangeType,
	isInputMask,
};