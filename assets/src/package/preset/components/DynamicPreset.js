import withPreset from './withPreset';
import GlobalFieldPreset from './GlobalFieldPreset';
import MapFieldPreset from './MapFieldPreset';
import ControlPresetRestrictionContext
	from '../context/ControlPresetRestrictionContext';
import { useContext } from '@wordpress/element';
import { ToggleControl, Flex } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

let DynamicPreset = function ( {
	value,
	onChange,
	parseValue,
	excludeOptions,
	isCurrentFieldVisible,
	isVisible,
} ) {

	const position   = 'dynamic';
	const stateValue = parseValue( value );

	const restrictionContext = useContext( ControlPresetRestrictionContext );

	const onChangeValue = ( newValue, name ) => {
		onChange( () => JSON.stringify(
			{ ...stateValue, [ name ]: newValue },
		) );
	};

	return <Flex direction="column" gap={ 4 }>
		{ window.JetFormEditorData.presetConfig.global_fields.map(
			( data, index ) => <GlobalFieldPreset
				key={ `current_field_${ data.name }_${ index }` }
				value={ stateValue }
				index={ index }
				data={ data }
				excludeOptions={ excludeOptions }
				onChangeValue={ onChangeValue }
				isVisible={ isVisible }
				position={ position }
			/> ) }

		{ window.JetFormEditorData.presetConfig.map_fields.map(
			( data, index ) => <MapFieldPreset
				key={ `current_field_${ data.name }_${ index }` }
				currentState={ stateValue }
				value={ stateValue[ 'current_field_' + data.name ] }
				index={ index }
				data={ data }
				onChangeValue={ onChangeValue }
				isCurrentFieldVisible={ isCurrentFieldVisible }
				position={ position }
			/> ) }
		{ restrictionContext?.show && <ToggleControl
			label={ __( 'Restrict access', 'jet-form-builder' ) }
			help={ (
				       stateValue.restricted ?? true
			       ) ? __(
				`Will set default value from preset only for users 
who allowed to edit this value`,
				'jet-form-builder',
			) : __(
				`Always set default value from preset. Make sure it 
can't be accidentally changed from form Actions`,
				'jet-form-builder',
			) }
			checked={ stateValue.restricted ?? true }
			onChange={ restricted => onChange( prev => JSON.stringify(
				{
					...prev,
					restricted: restricted ? undefined : restricted,
				},
			) ) }
		/> }
	</Flex>;
};

DynamicPreset = withPreset( DynamicPreset );

export default DynamicPreset;