import useEvents from './useEvents';

const { useSelect } = wp.data;

function useRequestEvents() {
	const currentAction = useSelect(
		select => select( 'jet-forms/actions' ).getCurrentAction(),
	);

	return useEvents( currentAction );
}

export default useRequestEvents;