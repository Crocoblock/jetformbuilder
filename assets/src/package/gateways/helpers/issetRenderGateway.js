function issetRenderGateway( id, what = 'cred' ) {
	return (
		window.JetFBGatewaysList && window.JetFBGatewaysList[ id ] &&
		window.JetFBGatewaysList[ id ][ what ]
	);
}

export default issetRenderGateway;