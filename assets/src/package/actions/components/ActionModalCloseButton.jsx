import { close } from '@wordpress/icons';
import { Button } from '@wordpress/components';
import { useContext } from '@wordpress/element';
import ActionModalContext from '../../action-modal/context/ActionModalContext';
import { __ } from '@wordpress/i18n';

function ActionModalCloseButton() {
	const { onRequestClose } = useContext( ActionModalContext );

	return <>
		<Button
			icon={ close }
			onClick={ onRequestClose }
			label={ __( 'Close', 'jet-form-builder' ) }
		/>
	</>;
}

export default ActionModalCloseButton;