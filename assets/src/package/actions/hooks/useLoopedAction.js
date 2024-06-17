import ActionListItemContext from '../context/ActionListItemContext';
import { useContext } from '@wordpress/element';

/**
 * @returns {{ action: Object, index: Number }}
 */
function useLoopedAction() {
	return useContext( ActionListItemContext );
}

export default useLoopedAction;