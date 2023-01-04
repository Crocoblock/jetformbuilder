import useCurrentAction from './useCurrentAction';
import useActionsEdit from './useActionsEdit';

/**
 * Update action in meta
 * @returns {function(*=): void}
 */
export const useUpdateCurrentActionMeta = () => {
	const { currentAction }   = useCurrentAction();
	const { updateActionObj } = useActionsEdit();

	return newProps => {
		updateActionObj( currentAction.id, newProps );
	};
};

export default useUpdateCurrentActionMeta;