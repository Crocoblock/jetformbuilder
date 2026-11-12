import { PanelBody, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

function limitValue( value ) {
	const number = Number( value );
	return Number.isFinite( number ) ? Math.max( 0, Math.floor( number ) ) : 0;
}

export default function SelectionLimitsControls( { attributes, setAttributes } ) {
	const minimum = attributes.min_selections ?? 0;
	const maximum = attributes.max_selections ?? 0;
	return <div className="jet-fb-selection-limits">
		<TextControl
			type="number"
			label={ __( 'Minimum selections', 'jet-form-builder' ) }
			help={ __( 'Minimum number of options when a selection is made. Use 0 for no minimum.', 'jet-form-builder' ) }
			min={ 0 }
			step={ 1 }
			value={ minimum }
			onChange={ value => setAttributes( { min_selections: limitValue( value ) } ) }
			onBlur={ () => {
				if ( maximum && minimum > maximum ) {
					setAttributes( { max_selections: minimum } );
				}
			} }
		/>
		<TextControl
			type="number"
			label={ __( 'Maximum selections', 'jet-form-builder' ) }
			help={ __( 'Maximum number of options that can be selected. Use 0 for no limit.', 'jet-form-builder' ) }
			min={ 0 }
			step={ 1 }
			value={ maximum }
			onChange={ value => setAttributes( { max_selections: limitValue( value ) } ) }
			onBlur={ () => {
				if ( maximum && minimum > maximum ) {
					setAttributes( { min_selections: maximum } );
				}
			} }
		/>
	</div>;
}

export function SelectionLimitsValidationControls( { attributes } ) {
	const { useIsAdvancedValidation } = JetFBHooks;
	const { ValidationBlockMessage, ValidationToggleGroup } = JetFBComponents;
	const isAdvanced = useIsAdvancedValidation();
	const enabled = attributes.multiple ?? attributes.allow_multiple ?? true;
	const hasLimits = enabled && ( attributes.min_selections > 0 || attributes.max_selections > 0 );
	const validationType = attributes.validation?.type;

	if ( !hasLimits && ( !validationType || validationType === 'inherit' ) ) {
		return null;
	}

	return <PanelBody title={ __( 'Validation', 'jet-form-builder' ) }>
		<ValidationToggleGroup/>
		{ isAdvanced && hasLimits && <>
			{ attributes.min_selections > 0 && <ValidationBlockMessage name="min_selections"/> }
			{ attributes.max_selections > 0 && <ValidationBlockMessage name="max_selections"/> }
		</> }
	</PanelBody>;
}
