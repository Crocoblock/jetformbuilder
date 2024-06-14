import useLoopedAction from '../hooks/useLoopedAction';
import useActionsEdit from '../hooks/useActionsEdit';
import { useSelect, useDispatch } from '@wordpress/data';
import { edit } from '@wordpress/icons';
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { styled } from '@linaria/react';

const WideButton = styled( Button )`
    width: 100%;
	
	&& {
        white-space: normal;
    }
`;

function ActionTitle() {
	const { deleteAction } = useActionsEdit();

	const { openActionSettings } = useDispatch( 'jet-forms/actions' );

	const { action, index } = useLoopedAction();
	const actionFromList    = useSelect( select => (
			select( 'jet-forms/actions' ).getAction( action.type )
		),
		[],
	);

	return Boolean( actionFromList )
	       ? <WideButton
		       variant="secondary"
		       onClick={ () => openActionSettings( { item: action, index } ) }
		       icon={ edit }
	       >
		       { actionFromList.label }
	       </WideButton>
	       : <WideButton
		       isDestructive
		       variant="secondary"
		       onClick={ () => deleteAction( index ) }
	       >
		       { __( 'Action is not registered. Delete', 'jet-form-builder' ) }
	       </WideButton>;
}

export default ActionTitle;