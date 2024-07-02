import useLoopedAction from '../hooks/useLoopedAction';
import useActionsEdit from '../hooks/useActionsEdit';
import { Button } from '@wordpress/components';
import { seen, unseen } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';

function ToggleActionExecutionButton() {
	const { action } = useLoopedAction();

	const isExecute = (
		action.is_execute ?? true
	);

	const { toggleExecute } = useActionsEdit();

	return <Button
		size="small"
		icon={ isExecute ? unseen : seen }
		label={ isExecute
		        ? __( 'Turn off', 'jet-form-builder' )
		        : __( 'Turn on', 'jet-form-builder' ) }
		onClick={ () => toggleExecute( action ) }
	/>;
}

// backward compatibility
window.JetFBComponents                             = window?.JetFBComponents ??
	{};
window.JetFBComponents.ToggleActionExecutionButton = ToggleActionExecutionButton;

export default ToggleActionExecutionButton;