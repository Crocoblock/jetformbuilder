/**
 * @param node {Node|Element}
 */
function resolveLegend( node ) {
	const legend = node.closest( 'fieldset' )?.querySelector?.( 'legend' );

	if ( ! legend ) {
		return '';
	}

	legend.querySelectorAll( 'input, select, textarea' ).forEach(
		item => item.remove(),
	);

	return legend.innerHTML;
}

export default resolveLegend;