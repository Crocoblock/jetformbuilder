import { useSelectPostMeta } from './hooks-helper';

const { useSelect } = wp.data;

export const useRequestEvents = () => {
	const currentAction = useSelect(
		select => select( 'jet-forms/actions' ).getCurrentAction(),
	);

	const list = [
		...useDefaultEvents( currentAction ),
		...useEventsFromGateways( currentAction ),
		...useEventsFromActions( currentAction ),
	];

	return useSelect(
		select => select( 'jet-forms/events' ).filterList( currentAction.type, list ),
		[ currentAction.id ],
	);
};

const useDefaultEvents = () => {
	const eventsObjects = useSelect( select => select( 'jet-forms/events' ).getAlwaysTypes(), [] );
	const events = [];

	for ( const { value } of eventsObjects ) {
		events.push( value );
	}

	return [ ...new Set( events ) ];

};

const useEventsFromGateways = () => {
	const gateways = useSelectPostMeta( '_jf_gateways' );
	const { scenario = 'PAY_NOW' } = gateways[ gateways?.gateway ] ?? {};

	return useSelect(
		select => {
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
		},
		[ gateways?.gateway ],
	);
};

export const useEventsFromActions = ( { index } ) => {
	const actions = useSelectPostMeta( '_jf_actions' );

	actions.splice( index, 1 );

	const events = [];

	for ( const action of actions ) {
		const {
			[ action.type ]: current = {},
		} = action.settings;

		if ( ! current.provideEvents?.length ) {
			continue;
		}

		events.push( ...current.provideEvents );
	}

	return [ ...new Set( events ) ];
};