import { useDispatch, useSelect } from '@wordpress/data';

/**
 * @returns {[Object, Function]}
 */
function useSettings() {
	const { updateSettings } = useDispatch( 'jet-forms/use-form' );

	const settings = useSelect( select => (
		select( 'jet-forms/use-form' ).getSettings()
	), [] );

	return [ settings, updateSettings ];
}

export default useSettings;