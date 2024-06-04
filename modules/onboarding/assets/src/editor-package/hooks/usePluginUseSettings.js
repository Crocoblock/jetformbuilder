import { useDispatch, useSelect } from '@wordpress/data';
import { store } from '../useFormStore/constants';

/**
 * @returns {[Object, Function]}
 */
function usePluginUseSettings() {
	const { updateSettings } = useDispatch( store );

	const settings = useSelect( select => (
		select( store ).getSettings()
	), [] );

	return [ settings, updateSettings ];
}

export default usePluginUseSettings;