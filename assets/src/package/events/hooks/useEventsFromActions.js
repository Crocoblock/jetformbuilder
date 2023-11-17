import useSelectPostMeta from '../../hooks/useSelectPostMeta';

const {
	      useSelect,
      } = wp.data;

function useEventsFromActions( { index } ) {
	const actionsMeta = useSelectPostMeta( '_jf_actions' );
	const actionsMap  = useSelect(
		select => select( 'jet-forms/actions' ).getActionsMap(),
		[],
	);

	actionsMeta.splice( index, 1 );

	const events = [];

	for ( const action of actionsMeta ) {
		const callback = actionsMap?.[ action.type ]?.provideEvents;

		if ( 'function' !== typeof callback ) {
			continue;
		}

		const { [ action.type ]: current = {} } = action.settings;

		events.push( ...callback( current ) );
	}

	return [ ...new Set( events ) ];
}

export default useEventsFromActions;