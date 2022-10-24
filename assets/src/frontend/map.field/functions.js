function isMapField( node ) {
	return node.parentElement.classList.contains( 'jet-fb-map-field' );
}

let provider = false;

/**
 * @returns {Window.JetEngineMapsProvider}
 */
function getProvider() {
	if ( false === provider ) {
		provider = new window.JetEngineMapsProvider();
	}

	return provider;
}

export { isMapField, getProvider };