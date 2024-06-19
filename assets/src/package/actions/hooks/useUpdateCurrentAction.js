import useCurrentAction from './useCurrentAction';

const {
	      useDispatch,
      } = wp.data;

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
	      } = useDispatch( 'jet-forms/actions', [] );

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

export default useUpdateCurrentAction;