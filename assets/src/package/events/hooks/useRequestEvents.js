import useEventsFromActions from './useEventsFromActions';
import useEventsFromGateways from './useEventsFromGateways';
import useDefaultEvents from './useDefaultEvents';
import useDynamicEvents from './useDynamicEvents';

const { useSelect } = wp.data;

function useRequestEvents() {
	const currentAction = useSelect(
		select => select( 'jet-forms/actions' ).getCurrentAction(),
	);

	const list = [
		...useDefaultEvents( currentAction ),
		...useEventsFromGateways( currentAction ),
		...useEventsFromActions( currentAction ),
		...useDynamicEvents( currentAction ),
	];

	return useSelect(
		select => select( 'jet-forms/events' ).filterList(
			currentAction.type,
			list,
		),
	);
}

export default useRequestEvents;