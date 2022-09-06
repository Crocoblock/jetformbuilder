const {
	      useSelect,
	      useDispatch,
      } = wp.data;

function useCurrentAction() {
	const settings = useSelect( ( select ) => {
		return select( 'jet-forms/actions' ).getCurrentSettings();
	} );

	const {
		      updateCurrentSettings: updateSettings,
	      } = useDispatch( 'jet-forms/actions', [ settings ] );

	return [ settings, updateSettings ];
}

export default useCurrentAction;