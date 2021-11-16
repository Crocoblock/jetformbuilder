const { createReduxStore, register } = wp.data;

const DEFAULT_STATE = {
	currentRequest: {
		id: - 1,
	},
	currentGateway: {},
};

const actions = {
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
};

const selectors = {
	getCurrentRequestId( state ) {
		return state.currentRequest.id;
	},
	getCurrentRequest( state ) {
		return state.currentRequest;
	},
	getGateway( state ) {
		return state.currentGateway;
	},
	getGatewaySpecific( state ) {
		return state.currentGateway[ state.currentGateway?.gateway ] || {};
	},
};

register( createReduxStore( 'jet-forms/gateways', {
	reducer( state = DEFAULT_STATE, action ) {
		switch ( action.type ) {
			case 'SET_CURRENT_REQUEST':
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
							...( state.currentGateway[ key ] || {} ),
							...value,
						},
					},
				};
		}
		return state;
	},
	actions,
	selectors,
} ) );
