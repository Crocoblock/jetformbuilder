/* eslint-disable import/no-extraneous-dependencies */
import { STORE_NAME } from '../../store';
import { __ } from '@wordpress/i18n';
import { useDispatch, useSelect } from '@wordpress/data';
import {
	Button,
} from '@wordpress/components';
import { plus } from '@wordpress/icons';
import AddActionModal from './AddActionModal';

function AddActionButton() {
	const {
		      showActionsInserterModal,
	      } = useDispatch( STORE_NAME );

	const showModal = useSelect( select => (
		select( STORE_NAME ).isShowActionsInserterModal()
	), [] );

	return <>
		<Button
			isPrimary
			onClick={ () => showActionsInserterModal( true ) }
			icon={ plus }
		>
			{ __( 'New Action', 'jet-form-builder' ) }
		</Button>
		{ showModal && <AddActionModal/> }
	</>;
}

// backward compatibility
window.JetFBComponents                 = window?.JetFBComponents ?? {};
window.JetFBComponents.AddActionButton = AddActionButton;

export default AddActionButton;