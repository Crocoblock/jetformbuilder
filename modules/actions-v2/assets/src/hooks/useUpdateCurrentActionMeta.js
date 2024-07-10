import useCurrentAction from './useCurrentAction';
import useActionsEdit from './useActionsEdit';

/**
 * Update action in meta
 * @return {function(*=): void}
 */
export const useUpdateCurrentActionMeta = () => {
	const { currentAction }                   = useCurrentAction();
	const { updateActionObj, addActionProps } = useActionsEdit();

	// need to add action & save props
	if ( 0 > currentAction.id ) {
		return newProps => addActionProps( newProps );
	}

	return newProps => {
		updateActionObj( currentAction.id, newProps );
	};
};

// backward compatibility
window.JetFBHooks                            = window.JetFBHooks ?? {};
window.JetFBHooks.useUpdateCurrentActionMeta = useUpdateCurrentActionMeta;

export default useUpdateCurrentActionMeta;