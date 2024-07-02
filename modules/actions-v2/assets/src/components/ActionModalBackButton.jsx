import { chevronLeftSmall, chevronRightSmall } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import {
	PopoverStandard,
	useTriggerPopover,
} from 'jet-form-builder-components';
import { useDispatch, useSelect } from '@wordpress/data';
import useLoopedAction from '../hooks/useLoopedAction';
import useActionsEdit from '../hooks/useActionsEdit';
import { STORE_NAME } from '../store';

const isRTL = document.body.classList.contains( 'rtl' );

function ActionModalBackButton() {
	const { deleteAction } = useActionsEdit();
	const { index }        = useLoopedAction();

	const {
		      ref,
		      setShowPopover,
		      showPopover,
		      popoverProps,
	      } = useTriggerPopover();

	const { showActionsInserterModal } = useDispatch( STORE_NAME );

	const canBack = useSelect( select => (
		'inserter' === select( STORE_NAME ).getOpenScenario()
	), [] );

	return canBack && <>
		<Button
			ref={ ref }
			variant="tertiary"
			icon={ isRTL ? chevronRightSmall : chevronLeftSmall }
			onClick={ () => setShowPopover( prev => !prev ) }
		>
			{ __( 'Back', 'jet-form-builder' ) }
		</Button>
		{ showPopover && <PopoverStandard
			placement="bottom"
			noArrow={ false }
			{ ...popoverProps }
		>
			<span>
				{ __(
					'Are you sure? All your changes will be lost.',
					'jet-form-builder',
				) }
			</span>
			&nbsp;
			<Button
				isLink
				isDestructive
				onClick={ () => {
					deleteAction( index );
					showActionsInserterModal( true );
				} }
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
window.JetFBComponents                       = window?.JetFBComponents ?? {};
window.JetFBComponents.ActionModalBackButton = ActionModalBackButton;

export default ActionModalBackButton;