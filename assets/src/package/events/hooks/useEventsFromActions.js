import useSelectPostMeta from '../../hooks/useSelectPostMeta';

function useEventsFromActions( { index } ) {
	const actions = useSelectPostMeta( '_jf_actions' );

	actions.splice( index, 1 );

	const events = [];

	for ( const action of actions ) {
		const {
			      [ action.type ]: current = {},
		      } = action.settings;

		if ( !current.provideEvents?.length ) {
			continue;
		}

		events.push( ...current.provideEvents );
	}

	return [ ...new Set( events ) ];
}

export default useEventsFromActions;