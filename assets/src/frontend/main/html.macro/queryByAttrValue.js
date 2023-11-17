function queryByAttrValue( rootNode, value ) {
	const { replaceAttrs = [] } = window.JetFormBuilderSettings;

	const querySelector = [];

	for ( let i = 0; i < replaceAttrs.length; i++ ) {
		querySelector.push( `[${ replaceAttrs[ i ] }*="${ value }"]` );
	}

	return rootNode.querySelectorAll( querySelector.join( ', ' ) );
}

export default queryByAttrValue;