import useSelectPostMeta from '../../hooks/useSelectPostMeta';

const { useSelect } = wp.data;

function useEventsFromGateways() {
	const gateways          = useSelectPostMeta( '_jf_gateways' );
	const { scenario = {} } = gateways[ gateways?.gateway ] ?? {};

	return useSelect(
		select => {
			const eventsObjects = (
				select( 'jet-forms/events' ).getGatewayTypes()
			);

			const events = [];

			for ( const event of eventsObjects ) {
				const correctGateway  = event.gateway
				                        ? event.gateway === gateways.gateway
				                        : true;
				const correctScenario = event.scenario
				                        ? event.scenario === scenario?.id
				                        : true;

				if ( correctGateway && correctScenario ) {
					events.push( event.value );
				}
			}

			return [ ...new Set( events ) ];
		},
		[ gateways?.gateway ],
	);
}

export default useEventsFromGateways;