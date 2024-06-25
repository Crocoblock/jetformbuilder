import DynamicPreset from './DynamicPreset';
import {
	StickyModalActions,
	ModalFooterStyle,
} from 'jet-form-builder-components';
import { Button, Modal } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';

function PresetButton( {
	value,
	onChange,
	title,
} ) {

	const [ showModal, setShowModal ] = useState( false );
	const [ stateValue, setStateValue ] = useState( value );

	const updateClick = () => {
		onChange( stateValue );
		setShowModal( false );
	};

	const cancelClick = () => {
		setShowModal( false );
	};

	return <>
		<Button
			icon={ 'database' }
			variant="tertiary"
			isSmall
			className={ 'jet-fb-is-thick' }
			onClick={ () => setShowModal( true ) }
		/>
		{ showModal && <Modal
			size="medium"
			title={ title ?? __( 'Edit Preset', 'jet-form-builder' ) }
			onRequestClose={ () => setShowModal( false ) }
			className={ ModalFooterStyle }
		>
			<DynamicPreset
				key={ 'dynamic_key_preset' }
				value={ stateValue }
				onChange={ setStateValue }
			/>
			<StickyModalActions>
				<Button
					isPrimary
					onClick={ updateClick }
				>
					{ __( 'Update', 'jet-form-builder' ) }
				</Button>
				<Button
					isSecondary
					onClick={ cancelClick }
				>
					{ __( 'Cancel', 'jet-form-builder' ) }
				</Button>
			</StickyModalActions>
		</Modal> }
	</>;
}

export default PresetButton;