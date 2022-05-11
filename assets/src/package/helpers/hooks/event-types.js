import { selectParsedPostMeta } from './hooks-helper';

export const withRequestEvents = select => {
	const eventTypes = [
		...getEventsFromGateways( select ),
		...getEventsFromActions( select ),
	];

	return { eventTypes };
};

const getEventsFromGateways = ( select ) => {
	const gateways = selectParsedPostMeta( select, '_jf_gateways' );
	const { scenario = 'PAY_NOW' } = gateways[ gateways?.gateway ] ?? {};

	const eventsObjects = select( 'jet-forms/events' ).getGatewayTypes();
	const events = [];

	for ( const event of eventsObjects ) {
		const correctGateway = event.gateway ? event.gateway === gateways.gateway : true;
		const correctScenario = event.scenario ? event.scenario === scenario : true;

		if ( correctGateway && correctScenario ) {
			events.push( event.value );
		}
	}

	return [ ...new Set( events ) ];
};

export const getEventsFromActions = select => {
	const actions = selectParsedPostMeta( select, '_jf_actions' );
	const currentAction = select( 'jet-forms/actions' ).getCurrentAction();

	actions.splice( currentAction.index );

	const events = [];

	for ( const action of actions ) {
		const {
			[ action.type ]: current = {},
		} = action.settings;

		if ( ! current.eventTypes?.length ) {
			continue;
		}

		events.push( ...current.eventTypes );
	}

	return [ ...new Set( events ) ];
};