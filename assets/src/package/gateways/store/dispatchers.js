import constants from './constants';
import selectors from './selectors';

export default {
	[ constants.clearGateway ]: ( state ) => (
		{
			...state,
			currentGateway: {},
		}
	),
	[ constants.clearScenario ]: ( state ) => (
		{
			...state,
			currentScenario: {},
		}
	),
	[ constants.setScenario ]: ( state, action ) => (
		{
			...state,
			currentScenario: {
				...state.currentScenario,
				...(
					action.item || {}
				),
			},
		}
	),
	[ constants.setGateway ]: ( state, action ) => (
		{
			...state,
			currentGateway: {
				...state.currentGateway,
				...action.item,
			},
		}
	),
	[ constants.setGatewaySpecific ]: ( state, action ) => (
		{
			...state,
			currentGateway: {
				...state.currentGateway,
				[ state.currentGateway.gateway ]: {
					...selectors.getGatewaySpecific( state ),
					...action.item,
				},
			},
		}
	),
	[ constants.setGatewayInner ]: ( state, action ) => {
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
	},
	[ constants.setRequest ]: ( state, action ) => {
		const items = [ selectors.getGatewayId( state ), action.item?.id ].filter( value => value );
		action.item.id = items.join( '/' );

		return {
			...state,
			currentRequest: action.item,
		};
	},
	[ constants.setCurrentScenario ]: ( state, action ) => (
		{
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
		}
	),
	[ constants.hardSetGateway ]: ( state, action ) => {
		if ( action.item ) {
			state.currentGateway[ action.item ] = action.value;
		}

		return {
			...state,
		};
	},
	[ constants.hardSetGatewaySpecific ]: ( state, action ) => {
		if ( action.item && state.currentGateway?.gateway ) {
			state.currentGateway[ state.currentGateway?.gateway ] = {};
			state.currentGateway[ state.currentGateway?.gateway ][ action.item ] = action.value;
		}

		return {
			...state,
		};
	},
	[ constants.registerEventType ]: ( state, action ) => {
		const event = {
			...action.item,
			gateway: action.item?.gateway ?? state.currentGateway?.gateway,
			scenario: action.item?.scenario ?? state.currentScenario?.id,
		};

		state.eventTypes.push( event );

		return state;
	},
};