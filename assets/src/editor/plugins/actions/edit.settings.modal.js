const {
	      ActionModal,
      } = JetFBComponents;
const {
	      useCurrentAction,
	      useActionCallback,
	      useUpdateCurrentAction,
	      useUpdateCurrentActionMeta,
      } = JetFBHooks;

const { useSelect } = wp.data;

function EditSettingsModal() {
	const isSettingsModal = useSelect(
		select => select( 'jet-forms/actions' ).isSettingsModal(),
	);

	const ActionCallback                     = useActionCallback();
	const updateAction                       = useUpdateCurrentActionMeta();
	const { setTypeSettings, clearCurrent }  = useUpdateCurrentAction();
	const { currentAction, currentSettings } = useCurrentAction();

	if ( !isSettingsModal ) {
		return null;
	}

	return <ActionModal
		classNames={ [ 'width-60' ] }
		title={ 'Edit Action' }
		onRequestClose={ clearCurrent }
		onCancelClick={ clearCurrent }
		onUpdateClick={ () => {
			updateAction( { settings: currentAction.settings } );
			clearCurrent();
		} }
	>
		{ ActionCallback && <ActionCallback
			settings={ currentSettings }
			actionId={ currentAction.id }
			onChange={ settings => setTypeSettings( settings ) }
		/> }
	</ActionModal>;
}

export default EditSettingsModal;