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
			help={ __( 'Minimum number of options that must be selected. Use 0 for no minimum.', 'jet-form-builder' ) }
			min={ 0 }
			step={ 1 }
			value={ minimum }
			onChange={ value => {
				const min = limitValue( value );
				setAttributes( {
					min_selections: min,
					max_selections: maximum ? Math.max( maximum, min ) : 0,
				} );
			} }
		/>
		<TextControl
			type="number"
			label={ __( 'Maximum selections', 'jet-form-builder' ) }
			help={ __( 'Maximum number of options that can be selected. Use 0 for no limit.', 'jet-form-builder' ) }
			min={ 0 }
			step={ 1 }
			value={ maximum }
			onChange={ value => {
				const max = limitValue( value );
				setAttributes( {
					max_selections: max,
					min_selections: max ? Math.min( minimum, max ) : minimum,
				} );
			} }
		/>
	</div>;
}

export function SelectionLimitsValidationControls( { attributes } ) {
	const { useIsAdvancedValidation } = JetFBHooks;
	const { ValidationBlockMessage, ValidationToggleGroup } = JetFBComponents;
	const isAdvanced = useIsAdvancedValidation();
	const enabled = attributes.multiple ?? attributes.allow_multiple ?? true;

	if ( !enabled || ( !attributes.min_selections && !attributes.max_selections ) ) {
		return null;
	}

	return <PanelBody title={ __( 'Validation', 'jet-form-builder' ) }>
		<ValidationToggleGroup/>
		{ isAdvanced && <>
			{ attributes.min_selections > 0 && <ValidationBlockMessage name="min_selections"/> }
			{ attributes.max_selections > 0 && <ValidationBlockMessage name="max_selections"/> }
		</> }
	</PanelBody>;
}
