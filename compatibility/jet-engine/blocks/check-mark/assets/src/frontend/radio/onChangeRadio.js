import resolveCheckMark from '../resolveCheckMark';

/**
 * @param input {DynamicRadioData}
 */
function onChangeRadio( input ) {
	for ( const node of input.nodes ) {
		processOption( node );
	}
}

/**
 * @param node {Element}
 */
function processOption( node ) {
	if ( node.dataset.custom ) {
		return;
	}

	const checkMarkNode   = resolveCheckMark( node );
	checkMarkNode.checked = node.checked;
}

export default onChangeRadio;