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
function isCalculated( node ) {
	return !!(
		node.parentElement.dataset?.formula?.length ?? ''
	);
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
function isFile( node ) {
	return 'file' === node.type;
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
function isRepeater( node ) {
	return 1 === +node.dataset.repeater;
}

/**
 * @param node {HTMLElement}
 * @returns {boolean}
 */
function isWysiwyg( node ) {
	return node.classList.contains( 'wysiwyg-field' );
}

export {
	isChangeType,
	isCalculated,
	isCheckbox,
	isFile,
	isInputMask,
	isMultiSelect,
	isHidden,
	isRadio,
	isRepeater,
	isWysiwyg,
};