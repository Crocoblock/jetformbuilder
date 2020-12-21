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
							isSaveAction,
							onSavePreset,
							onUnMount,
							parseValue,
							availableFields,
							excludeOptions
						} ) {

	const [stateValue, setValue] = useState( parseValue );

	const onChangeValue = ( newValue, name ) => {
		setValue( prev => ( { ...prev, [ name ]: newValue } ) );
	}

	useEffect( () => {
		if ( true === isSaveAction ) {
			const cloneItems = { ...stateValue };

			if ( onSavePreset ) {
				onSavePreset( JSON.stringify( cloneItems ) );
			}
			onUnMount();

		} else if ( false === isSaveAction ) {
			onUnMount();
		}
	}, [isSaveAction] );

	return ( <React.Fragment>
		{ window.JetFormEditorData.presetConfig.global_fields.map( ( data, index ) => <PresetRender.GlobalField
			value={ stateValue[ data.name ] }
			index={ index }
			data={ data }
			options={ excludeOptions( data.options ) }
			onChangeValue={ onChangeValue }
		/> ) }

		{ ( availableFields && stateValue.from ) && (
			availableFields.map( ( field, index ) => <PresetRender.AvailableMapField
				fieldsMap={ stateValue.fields_map }
				field={ field }
				index={ index }
			/> )
		) }

		{ ! Boolean( availableFields ) && ( window.JetFormEditorData.presetConfig.map_fields.map( ( data, index ) => <PresetRender.MapField
				value={ stateValue[ 'current_field_' + data.name ] }
				index={ index }
				data={ data }
				onChangeValue={ onChangeValue }
			/> )
		) }
	</React.Fragment> );
}

export default withPreset( DynamicPreset );