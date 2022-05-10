import { selectParsedPostMeta } from './hooks-helper';

export const withRequestEvents = select => {
	const actions = selectParsedPostMeta( select, '_jf_actions' );
	const currentAction = select( 'jet-forms/actions' ).getCurrentAction();

	actions.splice( currentAction.index );

	const eventTypes = [
		...getEventsFromActions( actions ),
		...getEventsFromGateways( select ),
	];

	return { eventTypes };
};

const getEventsFromGateways = select => {
	const gateways = selectParsedPostMeta( select, '_jf_gateways' );
	const { scenario = 'PAY_NOW' } = gateways[ gateways?.gateway ] ?? {};

	const events = select( 'jet-forms/gateways' ).getEventTypes();

	return events.filter( event => (
		event.gateway === gateways.gateway && event.scenario === scenario
	) );
};

export const getEventsFromActions = actions => {
	const events = [];

	for ( const action of actions ) {
		const {
			[ action.type ]: current = {},
		} = action.settings;

		if ( ! current.eventTypes ) {
			continue;
		}

		for ( const eventType of current.eventTypes ) {
			const index = events.findIndex( field => field.value === eventType.value );

			if ( - 1 !== index ) {
				continue;
			}

			events.push( {
				action_type: action.type,
				action_id: action.id,
				label: eventType?.label ?? eventType.value,
				title: eventType?.label ?? eventType.value,
				value: eventType.value,
				help: eventType.help,
			} );
		}
	}

	return events;
};