import { close } from '@wordpress/icons';
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import useUpdateCurrentAction from '../hooks/useUpdateCurrentAction';

function ActionModalCloseButton() {
	const { clearCurrent } = useUpdateCurrentAction();

	return <>
		<Button
			icon={ close }
			onClick={ () => clearCurrent() }
			label={ __( 'Close', 'jet-form-builder' ) }
		/>
	</>;
}

// backward compatibility
window.JetFBComponents                        = window?.JetFBComponents ?? {};
window.JetFBComponents.ActionModalCloseButton = ActionModalCloseButton;

export default ActionModalCloseButton;