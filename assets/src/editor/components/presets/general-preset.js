import PresetRender from "./preset-render";
import withPreset from "./preset-editor";

function GeneralPreset( {
							value,
							availableFields,
							isMapFieldVisible,
							isVisible,
							onChange,
						} ) {

	const onChangeValue = ( newValue, name ) => {
		onChange( { ...value, [ name ]: newValue } );
	}

	return <>
		{ window.JetFormEditorData.presetConfig.global_fields.map( ( data, index ) => <PresetRender.GlobalField
			value={ value }
			index={ index }
			data={ data }
			options={ data.options }
			onChangeValue={ onChangeValue }
			isVisible={ isVisible }
		/> ) }

		{ value.from && (
			availableFields.map( ( field, index ) => <PresetRender.AvailableMapField
				fieldsMap={ value.fields_map }
				field={ field }
				index={ index }
				onChangeValue={ onChangeValue }
				isMapFieldVisible={ isMapFieldVisible }
				value={ value }
			/> )
		) }
	</>;
}

export default withPreset( GeneralPreset );