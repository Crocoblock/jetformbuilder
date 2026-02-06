/**
 * Auto-Update Controls Component.
 *
 * Renders toggle and field selector for cascading/auto-update feature.
 * When enabled, this field's options will refresh when the selected "listen" field changes.
 *
 * @package JetFormBuilder
 */

const { SelectControl, ToggleControl } = wp.components;
const { __ } = wp.i18n;

import { AutoUpdateControlsSlot } from '../slot-fill';

/**
 * Get all form field names (for auto-update field selector).
 * Uses JetFormBuilder's built-in function to get fields from the current form.
 *
 * @return {Array} Array of { value, label } options.
 */
function getFormFieldsList() {
	// Use JetFormBuilder's global function to get form fields
	const getFormFieldsBlocks = window.JetFBActions?.getFormFieldsBlocks;

	if ( typeof getFormFieldsBlocks === 'function' ) {
		return getFormFieldsBlocks();
	}

	// Fallback to localized data (if available)
	return window.JetFormOptionFieldData?.form_fields ?? [];
}

/**
 * Auto-Update Controls Component.
 *
 * @param {Object}   props                Component props.
 * @param {Object}   props.attributes     Block attributes.
 * @param {Function} props.setAttributes  Set attributes function.
 * @param {boolean}  props.supportsUpdate Whether current generator supports auto-update.
 *
 * @return {JSX.Element|null} Auto-update controls or null.
 */
function AutoUpdateControls( { attributes, setAttributes, supportsUpdate } ) {
	const { auto_update, auto_update_field } = attributes;

	if ( ! supportsUpdate ) {
		return null;
	}

	const formFields = getFormFieldsList();

	return (
		<>
			<ToggleControl
				label={ __( 'Enable Auto Update', 'jet-form-builder' ) }
				help={ __(
					'Refresh this field\'s options when another field changes.',
					'jet-form-builder'
				) }
				checked={ !! auto_update }
				onChange={ ( value ) => setAttributes( { auto_update: value } ) }
			/>

			{ auto_update && (
				<SelectControl
					label={ __( 'Update when this field changes', 'jet-form-builder' ) }
					value={ auto_update_field || '' }
					onChange={ ( value ) => setAttributes( { auto_update_field: value } ) }
					options={ [
						{ value: '', label: __( '-- Select field --', 'jet-form-builder' ) },
						...formFields,
					] }
					help={ __(
						'Select the field that will trigger options refresh.',
						'jet-form-builder'
					) }
				/>
			) }

			<AutoUpdateControlsSlot
				fillProps={ { attributes, setAttributes } }
			/>
		</>
	);
}

export default AutoUpdateControls;
