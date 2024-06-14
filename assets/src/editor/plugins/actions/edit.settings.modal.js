import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

const {
	      ActionModal,
	      ActionModalHeaderSlotFill,
      } = JetFBComponents;

const {
	      useCurrentAction,
	      useActionCallback,
	      useUpdateCurrentAction,
	      useUpdateCurrentActionMeta,
      } = JetFBHooks;

function EditSettingsModal() {
	const isSettingsModal = useSelect(
		select => select( 'jet-forms/actions' ).isSettingsModal(),
		[],
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
		title={ <ActionModalHeaderSlotFill.Slot>
			{ fills => Boolean( fills.length )
			           ? fills
			           : __( 'Edit Action', 'jet-form-builder' )
			}
		</ActionModalHeaderSlotFill.Slot> }
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