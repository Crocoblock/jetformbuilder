import useCurrentAction from './useCurrentAction';
import { useDispatch } from '@wordpress/data';
import { STORE_NAME } from '../store';

/**
 * Update current meta in store (while editing it in modal)
 * @returns {{setCurrentAction, clearCurrent, setTypeSettings,
 *     updateCurrentConditions}}
 */
export const useUpdateCurrentAction = () => {
	const { currentAction } = useCurrentAction();

	const {
		      setCurrentAction,
		      clearCurrent,
		      updateCurrentConditions,
	      } = useDispatch( STORE_NAME );

	const setTypeSettings = settings => {
		setCurrentAction( {
			...currentAction,
			settings: {
				...currentAction.settings,
				[ currentAction.type ]: settings,
			},
		} );
	};

	return {
		setCurrentAction,
		setTypeSettings,
		clearCurrent,
		updateCurrentConditions,
	};
};

// backward compatibility
window.JetFBHooks                        = window.JetFBHooks ?? {};
window.JetFBHooks.useUpdateCurrentAction = useUpdateCurrentAction;

export default useUpdateCurrentAction;