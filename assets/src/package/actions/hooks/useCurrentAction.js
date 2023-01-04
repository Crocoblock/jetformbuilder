const {
	      useSelect,
	      useDispatch,
      } = wp.data;

function useCurrentAction() {
	const [ currentAction, currentSettings ] = useSelect( select => {
		const state    = select( 'jet-forms/actions' ).getCurrentAction();
		const settings = select( 'jet-forms/actions' ).getCurrentSettings();

		return [ state, settings ];
	} );

	const {
		      updateCurrentSettings: updateSettings,
	      } = useDispatch( 'jet-forms/actions' );

	return { currentAction, currentSettings, updateSettings };
}

export default useCurrentAction;