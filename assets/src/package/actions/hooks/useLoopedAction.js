import ActionListItemContext from '../context/ActionListItemContext';

const {
	      useContext,
      } = wp.element;

function useLoopedAction() {
	return useContext( ActionListItemContext );
}

export default useLoopedAction;