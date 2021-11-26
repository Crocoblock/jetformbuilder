const { createReduxStore, register } = wp.data;

const DEFAULT_STATE = {
	currentRequest: {
		id: - 1,
	},
	currentGateway: {},
	currentScenario: {},
};

const actions = {
	clearGateway() {
		return {
			type: 'CLEAR_GATEWAY',
		};
	},
	clearScenario() {
		return {
			type: 'CLEAR_SCENARIO',
		};
	},
	setRequest( item ) {
		return {
			type: 'SET_CURRENT_REQUEST',
			item,
		};
	},
	setGateway( item ) {
		return {
			type: 'SET_CURRENT_GATEWAY',
			item,
		};
	},
	setGatewayInner( item ) {
		return {
			type: 'SET_CURRENT_GATEWAY_INNER',
			item,
		};
	},
	setGatewaySpecific( item ) {
		return {
			type: 'SET_CURRENT_GATEWAY_SPECIFIC',
			item,
		};
	},
	setScenario( item ) {
		return {
			type: 'SET_CURRENT_GATEWAY_SCENARIO',
			item,
		};
	},
	setCurrentScenario( item ) {
		return {
			type: 'SET_CURRENT_SCENARIO',
			item,
		};
	},
	hardSetGateway( item, value = '' ) {
		return {
			type: 'HARD_SET_CURRENT_GATEWAY',
			item,
			value,
		};
	},
	hardSetGatewaySpecific( item, value = '' ) {
		return {
			type: 'HARD_SET_CURRENT_GATEWAY_SPECIFIC',
			item,
			value,
		};
	},
};

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
	getGatewaySpecific( state ) {
		return state.currentGateway[ selectors.getGatewayId( state ) ] || {};
	},
};

const store = createReduxStore( 'jet-forms/gateways', {
	reducer( state = DEFAULT_STATE, action ) {
		switch ( action.type ) {
			case 'CLEAR_GATEWAY':
				return {
					...state,
					currentGateway: {}
				};
			case 'CLEAR_SCENARIO':
				return {
					...state,
					currentScenario: {}
				};
			case 'SET_CURRENT_REQUEST':
				const items = [ selectors.getGatewayId( state ), action.item?.id ].filter( value => value );
				action.item.id = items.join( '/' );

				return {
					...state,
					currentRequest: action.item,
				};
			case 'SET_CURRENT_GATEWAY':
				return {
					...state,
					currentGateway: {
						...state.currentGateway,
						...action.item,
					},
				};
			case 'SET_CURRENT_GATEWAY_SPECIFIC':
				return {
					...state,
					currentGateway: {
						...state.currentGateway,
						[ state.currentGateway.gateway ]: {
							...selectors.getGatewaySpecific( state ),
							...action.item,
						},
					},
				};
			case 'SET_CURRENT_GATEWAY_INNER':
				const { key, value } = action.item;
				return {
					...state,
					currentGateway: {
						...state.currentGateway,
						[ key ]: {
							...(
								state.currentGateway[ key ] || {}
							),
							...value,
						},
					},
				};
			case 'SET_CURRENT_GATEWAY_SCENARIO':
				return {
					...state,
					currentScenario: {
						...state.currentScenario,
						...(
							action.item || {}
						),
					},
				};

			case 'SET_CURRENT_SCENARIO':
				return {
					...state,
					currentScenario: {
						...state.currentScenario,
						[ state.currentScenario?.id ]: {
							...(
								state.currentScenario[ state.currentScenario?.id ] || {}
							),
							...(
								action.item || {}
							),
						},
					},
				};

			case 'HARD_SET_CURRENT_GATEWAY':
				if ( action.item ) {
					state.currentGateway[ action.item ] = action.value;
				}

				return {
					...state,
				};
			case 'HARD_SET_CURRENT_GATEWAY_SPECIFIC':
				if ( action.item && state.currentGateway?.gateway ) {
					state.currentGateway[ state.currentGateway?.gateway ] = {};
					state.currentGateway[ state.currentGateway?.gateway ][ action.item ] = action.value;
				}

				return {
					...state,
				};
		}
		return state;
	},
	actions,
	selectors,
} );

register( store );