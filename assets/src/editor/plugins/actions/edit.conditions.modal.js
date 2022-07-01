import EditConditions from './edit.conditions';
import { useCurrentAction, useUpdateCurrentActionMeta } from './hooks';

const { __ } = wp.i18n;
const { ActionModal } = JetFBComponents;

const { useRequestEvents } = JetFBHooks;

const { useDispatch, useSelect } = wp.data;

function EditConditionsModal() {
	const isConditionalModal = useSelect( select => select( 'jet-forms/actions' ).isConditionalModal() );

	const { clearCurrent } = useDispatch( 'jet-forms/actions', [] );
	const updateAction = useUpdateCurrentActionMeta();
	const { currentAction } = useCurrentAction();
	const provideEvents = useRequestEvents();

	if ( ! isConditionalModal ) {
		return null;
	}

	const classNames = [ 'width-60' ];

	if ( 1 !== provideEvents.length ) {
		classNames.push( 'without-margin' );
	}

	return <ActionModal
		classNames={ classNames }
		title={ __( 'Edit Action Conditions & Events', 'jet-form-builder' ) }
		onRequestClose={ clearCurrent }
		onCancelClick={ clearCurrent }
		onUpdateClick={ () => {
			updateAction( { ...currentAction } );
			clearCurrent();
		} }
	>
		<EditConditions />
	</ActionModal>;
}

export default EditConditionsModal;