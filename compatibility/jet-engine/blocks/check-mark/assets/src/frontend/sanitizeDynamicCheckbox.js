import resolveCheckMark from '@root/assets/src/frontend/resolveCheckMark';

/**
 * @param value {Array}
 * @param input {DynamicCheckboxData}
 */
function sanitizeDynamicCheckbox( value, input ) {
	for ( const node of input.nodes ) {
		processOption( node, value, input );
	}

	return value;
}

/**
 * @param node {Element}
 * @param value {Array}
 * @param input {DynamicCheckboxData}
 */
function processOption( node, value, input ) {
	if ( node.dataset.custom ) {
		return;
	}

	const checkMarkNode   = resolveCheckMark( node );
	checkMarkNode.checked = node.checked;
}

export default sanitizeDynamicCheckbox;