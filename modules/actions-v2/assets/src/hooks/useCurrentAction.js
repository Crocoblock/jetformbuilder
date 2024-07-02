import { useSelect, useDispatch } from '@wordpress/data';
import { STORE_NAME } from '../store';

function useCurrentAction() {
	const [ currentAction, currentSettings ] = useSelect( select => {
		const state    = select( STORE_NAME ).getCurrentAction();
		const settings = select( STORE_NAME ).getCurrentSettings();

		return [ state, settings ];
	}, [] );

	const {
		      updateCurrentSettings: updateSettings,
	      } = useDispatch( STORE_NAME );

	return { currentAction, currentSettings, updateSettings };
}

// backward compatibility
window.JetFBHooks                  = window.JetFBHooks ?? {};
window.JetFBHooks.useCurrentAction = useCurrentAction;

export default useCurrentAction;