import PresetRender from "./preset-render";
import withPreset from "./preset-editor";

const {
	TextControl,
	SelectControl,
	Modal
} = wp.components;

const {
	useState,
	useEffect
} = wp.element;

function DynamicPreset( {
							value,
							isSaveAction,
							onSavePreset,
							onUnMount,
							parseValue,
							excludeOptions,
							isCurrentFieldVisible,
							isVisible,
						} ) {

	const [stateValue, setValue] = useState( () => parseValue( value ) );

	const onChangeValue = ( newValue, name ) => {
		setValue( prev => ( { ...prev, [ name ]: newValue } ) );
	}

	useEffect( () => {
		if ( true === isSaveAction ) {
			if ( onSavePreset ) {
				onSavePreset( JSON.stringify( stateValue ) );
			}
			onUnMount();

		} else if ( false === isSaveAction ) {
			onUnMount();
		}
	}, [isSaveAction] );

	return <>
		{ window.JetFormEditorData.presetConfig.global_fields.map( ( data, index ) => <PresetRender.GlobalField
			value={ stateValue }
			index={ index }
			data={ data }
			excludeOptions={ excludeOptions }
			onChangeValue={ onChangeValue }
			isVisible={ isVisible }
		/> ) }

		{ window.JetFormEditorData.presetConfig.map_fields.map( ( data, index ) => <PresetRender.MapField
				currentState={ stateValue }
				value={ stateValue[ 'current_field_' + data.name ] }
				index={ index }
				data={ data }
				onChangeValue={ onChangeValue }
				isCurrentFieldVisible={ isCurrentFieldVisible }
		/> ) }
	</>;
}

export default withPreset( DynamicPreset );