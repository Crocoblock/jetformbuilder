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
							...(
								state.currentGateway[ key ] || {}
							),
							...value,
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
} ) );
