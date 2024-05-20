/**
 * @param node {Node|Element}
 */
function resolveLabel( node ) {
	let label = node.closest( 'label' );

	// try to find label
	if ( node.id && !label ) {
		const root = node.getRootNode();

		label = root.querySelector( `label[for="${ node.id }"]` );
	}

	if ( !label ) {
		return '';
	}

	label.querySelectorAll( 'input, select, textarea' ).forEach(
		item => item.remove(),
	);

	return label.innerHTML;
}

export default resolveLabel;