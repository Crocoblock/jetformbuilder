function withDispatchGateways ( dispatch ){
	const store = dispatch( 'jet-forms/gateways' );

	return {
		setGatewayRequest: store.setRequest,
		setGatewayScenario: store.setScenario,
		setScenario: store.setCurrentScenario,
		setGateway: store.setGateway,
		setGatewayInner: store.setGatewayInner,
		setGatewaySpecific: store.setGatewaySpecific,
		clearGateway: store.clearGateway,
		clearScenario: store.clearScenario,
	};
}

export default withDispatchGateways;