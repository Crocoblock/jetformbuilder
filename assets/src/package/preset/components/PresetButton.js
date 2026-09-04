import DynamicPreset from './DynamicPreset';
import ControlPresetRestrictionContext
	from '../context/ControlPresetRestrictionContext';
import {
	StickyModalActions,
	ModalFooterStyle,
} from 'jet-form-builder-components';
import { Button, Modal } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useContext, useState } from '@wordpress/element';

// `showRestriction` controls the "Restrict access" toggle inside the modal.
//
// It defaults to true so every place that edits a preset can opt that preset
// out of the permission check: presets in validation rules, date limits,
// conditional blocks, action conditions and dynamic value all read data
// through the same permission check as a field's default value, and without
// the toggle a form author has no way to mark that data as public
// (issues-tracker #20359).
//
// An outer ControlPresetRestrictionContext still wins when it explicitly sets
// `show`, so a consumer can hide the toggle where the opt-out is meaningless.
// eslint-disable-next-line max-lines-per-function
function PresetButton( {
	value,
	onChange,
	title,
	showRestriction = true,
} ) {

	const [ showModal, setShowModal ]   = useState( false );
	const [ stateValue, setStateValue ] = useState( value );

	const outerContext = useContext( ControlPresetRestrictionContext );

	const restrictionContext = {
		show: outerContext?.show ?? showRestriction,
	};

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
			<ControlPresetRestrictionContext.Provider
				value={ restrictionContext }
			>
				<DynamicPreset
					key={ 'dynamic_key_preset' }
					value={ stateValue }
					onChange={ setStateValue }
				/>
			</ControlPresetRestrictionContext.Provider>
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
