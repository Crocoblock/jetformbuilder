import issetRenderGateway from './issetRenderGateway';

function renderGateway( id, props, what = 'cred' ) {
	if ( !issetRenderGateway( id, what ) ) {
		return null;
	}
	const GatewayComponent = window.JetFBGatewaysList[ id ][ what ];

	return <GatewayComponent { ...props } />;
}

export default renderGateway;