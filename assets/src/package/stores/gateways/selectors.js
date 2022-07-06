const selectors = {
	getCurrentRequestId( state ) {
		return state.currentRequest.id;
	},
	getCurrentRequest( state ) {
		return state.currentRequest;
	},
	getScenario( state ) {
		return state.currentScenario;
	},
	getScenarioId( state ) {
		return state.currentScenario?.id;
	},
	getGatewayId( state ) {
		return state.currentGateway?.gateway;
	},
	getGateway( state ) {
		return state.currentGateway;
	},
	getEventTypes( state ) {
		return state.eventTypes;
	},
};

export default {
	...selectors,
	getGatewaySpecific( state ) {
		return state.currentGateway[ selectors.getGatewayId( state ) ] || {};
	},
}