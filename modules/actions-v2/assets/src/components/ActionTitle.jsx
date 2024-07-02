import useLoopedAction from '../hooks/useLoopedAction';
import useActionsEdit from '../hooks/useActionsEdit';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { styled } from '@linaria/react';
import { STORE_NAME } from '../store';

const ActionLabel = styled.span`
    font-size: 13px;
    line-height: 1.4;
`;

function ActionTitle() {
	const { deleteAction } = useActionsEdit();

	const { action, index } = useLoopedAction();
	const actionFromList    = useSelect( select => (
			select( STORE_NAME ).getAction( action.type )
		),
		[],
	);

	return Boolean( actionFromList )
	       ? <ActionLabel>
		       { actionFromList.label }
	       </ActionLabel>
	       : <WideButton
		       isDestructive
		       variant="secondary"
		       onClick={ () => deleteAction( index ) }
	       >
		       { __( 'Action is not registered. Delete', 'jet-form-builder' ) }
	       </WideButton>;
}

// backward compatibility
window.JetFBComponents             = window?.JetFBComponents ?? {};
window.JetFBComponents.ActionTitle = ActionTitle;

export default ActionTitle;