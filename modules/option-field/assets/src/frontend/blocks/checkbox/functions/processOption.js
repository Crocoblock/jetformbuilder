/**
 * @param node
 * @param current {Array|String}
 * @param input {CheckboxData}
 */
function processOption( node, current, input ) {
	node.checked = current?.includes( node.value );

	if ( !node.checked ) {
		return;
	}

	input.calcValue += parseFloat(
		node.dataset?.calculate ?? node.value,
	);

	if ( !input.isArray() ) {
		return;
	}

	const index = current.indexOf( node.value );

	// remove from array values
	current.splice( index, 1 );
}

export default processOption;