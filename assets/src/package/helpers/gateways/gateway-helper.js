export const gatewayAttr = ( attr = false, isEmpty = '' ) => {
	const data = window.JetFormEditorData.gateways;

	if ( ! attr ) {
		return data;
	}
	if ( ! data[ attr ] ) {
		return false;
	}

	const source = data[ attr ];

	return name => source[ name ] ? source[ name ] : isEmpty;
};

export const gatewayLabel = ( type, isEmpty = '' ) => {
	const label = gatewayAttr( 'labels' );

	return attr => label( type ) ? label( type )[ attr ] : isEmpty;
}

export const registerGateway = ( id, callback ) => {
	window.jetFBGatewaysList = window.jetFBGatewaysList || {};
	window.jetFBGatewaysList[ id ] = callback;
};

export const renderGateway = ( id, props ) => {
	if ( ! window.jetFBGatewaysList || ! window.jetFBGatewaysList[ id ] ) {
		return null;
	}
	const GatewayComponent = window.jetFBGatewaysList[ id ];

	return <GatewayComponent { ...props } />;
};