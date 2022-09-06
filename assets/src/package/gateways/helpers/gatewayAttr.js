function gatewayAttr( attr = false, isEmpty = '' ) {
	const data = window.JetFormEditorData.gateways;

	if ( !attr ) {
		return data;
	}
	if ( !data[ attr ] ) {
		return false;
	}

	const source = data[ attr ];

	return name => source[ name ] ? source[ name ] : isEmpty;
}

export default gatewayAttr;