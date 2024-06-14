import ActionListItemContext from '../context/ActionListItemContext';
import { useContext } from '@wordpress/element';

function useLoopedAction() {
	return useContext( ActionListItemContext );
}

export default useLoopedAction;