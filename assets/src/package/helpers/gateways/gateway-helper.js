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
};

export const registerGateway = ( id, callback, forWhat = 'cred' ) => {
	window.JetFBGatewaysList = window.JetFBGatewaysList || {};
	window.JetFBGatewaysList[ id ] = window.JetFBGatewaysList[ id ] || {};
	window.JetFBGatewaysList[ id ][ forWhat ] = callback;
};

export const issetRenderGateway = ( id, what = 'cred' ) => {
	return (
		window.JetFBGatewaysList && window.JetFBGatewaysList[ id ] && window.JetFBGatewaysList[ id ][ what ]
	);
};

export const renderGateway = ( id, props, what = 'cred' ) => {
	if ( ! issetRenderGateway( id, what ) ) {
		return null;
	}
	const GatewayComponent = window.JetFBGatewaysList[ id ][ what ];

	return <GatewayComponent { ...props } />;
};

export const renderGatewayWithPlaceholder = ( id, props, what = 'cred', Placeholder = null ) => {
	if ( ! issetRenderGateway( id, what ) ) {
		return Placeholder;
	}

	return renderGateway( id, props, what );
};