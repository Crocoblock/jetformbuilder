const {
	      ActionModal,
      } = JetFBComponents;

const {
	      useCurrentAction,
	      useActionCallback,
	      useUpdateCurrentAction,
	      useUpdateCurrentActionMeta,
      } = JetFBHooks;

const {
	      useSelect,
      } = wp.data;

const {
	      __,
      } = wp.i18n;

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
		title={ __( 'Edit Action', 'jet-form-builder' ) }
		onRequestClose={ clearCurrent }
		onCancelClick={ clearCurrent }
		onUpdateClick={ () => {
			updateAction( currentAction );
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