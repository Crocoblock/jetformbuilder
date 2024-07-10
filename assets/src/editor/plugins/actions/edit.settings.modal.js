import { useSelect, useDispatch } from '@wordpress/data';
import { __, sprintf } from '@wordpress/i18n';
import { Button, Flex } from '@wordpress/components';
import { IconText, StickyModalActions } from 'jet-form-builder-components';
import { useActionErrors } from 'jet-form-builder-actions';
/* eslint-disable import/no-extraneous-dependencies */
import { Icon } from '@wordpress/icons';
import { styled } from '@linaria/react';
/* eslint-enable import/no-extraneous-dependencies */

const {
	      ActionModal,
	      ActionModalHeaderSlotFill,
	      ActionModalFooterSlotFill,
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

// eslint-disable-next-line max-lines-per-function
function EditSettingsModal() {
	const ActionCallback                     = useActionCallback();
	const updateAction                       = useUpdateCurrentActionMeta();
	const { setTypeSettings, clearCurrent }  = useUpdateCurrentAction();
	const { currentAction, currentSettings } = useCurrentAction();

	const { editMeta } = useDispatch( 'jet-forms/actions' );

	const { isSettingsModal, actionType, isShowErrorNotice } = useSelect(
		select => (
			{
				isSettingsModal: select( 'jet-forms/actions' ).
					isSettingsModal(),
				actionType: select( 'jet-forms/actions' ).
					getAction( currentAction.type ),
				isShowErrorNotice: select( 'jet-forms/actions' ).
					getErrorVisibility(),
			}
		),
		[ currentAction.type ],
	);

	const errors = useActionErrors( isSettingsModal ? currentAction : {} );

	if ( !isSettingsModal ) {
		return null;
	}

	const showErrors = (
		Boolean( errors.length ) && isShowErrorNotice
	);

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
						// translators: %s - action type label
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
		<ActionModalFooterSlotFill.Fill>
			{ ( { updateClick, cancelClick } ) => <StickyModalActions
				justify="space-between"
			>
				<Flex
					justify="flex-start"
					gap={ 3 }
					style={ { flex: 1 } }
				>
					<Button
						isPrimary
						onClick={ () => {
							if ( !errors?.length ) {
								updateClick();

								return;
							}
							editMeta( { errorsShow: true } );
						} }
					>
						{ __( 'Update', 'jet-form-builder' ) }
					</Button>
					<Button
						isSecondary
						onClick={ cancelClick }
					>
						{ __( 'Cancel', 'jet-form-builder' ) }
					</Button>
					{ showErrors && <IconText>
						{ __(
							'You have errors in some fields',
							'jet-form-builder',
						) }
					</IconText> }
				</Flex>
				{ showErrors && <Button
					variant="tertiary"
					onClick={ updateClick }
				>
					{ __( 'Update anyway', 'jet-form-builder' ) }
				</Button> }
			</StickyModalActions> }
		</ActionModalFooterSlotFill.Fill>
	</ActionModal>;
}

export default EditSettingsModal;