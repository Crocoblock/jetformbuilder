function registerGateway( id, callback, forWhat = 'cred' ) {
	window.JetFBGatewaysList       = window.JetFBGatewaysList || {};
	window.JetFBGatewaysList[ id ] = window.JetFBGatewaysList[ id ] ||
		{};

	window.JetFBGatewaysList[ id ][ forWhat ] = callback;
}

export default registerGateway;