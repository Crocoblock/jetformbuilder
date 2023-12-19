import useDefaultEvents from './useDefaultEvents';
import useEventsFromGateways from './useEventsFromGateways';
import useEventsFromActions from './useEventsFromActions';
import useDynamicEvents from './useDynamicEvents';

const { useSelect } = wp.data;

function useEvents( action ) {
	const list = [
		...useDefaultEvents( action ),
		...useEventsFromGateways( action ),
		...useEventsFromActions( action ),
		...useDynamicEvents( action ),
	];

	return useSelect(
		select => select( 'jet-forms/events' ).filterList(
			action.type,
			list,
		),
	);
}

export default useEvents;