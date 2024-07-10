import ActionListItemContext from '../context/ActionListItemContext';
import { useContext } from '@wordpress/element';

/**
 * @return {{action: Object, index: number}}
 */
function useLoopedAction() {
	return useContext( ActionListItemContext );
}

// backward compatibility
window.JetFBHooks                 = window.JetFBHooks ?? {};
window.JetFBHooks.useLoopedAction = useLoopedAction;

export default useLoopedAction;