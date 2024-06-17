import { useSelect } from '@wordpress/data';
import { __, sprintf } from '@wordpress/i18n';
import { Icon } from '@wordpress/icons';
import { styled } from '@linaria/react';

const {
	      ActionModal,
	      ActionModalHeaderSlotFill,
	      ActionModalBackButton,
	      ActionModalCloseButton,
      } = JetFBComponents;

const {
	      useCurrentAction,
	      useActionCallback,
	      useUpdateCurrentAction,
	      useUpdateCurrentActionMeta,
      } = JetFBHooks;

const ModalHeading = styled.div`
    gap: 1em;
`;

const ModalHeader = styled.div`
	background-color: #ffffffdb;
`;

function EditSettingsModal() {
	const ActionCallback                     = useActionCallback();
	const updateAction                       = useUpdateCurrentActionMeta();
	const { setTypeSettings, clearCurrent }  = useUpdateCurrentAction();
	const { currentAction, currentSettings } = useCurrentAction();

	const { isSettingsModal, actionType } = useSelect( select => (
			{
				isSettingsModal: select( 'jet-forms/actions' ).isSettingsModal(),
				actionType: select( 'jet-forms/actions' ).
					getAction( currentAction.type ),
			}
		),
		[ currentAction.type ],
	);

	if ( !isSettingsModal ) {
		return null;
	}

	return <ActionModal
		size="large"
		__experimentalHideHeader
		onRequestClose={ clearCurrent }
		onCancelClick={ clearCurrent }
		onUpdateClick={ () => {
			updateAction( currentAction );
			clearCurrent();
		} }
	>
		<ModalHeader className="components-modal__header">
			<ModalHeading
				className="components-modal__header-heading-container"
			>
				{ actionType.icon && <Icon icon={ actionType.icon }/> }
				<h1 className="components-modal__header-heading">
					{ sprintf(
						__( 'Edit %s', 'jet-form-builder' ),
						actionType.label,
					) }
				</h1>
				<ActionModalHeaderSlotFill.Slot/>
			</ModalHeading>
			<ActionModalBackButton/>
			<ActionModalCloseButton/>
		</ModalHeader>
		<div style={ { height: '40px' } }/>
		{ ActionCallback && <ActionCallback
			settings={ currentSettings }
			actionId={ currentAction.id }
			onChange={ settings => setTypeSettings( settings ) }
		/> }
	</ActionModal>;
}

export default EditSettingsModal;