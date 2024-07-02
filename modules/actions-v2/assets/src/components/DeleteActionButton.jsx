import useLoopedAction from '../hooks/useLoopedAction';
import useActionsEdit from '../hooks/useActionsEdit';
import { Button } from '@wordpress/components';
import { trash } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import {
	useTriggerPopover,
	PopoverStandard,
} from 'jet-form-builder-components';

function DeleteActionButton() {
	const { index }        = useLoopedAction();
	const { deleteAction } = useActionsEdit();

	const {
		      showPopover,
		      setShowPopover,
		      ref,
		      popoverProps,
	      } = useTriggerPopover();

	return <>
		<Button
			ref={ ref }
			isDestructive
			size="small"
			icon={ trash }
			label={ __( 'Delete action', 'jet-form-builder' ) }
			onClick={ () => setShowPopover( prev => !prev ) }
		/>
		{ showPopover && <PopoverStandard
			placement="top-end"
			noArrow={ false }
			{ ...popoverProps }
		>
			<span>
				{ __( 'Delete this action?',
					'jet-form-builder' ) }
			</span>
			&nbsp;
			<Button
				isLink
				isDestructive
				onClick={ () => deleteAction( index ) }
			>
				{ __( 'Yes', 'jet-form-builder' ) }
			</Button>
			{ ' / ' }
			<Button
				isLink
				onClick={ () => setShowPopover( false ) }
			>
				{ __( 'No', 'jet-form-builder' ) }
			</Button>
		</PopoverStandard> }
	</>;
}

// backward compatibility
window.JetFBComponents                    = window?.JetFBComponents ?? {};
window.JetFBComponents.DeleteActionButton = DeleteActionButton;

export default DeleteActionButton;